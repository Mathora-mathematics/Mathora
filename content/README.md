# MathsGrove · Academic content architecture
**Editorial research:** 28 October 2026. **Status:** Paper format research + draft mock blueprints; not a completed approved mock bank.

## THREE MathsGrove service tiers (the primary product structure)

- [Grove Weekly / Daily / Exam](programmes/README.md) — service tiers, allocated practice, original question examples and timed mock behaviour. These three are **not** GCSE/IGCSE/A Level.
- [Programme configuration JSON](programmes/service-tiers.json) — cadence, duration and intended maths question mix.
- [24 additional original tier-specific draft stems](programmes/draft-questions.json) — review-only, not secure unseen mocks.
- [12 Grove Exam multi-part editorial problems](programmes/exam-reasoning-drafts-12.json) — review-only, not yet full mocks.
- **120 mathematically formatted, reusable practice items** in four operational JSON packs (GCSE/IGCSE Daily and Weekly) and the [Supabase installation script](../supabase/INSTALL_ORIGINAL_PRACTICE_120.sql).

## Academic pathways inside any of the three programmes
- [GCSE](GCSE/README.md) — English GCSE (9–1): AQA 8300, Pearson Edexcel 1MA1, OCR J560, Eduqas; Wales WJEC maintained separately pending precise reformed assessment verification.
- [IGCSE](IGCSE/README.md) — Cambridge 0580 and 0980, Pearson Edexcel Mathematics A linear and modular, OxfordAQA 9260. Different grading routes, calculator policy and syllabus years.
- [AS_A_LEVEL](AS_A_LEVEL/README.md) — later stage: UK AS/A Level, Pearson International AS/IAL, Cambridge International AS/A Level and Further Mathematics. Do **not** mix with GCSE/IGCSE when building papers.

## Source manifests
- [boards.json](boards.json): independently verified board format metadata: durations, marks, calculators and tiers, linked to official awarding-body sources.
- [taxonomy.json](taxonomy.json): subject content and assessment objectives by academic stage.
- [paper-blueprints.json](paper-blueprints.json): **68 ORIGINAL A/B mock outlines**, with time/marks/tier/board. Every record is `status:"blueprint_only"` and `published:false`. None is a finished/approved question paper.
- [assessment-engine.md](assessment-engine.md): stringent mock timing, per-question guidance, saved answers, whiteboard and photographs.
- [quality-gates.md](quality-gates.md): checking correctness, syllabus mapping, method marks, ambiguity, diagrams, and secure release.

## Content lifecycle
**Research syllabus → draft original question → solve independently → check mark allocation → label board/tier/AO/calculator/skills → review mathematical language and diagram → approve editorially → validate board and publish separately → assemble new mock → check total marks/time/coverage → second-person moderation → publish.**

An administrator can review the existing ten pilot items in the live Studio. The separate optional SQL migration `supabase/migrations/20261028_question_content_studio.sql` adds a tenant-isolated original-question authoring and moderation workflow. **Running this migration requires a backup and access-control tests; GitHub deployment does not install it.**

## Confidentiality
This GitHub repository and GitHub Pages are **public**. Never put unseen paper solutions, confidential mock questions, student data, private question-bank answer keys, secrets, or images here. The private mark scheme is stored in the Supabase `mark_schemes` table behind staff RLS, not in `boards.json` or GitHub Pages assets. Public blueprints contain no unseen questions.

These are independently authored MathsGrove materials **inspired by exam demands**, not official or board-endorsed exam papers. Do not copy protected past paper questions/diagrams without permission.
