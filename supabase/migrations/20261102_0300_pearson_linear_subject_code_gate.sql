-- MathsGrove 2026-11-02: prevent linear Pearson GCSE 1MA1 / IGCSE 4MA1
-- questions from matching unrelated Pearson qualifications or modular 4WM routes.
-- Function-only routing change; no student, submission, task, or marking data modified.
CREATE OR REPLACE FUNCTION private.grove_board_compatible(p_item_board text,p_student_board text)
RETURNS boolean LANGUAGE plpgsql IMMUTABLE SET search_path=''
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
 IF b LIKE '%0580%' THEN
   RETURN s LIKE '%0580%'
     AND (s LIKE '%cambridge%' OR s LIKE '%cie%' OR s='0580');
 END IF;
 -- GCSE 1MA1 is not IGCSE 4MA1, IGCSE modular 4WM, or A Level 9MA0.
 IF b LIKE '%1ma1%' THEN
   RETURN s LIKE '%1ma1%' AND (s LIKE '%pearson%' OR s LIKE '%edexcel%' OR s='1ma1');
 END IF;
 -- Linear International GCSE 4MA1 must never match modular 4WM.
 IF b LIKE '%4ma1%' THEN
   RETURN s LIKE '%4ma1%' AND (s LIKE '%pearson%' OR s LIKE '%edexcel%' OR s='4ma1');
 END IF;
 IF b LIKE '%4wm%' THEN RETURN s LIKE '%4wm%'; END IF;
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
