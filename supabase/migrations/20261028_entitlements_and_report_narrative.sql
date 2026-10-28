-- MathsGrove phase 2: private learning entitlements and evidence-based reporting.
-- Run only AFTER the student-paper-builder migration in the existing project.
-- No Stripe or checkout: tutoring companies handle billing, staff allocate access.
begin;
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
commit;
