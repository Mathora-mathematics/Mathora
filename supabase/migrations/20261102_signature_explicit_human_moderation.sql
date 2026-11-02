BEGIN;
CREATE OR REPLACE FUNCTION public.grove_staff_approve_signature(p_org uuid,p_assessment uuid,p_review_note text)
RETURNS jsonb
LANGUAGE plpgsql SECURITY DEFINER SET search_path TO ''
AS $function$
DECLARE
 v_uid uuid:=(SELECT auth.uid());
 v private.grove_signature_editorial%ROWTYPE;
 q jsonb; scheme_q jsonb; part jsonb; scheme_part jsonb;
 question_total integer:=0; scheme_total integer:=0; criteria_total integer; paper_total integer;
BEGIN
 IF v_uid IS NULL OR NOT EXISTS(
  SELECT 1 FROM public.memberships m
  WHERE m.org_id=p_org AND m.user_id=v_uid AND m.member_role IN ('admin','examiner'))
 THEN RAISE EXCEPTION 'An authorised administrator or examiner is required to moderate Signature papers'; END IF;
 IF length(trim(coalesce(p_review_note,'')))<100 OR length(trim(p_review_note))>3500
 THEN RAISE EXCEPTION 'Write a meaningful 100–3500 character independent mathematical moderation note'; END IF;
 SELECT * INTO v FROM private.grove_signature_editorial WHERE id=p_assessment FOR UPDATE;
 IF v.id IS NULL OR v.review_state<>'awaiting_human_moderation'
 THEN RAISE EXCEPTION 'Only pending Signature editorial papers may be moderated'; END IF;
 IF jsonb_array_length(v.question_paper)<>jsonb_array_length(v.mark_scheme)
 THEN RAISE EXCEPTION 'Question and scheme item totals disagree'; END IF;
 FOR q IN SELECT value FROM jsonb_array_elements(v.question_paper) LOOP
  question_total:=question_total+(q->>'marks')::integer;
  SELECT entry.value INTO scheme_q FROM jsonb_array_elements(v.mark_scheme) AS entry(value)
    WHERE entry.value->>'id'=q->>'id';
  IF scheme_q IS NULL OR (scheme_q->>'marks')::integer<>(q->>'marks')::integer
  THEN RAISE EXCEPTION 'Question % does not match its mark scheme',q->>'id'; END IF;
  scheme_total:=scheme_total+(scheme_q->>'marks')::integer;
  IF jsonb_array_length(q->'parts')<>jsonb_array_length(scheme_q->'parts')
  THEN RAISE EXCEPTION 'Question % has inconsistent part count',q->>'id'; END IF;
  FOR part IN SELECT value FROM jsonb_array_elements(q->'parts') LOOP
   SELECT entry.value INTO scheme_part FROM jsonb_array_elements(scheme_q->'parts') AS entry(value)
      WHERE entry.value->>'id'=part->>'id';
   IF scheme_part IS NULL OR (part->>'marks')::integer<>(scheme_part->>'marks')::integer
   THEN RAISE EXCEPTION 'Question % part % has incorrect mark allocation',q->>'id',part->>'id'; END IF;
   SELECT coalesce(sum((entry.value->>'award')::integer),0) INTO criteria_total
    FROM jsonb_array_elements(scheme_part->'criteria') AS entry(value);
   IF criteria_total<>(part->>'marks')::integer
   THEN RAISE EXCEPTION 'Question % part % mark criteria do not total correctly',q->>'id',part->>'id'; END IF;
  END LOOP;
 END LOOP;
 IF question_total<>v.total_marks OR scheme_total<>v.total_marks
 THEN RAISE EXCEPTION 'Paper marking totals do not match the specified maximum'; END IF;
 UPDATE private.grove_signature_editorial SET
  review_state='approved',human_moderated_by=v_uid,human_moderated_at=now(),
  updated_at=now(),reviewer_note=trim(p_review_note)
 WHERE id=p_assessment;
 RETURN jsonb_build_object('ok',true,'id',p_assessment,'review_state','approved',
   'total_marks',v.total_marks,'human_moderated',true,
   'student_assignable',false,
   'notice','Editorial moderation only. Signature student assignment and student work must use the separate approved assessment delivery workflow.');
END;
$function$;
REVOKE ALL ON FUNCTION public.grove_staff_approve_signature(uuid,uuid,text) FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.grove_staff_approve_signature(uuid,uuid,text) TO authenticated;
COMMIT;