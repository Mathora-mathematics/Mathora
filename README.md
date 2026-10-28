# MathsGrove

**MathsGrove** is an invitation-only mathematics practice and examiner-assessment platform for students and families. The public website is a no-price marketing experience; students receive private access codes. Its identity is deep navy, soft champagne-beige and warm ivory — deliberately minimal rather than metallic or ornamental.

## Safety and status

- The main branch contains the MathsGrove website preview. Original Mathora lesson code remains in Git history and is not loaded on the new homepage.
- The public site provides a minimal navy, champagne-beige and ivory MathsGrove development preview.
- The public sample student dashboard (`sample.html`) is populated with entirely **fictional** student details, paper history and a specimen report; it never uploads work to Supabase.
- The student portal and private examiner studio contain Supabase integrations. The invitation/email flow and cross-account permissions still require real-world testing.
- **Do not upload real student data.** Demo photography is only previewed locally.
- Existing Year 10 lesson sources remain in this repository for archival reference; preserve historical commits for rollback.

## Files

- index.html — student-first marketing page: four services with no public prices
- brand-refresh.css and marketing-services.css — responsive, minimal homepage design
- marketing.js — lightweight mobile navigation
- sample.html, sample.css, sample.js — filled fictional student dashboard and specimen report
- whiteboard.js — squared/lined/blank paper, five pen colours, highlighter, undo and PNG export
- student-features.css — private paper builder, whiteboard and report styling
- mathsgrove-icon.svg — redesigned flat geometric logo
- mathsgrove.js — public interactive demonstration; browser-only, with no student data storage
- portal.html, portal.css, portal.js — invitation-only student accounts, exam-paper choices, private submission records and examiner feedback
- studio.html, studio.css, studio.js — private partner administration, key-generation and examiner marking studio
- private-refresh.css — shared minimal brand theme for student and staff portals
- scripts/check-site.mjs — no-dependency static integrity and accidental-secret checks
- docs/BRAND_GUIDE.md — full palette, typography, logo and trust rules
- docs/STUDENT_FIRST_EXPERIENCE.md — product flow and required additional database migration
- docs/ADMIN_STUDIO_SETUP.md — free-tier activation, required migrations and secure onboarding instructions
- mathsgrove-config.js — public configuration placeholder; never put any secret keys here
- supabase/migrations/20261028_private_student_portal.sql — protected database tables and RLS policies
- supabase/functions/invitations/index.ts — one-time email-bound invitation service
- docs/STUDENT_PORTAL_SETUP.md — full Supabase installation steps
- .github/workflows/pages.yml — deploy this static development preview to GitHub Pages

## Visual identity

Deep navy **#0D1B32**, soft beige **#CDBBA0**, ivory **#F7F4EF**. Typography: Instrument Serif + DM Sans. See `docs/BRAND_GUIDE.md`.

## Local preview

Run `python3 -m http.server 8000` at the repository root, then visit `http://localhost:8000/`.

## Evidence dashboard and examiner reporting

- `sample.html` now contains a fully populated fictional dashboard with Weekly / Daily / Exam programme switcher, progress graph, practice calendar, and clearly hypothetical grade-scenario calculator.
- `sample.html#report` contains a detailed specimen Signature Review with mathematical working in native MathML, method and accuracy observations, strengths, misconceptions and a recovery plan.
- `maths-render.js` typesets basic powers and fractions safely without inserting untrusted HTML.
- `portal.html` shows the real student's **admin-assigned** programme, upcoming suggested practice days and mark-weighted results. Uploaded whiteboard images, photographed notebook work and examiner remarks remain attached to the correct student/paper/question.
- `studio.html` has staff-only programme activation, image previews, mandatory examiner narrative fields and server-validated marking release.
- `supabase/migrations/20261028_entitlements_and_report_narrative.sql` must be run **after** `20261028_student_paper_builder.sql`. These upgrades are **not installed automatically by GitHub**.
- See `docs/EVIDENCE_AND_ACCESS.md` for data/security checks, entitlement limits, and the distinction between illustrative grades and valid predicted grades. **No checkout or public prices.**

## Supabase and production roadmap

See `docs/STUDENT_PORTAL_SETUP.md` and `docs/STUDENT_FIRST_EXPERIENCE.md` for the installation and remaining verification. The Supabase project URL and browser publishable key are configured. Real sign-in is currently limited by the Supabase default email service, while invitation Edge Functions and all cross-account policies still need end-to-end verification.

The Supabase SQL schema has been installed in a new MathsGrove project and its structural checks passed. The next development step is to run `supabase/migrations/20261028_student_paper_builder.sql` in the existing Supabase project, then deploy and verify the invitation Edge Function, configure email delivery and test student/examiner roles before accepting real pupil work.

1. Use invitation-only Supabase Auth; provision students, tutors, examiners and partners through trusted administration.
2. Establish RLS, private storage, organisation boundaries and examiner assignment checks. Test isolation using multiple organisations.
3. Use only public publishable keys in the browser; never commit secret/service-role keys or student records.
4. Build production workflows: adaptive question bank, actual autosave, mark moderation, parent views, subscriptions as entitlements, and immutable reports.
5. Deploy the commercial application to Cloudflare from this repository. GitHub Pages is only a temporary design preview and not an appropriate production host for commercial SaaS.

## Private enrolment

MathsGrove is invitation-only. The public website offers Daily Focus, Weekly Paper, Mock & Review, and individual Signature Review without any displayed prices or checkout. Private administration remains available at the restricted `studio.html` URL for authorised staff and is not a public partner dashboard.

## Compliance

Do not collect real student information until security, privacy, safeguarding, retention, backup and data-processing checks are completed. This is not an official exam board service.
## Administrator-managed learner enrolment (private leaflet structure)

The admin studio now collects each student's exam qualification, exam board, academic tier, Grove Weekly/Daily/Exam programme, end date, priority topics, private staff notes and separate Signature / Signature Advanced / Specialist Review allocations **before generating a key**. Administrators can edit an enrolled student's configuration later without erasing their historical work. These choices are server-controlled, never paid from the student dashboard. The student can update their display name but cannot edit the assigned academic route.

**Supabase upgrade required:** [`supabase/UPGRADE_MATHSGROVE_ADMIN.sql`](supabase/UPGRADE_MATHSGROVE_ADMIN.sql). This one atomic script bundles three previously uninstalled migrations in the right order; check existing migration state before running. Follow [`docs/ADMIN_LEARNER_SETUP.md`](docs/ADMIN_LEARNER_SETUP.md) for the full workflow and limitations. No wholesale pricing or checkout is exposed on the public pages. The private partner leaflet's teacher/guardian accounts and scheduled reporting remain future work, not functioning features.

## Mathematics content research, question bank and mock-paper blueprints (stage 1)

New **Mathematics bank** section in the private [Administrator Studio](studio.html):
- Official exam-board format directory for GCSE and IGCSE, including duration, marks, tier and calculator rules.
- Browse and search Supabase question items with marks, difficulty and staff-only examiner schemes.
- View **24 original public draft question stems**, 12 GCSE and 12 IGCSE, awaiting independently verified solutions and moderation; not published to learners.
- View **68 A/B original mock blueprints**; they are NOT completed papers and cannot yet be assigned.
- Optional migration: `supabase/migrations/20261028_question_content_studio.sql` enables staff-only original question creation and editorial moderation. Question texts and mark schemes are stored securely in Supabase. Editorial approval does NOT publish a question to students.

See the [three-level content directory](content/README.md), [GCSE/IGCSE research matrix](content/BOARD_RESEARCH_2026.md), [assessment timing and upload plan](content/assessment-engine.md) and [mathematical quality gates](content/quality-gates.md).

**Important:** strict timed mock hard stops, server-enforced expiry, autosubmission and upload lockouts are designed but not yet implemented. The existing student portal does support per-question digital whiteboard and photograph submissions. Original MathsGrove materials are not official board-endorsed papers.

## Three Grove service tiers and real timed mock workflow

**Correction:** Grove Weekly, Grove Daily and Grove Exam are the three **commercial service tiers**; GCSE, IGCSE, AS/A Level and exam board are **curriculum choices inside each tier**.

The private Admin Studio Mathematics bank now groups original public **draft** questions by Grove Weekly/Daily/Exam and offers a future-secure mock builder. Grove Exam students have a dedicated Timed mock panel, question-by-question writing/photo uploads, a per-question advisory clock and a server-confirmed mock deadline. **This workflow requires `supabase/UPGRADE_TIER_MOCKS.sql` before it is usable.** No full mock is yet published or assigned; the admin must first approve a complete board-aligned original question set, assemble exact marks, publish and assign it.

Read [the tier product structure](content/programmes/README.md) and the [assessment security specification](content/assessment-engine.md). **60 public draft exemplar stems** (48 earlier + 12 Grove Exam reasoning examples), **120 original reusable Daily/Weekly questions** prepared for the Supabase practice seed, 68 mock *blueprints*, 10 existing original pilot questions, and **zero approved full mock packs** are distinct quantities; don't market a blueprint as a finished paper. Do not publish confidential unseen mark schemes to GitHub.

### Original practice mathematics content

The new `supabase/INSTALL_ORIGINAL_PRACTICE_120.sql` seeds 30 GCSE Daily, 30 IGCSE Daily, 30 GCSE Weekly and 30 IGCSE Weekly questions, each with an indicative examiner marking scheme and mathematically formatted LaTeX statements. The server checks Daily vs Weekly tags and the portal randomises eligible content with weekly topic balancing. Install `UPGRADE_TIER_MOCKS.sql` first. These are **public reusable low-stakes questions**, not secret examiner mocks. Content remains uninstalled until SQL is run.
