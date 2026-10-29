CREATE OR REPLACE FUNCTION public.grove_export_mark_failed(p_job uuid,p_message text)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
BEGIN
 UPDATE private.grove_offboarding_jobs
 SET status='failed',last_error=left(coalesce(p_message,'Export service failed'),250),updated_at=now()
 WHERE id=p_job AND status IN ('requested','preparing');
END;$$;
REVOKE ALL ON FUNCTION public.grove_export_mark_failed(uuid,text) FROM PUBLIC,anon,authenticated;
GRANT EXECUTE ON FUNCTION public.grove_export_mark_failed(uuid,text) TO service_role;