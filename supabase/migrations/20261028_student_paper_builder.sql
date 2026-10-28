-- MathsGrove student-selected paper settings and immutable paper question lists.
-- Run ONCE in the existing MathsGrove project after previous four initial migrations.
-- This file does NOT create users or change subscription/payment settings.
begin;
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

commit;

-- Security note: paper_questions are assigned at creation and must not be edited
-- after an attempt is submitted. Questions are still an ORIGINAL PILOT BANK,
-- not full board-aligned past-paper coverage or automated adaptive marking.
