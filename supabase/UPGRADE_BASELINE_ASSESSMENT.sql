-- MathsGrove | 20-question private diagnostic baseline (installation: AFTER previous enrolment migrations)
-- Server controls the timer, correct answers, score and academic route.
-- Browser side never receives the marking key until the sitting is closed.
-- IMPORTANT: seed the PRIVATE item bank from a moderated, non-public source before enabling live pupils.
BEGIN;
CREATE TABLE IF NOT EXISTS private.baseline_bank(
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 qualification text NOT NULL,
 academic_level text NOT NULL,
 position smallint NOT NULL CHECK(position BETWEEN 1 AND 20),
 topic text NOT NULL CHECK(length(topic) BETWEEN 2 AND 120),
 skill text NOT NULL CHECK(length(skill) BETWEEN 2 AND 150),
 difficulty smallint NOT NULL CHECK(difficulty BETWEEN 1 AND 5),
 prompt text NOT NULL CHECK(length(prompt) BETWEEN 8 AND 2000),
 choices jsonb NOT NULL CHECK(jsonb_typeof(choices)='array' AND jsonb_array_length(choices)=4),
 correct_text text NOT NULL,
 explanation text NOT NULL CHECK(length(explanation)>=10),
 active boolean NOT NULL DEFAULT true,
 UNIQUE(qualification,academic_level,position)
);
CREATE TABLE IF NOT EXISTS private.baseline_sessions(
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 student_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
 org_id uuid NOT NULL REFERENCES public.organisations(id) ON DELETE CASCADE,
 qualification text NOT NULL,
 academic_level text NOT NULL,
 minutes smallint NOT NULL CHECK(minutes BETWEEN 15 AND 120),
 started_at timestamptz NOT NULL DEFAULT now(),
 ends_at timestamptz NOT NULL,
 closed_at timestamptz,
 status text NOT NULL DEFAULT 'active' CHECK(status IN('active','submitted','expired')),
 score smallint CHECK(score BETWEEN 0 AND 20),
 UNIQUE(student_id,qualification,academic_level)
);
CREATE TABLE IF NOT EXISTS private.baseline_items(
 session_id uuid NOT NULL REFERENCES private.baseline_sessions(id) ON DELETE CASCADE,
 position smallint NOT NULL CHECK(position BETWEEN 1 AND 20),
 bank_id uuid NOT NULL REFERENCES private.baseline_bank(id),
 topic text NOT NULL,
 skill text NOT NULL,
 difficulty smallint NOT NULL,
 prompt text NOT NULL,
 choices jsonb NOT NULL,
 correct_option text NOT NULL CHECK(correct_option IN('A','B','C','D')),
 explanation text NOT NULL,
 PRIMARY KEY(session_id,position)
);
CREATE TABLE IF NOT EXISTS private.baseline_answers(
 session_id uuid NOT NULL REFERENCES private.baseline_sessions(id) ON DELETE CASCADE,
 position smallint NOT NULL CHECK(position BETWEEN 1 AND 20),
 choice text NOT NULL CHECK(choice IN('A','B','C','D')),
 updated_at timestamptz NOT NULL DEFAULT now(),
 PRIMARY KEY(session_id,position),
 FOREIGN KEY(session_id,position) REFERENCES private.baseline_items(session_id,position)
);
CREATE TABLE IF NOT EXISTS private.baseline_events(
 id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
 session_id uuid NOT NULL REFERENCES private.baseline_sessions(id) ON DELETE CASCADE,
 kind text NOT NULL CHECK(kind IN('tab_hidden','window_blur','fullscreen_exit','returned')),
 created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS baseline_events_session_idx ON private.baseline_events(session_id,kind,created_at);
CREATE INDEX IF NOT EXISTS baseline_sessions_student_idx ON private.baseline_sessions(student_id,status);
REVOKE ALL ON private.baseline_bank,private.baseline_sessions,private.baseline_items,private.baseline_answers,private.baseline_events FROM PUBLIC,anon,authenticated;
REVOKE ALL ON ALL SEQUENCES IN SCHEMA private FROM anon,authenticated;

-- A student may update their display name but must not substitute a lower
-- academic tier on their own after the administrator enrolled them.
-- Enrolment / programme editor RPCs remain SECURITY DEFINER and still work.
REVOKE INSERT, UPDATE ON public.student_preferences FROM authenticated;

-- Academic route determined only from server-side enrolled preferences.
CREATE OR REPLACE FUNCTION private.baseline_route(p_student uuid)
RETURNS jsonb LANGUAGE plpgsql STABLE SECURITY DEFINER SET search_path='' AS $$
DECLARE v_q text;v_level text;v_programme text;v_org uuid;v_norm text;v_route text;v_minutes integer;
BEGIN
 SELECT sp.qualification,sp.tier,e.tier,e.org_id INTO v_q,v_level,v_programme,v_org
 FROM public.student_preferences sp
 JOIN public.student_entitlements e ON e.student_id=sp.student_id
 JOIN public.memberships m ON m.user_id=sp.student_id AND m.org_id=e.org_id AND m.member_role='student'
 WHERE sp.student_id=p_student AND e.starts_at<=now() AND (e.ends_at IS NULL OR e.ends_at>now());
 IF v_q IS NULL THEN RETURN jsonb_build_object('ready',false,'reason','An active student programme and academic route are required.');END IF;
 v_norm:=lower(trim(coalesce(v_level,'')));
 v_route:=CASE
 WHEN v_q='GCSE' AND v_norm LIKE '%foundation%' THEN 'foundation'
 WHEN v_q='GCSE' AND v_norm LIKE '%higher%' THEN 'higher'
 WHEN v_q='IGCSE' AND v_norm LIKE '%core%' THEN 'core'
 WHEN v_q='IGCSE' AND v_norm LIKE '%extend%' THEN 'extended'
 WHEN v_q='A_LEVEL' AND (v_norm LIKE '%as%' OR v_norm LIKE '%year 12%') THEN 'as'
 WHEN v_q='A_LEVEL' AND (v_norm LIKE '%a2%' OR v_norm LIKE '%year 13%' OR v_norm LIKE '%full%') THEN 'a2'
 WHEN v_q='FURTHER_MATHS' THEN 'further'
 WHEN v_q IN ('IB_AA','IB_AI') AND (v_norm LIKE '%sl%' OR v_norm LIKE '%standard%') THEN 'sl'
 WHEN v_q IN ('IB_AA','IB_AI') AND (v_norm LIKE '%hl%' OR v_norm LIKE '%higher%') THEN 'hl'
 WHEN v_q='TMUA' THEN 'tmua'
 ELSE NULL END;
 IF v_route IS NULL THEN RETURN jsonb_build_object('ready',false,'reason','The administrator must assign the correct academic level (Foundation/Higher, Core/Extended, AS/A2 or SL/HL).');END IF;
 v_minutes:=CASE
  WHEN v_route IN('foundation','core') THEN 35
  WHEN v_route IN('higher','extended') THEN 45
  WHEN v_q='TMUA' THEN 45
  WHEN v_q='FURTHER_MATHS' THEN 60
  ELSE 55 END;
 RETURN jsonb_build_object('ready',true,'qualification',v_q,'level',v_route,'programme',v_programme,'org_id',v_org,'minutes',v_minutes,'calculator_allowed',(v_q<>'TMUA'));
END;$$;

CREATE OR REPLACE FUNCTION private.baseline_close(p_id uuid)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v_s private.baseline_sessions%ROWTYPE;v_score integer;
BEGIN
 SELECT * INTO v_s FROM private.baseline_sessions WHERE id=p_id FOR UPDATE;
 IF v_s.id IS NULL OR v_s.status<>'active' THEN RETURN;END IF;
 SELECT count(*) FILTER(WHERE a.choice=i.correct_option) INTO v_score
 FROM private.baseline_items i LEFT JOIN private.baseline_answers a ON a.session_id=i.session_id AND a.position=i.position
 WHERE i.session_id=p_id;
 UPDATE private.baseline_sessions
 SET status=CASE WHEN now()>=ends_at THEN 'expired' ELSE 'submitted' END,score=v_score,closed_at=now()
 WHERE id=p_id;
END;$$;

-- One common role-safe result builder. No correct options or explanations before completion.
CREATE OR REPLACE FUNCTION private.baseline_payload(p_id uuid)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v_s private.baseline_sessions%ROWTYPE;v_questions jsonb;v_topics jsonb;v_answers jsonb;
 v_flags jsonb;v_insight jsonb;v_band text;v_explained jsonb;
BEGIN
 SELECT * INTO v_s FROM private.baseline_sessions WHERE id=p_id;
 IF v_s.id IS NULL OR v_s.student_id<>(select auth.uid()) THEN
   RAISE EXCEPTION 'Not authorised for this baseline';
 END IF;
 IF v_s.status='active' AND now()>=v_s.ends_at THEN
  PERFORM private.baseline_close(p_id);
  SELECT * INTO v_s FROM private.baseline_sessions WHERE id=p_id;
 END IF;
 SELECT coalesce(jsonb_agg(jsonb_build_object(
   'position',i.position,'prompt',i.prompt,'choices',i.choices,'topic',i.topic,
   'difficulty',i.difficulty,'selected',a.choice
 ) ORDER BY i.position),'[]'::jsonb)
 INTO v_questions
 FROM private.baseline_items i LEFT JOIN private.baseline_answers a
 ON a.session_id=i.session_id AND a.position=i.position WHERE i.session_id=p_id;
 SELECT jsonb_build_object(
  'tab_hidden',count(*) FILTER(WHERE kind='tab_hidden'),
  'window_blur',count(*) FILTER(WHERE kind='window_blur'),
  'fullscreen_exit',count(*) FILTER(WHERE kind='fullscreen_exit')
 ) INTO v_flags FROM private.baseline_events WHERE session_id=p_id;
 IF v_s.status<>'active' THEN
  v_band:=CASE WHEN v_s.score<=6 THEN 'Foundations to strengthen' WHEN v_s.score<=12 THEN 'Developing understanding'
    WHEN v_s.score<=16 THEN 'Secure starting point' ELSE 'Strong initial performance' END;
  SELECT coalesce(jsonb_agg(t.record ORDER BY t.available_marks DESC,t.topic),'[]'::jsonb) INTO v_topics
  FROM(
   SELECT i.topic,count(*) available_marks,count(*) FILTER(WHERE a.choice=i.correct_option) earned,
    jsonb_build_object('topic',i.topic,'total',count(*),'correct',count(*) FILTER(WHERE a.choice=i.correct_option)) record
   FROM private.baseline_items i LEFT JOIN private.baseline_answers a
   ON a.session_id=i.session_id AND a.position=i.position WHERE i.session_id=p_id
   GROUP BY i.topic
  )t;
  SELECT coalesce(jsonb_agg(jsonb_build_object(
    'position',i.position,'topic',i.topic,'skill',i.skill,'selected',a.choice,
    'correct_choice',i.correct_option,'explanation',i.explanation,
    'correct',coalesce(a.choice=i.correct_option,false)
  ) ORDER BY i.position),'[]'::jsonb) INTO v_explained
  FROM private.baseline_items i LEFT JOIN private.baseline_answers a
  ON a.session_id=i.session_id AND a.position=i.position WHERE i.session_id=p_id;
 END IF;
 RETURN jsonb_build_object(
  'ready',true,'session_id',v_s.id,'qualification',v_s.qualification,'level',v_s.academic_level,
  'minutes',v_s.minutes,'calculator_allowed',(v_s.qualification<>'TMUA'),'server_time',now(),'started_at',v_s.started_at,'ends_at',v_s.ends_at,
  'status',v_s.status,'score',CASE WHEN v_s.status='active' THEN NULL ELSE v_s.score END,
  'band',v_band,'questions',v_questions,'topics',v_topics,
  'review',v_explained,'integrity',v_flags,
  'submitted_count',(SELECT count(*) FROM private.baseline_answers WHERE session_id=p_id),
  'report_note','This 20-item multiple-choice diagnostic establishes a starting point. It is not an official grade, nor proof of independent work. Review mathematical methods with a teacher where appropriate.'
 );
END;$$;

CREATE OR REPLACE FUNCTION public.baseline_status()
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v_user uuid:=(select auth.uid());v_route jsonb;v_session uuid;v_count integer;
BEGIN
 IF v_user IS NULL THEN RAISE EXCEPTION 'Sign in required';END IF;
 v_route:=private.baseline_route(v_user);
 IF NOT coalesce((v_route->>'ready')::boolean,false) THEN RETURN v_route;END IF;
 SELECT count(*) INTO v_count FROM private.baseline_bank
 WHERE qualification=v_route->>'qualification' AND academic_level=v_route->>'level' AND active;
 SELECT id INTO v_session FROM private.baseline_sessions
 WHERE student_id=v_user AND qualification=v_route->>'qualification'
 AND academic_level=v_route->>'level' ORDER BY started_at DESC LIMIT 1;
 IF v_session IS NOT NULL THEN RETURN private.baseline_payload(v_session);END IF;
 RETURN v_route||jsonb_build_object('status','not_started','bank_ready',v_count=20,'item_count',v_count);
END;$$;

CREATE OR REPLACE FUNCTION public.baseline_start()
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v_user uuid:=(select auth.uid());v_route jsonb;v_session uuid;v_count integer;v_item record;
 v_options jsonb;v_correct text;
BEGIN
 IF v_user IS NULL THEN RAISE EXCEPTION 'Sign in required';END IF;
 PERFORM pg_advisory_xact_lock(hashtextextended(v_user::text,91017));
 v_route:=private.baseline_route(v_user);
 IF NOT coalesce((v_route->>'ready')::boolean,false) THEN RAISE EXCEPTION '%',v_route->>'reason';END IF;
 SELECT id INTO v_session FROM private.baseline_sessions
 WHERE student_id=v_user AND qualification=v_route->>'qualification'
 AND academic_level=v_route->>'level' ORDER BY started_at DESC LIMIT 1;
 IF v_session IS NOT NULL THEN RETURN private.baseline_payload(v_session);END IF;
 SELECT count(*) INTO v_count FROM private.baseline_bank WHERE active
 AND qualification=v_route->>'qualification' AND academic_level=v_route->>'level';
 IF v_count<>20 THEN RAISE EXCEPTION 'Baseline is not ready for this route (20 moderated questions required). Contact your administrator.';END IF;
 INSERT INTO private.baseline_sessions(student_id,org_id,qualification,academic_level,minutes,ends_at)
 VALUES(v_user,(v_route->>'org_id')::uuid,v_route->>'qualification',v_route->>'level',
 (v_route->>'minutes')::integer,now()+make_interval(mins=>(v_route->>'minutes')::integer))
 RETURNING id INTO v_session;
 FOR v_item IN SELECT * FROM private.baseline_bank
 WHERE active AND qualification=v_route->>'qualification' AND academic_level=v_route->>'level'
 ORDER BY position LOOP
  SELECT jsonb_agg(jsonb_build_object('id',chr((64+x.n)::integer),'text',x.choice) ORDER BY x.n),
   max(CASE WHEN x.choice=v_item.correct_text THEN chr((64+x.n)::integer) ELSE NULL END)
   INTO v_options,v_correct FROM(
     SELECT c.choice,row_number() OVER(ORDER BY random()) n
     FROM jsonb_array_elements_text(v_item.choices) AS c(choice)
   )x;
  IF v_correct IS NULL OR jsonb_array_length(v_options)<>4 OR
    (SELECT count(DISTINCT option_text) FROM jsonb_array_elements_text(v_item.choices) AS c(option_text))<>4
  THEN RAISE EXCEPTION 'Unmoderated or invalid baseline item';END IF;
  INSERT INTO private.baseline_items(session_id,position,bank_id,topic,skill,difficulty,prompt,choices,correct_option,explanation)
  VALUES(v_session,v_item.position,v_item.id,v_item.topic,v_item.skill,v_item.difficulty,
   v_item.prompt,v_options,v_correct,v_item.explanation);
 END LOOP;
 RETURN private.baseline_payload(v_session);
END;$$;

CREATE OR REPLACE FUNCTION public.baseline_answer(p_session uuid,p_position integer,p_choice text)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v_s private.baseline_sessions%ROWTYPE;v_correct boolean;
BEGIN
 IF (select auth.uid()) IS NULL THEN RAISE EXCEPTION 'Sign in required';END IF;
 SELECT * INTO v_s FROM private.baseline_sessions WHERE id=p_session FOR UPDATE;
 IF v_s.id IS NULL OR v_s.student_id<>(select auth.uid()) THEN RAISE EXCEPTION 'Not authorised';END IF;
 IF v_s.status<>'active' OR now()>=v_s.ends_at THEN
   IF v_s.status='active' THEN PERFORM private.baseline_close(p_session);END IF;
   RETURN private.baseline_payload(p_session);
 END IF;
 IF p_position NOT BETWEEN 1 AND 20 OR p_choice NOT IN('A','B','C','D') THEN RAISE EXCEPTION 'Invalid answer';END IF;
 IF NOT EXISTS(SELECT 1 FROM private.baseline_items WHERE session_id=p_session AND position=p_position)
 THEN RAISE EXCEPTION 'Question does not belong to this baseline';END IF;
 INSERT INTO private.baseline_answers(session_id,position,choice)
 VALUES(p_session,p_position,p_choice)
 ON CONFLICT(session_id,position) DO UPDATE SET choice=excluded.choice,updated_at=now();
 RETURN jsonb_build_object('ok',true,'position',p_position,'choice',p_choice,'ends_at',v_s.ends_at);
END;$$;

CREATE OR REPLACE FUNCTION public.baseline_event(p_session uuid,p_kind text)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v_user uuid:=(select auth.uid());v_s private.baseline_sessions%ROWTYPE;v_latest timestamptz;
BEGIN
 IF p_kind NOT IN('tab_hidden','window_blur','fullscreen_exit','returned') THEN RAISE EXCEPTION 'Invalid event';END IF;
 SELECT * INTO v_s FROM private.baseline_sessions WHERE id=p_session AND student_id=v_user;
 IF v_s.id IS NULL THEN RAISE EXCEPTION 'Not authorised';END IF;
 IF v_s.status<>'active' OR now()>=v_s.ends_at THEN RETURN jsonb_build_object('ok',false);END IF;
 SELECT max(created_at) INTO v_latest FROM private.baseline_events
 WHERE session_id=p_session AND kind=p_kind;
 IF v_latest IS NULL OR now()-v_latest>interval '8 seconds' THEN
  INSERT INTO private.baseline_events(session_id,kind) VALUES(p_session,p_kind);
 END IF;
 RETURN jsonb_build_object('ok',true);
END;$$;

CREATE OR REPLACE FUNCTION public.baseline_finish(p_session uuid)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v_s private.baseline_sessions%ROWTYPE;
BEGIN
 SELECT * INTO v_s FROM private.baseline_sessions WHERE id=p_session AND student_id=(select auth.uid()) FOR UPDATE;
 IF v_s.id IS NULL THEN RAISE EXCEPTION 'Not authorised';END IF;
 PERFORM private.baseline_close(p_session);
 RETURN private.baseline_payload(p_session);
END;$$;


-- Staff only: released diagnostic summary and topic evidence, without pre-release answer keys.
CREATE OR REPLACE FUNCTION public.baseline_staff_report(p_student uuid)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $
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
   RETURN jsonb_build_object('ready',true,'status','active','qualification',v_s.qualification,
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
 RETURN jsonb_build_object('ready',true,'status',v_s.status,'qualification',v_s.qualification,
  'level',v_s.academic_level,'score',v_s.score,'total',20,
  'band',v_band,'topics',v_topics,'integrity',v_flags,'submitted_at',v_s.closed_at,
  'disclaimer','This short multiple-choice diagnostic is not a predicted grade or evidence of independently verified work.');
END;$;
REVOKE ALL ON FUNCTION public.baseline_staff_report(uuid) FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.baseline_staff_report(uuid) TO authenticated;

-- Authorised partner staff can see a baseline overview for learners in their own organisation.
-- This summary never reveals unsubmitted answers, full answer keys or raw scratch work.
CREATE OR REPLACE FUNCTION public.baseline_admin_overview(p_org uuid)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $
DECLARE v_result jsonb;
BEGIN
 IF (select auth.uid()) IS NULL OR NOT private.is_staff(p_org)
 THEN RAISE EXCEPTION 'Staff access required';END IF;
 SELECT coalesce(jsonb_agg(t.record ORDER BY t.started_at DESC),'[]'::jsonb) INTO v_result
 FROM(
  SELECT s.started_at,
   jsonb_build_object('student_id',s.student_id,'student_name',coalesce(p.display_name,'Student'),
    'qualification',s.qualification,'level',s.academic_level,'status',s.status,
    'score',CASE WHEN s.status='active' AND now()<s.ends_at THEN NULL ELSE s.score END,
    'started_at',s.started_at,'ends_at',s.ends_at,'submitted_count',
    (SELECT count(*) FROM private.baseline_answers a WHERE a.session_id=s.id),
    'integrity',jsonb_build_object(
      'tab_hidden',(SELECT count(*) FROM private.baseline_events e WHERE e.session_id=s.id AND e.kind='tab_hidden'),
      'fullscreen_exit',(SELECT count(*) FROM private.baseline_events e WHERE e.session_id=s.id AND e.kind='fullscreen_exit')
    )
   )record
  FROM private.baseline_sessions s JOIN public.profiles p ON p.id=s.student_id
  WHERE s.org_id=p_org ORDER BY s.started_at DESC LIMIT 250
 )t;
 RETURN jsonb_build_object('ok',true,'sessions',v_result);
END;$;
REVOKE ALL ON FUNCTION public.baseline_admin_overview(uuid) FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.baseline_admin_overview(uuid) TO authenticated;

REVOKE ALL ON FUNCTION public.baseline_status(),public.baseline_start(),public.baseline_answer(uuid,integer,text),
 public.baseline_event(uuid,text),public.baseline_finish(uuid) FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.baseline_status(),public.baseline_start(),public.baseline_answer(uuid,integer,text),
 public.baseline_event(uuid,text),public.baseline_finish(uuid) TO authenticated;
REVOKE ALL ON FUNCTION private.baseline_route(uuid),private.baseline_close(uuid),private.baseline_payload(uuid) FROM PUBLIC,anon,authenticated;
COMMIT;
