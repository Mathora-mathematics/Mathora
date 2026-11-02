BEGIN;
CREATE OR REPLACE FUNCTION public.grove_my_calendar()
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
DECLARE v_uid uuid:=(SELECT auth.uid());v_route jsonb;v_tier text;v_org uuid;
 v_start date;v_end date;v_day date;v_rows jsonb;v_bstatus text;v_available integer;
BEGIN
 IF v_uid IS NULL THEN RAISE EXCEPTION 'Sign-in required';END IF;
 v_route:=private.baseline_route(v_uid);
 IF NOT coalesce((v_route->>'ready')::boolean,false) THEN RETURN jsonb_build_object('ready',false,'reason',v_route->>'reason');END IF;
 v_tier:=v_route->>'programme';v_org:=(v_route->>'org_id')::uuid;v_bstatus:=public.baseline_status()->>'status';
 SELECT greatest(current_date,starts_at::date),ends_at::date INTO v_start,v_end FROM public.student_entitlements WHERE student_id=v_uid AND org_id=v_org;
 FOR v_day IN SELECT d::date FROM generate_series(v_start::timestamp,(v_start+27)::timestamp,'1 day') d LOOP
  IF v_end IS NOT NULL AND v_day>v_end THEN EXIT;END IF;
  IF v_tier='weekly' THEN
   IF mod(v_day-((SELECT starts_at::date FROM public.student_entitlements WHERE student_id=v_uid AND org_id=v_org)),7)=0 THEN
    INSERT INTO private.grove_tasks(student_id,org_id,qualification,academic_level,programme,mode,due_date,question_count)
    VALUES(v_uid,v_org,v_route->>'qualification',v_route->>'level',v_tier,'weekly',v_day,8)
    ON CONFLICT(student_id,due_date,mode) DO NOTHING;
   END IF;
  ELSE
   INSERT INTO private.grove_tasks(student_id,org_id,qualification,academic_level,programme,mode,due_date,question_count)
   VALUES(v_uid,v_org,v_route->>'qualification',v_route->>'level',v_tier,
    CASE WHEN v_tier='exam' THEN 'exam_daily' ELSE 'daily' END,v_day,CASE WHEN v_tier='exam' THEN 6 ELSE 4 END)
   ON CONFLICT(student_id,due_date,mode) DO NOTHING;
  END IF;
 END LOOP;
 IF v_tier='exam' AND (v_end IS NULL OR (date_trunc('month',v_start)::date+interval '1 month'-interval '1 day')::date<=v_end) THEN
  INSERT INTO private.grove_tasks(student_id,org_id,qualification,academic_level,programme,mode,due_date,question_count)
  VALUES(v_uid,v_org,v_route->>'qualification',v_route->>'level',v_tier,'mock_pending',
    (date_trunc('month',v_start)::date+interval '1 month'-interval '1 day')::date,0)
  ON CONFLICT(student_id,due_date,mode) DO NOTHING;
 END IF;
 SELECT count(*) INTO v_available FROM private.grove_practice_bank b
 WHERE b.active AND b.review_state='approved' AND b.qualification=v_route->>'qualification'
   AND b.academic_level=v_route->>'level' AND b.programme_scope IN ('all',v_tier)
   AND private.grove_board_compatible(b.exam_board,(SELECT pref.exam_board FROM public.student_preferences pref WHERE pref.student_id=v_uid))
   AND NOT EXISTS (SELECT 1 FROM private.baseline_bank base
     WHERE base.qualification=b.qualification AND base.academic_level=b.academic_level
     AND lower(regexp_replace(base.prompt,'[[:space:]]+','','g'))=lower(regexp_replace(b.prompt,'[[:space:]]+','','g')))
   AND NOT EXISTS (SELECT 1 FROM private.grove_task_items previous
     JOIN private.grove_tasks history ON history.id=previous.task_id
     WHERE history.student_id=v_uid AND (previous.bank_id=b.id OR
       lower(regexp_replace(previous.prompt,'[[:space:]]+','','g'))=lower(regexp_replace(b.prompt,'[[:space:]]+','','g'))));
 SELECT coalesce(jsonb_agg(jsonb_build_object(
 'id',id,'due_date',due_date,'mode',mode,'status',status,'questions',question_count,
 'review_status',review_status,'score',CASE WHEN review_status='released' THEN score END)
 ORDER BY due_date,mode),'[]'::jsonb) INTO v_rows
 FROM private.grove_tasks WHERE student_id=v_uid AND due_date BETWEEN current_date-14 AND current_date+35
 AND (v_end IS NULL OR due_date<=v_end)
 AND (status<>'scheduled' OR programme=v_tier);
 RETURN jsonb_build_object('ready',true,'programme',v_tier,'qualification',v_route->>'qualification',
 'level',v_route->>'level','baseline_status',v_bstatus,'unseen_questions',v_available,'assignments',v_rows);
END;$function$
;
COMMIT;