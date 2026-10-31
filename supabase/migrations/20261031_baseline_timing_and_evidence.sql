BEGIN;
CREATE TABLE IF NOT EXISTS private.baseline_question_time(
 session_id uuid NOT NULL REFERENCES private.baseline_sessions(id) ON DELETE CASCADE,
 position smallint NOT NULL CHECK(position BETWEEN 1 AND 20),
 seconds_visible integer NOT NULL DEFAULT 0,
 visible_since timestamptz,
 PRIMARY KEY(session_id,position)
);
ALTER TABLE private.baseline_question_time ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON private.baseline_question_time FROM PUBLIC,anon,authenticated;

CREATE OR REPLACE FUNCTION public.baseline_question_focus(p_session uuid,p_position integer,p_visible boolean)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v private.baseline_sessions%ROWTYPE;tm private.baseline_question_time%ROWTYPE;
BEGIN
 SELECT * INTO v FROM private.baseline_sessions WHERE id=p_session AND student_id=(SELECT auth.uid());
 IF v.id IS NULL THEN RAISE EXCEPTION 'Invalid student baseline session';END IF;
 IF p_position NOT BETWEEN 1 AND 20 OR v.status<>'active' OR now()>=v.ends_at
 THEN RETURN jsonb_build_object('ok',false);END IF;
 INSERT INTO private.baseline_question_time(session_id,position) VALUES(p_session,p_position)
 ON CONFLICT DO NOTHING;
 SELECT * INTO tm FROM private.baseline_question_time WHERE session_id=p_session AND position=p_position FOR UPDATE;
 IF tm.visible_since IS NOT NULL THEN
  UPDATE private.baseline_question_time SET seconds_visible=seconds_visible+
   least(30,greatest(0,extract(epoch FROM now()-tm.visible_since)::integer)),visible_since=NULL
   WHERE session_id=p_session AND position=p_position;
 END IF;
 IF p_visible THEN UPDATE private.baseline_question_time SET visible_since=now()
  WHERE session_id=p_session AND position=p_position; END IF;
 RETURN jsonb_build_object('ok',true);
END;$$;
REVOKE ALL ON FUNCTION public.baseline_question_focus(uuid,integer,boolean) FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.baseline_question_focus(uuid,integer,boolean) TO authenticated;

CREATE OR REPLACE FUNCTION public.baseline_finish(p_session uuid)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v_s private.baseline_sessions%ROWTYPE;
BEGIN
 SELECT * INTO v_s FROM private.baseline_sessions WHERE id=p_session AND student_id=(SELECT auth.uid()) FOR UPDATE;
 IF v_s.id IS NULL THEN RAISE EXCEPTION 'Not authorised';END IF;
 IF v_s.status='active' AND now()<v_s.ends_at AND NOT EXISTS(
 SELECT 1 FROM private.grove_work_evidence WHERE baseline_session_id=p_session)
 THEN RAISE EXCEPTION 'Save at least one whiteboard or photograph of your mathematical working before submitting'; END IF;
 PERFORM private.baseline_close(p_session);
 RETURN private.baseline_payload(p_session);
END;$$;

CREATE OR REPLACE FUNCTION public.grove_task_finish(p_task uuid)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v private.grove_tasks%ROWTYPE;
BEGIN
 SELECT * INTO v FROM private.grove_tasks WHERE id=p_task AND student_id=(SELECT auth.uid()) FOR UPDATE;
 IF v.id IS NULL THEN RAISE EXCEPTION 'Not authorised';END IF;
 IF v.status='active' AND (v.ends_at IS NULL OR now()<v.ends_at) AND NOT EXISTS(
 SELECT 1 FROM private.grove_work_evidence WHERE task_id=p_task)
 THEN RAISE EXCEPTION 'Save whiteboard work or upload a photograph before submitting your practice'; END IF;
 IF v.status='active' THEN PERFORM private.grove_close(p_task);END IF;
 RETURN private.grove_payload(p_task);
END;$$;

CREATE OR REPLACE FUNCTION public.baseline_staff_report(p_student uuid)
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
DECLARE v_s private.baseline_sessions%ROWTYPE;v_topics jsonb;v_flags jsonb;v_band text;
BEGIN
 SELECT * INTO v_s FROM private.baseline_sessions
 WHERE student_id=p_student ORDER BY started_at DESC LIMIT 1;
 IF v_s.id IS NULL THEN RETURN jsonb_build_object('ready',false,'reason','No baseline has been started for this learner.');END IF;
 IF (select auth.uid()) IS NULL OR NOT private.is_staff(v_s.org_id) THEN RAISE EXCEPTION 'Staff access required';END IF;
 IF v_s.status='active' AND now()>=v_s.ends_at THEN
   PERFORM private.baseline_close(v_s.id);
   SELECT * INTO v_s FROM private.baseline_sessions WHERE id=v_s.id;
 END IF;
 IF v_s.status='active' THEN
   RETURN jsonb_build_object('ready',true,'session_id',v_s.id,'status','active','qualification',v_s.qualification,
     'level',v_s.academic_level,'submitted_count',
     (SELECT count(*) FROM private.baseline_answers WHERE session_id=v_s.id),'minutes',v_s.minutes);
 END IF;
 SELECT coalesce(jsonb_agg(t.record ORDER BY t.topic),'[]'::jsonb) INTO v_topics FROM(
  SELECT i.topic,jsonb_build_object(
   'topic',i.topic,'correct',count(*) FILTER(WHERE a.choice=i.correct_option),
   'total',count(*),'priority_skill',min(i.skill) FILTER(WHERE a.choice IS NULL OR a.choice<>i.correct_option)
  )record FROM private.baseline_items i
  LEFT JOIN private.baseline_answers a ON a.session_id=i.session_id AND a.position=i.position
  WHERE i.session_id=v_s.id GROUP BY i.topic
 )t;
 SELECT jsonb_build_object(
  'tab_hidden',count(*) FILTER(WHERE kind='tab_hidden'),
  'fullscreen_exit',count(*) FILTER(WHERE kind='fullscreen_exit'),
  'window_blur',count(*) FILTER(WHERE kind='window_blur')
 ) INTO v_flags FROM private.baseline_events WHERE session_id=v_s.id;
 v_band:=CASE WHEN v_s.score<=6 THEN 'Foundations to strengthen' WHEN v_s.score<=12 THEN 'Developing understanding'
   WHEN v_s.score<=16 THEN 'Secure starting point' ELSE 'Strong initial performance' END;
 RETURN jsonb_build_object('ready',true,'session_id',v_s.id,'status',v_s.status,'qualification',v_s.qualification,
  'level',v_s.academic_level,'score',v_s.score,'total',20,
  'band',v_band,'topics',v_topics,'integrity',v_flags,'submitted_at',v_s.closed_at,
  'disclaimer','This short multiple-choice diagnostic is not a predicted grade or evidence of independently verified work.');
END;$function$
;
CREATE OR REPLACE FUNCTION public.grove_staff_evidence(p_kind text, p_session uuid)
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
DECLARE v_org uuid;v_rows jsonb;v_times jsonb;v_events jsonb;
BEGIN
 IF p_kind='baseline' THEN SELECT org_id INTO v_org FROM private.baseline_sessions WHERE id=p_session;
 ELSIF p_kind='practice' THEN SELECT org_id INTO v_org FROM private.grove_tasks WHERE id=p_session;
 ELSE RAISE EXCEPTION 'Invalid assessment type';END IF;
 IF v_org IS NULL OR NOT private.is_staff(v_org) THEN RAISE EXCEPTION 'Authorised examiner access required';END IF;
 SELECT coalesce(jsonb_agg(jsonb_build_object('position',position,'file_kind',file_kind,
  'original_name',original_name,'storage_path',storage_path,'created_at',created_at)
 ORDER BY position,created_at),'[]'::jsonb) INTO v_rows FROM private.grove_work_evidence
 WHERE (p_kind='baseline' AND baseline_session_id=p_session) OR (p_kind='practice' AND task_id=p_session);
 IF p_kind='baseline' THEN
  SELECT coalesce(jsonb_agg(jsonb_build_object('kind',kind,'at',created_at) ORDER BY created_at),'[]'::jsonb)
   INTO v_events FROM private.baseline_events WHERE session_id=p_session;
 END IF;
 RETURN jsonb_build_object('files',v_rows,'events',coalesce(v_events,'[]'::jsonb),
 'timings',CASE WHEN p_kind='baseline' THEN (
 SELECT coalesce(jsonb_agg(jsonb_build_object('position',position,'seconds',seconds_visible)
 ORDER BY position),'[]'::jsonb) FROM private.baseline_question_time WHERE session_id=p_session)
 ELSE '[]'::jsonb END);
END;$function$
;
CREATE OR REPLACE FUNCTION public.grove_student_insights()
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
DECLARE v_uid uuid:=(SELECT auth.uid());v_grade text;v_baseline jsonb;v_count integer;v_reviewed integer;v_minutes numeric;v_percent numeric;v_history jsonb;v_topics jsonb;
BEGIN
 IF v_uid IS NULL OR NOT EXISTS(SELECT 1 FROM public.memberships WHERE user_id=v_uid AND member_role='student')
 THEN RAISE EXCEPTION 'An enrolled student account is required';END IF;
 SELECT target_grade INTO v_grade FROM public.student_academic_settings WHERE student_id=v_uid;
 SELECT jsonb_build_object('status',s.status,'score',s.score,'total',20,
  'completed_at',s.closed_at,'qualification',s.qualification,'level',s.academic_level,
  'minutes',s.minutes,'tab_hidden',(SELECT count(*) FROM private.baseline_events e WHERE e.session_id=s.id AND e.kind='tab_hidden'),
  'evidence_count',(SELECT count(*) FROM private.grove_work_evidence e WHERE e.baseline_session_id=s.id))
 INTO v_baseline FROM private.baseline_sessions s WHERE s.student_id=v_uid ORDER BY s.started_at DESC LIMIT 1;
 SELECT count(*),count(*) FILTER(WHERE review_status='released') INTO v_count,v_reviewed
 FROM private.grove_tasks WHERE student_id=v_uid AND status IN('completed','expired') AND mode<>'mock_pending';
 SELECT coalesce(sum(q.seconds_visible)/60.0,0) INTO v_minutes FROM private.grove_question_time q
 JOIN private.grove_tasks t ON t.id=q.task_id WHERE t.student_id=v_uid;
 SELECT round(100.0*sum(score)/nullif(sum(question_count),0),1) INTO v_percent
 FROM private.grove_tasks WHERE student_id=v_uid AND review_status='released';
 SELECT coalesce(jsonb_agg(jsonb_build_object('date',due_date,'score',score,'total',question_count,'mode',mode)
 ORDER BY due_date),'[]'::jsonb) INTO v_history FROM private.grove_tasks
 WHERE student_id=v_uid AND review_status='released';
 SELECT coalesce(jsonb_agg(jsonb_build_object('topic',topic,'correct',correct,'total',total)),'[]'::jsonb) INTO v_topics
 FROM (SELECT i.topic,count(*) total,count(*) FILTER(WHERE m.mark=1) correct
   FROM private.grove_practice_marks m JOIN private.grove_task_items i ON i.task_id=m.task_id AND i.position=m.position
   JOIN private.grove_tasks t ON t.id=m.task_id WHERE t.student_id=v_uid AND t.review_status='released'
   GROUP BY i.topic ORDER BY count(*) FILTER(WHERE m.mark=1)::numeric/nullif(count(*),0),i.topic LIMIT 8) agg;
 RETURN jsonb_build_object('target_grade',v_grade,'baseline',v_baseline,'submitted',v_count,
 'reviewed',v_reviewed,'visible_minutes',round(v_minutes,1),'reviewed_accuracy',v_percent,
 'history',v_history,'topics',v_topics,
 'baseline_topics', (SELECT coalesce(jsonb_agg(jsonb_build_object('topic',topic,'correct',correct,'total',total)
 ORDER BY topic),'[]'::jsonb) FROM (
 SELECT i.topic,count(*) FILTER(WHERE a.choice=i.correct_option) correct,count(*) total
 FROM private.baseline_items i
 LEFT JOIN private.baseline_answers a ON a.session_id=i.session_id AND a.position=i.position
 WHERE i.session_id=(SELECT id FROM private.baseline_sessions WHERE student_id=v_uid ORDER BY started_at DESC LIMIT 1)
 GROUP BY i.topic) b),
 'disclaimer','Target grades are set by staff. The baseline and examiner-marked practices are evidence, not an official predicted grade.');
END;$function$
;
COMMIT;