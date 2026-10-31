-- MathsGrove: verified, one-time learner welcome. No passwords are stored here.
begin;
create table if not exists private.grove_student_onboarding (
 student_id uuid primary key references auth.users(id) on delete cascade,
 completed_at timestamptz not null default now()
);
alter table private.grove_student_onboarding enable row level security;
revoke all on private.grove_student_onboarding from PUBLIC, anon, authenticated;

create or replace function public.grove_student_welcome_status()
returns jsonb language plpgsql security definer set search_path='' as $$
declare v_student uuid := (select auth.uid());
begin
 if v_student is null or not exists (
  select 1 from public.memberships m
  where m.user_id=v_student and m.member_role='student'
 ) then raise exception 'An enrolled student account is required'; end if;
 return jsonb_build_object(
  'completed',exists(select 1 from private.grove_student_onboarding o where o.student_id=v_student)
 );
end;$$;
revoke all on function public.grove_student_welcome_status() from public,anon;
grant execute on function public.grove_student_welcome_status() to authenticated;

create or replace function public.grove_student_welcome_complete()
returns boolean language plpgsql security definer set search_path='' as $$
declare v_student uuid := (select auth.uid());
begin
 if v_student is null or not exists(
  select 1 from public.memberships m
  join auth.users u on u.id=m.user_id
  where m.user_id=v_student and m.member_role='student' and u.email_confirmed_at is not null
 ) then raise exception 'Verified student enrolment required'; end if;
 insert into private.grove_student_onboarding(student_id) values(v_student)
 on conflict(student_id) do nothing;
 return true;
end;$$;
revoke all on function public.grove_student_welcome_complete() from public,anon;
grant execute on function public.grove_student_welcome_complete() to authenticated;
commit;