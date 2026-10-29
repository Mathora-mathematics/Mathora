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

Read [the tier product structure](content/programmes/README.md) and the [assessment security specification](content/assessment-engine.md). **48 public draft exemplar stems**, 68 mock *blueprints*, 10 existing original pilot questions, and **zero approved full mock packs** are distinct quantities; don't market a blueprint as a finished paper. Do not publish confidential unseen mark schemes to GitHub.


## GCSE & IGCSE mathematical content upgrade v2 (180 new practice items)

The three **MathsGrove products** are Grove Weekly, Grove Daily and Grove Exam. GCSE/IGCSE, exam board and Foundation/Higher/Core/Extended remain separate **academic settings** within those products.

- 180 additional original, **public open-practice candidates**: 20 GCSE Daily, 20 GCSE Weekly, 40 GCSE Exam-preparation (Foundation/Higher); 20 IGCSE Daily, 40 IGCSE Weekly and 40 IGCSE Exam-preparation (Core/Extended). See the true allocation by reading the JSON files; the three products are distinguished server-side.
- Every question has mathematical TeX notation where appropriate, a calculated answer, a suggested time, marks and examiner-style guidance. The browser uses accessible KaTeX with text/MathML fallback.
- Admin Studio → Mathematics bank → service-tier filter → **Open practice** expands to reveal questions, answers and marking guidance. A separate **Timed mock** uses unseen, private board-mapped questions only.
- **Not yet installed in Supabase:** run `supabase/UPGRADE_MATHSGROVE_MATHS_V2.sql` only after a backup and confirming the earlier administrator SQL was installed but the Stage 2 content/timer upgrade has not been applied. This combined upgrade installs the content bank, timed mock procedures and 180 practice items in one transaction.
- **Quality boundary:** these are programmatically checked OPEN PRACTICE candidates, not official or human-moderated exam questions; never use them as confidential unseen mocks. Examiner approval and board-syllabus checking remain required for true mock publication.

All existing pupil authentication, whiteboard/photos and marking submission data must be retained and tested before production use.

## Supplementary numerical practice bank (120 more items)

Alongside the existing 180 open-practice items, there are now **120 further original, answer-checked numerical variations** (40 skill families × 3 variants). The expanded administrator catalogue displays **300 public practice candidates**, distributed across GCSE and IGCSE Daily and Weekly programmes, plus **12 more multi-part Grove Exam editorial drafts**. These are not confidential or approved full timed mocks.

To add the extra variants to the Supabase student question bank, first install and verify the existing combined `supabase/UPGRADE_MATHSGROVE_MATHS_V2.sql` (which contains the original 180), then run `supabase/ADD_120_ORIGINAL_PRACTICE_VARIANTS.sql`. **Neither script is installed by a GitHub deployment.** The second installer is idempotent and uses the existing `practice_content_index`, preserving the server-side tier/qualification checks. Review and back up the database before execution.

## Unified interactive marketing experience (October 2026, v4)

The **main `index.html` homepage** is the single public marketing journey. The previous tall iframe embeds were removed. The page preserves the navy, champagne-beige and ivory brand and contains:

- A prominent early Signature spotlight and separate detailed **Signature / Signature Advanced / Specialist Reasoning** section, based on the partner and family programme brochures. Human examiner marking is always **separately arranged**.
- Expanded **Grove Weekly / Daily / Exam** specification, comparison, and accurate tutor/guardian entitlements. Parent and assigned-tutor accounts are **Grove Exam only**. Do not expose private partner pricing on the public site.
- Native interactive tier / qualification / viewer switchers with fictional role-specific analytics. These are **marketing concepts**, not verified real account capabilities.
- A swipeable, multi-month fictional practice calendar. Clicking a day opens a session detail modal. Exam mock days offer a six-minute, three-question **local unmarked simulation**; typed draft answers exist in memory only and are discarded on closing. Prepared answers do not auto-grade user work.
- Fictional progress-trend charts, confidence comparisons and deeper student, parent and tutor interpretation.
- Existing demo whiteboard/typed-answer/local-photo-preview controls, report types, and examiner-style prepared feedback.

**Files:** `showcase-v3.css`, `showcase-v3.js`, `experience-v4.css`, `experience-v4.js` are loaded from `index.html`. The v3 JavaScript exposes limited demo state to v4; v4 owns the enhanced calendar, mock trial and additional analysis. Keep these together when editing.

**Technical boundary:** No marketing demonstration transmits student work, predicts grades, grants real tutor/guardian access or publishes official examinations. The protected `portal.html` and `studio.html` remain separate applications pending security verification and production readiness.

## Email-first enrolment and Grove Exam linked access (29 October 2026)

The private Studio now includes student **name + email + administrator-selected programme**, with conditional parent and tutor email inputs for Grove Exam. All roles use the same `portal.html` email sign-in, follow an individual secure link sent to their registered email, and receive role-specific routing; their matching administrator-issued invitation is redeemed automatically by the database (the previous one-time key remains an optional recovery path). All roles start at `portal.html`; verified membership and server-filtered viewer access determine the destination. `family.html` serves two **distinct server-permissioned views**: a guardian's read-only released progress summary and an assigned tutor's additional released question-level feedback. Accounts do not share passwords. Downgrading from Grove Exam revokes their links and nominations.

**Required deployment step:** back up and manually install `supabase/UPGRADE_EMAIL_FAMILY_ACCESS.sql` after the previous admin upgrade, then configure the Auth redirect URLs and working email delivery. This SQL is not applied by GitHub Pages. Do not onboard real minors until the cross-organisation and safeguarding tests in `docs/EMAIL_FIRST_ENROLMENT.md` have passed. No real accounts or SQL migration have been exercised end-to-end in this code-only iteration.

## First-session diagnostic baseline (October 2026)

All three Grove programmes now have an onboarding **20-question, multiple-choice diagnostic** for each supported qualification and academic tier. Private server-side RPCs control the clock, mark the submitted choices, track basic focus events and generate topic-level academic starting-point reports; the student has an optional fullscreen focus workspace, squared scratchpad and a simple numerical calculator when permitted. TMUA is non-calculator. The same private baseline becomes visible in the staff register and, for Grove Exam, in separate role-limited parent/tutor summaries.

**Supported pilot routes:** GCSE Foundation/Higher; IGCSE Core/Extended; AS/A2; Further Maths; IB AA SL/HL; IB AI SL/HL; TMUA — **12 route-level variants with 20 seeded pilot items each (240 records)**. Some pathways share a KS4 or AS/A2 pilot form. These public GitHub-authored seeds are **not secure production assessments** and must be replaced with unseen moderated content before real high-integrity use. This is a *diagnostic*, never an official predicted grade, and changing browser tabs/fullscreen cannot prove AI use.

**Installation remains manual:** Run `supabase/UPGRADE_BASELINE_ASSESSMENT.sql` after the previous email/family migration, and privately load approved 20-item question sets. Development-only keyed seeds are supplied as `supabase/SEED_BASELINE_PILOT_*.sql`. Read `docs/BASELINE_DIAGNOSTIC_SETUP.md` for installation order, administrator-controlled extra time, pilot safety and the cross-account/time-expiry test checklist. GitHub Pages builds cannot apply SQL migrations, and no real minor's data has been used in a live end-to-end test.

## Baseline QA, safe pilot and administrator launch

**Start here:** `docs/START_BASELINE_TESTING.md`. The migration `supabase/UPGRADE_BASELINE_ASSESSMENT.sql` has been repaired to use paired PostgreSQL function delimiters. `scripts/check-baseline.mjs` now prevents recurrence; `scripts/check-baseline-seeds.mjs` validates each individual multiple-choice entry and answer-key membership. A separate `.github/workflows/baseline-postgres.yml` runs a **disposable Postgres smoke test**, exercising test enrolment, 20-item creation, added-time deadlines, answer saving, marking, retake prevention and role denial. It does not touch the production Supabase project.

In Supabase SQL Editor, use `supabase/VERIFY_BASELINE_INSTALL.sql` **after** applying the migration and inserting test questions. Expect all function flags true, 20 items per installed route, and no direct browser table-reading privileges. GitHub CI/live browser/Supabase verification status must be checked independently: source-level tests are **not proof of production readiness**. Pilot seed questions (and their answers) are public and unsuitable for confidential real-student assessment.

## Connected Supabase installation · 29 October 2026

**Installed in the existing active MathsGrove Supabase project:** email-first student account claim, role-limited parent/tutor assignments and views; the baseline's private storage, route selection, timer, saving/marking and student/staff/family reporting RPCs. Seven baseline-oriented migrations were applied in stages rather than re-running the older all-in-one source file. Six private baseline tables have RLS enabled; no browser role has direct SELECT on the answer bank or responses. The connected assessment bank has **240 enabled pilot questions** for a controlled adult trial. Publicly visible answer keys make them unsuitable for confidential production examinations. This means assessments correctly remain unavailable until a private, independently moderated 20-item set is activated for each academic route.

**Do not rerun the historical `supabase/UPGRADE_BASELINE_ASSESSMENT.sql` against the connected project.** Read `docs/START_BASELINE_TESTING.md` for the up-to-date live state. The public sample seeds are development examples only, not safe live assessment keys. Browser email authentication, a real adult test account's sitting and cross-role isolation still require end-to-end verification before onboarding children.

## Baseline controlled pilot activated · 29 October 2026

Connected Supabase status: **12 routes × 20 active pilot questions (240 records)**, all structurally checked for four unique choices, one matching answer key and nonempty explanations. Live GCSE Higher route returns `ready=true`, `bank_ready=true` and `item_count=20`. A rollback-only, authenticated-session simulation exercised start, selection saving, submission and report without consuming a learner's sitting. Live session count remains zero. Expired baselines are automatically finalised by Supabase Cron job `mathsgrove-baseline-auto-close` every 2 minutes, even when the browser is closed. The Studio baseline register lists not-started, in-progress and complete learners, auto-refreshing every minute while visible. A daily ChatGPT health-check automation monitors operational regressions.

**Critical pilot limitation:** these are development-only specimen questions whose answer keys are in the public GitHub repository. This is suitable for **controlled trial using adults or fictional test accounts only**, not confidential high-stakes or paid examination benchmarking. Content correctness has *structural* and selected calculation checks; it has **not received independent examiner moderation of all 240 items**, and some distinct pathways share pilot forms. Replace bank with unseen, mathematically moderated, board-specific items before admitting real minors or presenting scores as reliable grade evidence. Browser fullscreen and focus logs do not prevent AI assistance. No real emailed sign-in has yet been completed in this chat.

## Automatic tier scheduling and editorial practice engine (October 2026)

The former student-owned paper builder is **hidden** on the portal and its student execution grant has been revoked in Supabase. The student can no longer choose their own paper type, question count, academic demand or level. **Administrators assign academic qualification/level and Grove subscription; Supabase generates calendar tasks automatically on enrolment** (including when membership, preferences and entitlements are created in different orders).

The initial service schedule is Weekly **one 8-item set every seven days**, Daily **one 4-item focus set daily**, and Exam **one 6-item reasoning set daily**, with a **monthly placeholder for a separate staff-moderated timed mock**. The placeholder is not an invented full examination paper. The same secure MCQ engine freezes each opened paper, saves selections, marks automatically, and records approximate per-question visible seconds through heartbeat/focus RPCs. The administrator Studio now includes the calendar register, item-level correct/incorrect and time analysis, suggested teaching rechecks and a **private editorial approval bank**. Timed Exam daily tasks are auto-closed by Supabase Cron every two minutes, in addition to the baseline expiry job.

Content state: **240 active public-key pilot records** copied from baseline specimens, suitable only for adult sandbox testing, plus **48 new original inactive KS4 drafts** distributed equally across Weekly/Daily/Exam and GCSE Higher/IGCSE Extended. New questions are metadata-tagged and require approval by a designated MathsGrove content editor with written mathematical review notes. **The 48 private authoring keys do not appear in the public site or repository.** Editorial scope is described in `docs/THREE_TIER_AUTOMATED_CONTENT_ENGINE.md`. The baseline remains the first required assessment.

**Not complete:** unseen independent production question bank, board-specification-by-specification moderation for all 12 routes, monthly full mock publication, periodic aggregated PDF reports, fully calibrated grade predictions, real-browser end-to-end tests, and review of accessibility/time-signals under assistive technology. Student work is not high-integrity invigilated by tab/fullscreen events. GitHub Pages deployment for the latest commits must be checked in GitHub Actions.
