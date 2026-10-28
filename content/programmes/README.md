# MathsGrove · The THREE service tiers
**This is the product structure, not three academic qualifications.** Every plan is configured **within** a student's GCSE, IGCSE, AS/A Level (or other) qualification, board and academic tier.

## 1 · Grove Weekly
- Four structured practice sets per calendar month, selected according to the learner's qualification, exam board and academic tier.
- Suitable first target per set: **5–8 original questions, approximately 20–30 marks**, rising in complexity from procedural to multi-step reasoning.
- Examiner approach: visible marks and working evidence; a monthly progress review is a service intention, not an automatically scheduled report yet.
- Practice submission: typed mathematical explanation, digital squared/blank/ruled whiteboard, or photographs for **each individual question**.
- No separately timed full mock sitting is included.

### Example item mix
| GCSE Foundation | GCSE Higher | Cambridge IGCSE Core | Cambridge IGCSE Extended |
| --- | --- | --- | --- |
| Fraction arithmetic, ratio sharing, percentages | Quadratics, functions, geometry and reasoning | Structured equations, ratio, shape & data | Surds, simultaneous equations, exact trigonometry, vector reasoning |

## 2 · Grove Daily
- Short targeted practice on **seven days per week**, in addition to Grove Weekly's allocated sets.
- Typical **three-question focus**: immediate fluency check → a structured step → one short reasoning or error-explanation question.
- Suggested 10–15 minutes per daily set, varying by qualification and difficulty; timers are **advisory**, not exam-session locks.
- If the student struggled with trigonometric ratios, the next content set should target that precise misconception (e.g. wrong opposite/hypotenuse pairing) instead of repeating unrelated GCSE fractions.
- Daily content selection should become genuinely adaptive after enough reviewed responses exist; current pilot uses user-requested topic and difficulty.

### Sample progression
Day 1: algebra. Day 2: geometry. Day 3: recovery of yesterday's weakest skill. Day 4: fraction/number reasoning. Day 5: probability. Day 6: modelling. Day 7: short retrieval review. The actual topic mix must follow the **student's board and evidence**, not a fixed universal syllabus.

## 3 · Grove Exam
- Everything in Grove Daily **plus one assigned original mock sitting per calendar month**.
- The mock must be a complete approved paper aligned to the student's board, syllabus year, academic tier and calculator conditions.
- The administrator selects an approved question sequence with **exact paper marks**, at least 8 original questions across at least 3 topics, and publishes it only after examiner checking.
- A learner receives the mock assignment in their personal **Timed mock** panel.
- When the student chooses **Start**, Supabase records one immutable start and deadline; the countdown continues across browser reloads and offline periods.
- Each question retains typed work, separate whiteboard drawing and individually attached notebook photos, subject to the server's deadline.
- Submissions and file uploads after the deadline are blocked server-side. An active session attempts to finalise on expiry; staff can finalise unattended expired sessions from the marking queue. For guaranteed unattended background finalisation, deploy a scheduled database job.
- The student cannot inspect the unpublished mock question list in the normal practice bank beforehand.
- An examiner reviews the evidence and releases the detailed report; an indicative grade is not official and requires representative moderated papers, current exam-board boundaries and professional judgement.

## Two independent dimensions

| Programme | What the learner gets | Academic route |
| --- | --- | --- |
| Weekly | Recurring structured practice | GCSE / IGCSE / AS / A Level + board + level |
| Daily | Daily focus + weekly practice | GCSE / IGCSE / AS / A Level + board + level |
| Exam | Daily + weekly + **assigned timed mock** | GCSE / IGCSE / AS / A Level + board + level |

The *academic* labels (Foundation, Higher, Core, Extended, AS etc.) must never be mistaken for the commercial service programmes.

## Editorial content queue

- `content/GCSE/draft-exemplars.json` and `content/IGCSE/draft-exemplars.json`: first 24 public draft examples.
- `content/programmes/draft-questions.json`: additional **24 original, programme-tagged public draft stems** (8 each for Daily, Weekly, Exam).
- **48 public original draft examples overall**; these are NOT in the private approved question bank and are NOT full unseen mocks.
- `content/paper-blueprints.json`: 68 board-specific A/B **outlines**. No board exam paper is claimed finished.
- `content/programmes/service-tiers.json`: editable product blueprint for the admin viewer.

Once each item has a fully checked solution, a proper examiner mark scheme and matching board metadata, staff can author its private operational version in Supabase. Do not put unseen question keys or private mock files into public GitHub.

## Activation and security
The required SQL is `supabase/UPGRADE_TIER_MOCKS.sql` (after the previously installed administrator upgrade). It installs the private content-bank authoring tools AND the mock-session schema. **It is not installed by publishing GitHub.** Run it only after reviewing a backup and testing against adult pilot users.

The browser countdown is not the security boundary. Supabase RLS, triggers, controlled stored procedures and private file-storage checks are. The sitting is NOT remotely invigilated or proven cheating-resistant. It remains an internal pilot until negative tests (expiry, resume, multi-organisation isolation, quota and late-upload rejection) pass.
