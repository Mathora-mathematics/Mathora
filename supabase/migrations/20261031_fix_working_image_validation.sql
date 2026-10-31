BEGIN;
CREATE OR REPLACE FUNCTION public.grove_evidence_upload_allowed(p_path text)
 RETURNS boolean
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
DECLARE v_parts text[]:=string_to_array(p_path,'/');v_uid uuid:=(SELECT auth.uid());
BEGIN
 IF v_uid IS NULL OR array_length(v_parts,1)<>7 OR v_parts[2]<>v_uid::text
 OR v_parts[4] !~ '^[a-f0-9-]{36}$' OR v_parts[5] !~ '^[0-9]{1,2}$'
 OR v_parts[6]<> 'work' OR v_parts[7] !~ '^[a-f0-9-]{36}[.](png|jpg|jpeg|webp)
 THEN RETURN false;END IF;
 IF v_parts[3]='baseline' THEN
  RETURN EXISTS (SELECT 1 FROM private.baseline_sessions s WHERE
   s.id::text=v_parts[4] AND s.student_id=v_uid AND s.org_id::text=v_parts[1]
   AND s.status='active' AND now()<s.ends_at
   AND (v_parts[5])::int BETWEEN 1 AND 20);
 ELSIF v_parts[3]='practice' THEN
  RETURN EXISTS (SELECT 1 FROM private.grove_tasks t WHERE
   t.id::text=v_parts[4] AND t.student_id=v_uid AND t.org_id::text=v_parts[1]
   AND t.status='active' AND (t.ends_at IS NULL OR now()<t.ends_at)
   AND (v_parts[5])::int BETWEEN 1 AND t.question_count);
 END IF;
 RETURN false;
END;$function$

 THEN RETURN false;END IF;
 IF v_parts[3]='baseline' THEN
  RETURN EXISTS (SELECT 1 FROM private.baseline_sessions s WHERE
   s.id::text=v_parts[4] AND s.student_id=v_uid AND s.org_id::text=v_parts[1]
   AND s.status='active' AND now()<s.ends_at
   AND (v_parts[5])::int BETWEEN 1 AND 20);
 ELSIF v_parts[3]='practice' THEN
  RETURN EXISTS (SELECT 1 FROM private.grove_tasks t WHERE
   t.id::text=v_parts[4] AND t.student_id=v_uid AND t.org_id::text=v_parts[1]
   AND t.status='active' AND (t.ends_at IS NULL OR now()<t.ends_at)
   AND (v_parts[5])::int BETWEEN 1 AND t.question_count);
 END IF;
 RETURN false;
END;$function$
;
CREATE OR REPLACE FUNCTION public.grove_admin_set_target(p_student uuid, p_grade text)
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
DECLARE v_org uuid;v_q text;v_grade text:=upper(trim(coalesce(p_grade,'')));v_ok boolean;
BEGIN
 SELECT org_id INTO v_org FROM public.memberships WHERE user_id=p_student AND member_role='student' LIMIT 1;
 IF v_org IS NULL OR NOT private.is_partner(v_org) THEN RAISE EXCEPTION 'Administrator permissions required';END IF;
 SELECT qualification INTO v_q FROM public.student_preferences WHERE student_id=p_student;
 v_ok:=CASE WHEN v_q IN('GCSE','IGCSE') THEN v_grade ~ '^[1-9]$'
  WHEN v_q IN('A_LEVEL','FURTHER_MATHS') THEN v_grade IN('A*','A','B','C','D','E')
  WHEN v_q IN('IB_AA','IB_AI') THEN v_grade ~ '^[1-7]$'
  WHEN v_q='TMUA' THEN v_grade ~ '^([1-8]([.][0-9])?|9([.]0)?)
  ELSE false END;
 IF v_grade<>'' AND NOT v_ok THEN RAISE EXCEPTION 'Target grade must match the qualification';END IF;
 INSERT INTO public.student_academic_settings(student_id,org_id,target_grade,updated_by)
 VALUES(p_student,v_org,NULLIF(v_grade,''),(SELECT auth.uid()))
 ON CONFLICT(student_id) DO UPDATE SET target_grade=EXCLUDED.target_grade,updated_by=EXCLUDED.updated_by,updated_at=now();
 RETURN jsonb_build_object('ok',true,'target_grade',nullif(v_grade,''));
END;$function$

  ELSE false END;
 IF v_grade<>'' AND NOT v_ok THEN RAISE EXCEPTION 'Target grade must match the qualification';END IF;
 INSERT INTO public.student_academic_settings(student_id,org_id,target_grade,updated_by)
 VALUES(p_student,v_org,NULLIF(v_grade,''),(SELECT auth.uid()))
 ON CONFLICT(student_id) DO UPDATE SET target_grade=EXCLUDED.target_grade,updated_by=EXCLUDED.updated_by,updated_at=now();
 RETURN jsonb_build_object('ok',true,'target_grade',nullif(v_grade,''));
END;$function$
;
COMMIT;