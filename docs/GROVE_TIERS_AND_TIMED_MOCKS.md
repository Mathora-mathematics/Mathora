# Grove Daily / Weekly / Exam — content and timed mock activation

The three levels are the commercial service tiers **Grove Weekly, Grove Daily, Grove Exam**, not GCSE / IGCSE / AS and A Level. Every service tier has a student-selected academic experience assigned by an administrator: qualification, board, academic level, and focus areas.

## What the student receives

- Grove Weekly: up to four original weekly/topic papers monthly. Current content is pilot-sized and marking must be reviewed.
- Grove Daily: seven days of short practice per week PLUS the Weekly allocation. Daily automatic delivery and scheduled weekly reports are not built yet.
- Grove Exam: Daily and Weekly PLUS one assigned original, timed mock sitting per calendar month. Signature / Signature Advanced / Specialist reviews remain separate services.

Students can submit typed working, original digital graph-paper drawings and notebook photographs against each paper question. The per-question elapsed clock is advisory. The Grove Exam overall deadline is enforced by the database.

## Mock workflow

Admin Studio > Mathematics bank > Mock paper builder:
1. Select exact curriculum board, academic tier and official paper component. The interface fills the official duration, mark target and calculator rule from the board research file.
2. Select private, original, human-approved questions of the same board and tier.
3. Create a draft with EXACT official mark total and no duplicates; publication requires at least eight questions covering three topics, approved examiner marking guidance and verified format.
4. Publish and assign only to a verified Grove Exam learner with matching qualification, board and tier.
5. Student opens Timed mock, confirms start and receives a database-set immutable deadline. No browsing unseen mock question text before starting.
6. Student answers, draws, uploads and navigates until the deadline; late answers and uploads are rejected. Examiner staff can finalise unattended expired sessions on opening the marking queue.
7. Examiner marks all questions (blank responses are pre-created), writes the detailed narrative and releases the report.

A scheduled database job is required for guaranteed unattended finalisation when no browser or examiner is online. This implementation is not remote-invigilated and cannot prevent second-device use.

## Content status

- 48 publicly viewable, ORIGINAL and UNAPPROVED draft question stems in GCSE/IGCSE and the tier-specific writing queue.
- 68 board-specific A/B mock BLUEPRINTS with paper structure, minutes and marks. These are NOT completed mock papers.
- 10 old pilot questions in the real Supabase database.
- ZERO completed, moderated, published mock packs from this change.

To create finished mocks, each draft must first have a verified correct answer, justified method/accuracy marking guidance, diagrams where required, exact syllabus/tier/year metadata and independent examiner review. Do not place unseen private solutions in public GitHub.

## Next SQL upgrade (not executed by GitHub)

Use supabase/UPGRADE_TIER_MOCKS.sql **only after** the previously installed administrator upgrade, and only if these new tables are still absent. This installs the question content studio AND timed mocks together inside one transaction. No keys, students or invoices are created.

Preflight in Supabase SQL Editor:

    select to_regclass('public.question_editorial') as content_bank,
           to_regclass('public.mock_board_templates') as board_templates,
           to_regclass('public.mock_packs') as mock_packs,
           to_regclass('public.mock_assignments') as assignments;

All four should be null before the upgrade. Back up first. Do not run the script if any already exist without reviewing migration history.

After upgrade, test with controlled adult accounts: students cannot self-assign packs or bypass tier quota, mock deadlines cannot be changed from browser, late direct answer and storage writes fail, cross-organisation data isolation holds, signed image access expires, staff marking remains permission-restricted, and previous learning records remain intact.

This is an implemented and deployed DEVELOPMENT workflow that still needs Supabase activation, substantial original maths content and end-to-end security tests before children use it.
