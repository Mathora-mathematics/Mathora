# MathsGrove independent QA — 2026-11-04 18:00 Asia/Kuwait

## Scope and provenance
Live read-only SQL against Supabase project `nwakgkxytovprrrwyahs`, schema `private`; latest GitHub commit `18d5bc3ca4b184e74e868e66c32e773561e223f5` reviewed. This audit is not full end-to-end certification. No student records, grades, question statuses, or examiner decisions changed.

## Confirmed database results
`private.grove_practice_bank`: approved/active 1942; pilot/active 240; draft/inactive 53; total 2235. Prior 16:01 audit had 52 drafts; one new inactive draft is accounted for by the 17:00 editorial batch. Approved count unchanged (does not rule out replacement/edit of an approved item). Approved entries missing reviewer identity: 1942; missing reviewed_at: 36; explanations <100 chars: 228. Approved exact lowercased whitespace-normalised prompt duplicate groups: 516. These are editorial risks, not proof all answers are wrong.

`private.grove_tasks`: 35 tasks (27 scheduled exam_daily, 1 scheduled daily, 4 scheduled weekly, 1 scheduled mock, 1 completed daily, 1 expired exam_daily). `private.grove_task_items`: 10 items, six approved and four pilot; historical pilot assignment exception persists. Current authenticated readiness, per-student unseen mathematical-family supply, adaptation and tier inheritance not end-to-end verified.

`private.grove_signature_editorial`: 11 assessments, 255 declared total marks, zero with both human_moderated_by and human_moderated_at. Full independent recomputation of all 255 marks not performed; no grades/reports issued.

## Newly staged original: independent arithmetic
Question `64ee9755-83cb-4a7d-b1a2-bfcd7c8ba81e`: coefficient of x² in (1+3x)^(-2)(1-x)^(1/2). Generalised binomial gives (1+3x)^(-2)=1-6x+27x²+O(x³), and (1-x)^(1/2)=1-x/2-x²/8+O(x³). Thus coefficient 27+(-6)(-1/2)-1/8=239/8. All offered choices [239/8,241/8,215/8,27] distinct; other three not equal to computed coefficient. Domain for convergent expansions |x|<1/3. No physical units. Stored worked explanation agrees. Exact plain-text notation readable; browser KaTeX rendering not tested. Official Pearson WMA14/01 section and 2026 amendment status not independently certified here. Broader mathematical-family and student-history deduplication not completed. Decision: keep inactive draft; no approval gate beyond substantive checks.

## Open checks / non-passes
Official board/component/version confirmation for all recent content; all newly published question revisions (approved count alone insufficient); complete near-duplicate and per-student eligible/unseen inventory; effective RLS cross-student tests; evidence bucket policies and photo/whiteboard safety; examiner marking access; server mock expiry enforcement; copyright provenance; GitHub Pages latest CI; Signature part-by-part 255-mark verification. None is claimed passed.

## Reproducible SQL
```sql
select review_state,active,count(*) from private.grove_practice_bank group by 1,2 order by 1,2;
select id,prompt,choices,correct_text,explanation,active,review_state from private.grove_practice_bank where id='64ee9755-83cb-4a7d-b1a2-bfcd7c8ba81e';
select b.review_state,count(*) from private.grove_task_items i left join private.grove_practice_bank b on b.id=i.bank_id group by 1;
select count(*),sum(total_marks),count(*) filter(where human_moderated_by is not null and human_moderated_at is not null) from private.grove_signature_editorial;
select count(*) from (select lower(regexp_replace(trim(prompt),'\s+',' ','g')) stem from private.grove_practice_bank where review_state='approved' group by 1 having count(*)>1) x;
```

Evening reporting: findings available in this journal for established scheduled email. No separate email sent by this QA cycle.
