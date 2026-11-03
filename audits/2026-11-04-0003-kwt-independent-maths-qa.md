# Independent Maths QA — 2026-11-04 00:03 Asia/Kuwait

## Live sources
Supabase project `nwakgkxytovprrrwyahs`, private schema, read-only SQL; GitHub `Mathora-mathematics/Mathora` latest inspected commit `6bc04f2eafb3def45cff94371b65f9e2ecc01b8c` (2026-11-03 20:03:32 UTC).

## Confirmed checks
- Practice bank: approved active **1,942**, pilot active **240**, inactive draft **48**, total **2,230**.
- Latest approved row (reviewed 2026-11-03 05:56:54 UTC): Pearson IAL WMA13 P3 trigonometry, ID `a953c0c3-0416-42ee-bc31-29e1c15821b8`. Recomputed: put t=tan(theta), 2t²−5t−3=(2t+1)(t−3), theta=−arctan(1/2) or arctan(3) in (−pi/2,pi/2). All three displayed distractors differ from correct solution set. The explanation correctly handles the interval. This is a recheck, **not** a newly approved batch.
- Further Maths matrix row `546fbdb9-520b-4cfa-97a0-373c5283e1fe`: invariant non-x-axis line y=−x, since M(1,−1)=(1,−1); other displayed slopes are not invariant.
- Cambridge P1 row `5676a2a9-beda-405a-a500-8ac21750269c`: sin(theta)=1/2 or −1; theta=pi/6,5pi/6,3pi/2; sum=5pi/2. Distractors differ.
- IB AI HL Euler row `1203b6df-bb12-4fdb-a9d2-f6e011863f97`: y1=2.4, y2=2.92; other displayed numerical choices differ.
- Approved bank contains **516** whitespace-normalised duplicate prompt groups. This is a bank inventory metric, not evidence of assigned repetitions.
- **35** tasks for **1** student, **0** tasks with literal status `ready`; **10** task items referencing **10** distinct bank IDs.
- Signature: **10** editorial assessments, **243** declared total marks, **0** with recorded human moderator. No Signature release action taken.

## Not established / do not claim passed
No new approved batch since previous run, so no new content was activated. Official syllabus PDF subclauses and copyright provenance were not independently revalidated in this run. No browser KaTeX rendering, authenticated student/parent role isolation, photo/whiteboard upload, mock server-clock end-to-end test, per-student unseen family matching, baseline adaptation, Ready UI test, GitHub Actions Pages run status, or full independent recomputation of all Signature parts was completed. These remain open gates. No questionable drafts were activated; no Signature reports issued.

## Reproducible SQL
```sql
select review_state,active,count(*) n from private.grove_practice_bank group by 1,2 order by 1,2;
select count(*) n,count(*) filter(where human_moderated_by is not null) moderated,sum(total_marks) marks from private.grove_signature_editorial;
select count(*) n,count(distinct student_id) students,count(*) filter(where status='ready') ready from private.grove_tasks;
select count(*) duplicate_groups from (select regexp_replace(lower(trim(prompt)),'\\s+',' ','g') stem from private.grove_practice_bank where review_state='approved' group by 1 having count(*)>1) t;
select count(*) items,count(distinct bank_id) unique_bank from private.grove_task_items;
```

## Disposition
No confirmed new incorrect approved question; no quarantine or data mutation justified by this sampling. Continue to hold unverified drafts. Human Signature moderation remains mandatory. Prioritise family-aware assignment checks and true student-specific Ready-state validation. Findings available to evening report.
