# MathsGrove — email-first enrolment & linked Grove Exam access

## Current status
Implementation committed to the MathsGrove GitHub Pages source. **Not live until the SQL migration is applied in Supabase** and the existing `invitations` Edge Function, Auth email delivery and account isolation tests have been verified. Static GitHub Pages deployment does NOT create tables or functions.

## The administrator's simplest workflow
1. Open `studio.html` → **Students & invitations**.
2. Enter the student's **full name** and **registered email address**.
3. Choose **GCSE / IGCSE / A Level / IB / TMUA**, board/level, **Weekly / Daily / Exam** and an access end date. Signature quantities are separate optional purchases.
4. When **Grove Exam** is selected, optional **parent/guardian email** and **assigned tutor/teacher email** fields appear. Both require distinct addresses. Weekly/Daily cannot create separate parent or tutor accounts.
5. Click **Create student access**. The site saves the admin's complete pending setup, student name, nominated linked emails (if Exam), then issues a time-limited server-side invitation. The invitation code is an optional *recovery* method.
6. Copy the email-first welcome message and send it privately to the student. The administrator cannot send account emails directly from GitHub Pages; configure a separate transactional email system if automatic enrolment emails are required.
7. The student opens `portal.html`, enters their administrator-registered email, receives a short Supabase email OTP and enters it directly on the page (no confirmation-link click). After code verification, the secure `claim_my_student_access` RPC consumes only a matching, valid, administrator-issued student invitation and creates student membership, academic settings and tier entitlement transactionally. Their dashboard is bound to their Auth ID.
8. Nominated Grove Exam supporters open `portal.html` (the one sign-in for everyone), each signs in with **their own email**, and `claim_my_learner_views` resolves the administrator's invitation to the activated Exam student. Parent and tutor never reuse the student's credentials or invitation key.

## Editing an existing learner
In the admin Studio, select an existing student under **Manage an enrolled learner** to adjust their programme. Use **Manage parent & tutor access** to nominate, replace or revoke each linked email. This is independent of account creation; it does not erase student submissions. A downgrade from Grove Exam immediately revokes linked access, including pending viewer invitations. On a new upgrade to Exam, the administrator must reauthorise links.

## What each account can see
- **Student (`portal.html`)**: their own attempts, work, comments, assigned qualification and tier; protected by existing student RLS.
- **Parent / guardian (`family.html`)**: read-only released-paper score history, topic aggregates and home-support guidance. No student images, written responses, draft papers, staff notes or question feedback text.
- **Tutor / teacher (`family.html`)**: same released result summaries, plus limited question-level examiner comments and teaching-priority guidance for assigned student(s) only. No administrative controls, raw submitted images, unpublished marking or confidential staff notes.
- **Administrator (`studio.html`)**: student creation, tier assignment, linked-email assignments and marking administration.

The family/tutor interface never queries `attempts`, `reviews`, `profiles` or private storage directly. Its sole data source is the role-aware `get_my_learner_views` security-definer RPC, which checks the verified email, invitation, student link, active Exam entitlement and membership in every call.

## Installation sequence — in existing Supabase project
1. Back up data and verify the earlier `supabase/UPGRADE_MATHSGROVE_ADMIN.sql` was installed (requires existing `pending_student_setups`, `student_entitlements` and stage-one paper schema).
2. Run **once**: `supabase/UPGRADE_EMAIL_FAMILY_ACCESS.sql` in the Supabase SQL editor. Stop on any error; the script is one transaction.
3. Keep the existing `invitations` Edge Function deployed with manual JWT verification and the precise `APP_ORIGINS` allowlist. Do **not** put the service-role key in public files. The app's publishable key is permitted only when RLS is correctly configured.
4. Configure Supabase Auth email delivery / custom SMTP. Under Authentication → Email Templates, set the **Magic Link / OTP** template (and, for first-time account creation if applicable, the Confirm Signup template) to include `{{ .Token }}` instead of only `{{ .ConfirmationURL }}`. The MathsGrove login verifies that short code using `verifyOtp({ email, token, type: 'email' })`. Keep the authorised portal URL `https://mathora-mathematics.github.io/Mathora/portal.html` for compatibility; test delivery and verification with adult dummy accounts. The administrator-listed email identifies the invite; the OTP proves mailbox ownership.
5. Verify storage policies separately with two organisations; RLS tests must be carried out before accepting information about minors.

## Required real end-to-end verification (NOT YET RUN)
Use disposable **adult** accounts, two different organisations and no real student data:

| Test | Expected |
|---|---|
| Admin creates Weekly enrolment (name + email) | Single email-bound pending student setup; no parent/tutor accounts |
| Weekly admin tries to add parent/tutor | Server rejects assignment |
| New student verifies their nominated email | Student claims exactly one active enrolment; own name, route and programme appear |
| Wrong verified email attempts claim | No membership and no access |
| Invitation expired or revoked | Cannot self-claim |
| Repeated or concurrent student claims | No second membership or duplicated entitlements |
| Admin creates Exam with parent/tutor emails | Both role nominations are stored privately, student name and tier preserved |
| Parent signs in before student claims | No student record; pending explanation only |
| Parent signs in after student activation | Only released aggregates, no question-level comments, raw working or private notes |
| Tutor signs in after student activation | Released aggregates + question-level feedback for that student only |
| Parent/tutor not nominated, unverified or from another organisation | No linked learner data |
| Parent email replaced | Old email immediately loses access; new email must verify |
| Exam changed to Daily/Weekly | Existing parent and tutor links **and pending invitations** revoked |
| Exam restored | Admin explicitly reauthorises family links |
| Student releases a new examiner-marked paper | Parent/tutor see only permitted released evidence after refresh |
| Supabase migration missing | UI gives actionable setup error; does not falsely claim linked account creation |
| Private reviewer notes or student image URLs | Never returned by the family-view RPC |

## Trust boundaries
- These pages use the existing MathsGrove design and no publicly displayed prices.
- Email OTP verification establishes ownership of the administrator-registered email; typing an address alone does **not** grant access.
- Separate browser roles are not substitutes for backend row-level access controls.
- Keep guardian consent, age assurance, safeguarding, organisation contracts, retention/erasure and notification policies under review before any live child enrolment.
- The new `family.html` interface has no upload or admin actions; tutor access is intentionally review-only at this stage.
