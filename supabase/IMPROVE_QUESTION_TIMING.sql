BEGIN;
CREATE OR REPLACE FUNCTION public.grove_task_focus(p_task uuid,p_position integer,p_visible boolean)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v private.grove_tasks%ROWTYPE;v_total integer:=0;
BEGIN
 SELECT * INTO v FROM private.grove_tasks WHERE id=p_task AND student_id=(SELECT auth.uid()) FOR UPDATE;
 IF v.id IS NULL THEN RAISE EXCEPTION 'Not authorised';END IF;
 IF v.status<>'active' OR (v.ends_at IS NOT NULL AND now()>=v.ends_at) THEN RETURN jsonb_build_object('ok',false);END IF;
 IF p_position NOT BETWEEN 1 AND v.question_count THEN RAISE EXCEPTION 'Invalid question';END IF;
 UPDATE private.grove_question_time SET
 seconds_visible=seconds_visible+least(30,greatest(0,extract(epoch from(now()-visible_since))::integer)),
 visible_since=NULL WHERE task_id=p_task AND visible_since IS NOT NULL;
 IF p_visible THEN
 UPDATE private.grove_question_time SET visible_since=now() WHERE task_id=p_task AND position=p_position;
 END IF;
 SELECT seconds_visible INTO v_total FROM private.grove_question_time
 WHERE task_id=p_task AND position=p_position;
 RETURN jsonb_build_object('ok',true,'position',p_position,'seconds_visible',coalesce(v_total,0));
END;$$;
REVOKE ALL ON FUNCTION public.grove_task_focus(uuid,integer,boolean) FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.grove_task_focus(uuid,integer,boolean) TO authenticated;
COMMIT;