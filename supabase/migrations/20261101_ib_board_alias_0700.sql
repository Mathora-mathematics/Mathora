BEGIN;
-- IB exam-board aliases: preserve existing GCSE/IGCSE/A Level matching.
-- Only a function definition changes; no student, task or submission rows are modified.
CREATE OR REPLACE FUNCTION private.grove_board_compatible(p_item_board text,p_student_board text)
RETURNS boolean LANGUAGE plpgsql IMMUTABLE SECURITY INVOKER SET search_path='' AS $$
DECLARE b text:=lower(trim(coalesce(p_item_board,'')));
        s text:=lower(trim(coalesce(p_student_board,'')));
BEGIN
 IF b IN('','all','generic','cross-board') THEN RETURN true; END IF;
 IF s='' THEN RETURN false; END IF;
 IF b LIKE '%9ma0%' THEN RETURN s LIKE '%9ma0%'; END IF;
 IF b LIKE '%wma11%' THEN RETURN s LIKE '%wma11%'; END IF;
 IF b LIKE '%ial%' THEN RETURN s LIKE '%ial%' OR s LIKE '%wma11%' OR s LIKE '%xma01%' OR s LIKE '%yma01%'; END IF;
 IF b LIKE '%9709%' THEN RETURN s LIKE '%9709%'; END IF;
 -- The qualification and academic level are filtered independently in grove_task_start.
 IF b LIKE '%ib%' OR b LIKE '%baccalaureate%' THEN
   RETURN s LIKE '%ib%' OR s LIKE '%baccalaureate%';
 END IF;
 IF b LIKE '%aqa%' THEN RETURN s LIKE '%aqa%'; END IF;
 IF b LIKE '%edexcel%' OR b LIKE '%pearson%' THEN RETURN s LIKE '%edexcel%' OR s LIKE '%pearson%'; END IF;
 IF b LIKE '%cambridge%' OR b LIKE '%cie%' THEN RETURN s LIKE '%cambridge%' OR s LIKE '%cie%'; END IF;
 IF b LIKE '%ocr%' THEN RETURN s LIKE '%ocr%'; END IF;
 RETURN b=s;
END;$$;
-- Read-only assertions: false on missing board, true on recognised aliases.
DO $$
BEGIN
 IF NOT private.grove_board_compatible('IB Diploma Programme','IB') THEN RAISE EXCEPTION 'IB short alias failed'; END IF;
 IF NOT private.grove_board_compatible('IB Diploma Programme','International Baccalaureate') THEN RAISE EXCEPTION 'IB full alias failed'; END IF;
 IF private.grove_board_compatible('IB Diploma Programme','') THEN RAISE EXCEPTION 'Missing student board must not match'; END IF;
 IF private.grove_board_compatible('Pearson Edexcel 9MA0 UK GCE','Pearson Edexcel IAL WMA11 P1') THEN RAISE EXCEPTION 'A Level cross-route regression'; END IF;
 IF NOT private.grove_board_compatible('Cambridge 9709','Cambridge 9709') THEN RAISE EXCEPTION 'Cambridge A Level regression'; END IF;
END;$$;
COMMIT;
