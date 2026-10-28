-- MathsGrove administrator-led learner setup (private leaflet edition)
-- PREREQUISITES: 20261028_student_paper_builder.sql THEN
-- 20261028_entitlements_and_report_narrative.sql.
-- Do not run against production until schema and security checks are complete.
begin;
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
commit;