-- MATHSGROVE | INITIAL SUPABASE INSTALLATION
-- Project: https://nwakgkxytovprrrwyahs.supabase.co
-- For a newly created, EMPTY Supabase project only.
-- Run ONCE in Supabase Dashboard > SQL Editor > New query.
-- Does not create any users and does not enable billing.
-- Contains: orgs, student profiles, invite hashes, exam selection,
-- pilot questions, private uploads, RLS, atomic invitation claims,
-- and server-validated examiner marking.
-- This is a development-stage schema: test all RLS permissions
-- before accepting any real student or child information.

begin;


-- ============================================================
-- 1. supabase/migrations/20261028_private_student_portal.sql
-- ============================================================

-- MathsGrove pilot schema (new Supabase project only). Review and test RLS before real pupils.
-- The browser uses the publishable key; invitation issuance/redemption uses a separate authenticated Edge Function.
create extension if not exists pgcrypto;
create schema if not exists private;

create table public.organisations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  created_at timestamptz not null default now()
);
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null default 'Student' check (length(display_name)<=100),
  created_at timestamptz not null default now()
);
create table public.memberships (
  org_id uuid not null references public.organisations(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  member_role text not null check (member_role in ('student','partner','examiner','admin')),
  created_at timestamptz not null default now(),
  primary key(org_id,user_id)
);
create unique index one_student_organisation on public.memberships(user_id) where member_role='student';
create index memberships_user_idx on public.memberships(user_id);

create table public.invitations (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references public.organisations(id) on delete cascade,
  email text not null,
  code_hash text not null unique,
  issued_by uuid not null references auth.users(id),
  expires_at timestamptz not null default now() + interval '14 days',
  redeemed_at timestamptz,
  redeemed_by uuid references auth.users(id),
  created_at timestamptz not null default now(),
  check (email = lower(email))
);
create index invitations_org_idx on public.invitations(org_id);

create table public.student_preferences (
  student_id uuid primary key references public.profiles(id) on delete cascade,
  qualification text not null check (qualification in ('IGCSE','GCSE','A_LEVEL','IB_AA','IB_AI','TMUA')),
  exam_board text not null default '' check (length(exam_board)<=80),
  tier text not null default '' check (length(tier)<=60),
  updated_at timestamptz not null default now()
);
create table public.question_bank (
  id uuid primary key default gen_random_uuid(),
  qualification text not null check (qualification in ('IGCSE','GCSE','A_LEVEL','IB_AA','IB_AI','TMUA')),
  topic text not null,
  prompt text not null,
  marks smallint not null check(marks between 1 and 30),
  difficulty smallint not null check(difficulty between 1 and 5),
  active boolean not null default true,
  created_at timestamptz not null default now()
);
-- Never expose solutions through the student-facing question_bank.
create table public.mark_schemes (
  question_id uuid primary key references public.question_bank(id) on delete cascade,
  scheme text not null
);
create table public.attempts (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references public.organisations(id),
  student_id uuid not null references public.profiles(id),
  qualification text not null check (qualification in ('IGCSE','GCSE','A_LEVEL','IB_AA','IB_AI','TMUA')),
  status text not null default 'draft' check (status in ('draft','submitted','marked')),
  started_at timestamptz not null default now(),
  submitted_at timestamptz
);
create index attempts_student_idx on public.attempts(student_id);
create index attempts_org_idx on public.attempts(org_id,status);

create table public.answers (
  id uuid primary key default gen_random_uuid(),
  attempt_id uuid not null references public.attempts(id) on delete cascade,
  question_id uuid not null references public.question_bank(id),
  student_id uuid not null references public.profiles(id),
  typed_answer text not null default '' check(length(typed_answer)<=20000),
  difficulty text check(difficulty in ('easy','right','hard')),
  confidence text check(confidence in ('sure','unsure','stuck')),
  clarity text check(clarity in ('clear','unclear')),
  updated_at timestamptz not null default now(),
  unique(attempt_id,question_id)
);
create index answers_attempt_idx on public.answers(attempt_id);

create table public.answer_files (
  id uuid primary key default gen_random_uuid(),
  attempt_id uuid not null references public.attempts(id) on delete cascade,
  question_id uuid not null references public.question_bank(id),
  org_id uuid not null references public.organisations(id),
  student_id uuid not null references public.profiles(id),
  storage_path text not null unique,
  original_name text not null check(length(original_name)<=240),
  file_kind text not null check(file_kind in ('photo','drawing')),
  created_at timestamptz not null default now()
);
create index answer_files_attempt_idx on public.answer_files(attempt_id);

create table public.reviews (
  id uuid primary key default gen_random_uuid(),
  attempt_id uuid not null references public.attempts(id) on delete cascade,
  question_id uuid not null references public.question_bank(id),
  reviewer_id uuid not null references public.profiles(id),
  marks_awarded smallint not null check(marks_awarded between 0 and 30),
  feedback text not null default '' check(length(feedback)<=5000),
  created_at timestamptz not null default now(),
  unique(attempt_id,question_id)
);

-- Trigger lives in an unexposed private schema, with a pinned search path.
create or replace function private.create_profile()
returns trigger language plpgsql security definer set search_path='' as $$
begin
  insert into public.profiles(id,display_name) values(new.id,'Student')
  on conflict(id) do nothing;
  return new;
end; $$;
create trigger on_mathsgrove_signup after insert on auth.users
for each row execute function private.create_profile();

create or replace function private.is_member(p_org uuid)
returns boolean language sql stable security definer set search_path='' as $$
  select exists(select 1 from public.memberships
    where org_id=p_org and user_id=(select auth.uid()));
$$;
create or replace function private.is_staff(p_org uuid)
returns boolean language sql stable security definer set search_path='' as $$
  select exists(select 1 from public.memberships
    where org_id=p_org and user_id=(select auth.uid())
    and member_role in ('partner','examiner','admin'));
$$;
create or replace function private.is_partner(p_org uuid)
returns boolean language sql stable security definer set search_path='' as $$
  select exists(select 1 from public.memberships
    where org_id=p_org and user_id=(select auth.uid())
    and member_role in ('partner','admin'));
$$;
create or replace function private.can_access_attempt(p_attempt uuid)
returns boolean language sql stable security definer set search_path='' as $$
  select exists(select 1 from public.attempts a
    where a.id=p_attempt and
    (a.student_id=(select auth.uid()) or private.is_staff(a.org_id)));
$$;
create or replace function private.is_editable_attempt(p_attempt uuid)
returns boolean language sql stable security definer set search_path='' as $$
  select exists(select 1 from public.attempts a
    where a.id=p_attempt and a.student_id=(select auth.uid()) and a.status='draft'
      and private.is_member(a.org_id));
$$;
grant usage on schema private to authenticated;
grant execute on function private.is_member(uuid),private.is_staff(uuid),private.is_partner(uuid),private.can_access_attempt(uuid),private.is_editable_attempt(uuid) to authenticated;

-- Prevent cross-qualification answers and edited file ownership.
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
  new.updated_at=now();
  return new;
end; $$;
create trigger verify_answer before insert or update on public.answers
for each row execute function private.check_answer();

create or replace function private.check_file()
returns trigger language plpgsql set search_path='' as $$
declare a public.attempts%rowtype; q public.question_bank%rowtype;
begin
  select * into a from public.attempts where id=new.attempt_id;
  select * into q from public.question_bank where id=new.question_id;
  if a.id is null or q.id is null or a.student_id<>new.student_id or
     a.org_id<>new.org_id or a.qualification<>q.qualification or
     split_part(new.storage_path,'/',1)<>new.org_id::text or
     split_part(new.storage_path,'/',2)<>new.student_id::text or
     split_part(new.storage_path,'/',3)<>new.attempt_id::text or
     split_part(new.storage_path,'/',4)<>new.question_id::text then
     raise exception 'Invalid answer file ownership';
  end if;
  return new;
end; $$;
create trigger verify_answer_file before insert on public.answer_files
for each row execute function private.check_file();

create or replace function private.check_review()
returns trigger language plpgsql set search_path='' as $$
declare q public.question_bank%rowtype; a public.attempts%rowtype;
begin
  select * into q from public.question_bank where id=new.question_id;
  select * into a from public.attempts where id=new.attempt_id;
  if q.id is null or a.id is null or q.qualification<>a.qualification or
     new.marks_awarded>q.marks then raise exception 'Invalid awarded marks'; end if;
  return new;
end; $$;
create trigger verify_review before insert or update on public.reviews
for each row execute function private.check_review();

alter table public.organisations enable row level security;
alter table public.profiles enable row level security;
alter table public.memberships enable row level security;
alter table public.invitations enable row level security;
alter table public.student_preferences enable row level security;
alter table public.question_bank enable row level security;
alter table public.mark_schemes enable row level security;
alter table public.attempts enable row level security;
alter table public.answers enable row level security;
alter table public.answer_files enable row level security;
alter table public.reviews enable row level security;

-- Revoke broad default Supabase grants; regrant only required operations.
revoke all on public.organisations,public.profiles,public.memberships,public.invitations,public.student_preferences,public.question_bank,public.mark_schemes,public.attempts,public.answers,public.answer_files,public.reviews from anon,authenticated;
grant select on public.organisations,public.profiles,public.memberships,public.student_preferences,public.question_bank,public.attempts,public.answers,public.answer_files,public.reviews to authenticated;
grant update(display_name) on public.profiles to authenticated;
grant insert on public.student_preferences,public.attempts,public.answers,public.answer_files,public.reviews to authenticated;
grant update on public.student_preferences to authenticated;
grant update(status,submitted_at) on public.attempts to authenticated;
grant update(typed_answer,difficulty,confidence,clarity,updated_at) on public.answers to authenticated;
grant update(marks_awarded,feedback) on public.reviews to authenticated;

create policy organisations_select on public.organisations for select to authenticated
using(private.is_member(id));
create policy profiles_select on public.profiles for select to authenticated
using(id=(select auth.uid()) or exists(
  select 1 from public.memberships m where m.user_id=profiles.id and private.is_staff(m.org_id)));
create policy profiles_update_self on public.profiles for update to authenticated
using(id=(select auth.uid())) with check(id=(select auth.uid()));
create policy memberships_select on public.memberships for select to authenticated
using(user_id=(select auth.uid()) or private.is_staff(org_id));

create policy preferences_select on public.student_preferences for select to authenticated
using(student_id=(select auth.uid()) or exists(
  select 1 from public.memberships m where m.user_id=student_preferences.student_id
   and private.is_staff(m.org_id)));
create policy preferences_insert on public.student_preferences for insert to authenticated
with check(student_id=(select auth.uid()) and exists(
  select 1 from public.memberships m where m.user_id=(select auth.uid()) and m.member_role='student'));
create policy preferences_update on public.student_preferences for update to authenticated
using(student_id=(select auth.uid()))
with check(student_id=(select auth.uid()));

create policy questions_select on public.question_bank for select to authenticated
using(active and exists(select 1 from public.memberships where user_id=(select auth.uid())));
-- Only staff see marking schemes.
grant select on public.mark_schemes to authenticated;
create policy schemes_select on public.mark_schemes for select to authenticated using(
  exists(select 1 from public.memberships m where m.user_id=(select auth.uid())
  and m.member_role in ('partner','examiner','admin')));

create policy attempts_select on public.attempts for select to authenticated
using(private.can_access_attempt(id));
create policy attempts_insert on public.attempts for insert to authenticated
with check(student_id=(select auth.uid()) and status='draft' and private.is_member(org_id) and
  exists(select 1 from public.memberships m where m.org_id=attempts.org_id
   and m.user_id=(select auth.uid()) and m.member_role='student'));
create policy attempts_student_submit on public.attempts for update to authenticated
using(student_id=(select auth.uid()) and status='draft' and private.is_member(org_id))
with check(student_id=(select auth.uid()) and status='submitted' and submitted_at is not null);
create policy attempts_staff_mark on public.attempts for update to authenticated
using(status='submitted' and private.is_staff(org_id))
with check(status='marked' and private.is_staff(org_id));

create policy answers_select on public.answers for select to authenticated
using(private.can_access_attempt(attempt_id));
create policy answers_insert on public.answers for insert to authenticated
with check(student_id=(select auth.uid()) and private.is_editable_attempt(attempt_id));
create policy answers_update on public.answers for update to authenticated
using(student_id=(select auth.uid()) and private.is_editable_attempt(attempt_id))
with check(student_id=(select auth.uid()) and private.is_editable_attempt(attempt_id));

create policy files_select on public.answer_files for select to authenticated
using(private.can_access_attempt(attempt_id));
create policy files_insert on public.answer_files for insert to authenticated
with check(student_id=(select auth.uid()) and private.is_editable_attempt(attempt_id));

create policy reviews_select on public.reviews for select to authenticated
using(exists(select 1 from public.attempts a where a.id=reviews.attempt_id and
  (private.is_staff(a.org_id) or (a.student_id=(select auth.uid()) and a.status='marked'))));
create policy reviews_insert on public.reviews for insert to authenticated
with check(reviewer_id=(select auth.uid()) and exists(
  select 1 from public.attempts a where a.id=reviews.attempt_id and a.status in ('submitted','marked')
  and private.is_staff(a.org_id)));
create policy reviews_update on public.reviews for update to authenticated
using(exists(select 1 from public.attempts a where a.id=reviews.attempt_id
  and a.status in ('submitted','marked') and private.is_staff(a.org_id)))
with check(exists(select 1 from public.attempts a where a.id=reviews.attempt_id
  and a.status in ('submitted','marked') and private.is_staff(a.org_id)));

-- Private bucket for photographed and drawn student work.
insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types)
values('student-work','student-work',false,5242880,array['image/jpeg','image/png','image/webp'])
on conflict(id) do nothing;
create policy mathsgrove_storage_read on storage.objects for select to authenticated
using(bucket_id='student-work' and (
  split_part(name,'/',2)=(select auth.uid())::text or exists(
    select 1 from public.memberships m where
      m.org_id::text=split_part(storage.objects.name,'/',1)
      and m.user_id=(select auth.uid()) and m.member_role in ('partner','examiner','admin')
  )));
create policy mathsgrove_storage_upload on storage.objects for insert to authenticated
with check(bucket_id='student-work' and split_part(name,'/',2)=(select auth.uid())::text and exists(
  select 1 from public.attempts a where a.id::text=split_part(storage.objects.name,'/',3)
    and a.org_id::text=split_part(storage.objects.name,'/',1)
    and a.student_id=(select auth.uid()) and a.status='draft'
    and a.qualification=(select q.qualification from public.question_bank q where
      q.id::text=split_part(storage.objects.name,'/',4))
));

-- Pilot-only original questions (no copied exam-board past-paper text).
insert into public.question_bank(qualification,topic,prompt,marks,difficulty) values
('IGCSE','Algebra · Factorising','Solve x² − 7x + 12 = 0. Show each step.',3,2),
('IGCSE','Algebra · Linear equations','Solve 3(2x − 1) = 4x + 9, showing your working.',3,2),
('IGCSE','Geometry · Pythagoras','A right-angled triangle has shorter sides 6 cm and 8 cm. Calculate its hypotenuse.',3,2),
('GCSE','Number · Fractions','Evaluate 3/4 + 5/6. Give your answer as a simplified fraction.',3,2),
('GCSE','Algebra · Simultaneous equations','Solve x + y = 10 and 2x − y = 5.',4,3),
('A_LEVEL','Pure · Differentiation','Differentiate f(x) = 3x³ − 5x² + 7x − 2.',3,2),
('A_LEVEL','Pure · Integration','Find the indefinite integral of 6x² − 4x + 1 with respect to x.',4,2),
('IB_AA','Functions · Quadratics','For f(x) = x² − 6x + 5, determine the coordinates of its vertex.',4,2),
('IB_AI','Statistics · Mean','A sample contains values 4, 7, 8, 9 and 12. Calculate the mean.',2,1),
('TMUA','Algebraic reasoning','Without a calculator, determine the sum of the positive solutions of x² − 7x + 12 = 0. Justify your answer.',3,2);

-- BOOTSTRAP AFTER AUTHENTICATING WITH THE OWNER EMAIL (replace address):
-- insert into public.organisations(name) values ('MathsGrove Founding Partner') returning id;
-- select id,email from auth.users where email = 'YOUR_ADMIN_EMAIL';
-- insert into public.memberships(org_id,user_id,member_role)
-- values ('ORG_UUID','USER_UUID','admin');
--
-- RLS MUST be tested with two separate organisations, ordinary student accounts,
-- invite expiry, revoked invitations and cross-organisation file access before real usage.


-- ============================================================
-- 2. supabase/migrations/20261028_admin_invitation_lifecycle.sql
-- ============================================================

-- MathsGrove invitation lifecycle for admin studio.
-- Apply AFTER 20261028_private_student_portal.sql on a new Supabase project.
alter table public.invitations
  add column if not exists revoked_at timestamptz;
create index if not exists invitations_org_created_idx
  on public.invitations(org_id,created_at desc);
create index if not exists invitations_email_idx
  on public.invitations(org_id,email);
-- No direct browser grants to invitations; authenticated staff may only manage
-- them through the verified role-checking Supabase invitations Edge Function.
revoke all on public.invitations from anon,authenticated;


-- ============================================================
-- 3. supabase/migrations/20261028_atomic_invitation_claim.sql
-- ============================================================

-- MathsGrove secure atomic invitation redemption.
-- Apply AFTER 20261028_admin_invitation_lifecycle.sql.
-- Callable only with the service-role key in the authenticated Edge Function.
create or replace function public.claim_student_invitation(
 p_code_hash text, p_user_id uuid
)
returns uuid
language plpgsql security definer set search_path=''
as $$
declare
 v_invitation public.invitations%rowtype;
 v_user_email text;
begin
 if p_user_id is null or p_code_hash is null or length(p_code_hash)<>64 then
  raise exception 'Invalid claim';
 end if;

 select lower(email) into v_user_email from auth.users
  where id=p_user_id and email_confirmed_at is not null;
 if v_user_email is null then raise exception 'Verified email required'; end if;

 select * into v_invitation from public.invitations
 where code_hash=p_code_hash for update;
 if v_invitation.id is null
  or v_invitation.redeemed_at is not null
  or v_invitation.revoked_at is not null
  or v_invitation.expires_at <= now()
  or v_invitation.email <> v_user_email then
  raise exception 'Invalid, revoked or expired invitation';
 end if;

 if exists(select 1 from public.memberships where user_id=p_user_id) then
  raise exception 'Account already has a membership; sign in to your existing account';
 end if;

 insert into public.memberships(org_id,user_id,member_role)
 values(v_invitation.org_id,p_user_id,'student');

 update public.invitations
 set redeemed_at=now(),redeemed_by=p_user_id
 where id=v_invitation.id;

 return v_invitation.org_id;
end;
$$;
revoke all on function public.claim_student_invitation(text,uuid) from public,anon,authenticated;
grant execute on function public.claim_student_invitation(text,uuid) to service_role;


-- ============================================================
-- 4. supabase/migrations/20261028_atomic_marking.sql
-- ============================================================

-- MathsGrove atomic examiner marking and release.
-- Run after the base portal schema and admin-invitation migration.
-- Staff review is controlled in Postgres: browsers cannot directly write reviews.
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
    update public.attempts set status='marked' where id=p_attempt;
  end if;

  return jsonb_build_object('ok',true,'saved_count',v_index,'released',p_release);
end;
$$;

revoke all on function public.save_marking_review(uuid,jsonb,boolean) from public,anon;
grant execute on function public.save_marking_review(uuid,jsonb,boolean) to authenticated;

-- Prevent direct status changes from bypassing the examiner review workflow.
-- Student submission remains permitted; staff release is performed only by the
-- security-definer save_marking_review transaction above.
drop policy if exists attempts_staff_mark on public.attempts;

-- Prevent student browsers and ordinary staff from circumventing the review workflow.
revoke insert,update,delete on public.reviews from authenticated;
-- Only the staff-only database function above can create or release marks.
-- Existing examiner panel in portal.html now links to studio.html.

-- Provide working criteria for the original pilot samples.
insert into public.mark_schemes(question_id,scheme)
select q.id,
  case
    when q.prompt like 'Solve x² − 7x + 12%' then 'M1 factorisation into (x−3)(x−4). A1 root x=3. A1 root x=4.'
    when q.prompt like 'Solve 3(2x%' then 'M1 expand 6x−3=4x+9. M1 isolate 2x=12. A1 x=6.'
    when q.prompt like 'A right-angled triangle%' then 'M1 state Pythagoras. M1 calculate 6²+8²=100. A1 10 cm.'
    when q.prompt like 'Evaluate 3/4 + 5/6%' then 'M1 use common denominator 12. M1 obtain 9/12+10/12=19/12. A1 simplify to 1 7/12 or 19/12.'
    when q.prompt like 'Solve x + y = 10%' then 'M1 consistent elimination/substitution. M1 form 3x=15. A1 x=5. A1 y=5.'
    when q.prompt like 'Differentiate f(x) = 3x³%' then 'B1 9x². B1 −10x. B1 +7.'
    when q.prompt like 'Find the indefinite integral%' then 'B1 2x³. B1 −2x². B1 +x. B1 +C.'
    when q.prompt like 'For f(x) = x²%' then 'M1 complete square or x=−b/(2a). A1 x=3. M1 substitute. A1 y=−4.'
    when q.prompt like 'A sample contains values%' then 'M1 sum observations to 40. A1 divide by 5 to obtain 8.'
    when q.prompt like 'Without a calculator%' then 'M1 identify roots 3 and 4. A1 sum is 7. B1 suitable explanation.'
  end
from public.question_bank q
where q.prompt like 'Solve x² − 7x + 12%'
   or q.prompt like 'Solve 3(2x%'
   or q.prompt like 'A right-angled triangle%'
   or q.prompt like 'Evaluate 3/4 + 5/6%'
   or q.prompt like 'Solve x + y = 10%'
   or q.prompt like 'Differentiate f(x) = 3x³%'
   or q.prompt like 'Find the indefinite integral%'
   or q.prompt like 'For f(x) = x²%'
   or q.prompt like 'A sample contains values%'
   or q.prompt like 'Without a calculator%'
on conflict(question_id) do nothing;


commit;
