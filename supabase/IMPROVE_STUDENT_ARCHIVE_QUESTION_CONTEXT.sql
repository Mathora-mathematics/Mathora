CREATE OR REPLACE FUNCTION public.grove_offboarding_export(p_org uuid,p_student uuid)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE a uuid[];b uuid[];g uuid[];v_email text;
BEGIN
 IF NOT EXISTS(SELECT 1 FROM private.grove_offboarding_jobs
   WHERE org_id=p_org AND student_id=p_student AND status IN('requested','preparing','emailed','downloaded'))
 THEN RAISE EXCEPTION 'No authorised export request';END IF;
 SELECT u.email INTO v_email FROM auth.users u WHERE u.id=p_student;
 SELECT coalesce(array_agg(id),ARRAY[]::uuid[]) INTO a FROM public.attempts WHERE student_id=p_student AND org_id=p_org;
 SELECT coalesce(array_agg(id),ARRAY[]::uuid[]) INTO b FROM private.baseline_sessions WHERE student_id=p_student AND org_id=p_org;
 SELECT coalesce(array_agg(id),ARRAY[]::uuid[]) INTO g FROM private.grove_tasks WHERE student_id=p_student AND org_id=p_org;
 RETURN jsonb_build_object(
  'format','MathsGrove learner data export v1','exported_at',now(),'student_email',v_email,
  'student_profile',(SELECT to_jsonb(t) FROM public.profiles t WHERE id=p_student),
  'academic_preferences',(SELECT to_jsonb(t) FROM public.student_preferences t WHERE student_id=p_student),
  'academic_settings',(SELECT to_jsonb(t)-'staff_notes' FROM public.student_academic_settings t WHERE student_id=p_student AND org_id=p_org),
  'subscription',(SELECT to_jsonb(t) FROM public.student_entitlements t WHERE student_id=p_student AND org_id=p_org),
  'service_addons',(SELECT coalesce(jsonb_agg(to_jsonb(t)),'[]'::jsonb) FROM public.student_service_addons t WHERE student_id=p_student AND org_id=p_org),
  'attempts',(SELECT coalesce(jsonb_agg(to_jsonb(t)),'[]'::jsonb) FROM public.attempts t WHERE id=ANY(a)),
  'answers',(SELECT coalesce(jsonb_agg(to_jsonb(t)),'[]'::jsonb) FROM public.answers t WHERE attempt_id=ANY(a) AND student_id=p_student),
  'uploaded_files',(SELECT coalesce(jsonb_agg(to_jsonb(t)),'[]'::jsonb) FROM public.answer_files t WHERE attempt_id=ANY(a) AND student_id=p_student),
  'paper_questions',(SELECT coalesce(jsonb_agg(to_jsonb(t)),'[]'::jsonb) FROM public.paper_questions t WHERE attempt_id=ANY(a)),
  'paper_question_stems',(SELECT coalesce(jsonb_agg(jsonb_build_object(
   'attempt_id',pq.attempt_id,'position',pq.position,'question_id',pq.question_id,
   'prompt',qb.prompt,'topic',qb.topic,'marks',qb.marks)),'[]'::jsonb)
   FROM public.paper_questions pq JOIN public.question_bank qb ON qb.id=pq.question_id
   WHERE pq.attempt_id=ANY(a)),
  'examiner_feedback',(SELECT coalesce(jsonb_agg(to_jsonb(t)),'[]'::jsonb) FROM public.reviews t WHERE attempt_id=ANY(a)),
  'examiner_summaries',(SELECT coalesce(jsonb_agg(to_jsonb(t)),'[]'::jsonb) FROM public.review_summaries t WHERE attempt_id=ANY(a) AND released_at IS NOT NULL),
  'baseline_sittings',(SELECT coalesce(jsonb_agg(to_jsonb(t)),'[]'::jsonb) FROM private.baseline_sessions t WHERE id=ANY(b)),
  'baseline_questions',(SELECT coalesce(jsonb_agg(to_jsonb(t)),'[]'::jsonb) FROM private.baseline_items t WHERE session_id=ANY(b)),
  'baseline_responses',(SELECT coalesce(jsonb_agg(to_jsonb(t)),'[]'::jsonb) FROM private.baseline_answers t WHERE session_id=ANY(b)),
  'baseline_focus_events',(SELECT coalesce(jsonb_agg(to_jsonb(t)),'[]'::jsonb) FROM private.baseline_events t WHERE session_id=ANY(b)),
  'baseline_extra_time',(SELECT to_jsonb(t) FROM private.baseline_accommodations t WHERE student_id=p_student),
  'practice_assignments',(SELECT coalesce(jsonb_agg(to_jsonb(t)),'[]'::jsonb) FROM private.grove_tasks t WHERE id=ANY(g)),
  'practice_questions',(SELECT coalesce(jsonb_agg(to_jsonb(t)),'[]'::jsonb) FROM private.grove_task_items t WHERE task_id=ANY(g)),
  'practice_responses',(SELECT coalesce(jsonb_agg(to_jsonb(t)),'[]'::jsonb) FROM private.grove_task_answers t WHERE task_id=ANY(g)),
  'practice_question_timing',(SELECT coalesce(jsonb_agg(to_jsonb(t)),'[]'::jsonb) FROM private.grove_question_time t WHERE task_id=ANY(g)),
  'released_teacher_feedback',(SELECT coalesce(jsonb_agg(to_jsonb(t)),'[]'::jsonb) FROM private.grove_task_feedback t WHERE task_id=ANY(g)),
  'linked_viewers',(SELECT coalesce(jsonb_agg(jsonb_build_object('role',t.view_role,'active',t.active)),'[]'::jsonb)
    FROM public.learner_view_links t WHERE t.student_id=p_student AND t.org_id=p_org)
 );
END;$$;
REVOKE ALL ON FUNCTION public.grove_offboarding_export(uuid,uuid) FROM PUBLIC,anon,authenticated;
GRANT EXECUTE ON FUNCTION public.grove_offboarding_export(uuid,uuid) TO service_role;