# MathsGrove — secure student archive and complete account removal

**Project:** existing MathsGrove Supabase project, website under `/Mathora/`. **Current phase:** implemented and deployed, but real transactional email delivery has not yet been verified. Do not remove a real student until their download is confirmed and an adult pilot has passed.

## Student lifecycle

1. **Administrator Studio → Students & invitations → Student export & removal.** The enrolled list shows attempt count, uploaded working files, baseline count, scheduled sessions and archive status. Only active users with the organisation's **admin** membership may manage this.
2. **Email complete student archive.** The server verifies the administrator and the subject's single-student role. It constructs a ZIP with `data.json`, original written questions and responses, submitted assessment attempts, initial diagnostic records, timings, results, released examiner feedback, subscriptions and each uploaded photograph/working file. Any missing upload or size cap error **stops** the email process.
3. The server stores the ZIP in private Supabase Storage `grove-student-exports` (no anonymous/browser Storage policies), sends the **student's already verified account email** a short-lived link through Resend and records the provider's accepted-message ID. The ZIP is **not** attached to a plain email.
4. **Student clicks the emailed link** to `export.html#token=...`, downloads the ZIP, checks that it opens and clicks **I have saved my archive**. The 256-bit bearer token travels in the URL fragment and is SHA-256-hashed before lookup. Tokens expire in 72 hours; Storage signed URLs last 90 seconds. The downloaded status records the student's explicit acknowledgement, not proof of reading every page.
5. Only now does **Permanently remove this student** become available in the admin register. The administrator types the exact registered email and confirms again. The server rechecks admin membership, subject identity, archive confirmation and account-role isolation.
6. Removal erases the student's uploaded original files, assessment and baseline records, session answers, question-timing evidence, released comments and feedback history, invitations, active subscriptions and student membership, then removes their Supabase Auth user and temporary ZIP archives. Shared academic question banks, organisation and administrator account are not touched. A minimal non-identifying audit record remains.
7. On a partial storage/Auth failure, the process stops for specialist recovery rather than falsely claiming removal.

## Configure a transactional sender (required before real trial)

The server-side `grove-student-export` Edge Function is deployed with `verify_jwt=false` **only** because student download links authenticate using a cryptographically random token. Administrative `prepare` and `erase` operations independently verify the Supabase JWT and admin database role on every call.

- Verify a domain in Resend (https://resend.com/domains) and obtain an API key with email-sending permission.
- In **Supabase → Edge Functions → Secrets**, add:
  - `RESEND_API_KEY` — your Resend secret API key
  - `MATHSGROVE_EXPORT_FROM` — an email address on the verified domain (e.g. `records@your-verified-domain.example`)
- Do **not** paste API keys, service-role keys or password links into ChatGPT or GitHub. The Edge Function reads the secrets at runtime; it does not expose them in the Pages website.
- Reload Administrator Studio. The list checks sender configuration. If unavailable, email/export actions stay disabled and existing student records are unchanged.

Resend confirms that the message is **accepted for sending**; final account deletion still requires the student's own archive-download acknowledgement.

## Controlled adult-trial checklist

Use only an adult-owned, verified email account that you control:

- [ ] Current GitHub Pages workflow and Edge Function deployments are active
- [ ] The registered account appears in the roster with correct attempt/upload counts
- [ ] Choose **Email complete student archive**; the page reports the sender accepted it
- [ ] Receive the archive email at the verified registered address
- [ ] Download the ZIP and open `data.json`
- [ ] Confirm all expected attempts, answers, question prompts, uploaded original photos, reports, baseline outcomes, and practice timing evidence appear; report missing evidence before confirming
- [ ] Click **I have saved my archive**
- [ ] Refresh Studio; the student status now reads **Download confirmed**
- [ ] Select **Permanently remove this student**, type the registered email and confirm
- [ ] Verify the student is absent from administrator roster, Supabase Auth users, student-scoped database records and `student-work` and `grove-student-exports` file paths
- [ ] Verify the administrator account, other students and shared question libraries are unchanged
- [ ] Test another new adult account's baseline activation from scratch

**Do not use the live removal action on the current two trial accounts until the real email and archive download have been checked.**

## Important boundaries

- A password and stored Auth secret are *not* exported. Downloaded ZIPs do not include material that was never uploaded/saved, such as local scratchpad sketches discarded on refresh.
- Internal examiner drafts and third-party confidential notes are not included automatically; formal data-subject access requests may require a separate human privacy review.
- Database backups, incident logs, deleted-account history and external email-provider metadata can remain until their normal documented retention periods. A completed purge is not a promise of instant erasure from all backups.
- Auth-issued access JWTs are stateless until expiry, although account deletion blocks refresh; student memberships and entitlements are removed as part of the purge.
- The ZIP contains sensitive student records: save it to a secure device and do not redistribute the link.
- Supabase Edge and Resend need a real email-provider integration test, including recovery for partial failures, before any minors or paying families are onboarded.

## Engineering files

`supabase/STUDENT_EXPORT_AND_REMOVAL.sql`, `supabase/STUDENT_REMOVAL_AFTER_ARCHIVE.sql`, `supabase/REISSUE_EXPIRED_STUDENT_EXPORT.sql`, `supabase/IMPROVE_STUDENT_ARCHIVE_QUESTION_CONTEXT.sql`, the later export confirmation and PII-clearance migrations recorded in Supabase, `supabase/functions/grove-student-export/index.ts`, `student-offboarding.js`, `export.html`, `student-export-download.js`, `scripts/check-student-export.mjs`.
