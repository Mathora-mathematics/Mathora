import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const m=JSON.parse(readFileSync('content/operations/verified-original-batch-20261102-0100.json','utf8'));
assert.equal(m.version,1);
assert.equal(m.batch,'20261102-0100');
assert.equal(m.status,'private_drafts_pending_ci_and_deployment');
assert.equal(m.record_count,9);
assert.equal(m.release_candidates,9);
assert.equal(m.questions.length,9);
assert.ok(m.privacy.includes('private Supabase'));
assert.equal(m.research_brief,'content/research/20261102_0025_ib_tmua_further_assessment_qa.md');
const v=m.verification;
for(const field of ['independent_sympy','independent_javascript','distinct_four_choices','single_key','worked_solution_and_tutor_guidance','katex_delimiter_brace_checks'])assert.equal(v[field],9,field);
assert.deepEqual([v.prior_practice,v.prior_baseline,v.prior_assigned,v.prior_baseline_assigned],[414,240,4,20]);
assert.equal(v.compared_per_item,678);
assert.equal(v.within_batch_pairs,36);
assert.equal(v.exact_duplicates,0);
assert.equal(v.near_duplicates_at_065,0);
assert.ok(v.max_prior_token_jaccard<0.65);
assert.ok(v.max_within_batch_jaccard<0.65);
assert.equal(v.student_mutations,0);
assert.deepEqual(Object.keys(m.sources).sort(),['AQA_8300','Cambridge_0580','Cambridge_9231']);
for(const u of Object.values(m.sources))assert.ok(u.startsWith('https://'));
const routes=[
 ['GCSE','foundation','AQA 8300','AQA-F'],
 ['IGCSE','core','Cambridge 0580','C0580-C'],
 ['FURTHER_MATHS','further','Cambridge 9231','C9231-P1']
];
const ids=new Set(),provenances=new Set();
for(const q of m.questions){
 assert.match(q.id,/^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/);
 assert.ok(!ids.has(q.id)&&!provenances.has(q.provenance),'duplicate id/provenance');
 ids.add(q.id);provenances.add(q.provenance);
 assert.ok(['daily','weekly','exam'].includes(q.programme_scope));
 assert.ok(q.expected_seconds>=100&&q.expected_seconds<=900);
 assert.ok(q.syllabus_objective.length>35);
 assert.ok(q.topic.length>4);
 assert.ok(routes.some(([qual,level,board,prefix])=>q.qualification===qual&&q.academic_level===level&&q.exam_board===board&&q.provenance.startsWith('mg-original-20261102-0100-'+prefix)));
 for(const forbidden of ['prompt','choices','correct_text','correct_index','explanation','reviewer_note','password','service_role','api_key'])assert.ok(!Object.hasOwn(q,forbidden),'private content leaked: '+forbidden);
}
for(const [qual,level,board] of routes){
 const g=m.questions.filter(q=>q.qualification===qual&&q.academic_level===level&&q.exam_board===board);
 assert.deepEqual(g.map(q=>q.programme_scope).sort(),['daily','exam','weekly']);
}
assert.ok(m.questions.filter(q=>q.exam_board==='Cambridge 0580'&&q.syllabus_objective.includes('calculator Paper 3')).length===1);
assert.ok(m.questions.filter(q=>q.exam_board==='Cambridge 9231').every(q=>q.syllabus_objective.includes('§1.6')));
assert.ok(m.notes.some(x=>x.includes('examiner marking')));
console.log('PASS: nine unique private IDs, 3 routes x 3 tiers, syllabus gates, metadata-only public ledger, duplicate-screening evidence and no student mutations.');
