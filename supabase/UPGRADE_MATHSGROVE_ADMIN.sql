-- MATHSGROVE | STUDENT SETUP + PAPER BUILDER + REPORTING UPGRADE
-- One atomic transaction for an existing MathsGrove project whose initial
-- INSTALL_FRESH_MATHSGROVE.sql previously passed VERIFY_INSTALL.sql.
-- Do not run on a blank project; DO NOT repeat on a live project without a backup.
-- Review and test with adult pilot accounts before any real student data.
BEGIN;

-- ===== UPGRADE STAGE 1 : supabase/migrations/20261028_student_paper_builder.sql =====
-- MathsGrove student-selected paper settings and immutable paper question lists.
-- Run ONCE in the existing MathsGrove project after previous four initial migrations.
-- This file does NOT create users or change subscription/payment settings.

alter table public.attempts
 add column if not exists paper_mode text not null default 'practice'
 check(paper_mode in ('daily','weekly','mock','topic','practice'));
alter table public.attempts
 add column if not exists focus_topic text not null default ''
 check(length(focus_topic)<=140);
alter table public.attempts
 add column if not exists target_difficulty text not null default 'mixed'
 check(target_difficulty in ('mixed','foundation','standard','challenge'));
alter table public.attempts
 add column if not exists requested_count smallint not null default 3
 check(requested_count between 1 and 20);

create table if not exists public.paper_questions (
 attempt_id uuid not null references public.attempts(id) on delete cascade,
 question_id uuid not null references public.question_bank(id),
 position smallint not null check(position between 1 and 20),
 primary key(attempt_id,position),
 unique(attempt_id,question_id)
);
alter table public.paper_questions enable row level security;
revoke all on public.paper_questions from anon,authenticated;
grant select,insert on public.paper_questions to authenticated;

create or replace function private.verify_paper_question()
returns trigger language plpgsql set search_path='' as $$
declare a public.attempts%rowtype; q public.question_bank%rowtype;
begin
 select * into a from public.attempts where id=new.attempt_id;
 select * into q from public.question_bank where id=new.question_id;
 if a.id is null or q.id is null or a.status<>'draft'
 or a.qualification<>q.qualification or not q.active then
   raise exception 'Paper question does not match the student assessment';
 end if;
 return new;
end; $$;
drop trigger if exists verify_paper_question on public.paper_questions;
create trigger verify_paper_question before insert on public.paper_questions
for each row execute function private.verify_paper_question();

drop policy if exists paper_questions_select on public.paper_questions;
create policy paper_questions_select on public.paper_questions for select to authenticated
using(private.can_access_attempt(attempt_id));
drop policy if exists paper_questions_insert on public.paper_questions;
create policy paper_questions_insert on public.paper_questions for insert to authenticated
with check(private.is_editable_attempt(attempt_id));

-- Prevent answers for questions not in the attempt's frozen list, when one exists.
-- Legacy assessments without paper_questions keep working.
create or replace function private.check_answer()
returns trigger language plpgsql set search_path='' as $$
declare a public.attempts%rowtype; q public.question_bank%rowtype;
begin
 select * into a from public.attempts where id=new.attempt_id;
 select * into q from public.question_bank where id=new.question_id;
 if a.id is null or q.id is null or a.student_id<>new.student_id or
 q.qualification<>a.qualification or not q.active then
   raise exception 'Question does not belong to this student paper';
 end if;
 if exists(select 1 from public.paper_questions pq where pq.attempt_id=new.attempt_id) and
 not exists(select 1 from public.paper_questions pq where pq.attempt_id=new.attempt_id and pq.question_id=new.question_id) then
   raise exception 'Question not included in this assessment';
 end if;
 new.updated_at=now();
 return new;
end; $$;
-- Build a complete student paper in one transaction; no partial/orphan papers.
create or replace function public.create_student_paper(
 p_mode text,p_topic text,p_difficulty text,p_requested_count integer,p_questions uuid[]
) returns uuid language plpgsql security definer set search_path='' as $$
declare
 v_user uuid := (select auth.uid());
 v_org uuid;
 v_qual text;
 v_attempt uuid;
 v_question uuid;
 v_i integer;
begin
 if v_user is null then raise exception 'Authentication required'; end if;
 if p_mode not in ('daily','weekly','mock','topic') or
    p_difficulty not in ('mixed','foundation','standard','challenge') or
    coalesce(length(p_topic),0)>140 or
    p_requested_count not between 1 and 20 then
   raise exception 'Invalid student paper options';
 end if;
 if p_questions is null or array_length(p_questions,1) is null or
    array_length(p_questions,1) not between 1 and 20 or
    array_length(p_questions,1)>p_requested_count or
    (select count(distinct q) from unnest(p_questions) as q)<>array_length(p_questions,1) then
   raise exception 'Select valid, distinct questions';
 end if;
 select m.org_id into v_org from public.memberships m
 where m.user_id=v_user and m.member_role='student' limit 1;
 if v_org is null then raise exception 'Verified student membership required'; end if;
 select p.qualification into v_qual from public.student_preferences p where p.student_id=v_user;
 if v_qual is null then raise exception 'Save your exam pathway first'; end if;
 for v_i in 1..array_length(p_questions,1) loop
  v_question:=p_questions[v_i];
  if not exists(select 1 from public.question_bank q where
    q.id=v_question and q.qualification=v_qual and q.active) then
    raise exception 'Unavailable or mismatched paper question';
  end if;
 end loop;
 insert into public.attempts(org_id,student_id,qualification,status,paper_mode,focus_topic,target_difficulty,requested_count)
 values(v_org,v_user,v_qual,'draft',p_mode,coalesce(p_topic,''),p_difficulty,p_requested_count)
 returning id into v_attempt;
 for v_i in 1..array_length(p_questions,1) loop
  insert into public.paper_questions(attempt_id,question_id,position)
  values(v_attempt,p_questions[v_i],v_i);
 end loop;
 return v_attempt;
end; $$;
revoke all on function public.create_student_paper(text,text,text,integer,uuid[]) from public,anon;
grant execute on function public.create_student_paper(text,text,text,integer,uuid[]) to authenticated;



-- Security note: paper_questions are assigned at creation and must not be edited
-- after an attempt is submitted. Questions are still an ORIGINAL PILOT BANK,
-- not full board-aligned past-paper coverage or automated adaptive marking.


-- ===== UPGRADE STAGE 2 : supabase/migrations/20261028_entitlements_and_report_narrative.sql =====
-- MathsGrove phase 2: private learning entitlements and evidence-based reporting.
-- Run only AFTER the student-paper-builder migration in the existing project.
-- No Stripe or checkout: tutoring companies handle billing, staff allocate access.

create table if not exists public.student_entitlements(
 student_id uuid primary key references public.profiles(id) on delete cascade,
 org_id uuid not null references public.organisations(id),
 tier text not null check(tier in ('weekly','daily','exam')),
 signature_credits integer not null default 0 check(signature_credits between 0 and 20),
 starts_at timestamptz not null default now(),
 ends_at timestamptz,
 updated_by uuid references public.profiles(id),
 updated_at timestamptz not null default now(),
 check(ends_at is null or ends_at>starts_at)
);
-- Only the atomic server-side paper builder may write a frozen question list.
-- Stop browser clients extending a selected paper after creation.
revoke insert on public.paper_questions from authenticated;
drop policy if exists paper_questions_insert on public.paper_questions;
alter table public.student_entitlements enable row level security;
revoke all on public.student_entitlements from anon,authenticated;
grant select on public.student_entitlements to authenticated;
drop policy if exists student_entitlements_read on public.student_entitlements;
create policy student_entitlements_read on public.student_entitlements for select to authenticated
using(student_id=(select auth.uid()) or private.is_staff(org_id));

create table if not exists public.review_summaries(
 attempt_id uuid primary key references public.attempts(id) on delete cascade,
 reviewer_id uuid not null references public.profiles(id),
 overview text not null default '' check(length(overview)<=3000),
 strengths text not null default '' check(length(strengths)<=3000),
 gaps text not null default '' check(length(gaps)<=3000),
 next_steps text not null default '' check(length(next_steps)<=3000),
 readiness_note text not null default '' check(length(readiness_note)<=2000),
 updated_at timestamptz not null default now(),
 released_at timestamptz
);
alter table public.review_summaries enable row level security;
revoke all on public.review_summaries from anon,authenticated;
grant select on public.review_summaries to authenticated;
drop policy if exists review_summaries_read on public.review_summaries;
create policy review_summaries_read on public.review_summaries for select to authenticated
using(exists(select 1 from public.attempts a where a.id=review_summaries.attempt_id
 and (private.is_staff(a.org_id) or
 (a.student_id=(select auth.uid()) and a.status='marked'))));

-- Only authorised organisation administrators can allocate an access tier.
create or replace function public.assign_student_programme(
 p_student uuid,p_tier text,p_starts_at timestamptz,p_ends_at timestamptz,p_signature_credits integer
) returns jsonb language plpgsql security definer set search_path='' as $$
declare v_user uuid := (select auth.uid()); v_org uuid;
begin
 if v_user is null then raise exception 'Authentication required'; end if;
 if p_tier not in ('weekly','daily','exam') or p_signature_credits not between 0 and 20 or
 (p_ends_at is not null and p_ends_at<=p_starts_at) then
   raise exception 'Invalid programme selection or date range';
 end if;
 select m.org_id into v_org from public.memberships m
 where m.user_id=p_student and m.member_role='student' limit 1;
 if v_org is null or not exists(select 1 from public.memberships m
  where m.user_id=v_user and m.org_id=v_org and m.member_role in ('admin','partner')) then
   raise exception 'Only the authorised programme administrator may set access';
 end if;
 insert into public.student_entitlements(student_id,org_id,tier,starts_at,ends_at,signature_credits,updated_by)
 values(p_student,v_org,p_tier,p_starts_at,p_ends_at,p_signature_credits,v_user)
 on conflict(student_id) do update set
  tier=excluded.tier,starts_at=excluded.starts_at,ends_at=excluded.ends_at,
  signature_credits=excluded.signature_credits,updated_by=v_user,updated_at=now();
 return jsonb_build_object('ok',true,'tier',p_tier);
end; $$;
revoke all on function public.assign_student_programme(uuid,text,timestamptz,timestamptz,integer) from public,anon;
grant execute on function public.assign_student_programme(uuid,text,timestamptz,timestamptz,integer) to authenticated;

-- Staff can save the report's human-readable narrative before releasing marks.
create or replace function public.save_review_summary(
 p_attempt uuid,p_overview text,p_strengths text,p_gaps text,p_next_steps text,p_readiness_note text
) returns jsonb language plpgsql security definer set search_path='' as $$
declare v_user uuid := (select auth.uid()); v_attempt public.attempts%rowtype;
begin
 if v_user is null then raise exception 'Authentication required'; end if;
 select * into v_attempt from public.attempts where id=p_attempt for update;
 if v_attempt.id is null or v_attempt.status<>'submitted' then
  raise exception 'Only submitted, unreleased papers may be reviewed';
 end if;
 if not exists(select 1 from public.memberships m
 where m.user_id=v_user and m.org_id=v_attempt.org_id and
 m.member_role in ('admin','partner','examiner')) then
   raise exception 'Not authorised to review this assessment';
 end if;
 if coalesce(length(p_overview),0)>3000 or coalesce(length(p_strengths),0)>3000 or
 coalesce(length(p_gaps),0)>3000 or coalesce(length(p_next_steps),0)>3000 or
 coalesce(length(p_readiness_note),0)>2000 then raise exception 'Review too long'; end if;
 insert into public.review_summaries(attempt_id,reviewer_id,overview,strengths,gaps,next_steps,readiness_note)
 values(p_attempt,v_user,trim(coalesce(p_overview,'')),trim(coalesce(p_strengths,'')),
 trim(coalesce(p_gaps,'')),trim(coalesce(p_next_steps,'')),trim(coalesce(p_readiness_note,'')))
 on conflict(attempt_id) do update set reviewer_id=v_user,overview=excluded.overview,
 strengths=excluded.strengths,gaps=excluded.gaps,next_steps=excluded.next_steps,
 readiness_note=excluded.readiness_note,updated_at=now();
 return jsonb_build_object('ok',true);
end; $$;
revoke all on function public.save_review_summary(uuid,text,text,text,text,text) from public,anon;
grant execute on function public.save_review_summary(uuid,text,text,text,text,text) to authenticated;

-- Replace the existing transactional functions, preserving their security checks.
create or replace function public.create_student_paper(
 p_mode text,p_topic text,p_difficulty text,p_requested_count integer,p_questions uuid[]
) returns uuid language plpgsql security definer set search_path='' as $$
declare
 v_user uuid := (select auth.uid());
 v_tier text;
 v_org uuid;
 v_qual text;
 v_attempt uuid;
 v_question uuid;
 v_i integer;
begin
 if v_user is null then raise exception 'Authentication required'; end if;
 if p_mode not in ('daily','weekly','mock','topic') or
    p_difficulty not in ('mixed','foundation','standard','challenge') or
    coalesce(length(p_topic),0)>140 or
    p_requested_count not between 1 and 20 then
   raise exception 'Invalid student paper options';
 end if;
 if p_questions is null or array_length(p_questions,1) is null or
    array_length(p_questions,1) not between 1 and 20 or
    array_length(p_questions,1)>p_requested_count or
    (select count(distinct q) from unnest(p_questions) as q)<>array_length(p_questions,1) then
   raise exception 'Select valid, distinct questions';
 end if;
 select m.org_id into v_org from public.memberships m
 where m.user_id=v_user and m.member_role='student' limit 1;
 if v_org is null then raise exception 'Verified student membership required'; end if;
 -- Access is supplied privately by the tutor; browser settings never grant a tier.
 select e.tier into v_tier from public.student_entitlements e
 where e.student_id=v_user and e.org_id=v_org and e.starts_at<=now()
 and (e.ends_at is null or e.ends_at>now()) for update;
 if v_tier is null then raise exception 'Your MathsGrove programme has not yet been activated by your tutor'; end if;
 if v_tier='weekly' and p_mode not in ('weekly','topic') then
    raise exception 'This paper style requires a different MathsGrove programme'; end if;
 if v_tier='daily' and p_mode='mock' then
    raise exception 'Mock assessments require the Exam programme'; end if;
 if p_mode in ('weekly','topic') and
   (select count(*) from public.attempts a where a.student_id=v_user
    and a.paper_mode in ('weekly','topic') and
    a.started_at>=date_trunc('month',now()) )>=4 then
    raise exception 'Your monthly weekly-paper allocation has been used'; end if;
 if p_mode='daily' and
   (select count(*) from public.attempts a where a.student_id=v_user
    and a.paper_mode='daily' and
    a.started_at>=date_trunc('week',now()) )>=5 then
    raise exception 'Your weekly Daily Focus allocation has been used'; end if;
 if p_mode='mock' and
   (select count(*) from public.attempts a where a.student_id=v_user
    and a.paper_mode='mock' and
    a.started_at>=date_trunc('month',now()) )>=1 then
    raise exception 'Your monthly mock assessment has already been created'; end if;
 select p.qualification into v_qual from public.student_preferences p where p.student_id=v_user;
 if v_qual is null then raise exception 'Save your exam pathway first'; end if;
 for v_i in 1..array_length(p_questions,1) loop
  v_question:=p_questions[v_i];
  if not exists(select 1 from public.question_bank q where
    q.id=v_question and q.qualification=v_qual and q.active
    and (coalesce(p_topic,'')='' or q.topic=p_topic)
    and (p_difficulty='mixed' or
      (p_difficulty='foundation' and q.difficulty in (1,2)) or
      (p_difficulty='standard' and q.difficulty in (2,3)) or
      (p_difficulty='challenge' and q.difficulty in (3,4,5)))) then
    raise exception 'Unavailable or mismatched paper question';
  end if;
 end loop;
 insert into public.attempts(org_id,student_id,qualification,status,paper_mode,focus_topic,target_difficulty,requested_count)
 values(v_org,v_user,v_qual,'draft',p_mode,coalesce(p_topic,''),p_difficulty,p_requested_count)
 returning id into v_attempt;
 for v_i in 1..array_length(p_questions,1) loop
  insert into public.paper_questions(attempt_id,question_id,position)
  values(v_attempt,p_questions[v_i],v_i);
 end loop;
 return v_attempt;
end;
$$;
create or replace function public.save_marking_review(
  p_attempt uuid,
  p_items jsonb,
  p_release boolean default false
)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_attempt public.attempts%rowtype;
  v_item jsonb;
  v_question uuid;
  v_marks integer;
  v_max integer;
  v_comment text;
  v_expected integer;
  v_recorded integer;
  v_index integer := 0;
begin
  if v_user is null then raise exception 'Authentication required'; end if;

  select * into v_attempt from public.attempts where id=p_attempt for update;
  if v_attempt.id is null then raise exception 'Paper not found'; end if;
  if v_attempt.status <> 'submitted' then
    raise exception 'Only submitted papers can be marked; released reports are locked';
  end if;
  if not exists(
    select 1 from public.memberships m
    where m.org_id=v_attempt.org_id and m.user_id=v_user
    and m.member_role in ('admin','partner','examiner')
  ) then raise exception 'Not authorised to mark this organisation''s work'; end if;

  if p_items is null or jsonb_typeof(p_items)<>'array' or
     jsonb_array_length(p_items) < 1 or jsonb_array_length(p_items)>100 then
    raise exception 'Invalid mark list';
  end if;

  for v_item in select value from jsonb_array_elements(p_items) loop
    if jsonb_typeof(v_item)<>'object' then raise exception 'Invalid mark item'; end if;
    v_question := (v_item->>'question_id')::uuid;
    v_marks := (v_item->>'marks_awarded')::integer;
    v_comment := trim(coalesce(v_item->>'feedback',''));
    if v_marks is null or v_comment is null or length(v_comment)>5000 then
      raise exception 'Invalid marks or feedback';
    end if;
    select q.marks into v_max from public.question_bank q
      join public.answers ans on ans.question_id=q.id
      where q.id=v_question and ans.attempt_id=p_attempt;
    if v_max is null or v_marks<0 or v_marks>v_max then
      raise exception 'Mark is outside the approved question range';
    end if;
    if p_release and length(v_comment)=0 then
      raise exception 'Feedback required for all released questions';
    end if;
    insert into public.reviews(attempt_id,question_id,reviewer_id,marks_awarded,feedback)
    values(p_attempt,v_question,v_user,v_marks,v_comment)
    on conflict(attempt_id,question_id)
    do update set marks_awarded=excluded.marks_awarded,
                  feedback=excluded.feedback,
                  reviewer_id=excluded.reviewer_id;
    v_index := v_index + 1;
  end loop;

  if p_release then
    select count(*) into v_expected from public.answers where attempt_id=p_attempt;
    select count(*) into v_recorded from public.reviews
      where attempt_id=p_attempt and length(trim(feedback))>0;
    if v_expected<1 or v_expected<>v_recorded then
      raise exception 'Every answered question must have marks and feedback before release';
    end if;
    if not exists(select 1 from public.review_summaries rs where rs.attempt_id=p_attempt
       and length(trim(rs.overview))>=25 and length(trim(rs.strengths))>=15
       and length(trim(rs.gaps))>=15 and length(trim(rs.next_steps))>=15) then
       raise exception 'Complete the examiner overview, strengths, areas to improve and action plan before releasing the report';
    end if;
    update public.review_summaries set released_at=now() where attempt_id=p_attempt;
    update public.attempts set status='marked' where id=p_attempt;
  end if;

  return jsonb_build_object('ok',true,'saved_count',v_index,'released',p_release);
end;
$$;



-- ===== UPGRADE STAGE 3 : supabase/migrations/20261028_admin_student_setups.sql =====
-- MathsGrove administrator-led learner setup (private leaflet edition)
-- PREREQUISITES: 20261028_student_paper_builder.sql THEN
-- 20261028_entitlements_and_report_narrative.sql.
-- Do not run against production until schema and security checks are complete.

-- Further Mathematics is an academic pathway for advanced reviews; no
-- Further Mathematics practice bank is promised until original questions exist.
alter table public.student_preferences drop constraint if exists student_preferences_qualification_check;
alter table public.student_preferences add constraint student_preferences_qualification_check
 check(qualification in ('IGCSE','GCSE','A_LEVEL','FURTHER_MATHS','IB_AA','IB_AI','TMUA'));
alter table public.question_bank drop constraint if exists question_bank_qualification_check;
alter table public.question_bank add constraint question_bank_qualification_check
 check(qualification in ('IGCSE','GCSE','A_LEVEL','FURTHER_MATHS','IB_AA','IB_AI','TMUA'));
alter table public.attempts drop constraint if exists attempts_qualification_check;
alter table public.attempts add constraint attempts_qualification_check
 check(qualification in ('IGCSE','GCSE','A_LEVEL','FURTHER_MATHS','IB_AA','IB_AI','TMUA'));
create table if not exists public.pending_student_setups (
  org_id uuid not null references public.organisations(id) on delete cascade,
  email text not null check(email=lower(email) and length(email)<=250),
  qualification text not null check(qualification in ('IGCSE','GCSE','A_LEVEL','FURTHER_MATHS','IB_AA','IB_AI','TMUA')),
  exam_board text not null default '' check(length(exam_board)<=80),
  exam_tier text not null default '' check(length(exam_tier)<=60),
  programme text not null check(programme in ('weekly','daily','exam')),
  ends_at timestamptz not null,
  focus_topics text not null default '' check(length(focus_topics)<=500),
  staff_notes text not null default '' check(length(staff_notes)<=1200),
  add_ons jsonb not null default '{}'::jsonb,
  updated_by uuid not null references auth.users(id),
  updated_at timestamptz not null default now(),
  primary key(org_id,email)
);
alter table public.pending_student_setups enable row level security;
revoke all on public.pending_student_setups from anon,authenticated;
grant select on public.pending_student_setups to authenticated;
drop policy if exists pending_setups_admin_read on public.pending_student_setups;
create policy pending_setups_admin_read on public.pending_student_setups
 for select to authenticated using(private.is_partner(org_id));

create table if not exists public.student_academic_settings (
 student_id uuid primary key references auth.users(id) on delete cascade,
 org_id uuid not null references public.organisations(id) on delete cascade,
 focus_topics text not null default '' check(length(focus_topics)<=500),
 staff_notes text not null default '' check(length(staff_notes)<=1200),
 updated_by uuid references auth.users(id),
 updated_at timestamptz not null default now()
);
alter table public.student_academic_settings enable row level security;
revoke all on public.student_academic_settings from anon,authenticated;
grant select on public.student_academic_settings to authenticated;
drop policy if exists academic_settings_staff_read on public.student_academic_settings;
create policy academic_settings_staff_read on public.student_academic_settings
 for select to authenticated using(private.is_partner(org_id));

create table if not exists public.student_service_addons (
 student_id uuid not null references auth.users(id) on delete cascade,
 org_id uuid not null references public.organisations(id) on delete cascade,
 service_type text not null check(service_type in ('signature','signature_advanced','specialist_review')),
 quantity integer not null default 0 check(quantity between 0 and 20),
 updated_by uuid references auth.users(id),
 updated_at timestamptz not null default now(),
 primary key(student_id,service_type)
);
alter table public.student_service_addons enable row level security;
revoke all on public.student_service_addons from anon,authenticated;
grant select on public.student_service_addons to authenticated;
drop policy if exists addons_student_or_staff_read on public.student_service_addons;
create policy addons_student_or_staff_read on public.student_service_addons for select to authenticated
 using(student_id=(select auth.uid()) or private.is_partner(org_id));

-- Student can see their academic settings, but cannot change the tutor-assigned route.
revoke insert,update on public.student_preferences from authenticated;

create or replace function private.validate_learner_setup(
 p_qualification text,p_board text,p_level text,p_programme text,
 p_ends_at timestamptz,p_focus text,p_notes text,p_addons jsonb
) returns void language plpgsql set search_path='' as $$
begin
 if p_qualification not in ('IGCSE','GCSE','A_LEVEL','FURTHER_MATHS','IB_AA','IB_AI','TMUA')
  or p_programme not in ('weekly','daily','exam')
  or p_ends_at is null or p_ends_at<=now() or p_ends_at>now()+interval '5 years'
  or length(coalesce(p_board,''))>80 or length(coalesce(p_level,''))>60
  or length(coalesce(p_focus,''))>500 or length(coalesce(p_notes,''))>1200
 then raise exception 'Invalid qualification, programme or access dates';end if;
 if p_addons is null or jsonb_typeof(p_addons)<>'object'
  or p_addons - 'signature' - 'signature_advanced' - 'specialist_review' <> '{}'::jsonb
 then raise exception 'Invalid add-on selection';end if;
 if exists(
   select 1 from jsonb_each_text(p_addons) x
   where case when x.value ~ '^(0|[1-9][0-9]?)$'
              then x.value::integer>20 else true end
 )
 then raise exception 'Add-on counts must be between 0 and 20';end if;
end; $$;
revoke all on function private.validate_learner_setup(text,text,text,text,timestamptz,text,text,jsonb) from public,anon,authenticated;

create or replace function public.save_pending_student_setup(
 p_org uuid,p_email text,p_qualification text,p_board text,p_level text,
 p_programme text,p_ends_at timestamptz,p_focus text,p_notes text,p_addons jsonb
) returns jsonb language plpgsql security definer set search_path='' as $$
declare v_actor uuid := (select auth.uid());v_email text:=lower(trim(coalesce(p_email,'')));
begin
 if v_actor is null or not private.is_partner(p_org) then
  raise exception 'Not authorised to configure enrolments';end if;
 if v_email !~ '^[^@[:space:]]+@[^@[:space:]]+[.][^@[:space:]]+$' or length(v_email)>250
 then raise exception 'Invalid student email';end if;
 perform private.validate_learner_setup(p_qualification,p_board,p_level,p_programme,p_ends_at,p_focus,p_notes,p_addons);
 insert into public.pending_student_setups
 (org_id,email,qualification,exam_board,exam_tier,programme,ends_at,focus_topics,staff_notes,add_ons,updated_by)
 values(p_org,v_email,p_qualification,trim(coalesce(p_board,'')),trim(coalesce(p_level,'')),
  p_programme,p_ends_at,trim(coalesce(p_focus,'')),trim(coalesce(p_notes,'')),p_addons,v_actor)
 on conflict(org_id,email) do update set qualification=excluded.qualification,
 exam_board=excluded.exam_board,exam_tier=excluded.exam_tier,
 programme=excluded.programme,ends_at=excluded.ends_at,focus_topics=excluded.focus_topics,
 staff_notes=excluded.staff_notes,add_ons=excluded.add_ons,updated_by=v_actor,updated_at=now();
 return jsonb_build_object('ok',true,'email',v_email);
end; $$;
revoke all on function public.save_pending_student_setup(uuid,text,text,text,text,text,timestamptz,text,text,jsonb) from public,anon;
grant execute on function public.save_pending_student_setup(uuid,text,text,text,text,text,timestamptz,text,text,jsonb) to authenticated;

-- Revise a student's academic route, access and add-ons without destroying submissions.
create or replace function public.update_student_setup(
 p_student uuid,p_qualification text,p_board text,p_level text,
 p_programme text,p_ends_at timestamptz,p_focus text,p_notes text,p_addons jsonb
) returns jsonb language plpgsql security definer set search_path='' as $$
declare v_actor uuid := (select auth.uid());v_org uuid;v_type text;
begin
 select org_id into v_org from public.memberships
 where user_id=p_student and member_role='student';
 if v_actor is null or v_org is null or not private.is_partner(v_org) then
  raise exception 'Not authorised to edit this student';end if;
 perform private.validate_learner_setup(p_qualification,p_board,p_level,p_programme,p_ends_at,p_focus,p_notes,p_addons);
 insert into public.student_preferences(student_id,qualification,exam_board,tier,updated_at)
 values(p_student,p_qualification,trim(coalesce(p_board,'')),trim(coalesce(p_level,'')),now())
 on conflict(student_id) do update set qualification=excluded.qualification,exam_board=excluded.exam_board,
 tier=excluded.tier,updated_at=now();
 insert into public.student_entitlements(student_id,org_id,tier,starts_at,ends_at,signature_credits,updated_by)
 values(p_student,v_org,p_programme,now(),p_ends_at,coalesce((p_addons->>'signature')::integer,0),v_actor)
 on conflict(student_id) do update set tier=excluded.tier,ends_at=excluded.ends_at,
 signature_credits=excluded.signature_credits,updated_by=v_actor,updated_at=now();
 insert into public.student_academic_settings(student_id,org_id,focus_topics,staff_notes,updated_by)
 values(p_student,v_org,trim(coalesce(p_focus,'')),trim(coalesce(p_notes,'')),v_actor)
 on conflict(student_id) do update set focus_topics=excluded.focus_topics,
 staff_notes=excluded.staff_notes,updated_by=v_actor,updated_at=now();
 foreach v_type in array array['signature','signature_advanced','specialist_review'] loop
  insert into public.student_service_addons(student_id,org_id,service_type,quantity,updated_by)
  values(p_student,v_org,v_type,coalesce((p_addons->>v_type)::integer,0),v_actor)
  on conflict(student_id,service_type) do update set quantity=excluded.quantity,
  updated_by=v_actor,updated_at=now();
 end loop;
 return jsonb_build_object('ok',true);
end; $$;
revoke all on function public.update_student_setup(uuid,text,text,text,text,timestamptz,text,text,jsonb) from public,anon;
grant execute on function public.update_student_setup(uuid,text,text,text,text,timestamptz,text,text,jsonb) to authenticated;

-- Keep the existing one-time, verified-email-bound invitation security checks.
-- Apply the admin's recorded configuration in the same transaction as membership.
create or replace function public.claim_student_invitation(
 p_code_hash text,p_user_id uuid
) returns uuid language plpgsql security definer set search_path='' as $$
declare v_inv public.invitations%rowtype;v_email text;
 v_setup public.pending_student_setups%rowtype;v_type text;
begin
 if p_user_id is null or p_code_hash is null or length(p_code_hash)<>64 then
  raise exception 'Invalid claim';end if;
 select lower(email) into v_email from auth.users
 where id=p_user_id and email_confirmed_at is not null;
 if v_email is null then raise exception 'Verified email required';end if;
 select * into v_inv from public.invitations where code_hash=p_code_hash for update;
 if v_inv.id is null or v_inv.redeemed_at is not null or v_inv.revoked_at is not null
 or v_inv.expires_at<=now() or v_inv.email<>v_email then
  raise exception 'Invalid, used, revoked or expired invitation';end if;
 if exists(select 1 from public.memberships where user_id=p_user_id) then
  raise exception 'Account already has a membership';end if;
 insert into public.memberships(org_id,user_id,member_role)
 values(v_inv.org_id,p_user_id,'student');
 select * into v_setup from public.pending_student_setups
 where org_id=v_inv.org_id and email=v_email for update;
 if v_setup.org_id is not null then
  insert into public.student_preferences(student_id,qualification,exam_board,tier)
  values(p_user_id,v_setup.qualification,v_setup.exam_board,v_setup.exam_tier);
  insert into public.student_entitlements(student_id,org_id,tier,ends_at,signature_credits,updated_by)
  values(p_user_id,v_inv.org_id,v_setup.programme,v_setup.ends_at,
   coalesce((v_setup.add_ons->>'signature')::integer,0),v_setup.updated_by);
  insert into public.student_academic_settings(student_id,org_id,focus_topics,staff_notes,updated_by)
  values(p_user_id,v_inv.org_id,v_setup.focus_topics,v_setup.staff_notes,v_setup.updated_by);
  foreach v_type in array array['signature','signature_advanced','specialist_review'] loop
   insert into public.student_service_addons(student_id,org_id,service_type,quantity,updated_by)
   values(p_user_id,v_inv.org_id,v_type,coalesce((v_setup.add_ons->>v_type)::integer,0),v_setup.updated_by);
  end loop;
  delete from public.pending_student_setups where org_id=v_inv.org_id and email=v_email;
 end if;
 update public.invitations set redeemed_at=now(),redeemed_by=p_user_id where id=v_inv.id;
 return v_inv.org_id;
end; $$;
revoke all on function public.claim_student_invitation(text,uuid) from public,anon,authenticated;
grant execute on function public.claim_student_invitation(text,uuid) to service_role;

-- Align Daily Focus to seven days/week from the private partner leaflet.
create or replace function public.create_student_paper(
 p_mode text,p_topic text,p_difficulty text,p_requested_count integer,p_questions uuid[]
) returns uuid language plpgsql security definer set search_path='' as $$
declare
 v_user uuid := (select auth.uid());
 v_tier text;
 v_org uuid;
 v_qual text;
 v_attempt uuid;
 v_question uuid;
 v_i integer;
begin
 if v_user is null then raise exception 'Authentication required'; end if;
 if p_mode not in ('daily','weekly','mock','topic') or
    p_difficulty not in ('mixed','foundation','standard','challenge') or
    coalesce(length(p_topic),0)>140 or
    p_requested_count not between 1 and 20 then
   raise exception 'Invalid student paper options';
 end if;
 if p_questions is null or array_length(p_questions,1) is null or
    array_length(p_questions,1) not between 1 and 20 or
    array_length(p_questions,1)>p_requested_count or
    (select count(distinct q) from unnest(p_questions) as q)<>array_length(p_questions,1) then
   raise exception 'Select valid, distinct questions';
 end if;
 select m.org_id into v_org from public.memberships m
 where m.user_id=v_user and m.member_role='student' limit 1;
 if v_org is null then raise exception 'Verified student membership required'; end if;
 -- Access is supplied privately by the tutor; browser settings never grant a tier.
 select e.tier into v_tier from public.student_entitlements e
 where e.student_id=v_user and e.org_id=v_org and e.starts_at<=now()
 and (e.ends_at is null or e.ends_at>now()) for update;
 if v_tier is null then raise exception 'Your MathsGrove programme has not yet been activated by your tutor'; end if;
 if v_tier='weekly' and p_mode not in ('weekly','topic') then
    raise exception 'This paper style requires a different MathsGrove programme'; end if;
 if v_tier='daily' and p_mode='mock' then
    raise exception 'Mock assessments require the Exam programme'; end if;
 if p_mode in ('weekly','topic') and
   (select count(*) from public.attempts a where a.student_id=v_user
    and a.paper_mode in ('weekly','topic') and
    a.started_at>=date_trunc('month',now()) )>=4 then
    raise exception 'Your monthly weekly-paper allocation has been used'; end if;
 if p_mode='daily' and
   (select count(*) from public.attempts a where a.student_id=v_user
    and a.paper_mode='daily' and
    a.started_at>=date_trunc('week',now()) )>=7 then
    raise exception 'Your seven-day Daily Focus allocation has been used'; end if;
 if p_mode='mock' and
   (select count(*) from public.attempts a where a.student_id=v_user
    and a.paper_mode='mock' and
    a.started_at>=date_trunc('month',now()) )>=1 then
    raise exception 'Your monthly mock assessment has already been created'; end if;
 select p.qualification into v_qual from public.student_preferences p where p.student_id=v_user;
 if v_qual is null then raise exception 'Save your exam pathway first'; end if;
 for v_i in 1..array_length(p_questions,1) loop
  v_question:=p_questions[v_i];
  if not exists(select 1 from public.question_bank q where
    q.id=v_question and q.qualification=v_qual and q.active
    and (coalesce(p_topic,'')='' or q.topic=p_topic)
    and (p_difficulty='mixed' or
      (p_difficulty='foundation' and q.difficulty in (1,2)) or
      (p_difficulty='standard' and q.difficulty in (2,3)) or
      (p_difficulty='challenge' and q.difficulty in (3,4,5)))) then
    raise exception 'Unavailable or mismatched paper question';
  end if;
 end loop;
 insert into public.attempts(org_id,student_id,qualification,status,paper_mode,focus_topic,target_difficulty,requested_count)
 values(v_org,v_user,v_qual,'draft',p_mode,coalesce(p_topic,''),p_difficulty,p_requested_count)
 returning id into v_attempt;
 for v_i in 1..array_length(p_questions,1) loop
  insert into public.paper_questions(attempt_id,question_id,position)
  values(v_attempt,p_questions[v_i],v_i);
 end loop;
 return v_attempt;
end;
$$;


COMMIT;
