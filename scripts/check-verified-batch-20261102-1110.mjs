import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const m=JSON.parse(readFileSync('content/operations/verified-original-batch-20261102-1110.json','utf8'));
assert.equal(m.batch,'20261102-1110');assert.equal(m.record_count,9);assert.equal(m.questions.length,9);
assert.ok(['private_drafts_pending_ci_and_deployment','published_database_verified'].includes(m.status));
assert.equal(new Set(m.questions.map(x=>x.id)).size,9);assert.equal(new Set(m.questions.map(x=>x.provenance)).size,9);
assert.equal(m.verification.independent_sympy,9);assert.equal(m.verification.independent_javascript,9);assert.equal(m.verification.sql_mathematical_checkpoints,9);
assert.equal(m.verification.four_unique_choices,9);assert.equal(m.verification.exactly_one_correct_text,9);
assert.equal(m.verification.prior_comparisons,9*723);assert.equal(m.verification.within_batch_pairs,36);
assert.equal(m.verification.near_duplicates_at_065,0);assert.ok(m.verification.max_prior_token_jaccard<.65);
assert.ok(m.verification.max_internal_token_jaccard<.65);assert.equal(m.verification.student_mutations,0);
const routes=['Cambridge 9709 P5 Statistics 1','Pearson Edexcel IAL WMA13 P3','Pearson Edexcel 9MA0 UK GCE'];
for(const board of routes){const rows=m.questions.filter(x=>x.exam_board===board);assert.equal(rows.length,3);assert.deepEqual(rows.map(x=>x.programme_scope).sort(),['daily','exam','weekly']);}
for(const q of m.questions){assert.match(q.id,/^[0-9a-f-]{36}$/);assert.ok(q.expected_seconds>=180&&q.expected_seconds<=900);assert.ok(q.syllabus_objective.length>8);for(const forbidden of ['prompt','choices','correct_text','explanation','reviewer_note','answer','solution'])assert.ok(!(forbidden in q));}
const approx=(x,y)=>Math.abs(x-y)<1e-9;
const choose=(n,k)=>{let r=1;for(let j=1;j<=k;j++)r=r*(n-j+1)/j;return r};
assert(approx(5/12*4/11,5/33));
assert.equal(7*6*5*4+3*6*6*5*4,3000);
assert(approx(choose(5,2)*choose(7,2)/(choose(12,4)-choose(7,4)),21/46));
const f=x=>x*Math.sin(3*x)+Math.log(x),h=1e-6,x=1.3;
assert(approx((f(x+h)-f(x-h))/(2*h),Math.sin(3*x)+3*x*Math.cos(3*x)+1/x));
const root=(5+3*Math.sqrt(5))/2;assert(root>1&&approx((root-1)**2/(root+2),3));
const peak=x=>x*x*Math.exp(-x/3);assert(peak(6)>peak(5.9)&&peak(6)>peak(6.1)&&approx(peak(6),36*Math.exp(-2)));
assert(approx((3*4-2)/(2*2),2.5));
assert(approx((Math.exp(2)+1)/4,(Math.exp(2)/4+1/4)));
const sol=x=>2*Math.exp(x*x/2+x)-2;assert(approx(sol(0),0));assert(approx((sol(1+h)-sol(1-h))/(2*h),2*(sol(1)+2)));assert(approx(sol(1),2*(Math.exp(1.5)-1)));
const migration=readFileSync('supabase/migrations/20261102111000_grove_p5_wma13_component_routing.sql','utf8');assert.match(migration,/wma13/i);assert.match(migration,/statistics 1/i);assert.match(migration,/grove_board_compatible/);
console.log('PASS: private batch metadata, nine independent JS maths checks, privacy and routing migration guards');
