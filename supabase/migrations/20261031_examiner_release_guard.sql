BEGIN;
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
  WHEN v_q='TMUA' THEN v_grade ~ '^([1-9]|[1-8]\\.[05]|9\\.0)$'
  ELSE false END;
 IF v_grade<>'' AND NOT v_ok THEN RAISE EXCEPTION 'Target grade must match the qualification';END IF;
 INSERT INTO public.student_academic_settings(student_id,org_id,target_grade,updated_by)
 VALUES(p_student,v_org,NULLIF(v_grade,''),(SELECT auth.uid()))
 ON CONFLICT(student_id) DO UPDATE SET target_grade=EXCLUDED.target_grade,updated_by=EXCLUDED.updated_by,updated_at=now();
 RETURN jsonb_build_object('ok',true,'target_grade',nullif(v_grade,''));
END;$function$
;
CREATE OR REPLACE FUNCTION public.grove_staff_mark_task(p_task uuid, p_marks jsonb, p_feedback text, p_release boolean)
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
DECLARE v private.grove_tasks%ROWTYPE;x jsonb;v_pos integer;v_mark integer;v_comment text;v_count integer;
BEGIN
 SELECT * INTO v FROM private.grove_tasks WHERE id=p_task FOR UPDATE;
 IF v.review_status='released' AND NOT p_release
 THEN RAISE EXCEPTION 'Use the full release action when amending an already released review';END IF;
 IF v.id IS NULL OR NOT private.is_staff(v.org_id) OR v.status NOT IN('completed','expired')
 THEN RAISE EXCEPTION 'A submitted assignment and authorised examiner are required';END IF;
 IF jsonb_typeof(p_marks)<>'array' OR jsonb_array_length(p_marks)>30 OR length(coalesce(p_feedback,''))>2500
 THEN RAISE EXCEPTION 'Invalid marking payload';END IF;
 FOR x IN SELECT value FROM jsonb_array_elements(p_marks) LOOP
  IF x->>'position' !~ '^[0-9]{1,2}$' OR x->>'mark' !~ '^[01]$'
  THEN RAISE EXCEPTION 'Each question requires a mark of 0 or 1';END IF;
  v_pos:=(x->>'position')::integer;v_mark:=(x->>'mark')::integer;v_comment:=coalesce(x->>'comment','');
  IF length(v_comment)>1000 OR NOT EXISTS(SELECT 1 FROM private.grove_task_items WHERE task_id=p_task AND position=v_pos)
  THEN RAISE EXCEPTION 'Invalid question or feedback';END IF;
  INSERT INTO private.grove_practice_marks(task_id,position,mark,comment,marked_by)
  VALUES(p_task,v_pos,v_mark,v_comment,(SELECT auth.uid()))
  ON CONFLICT(task_id,position) DO UPDATE SET mark=EXCLUDED.mark,comment=EXCLUDED.comment,marked_by=EXCLUDED.marked_by,updated_at=now();
 END LOOP;
 SELECT count(*) INTO v_count FROM private.grove_practice_marks WHERE task_id=p_task;
 IF p_release AND (v_count<>v.question_count OR length(trim(coalesce(p_feedback,'')))<15)
 THEN RAISE EXCEPTION 'Mark every question and write at least 15 characters of examiner feedback before release';END IF;
 IF p_release THEN
  UPDATE private.grove_tasks SET review_status='released',
   score=(SELECT coalesce(sum(mark),0) FROM private.grove_practice_marks WHERE task_id=p_task) WHERE id=p_task;
  INSERT INTO private.grove_task_feedback(task_id,feedback,updated_by)
   VALUES(p_task,trim(p_feedback),(SELECT auth.uid()))
   ON CONFLICT(task_id) DO UPDATE SET feedback=EXCLUDED.feedback,updated_by=EXCLUDED.updated_by,updated_at=now();
  INSERT INTO private.grove_feedback_history(task_id,feedback,edited_by) VALUES(p_task,trim(p_feedback),(SELECT auth.uid()));
 END IF;
 RETURN jsonb_build_object('ok',true,'released',p_release,'marked_count',v_count);
END;$function$
;
COMMIT;