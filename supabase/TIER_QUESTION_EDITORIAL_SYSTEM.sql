BEGIN;
ALTER TABLE private.grove_practice_bank
 ADD COLUMN IF NOT EXISTS programme_scope text NOT NULL DEFAULT 'all'
 CHECK(programme_scope IN('all','weekly','daily','exam'));
ALTER TABLE private.grove_practice_bank
 ADD COLUMN IF NOT EXISTS review_state text NOT NULL DEFAULT 'pilot'
 CHECK(review_state IN('pilot','draft','approved','retired'));
ALTER TABLE private.grove_practice_bank
 ADD COLUMN IF NOT EXISTS expected_seconds integer CHECK(expected_seconds BETWEEN 20 AND 900);
ALTER TABLE private.grove_practice_bank
 ADD COLUMN IF NOT EXISTS syllabus_objective text NOT NULL DEFAULT '';
ALTER TABLE private.grove_practice_bank
 ADD COLUMN IF NOT EXISTS exam_board text NOT NULL DEFAULT '';
ALTER TABLE private.grove_practice_bank
 ADD COLUMN IF NOT EXISTS reviewer_note text NOT NULL DEFAULT '';
ALTER TABLE private.grove_practice_bank
 ADD COLUMN IF NOT EXISTS reviewed_by uuid REFERENCES auth.users(id);
ALTER TABLE private.grove_practice_bank
 ADD COLUMN IF NOT EXISTS reviewed_at timestamptz;
CREATE OR REPLACE FUNCTION public.grove_task_start(p_task uuid)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
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
 IF (SELECT count(*) FROM private.grove_practice_bank
    WHERE active AND qualification=v.qualification AND academic_level=v.academic_level AND programme_scope IN('all',v.programme))<v.question_count
 THEN RAISE EXCEPTION 'Not enough approved practice questions for this pathway';END IF;
 UPDATE private.grove_tasks SET status='active',started_at=now(),
 ends_at=CASE WHEN v.programme='exam' THEN now()+interval '35 minutes' ELSE NULL END WHERE id=p_task;
 FOR v_bank IN SELECT * FROM private.grove_practice_bank
 WHERE active AND qualification=v.qualification AND academic_level=v.academic_level AND programme_scope IN('all',v.programme)
 ORDER BY CASE WHEN programme_scope=v.programme THEN 0 ELSE 1 END, abs(difficulty-(CASE WHEN v.mode='weekly' THEN 2 WHEN v.mode='exam_daily' THEN 4 ELSE 3 END)),
 md5(id::text||v.due_date::text||v.student_id::text)
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
END;$$;
REVOKE ALL ON FUNCTION public.grove_task_start(uuid) FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.grove_task_start(uuid) TO authenticated;

CREATE OR REPLACE FUNCTION public.grove_admin_editorial_bank(p_org uuid,p_route text DEFAULT NULL)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v_rows jsonb;
BEGIN
 IF (SELECT auth.uid()) IS NULL OR NOT private.is_partner(p_org) THEN RAISE EXCEPTION 'Administrator required';END IF;
 SELECT coalesce(jsonb_agg(jsonb_build_object('id',id,'qualification',qualification,
  'level',academic_level,'programme_scope',programme_scope,'exam_board',exam_board,'topic',topic,'skill',skill,
  'difficulty',difficulty,'prompt',prompt,'choices',choices,'correct_text',correct_text,
  'explanation',explanation,'expected_seconds',expected_seconds,'syllabus_objective',syllabus_objective,
  'status',review_state,'active',active) ORDER BY programme_scope,topic,skill),'[]'::jsonb)
 INTO v_rows
 FROM (SELECT * FROM private.grove_practice_bank
   WHERE review_state='draft' AND (p_route IS NULL OR qualification=p_route)
   ORDER BY qualification,programme_scope,topic LIMIT 200) q;
 RETURN jsonb_build_object('ok',true,'drafts',v_rows);
END;$$;
REVOKE ALL ON FUNCTION public.grove_admin_editorial_bank(uuid,text) FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.grove_admin_editorial_bank(uuid,text) TO authenticated;

CREATE OR REPLACE FUNCTION public.grove_admin_approve_question(p_org uuid,p_item uuid,p_comment text)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v_item private.grove_practice_bank%ROWTYPE;
BEGIN
 IF (SELECT auth.uid()) IS NULL OR NOT private.is_partner(p_org) THEN RAISE EXCEPTION 'Administrator required';END IF;
 IF length(trim(coalesce(p_comment,'')))<15 THEN RAISE EXCEPTION 'Include mathematical checking notes before approval';END IF;
 SELECT * INTO v_item FROM private.grove_practice_bank WHERE id=p_item FOR UPDATE;
 IF v_item.id IS NULL OR v_item.review_state<>'draft' THEN RAISE EXCEPTION 'Draft not found';END IF;
 IF jsonb_array_length(v_item.choices)<>4 OR
  (SELECT count(DISTINCT x) FROM jsonb_array_elements_text(v_item.choices) t(x))<>4 OR
  (SELECT count(*) FROM jsonb_array_elements_text(v_item.choices) t(x) WHERE x=v_item.correct_text)<>1
 THEN RAISE EXCEPTION 'Invalid four-choice answer key';END IF;
 UPDATE private.grove_practice_bank SET review_state='approved',active=true,
  reviewer_note=p_comment,reviewed_at=now(),reviewed_by=(SELECT auth.uid())
 WHERE id=p_item;
 RETURN jsonb_build_object('ok',true,'review_state','approved');
END;$$;
REVOKE ALL ON FUNCTION public.grove_admin_approve_question(uuid,uuid,text) FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.grove_admin_approve_question(uuid,uuid,text) TO authenticated;
COMMIT;