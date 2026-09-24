(function(){
  "use strict";

  const $=(s,r=document)=>r.querySelector(s);
  const $$=(s,r=document)=>Array.from(r.querySelectorAll(s));

  const now=new Date();
  const dateEl=$("#lessonDate");
  if(dateEl){
    dateEl.textContent=new Intl.DateTimeFormat("en-GB",{
      day:"numeric",month:"long",year:"numeric"
    }).format(now);
  }

  const sidebar=$("#sidebar");
  $("#menuBtn")?.addEventListener("click",()=>sidebar.classList.toggle("open"));

  $("#focusBtn")?.addEventListener("click",(e)=>{
    document.body.classList.toggle("focus-mode");
    const on=document.body.classList.contains("focus-mode");
    e.currentTarget.lastChild.textContent=on?" Exit focus":" Focus mode";
  });

  const flowButtons=$$(".flow-button");
  function setActiveFlow(id){
    flowButtons.forEach(btn=>btn.classList.toggle("active",btn.dataset.target===id));
  }

  $$("[data-target]").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const id=btn.dataset.target;
      const target=document.getElementById(id);
      if(!target)return;
      setActiveFlow(id);
      target.scrollIntoView({behavior:"smooth",block:"start"});
    });
  });

  const sections=$$(".section-anchor");
  const observer=new IntersectionObserver(entries=>{
    const visible=entries
      .filter(x=>x.isIntersecting)
      .sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
    if(visible)setActiveFlow(visible.target.id);
  },{rootMargin:"-150px 0px -45% 0px",threshold:[.15,.35,.6]});
  sections.forEach(s=>observer.observe(s));

  $$("[data-reveal]").forEach(button=>{
    button.addEventListener("click",()=>{
      const panel=document.getElementById(button.dataset.reveal);
      if(!panel)return;
      const open=panel.classList.toggle("open");
      button.classList.toggle("open",open);

      const icon=$(".reveal-icon",button);
      if(icon)icon.textContent=open?"×":"＋";

      if(button.classList.contains("answer-toggle")){
        button.textContent=open?"Hide answer":"Answer";
      }else{
        const original=button.dataset.label || button.textContent.trim();
        if(!button.dataset.label)button.dataset.label=original;
      }
    });
  });

  let exampleIndex=0;
  const cards=$$(".example-card");
  const dots=$$("#exampleDots button");
  const counter=$("#exampleCounter");

  function showExample(next){
    if(!cards.length)return;
    const old=exampleIndex;
    exampleIndex=(next+cards.length)%cards.length;

    cards.forEach((card,i)=>{
      card.classList.toggle("active",i===exampleIndex);
      card.classList.toggle("exit-left",i===old && i!==exampleIndex && exampleIndex>old);
    });

    setTimeout(()=>cards.forEach(c=>c.classList.remove("exit-left")),470);
    dots.forEach((dot,i)=>dot.classList.toggle("active",i===exampleIndex));
    if(counter)counter.textContent=(exampleIndex+1)+" / "+cards.length;
  }

  $("#examplePrev")?.addEventListener("click",()=>showExample(exampleIndex-1));
  $("#exampleNext")?.addEventListener("click",()=>showExample(exampleIndex+1));
  dots.forEach(dot=>dot.addEventListener("click",()=>showExample(Number(dot.dataset.exampleIndex))));

  function initCanvas(canvas){
    if(!canvas)return;

    const wrap=canvas.closest(".graph-paper");
    const toolbar=document.querySelector('[data-canvas="'+canvas.id+'"]');
    let colour="#17343d";
    let erasing=false;
    let drawing=false;
    let last=null;
    let ctx;

    function sizeCanvas(){
      const rect=wrap.getBoundingClientRect();
      const dpr=window.devicePixelRatio||1;
      const old=canvas.width&&canvas.height?canvas.toDataURL():null;
      canvas.width=Math.max(1,Math.round(rect.width*dpr));
      canvas.height=Math.max(1,Math.round(rect.height*dpr));
      canvas.style.width=rect.width+"px";
      canvas.style.height=rect.height+"px";
      ctx=canvas.getContext("2d");
      ctx.scale(dpr,dpr);

      if(old){
        const image=new Image();
        image.onload=()=>ctx.drawImage(image,0,0,rect.width,rect.height);
        image.src=old;
      }
    }

    sizeCanvas();
    window.addEventListener("resize",()=>requestAnimationFrame(sizeCanvas));

    function point(e){
      const r=canvas.getBoundingClientRect();
      return {x:e.clientX-r.left,y:e.clientY-r.top};
    }

    canvas.addEventListener("pointerdown",e=>{
      drawing=true;
      last=point(e);
      canvas.setPointerCapture?.(e.pointerId);
    });

    canvas.addEventListener("pointermove",e=>{
      if(!drawing||!last)return;
      const p=point(e);
      ctx.globalCompositeOperation=erasing?"destination-out":"source-over";
      ctx.strokeStyle=colour;
      ctx.lineWidth=erasing?24:Math.max(2.2,2+(e.pressure||.45)*3.5);
      ctx.lineCap="round";
      ctx.lineJoin="round";
      ctx.beginPath();
      ctx.moveTo(last.x,last.y);
      ctx.lineTo(p.x,p.y);
      ctx.stroke();
      last=p;
    });

    ["pointerup","pointercancel","pointerleave"].forEach(name=>{
      canvas.addEventListener(name,()=>{drawing=false;last=null;});
    });

    if(toolbar){
      $$(".pen-dot",toolbar).forEach(dot=>{
        dot.style.background=dot.dataset.colour;
        dot.addEventListener("click",()=>{
          erasing=false;
          colour=dot.dataset.colour;
          $$(".pen-dot",toolbar).forEach(x=>x.classList.toggle("active",x===dot));
        });
      });

      $(".eraser-tool",toolbar)?.addEventListener("click",()=>{erasing=true;});
      $(".clear-tool",toolbar)?.addEventListener("click",()=>{
        const r=canvas.getBoundingClientRect();
        ctx.clearRect(0,0,r.width,r.height);
      });
    }
  }

  $$("canvas").forEach(initCanvas);

  $$(".unit-row").forEach(row=>{
    row.addEventListener("click",()=>{
      $$(".unit-row").forEach(x=>x.classList.toggle("active",x===row));
    });
  });

  $$(".lesson-row").forEach(row=>{
    row.addEventListener("click",()=>{
      $$(".lesson-row").forEach(x=>x.classList.toggle("active",x===row));
      sidebar.classList.remove("open");
    });
  });

  document.documentElement.dataset.ready="1";
})();