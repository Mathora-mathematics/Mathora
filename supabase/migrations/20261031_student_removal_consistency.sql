-- 2026-10-31: A learner's downloaded archive must match their records at deletion time.
-- This migration does not erase or change any currently enrolled student.
BEGIN;
ALTER TABLE private.grove_offboarding_jobs ADD COLUMN IF NOT EXISTS source_fingerprint text;

CREATE OR REPLACE FUNCTION public.grove_offboarding_mark_manual_ready_v2(
 p_job uuid, p_path text, p_checksum text, p_fingerprint text)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
BEGIN
 IF p_path IS NULL OR length(p_path)<25 OR p_checksum !~ '^[a-f0-9]{64}$'
    OR p_fingerprint !~ '^[a-f0-9]{64}$'
 THEN RAISE EXCEPTION 'Valid archive checksums and storage path are required'; END IF;
 UPDATE private.grove_offboarding_jobs
 SET status='ready_manual',archive_path=p_path,export_hash=p_checksum,
 source_fingerprint=p_fingerprint,prepared_at=now(),updated_at=now(),
 last_error=NULL,provider_message_id=NULL,download_token_hash=NULL,
 download_expires_at=NULL,downloaded_at=NULL
 WHERE id=p_job AND status IN ('requested','failed','ready_manual');
 IF NOT FOUND THEN RAISE EXCEPTION 'Archive is not in the preparation stage'; END IF;
END;$$;
REVOKE ALL ON FUNCTION public.grove_offboarding_mark_manual_ready_v2(uuid,text,text,text) FROM PUBLIC,anon,authenticated;
GRANT EXECUTE ON FUNCTION public.grove_offboarding_mark_manual_ready_v2(uuid,text,text,text) TO service_role;

CREATE OR REPLACE FUNCTION public.grove_offboarding_verify_source(p_job uuid,p_fingerprint text)
RETURNS boolean LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE j private.grove_offboarding_jobs%ROWTYPE;
BEGIN
 SELECT * INTO j FROM private.grove_offboarding_jobs WHERE id=p_job FOR UPDATE;
 IF j.id IS NULL OR j.status<>'downloaded' OR j.downloaded_at IS NULL
 THEN RAISE EXCEPTION 'A saved and confirmed archive is required';END IF;
 IF j.source_fingerprint IS NULL OR j.source_fingerprint<>p_fingerprint THEN
  UPDATE private.grove_offboarding_jobs SET status='failed',
    last_error='Student records changed since export. Download and verify a fresh ZIP.',
    source_fingerprint=NULL,archive_path=NULL,export_hash=NULL,
    downloaded_at=NULL,updated_at=now()
  WHERE id=p_job;
  RETURN false;
 END IF;
 RETURN true;
END;$$;
REVOKE ALL ON FUNCTION public.grove_offboarding_verify_source(uuid,text) FROM PUBLIC,anon,authenticated;
GRANT EXECUTE ON FUNCTION public.grove_offboarding_verify_source(uuid,text) TO service_role;

CREATE OR REPLACE FUNCTION public.grove_offboarding_begin_removal(p_job uuid)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE j private.grove_offboarding_jobs%ROWTYPE; v_count integer;
BEGIN
 SELECT * INTO j FROM private.grove_offboarding_jobs WHERE id=p_job FOR UPDATE;
 IF j.id IS NULL OR j.status NOT IN ('downloaded','purging')
    OR j.downloaded_at IS NULL OR j.source_fingerprint IS NULL
 THEN RAISE EXCEPTION 'A current, verified and confirmed ZIP is required';END IF;
 SELECT count(*) INTO v_count FROM public.memberships WHERE user_id=j.student_id;
 IF j.status='downloaded' AND
  (v_count<>1 OR NOT EXISTS(SELECT 1 FROM public.memberships
   WHERE user_id=j.student_id AND org_id=j.org_id AND member_role='student'))
 THEN RAISE EXCEPTION 'Account roles changed: removal blocked';END IF;
 UPDATE private.grove_offboarding_jobs SET status='purging',updated_at=now() WHERE id=p_job;
 RETURN jsonb_build_object('student_id',j.student_id,'org_id',j.org_id,
   'recipient_email',j.recipient_email,'archive_path',j.archive_path);
END;$$;
REVOKE ALL ON FUNCTION public.grove_offboarding_begin_removal(uuid) FROM PUBLIC,anon,authenticated;
GRANT EXECUTE ON FUNCTION public.grove_offboarding_begin_removal(uuid) TO service_role;

-- Delete by the confirmed student's identity, including accidentally orphaned items.
CREATE OR REPLACE FUNCTION public.grove_offboarding_remove_records(p_job uuid)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE j private.grove_offboarding_jobs%ROWTYPE; v_attempts uuid[];v_baselines uuid[];v_tasks uuid[];
BEGIN
 SELECT * INTO j FROM private.grove_offboarding_jobs WHERE id=p_job FOR UPDATE;
 IF j.id IS NULL OR j.status<>'purging' OR j.downloaded_at IS NULL
 THEN RAISE EXCEPTION 'Confirmed export required';END IF;
 SELECT coalesce(array_agg(id),'{}'::uuid[]) INTO v_attempts FROM public.attempts WHERE student_id=j.student_id;
 SELECT coalesce(array_agg(id),'{}'::uuid[]) INTO v_baselines FROM private.baseline_sessions WHERE student_id=j.student_id;
 SELECT coalesce(array_agg(id),'{}'::uuid[]) INTO v_tasks FROM private.grove_tasks WHERE student_id=j.student_id;
 DELETE FROM public.memberships WHERE user_id=j.student_id AND org_id=j.org_id AND member_role='student';
 DELETE FROM public.student_entitlements WHERE student_id=j.student_id;
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
 DELETE FROM public.answer_files WHERE student_id=j.student_id OR attempt_id=ANY(v_attempts);
 DELETE FROM public.answers WHERE student_id=j.student_id OR attempt_id=ANY(v_attempts);
 DELETE FROM public.paper_questions WHERE attempt_id=ANY(v_attempts);
 DELETE FROM public.attempts WHERE id=ANY(v_attempts);
 DELETE FROM public.learner_view_links WHERE student_id=j.student_id OR viewer_id=j.student_id;
 DELETE FROM public.learner_view_invitations
   WHERE (org_id=j.org_id AND lower(student_email)=lower(j.recipient_email))
      OR lower(viewer_email)=lower(j.recipient_email);
 DELETE FROM public.student_academic_settings WHERE student_id=j.student_id;
 DELETE FROM public.student_service_addons WHERE student_id=j.student_id;
 DELETE FROM public.pending_student_setups WHERE org_id=j.org_id AND lower(email)=lower(j.recipient_email);
 DELETE FROM public.invitations WHERE redeemed_by=j.student_id
   OR (org_id=j.org_id AND lower(email)=lower(j.recipient_email));
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
 THEN RAISE EXCEPTION 'An active, confirmed removal job is required'; END IF;
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
 +(SELECT count(*) FROM public.paper_questions pq JOIN public.attempts a ON pq.attempt_id=a.id WHERE a.student_id=j.student_id)
 +(SELECT count(*) FROM private.baseline_items bi JOIN private.baseline_sessions bs ON bi.session_id=bs.id WHERE bs.student_id=j.student_id)
 +(SELECT count(*) FROM private.grove_task_items ti JOIN private.grove_tasks gt ON ti.task_id=gt.id WHERE gt.student_id=j.student_id)
 +(SELECT count(*) FROM storage.objects WHERE bucket_id IN('student-work','grove-student-exports')
   AND name LIKE (j.org_id::text||'/'||j.student_id::text||'/%'))
 ) INTO remaining;
 IF remaining<>0 THEN RAISE EXCEPTION 'Learner cleanup incomplete; residual account, reports, files or permissions remain';END IF;
 RETURN true;
END;$$;
REVOKE ALL ON FUNCTION public.grove_offboarding_verify_cleanup(uuid) FROM PUBLIC,anon,authenticated;
GRANT EXECUTE ON FUNCTION public.grove_offboarding_verify_cleanup(uuid) TO service_role;

CREATE OR REPLACE FUNCTION public.grove_offboarding_record_completion(p_job uuid)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
BEGIN
 UPDATE private.grove_offboarding_jobs SET status='purged',
 student_id=NULL,recipient_email=NULL,download_token_hash=NULL,
 archive_path=NULL,export_hash=NULL,source_fingerprint=NULL,
 provider_message_id=NULL,last_error=NULL,purged_at=now(),updated_at=now()
 WHERE id=p_job AND status='purging';
 IF NOT FOUND THEN RAISE EXCEPTION 'Removal was not in progress';END IF;
END;$$;
REVOKE ALL ON FUNCTION public.grove_offboarding_record_completion(uuid) FROM PUBLIC,anon,authenticated;
GRANT EXECUTE ON FUNCTION public.grove_offboarding_record_completion(uuid) TO service_role;
COMMIT;
