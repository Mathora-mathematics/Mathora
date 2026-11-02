-- Exact Cambridge Further Pure 2 component gate. No student record changes.
BEGIN;
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
 IF b LIKE '%9709%' THEN RETURN s LIKE '%9709%'; END IF;
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
COMMIT;