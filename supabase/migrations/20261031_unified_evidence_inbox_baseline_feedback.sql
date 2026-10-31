BEGIN;
-- Baseline is automatically scored on MCQs, but the examiner can add and release
-- an independent written review after reading original student working.
CREATE TABLE IF NOT EXISTS private.grove_baseline_feedback(
 session_id uuid PRIMARY KEY REFERENCES private.baseline_sessions(id) ON DELETE CASCADE,
 feedback text NOT NULL CHECK (char_length(feedback) BETWEEN 15 AND 2500),
 updated_by uuid NOT NULL REFERENCES auth.users(id),
 updated_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE private.grove_baseline_feedback ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON private.grove_baseline_feedback FROM PUBLIC,anon,authenticated;
CREATE OR REPLACE FUNCTION public.grove_staff_save_baseline_feedback(p_session uuid,p_feedback text)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v_s private.baseline_sessions%ROWTYPE;v_note text:=trim(coalesce(p_feedback,''));
BEGIN
 SELECT * INTO v_s FROM private.baseline_sessions WHERE id=p_session FOR UPDATE;
 IF v_s.id IS NULL OR NOT private.is_staff(v_s.org_id) THEN RAISE EXCEPTION 'Authorised examiner access required'; END IF;
 IF v_s.status NOT IN('submitted','expired') THEN RAISE EXCEPTION 'Baseline is not complete';END IF;
 IF char_length(v_note)<15 OR char_length(v_note)>2500 THEN RAISE EXCEPTION 'Enter 15–2500 characters of meaningful feedback';END IF;
 INSERT INTO private.grove_baseline_feedback(session_id,feedback,updated_by)
 VALUES(p_session,v_note,(SELECT auth.uid()))
 ON CONFLICT(session_id) DO UPDATE SET feedback=excluded.feedback,updated_by=excluded.updated_by,updated_at=now();
 RETURN jsonb_build_object('ok',true,'released',true,'updated_at',now());
END;$$;
REVOKE ALL ON FUNCTION public.grove_staff_save_baseline_feedback(uuid,text) FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.grove_staff_save_baseline_feedback(uuid,text) TO authenticated;

CREATE OR REPLACE FUNCTION public.grove_my_baseline_feedback()
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v_uid uuid:=(SELECT auth.uid());v_s private.baseline_sessions%ROWTYPE;
BEGIN
 IF v_uid IS NULL THEN RAISE EXCEPTION 'Student sign-in required';END IF;
 SELECT * INTO v_s FROM private.baseline_sessions
 WHERE student_id=v_uid AND status IN('submitted','expired')
 ORDER BY started_at DESC LIMIT 1;
 IF v_s.id IS NULL THEN RETURN jsonb_build_object('released',false);END IF;
 RETURN (SELECT jsonb_build_object('released',true,'feedback',feedback,'updated_at',updated_at)
  FROM private.grove_baseline_feedback WHERE session_id=v_s.id)
  -- No feedback written yet.
  ;
END;$$;
REVOKE ALL ON FUNCTION public.grove_my_baseline_feedback() FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.grove_my_baseline_feedback() TO authenticated;

CREATE OR REPLACE FUNCTION public.grove_staff_evidence(p_kind text, p_session uuid)
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
DECLARE v_org uuid;v_rows jsonb;v_times jsonb;v_events jsonb;
BEGIN
 IF p_kind='baseline' THEN SELECT org_id INTO v_org FROM private.baseline_sessions WHERE id=p_session;
 ELSIF p_kind='practice' THEN SELECT org_id INTO v_org FROM private.grove_tasks WHERE id=p_session;
 ELSE RAISE EXCEPTION 'Invalid assessment type';END IF;
 IF v_org IS NULL OR NOT private.is_staff(v_org) THEN RAISE EXCEPTION 'Authorised examiner access required';END IF;
 SELECT coalesce(jsonb_agg(jsonb_build_object('position',position,'file_kind',file_kind,
  'original_name',original_name,'storage_path',storage_path,'created_at',created_at)
 ORDER BY position,created_at),'[]'::jsonb) INTO v_rows FROM private.grove_work_evidence
 WHERE (p_kind='baseline' AND baseline_session_id=p_session) OR (p_kind='practice' AND task_id=p_session);
 IF p_kind='baseline' THEN
  SELECT coalesce(jsonb_agg(jsonb_build_object('kind',kind,'at',created_at) ORDER BY created_at),'[]'::jsonb)
   INTO v_events FROM private.baseline_events WHERE session_id=p_session;
 END IF;
 RETURN jsonb_build_object('files',v_rows,'events',coalesce(v_events,'[]'::jsonb),
 'feedback',CASE WHEN p_kind='baseline' THEN (SELECT feedback FROM private.grove_baseline_feedback WHERE session_id=p_session) END,
 'timings',CASE WHEN p_kind='baseline' THEN (
 SELECT coalesce(jsonb_agg(jsonb_build_object('position',position,'seconds',seconds_visible)
 ORDER BY position),'[]'::jsonb) FROM private.baseline_question_time WHERE session_id=p_session)
 ELSE '[]'::jsonb END);
END;$function$
;
CREATE OR REPLACE FUNCTION public.grove_offboarding_extra(p_org uuid, p_student uuid)
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
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
  'baseline_staff_feedback',(SELECT coalesce(jsonb_agg(to_jsonb(b)),'[]'::jsonb)
 FROM private.grove_baseline_feedback b JOIN private.baseline_sessions s ON s.id=b.session_id WHERE s.student_id=p_student AND s.org_id=p_org),
 'baseline_question_times',(SELECT coalesce(jsonb_agg(to_jsonb(tm)),'[]'::jsonb)
   FROM private.baseline_question_time tm JOIN private.baseline_sessions s ON s.id=tm.session_id WHERE s.student_id=p_student AND s.org_id=p_org)
 );
END;$function$
;
CREATE OR REPLACE FUNCTION public.grove_admin_schedule(p_org uuid)
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
DECLARE result jsonb;
BEGIN
 IF (SELECT auth.uid()) IS NULL OR NOT private.is_staff(p_org) THEN RAISE EXCEPTION 'Staff permissions required';END IF;
 SELECT coalesce(jsonb_agg(rec ORDER BY due_date DESC),'[]'::jsonb) INTO result FROM (
 SELECT t.due_date, jsonb_build_object('task_id',t.id,'student_id',t.student_id,
 'student_name',coalesce(p.display_name,'Student'),'qualification',t.qualification,'level',t.academic_level,
 'programme',t.programme,'mode',t.mode,'due_date',t.due_date,'status',t.status,
 'review_status',t.review_status,'score',CASE WHEN t.review_status='released' THEN t.score ELSE NULL END,
 'question_count',t.question_count,'teacher_feedback',CASE WHEN t.review_status='released' THEN
  (SELECT f.feedback FROM private.grove_task_feedback f WHERE f.task_id=t.id) END,
 'minutes_visible',(SELECT coalesce(round(sum(coalesce(q.seconds_visible,0))/60.0,1),0) FROM private.grove_question_time q WHERE q.task_id=t.id),
 'question_insights',CASE WHEN t.status IN('completed','expired') THEN
  (SELECT coalesce(jsonb_agg(jsonb_build_object('position',i.position,'topic',i.topic,'skill',i.skill,
    'mark',m.mark,'seconds_visible',coalesce(q.seconds_visible,0),
    'evidence_count',(SELECT count(*) FROM private.grove_work_evidence e WHERE e.task_id=t.id AND e.position=i.position))
    ORDER BY i.position),'[]'::jsonb)
   FROM private.grove_task_items i
   LEFT JOIN private.grove_practice_marks m ON m.task_id=i.task_id AND m.position=i.position
   LEFT JOIN private.grove_question_time q ON q.task_id=i.task_id AND q.position=i.position
   WHERE i.task_id=t.id) ELSE '[]'::jsonb END
 ) rec
 FROM private.grove_tasks t JOIN public.profiles p ON p.id=t.student_id
 WHERE t.org_id=p_org AND ((t.status IN ('completed','expired') AND t.review_status<>'released') OR t.due_date>=current_date-180)
 ORDER BY CASE WHEN t.status IN ('completed','expired') AND t.review_status<>'released' THEN 0 ELSE 1 END,t.due_date DESC LIMIT 600
 ) a;
 RETURN jsonb_build_object('ok',true,'assignments',result);
END;$function$
;
COMMIT;