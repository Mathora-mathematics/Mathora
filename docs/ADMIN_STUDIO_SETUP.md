# MathsGrove — Admin & Examiner Studio
## What is ready in GitHub
The private administration interface is at `/studio.html`. It requires a verified Supabase login with an `admin`, `partner` or `examiner` membership in an organisation.

The interface contains:
- **Overview** — enrolled student count, outstanding invitations, submissions awaiting marking and released reviews.
- **Students & invitations** — generate an unpredictable single-use access code, bound to a **specific email address**; copy an invitation message; view pending/used/expired/revoked keys; revoke an unused invitation; see the student roster and selected exam pathway.
- **Marking board** — access student submissions, typed working and uploaded images using short-lived signed links; inspect question marking guidance; save draft marks; release marks plus feedback.
- **Reports** — private register of assessments released to students. The designed Signature PDF report is a later production feature.

### One code per student
The administrator enters the student's registered email and presses **Generate private key**. Supabase uses cryptographic randomness to create a key resembling `MG-XXXXXXXX-XXXXXXXX-XXXXXXXX`. Only its hash is stored in the database, and the code is shown just once. An additional code for the same email and organisation revokes earlier unused codes. Codes expire after 14 days and can be revoked. Student access is only granted after the **same email** signs in using an authenticated link and redeems the key.

A code is **not** a password. Each student subsequently uses their own verified Supabase identity. Their access is determined by organisation membership and PostgreSQL Row Level Security, not by a publicly discoverable page URL.

The first-time administrator account is created by signing into `portal.html`, then completing the one-time owner bootstrap from `docs/STUDENT_PORTAL_SETUP.md`.

### SQL migrations — apply in this exact order
Execute these in a **new Supabase project only**, using SQL Editor:
1. `supabase/migrations/20261028_private_student_portal.sql`
2. `supabase/migrations/20261028_admin_invitation_lifecycle.sql`
3. `supabase/migrations/20261028_atomic_marking.sql`

The last migration adds a server-validated, transactional marking function `save_marking_review`. It prevents one student from changing examiners' marks, checks each awarded mark against the permitted maximum, requires feedback before release, and locks released reviews. The student portal's earlier embedded marking area now sends reviewers to the dedicated Studio.

### Edge Function
Deploy `supabase/functions/invitations/index.ts` using the Supabase CLI or the Supabase app. It provides four authenticated actions:
- `issue`: admin/partner role only; returns the new code once.
- `list`: admin/partner role only; returns metadata, never plaintext codes.
- `revoke`: admin/partner role only; invalidates an unredeemed code.
- `redeem`: verifies the signed-in user's email against the invitation email and claims the organisation membership.

Do not disable identity checks in the function. Its privileged service-role key must never appear in GitHub Pages or any client-side JavaScript.

### Configure the browser
Set ONLY your Supabase **Project URL** and **publishable key** in `mathsgrove-config.js`. These are public client settings; the real security comes from the Supabase RLS and Edge Function role checks. Do not share or publish passwords, service-role keys or SMTP credentials.

Allow the exact `portal.html` URL under **Authentication → URL Configuration → Redirect URLs**. Include the real GitHub/Cloudflare address after any repository rename.

Set `APP_ORIGINS` for the Edge Function to the exact website origin (e.g. `https://mathora-mathematics.github.io`). Do not use `*` for CORS.

### Email delivery — important free-plan limitation
The built-in Supabase Auth sender currently only sends to organisation **team member emails** and has a low rate limit (currently 2 per hour). Therefore, you **cannot onboard arbitrary real pupils** using the built-in sender alone.

For pilot external student emails, configure custom SMTP through a provider with an appropriate free tier, such as **Brevo** (currently advertises up to 300 email sends/day on Free). Setup requires a verified sender/domain and its own provider credentials; these credentials belong in Supabase SMTP settings, not GitHub. Brevo's current setup guide: https://help.brevo.com/hc/en-us/articles/7924908994450-Send-transactional-emails-using-Brevo-SMTP

Do not turn off email confirmation to bypass this restriction; that would undermine student identity verification.

### Current deployment status
These are prepared GitHub application files. **No Supabase project is attached or active** until the owner connects/creates a project, applies migrations, deploys the Edge Function and configures the safe public settings. Until then, the studio shows a connection-required screen and does not issue keys or collect student answers.

### Mandatory tests before real student use
1. Create two separate partner organisations in a test database and two adult test student emails.
2. Verify a partner cannot list/revoke the other partner's keys, read their roster or view their files.
3. Verify reused, expired, revoked, mismatched-email and fabricated invitations all fail.
4. Verify the student cannot award marks, see pre-release reviews or modify submitted answers.
5. Verify the marking RPC rejects invalid mark totals, foreign question IDs, unreviewed questions and repeat release.
6. Confirm the storage bucket is private, with signed links expiring, and test cross-organisation reads.
7. Confirm emails are actually delivered, RLS is enforced, backups work and safeguarding/privacy/retention policies are documented before onboarding minors.

### Keeping it free
Supabase currently advertises a Free plan including **500 MB database size, 1 GB object storage, 50,000 monthly active users and 500,000 Edge Function invocations**. Storage will likely be the first meaningful limit because of handwritten photographs. Compress photos and consider storage retention. Free projects can pause after low activity and do not receive the same managed backups/uptime as paid projects. An internal pilot can start at £0 platform subscription cost, but **do not promise production availability or zero costs at scale**.

Official documentation:
- https://supabase.com/docs/guides/platform/billing-on-supabase
- https://supabase.com/docs/guides/auth/auth-smtp
- https://supabase.com/docs/guides/platform/free-project-pausing
- https://supabase.com/docs/guides/platform/backups
