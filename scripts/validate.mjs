import fs from 'node:fs';
import vm from 'node:vm';
const ctx={window:{}};vm.createContext(ctx);
const files=['lessons','sow-map','content-core','content-12-17','content-18-22','starters','starter-answers','enhancements','diagrams','book-diagrams','question-diagrams','question-engine','textbook-content','accurate-diagrams','source-questions'];
for(const f of files)vm.runInContext(fs.readFileSync(f+'.js','utf8'),ctx,{filename:f+'.js'});
const w=ctx.window,assets=new Set();
if(w.LESSONS.length!==47||new Set(w.LESSONS.map(l=>l.id)).size!==47)throw Error('Lesson coverage');
const image=a=>{if(!a||!fs.existsSync(a.image)||a.width<1||a.height<1)throw Error('Missing image '+a?.image);assets.add(a.image)};
let examples=0;
for(const l of w.LESSONS){
 const b=w.TEXTBOOK_CONTENT[l.id],d=w.LESSON_CONTENT[l.id];
 if(!b?.practice.length||!d)throw Error('Missing mapped material '+l.id);
 if(w.STARTERS[l.id]?.length!==4||w.STARTER_ANSWERS[l.id]?.length!==4)throw Error('Missing starter '+l.id);
 for(const a of [...b.practice,...b.homework])image(a);
 for(const e of b.examples){examples++;if(e.sourceQuestion){image(e.sourceQuestion);image(e.sourceSolution)}else if(!e.steps.length)throw Error('Missing source solution '+l.id)}
 const bank=w.MathoraQuestionEngine.build(l.type);
 if(bank.practice.length<8||d.homework.length<1)throw Error('Question coverage '+l.id);
 for(const q of [...bank.practice.slice(0,8),...d.homework,...(w.SOURCE_QUESTIONS[l.id]||[])]){
  if(!q.prompt||!q.steps?.length)throw Error('Unsolved question '+l.id);
  if(q.verifiedDiagram&&!w.VerifiedDiagrams.render(q.verifiedDiagram).includes('<svg'))throw Error('Diagram '+l.id);
 }
}
const html=fs.readFileSync('index.html','utf8');for(const f of [...files,'app'])if(!html.includes(f+'.js'))throw Error('Missing runtime script '+f);
console.log(`PASS: 47 mapped lessons; ${examples} source examples; ${assets.size} referenced extracts; data-driven diagrams and worked solutions.`);
