BEGIN;
ALTER TABLE private.grove_tasks DROP CONSTRAINT IF EXISTS grove_tasks_mode_check;
ALTER TABLE private.grove_tasks ADD CONSTRAINT grove_tasks_mode_check CHECK (mode=ANY(ARRAY['weekly'::text,'daily'::text,'exam_daily'::text,'mock_pending'::text,'mock'::text]));
CREATE OR REPLACE FUNCTION private.grove_assign_student(p_student uuid)
 RETURNS integer
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
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
  VALUES(p_student,v_org,v_route->>'qualification',v_route->>'level',v_prog,'mock',v_date,20)
  ON CONFLICT(student_id,due_date,mode) DO NOTHING;
  END IF;
 END IF;
 RETURN v_count;
END;$function$
;
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
  VALUES(v_uid,v_org,v_route->>'qualification',v_route->>'level',v_tier,'mock',
    (date_trunc('month',v_start)::date+interval '1 month'-interval '1 day')::date,20)
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
CREATE OR REPLACE FUNCTION public.grove_task_start(p_task uuid)
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
DECLARE v_uid uuid:=(SELECT auth.uid());v private.grove_tasks%ROWTYPE;v_baseline jsonb;v_active jsonb;v_bank record;
 v_order integer:=0;v_options jsonb;v_correct text;
 v_target integer;v_baseline_score integer;v_recent numeric;v_recent_count integer;
BEGIN
 IF v_uid IS NULL THEN RAISE EXCEPTION 'Sign-in required';END IF;
 PERFORM pg_advisory_xact_lock(hashtextextended(v_uid::text,12810));
 SELECT * INTO v FROM private.grove_tasks WHERE id=p_task AND student_id=v_uid FOR UPDATE;
 IF v.id IS NULL THEN RAISE EXCEPTION 'Assignment not found or not authorised';END IF;
 v_active:=private.baseline_route(v_uid);
 IF NOT coalesce((v_active->>'ready')::boolean,false)
   OR (v_active->>'org_id')::uuid<>v.org_id
   OR v_active->>'qualification'<>v.qualification
   OR v_active->>'level'<>v.academic_level
   OR v_active->>'programme'<>v.programme
 THEN RAISE EXCEPTION 'Administrator programme or academic route has changed; contact your tutor';END IF;
 IF v.mode='mock_pending' THEN RAISE EXCEPTION 'Timed exam requires a moderated, teacher-assigned mock';END IF;
 IF v.due_date>current_date THEN RAISE EXCEPTION 'This assignment has not opened yet';END IF;
 IF v.status<>'scheduled' THEN RETURN private.grove_payload(p_task);END IF;
 v_baseline:=public.baseline_status();
 IF coalesce(v_baseline->>'status','') NOT IN('submitted','expired') THEN
   RAISE EXCEPTION 'Complete your 20-question baseline before starting scheduled practice';
 END IF;
 v_target:=CASE WHEN v.mode='daily' THEN 2 WHEN v.mode='weekly' THEN 3 ELSE 4 END;
 SELECT score INTO v_baseline_score FROM private.baseline_sessions
  WHERE student_id=v_uid AND qualification=v.qualification AND academic_level=v.academic_level
  AND status IN('submitted','expired') ORDER BY started_at DESC LIMIT 1;
 IF v_baseline_score IS NOT NULL THEN
  IF v_baseline_score<=7 THEN v_target:=v_target-1;
  ELSIF v_baseline_score>=17 THEN v_target:=v_target+1;
  END IF;
 END IF;
 SELECT count(*),avg(mark::numeric) INTO v_recent_count,v_recent FROM
 (SELECT pm.mark FROM private.grove_practice_marks pm
  JOIN private.grove_tasks past ON past.id=pm.task_id
  WHERE past.student_id=v_uid AND past.review_status='released'
  AND past.qualification=v.qualification AND past.academic_level=v.academic_level
  ORDER BY past.submitted_at DESC NULLS LAST LIMIT 20) recent_marks;
 IF v_recent_count>=4 THEN
  IF v_recent<0.4 THEN v_target:=v_target-1;
  ELSIF v_recent>=0.8 THEN v_target:=v_target+1;
  END IF;
 END IF;
 v_target:=greatest(1,least(5,v_target));
 IF (SELECT count(*) FROM private.grove_practice_bank b
    WHERE b.active AND b.review_state='approved' AND b.qualification=v.qualification AND b.academic_level=v.academic_level
      AND b.programme_scope IN('all',v.programme) AND NOT EXISTS (SELECT 1 FROM private.baseline_bank base
        WHERE base.qualification=v.qualification AND base.academic_level=v.academic_level
          AND lower(regexp_replace(base.prompt,'[[:space:]]+','','g'))=
              lower(regexp_replace(b.prompt,'[[:space:]]+','','g')))
      AND private.grove_board_compatible(b.exam_board,(SELECT p.exam_board FROM public.student_preferences p WHERE p.student_id=v_uid))
      AND NOT EXISTS(SELECT 1 FROM private.grove_task_items old
        JOIN private.grove_tasks prev ON prev.id=old.task_id
        WHERE prev.student_id=v_uid AND (old.bank_id=b.id OR lower(regexp_replace(old.prompt,'[[:space:]]+','','g'))=lower(regexp_replace(b.prompt,'[[:space:]]+','','g')))))<v.question_count
 THEN RAISE EXCEPTION 'Not enough approved, non-baseline, unseen questions are available for this route. Your earlier questions will not be repeated. Ask an administrator to approve more original questions.';END IF;
 UPDATE private.grove_tasks SET status='active',started_at=now(),
 ends_at=CASE WHEN v.mode='mock' THEN now()+interval '90 minutes' WHEN v.programme='exam' THEN now()+interval '35 minutes' ELSE NULL END WHERE id=p_task;
 FOR v_bank IN
 WITH candidate AS (
  SELECT b.*,
   row_number() OVER(PARTITION BY b.topic ORDER BY abs(b.difficulty-v_target),md5(b.id::text||v.due_date::text||v.student_id::text)) AS topic_slot,
   coalesce((SELECT CASE WHEN pm.mark=0 THEN 0 ELSE 1 END
     FROM private.grove_task_items prev_item
     JOIN private.grove_tasks prev_task ON prev_task.id=prev_item.task_id
     JOIN private.grove_practice_marks pm ON pm.task_id=prev_item.task_id AND pm.position=prev_item.position
     WHERE prev_task.student_id=v_uid AND prev_task.review_status='released'
       AND prev_task.qualification=v.qualification AND prev_task.academic_level=v.academic_level
       AND prev_item.topic=b.topic
     ORDER BY prev_task.submitted_at DESC NULLS LAST LIMIT 1),1) AS practice_priority
   FROM private.grove_practice_bank b
 WHERE b.active AND b.review_state='approved' AND b.qualification=v.qualification AND b.academic_level=v.academic_level
   AND b.programme_scope IN('all',v.programme) AND NOT EXISTS (SELECT 1 FROM private.baseline_bank base
        WHERE base.qualification=v.qualification AND base.academic_level=v.academic_level
          AND lower(regexp_replace(base.prompt,'[[:space:]]+','','g'))=
              lower(regexp_replace(b.prompt,'[[:space:]]+','','g')))
      AND private.grove_board_compatible(b.exam_board,(SELECT p.exam_board FROM public.student_preferences p WHERE p.student_id=v_uid))
   AND NOT EXISTS(SELECT 1 FROM private.grove_task_items old
    JOIN private.grove_tasks prev ON prev.id=old.task_id
    WHERE prev.student_id=v_uid AND (old.bank_id=b.id OR lower(regexp_replace(old.prompt,'[[:space:]]+','','g'))=lower(regexp_replace(b.prompt,'[[:space:]]+','','g'))))
 )
 SELECT * FROM candidate
 ORDER BY topic_slot,practice_priority,
   CASE WHEN programme_scope=v.programme THEN 0 ELSE 1 END,
   abs(difficulty-v_target), md5(id::text||v.due_date::text||v.student_id::text)
 LIMIT v.question_count LOOP
  v_order:=v_order+1;
  SELECT jsonb_agg(jsonb_build_object('id',chr((64+n)::integer),'text',c) ORDER BY n),
   max(CASE WHEN c=v_bank.correct_text THEN chr((64+n)::integer) END) INTO v_options,v_correct FROM(
   SELECT choice AS c,row_number() OVER(ORDER BY random()) AS n
   FROM jsonb_array_elements_text(v_bank.choices) AS x(choice)) q;
  IF v_correct IS NULL OR jsonb_array_length(v_options)<>4 THEN RAISE EXCEPTION 'Invalid practice item';END IF;
  INSERT INTO private.grove_task_items(task_id,position,bank_id,topic,skill,difficulty,prompt,choices,correct_option,explanation)
  VALUES(p_task,v_order,v_bank.id,v_bank.topic,v_bank.skill,v_bank.difficulty,v_bank.prompt,v_options,v_correct,v_bank.explanation);
  INSERT INTO private.grove_question_time(task_id,position) VALUES(p_task,v_order);
 END LOOP;
 IF v_order<>v.question_count THEN RAISE EXCEPTION 'Incomplete assigned paper';END IF;
 RETURN private.grove_payload(p_task);
END;$function$
;
UPDATE private.grove_tasks t
 SET mode='mock',question_count=20
 WHERE t.mode='mock_pending' AND t.status='scheduled'
 AND NOT EXISTS(SELECT 1 FROM private.grove_task_items i WHERE i.task_id=t.id);
COMMIT;