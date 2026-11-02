-- MathsGrove independent QA / 2026-11-02 22:03 Asia/Kuwait
-- Narrow production fix: GCSE 8300/1MA1 target-grade validator previously
-- allowed grade 9 on Foundation tier. Higher tier permits safety-net grade 3.
-- No student records, marks, evidence, grades or enrolments are changed.
-- Official sources:
-- https://www.aqa.org.uk/subjects/mathematics/gcse/mathematics-8300/specification/general-administration
-- https://qualifications.pearson.com/en/support/support-topics/results-certification/understanding-marks-and-grades/9-1-awarding-faqs.html
-- Database migration applied to live Supabase project nwakgkxytovprrrwyahs;
-- verified with 22 read-only routing/grade cases (22 passed).

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
   -- GCSE 8300/1MA1: foundation 1-5, higher 4-9 with permitted grade 3.
   -- Explicit board tier takes precedence over a generic or inconsistent level.
   WHEN upper(trim(coalesce(p_qualification,''))) = 'GCSE'
     AND lower(coalesce(p_exam_board,'')) LIKE '%foundation%'
     THEN upper(trim(p_grade)) IN ('1','2','3','4','5')
   WHEN upper(trim(coalesce(p_qualification,''))) = 'GCSE'
     AND lower(coalesce(p_exam_board,'')) LIKE '%higher%'
     THEN upper(trim(p_grade)) IN ('3','4','5','6','7','8','9')
   WHEN upper(trim(coalesce(p_qualification,''))) = 'GCSE'
     AND lower(trim(coalesce(p_level,''))) IN ('foundation','core')
     THEN upper(trim(p_grade)) IN ('1','2','3','4','5')
   WHEN upper(trim(coalesce(p_qualification,''))) = 'GCSE'
     AND lower(trim(coalesce(p_level,''))) IN ('higher','extended')
     THEN upper(trim(p_grade)) IN ('3','4','5','6','7','8','9')
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
$function$


COMMENT ON FUNCTION private.grove_target_grade_allowed(text,text,text,text) IS 'Tier-specific target-grade validation for GCSE AQA 8300 / Pearson 1MA1 and IGCSE Cambridge 0580 / Pearson 4MA1; verified 2026-11-02. Higher GCSE includes allowed safety-net grade 3; Foundation excludes 6-9.';
