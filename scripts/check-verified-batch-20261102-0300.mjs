import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const m=JSON.parse(readFileSync('content/operations/verified-original-batch-20261102-0300.json','utf8'));
assert.equal(m.version,1);
assert.equal(m.batch,'20261102-0300');
assert.equal(m.status,'private_drafts_pending_ci_and_deployment');
assert.equal(m.record_count,9);
assert.equal(m.release_candidates,9);
assert.equal(m.questions.length,9);
assert.match(m.privacy,/private Supabase/i);
assert.match(m.research_brief,/20261102_0025/);
const v=m.verification;
for(const k of ['independent_sympy','independent_javascript','distinct_four_choices','single_key','substantial_worked_solutions','misconception_and_tutor_guidance','katex_delimiter_brace_checks'])assert.equal(v[k],9,k);
assert.deepEqual([v.prior_practice,v.prior_baseline,v.prior_assigned,v.prior_baseline_assigned],[423,240,4,20]);
assert.equal(v.compared_per_item,687);
assert.equal(v.within_batch_pairs,36);
assert.equal(v.exact_duplicates,0);
assert.equal(v.near_duplicates_at_065,0);
assert.ok(v.max_prior_token_jaccard<0.65);
assert.ok(v.max_within_batch_jaccard<0.65);
assert.equal(v.student_mutations,0);
assert.equal(new Set(m.questions.map(q=>q.id)).size,9);
assert.equal(new Set(m.questions.map(q=>q.provenance)).size,9);
for(const q of m.questions){
 assert.match(q.id,/^[0-9a-f]{8}-[0-9a-f-]{27}$/);
 assert.match(q.provenance,/^mg-original-20261102-0300-/);
 assert.ok(['daily','weekly','exam'].includes(q.programme_scope));
 assert.ok(q.expected_seconds>=100&&q.expected_seconds<=900);
 assert.ok(q.syllabus_objective.length>10);
 for(const forbidden of ['prompt','choices','correct_text','explanation','reviewer_note','answer','solution','key'])assert.ok(!(forbidden in q),'Private question content leaked into public ledger: '+forbidden);
}
for(const [qual,board,level] of [['GCSE','Pearson Edexcel 1MA1','foundation'],['IGCSE','Pearson Edexcel 4MA1 Higher','extended'],['TMUA','TMUA','tmua']]){
 const lane=m.questions.filter(q=>q.qualification===qual&&q.exam_board===board&&q.academic_level===level);
 assert.equal(lane.length,3,board);
 assert.deepEqual(lane.map(q=>q.programme_scope).sort(),['daily','exam','weekly'],board);
}
const migration=readFileSync('supabase/migrations/20261102_0300_pearson_linear_subject_code_gate.sql','utf8');
for(const guard of ["IF b LIKE '%1ma1%' THEN","RETURN s LIKE '%1ma1%'","IF b LIKE '%4ma1%' THEN","RETURN s LIKE '%4ma1%'","IF b LIKE '%4wm%' THEN","IF b LIKE '%0580%' THEN","IF b LIKE '%9231%' THEN","IF b LIKE '%wma11%' THEN","IF b LIKE '%9ma0%' THEN"]){
 assert.ok(migration.includes(guard),'Missing subject code guard: '+guard);
}
assert.ok(!/\b(?:UPDATE|DELETE|TRUNCATE|INSERT)\s+(?:INTO\s+|FROM\s+)?(?:public\.|private\.)?(?:students|grove_tasks|grove_task_items|grove_practice_marks|answers|submissions)\b/i.test(migration),'Unexpected learner/marking data mutation');
assert.ok(m.notes.some(n=>n.includes('quadratic-positivity candidate rejected')));
console.log('Privacy-safe nine-item ledger, syllabus routes, board-code regression and non-mutation guard: PASS.');
