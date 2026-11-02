BEGIN;
CREATE TABLE IF NOT EXISTS private.grove_signature_editorial (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 provenance text NOT NULL UNIQUE,
 product text NOT NULL CHECK (product IN ('signature','signature_advanced','specialist_review')),
 qualification text NOT NULL,
 academic_level text NOT NULL,
 exam_board text NOT NULL,
 paper_code text NOT NULL,
 syllabus_ref text NOT NULL,
 syllabus_version text NOT NULL,
 title text NOT NULL,
 calculator_allowed boolean NOT NULL,
 duration_minutes smallint NOT NULL CHECK (duration_minutes BETWEEN 15 AND 180),
 total_marks smallint NOT NULL CHECK (total_marks BETWEEN 1 AND 150),
 question_paper jsonb NOT NULL CHECK (jsonb_typeof(question_paper)='array'),
 mark_scheme jsonb NOT NULL CHECK (jsonb_typeof(mark_scheme)='array'),
 report_template jsonb NOT NULL CHECK (jsonb_typeof(report_template)='object'),
 review_state text NOT NULL DEFAULT 'editorial_draft'
   CHECK (review_state IN ('editorial_draft','awaiting_human_moderation','approved','retired')),
 human_moderated_by uuid,
 human_moderated_at timestamptz,
 reviewer_note text NOT NULL DEFAULT '',
 created_at timestamptz NOT NULL DEFAULT now(),
 updated_at timestamptz NOT NULL DEFAULT now(),
 CONSTRAINT signature_papers_human_moderation_gate
 CHECK (review_state <> 'approved' OR (human_moderated_by IS NOT NULL AND human_moderated_at IS NOT NULL))
);
ALTER TABLE private.grove_signature_editorial ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON private.grove_signature_editorial FROM PUBLIC,anon,authenticated;
COMMENT ON TABLE private.grove_signature_editorial IS 'Examiner-only, secure editorial staging of original multi-mark Signature, Signature Advanced and Specialist papers; a human must moderate before any approval. No student-assignment path.';

CREATE OR REPLACE FUNCTION public.grove_staff_signature_catalog(p_org uuid)
RETURNS jsonb
LANGUAGE plpgsql SECURITY DEFINER SET search_path TO ''
AS $function$
DECLARE v_rows jsonb;
BEGIN
 IF (SELECT auth.uid()) IS NULL OR NOT private.is_staff(p_org)
 THEN RAISE EXCEPTION 'Authorised examiner access required'; END IF;
 SELECT coalesce(jsonb_agg(jsonb_build_object(
  'id',id,'provenance',provenance,'product',product,'qualification',qualification,
  'academic_level',academic_level,'exam_board',exam_board,'paper_code',paper_code,
  'title',title,'duration_minutes',duration_minutes,'total_marks',total_marks,
  'review_state',review_state,'human_moderated',human_moderated_at IS NOT NULL,
  'syllabus_version',syllabus_version,'updated_at',updated_at)
  ORDER BY updated_at DESC),'[]'::jsonb) INTO v_rows
 FROM private.grove_signature_editorial
 WHERE review_state<>'retired';
 RETURN jsonb_build_object('ok',true,'assessments',v_rows);
END;$function$;

CREATE OR REPLACE FUNCTION public.grove_staff_signature_editorial(p_org uuid,p_assessment uuid)
RETURNS jsonb
LANGUAGE plpgsql SECURITY DEFINER SET search_path TO ''
AS $function$
DECLARE v_content jsonb;
BEGIN
 IF (SELECT auth.uid()) IS NULL OR NOT private.is_staff(p_org)
 THEN RAISE EXCEPTION 'Authorised examiner access required'; END IF;
 SELECT jsonb_build_object(
 'id',id,'title',title,'provenance',provenance,'product',product,
 'qualification',qualification,'academic_level',academic_level,'exam_board',exam_board,
 'paper_code',paper_code,'syllabus_ref',syllabus_ref,'syllabus_version',syllabus_version,
 'calculator_allowed',calculator_allowed,'duration_minutes',duration_minutes,
 'total_marks',total_marks,'question_paper',question_paper,'mark_scheme',mark_scheme,
 'report_template',report_template,'review_state',review_state,'reviewer_note',reviewer_note,
 'human_moderated',human_moderated_at IS NOT NULL) INTO v_content
 FROM private.grove_signature_editorial WHERE id=p_assessment;
 IF v_content IS NULL THEN RAISE EXCEPTION 'Assessment not found'; END IF;
 RETURN jsonb_build_object('ok',true,'assessment',v_content);
END;$function$;

REVOKE ALL ON FUNCTION public.grove_staff_signature_catalog(uuid) FROM PUBLIC,anon;
REVOKE ALL ON FUNCTION public.grove_staff_signature_editorial(uuid,uuid) FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.grove_staff_signature_catalog(uuid) TO authenticated;
GRANT EXECUTE ON FUNCTION public.grove_staff_signature_editorial(uuid,uuid) TO authenticated;
COMMIT;