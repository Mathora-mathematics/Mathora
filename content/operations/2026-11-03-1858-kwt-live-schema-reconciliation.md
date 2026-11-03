# MathsGrove live schema reconciliation — 2026-11-03 18:58 Asia/Kuwait

## Verified connected project
Supabase project `nwakgkxytovprrrwyahs`, schema `public`. Read-only inspection of information_schema and question_bank.

## Critical discrepancy
The connected project's `public.question_bank` contains **10 active records**, not the previously reported 2,230 questions. No `public.questions` table exists. The available question_bank columns are id, qualification, topic, prompt, marks, difficulty, active, created_at. There are no board, examination-year, component, tier, approval status, options, answer key, worked solution, misconception feedback, source provenance, KaTeX verification or student-level assignment history fields on this table. Prior reported 1,942 approved/active figures cannot be substantiated from this project.

## Live distribution
A_LEVEL 2, GCSE 2, IB_AA 1, IB_AI 1, IGCSE 3, TMUA 1. All 10 records have active=true. These broad labels are **not** exact board/component routes. Per-tier eligible counts and shortfalls cannot be reliably calculated.

## Editorial decisions
Candidates approved: 0; rejected: 0; published: 0; Signature papers created: 0. No unsafe wholesale status changes. No student data modified. Publication is blocked pending confirmation of the actual content schema/storage or implementation of safe metadata, QA and assignment-history enforcement. Do not treat this as a transient approval delay.

## QA and deployment
No new original question passed full syllabus-year, mathematical, duplicate, rendering and student-history checks in this run. No application deployment was attempted or claimed. This journal documents observed discrepancies only.

## Required next work
Locate authoritative live editorial content storage and verify its project/route; establish exact-board/tier metadata, verified solutions and audit provenance, and enforce mathematical-family no-repeat at assignment time before activating new content. Human Signature moderation remains mandatory.
