BEGIN;
-- MathsGrove evidence-first practice: only baseline multiple choice is auto-scored.
ALTER TABLE public.student_academic_settings ADD COLUMN IF NOT EXISTS target_grade text;
ALTER TABLE private.grove_tasks ADD COLUMN IF NOT EXISTS review_status text NOT NULL DEFAULT 'awaiting_submission'
 CHECK (review_status IN ('awaiting_submission','awaiting_review','released'));
UPDATE private.grove_tasks SET review_status='awaiting_review',score=NULL
 WHERE status IN ('completed','expired') AND review_status='awaiting_submission';

CREATE TABLE IF NOT EXISTS private.grove_work_evidence(
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 org_id uuid NOT NULL REFERENCES public.organisations(id),
 student_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
 baseline_session_id uuid REFERENCES private.baseline_sessions(id) ON DELETE CASCADE,
 task_id uuid REFERENCES private.grove_tasks(id) ON DELETE CASCADE,
 position smallint NOT NULL CHECK(position BETWEEN 1 AND 30),
 storage_path text UNIQUE NOT NULL,
 file_kind text NOT NULL CHECK(file_kind IN ('whiteboard','photo')),
 original_name text NOT NULL,
 created_at timestamptz NOT NULL DEFAULT now(),
 CHECK ((baseline_session_id IS NOT NULL)::int+(task_id IS NOT NULL)::int=1)
);
CREATE INDEX IF NOT EXISTS grove_evidence_baseline_idx ON private.grove_work_evidence(baseline_session_id,position);
CREATE INDEX IF NOT EXISTS grove_evidence_task_idx ON private.grove_work_evidence(task_id,position);
ALTER TABLE private.grove_work_evidence ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON private.grove_work_evidence FROM PUBLIC,anon,authenticated;

CREATE TABLE IF NOT EXISTS private.grove_practice_marks(
 task_id uuid NOT NULL REFERENCES private.grove_tasks(id) ON DELETE CASCADE,
 position smallint NOT NULL,
 mark smallint NOT NULL CHECK(mark IN(0,1)),
 comment text NOT NULL DEFAULT '' CHECK(length(comment)<=1000),
 marked_by uuid NOT NULL REFERENCES auth.users(id),
 updated_at timestamptz NOT NULL DEFAULT now(),
 PRIMARY KEY(task_id,position),
 FOREIGN KEY(task_id,position) REFERENCES private.grove_task_items(task_id,position) ON DELETE CASCADE
);
ALTER TABLE private.grove_practice_marks ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON private.grove_practice_marks FROM PUBLIC,anon,authenticated;

-- Storage is private. These paths can only be uploaded for the user's own
-- active baseline/task; it cannot be used to upload someone else's evidence.
CREATE OR REPLACE FUNCTION public.grove_evidence_upload_allowed(p_path text)
RETURNS boolean LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v_parts text[]:=string_to_array(p_path,'/');v_uid uuid:=(SELECT auth.uid());
BEGIN
 IF v_uid IS NULL OR array_length(v_parts,1)<>7 OR v_parts[2]<>v_uid::text
 OR v_parts[4] !~ '^[a-f0-9-]{36}$' OR v_parts[5] !~ '^[0-9]{1,2}$'
 OR v_parts[6]<> 'work' OR v_parts[7] !~ '^[a-f0-9-]{36}[.](png|jpg|jpeg|webp)
 THEN RETURN false;END IF;
 IF v_parts[3]='baseline' THEN
  RETURN EXISTS (SELECT 1 FROM private.baseline_sessions s WHERE
   s.id::text=v_parts[4] AND s.student_id=v_uid AND s.org_id::text=v_parts[1]
   AND s.status='active' AND now()<s.ends_at
   AND (v_parts[5])::int BETWEEN 1 AND 20);
 ELSIF v_parts[3]='practice' THEN
  RETURN EXISTS (SELECT 1 FROM private.grove_tasks t WHERE
   t.id::text=v_parts[4] AND t.student_id=v_uid AND t.org_id::text=v_parts[1]
   AND t.status='active' AND (t.ends_at IS NULL OR now()<t.ends_at)
   AND (v_parts[5])::int BETWEEN 1 AND t.question_count);
 END IF;
 RETURN false;
END;$$;
REVOKE ALL ON FUNCTION public.grove_evidence_upload_allowed(text) FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.grove_evidence_upload_allowed(text) TO authenticated;

DROP POLICY IF EXISTS mathsgrove_assessment_evidence_upload ON storage.objects;
CREATE POLICY mathsgrove_assessment_evidence_upload ON storage.objects FOR INSERT TO authenticated
WITH CHECK(bucket_id='student-work' AND public.grove_evidence_upload_allowed(name));

CREATE OR REPLACE FUNCTION public.grove_save_work_evidence(
 p_kind text,p_session uuid,p_position integer,p_path text,p_name text,p_file_kind text)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v_uid uuid:=(SELECT auth.uid());v_org uuid;v_total integer;
BEGIN
 IF v_uid IS NULL OR p_kind NOT IN('baseline','practice') OR p_file_kind NOT IN('photo','whiteboard')
  OR p_name IS NULL OR length(p_name)>160 OR length(p_name)<1
  OR p_position NOT BETWEEN 1 AND 30
 THEN RAISE EXCEPTION 'Invalid evidence submission';END IF;
 IF p_kind='baseline' THEN
  SELECT s.org_id INTO v_org FROM private.baseline_sessions s
   WHERE s.id=p_session AND s.student_id=v_uid AND s.status='active' AND now()<s.ends_at
    AND p_position BETWEEN 1 AND 20;
 ELSE
  SELECT t.org_id INTO v_org FROM private.grove_tasks t
   WHERE t.id=p_session AND t.student_id=v_uid AND t.status='active'
   AND (t.ends_at IS NULL OR now()<t.ends_at) AND p_position BETWEEN 1 AND t.question_count;
 END IF;
 IF v_org IS NULL THEN RAISE EXCEPTION 'Assessment session is no longer open or authorised';END IF;
 IF p_path NOT LIKE (v_org::text||'/'||v_uid::text||'/'||p_kind||'/'||p_session::text||'/'||p_position::text||'/work/%')
  OR NOT EXISTS(SELECT 1 FROM storage.objects o WHERE o.bucket_id='student-work' AND o.name=p_path)
 THEN RAISE EXCEPTION 'The evidence file is missing or belongs to another session';END IF;
 SELECT count(*) INTO v_total FROM private.grove_work_evidence
 WHERE (p_kind='baseline' AND baseline_session_id=p_session AND position=p_position)
    OR (p_kind='practice' AND task_id=p_session AND position=p_position);
 IF v_total>=6 THEN RAISE EXCEPTION 'Maximum six saved evidence files per question';END IF;
 INSERT INTO private.grove_work_evidence(org_id,student_id,baseline_session_id,task_id,position,storage_path,file_kind,original_name)
 VALUES(v_org,v_uid,CASE WHEN p_kind='baseline' THEN p_session END,CASE WHEN p_kind='practice' THEN p_session END,
 p_position,p_path,p_file_kind,p_name)
 ON CONFLICT(storage_path) DO NOTHING;
 RETURN jsonb_build_object('ok',true);
END;$$;
REVOKE ALL ON FUNCTION public.grove_save_work_evidence(text,uuid,integer,text,text,text) FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.grove_save_work_evidence(text,uuid,integer,text,text,text) TO authenticated;

CREATE OR REPLACE FUNCTION public.grove_my_work_evidence(p_kind text,p_session uuid)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v_uid uuid:=(SELECT auth.uid());v_rows jsonb;
BEGIN
 IF v_uid IS NULL OR NOT (
 (p_kind='baseline' AND EXISTS(SELECT 1 FROM private.baseline_sessions WHERE id=p_session AND student_id=v_uid))
 OR (p_kind='practice' AND EXISTS(SELECT 1 FROM private.grove_tasks WHERE id=p_session AND student_id=v_uid))
 ) THEN RAISE EXCEPTION 'Evidence is not available for this account';END IF;
 SELECT coalesce(jsonb_agg(jsonb_build_object('position',position,'file_kind',file_kind,'name',original_name,'created_at',created_at)
 ORDER BY position,created_at),'[]'::jsonb) INTO v_rows FROM private.grove_work_evidence
 WHERE (p_kind='baseline' AND baseline_session_id=p_session) OR (p_kind='practice' AND task_id=p_session);
 RETURN jsonb_build_object('files',v_rows);
END;$$;
REVOKE ALL ON FUNCTION public.grove_my_work_evidence(text,uuid) FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.grove_my_work_evidence(text,uuid) TO authenticated;

-- For completed baseline: the multiple-choice score is automated.
-- Evidence supports additional human review, but is not used to award marks automatically.
CREATE OR REPLACE FUNCTION public.grove_staff_evidence(p_kind text,p_session uuid)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
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
 RETURN jsonb_build_object('files',v_rows,'events',coalesce(v_events,'[]'::jsonb));
END;$$;
REVOKE ALL ON FUNCTION public.grove_staff_evidence(text,uuid) FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.grove_staff_evidence(text,uuid) TO authenticated;

-- Daily and weekly practice no longer receive automatically awarded marks.
CREATE OR REPLACE FUNCTION private.grove_close(p_task uuid)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v private.grove_tasks%ROWTYPE;
BEGIN
 SELECT * INTO v FROM private.grove_tasks WHERE id=p_task FOR UPDATE;
 IF v.id IS NULL OR v.status<>'active' THEN RETURN;END IF;
 UPDATE private.grove_question_time SET
 seconds_visible=seconds_visible+least(30,greatest(0,extract(epoch from (now()-visible_since))::integer)),
 visible_since=NULL WHERE task_id=p_task AND visible_since IS NOT NULL;
 UPDATE private.grove_tasks SET
 status=CASE WHEN ends_at IS NOT NULL AND now()>=ends_at THEN 'expired' ELSE 'completed' END,
 review_status='awaiting_review',score=NULL,submitted_at=now() WHERE id=p_task;
END;$$;

CREATE OR REPLACE FUNCTION private.grove_payload(p_task uuid)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v private.grove_tasks%ROWTYPE;v_questions jsonb;v_review jsonb;v_topics jsonb;v_released boolean;
BEGIN
 SELECT * INTO v FROM private.grove_tasks WHERE id=p_task;
 IF v.id IS NULL OR v.student_id<>(SELECT auth.uid()) THEN RAISE EXCEPTION 'Not authorised';END IF;
 IF v.status='active' AND v.ends_at IS NOT NULL AND now()>=v.ends_at THEN
  PERFORM private.grove_close(p_task);
  SELECT * INTO v FROM private.grove_tasks WHERE id=p_task;
 END IF;
 v_released:=v.review_status='released';
 SELECT coalesce(jsonb_agg(jsonb_build_object('position',i.position,'topic',i.topic,'skill',i.skill,
  'difficulty',i.difficulty,'prompt',i.prompt,'choices',i.choices,'selected',a.choice)
 ORDER BY i.position),'[]'::jsonb) INTO v_questions
 FROM private.grove_task_items i LEFT JOIN private.grove_task_answers a ON a.task_id=i.task_id AND a.position=i.position
 WHERE i.task_id=p_task;
 IF v_released THEN
  SELECT coalesce(jsonb_agg(jsonb_build_object('position',i.position,'topic',i.topic,'skill',i.skill,
   'correct',coalesce(m.mark=1,false),'mark',m.mark,'comment',coalesce(m.comment,''),
   'seconds',coalesce(t.seconds_visible,0)) ORDER BY i.position),'[]'::jsonb) INTO v_review
  FROM private.grove_task_items i
  LEFT JOIN private.grove_practice_marks m ON m.task_id=i.task_id AND m.position=i.position
  LEFT JOIN private.grove_question_time t ON t.task_id=i.task_id AND t.position=i.position
  WHERE i.task_id=p_task;
  SELECT coalesce(jsonb_agg(jsonb_build_object('topic',topic,'total',n,'correct',earned,'seconds',spent)),'[]'::jsonb)
   INTO v_topics FROM (
    SELECT i.topic,count(*) n,count(*) FILTER(WHERE m.mark=1) earned,sum(coalesce(t.seconds_visible,0)) spent
    FROM private.grove_task_items i LEFT JOIN private.grove_practice_marks m ON m.task_id=i.task_id AND m.position=i.position
    LEFT JOIN private.grove_question_time t ON t.task_id=i.task_id AND t.position=i.position
    WHERE i.task_id=p_task GROUP BY i.topic
   ) x;
 END IF;
 RETURN jsonb_build_object('task_id',v.id,'status',v.status,'review_status',v.review_status,'mode',v.mode,'due_date',v.due_date,
  'qualification',v.qualification,'level',v.academic_level,'programme',v.programme,
  'questions',v_questions,'review',coalesce(v_review,'[]'::jsonb),'topics',coalesce(v_topics,'[]'::jsonb),
  'score',CASE WHEN v_released THEN v.score ELSE NULL END,
  'question_count',v.question_count,'ends_at',v.ends_at,'server_time',now(),
  'report_note',CASE WHEN v_released THEN 'Marks and comments have been released by an examiner.'
   ELSE 'Submitted for human marking. No automatic marks are awarded for daily or weekly practice.' END);
END;$$;

CREATE OR REPLACE FUNCTION public.grove_staff_review_task(p_task uuid)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v private.grove_tasks%ROWTYPE;v_items jsonb;v_focus jsonb;
BEGIN
 SELECT * INTO v FROM private.grove_tasks WHERE id=p_task;
 IF v.id IS NULL OR NOT private.is_staff(v.org_id) THEN RAISE EXCEPTION 'Examiner access required'; END IF;
 IF v.status NOT IN('completed','expired') THEN RAISE EXCEPTION 'This assignment is not yet submitted';END IF;
 SELECT coalesce(jsonb_agg(jsonb_build_object(
  'position',i.position,'prompt',i.prompt,'topic',i.topic,'skill',i.skill,
  'choices',i.choices,'selected',a.choice,'correct_option',i.correct_option,
  'seconds_visible',coalesce(tm.seconds_visible,0),'mark',m.mark,'comment',coalesce(m.comment,''),
  'evidence',(SELECT coalesce(jsonb_agg(jsonb_build_object('path',e.storage_path,'name',e.original_name,
   'kind',e.file_kind)),'[]'::jsonb) FROM private.grove_work_evidence e WHERE e.task_id=p_task AND e.position=i.position)
 ) ORDER BY i.position),'[]'::jsonb) INTO v_items
 FROM private.grove_task_items i
 LEFT JOIN private.grove_task_answers a ON a.task_id=i.task_id AND a.position=i.position
 LEFT JOIN private.grove_question_time tm ON tm.task_id=i.task_id AND tm.position=i.position
 LEFT JOIN private.grove_practice_marks m ON m.task_id=i.task_id AND m.position=i.position
 WHERE i.task_id=p_task;
 RETURN jsonb_build_object('items',v_items,'review_status',v.review_status,'score',v.score,
  'student_id',v.student_id,'mode',v.mode,'due_date',v.due_date);
END;$$;
REVOKE ALL ON FUNCTION public.grove_staff_review_task(uuid) FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.grove_staff_review_task(uuid) TO authenticated;

CREATE OR REPLACE FUNCTION public.grove_staff_mark_task(p_task uuid,p_marks jsonb,p_feedback text,p_release boolean)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v private.grove_tasks%ROWTYPE;x jsonb;v_pos integer;v_mark integer;v_comment text;v_count integer;
BEGIN
 SELECT * INTO v FROM private.grove_tasks WHERE id=p_task FOR UPDATE;
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
END;$$;
REVOKE ALL ON FUNCTION public.grove_staff_mark_task(uuid,jsonb,text,boolean) FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.grove_staff_mark_task(uuid,jsonb,text,boolean) TO authenticated;

CREATE OR REPLACE FUNCTION public.grove_staff_save_feedback(p_task uuid,p_feedback text)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
BEGIN
 RAISE EXCEPTION 'Practice feedback must be released through complete question-by-question examiner marking';
END;$$;

CREATE OR REPLACE FUNCTION public.grove_my_feedback(p_task uuid)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v private.grove_tasks%ROWTYPE;v_feedback text;
BEGIN
 SELECT * INTO v FROM private.grove_tasks WHERE id=p_task AND student_id=(SELECT auth.uid());
 IF v.id IS NULL THEN RAISE EXCEPTION 'Assignment not found';END IF;
 IF v.review_status<>'released' THEN RETURN jsonb_build_object('released',false);END IF;
 SELECT feedback INTO v_feedback FROM private.grove_task_feedback WHERE task_id=p_task;
 RETURN jsonb_build_object('released',true,'feedback',coalesce(v_feedback,''));
END;$$;

CREATE OR REPLACE FUNCTION public.grove_admin_schedule(p_org uuid)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE result jsonb;
BEGIN
 IF (SELECT auth.uid()) IS NULL OR NOT private.is_staff(p_org) THEN RAISE EXCEPTION 'Staff permissions required';END IF;
 SELECT coalesce(jsonb_agg(rec ORDER BY due_date DESC),'[]'::jsonb) INTO result FROM (
 SELECT t.due_date, jsonb_build_object('task_id',t.id,'student_id',t.student_id,
 'student_name',coalesce(p.display_name,'Student'),'qualification',t.qualification,'level',t.academic_level,
 'programme',t.programme,'mode',t.mode,'due_date',t.due_date,'status',t.status,
 'review_status',t.review_status,'score',CASE WHEN t.review_status='released' THEN t.score ELSE NULL END,
 'question_count',t.question_count,'teacher_feedback',CASE WHEN t.review_status='released' THEN
  (SELECT f.feedback FROM private.grove_task_feedback f WHERE f.task_id=t.id) END,
 'minutes_visible',(SELECT coalesce(round(sum(coalesce(q.seconds_visible,0))/60.0,1),0) FROM private.grove_question_time q WHERE q.task_id=t.id),
 'question_insights',CASE WHEN t.status IN('completed','expired') THEN
  (SELECT coalesce(jsonb_agg(jsonb_build_object('position',i.position,'topic',i.topic,'skill',i.skill,
    'mark',m.mark,'seconds_visible',coalesce(q.seconds_visible,0),
    'evidence_count',(SELECT count(*) FROM private.grove_work_evidence e WHERE e.task_id=t.id AND e.position=i.position))
    ORDER BY i.position),'[]'::jsonb)
   FROM private.grove_task_items i
   LEFT JOIN private.grove_practice_marks m ON m.task_id=i.task_id AND m.position=i.position
   LEFT JOIN private.grove_question_time q ON q.task_id=i.task_id AND q.position=i.position
   WHERE i.task_id=t.id) ELSE '[]'::jsonb END
 ) rec
 FROM private.grove_tasks t JOIN public.profiles p ON p.id=t.student_id
 WHERE t.org_id=p_org AND t.due_date>=current_date-30 ORDER BY t.due_date DESC LIMIT 250
 ) a;
 RETURN jsonb_build_object('ok',true,'assignments',result);
END;$$;

CREATE OR REPLACE FUNCTION public.grove_my_calendar()
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v_uid uuid:=(SELECT auth.uid());v_route jsonb;v_tier text;v_org uuid;
 v_start date;v_end date;v_day date;v_rows jsonb;v_bstatus text;
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
 SELECT coalesce(jsonb_agg(jsonb_build_object(
 'id',id,'due_date',due_date,'mode',mode,'status',status,'questions',question_count,
 'review_status',review_status,'score',CASE WHEN review_status='released' THEN score END)
 ORDER BY due_date,mode),'[]'::jsonb) INTO v_rows
 FROM private.grove_tasks WHERE student_id=v_uid AND due_date BETWEEN current_date-14 AND current_date+35
 AND (v_end IS NULL OR due_date<=v_end);
 RETURN jsonb_build_object('ready',true,'programme',v_tier,'qualification',v_route->>'qualification',
 'level',v_route->>'level','baseline_status',v_bstatus,'assignments',v_rows);
END;$$;

CREATE OR REPLACE FUNCTION public.grove_admin_set_target(p_student uuid,p_grade text)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v_org uuid;v_q text;v_grade text:=upper(trim(coalesce(p_grade,'')));v_ok boolean;
BEGIN
 SELECT org_id INTO v_org FROM public.memberships WHERE user_id=p_student AND member_role='student' LIMIT 1;
 IF v_org IS NULL OR NOT private.is_staff(v_org) THEN RAISE EXCEPTION 'Administrator permissions required';END IF;
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
END;$$;
REVOKE ALL ON FUNCTION public.grove_admin_set_target(uuid,text) FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.grove_admin_set_target(uuid,text) TO authenticated;

-- A diagnostic score is not converted to a false exam prediction.
CREATE OR REPLACE FUNCTION public.grove_student_insights()
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
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
 'disclaimer','Target grades are set by staff. The baseline and examiner-marked practices are evidence, not an official predicted grade.');
END;$$;
REVOKE ALL ON FUNCTION public.grove_student_insights() FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.grove_student_insights() TO authenticated;

-- Do not lose these evidence files when a learner is archived or removed.
-- Foreign keys cascade when baseline/tasks are purged, but remove metadata explicitly in cleanup.
COMMIT;
 THEN RETURN false;END IF;
 IF v_parts[3]='baseline' THEN
  RETURN EXISTS (SELECT 1 FROM private.baseline_sessions s WHERE
   s.id::text=v_parts[4] AND s.student_id=v_uid AND s.org_id::text=v_parts[1]
   AND s.status='active' AND now()<s.ends_at
   AND (v_parts[5])::int BETWEEN 1 AND 20);
 ELSIF v_parts[3]='practice' THEN
  RETURN EXISTS (SELECT 1 FROM private.grove_tasks t WHERE
   t.id::text=v_parts[4] AND t.student_id=v_uid AND t.org_id::text=v_parts[1]
   AND t.status='active' AND (t.ends_at IS NULL OR now()<t.ends_at)
   AND (v_parts[5])::int BETWEEN 1 AND t.question_count);
 END IF;
 RETURN false;
END;$$;
REVOKE ALL ON FUNCTION public.grove_evidence_upload_allowed(text) FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.grove_evidence_upload_allowed(text) TO authenticated;

DROP POLICY IF EXISTS mathsgrove_assessment_evidence_upload ON storage.objects;
CREATE POLICY mathsgrove_assessment_evidence_upload ON storage.objects FOR INSERT TO authenticated
WITH CHECK(bucket_id='student-work' AND public.grove_evidence_upload_allowed(name));

CREATE OR REPLACE FUNCTION public.grove_save_work_evidence(
 p_kind text,p_session uuid,p_position integer,p_path text,p_name text,p_file_kind text)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v_uid uuid:=(SELECT auth.uid());v_org uuid;v_total integer;
BEGIN
 IF v_uid IS NULL OR p_kind NOT IN('baseline','practice') OR p_file_kind NOT IN('photo','whiteboard')
  OR p_name IS NULL OR length(p_name)>160 OR length(p_name)<1
  OR p_position NOT BETWEEN 1 AND 30
 THEN RAISE EXCEPTION 'Invalid evidence submission';END IF;
 IF p_kind='baseline' THEN
  SELECT s.org_id INTO v_org FROM private.baseline_sessions s
   WHERE s.id=p_session AND s.student_id=v_uid AND s.status='active' AND now()<s.ends_at
    AND p_position BETWEEN 1 AND 20;
 ELSE
  SELECT t.org_id INTO v_org FROM private.grove_tasks t
   WHERE t.id=p_session AND t.student_id=v_uid AND t.status='active'
   AND (t.ends_at IS NULL OR now()<t.ends_at) AND p_position BETWEEN 1 AND t.question_count;
 END IF;
 IF v_org IS NULL THEN RAISE EXCEPTION 'Assessment session is no longer open or authorised';END IF;
 IF p_path NOT LIKE (v_org::text||'/'||v_uid::text||'/'||p_kind||'/'||p_session::text||'/'||p_position::text||'/work/%')
  OR NOT EXISTS(SELECT 1 FROM storage.objects o WHERE o.bucket_id='student-work' AND o.name=p_path)
 THEN RAISE EXCEPTION 'The evidence file is missing or belongs to another session';END IF;
 SELECT count(*) INTO v_total FROM private.grove_work_evidence
 WHERE (p_kind='baseline' AND baseline_session_id=p_session AND position=p_position)
    OR (p_kind='practice' AND task_id=p_session AND position=p_position);
 IF v_total>=6 THEN RAISE EXCEPTION 'Maximum six saved evidence files per question';END IF;
 INSERT INTO private.grove_work_evidence(org_id,student_id,baseline_session_id,task_id,position,storage_path,file_kind,original_name)
 VALUES(v_org,v_uid,CASE WHEN p_kind='baseline' THEN p_session END,CASE WHEN p_kind='practice' THEN p_session END,
 p_position,p_path,p_file_kind,p_name)
 ON CONFLICT(storage_path) DO NOTHING;
 RETURN jsonb_build_object('ok',true);
END;$$;
REVOKE ALL ON FUNCTION public.grove_save_work_evidence(text,uuid,integer,text,text,text) FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.grove_save_work_evidence(text,uuid,integer,text,text,text) TO authenticated;

CREATE OR REPLACE FUNCTION public.grove_my_work_evidence(p_kind text,p_session uuid)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v_uid uuid:=(SELECT auth.uid());v_rows jsonb;
BEGIN
 IF v_uid IS NULL OR NOT (
 (p_kind='baseline' AND EXISTS(SELECT 1 FROM private.baseline_sessions WHERE id=p_session AND student_id=v_uid))
 OR (p_kind='practice' AND EXISTS(SELECT 1 FROM private.grove_tasks WHERE id=p_session AND student_id=v_uid))
 ) THEN RAISE EXCEPTION 'Evidence is not available for this account';END IF;
 SELECT coalesce(jsonb_agg(jsonb_build_object('position',position,'file_kind',file_kind,'name',original_name,'created_at',created_at)
 ORDER BY position,created_at),'[]'::jsonb) INTO v_rows FROM private.grove_work_evidence
 WHERE (p_kind='baseline' AND baseline_session_id=p_session) OR (p_kind='practice' AND task_id=p_session);
 RETURN jsonb_build_object('files',v_rows);
END;$$;
REVOKE ALL ON FUNCTION public.grove_my_work_evidence(text,uuid) FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.grove_my_work_evidence(text,uuid) TO authenticated;

-- For completed baseline: the multiple-choice score is automated.
-- Evidence supports additional human review, but is not used to award marks automatically.
CREATE OR REPLACE FUNCTION public.grove_staff_evidence(p_kind text,p_session uuid)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
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
 RETURN jsonb_build_object('files',v_rows,'events',coalesce(v_events,'[]'::jsonb));
END;$$;
REVOKE ALL ON FUNCTION public.grove_staff_evidence(text,uuid) FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.grove_staff_evidence(text,uuid) TO authenticated;

-- Daily and weekly practice no longer receive automatically awarded marks.
CREATE OR REPLACE FUNCTION private.grove_close(p_task uuid)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v private.grove_tasks%ROWTYPE;
BEGIN
 SELECT * INTO v FROM private.grove_tasks WHERE id=p_task FOR UPDATE;
 IF v.id IS NULL OR v.status<>'active' THEN RETURN;END IF;
 UPDATE private.grove_question_time SET
 seconds_visible=seconds_visible+least(30,greatest(0,extract(epoch from (now()-visible_since))::integer)),
 visible_since=NULL WHERE task_id=p_task AND visible_since IS NOT NULL;
 UPDATE private.grove_tasks SET
 status=CASE WHEN ends_at IS NOT NULL AND now()>=ends_at THEN 'expired' ELSE 'completed' END,
 review_status='awaiting_review',score=NULL,submitted_at=now() WHERE id=p_task;
END;$$;

CREATE OR REPLACE FUNCTION private.grove_payload(p_task uuid)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v private.grove_tasks%ROWTYPE;v_questions jsonb;v_review jsonb;v_topics jsonb;v_released boolean;
BEGIN
 SELECT * INTO v FROM private.grove_tasks WHERE id=p_task;
 IF v.id IS NULL OR v.student_id<>(SELECT auth.uid()) THEN RAISE EXCEPTION 'Not authorised';END IF;
 IF v.status='active' AND v.ends_at IS NOT NULL AND now()>=v.ends_at THEN
  PERFORM private.grove_close(p_task);
  SELECT * INTO v FROM private.grove_tasks WHERE id=p_task;
 END IF;
 v_released:=v.review_status='released';
 SELECT coalesce(jsonb_agg(jsonb_build_object('position',i.position,'topic',i.topic,'skill',i.skill,
  'difficulty',i.difficulty,'prompt',i.prompt,'choices',i.choices,'selected',a.choice)
 ORDER BY i.position),'[]'::jsonb) INTO v_questions
 FROM private.grove_task_items i LEFT JOIN private.grove_task_answers a ON a.task_id=i.task_id AND a.position=i.position
 WHERE i.task_id=p_task;
 IF v_released THEN
  SELECT coalesce(jsonb_agg(jsonb_build_object('position',i.position,'topic',i.topic,'skill',i.skill,
   'correct',coalesce(m.mark=1,false),'mark',m.mark,'comment',coalesce(m.comment,''),
   'seconds',coalesce(t.seconds_visible,0)) ORDER BY i.position),'[]'::jsonb) INTO v_review
  FROM private.grove_task_items i
  LEFT JOIN private.grove_practice_marks m ON m.task_id=i.task_id AND m.position=i.position
  LEFT JOIN private.grove_question_time t ON t.task_id=i.task_id AND t.position=i.position
  WHERE i.task_id=p_task;
  SELECT coalesce(jsonb_agg(jsonb_build_object('topic',topic,'total',n,'correct',earned,'seconds',spent)),'[]'::jsonb)
   INTO v_topics FROM (
    SELECT i.topic,count(*) n,count(*) FILTER(WHERE m.mark=1) earned,sum(coalesce(t.seconds_visible,0)) spent
    FROM private.grove_task_items i LEFT JOIN private.grove_practice_marks m ON m.task_id=i.task_id AND m.position=i.position
    LEFT JOIN private.grove_question_time t ON t.task_id=i.task_id AND t.position=i.position
    WHERE i.task_id=p_task GROUP BY i.topic
   ) x;
 END IF;
 RETURN jsonb_build_object('task_id',v.id,'status',v.status,'review_status',v.review_status,'mode',v.mode,'due_date',v.due_date,
  'qualification',v.qualification,'level',v.academic_level,'programme',v.programme,
  'questions',v_questions,'review',coalesce(v_review,'[]'::jsonb),'topics',coalesce(v_topics,'[]'::jsonb),
  'score',CASE WHEN v_released THEN v.score ELSE NULL END,
  'question_count',v.question_count,'ends_at',v.ends_at,'server_time',now(),
  'report_note',CASE WHEN v_released THEN 'Marks and comments have been released by an examiner.'
   ELSE 'Submitted for human marking. No automatic marks are awarded for daily or weekly practice.' END);
END;$$;

CREATE OR REPLACE FUNCTION public.grove_staff_review_task(p_task uuid)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v private.grove_tasks%ROWTYPE;v_items jsonb;v_focus jsonb;
BEGIN
 SELECT * INTO v FROM private.grove_tasks WHERE id=p_task;
 IF v.id IS NULL OR NOT private.is_staff(v.org_id) THEN RAISE EXCEPTION 'Examiner access required'; END IF;
 IF v.status NOT IN('completed','expired') THEN RAISE EXCEPTION 'This assignment is not yet submitted';END IF;
 SELECT coalesce(jsonb_agg(jsonb_build_object(
  'position',i.position,'prompt',i.prompt,'topic',i.topic,'skill',i.skill,
  'choices',i.choices,'selected',a.choice,'correct_option',i.correct_option,
  'seconds_visible',coalesce(tm.seconds_visible,0),'mark',m.mark,'comment',coalesce(m.comment,''),
  'evidence',(SELECT coalesce(jsonb_agg(jsonb_build_object('path',e.storage_path,'name',e.original_name,
   'kind',e.file_kind)),'[]'::jsonb) FROM private.grove_work_evidence e WHERE e.task_id=p_task AND e.position=i.position)
 ) ORDER BY i.position),'[]'::jsonb) INTO v_items
 FROM private.grove_task_items i
 LEFT JOIN private.grove_task_answers a ON a.task_id=i.task_id AND a.position=i.position
 LEFT JOIN private.grove_question_time tm ON tm.task_id=i.task_id AND tm.position=i.position
 LEFT JOIN private.grove_practice_marks m ON m.task_id=i.task_id AND m.position=i.position
 WHERE i.task_id=p_task;
 RETURN jsonb_build_object('items',v_items,'review_status',v.review_status,'score',v.score,
  'student_id',v.student_id,'mode',v.mode,'due_date',v.due_date);
END;$$;
REVOKE ALL ON FUNCTION public.grove_staff_review_task(uuid) FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.grove_staff_review_task(uuid) TO authenticated;

CREATE OR REPLACE FUNCTION public.grove_staff_mark_task(p_task uuid,p_marks jsonb,p_feedback text,p_release boolean)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v private.grove_tasks%ROWTYPE;x jsonb;v_pos integer;v_mark integer;v_comment text;v_count integer;
BEGIN
 SELECT * INTO v FROM private.grove_tasks WHERE id=p_task FOR UPDATE;
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
END;$$;
REVOKE ALL ON FUNCTION public.grove_staff_mark_task(uuid,jsonb,text,boolean) FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.grove_staff_mark_task(uuid,jsonb,text,boolean) TO authenticated;

CREATE OR REPLACE FUNCTION public.grove_staff_save_feedback(p_task uuid,p_feedback text)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
BEGIN
 RAISE EXCEPTION 'Practice feedback must be released through complete question-by-question examiner marking';
END;$$;

CREATE OR REPLACE FUNCTION public.grove_my_feedback(p_task uuid)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v private.grove_tasks%ROWTYPE;v_feedback text;
BEGIN
 SELECT * INTO v FROM private.grove_tasks WHERE id=p_task AND student_id=(SELECT auth.uid());
 IF v.id IS NULL THEN RAISE EXCEPTION 'Assignment not found';END IF;
 IF v.review_status<>'released' THEN RETURN jsonb_build_object('released',false);END IF;
 SELECT feedback INTO v_feedback FROM private.grove_task_feedback WHERE task_id=p_task;
 RETURN jsonb_build_object('released',true,'feedback',coalesce(v_feedback,''));
END;$$;

CREATE OR REPLACE FUNCTION public.grove_admin_schedule(p_org uuid)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE result jsonb;
BEGIN
 IF (SELECT auth.uid()) IS NULL OR NOT private.is_staff(p_org) THEN RAISE EXCEPTION 'Staff permissions required';END IF;
 SELECT coalesce(jsonb_agg(rec ORDER BY due_date DESC),'[]'::jsonb) INTO result FROM (
 SELECT t.due_date, jsonb_build_object('task_id',t.id,'student_id',t.student_id,
 'student_name',coalesce(p.display_name,'Student'),'qualification',t.qualification,'level',t.academic_level,
 'programme',t.programme,'mode',t.mode,'due_date',t.due_date,'status',t.status,
 'review_status',t.review_status,'score',CASE WHEN t.review_status='released' THEN t.score ELSE NULL END,
 'question_count',t.question_count,'teacher_feedback',CASE WHEN t.review_status='released' THEN
  (SELECT f.feedback FROM private.grove_task_feedback f WHERE f.task_id=t.id) END,
 'minutes_visible',(SELECT coalesce(round(sum(coalesce(q.seconds_visible,0))/60.0,1),0) FROM private.grove_question_time q WHERE q.task_id=t.id),
 'question_insights',CASE WHEN t.status IN('completed','expired') THEN
  (SELECT coalesce(jsonb_agg(jsonb_build_object('position',i.position,'topic',i.topic,'skill',i.skill,
    'mark',m.mark,'seconds_visible',coalesce(q.seconds_visible,0),
    'evidence_count',(SELECT count(*) FROM private.grove_work_evidence e WHERE e.task_id=t.id AND e.position=i.position))
    ORDER BY i.position),'[]'::jsonb)
   FROM private.grove_task_items i
   LEFT JOIN private.grove_practice_marks m ON m.task_id=i.task_id AND m.position=i.position
   LEFT JOIN private.grove_question_time q ON q.task_id=i.task_id AND q.position=i.position
   WHERE i.task_id=t.id) ELSE '[]'::jsonb END
 ) rec
 FROM private.grove_tasks t JOIN public.profiles p ON p.id=t.student_id
 WHERE t.org_id=p_org AND t.due_date>=current_date-30 ORDER BY t.due_date DESC LIMIT 250
 ) a;
 RETURN jsonb_build_object('ok',true,'assignments',result);
END;$$;

CREATE OR REPLACE FUNCTION public.grove_my_calendar()
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v_uid uuid:=(SELECT auth.uid());v_route jsonb;v_tier text;v_org uuid;
 v_start date;v_end date;v_day date;v_rows jsonb;v_bstatus text;
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
 SELECT coalesce(jsonb_agg(jsonb_build_object(
 'id',id,'due_date',due_date,'mode',mode,'status',status,'questions',question_count,
 'review_status',review_status,'score',CASE WHEN review_status='released' THEN score END)
 ORDER BY due_date,mode),'[]'::jsonb) INTO v_rows
 FROM private.grove_tasks WHERE student_id=v_uid AND due_date BETWEEN current_date-14 AND current_date+35
 AND (v_end IS NULL OR due_date<=v_end);
 RETURN jsonb_build_object('ready',true,'programme',v_tier,'qualification',v_route->>'qualification',
 'level',v_route->>'level','baseline_status',v_bstatus,'assignments',v_rows);
END;$$;

CREATE OR REPLACE FUNCTION public.grove_admin_set_target(p_student uuid,p_grade text)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v_org uuid;v_q text;v_grade text:=upper(trim(coalesce(p_grade,'')));v_ok boolean;
BEGIN
 SELECT org_id INTO v_org FROM public.memberships WHERE user_id=p_student AND member_role='student' LIMIT 1;
 IF v_org IS NULL OR NOT private.is_staff(v_org) THEN RAISE EXCEPTION 'Administrator permissions required';END IF;
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
END;$$;
REVOKE ALL ON FUNCTION public.grove_admin_set_target(uuid,text) FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.grove_admin_set_target(uuid,text) TO authenticated;

-- A diagnostic score is not converted to a false exam prediction.
CREATE OR REPLACE FUNCTION public.grove_student_insights()
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
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
 'disclaimer','Target grades are set by staff. The baseline and examiner-marked practices are evidence, not an official predicted grade.');
END;$$;
REVOKE ALL ON FUNCTION public.grove_student_insights() FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.grove_student_insights() TO authenticated;

-- Do not lose these evidence files when a learner is archived or removed.
-- Foreign keys cascade when baseline/tasks are purged, but remove metadata explicitly in cleanup.
COMMIT;