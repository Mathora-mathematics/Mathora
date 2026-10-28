-- MathsGrove invitation lifecycle for admin studio.
-- Apply AFTER 20261028_private_student_portal.sql on a new Supabase project.
alter table public.invitations
  add column if not exists revoked_at timestamptz;
create index if not exists invitations_org_created_idx
  on public.invitations(org_id,created_at desc);
create index if not exists invitations_email_idx
  on public.invitations(org_id,email);
-- No direct browser grants to invitations; authenticated staff may only manage
-- them through the verified role-checking Supabase invitations Edge Function.
revoke all on public.invitations from anon,authenticated;
