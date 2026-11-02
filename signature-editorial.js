/* Examiner-only Signature editorial library: read-only until independent human moderation. */
export function initSignatureEditorial(db,state){
 const list=document.getElementById('mg-signature-library-list');
 const caption=document.getElementById('mg-signature-library-caption');
 const refreshButton=document.getElementById('mg-signature-library-refresh');
 const make=(tag,text,cls)=>{const e=document.createElement(tag);if(text!==undefined)e.textContent=String(text);if(cls)e.className=cls;return e};
 const math=(root,value)=>{if(window.MathsGroveMath?.write)window.MathsGroveMath.write(root,String(value));else root.textContent=String(value)};
 let epoch=0;
 async function showPaper(row,root){
  root.replaceChildren(make('p','Loading confidential examiner paper and method scheme…'));
  const {data,error}=await db.rpc('grove_staff_signature_editorial',{p_org:state.membership.org_id,p_assessment:row.id});
  if(error||!data?.ok){root.replaceChildren(make('p','Cannot load private paper: '+(error?.message||'Unauthorised.')));return}
  const paper=data.assessment;
  root.replaceChildren();
  root.append(make('p',paper.paper_code+' · '+paper.total_marks+' marks · '+paper.duration_minutes+' minutes · '+(paper.calculator_allowed?'Calculator allowed':'No calculator'),'mg-signature-meta'));
  const source=make('a','View official specification','mg-signature-reference');
  try{const u=new URL(paper.syllabus_ref);if(u.protocol==='https:'){source.href=u.href;source.target='_blank';source.rel='noopener noreferrer';root.append(source)}}catch{}
  const schemeMap=new Map((paper.mark_scheme||[]).map(x=>[x.id,x]));
  for(const question of paper.question_paper||[]){
   const panel=make('article',undefined,'mg-signature-paper-question');
   panel.append(make('strong',question.id+' · '+question.topic+' · '+question.marks+' marks'));
   const marks=schemeMap.get(question.id);
   for(const part of question.parts||[]){
    const block=make('div',undefined,'mg-signature-part');
    const label=make('p',question.id+'('+part.id+') · '+part.marks+' marks');
    const prompt=make('div');math(prompt,part.prompt);block.append(label,prompt);
    const rubric=marks?.parts?.find(x=>x.id===part.id);
    if(rubric){
     const details=make('details');details.append(make('summary','Confidential examiner mark scheme'));
     for(const criterion of rubric.criteria||[]){
      const line=make('p');math(line,criterion.award+' mark'+(criterion.award===1?'':'s')+' · '+criterion.reason);
      details.append(line)
     }
     block.append(details);
    }
    panel.append(block);
   }
   root.append(panel);
  }
  root.append(make('p',paper.review_state==='approved'?
   'HUMAN-MODERATED EDITORIAL APPROVAL · The paper remains private and is not automatically assigned or released.':
   'EDITORIAL ONLY · A human examiner must independently check every question and mark before approval. Student delivery is a separate workflow.','mg-signature-alert'));
  if(paper.review_state!=='approved'&&['admin','examiner'].includes(state.membership?.member_role)){
   const form=make('div',undefined,'mg-signature-moderation');
   form.append(make('strong','Independent mathematical moderation'));
   const label=make('label','Examiner moderation note (minimum 100 characters):');
   const note=make('textarea');note.rows=4;note.maxLength=3500;
   note.placeholder='Record the mathematical checks, syllabus/version alignment, grade appropriateness, mark criteria checked and any concerns resolved. This is an editorial sign-off, not student marking.';
   label.append(note);form.append(label);
   const agree=make('label',undefined,'mg-signature-agreement');
   const checkbox=make('input');checkbox.type='checkbox';
   agree.append(checkbox,document.createTextNode(' I have independently verified every question and marking point against this syllabus.'));form.append(agree);
   const button=make('button','Approve editorial paper (no student release)','button primary');button.type='button';
   const status=make('p','A human moderator must provide a signed review.','mg-signature-meta');
   button.addEventListener('click',async()=>{
    if(!checkbox.checked||note.value.trim().length<100){status.textContent='Confirm the checks and provide at least 100 characters of substantive moderation.';return}
    button.disabled=true;status.textContent='Saving human moderation to the restricted assessment register…';
    try{
     const {data,error}=await db.rpc('grove_staff_approve_signature',{p_org:state.membership.org_id,p_assessment:paper.id,p_review_note:note.value.trim()});
     if(error||!data?.ok)throw Error(error?.message||'Moderation could not be saved.');
     status.textContent='Editorial approval signed. This paper has NOT been assigned or sent to any student.';
     form.querySelectorAll('button,input,textarea').forEach(x=>x.disabled=true);
     await refresh();
    }catch(e){status.textContent='Moderation was not saved: '+e.message;button.disabled=false}
   });
   form.append(button,status);root.append(form);
  }
 }
 async function refresh(){
  if(!list||!caption||!state.membership?.org_id)return;
  const ticket=++epoch;caption.textContent='Checking private Signature assessment catalogue…';
  const {data,error}=await db.rpc('grove_staff_signature_catalog',{p_org:state.membership.org_id});
  if(ticket!==epoch)return;
  list.replaceChildren();
  if(error||!data?.ok){caption.textContent='Signature library unavailable: '+(error?.message||'Examiner permissions are required.');return}
  const rows=data.assessments||[];
  caption.textContent=rows.length+' secure Signature assessment drafts and moderated papers. Mark schemes are restricted to authorised staff.';
  if(!rows.length){list.append(make('p','No Signature editorial papers are currently staged.'));return}
  for(const row of rows){
   const card=make('article',undefined,'mg-signature-entry');
   const header=make('div',undefined,'mg-signature-entry-head');
   const title=make('strong',row.title);
   const badge=make('span',row.review_state==='approved'?'Human-moderated · approved':'Awaiting human moderation','mg-signature-status');
   header.append(title,badge);card.append(header);
   card.append(make('p',row.product.replaceAll('_',' ')+' · '+row.exam_board+' · '+row.qualification+' '+row.academic_level+' · '+row.total_marks+' marks · '+row.duration_minutes+' min','mg-signature-meta'));
   const button=make('button','Review questions and mark scheme','button outline');button.type='button';
   const content=make('div',undefined,'mg-signature-entry-detail');content.hidden=true;
   button.addEventListener('click',()=>{const expanded=content.hidden;content.hidden=!expanded;if(expanded){button.textContent='Hide confidential paper';void showPaper(row,content)}else button.textContent='Review questions and mark scheme'});
   card.append(button,content);list.append(card);
  }
 }
 refreshButton?.addEventListener('click',()=>void refresh());
 return {refresh};
}