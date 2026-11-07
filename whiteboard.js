/* MathsGrove whiteboard: cached ink rendering and per-question tab-session recovery.
   Saved evidence still goes to private Supabase storage via evidence-workspace.js. */
(function(){
"use strict";
function setup(options){
 const canvas=options.canvas,root=options.toolbar,ctx=canvas&&canvas.getContext("2d");
 if(!canvas||!root||!ctx)throw Error("Whiteboard container missing");
 const makeLayer=()=>{const c=document.createElement("canvas");c.width=canvas.width;c.height=canvas.height;return c};
 const paper=makeLayer(),ink=makeLayer(),scratch=makeLayer();
 const paperCtx=paper.getContext("2d"),inkCtx=ink.getContext("2d"),scratchCtx=scratch.getContext("2d");
 const board={strokes:[],active:null,pointerId:null,tool:"pen",color:"#19304D",thickness:3,
  grid:"square",enabled:true,dirty:false,version:0,contextKey:""};
 let frame=0;
 const key=()=>board.contextKey?"mathsgrove-board-v2:"+board.contextKey:"";
 function drawPaper(){
  const width=paper.width,height=paper.height,mode=board.grid;
  paperCtx.clearRect(0,0,width,height);
  paperCtx.fillStyle="#ffffff";paperCtx.fillRect(0,0,width,height);
  if(mode==="blank")return;
  const step=mode==="line"?28:24;
  paperCtx.beginPath();paperCtx.strokeStyle="#e2eaf2";paperCtx.lineWidth=1;
  for(let y=step+.5;y<height;y+=step){paperCtx.moveTo(0,y);paperCtx.lineTo(width,y)}
  if(mode==="square")for(let x=step+.5;x<width;x+=step){paperCtx.moveTo(x,0);paperCtx.lineTo(x,height)}
  paperCtx.stroke();
  if(mode==="square"){
   paperCtx.beginPath();paperCtx.strokeStyle="#cbd8e6";
   for(let y=step*5+.5;y<height;y+=step*5){paperCtx.moveTo(0,y);paperCtx.lineTo(width,y)}
   for(let x=step*5+.5;x<width;x+=step*5){paperCtx.moveTo(x,0);paperCtx.lineTo(x,height)}
   paperCtx.stroke();
  }
 }
 function drawStroke(target,stroke){
  if(!stroke||!stroke.points.length)return;
  target.save();
  target.globalCompositeOperation=stroke.tool==="eraser"?"destination-out":"source-over";
  target.globalAlpha=stroke.tool==="highlighter"?.32:1;
  target.strokeStyle=stroke.color;target.fillStyle=stroke.color;
  target.lineWidth=stroke.tool==="eraser"?24:stroke.tool==="highlighter"?19:stroke.width;
  target.lineJoin="round";target.lineCap="round";
  if(stroke.points.length===1){
   const pt=stroke.points[0];target.beginPath();
   target.arc(pt.x,pt.y,target.lineWidth/2,0,Math.PI*2);target.fill();
  }else{
   target.beginPath();target.moveTo(stroke.points[0].x,stroke.points[0].y);
   for(let i=1;i<stroke.points.length;i++)target.lineTo(stroke.points[i].x,stroke.points[i].y);
   target.stroke();
  }
  target.restore();
 }
 function rebuildInk(){
  inkCtx.clearRect(0,0,ink.width,ink.height);
  for(const stroke of board.strokes)drawStroke(inkCtx,stroke);
 }
 function render(){
  frame=0;
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.drawImage(paper,0,0);
  if(board.active&&board.active.tool==="eraser"){
   scratchCtx.clearRect(0,0,scratch.width,scratch.height);
   scratchCtx.drawImage(ink,0,0);drawStroke(scratchCtx,board.active);
   ctx.drawImage(scratch,0,0);
  }else{
   ctx.drawImage(ink,0,0);
   if(board.active)drawStroke(ctx,board.active);
  }
 }
 function queueRender(){if(!frame)frame=requestAnimationFrame(render)}
 function saveDraft(){
  if(!key())return;
  try{
   sessionStorage.setItem(key(),JSON.stringify({
    updatedAt:Date.now(),strokes:board.strokes,grid:board.grid,dirty:board.dirty
   }));
  }catch(_ignored){/* Storage limits must never interrupt drawing. */}
 }
 function setDirty(){
  board.version++;
  if(!board.dirty){board.dirty=true;options.onChange?.()}
 }
 function updateControls(){
  root.querySelectorAll("[data-board-tool]").forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.boardTool===board.tool)));
  root.querySelectorAll("[data-board-color]").forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.boardColor===board.color)));
 }
 function coords(e){
  const r=canvas.getBoundingClientRect();
  if(!r.width||!r.height)return{x:0,y:0};
  return{x:(e.clientX-r.left)*canvas.width/r.width,y:(e.clientY-r.top)*canvas.height/r.height};
 }
 function completeStroke(){
  if(!board.active)return;
  board.strokes.push(board.active);
  drawStroke(inkCtx,board.active);
  board.active=null;board.pointerId=null;
  saveDraft();queueRender();
 }
 function setGrid(v){
  if(!["square","line","blank"].includes(v))return;
  board.grid=v;canvas.dataset.grid=v;
  const input=root.querySelector("[data-board-grid]");if(input)input.value=v;
  drawPaper();queueRender();saveDraft();
 }
 canvas.addEventListener("pointerdown",e=>{
  if(!board.enabled||board.active||e.isPrimary===false)return;
  e.preventDefault();canvas.setPointerCapture(e.pointerId);
  board.pointerId=e.pointerId;
  board.active={tool:board.tool,color:board.color,width:board.thickness,points:[coords(e)]};
  setDirty();queueRender();
 });
 canvas.addEventListener("pointermove",e=>{
  if(!board.enabled||!board.active||e.pointerId!==board.pointerId)return;
  e.preventDefault();board.active.points.push(coords(e));
  setDirty();queueRender();
 });
 for(const event of ["pointerup","pointercancel","lostpointercapture"]){
  canvas.addEventListener(event,e=>{
   if(board.active&&e.pointerId===board.pointerId)completeStroke();
  });
 }
 root.querySelectorAll("[data-board-tool]").forEach(el=>el.addEventListener("click",()=>{
  const v=el.dataset.boardTool;if(["pen","highlighter","eraser"].includes(v)){board.tool=v;updateControls()}
 }));
 root.querySelectorAll("[data-board-color]").forEach(el=>el.addEventListener("click",()=>{
  board.color=el.dataset.boardColor;board.tool="pen";updateControls()
 }));
 function undo(){
  if(!board.enabled||!board.strokes.length)return;
  board.strokes.pop();rebuildInk();setDirty();saveDraft();queueRender();
 }
 root.querySelector("[data-board-undo]")?.addEventListener("click",undo);
 root.querySelector("[data-board-clear]")?.addEventListener("click",()=>{
  if(!board.enabled)return;
  board.active=null;board.pointerId=null;board.strokes=[];
  rebuildInk();setDirty();saveDraft();queueRender();
 });
 root.querySelector("[data-board-grid]")?.addEventListener("change",e=>{
  setGrid(e.target.value);setDirty();saveDraft();options.onGridChange?.(board.grid);
 });
 root.querySelector("[data-board-width]")?.addEventListener("input",e=>{
  board.thickness=Number(e.target.value)||3
 });
 canvas.dataset.grid=board.grid;updateControls();drawPaper();render();
 return {
  clear(){
   board.active=null;board.pointerId=null;board.strokes=[];board.dirty=false;
   if(key())try{sessionStorage.removeItem(key())}catch(_ignored){}
   rebuildInk();queueRender();
  },
  setContext(context){
   const next=String(context||"");
   if(next===board.contextKey)return;
   completeStroke();board.contextKey=next;board.active=null;board.pointerId=null;
   board.strokes=[];board.dirty=false;board.version++;
   let stored=null;
   try{stored=JSON.parse(sessionStorage.getItem(key())||"null")}catch(_ignored){}
   if(stored&&Date.now()-Number(stored.updatedAt||0)<12*3600*1000&&Array.isArray(stored.strokes)){
    board.strokes=stored.strokes.filter(s=>s&&Array.isArray(s.points)&&s.points.length&&
     ["pen","highlighter","eraser"].includes(s.tool)).slice(0,1000);
    board.dirty=Boolean(stored.dirty);
    if(["square","line","blank"].includes(stored.grid))board.grid=stored.grid;
   }
   canvas.dataset.grid=board.grid;
   const input=root.querySelector("[data-board-grid]");if(input)input.value=board.grid;
   drawPaper();rebuildInk();queueRender();
   if(board.dirty)options.onChange?.();
  },
  isDirty(){return board.dirty},
  getVersion(){return board.version},
  markSaved(version){
   if(version!==undefined&&version!==board.version)return false;
   board.dirty=false;saveDraft();return true;
  },
  setEnabled(value){if(!value)completeStroke();board.enabled=Boolean(value)},
  setGrid,
  undo,
  exportBlob(){
   completeStroke();
   return new Promise(resolve=>{
    render();
    canvas.toBlob(blob=>resolve(blob),"image/png");
   });
  },
  getStrokeCount(){return board.strokes.length+(board.active?1:0)}
 };
}
window.MathsGroveBoard={setup};
})();