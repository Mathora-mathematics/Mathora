-- 2026-11-01: IAL WMA11 P1 content previously matched any board containing "IAL".
-- Preserve generic IAL behaviour while requiring exact P1 code for WMA11-specific questions.
-- No student, assignment, or question rows are changed.
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
 IF b IN('','all','generic','cross-board') THEN RETURN true;END IF;
 IF s='' THEN RETURN false;END IF;
 -- A generic "Pearson" setting must not select UK GCE 9MA0 in place of IAL units.
 IF b LIKE '%9ma0%' THEN RETURN s LIKE '%9ma0%';END IF;
 -- A P1-specific item must never be assigned to an IAL P2/M1/S1 route.
 IF b LIKE '%wma11%' THEN RETURN s LIKE '%wma11%';END IF;
 IF b LIKE '%ial%' THEN
   RETURN s LIKE '%ial%' OR s LIKE '%wma11%' OR s LIKE '%xma01%' OR s LIKE '%yma01%';
 END IF;
 IF b LIKE '%9709%' THEN RETURN s LIKE '%9709%';END IF;
 -- Preserve previous behaviour for all other existing qualification pathways.
 IF b LIKE '%aqa%' THEN RETURN s LIKE '%aqa%';END IF;
 IF b LIKE '%edexcel%' OR b LIKE '%pearson%' THEN RETURN (s LIKE '%edexcel%' OR s LIKE '%pearson%');END IF;
 IF b LIKE '%cambridge%' OR b LIKE '%cie%' THEN RETURN (s LIKE '%cambridge%' OR s LIKE '%cie%');END IF;
 IF b LIKE '%ocr%' THEN RETURN s LIKE '%ocr%';END IF;
 IF b LIKE '%ib%' THEN RETURN s LIKE '%ib%';END IF;
 RETURN b=s;
END;$function$
;
COMMIT;
