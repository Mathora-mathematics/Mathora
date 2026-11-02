BEGIN;
CREATE OR REPLACE FUNCTION private.baseline_route(p_student uuid)
 RETURNS jsonb
 LANGUAGE plpgsql
 STABLE SECURITY DEFINER
 SET search_path TO ''
AS $function$
DECLARE v_q text;v_level text;v_programme text;v_org uuid;v_norm text;v_route text;v_minutes integer;v_extra integer:=0;
BEGIN
 SELECT sp.qualification,sp.tier,e.tier,e.org_id INTO v_q,v_level,v_programme,v_org
 FROM public.student_preferences sp
 JOIN public.student_entitlements e ON e.student_id=sp.student_id
 JOIN public.memberships m ON m.user_id=sp.student_id AND m.org_id=e.org_id AND m.member_role='student'
 WHERE sp.student_id=p_student AND e.starts_at<=now() AND (e.ends_at IS NULL OR e.ends_at>now());
 IF v_q IS NULL THEN RETURN jsonb_build_object('ready',false,'reason','An active student programme and academic route are required.');END IF;
 v_norm:=lower(trim(coalesce(v_level,'')));
 v_route:=CASE
 WHEN v_q='GCSE' AND v_norm LIKE '%foundation%' THEN 'foundation'
 WHEN v_q='GCSE' AND v_norm LIKE '%higher%' THEN 'higher'
 WHEN v_q='IGCSE' AND (v_norm LIKE '%core%' OR v_norm LIKE '%foundation%') THEN 'core'
 WHEN v_q='IGCSE' AND (v_norm LIKE '%extend%' OR v_norm LIKE '%higher%') THEN 'extended'
 WHEN v_q='A_LEVEL' AND (v_norm LIKE '%as%' OR v_norm LIKE '%year 12%') THEN 'as'
 WHEN v_q='A_LEVEL' AND (v_norm LIKE '%a2%' OR v_norm LIKE '%year 13%' OR v_norm LIKE '%full%') THEN 'a2'
 WHEN v_q='FURTHER_MATHS' THEN 'further'
 WHEN v_q IN ('IB_AA','IB_AI') AND (v_norm LIKE '%sl%' OR v_norm LIKE '%standard%') THEN 'sl'
 WHEN v_q IN ('IB_AA','IB_AI') AND (v_norm LIKE '%hl%' OR v_norm LIKE '%higher%') THEN 'hl'
 WHEN v_q='TMUA' THEN 'tmua'
 ELSE NULL END;
 IF v_route IS NULL THEN RETURN jsonb_build_object('ready',false,'reason','The administrator must assign the correct academic level (Foundation/Higher, Core/Extended, AS/A2 or SL/HL).');END IF;
 v_minutes:=CASE
  WHEN v_route IN('foundation','core') THEN 35
  WHEN v_route IN('higher','extended') THEN 45
  WHEN v_q='TMUA' THEN 45
  WHEN v_q='FURTHER_MATHS' THEN 60
  ELSE 55 END;
 SELECT coalesce(extra_time_percent,0) INTO v_extra FROM private.baseline_accommodations WHERE student_id=p_student;
 v_extra:=coalesce(v_extra,0);
 v_minutes:=ceil(v_minutes*(100+v_extra)/100.0);
 RETURN jsonb_build_object('ready',true,'qualification',v_q,'level',v_route,'programme',v_programme,'org_id',v_org,'minutes',v_minutes,'calculator_allowed',(v_q<>'TMUA'));
END;$function$
;
COMMIT;