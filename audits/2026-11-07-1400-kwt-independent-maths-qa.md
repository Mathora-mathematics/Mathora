# MathsGrove independent QA — 2026-11-07 14:00 Asia/Kuwait

## Scope and evidence
Read-only live SQL on Supabase project `nwakgkxytovprrrwyahs` and GitHub commit search/fetch for `Mathora-mathematics/Mathora`. Compared with 12:04 QA journal commit `88349e6875e85c0374a67926963cb099c41fa500` and 13:00 editorial commit `a30fcaf20ab058503fa67a9227e05d1845fcf30d`. No live practice publication in the repository commit history inspected since the last QA journal; this is **not** an exhaustive database publication delta because practice records lack created/updated timestamps.

## Live SQL observations (14:00 KWT)
- Practice: 2,236 total = 1,942 active approved + 240 active non-approved pilots + 54 inactive.
- Approved active practice missing reviewer UUID: 1,942.
- Signature: 19 private editorial assessments, 349 declared marks; zero with both authorised human moderation fields populated. Latest remains `f1591709-f7f4-4cb8-9a1e-d9b5c411d795`, 12 marks, awaiting human moderation. Its 6 parts and 12 marks were verified in the preceding 12:04 journal; no newly authored Signature assessment found.
- Tasks increased to **41** (from 35 in previous QA), **38 scheduled** (from 33). Materialised task items increased to **16** (from 10), with **12 active approved** and **4 active pilot** assignments. A newly completed six-item Exam Daily task uses six active approved records. All 16 assigned bank IDs are distinct and all 16 exact whitespace-normalised prompt stems distinct **globally**; this does not prove student-specific unseen history, semantic uniqueness or near-duplicate freedom.
- Six newly scheduled tasks created 2026-11-07 10:44:55 UTC have no materialised question items yet. A scheduled task's absence of items does not itself prove the user-facing Ready status is wrong, but Ready cannot be certified from these records.
- One completed Daily task still has four active pilots, not approved questions; eligibility policy unresolved.

## Reproducible mathematical spot-check
Recomputed the latest Signature sequence/probability diagnostic from live question_paper and mark_scheme: `u_n=n^2-4n+7=(n-2)^2+3`; `u_1,u_2,u_3=4,3,4`; `u_6=19,u_7=28` hence least positive n with `u_n>20` is 7. Two blue from 5 blue/4 yellow without replacement: `(5/9)(4/8)=5/18`; different colours: `(5/9)(4/8)+(4/9)(5/8)=5/9`; at least one blue: `1-(4/9)(3/8)=5/6`; conditional both blue `(5/18)/(5/6)=1/3`. Six two-mark criteria sum to 12. This is a repeat verification, **not** verification of all 349 Signature marks.

## Passes vs unresolved
**Pass:** latest Signature six-part arithmetic and total; 16 distinct exact normalised assigned stems and bank IDs; new completed Exam Daily task six active approved records.

**Unresolved / do not certify:** exhaustive newly published practice, every distractor and explanation, exact 2026–2027 official syllabus per board/component, browser KaTeX, copyright, semantic duplicate families, student-specific unseen eligibility, baseline/feedback adaptation, mode/tier inheritance, per-student supply and Ready status, RLS effective access, photo/whiteboard evidence isolation, examiner marking and mock timers, published Pages behaviour and staff-only Signature access. No browser session or authenticated role test performed. No claim of security or deployment pass.

## Decision
No questionable drafts activated. Zero production mutations; zero Signature grade/report releases. Verified original practice is preauthorised for publication **without owner approval**, but the evidence in this run is insufficient for safe activation. Findings are available to the established evening report.