ALTER TABLE private.grove_offboarding_jobs ALTER COLUMN student_id DROP NOT NULL;
CREATE OR REPLACE FUNCTION public.grove_offboarding_record_completion(p_job uuid)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
BEGIN
 UPDATE private.grove_offboarding_jobs SET status='purged',
 student_id=NULL,recipient_email=NULL,download_token_hash=NULL,archive_path=NULL,
 export_hash=NULL,provider_message_id=NULL,last_error=NULL,purged_at=now(),updated_at=now()
 WHERE id=p_job AND status='purging';
 IF NOT FOUND THEN RAISE EXCEPTION 'Removal was not in progress';END IF;
END;$$;
REVOKE ALL ON FUNCTION public.grove_offboarding_record_completion(uuid) FROM PUBLIC,anon,authenticated;
GRANT EXECUTE ON FUNCTION public.grove_offboarding_record_completion(uuid) TO service_role;