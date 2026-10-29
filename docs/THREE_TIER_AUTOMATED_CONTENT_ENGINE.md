# MathsGrove | Programme-assigned mathematics content system
**Status 29 October 2026: working technical pilot, not an exam-secure released library.**

## Principle: qualification and Grove subscription are independent axes

The **administrator alone** assigns the mathematics qualification, academic level, examination board, Grove subscription and approved time arrangements. GCSE Foundation/Higher and IGCSE Core/Extended define academic *demand*. Grove Weekly/Daily/Exam determine *cadence, feedback and service*. Do not confuse them.

The old paper-selection form is hidden on the portal and the student-owned `create_student_paper` RPC execution permission has been revoked. The student sees **assigned sessions**. The event calendar is materialised by database triggers when an administrator activates or edits an entitlement or academic route; it refreshes on student login.

| Subscription | Automatic assigned work | Initial question volume | Indicative session purpose | Reporting |
| --- | --- | --- | --- | --- |
| Grove Weekly | One mixed-topic set on each seventh day from activation | 8 MCQ pilot items | Interleaved retrieval, misconception checks, feedback after completion | Immediate session analysis, monthly aggregate still to build |
| Grove Daily | One skill-focussed assignment each day | 4 MCQ pilot items | Short, repeatable fluency / reasoning recovery | Immediate feedback; weekly summary not yet automated |
| Grove Exam | One daily reasoning-focused assignment plus separate monthly moderated mock slot | 6 MCQ pilot items per daily assignment | Harder reasoning and exam-readiness; full timed monthly mock only after moderator-approved paper publication | Immediate session report; rigorous grade outlook requires wider evidence |

**These MCQ pilot sizes and automatic due dates are MathsGrove product design, not official component lengths.** Existing Grove Exam mock packs remain independent and must be published and assigned by staff; the calendar's pending mock slot is not an invented live exam.

## First qualification authoring focus

**GCSE Higher (Pearson Edexcel 1MA1)** and **Cambridge IGCSE Extended (0580)** are the current authoring targets. The 48 original, tier-tagged KS4 draft records in the **private** editorial bank are distributed:

- Weekly: 16 items (8 per qualification), spanning ratio, fractions, linear algebra, Pythagoras, statistics, probability, percentages and sector geometry.
- Daily: 16 items (8 per qualification), spanning surds, quadratics, indices, rational algebra, composite functions, compound percentages, trigonometry and quadratic inequalities.
- Exam: 16 items (8 per qualification), spanning algebraic geometry modelling, 3-D Pythagoras, quadratic variation, average-speed reasoning, bounds, discriminants, consecutive integer modelling and similarity.

The 48 records include four choices, one keyed answer, worked rationale, topic, intended skill, 1–5 difficulty, exam-board target, Grove programme scope and an indicative question-time target. They are **inactive drafts**. They can be reviewed in the administrator Studio, with mathematically specific checking notes required before approval. An approved new question takes priority over a generic pilot question of the same programme and academic route.

The active pilot bank contains **240 public-example records covering 12 academic routes**. Those records are copied from the original public baseline specimens and are unsuitable for unseen examinations. Some pathways reuse the same pilot content. Neither the 240 pilots nor the 48 privately stored drafts constitute a confidential, fully moderated question bank.

## Required mathematics review per item

1. **Specification match:** Verify syllabus year, exam-board content, demand and calculator policy. For Cambridge IGCSE 0580, note that Paper 2 Extended is non-calculator and Paper 4 Extended is calculator-based under the 2025–27 syllabus. The actual MCQ practice is *not* a simulation of an official paper.
2. **Exactly one correct response:** Solve algebraically or numerically independently; check all distractors are distinct, plausible, and not alternative valid answers due to rounding, domain or notation.
3. **Working and units:** Check algebraic domain restrictions, significant figures, angle ranges, diagram dependencies, dimensions, exact/decimal form and whether a calculator is intended.
4. **Misconception tags:** Record what each wrong option diagnoses; a numerical wrong answer without clear error logic is a weak distractor.
5. **Demand:** Weekly uses breadth and retrieval; Daily concentrates on a short skill sequence with a follow-up misconception test; Exam includes unfamiliar multi-step reasoning and, separately, moderated full papers.
6. **Time:** Record expected question time as an **editorial estimate**. Live onscreen time is a *focus signal*, not proof of active working or independent performance. Network loss, assistive technology and breaks can make it inaccurate.
7. **Publication:** Human examiner approves in Studio with a specific review note. Approved questions can be used for newly opened assigned sessions; already started sessions retain frozen question snapshots.
8. **Security:** Never publish keyed production sets to GitHub Pages or a public repository. The baseline key is not exposed in the client; confidential production practice questions must remain in private Supabase.

## Report and insight model

For each completed session, server-owned marking records: raw MCQ accuracy, question topic and intended skill, difficulty, question visible time, correct/incorrect, and topic aggregates. Administrators see an ordered breakdown in the Studio. Students see their own question-level review and first priorities. This is low-stakes *practice evidence*; it is not a predicted GCSE/IGCSE grade. A grade outlook requires many independent, moderated questions, longer written tasks, calibration and human review.

### Follow-up development stages

1. Complete editorial sign-off and add **distinct** worked variants to avoid repeating baseline questions.
2. Expand IGCSE Core and GCSE Foundation by qualification, then A Level AS/A2, IB AA/AI SL/HL, Further Maths and TMUA; keep entrance exams separate.
3. Write weekly interleaving and daily recovery logic based on baseline weak topics, including minimum breadth and repetition spacing.
4. Build full board-specific, timed Grove Exam mock papers with mark schemes and diagrams; integrate only moderator-approved published mocks into monthly scheduled assignments.
5. Automate weekly/monthly cross-session report summaries, and validate meaningful progress trends before giving any predictive outlook.
6. Complete keyboard/accessibility/real-browser testing, privacy/role isolation tests, academic independent moderation and safeguarding review before accepting real minor accounts.

### Source grounding

- Cambridge International 0580 Mathematics official 2025–27 syllabus: https://www.cambridgeinternational.org/Images/662466-2025-2027-syllabus.pdf
- Cambridge International 0580 qualification and assessment updates: https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-mathematics-0580/
- Pearson Edexcel GCSE Mathematics 1MA1 specifications should be confirmed directly for each exam board/year before private item approval.

