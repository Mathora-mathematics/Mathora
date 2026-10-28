/* MathsGrove private mathematics library.
   No answer keys are bundled in GitHub Pages. Mark schemes are fetched on demand
   from the staff-restricted Supabase mark_schemes table. */
export function initContentBank(db,studio){
 const $=id=>document.getElementById(id);
 const admin=['admin','partner'].includes(studio.membership?.member_role);
 const bank={boards:[],blueprints:[],questions:[],editorial:[],selected:null,loaded:false,hasEditorial:false};
 const say=(message,error=false,id='bank-status')=>{const node=$(id);node.textContent=message;node.classList.toggle('is-error',error)};
 const txt=(tag,value,cls)=>{const node=document.createElement(tag);if(cls)node.className=cls;node.textContent=String(value??'');return node};
 const clear=id=>$(id).replaceChildren();
 const boardName=id=>bank.boards.find(x=>x.key===id)?.name||id||'Unmapped to board';
 const qualText=q=>({GCSE:'GCSE',IGCSE:'IGCSE',A_LEVEL:'AS / A Level',FURTHER_MATHS:'Further Maths',IB_AA:'IB AA',IB_AI:'IB AI',TMUA:'TMUA'})[q]||q;
 function setOptions(element,items,emptyLabel){
  const keep=element.value;element.replaceChildren();
  if(emptyLabel)element.add(new Option(emptyLabel,''));
  items.forEach(x=>element.add(new Option(x.label,x.value)));
  if([...element.options].some(x=>x.value===keep))element.value=keep;
 }
 function updateBoardOptions(){
  const level=$('bank-level').value;
  const list=bank.boards.filter(x=>x.qualification===level);
  setOptions($('bank-board'),list.map(x=>({label:x.name,value:x.key})),'All boards');
  renderBoards();renderMockBlueprints();renderQuestions();
 }
 function updateAuthorOptions(){
  const qual=$('bank-author-qual').value;
  const list=bank.boards.filter(x=>x.qualification===qual&&x.verified);
  setOptions($('bank-author-board'),list.map(x=>({label:x.name,value:x.key})),'Select verified board');
  const board=bank.boards.find(x=>x.key===$('bank-author-board').value);
  setOptions($('bank-author-tier'),(board?.tierLabels||[]).map(x=>({label:x,value:x})),'Select tier');
  $('bank-author-save').disabled=!list.length||!admin||!bank.hasEditorial;
 }
 function renderBoards(){
  const root=$('bank-board-list');root.replaceChildren();
  const relevant=bank.boards.filter(x=>x.qualification===$('bank-level').value&&(!$('bank-board').value||$('bank-board').value===x.key));
  for(const b of relevant){
   const card=txt('article','', 'bank-board-item');
   const h=txt('h3',b.name),meta=txt('div','', 'bank-board-badges');
   meta.append(txt('span',b.key),txt('span',b.tierLabels.join(' / ')));
   if(!b.verified)meta.append(txt('span','Needs current specification verification','pending'));
   card.append(h,meta);
   if(b.notes)card.append(txt('p',b.notes));
   if(b.papers.length){
    for(const p of b.papers){
     const desc=p.title+' · '+p.minutes+' min · '+p.marks+' marks · '+(p.calculator?'Calculator':'Non-calculator');
     card.append(txt('p',desc));
    }
   }else card.append(txt('p','Specification directory only; mock format not yet authorised.'));
   const link=txt('a','Official awarding-body information ↗');link.href=b.source;link.target='_blank';link.rel='noopener noreferrer';card.append(link);
   root.append(card);
  }
  if(!relevant.length)root.append(txt('p','No board information is available yet.'));
  $('bank-board-count').textContent=String(bank.boards.filter(x=>x.qualification===$('bank-level').value&&x.verified).length);
 }
 function renderMockBlueprints(){
  const root=$('bank-mock-list');root.replaceChildren();
  const list=bank.blueprints.filter(p=>p.qualification===$('bank-level').value&&(!$('bank-board').value||p.board_key===$('bank-board').value));
  $('bank-mock-count').textContent=String(list.length);
  for(const p of list){
   const item=txt('div','', 'bank-mock-item');
   const name=txt('strong',p.title),sub=txt('small',p.target_marks+' target marks · '+p.minutes+' minutes · '+(p.calculator?'Calculator':'Non-calculator')+' · OUTLINE ONLY');
   item.append(name,sub);root.append(item);
  }
  if(!list.length)root.append(txt('p','No paper blueprints for this selection. AS / A Level will be researched in stage three.'));
 }
 function editorialFor(id){return bank.editorial.find(x=>x.question_id===id)||null}
 function filteredQuestions(){
  const qual=$('bank-level').value,search=$('bank-search').value.trim().toLowerCase();
  const review=$('bank-review-filter').value,board=$('bank-board').value;
  return bank.questions.filter(q=>{
   const e=editorialFor(q.id),status=e?.review_status||'legacy_unmapped';
   const matchQual=qual==='AS_A_LEVEL'?['A_LEVEL','FURTHER_MATHS'].includes(q.qualification):q.qualification===qual;
   const query=(q.topic+' '+q.prompt+' '+q.qualification).toLowerCase();
   return matchQual&&(!search||query.includes(search))&&(review==='all'||status===review)&&(!board||!e?.board_key||e.board_key===board);
  });
 }
 function renderQuestions(){
  const root=$('bank-questions');root.replaceChildren();
  const list=filteredQuestions();
  for(const q of list){
   const row=document.createElement('tr');const e=editorialFor(q.id);
   const status=e?.review_status||'legacy_unmapped';
   const cols=[qualText(q.qualification),q.topic+'|'+q.prompt,q.marks,'Level '+q.difficulty,status,''];
   cols.forEach((value,index)=>{
    const td=document.createElement('td');
    if(index===1){
     td.append(txt('strong',q.topic),txt('small',q.prompt.length>110?q.prompt.slice(0,110)+'…':q.prompt));
    }else if(index===4)td.append(txt('span',status.replaceAll('_',' '),'bank-status-pill '+status));
    else if(index===5){
     const button=txt('button','Inspect','button outline');button.type='button';
     button.onclick=()=>void showQuestion(q.id);
     td.append(button);
    }else td.textContent=String(value);
    row.append(td);
   });root.append(row);
  }
  if(!list.length){
   const row=document.createElement('tr'),cell=txt('td','No questions match these filters. Add an original question or select another level.');
   cell.colSpan=6;row.append(cell);root.append(row);
  }
  $('bank-question-count').textContent=String(bank.questions.length);
 }
 async function showQuestion(id){
  const q=bank.questions.find(x=>x.id===id);if(!q)return;
  bank.selected=id;
  $('bank-detail').hidden=false;
  $('bank-detail-title').textContent=q.topic;
  const e=editorialFor(id),tags=$('bank-detail-meta');tags.replaceChildren();
  [qualText(q.qualification),e?.board_key?boardName(e.board_key):'No board mapping',
   e?.exam_tier||'Tier not mapped',q.marks+' marks','Difficulty '+q.difficulty,
   e?.suggested_seconds?Math.ceil(e.suggested_seconds/60)+' min suggested':'Time not set',
   e?.review_status||'Legacy pilot'].forEach(x=>tags.append(txt('span',x)));
  const prompt=$('bank-detail-prompt');
  if(window.MathsGroveMath)window.MathsGroveMath.write(prompt,q.prompt);else prompt.textContent=q.prompt;
  $('bank-detail-scheme').textContent='Loading private examiner guidance…';
  const canModerate=admin&&e?.owner_org===studio.membership.org_id&&bank.hasEditorial;
  $('bank-moderation').hidden=!canModerate;
  $('bank-review-note').value=e?.editorial_note||'';
  $('bank-detail').scrollIntoView({behavior:'smooth',block:'start'});
  const {data,error}=await db.from('mark_schemes').select('scheme').eq('question_id',id).maybeSingle();
  if(bank.selected!==id)return;
  $('bank-detail-scheme').textContent=error?
    'Examiner guidance unavailable. Verify staff permissions and network access.':
    data?.scheme||'No examiner scheme recorded for this pilot question. Do not approve without one.';
 }
 async function load(){
  say('Loading official board formats and your private question catalogue…');
  try{
   const [b,p]=await Promise.all([
    fetch('./content/boards.json',{cache:'no-store'}).then(r=>{if(!r.ok)throw Error('Board catalogue unavailable');return r.json()}),
    fetch('./content/paper-blueprints.json',{cache:'no-store'}).then(r=>{if(!r.ok)throw Error('Blueprint register unavailable');return r.json()})
   ]);
   bank.boards=b.boards||[];bank.blueprints=p.blueprints||[];
   const {data:questions,error}=await db.from('question_bank')
     .select('id,qualification,topic,prompt,marks,difficulty,active,created_at')
     .order('created_at',{ascending:false}).limit(500);
   if(error)throw error;
   bank.questions=questions||[];
   const meta=await db.from('question_editorial')
     .select('question_id,owner_org,board_key,exam_tier,calculator_required,suggested_seconds,review_status,editorial_note')
     .limit(500);
   bank.hasEditorial=!meta.error;bank.editorial=meta.data||[];
   updateBoardOptions();updateAuthorOptions();
   if(!admin)$('bank-author').hidden=true;
   else $('bank-author').hidden=false;
   say('Loaded '+bank.questions.length+' accessible questions. '+
     (bank.hasEditorial?'Private moderation metadata ready.':'The question content-studio SQL upgrade has not been installed. Viewing existing pilot items only.')+
     ' Mock blueprints are NOT yet assembled or timed.');
   bank.loaded=true;
  }catch(err){say('Unable to load mathematics library: '+(err?.message||'Connection error'),true)}
 }
 $('bank-level').addEventListener('change',updateBoardOptions);
 $('bank-board').addEventListener('change',()=>{renderBoards();renderQuestions();renderMockBlueprints()});
 $('bank-search').addEventListener('input',renderQuestions);
 $('bank-review-filter').addEventListener('change',renderQuestions);
 $('bank-refresh').addEventListener('click',()=>void load());
 $('bank-detail-close').addEventListener('click',()=>{$('bank-detail').hidden=true;bank.selected=null});
 $('bank-author-qual').addEventListener('change',updateAuthorOptions);
 $('bank-author-board').addEventListener('change',updateAuthorOptions);
 $('bank-author-form').addEventListener('submit',async event=>{
  event.preventDefault();if(!admin||!bank.hasEditorial)return;
  const button=$('bank-author-save');button.disabled=true;
  try{
   const board=$('bank-author-board').value;
   if(!board)throw Error('Select a verified board');
   const payload={
    p_org:studio.membership.org_id,p_qualification:$('bank-author-qual').value,
    p_board_key:board,p_exam_tier:$('bank-author-tier').value,
    p_topic:$('bank-author-topic').value.trim(),p_prompt:$('bank-author-prompt').value.trim(),
    p_marks:Number($('bank-author-marks').value),
    p_difficulty:Number($('bank-author-difficulty').value),
    p_seconds:Number($('bank-author-minutes').value)*60,
    p_calculator:$('bank-author-calculator').checked,
    p_scheme:$('bank-author-scheme').value.trim(),
    p_note:$('bank-author-note').value.trim()
   };
   const {data,error}=await db.rpc('author_bank_question',payload);
   if(error||!data)throw Error(error?.message||'Could not save original question');
   say('Original question saved privately as an unpublished draft. Inspect it, solve independently, then approve when checked.',false,'bank-author-feedback');
   $('bank-author-form').reset();await load();
  }catch(err){say(err?.message||'Could not save question',true,'bank-author-feedback')}
  finally{button.disabled=false}
 });
 document.querySelectorAll('[data-bank-decision]').forEach(button=>button.addEventListener('click',async()=>{
  if(!bank.selected||!admin)return;
  button.disabled=true;
  try{
   const {data,error}=await db.rpc('moderate_bank_question',{
    p_question:bank.selected,p_status:button.dataset.bankDecision,p_note:$('bank-review-note').value.trim()
   });
   if(error||!data?.ok)throw Error(error?.message||'Moderation action failed');
   $('bank-detail').hidden=true;bank.selected=null;await load();
   say('Moderation change saved. Only approved original questions become available for live student practice.');
  }catch(err){say(err?.message||'Could not moderate question',true)}
  finally{button.disabled=false}
 }));
 document.querySelector('[data-tab="bank"]')?.addEventListener('click',()=>{if(!bank.loaded)void load()});
}
