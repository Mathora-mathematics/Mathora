-- 2026-11-01: Cambridge IGCSE Mathematics 0580 uses letter grades, unlike Pearson 4MA1.
-- Keep existing grades and student rows untouched. This changes validation only.
-- Official Cambridge 0580 Core: C-G; Extended: A*-E.
CREATE OR REPLACE FUNCTION private.grove_target_grade_allowed(
  p_qualification text, p_exam_board text, p_level text, p_grade text
) RETURNS boolean
LANGUAGE sql IMMUTABLE
SET search_path TO ''
AS $function$
 SELECT CASE
   WHEN upper(trim(coalesce(p_grade,''))) = '' THEN true
   WHEN upper(trim(coalesce(p_qualification,''))) = 'IGCSE'
     AND lower(coalesce(p_exam_board,'')) LIKE '%0580%'
     AND lower(coalesce(p_level,'')) LIKE '%core%'
     THEN upper(trim(p_grade)) IN ('C','D','E','F','G')
   WHEN upper(trim(coalesce(p_qualification,''))) = 'IGCSE'
     AND lower(coalesce(p_exam_board,'')) LIKE '%0580%'
     AND lower(coalesce(p_level,'')) LIKE '%extend%'
     THEN upper(trim(p_grade)) IN ('A*','A','B','C','D','E')
   WHEN upper(trim(coalesce(p_qualification,''))) = 'IGCSE'
     AND lower(coalesce(p_exam_board,'')) LIKE '%0580%'
     THEN upper(trim(p_grade)) IN ('A*','A','B','C','D','E','F','G')
   WHEN upper(trim(coalesce(p_qualification,''))) IN ('GCSE','IGCSE')
     THEN upper(trim(p_grade)) ~ '^[1-9]$'
   WHEN upper(trim(coalesce(p_qualification,''))) IN ('A_LEVEL','FURTHER_MATHS')
     THEN upper(trim(p_grade)) IN ('A*','A','B','C','D','E')
   WHEN upper(trim(coalesce(p_qualification,''))) IN ('IB_AA','IB_AI')
     THEN upper(trim(p_grade)) ~ '^[1-7]$'
   WHEN upper(trim(coalesce(p_qualification,''))) = 'TMUA'
     THEN upper(trim(p_grade)) ~ '^([1-8]([.][0-9])?|9([.]0)?)$'
   ELSE false
 END;
$function$;
-- Private helper: callable by the SECURITY DEFINER RPC, not by client roles.
REVOKE ALL ON FUNCTION private.grove_target_grade_allowed(text,text,text,text) FROM PUBLIC, anon, authenticated;

CREATE OR REPLACE FUNCTION public.grove_admin_set_target(p_student uuid, p_grade text)
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
DECLARE v_org uuid;v_q text;v_board text;v_level text;
        v_grade text:=upper(trim(coalesce(p_grade,'')));v_ok boolean;
BEGIN
 SELECT org_id INTO v_org FROM public.memberships
 WHERE user_id=p_student AND member_role='student' LIMIT 1;
 IF v_org IS NULL OR NOT private.is_partner(v_org)
 THEN RAISE EXCEPTION 'Administrator permissions required';END IF;
 SELECT qualification,exam_board,tier INTO v_q,v_board,v_level
 FROM public.student_preferences WHERE student_id=p_student;
 v_ok:=private.grove_target_grade_allowed(v_q,v_board,v_level,v_grade);
 IF v_grade<>'' AND NOT coalesce(v_ok,false) THEN
   IF v_q='IGCSE' AND lower(coalesce(v_board,'')) LIKE '%0580%' THEN
     RAISE EXCEPTION 'Cambridge IGCSE 0580 targets use letter grades: Core C-G; Extended A*-E';
   END IF;
   RAISE EXCEPTION 'Target grade must match the qualification';
 END IF;
 INSERT INTO public.student_academic_settings(student_id,org_id,target_grade,updated_by)
 VALUES(p_student,v_org,NULLIF(v_grade,''),(SELECT auth.uid()))
 ON CONFLICT(student_id) DO UPDATE
 SET target_grade=EXCLUDED.target_grade,updated_by=EXCLUDED.updated_by,updated_at=now();
 RETURN jsonb_build_object('ok',true,'target_grade',nullif(v_grade,''));
END;$function$;
