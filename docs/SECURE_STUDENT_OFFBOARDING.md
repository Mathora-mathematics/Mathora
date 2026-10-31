# MathsGrove | Manual student archive and safe deletion

**New workflow (30 October 2026): no transactional email service needed.** The administrator creates a private ZIP of PDF reports and original submissions, downloads it, checks the archive, and may then permanently remove the student. The administrator can send the ZIP by their own secure email method.

> **Deployment note:** The new Edge Function must report `method: "manual_zip_pdf"` in its health response before the Studio enables these controls. The database migration and website source are committed, but the latest Edge Function deployment has not yet succeeded. The website intentionally disables irreversible actions until the service is confirmed deployed.

## Administrator steps

1. Open [MathsGrove Student PDF ZIP & removal](https://mathora-mathematics.github.io/Mathora/studio.html#student-removal). Sign in with an administrator account.
2. Choose the student, review their paper-attempt, baseline, upload and scheduled-practice counts, and click **Generate & download PDF ZIP**.
3. The server verifies the administrator is authorised for this student and that the student has exactly one student membership. It creates and stores a private ZIP without changing student data. It returns a short-lived signed download URL and SHA-256 hash.
4. The Studio fetches the ZIP, checks its SHA-256 hash, and downloads it to the administrator's computer. If the download fails, the export is not confirmed.
5. **Open the ZIP and inspect its PDFs and original submissions.** Only then click **I saved and checked the ZIP**.
6. The signed-in administrator acknowledges saving the checked ZIP. The database checks both the correct student and checksum before changing status to **downloaded**.
7. To delete, click **Permanently remove student**, type the exact registered email, and accept the final warning.
8. The Edge Function revalidates administrator membership and account isolation, the saved-archive acknowledgement, then removes that learner's original private uploads, academic records, Auth account and private temporary ZIP. The shared question banks and other accounts are not deleted.
9. The administrator can manually email the ZIP to the student using an appropriately secure channel. Consider password-protecting the ZIP or using a private encrypted file transfer: these records may be sensitive.

## ZIP content

- `PDF_Reports/01_Profile_and_Programme.pdf`
- `PDF_Reports/02_Baseline_Diagnostics.pdf`
- `PDF_Reports/03_Practice_and_Timing.pdf`
- `PDF_Reports/04_Papers_and_Answers.pdf`
- `PDF_Reports/05_Examiner_Reports.pdf`
- `PDF_Reports/06_Uploaded_Work_Overview.pdf` — supported JPG/PNG images also appear as readable PDF previews
- `Original_Submissions/` — unchanged uploaded work, including file formats which cannot be rendered as PDFs
- `Complete_Data.json` — machine-readable portable account records, excluding passwords, private answer-bank keys, and confidential staff-only notes
- `README.txt`

The archive only includes **saved** or uploaded material. Unsaved sketches and work that never reached the server cannot be recovered. The export is not a verified public examination certificate.

## Privacy and reliability

No Resend account, sender domain or automatic outbound email is required. The private ZIP stays in Supabase Storage until final deletion, when the temporary file is cleaned up. The administrator must use a secure channel if manually emailing it. The student has not confirmed receipt, because delivery is handled outside MathsGrove.

Student deletion should never be a one-click action. The export must be complete, have a matching checksum, be downloaded, and be explicitly acknowledged. A final typed-email confirmation is also required. Interrupted removals must be reviewed before retrying.

If an archive is too large (default 48 MB), a file is missing or cannot be read, a PDF cannot be generated, or the service is unavailable, the workflow **stops without allowing deletion**. Some database backups and operational logs can remain until their documented retention expiry.

## Current technical validation

- SQL migration for manual archive status, checksum, administrator acknowledgement and permissions installed in connected Supabase.
- Rollback-only test confirmed the guard allows removal *only after* administrator archive confirmation; no real student was removed.
- Source-level PDF ZIP security and integration checks passed.
- New Edge Function deployment was blocked by the available integration and has **not** been independently tested in a live browser. The Studio disables the buttons until the server advertises manual ZIP readiness.

## Developer files

`supabase/MANUAL_STUDENT_PDF_ARCHIVE.sql`, `supabase/MANUAL_ARCHIVE_DETAILS.sql`,
`supabase/functions/grove-student-export/index.ts`,
`supabase/functions/grove-student-export/archive-pdfs.ts`,
`student-offboarding.js`, `student-offboarding.css`, `studio.html`,
`scripts/check-student-export.mjs`, `scripts/check-site.mjs`.

## Complete cleanup and live dashboard synchronisation (31 October 2026)

Upon **successful** permanent removal, the service checks that no records remain for the deleted learner in Auth, profiles/memberships, enrolment and invitations, linked family/tutor permissions (including any viewer role), subscription and academic settings, paper responses, baseline sittings, scheduled practice, original uploads, and the private ZIP bucket. If any live record remains, the server refuses to report the deletion as complete and leaves the job for administrator investigation.

The Studio immediately discards its student roster and all derived figures and reloads overview totals, marking queue, reports, baseline diagnostics, assigned practice, invitations and linked access. It also refreshes when an existing Studio tab becomes visible. The student portal and family/tutor dashboard recheck authorisation on return to the tab and periodically while open; removed learners' old panels are hidden and replaced by an access message. Server-side row security and linked-access rules remain authoritative.

The two historic trial learner accounts had already been deleted. The current live audit confirms zero students, attempts, answers, baseline sessions, scheduled practice tasks, student uploads, invitations, and active family/tutor links. One unused revoked invitation was cleared. Only two minimal, non-identifying completed-removal audit entries remain; these are not displayed as current learners.

**Boundary:** This verifies operational application records and Supabase Storage, not instantaneous deletion from database backups, historical platform logs, files that the administrator manually downloaded or emailed, or copies held outside MathsGrove. Existing JWTs can remain technically valid until expiry, but revoked memberships and learner links deny access to the removed student's data.

**Test status:** Database removal guard and positive/negative cleanup checks passed in rollback-only tests, all 27 source-level regression checks pass, and the updated offboarding Edge Function is deployed as version 7. GitHub Pages live-browser behaviour still needs a manual smoke test.
