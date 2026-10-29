# MathsGrove — 20-question diagnostic baseline

**Status:** Website and migration source are committed. This does **not** mean the migration has been applied or a real sitting has been completed. Verify with adult test accounts first.

## Student experience
- The first time a student with an assigned supported academic route opens `portal.html`, the portal checks `baseline_status`. Once the corresponding 20-item bank is installed, an incomplete student is directed to `baseline.html`. Completed students can return to their normal work and revisit the report.
- One 20-item multiple-choice sitting per student **and qualification/academic level**. Each item has four options, one correct response, and one mark; unanswered items receive zero. The correct choice and rationale remain in a private schema until the session has closed.
- Student can navigate all 20 items, change their answers until submission, resume after a page refresh (timer still running), and see answer-save confirmation.
- The built-in squared whiteboard has pen, highlighter, eraser, undo and clear. **Drawings are temporary, not uploaded, not marked and are lost on page reload.** This avoids mistaking digital rough work for a verified examiner assessment.
- An on-page numerical calculator is provided for supported calculator-permitted diagnostic routes; TMUA is **non-calculator**. Calculator settings are diagnostic policies, not promises of exact official exam-component conditions.
- The countdown and deadline are **server-controlled**. A client clock or page refresh cannot extend time. On expiry, the next server call closes and marks the sitting.
- Optional fullscreen focus mode, browser tab-hidden/focus changes and fullscreen exits can be logged. **Browsers cannot lock operating systems, stop another device, or reliably detect AI use.** These events are contextual and do not prove dishonesty. No webcam, microphone or covert surveillance.
- After submission/expiry, a private report gives raw score/20, a descriptive *starting* band, topic-level evidence, first priority areas and a question review. **It is not an official predicted grade**; 20 MCQs do not validate written mathematical reasoning.

## Currently implemented routes, 20 pilot items each

| Qualification | Academic level | Default time |
|---|---|---|
| GCSE | Foundation | 35 minutes |
| GCSE | Higher | 45 minutes |
| IGCSE | Core | 35 minutes |
| IGCSE | Extended | 45 minutes |
| A Level | AS | 55 minutes |
| A Level | A2 | 55 minutes |
| Further Mathematics | Further | 60 minutes |
| IB Mathematics AA | SL | 55 minutes |
| IB Mathematics AA | HL | 55 minutes |
| IB Mathematics AI | SL | 55 minutes |
| IB Mathematics AI | HL | 55 minutes |
| TMUA | TMUA | 45 minutes, no calculator |

These are **independent MathsGrove diagnostics**, not official exam papers or official timings. For comparison, the actual TMUA consists of two 75-minute, 20-item non-calculator papers; MathsGrove's one 45-minute baseline is deliberately a different, shorter task. Question-writing samples are original; mathematics, academic level and board coverage require independent moderation. IGCSE Core and GCSE Foundation currently reuse an original KS4 pilot set; IGCSE Extended and GCSE Higher reuse a different KS4 pilot set. IB AA SL and A Level AS share a pilot set; IB AA HL and A2 share another. Do not present these as separately board-moderated or fully adaptive papers.

**11+, 13+, 16+, ESAT and STEP-style admissions mathematics** remain planned for a future distinct question-bank/schema expansion. Never assign a placeholder test to these routes.

## Installation (SQL Editor, existing Supabase project only)
1. Back up production data. Verify the original platform schema, `supabase/UPGRADE_MATHSGROVE_ADMIN.sql` and `supabase/UPGRADE_EMAIL_FAMILY_ACCESS.sql` have been applied in order.
2. **Already completed in the connected MathsGrove project.** Do not rerun the older all-in-one SQL upgrade on that existing project. If targeting a different project, inspect its schema and migration history first. Browser/public roles receive **no direct access** to marking keys or student-response tables.
3. For **development only**, optionally load the three source-controlled seed sets in order:
   - `supabase/SEED_BASELINE_PILOT_KS4.sql`
   - `supabase/SEED_BASELINE_PILOT_ALEVEL_IBAA.sql`
   - `supabase/SEED_BASELINE_PILOT_SPECIALIST.sql`
   Each inserts 80 rows (four 20-question routes), for 240 route-specific pilot records. A baseline only becomes startable when all 20 active items for the assigned route exist. The connected pilot bank has **240 active development-only items**; new private bank items default to inactive to prevent accidental live use.
4. **Do not use these publicly committed keyed pilot seeds as high-integrity, confidential or professionally invigilated assessment material.** Their correct answers can be recovered from Git history by anyone. Before onboarding live children, independently moderate the maths and distractors, commission and privately upload rotated unseen items, and keep future keyed question banks **outside the public GitHub repository**. Randomising answer order is not sufficient to make publicly visible questions secure.
5. Confirm email sign-in, Supabase Auth, profile/membership RLS and storage policies. The baseline does not create accounts or bypass verified-email login.
6. In the administrator Studio, assign a qualified route and full academic level. Before the first sitting, staff may set approved additional time (0%, 25%, 50%, 100%) in the baseline register. This is calculated into the **server deadline**, without storing a reason for the arrangement. Once a sitting starts, changes require individual academic review.
7. Test the dashboard onboarding, question marking, browser-exit events and cross-organisation data isolation with **adult dummy accounts**. Do not use sensitive student/child records until tests pass.

## Server API
- `baseline_status()`: validates student, qualification, programme and 20-item bank. Returns only sanitized prompt/choices and own selected answers when active, or own diagnostic when closed.
- `baseline_start()`: idempotent server-side new sitting, 20 privately stored randomized option orders, fixed deadline.
- `baseline_answer(session_id,position,choice)`: server-checked, one answer per position, writes only while open.
- `baseline_event(session_id,kind)`: throttled visibility/focus/fullscreen-exit metadata.
- `baseline_finish(session_id)`: atomic server closure and marking.
- `baseline_admin_overview(org_id)`, `baseline_staff_report(student_id)`: staff only, correct organisation.
- `baseline_set_accommodation(student_id,extra_time_percent)`: partner/admin only, before start.
- `baseline_family_report(student_id)`: active Grove Exam nominated recipient only, checks verified email/role/organisation/entitlement on every call; parents receive summarized topic outcomes, tutors additionally see limited skill-level teaching cues, never private whiteboard work or answer keys.

**Current pilot grading** is raw score and a four-band starting descriptor: 0–6 foundations, 7–12 developing, 13–16 secure, 17–20 strong. These are **MathsGrove internal descriptive categories only**; they are not official qualifications, statistical grade boundaries or predictions.

## Required three-stage live verification, NOT YET PERFORMED

### 1. Mathematical & UX
- Independently validate all 20 stems, four options, single correct answer, mathematical explanation and time/calculator rule for each route.
- Verify KaTeX/Unicode maths readability, small screens, keyboard and screen-reader navigation.
- Confirm calculator expressions, drawing/eraser behaviour, navigation and autosave state.
- Check correct status if the question bank has fewer or more than 20 approved items.

### 2. Authentication, isolation & deadlines
- Wrong user, user in second organisation and unverified email: denied.
- Participant cannot read answers, tables or other student sessions via browser API before completion.
- A student cannot modify their qualification or change from Higher to Foundation to get an easier test.
- Reload mid-test: same randomized questions and correct remaining server time.
- Offline long enough for deadline to pass: server closes on reconnect and rejects late writes.
- Simultaneous starts: only one session; finish or refresh cannot create a retake.
- Student attempts different session_id, out-of-range position or invalid answer: denied.
- Student tries to call staff report, accommodation or family report: denied.

### 3. Reporting, role access & accessibility
- Correct automatic score, unanswered zero, topic totals and solution access only after closure.
- Parent report shows only authorized active Grove Exam learner topics and summary; assigned tutor sees approved skill guidance; changing email or downgrading revokes access immediately.
- Tabs and fullscreen exits are counted as **context**, not automatic accusations or proof of AI use. Ensure accessibility adaptations don't penalise learners.
- Set 25%/50% extra time **before** assessment and confirm actual stored server deadline.
- Confirm admin sees baseline results in correct organisation and no other.
- Confirm failed migration or missing bank shows safe explanation, never a fake diagnostic score.

## Remaining hardening
- Private moderated non-public baseline banks and distinct exam-board forms.
- Formal question equating, alternate versions, real grade-calibration only with robust evidence.
- Human review of any suspicious/inconsistent assessment signals instead of automated misconduct labels.
- Secure anti-sharing controls beyond basic browser focus mode require controlled-invigilation solutions, not GitHub Pages alone.

## Baseline controlled pilot activated · 29 October 2026

Connected Supabase status: **12 routes × 20 active pilot questions (240 records)**, all structurally checked for four unique choices, one matching answer key and nonempty explanations. Live GCSE Higher route returns `ready=true`, `bank_ready=true` and `item_count=20`. A rollback-only, authenticated-session simulation exercised start, selection saving, submission and report without consuming a learner's sitting. Live session count remains zero. Expired baselines are automatically finalised by Supabase Cron job `mathsgrove-baseline-auto-close` every 2 minutes, even when the browser is closed. The Studio baseline register lists not-started, in-progress and complete learners, auto-refreshing every minute while visible. A daily ChatGPT health-check automation monitors operational regressions.

**Critical pilot limitation:** these are development-only specimen questions whose answer keys are in the public GitHub repository. This is suitable for **controlled trial using adults or fictional test accounts only**, not confidential high-stakes or paid examination benchmarking. Content correctness has *structural* and selected calculation checks; it has **not received independent examiner moderation of all 240 items**, and some distinct pathways share pilot forms. Replace bank with unseen, mathematically moderated, board-specific items before admitting real minors or presenting scores as reliable grade evidence. Browser fullscreen and focus logs do not prevent AI assistance. No real emailed sign-in has yet been completed in this chat.
