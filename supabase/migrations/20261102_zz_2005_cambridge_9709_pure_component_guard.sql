-- MathsGrove QA 2026-11-02 20:05 Kuwait: Cambridge 9709 P1/P2/P3 component gate.
-- Original 9709 specification 2026-27: https://www.cambridgeinternational.org/Images/697427-2026-2027-syllabus.pdf
-- All 24 active, approved generic 9709 practice items were inspected by topic and syllabus objective:
-- AS items are P1 (15); A2 items are P3 (9). No such bank items are assigned to students.
-- No question stems, keys, approvals, submissions, marks, evidence, subscriptions or student rows change.
-- Keep all other live routing branches exactly as in the production function.
CREATE OR REPLACE FUNCTION private.grove_board_compatible(p_item_board text, p_student_board text)
 RETURNS boolean
 LANGUAGE plpgsql
 IMMUTABLE
 SET search_path TO ''
AS $function$
DECLARE b text:=lower(trim(coalesce(p_item_board,'')));
        s text:=lower(trim(coalesce(p_student_board,'')));
BEGIN
 IF b IN('','all','generic','cross-board') THEN RETURN true; END IF;
 IF s='' THEN RETURN false; END IF;
 IF b LIKE '%9709%' AND (b LIKE '%p6%' OR b LIKE '%statistics 2%') THEN
   RETURN s LIKE '%9709%' AND (s LIKE '%p6%' OR s LIKE '%statistics 2%');
 END IF;
 IF b LIKE '%9709%' AND (b LIKE '%p5%' OR b LIKE '%statistics 1%') THEN
   RETURN s LIKE '%9709%' AND (s LIKE '%p5%' OR s LIKE '%statistics 1%');
 END IF;
 IF b LIKE '%wma14%' THEN
   RETURN s LIKE '%wma14%' OR (s LIKE '%ial%' AND s LIKE '%p4%');
 END IF;
 IF b LIKE '%wme01%' THEN
   RETURN s LIKE '%wme01%' OR (s LIKE '%ial%' AND (s LIKE '%m1%' OR s LIKE '%mechanics 1%'));
 END IF;
 IF b LIKE '%wme02%' THEN
   RETURN s LIKE '%wme02%' OR (s LIKE '%ial%' AND (s LIKE '%m2%' OR s LIKE '%mechanics 2%'));
 END IF;
 IF b LIKE '%wst01%' THEN
   RETURN s LIKE '%wst01%' OR (s LIKE '%ial%' AND (s LIKE '%s1%' OR s LIKE '%statistics 1%'));
 END IF;
 IF b LIKE '%wst02%' THEN
   RETURN s LIKE '%wst02%' OR (s LIKE '%ial%' AND (s LIKE '%s2%' OR s LIKE '%statistics 2%'));
 END IF;
 IF b LIKE '%wma13%' THEN RETURN s LIKE '%wma13%'; END IF;
 IF b LIKE '%9fm0%' AND (b LIKE '%4b%' OR b LIKE '%further statistics 2%') THEN
   RETURN s LIKE '%9fm0%' AND (s LIKE '%4b%' OR s LIKE '%further statistics 2%');
 END IF;
 IF b LIKE '%9fm0%' THEN RETURN s LIKE '%9fm0%'; END IF;
 IF b LIKE '%9ma0%' THEN RETURN s LIKE '%9ma0%'; END IF;
 IF b LIKE '%wma11%' THEN RETURN s LIKE '%wma11%'; END IF;
 IF b LIKE '%wma12%' THEN RETURN s LIKE '%wma12%'; END IF;
 IF b LIKE '%ial%' THEN RETURN s LIKE '%ial%' OR s LIKE '%wma11%' OR s LIKE '%xma01%' OR s LIKE '%yma01%'; END IF;
 IF b LIKE '%9709%' AND (b LIKE '%p4%' OR b LIKE '%mechanics%') THEN
   RETURN s LIKE '%9709%' AND (s LIKE '%p4%' OR s LIKE '%mechanics%');
 END IF;
 -- Explicit Cambridge 9709 Pure Mathematics components; do not mix P1/P2/P3 with Mechanics or Statistics.
 IF b LIKE '%9709%' AND (b LIKE '%p1%' OR b LIKE '%pure mathematics 1%') THEN
   RETURN s LIKE '%9709%' AND (s LIKE '%p1%' OR s LIKE '%pure mathematics 1%');
 END IF;
 IF b LIKE '%9709%' AND (b LIKE '%p2%' OR b LIKE '%pure mathematics 2%') THEN
   RETURN s LIKE '%9709%' AND (s LIKE '%p2%' OR s LIKE '%pure mathematics 2%');
 END IF;
 IF b LIKE '%9709%' AND (b LIKE '%p3%' OR b LIKE '%pure mathematics 3%') THEN
   RETURN s LIKE '%9709%' AND (s LIKE '%p3%' OR s LIKE '%pure mathematics 3%');
 END IF;
 -- A generic 9709 label has no verifiable component. Fail closed until editorially classified.
 IF b LIKE '%9709%' THEN RETURN false; END IF;
 -- Paper 2 is A Level only; a generic 9231 preference does not prove P2 enrolment.
 IF b LIKE '%9231%' AND (b LIKE '%p2%' OR b LIKE '%further pure 2%') THEN
   RETURN s LIKE '%9231%' AND (s LIKE '%p2%' OR s LIKE '%further pure 2%');
 END IF;
 IF b LIKE '%9231%' THEN RETURN s LIKE '%9231%'; END IF;
 IF b LIKE '%0580%' THEN RETURN s LIKE '%0580%' AND (s LIKE '%cambridge%' OR s LIKE '%cie%' OR s='0580'); END IF;
 IF b LIKE '%1ma1%' THEN RETURN s LIKE '%1ma1%' AND (s LIKE '%pearson%' OR s LIKE '%edexcel%' OR s='1ma1'); END IF;
 IF b LIKE '%4ma1%' THEN RETURN s LIKE '%4ma1%' AND (s LIKE '%pearson%' OR s LIKE '%edexcel%' OR s='4ma1'); END IF;
 IF b LIKE '%4wm%' THEN RETURN s LIKE '%4wm%'; END IF;
 IF b LIKE '%ib%' OR b LIKE '%baccalaureate%' THEN RETURN s LIKE '%ib%' OR s LIKE '%baccalaureate%'; END IF;
 IF b LIKE '%aqa%' THEN RETURN s LIKE '%aqa%'; END IF;
 IF b LIKE '%edexcel%' OR b LIKE '%pearson%' THEN RETURN s LIKE '%edexcel%' OR s LIKE '%pearson%'; END IF;
 IF b LIKE '%cambridge%' OR b LIKE '%cie%' THEN RETURN s LIKE '%cambridge%' OR s LIKE '%cie%'; END IF;
 IF b LIKE '%ocr%' THEN RETURN s LIKE '%ocr%'; END IF;
 RETURN b=s;
END;$function$
;
-- Reclassify verified existing PURE component bank metadata, not their mathematical content.
UPDATE private.grove_practice_bank b
SET exam_board=CASE WHEN b.academic_level='as' THEN 'Cambridge 9709 P1 Pure Mathematics 1'
                    WHEN b.academic_level='a2' THEN 'Cambridge 9709 P3 Pure Mathematics 3' END,
    reviewer_note=concat_ws(' | ',NULLIF(b.reviewer_note,''),'2026-11-02 independent QA: exact Cambridge 9709 Pure component metadata (AS=P1; A2=P3); no question/approval mutation')
WHERE b.exam_board='Cambridge 9709' AND b.qualification='A_LEVEL'
  AND b.academic_level IN ('as','a2') AND b.active AND b.review_state='approved'
  AND NOT EXISTS(SELECT 1 FROM private.grove_task_items i WHERE i.bank_id=b.id);
DO $verify$
DECLARE bad integer;
BEGIN
 IF private.grove_board_compatible('Cambridge 9709 P1 Pure Mathematics 1','Cambridge 9709 P1 Pure Mathematics 1') IS DISTINCT FROM true THEN RAISE EXCEPTION 'P1 same-component route failed'; END IF;
 IF private.grove_board_compatible('Cambridge 9709 P1 Pure Mathematics 1','Cambridge 9709 P4 Mechanics') IS DISTINCT FROM false THEN RAISE EXCEPTION 'P1 to P4 leak'; END IF;
 IF private.grove_board_compatible('Cambridge 9709 P1 Pure Mathematics 1','Cambridge 9709 P5 Statistics 1') IS DISTINCT FROM false THEN RAISE EXCEPTION 'P1 to P5 leak'; END IF;
 IF private.grove_board_compatible('Cambridge 9709 P1 Pure Mathematics 1','Cambridge 9709 P3 Pure Mathematics 3') IS DISTINCT FROM false THEN RAISE EXCEPTION 'P1 to P3 leak'; END IF;
 IF private.grove_board_compatible('Cambridge 9709 P2 Pure Mathematics 2','Cambridge 9709 P2 Pure Mathematics 2') IS DISTINCT FROM true THEN RAISE EXCEPTION 'P2 same-component route failed'; END IF;
 IF private.grove_board_compatible('Cambridge 9709 P2 Pure Mathematics 2','Cambridge 9709 P1 Pure Mathematics 1') IS DISTINCT FROM false THEN RAISE EXCEPTION 'P2 to P1 leak'; END IF;
 IF private.grove_board_compatible('Cambridge 9709 P3 Pure Mathematics 3','Cambridge 9709 P3 Pure Mathematics 3') IS DISTINCT FROM true THEN RAISE EXCEPTION 'P3 same-component route failed'; END IF;
 IF private.grove_board_compatible('Cambridge 9709 P3 Pure Mathematics 3','Cambridge 9709 P4 Mechanics') IS DISTINCT FROM false THEN RAISE EXCEPTION 'P3 to P4 leak'; END IF;
 IF private.grove_board_compatible('Cambridge 9709','Cambridge 9709 P4 Mechanics') IS DISTINCT FROM false THEN RAISE EXCEPTION 'Generic 9709 to P4 leak'; END IF;
 IF private.grove_board_compatible('Cambridge 9709','Cambridge 9709 P1 Pure Mathematics 1') IS DISTINCT FROM false THEN RAISE EXCEPTION 'Generic 9709 to P1 leak'; END IF;
 IF private.grove_board_compatible('Cambridge 9709 P4 Mechanics','Cambridge 9709 P4 Mechanics') IS DISTINCT FROM true THEN RAISE EXCEPTION 'P4 route regression'; END IF;
 IF private.grove_board_compatible('Cambridge 9709 P5 Statistics 1','Cambridge 9709 P5 Statistics 1') IS DISTINCT FROM true THEN RAISE EXCEPTION 'P5 route regression'; END IF;
 IF private.grove_board_compatible('Cambridge 9709 P6 Statistics 2','Cambridge 9709 P6 Statistics 2') IS DISTINCT FROM true THEN RAISE EXCEPTION 'P6 route regression'; END IF;
 IF private.grove_board_compatible('Pearson Edexcel IAL WMA11 P1','Pearson Edexcel IAL WMA12 P2') IS DISTINCT FROM false THEN RAISE EXCEPTION 'Pearson P1 to P2 regression'; END IF;
 IF private.grove_board_compatible('Cambridge IGCSE 0580 Extended','Cambridge IGCSE 0607') IS DISTINCT FROM false THEN RAISE EXCEPTION '0580 to 0607 regression'; END IF;
 IF private.grove_board_compatible('Cambridge 9231 P2 Further Pure 2','Cambridge 9231') IS DISTINCT FROM false THEN RAISE EXCEPTION '9231 P2 to generic regression'; END IF;
 SELECT count(*) INTO bad FROM private.grove_practice_bank WHERE qualification='A_LEVEL' AND exam_board='Cambridge 9709' AND active AND review_state='approved';
 IF bad<>0 THEN RAISE EXCEPTION 'Unclassified active Cambridge 9709 Pure questions remain: %',bad; END IF;
END;$verify$;
