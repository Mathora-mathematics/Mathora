BEGIN;
CREATE OR REPLACE FUNCTION public.grove_evidence_upload_allowed(p_path text)
RETURNS boolean LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v_parts text[]:=string_to_array(p_path,'/');v_uid uuid:=(SELECT auth.uid());
BEGIN
 IF v_uid IS NULL OR array_length(v_parts,1)<>7 OR v_parts[2]<>v_uid::text
  OR v_parts[4] !~ '^[a-f0-9-]{36}$' OR v_parts[5] !~ '^[0-9]{1,2}$'
  OR v_parts[6]<>'work' OR v_parts[7] !~ '^[a-f0-9-]{36}[.](png|jpg|jpeg|webp)$'
 THEN RETURN false;END IF;
 IF v_parts[3]='baseline' THEN
  RETURN EXISTS (SELECT 1 FROM private.baseline_sessions s WHERE
   s.id::text=v_parts[4] AND s.student_id=v_uid AND s.org_id::text=v_parts[1]
   AND s.status='active' AND now()<s.ends_at AND (v_parts[5])::int BETWEEN 1 AND 20);
 ELSIF v_parts[3]='practice' THEN
  RETURN EXISTS (SELECT 1 FROM private.grove_tasks t WHERE
   t.id::text=v_parts[4] AND t.student_id=v_uid AND t.org_id::text=v_parts[1]
   AND t.status='active' AND (t.ends_at IS NULL OR now()<t.ends_at)
   AND (v_parts[5])::int BETWEEN 1 AND t.question_count);
 END IF;
 RETURN false;
END;$$;
REVOKE ALL ON FUNCTION public.grove_evidence_upload_allowed(text) FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.grove_evidence_upload_allowed(text) TO authenticated;
COMMIT;