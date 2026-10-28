-- MathsGrove: installation verification for the empty pilot database.
-- Run after INSTALL_FRESH_MATHSGROVE.sql in Supabase SQL Editor.
select 'tables' as check_type, count(*)::text as result
from information_schema.tables
where table_schema='public' and table_name in
('organisations','profiles','memberships','invitations','student_preferences',
'question_bank','mark_schemes','attempts','answers','answer_files','reviews')
union all
select 'RLS enabled tables',count(*)::text
from pg_class c join pg_namespace n on c.relnamespace=n.oid
where n.nspname='public' and c.relname in
('organisations','profiles','memberships','invitations','student_preferences',
'question_bank','mark_schemes','attempts','answers','answer_files','reviews')
and c.relrowsecurity=true
union all
select 'original pilot questions',count(*)::text from public.question_bank
union all
select 'private storage bucket',count(*)::text from storage.buckets where id='student-work' and public=false
union all
select 'direct staff status policy',count(*)::text from pg_policies where schemaname='public' and tablename='attempts' and policyname='attempts_staff_mark';
-- Expected: 11 tables, 11 RLS-enabled, 10 questions, 1 private bucket, 0 direct-staff-status policies.
-- No data from users, passwords or secret keys is included in the result.
