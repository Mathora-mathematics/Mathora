-- 2026-11-01: prevent Cambridge Further Mathematics 9231 items from
-- matching an ordinary Cambridge 9709 student-board preference.
-- This is a routing-only function change; no student or assignment rows change.
BEGIN;
CREATE OR REPLACE FUNCTION private.grove_board_compatible(p_item_board text,p_student_board text)
RETURNS boolean LANGUAGE plpgsql IMMUTABLE SECURITY INVOKER SET search_path=''
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
 -- Further 9231 is not interchangeable with ordinary Mathematics 9709.
 IF b LIKE '%9231%' THEN RETURN s LIKE '%9231%'; END IF;
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
COMMIT;
