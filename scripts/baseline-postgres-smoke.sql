-- Executed in a disposable PostgreSQL CI container, never the user's Supabase project.
\set ON_ERROR_STOP on
SELECT set_config('request.jwt.claim.sub','00000000-0000-4000-8000-000000000102',false);
SET ROLE authenticated;
SELECT public.baseline_set_accommodation('00000000-0000-4000-8000-000000000101'::uuid,25);
RESET ROLE;
SELECT set_config('request.jwt.claim.sub','00000000-0000-4000-8000-000000000101',false);
SET ROLE authenticated;
DO $verify$
DECLARE r jsonb; sid uuid; q jsonb;
BEGIN
 r:=public.baseline_status();
 IF r->>'ready'<>'true' OR r->>'bank_ready'<>'true' OR (r->>'item_count')::integer<>20
 THEN RAISE EXCEPTION 'Student readiness/20 items incorrect: %',r;END IF;
 IF (r->>'minutes')::integer<>44 THEN RAISE EXCEPTION '25%% extra time was not applied: %',r;END IF;
 r:=public.baseline_start();
 sid:=(r->>'session_id')::uuid;
 IF sid IS NULL OR jsonb_array_length(r->'questions')<>20 THEN RAISE EXCEPTION '20-question sitting not created';END IF;
 q:=r->'questions'->0;
 IF q ? 'correct_choice' OR q ? 'explanation' OR jsonb_array_length(q->'choices')<>4 THEN
  RAISE EXCEPTION 'Active item leaked marking scheme or missing options';END IF;
 IF (r->>'score') IS NOT NULL THEN RAISE EXCEPTION 'Active sitting leaked score';END IF;
 PERFORM public.baseline_answer(sid,1,'A');
 r:=public.baseline_status();
 IF (r->>'submitted_count')::integer<>1 THEN RAISE EXCEPTION 'Answer was not persisted';END IF;
 r:=public.baseline_finish(sid);
 IF r->>'status'<>'submitted' OR (r->>'score') IS NULL
 OR jsonb_array_length(r->'review')<>20 THEN RAISE EXCEPTION 'Marking/report failed: %',r;END IF;
 BEGIN
  PERFORM public.baseline_answer(sid,2,'B');
  IF (SELECT count(*) FROM private.baseline_answers WHERE session_id=sid)<>1 THEN
   RAISE EXCEPTION 'Finished sitting should never accept new answers';END IF;
 EXCEPTION WHEN insufficient_privilege THEN NULL;
 END;
 IF (public.baseline_start()->>'session_id')::uuid<>sid THEN RAISE EXCEPTION 'Sitting retake bypass detected';END IF;
 RAISE NOTICE '20-item baseline, 25%% extra time, autosave, report and single sitting passed.';
END
$verify$;
RESET ROLE;
SELECT set_config('request.jwt.claim.sub','00000000-0000-4000-8000-000000000103',false);
SET ROLE authenticated;
DO $wronguser$
DECLARE r jsonb;
BEGIN
 r:=public.baseline_status();
 IF r->>'ready'='true' THEN RAISE EXCEPTION 'Unauthorised account received a student baseline';END IF;
 BEGIN
  PERFORM public.baseline_admin_overview('00000000-0000-4000-8000-000000000001'::uuid);
  RAISE EXCEPTION 'Unauthorised staff overview succeeded';
 EXCEPTION WHEN raise_exception THEN
   IF SQLERRM='Unauthorised staff overview succeeded' THEN RAISE;END IF;
 END;
 RAISE NOTICE 'Unassigned account cannot use student/admin baseline.';
END
$wronguser$;
RESET ROLE;
SELECT set_config('request.jwt.claim.sub','00000000-0000-4000-8000-000000000102',false);
SET ROLE authenticated;
DO $admin$
DECLARE r jsonb;
BEGIN
 r:=public.baseline_admin_overview('00000000-0000-4000-8000-000000000001'::uuid);
 IF jsonb_array_length(r->'sessions')<>1 THEN RAISE EXCEPTION 'Admin baseline overview incorrect: %',r;END IF;
END
$admin$;
