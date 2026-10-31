BEGIN;
CREATE OR REPLACE FUNCTION public.grove_task_start(p_task uuid)
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
DECLARE v_uid uuid:=(SELECT auth.uid());v private.grove_tasks%ROWTYPE;v_baseline jsonb;v_active jsonb;v_bank record;
 v_order integer:=0;v_options jsonb;v_correct text;
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
 IF (SELECT count(*) FROM private.grove_practice_bank b
    WHERE b.active AND b.qualification=v.qualification AND b.academic_level=v.academic_level
      AND b.programme_scope IN('all',v.programme)
      AND NOT EXISTS(SELECT 1 FROM private.grove_task_items old
        JOIN private.grove_tasks prev ON prev.id=old.task_id
        WHERE prev.student_id=v_uid AND old.bank_id=b.id))<v.question_count
 THEN RAISE EXCEPTION 'This route has not enough unseen verified questions for your next practice. Your previous questions will not be repeated. The question bank needs expanding.';END IF;
 UPDATE private.grove_tasks SET status='active',started_at=now(),
 ends_at=CASE WHEN v.programme='exam' THEN now()+interval '35 minutes' ELSE NULL END WHERE id=p_task;
 FOR v_bank IN SELECT * FROM private.grove_practice_bank b
 WHERE b.active AND b.qualification=v.qualification AND b.academic_level=v.academic_level
   AND b.programme_scope IN('all',v.programme)
   AND NOT EXISTS(SELECT 1 FROM private.grove_task_items old
    JOIN private.grove_tasks prev ON prev.id=old.task_id
    WHERE prev.student_id=v_uid AND old.bank_id=b.id)
 ORDER BY CASE WHEN b.programme_scope=v.programme THEN 0 ELSE 1 END,
   abs(b.difficulty-(CASE WHEN v.mode='weekly' THEN 2 WHEN v.mode='exam_daily' THEN 4 ELSE 3 END)),
   md5(b.id::text||v.due_date::text||v.student_id::text)
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
COMMIT;