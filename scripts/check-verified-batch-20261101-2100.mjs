import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const m=JSON.parse(readFileSync('content/operations/verified-original-batch-20261101-2100.json','utf8'));
assert.equal(m.version,1);
assert.equal(m.batch,'20261101-2100');
assert.equal(m.status,'private_drafts_pending_ci_and_publication');
assert.equal(m.record_count,9);
assert.equal(m.release_candidates,9);
assert.equal(m.questions.length,9);
for(const k of ['independent_sympy','independent_javascript','four_distinct_options','one_key_per_question','complete_worked_solutions','katex_delimiter_checks'])assert.equal(m.verification[k],9,k);
assert.equal(m.verification.prior_practice,396);
assert.equal(m.verification.prior_baseline,240);
assert.equal(m.verification.prior_assigned,4);
assert.equal(m.verification.prior_baseline_assigned,20);
assert.equal(m.verification.compared_per_item,668);
assert.equal(m.verification.exact_duplicates,0);
assert.equal(m.verification.near_duplicate_rejections,0);
assert.ok(m.verification.maximum_token_jaccard<0.65);
assert.equal(m.verification.student_mutations,0);
assert.ok(m.research_brief.startsWith('content/research/'));
const routes=[
['GCSE','higher','Pearson Edexcel 1MA1','GCSE-H'],
['IGCSE','extended','Pearson Edexcel 4MA1 Higher','IG-H'],
['TMUA','tmua','TMUA','TMUA']
];
const ids=new Set(),prov=new Set();
for(const item of m.questions){
 assert.match(item.id,/^[a-f0-9]{8}(-[a-f0-9]{4}){3}-[a-f0-9]{12}$/);
 assert.ok(!ids.has(item.id)&&!prov.has(item.provenance),'Duplicate ID/provenance');
 ids.add(item.id);prov.add(item.provenance);
 assert.ok(['daily','weekly','exam'].includes(item.programme_scope));
 assert.ok(item.expected_seconds>=180&&item.expected_seconds<=900);
 assert.ok(item.syllabus_objective.length>=30);
 assert.equal(item.release_candidate,true);
 assert.ok(routes.some(([q,l,b,p])=>item.qualification===q&&item.academic_level===l&&item.exam_board===b&&item.provenance.startsWith('mg-original-20261101-2100-'+p)));
 for(const secret of ['prompt','choices','correct_text','explanation','reviewer_note','api_key','service_role','password'])assert.ok(!Object.hasOwn(item,secret),'Public secret leak: '+secret);
}
for(const [qualification,level,board] of routes){
 const group=m.questions.filter(x=>x.qualification===qualification&&x.academic_level===level&&x.exam_board===board);
 assert.equal(group.length,3);
 assert.deepEqual(group.map(x=>x.programme_scope).sort(),['daily','exam','weekly']);
}
for(const url of Object.values(m.sources))assert.ok(url.startsWith('https://'));
assert.ok(m.notes.some(n=>n.includes('not official-format mock')));
console.log('PASS: 9 private question IDs, three qualifications x three tiers, privacy, verification ledger, route coverage and no student mutations.');
