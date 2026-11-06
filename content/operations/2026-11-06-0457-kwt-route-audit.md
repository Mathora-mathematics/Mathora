# MathsGrove editorial audit — 2026-11-06 04:57 Kuwait

Batch: 2026-11-06-0457-KWT-route-audit. Project: nwakgkxytovprrrwyahs. Repository: Mathora-mathematics/Mathora.

## Work performed
Read live private.grove_practice_bank schema, three inactive editorial drafts, and aggregated approved-active counts by exact stored exam_board / academic_level / programme_scope. No student records accessed, no data changed.

## QA decisions
- dc872434-96b8-4420-a3c6-3f034733eea9 — Pearson Edexcel IAL WMA14/01 P4 Daily: partial fractions integral; independently checked A=1, B=4 and integral ln(2)+4ln(4/3). Retain draft: exact current specification/year, duplication, student history and rendered KaTeX not established.
- 3abf13fb-ec6e-4523-8d60-52428cdc1844 — Pearson Edexcel IAL WMA14/01 P4 Exam: dy/dx=2xy, y(0)=3 gives y(1)=3e; derivative check passes. Retain draft for same unresolved safeguards.
- 10ecade3-6797-4820-87ad-896e19337775 — Pearson Edexcel GCSE 1MA1 Higher Weekly: 5/6 of 66 = 55, but low-tier demand; retain draft, not representative Higher assessment.
Accepted for activation: 0; rejected/held: 3. New authored: 0. Signature human releases: 0.

## Live route gaps (lower-bound diagnostic, not student eligibility)
Stored board labels are inconsistent: 'Cambridge IGCSE 0580', 'Cambridge 0580 Extended', 'Cambridge IGCSE 0580 Extended' are separate groups. The first label has 0 approved-active Extended Daily (8 drafts), 0 Extended Exam (8 drafts), and 0 Extended Weekly (8 drafts). Pearson Edexcel IAL WMA14 P4 A2 has only 1 approved-active each in Weekly, Daily and Exam; alternate academic_level labels A2 Pure Mathematics 4 / A2 also occur. Cambridge 9709 P6 Statistics 2 A2 has 1 approved-active each in Weekly, Daily, Exam. These are counts per stored string, not consolidated qualification totals. A naive shortfall for each exact 0580 Extended group would be 32 Weekly, 112 Daily, 188 Exam, before additional weekly requirements; this must NOT be reported as actual route availability until aliases, assignments and history are resolved.

## Publication and unresolved safeguards
No database updates, website code changes or deployments. Student-level no-repeat screening, duplicate fingerprints, full official specification/year and paper calculator mapping, browser KaTeX rendering, and atomic publication readback not completed. Do not activate drafts without these. No human Signature moderation was fabricated. Official specification source for future verification: https://www.cambridgeinternational.org/Images/662466-2025-2027-syllabus.pdf ; Pearson current component source must be checked before publication. No confidential keys or personal data included.
