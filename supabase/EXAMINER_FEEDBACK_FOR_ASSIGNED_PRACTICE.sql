BEGIN;
CREATE TABLE IF NOT EXISTS private.grove_task_feedback(
 task_id uuid PRIMARY KEY REFERENCES private.grove_tasks(id) ON DELETE CASCADE,
 feedback text NOT NULL CHECK(length(feedback)<=2500),
 updated_by uuid REFERENCES auth.users(id),
 updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE IF NOT EXISTS private.grove_feedback_history(
 id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
 task_id uuid NOT NULL REFERENCES private.grove_tasks(id) ON DELETE CASCADE,
 feedback text NOT NULL CHECK(length(feedback)<=2500),
 edited_by uuid NOT NULL REFERENCES auth.users(id),
 edited_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE private.grove_task_feedback ENABLE ROW LEVEL SECURITY;
ALTER TABLE private.grove_feedback_history ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON private.grove_task_feedback,private.grove_feedback_history FROM PUBLIC,anon,authenticated;
REVOKE ALL ON ALL SEQUENCES IN SCHEMA private FROM PUBLIC,anon,authenticated;

CREATE OR REPLACE FUNCTION public.grove_staff_save_feedback(p_task uuid,p_feedback text)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v private.grove_tasks%ROWTYPE;v_message text:=trim(coalesce(p_feedback,''));
BEGIN
 IF (SELECT auth.uid()) IS NULL THEN RAISE EXCEPTION 'Signed-in staff account required';END IF;
 SELECT * INTO v FROM private.grove_tasks WHERE id=p_task FOR UPDATE;
 IF v.id IS NULL OR NOT private.is_staff(v.org_id) THEN RAISE EXCEPTION 'Not authorised to review this learner';END IF;
 IF v.status NOT IN('completed','expired') THEN RAISE EXCEPTION 'Only finished assignments can receive released feedback';END IF;
 IF length(v_message)>2500 THEN RAISE EXCEPTION 'Feedback must be under 2500 characters';END IF;
 INSERT INTO private.grove_task_feedback(task_id,feedback,updated_by)
 VALUES(p_task,v_message,(SELECT auth.uid()))
 ON CONFLICT(task_id) DO UPDATE SET feedback=excluded.feedback,updated_by=excluded.updated_by,updated_at=now();
 INSERT INTO private.grove_feedback_history(task_id,feedback,edited_by) VALUES(p_task,v_message,(SELECT auth.uid()));
 RETURN jsonb_build_object('ok',true,'saved_at',now());
END;$$;
REVOKE ALL ON FUNCTION public.grove_staff_save_feedback(uuid,text) FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.grove_staff_save_feedback(uuid,text) TO authenticated;

CREATE OR REPLACE FUNCTION public.grove_my_feedback(p_task uuid)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v private.grove_tasks%ROWTYPE;v_feedback text;
BEGIN
 IF (SELECT auth.uid()) IS NULL THEN RAISE EXCEPTION 'Sign-in required';END IF;
 SELECT * INTO v FROM private.grove_tasks WHERE id=p_task AND student_id=(SELECT auth.uid());
 IF v.id IS NULL THEN RAISE EXCEPTION 'Assignment not found or not authorised';END IF;
 IF v.status NOT IN('completed','expired') THEN RETURN jsonb_build_object('released',false);END IF;
 SELECT f.feedback INTO v_feedback FROM private.grove_task_feedback f WHERE f.task_id=p_task;
 RETURN jsonb_build_object('released',v_feedback IS NOT NULL,'feedback',coalesce(v_feedback,''));
END;$$;
REVOKE ALL ON FUNCTION public.grove_my_feedback(uuid) FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.grove_my_feedback(uuid) TO authenticated;

CREATE OR REPLACE FUNCTION public.grove_admin_schedule(p_org uuid)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE result jsonb;
BEGIN
 IF (SELECT auth.uid()) IS NULL OR NOT private.is_staff(p_org) THEN
  RAISE EXCEPTION 'Staff permissions required';END IF;
 SELECT coalesce(jsonb_agg(rec ORDER BY due_date DESC),'[]'::jsonb) INTO result FROM (
  SELECT t.due_date, jsonb_build_object('task_id',t.id,'student_id',t.student_id,
    'student_name',coalesce(p.display_name,'Student'),'qualification',t.qualification,
    'level',t.academic_level,'programme',t.programme,'mode',t.mode,'due_date',t.due_date,
    'status',t.status,'score',CASE WHEN t.status IN('completed','expired') THEN t.score ELSE NULL END,
    'question_count',t.question_count,
    'teacher_feedback',CASE WHEN t.status IN('completed','expired') THEN (SELECT f.feedback FROM private.grove_task_feedback f WHERE f.task_id=t.id) ELSE NULL END,
    'minutes_visible',(SELECT coalesce(round(sum(coalesce(q.seconds_visible,0))/60.0,1),0) FROM private.grove_question_time q WHERE q.task_id=t.id),
    'question_insights',CASE WHEN t.status IN('completed','expired') THEN
     (SELECT coalesce(jsonb_agg(jsonb_build_object('position',i.position,'topic',i.topic,
       'skill',i.skill,'correct',coalesce(a.choice=i.correct_option,false),
       'seconds_visible',coalesce(q.seconds_visible,0)) ORDER BY i.position),'[]'::jsonb)
      FROM private.grove_task_items i
      LEFT JOIN private.grove_task_answers a ON a.task_id=i.task_id AND a.position=i.position
      LEFT JOIN private.grove_question_time q ON q.task_id=i.task_id AND q.position=i.position
      WHERE i.task_id=t.id)
      ELSE '[]'::jsonb END
   ) AS rec
  FROM private.grove_tasks t
  JOIN public.profiles p ON p.id=t.student_id
  WHERE t.org_id=p_org AND t.due_date>=current_date-30
  ORDER BY t.due_date DESC LIMIT 250
 )x;
 RETURN jsonb_build_object('ok',true,'assignments',result);
END;$$;
REVOKE ALL ON FUNCTION public.grove_admin_schedule(uuid) FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.grove_admin_schedule(uuid) TO authenticated;
COMMIT;