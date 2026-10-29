-- Materialize calendar tasks immediately after admin changes enrolment or academic route.
-- New tasks appear at activation, even before the student's first login.
BEGIN;
CREATE OR REPLACE FUNCTION private.grove_assign_student(p_student uuid)
RETURNS integer LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v_route jsonb;v_org uuid;v_prog text;v_day date;v_start date;v_count integer:=0;v_date date;
BEGIN
 v_route:=private.baseline_route(p_student);
 IF NOT coalesce((v_route->>'ready')::boolean,false) THEN RETURN 0;END IF;
 v_org:=(v_route->>'org_id')::uuid;v_prog:=v_route->>'programme';
 SELECT greatest(current_date,starts_at::date) INTO v_start FROM public.student_entitlements
 WHERE student_id=p_student AND org_id=v_org;
 -- Invalidate only future unopened assignments if the administrator changed level/tier.
 DELETE FROM private.grove_tasks
 WHERE student_id=p_student AND due_date>=current_date AND status='scheduled'
 AND (qualification<>v_route->>'qualification' OR academic_level<>v_route->>'level' OR programme<>v_prog);
 FOR v_day IN SELECT d::date FROM generate_series(v_start::timestamp,(v_start+27)::timestamp,'1 day') d LOOP
  IF v_prog='weekly' AND mod((v_day-(SELECT starts_at::date FROM public.student_entitlements
      WHERE student_id=p_student AND org_id=v_org)),7)<>0 THEN CONTINUE;END IF;
  INSERT INTO private.grove_tasks(student_id,org_id,qualification,academic_level,programme,mode,due_date,question_count)
  VALUES(p_student,v_org,v_route->>'qualification',v_route->>'level',v_prog,
    CASE WHEN v_prog='weekly' THEN 'weekly' WHEN v_prog='exam' THEN 'exam_daily' ELSE 'daily' END,
    v_day,CASE WHEN v_prog='weekly' THEN 8 WHEN v_prog='exam' THEN 6 ELSE 4 END)
  ON CONFLICT(student_id,due_date,mode) DO NOTHING;
  v_count:=v_count+1;
 END LOOP;
 IF v_prog='exam' THEN
  v_date:=(date_trunc('month',v_start)::date+interval '1 month'-interval '1 day')::date;
  INSERT INTO private.grove_tasks(student_id,org_id,qualification,academic_level,programme,mode,due_date,question_count)
  VALUES(p_student,v_org,v_route->>'qualification',v_route->>'level',v_prog,'mock_pending',v_date,0)
  ON CONFLICT(student_id,due_date,mode) DO NOTHING;
 END IF;
 RETURN v_count;
END;$$;
REVOKE ALL ON FUNCTION private.grove_assign_student(uuid) FROM PUBLIC,anon,authenticated;
CREATE OR REPLACE FUNCTION private.grove_enrolment_trigger()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
BEGIN
 PERFORM private.grove_assign_student(NEW.student_id);
 RETURN NEW;
END;$$;
REVOKE ALL ON FUNCTION private.grove_enrolment_trigger() FROM PUBLIC,anon,authenticated;
DROP TRIGGER IF EXISTS grove_assign_on_entitlement ON public.student_entitlements;
CREATE TRIGGER grove_assign_on_entitlement AFTER INSERT OR UPDATE OF tier,starts_at,ends_at
ON public.student_entitlements FOR EACH ROW EXECUTE FUNCTION private.grove_enrolment_trigger();
DROP TRIGGER IF EXISTS grove_assign_on_academic_route ON public.student_preferences;
CREATE TRIGGER grove_assign_on_academic_route AFTER INSERT OR UPDATE OF qualification,tier
ON public.student_preferences FOR EACH ROW EXECUTE FUNCTION private.grove_enrolment_trigger();
-- Backfill existing active students; no test/examination sessions are started.
SELECT private.grove_assign_student(student_id) FROM public.student_entitlements
 WHERE starts_at<=now() AND (ends_at IS NULL OR ends_at>now());
COMMIT;