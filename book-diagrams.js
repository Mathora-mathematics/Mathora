(function(){
const C={ink:"#0a3442",blue:"#00aee6",blue2:"#6ed8f2",pale:"#eaf9fd",paper:"#ffffff",grid:"#cfe8ef",red:"#d45757",gold:"#e2b43f",green:"#299873",purple:"#7b6bb7",muted:"#75909a",grey:"#dce9ed"};
const svg=(body,view="0 0 640 360")=>'<svg class="lesson-diagram-svg" viewBox="'+view+'" role="img" aria-label="Mathematical diagram">'+body+'</svg>';
const L=(x1,y1,x2,y2,o='')=>'<line x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'" '+o+'/>';
const T=(x,y,t,o='')=>'<text x="'+x+'" y="'+y+'" '+o+'>'+t+'</text>';
const R=(x,y,w,h,o='')=>'<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" '+o+'/>';
const O=(cx,cy,r,o='')=>'<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" '+o+'/>';
const P=(pts,o='')=>'<polygon points="'+pts+'" '+o+'/>';
const Path=(d,o='')=>'<path d="'+d+'" '+o+'/>';
const ink='stroke="'+C.ink+'" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"';
const lab='fill="'+C.ink+'" font-family="Arial, sans-serif" font-size="21" font-weight="800"';
const sm='fill="'+C.muted+'" font-family="Arial, sans-serif" font-size="16" font-weight="700"';
const title=(s)=>T(24,30,s,'fill="'+C.muted+'" font-family="Arial,sans-serif" font-size="13" font-weight="900" letter-spacing="1.4"');

function axes(x0=90,y0=300,xmax=605,ymax=45){
 let b='';
 for(let x=x0;x<=xmax;x+=50)b+=L(x,ymax,x,y0,'stroke="'+C.grid+'" stroke-width="1"');
 for(let y=ymax;y<=y0;y+=40)b+=L(x0,y,xmax,y,'stroke="'+C.grid+'" stroke-width="1"');
 b+=L(x0,y0,xmax,y0,'stroke="'+C.ink+'" stroke-width="3"')+L(x0+30,y0+20,x0+30,ymax,'stroke="'+C.ink+'" stroke-width="3"');
 b+=P((xmax)+','+y0+' '+(xmax-14)+','+(y0-7)+' '+(xmax-14)+','+(y0+7),'fill="'+C.ink+'"');
 b+=P((x0+30)+','+ymax+' '+(x0+23)+','+(ymax+14)+' '+(x0+37)+','+(ymax+14),'fill="'+C.ink+'"');
 return b;
}
function table(cols,rows,x=70,y=55,w=500,h=245,headers=[]){
 let b=R(x,y,w,h,'rx="8" fill="#fff" stroke="'+C.ink+'" stroke-width="2"');
 const cw=w/cols,rh=h/rows;
 for(let i=1;i<cols;i++)b+=L(x+i*cw,y,x+i*cw,y+h,'stroke="'+C.ink+'" stroke-width="1.5"');
 for(let j=1;j<rows;j++)b+=L(x,y+j*rh,x+w,y+j*rh,'stroke="'+C.ink+'" stroke-width="1.5"');
 headers.forEach((v,i)=>b+=T(x+i*cw+12,y+rh/2+6,v,'fill="'+C.muted+'" font-family="Arial" font-size="14" font-weight="800"'));
 return b;
}
function numberLine(kind=0){
 let b=title("TEXTBOOK-STYLE NUMBER LINE")+L(70,185,575,185,'stroke="'+C.ink+'" stroke-width="4"');
 for(let i=-5;i<=7;i++){const x=115+(i+4)*39;b+=L(x,174,x,196,'stroke="'+C.ink+'" stroke-width="2"')+T(x-7,220,i,sm);}
 const specs=[
  [-2,4,false,true],[1,6,true,false],[-4,2,false,false],[-1,5,true,true],[0,3,false,true],[2,7,true,false]
 ][kind%6],a=specs[0],d=specs[1],x1=115+(a+4)*39,x2=115+(d+4)*39;
 b+=L(x1,185,x2,185,'stroke="'+C.blue+'" stroke-width="10" opacity=".55"');
 b+=O(x1,185,10,'fill="'+(specs[2]?C.blue:"#fff")+'" stroke="'+C.blue+'" stroke-width="4"');
 b+=O(x2,185,10,'fill="'+(specs[3]?C.blue:"#fff")+'" stroke="'+C.blue+'" stroke-width="4"');
 return svg(b);
}
function factorTree(v=0){
 const n=[72,98,180,300,75,45][v%6],a=[36,49,36,100,25,9][v%6],b=n/a;
 let out=title("FACTOR TREE / EXACT ROOT")+T(285,62,"√"+n,lab)+
 L(315,70,230,120,'stroke="'+C.ink+'" stroke-width="3"')+L(315,70,400,120,'stroke="'+C.ink+'" stroke-width="3"')+
 O(225,135,35,'fill="'+C.pale+'" stroke="'+C.blue+'" stroke-width="3"')+O(405,135,35,'fill="#fff8de" stroke="'+C.gold+'" stroke-width="3"')+
 T(205,143,a,lab)+T(394,143,b,lab)+T(98,265,"largest square factor → take outside the root",sm);
 if(Number.isInteger(Math.sqrt(a)))out+=T(174,208,"√"+a+" = "+Math.sqrt(a),'fill="'+C.blue+'" font-size="20" font-weight="900"');
 return svg(out);
}
function surdGeom(v=0){
 const variants=[
  ()=>R(145,80,350,205,'fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="4"')+T(265,68,"√45 cm",lab)+T(505,190,"√20 cm",lab)+T(265,190,"AREA ?", 'fill="'+C.blue+'" font-size="34" font-weight="900"'),
  ()=>R(205,70,230,230,'fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="4"')+T(237,55,"side = √98 cm",lab)+T(272,196,"98 cm²",'fill="'+C.blue+'" font-size="30" font-weight="900"'),
  ()=>P('170,280 320,70 480,280','fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="4"')+T(220,270,"√12",lab)+T(360,270,"√27",lab)+T(293,120,"?",'fill="'+C.blue+'" font-size="30" font-weight="900"'),
  ()=>R(130,105,160,160,'fill="#fff8de" stroke="'+C.gold+'" stroke-width="3"')+R(350,80,210,210,'fill="'+C.pale+'" stroke="'+C.blue+'" stroke-width="3"')+T(145,95,"√48",lab)+T(398,70,"√75",lab)+L(290,185,350,185,'stroke="'+C.ink+'" stroke-width="3"')+T(305,170,"×",lab),
  ()=>T(150,110,"√300", 'fill="'+C.blue+'" font-size="42" font-weight="900"')+T(280,110,"+",lab)+T(330,110,"2√75", 'fill="'+C.green+'" font-size="42" font-weight="900"')+T(485,110,"− √27",lab)+L(120,165,540,165,'stroke="'+C.grey+'" stroke-width="2"')+T(160,225,"simplify each term before collecting",sm),
  ()=>factorTree(5).replace(/^<svg[^>]*>|<\/svg>$/g,"")
 ][v%6];
 return svg(title("SURDS: BOOK-STYLE VISUAL MODEL")+variants());
}
function conjugate(v=0){
 if(v%6===0)return svg(title("CONJUGATE PAIR")+R(70,90,215,130,'rx="18" fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+R(355,90,215,130,'rx="18" fill="#fff7dc" stroke="'+C.ink+'" stroke-width="3"')+T(112,165,"3 − √5",'fill="'+C.ink+'" font-size="32" font-weight="900"')+T(397,165,"3 + √5",'fill="'+C.ink+'" font-size="32" font-weight="900"')+T(165,280,"product → difference of two squares",sm));
 if(v%6===1)return svg(title("DENOMINATOR BEFORE / AFTER")+T(100,115,"7",'fill="'+C.ink+'" font-size="30" font-weight="800"')+L(75,128,145,128,'stroke="'+C.ink+'" stroke-width="3"')+T(88,165,"√5",lab)+T(210,145,"×",lab)+T(260,115,"√5",lab)+L(245,128,315,128,'stroke="'+C.ink+'" stroke-width="3"')+T(260,165,"√5",lab)+T(380,145,"→", 'fill="'+C.blue+'" font-size="34" font-weight="900"')+T(462,118,"7√5",lab)+L(430,132,540,132,'stroke="'+C.ink+'" stroke-width="3"')+T(480,170,"5",lab));
 if(v%6===2)return svg(title("IDENTITY MODEL")+R(80,85,210,180,'fill="'+C.pale+'" stroke="'+C.blue+'" stroke-width="3"')+T(130,135,"a − b",lab)+T(130,200,"a + b",lab)+T(360,145,"a² − b²",'fill="'+C.ink+'" font-size="30" font-weight="900"')+T(390,215,"no surd cross-term",sm));
 if(v%6===3)return svg(title("RATIONAL / IRRATIONAL DENOMINATOR")+R(65,90,215,160,'rx="20" fill="#fff1f1" stroke="'+C.red+'" stroke-width="3"')+R(360,90,215,160,'rx="20" fill="#edf9f4" stroke="'+C.green+'" stroke-width="3"')+T(107,150,"4",'fill="'+C.ink+'" font-size="28" font-weight="900"')+L(85,164,160,164,'stroke="'+C.ink+'" stroke-width="3"')+T(95,198,"3−√5",lab)+T(432,150,"3+√5",lab)+T(405,205,"strategic ×1",sm));
 if(v%6===4)return svg(title("CONJUGATE FLOW")+R(45,105,150,90,'rx="15" fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+R(245,105,150,90,'rx="15" fill="#fff8de" stroke="'+C.ink+'" stroke-width="3"')+R(445,105,150,90,'rx="15" fill="#edf9f4" stroke="'+C.ink+'" stroke-width="3"')+T(82,160,"choose",lab)+T(275,160,"multiply",lab)+T(482,160,"simplify",lab)+L(195,150,245,150,'stroke="'+C.blue+'" stroke-width="4"')+L(395,150,445,150,'stroke="'+C.blue+'" stroke-width="4"'));
 return svg(title("CHECK BY MULTIPLICATION")+T(85,105,"(2−√3)(2+√3)", 'fill="'+C.ink+'" font-size="30" font-weight="900"')+L(85,135,505,135,'stroke="'+C.grey+'" stroke-width="2"')+T(105,195,"= 4 − 3", 'fill="'+C.blue+'" font-size="30" font-weight="900"')+T(105,250,"= 1", 'fill="'+C.green+'" font-size="38" font-weight="900"'));
}
function algebraFraction(v=0,four=false){
 const k=v%6;
 if(k===0)return svg(title("FACTOR → CANCEL")+R(55,80,160,95,'rx="15" fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+R(240,80,160,95,'rx="15" fill="#fff8de" stroke="'+C.ink+'" stroke-width="3"')+R(425,80,160,95,'rx="15" fill="#edf9f4" stroke="'+C.ink+'" stroke-width="3"')+T(93,135,"FACTOR",lab)+T(282,135,"CANCEL",lab)+T(456,135,"FINAL",lab)+L(215,128,240,128,'stroke="'+C.blue+'" stroke-width="4"')+L(400,128,425,128,'stroke="'+C.blue+'" stroke-width="4"')+T(130,240,"never cancel across + or −",sm));
 if(k===1)return svg(title("COMMON-DENOMINATOR BAR")+R(90,75,460,50,'fill="'+C.pale+'" stroke="'+C.blue+'" stroke-width="2"')+R(90,155,210,50,'fill="#fff8de" stroke="'+C.gold+'" stroke-width="2"')+R(340,155,210,50,'fill="#edf9f4" stroke="'+C.green+'" stroke-width="2"')+T(240,108,four?"x(x+1)":"(x−3)(x+2)",lab)+T(118,188,"first fraction",sm)+T(370,188,"second fraction",sm));
 if(k===2)return svg(title("FACTOR BOXES")+R(80,75,210,85,'rx="14" fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+R(350,75,210,85,'rx="14" fill="#fff8de" stroke="'+C.ink+'" stroke-width="3"')+T(115,125,"(x−3)(x+3)",lab)+T(392,125,"(x+3)(x−2)",lab)+L(290,117,350,117,'stroke="'+C.red+'" stroke-width="3" stroke-dasharray="8 6"')+T(253,225,"common factor appears in both numerator and denominator",sm));
 if(k===3)return svg(title("RESTRICTIONS FIRST")+numberLine(v).replace(/^<svg[^>]*>|<\/svg>$/g,"")+T(110,70,"excluded values marked before cancelling",sm));
 if(k===4)return svg(title("MULTIPLY / DIVIDE FRACTIONS")+R(65,95,205,120,'rx="18" fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+R(370,95,205,120,'rx="18" fill="#fff8de" stroke="'+C.ink+'" stroke-width="3"')+T(115,150,four?"KEEP ×":"FACTOR",lab)+T(410,150,four?"FLIP ÷":"CANCEL",lab)+T(265,165,"→", 'fill="'+C.blue+'" font-size="36" font-weight="900"'));
 return svg(title("WHY CANCELLING WORKS")+R(80,80,200,180,'fill="'+C.pale+'" stroke="'+C.blue+'" stroke-width="3"')+R(360,80,200,180,'fill="#fff8de" stroke="'+C.gold+'" stroke-width="3"')+T(120,140,"numerator",sm)+T(405,140,"denominator",sm)+T(225,215,"same complete factor",lab));
}
function balance(v=0){
 const ks=[
  ["x","x","14"],["x","+4","19"],["5x","+20","3x+30"],["3x−5","×3","4x+28"],["2x","+7","x+15"],["x/3","+2","5"]
 ][v%6];
 return svg(title("EQUATION BALANCE MODEL")+L(320,55,320,280,'stroke="'+C.ink+'" stroke-width="5"')+L(150,95,490,95,'stroke="'+C.ink+'" stroke-width="5"')+L(205,95,160,195,'stroke="'+C.muted+'" stroke-width="3"')+L(435,95,480,195,'stroke="'+C.muted+'" stroke-width="3"')+L(105,195,220,195,'stroke="'+C.ink+'" stroke-width="4"')+L(420,195,535,195,'stroke="'+C.ink+'" stroke-width="4"')+R(125,140,75,40,'rx="8" fill="'+C.pale+'" stroke="'+C.blue+'" stroke-width="2"')+R(440,140,75,40,'rx="8" fill="#fff8de" stroke="'+C.gold+'" stroke-width="2"')+T(145,167,ks[0],lab)+T(450,167,ks[2],lab)+P('275,280 365,280 320,215','fill="#dfedf1" stroke="'+C.ink+'" stroke-width="3"'));
}
function forming(v=0){
 const k=v%6;
 if(k===0)return svg(title("CONSECUTIVE EVEN NUMBERS")+R(70,105,210,95,'rx="16" fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+R(360,105,210,95,'rx="16" fill="#fff8de" stroke="'+C.ink+'" stroke-width="3"')+T(138,162,"2n", 'fill="'+C.ink+'" font-size="34" font-weight="900"')+T(408,162,"2n+2",'fill="'+C.ink+'" font-size="34" font-weight="900"')+T(260,245,"product → equation",sm));
 if(k===1)return svg(title("RECTANGLE → PERIMETER EQUATION")+R(155,75,330,210,'fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="4"')+T(260,65,"x+5",lab)+T(493,190,"x",lab)+T(245,190,"P = 46 cm",'fill="'+C.blue+'" font-size="24" font-weight="900"'));
 if(k===2)return svg(title("TICKET TABLE → SIMULTANEOUS EQUATIONS")+table(3,4,85,70,470,215,["type","number","cost"])+T(105,150,"adult",sm)+T(105,205,"child",sm)+T(318,150,"3",lab)+T(318,205,"2",lab)+T(455,178,"KD 64",lab));
 if(k===3)return svg(title("WORDS → ALGEBRA")+R(60,90,150,90,'rx="16" fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+R(245,90,150,90,'rx="16" fill="#fff8de" stroke="'+C.ink+'" stroke-width="3"')+R(430,90,150,90,'rx="16" fill="#edf9f4" stroke="'+C.ink+'" stroke-width="3"')+T(100,145,"LET",lab)+T(275,145,"FORM",lab)+T(455,145,"CHECK",lab)+L(210,135,245,135,'stroke="'+C.blue+'" stroke-width="4"')+L(395,135,430,135,'stroke="'+C.blue+'" stroke-width="4"'));
 if(k===4)return svg(title("RECTANGLE WITH ALGEBRAIC SIDES")+R(130,80,380,205,'fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="4"')+T(268,68,"x+3",lab)+T(518,190,"x−1",lab)+T(250,190,"perimeter 28",sm));
 return svg(title("CONTEXT → UNKNOWN")+R(95,85,450,180,'rx="22" fill="#fff" stroke="'+C.ink+'" stroke-width="3"')+T(125,130,"1. define the unknown",lab)+T(125,175,"2. translate each relationship",lab)+T(125,220,"3. form, then solve/check",lab));
}
function quadratic(v=0){
 const k=v%6;
 if(k===0){let b=axes();let pts=[];for(let x=-4;x<=4;x+=.15){let y=.45*(x-1)*(x-3);pts.push((120+x*54)+","+(280-y*18));}return svg(title("FACTORISING ↔ ROOTS")+b+'<polyline points="'+pts.join(" ")+'" fill="none" stroke="'+C.blue+'" stroke-width="4"/>'+O(174,280,6,'fill="'+C.red+'"')+O(282,280,6,'fill="'+C.red+'"'));}
 if(k===1)return svg(title("COMPLETING THE SQUARE - AREA MODEL")+R(95,70,250,250,'fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+R(345,70,110,250,'fill="#fff8de" stroke="'+C.gold+'" stroke-width="3"')+R(95,320,250,0,'fill="none"')+T(175,195,"x²", 'fill="'+C.blue+'" font-size="36" font-weight="900"')+T(365,195,"6x", 'fill="'+C.gold+'" font-size="34" font-weight="900"')+T(470,185,"+9",lab));
 if(k===2)return svg(title("QUADRATIC FORMULA MAP")+R(65,75,150,110,'rx="16" fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+R(245,75,150,110,'rx="16" fill="#fff8de" stroke="'+C.ink+'" stroke-width="3"')+R(425,75,150,110,'rx="16" fill="#edf9f4" stroke="'+C.ink+'" stroke-width="3"')+T(102,140,"a,b,c",lab)+T(278,140,"b²−4ac",lab)+T(460,140,"roots",lab)+L(215,130,245,130,'stroke="'+C.blue+'" stroke-width="4"')+L(395,130,425,130,'stroke="'+C.blue+'" stroke-width="4"'));
 if(k===3){let b=axes();let pts=[];for(let x=-4;x<=4;x+=.15){let y=.32*(x+1)*(x+1)-2;pts.push((120+x*54)+","+(280-y*22));}return svg(title("COMPLETED-SQUARE FORM")+b+'<polyline points="'+pts.join(" ")+'" fill="none" stroke="'+C.purple+'" stroke-width="4"/>'+O(120-54,280+44,7,'fill="'+C.red+'"')+T(230,80,"vertex form",sm));}
 if(k===4)return svg(title("DISCRIMINANT → NUMBER OF ROOTS")+R(65,85,150,120,'rx="16" fill="#edf9f4" stroke="'+C.green+'" stroke-width="3"')+R(245,85,150,120,'rx="16" fill="#fff8de" stroke="'+C.gold+'" stroke-width="3"')+R(425,85,150,120,'rx="16" fill="#fff0f0" stroke="'+C.red+'" stroke-width="3"')+T(100,135,">0", 'fill="'+C.green+'" font-size="30" font-weight="900"')+T(285,135,"=0",'fill="'+C.gold+'" font-size="30" font-weight="900"')+T(465,135,"<0",'fill="'+C.red+'" font-size="30" font-weight="900"')+T(85,180,"2 roots",sm)+T(265,180,"1 root",sm)+T(445,180,"no real",sm));
 return svg(title("CHECK ROOTS BY SUBSTITUTION")+T(95,105,"x = 1",lab)+T(95,170,"x = −7",lab)+R(285,70,245,150,'rx="18" fill="'+C.pale+'" stroke="'+C.blue+'" stroke-width="3"')+T(320,125,"substitute into",sm)+T(330,175,"x²+6x−7",lab)+T(250,275,"both should give 0",sm));
}
function fracEquation(v=0){
 const k=v%6;
 if(k===0)return svg(title("CLEAR FRACTIONS WITH THE LCM")+R(75,80,490,170,'rx="20" fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+T(130,135,"× 12 across every term", 'fill="'+C.blue+'" font-size="25" font-weight="900"')+T(140,200,"denominators disappear together",sm));
 if(k===1)return svg(title("CROSS-MULTIPLY")+T(115,100,"2",lab)+L(90,115,155,115,'stroke="'+C.ink+'" stroke-width="3"')+T(95,150,"x−1",lab)+T(275,128,"=",lab)+T(395,100,"3",lab)+L(365,115,450,115,'stroke="'+C.ink+'" stroke-width="3"')+T(365,150,"x+2",lab)+L(150,155,365,85,'stroke="'+C.blue+'" stroke-width="3"')+L(150,85,365,155,'stroke="'+C.red+'" stroke-width="3"'));
 if(k===2)return svg(title("EXCLUDED VALUES")+numberLine(v).replace(/^<svg[^>]*>|<\/svg>$/g,"")+T(130,65,"mark denominator zeros before solving",sm));
 if(k===3)return algebraFraction(1,true);
 if(k===4)return svg(title("CHECK FOR EXTRANEOUS VALUES")+R(80,80,210,150,'rx="18" fill="#fff1f1" stroke="'+C.red+'" stroke-width="3"')+R(350,80,210,150,'rx="18" fill="#edf9f4" stroke="'+C.green+'" stroke-width="3"')+T(122,140,"candidate",lab)+T(398,140,"substitute",lab)+T(145,190,"x = ?",sm)+T(398,190,"valid?",sm));
 return svg(title("FRACTIONAL EQUATION FLOW")+R(45,100,150,90,'rx="15" fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+R(245,100,150,90,'rx="15" fill="#fff8de" stroke="'+C.ink+'" stroke-width="3"')+R(445,100,150,90,'rx="15" fill="#edf9f4" stroke="'+C.ink+'" stroke-width="3"')+T(76,155,"RESTRICT",lab)+T(278,155,"CLEAR",lab)+T(485,155,"SOLVE",lab));
}
function simultaneous(v=0,nonlinear=false){
 const k=v%6;
 if(nonlinear){
   if(k===0){let b=axes();let pts=[];for(let x=-4;x<=4;x+=.15){let y=.35*x*x-2;pts.push((120+x*55)+","+(275-y*24));}b+='<polyline points="'+pts.join(" ")+'" fill="none" stroke="'+C.blue+'" stroke-width="4"/>'+L(110,250,565,85,'stroke="'+C.red+'" stroke-width="4"');return svg(title("LINE + PARABOLA: TWO INTERSECTIONS")+b);}
   if(k===1)return svg(title("CIRCLE + SECANT LINE")+O(320,180,115,'fill="'+C.pale+'" stroke="'+C.blue+'" stroke-width="4"')+L(120,280,535,65,'stroke="'+C.red+'" stroke-width="4"')+O(230,222,7,'fill="'+C.ink+'"')+O(407,126,7,'fill="'+C.ink+'"')+T(150,325,"two intersections → two simultaneous solutions",sm));
   if(k===2)return svg(title("SUBSTITUTION INTO A CIRCLE")+R(65,85,215,150,'rx="18" fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+R(360,85,215,150,'rx="18" fill="#fff8de" stroke="'+C.ink+'" stroke-width="3"')+T(105,140,"y = x+1",lab)+T(400,140,"x²+y²=25",lab)+L(280,160,360,160,'stroke="'+C.blue+'" stroke-width="4"')+T(173,285,"substitute the whole linear expression",sm));
   if(k===3){let b=axes();let pts=[];for(let x=-4;x<=4;x+=.15){let y=.28*(x+1)*(x-3)+1;pts.push((120+x*55)+","+(275-y*24));}b+='<polyline points="'+pts.join(" ")+'" fill="none" stroke="'+C.purple+'" stroke-width="4"/>'+L(120,210,565,150,'stroke="'+C.green+'" stroke-width="4"');return svg(title("LINE + SHIFTED PARABOLA: 0 / 1 / 2 SOLUTIONS")+b);}
   if(k===4)return svg(title("CIRCLE + TANGENT LINE")+O(320,180,115,'fill="'+C.pale+'" stroke="'+C.blue+'" stroke-width="4"')+L(130,295,525,75,'stroke="'+C.red+'" stroke-width="4"')+O(415,118,8,'fill="'+C.ink+'"')+T(345,330,"one touching point → one repeated solution",sm));
   let b=axes();b+=Path('M150 70 C205 115 235 155 285 285 M355 70 C405 125 455 190 565 255','fill="none" stroke="'+C.blue+'" stroke-width="4"')+L(120,255,555,85,'stroke="'+C.red+'" stroke-width="4"');return svg(title("LINE + RECIPROCAL-TYPE CURVE")+b);
 }
 if(k===0)return svg(title("ELIMINATION - SAME COEFFICIENT")+table(3,4,100,75,440,210,["eqn","x-term","y-term"])+T(135,155,"(1)",sm)+T(265,155,"3x",lab)+T(405,155,"2y",lab)+T(135,215,"(2)",sm)+T(265,215,"5x",lab)+T(405,215,"2y",lab));
 if(k===1)return svg(title("SUBSTITUTION")+R(75,95,200,120,'rx="18" fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+R(365,95,200,120,'rx="18" fill="#fff8de" stroke="'+C.ink+'" stroke-width="3"')+T(113,150,"y=2x+1",lab)+T(393,150,"3x+y=16",lab)+L(275,155,365,155,'stroke="'+C.blue+'" stroke-width="4"'));
 if(k===2)return svg(title("CONTEXT TABLE - COFFEE / TEA")+table(4,4,80,65,480,220,["order","coffee","tea","cost"])+T(102,145,"A",sm)+T(235,145,"3",lab)+T(365,145,"2",lab)+T(470,145,"6.50",lab)+T(102,205,"B",sm)+T(235,205,"5",lab)+T(365,205,"2",lab)+T(470,205,"9.50",lab));
 if(k===3){let b=axes();b+=L(110,250,560,80,'stroke="'+C.blue+'" stroke-width="4"')+L(110,70,560,240,'stroke="'+C.red+'" stroke-width="4"')+O(340,165,7,'fill="'+C.ink+'"');return svg(title("GRAPHICAL SOLUTION")+b);}
 if(k===4)return svg(title("ELIMINATION - MULTIPLY FIRST")+R(70,85,220,150,'rx="18" fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+R(350,85,220,150,'rx="18" fill="#fff8de" stroke="'+C.ink+'" stroke-width="3"')+T(105,140,"2x+3y=...",lab)+T(385,140,"3x+2y=...",lab)+T(210,285,"choose multipliers so one variable cancels",sm));
 return svg(title("CHECK THE ORDERED PAIR")+R(100,80,440,190,'rx="22" fill="#edf9f4" stroke="'+C.green+'" stroke-width="3"')+T(140,135,"substitute (x,y) into equation 1",lab)+T(140,190,"substitute (x,y) into equation 2",lab)+T(215,245,"both must be true", 'fill="'+C.green+'" font-size="24" font-weight="900"'));
}
function rearrange(v=0){
 const k=v%6;
 if(k===0)return svg(title("UNDO OPERATIONS IN REVERSE")+R(35,105,130,85,'rx="14" fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+R(205,105,130,85,'rx="14" fill="#fff8de" stroke="'+C.ink+'" stroke-width="3"')+R(375,105,130,85,'rx="14" fill="#edf9f4" stroke="'+C.ink+'" stroke-width="3"')+T(75,158,"+ / −",lab)+T(245,158,"× / ÷",lab)+T(415,158,"power",lab)+T(130,245,"reverse order from outside to inside",sm));
 if(k===1)return svg(title("SQUARE → SQUARE ROOT")+O(320,170,100,'fill="'+C.pale+'" stroke="'+C.blue+'" stroke-width="4"')+T(260,165,"A = πr²",lab)+T(245,220,"solve for r",sm));
 if(k===2)return svg(title("UNKNOWN ON BOTH SIDES")+R(75,90,210,130,'rx="16" fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+R(355,90,210,130,'rx="16" fill="#fff8de" stroke="'+C.ink+'" stroke-width="3"')+T(102,145,"ycx + yd",lab)+T(398,145,"ax + b",lab)+T(240,275,"collect x-terms first",sm));
 if(k===3)return svg(title("FRACTION FORMULA")+T(125,105,"a",'fill="'+C.ink+'" font-size="30" font-weight="900"')+L(95,120,170,120,'stroke="'+C.ink+'" stroke-width="3"')+T(105,155,"x+b",lab)+T(265,128,"=",lab)+T(385,128,"c",lab)+T(210,230,"clear fractions before collecting x",sm));
 if(k===4)return svg(title("FORMULA TREE")+R(80,70,480,210,'rx="20" fill="#fff" stroke="'+C.ink+'" stroke-width="3"')+T(110,120,"1 clear fractions / roots",lab)+T(110,170,"2 expand if necessary",lab)+T(110,220,"3 gather subject terms",lab)+T(110,270,"4 factor and divide",lab));
 return svg(title("CHECK BY RE-SUBSTITUTING")+R(85,95,470,155,'rx="20" fill="#edf9f4" stroke="'+C.green+'" stroke-width="3"')+T(125,150,"original formula",lab)+T(390,150,"↔", 'fill="'+C.blue+'" font-size="30" font-weight="900"')+T(445,150,"new form",lab)+T(175,215,"same relationship, different subject",sm));
}
function inequalityGraph(v=0,region=false){
 const k=v%6;let b=axes();
 if(region){
  const shapes=[
   '170,280 440,280 300,95','170,260 490,260 490,110 260,110','150,265 360,95 540,265','180,270 500,270 420,90 250,120','140,250 320,80 520,250 500,290 170,290','200,280 520,280 520,150 350,70'
  ];
  b+=P(shapes[k],'fill="'+C.blue+'" opacity=".16" stroke="'+C.blue+'" stroke-width="3"');
  if(k%2)b+=L(160,245,530,110,'stroke="'+C.red+'" stroke-width="4" stroke-dasharray="9 7"');
  else b+=L(160,245,530,110,'stroke="'+C.red+'" stroke-width="4"');
  return svg(title("FEASIBLE REGION - BOOK STYLE")+b);
 }
 const lines=[[165,255,560,80],[150,115,560,240],[230,300,230,45],[110,220,560,130],[110,260,520,70],[170,300,500,50]][k];
 b+=L(...lines,'stroke="'+C.blue+'" stroke-width="4" '+(k%2?'stroke-dasharray="10 8"':''));
 if(k!==2)b+=P('110,300 110,220 560,80 560,300','fill="'+C.blue+'" opacity=".12"');
 return svg(title("BOUNDARY + SHADING")+b);
}
function angle(v=0,parallel=false,poly=false){
 const k=v%6;
 if(poly){
  if(k===0)return svg(title("INTERIOR ANGLE SUM - TRIANGULATE")+P('115,255 200,80 390,55 535,175 450,285','fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="4"')+L(115,255,390,55,'stroke="'+C.blue+'" stroke-width="2"')+L(115,255,535,175,'stroke="'+C.blue+'" stroke-width="2"')+T(225,325,"(n−2) triangles",sm));
  if(k===1)return svg(title("REGULAR POLYGON - EXTERIOR ANGLE")+P('320,48 492,150 445,300 195,300 148,150','fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="4"')+L(492,150,570,105,'stroke="'+C.ink+'" stroke-width="3"')+Path('M492 150 A55 55 0 0 0 530 146','fill="none" stroke="'+C.blue+'" stroke-width="5"')+T(510,125,"24°",lab));
  if(k===2)return svg(title("IRREGULAR PENTAGON")+P('100,250 185,70 355,55 535,145 470,290','fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="4"')+T(140,150,"104°",lab)+T(300,92,"118°",lab)+T(445,165,"95°",lab)+T(400,270,"132°",lab)+T(215,245,"?", 'fill="'+C.blue+'" font-size="34" font-weight="900"'));
  if(k===3)return svg(title("REGULAR OCTAGON")+P('250,55 390,55 500,140 500,245 390,325 250,325 140,245 140,140','fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="4"')+T(250,190,"exterior = 45°",lab));
  if(k===4)return svg(title("TESSELLATING POLYGONS")+P('60,90 160,90 190,175 110,235 30,175','fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+P('190,175 290,175 320,260 240,320 160,260','fill="#fff8de" stroke="'+C.ink+'" stroke-width="3"')+P('320,90 420,90 450,175 370,235 290,175','fill="#edf9f4" stroke="'+C.ink+'" stroke-width="3"')+T(455,235,"angles around a point",sm));
  return svg(title("SUM OF EXTERIOR ANGLES")+O(320,180,115,'fill="#fff" stroke="'+C.ink+'" stroke-width="4"')+[0,72,144,216,288].map(a=>{const r=a*Math.PI/180,x=320+115*Math.cos(r),y=180+115*Math.sin(r),x2=320+155*Math.cos(r),y2=180+155*Math.sin(r);return L(x,y,x2,y2,'stroke="'+C.blue+'" stroke-width="3"');}).join('')+T(245,185,"total 360°",lab));
 }
 if(parallel){
  const shift=[0,30,-20,50,-40,15][k];
  let b=title("PARALLEL-LINE ANGLE REASONING")+L(70,95,570,95,'stroke="'+C.ink+'" stroke-width="5"')+L(70,245,570,245,'stroke="'+C.ink+'" stroke-width="5"')+L(190+shift,35,410+shift,315,'stroke="'+C.red+'" stroke-width="5"');
  b+=Path('M245 95 A45 45 0 0 1 275 130','fill="none" stroke="'+C.blue+'" stroke-width="5"')+T(275,145,(k%2?117:68)+"°",lab);
  if(k===2)b+=L(70,170,570,170,'stroke="'+C.blue+'" stroke-width="3" stroke-dasharray="9 7"');
  return svg(b);
 }
 if(k===0)return svg(title("STRAIGHT-LINE ANGLES")+L(80,230,560,230,'stroke="'+C.ink+'" stroke-width="4"')+L(320,230,450,65,'stroke="'+C.ink+'" stroke-width="4"')+Path('M370 230 A50 50 0 0 0 350 188','fill="none" stroke="'+C.blue+'" stroke-width="5"')+T(380,195,"112°",lab)+T(245,195,"x",lab));
 if(k===1)return svg(title("VERTICALLY OPPOSITE ANGLES")+L(100,60,540,300,'stroke="'+C.ink+'" stroke-width="4"')+L(540,60,100,300,'stroke="'+C.ink+'" stroke-width="4"')+T(370,155,"115°",lab)+T(220,220,"115°",lab));
 if(k===2)return svg(title("ANGLES AROUND A POINT")+[0,65,155,235].map(a=>{const r=a*Math.PI/180;return L(320,180,320+145*Math.cos(r),180+145*Math.sin(r),'stroke="'+C.ink+'" stroke-width="4"');}).join('')+T(365,115,"150°",lab)+T(230,120,"2x",lab)+T(215,235,"4x",lab)+T(375,235,"x",lab));
 if(k===3)return svg(title("QUADRILATERAL ANGLES")+P('130,255 210,70 470,100 520,280','fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="4"')+T(185,145,"2x",lab)+T(380,145,"3x",lab)+T(180,260,"4x",lab)+T(430,260,"5x",lab));
 if(k===4)return svg(title("EXTERIOR ANGLE OF A TRIANGLE")+P('120,270 320,70 500,270','fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="4"')+L(500,270,585,270,'stroke="'+C.ink+'" stroke-width="4"')+T(485,230,"128°",lab)+T(230,230,"53°",lab)+T(360,230,"?",'fill="'+C.blue+'" font-size="34" font-weight="900"'));
 return svg(title("ISOSCELES / TRIANGLE FACTS")+P('150,275 320,65 490,275','fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="4"')+L(205,205,225,220,'stroke="'+C.blue+'" stroke-width="4"')+L(415,205,435,190,'stroke="'+C.blue+'" stroke-width="4"')+T(285,255,"base angles equal",sm));
}
function symmetry(v=0,solid=false){
 const k=v%6;
 if(solid){
  if(k===0)return svg(title("CYLINDER - PLANES + ROTATION")+Path('M200 90 C200 50 440 50 440 90 L440 260 C440 300 200 300 200 260 Z','fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="4"')+Path('M200 90 C200 130 440 130 440 90','fill="none" stroke="'+C.ink+'" stroke-width="4"')+Path('M200 260 C200 220 440 220 440 260','fill="none" stroke="'+C.ink+'" stroke-width="4"')+L(320,45,320,315,'stroke="'+C.blue+'" stroke-width="3" stroke-dasharray="9 7"'));
  if(k===1)return svg(title("CUBE - PLANES OF SYMMETRY")+P('190,90 350,45 500,115 340,165','fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+P('190,90 190,245 340,310 340,165','fill="#f9fdfe" stroke="'+C.ink+'" stroke-width="3"')+P('340,165 500,115 500,260 340,310','fill="#e8f6fa" stroke="'+C.ink+'" stroke-width="3"')+L(345,45,345,310,'stroke="'+C.blue+'" stroke-width="3" stroke-dasharray="9 7"'));
  if(k===2)return svg(title("TRIANGULAR PRISM")+P('120,245 215,85 305,245','fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+P('335,245 430,85 520,245','fill="#fff8de" stroke="'+C.ink+'" stroke-width="3"')+L(120,245,335,245,'stroke="'+C.ink+'" stroke-width="3"')+L(215,85,430,85,'stroke="'+C.ink+'" stroke-width="3"')+L(305,245,520,245,'stroke="'+C.ink+'" stroke-width="3"')+L(320,55,320,285,'stroke="'+C.blue+'" stroke-width="3" stroke-dasharray="8 7"'));
  if(k===3)return svg(title("CONE - AXIAL SYMMETRY")+Path('M320 55 L175 275 C175 315 465 315 465 275 Z','fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="4"')+Path('M175 275 C175 235 465 235 465 275','fill="none" stroke="'+C.ink+'" stroke-width="3"')+L(320,50,320,320,'stroke="'+C.blue+'" stroke-width="3" stroke-dasharray="9 7"'));
  if(k===4)return svg(title("SPHERE - INFINITE PLANES")+O(320,180,125,'fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="4"')+Path('M195 180 C230 130 410 130 445 180 C410 230 230 230 195 180','fill="none" stroke="'+C.blue+'" stroke-width="3"')+L(320,55,320,305,'stroke="'+C.blue+'" stroke-width="3" stroke-dasharray="8 7"'));
  return svg(title("SQUARE-BASED PYRAMID")+P('320,55 145,270 500,270','fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="4"')+P('145,270 320,320 500,270 320,230','fill="#fff8de" stroke="'+C.ink+'" stroke-width="3"')+L(320,55,320,320,'stroke="'+C.blue+'" stroke-width="3" stroke-dasharray="8 7"'));
 }
 const shapes=[
  ()=>R(160,95,320,180,'fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="4"')+L(320,95,320,275,'stroke="'+C.blue+'" stroke-width="3" stroke-dasharray="8 7"')+L(160,185,480,185,'stroke="'+C.blue+'" stroke-width="3" stroke-dasharray="8 7"'),
  ()=>P('320,50 500,150 430,300 210,300 140,150','fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="4"')+L(320,50,320,300,'stroke="'+C.blue+'" stroke-width="3" stroke-dasharray="8 7"'),
  ()=>P('320,60 470,180 320,300 170,180','fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="4"')+L(170,180,470,180,'stroke="'+C.blue+'" stroke-width="3" stroke-dasharray="8 7"')+L(320,60,320,300,'stroke="'+C.blue+'" stroke-width="3" stroke-dasharray="8 7"'),
  ()=>P('320,45 510,290 130,290','fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="4"')+L(320,45,320,290,'stroke="'+C.blue+'" stroke-width="3" stroke-dasharray="8 7"'),
  ()=>O(320,180,120,'fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="4"')+L(200,180,440,180,'stroke="'+C.blue+'" stroke-width="3" stroke-dasharray="8 7"')+L(320,60,320,300,'stroke="'+C.blue+'" stroke-width="3" stroke-dasharray="8 7"'),
  ()=>P('170,120 245,70 320,120 395,70 470,120 430,255 320,305 210,255','fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="4"')+T(245,335,"rotational order ?",sm)
 ];
 return svg(title("2D SYMMETRY - BOOK STRUCTURE")+shapes[k]());
}
function units(v=0){
 const k=v%6;
 if(k===0)return svg(title("LINEAR UNIT LADDER")+["mm","cm","m","km"].map((q,i)=>R(35+i*150,105,120,75,'rx="15" fill="'+(i===2?"#fff8de":C.pale)+'" stroke="'+C.ink+'" stroke-width="3"')+T(75+i*150,152,q,lab)).join('')+T(125,245,"×100 or ÷100 between cm and m",sm));
 if(k===1)return svg(title("AREA SCALE FACTOR")+R(100,80,120,120,'fill="'+C.pale+'" stroke="'+C.blue+'" stroke-width="3"')+R(340,55,210,210,'fill="#fff8de" stroke="'+C.gold+'" stroke-width="3"')+T(125,240,"1 m × 1 m",sm)+T(350,295,"100 cm × 100 cm",sm));
 if(k===2)return svg(title("VOLUME / CAPACITY")+R(130,80,170,170,'fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+R(355,105,130,145,'fill="#fff8de" stroke="'+C.gold+'" stroke-width="3"')+T(160,285,"1 m³",lab)+T(375,285,"1000 L",lab)+T(300,178,"=", 'fill="'+C.blue+'" font-size="34" font-weight="900"'));
 if(k===3)return svg(title("CLOCK / TIME CONVERSION")+O(320,175,120,'fill="#fff" stroke="'+C.ink+'" stroke-width="4"')+L(320,175,320,85,'stroke="'+C.blue+'" stroke-width="5"')+L(320,175,390,215,'stroke="'+C.red+'" stroke-width="5"')+T(245,330,"60 minutes = 1 hour",sm));
 if(k===4)return svg(title("MASS / LENGTH / CAPACITY")+R(65,90,150,140,'rx="18" fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+R(245,90,150,140,'rx="18" fill="#fff8de" stroke="'+C.ink+'" stroke-width="3"')+R(425,90,150,140,'rx="18" fill="#edf9f4" stroke="'+C.ink+'" stroke-width="3"')+T(103,150,"kg",lab)+T(284,150,"km",lab)+T(463,150,"L",lab)+T(95,200,"1000 g",sm)+T(275,200,"1000 m",sm)+T(455,200,"1000 ml",sm));
 return svg(title("DIMENSION CHECK")+T(100,95,"length",lab)+T(100,155,"area",lab)+T(100,215,"volume",lab)+T(315,95,"× scale",sm)+T(315,155,"× scale²",sm)+T(315,215,"× scale³",sm));
}
function mensuration(v=0,circleMode=false,sectorMode=false){
 const k=v%6;
 if(sectorMode){
  const ang=[40,120,150,80,225,60][k],r=[6,8,12,9,6,10][k];
  if(k===1)return svg(title("SECTOR PERIMETER")+Path('M320 180 L500 180 A180 180 0 0 1 230 330 Z','fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="4"')+T(390,165,r+" cm",lab)+T(315,235,ang+"°",lab)+T(110,320,"perimeter = two radii + arc",sm));
  if(k===4)return svg(title("MAJOR / MINOR SECTOR")+O(320,180,125,'fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="4"')+L(320,180,440,150,'stroke="'+C.ink+'" stroke-width="3"')+L(320,180,405,270,'stroke="'+C.ink+'" stroke-width="3"')+Path('M440 150 A125 125 0 0 1 405 270','fill="none" stroke="'+C.red+'" stroke-width="8"')+T(345,230,"minor",sm)+T(185,110,"major",sm));
  return svg(title("ARC / SECTOR FROM BOOK EXERCISES")+Path('M320 180 L500 180 A180 180 0 0 1 320 360 Z','fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="4"')+Path('M375 180 A55 55 0 0 1 320 235','fill="none" stroke="'+C.blue+'" stroke-width="5"')+T(365,225,ang+"°",lab)+T(390,165,r+" cm",lab));
 }
 if(circleMode){
  if(k===0)return svg(title("CIRCUMFERENCE - DIAMETER")+O(320,180,120,'fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="4"')+L(200,180,440,180,'stroke="'+C.blue+'" stroke-width="5"')+T(270,165,"12 cm",lab));
  if(k===1)return svg(title("AREA - RADIUS")+O(320,180,120,'fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="4"')+L(320,180,395,85,'stroke="'+C.red+'" stroke-width="4"')+T(375,125,"r",lab)+T(250,340,"A = πr²",sm));
  if(k===2)return svg(title("ANNULUS")+O(320,180,130,'fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="4"')+O(320,180,65,'fill="#fff" stroke="'+C.ink+'" stroke-width="3"')+T(455,135,"R",lab)+T(365,175,"r",lab));
  if(k===3)return svg(title("SEMICIRCLE COMPOSITE")+Path('M160 230 A160 160 0 0 1 480 230 L160 230 Z','fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="4"')+L(160,230,480,230,'stroke="'+C.blue+'" stroke-width="4"')+T(270,260,"diameter",sm));
  if(k===4)return svg(title("TWO TANGENT CIRCLES")+O(245,180,85,'fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="4"')+O(415,180,85,'fill="#fff8de" stroke="'+C.ink+'" stroke-width="4"')+O(330,180,5,'fill="'+C.red+'"')+T(255,315,"touching circles",sm));
  return svg(title("CIRCLE IN A SQUARE")+R(170,50,300,300,'fill="#fff" stroke="'+C.ink+'" stroke-width="4"')+O(320,200,150,'fill="'+C.pale+'" stroke="'+C.blue+'" stroke-width="4"')+T(215,335,"diameter = side length",sm));
 }
 const variants=[
  ()=>P('120,285 225,75 500,75 555,285','fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="4"')+T(330,62,"8 cm",lab)+T(310,325,"14 cm",lab)+L(225,75,225,285,'stroke="'+C.blue+'" stroke-width="3" stroke-dasharray="8 7"')+T(238,190,"6 cm",lab),
  ()=>P('120,290 220,90 520,290','fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="4"')+L(220,90,220,290,'stroke="'+C.blue+'" stroke-width="3" stroke-dasharray="8 7"')+T(240,180,"h",lab)+T(290,325,"base",lab),
  ()=>R(105,70,430,230,'fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="4"')+R(350,70,185,105,'fill="#fff" stroke="'+C.ink+'" stroke-width="4"')+T(215,205,"L-shape", 'fill="'+C.blue+'" font-size="34" font-weight="900"'),
  ()=>P('90,285 190,95 310,95 380,190 545,190 545,285','fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="4"')+T(200,335,"compound polygon",sm),
  ()=>P('150,270 250,80 470,80 520,270','fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="4"')+L(250,80,250,270,'stroke="'+C.blue+'" stroke-width="3" stroke-dasharray="8 7"')+R(245,260,12,12,'fill="none" stroke="'+C.blue+'" stroke-width="2"')+T(350,60,"parallel sides",sm),
  ()=>P('110,280 200,90 330,280','fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="4"')+P('330,280 430,130 550,280','fill="#fff8de" stroke="'+C.ink+'" stroke-width="4"')+T(230,335,"split into familiar shapes",sm)
 ];
 return svg(title("AREA / PERIMETER - COURSEBOOK SHAPE STYLE")+variants[k]());
}
function statTable(v=0,averages=false,grouped=false){
 const k=v%6;
 if(grouped){
  if(k===0)return svg(title("GROUPED FREQUENCY TABLE")+table(3,5,80,55,480,260,["class","frequency","midpoint"])+T(105,130,"0≤x<10",sm)+T(300,130,"3",lab)+T(435,130,"5",lab)+T(105,185,"10≤x<20",sm)+T(300,185,"7",lab)+T(435,185,"15",lab));
  if(k===1)return svg(title("MIDPOINT × FREQUENCY")+R(65,85,150,90,'rx="14" fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+R(245,85,150,90,'rx="14" fill="#fff8de" stroke="'+C.ink+'" stroke-width="3"')+R(425,85,150,90,'rx="14" fill="#edf9f4" stroke="'+C.ink+'" stroke-width="3"')+T(92,140,"midpoint",lab)+T(300,140,"f",lab)+T(468,140,"fx",lab)+T(190,225,"sum fx ÷ sum f",sm));
  if(k===2)return svg(title("MODAL / MEDIAN CLASS")+table(2,5,120,55,400,260,["class","frequency"])+R(122,145,396,52,'fill="'+C.pale+'" opacity=".8" stroke="'+C.blue+'" stroke-width="3"')+T(165,285,"highlight the class, not an exact value",sm));
  if(k===3)return svg(title("CUMULATIVE POSITION IN GROUPED DATA")+L(100,260,550,260,'stroke="'+C.ink+'" stroke-width="3"')+[8,22,41,50].map((n,i)=>O(150+i*110,260,8,'fill="'+(i===2?C.blue:C.muted)+'"')).join('')+T(310,220,"median position",lab));
  if(k===4)return svg(title("GROUPED DISCRETE VALUES")+table(3,4,100,70,440,210,["group","f","mid"])+T(125,145,"1–3",lab)+T(285,145,"4",lab)+T(430,145,"2",lab)+T(125,205,"4–6",lab)+T(285,205,"8",lab)+T(430,205,"5",lab));
  return svg(title("ESTIMATED MEAN FLOW")+R(55,100,145,85,'rx="14" fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+R(245,100,145,85,'rx="14" fill="#fff8de" stroke="'+C.ink+'" stroke-width="3"')+R(435,100,145,85,'rx="14" fill="#edf9f4" stroke="'+C.ink+'" stroke-width="3"')+T(87,153,"midpoints",sm)+T(287,153,"× f",sm)+T(467,153,"÷ Σf",sm));
 }
 if(averages){
  if(k===0){let b=title("ORDERED DATA + MEDIAN")+L(70,230,570,230,'stroke="'+C.ink+'" stroke-width="3"');[3,5,5,7,8,9,12,15].forEach((n,i)=>{const x=105+i*60;b+=O(x,205,8,'fill="'+C.blue+'"')+T(x-7,260,n,sm);});b+=L(315,175,315,250,'stroke="'+C.red+'" stroke-width="3"');return svg(b);}
  if(k===1)return svg(title("BOX-PLOT LANGUAGE")+L(90,180,550,180,'stroke="'+C.ink+'" stroke-width="3"')+R(215,125,210,110,'fill="'+C.pale+'" stroke="'+C.blue+'" stroke-width="3"')+L(320,125,320,235,'stroke="'+C.red+'" stroke-width="4"')+L(90,180,215,180,'stroke="'+C.ink+'" stroke-width="3"')+L(425,180,550,180,'stroke="'+C.ink+'" stroke-width="3"')+T(195,280,"Q1",sm)+T(305,280,"median",sm)+T(415,280,"Q3",sm));
  if(k===2)return svg(title("MEAN AS FAIR SHARE")+[0,1,2,3,4].map(i=>R(90+i*95,280-[50,110,80,160,95][i],60,[50,110,80,160,95][i],'fill="'+C.pale+'" stroke="'+C.blue+'" stroke-width="2"')).join('')+L(80,185,570,185,'stroke="'+C.red+'" stroke-width="3" stroke-dasharray="8 6"')+T(450,170,"mean",sm));
  if(k===3)return svg(title("MEDIAN VS OUTLIER")+L(85,235,560,235,'stroke="'+C.ink+'" stroke-width="3"')+[120,150,170,190,210,520].map((x,i)=>O(x,220,8,'fill="'+(i===5?C.red:C.blue)+'"')).join('')+T(455,185,"outlier",sm));
  if(k===4)return svg(title("COMPARE CENTRE + SPREAD")+R(75,85,220,150,'rx="18" fill="'+C.pale+'" stroke="'+C.blue+'" stroke-width="3"')+R(350,85,220,150,'rx="18" fill="#fff8de" stroke="'+C.gold+'" stroke-width="3"')+T(110,140,"Median 42",lab)+T(110,190,"IQR 6",lab)+T(385,140,"Median 39",lab)+T(385,190,"IQR 14",lab));
  return svg(title("MEAN / MEDIAN / MODE / RANGE")+R(55,90,120,120,'rx="18" fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="2"')+R(195,90,120,120,'rx="18" fill="#fff8de" stroke="'+C.ink+'" stroke-width="2"')+R(335,90,120,120,'rx="18" fill="#edf9f4" stroke="'+C.ink+'" stroke-width="2"')+R(475,90,120,120,'rx="18" fill="#f3effd" stroke="'+C.ink+'" stroke-width="2"')+T(77,155,"mean",sm)+T(215,155,"median",sm)+T(360,155,"mode",sm)+T(500,155,"range",sm));
 }
 if(k===0)return svg(title("TALLY / FREQUENCY TABLE")+table(3,5,95,55,450,260,["category","tally","frequency"])+T(115,130,"red",sm)+T(300,130,"||||",lab)+T(465,130,"4",lab)+T(115,185,"blue",sm)+T(300,185,"|||| /",lab)+T(465,185,"6",lab));
 if(k===1)return svg(title("TWO-WAY TABLE")+table(4,4,75,65,490,230,["","football","other","total"])+T(100,145,"boys",sm)+T(255,145,"11",lab)+T(385,145,"7",lab)+T(495,145,"18",lab)+T(100,205,"girls",sm)+T(255,205,"14",lab)+T(385,205,"8",lab)+T(495,205,"22",lab));
 if(k===2)return svg(title("CONTINUOUS CLASS BOUNDARIES")+L(85,210,555,210,'stroke="'+C.ink+'" stroke-width="3"')+[0,5,10,15].map((n,i)=>{const x=120+i*130;return L(x,195,x,225,'stroke="'+C.ink+'" stroke-width="2"')+T(x-8,255,n,sm);}).join('')+R(120,130,130,55,'fill="'+C.pale+'" stroke="'+C.blue+'" stroke-width="2"')+R(250,130,130,55,'fill="#fff8de" stroke="'+C.gold+'" stroke-width="2"')+R(380,130,130,55,'fill="#edf9f4" stroke="'+C.green+'" stroke-width="2"'));
 if(k===3)return svg(title("RAW DATA → ORGANISE")+R(45,65,230,240,'fill="#fff" stroke="'+C.ink+'" stroke-width="2"')+T(65,100,"raw values",sm)+["2.4","4.9","5.0","8.7","9.9","10.0","13.2"].map((n,i)=>T(80+(i%2)*90,140+Math.floor(i/2)*42,n,lab)).join('')+R(355,65,230,240,'fill="'+C.pale+'" stroke="'+C.blue+'" stroke-width="2"')+T(382,100,"grouped classes",sm));
 if(k===4)return svg(title("STEM-AND-LEAF STRUCTURE")+L(280,70,280,290,'stroke="'+C.ink+'" stroke-width="3"')+T(200,65,"stem",sm)+T(330,65,"leaves",sm)+T(220,125,"1",lab)+T(330,125,"2 4 7",lab)+T(220,185,"2",lab)+T(330,185,"1 1 5 9",lab)+T(220,245,"3",lab)+T(330,245,"3",lab));
 return svg(title("DATA TYPE DECISION")+R(65,85,220,160,'rx="18" fill="'+C.pale+'" stroke="'+C.blue+'" stroke-width="3"')+R(355,85,220,160,'rx="18" fill="#fff8de" stroke="'+C.gold+'" stroke-width="3"')+T(120,140,"categorical",lab)+T(410,140,"numerical",lab)+T(420,195,"discrete / continuous",sm));
}
function compareData(v=0,limits=false){
 const k=v%6;
 if(limits){
  if(k===0)return svg(title("SAMPLE ↔ POPULATION")+R(55,55,530,255,'rx="25" fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+[...Array(24)].map((_,i)=>O(105+(i%8)*60,110+Math.floor(i/8)*70,8,'fill="'+(i<6?C.blue:C.muted)+'" opacity="'+(i<6?1:.6)+'"')).join('')+R(78,78,225,120,'rx="18" fill="none" stroke="'+C.blue+'" stroke-width="4" stroke-dasharray="9 7"')+T(110,235,"sample",lab)+T(430,290,"population",sm));
  if(k===1)return svg(title("CORRELATION ≠ CAUSATION")+R(70,90,210,140,'rx="18" fill="'+C.pale+'" stroke="'+C.blue+'" stroke-width="3"')+R(360,90,210,140,'rx="18" fill="#fff8de" stroke="'+C.gold+'" stroke-width="3"')+T(105,145,"ice cream",lab)+T(405,145,"sunburn",lab)+T(245,295,"third variable: sunny weather",sm));
  if(k===2)return svg(title("VOLUNTARY RESPONSE BIAS")+R(90,80,460,180,'rx="22" fill="#fff" stroke="'+C.ink+'" stroke-width="3"')+T(130,135,"online poll",lab)+T(130,190,"large n does not guarantee",sm)+T(130,225,"a representative sample",sm));
  if(k===3)return svg(title("WHO WAS NOT SAMPLED?")+R(70,70,500,220,'rx="20" fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+T(105,125,"top maths set",lab)+L(270,130,420,130,'stroke="'+C.red+'" stroke-width="3" stroke-dasharray="8 6"')+T(435,137,"all Year 10?",sm)+T(180,240,"generalisation needs representativeness",sm));
  if(k===4)return svg(title("MISLEADING AXIS")+L(95,285,560,285,'stroke="'+C.ink+'" stroke-width="3"')+L(95,285,95,80,'stroke="'+C.ink+'" stroke-width="3"')+R(170,210,100,75,'fill="'+C.pale+'" stroke="'+C.blue+'" stroke-width="3"')+R(355,130,100,155,'fill="#fff8de" stroke="'+C.gold+'" stroke-width="3"')+T(25,275,"96",sm)+T(25,120,"100",sm)+T(160,330,"98",sm)+T(350,330,"100",sm));
  return svg(title("EXTRAPOLATION WARNING")+axes()+L(150,250,480,95,'stroke="'+C.blue+'" stroke-width="4"')+L(480,95,585,40,'stroke="'+C.red+'" stroke-width="4" stroke-dasharray="9 7"')+T(455,330,"observed",sm)+T(520,75,"outside data",sm));
 }
 if(k===0)return svg(title("COMPARE TWO BOXPLOTS")+L(100,130,550,130,'stroke="'+C.ink+'" stroke-width="2"')+R(210,95,180,70,'fill="'+C.pale+'" stroke="'+C.blue+'" stroke-width="3"')+L(300,95,300,165,'stroke="'+C.red+'" stroke-width="3"')+L(100,250,550,250,'stroke="'+C.ink+'" stroke-width="2"')+R(180,215,260,70,'fill="#fff8de" stroke="'+C.gold+'" stroke-width="3"')+L(330,215,330,285,'stroke="'+C.red+'" stroke-width="3"'));
 if(k===1)return svg(title("MEAN + RANGE CARDS")+R(75,85,220,150,'rx="18" fill="'+C.pale+'" stroke="'+C.blue+'" stroke-width="3"')+R(350,85,220,150,'rx="18" fill="#fff8de" stroke="'+C.gold+'" stroke-width="3"')+T(105,140,"mean 12.4",lab)+T(105,190,"range 6",lab)+T(385,140,"mean 13.1",lab)+T(385,190,"range 20",lab));
 if(k===2)return svg(title("OUTLIER EFFECT")+L(80,240,570,240,'stroke="'+C.ink+'" stroke-width="3"')+[120,160,185,220,245,520].map((x,i)=>O(x,220,8,'fill="'+(i===5?C.red:C.blue)+'"')).join('')+T(460,180,"extreme",sm)+T(165,300,"median/IQR resist this more than mean/range",sm));
 if(k===3)return svg(title("PASS RATE, NOT JUST COUNTS")+R(85,75,200,180,'rx="18" fill="'+C.pale+'" stroke="'+C.blue+'" stroke-width="3"')+R(355,75,200,180,'rx="18" fill="#fff8de" stroke="'+C.gold+'" stroke-width="3"')+T(130,130,"18 / 30",lab)+T(130,180,"60%", 'fill="'+C.blue+'" font-size="30" font-weight="900"')+T(400,130,"20 / 40",lab)+T(400,180,"50%", 'fill="'+C.gold+'" font-size="30" font-weight="900"'));
 if(k===4)return svg(title("CENTRE + SPREAD TOGETHER")+R(70,80,500,190,'rx="22" fill="#fff" stroke="'+C.ink+'" stroke-width="3"')+T(110,135,"typical value → median / mean",lab)+T(110,195,"consistency → IQR / range",lab)+T(110,245,"context → decide which matters",lab));
 return svg(title("TWO-GROUP SUMMARY")+table(3,4,110,65,420,220,["group","median","IQR"])+T(140,145,"A",lab)+T(295,145,"64",lab)+T(440,145,"8",lab)+T(140,205,"B",lab)+T(295,205,"59",lab)+T(440,205,"5",lab));
}
function chart(v=0,scatterMode=false,best=false,cum=false,hist=false){
 const k=v%6;
 if(scatterMode){
  let b=title(best?"LINE OF BEST FIT":"SCATTER DIAGRAM")+axes(),pts=[];
  const sets=[
   [[1,2],[2,3],[3,5],[4,6],[5,8],[6,9],[7,4]],
   [[1,8],[2,7],[3,6],[4,5],[5,4],[6,3],[7,2]],
   [[1,3],[2,7],[3,4],[4,8],[5,5],[6,9],[7,6]],
   [[1,2],[2,2.5],[3,4],[4,5],[5,7],[6,8],[7,9]],
   [[1,9],[2,8],[3,6],[4,6],[5,4],[6,3],[7,2]],
   [[1,5],[2,4],[3,5],[4,4],[5,5],[6,4],[7,5]]
  ][k];
  sets.forEach(([x,y],i)=>b+=O(120+x*58,285-y*24,6,'fill="'+(i===sets.length-1&&k===0?C.red:C.blue)+'"'));
  if(best)b+=L(160,k%2?230:260,550,k%2?80:95,'stroke="'+C.red+'" stroke-width="4"');
  return svg(b);
 }
 if(cum){
  let b=title("CUMULATIVE FREQUENCY - TEXTBOOK CURVE")+axes(),pts=[];
  for(let i=0;i<=10;i++){const x=120+i*45,yy=285-(210/(1+Math.exp(-(i-(4.2+k*.2))/(1.05+(k%3)*.18))));pts.push(x+","+yy.toFixed(1));}
  b+='<polyline points="'+pts.join(" ")+'" fill="none" stroke="'+(k%2?C.purple:C.blue)+'" stroke-width="4"/>';
  if(k===1||k===4)b+=L(120,180,570,180,'stroke="'+C.red+'" stroke-width="2" stroke-dasharray="8 6"')+L(360,285,360,75,'stroke="'+C.red+'" stroke-width="2" stroke-dasharray="8 6"');
  if(k===2)b+=L(120,230,570,230,'stroke="'+C.gold+'" stroke-width="2" stroke-dasharray="8 6"')+L(120,130,570,130,'stroke="'+C.green+'" stroke-width="2" stroke-dasharray="8 6"');
  return svg(b);
 }
 if(hist){
  let b=title("HISTOGRAM - UNEQUAL CLASS WIDTHS")+L(85,300,585,300,'stroke="'+C.ink+'" stroke-width="3"')+L(85,300,85,55,'stroke="'+C.ink+'" stroke-width="3"');
  const sets=[
   [[85,70,85],[155,120,150],[275,65,105],[340,105,175],[445,90,95]],
   [[85,100,75],[185,55,150],[240,125,90],[365,60,185],[425,130,115]],
   [[85,80,130],[165,150,80],[315,55,170],[370,95,110],[465,100,145]],
   [[85,60,95],[145,90,165],[235,140,80],[375,75,140],[450,120,100]],
   [[85,120,70],[205,55,190],[260,100,135],[360,125,85],[485,70,120]],
   [[85,75,160],[160,130,95],[290,70,145],[360,100,105],[460,115,175]]
  ][k];
  sets.forEach(([x,w,h],i)=>b+=R(x,300-h,w,h,'fill="'+(i%2?C.pale:"#fff8de")+'" stroke="'+C.blue+'" stroke-width="3"'));
  b+=T(20,190,"density",'fill="'+C.muted+'" font-size="16" font-weight="800" transform="rotate(-90 20 190)"');
  return svg(b);
 }
 if(k===0){let b=title("BAR CHART")+L(90,295,570,295,'stroke="'+C.ink+'" stroke-width="3"')+L(90,295,90,65,'stroke="'+C.ink+'" stroke-width="3"');[110,170,90,145].forEach((h,i)=>b+=R(135+i*100,295-h,55,h,'fill="'+[C.blue,C.gold,C.green,C.purple][i]+'" opacity=".85"')+T(153+i*100,325,String.fromCharCode(65+i),sm));return svg(b);}
 if(k===1)return svg(title("PICTOGRAM")+["●","●","●","●","●","●","●","●","●","●","●","●"].map((q,i)=>T(105+(i%6)*75,110+Math.floor(i/6)*70,q,'fill="'+(i<7?C.blue:C.gold)+'" font-size="36"')).join('')+T(160,295,"key: 1 symbol = 8 people",sm));
 if(k===2)return svg(title("PIE CHART")+O(320,185,120,'fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="4"')+Path('M320 185 L320 65 A120 120 0 0 1 423 247 Z','fill="#fff8de" stroke="'+C.ink+'" stroke-width="3"')+Path('M320 185 L423 247 A120 120 0 0 1 210 230 Z','fill="#edf9f4" stroke="'+C.ink+'" stroke-width="3"')+T(435,90,"sector angle",sm));
 if(k===3)return svg(title("STEM-AND-LEAF")+L(290,65,290,300,'stroke="'+C.ink+'" stroke-width="3"')+T(210,60,"stem",sm)+T(350,60,"leaf",sm)+T(230,130,"1",lab)+T(345,130,"2 5 8",lab)+T(230,190,"2",lab)+T(345,190,"1 1 4 9",lab)+T(230,250,"3",lab)+T(345,250,"1 4",lab)+T(330,320,"key: 2|4=24",sm));
 if(k===4){let b=title("LINE GRAPH")+axes();b+='<polyline points="120,235 180,255 240,190 300,215 360,120 420,155 480,80 540,110" fill="none" stroke="'+C.blue+'" stroke-width="4"/>';[["Mon",120],["Tue",180],["Wed",240],["Thu",300],["Fri",360],["Sat",420],["Sun",480]].forEach(([q,x])=>b+=T(x-14,330,q,'fill="'+C.muted+'" font-size="12" font-weight="700"'));return svg(b);}
 return svg(title("COMPARATIVE / STACKED BARS")+L(85,300,575,300,'stroke="'+C.ink+'" stroke-width="3"')+[0,1,2,3].map(i=>R(125+i*105,220-i*18,30,80+i*18,'fill="'+C.blue+'" opacity=".85"')+R(160+i*105,250-i*10,30,50+i*10,'fill="'+C.gold+'" opacity=".85"')).join('')+T(220,340,"two series",sm));
}
function functionDiagram(v=0,inverse=false,composite=false){
 const k=v%6;
 if(composite){
  if(k===0)return svg(title("COMPOSITE MAPPING")+R(25,100,155,105,'rx="32" fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+R(242,100,155,105,'rx="32" fill="#fff8de" stroke="'+C.ink+'" stroke-width="3"')+R(459,100,155,105,'rx="32" fill="#edf9f4" stroke="'+C.ink+'" stroke-width="3"')+T(80,160,"x",lab)+T(282,160,"f(x)",lab)+T(490,160,"g(f(x))",lab)+L(180,150,242,150,'stroke="'+C.blue+'" stroke-width="4"')+L(397,150,459,150,'stroke="'+C.blue+'" stroke-width="4"'));
  if(k===1)return svg(title("ORDER MATTERS")+R(70,75,220,170,'rx="20" fill="'+C.pale+'" stroke="'+C.blue+'" stroke-width="3"')+R(350,75,220,170,'rx="20" fill="#fff8de" stroke="'+C.gold+'" stroke-width="3"')+T(120,130,"f then g",lab)+T(395,130,"g then f",lab)+T(125,190,"gf(x)",'fill="'+C.blue+'" font-size="30" font-weight="900"')+T(405,190,"fg(x)",'fill="'+C.gold+'" font-size="30" font-weight="900"'));
  if(k===2)return svg(title("DOUBLE APPLICATION f(f(x))")+R(65,100,150,90,'rx="16" fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+R(245,100,150,90,'rx="16" fill="#fff8de" stroke="'+C.ink+'" stroke-width="3"')+R(425,100,150,90,'rx="16" fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+T(105,155,"x",lab)+T(285,155,"f",lab)+T(465,155,"f",lab));
  if(k===3)return svg(title("INPUT-OUTPUT TABLE FOR COMPOSITION")+table(4,4,80,65,480,220,["x","f(x)","g(f(x))","check"])+T(110,145,"2",lab)+T(235,145,"4",lab)+T(355,145,"48",lab));
  if(k===4)return svg(title("MACHINE DIAGRAM")+R(65,95,180,120,'rx="20" fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+R(395,95,180,120,'rx="20" fill="#fff8de" stroke="'+C.ink+'" stroke-width="3"')+T(115,150,"+2",lab)+T(445,150,"×3x",lab)+L(245,155,395,155,'stroke="'+C.blue+'" stroke-width="4"')+T(275,235,"output of f becomes input of g",sm));
  return svg(title("COMPOSITION WITH FRACTIONAL FUNCTION")+T(80,110,"g(x)= (x+4)/3",lab)+T(80,175,"f(x)=2x−1",lab)+L(75,220,565,220,'stroke="'+C.grey+'" stroke-width="2"')+T(125,275,"substitute the whole inner function",sm));
 }
 if(inverse){
  if(k===0){let b=title("INVERSE AS REFLECTION IN y=x")+axes();b+=L(120,300,570,55,'stroke="'+C.muted+'" stroke-width="3" stroke-dasharray="9 7"')+L(160,270,520,95,'stroke="'+C.blue+'" stroke-width="4"')+L(190,285,535,70,'stroke="'+C.red+'" stroke-width="4"');return svg(b);}
  if(k===1)return svg(title("SWAP x AND y")+R(85,90,190,135,'rx="18" fill="'+C.pale+'" stroke="'+C.blue+'" stroke-width="3"')+R(365,90,190,135,'rx="18" fill="#fff8de" stroke="'+C.gold+'" stroke-width="3"')+T(125,145,"y=3x−5",lab)+T(405,145,"x=3y−5",lab)+L(275,155,365,155,'stroke="'+C.ink+'" stroke-width="4"'));
  if(k===2)return svg(title("ONE-TO-ONE MAPPING")+R(75,75,180,220,'rx="65" fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+R(385,75,180,220,'rx="65" fill="#fff8de" stroke="'+C.ink+'" stroke-width="3"')+[0,1,2].map(i=>O(155,125+i*65,8,'fill="'+C.blue+'"')+O(465,125+i*65,8,'fill="'+C.gold+'"')+L(163,125+i*65,457,125+i*65,'stroke="'+C.ink+'" stroke-width="2"')).join(''));
  if(k===3)return svg(title("WHY x² NEEDS A RESTRICTED DOMAIN")+axes()+Path('M145 285 Q320 45 495 285','fill="none" stroke="'+C.blue+'" stroke-width="4"')+L(320,55,320,300,'stroke="'+C.red+'" stroke-width="2" stroke-dasharray="8 7"')+T(370,80,"restrict one side",sm));
  if(k===4)return svg(title("INVERSE PAIR CHECK")+R(75,95,200,130,'rx="18" fill="'+C.pale+'" stroke="'+C.blue+'" stroke-width="3"')+R(365,95,200,130,'rx="18" fill="#edf9f4" stroke="'+C.green+'" stroke-width="3"')+T(120,150,"f(x)",lab)+T(405,150,"f⁻¹(x)",lab)+T(235,290,"composition should return x",sm));
  return svg(title("FRACTIONAL INVERSE - COLLECT x TERMS")+R(80,90,480,160,'rx="20" fill="#fff" stroke="'+C.ink+'" stroke-width="3"')+T(110,145,"y(cx+d)=ax+b",lab)+T(110,205,"x(yc−a)=b−yd",lab)+T(345,285,"then divide",sm));
 }
 if(k===0)return svg(title("FUNCTION MAPPING")+R(70,65,180,235,'rx="65" fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+R(390,65,180,235,'rx="65" fill="#fff8de" stroke="'+C.ink+'" stroke-width="3"')+[0,1,2].map(i=>O(150,120+i*65,8,'fill="'+C.blue+'"')+O(470,110+i*70,8,'fill="'+C.gold+'"')+L(158,120+i*65,462,110+i*70,'stroke="'+C.ink+'" stroke-width="2"')).join(''));
 if(k===1)return svg(title("DOMAIN / RANGE")+R(75,80,220,170,'rx="18" fill="'+C.pale+'" stroke="'+C.blue+'" stroke-width="3"')+R(345,80,220,170,'rx="18" fill="#fff8de" stroke="'+C.gold+'" stroke-width="3"')+T(120,135,"domain",lab)+T(400,135,"range",lab)+T(110,200,"allowed inputs",sm)+T(380,200,"possible outputs",sm));
 if(k===2)return svg(title("FUNCTION MACHINE")+R(65,100,170,110,'rx="18" fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+R(405,100,170,110,'rx="18" fill="#edf9f4" stroke="'+C.ink+'" stroke-width="3"')+T(115,160,"input",lab)+T(450,160,"output",lab)+R(265,80,110,150,'rx="16" fill="#fff8de" stroke="'+C.gold+'" stroke-width="3"')+T(293,160,"f", 'fill="'+C.ink+'" font-size="38" font-weight="900"')+L(235,155,265,155,'stroke="'+C.blue+'" stroke-width="4"')+L(375,155,405,155,'stroke="'+C.blue+'" stroke-width="4"'));
 if(k===3)return svg(title("DOMAIN RESTRICTION FOR RECIPROCAL")+axes()+Path('M120 160 C170 155 210 140 260 90 M355 280 C405 230 455 205 570 195','fill="none" stroke="'+C.blue+'" stroke-width="4"')+L(320,45,320,300,'stroke="'+C.red+'" stroke-width="2" stroke-dasharray="8 7"')+T(330,75,"x≠4",sm));
 if(k===4)return svg(title("SQUARE-ROOT FUNCTION")+axes()+Path('M170 290 Q260 175 530 95','fill="none" stroke="'+C.green+'" stroke-width="4"')+T(175,325,"domain starts at endpoint",sm));
 return svg(title("SUBSTITUTION WITH NEGATIVE INPUT")+R(90,85,460,170,'rx="20" fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+T(125,145,"f(x)=2x²−3x+1",lab)+T(125,205,"f(−2): use brackets", 'fill="'+C.red+'" font-size="23" font-weight="900"'));
}
function venn(v=0){
 const k=v%6;
 if(k===0)return svg(title("TWO-SET VENN")+R(70,45,500,270,'fill="#fff" stroke="'+C.ink+'" stroke-width="3"')+O(270,180,105,'fill="'+C.blue+'" opacity=".16" stroke="'+C.blue+'" stroke-width="4"')+O(390,180,105,'fill="'+C.gold+'" opacity=".18" stroke="'+C.gold+'" stroke-width="4"')+T(195,90,"A",lab)+T(450,90,"B",lab));
 if(k===1)return svg(title("UNION")+R(70,45,500,270,'fill="#fff" stroke="'+C.ink+'" stroke-width="3"')+O(270,180,105,'fill="'+C.blue+'" opacity=".28" stroke="'+C.blue+'" stroke-width="4"')+O(390,180,105,'fill="'+C.blue+'" opacity=".28" stroke="'+C.blue+'" stroke-width="4"')+T(275,330,"A ∪ B",lab));
 if(k===2)return svg(title("INTERSECTION")+R(70,45,500,270,'fill="#fff" stroke="'+C.ink+'" stroke-width="3"')+O(270,180,105,'fill="none" stroke="'+C.blue+'" stroke-width="4"')+O(390,180,105,'fill="none" stroke="'+C.gold+'" stroke-width="4"')+Path('M330 95 A105 105 0 0 1 330 265 A105 105 0 0 1 330 95','fill="'+C.green+'" opacity=".35"')+T(282,330,"A ∩ B",lab));
 if(k===3)return svg(title("COMPLEMENT / OUTSIDE")+R(70,45,500,270,'fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+O(320,180,110,'fill="#fff" stroke="'+C.blue+'" stroke-width="4"')+T(155,100,"A′",lab)+T(285,185,"A",lab));
 if(k===4)return svg(title("THREE-SET VENN")+R(60,40,520,280,'fill="#fff" stroke="'+C.ink+'" stroke-width="3"')+O(270,150,90,'fill="'+C.blue+'" opacity=".13" stroke="'+C.blue+'" stroke-width="3"')+O(390,150,90,'fill="'+C.gold+'" opacity=".15" stroke="'+C.gold+'" stroke-width="3"')+O(330,235,90,'fill="'+C.green+'" opacity=".13" stroke="'+C.green+'" stroke-width="3"')+T(190,85,"A",lab)+T(455,85,"B",lab)+T(330,340,"C",lab));
 return svg(title("DE MORGAN'S LAW")+R(70,55,500,250,'fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+O(275,180,95,'fill="#fff" stroke="'+C.blue+'" stroke-width="4"')+O(385,180,95,'fill="#fff" stroke="'+C.gold+'" stroke-width="4"')+T(135,105,"shade neither set",sm)+T(210,330,"(A ∪ B)′ = A′ ∩ B′",lab));
}
function proportion(v=0){
 const k=v%6;let b;
 if(k===0){b=axes();b+=L(125,290,555,65,'stroke="'+C.blue+'" stroke-width="4"');return svg(title("DIRECT PROPORTION y ∝ x")+b);}
 if(k===1){b=axes();b+=Path('M135 285 Q250 240 330 155 T565 55','fill="none" stroke="'+C.blue+'" stroke-width="4"');return svg(title("DIRECT SQUARE PROPORTION y ∝ x²")+b);}
 if(k===2){b=axes();b+=Path('M150 65 C210 120 280 205 565 280','fill="none" stroke="'+C.red+'" stroke-width="4"');return svg(title("INVERSE PROPORTION y ∝ 1/x")+b);}
 if(k===3){b=axes();b+=Path('M135 290 Q225 130 565 85','fill="none" stroke="'+C.green+'" stroke-width="4"');return svg(title("SQUARE-ROOT PROPORTION y ∝ √x")+b);}
 if(k===4)return svg(title("FIND THE CONSTANT k")+R(70,85,500,160,'rx="20" fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+T(115,140,"y = kx²",lab)+T(115,200,"known pair → substitute → find k",sm)+T(410,175,"k", 'fill="'+C.blue+'" font-size="50" font-weight="900"'));
 return svg(title("PROPORTION TABLE")+table(4,4,85,65,470,220,["x","x²","k","y"])+T(110,145,"3",lab)+T(230,145,"9",lab)+T(350,145,"5",lab)+T(470,145,"45",lab));
}

function lessonVisual(id,type,v=0){
 switch(type){
  case "surds": return v%2===0?factorTree(v):surdGeom(v);
  case "rationalise": return conjugate(v);
  case "algfrac-simplify": return algebraFraction(v,false);
  case "algfrac-four": return algebraFraction(v,true);
  case "forming": return forming(v);
  case "linear": return v%2===0?balance(v):forming(v+2);
  case "quadratic": return quadratic(v);
  case "fractional-eq": return fracEquation(v);
  case "simultaneous-linear": return simultaneous(v,false);
  case "simultaneous-nonlinear": return simultaneous(v,true);
  case "rearrange": return rearrange(v);
  case "ineq-numberline": return numberLine(v);
  case "ineq-linear": return v%2===0?numberLine(v+1):inequalityGraph(v,false);
  case "ineq-graph": return inequalityGraph(v,false);
  case "ineq-region": return inequalityGraph(v,true);
  case "angles": return angle(v,false,false);
  case "parallel": return angle(v,true,false);
  case "polygons": return angle(v,false,true);
  case "symmetry2d": return symmetry(v,false);
  case "symmetry3d": return symmetry(v,true);
  case "units": return units(v);
  case "area": return mensuration(v,false,false);
  case "circle": return mensuration(v,true,false);
  case "sector": return mensuration(v,false,true);
  case "tables": return statTable(v,false,false);
  case "averages": return statTable(v,true,false);
  case "grouped-mean": return statTable(v,false,true);
  case "modalclass": return statTable(v+2,false,true);
  case "data-interpret": return v%2===0?statTable(v,false,false):compareData(v,false);
  case "data-compare": return compareData(v,false);
  case "data-limits": return compareData(v,true);
  case "charts": return chart(v,false,false,false,false);
  case "scatter": return chart(v,true,false,false,false);
  case "correlation": return chart(v,true,false,false,false);
  case "bestfit": return chart(v,true,true,false,false);
  case "cumfreq": return chart(v,false,false,true,false);
  case "cumfreq-read": return chart(v+1,false,false,true,false);
  case "histogram": return chart(v,false,false,false,true);
  case "freqdensity": return chart(v+1,false,false,false,true);
  case "chart-infer": return chart(v,false,false,false,false);
  case "graph-compare": return v%2===0?chart(v,false,false,true,false):chart(v,false,false,false,true);
  case "graph-limits": return compareData(v,true);
  case "functions": return functionDiagram(v,false,false);
  case "inverse": return functionDiagram(v,true,false);
  case "composite": return functionDiagram(v,false,true);
  case "sets": return venn(v);
  case "proportion": return proportion(v);
  default: return "";
 }
}
window.MathoraDiagrams={
 supports(type){return !!type;},
 example(id,type,variant=0){return lessonVisual(id,type,variant);},
 lesson(type,variant=0){return lessonVisual("",type,variant);},
 practice(id,type,variant=0){return lessonVisual(id,type,variant+2);}
};
})();