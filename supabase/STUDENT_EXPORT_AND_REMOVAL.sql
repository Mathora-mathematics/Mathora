BEGIN;
CREATE TABLE IF NOT EXISTS private.grove_offboarding_jobs (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 org_id uuid NOT NULL REFERENCES public.organisations(id),
 student_id uuid NOT NULL,
 recipient_email text,
 requested_by uuid NOT NULL REFERENCES auth.users(id),
 status text NOT NULL DEFAULT 'requested'
  CHECK(status IN ('requested','preparing','emailed','downloaded','purging','purged','failed')),
 archive_path text,
 export_hash text,
 download_token_hash text,
 download_expires_at timestamptz,
 provider_message_id text,
 prepared_at timestamptz,
 downloaded_at timestamptz,
 purged_at timestamptz,
 last_error text,
 created_at timestamptz NOT NULL DEFAULT now(),
 updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS grove_offboarding_student_idx ON private.grove_offboarding_jobs(org_id,student_id,created_at DESC);
ALTER TABLE private.grove_offboarding_jobs ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON private.grove_offboarding_jobs FROM PUBLIC,anon,authenticated;
-- Bucket remains private. Browser has no policies for this bucket. Only the server-side service role handles archives.
INSERT INTO storage.buckets(id,name,public,file_size_limit,allowed_mime_types)
VALUES('grove-student-exports','grove-student-exports',false,52428800,ARRAY['application/zip'])
ON CONFLICT(id) DO NOTHING;

CREATE OR REPLACE FUNCTION private.grove_offboarding_is_admin(p_org uuid,p_user uuid)
RETURNS boolean LANGUAGE sql SECURITY DEFINER SET search_path='' AS $$
 SELECT p_user IS NOT NULL AND EXISTS(SELECT 1 FROM public.memberships m
 WHERE m.org_id=p_org AND m.user_id=p_user AND m.member_role='admin');
$$;
REVOKE ALL ON FUNCTION private.grove_offboarding_is_admin(uuid,uuid) FROM PUBLIC,anon,authenticated;

CREATE OR REPLACE FUNCTION public.grove_offboarding_list(p_org uuid)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v_result jsonb;
BEGIN
 IF NOT private.grove_offboarding_is_admin(p_org,(SELECT auth.uid())) THEN
  RAISE EXCEPTION 'MathsGrove administrator access required';
 END IF;
 SELECT coalesce(jsonb_agg(jsonb_build_object(
  'student_id',m.user_id,'name',coalesce(p.display_name,'Student'),'email',u.email,
  'verified',u.email_confirmed_at IS NOT NULL,
  'attempts',(SELECT count(*) FROM public.attempts a WHERE a.student_id=m.user_id),
  'uploads',(SELECT count(*) FROM public.answer_files a WHERE a.student_id=m.user_id),
  'baseline',(SELECT count(*) FROM private.baseline_sessions b WHERE b.student_id=m.user_id),
  'scheduled',(SELECT count(*) FROM private.grove_tasks g WHERE g.student_id=m.user_id),
  'job_id',j.id,'status',j.status,'downloaded_at',j.downloaded_at,'last_error',j.last_error)
 ORDER BY p.display_name),'[]'::jsonb)
 INTO v_result
 FROM public.memberships m
 JOIN auth.users u ON u.id=m.user_id
 LEFT JOIN public.profiles p ON p.id=m.user_id
 LEFT JOIN LATERAL (SELECT id,status,downloaded_at,last_error FROM private.grove_offboarding_jobs
 WHERE student_id=m.user_id AND org_id=p_org ORDER BY created_at DESC LIMIT 1) j ON true
 WHERE m.org_id=p_org AND m.member_role='student';
 RETURN jsonb_build_object('students',v_result);
END;$$;
REVOKE ALL ON FUNCTION public.grove_offboarding_list(uuid) FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.grove_offboarding_list(uuid) TO authenticated;

CREATE OR REPLACE FUNCTION public.grove_offboarding_prepare(p_org uuid,p_student uuid)
RETURNS uuid LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v_email text;v_job uuid;v_role_count integer;v_other_org_count integer;
BEGIN
 IF NOT private.grove_offboarding_is_admin(p_org,(SELECT auth.uid())) THEN
  RAISE EXCEPTION 'MathsGrove administrator access required';END IF;
 IF p_student=(SELECT auth.uid()) THEN RAISE EXCEPTION 'Cannot remove your own administrator account';END IF;
 SELECT count(*),count(*) FILTER(WHERE org_id<>p_org OR member_role<>'student')
 INTO v_role_count,v_other_org_count FROM public.memberships WHERE user_id=p_student;
 IF v_role_count<>1 OR v_other_org_count<>0 THEN
  RAISE EXCEPTION 'Shared, staff or unassigned accounts cannot be purged with student offboarding';END IF;
 SELECT u.email INTO v_email FROM auth.users u WHERE u.id=p_student AND u.email_confirmed_at IS NOT NULL;
 IF v_email IS NULL THEN RAISE EXCEPTION 'Verified student email is required for secure archive delivery';END IF;
 SELECT id INTO v_job FROM private.grove_offboarding_jobs
 WHERE org_id=p_org AND student_id=p_student AND status IN('requested','preparing','emailed','downloaded')
 ORDER BY created_at DESC LIMIT 1;
 IF v_job IS NOT NULL THEN RETURN v_job; END IF;
 INSERT INTO private.grove_offboarding_jobs(org_id,student_id,recipient_email,requested_by)
 VALUES(p_org,p_student,v_email,(SELECT auth.uid())) RETURNING id INTO v_job;
 RETURN v_job;
END;$$;
REVOKE ALL ON FUNCTION public.grove_offboarding_prepare(uuid,uuid) FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.grove_offboarding_prepare(uuid,uuid) TO authenticated;

-- Only a server that owns the service-role credential may retrieve complete raw subject export data.
-- Passwords, user metadata, invitation codes and other students' records are excluded.
CREATE OR REPLACE FUNCTION public.grove_offboarding_export(p_org uuid,p_student uuid)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE a uuid[];b uuid[];g uuid[];email text;
BEGIN
 IF NOT EXISTS(SELECT 1 FROM private.grove_offboarding_jobs
   WHERE org_id=p_org AND student_id=p_student AND status IN('requested','preparing','emailed','downloaded'))
 THEN RAISE EXCEPTION 'No authorised export request';END IF;
 SELECT email INTO email FROM auth.users WHERE id=p_student;
 SELECT coalesce(array_agg(id),ARRAY[]::uuid[]) INTO a FROM public.attempts WHERE student_id=p_student AND org_id=p_org;
 SELECT coalesce(array_agg(id),ARRAY[]::uuid[]) INTO b FROM private.baseline_sessions WHERE student_id=p_student AND org_id=p_org;
 SELECT coalesce(array_agg(id),ARRAY[]::uuid[]) INTO g FROM private.grove_tasks WHERE student_id=p_student AND org_id=p_org;
 RETURN jsonb_build_object(
  'format','MathsGrove learner data export v1','exported_at',now(),'student_email',email,
  'student_profile',(SELECT to_jsonb(t) FROM public.profiles t WHERE id=p_student),
  'academic_preferences',(SELECT to_jsonb(t) FROM public.student_preferences t WHERE student_id=p_student),
  'academic_settings',(SELECT to_jsonb(t)-'staff_notes' FROM public.student_academic_settings t WHERE student_id=p_student AND org_id=p_org),
  'subscription',(SELECT to_jsonb(t) FROM public.student_entitlements t WHERE student_id=p_student AND org_id=p_org),
  'service_addons',(SELECT coalesce(jsonb_agg(to_jsonb(t)),'[]'::jsonb) FROM public.student_service_addons t WHERE student_id=p_student AND org_id=p_org),
  'attempts',(SELECT coalesce(jsonb_agg(to_jsonb(t)),'[]'::jsonb) FROM public.attempts t WHERE id=ANY(a)),
  'answers',(SELECT coalesce(jsonb_agg(to_jsonb(t)),'[]'::jsonb) FROM public.answers t WHERE attempt_id=ANY(a) AND student_id=p_student),
  'uploaded_files',(SELECT coalesce(jsonb_agg(to_jsonb(t)),'[]'::jsonb) FROM public.answer_files t WHERE attempt_id=ANY(a) AND student_id=p_student),
  'paper_questions',(SELECT coalesce(jsonb_agg(to_jsonb(t)),'[]'::jsonb) FROM public.paper_questions t WHERE attempt_id=ANY(a)),
  'examiner_feedback',(SELECT coalesce(jsonb_agg(to_jsonb(t)),'[]'::jsonb) FROM public.reviews t WHERE attempt_id=ANY(a)),
  'examiner_summaries',(SELECT coalesce(jsonb_agg(to_jsonb(t)),'[]'::jsonb) FROM public.review_summaries t WHERE attempt_id=ANY(a) AND released_at IS NOT NULL),
  'baseline_sittings',(SELECT coalesce(jsonb_agg(to_jsonb(t)),'[]'::jsonb) FROM private.baseline_sessions t WHERE id=ANY(b)),
  'baseline_questions',(SELECT coalesce(jsonb_agg(to_jsonb(t)),'[]'::jsonb) FROM private.baseline_items t WHERE session_id=ANY(b)),
  'baseline_responses',(SELECT coalesce(jsonb_agg(to_jsonb(t)),'[]'::jsonb) FROM private.baseline_answers t WHERE session_id=ANY(b)),
  'baseline_focus_events',(SELECT coalesce(jsonb_agg(to_jsonb(t)),'[]'::jsonb) FROM private.baseline_events t WHERE session_id=ANY(b)),
  'baseline_extra_time',(SELECT to_jsonb(t) FROM private.baseline_accommodations t WHERE student_id=p_student),
  'practice_assignments',(SELECT coalesce(jsonb_agg(to_jsonb(t)),'[]'::jsonb) FROM private.grove_tasks t WHERE id=ANY(g)),
  'practice_questions',(SELECT coalesce(jsonb_agg(to_jsonb(t)),'[]'::jsonb) FROM private.grove_task_items t WHERE task_id=ANY(g)),
  'practice_responses',(SELECT coalesce(jsonb_agg(to_jsonb(t)),'[]'::jsonb) FROM private.grove_task_answers t WHERE task_id=ANY(g)),
  'practice_question_timing',(SELECT coalesce(jsonb_agg(to_jsonb(t)),'[]'::jsonb) FROM private.grove_question_time t WHERE task_id=ANY(g)),
  'released_teacher_feedback',(SELECT coalesce(jsonb_agg(to_jsonb(t)),'[]'::jsonb) FROM private.grove_task_feedback t WHERE task_id=ANY(g)),
  'linked_viewers',(SELECT coalesce(jsonb_agg(jsonb_build_object('role',t.view_role,'active',t.active)),'[]'::jsonb)
    FROM public.learner_view_links t WHERE t.student_id=p_student AND t.org_id=p_org)
 );
END;$$;
REVOKE ALL ON FUNCTION public.grove_offboarding_export(uuid,uuid) FROM PUBLIC,anon,authenticated;
GRANT EXECUTE ON FUNCTION public.grove_offboarding_export(uuid,uuid) TO service_role;
COMMIT;