BEGIN;
CREATE OR REPLACE FUNCTION private.grove_assign_student(p_student uuid)
RETURNS integer LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v_route jsonb;v_org uuid;v_prog text;v_day date;v_start date;v_end date;v_count integer:=0;v_date date;
BEGIN
 v_route:=private.baseline_route(p_student);
 IF NOT coalesce((v_route->>'ready')::boolean,false) THEN RETURN 0;END IF;
 v_org:=(v_route->>'org_id')::uuid;v_prog:=v_route->>'programme';
 SELECT greatest(current_date,starts_at::date),ends_at::date INTO v_start,v_end FROM public.student_entitlements
 WHERE student_id=p_student AND org_id=v_org;
 -- Invalidate only future unopened assignments if the administrator changed level/tier.
 DELETE FROM private.grove_tasks
 WHERE student_id=p_student AND due_date>=current_date AND status='scheduled'
 AND (qualification<>v_route->>'qualification' OR academic_level<>v_route->>'level' OR programme<>v_prog);
 FOR v_day IN SELECT d::date FROM generate_series(v_start::timestamp,(v_start+27)::timestamp,'1 day') d LOOP
  IF v_end IS NOT NULL AND v_day>v_end THEN EXIT;END IF;
  IF v_prog='weekly' AND mod((v_day-(SELECT starts_at::date FROM public.student_entitlements
      WHERE student_id=p_student AND org_id=v_org)),7)<>0 THEN CONTINUE;END IF;
  INSERT INTO private.grove_tasks(student_id,org_id,qualification,academic_level,programme,mode,due_date,question_count)
  VALUES(p_student,v_org,v_route->>'qualification',v_route->>'level',v_prog,
    CASE WHEN v_prog='weekly' THEN 'weekly' WHEN v_prog='exam' THEN 'exam_daily' ELSE 'daily' END,
    v_day,CASE WHEN v_prog='weekly' THEN 8 WHEN v_prog='exam' THEN 6 ELSE 4 END)
  ON CONFLICT(student_id,due_date,mode) DO NOTHING;
  v_count:=v_count+1;
 END LOOP;
 IF v_prog='exam' THEN
  v_date:=(date_trunc('month',v_start)::date+interval '1 month'-interval '1 day')::date;
  IF v_end IS NULL OR v_date<=v_end THEN
  INSERT INTO private.grove_tasks(student_id,org_id,qualification,academic_level,programme,mode,due_date,question_count)
  VALUES(p_student,v_org,v_route->>'qualification',v_route->>'level',v_prog,'mock_pending',v_date,0)
  ON CONFLICT(student_id,due_date,mode) DO NOTHING;
  END IF;
 END IF;
 RETURN v_count;
END;$$;
CREATE OR REPLACE FUNCTION public.grove_my_calendar()
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v_uid uuid:=(SELECT auth.uid());v_route jsonb;v_tier text;v_org uuid;
 v_start date;v_end date;v_day date;v_rows jsonb;v_calendar jsonb;v_bstatus text;
BEGIN
 IF v_uid IS NULL THEN RAISE EXCEPTION 'Sign-in required';END IF;
 v_route:=private.baseline_route(v_uid);
 IF NOT coalesce((v_route->>'ready')::boolean,false) THEN RETURN jsonb_build_object('ready',false,'reason',v_route->>'reason');END IF;
 v_tier:=v_route->>'programme';v_org:=(v_route->>'org_id')::uuid;
 v_bstatus:=(public.baseline_status()->>'status');
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
      CASE WHEN v_tier='exam' THEN 'exam_daily' ELSE 'daily' END,v_day,
      CASE WHEN v_tier='exam' THEN 6 ELSE 4 END)
   ON CONFLICT(student_id,due_date,mode) DO NOTHING;
  END IF;
 END LOOP;
 IF v_tier='exam' AND (v_end IS NULL OR (date_trunc('month',v_start)::date+interval '1 month'-interval '1 day')::date<=v_end) THEN
  -- Real timed monthly mocks stay in the existing moderated mock_packs system.
  -- An unmoderated placeholder must never pretend to be an actual examination paper.
  INSERT INTO private.grove_tasks(student_id,org_id,qualification,academic_level,programme,mode,due_date,question_count)
  VALUES(v_uid,v_org,v_route->>'qualification',v_route->>'level',v_tier,'mock_pending',(date_trunc('month',v_start)::date+interval '1 month'-interval '1 day')::date,0)
  ON CONFLICT(student_id,due_date,mode) DO NOTHING;
 END IF;
 SELECT coalesce(jsonb_agg(jsonb_build_object(
  'id',id,'due_date',due_date,'mode',mode,'status',status,'questions',question_count,
  'score',CASE WHEN status IN('completed','expired') THEN score ELSE NULL END)
 ORDER BY due_date,mode),'[]'::jsonb) INTO v_rows
 FROM private.grove_tasks WHERE student_id=v_uid AND due_date BETWEEN current_date-14 AND current_date+35
 AND (v_end IS NULL OR due_date<=v_end);
 RETURN jsonb_build_object('ready',true,'programme',v_tier,'qualification',v_route->>'qualification',
  'level',v_route->>'level','baseline_status',v_bstatus,'assignments',v_rows);
END;$$;
COMMIT;