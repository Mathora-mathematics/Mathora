(function(){
const C={ink:"#0b3442",blue:"#00aee6",pale:"#e8f8fc",grid:"#c9e7ef",red:"#d85858",gold:"#e9b949",green:"#2a9d76",muted:"#78939c",white:"#ffffff"};
const svg=(body,view="0 0 640 320")=>'<svg class="lesson-diagram-svg" viewBox="'+view+'" role="img" aria-label="Mathematics teaching diagram">'+body+'</svg>';
const line=(x1,y1,x2,y2,extra='')=>'<line x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'" '+extra+'/>';
const txt=(x,y,t,extra='')=>'<text x="'+x+'" y="'+y+'" '+extra+'>'+t+'</text>';
const circle=(cx,cy,r,extra='')=>'<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" '+extra+'/>';
const rect=(x,y,w,h,extra='')=>'<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" '+extra+'/>';
const poly=(pts,extra='')=>'<polygon points="'+pts+'" '+extra+'/>';
const baseStyle='stroke="'+C.ink+'" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"';
const label='fill="'+C.ink+'" font-size="22" font-family="Arial, sans-serif" font-weight="700"';

function axes(){
 let b='';
 for(let x=80;x<=600;x+=52)b+=line(x,40,x,280,'stroke="'+C.grid+'" stroke-width="1"');
 for(let y=40;y<=280;y+=40)b+=line(80,y,600,y,'stroke="'+C.grid+'" stroke-width="1"');
 b+=line(80,260,605,260,'stroke="'+C.ink+'" stroke-width="3"');
 b+=line(110,285,110,30,'stroke="'+C.ink+'" stroke-width="3"');
 b+=poly('605,260 590,252 590,268','fill="'+C.ink+'"');
 b+=poly('110,30 102,45 118,45','fill="'+C.ink+'"');
 return b;
}
function numberLine(v=0){
 const a=v%3===0?[-2,4,"open","closed"]:v%3===1?[-1,5,"closed","open"]:[1,6,"closed","closed"];
 let b=line(70,160,570,160,'stroke="'+C.ink+'" stroke-width="4"');
 for(let i=-4;i<=7;i++){const x=120+(i+3)*45;b+=line(x,148,x,172,'stroke="'+C.ink+'" stroke-width="2"');b+=txt(x-8,200,i,'fill="'+C.muted+'" font-size="16"');}
 const x1=120+(a[0]+3)*45,x2=120+(a[1]+3)*45;
 b+=line(x1,160,x2,160,'stroke="'+C.blue+'" stroke-width="10" opacity=".55"');
 b+=circle(x1,160,11,'fill="'+(a[2]==="closed"?C.blue:C.white)+'" stroke="'+C.blue+'" stroke-width="4"');
 b+=circle(x2,160,11,'fill="'+(a[3]==="closed"?C.blue:C.white)+'" stroke="'+C.blue+'" stroke-width="4"');
 return svg(b);
}
function surd(v=0){
 if(v%2===0){
  return svg(rect(170,65,290,190,'fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="4"')+
   txt(250,55,'√45 cm',label)+txt(475,170,'√20 cm',label)+txt(260,170,'Area ?', 'fill="'+C.blue+'" font-size="30" font-weight="800"'));
 }
 return svg(rect(190,60,220,220,'fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="4"')+
 txt(230,45,'side = √72',label)+txt(240,178,'72 cm²','fill="'+C.blue+'" font-size="34" font-weight="800"'));
}
function conjugate(){
 return svg(
 rect(80,85,210,130,'rx="18" fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+
 rect(350,85,210,130,'rx="18" fill="#fff8dd" stroke="'+C.ink+'" stroke-width="3"')+
 txt(116,150,'3 − √5','fill="'+C.ink+'" font-size="34" font-weight="800"')+
 txt(386,150,'3 + √5','fill="'+C.ink+'" font-size="34" font-weight="800"')+
 line(290,150,350,150,'stroke="'+C.blue+'" stroke-width="4"')+
 txt(255,245,'(a−b)(a+b)=a²−b²','fill="'+C.muted+'" font-size="22" font-weight="700"')
 );
}
function fractionFlow(v=0){
 const labels=v%2===0?["FACTOR","CANCEL","SIMPLIFY"]:["LCD","COMBINE","FACTOR"];
 let b='';
 labels.forEach((t,i)=>{const x=45+i*200;b+=rect(x,90,155,100,'rx="18" fill="'+(i===1?"#fff8dd":C.pale)+'" stroke="'+C.ink+'" stroke-width="3"');b+=txt(x+30,148,t,'fill="'+C.ink+'" font-size="20" font-weight="900"');if(i<2){b+=line(x+155,140,x+200,140,'stroke="'+C.blue+'" stroke-width="4"');b+=poly((x+200)+',140 '+(x+185)+',132 '+(x+185)+',148','fill="'+C.blue+'"');}});
 return svg(b);
}
function balance(){
 return svg(
 line(320,60,320,245,'stroke="'+C.ink+'" stroke-width="5"')+
 line(170,90,470,90,'stroke="'+C.ink+'" stroke-width="5"')+
 line(205,90,170,180,'stroke="'+C.muted+'" stroke-width="3"')+line(435,90,470,180,'stroke="'+C.muted+'" stroke-width="3"')+
 line(120,180,220,180,'stroke="'+C.ink+'" stroke-width="4"')+line(420,180,520,180,'stroke="'+C.ink+'" stroke-width="4"')+
 rect(135,135,35,35,'rx="6" fill="'+C.pale+'" stroke="'+C.blue+'" stroke-width="3"')+
 rect(175,135,35,35,'rx="6" fill="'+C.pale+'" stroke="'+C.blue+'" stroke-width="3"')+
 txt(143,160,'x','fill="'+C.ink+'" font-size="22" font-weight="800"')+txt(183,160,'x','fill="'+C.ink+'" font-size="22" font-weight="800"')+
 txt(445,157,'14','fill="'+C.ink+'" font-size="28" font-weight="800"')+
 poly('280,245 360,245 320,195','fill="#dfeff4" stroke="'+C.ink+'" stroke-width="3"')
 );
}
function parabola(v=0,withLine=false){
 let b=axes();
 let pts=[];
 for(let x=-4;x<=4;x+=.2){const y=(v%2?0.42*(x+1)*(x-2):0.36*(x-2)*(x+3));const px=110+x*52,py=260-y*18;pts.push(px.toFixed(1)+','+py.toFixed(1));}
 b+='<polyline points="'+pts.join(' ')+'" fill="none" stroke="'+C.blue+'" stroke-width="4"/>';
 if(withLine)b+=line(110,210,560,75,'stroke="'+C.red+'" stroke-width="4"');
 return svg(b);
}
function linesGraph(){
 let b=axes();
 b+=line(110,230,550,70,'stroke="'+C.blue+'" stroke-width="4"');
 b+=line(110,80,550,235,'stroke="'+C.red+'" stroke-width="4"');
 b+=circle(335,148,8,'fill="'+C.ink+'"');
 b+=txt(350,137,'solution','fill="'+C.ink+'" font-size="18" font-weight="800"');
 return svg(b);
}
function formulaFlow(){
 return svg(
 rect(55,95,150,90,'rx="18" fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+
 rect(245,95,150,90,'rx="18" fill="#fff8dd" stroke="'+C.ink+'" stroke-width="3"')+
 rect(435,95,150,90,'rx="18" fill="#edf8f3" stroke="'+C.ink+'" stroke-width="3"')+
 txt(98,145,'UNDO','fill="'+C.ink+'" font-size="22" font-weight="900"')+
 txt(280,145,'COLLECT','fill="'+C.ink+'" font-size="22" font-weight="900"')+
 txt(474,145,'ISOLATE','fill="'+C.ink+'" font-size="22" font-weight="900"')+
 line(205,140,245,140,'stroke="'+C.blue+'" stroke-width="4"')+poly('245,140 230,132 230,148','fill="'+C.blue+'"')+
 line(395,140,435,140,'stroke="'+C.blue+'" stroke-width="4"')+poly('435,140 420,132 420,148','fill="'+C.blue+'"')
 );
}
function inequalityPlane(v=0,region=false){
 let b=axes();
 if(region){
   b+=poly('180,240 420,240 300,90','fill="'+C.blue+'" opacity=".18" stroke="'+C.blue+'" stroke-width="2"');
   b+=line(180,240,420,240,'stroke="'+C.ink+'" stroke-width="3"');
   b+=line(180,240,300,90,'stroke="'+C.ink+'" stroke-width="3"');
   b+=line(420,240,300,90,'stroke="'+C.ink+'" stroke-width="3"');
 }else{
   b+=poly('110,260 110,180 560,60 560,260','fill="'+C.blue+'" opacity=".16"');
   b+=line(110,180,560,60,'stroke="'+C.blue+'" stroke-width="4" stroke-dasharray="'+(v%2?"10 8":"0")+'"');
 }
 return svg(b);
}
function angleDiagram(v=0){
 if(v%2===0){
  return svg(line(120,245,520,245,baseStyle)+line(320,245,430,80,baseStyle)+
   '<path d="M365 245 A45 45 0 0 0 345 207" fill="none" stroke="'+C.blue+'" stroke-width="5"/>'+
   txt(365,210,'128°',label)+txt(180,285,'straight line', 'fill="'+C.muted+'" font-size="18"'));
 }
 return svg(poly('130,250 320,65 520,250','fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="4"')+
  txt(245,245,'x°',label)+txt(205,175,'53°',label)+txt(390,180,'?', 'fill="'+C.blue+'" font-size="32" font-weight="900"'));
}
function parallel(){
 return svg(
 line(80,95,560,95,'stroke="'+C.ink+'" stroke-width="5"')+line(80,235,560,235,'stroke="'+C.ink+'" stroke-width="5"')+
 line(220,35,390,295,'stroke="'+C.red+'" stroke-width="5"')+
 '<path d="M245 95 A38 38 0 0 1 270 128" fill="none" stroke="'+C.blue+'" stroke-width="5"/>'+
 '<path d="M337 235 A38 38 0 0 1 315 203" fill="none" stroke="'+C.blue+'" stroke-width="5"/>'+
 txt(270,140,'68°',label)+txt(300,205,'68°',label)+
 poly('105,84 125,95 105,106','fill="'+C.blue+'"')+poly('515,224 535,235 515,246','fill="'+C.blue+'"')
 );
}
function polygonDiagram(v=0){
 if(v%2===0){
  const pts='320,45 505,140 440,280 200,280 135,140';
  return svg(poly(pts,'fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="4"')+txt(280,170,'regular',label)+txt(274,205,'polygon','fill="'+C.muted+'" font-size="20"'));
 }
 return svg(poly('120,240 180,75 340,55 530,140 470,270 280,230','fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="4"')+
 txt(150,130,'104°',label)+txt(325,92,'118°',label)+txt(445,165,'95°',label)+txt(400,250,'132°',label)+txt(225,225,'?', 'fill="'+C.blue+'" font-size="34" font-weight="900"'));
}
function symmetry(v=0){
 if(v%2===0){
  let b=poly('320,45 500,145 430,275 210,275 140,145','fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="4"');
  b+=line(320,45,320,275,'stroke="'+C.blue+'" stroke-width="3" stroke-dasharray="10 7"');
  b+=line(140,145,500,145,'stroke="'+C.blue+'" stroke-width="3" stroke-dasharray="10 7"');
  b+=line(210,275,430,70,'stroke="'+C.blue+'" stroke-width="3" stroke-dasharray="10 7"');
  return svg(b);
 }
 return svg(rect(180,70,280,180,'fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="4"')+
 line(320,70,320,250,'stroke="'+C.blue+'" stroke-width="3" stroke-dasharray="10 7"')+
 line(180,160,460,160,'stroke="'+C.blue+'" stroke-width="3" stroke-dasharray="10 7"')+
 txt(250,295,'order 2','fill="'+C.muted+'" font-size="20" font-weight="700"'));
}
function solid(v=0){
 if(v%2===0){
   return svg('<ellipse cx="320" cy="80" rx="110" ry="35" fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="4"/>'+
    rect(210,80,220,150,'fill="'+C.pale+'" stroke="none"')+
    line(210,80,210,230,'stroke="'+C.ink+'" stroke-width="4"')+line(430,80,430,230,'stroke="'+C.ink+'" stroke-width="4"')+
    '<ellipse cx="320" cy="230" rx="110" ry="35" fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="4"/>'+
    line(320,40,320,270,'stroke="'+C.blue+'" stroke-width="3" stroke-dasharray="9 7"'));
 }
 return svg(poly('190,90 330,45 470,90 330,140','fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="4"')+
 poly('190,90 190,230 330,280 330,140','fill="#f7fcfe" stroke="'+C.ink+'" stroke-width="4"')+
 poly('330,140 470,90 470,230 330,280','fill="#eaf7fb" stroke="'+C.ink+'" stroke-width="4"'));
}
function unitLadder(){
 return svg(
 txt(60,70,'LENGTH', 'fill="'+C.muted+'" font-size="18" font-weight="900"')+
 ['mm','cm','m','km'].map((t,i)=>rect(60+i*140,100,110,70,'rx="16" fill="'+(i===2?"#fff8dd":C.pale)+'" stroke="'+C.ink+'" stroke-width="3"')+txt(95+i*140,145,t,label)).join('')+
 txt(85,225,'area: square the scale factor', 'fill="'+C.blue+'" font-size="22" font-weight="800"')+
 txt(85,265,'volume: cube the scale factor', 'fill="'+C.green+'" font-size="22" font-weight="800"')
 );
}
function trapezium(v=0){
 if(v%2===0)return svg(poly('160,245 230,80 450,80 520,245','fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="4"')+
 txt(310,65,'8 cm',label)+txt(305,285,'14 cm',label)+line(230,80,230,245,'stroke="'+C.blue+'" stroke-width="3" stroke-dasharray="8 7"')+txt(245,170,'6 cm',label));
 return svg(rect(130,65,380,210,'fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="4"')+rect(345,65,165,95,'fill="'+C.white+'" stroke="'+C.ink+'" stroke-width="4"')+txt(210,190,'L-shape','fill="'+C.blue+'" font-size="34" font-weight="900"'));
}
function circleDiagram(v=0,sector=false){
 if(sector){
  return svg('<path d="M320 160 L480 160 A160 160 0 0 1 375 310 Z" fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="4"/>'+
    line(320,160,480,160,'stroke="'+C.ink+'" stroke-width="4"')+line(320,160,375,310,'stroke="'+C.ink+'" stroke-width="4"')+
    '<path d="M370 160 A50 50 0 0 1 338 207" fill="none" stroke="'+C.blue+'" stroke-width="5"/>'+
    txt(375,205,(v%2?120:80)+'°',label)+txt(390,145,(v%2?6:9)+' cm',label));
 }
 return svg(circle(320,160,115,'fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="4"')+
 line(205,160,435,160,'stroke="'+C.blue+'" stroke-width="4"')+
 line(320,160,390,80,'stroke="'+C.red+'" stroke-width="4"')+
 txt(246,150,'diameter', 'fill="'+C.blue+'" font-size="18" font-weight="800"')+txt(360,105,'r',label));
}
function twoWay(){
 return svg(
 rect(95,55,450,210,'fill="'+C.white+'" stroke="'+C.ink+'" stroke-width="3"')+
 line(95,110,545,110,'stroke="'+C.ink+'" stroke-width="3"')+line(95,165,545,165,'stroke="'+C.ink+'" stroke-width="3"')+line(95,220,545,220,'stroke="'+C.ink+'" stroke-width="3"')+
 line(230,55,230,265,'stroke="'+C.ink+'" stroke-width="3"')+line(365,55,365,265,'stroke="'+C.ink+'" stroke-width="3"')+
 txt(255,90,'Football','fill="'+C.muted+'" font-size="18" font-weight="800"')+txt(395,90,'Not','fill="'+C.muted+'" font-size="18" font-weight="800"')+
 txt(125,145,'Boys','fill="'+C.muted+'" font-size="18" font-weight="800"')+txt(125,200,'Girls','fill="'+C.muted+'" font-size="18" font-weight="800"')+
 txt(270,147,'11',label)+txt(410,147,'7',label)+txt(270,202,'14',label)+txt(410,202,'8',label)
 );
}
function dotPlot(){
 let b=line(90,245,560,245,'stroke="'+C.ink+'" stroke-width="3"');
 const vals=[3,5,5,7,8,9,12,15];
 vals.forEach((v,i)=>{const x=100+v*28;const same=vals.slice(0,i).filter(z=>z===v).length;b+=circle(x,220-same*28,8,'fill="'+C.blue+'"');});
 for(let v=0;v<=16;v+=2)b+=txt(95+v*28,275,v,'fill="'+C.muted+'" font-size="15"');
 return svg(b);
}
function groupedTable(v=0){
 return svg(
 rect(95,55,450,220,'fill="'+C.white+'" stroke="'+C.ink+'" stroke-width="3"')+
 [110,165,220].map(y=>line(95,y,545,y,'stroke="'+C.ink+'" stroke-width="2"')).join('')+
 line(310,55,310,275,'stroke="'+C.ink+'" stroke-width="2"')+
 txt(145,90,'Class interval','fill="'+C.muted+'" font-size="18" font-weight="800"')+txt(390,90,'Frequency','fill="'+C.muted+'" font-size="18" font-weight="800"')+
 txt(150,145,'0–10',label)+txt(415,145,'2',label)+txt(145,200,'10–20',label)+txt(410,200,'5',label)+txt(145,255,'20–30',label)+txt(410,255,'7',label)
 );
}
function barChart(v=0){
 let b=line(90,260,560,260,'stroke="'+C.ink+'" stroke-width="3"')+line(90,260,90,45,'stroke="'+C.ink+'" stroke-width="3"');
 const hs=v%2?[90,150,70,180]:[120,180,85,60];
 hs.forEach((h,i)=>{b+=rect(135+i*100,260-h,58,h,'fill="'+(i%2?C.blue:C.pale)+'" stroke="'+C.ink+'" stroke-width="2"');b+=txt(152+i*100,290,String.fromCharCode(65+i),'fill="'+C.muted+'" font-size="16" font-weight="800"');});
 return svg(b);
}
function scatter(v=0,best=false){
 let b=axes();const pts=v%2?[[1,2],[2,3],[3,4],[4,5.5],[5,6.5],[6,8],[7,5]]:[[1,8],[2,7],[3,6],[4,5],[5,4],[6,3],[7,2.5]];
 pts.forEach(([x,y])=>{b+=circle(110+x*55,260-y*22,6,'fill="'+C.blue+'"');});
 if(best)b+=line(150,v%2?225:90,540,v%2?70:225,'stroke="'+C.red+'" stroke-width="4"');
 return svg(b);
}
function cumulative(v=0){
 let b=axes();let pts=[];
 for(let i=0;i<=10;i++){const x=110+i*45;const yy=250-190/(1+Math.exp(-(i-5)/(v%2?1.2:1.5)));pts.push(x+','+yy.toFixed(1));}
 b+='<polyline points="'+pts.join(' ')+'" fill="none" stroke="'+C.blue+'" stroke-width="4"/>';
 b+=line(110,165,560,165,'stroke="'+C.red+'" stroke-width="2" stroke-dasharray="8 6"');
 return svg(b);
}
function histogram(v=0){
 let b=line(85,260,580,260,'stroke="'+C.ink+'" stroke-width="3"')+line(85,260,85,45,'stroke="'+C.ink+'" stroke-width="3"');
 const bars=v%2?[[85,80,55],[165,120,100],[285,65,120],[370,95,90],[465,45,115]]:[[85,70,70],[155,130,110],[265,85,95],[350,140,75],[425,60,125]];
 bars.forEach(([x,w,h])=>{b+=rect(x,260-h,w,h,'fill="'+C.pale+'" stroke="'+C.blue+'" stroke-width="3"');});
 b+=txt(16,155,'density','fill="'+C.muted+'" font-size="16" font-weight="800" transform="rotate(-90 16 155)"');
 return svg(b);
}
function mapping(v=0,inverse=false,composite=false){
 if(composite){
  return svg(
   rect(35,95,150,100,'rx="35" fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+
   rect(245,95,150,100,'rx="35" fill="#fff8dd" stroke="'+C.ink+'" stroke-width="3"')+
   rect(455,95,150,100,'rx="35" fill="#edf8f3" stroke="'+C.ink+'" stroke-width="3"')+
   txt(85,150,'x','fill="'+C.ink+'" font-size="34" font-weight="900"')+txt(295,150,'f(x)','fill="'+C.ink+'" font-size="28" font-weight="900"')+txt(500,150,'g(f(x))','fill="'+C.ink+'" font-size="24" font-weight="900"')+
   line(185,145,245,145,'stroke="'+C.blue+'" stroke-width="4"')+line(395,145,455,145,'stroke="'+C.blue+'" stroke-width="4"')
  );
 }
 if(inverse){
  let b=axes();b+=line(110,260,560,35,'stroke="'+C.muted+'" stroke-width="3" stroke-dasharray="8 7"');
  b+=line(150,235,500,75,'stroke="'+C.blue+'" stroke-width="4"');
  b+=line(180,250,520,55,'stroke="'+C.red+'" stroke-width="4"');
  return svg(b);
 }
 return svg(
  rect(70,60,180,210,'rx="65" fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+
  rect(390,60,180,210,'rx="65" fill="#fff8dd" stroke="'+C.ink+'" stroke-width="3"')+
  txt(140,45,'domain','fill="'+C.muted+'" font-size="18" font-weight="800"')+txt(460,45,'range','fill="'+C.muted+'" font-size="18" font-weight="800"')+
  [100,155,210].map((y,i)=>circle(150,y,8,'fill="'+C.blue+'"')+circle(470,y,8,'fill="'+C.red+'"')+line(158,y,462,y-(i-1)*20,'stroke="'+C.ink+'" stroke-width="2"')).join('')
 );
}
function venn(v=0){
 return svg(
  circle(270,160,105,'fill="'+C.blue+'" opacity=".16" stroke="'+C.blue+'" stroke-width="4"')+
  circle(390,160,105,'fill="'+C.gold+'" opacity=".18" stroke="'+C.gold+'" stroke-width="4"')+
  txt(205,65,'A',label)+txt(445,65,'B',label)+txt(305,165,'A ∩ B','fill="'+C.ink+'" font-size="24" font-weight="900"')+
  rect(100,30,440,260,'fill="none" stroke="'+C.ink+'" stroke-width="3"')
 );
}
function proportion(v=0){
 let b=axes();
 if(v%2===0)b+='<path d="M110 260 C220 250 330 205 560 55" fill="none" stroke="'+C.blue+'" stroke-width="4"/>';
 else b+='<path d="M135 55 C200 95 260 150 560 245" fill="none" stroke="'+C.red+'" stroke-width="4"/>';
 b+=txt(410,70,v%2===0?'direct':'inverse','fill="'+C.ink+'" font-size="22" font-weight="900"');
 return svg(b);
}
function sample(){
 return svg(
 rect(80,45,480,220,'rx="24" fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+
 txt(245,85,'POPULATION','fill="'+C.ink+'" font-size="24" font-weight="900"')+
 ...[]
 );
}
function sampleDiagram(){
 let b=rect(70,40,500,235,'rx="28" fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"');
 for(let i=0;i<22;i++){const x=110+(i%8)*55,y=100+Math.floor(i/8)*55;b+=circle(x,y,9,'fill="'+(i<6?C.blue:C.muted)+'" opacity="'+(i<6?1:.55)+'"');}
 b+=rect(95,78,210,105,'rx="18" fill="none" stroke="'+C.blue+'" stroke-width="4" stroke-dasharray="10 7"');
 b+=txt(120,210,'sample','fill="'+C.blue+'" font-size="22" font-weight="900"')+txt(400,245,'population','fill="'+C.muted+'" font-size="20" font-weight="800"');
 return svg(b);
}

const routes={
 surds:(v)=>surd(v), rationalise:()=>conjugate(),
 "algfrac-simplify":(v)=>fractionFlow(v), "algfrac-four":(v)=>fractionFlow(v),
 forming:(v)=>v%2?trapezium(v):formulaFlow(), linear:()=>balance(), quadratic:(v)=>parabola(v,false),
 "fractional-eq":(v)=>fractionFlow(v), "simultaneous-linear":()=>linesGraph(), "simultaneous-nonlinear":(v)=>parabola(v,true),
 rearrange:()=>formulaFlow(),
 "ineq-numberline":(v)=>numberLine(v), "ineq-linear":(v)=>numberLine(v+1), "ineq-graph":(v)=>inequalityPlane(v,false), "ineq-region":(v)=>inequalityPlane(v,true),
 angles:(v)=>angleDiagram(v), parallel:()=>parallel(), polygons:(v)=>polygonDiagram(v), symmetry2d:(v)=>symmetry(v), symmetry3d:(v)=>solid(v),
 units:()=>unitLadder(), area:(v)=>trapezium(v), circle:(v)=>circleDiagram(v,false), sector:(v)=>circleDiagram(v,true),
 tables:()=>twoWay(), averages:()=>dotPlot(), "grouped-mean":()=>groupedTable(), modalclass:()=>groupedTable(),
 "data-interpret":(v)=>barChart(v), "data-compare":(v)=>barChart(v), "data-limits":()=>sampleDiagram(),
 charts:(v)=>v%2?barChart(v):groupedTable(), scatter:(v)=>scatter(v,false), correlation:(v)=>scatter(v,false), bestfit:(v)=>scatter(v,true),
 cumfreq:(v)=>cumulative(v), "cumfreq-read":(v)=>cumulative(v), histogram:(v)=>histogram(v), freqdensity:(v)=>histogram(v),
 "chart-infer":(v)=>barChart(v), "graph-compare":(v)=>cumulative(v), "graph-limits":(v)=>barChart(v),
 functions:(v)=>mapping(v,false,false), inverse:(v)=>mapping(v,true,false), composite:(v)=>mapping(v,false,true),
 sets:(v)=>venn(v), proportion:(v)=>proportion(v)
};
window.MathoraDiagrams={
 supports(type){return !!routes[type];},
 lesson(type,variant=0){return routes[type]?routes[type](variant):"";},
 practice(type,variant=0){return routes[type]?routes[type](variant+3):"";}
};
})();