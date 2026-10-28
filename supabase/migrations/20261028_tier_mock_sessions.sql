-- MathsGrove Tier Assessment v2
-- Requires the deployed administrator upgrade AND content-studio migration.
-- Adds server-controlled timed Grove Exam mock sittings. NO mock packs are
-- published by this migration; a human examiner must author, approve, assemble
-- and assign an original board-mapped paper first.
BEGIN;
ALTER TABLE public.attempts ADD COLUMN IF NOT EXISTS mock_pack_id uuid;
ALTER TABLE public.attempts ADD COLUMN IF NOT EXISTS deadline_at timestamptz;
ALTER TABLE public.attempts ADD COLUMN IF NOT EXISTS duration_seconds integer;
ALTER TABLE public.attempts ADD COLUMN IF NOT EXISTS mock_expired boolean NOT NULL DEFAULT false;
CREATE TABLE IF NOT EXISTS public.mock_board_templates(
 board_key text NOT NULL, exam_tier text NOT NULL, paper_code text NOT NULL,
 qualification text NOT NULL, duration_seconds integer NOT NULL,
 target_marks integer NOT NULL, calculator_allowed boolean NOT NULL,
 source_url text NOT NULL, PRIMARY KEY(board_key,exam_tier,paper_code)
);
ALTER TABLE public.mock_board_templates ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON public.mock_board_templates FROM anon,authenticated;
GRANT SELECT ON public.mock_board_templates TO authenticated;
CREATE POLICY mock_board_templates_read ON public.mock_board_templates
 FOR SELECT TO authenticated USING(true);
INSERT INTO public.mock_board_templates(board_key,exam_tier,paper_code,qualification,
 duration_seconds,target_marks,calculator_allowed,source_url)
 VALUES
('AQA_8300','Foundation','P1','GCSE',5400,80,false,'https://www.aqa.org.uk/subjects/mathematics/gcse/mathematics-8300/specification/specification-at-a-glance'),
('AQA_8300','Higher','P1','GCSE',5400,80,false,'https://www.aqa.org.uk/subjects/mathematics/gcse/mathematics-8300/specification/specification-at-a-glance'),
('AQA_8300','Foundation','P2','GCSE',5400,80,true,'https://www.aqa.org.uk/subjects/mathematics/gcse/mathematics-8300/specification/specification-at-a-glance'),
('AQA_8300','Higher','P2','GCSE',5400,80,true,'https://www.aqa.org.uk/subjects/mathematics/gcse/mathematics-8300/specification/specification-at-a-glance'),
('AQA_8300','Foundation','P3','GCSE',5400,80,true,'https://www.aqa.org.uk/subjects/mathematics/gcse/mathematics-8300/specification/specification-at-a-glance'),
('AQA_8300','Higher','P3','GCSE',5400,80,true,'https://www.aqa.org.uk/subjects/mathematics/gcse/mathematics-8300/specification/specification-at-a-glance'),
('EDEXCEL_1MA1','Foundation','P1','GCSE',5400,80,false,'https://qualifications.pearson.com/en/qualifications/edexcel-gcses/mathematics-2015.html'),
('EDEXCEL_1MA1','Higher','P1','GCSE',5400,80,false,'https://qualifications.pearson.com/en/qualifications/edexcel-gcses/mathematics-2015.html'),
('EDEXCEL_1MA1','Foundation','P2','GCSE',5400,80,true,'https://qualifications.pearson.com/en/qualifications/edexcel-gcses/mathematics-2015.html'),
('EDEXCEL_1MA1','Higher','P2','GCSE',5400,80,true,'https://qualifications.pearson.com/en/qualifications/edexcel-gcses/mathematics-2015.html'),
('EDEXCEL_1MA1','Foundation','P3','GCSE',5400,80,true,'https://qualifications.pearson.com/en/qualifications/edexcel-gcses/mathematics-2015.html'),
('EDEXCEL_1MA1','Higher','P3','GCSE',5400,80,true,'https://qualifications.pearson.com/en/qualifications/edexcel-gcses/mathematics-2015.html'),
('OCR_J560','Foundation','F1','GCSE',5400,100,true,'https://www.ocr.org.uk/qualifications/gcse/mathematics-j560-from-2015/specification-at-a-glance/'),
('OCR_J560','Foundation','F2','GCSE',5400,100,false,'https://www.ocr.org.uk/qualifications/gcse/mathematics-j560-from-2015/specification-at-a-glance/'),
('OCR_J560','Foundation','F3','GCSE',5400,100,true,'https://www.ocr.org.uk/qualifications/gcse/mathematics-j560-from-2015/specification-at-a-glance/'),
('OCR_J560','Higher','H4','GCSE',5400,100,true,'https://www.ocr.org.uk/qualifications/gcse/mathematics-j560-from-2015/specification-at-a-glance/'),
('OCR_J560','Higher','H5','GCSE',5400,100,false,'https://www.ocr.org.uk/qualifications/gcse/mathematics-j560-from-2015/specification-at-a-glance/'),
('OCR_J560','Higher','H6','GCSE',5400,100,true,'https://www.ocr.org.uk/qualifications/gcse/mathematics-j560-from-2015/specification-at-a-glance/'),
('EDUQAS_C300','Foundation','C1','GCSE',8100,120,false,'https://www.eduqas.co.uk/articles/gcse-maths-with-eduqas-a-guide-for-parents-teachers-and-learners/'),
('EDUQAS_C300','Higher','C1','GCSE',8100,120,false,'https://www.eduqas.co.uk/articles/gcse-maths-with-eduqas-a-guide-for-parents-teachers-and-learners/'),
('EDUQAS_C300','Foundation','C2','GCSE',8100,120,true,'https://www.eduqas.co.uk/articles/gcse-maths-with-eduqas-a-guide-for-parents-teachers-and-learners/'),
('EDUQAS_C300','Higher','C2','GCSE',8100,120,true,'https://www.eduqas.co.uk/articles/gcse-maths-with-eduqas-a-guide-for-parents-teachers-and-learners/'),
('CAMBRIDGE_0580','Core','P1','IGCSE',5400,80,false,'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-mathematics-0580/'),
('CAMBRIDGE_0580','Core','P3','IGCSE',5400,80,true,'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-mathematics-0580/'),
('CAMBRIDGE_0580','Extended','P2','IGCSE',7200,100,false,'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-mathematics-0580/'),
('CAMBRIDGE_0580','Extended','P4','IGCSE',7200,100,true,'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-mathematics-0580/'),
('CAMBRIDGE_0980','Core','P1','IGCSE',5400,80,false,'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-mathematics-9-1-0980/'),
('CAMBRIDGE_0980','Core','P3','IGCSE',5400,80,true,'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-mathematics-9-1-0980/'),
('CAMBRIDGE_0980','Extended','P2','IGCSE',7200,100,false,'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-mathematics-9-1-0980/'),
('CAMBRIDGE_0980','Extended','P4','IGCSE',7200,100,true,'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-mathematics-9-1-0980/'),
('EDEXCEL_4MA1','Foundation','P1F','IGCSE',7200,100,true,'https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses/mathematics-a-2016.html'),
('EDEXCEL_4MA1','Foundation','P2F','IGCSE',7200,100,true,'https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses/mathematics-a-2016.html'),
('EDEXCEL_4MA1','Higher','P1H','IGCSE',7200,100,true,'https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses/mathematics-a-2016.html'),
('EDEXCEL_4MA1','Higher','P2H','IGCSE',7200,100,true,'https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses/mathematics-a-2016.html'),
('EDEXCEL_4XMA1','Foundation','U1F','IGCSE',7200,100,true,'https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses/mathematics-a-2024-modular.html'),
('EDEXCEL_4XMA1','Foundation','U2F','IGCSE',7200,100,true,'https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses/mathematics-a-2024-modular.html'),
('EDEXCEL_4XMA1','Higher','U1H','IGCSE',7200,100,true,'https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses/mathematics-a-2024-modular.html'),
('EDEXCEL_4XMA1','Higher','U2H','IGCSE',7200,100,true,'https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses/mathematics-a-2024-modular.html'),
('OXFORDAQA_9260','Core','1C','IGCSE',5400,80,true,'https://www.oxfordaqa.com/qualification/international-gcse-mathematics-9260/'),
('OXFORDAQA_9260','Core','2C','IGCSE',5400,80,true,'https://www.oxfordaqa.com/qualification/international-gcse-mathematics-9260/'),
('OXFORDAQA_9260','Extension','1E','IGCSE',7200,100,true,'https://www.oxfordaqa.com/qualification/international-gcse-mathematics-9260/'),
('OXFORDAQA_9260','Extension','2E','IGCSE',7200,100,true,'https://www.oxfordaqa.com/qualification/international-gcse-mathematics-9260/')
ON CONFLICT(board_key,exam_tier,paper_code) DO NOTHING;

CREATE TABLE IF NOT EXISTS public.mock_packs (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 org_id uuid NOT NULL REFERENCES public.organisations(id),
 qualification text NOT NULL CHECK(qualification IN ('GCSE','IGCSE','A_LEVEL','FURTHER_MATHS','IB_AA','IB_AI','TMUA')),
 board_key text NOT NULL CHECK(length(board_key) BETWEEN 3 AND 60),
 exam_tier text NOT NULL CHECK(length(exam_tier) BETWEEN 2 AND 30),
 title text NOT NULL CHECK(length(title) BETWEEN 5 AND 160),
 paper_code text NOT NULL CHECK(length(paper_code) BETWEEN 1 AND 30),
 calculator_allowed boolean NOT NULL DEFAULT true,
 duration_seconds integer NOT NULL CHECK(duration_seconds BETWEEN 900 AND 10800),
 target_marks integer NOT NULL CHECK(target_marks BETWEEN 20 AND 150),
 status text NOT NULL DEFAULT 'draft' CHECK(status IN ('draft','published','retired')),
 created_by uuid NOT NULL REFERENCES auth.users(id),
 published_at timestamptz,
 created_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE IF NOT EXISTS public.mock_pack_questions (
 pack_id uuid NOT NULL REFERENCES public.mock_packs(id) ON DELETE CASCADE,
 question_id uuid NOT NULL REFERENCES public.question_bank(id),
 position integer NOT NULL CHECK(position BETWEEN 1 AND 20),
 suggested_seconds integer NOT NULL DEFAULT 180 CHECK(suggested_seconds BETWEEN 30 AND 1800),
 PRIMARY KEY(pack_id,position), UNIQUE(pack_id,question_id)
);
CREATE TABLE IF NOT EXISTS public.mock_assignments (
 pack_id uuid NOT NULL REFERENCES public.mock_packs(id) ON DELETE CASCADE,
 student_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
 org_id uuid NOT NULL REFERENCES public.organisations(id),
 assigned_by uuid NOT NULL REFERENCES auth.users(id),
 assigned_at timestamptz NOT NULL DEFAULT now(),
 PRIMARY KEY(pack_id,student_id)
);
ALTER TABLE public.attempts
 ADD CONSTRAINT mock_attempt_pack_fkey
 FOREIGN KEY(mock_pack_id) REFERENCES public.mock_packs(id);
ALTER TABLE public.mock_packs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mock_pack_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mock_assignments ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON public.mock_packs,public.mock_pack_questions,public.mock_assignments FROM anon,authenticated;
GRANT SELECT ON public.mock_packs,public.mock_pack_questions,public.mock_assignments TO authenticated;
CREATE POLICY mock_pack_read ON public.mock_packs FOR SELECT TO authenticated
 USING(private.is_staff(org_id) OR (status='published' AND EXISTS(
 SELECT 1 FROM public.mock_assignments ma WHERE ma.pack_id=id
 AND ma.student_id=(SELECT auth.uid()))));
CREATE POLICY mock_pack_q_read ON public.mock_pack_questions FOR SELECT TO authenticated
 USING(EXISTS(SELECT 1 FROM public.mock_packs p WHERE p.id=pack_id
 AND (private.is_staff(p.org_id) OR
 (p.status='published' AND EXISTS(
 SELECT 1 FROM public.attempts a WHERE a.mock_pack_id=p.id AND a.student_id=(SELECT auth.uid()))))));
CREATE POLICY mock_assignment_read ON public.mock_assignments FOR SELECT TO authenticated
 USING(student_id=(SELECT auth.uid()) OR private.is_staff(org_id));

-- Stop previewing unseen mock questions through normal question_bank SELECT.
-- The student gains question access only once an actual session has started.
-- RLS on editorial metadata protects private notes. This helper deliberately
-- checks visibility as the database owner to avoid an RLS join hiding all
-- student question text. It never returns question solutions or metadata.
CREATE OR REPLACE FUNCTION private.can_read_maths_question(p_question uuid)
RETURNS boolean LANGUAGE plpgsql STABLE SECURITY DEFINER SET search_path='' AS $$
DECLARE v_actor uuid:=(SELECT auth.uid());v_active boolean;v_e public.question_editorial%rowtype;
BEGIN
 IF v_actor IS NULL OR NOT EXISTS(SELECT 1 FROM public.memberships m WHERE m.user_id=v_actor)
 THEN RETURN false;END IF;
 SELECT active INTO v_active FROM public.question_bank WHERE id=p_question;
 IF NOT found THEN RETURN false;END IF;
 SELECT * INTO v_e FROM public.question_editorial WHERE question_id=p_question;
 IF v_e.question_id IS NULL OR v_e.owner_org IS NULL THEN RETURN v_active;END IF;
 IF private.is_staff(v_e.owner_org) THEN RETURN true;END IF;
 IF NOT EXISTS(SELECT 1 FROM public.memberships m
  WHERE m.user_id=v_actor AND m.org_id=v_e.owner_org AND m.member_role='student')
 THEN RETURN false;END IF;
 IF NOT v_active OR v_e.review_status<>'approved' THEN RETURN false;END IF;
 IF EXISTS(SELECT 1 FROM public.mock_pack_questions mpq
   JOIN public.mock_packs mp ON mp.id=mpq.pack_id
   WHERE mpq.question_id=p_question AND mp.status='published')
 THEN
  RETURN EXISTS(SELECT 1 FROM public.attempts a
     JOIN public.paper_questions pq ON pq.attempt_id=a.id
     WHERE a.student_id=v_actor AND pq.question_id=p_question AND a.mock_pack_id IS NOT NULL);
 END IF;
 RETURN true;
END;$$;
REVOKE ALL ON FUNCTION private.can_read_maths_question(uuid) FROM public,anon;
GRANT EXECUTE ON FUNCTION private.can_read_maths_question(uuid) TO authenticated;
DROP POLICY IF EXISTS questions_select ON public.question_bank;
CREATE POLICY questions_select ON public.question_bank FOR SELECT TO authenticated
USING(private.can_read_maths_question(id));

-- A student must not bypass the server-enforced weekly/daily/mock quota by
-- inserting arbitrary attempts directly. Both create RPCs are SECURITY DEFINER.
REVOKE INSERT ON public.attempts FROM authenticated;

-- Return genuine remaining time as a database-generated response.
CREATE OR REPLACE FUNCTION public.mock_session_clock(p_attempt uuid)
RETURNS TABLE(deadline_at timestamptz,seconds_remaining integer,is_expired boolean)
LANGUAGE sql STABLE SECURITY DEFINER SET search_path='' AS $$
 SELECT a.deadline_at,
 greatest(0,ceil(extract(epoch FROM (a.deadline_at-now())))::integer),
 (a.deadline_at<=now() OR a.status<>'draft')
 FROM public.attempts a
 WHERE a.id=p_attempt AND a.mock_pack_id IS NOT NULL
 AND (a.student_id=(SELECT auth.uid()) OR private.is_staff(a.org_id));
$$;
REVOKE ALL ON FUNCTION public.mock_session_clock(uuid) FROM public,anon;
GRANT EXECUTE ON FUNCTION public.mock_session_clock(uuid) TO authenticated;

-- The existing practice pathway stays available for Weekly/Daily, but it
-- may no longer start a pretend eight-question "mock" with unlimited time.
create or replace function public.create_student_paper(
 p_mode text,p_topic text,p_difficulty text,p_requested_count integer,p_questions uuid[]
) returns uuid language plpgsql security definer set search_path='' as $$
declare
 v_user uuid := (select auth.uid());
 v_tier text;
 v_org uuid;
 v_qual text;
 v_attempt uuid;
 v_question uuid;
 v_i integer;
begin
 if v_user is null then raise exception 'Authentication required'; end if;
 if p_mode not in ('daily','weekly','topic') or
    p_difficulty not in ('mixed','foundation','standard','challenge') or
    coalesce(length(p_topic),0)>140 or
    p_requested_count not between 1 and 20 then
   raise exception 'Invalid student paper options';
 end if;
 if p_questions is null or array_length(p_questions,1) is null or
    array_length(p_questions,1) not between 1 and 20 or
    array_length(p_questions,1)>p_requested_count or
    (select count(distinct q) from unnest(p_questions) as q)<>array_length(p_questions,1) then
   raise exception 'Select valid, distinct questions';
 end if;
 select m.org_id into v_org from public.memberships m
 where m.user_id=v_user and m.member_role='student' limit 1;
 if v_org is null then raise exception 'Verified student membership required'; end if;
 -- Access is supplied privately by the tutor; browser settings never grant a tier.
 select e.tier into v_tier from public.student_entitlements e
 where e.student_id=v_user and e.org_id=v_org and e.starts_at<=now()
 and (e.ends_at is null or e.ends_at>now()) for update;
 if v_tier is null then raise exception 'Your MathsGrove programme has not yet been activated by your tutor'; end if;
 if v_tier='weekly' and p_mode not in ('weekly','topic') then
    raise exception 'This paper style requires a different MathsGrove programme'; end if;
 if v_tier='daily' and p_mode='mock' then
    raise exception 'Mock assessments require the Exam programme'; end if;
 if p_mode in ('weekly','topic') and
   (select count(*) from public.attempts a where a.student_id=v_user
    and a.paper_mode in ('weekly','topic') and
    a.started_at>=date_trunc('month',now()) )>=4 then
    raise exception 'Your monthly weekly-paper allocation has been used'; end if;
 if p_mode='daily' and
   (select count(*) from public.attempts a where a.student_id=v_user
    and a.paper_mode='daily' and
    a.started_at>=date_trunc('week',now()) )>=7 then
    raise exception 'Your seven-day Daily Focus allocation has been used'; end if;
 if p_mode='mock' and
   (select count(*) from public.attempts a where a.student_id=v_user
    and a.paper_mode='mock' and
    a.started_at>=date_trunc('month',now()) )>=1 then
    raise exception 'Your monthly mock assessment has already been created'; end if;
 select p.qualification into v_qual from public.student_preferences p where p.student_id=v_user;
 if v_qual is null then raise exception 'Save your exam pathway first'; end if;
 for v_i in 1..array_length(p_questions,1) loop
  v_question:=p_questions[v_i];
  if not exists(select 1 from public.question_bank q where
    q.id=v_question and q.qualification=v_qual and q.active
    and (not exists(select 1 from public.question_editorial qe where qe.question_id=q.id and qe.owner_org is not null)
     or exists(select 1 from public.question_editorial qe
       join public.student_preferences sp on sp.student_id=v_user
       where qe.question_id=q.id and qe.owner_org=v_org and qe.review_status='approved'
       and qe.board_key=sp.exam_board and qe.exam_tier=sp.tier
       and not exists(select 1 from public.mock_pack_questions mpq
        join public.mock_packs mp on mp.id=mpq.pack_id
        where mpq.question_id=q.id and mp.status='published')))
    and (coalesce(p_topic,'')='' or q.topic=p_topic)
    and (p_difficulty='mixed' or
      (p_difficulty='foundation' and q.difficulty in (1,2)) or
      (p_difficulty='standard' and q.difficulty in (2,3)) or
      (p_difficulty='challenge' and q.difficulty in (3,4,5)))) then
    raise exception 'Unavailable or mismatched paper question';
  end if;
 end loop;
 insert into public.attempts(org_id,student_id,qualification,status,paper_mode,focus_topic,target_difficulty,requested_count)
 values(v_org,v_user,v_qual,'draft',p_mode,coalesce(p_topic,''),p_difficulty,p_requested_count)
 returning id into v_attempt;
 for v_i in 1..array_length(p_questions,1) loop
  insert into public.paper_questions(attempt_id,question_id,position)
  values(v_attempt,p_questions[v_i],v_i);
 end loop;
 return v_attempt;
end;
$$;
REVOKE ALL ON FUNCTION public.create_student_paper(text,text,text,integer,uuid[]) FROM public,anon;
GRANT EXECUTE ON FUNCTION public.create_student_paper(text,text,text,integer,uuid[]) TO authenticated;

CREATE OR REPLACE FUNCTION public.create_mock_pack(
 p_org uuid,p_qualification text,p_board text,p_tier text,p_title text,p_code text,
 p_calculator boolean,p_minutes integer,p_target integer,p_questions uuid[]
) RETURNS uuid LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v_actor uuid:=(SELECT auth.uid());v_pack uuid;v_count integer;v_sum integer;v_pos integer;v_q uuid;
BEGIN
 IF v_actor IS NULL OR NOT private.is_partner(p_org) THEN RAISE EXCEPTION 'Administrator required';END IF;
 IF p_qualification NOT IN ('GCSE','IGCSE','A_LEVEL','FURTHER_MATHS','IB_AA','IB_AI','TMUA')
 OR coalesce(length(p_board),0) NOT BETWEEN 3 AND 60 OR coalesce(length(p_tier),0) NOT BETWEEN 2 AND 30
 OR coalesce(length(p_title),0) NOT BETWEEN 5 AND 160 OR coalesce(length(p_code),0) NOT BETWEEN 1 AND 30
 OR p_minutes NOT BETWEEN 15 AND 180 OR p_target NOT BETWEEN 20 AND 150
 OR p_questions IS NULL OR coalesce(array_length(p_questions,1),0) NOT BETWEEN 6 AND 20 THEN
 RAISE EXCEPTION 'Incomplete mock paper blueprint';END IF;
 SELECT count(*),coalesce(sum(q.marks),0) INTO v_count,v_sum FROM public.question_bank q
 JOIN public.question_editorial qe ON qe.question_id=q.id
 WHERE q.id=ANY(p_questions) AND q.qualification=p_qualification
 AND qe.owner_org=p_org AND qe.board_key=p_board AND qe.exam_tier=p_tier
 AND qe.review_status='approved'
 AND (p_calculator OR NOT qe.calculator_required)
 AND EXISTS(SELECT 1 FROM public.mark_schemes ms WHERE ms.question_id=q.id AND length(trim(ms.scheme))>=20);
 IF v_count<>array_length(p_questions,1) OR v_sum<>p_target THEN
 RAISE EXCEPTION 'Question set must be unique, approved for this board/tier, and total exactly % marks',p_target;END IF;
 IF NOT EXISTS(SELECT 1 FROM public.mock_board_templates t
 WHERE t.board_key=p_board AND t.exam_tier=p_tier AND t.paper_code=p_code
 AND t.qualification=p_qualification AND t.duration_seconds=p_minutes*60
 AND t.target_marks=p_target AND t.calculator_allowed=coalesce(p_calculator,true))
 THEN RAISE EXCEPTION 'Paper component must match the verified board specification: exact marks, minutes and calculator rule';END IF;
 INSERT INTO public.mock_packs(org_id,qualification,board_key,exam_tier,title,paper_code,
 calculator_allowed,duration_seconds,target_marks,created_by)
 VALUES(p_org,p_qualification,p_board,p_tier,p_title,p_code,coalesce(p_calculator,true),
 p_minutes*60,p_target,v_actor) RETURNING id INTO v_pack;
 FOR v_pos IN 1..array_length(p_questions,1) LOOP
  v_q:=p_questions[v_pos];
  INSERT INTO public.mock_pack_questions(pack_id,question_id,position,suggested_seconds)
  SELECT v_pack,v_q,v_pos,qe.suggested_seconds
  FROM public.question_editorial qe WHERE qe.question_id=v_q;
 END LOOP;
 RETURN v_pack;
END;$$;
REVOKE ALL ON FUNCTION public.create_mock_pack(uuid,text,text,text,text,text,boolean,integer,integer,uuid[]) FROM public,anon;
GRANT EXECUTE ON FUNCTION public.create_mock_pack(uuid,text,text,text,text,text,boolean,integer,integer,uuid[]) TO authenticated;

CREATE OR REPLACE FUNCTION public.publish_mock_pack(p_pack uuid)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v_p public.mock_packs%rowtype;v_count integer;v_marks integer;v_topics integer;
BEGIN
 SELECT * INTO v_p FROM public.mock_packs WHERE id=p_pack FOR UPDATE;
 IF v_p.id IS NULL OR NOT private.is_partner(v_p.org_id) THEN RAISE EXCEPTION 'Not authorised';END IF;
 IF v_p.status<>'draft' THEN RAISE EXCEPTION 'Only draft mocks may be published';END IF;
 SELECT count(*),coalesce(sum(q.marks),0),count(DISTINCT q.topic)
 INTO v_count,v_marks,v_topics
 FROM public.mock_pack_questions mpq
 JOIN public.question_bank q ON q.id=mpq.question_id
 JOIN public.question_editorial qe ON qe.question_id=q.id
 WHERE mpq.pack_id=v_p.id AND qe.review_status='approved'
 AND qe.owner_org=v_p.org_id AND qe.board_key=v_p.board_key AND qe.exam_tier=v_p.exam_tier;
 IF v_count<8 OR v_marks<>v_p.target_marks OR v_topics<3 THEN
  RAISE EXCEPTION 'Mock must have at least 8 moderated questions, 3 topic areas and exactly its approved target marks';END IF;
 UPDATE public.question_bank SET active=true WHERE id IN
 (SELECT question_id FROM public.mock_pack_questions WHERE pack_id=p_pack);
 UPDATE public.mock_packs SET status='published',published_at=now() WHERE id=p_pack;
 RETURN jsonb_build_object('ok',true,'published',true);
END;$$;
REVOKE ALL ON FUNCTION public.publish_mock_pack(uuid) FROM public,anon;
GRANT EXECUTE ON FUNCTION public.publish_mock_pack(uuid) TO authenticated;

CREATE OR REPLACE FUNCTION public.assign_mock_pack(p_pack uuid,p_student uuid)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v_p public.mock_packs%rowtype;v_actor uuid:=(SELECT auth.uid());v_qual text;
BEGIN
 SELECT * INTO v_p FROM public.mock_packs WHERE id=p_pack;
 IF v_p.id IS NULL OR v_p.status<>'published' OR NOT private.is_partner(v_p.org_id) THEN
  RAISE EXCEPTION 'Only an authorised administrator may assign a published mock';END IF;
 IF NOT EXISTS(SELECT 1 FROM public.memberships m WHERE m.user_id=p_student
  AND m.org_id=v_p.org_id AND m.member_role='student') THEN RAISE EXCEPTION 'Student not in your organisation';END IF;
 SELECT qualification INTO v_qual FROM public.student_preferences WHERE student_id=p_student;
 IF v_qual<>v_p.qualification OR NOT EXISTS(
 SELECT 1 FROM public.student_preferences sp WHERE sp.student_id=p_student
 AND sp.exam_board=v_p.board_key AND sp.tier=v_p.exam_tier) THEN
 RAISE EXCEPTION 'Student qualification, exam board and academic tier must match the mock';END IF;
 INSERT INTO public.mock_assignments(pack_id,student_id,org_id,assigned_by)
 VALUES(p_pack,p_student,v_p.org_id,v_actor)
 ON CONFLICT(pack_id,student_id) DO NOTHING;
 RETURN jsonb_build_object('ok',true);
END;$$;
REVOKE ALL ON FUNCTION public.assign_mock_pack(uuid,uuid) FROM public,anon;
GRANT EXECUTE ON FUNCTION public.assign_mock_pack(uuid,uuid) TO authenticated;

CREATE OR REPLACE FUNCTION public.start_mock_session(p_pack uuid)
RETURNS uuid LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v_actor uuid:=(SELECT auth.uid());v_org uuid;v_pack public.mock_packs%rowtype;
 v_pref public.student_preferences%rowtype;v_attempt uuid;v_n integer;
BEGIN
 SELECT * INTO v_pack FROM public.mock_packs WHERE id=p_pack AND status='published';
 IF v_pack.id IS NULL THEN RAISE EXCEPTION 'This mock is not published';END IF;
 SELECT org_id INTO v_org FROM public.memberships
 WHERE user_id=v_actor AND member_role='student' AND org_id=v_pack.org_id;
 IF v_org IS NULL OR NOT EXISTS(SELECT 1 FROM public.mock_assignments
 WHERE pack_id=p_pack AND student_id=v_actor AND org_id=v_org) THEN
 RAISE EXCEPTION 'Mock is not assigned to this student';END IF;
 SELECT * INTO v_pref FROM public.student_preferences WHERE student_id=v_actor;
 IF v_pref.qualification<>v_pack.qualification OR
    v_pref.exam_board<>v_pack.board_key OR v_pref.tier<>v_pack.exam_tier THEN
 RAISE EXCEPTION 'Ask your tutor to match your exam board and tier to this mock';END IF;
 PERFORM 1 FROM public.student_entitlements e WHERE e.student_id=v_actor
 AND e.org_id=v_org AND e.tier='exam'
 AND e.starts_at<=now() AND (e.ends_at IS NULL OR e.ends_at>now()) FOR UPDATE;
 IF NOT FOUND THEN RAISE EXCEPTION 'Grove Exam access required';END IF;
 IF EXISTS(SELECT 1 FROM public.attempts WHERE student_id=v_actor
 AND paper_mode='mock' AND started_at>=date_trunc('month',now())) THEN
 RAISE EXCEPTION 'Your monthly Grove Exam mock allocation has already been used';END IF;
 SELECT count(*) INTO v_n FROM public.mock_pack_questions WHERE pack_id=p_pack;
 IF v_n<8 OR v_n>20 THEN RAISE EXCEPTION 'Mock has not been assembled';END IF;
 INSERT INTO public.attempts(org_id,student_id,qualification,status,paper_mode,
 requested_count,mock_pack_id,deadline_at,duration_seconds)
 VALUES(v_org,v_actor,v_pack.qualification,'draft','mock',
 v_n,p_pack,now()+(v_pack.duration_seconds*interval '1 second'),v_pack.duration_seconds)
 RETURNING id INTO v_attempt;
 INSERT INTO public.paper_questions(attempt_id,question_id,position)
 SELECT v_attempt,question_id,position FROM public.mock_pack_questions
 WHERE pack_id=p_pack ORDER BY position;
 -- Pre-create blank responses: skipped questions still appear on examiner board.
 INSERT INTO public.answers(attempt_id,question_id,student_id,typed_answer)
 SELECT v_attempt,question_id,v_actor,'' FROM public.mock_pack_questions
 WHERE pack_id=p_pack;
 RETURN v_attempt;
END;$$;
REVOKE ALL ON FUNCTION public.start_mock_session(uuid) FROM public,anon;
GRANT EXECUTE ON FUNCTION public.start_mock_session(uuid) TO authenticated;

CREATE OR REPLACE FUNCTION public.finish_mock_session(p_attempt uuid)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v_actor uuid:=(SELECT auth.uid());v_p public.attempts%rowtype;v_expired boolean;
BEGIN
 SELECT * INTO v_p FROM public.attempts WHERE id=p_attempt FOR UPDATE;
 IF v_p.id IS NULL OR v_p.student_id<>v_actor OR v_p.paper_mode<>'mock' OR v_p.mock_pack_id IS NULL
 THEN RAISE EXCEPTION 'Cannot finish this mock'; END IF;
 IF v_p.status='draft' THEN
  v_expired := now()>=v_p.deadline_at;
  UPDATE public.attempts SET status='submitted',submitted_at=CASE WHEN v_expired THEN v_p.deadline_at ELSE now() END,
  mock_expired=v_expired WHERE id=p_attempt;
 END IF;
 RETURN jsonb_build_object('ok',true,'expired',coalesce(v_expired,v_p.mock_expired),'status',
 (SELECT status FROM public.attempts WHERE id=p_attempt));
END;$$;
REVOKE ALL ON FUNCTION public.finish_mock_session(uuid) FROM public,anon;
GRANT EXECUTE ON FUNCTION public.finish_mock_session(uuid) TO authenticated;

-- Examiner/admin can finalise unattended expired sittings before loading the
-- marking queue. A separate database scheduler is recommended for production.
CREATE OR REPLACE FUNCTION public.finalize_expired_mock_sessions()
RETURNS integer LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v_actor uuid:=(SELECT auth.uid());v_total integer;
BEGIN
 IF v_actor IS NULL THEN RAISE EXCEPTION 'Authentication required';END IF;
 UPDATE public.attempts a SET status='submitted',submitted_at=a.deadline_at,mock_expired=true
 WHERE a.paper_mode='mock' AND a.mock_pack_id IS NOT NULL AND a.status='draft'
 AND a.deadline_at<=now()
 AND EXISTS(SELECT 1 FROM public.memberships m WHERE m.org_id=a.org_id
  AND m.user_id=v_actor AND m.member_role IN ('admin','partner','examiner'));
 GET DIAGNOSTICS v_total=ROW_COUNT;
 RETURN v_total;
END;$$;
REVOKE ALL ON FUNCTION public.finalize_expired_mock_sessions() FROM public,anon;
GRANT EXECUTE ON FUNCTION public.finalize_expired_mock_sessions() TO authenticated;

-- Enforce mock expiry even if the browser is closed, clocks are tampered with,
-- users refresh, or uploads arrive after the deadline.
CREATE OR REPLACE FUNCTION private.is_editable_attempt(p_attempt uuid)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path='' AS $$
 SELECT EXISTS(SELECT 1 FROM public.attempts a WHERE a.id=p_attempt
 AND a.student_id=(SELECT auth.uid()) AND a.status='draft'
 AND private.is_member(a.org_id)
 AND (a.deadline_at IS NULL OR a.deadline_at>now()));
$$;

-- A trigger also prevents a bypass through a privileged table write. We do not
-- treat the student's browser as the authority for deadline.
CREATE OR REPLACE FUNCTION private.assert_mock_write_allowed()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v_a public.attempts%rowtype;
BEGIN
 SELECT * INTO v_a FROM public.attempts WHERE id=NEW.attempt_id FOR SHARE;
 IF v_a.id IS NULL THEN RAISE EXCEPTION 'Assessment not found';END IF;
 IF v_a.mock_pack_id IS NOT NULL AND (v_a.status<>'draft' OR now()>=v_a.deadline_at) THEN
  RAISE EXCEPTION 'Mock time has expired. Further answers or uploads are locked';END IF;
 RETURN NEW;
END;$$;
DROP TRIGGER IF EXISTS timed_answer_guard ON public.answers;
CREATE TRIGGER timed_answer_guard BEFORE INSERT OR UPDATE ON public.answers
 FOR EACH ROW EXECUTE FUNCTION private.assert_mock_write_allowed();
DROP TRIGGER IF EXISTS timed_attachment_guard ON public.answer_files;
CREATE TRIGGER timed_attachment_guard BEFORE INSERT ON public.answer_files
 FOR EACH ROW EXECUTE FUNCTION private.assert_mock_write_allowed();

DROP POLICY IF EXISTS mathsgrove_storage_upload ON storage.objects;
CREATE POLICY mathsgrove_storage_upload ON storage.objects FOR INSERT TO authenticated
WITH CHECK(bucket_id='student-work'
 AND split_part(name,'/',2)=(SELECT auth.uid())::text
 AND EXISTS(SELECT 1 FROM public.attempts a WHERE
 a.id::text=split_part(storage.objects.name,'/',3)
 AND a.org_id::text=split_part(storage.objects.name,'/',1)
 AND a.student_id=(SELECT auth.uid())
 AND private.is_editable_attempt(a.id)
 AND EXISTS(SELECT 1 FROM public.paper_questions pq WHERE pq.attempt_id=a.id
 AND pq.question_id::text=split_part(storage.objects.name,'/',4))));

-- Deny any modification of server-controlled deadline, mode, or mock pack
-- through the generic attempts update policy. Ordinary submissions may still
-- change status to 'submitted', but cannot change the deadline.
CREATE OR REPLACE FUNCTION private.guard_mock_attempt_fields()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
BEGIN
 IF OLD.mock_pack_id IS NOT NULL AND
 (NEW.started_at IS DISTINCT FROM OLD.started_at
 OR NEW.student_id IS DISTINCT FROM OLD.student_id
 OR NEW.org_id IS DISTINCT FROM OLD.org_id
 OR NEW.qualification IS DISTINCT FROM OLD.qualification
 OR NEW.requested_count IS DISTINCT FROM OLD.requested_count
 OR NEW.mock_pack_id IS DISTINCT FROM OLD.mock_pack_id
 OR NEW.deadline_at IS DISTINCT FROM OLD.deadline_at
 OR NEW.duration_seconds IS DISTINCT FROM OLD.duration_seconds
 OR NEW.paper_mode IS DISTINCT FROM OLD.paper_mode) THEN
  RAISE EXCEPTION 'Mock timing and paper allocation are immutable';END IF;
 RETURN NEW;
END;$$;
DROP TRIGGER IF EXISTS guard_mock_attempt_fields ON public.attempts;
CREATE TRIGGER guard_mock_attempt_fields BEFORE UPDATE ON public.attempts
 FOR EACH ROW EXECUTE FUNCTION private.guard_mock_attempt_fields();
COMMIT;
