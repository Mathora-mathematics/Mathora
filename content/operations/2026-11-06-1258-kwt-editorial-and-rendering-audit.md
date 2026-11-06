# MathsGrove content/editorial audit — 2026-11-06 12:58 Asia/Kuwait

Batch: 2026-11-06-1258-KWT. Source: live private Supabase project nwakgkxytovprrrwyahs. This journal records only executed checks, not assumed publication.

## Live inventory
SQL grouping of private.grove_practice_bank: approved/active 1,942; pilot/active 240; draft/inactive 54; total 2,236. Pilot must not be counted as editorially approved. No student-specific eligible counts established. Requirements: Weekly 32; Daily 112 plus weekly; Exam 188 plus weekly. Exact per-board/component/tier and seen/eligible shortfalls not established because board aliases, programme_scope=all and student task history require canonical joins.

## Individual candidate review
- IB AA HL Daily complex roots, ID 08231b79-1369-4acb-a967-ebf6572d7097: z²=-7+24i, Re(z)>0 => 3+4i. Independent check (3+4i)²=-7+24i. -3-4i fails positive real part; 3-4i gives -7-24i; 4+3i gives 7+24i. Distinct and unique answer. SQL inspected prompt's literal backslashes: 7 total, **no adjacent double-backslash sequence** (position(chr(92)||chr(92) in prompt)=0). Earlier suggestion that prompt stored doubled backslashes is NOT supported by this database check; browser KaTeX render remains untested. Remains draft/inactive.
- Cambridge 0580 Extended Daily composite functions, ID 04eda30d-73f2-4b77-9000-34575004a348: f(g(2))=3(2²-1)+3=12; options 12,9,15,6 distinct. Draft/inactive.
- GCSE Higher Weekly arithmetic mean, ID 0cdfe39f-5249-4cba-9d10-555680b48869: (4+8+12)/3=8, correct but weak Higher-tier challenge. Draft/inactive; not approved.

## Route/schema findings
Observed inconsistent Pearson IAL WMA14 academic_level variants 'A2 Pure Mathematics 4' and 'A2', as well as programme_scope='all' rows with empty exam_board and qualification labels distinct from canonical routes. Raw exact-label zero counts must not be interpreted as true eligible shortages.

## Publication decision
Accepted for mathematical correctness only: IB AA HL and Cambridge 0580 candidates (2); rejected as representative Higher difficulty: GCSE mean (1). Activated 0, created 0, repaired 0, Signature releases 0, website deployments 0. No human examiner sign-off. No full-bank duplicate, official current-syllabus, student no-repeat, or browser render checks completed; therefore no publication. Signature Advanced/Specialist paper authoring not completed in this batch.

Official syllabus reference for Cambridge 0580 2025–2027: https://www.cambridgeinternational.org/Images/662466-2025-2027-syllabus.pdf . IB AA guide reference (requires current-version confirmation before activation): https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-analysis-and-approaches-guide-en.pdf .

## Follow-up safeguards
Canonicalise board/component/year before calculating route shortfalls; join task_items and tasks by student to enforce no-repeat; test rendered KaTeX in browser; validate individual drafts against official syllabus and near-duplicate families; keep Signature awaiting_human_moderation pending authenticated examiner action. Existing evening-email workflow unchanged.
