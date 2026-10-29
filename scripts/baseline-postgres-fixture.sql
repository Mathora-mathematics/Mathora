-- Minimal local PostgreSQL fixture. NOT for a real Supabase project.
-- Creates only the objects needed to compile/exercise UPGRADE_BASELINE_ASSESSMENT.sql.
CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE SCHEMA IF NOT EXISTS auth;
CREATE SCHEMA IF NOT EXISTS private;
DO $$ BEGIN
 CREATE ROLE authenticated NOLOGIN;
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;
DO $$ BEGIN
 CREATE ROLE anon NOLOGIN;
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;
CREATE TABLE auth.users(id uuid PRIMARY KEY,email text,email_confirmed_at timestamptz);
CREATE OR REPLACE FUNCTION auth.uid()
RETURNS uuid LANGUAGE sql STABLE AS $$
 SELECT nullif(current_setting('request.jwt.claim.sub',true),'')::uuid
$$;
GRANT USAGE ON SCHEMA auth TO authenticated;
GRANT EXECUTE ON FUNCTION auth.uid() TO authenticated;
CREATE TABLE public.organisations(id uuid PRIMARY KEY,name text);
CREATE TABLE public.profiles(id uuid PRIMARY KEY REFERENCES auth.users(id),display_name text);
CREATE TABLE public.memberships(org_id uuid,user_id uuid,member_role text);
CREATE TABLE public.student_preferences(student_id uuid,qualification text,tier text,exam_board text);
CREATE TABLE public.student_entitlements(student_id uuid,org_id uuid,tier text,starts_at timestamptz,ends_at timestamptz);
CREATE TABLE public.learner_view_invitations(id uuid PRIMARY KEY,revoked_at timestamptz,viewer_email text,student_email text,view_role text);
CREATE TABLE public.learner_view_links(invitation_id uuid,student_id uuid,viewer_id uuid,org_id uuid,active boolean,view_role text);
CREATE OR REPLACE FUNCTION private.is_staff(p_org uuid)
RETURNS boolean LANGUAGE sql SECURITY DEFINER SET search_path='' AS $$
 SELECT EXISTS (SELECT 1 FROM public.memberships WHERE org_id=p_org AND user_id=(SELECT auth.uid()) AND member_role IN ('admin','partner','examiner'))
$$;
CREATE OR REPLACE FUNCTION private.is_partner(p_org uuid)
RETURNS boolean LANGUAGE sql SECURITY DEFINER SET search_path='' AS $$
 SELECT EXISTS (SELECT 1 FROM public.memberships WHERE org_id=p_org AND user_id=(SELECT auth.uid()) AND member_role IN ('admin','partner'))
$$;
GRANT USAGE ON SCHEMA public TO authenticated;
-- Dummy adults only.
INSERT INTO auth.users VALUES
 ('00000000-0000-4000-8000-000000000101','learner@example.test',now()),
 ('00000000-0000-4000-8000-000000000102','admin@example.test',now()),
 ('00000000-0000-4000-8000-000000000103','other@example.test',now());
INSERT INTO public.profiles VALUES
 ('00000000-0000-4000-8000-000000000101','Adult Test Learner'),
 ('00000000-0000-4000-8000-000000000102','Adult Test Administrator'),
 ('00000000-0000-4000-8000-000000000103','Unassigned Adult');
INSERT INTO public.organisations VALUES ('00000000-0000-4000-8000-000000000001','Test Org');
INSERT INTO public.memberships VALUES
 ('00000000-0000-4000-8000-000000000001','00000000-0000-4000-8000-000000000101','student'),
 ('00000000-0000-4000-8000-000000000001','00000000-0000-4000-8000-000000000102','admin');
INSERT INTO public.student_preferences VALUES ('00000000-0000-4000-8000-000000000101','GCSE','Foundation','AQA_8300');
INSERT INTO public.student_entitlements VALUES
 ('00000000-0000-4000-8000-000000000101','00000000-0000-4000-8000-000000000001','weekly',now()-interval '1 day',now()+interval '30 days');
