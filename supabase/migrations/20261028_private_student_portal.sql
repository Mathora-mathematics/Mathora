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
