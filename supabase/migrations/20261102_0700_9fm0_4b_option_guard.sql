-- MathsGrove 2026-11-02 0700: route Pearson 9FM0/4B Further Statistics 2 only to its enrolled option.
-- Preserves all earlier exact-route guards. No learner, assignment, submission or marking table is changed.
CREATE OR REPLACE FUNCTION private.grove_board_compatible(p_item_board text,p_student_board text)
 RETURNS boolean LANGUAGE plpgsql IMMUTABLE SECURITY INVOKER SET search_path TO ''
AS $function$
DECLARE b text:=lower(trim(coalesce(p_item_board,'')));
        s text:=lower(trim(coalesce(p_student_board,'')));
BEGIN
 IF b IN('','all','generic','cross-board') THEN RETURN true; END IF;
 IF s='' THEN RETURN false; END IF;
 -- Optional Further Statistics 2 requires an explicit 9FM0 4B/4B route, not merely Further Maths.
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
END;$function$;
DO $verify$
DECLARE v text:='Pearson Edexcel 9FM0 4B Further Statistics 2';
BEGIN
 IF private.grove_board_compatible(v,v) IS DISTINCT FROM true THEN RAISE EXCEPTION '9FM0 4B self-route'; END IF;
 IF private.grove_board_compatible(v,'Pearson Edexcel 9FM0/4B') IS DISTINCT FROM true THEN RAISE EXCEPTION '9FM0 4B slash alias'; END IF;
 IF private.grove_board_compatible(v,'Pearson Edexcel 9FM0') IS DISTINCT FROM false THEN RAISE EXCEPTION '9FM0 generic leakage'; END IF;
 IF private.grove_board_compatible(v,'Pearson Edexcel 9FM0 3B Further Statistics 1') IS DISTINCT FROM false THEN RAISE EXCEPTION '9FM0 3B leakage'; END IF;
 IF private.grove_board_compatible(v,'Pearson Edexcel 9MA0 UK GCE') IS DISTINCT FROM false THEN RAISE EXCEPTION '9MA0 leakage'; END IF;
 IF private.grove_board_compatible(v,'Pearson Edexcel IAL WMA12 P2') IS DISTINCT FROM false THEN RAISE EXCEPTION 'IAL leakage'; END IF;
 IF private.grove_board_compatible('Pearson Edexcel 9FM0 Core Pure','Pearson Edexcel 9FM0') IS DISTINCT FROM true THEN RAISE EXCEPTION '9FM0 core regression'; END IF;
 IF private.grove_board_compatible('Pearson Edexcel 9MA0 UK GCE','Pearson Edexcel 9FM0 4B') IS DISTINCT FROM false THEN RAISE EXCEPTION '9MA0 reverse leakage'; END IF;
 IF private.grove_board_compatible('Cambridge 9709 P4 Mechanics','Cambridge 9709 P1') IS DISTINCT FROM false THEN RAISE EXCEPTION '9709 P4 guard'; END IF;
 IF private.grove_board_compatible('Cambridge 9709 P4 Mechanics','Cambridge 9709 P4 Mechanics') IS DISTINCT FROM true THEN RAISE EXCEPTION '9709 P4 self'; END IF;
 IF private.grove_board_compatible('Pearson Edexcel IAL WMA12 P2','Pearson Edexcel IAL WMA11 P1') IS DISTINCT FROM false THEN RAISE EXCEPTION 'WMA12 guard'; END IF;
 IF private.grove_board_compatible('Pearson Edexcel IAL WMA12 P2','Pearson Edexcel IAL WMA12 P2') IS DISTINCT FROM true THEN RAISE EXCEPTION 'WMA12 self'; END IF;
 IF private.grove_board_compatible('Cambridge 0580 Extended','Cambridge 0580 Extended') IS DISTINCT FROM true THEN RAISE EXCEPTION '0580 self'; END IF;
 IF private.grove_board_compatible('Cambridge 0580 Extended','Pearson Edexcel 4MA1 Higher') IS DISTINCT FROM false THEN RAISE EXCEPTION '0580 cross-board'; END IF;
 IF private.grove_board_compatible('Cambridge 9231','Cambridge 9709 P4 Mechanics') IS DISTINCT FROM false THEN RAISE EXCEPTION '9231 cross-route'; END IF;
 IF private.grove_board_compatible('Pearson Edexcel 1MA1','Pearson Edexcel 4MA1 Higher') IS DISTINCT FROM false THEN RAISE EXCEPTION '1MA1 cross-route'; END IF;
 IF private.grove_board_compatible('TMUA','TMUA') IS DISTINCT FROM true THEN RAISE EXCEPTION 'TMUA self'; END IF;
 IF private.grove_board_compatible('TMUA','Pearson Edexcel 9FM0') IS DISTINCT FROM false THEN RAISE EXCEPTION 'TMUA cross-route'; END IF;
END;$verify$;