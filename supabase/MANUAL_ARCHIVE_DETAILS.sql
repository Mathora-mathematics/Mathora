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
 'job_id',j.id,'status',j.status,'checksum',j.export_hash,
 'archive_path',CASE WHEN j.status='ready_manual' THEN j.archive_path ELSE NULL END);
END;$$;
REVOKE ALL ON FUNCTION public.grove_offboarding_manual_details(uuid,uuid) FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.grove_offboarding_manual_details(uuid,uuid) TO authenticated;