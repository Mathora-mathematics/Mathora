-- MathsGrove maths upgrade v2: ONE transaction, one install.
-- Install ONLY after UPGRADE_MATHSGROVE_ADMIN.sql was confirmed successful.
-- Includes private content admin, server-timed Grove Exam, and 120 open
-- practice questions with staff-table marking schemes.
-- IMPORTANT: Open-practice answers are available in public Github source;
-- these questions must NEVER be used as an unseen timed mock.
-- Not yet run on your Supabase database; use test accounts and backups.
BEGIN;

-- MathsGrove: secure tier-specific mathematics bank and verified board-format timed mock sessions.
-- PREREQUISITE: original UPGRADE_MATHSGROVE_ADMIN.sql already succeeded.
-- NOT installed through GitHub Pages; review, back up, test and run once in Supabase.
-- All mock packs begin unpublished; only a human-checked paper can be assigned.


-- SOURCE supabase/migrations/20261028_question_content_studio.sql
-- MathsGrove content studio, phase 1: private question moderation.
-- Run only after UPGRADE_MATHSGROVE_ADMIN.sql. Do not run without a backup.
-- No secret questions or answers are placed in the public static website.

CREATE TABLE IF NOT EXISTS public.question_editorial (
 question_id uuid PRIMARY KEY REFERENCES public.question_bank(id) ON DELETE CASCADE,
 owner_org uuid REFERENCES public.organisations(id) ON DELETE CASCADE,
 board_key text NOT NULL DEFAULT '' CHECK(length(board_key)<=60),
 exam_tier text NOT NULL DEFAULT '' CHECK(length(exam_tier)<=30),
 calculator_required boolean NOT NULL DEFAULT false,
 suggested_seconds integer NOT NULL DEFAULT 180 CHECK(suggested_seconds BETWEEN 30 AND 1800),
 review_status text NOT NULL DEFAULT 'draft'
   CHECK(review_status IN ('draft','in_review','approved','legacy_unmapped')),
 editorial_note text NOT NULL DEFAULT '' CHECK(length(editorial_note)<=1500),
 created_by uuid REFERENCES auth.users(id),
 reviewed_by uuid REFERENCES auth.users(id),
 reviewed_at timestamptz,
 updated_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.question_editorial ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON public.question_editorial FROM anon,authenticated;
GRANT SELECT ON public.question_editorial TO authenticated;
DROP POLICY IF EXISTS question_editorial_staff_read ON public.question_editorial;
CREATE POLICY question_editorial_staff_read ON public.question_editorial
FOR SELECT TO authenticated
USING(
 (owner_org IS NULL AND EXISTS(
   SELECT 1 FROM public.memberships m WHERE m.user_id=(SELECT auth.uid())
     AND m.member_role IN ('admin','partner','examiner')))
 OR (owner_org IS NOT NULL AND private.is_staff(owner_org))
);

-- Backfill the existing ten independent pilot items. They remain available for
-- the original pilot, but are visibly NOT board-moderated or approved mock items.
INSERT INTO public.question_editorial(question_id,owner_org,review_status,editorial_note,suggested_seconds)
SELECT q.id,NULL,'legacy_unmapped',
       'Original pilot question; map syllabus and moderate before using in a formal mock.',
       greatest(90,least(1800,q.marks*65))
FROM public.question_bank q
ON CONFLICT(question_id) DO NOTHING;

-- Never allow students to view private organisation-owned drafts or other
-- organisations' approved custom questions.
DROP POLICY IF EXISTS questions_select ON public.question_bank;
CREATE POLICY questions_select ON public.question_bank FOR SELECT TO authenticated
USING (
 EXISTS (
   SELECT 1 FROM public.question_editorial qe WHERE qe.question_id=question_bank.id
   AND ((qe.owner_org IS NULL AND question_bank.active AND
       EXISTS(SELECT 1 FROM public.memberships m WHERE m.user_id=(SELECT auth.uid())))
     OR (qe.owner_org IS NOT NULL AND qe.owner_org IN(
       SELECT m.org_id FROM public.memberships m WHERE m.user_id=(SELECT auth.uid())
     ) AND (question_bank.active OR private.is_staff(qe.owner_org))))
 )
 OR (question_bank.active AND NOT EXISTS(
   SELECT 1 FROM public.question_editorial qe WHERE qe.question_id=question_bank.id)
   AND EXISTS(SELECT 1 FROM public.memberships m WHERE m.user_id=(SELECT auth.uid())))
);

-- Restrict examiner-only solutions to the relevant tenant for org-owned questions.
DROP POLICY IF EXISTS schemes_select ON public.mark_schemes;
CREATE POLICY schemes_select ON public.mark_schemes FOR SELECT TO authenticated
USING(
  EXISTS(SELECT 1 FROM public.memberships m
         WHERE m.user_id=(SELECT auth.uid())
           AND m.member_role IN ('admin','partner','examiner')
           AND (
             NOT EXISTS(SELECT 1 FROM public.question_editorial qe
                        WHERE qe.question_id=mark_schemes.question_id AND qe.owner_org IS NOT NULL)
             OR EXISTS(SELECT 1 FROM public.question_editorial qe
                        WHERE qe.question_id=mark_schemes.question_id
                          AND qe.owner_org=m.org_id)
           ))
);

-- Staff create original unpublished questions. The examiner-only mark scheme
-- is saved transactionally and never returned to a student via question_bank.
CREATE OR REPLACE FUNCTION public.author_bank_question(
 p_org uuid,p_qualification text,p_topic text,p_prompt text,p_marks integer,
 p_difficulty integer,p_scheme text,p_board_key text,p_exam_tier text,
 p_calculator boolean,p_seconds integer,p_note text
) RETURNS uuid LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v_actor uuid:=(SELECT auth.uid());v_id uuid;
BEGIN
 IF v_actor IS NULL OR NOT private.is_partner(p_org) THEN
  RAISE EXCEPTION 'Administrator permission required'; END IF;
 IF p_qualification NOT IN ('GCSE','IGCSE','A_LEVEL','FURTHER_MATHS','IB_AA','IB_AI','TMUA')
   OR p_marks NOT BETWEEN 1 AND 30 OR p_difficulty NOT BETWEEN 1 AND 5
   OR length(trim(coalesce(p_topic,''))) NOT BETWEEN 3 AND 140
   OR length(trim(coalesce(p_prompt,''))) NOT BETWEEN 20 AND 5000
   OR length(trim(coalesce(p_scheme,''))) NOT BETWEEN 20 AND 5000
   OR p_seconds NOT BETWEEN 30 AND 1800 OR length(coalesce(p_note,''))>1500
   OR length(coalesce(p_board_key,''))>60 OR length(coalesce(p_exam_tier,''))>30
 THEN RAISE EXCEPTION 'Incomplete or invalid original question'; END IF;
 IF p_board_key<>'' AND (
   (p_qualification='GCSE' AND p_board_key NOT LIKE 'AQA_%' AND
    p_board_key NOT LIKE 'EDEXCEL_1MA1' AND p_board_key NOT LIKE 'OCR_%'
    AND p_board_key NOT LIKE 'EDUQAS_%' AND p_board_key NOT LIKE 'WJEC_%')
   OR (p_qualification='IGCSE' AND
    p_board_key NOT LIKE 'CAMBRIDGE_%' AND p_board_key NOT LIKE 'EDEXCEL_4%'
    AND p_board_key NOT LIKE 'OXFORDAQA_%')
 ) THEN RAISE EXCEPTION 'Exam-board selection does not match qualification'; END IF;
 INSERT INTO public.question_bank(qualification,topic,prompt,marks,difficulty,active)
 VALUES(p_qualification,trim(p_topic),trim(p_prompt),p_marks,p_difficulty,false)
 RETURNING id INTO v_id;
 INSERT INTO public.mark_schemes(question_id,scheme) VALUES(v_id,trim(p_scheme));
 INSERT INTO public.question_editorial
 (question_id,owner_org,board_key,exam_tier,calculator_required,
 suggested_seconds,review_status,editorial_note,created_by)
 VALUES(v_id,p_org,coalesce(p_board_key,''),coalesce(p_exam_tier,''),
 coalesce(p_calculator,false),p_seconds,'draft',coalesce(p_note,''),v_actor);
 RETURN v_id;
END;$$;
REVOKE ALL ON FUNCTION public.author_bank_question(uuid,text,text,text,integer,integer,text,text,text,boolean,integer,text) FROM public,anon;
GRANT EXECUTE ON FUNCTION public.author_bank_question(uuid,text,text,text,integer,integer,text,text,text,boolean,integer,text) TO authenticated;

-- Stage 1 moderation is editorial ONLY. Even approved custom questions stay
-- inactive until a later, board-aware publishing gate is implemented. Historical
-- answers are never deleted by editorial actions.
CREATE OR REPLACE FUNCTION public.moderate_bank_question(
 p_question uuid,p_status text,p_note text
) RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v_actor uuid:=(SELECT auth.uid());v_row public.question_editorial%rowtype;v_scheme text;
BEGIN
 SELECT * INTO v_row FROM public.question_editorial WHERE question_id=p_question FOR UPDATE;
 IF v_row.question_id IS NULL OR v_row.owner_org IS NULL
    OR NOT private.is_partner(v_row.owner_org) THEN
   RAISE EXCEPTION 'Only your organisation’s original questions can be moderated';END IF;
 IF p_status NOT IN ('draft','in_review','approved') OR length(coalesce(p_note,''))>1500 THEN
   RAISE EXCEPTION 'Invalid moderation decision';END IF;
 IF p_status='approved' THEN
  SELECT scheme INTO v_scheme FROM public.mark_schemes WHERE question_id=p_question;
  IF coalesce(length(trim(v_scheme)),0)<20 OR v_row.board_key=''
   OR v_row.exam_tier='' THEN RAISE EXCEPTION 'Complete mark scheme, board and tier before approval';END IF;
 END IF;
 UPDATE public.question_editorial SET review_status=p_status,editorial_note=coalesce(p_note,''),
  reviewed_by=CASE WHEN p_status='approved' THEN v_actor ELSE NULL END,
  reviewed_at=CASE WHEN p_status='approved' THEN now() ELSE NULL END,
  updated_at=now() WHERE question_id=p_question;
 -- No automatic publication: verify board/year, calculator and paper selection first.
 UPDATE public.question_bank SET active=false WHERE id=p_question;
 RETURN jsonb_build_object('ok',true,'status',p_status);
END;$$;
REVOKE ALL ON FUNCTION public.moderate_bank_question(uuid,text,text) FROM public,anon;
GRANT EXECUTE ON FUNCTION public.moderate_bank_question(uuid,text,text) TO authenticated;

-- No published session timer is implemented in this migration. A later phase
-- must enforce time limits server-side for answers, uploads and submissions.



-- SOURCE supabase/migrations/20261028_tier_mock_sessions.sql
-- MathsGrove Tier Assessment v2
-- Requires the deployed administrator upgrade AND content-studio migration.
-- Adds server-controlled timed Grove Exam mock sittings. NO mock packs are
-- published by this migration; a human examiner must author, approve, assemble
-- and assign an original board-mapped paper first.

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





-- ===== ORIGINAL PRACTICE IMPORT =====
-- MathsGrove open-practice expansion v2 (not confidential mock content).
-- Requires UPGRADE_TIER_MOCKS.sql to have run successfully first.
-- Original practice questions and solutions are publicly auditable; do NOT
-- publish/reuse these items as unseen Grove Exam timed mock questions.
-- Re-runnable: stable source_ids prevent duplicate imports.

CREATE TABLE IF NOT EXISTS public.practice_content_index (
 source_id text PRIMARY KEY,
 question_id uuid NOT NULL UNIQUE REFERENCES public.question_bank(id) ON DELETE CASCADE,
 qualification text NOT NULL,
 programme text NOT NULL CHECK(programme IN ('daily','weekly','exam')),
 exam_tier text NOT NULL,
 created_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.practice_content_index ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON public.practice_content_index FROM anon,authenticated;
GRANT SELECT ON public.practice_content_index TO authenticated;
DROP POLICY IF EXISTS practice_index_member_read ON public.practice_content_index;
CREATE POLICY practice_index_member_read ON public.practice_content_index
 FOR SELECT TO authenticated USING(
  EXISTS(SELECT 1 FROM public.memberships m WHERE m.user_id=(SELECT auth.uid()))
 );

ALTER TABLE public.attempts DROP CONSTRAINT IF EXISTS attempts_paper_mode_check;
ALTER TABLE public.attempts ADD CONSTRAINT attempts_paper_mode_check
 CHECK(paper_mode IN ('daily','weekly','mock','topic','practice','exam_practice'));

-- Import to the existing ORIGINAL practice bank. Staff-only solutions live
-- in mark_schemes, never in the student-facing question_bank rows.
DO $import$
DECLARE entry jsonb;v_q uuid;v_id text;v_n int:=0;
BEGIN
 FOR entry IN SELECT value FROM jsonb_array_elements($content$[{"id":"MG-G-DAILY-FRAC-1","qualification":"GCSE","programme":"daily","exam_tier":"Foundation","topic":"Number · Fractions","prompt":"Evaluate \\(\\frac{1}{3}+\\frac{1}{4}\\). Give your answer as a fraction in lowest terms.","marks":2,"difficulty":2,"minutes":3,"scheme":"M1: Find a common denominator.\nA1: Obtain \\(\\frac{7}{12}\\) in lowest terms.\nAnswer: \\(\\frac{7}{12}\\)"},{"id":"MG-G-DAILY-LINEAR-1","qualification":"GCSE","programme":"daily","exam_tier":"Foundation","topic":"Algebra · Linear equations","prompt":"Solve \\(2(x-1)+4=8\\). Show your intermediate equations.","marks":3,"difficulty":2,"minutes":4,"scheme":"M1: Expand or rearrange the bracket term.\nB1: Isolate x using correct inverse operations.\nA1: Obtain \\(x=3\\).\nAnswer: \\(x=3\\)"},{"id":"MG-G-DAILY-PERCENT-1","qualification":"GCSE","programme":"daily","exam_tier":"Foundation","topic":"Number · Percentages","prompt":"A school has 180 pupils. \\(10\\%\\) travel by bus. Calculate how many travel by bus.","marks":2,"difficulty":2,"minutes":3,"scheme":"M1: Convert the percentage into a fractional multiplier.\nA1: Obtain \\(18\\) pupils.\nAnswer: \\(18\\)"},{"id":"MG-G-DAILY-PROB-1","qualification":"GCSE","programme":"daily","exam_tier":"Foundation","topic":"Probability · Simple events","prompt":"A bag contains 3 red and 5 blue tokens. One token is selected at random. Find the probability that it is red, as a simplified fraction.","marks":2,"difficulty":2,"minutes":3,"scheme":"M1: Identify 3 favourable outcomes out of 8.\nA1: Obtain \\(\\frac{3}{8}\\).\nAnswer: \\(\\frac{3}{8}\\)"},{"id":"MG-G-WEEKLY-SIMUL-1","qualification":"GCSE","programme":"weekly","exam_tier":"Higher","topic":"Algebra · Simultaneous equations","prompt":"Solve \\[\\begin{aligned}2x+y&=5\\\\x-y&=1\\end{aligned}\\] Show elimination or substitution.","marks":4,"difficulty":3,"minutes":6,"scheme":"M1: Eliminate y or substitute consistently.\nB1: Obtain \\(3x=6\\).\nB1: Find \\(x=2\\).\nA1: Find \\(y=1\\).\nAnswer: \\((x,y)=(2,1)\\)"},{"id":"MG-G-WEEKLY-QUAD-1","qualification":"GCSE","programme":"weekly","exam_tier":"Higher","topic":"Algebra · Quadratics","prompt":"Factorise and solve \\(x^2-6x+5=0\\). State both real roots.","marks":4,"difficulty":3,"minutes":5,"scheme":"M1: Choose two values with the correct sum and product.\nB1: Form \\((x-1)(x-5)=0\\).\nB1: Find \\(x=1\\).\nA1: Find \\(x=5\\).\nAnswer: \\(x=1\\ \\text{or}\\ x=5\\)"},{"id":"MG-G-WEEKLY-PYTH-1","qualification":"GCSE","programme":"weekly","exam_tier":"Foundation","topic":"Geometry · Pythagoras","prompt":"A right-angled triangle has perpendicular sides \\(3\\text{ cm}\\) and \\(4\\text{ cm}\\). Calculate the hypotenuse exactly, showing your working.","marks":3,"difficulty":3,"minutes":5,"scheme":"M1: Use \\(c^2=3^2+4^2\\).\nB1: Evaluate \\(c^2=25\\).\nA1: Obtain \\(5\\text{ cm}\\).\nAnswer: \\(5\\text{ cm}\\)"},{"id":"MG-G-WEEKLY-SPEED-1","qualification":"GCSE","programme":"weekly","exam_tier":"Foundation","topic":"Ratio · Compound measures","prompt":"A delivery van travels at \\(40\\text{ km/h}\\) for \\(45\\text{ minutes}\\). Calculate the distance it covers in kilometres, showing the unit conversion.","marks":3,"difficulty":3,"minutes":5,"scheme":"M1: Convert minutes to hours.\nB1: Use \\(s=vt\\) with consistent units.\nA1: Obtain \\(30\\text{ km}\\).\nAnswer: \\(30\\text{ km}\\)"},{"id":"MG-G-EXAM-BOUNDS-1","qualification":"GCSE","programme":"exam","exam_tier":"Higher","topic":"Number · Bounds","prompt":"The measured length and width of a rectangle are \\(4.2\\text{ m}\\) and \\(2.7\\text{ m}\\), each rounded to the nearest \\(0.1\\text{ m}\\). Find the exact upper bound for its area and explain your choice of bounds.","marks":5,"difficulty":4,"minutes":8,"scheme":"M1: Upper length bound \\(4.25\\text{ m}\\).\nB1: Upper width bound \\(2.75\\text{ m}\\).\nB1: Multiply the two upper bounds.\nB1: Find \\(11.6875\\text{ m}^2\\).\nA1: Explain that the actual dimensions could exceed the recorded dimensions.\nAnswer: \\(11.6875\\text{ m}^2\\)"},{"id":"MG-G-EXAM-VERTEX-1","qualification":"GCSE","programme":"exam","exam_tier":"Higher","topic":"Algebra · Completing the square","prompt":"Write \\(x^2-4x+(1)\\) in completed-square form. Find the minimum value and the value of \\(x\\) at which it occurs.","marks":5,"difficulty":4,"minutes":7,"scheme":"M1: Identify half the linear coefficient.\nB1: Complete the square and correct the constant.\nB1: Obtain \\((x-2)^2-3\\).\nB1: Recognise that the squared term is non-negative.\nA1: State minimum \\(-3\\) at \\(x=2\\).\nAnswer: \\((x-2)^2-3;\\ \\min=-3\\ \\text{at}\\ x=2\\)"},{"id":"MG-G-EXAM-COSINE-1","qualification":"GCSE","programme":"exam","exam_tier":"Higher","topic":"Trigonometry · Cosine rule","prompt":"In triangle \\(ABC\\), \\(AB=3\\text{ cm}\\), \\(AC=8\\text{ cm}\\) and \\(\\angle BAC=60^\\circ\\). Use the cosine rule to find \\(BC\\) exactly. Explain why it is appropriate.","marks":5,"difficulty":4,"minutes":8,"scheme":"M1: Recognise two sides and their included angle.\nB1: Use \\(BC^2=3^2+8^2-2(3)(8)\\cos60^\\circ\\).\nB1: Evaluate \\(BC^2=49\\).\nB1: Obtain \\(BC=7\\text{ cm}\\).\nA1: The sine rule has no known opposite side–angle pair.\nAnswer: \\(BC=7\\text{ cm}\\)"},{"id":"MG-G-EXAM-SPACE-1","qualification":"GCSE","programme":"exam","exam_tier":"Higher","topic":"Geometry · Three-dimensional Pythagoras","prompt":"A cuboid has perpendicular edges \\(2\\text{ cm}\\), \\(3\\text{ cm}\\) and \\(6\\text{ cm}\\). Find the length of the straight-line segment joining opposite vertices. Show two applications of Pythagoras.","marks":4,"difficulty":4,"minutes":8,"scheme":"M1: Find the base diagonal squared: \\(2^2+3^2=13\\).\nB1: Use a second right-angled triangle with the vertical edge.\nB1: Find total squared distance \\(49\\).\nA1: Give \\(7\\text{ cm}\\).\nAnswer: \\(7\\text{ cm}\\)"},{"id":"MG-G-DAILY-FRAC-2","qualification":"GCSE","programme":"daily","exam_tier":"Foundation","topic":"Number · Fractions","prompt":"Evaluate \\(\\frac{2}{5}+\\frac{1}{6}\\). Give your answer as a fraction in lowest terms.","marks":2,"difficulty":2,"minutes":3,"scheme":"M1: Find a common denominator.\nA1: Obtain \\(\\frac{17}{30}\\) in lowest terms.\nAnswer: \\(\\frac{17}{30}\\)"},{"id":"MG-G-DAILY-LINEAR-2","qualification":"GCSE","programme":"daily","exam_tier":"Foundation","topic":"Algebra · Linear equations","prompt":"Solve \\(3(x-2)+5=11\\). Show your intermediate equations.","marks":3,"difficulty":2,"minutes":4,"scheme":"M1: Expand or rearrange the bracket term.\nB1: Isolate x using correct inverse operations.\nA1: Obtain \\(x=4\\).\nAnswer: \\(x=4\\)"},{"id":"MG-G-DAILY-PERCENT-2","qualification":"GCSE","programme":"daily","exam_tier":"Foundation","topic":"Number · Percentages","prompt":"A school has 200 pupils. \\(15\\%\\) travel by bus. Calculate how many travel by bus.","marks":2,"difficulty":2,"minutes":3,"scheme":"M1: Convert the percentage into a fractional multiplier.\nA1: Obtain \\(30\\) pupils.\nAnswer: \\(30\\)"},{"id":"MG-G-DAILY-PROB-2","qualification":"GCSE","programme":"daily","exam_tier":"Foundation","topic":"Probability · Simple events","prompt":"A bag contains 4 red and 6 blue tokens. One token is selected at random. Find the probability that it is red, as a simplified fraction.","marks":2,"difficulty":2,"minutes":3,"scheme":"M1: Identify 4 favourable outcomes out of 10.\nA1: Obtain \\(\\frac{2}{5}\\).\nAnswer: \\(\\frac{2}{5}\\)"},{"id":"MG-G-WEEKLY-SIMUL-2","qualification":"GCSE","programme":"weekly","exam_tier":"Higher","topic":"Algebra · Simultaneous equations","prompt":"Solve \\[\\begin{aligned}2x+y&=8\\\\x-y&=1\\end{aligned}\\] Show elimination or substitution.","marks":4,"difficulty":3,"minutes":6,"scheme":"M1: Eliminate y or substitute consistently.\nB1: Obtain \\(3x=9\\).\nB1: Find \\(x=3\\).\nA1: Find \\(y=2\\).\nAnswer: \\((x,y)=(3,2)\\)"},{"id":"MG-G-WEEKLY-QUAD-2","qualification":"GCSE","programme":"weekly","exam_tier":"Higher","topic":"Algebra · Quadratics","prompt":"Factorise and solve \\(x^2-8x+12=0\\). State both real roots.","marks":4,"difficulty":3,"minutes":5,"scheme":"M1: Choose two values with the correct sum and product.\nB1: Form \\((x-2)(x-6)=0\\).\nB1: Find \\(x=2\\).\nA1: Find \\(x=6\\).\nAnswer: \\(x=2\\ \\text{or}\\ x=6\\)"},{"id":"MG-G-WEEKLY-PYTH-2","qualification":"GCSE","programme":"weekly","exam_tier":"Foundation","topic":"Geometry · Pythagoras","prompt":"A right-angled triangle has perpendicular sides \\(5\\text{ cm}\\) and \\(12\\text{ cm}\\). Calculate the hypotenuse exactly, showing your working.","marks":3,"difficulty":3,"minutes":5,"scheme":"M1: Use \\(c^2=5^2+12^2\\).\nB1: Evaluate \\(c^2=169\\).\nA1: Obtain \\(13\\text{ cm}\\).\nAnswer: \\(13\\text{ cm}\\)"},{"id":"MG-G-WEEKLY-SPEED-2","qualification":"GCSE","programme":"weekly","exam_tier":"Foundation","topic":"Ratio · Compound measures","prompt":"A delivery van travels at \\(48\\text{ km/h}\\) for \\(30\\text{ minutes}\\). Calculate the distance it covers in kilometres, showing the unit conversion.","marks":3,"difficulty":3,"minutes":5,"scheme":"M1: Convert minutes to hours.\nB1: Use \\(s=vt\\) with consistent units.\nA1: Obtain \\(24\\text{ km}\\).\nAnswer: \\(24\\text{ km}\\)"},{"id":"MG-G-EXAM-BOUNDS-2","qualification":"GCSE","programme":"exam","exam_tier":"Higher","topic":"Number · Bounds","prompt":"The measured length and width of a rectangle are \\(5.3\\text{ m}\\) and \\(3.6\\text{ m}\\), each rounded to the nearest \\(0.1\\text{ m}\\). Find the exact upper bound for its area and explain your choice of bounds.","marks":5,"difficulty":4,"minutes":8,"scheme":"M1: Upper length bound \\(5.35\\text{ m}\\).\nB1: Upper width bound \\(3.65\\text{ m}\\).\nB1: Multiply the two upper bounds.\nB1: Find \\(19.5275\\text{ m}^2\\).\nA1: Explain that the actual dimensions could exceed the recorded dimensions.\nAnswer: \\(19.5275\\text{ m}^2\\)"},{"id":"MG-G-EXAM-VERTEX-2","qualification":"GCSE","programme":"exam","exam_tier":"Higher","topic":"Algebra · Completing the square","prompt":"Write \\(x^2-6x+(5)\\) in completed-square form. Find the minimum value and the value of \\(x\\) at which it occurs.","marks":5,"difficulty":4,"minutes":7,"scheme":"M1: Identify half the linear coefficient.\nB1: Complete the square and correct the constant.\nB1: Obtain \\((x-3)^2-4\\).\nB1: Recognise that the squared term is non-negative.\nA1: State minimum \\(-4\\) at \\(x=3\\).\nAnswer: \\((x-3)^2-4;\\ \\min=-4\\ \\text{at}\\ x=3\\)"},{"id":"MG-G-EXAM-COSINE-2","qualification":"GCSE","programme":"exam","exam_tier":"Higher","topic":"Trigonometry · Cosine rule","prompt":"In triangle \\(ABC\\), \\(AB=5\\text{ cm}\\), \\(AC=8\\text{ cm}\\) and \\(\\angle BAC=60^\\circ\\). Use the cosine rule to find \\(BC\\) exactly. Explain why it is appropriate.","marks":5,"difficulty":4,"minutes":8,"scheme":"M1: Recognise two sides and their included angle.\nB1: Use \\(BC^2=5^2+8^2-2(5)(8)\\cos60^\\circ\\).\nB1: Evaluate \\(BC^2=49\\).\nB1: Obtain \\(BC=7\\text{ cm}\\).\nA1: The sine rule has no known opposite side–angle pair.\nAnswer: \\(BC=7\\text{ cm}\\)"},{"id":"MG-G-EXAM-SPACE-2","qualification":"GCSE","programme":"exam","exam_tier":"Higher","topic":"Geometry · Three-dimensional Pythagoras","prompt":"A cuboid has perpendicular edges \\(3\\text{ cm}\\), \\(4\\text{ cm}\\) and \\(12\\text{ cm}\\). Find the length of the straight-line segment joining opposite vertices. Show two applications of Pythagoras.","marks":4,"difficulty":4,"minutes":8,"scheme":"M1: Find the base diagonal squared: \\(3^2+4^2=25\\).\nB1: Use a second right-angled triangle with the vertical edge.\nB1: Find total squared distance \\(169\\).\nA1: Give \\(13\\text{ cm}\\).\nAnswer: \\(13\\text{ cm}\\)"},{"id":"MG-G-DAILY-FRAC-3","qualification":"GCSE","programme":"daily","exam_tier":"Foundation","topic":"Number · Fractions","prompt":"Evaluate \\(\\frac{3}{8}+\\frac{1}{4}\\). Give your answer as a fraction in lowest terms.","marks":2,"difficulty":2,"minutes":3,"scheme":"M1: Find a common denominator.\nA1: Obtain \\(\\frac{5}{8}\\) in lowest terms.\nAnswer: \\(\\frac{5}{8}\\)"},{"id":"MG-G-DAILY-LINEAR-3","qualification":"GCSE","programme":"daily","exam_tier":"Foundation","topic":"Algebra · Linear equations","prompt":"Solve \\(4(x-1)+6=22\\). Show your intermediate equations.","marks":3,"difficulty":2,"minutes":4,"scheme":"M1: Expand or rearrange the bracket term.\nB1: Isolate x using correct inverse operations.\nA1: Obtain \\(x=5\\).\nAnswer: \\(x=5\\)"},{"id":"MG-G-DAILY-PERCENT-3","qualification":"GCSE","programme":"daily","exam_tier":"Foundation","topic":"Number · Percentages","prompt":"A school has 250 pupils. \\(20\\%\\) travel by bus. Calculate how many travel by bus.","marks":2,"difficulty":2,"minutes":3,"scheme":"M1: Convert the percentage into a fractional multiplier.\nA1: Obtain \\(50\\) pupils.\nAnswer: \\(50\\)"},{"id":"MG-G-DAILY-PROB-3","qualification":"GCSE","programme":"daily","exam_tier":"Foundation","topic":"Probability · Simple events","prompt":"A bag contains 5 red and 7 blue tokens. One token is selected at random. Find the probability that it is red, as a simplified fraction.","marks":2,"difficulty":2,"minutes":3,"scheme":"M1: Identify 5 favourable outcomes out of 12.\nA1: Obtain \\(\\frac{5}{12}\\).\nAnswer: \\(\\frac{5}{12}\\)"},{"id":"MG-G-WEEKLY-SIMUL-3","qualification":"GCSE","programme":"weekly","exam_tier":"Higher","topic":"Algebra · Simultaneous equations","prompt":"Solve \\[\\begin{aligned}2x+y&=11\\\\x-y&=1\\end{aligned}\\] Show elimination or substitution.","marks":4,"difficulty":3,"minutes":6,"scheme":"M1: Eliminate y or substitute consistently.\nB1: Obtain \\(3x=12\\).\nB1: Find \\(x=4\\).\nA1: Find \\(y=3\\).\nAnswer: \\((x,y)=(4,3)\\)"},{"id":"MG-G-WEEKLY-QUAD-3","qualification":"GCSE","programme":"weekly","exam_tier":"Higher","topic":"Algebra · Quadratics","prompt":"Factorise and solve \\(x^2-10x+21=0\\). State both real roots.","marks":4,"difficulty":3,"minutes":5,"scheme":"M1: Choose two values with the correct sum and product.\nB1: Form \\((x-3)(x-7)=0\\).\nB1: Find \\(x=3\\).\nA1: Find \\(x=7\\).\nAnswer: \\(x=3\\ \\text{or}\\ x=7\\)"},{"id":"MG-G-WEEKLY-PYTH-3","qualification":"GCSE","programme":"weekly","exam_tier":"Foundation","topic":"Geometry · Pythagoras","prompt":"A right-angled triangle has perpendicular sides \\(8\\text{ cm}\\) and \\(15\\text{ cm}\\). Calculate the hypotenuse exactly, showing your working.","marks":3,"difficulty":3,"minutes":5,"scheme":"M1: Use \\(c^2=8^2+15^2\\).\nB1: Evaluate \\(c^2=289\\).\nA1: Obtain \\(17\\text{ cm}\\).\nAnswer: \\(17\\text{ cm}\\)"},{"id":"MG-G-WEEKLY-SPEED-3","qualification":"GCSE","programme":"weekly","exam_tier":"Foundation","topic":"Ratio · Compound measures","prompt":"A delivery van travels at \\(60\\text{ km/h}\\) for \\(20\\text{ minutes}\\). Calculate the distance it covers in kilometres, showing the unit conversion.","marks":3,"difficulty":3,"minutes":5,"scheme":"M1: Convert minutes to hours.\nB1: Use \\(s=vt\\) with consistent units.\nA1: Obtain \\(20\\text{ km}\\).\nAnswer: \\(20\\text{ km}\\)"},{"id":"MG-G-EXAM-BOUNDS-3","qualification":"GCSE","programme":"exam","exam_tier":"Higher","topic":"Number · Bounds","prompt":"The measured length and width of a rectangle are \\(6.7\\text{ m}\\) and \\(4.8\\text{ m}\\), each rounded to the nearest \\(0.1\\text{ m}\\). Find the exact upper bound for its area and explain your choice of bounds.","marks":5,"difficulty":4,"minutes":8,"scheme":"M1: Upper length bound \\(6.75\\text{ m}\\).\nB1: Upper width bound \\(4.85\\text{ m}\\).\nB1: Multiply the two upper bounds.\nB1: Find \\(32.7375\\text{ m}^2\\).\nA1: Explain that the actual dimensions could exceed the recorded dimensions.\nAnswer: \\(32.7375\\text{ m}^2\\)"},{"id":"MG-G-EXAM-VERTEX-3","qualification":"GCSE","programme":"exam","exam_tier":"Higher","topic":"Algebra · Completing the square","prompt":"Write \\(x^2-8x+(11)\\) in completed-square form. Find the minimum value and the value of \\(x\\) at which it occurs.","marks":5,"difficulty":4,"minutes":7,"scheme":"M1: Identify half the linear coefficient.\nB1: Complete the square and correct the constant.\nB1: Obtain \\((x-4)^2-5\\).\nB1: Recognise that the squared term is non-negative.\nA1: State minimum \\(-5\\) at \\(x=4\\).\nAnswer: \\((x-4)^2-5;\\ \\min=-5\\ \\text{at}\\ x=4\\)"},{"id":"MG-G-EXAM-COSINE-3","qualification":"GCSE","programme":"exam","exam_tier":"Higher","topic":"Trigonometry · Cosine rule","prompt":"In triangle \\(ABC\\), \\(AB=7\\text{ cm}\\), \\(AC=15\\text{ cm}\\) and \\(\\angle BAC=60^\\circ\\). Use the cosine rule to find \\(BC\\) exactly. Explain why it is appropriate.","marks":5,"difficulty":4,"minutes":8,"scheme":"M1: Recognise two sides and their included angle.\nB1: Use \\(BC^2=7^2+15^2-2(7)(15)\\cos60^\\circ\\).\nB1: Evaluate \\(BC^2=169\\).\nB1: Obtain \\(BC=13\\text{ cm}\\).\nA1: The sine rule has no known opposite side–angle pair.\nAnswer: \\(BC=13\\text{ cm}\\)"},{"id":"MG-G-EXAM-SPACE-3","qualification":"GCSE","programme":"exam","exam_tier":"Higher","topic":"Geometry · Three-dimensional Pythagoras","prompt":"A cuboid has perpendicular edges \\(6\\text{ cm}\\), \\(8\\text{ cm}\\) and \\(24\\text{ cm}\\). Find the length of the straight-line segment joining opposite vertices. Show two applications of Pythagoras.","marks":4,"difficulty":4,"minutes":8,"scheme":"M1: Find the base diagonal squared: \\(6^2+8^2=100\\).\nB1: Use a second right-angled triangle with the vertical edge.\nB1: Find total squared distance \\(676\\).\nA1: Give \\(26\\text{ cm}\\).\nAnswer: \\(26\\text{ cm}\\)"},{"id":"MG-G-DAILY-FRAC-4","qualification":"GCSE","programme":"daily","exam_tier":"Foundation","topic":"Number · Fractions","prompt":"Evaluate \\(\\frac{5}{12}+\\frac{1}{3}\\). Give your answer as a fraction in lowest terms.","marks":2,"difficulty":2,"minutes":3,"scheme":"M1: Find a common denominator.\nA1: Obtain \\(\\frac{3}{4}\\) in lowest terms.\nAnswer: \\(\\frac{3}{4}\\)"},{"id":"MG-G-DAILY-LINEAR-4","qualification":"GCSE","programme":"daily","exam_tier":"Foundation","topic":"Algebra · Linear equations","prompt":"Solve \\(2(x-2)+7=15\\). Show your intermediate equations.","marks":3,"difficulty":2,"minutes":4,"scheme":"M1: Expand or rearrange the bracket term.\nB1: Isolate x using correct inverse operations.\nA1: Obtain \\(x=6\\).\nAnswer: \\(x=6\\)"},{"id":"MG-G-DAILY-PERCENT-4","qualification":"GCSE","programme":"daily","exam_tier":"Foundation","topic":"Number · Percentages","prompt":"A school has 320 pupils. \\(25\\%\\) travel by bus. Calculate how many travel by bus.","marks":2,"difficulty":2,"minutes":3,"scheme":"M1: Convert the percentage into a fractional multiplier.\nA1: Obtain \\(80\\) pupils.\nAnswer: \\(80\\)"},{"id":"MG-G-DAILY-PROB-4","qualification":"GCSE","programme":"daily","exam_tier":"Foundation","topic":"Probability · Simple events","prompt":"A bag contains 6 red and 5 blue tokens. One token is selected at random. Find the probability that it is red, as a simplified fraction.","marks":2,"difficulty":2,"minutes":3,"scheme":"M1: Identify 6 favourable outcomes out of 11.\nA1: Obtain \\(\\frac{6}{11}\\).\nAnswer: \\(\\frac{6}{11}\\)"},{"id":"MG-G-WEEKLY-SIMUL-4","qualification":"GCSE","programme":"weekly","exam_tier":"Higher","topic":"Algebra · Simultaneous equations","prompt":"Solve \\[\\begin{aligned}2x+y&=14\\\\x-y&=1\\end{aligned}\\] Show elimination or substitution.","marks":4,"difficulty":3,"minutes":6,"scheme":"M1: Eliminate y or substitute consistently.\nB1: Obtain \\(3x=15\\).\nB1: Find \\(x=5\\).\nA1: Find \\(y=4\\).\nAnswer: \\((x,y)=(5,4)\\)"},{"id":"MG-G-WEEKLY-QUAD-4","qualification":"GCSE","programme":"weekly","exam_tier":"Higher","topic":"Algebra · Quadratics","prompt":"Factorise and solve \\(x^2-12x+32=0\\). State both real roots.","marks":4,"difficulty":3,"minutes":5,"scheme":"M1: Choose two values with the correct sum and product.\nB1: Form \\((x-4)(x-8)=0\\).\nB1: Find \\(x=4\\).\nA1: Find \\(x=8\\).\nAnswer: \\(x=4\\ \\text{or}\\ x=8\\)"},{"id":"MG-G-WEEKLY-PYTH-4","qualification":"GCSE","programme":"weekly","exam_tier":"Foundation","topic":"Geometry · Pythagoras","prompt":"A right-angled triangle has perpendicular sides \\(7\\text{ cm}\\) and \\(24\\text{ cm}\\). Calculate the hypotenuse exactly, showing your working.","marks":3,"difficulty":3,"minutes":5,"scheme":"M1: Use \\(c^2=7^2+24^2\\).\nB1: Evaluate \\(c^2=625\\).\nA1: Obtain \\(25\\text{ cm}\\).\nAnswer: \\(25\\text{ cm}\\)"},{"id":"MG-G-WEEKLY-SPEED-4","qualification":"GCSE","programme":"weekly","exam_tier":"Foundation","topic":"Ratio · Compound measures","prompt":"A delivery van travels at \\(72\\text{ km/h}\\) for \\(50\\text{ minutes}\\). Calculate the distance it covers in kilometres, showing the unit conversion.","marks":3,"difficulty":3,"minutes":5,"scheme":"M1: Convert minutes to hours.\nB1: Use \\(s=vt\\) with consistent units.\nA1: Obtain \\(60\\text{ km}\\).\nAnswer: \\(60\\text{ km}\\)"},{"id":"MG-G-EXAM-BOUNDS-4","qualification":"GCSE","programme":"exam","exam_tier":"Higher","topic":"Number · Bounds","prompt":"The measured length and width of a rectangle are \\(8.1\\text{ m}\\) and \\(2.5\\text{ m}\\), each rounded to the nearest \\(0.1\\text{ m}\\). Find the exact upper bound for its area and explain your choice of bounds.","marks":5,"difficulty":4,"minutes":8,"scheme":"M1: Upper length bound \\(8.15\\text{ m}\\).\nB1: Upper width bound \\(2.55\\text{ m}\\).\nB1: Multiply the two upper bounds.\nB1: Find \\(20.7825\\text{ m}^2\\).\nA1: Explain that the actual dimensions could exceed the recorded dimensions.\nAnswer: \\(20.7825\\text{ m}^2\\)"},{"id":"MG-G-EXAM-VERTEX-4","qualification":"GCSE","programme":"exam","exam_tier":"Higher","topic":"Algebra · Completing the square","prompt":"Write \\(x^2-10x+(19)\\) in completed-square form. Find the minimum value and the value of \\(x\\) at which it occurs.","marks":5,"difficulty":4,"minutes":7,"scheme":"M1: Identify half the linear coefficient.\nB1: Complete the square and correct the constant.\nB1: Obtain \\((x-5)^2-6\\).\nB1: Recognise that the squared term is non-negative.\nA1: State minimum \\(-6\\) at \\(x=5\\).\nAnswer: \\((x-5)^2-6;\\ \\min=-6\\ \\text{at}\\ x=5\\)"},{"id":"MG-G-EXAM-COSINE-4","qualification":"GCSE","programme":"exam","exam_tier":"Higher","topic":"Trigonometry · Cosine rule","prompt":"In triangle \\(ABC\\), \\(AB=8\\text{ cm}\\), \\(AC=15\\text{ cm}\\) and \\(\\angle BAC=60^\\circ\\). Use the cosine rule to find \\(BC\\) exactly. Explain why it is appropriate.","marks":5,"difficulty":4,"minutes":8,"scheme":"M1: Recognise two sides and their included angle.\nB1: Use \\(BC^2=8^2+15^2-2(8)(15)\\cos60^\\circ\\).\nB1: Evaluate \\(BC^2=169\\).\nB1: Obtain \\(BC=13\\text{ cm}\\).\nA1: The sine rule has no known opposite side–angle pair.\nAnswer: \\(BC=13\\text{ cm}\\)"},{"id":"MG-G-EXAM-SPACE-4","qualification":"GCSE","programme":"exam","exam_tier":"Higher","topic":"Geometry · Three-dimensional Pythagoras","prompt":"A cuboid has perpendicular edges \\(3\\text{ cm}\\), \\(6\\text{ cm}\\) and \\(2\\text{ cm}\\). Find the length of the straight-line segment joining opposite vertices. Show two applications of Pythagoras.","marks":4,"difficulty":4,"minutes":8,"scheme":"M1: Find the base diagonal squared: \\(3^2+6^2=45\\).\nB1: Use a second right-angled triangle with the vertical edge.\nB1: Find total squared distance \\(49\\).\nA1: Give \\(7\\text{ cm}\\).\nAnswer: \\(7\\text{ cm}\\)"},{"id":"MG-G-DAILY-FRAC-5","qualification":"GCSE","programme":"daily","exam_tier":"Foundation","topic":"Number · Fractions","prompt":"Evaluate \\(\\frac{2}{7}+\\frac{3}{14}\\). Give your answer as a fraction in lowest terms.","marks":2,"difficulty":2,"minutes":3,"scheme":"M1: Find a common denominator.\nA1: Obtain \\(\\frac{1}{2}\\) in lowest terms.\nAnswer: \\(\\frac{1}{2}\\)"},{"id":"MG-G-DAILY-LINEAR-5","qualification":"GCSE","programme":"daily","exam_tier":"Foundation","topic":"Algebra · Linear equations","prompt":"Solve \\(3(x-1)+8=26\\). Show your intermediate equations.","marks":3,"difficulty":2,"minutes":4,"scheme":"M1: Expand or rearrange the bracket term.\nB1: Isolate x using correct inverse operations.\nA1: Obtain \\(x=7\\).\nAnswer: \\(x=7\\)"},{"id":"MG-G-DAILY-PERCENT-5","qualification":"GCSE","programme":"daily","exam_tier":"Foundation","topic":"Number · Percentages","prompt":"A school has 275 pupils. \\(40\\%\\) travel by bus. Calculate how many travel by bus.","marks":2,"difficulty":2,"minutes":3,"scheme":"M1: Convert the percentage into a fractional multiplier.\nA1: Obtain \\(110\\) pupils.\nAnswer: \\(110\\)"},{"id":"MG-G-DAILY-PROB-5","qualification":"GCSE","programme":"daily","exam_tier":"Foundation","topic":"Probability · Simple events","prompt":"A bag contains 7 red and 6 blue tokens. One token is selected at random. Find the probability that it is red, as a simplified fraction.","marks":2,"difficulty":2,"minutes":3,"scheme":"M1: Identify 7 favourable outcomes out of 13.\nA1: Obtain \\(\\frac{7}{13}\\).\nAnswer: \\(\\frac{7}{13}\\)"},{"id":"MG-G-WEEKLY-SIMUL-5","qualification":"GCSE","programme":"weekly","exam_tier":"Higher","topic":"Algebra · Simultaneous equations","prompt":"Solve \\[\\begin{aligned}2x+y&=17\\\\x-y&=1\\end{aligned}\\] Show elimination or substitution.","marks":4,"difficulty":3,"minutes":6,"scheme":"M1: Eliminate y or substitute consistently.\nB1: Obtain \\(3x=18\\).\nB1: Find \\(x=6\\).\nA1: Find \\(y=5\\).\nAnswer: \\((x,y)=(6,5)\\)"},{"id":"MG-G-WEEKLY-QUAD-5","qualification":"GCSE","programme":"weekly","exam_tier":"Higher","topic":"Algebra · Quadratics","prompt":"Factorise and solve \\(x^2-14x+45=0\\). State both real roots.","marks":4,"difficulty":3,"minutes":5,"scheme":"M1: Choose two values with the correct sum and product.\nB1: Form \\((x-5)(x-9)=0\\).\nB1: Find \\(x=5\\).\nA1: Find \\(x=9\\).\nAnswer: \\(x=5\\ \\text{or}\\ x=9\\)"},{"id":"MG-G-WEEKLY-PYTH-5","qualification":"GCSE","programme":"weekly","exam_tier":"Foundation","topic":"Geometry · Pythagoras","prompt":"A right-angled triangle has perpendicular sides \\(9\\text{ cm}\\) and \\(12\\text{ cm}\\). Calculate the hypotenuse exactly, showing your working.","marks":3,"difficulty":3,"minutes":5,"scheme":"M1: Use \\(c^2=9^2+12^2\\).\nB1: Evaluate \\(c^2=225\\).\nA1: Obtain \\(15\\text{ cm}\\).\nAnswer: \\(15\\text{ cm}\\)"},{"id":"MG-G-WEEKLY-SPEED-5","qualification":"GCSE","programme":"weekly","exam_tier":"Foundation","topic":"Ratio · Compound measures","prompt":"A delivery van travels at \\(80\\text{ km/h}\\) for \\(15\\text{ minutes}\\). Calculate the distance it covers in kilometres, showing the unit conversion.","marks":3,"difficulty":3,"minutes":5,"scheme":"M1: Convert minutes to hours.\nB1: Use \\(s=vt\\) with consistent units.\nA1: Obtain \\(20\\text{ km}\\).\nAnswer: \\(20\\text{ km}\\)"},{"id":"MG-G-EXAM-BOUNDS-5","qualification":"GCSE","programme":"exam","exam_tier":"Higher","topic":"Number · Bounds","prompt":"The measured length and width of a rectangle are \\(3.4\\text{ m}\\) and \\(7.2\\text{ m}\\), each rounded to the nearest \\(0.1\\text{ m}\\). Find the exact upper bound for its area and explain your choice of bounds.","marks":5,"difficulty":4,"minutes":8,"scheme":"M1: Upper length bound \\(3.45\\text{ m}\\).\nB1: Upper width bound \\(7.25\\text{ m}\\).\nB1: Multiply the two upper bounds.\nB1: Find \\(25.0125\\text{ m}^2\\).\nA1: Explain that the actual dimensions could exceed the recorded dimensions.\nAnswer: \\(25.0125\\text{ m}^2\\)"},{"id":"MG-G-EXAM-VERTEX-5","qualification":"GCSE","programme":"exam","exam_tier":"Higher","topic":"Algebra · Completing the square","prompt":"Write \\(x^2-12x+(29)\\) in completed-square form. Find the minimum value and the value of \\(x\\) at which it occurs.","marks":5,"difficulty":4,"minutes":7,"scheme":"M1: Identify half the linear coefficient.\nB1: Complete the square and correct the constant.\nB1: Obtain \\((x-6)^2-7\\).\nB1: Recognise that the squared term is non-negative.\nA1: State minimum \\(-7\\) at \\(x=6\\).\nAnswer: \\((x-6)^2-7;\\ \\min=-7\\ \\text{at}\\ x=6\\)"},{"id":"MG-G-EXAM-COSINE-5","qualification":"GCSE","programme":"exam","exam_tier":"Higher","topic":"Trigonometry · Cosine rule","prompt":"In triangle \\(ABC\\), \\(AB=5\\text{ cm}\\), \\(AC=16\\text{ cm}\\) and \\(\\angle BAC=60^\\circ\\). Use the cosine rule to find \\(BC\\) exactly. Explain why it is appropriate.","marks":5,"difficulty":4,"minutes":8,"scheme":"M1: Recognise two sides and their included angle.\nB1: Use \\(BC^2=5^2+16^2-2(5)(16)\\cos60^\\circ\\).\nB1: Evaluate \\(BC^2=201\\).\nB1: Obtain \\(BC=\\sqrt{201}\\text{ cm}\\).\nA1: The sine rule has no known opposite side–angle pair.\nAnswer: \\(BC=\\sqrt{201}\\text{ cm}\\)"},{"id":"MG-G-EXAM-SPACE-5","qualification":"GCSE","programme":"exam","exam_tier":"Higher","topic":"Geometry · Three-dimensional Pythagoras","prompt":"A cuboid has perpendicular edges \\(4\\text{ cm}\\), \\(6\\text{ cm}\\) and \\(12\\text{ cm}\\). Find the length of the straight-line segment joining opposite vertices. Show two applications of Pythagoras.","marks":4,"difficulty":4,"minutes":8,"scheme":"M1: Find the base diagonal squared: \\(4^2+6^2=52\\).\nB1: Use a second right-angled triangle with the vertical edge.\nB1: Find total squared distance \\(196\\).\nA1: Give \\(14\\text{ cm}\\).\nAnswer: \\(14\\text{ cm}\\)"},{"id":"MG-I-DAILY-INDICES-1","qualification":"IGCSE","programme":"daily","exam_tier":"Core","topic":"Algebra · Index laws","prompt":"Simplify \\(\\frac{a^{3}\\times a^{4}}{a^{2}}\\), assuming \\(a\\ne 0\\). Give the result as a single power of \\(a\\).","marks":3,"difficulty":2,"minutes":4,"scheme":"M1: Add exponents when multiplying equal bases.\nB1: Subtract the denominator exponent.\nA1: Obtain \\(a^{5}\\).\nAnswer: \\(a^{5}\\)"},{"id":"MG-I-DAILY-HCF-1","qualification":"IGCSE","programme":"daily","exam_tier":"Core","topic":"Number · HCF and LCM","prompt":"Use prime factorisation to find both the highest common factor and the lowest common multiple of \\(84\\) and \\(126\\). Show enough working to justify both answers.","marks":3,"difficulty":2,"minutes":5,"scheme":"M1: Produce a correct prime factorisation or equivalent common-divisor method.\nB1: Find HCF \\(42\\).\nA1: Find LCM \\(252\\).\nAnswer: \\(\\operatorname{HCF}=42,\\quad\\operatorname{LCM}=252\\)"},{"id":"MG-I-DAILY-CYLINDER-1","qualification":"IGCSE","programme":"daily","exam_tier":"Core","topic":"Mensuration · Volume","prompt":"A right circular cylinder has radius \\(2\\text{ cm}\\) and height \\(4\\text{ cm}\\). Calculate its exact volume in terms of \\(\\pi\\), with units.","marks":3,"difficulty":2,"minutes":4,"scheme":"M1: Use \\(V=\\pi r^2 h\\).\nB1: Substitute \\(\\pi(2)^2(4)\\).\nA1: Obtain \\(16\\pi\\text{ cm}^3\\).\nAnswer: \\(16\\pi\\text{ cm}^3\\)"},{"id":"MG-I-DAILY-FREQU-1","qualification":"IGCSE","programme":"daily","exam_tier":"Core","topic":"Algebra · Equations with fractions","prompt":"Solve \\(\\frac{x+1}{2}=4\\) without using a calculator. Show how you remove the denominator.","marks":3,"difficulty":2,"minutes":4,"scheme":"M1: Multiply both sides by \\(2\\).\nB1: Rearrange \\(x+1=8\\).\nA1: Obtain \\(x=7\\).\nAnswer: \\(x=7\\)"},{"id":"MG-I-WEEKLY-ALGFR-1","qualification":"IGCSE","programme":"weekly","exam_tier":"Extended","topic":"Algebra · Algebraic fractions","prompt":"Simplify \\(\\frac{x^2-4}{x^2-2x}\\) by factorisation. State all excluded values of \\(x\\) in the original expression.","marks":4,"difficulty":3,"minutes":6,"scheme":"M1: Factor the numerator as \\((x-2)(x+2)\\).\nB1: Factor denominator as \\(x(x-2)\\).\nB1: Simplify to \\(\\frac{x+2}{x}\\).\nA1: Exclude \\(x=0\\) and \\(x=2\\).\nAnswer: \\(\\frac{x+2}{x},\\quad x\\ne 0,\\ x\\ne 2\\)"},{"id":"MG-I-WEEKLY-TRIAREA-1","qualification":"IGCSE","programme":"weekly","exam_tier":"Extended","topic":"Trigonometry · Area of a triangle","prompt":"Two sides of a triangle are \\(8\\text{ cm}\\) and \\(10\\text{ cm}\\). The angle between them is \\(30^\\circ\\). Find its exact area using trigonometry, including units.","marks":3,"difficulty":3,"minutes":6,"scheme":"M1: Use \\(A=\\frac12 ab\\sin C\\).\nB1: Substitute \\(\\frac12(8)(10)\\sin30^\\circ\\).\nA1: Find \\(20\\text{ cm}^2\\).\nAnswer: \\(20\\text{ cm}^2\\)"},{"id":"MG-I-WEEKLY-COMPOS-1","qualification":"IGCSE","programme":"weekly","exam_tier":"Extended","topic":"Functions · Compositions","prompt":"Let \\(f(x)=2x+3\\) and \\(g(x)=x^2+1\\). Simplify both \\(f(g(x))\\) and \\(g(f(x))\\), showing substitutions.","marks":4,"difficulty":3,"minutes":7,"scheme":"M1: Substitute g(x) correctly into f.\nB1: Obtain \\(f(g(x))=2x^2+5\\).\nB1: Substitute f(x) into g and expand the square.\nA1: Obtain \\(g(f(x))=4x^2+12x+10\\).\nAnswer: \\(f(g(x))=2x^2+5,\\qquad g(f(x))=4x^2+12x+10\\)"},{"id":"MG-I-WEEKLY-NOREPLACE-1","qualification":"IGCSE","programme":"weekly","exam_tier":"Extended","topic":"Probability · Without replacement","prompt":"A bag contains 4 red counters and 3 blue counters. Two counters are drawn without replacement. Find the probability that both are red, giving a simplified exact fraction. Explain why the second probability changes.","marks":4,"difficulty":3,"minutes":7,"scheme":"M1: First probability \\(\\frac{4}{7}\\).\nB1: Second probability conditional on red: \\(\\frac{1}{2}\\).\nB1: Multiply the conditional probabilities.\nA1: Obtain \\(\\frac{2}{7}\\).\nAnswer: \\(\\frac{2}{7}\\)"},{"id":"MG-I-EXAM-CIRCLE-1","qualification":"IGCSE","programme":"exam","exam_tier":"Extended","topic":"Algebra · Nonlinear simultaneous equations","prompt":"Solve simultaneously \\[\\begin{aligned}y&=x+1\\\\x^2+y^2&=13\\end{aligned}\\] Give both ordered pairs. Verify one pair in the original circle equation.","marks":6,"difficulty":4,"minutes":9,"scheme":"M1: Substitute \\(y=x+1\\) into the circle.\nB1: Obtain and simplify \\(x^2+(x+1)^2=13\\).\nB1: Find the two roots \\(x=2\\) and \\(x=-3\\).\nB1: Find corresponding y-values \\(3\\) and \\(-2\\).\nB1: State both ordered pairs.\nA1: Verify at least one by substituting to obtain \\(13\\).\nAnswer: \\((x,y)=(2,3)\\quad\\text{or}\\quad(-3,-2)\\)"},{"id":"MG-I-EXAM-RADS-1","qualification":"IGCSE","programme":"exam","exam_tier":"Extended","topic":"Surds · Rationalising denominators","prompt":"Rationalise the denominator of \\(\\frac{2}{\\sqrt{5}-1}\\). Give your answer in exact surd form and show why the denominator becomes rational.","marks":4,"difficulty":4,"minutes":8,"scheme":"M1: Multiply top and bottom by the conjugate \\(\\sqrt{5}+1\\).\nB1: Use the difference of squares to obtain denominator \\(5-1=4\\).\nB1: Distribute the numerator correctly.\nA1: Simplify to \\(\\frac{1(\\sqrt{5}+1)}{2}\\).\nAnswer: \\(\\frac{1(\\sqrt{5}+1)}{2}\\)"},{"id":"MG-I-EXAM-SEQ-1","qualification":"IGCSE","programme":"exam","exam_tier":"Extended","topic":"Sequences · Quadratic nth term","prompt":"The first four terms of a sequence are \\(6\\), \\(11\\), \\(18\\), \\(27\\). Find an expression for its \\(n\\)th term and explain how the second differences support your method.","marks":5,"difficulty":4,"minutes":9,"scheme":"M1: Find the first differences correctly.\nB1: Show second difference \\(2\\).\nB1: Deduce that the coefficient of n² is half the second difference.\nB1: Substitute initial terms to determine the linear and constant coefficients.\nA1: Obtain \\(u_n=1n^2+2n+3\\).\nAnswer: \\(u_n=1n^2+2n+3\\)"},{"id":"MG-I-EXAM-SCALE-1","qualification":"IGCSE","programme":"exam","exam_tier":"Extended","topic":"Geometry · Similar solids","prompt":"Two similar solid shapes have corresponding lengths in the ratio \\(2:3\\) (smaller : larger). The smaller solid has volume \\(16\\text{ cm}^3\\). Calculate the volume of the larger solid and explain why the length ratio must be cubed.","marks":4,"difficulty":4,"minutes":8,"scheme":"M1: Identify linear scale factor \\(\\frac{3}{2}\\).\nB1: Cube the linear scale factor for volumes.\nB1: Use \\(V_{\\text{large}}=16\\left(\\frac{3}{2}\\right)^3\\).\nA1: Obtain \\(54\\text{ cm}^3\\).\nAnswer: \\(54\\text{ cm}^3\\)"},{"id":"MG-I-DAILY-INDICES-2","qualification":"IGCSE","programme":"daily","exam_tier":"Core","topic":"Algebra · Index laws","prompt":"Simplify \\(\\frac{a^{4}\\times a^{5}}{a^{3}}\\), assuming \\(a\\ne 0\\). Give the result as a single power of \\(a\\).","marks":3,"difficulty":2,"minutes":4,"scheme":"M1: Add exponents when multiplying equal bases.\nB1: Subtract the denominator exponent.\nA1: Obtain \\(a^{6}\\).\nAnswer: \\(a^{6}\\)"},{"id":"MG-I-DAILY-HCF-2","qualification":"IGCSE","programme":"daily","exam_tier":"Core","topic":"Number · HCF and LCM","prompt":"Use prime factorisation to find both the highest common factor and the lowest common multiple of \\(48\\) and \\(72\\). Show enough working to justify both answers.","marks":3,"difficulty":2,"minutes":5,"scheme":"M1: Produce a correct prime factorisation or equivalent common-divisor method.\nB1: Find HCF \\(24\\).\nA1: Find LCM \\(144\\).\nAnswer: \\(\\operatorname{HCF}=24,\\quad\\operatorname{LCM}=144\\)"},{"id":"MG-I-DAILY-CYLINDER-2","qualification":"IGCSE","programme":"daily","exam_tier":"Core","topic":"Mensuration · Volume","prompt":"A right circular cylinder has radius \\(3\\text{ cm}\\) and height \\(5\\text{ cm}\\). Calculate its exact volume in terms of \\(\\pi\\), with units.","marks":3,"difficulty":2,"minutes":4,"scheme":"M1: Use \\(V=\\pi r^2 h\\).\nB1: Substitute \\(\\pi(3)^2(5)\\).\nA1: Obtain \\(45\\pi\\text{ cm}^3\\).\nAnswer: \\(45\\pi\\text{ cm}^3\\)"},{"id":"MG-I-DAILY-FREQU-2","qualification":"IGCSE","programme":"daily","exam_tier":"Core","topic":"Algebra · Equations with fractions","prompt":"Solve \\(\\frac{x+2}{3}=5\\) without using a calculator. Show how you remove the denominator.","marks":3,"difficulty":2,"minutes":4,"scheme":"M1: Multiply both sides by \\(3\\).\nB1: Rearrange \\(x+2=15\\).\nA1: Obtain \\(x=13\\).\nAnswer: \\(x=13\\)"},{"id":"MG-I-WEEKLY-ALGFR-2","qualification":"IGCSE","programme":"weekly","exam_tier":"Extended","topic":"Algebra · Algebraic fractions","prompt":"Simplify \\(\\frac{x^2-9}{x^2-3x}\\) by factorisation. State all excluded values of \\(x\\) in the original expression.","marks":4,"difficulty":3,"minutes":6,"scheme":"M1: Factor the numerator as \\((x-3)(x+3)\\).\nB1: Factor denominator as \\(x(x-3)\\).\nB1: Simplify to \\(\\frac{x+3}{x}\\).\nA1: Exclude \\(x=0\\) and \\(x=3\\).\nAnswer: \\(\\frac{x+3}{x},\\quad x\\ne 0,\\ x\\ne 3\\)"},{"id":"MG-I-WEEKLY-TRIAREA-2","qualification":"IGCSE","programme":"weekly","exam_tier":"Extended","topic":"Trigonometry · Area of a triangle","prompt":"Two sides of a triangle are \\(10\\text{ cm}\\) and \\(12\\text{ cm}\\). The angle between them is \\(30^\\circ\\). Find its exact area using trigonometry, including units.","marks":3,"difficulty":3,"minutes":6,"scheme":"M1: Use \\(A=\\frac12 ab\\sin C\\).\nB1: Substitute \\(\\frac12(10)(12)\\sin30^\\circ\\).\nA1: Find \\(30\\text{ cm}^2\\).\nAnswer: \\(30\\text{ cm}^2\\)"},{"id":"MG-I-WEEKLY-COMPOS-2","qualification":"IGCSE","programme":"weekly","exam_tier":"Extended","topic":"Functions · Compositions","prompt":"Let \\(f(x)=3x+4\\) and \\(g(x)=x^2+2\\). Simplify both \\(f(g(x))\\) and \\(g(f(x))\\), showing substitutions.","marks":4,"difficulty":3,"minutes":7,"scheme":"M1: Substitute g(x) correctly into f.\nB1: Obtain \\(f(g(x))=3x^2+10\\).\nB1: Substitute f(x) into g and expand the square.\nA1: Obtain \\(g(f(x))=9x^2+24x+18\\).\nAnswer: \\(f(g(x))=3x^2+10,\\qquad g(f(x))=9x^2+24x+18\\)"},{"id":"MG-I-WEEKLY-NOREPLACE-2","qualification":"IGCSE","programme":"weekly","exam_tier":"Extended","topic":"Probability · Without replacement","prompt":"A bag contains 5 red counters and 4 blue counters. Two counters are drawn without replacement. Find the probability that both are red, giving a simplified exact fraction. Explain why the second probability changes.","marks":4,"difficulty":3,"minutes":7,"scheme":"M1: First probability \\(\\frac{5}{9}\\).\nB1: Second probability conditional on red: \\(\\frac{1}{2}\\).\nB1: Multiply the conditional probabilities.\nA1: Obtain \\(\\frac{5}{18}\\).\nAnswer: \\(\\frac{5}{18}\\)"},{"id":"MG-I-EXAM-CIRCLE-2","qualification":"IGCSE","programme":"exam","exam_tier":"Extended","topic":"Algebra · Nonlinear simultaneous equations","prompt":"Solve simultaneously \\[\\begin{aligned}y&=x+2\\\\x^2+y^2&=34\\end{aligned}\\] Give both ordered pairs. Verify one pair in the original circle equation.","marks":6,"difficulty":4,"minutes":9,"scheme":"M1: Substitute \\(y=x+2\\) into the circle.\nB1: Obtain and simplify \\(x^2+(x+2)^2=34\\).\nB1: Find the two roots \\(x=3\\) and \\(x=-5\\).\nB1: Find corresponding y-values \\(5\\) and \\(-3\\).\nB1: State both ordered pairs.\nA1: Verify at least one by substituting to obtain \\(34\\).\nAnswer: \\((x,y)=(3,5)\\quad\\text{or}\\quad(-5,-3)\\)"},{"id":"MG-I-EXAM-RADS-2","qualification":"IGCSE","programme":"exam","exam_tier":"Extended","topic":"Surds · Rationalising denominators","prompt":"Rationalise the denominator of \\(\\frac{3}{\\sqrt{10}-1}\\). Give your answer in exact surd form and show why the denominator becomes rational.","marks":4,"difficulty":4,"minutes":8,"scheme":"M1: Multiply top and bottom by the conjugate \\(\\sqrt{10}+1\\).\nB1: Use the difference of squares to obtain denominator \\(10-1=9\\).\nB1: Distribute the numerator correctly.\nA1: Simplify to \\(\\frac{1(\\sqrt{10}+1)}{3}\\).\nAnswer: \\(\\frac{1(\\sqrt{10}+1)}{3}\\)"},{"id":"MG-I-EXAM-SEQ-2","qualification":"IGCSE","programme":"exam","exam_tier":"Extended","topic":"Sequences · Quadratic nth term","prompt":"The first four terms of a sequence are \\(9\\), \\(18\\), \\(31\\), \\(48\\). Find an expression for its \\(n\\)th term and explain how the second differences support your method.","marks":5,"difficulty":4,"minutes":9,"scheme":"M1: Find the first differences correctly.\nB1: Show second difference \\(4\\).\nB1: Deduce that the coefficient of n² is half the second difference.\nB1: Substitute initial terms to determine the linear and constant coefficients.\nA1: Obtain \\(u_n=2n^2+3n+4\\).\nAnswer: \\(u_n=2n^2+3n+4\\)"},{"id":"MG-I-EXAM-SCALE-2","qualification":"IGCSE","programme":"exam","exam_tier":"Extended","topic":"Geometry · Similar solids","prompt":"Two similar solid shapes have corresponding lengths in the ratio \\(3:4\\) (smaller : larger). The smaller solid has volume \\(27\\text{ cm}^3\\). Calculate the volume of the larger solid and explain why the length ratio must be cubed.","marks":4,"difficulty":4,"minutes":8,"scheme":"M1: Identify linear scale factor \\(\\frac{4}{3}\\).\nB1: Cube the linear scale factor for volumes.\nB1: Use \\(V_{\\text{large}}=27\\left(\\frac{4}{3}\\right)^3\\).\nA1: Obtain \\(64\\text{ cm}^3\\).\nAnswer: \\(64\\text{ cm}^3\\)"},{"id":"MG-I-DAILY-INDICES-3","qualification":"IGCSE","programme":"daily","exam_tier":"Core","topic":"Algebra · Index laws","prompt":"Simplify \\(\\frac{a^{5}\\times a^{6}}{a^{4}}\\), assuming \\(a\\ne 0\\). Give the result as a single power of \\(a\\).","marks":3,"difficulty":2,"minutes":4,"scheme":"M1: Add exponents when multiplying equal bases.\nB1: Subtract the denominator exponent.\nA1: Obtain \\(a^{7}\\).\nAnswer: \\(a^{7}\\)"},{"id":"MG-I-DAILY-HCF-3","qualification":"IGCSE","programme":"daily","exam_tier":"Core","topic":"Number · HCF and LCM","prompt":"Use prime factorisation to find both the highest common factor and the lowest common multiple of \\(90\\) and \\(150\\). Show enough working to justify both answers.","marks":3,"difficulty":2,"minutes":5,"scheme":"M1: Produce a correct prime factorisation or equivalent common-divisor method.\nB1: Find HCF \\(30\\).\nA1: Find LCM \\(450\\).\nAnswer: \\(\\operatorname{HCF}=30,\\quad\\operatorname{LCM}=450\\)"},{"id":"MG-I-DAILY-CYLINDER-3","qualification":"IGCSE","programme":"daily","exam_tier":"Core","topic":"Mensuration · Volume","prompt":"A right circular cylinder has radius \\(4\\text{ cm}\\) and height \\(6\\text{ cm}\\). Calculate its exact volume in terms of \\(\\pi\\), with units.","marks":3,"difficulty":2,"minutes":4,"scheme":"M1: Use \\(V=\\pi r^2 h\\).\nB1: Substitute \\(\\pi(4)^2(6)\\).\nA1: Obtain \\(96\\pi\\text{ cm}^3\\).\nAnswer: \\(96\\pi\\text{ cm}^3\\)"},{"id":"MG-I-DAILY-FREQU-3","qualification":"IGCSE","programme":"daily","exam_tier":"Core","topic":"Algebra · Equations with fractions","prompt":"Solve \\(\\frac{x+3}{4}=6\\) without using a calculator. Show how you remove the denominator.","marks":3,"difficulty":2,"minutes":4,"scheme":"M1: Multiply both sides by \\(4\\).\nB1: Rearrange \\(x+3=24\\).\nA1: Obtain \\(x=21\\).\nAnswer: \\(x=21\\)"},{"id":"MG-I-WEEKLY-ALGFR-3","qualification":"IGCSE","programme":"weekly","exam_tier":"Extended","topic":"Algebra · Algebraic fractions","prompt":"Simplify \\(\\frac{x^2-16}{x^2-4x}\\) by factorisation. State all excluded values of \\(x\\) in the original expression.","marks":4,"difficulty":3,"minutes":6,"scheme":"M1: Factor the numerator as \\((x-4)(x+4)\\).\nB1: Factor denominator as \\(x(x-4)\\).\nB1: Simplify to \\(\\frac{x+4}{x}\\).\nA1: Exclude \\(x=0\\) and \\(x=4\\).\nAnswer: \\(\\frac{x+4}{x},\\quad x\\ne 0,\\ x\\ne 4\\)"},{"id":"MG-I-WEEKLY-TRIAREA-3","qualification":"IGCSE","programme":"weekly","exam_tier":"Extended","topic":"Trigonometry · Area of a triangle","prompt":"Two sides of a triangle are \\(12\\text{ cm}\\) and \\(14\\text{ cm}\\). The angle between them is \\(30^\\circ\\). Find its exact area using trigonometry, including units.","marks":3,"difficulty":3,"minutes":6,"scheme":"M1: Use \\(A=\\frac12 ab\\sin C\\).\nB1: Substitute \\(\\frac12(12)(14)\\sin30^\\circ\\).\nA1: Find \\(42\\text{ cm}^2\\).\nAnswer: \\(42\\text{ cm}^2\\)"},{"id":"MG-I-WEEKLY-COMPOS-3","qualification":"IGCSE","programme":"weekly","exam_tier":"Extended","topic":"Functions · Compositions","prompt":"Let \\(f(x)=4x+5\\) and \\(g(x)=x^2+3\\). Simplify both \\(f(g(x))\\) and \\(g(f(x))\\), showing substitutions.","marks":4,"difficulty":3,"minutes":7,"scheme":"M1: Substitute g(x) correctly into f.\nB1: Obtain \\(f(g(x))=4x^2+17\\).\nB1: Substitute f(x) into g and expand the square.\nA1: Obtain \\(g(f(x))=16x^2+40x+28\\).\nAnswer: \\(f(g(x))=4x^2+17,\\qquad g(f(x))=16x^2+40x+28\\)"},{"id":"MG-I-WEEKLY-NOREPLACE-3","qualification":"IGCSE","programme":"weekly","exam_tier":"Extended","topic":"Probability · Without replacement","prompt":"A bag contains 6 red counters and 5 blue counters. Two counters are drawn without replacement. Find the probability that both are red, giving a simplified exact fraction. Explain why the second probability changes.","marks":4,"difficulty":3,"minutes":7,"scheme":"M1: First probability \\(\\frac{6}{11}\\).\nB1: Second probability conditional on red: \\(\\frac{1}{2}\\).\nB1: Multiply the conditional probabilities.\nA1: Obtain \\(\\frac{3}{11}\\).\nAnswer: \\(\\frac{3}{11}\\)"},{"id":"MG-I-EXAM-CIRCLE-3","qualification":"IGCSE","programme":"exam","exam_tier":"Extended","topic":"Algebra · Nonlinear simultaneous equations","prompt":"Solve simultaneously \\[\\begin{aligned}y&=x+3\\\\x^2+y^2&=65\\end{aligned}\\] Give both ordered pairs. Verify one pair in the original circle equation.","marks":6,"difficulty":4,"minutes":9,"scheme":"M1: Substitute \\(y=x+3\\) into the circle.\nB1: Obtain and simplify \\(x^2+(x+3)^2=65\\).\nB1: Find the two roots \\(x=4\\) and \\(x=-7\\).\nB1: Find corresponding y-values \\(7\\) and \\(-4\\).\nB1: State both ordered pairs.\nA1: Verify at least one by substituting to obtain \\(65\\).\nAnswer: \\((x,y)=(4,7)\\quad\\text{or}\\quad(-7,-4)\\)"},{"id":"MG-I-EXAM-RADS-3","qualification":"IGCSE","programme":"exam","exam_tier":"Extended","topic":"Surds · Rationalising denominators","prompt":"Rationalise the denominator of \\(\\frac{4}{\\sqrt{13}-2}\\). Give your answer in exact surd form and show why the denominator becomes rational.","marks":4,"difficulty":4,"minutes":8,"scheme":"M1: Multiply top and bottom by the conjugate \\(\\sqrt{13}+2\\).\nB1: Use the difference of squares to obtain denominator \\(13-4=9\\).\nB1: Distribute the numerator correctly.\nA1: Simplify to \\(\\frac{4(\\sqrt{13}+2)}{9}\\).\nAnswer: \\(\\frac{4(\\sqrt{13}+2)}{9}\\)"},{"id":"MG-I-EXAM-SEQ-3","qualification":"IGCSE","programme":"exam","exam_tier":"Extended","topic":"Sequences · Quadratic nth term","prompt":"The first four terms of a sequence are \\(12\\), \\(25\\), \\(44\\), \\(69\\). Find an expression for its \\(n\\)th term and explain how the second differences support your method.","marks":5,"difficulty":4,"minutes":9,"scheme":"M1: Find the first differences correctly.\nB1: Show second difference \\(6\\).\nB1: Deduce that the coefficient of n² is half the second difference.\nB1: Substitute initial terms to determine the linear and constant coefficients.\nA1: Obtain \\(u_n=3n^2+4n+5\\).\nAnswer: \\(u_n=3n^2+4n+5\\)"},{"id":"MG-I-EXAM-SCALE-3","qualification":"IGCSE","programme":"exam","exam_tier":"Extended","topic":"Geometry · Similar solids","prompt":"Two similar solid shapes have corresponding lengths in the ratio \\(2:5\\) (smaller : larger). The smaller solid has volume \\(8\\text{ cm}^3\\). Calculate the volume of the larger solid and explain why the length ratio must be cubed.","marks":4,"difficulty":4,"minutes":8,"scheme":"M1: Identify linear scale factor \\(\\frac{5}{2}\\).\nB1: Cube the linear scale factor for volumes.\nB1: Use \\(V_{\\text{large}}=8\\left(\\frac{5}{2}\\right)^3\\).\nA1: Obtain \\(125\\text{ cm}^3\\).\nAnswer: \\(125\\text{ cm}^3\\)"},{"id":"MG-I-DAILY-INDICES-4","qualification":"IGCSE","programme":"daily","exam_tier":"Core","topic":"Algebra · Index laws","prompt":"Simplify \\(\\frac{a^{6}\\times a^{7}}{a^{5}}\\), assuming \\(a\\ne 0\\). Give the result as a single power of \\(a\\).","marks":3,"difficulty":2,"minutes":4,"scheme":"M1: Add exponents when multiplying equal bases.\nB1: Subtract the denominator exponent.\nA1: Obtain \\(a^{8}\\).\nAnswer: \\(a^{8}\\)"},{"id":"MG-I-DAILY-HCF-4","qualification":"IGCSE","programme":"daily","exam_tier":"Core","topic":"Number · HCF and LCM","prompt":"Use prime factorisation to find both the highest common factor and the lowest common multiple of \\(96\\) and \\(144\\). Show enough working to justify both answers.","marks":3,"difficulty":2,"minutes":5,"scheme":"M1: Produce a correct prime factorisation or equivalent common-divisor method.\nB1: Find HCF \\(48\\).\nA1: Find LCM \\(288\\).\nAnswer: \\(\\operatorname{HCF}=48,\\quad\\operatorname{LCM}=288\\)"},{"id":"MG-I-DAILY-CYLINDER-4","qualification":"IGCSE","programme":"daily","exam_tier":"Core","topic":"Mensuration · Volume","prompt":"A right circular cylinder has radius \\(5\\text{ cm}\\) and height \\(7\\text{ cm}\\). Calculate its exact volume in terms of \\(\\pi\\), with units.","marks":3,"difficulty":2,"minutes":4,"scheme":"M1: Use \\(V=\\pi r^2 h\\).\nB1: Substitute \\(\\pi(5)^2(7)\\).\nA1: Obtain \\(175\\pi\\text{ cm}^3\\).\nAnswer: \\(175\\pi\\text{ cm}^3\\)"},{"id":"MG-I-DAILY-FREQU-4","qualification":"IGCSE","programme":"daily","exam_tier":"Core","topic":"Algebra · Equations with fractions","prompt":"Solve \\(\\frac{x+4}{5}=7\\) without using a calculator. Show how you remove the denominator.","marks":3,"difficulty":2,"minutes":4,"scheme":"M1: Multiply both sides by \\(5\\).\nB1: Rearrange \\(x+4=35\\).\nA1: Obtain \\(x=31\\).\nAnswer: \\(x=31\\)"},{"id":"MG-I-WEEKLY-ALGFR-4","qualification":"IGCSE","programme":"weekly","exam_tier":"Extended","topic":"Algebra · Algebraic fractions","prompt":"Simplify \\(\\frac{x^2-25}{x^2-5x}\\) by factorisation. State all excluded values of \\(x\\) in the original expression.","marks":4,"difficulty":3,"minutes":6,"scheme":"M1: Factor the numerator as \\((x-5)(x+5)\\).\nB1: Factor denominator as \\(x(x-5)\\).\nB1: Simplify to \\(\\frac{x+5}{x}\\).\nA1: Exclude \\(x=0\\) and \\(x=5\\).\nAnswer: \\(\\frac{x+5}{x},\\quad x\\ne 0,\\ x\\ne 5\\)"},{"id":"MG-I-WEEKLY-TRIAREA-4","qualification":"IGCSE","programme":"weekly","exam_tier":"Extended","topic":"Trigonometry · Area of a triangle","prompt":"Two sides of a triangle are \\(14\\text{ cm}\\) and \\(16\\text{ cm}\\). The angle between them is \\(30^\\circ\\). Find its exact area using trigonometry, including units.","marks":3,"difficulty":3,"minutes":6,"scheme":"M1: Use \\(A=\\frac12 ab\\sin C\\).\nB1: Substitute \\(\\frac12(14)(16)\\sin30^\\circ\\).\nA1: Find \\(56\\text{ cm}^2\\).\nAnswer: \\(56\\text{ cm}^2\\)"},{"id":"MG-I-WEEKLY-COMPOS-4","qualification":"IGCSE","programme":"weekly","exam_tier":"Extended","topic":"Functions · Compositions","prompt":"Let \\(f(x)=5x+6\\) and \\(g(x)=x^2+4\\). Simplify both \\(f(g(x))\\) and \\(g(f(x))\\), showing substitutions.","marks":4,"difficulty":3,"minutes":7,"scheme":"M1: Substitute g(x) correctly into f.\nB1: Obtain \\(f(g(x))=5x^2+26\\).\nB1: Substitute f(x) into g and expand the square.\nA1: Obtain \\(g(f(x))=25x^2+60x+40\\).\nAnswer: \\(f(g(x))=5x^2+26,\\qquad g(f(x))=25x^2+60x+40\\)"},{"id":"MG-I-WEEKLY-NOREPLACE-4","qualification":"IGCSE","programme":"weekly","exam_tier":"Extended","topic":"Probability · Without replacement","prompt":"A bag contains 7 red counters and 6 blue counters. Two counters are drawn without replacement. Find the probability that both are red, giving a simplified exact fraction. Explain why the second probability changes.","marks":4,"difficulty":3,"minutes":7,"scheme":"M1: First probability \\(\\frac{7}{13}\\).\nB1: Second probability conditional on red: \\(\\frac{1}{2}\\).\nB1: Multiply the conditional probabilities.\nA1: Obtain \\(\\frac{7}{26}\\).\nAnswer: \\(\\frac{7}{26}\\)"},{"id":"MG-I-EXAM-CIRCLE-4","qualification":"IGCSE","programme":"exam","exam_tier":"Extended","topic":"Algebra · Nonlinear simultaneous equations","prompt":"Solve simultaneously \\[\\begin{aligned}y&=x+4\\\\x^2+y^2&=106\\end{aligned}\\] Give both ordered pairs. Verify one pair in the original circle equation.","marks":6,"difficulty":4,"minutes":9,"scheme":"M1: Substitute \\(y=x+4\\) into the circle.\nB1: Obtain and simplify \\(x^2+(x+4)^2=106\\).\nB1: Find the two roots \\(x=5\\) and \\(x=-9\\).\nB1: Find corresponding y-values \\(9\\) and \\(-5\\).\nB1: State both ordered pairs.\nA1: Verify at least one by substituting to obtain \\(106\\).\nAnswer: \\((x,y)=(5,9)\\quad\\text{or}\\quad(-9,-5)\\)"},{"id":"MG-I-EXAM-RADS-4","qualification":"IGCSE","programme":"exam","exam_tier":"Extended","topic":"Surds · Rationalising denominators","prompt":"Rationalise the denominator of \\(\\frac{5}{\\sqrt{7}-1}\\). Give your answer in exact surd form and show why the denominator becomes rational.","marks":4,"difficulty":4,"minutes":8,"scheme":"M1: Multiply top and bottom by the conjugate \\(\\sqrt{7}+1\\).\nB1: Use the difference of squares to obtain denominator \\(7-1=6\\).\nB1: Distribute the numerator correctly.\nA1: Simplify to \\(\\frac{5(\\sqrt{7}+1)}{6}\\).\nAnswer: \\(\\frac{5(\\sqrt{7}+1)}{6}\\)"},{"id":"MG-I-EXAM-SEQ-4","qualification":"IGCSE","programme":"exam","exam_tier":"Extended","topic":"Sequences · Quadratic nth term","prompt":"The first four terms of a sequence are \\(15\\), \\(32\\), \\(57\\), \\(90\\). Find an expression for its \\(n\\)th term and explain how the second differences support your method.","marks":5,"difficulty":4,"minutes":9,"scheme":"M1: Find the first differences correctly.\nB1: Show second difference \\(8\\).\nB1: Deduce that the coefficient of n² is half the second difference.\nB1: Substitute initial terms to determine the linear and constant coefficients.\nA1: Obtain \\(u_n=4n^2+5n+6\\).\nAnswer: \\(u_n=4n^2+5n+6\\)"},{"id":"MG-I-EXAM-SCALE-4","qualification":"IGCSE","programme":"exam","exam_tier":"Extended","topic":"Geometry · Similar solids","prompt":"Two similar solid shapes have corresponding lengths in the ratio \\(3:5\\) (smaller : larger). The smaller solid has volume \\(27\\text{ cm}^3\\). Calculate the volume of the larger solid and explain why the length ratio must be cubed.","marks":4,"difficulty":4,"minutes":8,"scheme":"M1: Identify linear scale factor \\(\\frac{5}{3}\\).\nB1: Cube the linear scale factor for volumes.\nB1: Use \\(V_{\\text{large}}=27\\left(\\frac{5}{3}\\right)^3\\).\nA1: Obtain \\(125\\text{ cm}^3\\).\nAnswer: \\(125\\text{ cm}^3\\)"},{"id":"MG-I-DAILY-INDICES-5","qualification":"IGCSE","programme":"daily","exam_tier":"Core","topic":"Algebra · Index laws","prompt":"Simplify \\(\\frac{a^{7}\\times a^{8}}{a^{6}}\\), assuming \\(a\\ne 0\\). Give the result as a single power of \\(a\\).","marks":3,"difficulty":2,"minutes":4,"scheme":"M1: Add exponents when multiplying equal bases.\nB1: Subtract the denominator exponent.\nA1: Obtain \\(a^{9}\\).\nAnswer: \\(a^{9}\\)"},{"id":"MG-I-DAILY-HCF-5","qualification":"IGCSE","programme":"daily","exam_tier":"Core","topic":"Number · HCF and LCM","prompt":"Use prime factorisation to find both the highest common factor and the lowest common multiple of \\(75\\) and \\(105\\). Show enough working to justify both answers.","marks":3,"difficulty":2,"minutes":5,"scheme":"M1: Produce a correct prime factorisation or equivalent common-divisor method.\nB1: Find HCF \\(15\\).\nA1: Find LCM \\(525\\).\nAnswer: \\(\\operatorname{HCF}=15,\\quad\\operatorname{LCM}=525\\)"},{"id":"MG-I-DAILY-CYLINDER-5","qualification":"IGCSE","programme":"daily","exam_tier":"Core","topic":"Mensuration · Volume","prompt":"A right circular cylinder has radius \\(6\\text{ cm}\\) and height \\(8\\text{ cm}\\). Calculate its exact volume in terms of \\(\\pi\\), with units.","marks":3,"difficulty":2,"minutes":4,"scheme":"M1: Use \\(V=\\pi r^2 h\\).\nB1: Substitute \\(\\pi(6)^2(8)\\).\nA1: Obtain \\(288\\pi\\text{ cm}^3\\).\nAnswer: \\(288\\pi\\text{ cm}^3\\)"},{"id":"MG-I-DAILY-FREQU-5","qualification":"IGCSE","programme":"daily","exam_tier":"Core","topic":"Algebra · Equations with fractions","prompt":"Solve \\(\\frac{x+5}{6}=8\\) without using a calculator. Show how you remove the denominator.","marks":3,"difficulty":2,"minutes":4,"scheme":"M1: Multiply both sides by \\(6\\).\nB1: Rearrange \\(x+5=48\\).\nA1: Obtain \\(x=43\\).\nAnswer: \\(x=43\\)"},{"id":"MG-I-WEEKLY-ALGFR-5","qualification":"IGCSE","programme":"weekly","exam_tier":"Extended","topic":"Algebra · Algebraic fractions","prompt":"Simplify \\(\\frac{x^2-36}{x^2-6x}\\) by factorisation. State all excluded values of \\(x\\) in the original expression.","marks":4,"difficulty":3,"minutes":6,"scheme":"M1: Factor the numerator as \\((x-6)(x+6)\\).\nB1: Factor denominator as \\(x(x-6)\\).\nB1: Simplify to \\(\\frac{x+6}{x}\\).\nA1: Exclude \\(x=0\\) and \\(x=6\\).\nAnswer: \\(\\frac{x+6}{x},\\quad x\\ne 0,\\ x\\ne 6\\)"},{"id":"MG-I-WEEKLY-TRIAREA-5","qualification":"IGCSE","programme":"weekly","exam_tier":"Extended","topic":"Trigonometry · Area of a triangle","prompt":"Two sides of a triangle are \\(16\\text{ cm}\\) and \\(18\\text{ cm}\\). The angle between them is \\(30^\\circ\\). Find its exact area using trigonometry, including units.","marks":3,"difficulty":3,"minutes":6,"scheme":"M1: Use \\(A=\\frac12 ab\\sin C\\).\nB1: Substitute \\(\\frac12(16)(18)\\sin30^\\circ\\).\nA1: Find \\(72\\text{ cm}^2\\).\nAnswer: \\(72\\text{ cm}^2\\)"},{"id":"MG-I-WEEKLY-COMPOS-5","qualification":"IGCSE","programme":"weekly","exam_tier":"Extended","topic":"Functions · Compositions","prompt":"Let \\(f(x)=6x+7\\) and \\(g(x)=x^2+5\\). Simplify both \\(f(g(x))\\) and \\(g(f(x))\\), showing substitutions.","marks":4,"difficulty":3,"minutes":7,"scheme":"M1: Substitute g(x) correctly into f.\nB1: Obtain \\(f(g(x))=6x^2+37\\).\nB1: Substitute f(x) into g and expand the square.\nA1: Obtain \\(g(f(x))=36x^2+84x+54\\).\nAnswer: \\(f(g(x))=6x^2+37,\\qquad g(f(x))=36x^2+84x+54\\)"},{"id":"MG-I-WEEKLY-NOREPLACE-5","qualification":"IGCSE","programme":"weekly","exam_tier":"Extended","topic":"Probability · Without replacement","prompt":"A bag contains 8 red counters and 7 blue counters. Two counters are drawn without replacement. Find the probability that both are red, giving a simplified exact fraction. Explain why the second probability changes.","marks":4,"difficulty":3,"minutes":7,"scheme":"M1: First probability \\(\\frac{8}{15}\\).\nB1: Second probability conditional on red: \\(\\frac{1}{2}\\).\nB1: Multiply the conditional probabilities.\nA1: Obtain \\(\\frac{4}{15}\\).\nAnswer: \\(\\frac{4}{15}\\)"},{"id":"MG-I-EXAM-CIRCLE-5","qualification":"IGCSE","programme":"exam","exam_tier":"Extended","topic":"Algebra · Nonlinear simultaneous equations","prompt":"Solve simultaneously \\[\\begin{aligned}y&=x+5\\\\x^2+y^2&=157\\end{aligned}\\] Give both ordered pairs. Verify one pair in the original circle equation.","marks":6,"difficulty":4,"minutes":9,"scheme":"M1: Substitute \\(y=x+5\\) into the circle.\nB1: Obtain and simplify \\(x^2+(x+5)^2=157\\).\nB1: Find the two roots \\(x=6\\) and \\(x=-11\\).\nB1: Find corresponding y-values \\(11\\) and \\(-6\\).\nB1: State both ordered pairs.\nA1: Verify at least one by substituting to obtain \\(157\\).\nAnswer: \\((x,y)=(6,11)\\quad\\text{or}\\quad(-11,-6)\\)"},{"id":"MG-I-EXAM-RADS-5","qualification":"IGCSE","programme":"exam","exam_tier":"Extended","topic":"Surds · Rationalising denominators","prompt":"Rationalise the denominator of \\(\\frac{6}{\\sqrt{17}-1}\\). Give your answer in exact surd form and show why the denominator becomes rational.","marks":4,"difficulty":4,"minutes":8,"scheme":"M1: Multiply top and bottom by the conjugate \\(\\sqrt{17}+1\\).\nB1: Use the difference of squares to obtain denominator \\(17-1=16\\).\nB1: Distribute the numerator correctly.\nA1: Simplify to \\(\\frac{3(\\sqrt{17}+1)}{8}\\).\nAnswer: \\(\\frac{3(\\sqrt{17}+1)}{8}\\)"},{"id":"MG-I-EXAM-SEQ-5","qualification":"IGCSE","programme":"exam","exam_tier":"Extended","topic":"Sequences · Quadratic nth term","prompt":"The first four terms of a sequence are \\(18\\), \\(39\\), \\(70\\), \\(111\\). Find an expression for its \\(n\\)th term and explain how the second differences support your method.","marks":5,"difficulty":4,"minutes":9,"scheme":"M1: Find the first differences correctly.\nB1: Show second difference \\(10\\).\nB1: Deduce that the coefficient of n² is half the second difference.\nB1: Substitute initial terms to determine the linear and constant coefficients.\nA1: Obtain \\(u_n=5n^2+6n+7\\).\nAnswer: \\(u_n=5n^2+6n+7\\)"},{"id":"MG-I-EXAM-SCALE-5","qualification":"IGCSE","programme":"exam","exam_tier":"Extended","topic":"Geometry · Similar solids","prompt":"Two similar solid shapes have corresponding lengths in the ratio \\(4:5\\) (smaller : larger). The smaller solid has volume \\(64\\text{ cm}^3\\). Calculate the volume of the larger solid and explain why the length ratio must be cubed.","marks":4,"difficulty":4,"minutes":8,"scheme":"M1: Identify linear scale factor \\(\\frac{5}{4}\\).\nB1: Cube the linear scale factor for volumes.\nB1: Use \\(V_{\\text{large}}=64\\left(\\frac{5}{4}\\right)^3\\).\nA1: Obtain \\(125\\text{ cm}^3\\).\nAnswer: \\(125\\text{ cm}^3\\)"}]$content$::jsonb) LOOP
  v_id:=entry->>'id';
  IF EXISTS(SELECT 1 FROM public.practice_content_index WHERE source_id=v_id) THEN CONTINUE;END IF;
  INSERT INTO public.question_bank(qualification,topic,prompt,marks,difficulty,active)
  VALUES(entry->>'qualification',entry->>'topic',entry->>'prompt',
   (entry->>'marks')::integer,(entry->>'difficulty')::integer,true)
  RETURNING id INTO v_q;
  INSERT INTO public.mark_schemes(question_id,scheme) VALUES(v_q,entry->>'scheme');
  INSERT INTO public.question_editorial
  (question_id,owner_org,board_key,exam_tier,suggested_seconds,review_status,editorial_note)
  VALUES(v_q,NULL,'',entry->>'exam_tier',(entry->>'minutes')::integer*60,
    'legacy_unmapped','PUBLIC practice: verified answer arithmetic and marking outline; board-specific editorial review still required; never use as unseen mock.')
  ON CONFLICT(question_id) DO NOTHING;
  INSERT INTO public.practice_content_index(source_id,question_id,qualification,programme,exam_tier)
  VALUES(v_id,v_q,entry->>'qualification',entry->>'programme',entry->>'exam_tier');
  v_n:=v_n+1;
 END LOOP;
 RAISE NOTICE 'Imported % new open practice questions',v_n;
END $import$;

-- Server validates the three service-tier allocations and academic level.
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
 if p_mode not in ('daily','weekly','topic','exam_practice') or
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
 if p_mode='exam_practice' and v_tier<>'exam' then
   raise exception 'Exam preparation questions require Grove Exam';
 end if;
 if p_mode='exam_practice' and
   (select count(*) from public.attempts a where a.student_id=v_user
    and a.paper_mode='exam_practice' and a.started_at>=date_trunc('month',now()))>=2 then
    raise exception 'Your monthly Exam preparation allocation has been used';
 end if;
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
    and (
      (not exists(select 1 from public.practice_content_index pci where pci.question_id=q.id)
       and p_mode in ('weekly','topic'))
      or exists (
        select 1 from public.practice_content_index pci
        join public.student_preferences pp on pp.student_id=v_user
        where pci.question_id=q.id
        and pci.programme=case when p_mode='topic' then 'weekly' when p_mode='exam_practice' then 'exam' else p_mode end
        and (
          lower(trim(pci.exam_tier))=lower(trim(pp.tier))
          or (pp.qualification='GCSE' and lower(trim(pp.tier))='higher' and pci.exam_tier='Foundation')
          or (pp.qualification='IGCSE' and lower(trim(pp.tier))='extended' and pci.exam_tier='Core')
        )
      )
    )
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


COMMIT;
