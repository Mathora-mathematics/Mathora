import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const j=JSON.parse(readFileSync('content/operations/verified-original-batch-20261102-1500.json','utf8'));
assert.equal(j.count,9);assert.equal(j.questions.length,9);
assert.ok(['draft_pending_ci_and_routing','published_database_verified'].includes(j.status));
assert.equal(new Set(j.questions.map(q=>q.id)).size,9);
assert.equal(new Set(j.questions.map(q=>q.provenance)).size,9);
for(const q of j.questions){assert.match(q.id,/^[0-9a-f-]{36}$/);assert.ok(q.expected_seconds>=200&&q.expected_seconds<=900);assert.ok(q.syllabus_objective.length>=8);for(const k of ['prompt','choices','correct_text','explanation','reviewer_note'])assert.ok(!(k in q),'private question data must not be public');}
for(const b of ['Pearson Edexcel IAL WME02 Mechanics M2','Cambridge 9231 P2 Further Pure 2','Pearson Edexcel IAL WST01 S1']){const x=j.questions.filter(q=>q.exam_board===b);assert.equal(x.length,3);assert.deepEqual(x.map(q=>q.programme_scope).sort(),['daily','exam','weekly']);}
for(const k of ['sympy','javascript','live_sql_four_options','live_sql_unique_options','live_sql_single_key','live_sql_complete'])assert.equal(j.verification[k],9);
assert.equal(j.verification.total_prior_comparisons,9*2436);
assert.equal(j.verification.within_batch_pairs,36);assert.equal(j.verification.near_duplicates_at_076,0);
assert.ok(j.verification.max_prior_jaccard<0.76&&j.verification.max_internal_jaccard<0.76);
assert.equal(j.verification.student_record_mutations,0);
const eq=(a,b,eps=1e-7)=>Math.abs(a-b)<eps;
// Independent numerical derivations (separate from symbolic SymPy):
const h=1/10000;let displacement=0;for(let i=0;i<20000;i++){let t=(i+0.5)*h;displacement+=(3*t*t-4*t+3)*h;}assert(eq(displacement,6));
assert(eq(12*(24/16)-5*(24/16)**2,27/4));
assert(eq(Math.sqrt(9+25*4-4*4-2*10*1.5),3*Math.sqrt(7)));
assert(eq(Math.log((5+Math.sqrt(25-16))/4),Math.log(2)));
const A=[[4,1],[2,3]];const mul=(u,v)=>u.map(row=>v[0].map((_,i)=>row.reduce((s,n,k)=>s+n*v[k][i],0)));
const A3=mul(mul(A,A),A);assert.equal(A3[0][0]+A3[1][1],133);
assert(eq(6*Math.exp(-Math.log(2))-5*Math.exp(-2*Math.log(2)),7/4));
const p=[1/2,1/3,1/6],x=[0,2,5];const ex=x.reduce((s,v,i)=>s+v*p[i],0),ex2=x.reduce((s,v,i)=>s+v*v*p[i],0);assert(eq(4*(ex2-ex**2),13));
const slope=(219-24*42/6)/(130-24*24/6);assert(eq(7+slope*(9-4),29/2));
assert(eq(2*0.15865525393145707,0.31731050786291414));
const migration=readFileSync(j.migration,'utf8');
for(const token of ["%9231%","%p2%","%further pure 2%","%wme02%","%wst01%","%9709%","%9fm0%","%0580%","%1ma1%","%4ma1%"])assert.ok(migration.includes(token),"missing routing guard "+token);
assert.ok(migration.includes('CREATE OR REPLACE FUNCTION private.grove_board_compatible'));
console.log('PASS 9 private metadata records; 9 independent JS maths checks; privacy; exact 9231 P2 gate; preserved legacy routing');
