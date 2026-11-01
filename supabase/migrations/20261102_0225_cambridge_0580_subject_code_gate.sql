-- MathsGrove: Cambridge IGCSE Mathematics 0580 is not interchangeable with
-- Cambridge International Mathematics 0607 or other Cambridge syllabuses.
-- No learner, task, grade, mark, or question-bank rows are changed.
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
 IF b LIKE '%9ma0%' THEN RETURN s LIKE '%9ma0%'; END IF;
 IF b LIKE '%wma11%' THEN RETURN s LIKE '%wma11%'; END IF;
 IF b LIKE '%ial%' THEN
   RETURN s LIKE '%ial%' OR s LIKE '%wma11%' OR s LIKE '%xma01%' OR s LIKE '%yma01%';
 END IF;
 IF b LIKE '%9709%' THEN RETURN s LIKE '%9709%'; END IF;
 IF b LIKE '%9231%' THEN RETURN s LIKE '%9231%'; END IF;
 -- The subject code is essential: matching the Cambridge publisher alone
 -- wrongly sends 0580 questions to Cambridge 0607 learners.
 IF b LIKE '%0580%' THEN
   RETURN s LIKE '%0580%'
     AND (s LIKE '%cambridge%' OR s LIKE '%cie%' OR s='0580');
 END IF;
 IF b LIKE '%ib%' OR b LIKE '%baccalaureate%' THEN
   RETURN s LIKE '%ib%' OR s LIKE '%baccalaureate%';
 END IF;
 IF b LIKE '%aqa%' THEN RETURN s LIKE '%aqa%'; END IF;
 IF b LIKE '%edexcel%' OR b LIKE '%pearson%' THEN
   RETURN s LIKE '%edexcel%' OR s LIKE '%pearson%';
 END IF;
 IF b LIKE '%cambridge%' OR b LIKE '%cie%' THEN
   RETURN s LIKE '%cambridge%' OR s LIKE '%cie%';
 END IF;
 IF b LIKE '%ocr%' THEN RETURN s LIKE '%ocr%'; END IF;
 RETURN b=s;
END;$function$;
