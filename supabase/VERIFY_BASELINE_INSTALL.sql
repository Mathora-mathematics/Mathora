-- MathsGrove | READ-ONLY verification after applying the baseline migration and pilot seed.
-- Run in Supabase SQL Editor as project owner; contains no user/student details.
-- If any required function or table is missing, install the migration first.
SELECT
  to_regclass('private.baseline_bank') IS NOT NULL AS bank_table_installed,
  to_regclass('private.baseline_sessions') IS NOT NULL AS sessions_installed,
  to_regclass('private.baseline_answers') IS NOT NULL AS answers_installed,
  to_regclass('private.baseline_accommodations') IS NOT NULL AS extra_time_installed,
  to_regprocedure('public.baseline_status()') IS NOT NULL AS status_function_installed,
  to_regprocedure('public.baseline_start()') IS NOT NULL AS start_function_installed,
  to_regprocedure('public.baseline_answer(uuid,integer,text)') IS NOT NULL AS answer_function_installed,
  to_regprocedure('public.baseline_finish(uuid)') IS NOT NULL AS finish_function_installed,
  to_regprocedure('public.baseline_staff_report(uuid)') IS NOT NULL AS staff_report_installed,
  to_regprocedure('public.baseline_family_report(uuid)') IS NOT NULL AS family_report_installed;

-- Returns 12 rows with count=20 if all pilot seed routes were installed.
-- Production use instead requires 20 approved private unseen items per enrolled route.
SELECT qualification,academic_level,count(*) FILTER (WHERE active) AS active_items,
 CASE WHEN count(*) FILTER (WHERE active)=20 THEN 'READY' ELSE 'INCOMPLETE' END AS state
FROM private.baseline_bank
GROUP BY qualification,academic_level
ORDER BY qualification,academic_level;

-- Browser accounts must never be able to query the private answer bank directly.
SELECT
 has_table_privilege('authenticated','private.baseline_bank','SELECT') AS authenticated_can_read_keys,
 has_table_privilege('anon','private.baseline_bank','SELECT') AS anonymous_can_read_keys,
 has_table_privilege('authenticated','private.baseline_answers','SELECT') AS authenticated_can_read_raw_answers,
 has_table_privilege('anon','private.baseline_answers','SELECT') AS anonymous_can_read_raw_answers;

-- All four privilege results above must be FALSE.
-- Confirm any test accounts have permission through role-filtered public RPCs instead.
