import {PDFDocument,StandardFonts,rgb} from 'npm:pdf-lib@1.17.1';
type AnyRow=Record<string,unknown>;
const arr=(x:unknown):AnyRow[]=>Array.isArray(x)?x as AnyRow[]:[];
const str=(x:unknown):string=>x===null||x===undefined?'—':typeof x==='object'?JSON.stringify(x):String(x);
const date=(x:unknown)=>{if(!x)return '—';const d=new Date(String(x));return isNaN(+d)?str(x):d.toISOString().slice(0,16).replace('T',' ')+' UTC'};
function ascii(input:string):string{
 const map:Record<string,string>={'π':'pi','Π':'Pi','√':'sqrt','×':'x','÷':'/','−':'-','–':'-','—':'-','≤':'<=','≥':'>=','≠':'!=','²':'^2','³':'^3','⁴':'^4','¹':'^1','⁰':'^0','°':' degrees','£':'GBP ','€':'EUR ','•':'-','→':'->','∞':'infinity','α':'alpha','β':'beta','θ':'theta','μ':'mu','Δ':'Delta','∑':'sum','∈':'in','∩':'intersection','∪':'union','∴':'therefore','≈':'approximately','∝':'proportional to','’':"'",'“':'"','”':'"'};
 let out='';for(const c of input.normalize('NFKD')){if(map[c])out+=map[c];else if(c.charCodeAt(0)>=32&&c.charCodeAt(0)<=126)out+=c;else if(c==='\n'||c==='\t')out+=' ';else out+='?'}return out;
}
const colors={navy:rgb(.065,.12,.22),ink:rgb(.14,.23,.34),muted:rgb(.4,.47,.55),champagne:rgb(.78,.68,.53),paper:rgb(.98,.975,.96),line:rgb(.87,.88,.88)};
class Writer{
 doc!:PDFDocument;regular:any;bold:any;page:any;y=0;number=0;title='';
 async init(title:string){this.title=title;this.doc=await PDFDocument.create();this.regular=await this.doc.embedFont(StandardFonts.Helvetica);this.bold=await this.doc.embedFont(StandardFonts.HelveticaBold);this.newPage();return this}
 newPage(){
  this.page=this.doc.addPage([595.3,841.9]);this.number++;const p=this.page;p.drawRectangle({x:0,y:788,width:595.3,height:54,color:colors.navy});
  p.drawText('MathsGrove.',{x:43,y:813,font:this.bold,size:19,color:rgb(.95,.95,.93)});
  p.drawText('PRIVATE STUDENT RECORD',{x:419,y:818,font:this.bold,size:7.5,color:colors.champagne});
  p.drawLine({start:{x:43,y:49},end:{x:552,y:49},thickness:.6,color:colors.line});
  p.drawText('Confidential academic data - administrator export',{x:43,y:34,font:this.regular,size:8,color:colors.muted});
  p.drawText('Page '+this.number,{x:518,y:34,font:this.regular,size:8,color:colors.muted});
  this.y=754;
 }
 ensure(h=24){if(this.y-h<74)this.newPage()}
 heading(s:string){this.ensure(52);this.y-=9;this.page.drawText(ascii(s).slice(0,80),{x:43,y:this.y,font:this.bold,size:15,color:colors.navy});this.y-=14;this.page.drawLine({start:{x:43,y:this.y},end:{x:552,y:this.y},thickness:1.1,color:colors.champagne});this.y-=18}
 line(s:string,{bold=false,size=10,color=colors.ink,indent=0}:{bold?:boolean,size?:number,color?:any,indent?:number}={}){
  let words=ascii(s).replace(/\s+/g,' ').split(' ');const x=43+indent,max=552-x;const font=bold?this.bold:this.regular;
  let current='';const lines:string[]=[];
  for(const w of words){
   if(!w)continue;const next=current?current+' '+w:w;
   if(font.widthOfTextAtSize(next,size)<=max){current=next;continue}
   if(current)lines.push(current);
   current='';
   if(font.widthOfTextAtSize(w,size)>max){
    let part='';for(const c of w){if(font.widthOfTextAtSize(part+c,size)>max){lines.push(part);part=c}else part+=c}current=part;
   }else current=w;
  }
  if(current)lines.push(current);
  if(!lines.length)lines.push(' ');
  for(const t of lines){this.ensure(size+7);this.page.drawText(t,{x,y:this.y,font,size,color});this.y-=size+5}
 }
 field(name:string,value:unknown){this.line(name.toUpperCase(),{bold:true,size:8,color:colors.muted});this.line(str(value));this.y-=6}
 section(title:string,rows:AnyRow[],render:(r:AnyRow,i:number)=>void){
  this.heading(title);if(!rows.length){this.line('No records available in this section.',{color:colors.muted});return}
  rows.forEach((r,i)=>{this.ensure(72);render(r,i);this.y-=10});
 }
 async finish(){this.doc.setTitle(this.title);this.doc.setSubject('Private MathsGrove student academic archive');this.doc.setProducer('MathsGrove Archive Service');return new Uint8Array(await this.doc.save())}
}
export type Evidence={name:string,bytes:Uint8Array,kind:string,attemptId?:string};
export async function makeStudentPdfs(data:AnyRow,evidence:Evidence[]):Promise<Record<string,Uint8Array>>{
 const result:Record<string,Uint8Array>={};
 const profile=(await new Writer().init('MathsGrove - Profile and Archive Guide'));
 profile.heading('Your MathsGrove academic archive');
 profile.line('Prepared for: '+str((data.student_profile as AnyRow)?.display_name||data.student_email),{bold:true,size:13});
 profile.line('Export date: '+date(data.exported_at));
 profile.line('This private archive provides saved academic records and PDF reports. It can be emailed by the administrator after download. It does not contain passwords or unsaved whiteboard work.');
 profile.heading('Archive contents');
 for(const x of ['01_Profile_and_Programme.pdf','02_Baseline_Diagnostics.pdf','03_Practice_and_Timing.pdf','04_Papers_and_Answers.pdf','05_Examiner_Reports.pdf','06_Uploaded_Work_Overview.pdf','Original_Submissions/ (original files)','Complete_Data.json (portable data export)'])profile.line('- '+x);
 profile.heading('Student and programme details');
 for(const [k,v] of Object.entries(data.student_profile as AnyRow||{}))if(!/password|secret|token/i.test(k))profile.field(k,v);
 for(const [name,k] of [['Qualification and level','academic_preferences'],['Subscription and access','subscription'],['Academic settings','academic_settings']]){
  profile.heading(name);for(const [field,value] of Object.entries(data[k] as AnyRow||{}))if(!/private|staff_notes|secret|token/i.test(field))profile.field(field,value);
 }
 profile.heading('Data completeness');
 profile.line('Saved paper attempts: '+arr(data.attempts).length+'; baseline sittings: '+arr(data.baseline_sittings).length+'; scheduled practice sessions: '+arr(data.practice_assignments).length+'; submitted original evidence files: '+evidence.length+'.');
 profile.line('This record is a data export, not an official examination certificate. If a section is empty, there is no saved record of that type in the account.');
 result['01_Profile_and_Programme.pdf']=await profile.finish();

 const baseline=(await new Writer().init('MathsGrove - Baseline Diagnostic Reports'));
 const sessions=arr(data.baseline_sittings),items=arr(data.baseline_questions),answers=arr(data.baseline_responses);
 baseline.heading('Baseline diagnostic reports');
 baseline.line('Automatically scored baseline evidence and question-level responses. Raw scores are indicative and must not be treated as official predicted grades.');
 for(const [i,s] of sessions.entries()){
  baseline.heading('Sitting '+(i+1)+' - '+str(s.qualification)+' '+str(s.academic_level));
  baseline.field('Date',date(s.started_at));baseline.field('Status',s.status);
  baseline.field('Score',str(s.score)+' / '+items.filter(q=>q.session_id===s.id).length);
  for(const q of items.filter(q=>q.session_id===s.id)){
   const a=answers.find(r=>r.session_id===s.id&&r.position===q.position);
   baseline.line('Q'+str(q.position)+' · '+str(q.topic)+' / '+str(q.skill),{bold:true});
   baseline.line('Question: '+str(q.prompt));
   baseline.line('Response: '+str(a?.choice)+'; '+(a?.choice===q.correct_option?'Correct':'Review required'));
   baseline.line('Explanation: '+str(q.explanation),{size:9,color:colors.muted});
   baseline.y-=8;
  }
 }
 if(!sessions.length)baseline.line('No baseline sitting recorded.');
 result['02_Baseline_Diagnostics.pdf']=await baseline.finish();

 const practice=(await new Writer().init('MathsGrove - Practice and Question Timing'));
 const tasks=arr(data.practice_assignments),taskItems=arr(data.practice_questions),taskAnswers=arr(data.practice_responses),times=arr(data.practice_question_timing),feedback=arr(data.released_teacher_feedback);
 practice.heading('Scheduled practice and progress');
 practice.line('Visible seconds show the amount of time the question was onscreen. This is an approximation, not proof of active working or independent performance.');
 for(const [i,t] of tasks.entries()){
  practice.heading('Session '+(i+1)+' - '+str(t.mode)+' ('+date(t.due_date)+')');
  practice.line(str(t.qualification)+' '+str(t.academic_level)+' · Grove '+str(t.programme)+' · Status '+str(t.status));
  practice.line('Score: '+str(t.score)+' / '+str(t.question_count));
  for(const q of taskItems.filter(z=>z.task_id===t.id)){
   const a=taskAnswers.find(z=>z.task_id===t.id&&z.position===q.position),time=times.find(z=>z.task_id===t.id&&z.position===q.position);
   practice.line('Q'+str(q.position)+' · '+str(q.topic)+' · '+str(q.skill),{bold:true});
   practice.line(str(q.prompt));
   practice.line('Chosen: '+str(a?.choice)+' · '+(a?.choice===q.correct_option?'Correct':'Review')+' · '+str(time?.seconds_visible||0)+' seconds visible');
   practice.line('Explanation: '+str(q.explanation),{size:9,color:colors.muted});
   practice.y-=7;
  }
  const fb=feedback.find(z=>z.task_id===t.id);
  if(fb)practice.line('RELEASED EXAMINER FEEDBACK: '+str(fb.feedback),{bold:true,size:10});
 }
 if(!tasks.length)practice.line('No assigned practice sessions recorded.');
 result['03_Practice_and_Timing.pdf']=await practice.finish();

 const papers=(await new Writer().init('MathsGrove - Original Papers and Answers'));
 const attempts=arr(data.attempts),stems=arr(data.paper_question_stems),typed=arr(data.answers);
 papers.heading('Saved papers and student answers');
 for(const [i,a] of attempts.entries()){
  papers.heading('Paper '+(i+1)+' - '+str(a.qualification)+' / '+str(a.paper_mode));
  papers.line('Started: '+date(a.started_at)+' · Submitted: '+date(a.submitted_at)+' · Status: '+str(a.status));
  for(const q of stems.filter(z=>z.attempt_id===a.id).sort((x,y)=>Number(x.position)-Number(y.position))){
   const ans=typed.find(z=>z.attempt_id===a.id&&z.question_id===q.question_id);
   papers.line('Question '+str(q.position)+' · '+str(q.topic)+' · '+str(q.marks)+' marks',{bold:true});
   papers.line(str(q.prompt));papers.line('Student response: '+str(ans?.typed_answer));
   papers.y-=9;
  }
  const ids=stems.filter(z=>z.attempt_id===a.id);
  if(!ids.length)papers.line('Question wording was not available for this sitting.',{color:colors.muted});
 }
 if(!attempts.length)papers.line('No saved practice or mock paper attempts.');
 result['04_Papers_and_Answers.pdf']=await papers.finish();

 const examiner=(await new Writer().init('MathsGrove - Released Examiner Reports'));
 const reviews=arr(data.examiner_feedback),summaries=arr(data.examiner_summaries);
 examiner.heading('Examiner marking and released feedback');
 examiner.line('Reports reproduce saved comments. Internal confidential examiner notes and unpublished working are excluded.');
 for(const [i,s] of summaries.entries()){
  examiner.heading('Paper report '+(i+1));
  examiner.field('Attempt',s.attempt_id);
  for(const k of ['overview','strengths','gaps','next_steps','readiness_note'])examiner.field(k.replace(/_/g,' '),s[k]);
  examiner.field('Released',date(s.released_at));
 }
 for(const [i,r] of reviews.entries()){
  examiner.heading('Question feedback '+(i+1));
  examiner.field('Attempt',r.attempt_id);
  examiner.field('Marks awarded',r.marks_awarded);
  examiner.field('Examiner comment',r.feedback);
 }
 for(const f of feedback){examiner.heading('Released daily practice guidance');examiner.line(str(f.feedback));}
 if(!summaries.length&&!reviews.length&&!feedback.length)examiner.line('No released examiner comments are recorded.');
 result['05_Examiner_Reports.pdf']=await examiner.finish();

 const evid=(await new Writer().init('MathsGrove - Original Work and Upload Index'));
 evid.heading('Uploaded working and supporting evidence');
 evid.line('Original uploaded files are preserved without transformation in Original_Submissions/. Supported JPG/PNG files are also reproduced below for a printable PDF copy. Other formats are indexed and remain available in their original form.');
 for(const [i,f] of evidence.entries()){
  evid.ensure(95);evid.heading('Evidence '+(i+1)+' - '+f.name);
  evid.line('Original file: Original_Submissions/'+f.name,{size:9});
  evid.line('Size: '+f.bytes.byteLength+' bytes · '+f.kind,{size:9,color:colors.muted});
  if(/image\/(png|jpeg)/i.test(f.kind)){
   try{
    const img=/png/i.test(f.kind)?await evid.doc.embedPng(f.bytes):await evid.doc.embedJpg(f.bytes);
    const scale=Math.min(1,490/img.width,390/img.height);
    const w=img.width*scale,h=img.height*scale;
    evid.ensure(h+20);
    evid.page.drawImage(img,{x:50,y:evid.y-h,width:w,height:h});evid.y-=h+20;
   }catch{evid.line('Preview could not be generated. Original file is included.')}
  }else evid.line('Preview is not supported for this file format; see the original submission.');
 }
 if(!evidence.length)evid.line('No uploaded working files are recorded.');
 result['06_Uploaded_Work_Overview.pdf']=await evid.finish();
 return result;
}
