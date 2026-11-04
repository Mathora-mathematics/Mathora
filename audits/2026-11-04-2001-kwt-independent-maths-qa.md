# MathsGrove independent QA — 2026-11-04 20:01 Asia/Kuwait

Production project: nwakgkxytovprrrwyahs. Repository: Mathora-mathematics/Mathora. Read-only production verification; no release, marking, or student-data writes.

## Live bank
SQL: `select review_state,active,count(*) from private.grove_practice_bank group by 1,2;`
Result: approved/active 1942; pilot/active 240; draft/inactive 54; total 2236. Prior 18:00 total 2235, with 53 drafts. The new draft is c8d7bb56-0cf2-4d0b-a6dd-570a2041e643, documented in editorial commit fbe5aece4f8c7bf6d6391833e7b7f95297b4193e. No newly approved count increase observed; record-level approved modifications not excluded.

## Independently recalculated latest draft
Pearson IAL Mechanics 2 WME02 impulse, m=0.8 kg, u=(3,-4) m/s, v=(-2,5) m/s.
Delta v=(-5,9) m/s. J=m Delta v=(-4,7.2) kg m/s = (-4,7.2) N s. Recorded correct option exactly matches. Other choices (4,-7.2), (-1.6,4), (-5,9) N s are distinct and incorrect. (-1.6,4)=m*v (final momentum); (-5,9)=Delta v without multiplying by mass; (4,-7.2)=-J. Explanation's claim that reversed vector is impulse on another body assumes a two-body interaction and is not needed to justify incorrectness; preferable to say it reverses the change in momentum. Unit consistency passes. No LaTeX syntax in prompt requiring KaTeX parsing, but browser rendering not tested. No other bank prompts with 'impulse' or skills with 'impulse' found (targeted search only, not semantic-family proof).

**Decision: keep inactive draft** until exact current official WME02 syllabus and examination conditions, copyright/provenance, broad semantic-family and authenticated rendering checks are completed. No owner approval gate.

## Student assignment checks
SQL: `select b.review_state,count(*) from private.grove_task_items i left join private.grove_practice_bank b on b.id=i.bank_id group by 1;`
6 approved and 4 pilot references. Historic pilot assignment exception persists. Tasks by status: 33 scheduled, 1 completed, 1 expired. Literal 'ready' absent, not proof of UI defect. Per-student unseen pool, tier/mode, baseline adaptation and authenticated Ready UI not verified.

## Editorial and Signature
Approved items: 1942/1942 without reviewer identity, 36 missing review timestamps, 228 explanations under 100 characters. Signature: 11 assessments, declared 255 marks, zero with both human moderator and timestamp. Complete independent per-part mathematical and mark-scheme certification not performed; human-only moderation and release gate preserved.

## Other open checks
Official 2026–27 qualification/component syllabus, copyright provenance, authenticated cross-user RLS, private evidence storage and whiteboard/photo permissions, marking pathways, server mock timer enforcement, browser KaTeX, and latest GitHub Pages CI not verified this run. Do not count as passes. No production fixes attempted without evidence sufficient to guarantee safety.

## Reproducibility
Additional SQL:
`select count(*) from private.grove_practice_bank where id <> 'c8d7bb56-0cf2-4d0b-a6dd-570a2041e643' and (lower(prompt) like '%impulse%' or lower(skill) like '%impulse%');` -> 0.
`select count(*),sum(total_marks),count(*) filter(where human_moderated_by is not null and human_moderated_at is not null) from private.grove_signature_editorial;` -> 11,255,0.

Next audit: prioritize authenticated student selection and pilot exclusion, official WME02 scope, and per-part Signature checks. Findings to be included in established evening reporting.
