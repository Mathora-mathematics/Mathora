BEGIN;
CREATE OR REPLACE FUNCTION public.grove_offboarding_remove_records(p_job uuid)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE j private.grove_offboarding_jobs%ROWTYPE;v_attempts uuid[];v_baselines uuid[];v_tasks uuid[];
BEGIN
 SELECT * INTO j FROM private.grove_offboarding_jobs WHERE id=p_job FOR UPDATE;
 IF j.id IS NULL OR j.status<>'purging' OR j.downloaded_at IS NULL
 THEN RAISE EXCEPTION 'Confirmed export required';END IF;
 SELECT coalesce(array_agg(id),'{}'::uuid[]) INTO v_attempts FROM public.attempts
 WHERE student_id=j.student_id AND org_id=j.org_id;
 SELECT coalesce(array_agg(id),'{}'::uuid[]) INTO v_baselines FROM private.baseline_sessions
 WHERE student_id=j.student_id AND org_id=j.org_id;
 SELECT coalesce(array_agg(id),'{}'::uuid[]) INTO v_tasks FROM private.grove_tasks
 WHERE student_id=j.student_id AND org_id=j.org_id;
 -- Remove permissions before personal learning records, preventing new enrolled work.
 DELETE FROM public.memberships WHERE user_id=j.student_id AND org_id=j.org_id AND member_role='student';
 DELETE FROM public.student_entitlements WHERE student_id=j.student_id AND org_id=j.org_id;
 DELETE FROM private.grove_question_time WHERE task_id=ANY(v_tasks);
 DELETE FROM private.grove_task_answers WHERE task_id=ANY(v_tasks);
 DELETE FROM private.grove_task_items WHERE task_id=ANY(v_tasks);
 DELETE FROM private.grove_feedback_history WHERE task_id=ANY(v_tasks);
 DELETE FROM private.grove_task_feedback WHERE task_id=ANY(v_tasks);
 DELETE FROM private.grove_tasks WHERE id=ANY(v_tasks);
 DELETE FROM private.baseline_answers WHERE session_id=ANY(v_baselines);
 DELETE FROM private.baseline_events WHERE session_id=ANY(v_baselines);
 DELETE FROM private.baseline_items WHERE session_id=ANY(v_baselines);
 DELETE FROM private.baseline_sessions WHERE id=ANY(v_baselines);
 DELETE FROM private.baseline_accommodations WHERE student_id=j.student_id;
 DELETE FROM public.reviews WHERE attempt_id=ANY(v_attempts);
 DELETE FROM public.review_summaries WHERE attempt_id=ANY(v_attempts);
 DELETE FROM public.answer_files WHERE attempt_id=ANY(v_attempts);
 DELETE FROM public.answers WHERE attempt_id=ANY(v_attempts);
 DELETE FROM public.paper_questions WHERE attempt_id=ANY(v_attempts);
 DELETE FROM public.attempts WHERE id=ANY(v_attempts);
 DELETE FROM public.learner_view_links WHERE student_id=j.student_id OR viewer_id=j.student_id;
 DELETE FROM public.learner_view_invitations WHERE (org_id=j.org_id AND lower(student_email)=lower(j.recipient_email)) OR lower(viewer_email)=lower(j.recipient_email);
 DELETE FROM public.student_academic_settings WHERE student_id=j.student_id AND org_id=j.org_id;
 DELETE FROM public.student_service_addons WHERE student_id=j.student_id AND org_id=j.org_id;
 DELETE FROM public.pending_student_setups WHERE email=j.recipient_email AND org_id=j.org_id;
 DELETE FROM public.invitations WHERE redeemed_by=j.student_id OR (email=j.recipient_email AND org_id=j.org_id);
 DELETE FROM public.student_preferences WHERE student_id=j.student_id;
 DELETE FROM public.profiles WHERE id=j.student_id;
END;$$;
REVOKE ALL ON FUNCTION public.grove_offboarding_remove_records(uuid) FROM PUBLIC,anon,authenticated;
GRANT EXECUTE ON FUNCTION public.grove_offboarding_remove_records(uuid) TO service_role;
CREATE OR REPLACE FUNCTION public.grove_offboarding_verify_cleanup(p_job uuid)
RETURNS boolean LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE j private.grove_offboarding_jobs%ROWTYPE;remaining bigint;
BEGIN
 SELECT * INTO j FROM private.grove_offboarding_jobs WHERE id=p_job FOR UPDATE;
 IF j.id IS NULL OR j.status<>'purging' OR j.student_id IS NULL OR j.downloaded_at IS NULL
 THEN RAISE EXCEPTION 'A verified, active removal job is required'; END IF;
 SELECT (
 (SELECT count(*) FROM auth.users WHERE id=j.student_id)
 +(SELECT count(*) FROM public.memberships WHERE user_id=j.student_id)
 +(SELECT count(*) FROM public.profiles WHERE id=j.student_id)
 +(SELECT count(*) FROM public.student_preferences WHERE student_id=j.student_id)
 +(SELECT count(*) FROM public.student_entitlements WHERE student_id=j.student_id)
 +(SELECT count(*) FROM public.student_academic_settings WHERE student_id=j.student_id)
 +(SELECT count(*) FROM public.student_service_addons WHERE student_id=j.student_id)
 +(SELECT count(*) FROM public.pending_student_setups WHERE org_id=j.org_id AND lower(email)=lower(j.recipient_email))
 +(SELECT count(*) FROM public.invitations WHERE redeemed_by=j.student_id OR (org_id=j.org_id AND lower(email)=lower(j.recipient_email)))
 +(SELECT count(*) FROM public.learner_view_links WHERE student_id=j.student_id OR viewer_id=j.student_id)
 +(SELECT count(*) FROM public.learner_view_invitations WHERE (org_id=j.org_id AND lower(student_email)=lower(j.recipient_email)) OR lower(viewer_email)=lower(j.recipient_email))
 +(SELECT count(*) FROM public.attempts WHERE student_id=j.student_id)
 +(SELECT count(*) FROM public.answers WHERE student_id=j.student_id)
 +(SELECT count(*) FROM public.answer_files WHERE student_id=j.student_id)
 +(SELECT count(*) FROM private.baseline_sessions WHERE student_id=j.student_id)
 +(SELECT count(*) FROM private.baseline_accommodations WHERE student_id=j.student_id)
 +(SELECT count(*) FROM private.grove_tasks WHERE student_id=j.student_id)
 +(SELECT count(*) FROM storage.objects WHERE bucket_id IN ('student-work','grove-student-exports')
    AND name LIKE (j.org_id::text||'/'||j.student_id::text||'/%'))
 ) INTO remaining;
 IF remaining<>0 THEN RAISE EXCEPTION 'Student account cleanup verification incomplete; residual records still exist';
 END IF;
 RETURN true;
END;$$;
REVOKE ALL ON FUNCTION public.grove_offboarding_verify_cleanup(uuid) FROM PUBLIC,anon,authenticated;
GRANT EXECUTE ON FUNCTION public.grove_offboarding_verify_cleanup(uuid) TO service_role;
COMMIT;