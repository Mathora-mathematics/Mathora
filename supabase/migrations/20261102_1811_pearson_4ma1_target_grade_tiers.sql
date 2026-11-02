-- 2026-11-02 independent QA: Pearson 4MA1 target-grade tier gate.
-- Official Pearson linear 4MA1 specification: https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Mathematics%20A/2016/Specification%20and%20sample%20assessments/international-gcse-in-mathematics-spec-a.pdf
-- No student settings, marks or evidence modified.
CREATE OR REPLACE FUNCTION private.grove_target_grade_allowed(p_qualification text, p_exam_board text, p_level text, p_grade text)
 RETURNS boolean
 LANGUAGE sql
 IMMUTABLE
 SET search_path TO ''
AS $function$
 SELECT CASE
   WHEN upper(trim(coalesce(p_grade,''))) = '' THEN true
   WHEN upper(trim(coalesce(p_qualification,''))) = 'IGCSE'
     AND lower(coalesce(p_exam_board,'')) LIKE '%0580%'
     AND lower(coalesce(p_level,'')) LIKE '%core%'
     THEN upper(trim(p_grade)) IN ('C','D','E','F','G')
   WHEN upper(trim(coalesce(p_qualification,''))) = 'IGCSE'
     AND lower(coalesce(p_exam_board,'')) LIKE '%0580%'
     AND lower(coalesce(p_level,'')) LIKE '%extend%'
     THEN upper(trim(p_grade)) IN ('A*','A','B','C','D','E')
   WHEN upper(trim(coalesce(p_qualification,''))) = 'IGCSE'
     AND lower(coalesce(p_exam_board,'')) LIKE '%0580%'
     THEN upper(trim(p_grade)) IN ('A*','A','B','C','D','E','F','G')
   -- Pearson Edexcel International GCSE Mathematics A (4MA1), linear, tiered.
   -- Foundation grades 1-5; Higher grades 3-9 (grade 3 permitted).
   -- An explicit tier in the exam-board label takes precedence over a generic level.
   WHEN upper(trim(coalesce(p_qualification,''))) = 'IGCSE'
     AND lower(coalesce(p_exam_board,'')) LIKE '%4ma1%'
     AND lower(coalesce(p_exam_board,'')) LIKE '%foundation%'
     THEN upper(trim(p_grade)) IN ('1','2','3','4','5')
   WHEN upper(trim(coalesce(p_qualification,''))) = 'IGCSE'
     AND lower(coalesce(p_exam_board,'')) LIKE '%4ma1%'
     AND lower(coalesce(p_exam_board,'')) LIKE '%higher%'
     THEN upper(trim(p_grade)) IN ('3','4','5','6','7','8','9')
   WHEN upper(trim(coalesce(p_qualification,''))) = 'IGCSE'
     AND lower(coalesce(p_exam_board,'')) LIKE '%4ma1%'
     AND lower(trim(coalesce(p_level,''))) IN ('core','foundation')
     THEN upper(trim(p_grade)) IN ('1','2','3','4','5')
   WHEN upper(trim(coalesce(p_qualification,''))) = 'IGCSE'
     AND lower(coalesce(p_exam_board,'')) LIKE '%4ma1%'
     AND lower(trim(coalesce(p_level,''))) IN ('extended','higher')
     THEN upper(trim(p_grade)) IN ('3','4','5','6','7','8','9')
   WHEN upper(trim(coalesce(p_qualification,''))) = 'IGCSE'
     AND lower(coalesce(p_exam_board,'')) LIKE '%4ma1%'
     THEN false
   WHEN upper(trim(coalesce(p_qualification,''))) IN ('GCSE','IGCSE')
     THEN upper(trim(p_grade)) ~ '^[1-9]$'
   WHEN upper(trim(coalesce(p_qualification,''))) IN ('A_LEVEL','FURTHER_MATHS')
     THEN upper(trim(p_grade)) IN ('A*','A','B','C','D','E')
   WHEN upper(trim(coalesce(p_qualification,''))) IN ('IB_AA','IB_AI')
     THEN upper(trim(p_grade)) ~ '^[1-7]$'
   WHEN upper(trim(coalesce(p_qualification,''))) = 'TMUA'
     THEN upper(trim(p_grade)) ~ '^([1-8]([.][0-9])?|9([.]0)?)$'
   ELSE false
 END;
$function$;
