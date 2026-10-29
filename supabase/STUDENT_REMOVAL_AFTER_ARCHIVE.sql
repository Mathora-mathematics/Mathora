BEGIN;
CREATE OR REPLACE FUNCTION public.grove_offboarding_begin_removal(p_job uuid)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE j private.grove_offboarding_jobs%ROWTYPE;v_count integer;
BEGIN
 SELECT * INTO j FROM private.grove_offboarding_jobs WHERE id=p_job FOR UPDATE;
 IF j.id IS NULL OR j.status NOT IN('downloaded','purging') OR j.downloaded_at IS NULL
 THEN RAISE EXCEPTION 'A confirmed archive download is required before removal';END IF;
 SELECT count(*) INTO v_count FROM public.memberships WHERE user_id=j.student_id;
 IF j.status='downloaded' AND (v_count<>1 OR NOT EXISTS(SELECT 1 FROM public.memberships
 WHERE user_id=j.student_id AND org_id=j.org_id AND member_role='student'))
 THEN RAISE EXCEPTION 'Account roles have changed. Removal stopped';END IF;
 UPDATE private.grove_offboarding_jobs SET status='purging',updated_at=now() WHERE id=p_job;
 RETURN jsonb_build_object('student_id',j.student_id,'org_id',j.org_id,
 'recipient_email',j.recipient_email,'archive_path',j.archive_path);
END;$$;
REVOKE ALL ON FUNCTION public.grove_offboarding_begin_removal(uuid) FROM PUBLIC,anon,authenticated;
GRANT EXECUTE ON FUNCTION public.grove_offboarding_begin_removal(uuid) TO service_role;

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
 DELETE FROM public.learner_view_links WHERE student_id=j.student_id AND org_id=j.org_id;
 DELETE FROM public.learner_view_invitations WHERE student_email=j.recipient_email AND org_id=j.org_id;
 DELETE FROM public.student_academic_settings WHERE student_id=j.student_id AND org_id=j.org_id;
 DELETE FROM public.student_service_addons WHERE student_id=j.student_id AND org_id=j.org_id;
 DELETE FROM public.pending_student_setups WHERE email=j.recipient_email AND org_id=j.org_id;
 DELETE FROM public.invitations WHERE redeemed_by=j.student_id OR (email=j.recipient_email AND org_id=j.org_id);
 DELETE FROM public.student_preferences WHERE student_id=j.student_id;
 DELETE FROM public.profiles WHERE id=j.student_id;
END;$$;
REVOKE ALL ON FUNCTION public.grove_offboarding_remove_records(uuid) FROM PUBLIC,anon,authenticated;
GRANT EXECUTE ON FUNCTION public.grove_offboarding_remove_records(uuid) TO service_role;

CREATE OR REPLACE FUNCTION public.grove_offboarding_record_completion(p_job uuid)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
BEGIN
 UPDATE private.grove_offboarding_jobs SET status='purged',recipient_email=NULL,
 download_token_hash=NULL,archive_path=NULL,export_hash=NULL,provider_message_id=NULL,
 last_error=NULL,purged_at=now(),updated_at=now()
 WHERE id=p_job AND status='purging';
 IF NOT FOUND THEN RAISE EXCEPTION 'Removal was not in progress';END IF;
END;$$;
REVOKE ALL ON FUNCTION public.grove_offboarding_record_completion(uuid) FROM PUBLIC,anon,authenticated;
GRANT EXECUTE ON FUNCTION public.grove_offboarding_record_completion(uuid) TO service_role;
COMMIT;