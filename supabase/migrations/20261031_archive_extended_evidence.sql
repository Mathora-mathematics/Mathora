BEGIN;
-- Enrich the complete student ZIP with examiner marks, evidence and topic timings.
CREATE OR REPLACE FUNCTION public.grove_offboarding_extra(p_org uuid,p_student uuid)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
BEGIN
 IF NOT EXISTS(SELECT 1 FROM private.grove_offboarding_jobs WHERE org_id=p_org AND student_id=p_student
  AND status IN('requested','preparing','ready_manual','downloaded')) THEN
  RAISE EXCEPTION 'An authorised student archive request is required';END IF;
 RETURN jsonb_build_object(
  'target_grade',(SELECT target_grade FROM public.student_academic_settings WHERE student_id=p_student AND org_id=p_org),
  'work_evidence',(SELECT coalesce(jsonb_agg(to_jsonb(e) ORDER BY e.created_at),'[]'::jsonb)
   FROM private.grove_work_evidence e WHERE e.student_id=p_student AND e.org_id=p_org),
  'manual_question_marks',(SELECT coalesce(jsonb_agg(to_jsonb(m)),'[]'::jsonb)
   FROM private.grove_practice_marks m JOIN private.grove_tasks t ON t.id=m.task_id WHERE t.student_id=p_student AND t.org_id=p_org),
  'baseline_question_times',(SELECT coalesce(jsonb_agg(to_jsonb(tm)),'[]'::jsonb)
   FROM private.baseline_question_time tm JOIN private.baseline_sessions s ON s.id=tm.session_id WHERE s.student_id=p_student AND s.org_id=p_org)
 );
END;$$;
REVOKE ALL ON FUNCTION public.grove_offboarding_extra(uuid,uuid) FROM PUBLIC,anon,authenticated;
GRANT EXECUTE ON FUNCTION public.grove_offboarding_extra(uuid,uuid) TO service_role;

CREATE OR REPLACE FUNCTION public.grove_offboarding_manual_details(p_org uuid,p_student uuid)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE j private.grove_offboarding_jobs%ROWTYPE;
BEGIN
 IF NOT private.grove_offboarding_is_admin(p_org,(SELECT auth.uid()))
 THEN RAISE EXCEPTION 'MathsGrove administrator role required';END IF;
 SELECT * INTO j FROM private.grove_offboarding_jobs WHERE org_id=p_org AND student_id=p_student ORDER BY created_at DESC LIMIT 1;
 IF j.id IS NULL THEN RETURN jsonb_build_object('ready',false);END IF;
 RETURN jsonb_build_object('ready',j.status IN('ready_manual','downloaded'),'job_id',j.id,
  'status',j.status,'checksum',j.export_hash,
  'archive_path',CASE WHEN j.status='ready_manual' THEN j.archive_path ELSE NULL END);
END;$$;
REVOKE ALL ON FUNCTION public.grove_offboarding_manual_details(uuid,uuid) FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.grove_offboarding_manual_details(uuid,uuid) TO authenticated;
COMMIT;