BEGIN;
ALTER TABLE private.grove_offboarding_jobs DROP CONSTRAINT IF EXISTS grove_offboarding_jobs_status_check;
ALTER TABLE private.grove_offboarding_jobs
 ADD CONSTRAINT grove_offboarding_jobs_status_check
 CHECK(status IN ('requested','preparing','emailed','ready_manual','downloaded','purging','purged','failed'));

CREATE OR REPLACE FUNCTION public.grove_offboarding_prepare(p_org uuid,p_student uuid)
RETURNS uuid LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v_email text;v_job uuid;v_roles integer;v_other integer;
BEGIN
 IF NOT private.grove_offboarding_is_admin(p_org,(SELECT auth.uid()))
 THEN RAISE EXCEPTION 'MathsGrove administrator role required';END IF;
 PERFORM pg_advisory_xact_lock(hashtextextended(p_student::text,314159));
 IF p_student=(SELECT auth.uid()) THEN RAISE EXCEPTION 'Cannot remove your own administrator account';END IF;
 SELECT count(*),count(*) FILTER(WHERE org_id<>p_org OR member_role<>'student')
 INTO v_roles,v_other FROM public.memberships WHERE user_id=p_student;
 IF v_roles<>1 OR v_other<>0 THEN
 RAISE EXCEPTION 'Shared, staff or unassigned accounts cannot be deleted using student offboarding';END IF;
 SELECT email INTO v_email FROM auth.users WHERE id=p_student;
 IF v_email IS NULL THEN RAISE EXCEPTION 'An account email is required to identify the student'; END IF;
 UPDATE private.grove_offboarding_jobs SET status='failed',
 last_error='Abandoned archive preparation; retry available',updated_at=now()
 WHERE org_id=p_org AND student_id=p_student
 AND status IN('requested','preparing') AND created_at<now()-interval '15 minutes';
 SELECT id INTO v_job FROM private.grove_offboarding_jobs
 WHERE org_id=p_org AND student_id=p_student
 AND status IN ('requested','preparing','emailed','ready_manual','downloaded')
 ORDER BY created_at DESC LIMIT 1;
 IF v_job IS NOT NULL THEN RETURN v_job;END IF;
 INSERT INTO private.grove_offboarding_jobs(org_id,student_id,recipient_email,requested_by)
 VALUES(p_org,p_student,v_email,(SELECT auth.uid())) RETURNING id INTO v_job;
 RETURN v_job;
END;$$;
REVOKE ALL ON FUNCTION public.grove_offboarding_prepare(uuid,uuid) FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.grove_offboarding_prepare(uuid,uuid) TO authenticated;

CREATE OR REPLACE FUNCTION public.grove_offboarding_mark_manual_ready(
 p_job uuid,p_path text,p_checksum text)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
BEGIN
 IF length(coalesce(p_checksum,''))<>64 OR p_path IS NULL OR length(p_path)<25
 THEN RAISE EXCEPTION 'Archive hash and storage path required'; END IF;
 UPDATE private.grove_offboarding_jobs
 SET status='ready_manual',archive_path=p_path,export_hash=p_checksum,
 prepared_at=now(),updated_at=now(),last_error=NULL,
 provider_message_id=NULL,download_token_hash=NULL,download_expires_at=NULL
 WHERE id=p_job AND status IN('requested','failed','ready_manual');
 IF NOT FOUND THEN RAISE EXCEPTION 'Archive job is not ready to publish';END IF;
END;$$;
REVOKE ALL ON FUNCTION public.grove_offboarding_mark_manual_ready(uuid,text,text) FROM PUBLIC,anon,authenticated;
GRANT EXECUTE ON FUNCTION public.grove_offboarding_mark_manual_ready(uuid,text,text) TO service_role;

CREATE OR REPLACE FUNCTION public.grove_offboarding_manual_confirm(p_org uuid,p_job uuid,p_checksum text)
RETURNS boolean LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE j private.grove_offboarding_jobs%ROWTYPE;v_roles integer;
BEGIN
 IF NOT private.grove_offboarding_is_admin(p_org,(SELECT auth.uid()))
 THEN RAISE EXCEPTION 'MathsGrove administrator role required';END IF;
 SELECT * INTO j FROM private.grove_offboarding_jobs
 WHERE id=p_job AND org_id=p_org FOR UPDATE;
 IF j.id IS NULL OR j.status<>'ready_manual' OR j.archive_path IS NULL
 OR j.export_hash IS NULL OR j.export_hash<>p_checksum
 THEN RAISE EXCEPTION 'Download a fresh complete ZIP before confirming removal';END IF;
 SELECT count(*) INTO v_roles FROM public.memberships WHERE user_id=j.student_id;
 IF v_roles<>1 OR NOT EXISTS(SELECT 1 FROM public.memberships
 WHERE user_id=j.student_id AND org_id=p_org AND member_role='student')
 THEN RAISE EXCEPTION 'Student role has changed. Removal denied';END IF;
 UPDATE private.grove_offboarding_jobs SET status='downloaded',
 downloaded_at=now(),updated_at=now() WHERE id=p_job;
 RETURN true;
END;$$;
REVOKE ALL ON FUNCTION public.grove_offboarding_manual_confirm(uuid,uuid,text) FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.grove_offboarding_manual_confirm(uuid,uuid,text) TO authenticated;

-- These properties are safe to display only to the organisation admin.
CREATE OR REPLACE FUNCTION public.grove_offboarding_manual_details(p_org uuid,p_student uuid)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE j private.grove_offboarding_jobs%ROWTYPE;
BEGIN
 IF NOT private.grove_offboarding_is_admin(p_org,(SELECT auth.uid()))
 THEN RAISE EXCEPTION 'MathsGrove administrator role required';END IF;
 SELECT * INTO j FROM private.grove_offboarding_jobs
 WHERE org_id=p_org AND student_id=p_student ORDER BY created_at DESC LIMIT 1;
 IF j.id IS NULL THEN RETURN jsonb_build_object('ready',false);END IF;
 RETURN jsonb_build_object('ready',j.status IN('ready_manual','downloaded'),
 'job_id',j.id,'status',j.status,'checksum',j.export_hash);
END;$$;
REVOKE ALL ON FUNCTION public.grove_offboarding_manual_details(uuid,uuid) FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.grove_offboarding_manual_details(uuid,uuid) TO authenticated;
COMMIT;