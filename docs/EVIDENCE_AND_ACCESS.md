# MathsGrove — Evidence, Programme Access and Signature Reports

## Experience and commercial architecture

The website keeps **all prices and payment buttons hidden**. Families or tutoring partners arrange services directly, and tutoring companies collect parent payments themselves. MathsGrove bills partners through private consolidated invoices outside the website. No Stripe or bank-card information is stored in GitHub or Supabase.

Authorised admins assign the *access entitlement*, not a payment, from the private Studio. The three recurring products are **Grove Weekly**, **Grove Daily** and **Grove Exam**, with an individually arranged **Signature Review** add-on. Students can compare these using the fictional public sample dropdown, but cannot change their own real subscription.

| Plan | Backend limits | Intended experience |
| --- | --- | --- |
| Grove Weekly | Up to 4 weekly/topic attempts per calendar month | Regular structured practice |
| Grove Daily | Up to 5 daily attempts per week and 4 weekly/topic attempts per month | Frequent short questions and recovery |
| Grove Exam | Daily and weekly allocations above, plus 1 mock-preview paper per month | Examination preparation and evidence collection |
| Signature Review | Administrator records credits separately (0-20) | Human marking and detailed narrative handled privately |

**Important:** Signature credits are recorded but **not yet automatically decremented or linked to a specific paper**. Recurring paper delivery and reminder notifications are not scheduled jobs yet: the calendar is a **suggested pattern**, not a booking or assignment system. Grade estimation on the public fictional sample is deliberately illustrative and not validated against exam-board grade boundaries.

## Live Supabase activation

Two migrations must be run in the existing **MathsGrove** Supabase SQL Editor in this exact order:

1. `supabase/migrations/20261028_student_paper_builder.sql` (from the prior website update). This creates frozen paper questions and the original paper-builder function.
2. `supabase/migrations/20261028_entitlements_and_report_narrative.sql` (this update). This adds protected student entitlements and examiner summaries, restricts the paper builder to the authorised programme, and requires a complete narrative before releasing reviewed marks.

**Neither migration has been run by ChatGPT.** Do not run them twice without reviewing existing state. Do not install the second before the first. On a database containing pupil records, obtain a backup and test the migration on a separate Supabase project before applying it.

### Owner verification query

```sql
select to_regclass('public.paper_questions') as frozen_papers,
       to_regclass('public.student_entitlements') as access_plans,
       to_regclass('public.review_summaries') as examiner_narratives;
select proname from pg_proc
where proname in ('create_student_paper','assign_student_programme',
                  'save_review_summary','save_marking_review')
order by proname;
select relname,relrowsecurity from pg_class
where oid in ('public.student_entitlements'::regclass,
              'public.review_summaries'::regclass);
```

Expected: three named tables, four functions and RLS enabled for both new tables. This **structural check is not a security test**.

## The secure examiner workflow

1. A student's verified account selects an exam pathway and receives a programme from an authorised administrator.
2. Creating a paper uses `create_student_paper` to save the attempt and its question order in **one Postgres transaction** after checking tier/date/quota and chosen topic/difficulty.
3. Each question can have typed working, a graph-paper PNG and up to three handwritten photograph uploads (subject to storage limits). The file is stored in the private `student-work` bucket and indexed in `answer_files` against the student, attempt and question.
4. The student submits the paper, locking their answers.
5. The staff-only marking board displays attached working via **time-limited signed URLs**, approved mark guidance, question marks and commentary.
6. The examiner completes the paper-level report: overview, strengths, gaps, personalised next steps, readiness. `save_review_summary` validates staff membership and saves the narrative.
7. `save_marking_review` validates all awarded marks and feedback, requires the narrative and releases the paper in one transaction. Released reviews are read-only.
8. The student opens **My progress** to see their saved working, marks, narrative report and attachments, and can print the view to PDF or export their record as JSON. Image binaries are not included in the JSON export.

### Caveat: generated reports

The real portal offers **browser Print / Save as PDF**, not a pre-generated branded PDF stored on the server. The rich specimen report at `sample.html#report` demonstrates the desired design. A server-generated signed report, immutable report version, moderation signatures, PDF archive and parent access are future production requirements.

## Evidence and grade estimation

- The **real** portal calculates a transparent mark-weighted score and plots reviewed-paper percentages.
- It explicitly states that a calibrated numerical GCSE/IGCSE/A Level/IB/TMUA predicted grade is **not available yet**, even if several results exist. Qualification, paper standardisation, exam board/year, test conditions and examiner moderation are essential.
- The **fictional** public student dashboard has an editable scenario tool that displays a hypothetical GCSE grade range using invented percentage bands. The interface explains the assumptions and must not be used for real predictions.
- No exam-board endorsement, official past-paper bank or automatic advanced adaptive psychometrics is claimed.

## Mandatory security tests before children use the service

- Confirm two students in different organisations cannot read one another's attempts, score summaries, programme entitlements or storage objects.
- Confirm students cannot invoke admin tier-assignment, examiner-review or feedback-release functions, or insert extra questions into a created paper.
- Confirm non-admin staff cannot assign plans and admin users cannot access other organisations' programmes.
- Confirm daily, weekly and mock quotas are server-enforced and cannot be bypassed with simultaneous requests.
- Confirm unsubmitted drafts cannot be examiner-released and unreleased narrative/marks are invisible to pupils.
- Confirm only intended MIME types/size limits are accepted for notebook uploads, and signed URLs expire.
- Test emergency account revocation, personal-data export, deletion/retention, guardian privacy notices, backups and safeguarding controls.

**This is a staged development system.** The latest GitHub Pages deployment is a UI/source-code milestone, not evidence that the live end-to-end secure workflow has passed production tests.
