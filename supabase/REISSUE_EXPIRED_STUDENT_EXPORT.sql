CREATE OR REPLACE FUNCTION public.grove_offboarding_prepare(p_org uuid,p_student uuid)
RETURNS uuid LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v_email text;v_job uuid;v_role_count integer;v_other_org_count integer;
BEGIN
 IF NOT private.grove_offboarding_is_admin(p_org,(SELECT auth.uid())) THEN
  RAISE EXCEPTION 'MathsGrove administrator access required';END IF;
 PERFORM pg_advisory_xact_lock(hashtextextended(p_student::text,314159));
 IF p_student=(SELECT auth.uid()) THEN RAISE EXCEPTION 'Cannot remove your own administrator account';END IF;
 SELECT count(*),count(*) FILTER(WHERE org_id<>p_org OR member_role<>'student')
 INTO v_role_count,v_other_org_count FROM public.memberships WHERE user_id=p_student;
 IF v_role_count<>1 OR v_other_org_count<>0 THEN
  RAISE EXCEPTION 'Shared, staff or unassigned accounts cannot be purged with student offboarding';END IF;
 SELECT u.email INTO v_email FROM auth.users u WHERE u.id=p_student AND u.email_confirmed_at IS NOT NULL;
 IF v_email IS NULL THEN RAISE EXCEPTION 'Verified student email is required for secure archive delivery';END IF;
 UPDATE private.grove_offboarding_jobs SET status='failed',last_error='Archive email link expired; a fresh export may be requested',updated_at=now()
 WHERE org_id=p_org AND student_id=p_student AND status='emailed'
 AND download_expires_at<=now();
 SELECT id INTO v_job FROM private.grove_offboarding_jobs
 WHERE org_id=p_org AND student_id=p_student AND status IN('requested','preparing','emailed','downloaded')
 ORDER BY created_at DESC LIMIT 1;
 IF v_job IS NOT NULL THEN RETURN v_job; END IF;
 INSERT INTO private.grove_offboarding_jobs(org_id,student_id,recipient_email,requested_by)
 VALUES(p_org,p_student,v_email,(SELECT auth.uid())) RETURNING id INTO v_job;
 RETURN v_job;
END;$$;
REVOKE ALL ON FUNCTION public.grove_offboarding_prepare(uuid,uuid) FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.grove_offboarding_prepare(uuid,uuid) TO authenticated;