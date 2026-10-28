# MathsGrove — Student-first version

## Product structure

**Public homepage `index.html`:** Marketing only. Describes Daily Focus, Weekly Paper, Mock & Review, and individual Signature Review **without prices or checkout**. No public partner dashboard or fabricated success rates.

**Public sample `sample.html`:** Fully populated interactive *fictional* student dashboard (Alex Morgan), sample paper workspace with graph-paper tools, specimen 14/18 examiner report, next-step recommendations, and illustrative learning history. No Supabase connection; drawing stays in the browser and may be downloaded as a PNG. Report may be printed/saved as PDF by the visitor. All data labelled fictional.

**Private portal `portal.html`:** Verified student login via a single-use invitation code bound to an email address. Students choose their qualification and pathway, configure a paper (daily, weekly, topic or mock preview), see original pilot questions, type/draw/upload answers, submit, view saved history and released examiner comments, and export their record as JSON (image binaries not included). Staff accounts redirect to the private examiner/admin `studio.html` rather than an embedded partner dashboard.

**Owner-only examiner studio `studio.html`:** Existing invited-student administration and per-question review system preserved privately for authorised staff. It is not advertised on the marketing homepage.

## Shared graph-paper workspace
`whiteboard.js` is reused by the fictional sample and the real student portal. It supports:
- Squared, lined and blank writing backgrounds
- Five pen colours: navy, blue, red, green and violet
- Adjustable line width, translucent highlighter, eraser, undo and clear
- Mouse, touch and stylus pointer events
- PNG export combining graph paper and ink

In the private student portal, graph-paper PNG is only uploaded to private Supabase storage when the student saves a question. Handwritten photo uploads are supported separately. The interactive sample has no network uploads.

## Important activation: install the additional paper-builder migration

The existing Supabase project already has the initial 11 tables and 10 original pilot questions. The updated student paper builder **will not activate** until this separate migration is run:

`supabase/migrations/20261028_student_paper_builder.sql`

Open the Supabase MathsGrove project → SQL Editor → New Query, paste the *complete file* and run it **once**. This adds paper_mode, topic, target difficulty and question-count fields, a protected `paper_questions` sequence, a check on question ownership, and a server-validated `create_student_paper` function that creates the paper and its question links in one database transaction.

### Verify
Run the following SQL as the project owner:

```sql
select column_name from information_schema.columns
where table_schema='public' and table_name='attempts'
and column_name in ('paper_mode','focus_topic','target_difficulty','requested_count')
order by column_name;

select relrowsecurity from pg_class where oid='public.paper_questions'::regclass;

select proname from pg_proc where proname='create_student_paper';
```

Expected: 4 column rows, `relrowsecurity = true`, 1 function row. Do not accept real student work until RLS and cross-account tests pass.

### Paper bank limitations
This is still a small original **pilot** question bank, with only 10 questions across the qualifications. A Daily Focus or Weekly Paper may be shorter than selected, and a Mock Preview is not a full official/mock exam until the content bank is expanded. Exam board and tier are saved as profile preferences; the original pilot prompts are **not** yet individually validated or published per board specification.

The client chooses from available questions and stores that exact selection. It does **not** yet use a validated psychometric adaptive algorithm or deliver daily/weekly jobs automatically. Recurring packages are marketing concepts until scheduling, entitlement and question-bank coverage are built.

### Keep actual student records safe
Ensure:
1. The first Supabase migrations and the new paper migration are installed before using the paper builder.
2. The invitations Edge Function is deployed and owner role is verified.
3. Student email delivery is configured; the default Supabase sender is rate-limited and unsuitable for onboarding external pupils at scale.
4. Each account's RLS is tested using at least two organisations and two students, including file signed URLs, submitted-paper editing, review release, and personal record exports.
5. Guardian/parent consent, privacy notices, deletion/retention handling, data backups and safeguarding requirements are in place before collecting children's data.
6. Secrets remain solely in the Supabase backend; public GitHub Pages contains **only the publishable browser key**.

## Delivery
GitHub Pages publishes the static marketing homepage, fictional demo, student portal and the owner-only studio. Github Pages static hosting is **not** a privacy/security boundary; all actual access to data must be enforced by Supabase RLS and server functions.

No paid checkout, Stripe, public pricing or partner programme dashboard is included in the public experience.
