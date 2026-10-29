BEGIN;
CREATE TABLE IF NOT EXISTS private.grove_content_editors(
 user_id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
 granted_at timestamptz NOT NULL DEFAULT now(),
 granted_by uuid REFERENCES auth.users(id)
);
ALTER TABLE private.grove_content_editors ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON private.grove_content_editors FROM PUBLIC,anon,authenticated;
-- Grant only existing platform administrators; future tutoring partners are not automatically editors.
INSERT INTO private.grove_content_editors(user_id)
SELECT DISTINCT m.user_id FROM public.memberships m WHERE m.member_role='admin'
ON CONFLICT(user_id) DO NOTHING;
CREATE OR REPLACE FUNCTION public.grove_admin_editorial_bank(p_org uuid,p_route text DEFAULT NULL)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v_rows jsonb;
BEGIN
 IF (SELECT auth.uid()) IS NULL OR NOT EXISTS(SELECT 1 FROM private.grove_content_editors ce WHERE ce.user_id=(SELECT auth.uid())) THEN RAISE EXCEPTION 'Administrator required';END IF;
 SELECT coalesce(jsonb_agg(jsonb_build_object('id',id,'qualification',qualification,
  'level',academic_level,'programme_scope',programme_scope,'exam_board',exam_board,'topic',topic,'skill',skill,
  'difficulty',difficulty,'prompt',prompt,'choices',choices,'correct_text',correct_text,
  'explanation',explanation,'expected_seconds',expected_seconds,'syllabus_objective',syllabus_objective,
  'status',review_state,'active',active) ORDER BY programme_scope,topic,skill),'[]'::jsonb)
 INTO v_rows
 FROM (SELECT * FROM private.grove_practice_bank
   WHERE review_state='draft' AND (p_route IS NULL OR qualification=p_route)
   ORDER BY qualification,programme_scope,topic LIMIT 200) q;
 RETURN jsonb_build_object('ok',true,'drafts',v_rows);
END;$$;
CREATE OR REPLACE FUNCTION public.grove_admin_approve_question(p_org uuid,p_item uuid,p_comment text)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v_item private.grove_practice_bank%ROWTYPE;
BEGIN
 IF (SELECT auth.uid()) IS NULL OR NOT EXISTS(SELECT 1 FROM private.grove_content_editors ce WHERE ce.user_id=(SELECT auth.uid())) THEN RAISE EXCEPTION 'Administrator required';END IF;
 IF length(trim(coalesce(p_comment,'')))<15 THEN RAISE EXCEPTION 'Include mathematical checking notes before approval';END IF;
 SELECT * INTO v_item FROM private.grove_practice_bank WHERE id=p_item FOR UPDATE;
 IF v_item.id IS NULL OR v_item.review_state<>'draft' THEN RAISE EXCEPTION 'Draft not found';END IF;
 IF jsonb_array_length(v_item.choices)<>4 OR
  (SELECT count(DISTINCT x) FROM jsonb_array_elements_text(v_item.choices) t(x))<>4 OR
  (SELECT count(*) FROM jsonb_array_elements_text(v_item.choices) t(x) WHERE x=v_item.correct_text)<>1
 THEN RAISE EXCEPTION 'Invalid four-choice answer key';END IF;
 UPDATE private.grove_practice_bank SET review_state='approved',active=true,
  reviewer_note=p_comment,reviewed_at=now(),reviewed_by=(SELECT auth.uid())
 WHERE id=p_item;
 RETURN jsonb_build_object('ok',true,'review_state','approved');
END;$$;
REVOKE ALL ON FUNCTION public.grove_admin_editorial_bank(uuid,text),public.grove_admin_approve_question(uuid,uuid,text) FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.grove_admin_editorial_bank(uuid,text),public.grove_admin_approve_question(uuid,uuid,text) TO authenticated;
COMMIT;