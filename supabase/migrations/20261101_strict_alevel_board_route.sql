BEGIN;
-- Exact-route guard for new AS/A Level content. No enrolled student or assignment data changes.
CREATE OR REPLACE FUNCTION private.grove_board_compatible(p_item_board text,p_student_board text)
RETURNS boolean LANGUAGE plpgsql IMMUTABLE SECURITY INVOKER SET search_path='' AS $$
DECLARE b text:=lower(trim(coalesce(p_item_board,'')));
        s text:=lower(trim(coalesce(p_student_board,'')));
BEGIN
 IF b IN('','all','generic','cross-board') THEN RETURN true;END IF;
 IF s='' THEN RETURN false;END IF;
 -- A generic "Pearson" setting must not select UK GCE 9MA0 in place of IAL units.
 IF b LIKE '%9ma0%' THEN RETURN s LIKE '%9ma0%';END IF;
 IF b LIKE '%wma11%' OR b LIKE '%ial%' THEN
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
END;$$;
COMMIT;
