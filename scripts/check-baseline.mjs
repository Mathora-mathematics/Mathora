import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
const calcSource=readFileSync(new URL('../baseline-calc.js',import.meta.url),'utf8');
const {evaluateMath}=await import('data:text/javascript;charset=utf-8,'+encodeURIComponent(calcSource));
const read=p=>{assert.ok(existsSync(p),'Missing baseline file: '+p);return readFileSync(p,'utf8')};
const sql=read('supabase/UPGRADE_BASELINE_ASSESSMENT.sql');
const app=read('baseline.js'),page=read('baseline.html'),style=read('baseline.css');
const portal=read('portal.js'),studio=read('studio.js'),workflow=read('.github/workflows/pages.yml');
const seedPaths=[
 'supabase/SEED_BASELINE_PILOT_KS4.sql',
 'supabase/SEED_BASELINE_PILOT_ALEVEL_IBAA.sql',
 'supabase/SEED_BASELINE_PILOT_SPECIALIST.sql'
];
const counts=new Map();let total=0;
for(const path of seedPaths){
 const source=read(path);
 const re=/\('([A-Z_]+)','([a-z0-9_]+)',(\d+),'(?:[^']|'')*','(?:[^']|'')*',\d+,'/g;
 let found=0;
 for(const match of source.matchAll(re)){
  const key=match[1]+':'+match[2],n=Number(match[3]);
  if(!counts.has(key))counts.set(key,new Set());
  assert.ok(n>=1&&n<=20,'Invalid question position for '+key);
  assert.ok(!counts.get(key).has(n),'Duplicate position '+n+' in '+key);
  counts.get(key).add(n);found++;total++;
 }
 assert.equal(found,80,'Every curated seed must contain 4 routes of 20 questions: '+path);
 assert.ok(source.includes('jsonb_build_array('),'MCQ choices are required in '+path);
 assert.ok(source.includes('explanation=excluded.explanation'),'Marking explanations must be imported in '+path);
}
assert.equal(counts.size,12,'Expected 12 supported exam-and-level combinations');
assert.equal(total,240,'Expected 240 seed question records');
for(const [key,positions] of counts)assert.equal(positions.size,20,key+' must contain exactly 20');
for(const route of ['GCSE:foundation','GCSE:higher','IGCSE:core','IGCSE:extended',
 'A_LEVEL:as','A_LEVEL:a2','FURTHER_MATHS:further','IB_AA:sl','IB_AA:hl','IB_AI:sl','IB_AI:hl','TMUA:tmua'])
 assert.ok(counts.has(route),'Missing qualification route '+route);
for(const phrase of [
 'CREATE TABLE IF NOT EXISTS private.baseline_bank',
 'CREATE TABLE IF NOT EXISTS private.baseline_sessions',
 'CREATE TABLE IF NOT EXISTS private.baseline_answers',
 'CREATE OR REPLACE FUNCTION public.baseline_status()',
 'CREATE OR REPLACE FUNCTION public.baseline_start()',
 'CREATE OR REPLACE FUNCTION public.baseline_answer(',
 'CREATE OR REPLACE FUNCTION public.baseline_finish(',
 'CREATE OR REPLACE FUNCTION public.baseline_event(',
 'CREATE OR REPLACE FUNCTION public.baseline_admin_overview(',
 'CREATE OR REPLACE FUNCTION public.baseline_staff_report(',
 'v_s.status=\'active\' AND now()>=v_s.ends_at',
 'IF v_s.status<>\'active\' OR now()>=v_s.ends_at',
 'IF v_s.id IS NULL OR v_s.student_id<>(select auth.uid())',
 'private.is_staff(p_org)',
 'server_time',
 'calculator_allowed',
 'REVOKE ALL ON private.baseline_bank'
 ])assert.ok(sql.includes(phrase),'Baseline backend invariant missing: '+phrase);
assert.ok(sql.trim().endsWith('COMMIT;'),'Database migration must be atomic');
assert.ok(app.includes("sb.auth")===false,'Baseline must use db client without bypassing auth checks');
assert.ok(app.includes("db.auth.getUser()"),'Baseline must verify authenticated account');
assert.ok(app.includes("db.rpc('baseline_answer'"),'Answer persistence must run on server');
assert.ok(app.includes("db.rpc('baseline_event'"),'Browser integrity events must reach backend');
assert.ok(app.includes("db.rpc('baseline_finish'"),'Final marking must run on server');
assert.ok(!app.includes('correct_text'),'No marking answer key in public browser code');
assert.ok(!app.includes('eval(')&&!app.includes('new Function('),'No unsafe code execution in baseline');
assert.ok(portal.includes("location.replace('./baseline.html')"),'Student first-login baseline routing missing');
assert.ok(studio.includes('initBaselineAdmin'),'Admin diagnostic register missing');
for(const file of ['baseline.html','baseline.css','baseline.js','baseline-calc.js','baseline-admin.js'])
 assert.ok(workflow.includes(file),'GitHub Pages deployment missing '+file);
const ids=[...page.matchAll(/id="([^"]+)"/g)].map(x=>x[1]);
assert.equal(new Set(ids).size,ids.length,'Duplicate element IDs in baseline page');
for(const id of ['bl-start','bl-timer','bl-options','bl-board','bl-calc-box','bl-report','bl-confirm','bl-unavailable'])assert.ok(page.includes('id="'+id+'"'),'Missing baseline UX element '+id);
for(const [expression,expected] of [['18+27',45],['3.6 + 2.75',6.35],['(12 + 4)/2',8],['2^3^2',512],['√(9+7)',4],['-2^2',-4],['5/2',2.5]])assert.equal(evaluateMath(expression),expected,'Incorrect calculator value: '+expression);
for(const expression of ['1/0','√-1','alert(1)','1+','2*','1+(2','1;2']){
 assert.throws(()=>evaluateMath(expression),'Calculator accepted invalid expression: '+expression);
}
console.log('MathsGrove baseline: 12 exam routes × 20 question records = 240; secure flow and 14 calculator cases: PASS (static).');
