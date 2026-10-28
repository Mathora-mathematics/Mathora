# MathsGrove — Learner enrolment and administrator-owned settings

**Source of the service structure:** the owner's 3-page *MathsGrove Partner Leaflet*, 28 October 2026. This public GitHub document intentionally **does not reproduce confidential partner wholesale prices**. No customer checkout, invoice, payment card or parent billing is part of this code.

## Administrative experience

Open `studio.html` → **Students & invitations**. The administrator now controls academic settings for each learner.

### Before issuing a student key

Complete the new invitation form:
1. Student's verified email; one-time key remains linked to this address.
2. Qualification: GCSE, IGCSE, A Level Mathematics, A Level Further Mathematics, IB AA, IB AI, or TMUA.
3. Examination board or route (e.g. AQA, Edexcel, Cambridge), and academic level (Higher, Foundation, Extended, HL, SL).
4. Recurring programme: Grove Weekly, Grove Daily or Grove Exam.
5. Programme end date (default approximately one month ahead); renewal/extension is an administrator edit.
6. Priority topics and staff-only notes.
7. Separate Signature, Signature Advanced and Specialist Review quantities, 0–20 each.

Click **Save learner setup & generate key**. The client first calls the authorised `save_pending_student_setup` server function, then issues the one-time code using the existing `invitations` Edge Function. If the new SQL migration has not been installed, it blocks configured key issuance.

When the student authenticates with their invited email and claims the key, the existing atomic invitation RPC now also creates their academic preference, programme access and add-on entries within **one transaction**. The student cannot select a paid tier or grant themselves extra assessments.

### After the student has joined

The **Enrolled learners** directory offers **Edit learner**. An authorised administrator can change their qualification, board, academic tier, programme, expiry, topics, confidential notes and separate human-reviewed assessments. This calls `update_student_setup`, which updates existing settings in one database transaction. It preserves completed papers, existing attachments, published marks and examiner reports.

Learners can still edit their public display name but cannot directly alter the administrator-assigned academic route.

### The leaflet's product levels

| Programme | Intended deliverables | Implemented constraints |
|---|---|---|
| Grove Weekly | 4 marked weekly question sets, saved work/feedback, monthly progress report | Up to 4 weekly/topic papers per month; human/digital marking coverage still in pilot |
| Grove Daily | Daily practice, **7 days/week**, digital marking/mistake recovery, weekly report | Up to 7 Daily Focus papers per week; automated daily distribution and reporting not yet scheduled |
| Grove Exam | Everything in Daily, one timed mock per month, exam readiness/indicative grade outlook, assigned tutor and invited guardian views | Mock-preview paper allocation; grade outlook only with enough calibrated evidence; tutor/guardian logins are **not implemented yet** |

**Separate premium assessments:** Signature for GCSE/IGCSE, Signature Advanced for A Level/Further Mathematics/IB, Specialist Review for defined advanced reasoning/proof scope. These are add-on **allocations**, not paid transactions or automatically scheduled human reviews. Counts are manually editable; the code does **not yet decrement** them after marking.

**No live tutoring:** MathsGrove is designed as an independent assessment service.

## One-step SQL upgrade for the existing project

The current MathsGrove Supabase project has the original 11-table schema installed. To enable this new version, use:

`supabase/UPGRADE_MATHSGROVE_ADMIN.sql`

This combines the three pending migrations (paper builder → entitlements/reports → admin configurations) inside one database transaction. **Only run it if those three migrations have not already been run.** Before running on a database with real records, take a backup and test it in a separate Supabase project.

The installed `invitations` Edge Function does not require code changes: it calls the same `claim_student_invitation` RPC, which the upgrade extends.

### Verification SQL

```sql
select to_regclass('public.paper_questions') as papers,
       to_regclass('public.student_entitlements') as programmes,
       to_regclass('public.review_summaries') as report_narratives,
       to_regclass('public.pending_student_setups') as pending_students,
       to_regclass('public.student_academic_settings') as academic_settings,
       to_regclass('public.student_service_addons') as premium_addons;
select proname from pg_proc where proname in
 ('save_pending_student_setup','update_student_setup','claim_student_invitation')
 order by proname;
```

Expected: six non-null table references and three function names. **This is not a proof of security**; cross-account tests are required.

## Security and account boundaries

- Student academic settings are not browser-writable after upgrade; only role-checked server RPCs can change programme, board, level or add-ons.
- Pending enrolment records and staff notes are restricted to authorised programme administrators.
- The programme and all separate add-ons are confirmed by server code, not by a dropdown or a user's browser.
- No confidential wholesale rates, parent invoices, checkout keys or payment secrets are stored in the public site.
- Invitations remain one-use, hash-stored, time-limited and email-bound.
- The grade scenario is **not** an official exam grade prediction; enough syllabus-aligned, representative assessed evidence and human moderation are still required.
- Separate invited tutor and parent/guardian roles are **future architecture**, exclusive to Grove Exam in the leaflet, not currently operational. Do not create guardian logins or promise guardian access yet.
- Real pupil onboarding still needs suitable SMTP email delivery, safeguarding/privacy documentation, backup and account-isolation tests.

The public `sample.html` dashboard remains fictional and requires no student login. It does not expose confidential programme pricing.
