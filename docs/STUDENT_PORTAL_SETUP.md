# MathsGrove — Private Student Portal Setup

**Status:** code is committed; real sign-in, invitations and storage are disabled until you configure your own Supabase project. Never use real student data until the security checks below are completed.

## 1. Create a Supabase project

Create a separate Supabase project. In SQL Editor, execute `supabase/migrations/20261028_private_student_portal.sql` on a **new and empty** project. Do not run this against any existing school database.

The migration creates organisations, memberships, one-time email-bound invitation records, a private student profile, exam preferences, question samples, paper attempts, answers, file metadata, marking reviews, RLS policies and a private `student-work` storage bucket.

## 2. Connect public API settings

In Supabase Project Settings > API, find the Project URL and **publishable** key (or legacy anon key). Enter them into `mathsgrove-config.js`:

```js
window.MATHSGROVE_CONFIG = {
  url: 'https://YOUR_PROJECT.supabase.co',
  publishableKey: 'sb_publishable_YOUR_PUBLIC_KEY'
};
```

**Never enter your service-role key or secret API key in `mathsgrove-config.js` or GitHub.** Such a secret belongs only in Supabase Edge Function environment variables.

## 3. Configure email links

In Supabase Authentication URL Configuration add the exact portal URL to allowed redirect URLs, such as:

- `https://mathora-mathematics.github.io/Mathora/portal.html` (current repository URL)
- `https://mathora-mathematics.github.io/MathsGrove/portal.html` (after repository rename)
- The production Cloudflare domain when deployed.

Send email sign-in links using a configured SMTP sender for a real launch; test the verification process before inviting students. The code verifies an email address and is **not** a standalone password.

## 4. Deploy the invitations Edge Function

Install Supabase CLI, authenticate, link your project, and deploy:

```bash
supabase login
supabase link --project-ref YOUR_PROJECT_REF
supabase secrets set APP_ORIGINS=https://mathora-mathematics.github.io
supabase functions deploy invitations --no-verify-jwt
```

The function explicitly verifies each user's Supabase access token using Auth `getUser` and checks that email ownership and organisation role match. The `--no-verify-jwt` option prevents double-verification with the new publishable-key model; it does **not** make invitation operations public. Keep the source in `supabase/functions/invitations/index.ts` and do not remove its internal identity checks.

Add any other exact allowed website origin to the comma-separated `APP_ORIGINS` value. For a future Cloudflare deployment, replace the temporary origin.

## 5. Create your first administrator

Sign into `/portal.html` first using your own verified email. Select 'Sign in using email only'; this creates an Auth user and profile but **does not** enrol you in any company.

Then, in the Supabase SQL editor, retrieve your UUID:

```sql
select id,email from auth.users where email = 'YOUR_ADMIN_EMAIL';
```

Create your founding organisation and an admin membership:

```sql
insert into public.organisations(name)
values ('MathsGrove Founding Partner') returning id;

insert into public.memberships(org_id,user_id,member_role)
values ('YOUR_ORGANISATION_UUID','YOUR_AUTH_USER_UUID','admin');
```

Sign out and back in. You should see Partner Studio and 'Issue a private student code'. Your administrator can generate a one-time code tied to the student's registered email address; copy and send that code privately, preferably to the authorised parent/guardian or partner tutor.

## 6. Student sign-in and records

1. You generate a secure, single-use code from Partner Studio. Only a SHA-256 digest is stored in the database; the clear code is shown once.
2. The invited student enters the code and registered email, verifies their email via the secure link, and claims the invitation.
3. Supabase attaches the student's Auth UUID to the correct organisation. The member chooses IGCSE, GCSE, A Level, IB AA, IB AI or TMUA and enters a display name.
4. A student can start a **small original pilot question set** for that qualification; this is not yet a complete exam-board paper.
5. Typed answers and question reflections are saved to private database rows. Whiteboard snapshots and photographs upload to the private `student-work` bucket.
6. Students submit a paper; an authorised partner/examiner reviews the work. The student sees status and recorded comments in their private progress area.

Every learner uses the **same portal URL**, but their unique Auth user ID and organisation membership determine which dashboard, submissions and reports they can see. Separate public pages per student are not needed.

## 7. Mandatory tests before accepting real work from children

- Verify student A cannot read, modify, list or download student B's answers and files.
- Verify staff of partner A cannot access anything in partner B.
- Verify an uninvited Auth user cannot create an assessment or inspect others' questions, uploads or reports.
- Verify each invitation is one-time, time-limited, bound to the invited email and unavailable after redemption.
- Verify the exact storage paths and permissions for students and tutors.
- Verify students cannot edit submitted papers and cannot award themselves marks.
- Verify no Supabase secret key exists anywhere in the public repository or browser bundle.
- Implement documented parental/guardian arrangements, safeguarding, retention and deletion policies.
- Implement backups, incident response, moderation and an appropriate professional mail provider.
- Perform automated database permission tests plus manual browser end-to-end testing.

**This repository is currently a pilot, not an authorised production platform.** No real personal student data should be collected until these controls are reviewed and tested.

## 8. Production hosting

Keep GitHub as source control, but migrate the real commercial MathsGrove application to Cloudflare rather than relying on GitHub Pages. The static GitHub Pages portal is a staging entry point only.

## No public prices

The MathsGrove homepage contains no public prices or purchase checkout. Partner agreements and student entitlements are managed privately.

## Further development

Next priorities: invitation revocation and expiry management; validated exam-board topic maps; assigned papers; saved vector whiteboard strokes; improved mark schemes and moderation; signed PDF reports; adaptive algorithms informed by examiner marks; partner-controlled daily/weekly/monthly entitlements.
