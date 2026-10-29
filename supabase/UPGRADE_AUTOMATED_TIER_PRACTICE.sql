-- MathsGrove: administrator-controlled automatic practice / tier calendar / per-question focused time
-- Trial content is sourced from independent pilot stems; do not present as unseen exam-standard content.
BEGIN;
CREATE TABLE IF NOT EXISTS private.grove_practice_bank(
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 qualification text NOT NULL,academic_level text NOT NULL,
 topic text NOT NULL,skill text NOT NULL,difficulty smallint NOT NULL CHECK(difficulty BETWEEN 1 AND 5),
 prompt text NOT NULL,choices jsonb NOT NULL CHECK(jsonb_array_length(choices)=4),
 correct_text text NOT NULL,explanation text NOT NULL,
 provenance text NOT NULL DEFAULT 'pilot',
 active boolean NOT NULL DEFAULT false,
 source_bank_id uuid REFERENCES private.baseline_bank(id),
 UNIQUE(source_bank_id)
);
CREATE INDEX IF NOT EXISTS grove_bank_path_idx ON private.grove_practice_bank(qualification,academic_level,active,difficulty);
CREATE TABLE IF NOT EXISTS private.grove_tasks(
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 student_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
 org_id uuid NOT NULL REFERENCES public.organisations(id) ON DELETE CASCADE,
 qualification text NOT NULL,academic_level text NOT NULL,
 programme text NOT NULL CHECK(programme IN('weekly','daily','exam')),
 mode text NOT NULL CHECK(mode IN('weekly','daily','exam_daily','mock_pending')),
 due_date date NOT NULL,question_count smallint NOT NULL CHECK(question_count BETWEEN 0 AND 20),
 status text NOT NULL DEFAULT 'scheduled' CHECK(status IN('scheduled','active','completed','expired')),
 started_at timestamptz,ends_at timestamptz,submitted_at timestamptz,
 score smallint,created_at timestamptz NOT NULL DEFAULT now(),
 UNIQUE(student_id,due_date,mode)
);
CREATE INDEX IF NOT EXISTS grove_tasks_student_idx ON private.grove_tasks(student_id,due_date);
CREATE TABLE IF NOT EXISTS private.grove_task_items(
 task_id uuid NOT NULL REFERENCES private.grove_tasks(id) ON DELETE CASCADE,
 position smallint NOT NULL CHECK(position BETWEEN 1 AND 20),
 bank_id uuid NOT NULL REFERENCES private.grove_practice_bank(id),
 topic text NOT NULL,skill text NOT NULL,difficulty smallint NOT NULL,
 prompt text NOT NULL,choices jsonb NOT NULL,correct_option text NOT NULL CHECK(correct_option IN('A','B','C','D')),
 explanation text NOT NULL,
 PRIMARY KEY(task_id,position)
);
CREATE TABLE IF NOT EXISTS private.grove_task_answers(
 task_id uuid NOT NULL,position smallint NOT NULL,choice text NOT NULL CHECK(choice IN('A','B','C','D')),
 updated_at timestamptz NOT NULL DEFAULT now(),
 PRIMARY KEY(task_id,position),
 FOREIGN KEY(task_id,position) REFERENCES private.grove_task_items(task_id,position)
);
CREATE TABLE IF NOT EXISTS private.grove_question_time(
 task_id uuid NOT NULL,position smallint NOT NULL,
 seconds_visible integer NOT NULL DEFAULT 0 CHECK(seconds_visible>=0),
 visible_since timestamptz,
 PRIMARY KEY(task_id,position),
 FOREIGN KEY(task_id,position) REFERENCES private.grove_task_items(task_id,position)
);
ALTER TABLE private.grove_practice_bank ENABLE ROW LEVEL SECURITY;
ALTER TABLE private.grove_tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE private.grove_task_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE private.grove_task_answers ENABLE ROW LEVEL SECURITY;
ALTER TABLE private.grove_question_time ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON private.grove_practice_bank,private.grove_tasks,private.grove_task_items,private.grove_task_answers,private.grove_question_time FROM PUBLIC,anon,authenticated;

-- Separate question bank: pilot material is explicitly tagged, never inserted into the baseline bank.
-- Separate routed records can later be replaced with moderator-approved, novel content.
INSERT INTO private.grove_practice_bank
(qualification,academic_level,topic,skill,difficulty,prompt,choices,correct_text,explanation,provenance,active,source_bank_id)
SELECT qualification,academic_level,topic,skill,difficulty,prompt,choices,correct_text,explanation,
 'PUBLIC_PILOT_SAMPLE',true,id FROM private.baseline_bank WHERE active
ON CONFLICT(source_bank_id) DO NOTHING;

CREATE OR REPLACE FUNCTION private.grove_close(p_task uuid)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v private.grove_tasks%ROWTYPE;v_score integer;
BEGIN
 SELECT * INTO v FROM private.grove_tasks WHERE id=p_task FOR UPDATE;
 IF v.id IS NULL OR v.status NOT IN('active') THEN RETURN;END IF;
 UPDATE private.grove_question_time SET
 seconds_visible=seconds_visible+least(30,greatest(0,extract(epoch from (now()-visible_since))::integer)),
 visible_since=NULL WHERE task_id=p_task AND visible_since IS NOT NULL;
 SELECT count(*) FILTER (WHERE a.choice=i.correct_option) INTO v_score FROM private.grove_task_items i
 LEFT JOIN private.grove_task_answers a ON a.task_id=i.task_id AND a.position=i.position WHERE i.task_id=p_task;
 UPDATE private.grove_tasks SET status=CASE WHEN ends_at IS NOT NULL AND now()>=ends_at THEN 'expired' ELSE 'completed' END,
 score=v_score,submitted_at=now() WHERE id=p_task;
END;$$;
REVOKE ALL ON FUNCTION private.grove_close(uuid) FROM PUBLIC,anon,authenticated;

CREATE OR REPLACE FUNCTION private.grove_payload(p_task uuid)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v private.grove_tasks%ROWTYPE;v_questions jsonb;v_detail jsonb;v_topics jsonb;v_timing jsonb;
BEGIN
 SELECT * INTO v FROM private.grove_tasks WHERE id=p_task;
 IF v.id IS NULL OR v.student_id<>(SELECT auth.uid()) THEN RAISE EXCEPTION 'Not authorised for this assignment';END IF;
 IF v.status='active' AND v.ends_at IS NOT NULL AND now()>=v.ends_at THEN
  PERFORM private.grove_close(p_task);
  SELECT * INTO v FROM private.grove_tasks WHERE id=p_task;
 END IF;
 SELECT coalesce(jsonb_agg(jsonb_build_object('position',i.position,'topic',i.topic,
 'skill',i.skill,'difficulty',i.difficulty,'prompt',i.prompt,'choices',i.choices,'selected',a.choice)
 ORDER BY i.position),'[]'::jsonb) INTO v_questions
 FROM private.grove_task_items i LEFT JOIN private.grove_task_answers a ON a.task_id=i.task_id AND a.position=i.position
 WHERE i.task_id=p_task;
 IF v.status IN('completed','expired') THEN
  SELECT coalesce(jsonb_agg(jsonb_build_object('position',i.position,'topic',i.topic,'skill',i.skill,
   'correct',coalesce(a.choice=i.correct_option,false),'correct_option',i.correct_option,'explanation',i.explanation,
   'seconds',coalesce(t.seconds_visible,0)) ORDER BY i.position),'[]'::jsonb) INTO v_detail
  FROM private.grove_task_items i LEFT JOIN private.grove_task_answers a ON a.task_id=i.task_id AND a.position=i.position
  LEFT JOIN private.grove_question_time t ON t.task_id=i.task_id AND t.position=i.position
  WHERE i.task_id=p_task;
  SELECT coalesce(jsonb_agg(jsonb_build_object('topic',topic,'total',n,'correct',earned,'seconds',spent)),'[]'::jsonb)
   INTO v_topics FROM(
    SELECT i.topic,count(*) n,count(*) FILTER(WHERE a.choice=i.correct_option) earned,
     sum(coalesce(t.seconds_visible,0)) spent
    FROM private.grove_task_items i LEFT JOIN private.grove_task_answers a ON a.task_id=i.task_id AND a.position=i.position
     LEFT JOIN private.grove_question_time t ON t.task_id=i.task_id AND t.position=i.position
    WHERE i.task_id=p_task GROUP BY i.topic
   ) x;
 END IF;
 RETURN jsonb_build_object('task_id',v.id,'status',v.status,'mode',v.mode,'due_date',v.due_date,
  'qualification',v.qualification,'level',v.academic_level,'programme',v.programme,
  'questions',v_questions,'review',v_detail,'topics',v_topics,'score',
  CASE WHEN v.status IN('completed','expired') THEN v.score ELSE NULL END,
  'question_count',v.question_count,'ends_at',v.ends_at,'server_time',now(),
  'report_note','Practice evidence is provisional. Timing measures visible question engagement, not active thinking or independent work.');
END;$$;
REVOKE ALL ON FUNCTION private.grove_payload(uuid) FROM PUBLIC,anon,authenticated;

CREATE OR REPLACE FUNCTION public.grove_my_calendar()
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v_uid uuid:=(SELECT auth.uid());v_route jsonb;v_tier text;v_org uuid;
 v_start date;v_day date;v_rows jsonb;v_calendar jsonb;v_bstatus text;
BEGIN
 IF v_uid IS NULL THEN RAISE EXCEPTION 'Sign-in required';END IF;
 v_route:=private.baseline_route(v_uid);
 IF NOT coalesce((v_route->>'ready')::boolean,false) THEN RETURN jsonb_build_object('ready',false,'reason',v_route->>'reason');END IF;
 v_tier:=v_route->>'programme';v_org:=(v_route->>'org_id')::uuid;
 v_bstatus:=(public.baseline_status()->>'status');
 v_start:=greatest(current_date,(SELECT starts_at::date FROM public.student_entitlements WHERE student_id=v_uid AND org_id=v_org));
 FOR v_day IN SELECT d::date FROM generate_series(v_start::timestamp,(v_start+27)::timestamp,'1 day') d LOOP
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
 IF v_tier='exam' THEN
  -- Real timed monthly mocks stay in the existing moderated mock_packs system.
  -- An unmoderated placeholder must never pretend to be an actual examination paper.
  INSERT INTO private.grove_tasks(student_id,org_id,qualification,academic_level,programme,mode,due_date,question_count)
  VALUES(v_uid,v_org,v_route->>'qualification',v_route->>'level',v_tier,'mock_pending',v_start+27,0)
  ON CONFLICT(student_id,due_date,mode) DO NOTHING;
 END IF;
 SELECT coalesce(jsonb_agg(jsonb_build_object(
  'id',id,'due_date',due_date,'mode',mode,'status',status,'questions',question_count,
  'score',CASE WHEN status IN('completed','expired') THEN score ELSE NULL END)
 ORDER BY due_date,mode),'[]'::jsonb) INTO v_rows
 FROM private.grove_tasks WHERE student_id=v_uid AND due_date BETWEEN current_date-14 AND current_date+35;
 RETURN jsonb_build_object('ready',true,'programme',v_tier,'qualification',v_route->>'qualification',
  'level',v_route->>'level','baseline_status',v_bstatus,'assignments',v_rows);
END;$$;
REVOKE ALL ON FUNCTION public.grove_my_calendar() FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.grove_my_calendar() TO authenticated;

CREATE OR REPLACE FUNCTION public.grove_task_start(p_task uuid)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v_uid uuid:=(SELECT auth.uid());v private.grove_tasks%ROWTYPE;v_baseline jsonb;v_bank record;
 v_order integer:=0;v_options jsonb;v_correct text;
BEGIN
 IF v_uid IS NULL THEN RAISE EXCEPTION 'Sign-in required';END IF;
 PERFORM pg_advisory_xact_lock(hashtextextended(v_uid::text,12810));
 SELECT * INTO v FROM private.grove_tasks WHERE id=p_task AND student_id=v_uid FOR UPDATE;
 IF v.id IS NULL THEN RAISE EXCEPTION 'Assignment not found or not authorised';END IF;
 IF v.mode='mock_pending' THEN RAISE EXCEPTION 'Timed exam requires a moderated, teacher-assigned mock';END IF;
 IF v.due_date>current_date THEN RAISE EXCEPTION 'This assignment has not opened yet';END IF;
 IF v.status<>'scheduled' THEN RETURN private.grove_payload(p_task);END IF;
 v_baseline:=public.baseline_status();
 IF coalesce(v_baseline->>'status','') NOT IN('submitted','expired') THEN
   RAISE EXCEPTION 'Complete your 20-question baseline before starting scheduled practice';
 END IF;
 IF (SELECT count(*) FROM private.grove_practice_bank
    WHERE active AND qualification=v.qualification AND academic_level=v.academic_level)<v.question_count
 THEN RAISE EXCEPTION 'Not enough approved practice questions for this pathway';END IF;
 UPDATE private.grove_tasks SET status='active',started_at=now(),
 ends_at=CASE WHEN v.programme='exam' THEN now()+interval '35 minutes' ELSE NULL END WHERE id=p_task;
 FOR v_bank IN SELECT * FROM private.grove_practice_bank
 WHERE active AND qualification=v.qualification AND academic_level=v.academic_level
 ORDER BY abs(difficulty-(CASE WHEN v.mode='weekly' THEN 2 WHEN v.mode='exam_daily' THEN 4 ELSE 3 END)),
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

CREATE OR REPLACE FUNCTION public.grove_task_view(p_task uuid)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
BEGIN
 RETURN private.grove_payload(p_task);
END;$$;
REVOKE ALL ON FUNCTION public.grove_task_view(uuid) FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.grove_task_view(uuid) TO authenticated;

CREATE OR REPLACE FUNCTION public.grove_task_focus(p_task uuid,p_position integer,p_visible boolean)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v private.grove_tasks%ROWTYPE;
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
 RETURN jsonb_build_object('ok',true,'position',p_position);
END;$$;
REVOKE ALL ON FUNCTION public.grove_task_focus(uuid,integer,boolean) FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.grove_task_focus(uuid,integer,boolean) TO authenticated;

CREATE OR REPLACE FUNCTION public.grove_task_answer(p_task uuid,p_position integer,p_choice text)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v private.grove_tasks%ROWTYPE;
BEGIN
 SELECT * INTO v FROM private.grove_tasks WHERE id=p_task AND student_id=(SELECT auth.uid()) FOR UPDATE;
 IF v.id IS NULL THEN RAISE EXCEPTION 'Not authorised';END IF;
 IF v.status<>'active' OR (v.ends_at IS NOT NULL AND now()>=v.ends_at) THEN
  IF v.status='active' THEN PERFORM private.grove_close(p_task);END IF;
  RETURN jsonb_build_object('ok',false,'status','closed');
 END IF;
 IF p_choice NOT IN('A','B','C','D') OR p_position NOT BETWEEN 1 AND v.question_count
 THEN RAISE EXCEPTION 'Invalid response';END IF;
 INSERT INTO private.grove_task_answers(task_id,position,choice)
 VALUES(p_task,p_position,p_choice) ON CONFLICT(task_id,position)
 DO UPDATE SET choice=excluded.choice,updated_at=now();
 RETURN jsonb_build_object('ok',true,'position',p_position,'choice',p_choice);
END;$$;
REVOKE ALL ON FUNCTION public.grove_task_answer(uuid,integer,text) FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.grove_task_answer(uuid,integer,text) TO authenticated;

CREATE OR REPLACE FUNCTION public.grove_task_finish(p_task uuid)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v private.grove_tasks%ROWTYPE;
BEGIN
 SELECT * INTO v FROM private.grove_tasks WHERE id=p_task AND student_id=(SELECT auth.uid()) FOR UPDATE;
 IF v.id IS NULL THEN RAISE EXCEPTION 'Not authorised';END IF;
 IF v.status='active' THEN PERFORM private.grove_close(p_task);END IF;
 RETURN private.grove_payload(p_task);
END;$$;
REVOKE ALL ON FUNCTION public.grove_task_finish(uuid) FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.grove_task_finish(uuid) TO authenticated;

CREATE OR REPLACE FUNCTION public.grove_admin_schedule(p_org uuid)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE result jsonb;
BEGIN
 IF (SELECT auth.uid()) IS NULL OR NOT private.is_staff(p_org) THEN
  RAISE EXCEPTION 'Staff permissions required';END IF;
 SELECT coalesce(jsonb_agg(rec ORDER BY due_date DESC),'[]'::jsonb) INTO result FROM (
  SELECT t.due_date, jsonb_build_object('student_id',t.student_id,
    'student_name',coalesce(p.display_name,'Student'),'qualification',t.qualification,
    'level',t.academic_level,'programme',t.programme,'mode',t.mode,'due_date',t.due_date,
    'status',t.status,'score',CASE WHEN t.status IN('completed','expired') THEN t.score ELSE NULL END,
    'question_count',t.question_count,
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
