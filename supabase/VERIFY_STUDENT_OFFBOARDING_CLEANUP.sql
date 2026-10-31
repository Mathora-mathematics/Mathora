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
 +(SELECT count(*) FROM public.learner_view_links WHERE student_id=j.student_id)
 +(SELECT count(*) FROM public.learner_view_invitations WHERE org_id=j.org_id AND lower(student_email)=lower(j.recipient_email))
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