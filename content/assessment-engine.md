# Assessment engine design — whiteboard, photos and honest timing
**Design requirement; NOT YET IMPLEMENTED as a secure hard-stop timer.**

## Per-question evidence
- One *frozen* paper question id, visible question number, marks, suggested time and a readable real-time clock.
- Student may (a) type their working, (b) use the current squared/line/blank whiteboard with pen/eraser/highlighter/colours, (c) upload JPG/PNG/WebP notebook images up to current browser limits, or (d) combine methods.
- Autosave both text and drawing state across navigation/refresh; store whiteboard images and notebook photos under the matching attempt and question.
- Show an upload status for each file and distinguish uploaded evidence from pending/in-flight uploads. Never silently discard a file on navigation.
- An examiner must see **all** attached work in the private marking queue. Do not release an auto-marked response as an examiner-reviewed mark for complex handwritten methods.

## Assessment clocks
1. **Question suggested time** is instructional only by default: calculate from mark allocation or admin override; countdown may colour an indicator but should not ordinarily lock a question. Students may navigate and return.
2. **Full mock hard stop** is an absolute server time: `started_at`, `duration_seconds`, `deadline_at`; server writes `deadline_at` on issuing a frozen paper. Client countdown uses server-provided time offset, not `Date.now()` alone.
3. On expiry, the server must refuse answer edits, drawing uploads, photo uploads and further question submissions, and atomically mark the attempt `submitted`/ `expired`. The UI becomes read-only and clearly shows saved vs incomplete uploads. Failing upload before cutoff must show an explicit warning and recovery protocol.
4. Refreshing, changing tabs, going offline or tampering with device time must **not restart or extend** the clock. Run a server-side expiry worker/transaction to finalize sessions where no browser remains open. A client-side 'time up' view alone is insecure.
5. Accessibility: announce '10 minutes left' / '5 minutes left' without aggressive animation, allow approved accommodations such as extra time assigned by administrator **before** start; preserve audit log of changes.
6. Integrity: no publication of answers/mark scheme until authorized release, no browser-visible privileged service keys; never place confidential unseen mock solutions on public GitHub Pages.

## Paper creation & editorial safeguards
- Admin selects board, year, grade tier, paper code, calculator rule, and approved original question set.
- Check total marks EXACTLY against board target, no repeated question family, correct AO and topics, skill progression, and appropriate context/diagram coverage.
- Lock question list when assigned. Teacher review of answer key and full mark scheme required before 'publish'.
- Learners can select only mock packs actually assigned to them; no random 8-question pilot paper should be presented as a full official-format 100-mark mock.

## Future server-side schema
`assessment_packs` (org, title, board, syllabus year, paper code, marks, duration, published), `assessment_pack_questions` (position, original question, max marks), `assessment_sessions` (student, pack, started_at, deadline_at, submitted_at, status, extra_time_authorisation), `assessment_evidence` (question, typed/whiteboard/photo, uploaded_at). Timing enforcement on **all** writes, not just the finish button.

Note: on current pilot, students already have a squared whiteboard, coloured pen/highlighter/eraser and per-question image upload. The secure full-mock deadline and dedicated per-question timer are for the next stage.
