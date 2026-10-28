-- MathsGrove content studio, phase 1: private question moderation.
-- Run only after UPGRADE_MATHSGROVE_ADMIN.sql. Do not run without a backup.
-- No secret questions or answers are placed in the public static website.
BEGIN;
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
   AND ((qe.owner_org IS NULL AND question_bank.active)
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

-- Moderation controls whether a custom question enters live daily/weekly
-- selection. Existing historical answers are retained when an item is unpublished.
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
 UPDATE public.question_bank SET active=(p_status='approved') WHERE id=p_question;
 RETURN jsonb_build_object('ok',true,'status',p_status);
END;$$;
REVOKE ALL ON FUNCTION public.moderate_bank_question(uuid,text,text) FROM public,anon;
GRANT EXECUTE ON FUNCTION public.moderate_bank_question(uuid,text,text) TO authenticated;

-- No published session timer is implemented in this migration. A later phase
-- must enforce time limits server-side for answers, uploads and submissions.
COMMIT;
