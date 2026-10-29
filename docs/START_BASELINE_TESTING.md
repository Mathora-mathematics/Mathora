# MathsGrove · Your first complete baseline test

This checklist is for the programme administrator. **Use disposable adult email accounts and fictional names only.** Do not enrol actual children until the private exam bank and cross-account testing have been approved.

## Step 1 — Check the website is deployed
Open the repository's **Actions** tab:
- **Deploy MathsGrove website** — latest run should be green.
- **Verify MathsGrove baseline SQL** — latest run should be green. This runs a throwaway PostgreSQL database; it does not change your Supabase project.

Then open:
- Homepage: https://mathora-mathematics.github.io/Mathora/
- One member sign-in: https://mathora-mathematics.github.io/Mathora/portal.html
- Direct baseline page (signed-in learners only): https://mathora-mathematics.github.io/Mathora/baseline.html
- Administrator Studio: https://mathora-mathematics.github.io/Mathora/studio.html

If one of these is missing, check the Pages deployment log rather than assuming the database is broken.

## Step 2 — Check the existing Supabase project (do not create a new one unnecessarily)
The browser has a Supabase project URL and **public publishable key** configured in `mathsgrove-config.js`. They do not provide administrator access or execute migrations.

In your existing project, open **Supabase → SQL Editor**. Before changing an existing database, **make a backup** or work in a separate test project. Confirm the foundational install `supabase/INSTALL_FRESH_MATHSGROVE.sql`, admin upgrade `supabase/UPGRADE_MATHSGROVE_ADMIN.sql` and email/family upgrade `supabase/UPGRADE_EMAIL_FAMILY_ACCESS.sql` were successfully installed. Do not rerun a completed installation without checking the migration notes and backups.

## Step 3 — Confirm existing baseline database installation
**Already installed on the connected MathsGrove project (29 October 2026).** The private assessment tables and the student/staff/family RPC functions were applied by ChatGPT through Supabase as a sequence of reviewed migrations, after the original all-in-one script was blocked. **Do not rerun the monolithic upgrade file** on that same database. The private tables have RLS enabled and direct browser read permissions revoked.

If working in a different Supabase project, first inspect migration history and dependencies instead of blindly applying the historical SQL.

## Step 4 — Load 20 test questions per academic route
**The connected production bank is currently empty and all routes are intentionally disabled.** Do not load the public pilot seeds into a real-student environment. For an isolated disposable development project with fictional adult accounts, the three sample seed files are:
1. `supabase/SEED_BASELINE_PILOT_KS4.sql`
2. `supabase/SEED_BASELINE_PILOT_ALEVEL_IBAA.sql`
3. `supabase/SEED_BASELINE_PILOT_SPECIALIST.sql`

They contain twelve 20-item pathway sets (240 *route records*). Some pathways intentionally reuse the same pilot content. **These are publicly committed examples with visible answer keys** and must **not** be sold or used as secure, unreleased student assessments. For real pupils, replace them with privately moderated, unseen sets stored only in Supabase.

Use **`supabase/VERIFY_BASELINE_INSTALL.sql`** to check the existing installation: functions and private tables should exist and **all four browser SELECT privileges should be false**. **Zero question routes is the intended current state**; a route only appears once a confidential, academically moderated 20-item set has been imported and activated. The private bank has `active=false` as the default.

## Step 5 — Check sign-in emails
In Supabase **Authentication**, make sure email delivery works and the redirect allowlist contains:
`https://mathora-mathematics.github.io/Mathora/portal.html`

The login uses the **same verified-email magic link for everyone**, then checks server-side role permissions. A typed email address by itself never grants access. The existing `invitations` Edge Function must also be deployed and configured with the production site's allowed origin. Do not publish any service-role/secret key in GitHub Pages.

## Step 6 — Create an adult test student
1. Sign in to the **Administrator Studio** using your authorised admin email.
2. Under **Students & invitations**, enter a fictional student name, an adult email address that you control, the qualification **GCSE**, academic level **Higher**, and any Grove subscription programme (Weekly, Daily or Exam). Set an access end date.
3. Click **Create student access** and copy the generated email-first welcome instructions.
4. In a **private/incognito browser window**, open `portal.html`, enter that exact student email and follow the secure link.
5. You should be sent to the 20-question baseline introduction, with **45 minutes** for GCSE Higher (unless you assigned additional time). Check the acknowledgement, question navigation, calculator and squared-paper scratchpad.
6. Answer a few questions, refresh once and verify selections remain saved and the server time has continued. Complete or submit early.
7. Check the report: score /20, descriptive band, topic results and review explanations. Whiteboard sketches are temporary and **not** examiner-marked.
8. Return to Studio → Students & invitations → **Baseline diagnostics**; click **Refresh diagnostics**, then open the learner report. Verify the same final score and topic profile.

## Step 7 — Test Grove Exam connected views
For a second adult fictional learner on Grove Exam, nominate distinct adult **parent** and **tutor** email addresses in the Studio. Have each person use the shared `portal.html` sign-in. After completion:
- Student sees the complete personal report.
- Parent sees the **released summary and supportive progress guidance**, not private workings or draft attempts.
- Tutor sees the **released topic summary plus teaching-focus cues**.
- A random/uninvited email and a second organisation must not be able to see the learner's records.
- Removing a role or downgrading from Exam must revoke linked access.

## Step 8 — Rules before accepting paying families
- Independently moderate every question, answer and explanation against the intended awarding-body specification and age group; replace public pilot keys with **unseen** questions.
- Complete accessibility and mobile-device tests, and allow appropriate approved extra time **before** the sitting.
- Review secure storage, RLS, child-data safeguarding/privacy, and cross-organisation isolation with genuine Supabase test accounts.
- Do **not** claim browser fullscreen and tab-change detection prevent AI use. The signals can be inaccurate and are not proof of misconduct.
- Do **not** describe this diagnostic as an official predicted grade or a substitute for human-marked mathematical reasoning.

## What the assistant has and has not tested
**Checked from GitHub source:** question-set structure (12 × 20), required frontend scripts/markup, calculator expressions, private API and role-routing patterns, SQL function delimiters and deployment file references.

**Added to GitHub Actions:** a separate disposable PostgreSQL migration/assessment-lifecycle workflow, plus deeper seeded-question checks. **Its real GitHub Actions result has not been inspected or verified in this chat.**

**Not performed:** applying your actual Supabase migrations, emailing your account, creating real Auth sessions, testing the live deployed browser UI, checking mobile browsers, or independently mathematically moderating all question content. Those require the real environment and/or human academic review.

**If a step fails:** send the exact GitHub Actions failure log or Supabase SQL error, and say which step of this guide failed. Do not send passwords, service-role keys or real student records.
