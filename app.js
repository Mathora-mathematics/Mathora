const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
let current=0, tab="learn";

const esc=s=>String(s);
const ex=(q,steps)=>({q,steps});
const hw=(tier,q,sol)=>({tier,q,sol});

function bank(t){
 const B={};
 if(t==="surds") return {
  examples:[
   ex("\\(\\sqrt{72}\\)",["Find the largest square factor: \\(72=36\\times2\\).","\\(\\sqrt{72}=\\sqrt{36}\\sqrt2=6\\sqrt2\\).","The answer is exact; do not convert to a decimal."]),
   ex("\\(3\\sqrt{12}+2\\sqrt{27}\\)",["Simplify each surd: \\(\\sqrt{12}=2\\sqrt3\\), \\(\\sqrt{27}=3\\sqrt3\\).","So \\(3(2\\sqrt3)+2(3\\sqrt3)=6\\sqrt3+6\\sqrt3\\).","Combine like surds: \\(12\\sqrt3\\)."]),
   ex("\\(\\dfrac{\\sqrt{48}}{\\sqrt3}\\)",["Use \\(\\sqrt a/\\sqrt b=\\sqrt{a/b}\\).","\\(\\sqrt{48/3}=\\sqrt{16}=4\\).","Check that both roots were positive."])
  ],
  practice:{foundation:["Simplify \\(\\sqrt{20}\\).","Simplify \\(\\sqrt{45}\\).","Simplify \\(2\\sqrt8+\\sqrt{18}\\)."],core:["Simplify \\(\\sqrt{108}\\).","Simplify \\(5\\sqrt{12}-\\sqrt{75}\\).","Simplify \\(\\sqrt{24}\\times\\sqrt6\\)."],extension:["Simplify \\(3\\sqrt{50}-2\\sqrt8+\\sqrt{98}\\).","Show that \\(\\sqrt{12}\\sqrt{27}=18\\).","Given \\(a\\sqrt3=\\sqrt{192}\\), find \\(a\\)."]},
  homework:[hw("Foundation","Simplify \\(\\sqrt{63}\\).",["\\(63=9\\times7\\).","\\(\\sqrt{63}=3\\sqrt7\\)."]),hw("Core","Simplify \\(4\\sqrt{18}-\\sqrt8\\).",["\\(18=9\\times2\\), so \\(\\sqrt{18}=3\\sqrt2\\).","\\(\\sqrt8=2\\sqrt2\\).","\\(4(3\\sqrt2)-2\\sqrt2=10\\sqrt2\\)."]),hw("Extension","Simplify \\(\\sqrt{54}\\times\\sqrt{24}\\).",["Combine first: \\(\\sqrt{1296}\\).","\\(1296=36^2\\), so the value is \\(36\\)."])]
 };
 if(t==="rationalise") return {
  examples:[
   ex("\\(\\dfrac{5}{\\sqrt3}\\)",["Multiply top and bottom by \\(\\sqrt3\\).","\\(\\dfrac{5}{\\sqrt3}\\times\\dfrac{\\sqrt3}{\\sqrt3}=\\dfrac{5\\sqrt3}{3}\\)."]),
   ex("\\(\\dfrac{4}{2+\\sqrt5}\\)",["Use the conjugate \\(2-\\sqrt5\\).","Denominator: \\((2+\\sqrt5)(2-\\sqrt5)=4-5=-1\\).","Numerator: \\(4(2-\\sqrt5)=8-4\\sqrt5\\).","So the result is \\(4\\sqrt5-8\\)."]),
   ex("\\(\\dfrac{3}{\\sqrt7-\\sqrt2}\\)",["Multiply by \\((\\sqrt7+\\sqrt2)/(\\sqrt7+\\sqrt2)\\).","Denominator becomes \\(7-2=5\\).","Answer: \\(\\dfrac{3\\sqrt7+3\\sqrt2}{5}\\)."])
  ],
  practice:{foundation:["Rationalise \\(3/\\sqrt2\\).","Rationalise \\(7/\\sqrt5\\).","Rationalise \\(2/(1+\\sqrt3)\\)."],core:["Rationalise \\(5/(3+\\sqrt2)\\).","Rationalise \\(4/(\\sqrt6-1)\\).","Rationalise and simplify \\(\\sqrt3/(2+\\sqrt3)\\)."],extension:["Rationalise \\(6/(\\sqrt7+\\sqrt5)\\).","Show \\(1/(\\sqrt3-1)=(\\sqrt3+1)/2\\).","Simplify \\((2+\\sqrt3)/(2-\\sqrt3)\\)."]},
  homework:[hw("Foundation","Rationalise \\(6/\\sqrt5\\).",["Multiply by \\(\\sqrt5/\\sqrt5\\).","Result \\(6\\sqrt5/5\\)."]),hw("Core","Rationalise \\(3/(4-\\sqrt7)\\).",["Use conjugate \\(4+\\sqrt7\\).","Denominator \\(16-7=9\\).","Numerator \\(12+3\\sqrt7\\).","Simplify to \\((4+\\sqrt7)/3\\)."]),hw("Extension","Rationalise \\(2/(\\sqrt5-\\sqrt3)\\).",["Use conjugate \\(\\sqrt5+\\sqrt3\\).","Denominator \\(5-3=2\\).","Cancel the 2 to get \\(\\sqrt5+\\sqrt3\\)."])]
 };
 if(t==="algfrac-simplify") return {
  examples:[
   ex("\\(\\dfrac{6x^2}{9x}\\)",["Factor common parts: \\(6/9=2/3\\) and \\(x^2/x=x\\).","Result \\(\\dfrac{2x}{3}\\), with \\(x\\ne0\\)."]),
   ex("\\(\\dfrac{x^2-9}{x^2+5x+6}\\)",["Factor: \\(x^2-9=(x-3)(x+3)\\).","Factor denominator: \\((x+2)(x+3)\\).","Cancel \\((x+3)\\): \\(\\dfrac{x-3}{x+2}\\)."]),
   ex("\\(\\dfrac{2x^2-8}{x^2-x-6}\\)",["Factor numerator: \\(2(x-2)(x+2)\\).","Factor denominator: \\((x-3)(x+2)\\).","Cancel \\((x+2)\\): \\(\\dfrac{2(x-2)}{x-3}\\)."])
  ],
  practice:{foundation:["Simplify \\(8x/12\\).","Simplify \\((x^2-16)/(x+4)\\).","Simplify \\((x^2+5x)/(x)\\)."],core:["Simplify \\((x^2-25)/(x^2+3x-10)\\).","Simplify \\((2x^2+8x)/(x^2+6x+8)\\).","Simplify \\((x^2-x-12)/(x^2-16)\\)."],extension:["Simplify \\((3x^2-27)/(x^2-x-6)\\).","Find excluded values before simplifying \\((x^2-4)/(x^2+x-6)\\).","Explain why cancellation across addition is invalid."]},
  homework:[hw("Foundation","Simplify \\((x^2-4)/(x+2)\\).",["Factor \\(x^2-4=(x-2)(x+2)\\).","Cancel \\((x+2)\\).","Answer \\(x-2\\), where \\(x\\ne-2\\)."]),hw("Core","Simplify \\((x^2+7x+12)/(x^2+5x+4)\\).",["Factor top \\((x+3)(x+4)\\).","Factor bottom \\((x+1)(x+4)\\).","Cancel \\((x+4)\\): \\((x+3)/(x+1)\\)."]),hw("Extension","Simplify \\((2x^2-18)/(x^2+2x-3)\\).",["Top \\(=2(x-3)(x+3)\\).","Bottom \\(=(x+3)(x-1)\\).","Cancel to get \\(2(x-3)/(x-1)\\)."])]
 };
 if(t==="algfrac-four") return {
  examples:[
   ex("\\(\\dfrac2x+\\dfrac3x\\)",["Same denominator, so add numerators.","\\(\\dfrac{2+3}{x}=\\dfrac5x\\)."]),
   ex("\\(\\dfrac1x+\\dfrac2{x+1}\\)",["Common denominator \\(x(x+1)\\).","Rewrite: \\(\\dfrac{x+1}{x(x+1)}+\\dfrac{2x}{x(x+1)}\\).","Answer \\(\\dfrac{3x+1}{x(x+1)}\\)."]),
   ex("\\(\\dfrac{x}{x-2}\\div\\dfrac{2x}{x+3}\\)",["Change division to multiplication by the reciprocal.","\\(\\dfrac{x}{x-2}\\times\\dfrac{x+3}{2x}\\).","Cancel \\(x\\): \\(\\dfrac{x+3}{2(x-2)}\\)."])
  ],
  practice:{foundation:["\\(3/x+4/x\\)","\\(5/a-2/a\\)","\\((2x/3)\\times(9/x)\\)"],core:["\\(1/x+1/(x+2)\\)","\\(3/(x-1)-1/(x+1)\\)","\\((x/4)\\div(2x/3)\\)"],extension:["\\(2/x+3/(x-2)\\)","\\((x+1)/(x-1))\\times((x^2-1)/(x+2))\\)","Simplify \\(1/(x+1)-1/(x-1)\\)."]},
  homework:[hw("Foundation","Simplify \\(4/x+7/x\\).",["Same denominator.","Add numerators: \\(11/x\\)."]),hw("Core","Simplify \\(1/x+3/(x+2)\\).",["LCD \\(x(x+2)\\).","Numerator \\(x+2+3x=4x+2\\).","Answer \\((4x+2)/(x(x+2))\\)."]),hw("Extension","Simplify \\(2/(x-1)-1/(x+1)\\).",["LCD \\((x-1)(x+1)\\).","Numerator \\(2(x+1)-(x-1)=x+3\\).","Answer \\((x+3)/(x^2-1)\\)."])]
 };
 if(t==="forming") return {
  examples:[
   ex("A number \\(n\\) is increased by 7 and then doubled. Form an expression.",["Increase first: \\(n+7\\).","Double the whole result: \\(2(n+7)\\)."]),
   ex("Two consecutive even numbers have product 168. Form an equation.",["Let the first even number be \\(2n\\).","The next consecutive even number is \\(2n+2\\).","Equation: \\(2n(2n+2)=168\\)."]),
   ex("A rectangle has length \\(x+4\\) and width \\(x-1\\). Its area is 66. Form a quadratic equation in standard form.",["Area gives \\((x+4)(x-1)=66\\).","Expand: \\(x^2+3x-4=66\\).","Standard form: \\(x^2+3x-70=0\\)."])
  ],
  practice:{foundation:["Write an expression for 5 more than \\(x\\).","Write an expression for three times \\(y-2\\).","Form an equation: a number plus 9 is 23."],core:["Form an equation for two consecutive integers with sum 41.","A rectangle has sides \\(x\\) and \\(x+3\\), area 70. Form an equation.","Write a formula for total cost \\(C\\) of \\(n\\) tickets at KD 2.5 plus KD 1 booking fee."],extension:["Form a quadratic equation for consecutive odd numbers with product 143.","A right triangle has legs \\(x\\) and \\(x+2\\), hypotenuse 10. Form an equation.","Create a formula connecting distance \\(d\\), speed \\(v\\), and time \\(t\\), then make \\(v\\) the subject."]},
  homework:[hw("Foundation","A number \\(x\\) is multiplied by 4 then decreased by 3. Write an expression.",["Multiply first: \\(4x\\).","Decrease by 3: \\(4x-3\\)."]),hw("Core","The sum of consecutive integers is 55. Form an equation.",["Let first integer be \\(n\\), next \\(n+1\\).","Equation \\(n+(n+1)=55\\)."]),hw("Extension","A rectangle has perimeter 34, length \\(x+5\\), width \\(x-2\\). Form and simplify an equation.",["Perimeter \\(2L+2W=34\\).","\\(2(x+5)+2(x-2)=34\\).","Simplify: \\(4x+6=34\\)."])]
 };
 if(t==="linear") return {
  examples:[ex("\\(3x+4=19\\)",["Subtract 4: \\(3x=15\\).","Divide by 3: \\(x=5\\)."]),ex("\\(5-2x=3x+20\\)",["Subtract \\(3x\\): \\(5-5x=20\\).","Subtract 5: \\(-5x=15\\).","Divide by \\(-5\\): \\(x=-3\\)."]),ex("\\(4(x-2)=2(x+5)+6\\)",["Expand: \\(4x-8=2x+16\\).","Subtract \\(2x\\): \\(2x-8=16\\).","Add 8, then divide by 2: \\(x=12\\)."])],
  practice:{foundation:["\\(x+7=15\\)","\\(4x=28\\)","\\(3x-5=16\\)"],core:["\\(5x+2=2x+20\\)","\\(3(x+4)=24\\)","\\(7-2x=x+16\\)"],extension:["\\(4(2x-1)=3(x+6)+x\\)","Form and solve: three consecutive integers sum to 72.","A taxi charges KD 1.5 plus KD 0.4 per km; total KD 8.7. Find the distance."]},
  homework:[hw("Foundation","Solve \\(6x-7=29\\).",["Add 7: \\(6x=36\\).","Divide by 6: \\(x=6\\)."]),hw("Core","Solve \\(4x+5=7x-10\\).",["Subtract \\(4x\\): \\(5=3x-10\\).","Add 10: \\(15=3x\\).","\\(x=5\\)."]),hw("Extension","Solve \\(3(2x+1)-5=2(x+8)\\).",["Expand: \\(6x+3-5=2x+16\\).","\\(6x-2=2x+16\\).","\\(4x=18\\), so \\(x=9/2\\)."])]
 };
 if(t==="quadratic") return {
  examples:[ex("\\(x^2+5x+6=0\\)",["Factor: \\((x+2)(x+3)=0\\).","So \\(x=-2\\) or \\(x=-3\\)."]),ex("\\(x^2+6x+2=0\\) by completing the square",["\\(x^2+6x+2=(x+3)^2-9+2\\).","So \\((x+3)^2=7\\).","\\(x=-3\\pm\\sqrt7\\)."]),ex("\\(2x^2-3x-4=0\\) using the formula",["Here \\(a=2,b=-3,c=-4\\).","\\(x=\\dfrac{-b\\pm\\sqrt{b^2-4ac}}{2a}=\\dfrac{3\\pm\\sqrt{9+32}}4\\).","\\(x=\\dfrac{3\\pm\\sqrt{41}}4\\)."])],
  practice:{foundation:["Solve \\(x^2+7x+12=0\\).","Solve \\(x^2-9=0\\).","Solve \\(x^2-2x-15=0\\)."],core:["Solve \\(x^2+4x-1=0\\) by completing the square.","Solve \\(3x^2+x-2=0\\).","Solve \\(2x^2+5x-1=0\\) using the formula."],extension:["Solve \\(x^2-8x+3=0\\) exactly.","A rectangle has area 60 and sides \\(x+2\\), \\(x+5\\). Find \\(x\\).","Show that \\(x^2+2x+5=0\\) has no real roots."]},
  homework:[hw("Foundation","Solve \\(x^2+x-12=0\\).",["Factor to \\((x+4)(x-3)=0\\).","So \\(x=-4\\) or \\(3\\)."]),hw("Core","Solve \\(x^2+8x+7=0\\) by completing the square.",["\\((x+4)^2-16+7=0\\).","\\((x+4)^2=9\\).","\\(x=-1\\) or \\(x=-7\\)."]),hw("Extension","Solve \\(2x^2+x-5=0\\) exactly.",["Use formula with \\(a=2,b=1,c=-5\\).","Discriminant \\(1+40=41\\).","\\(x=(-1\\pm\\sqrt{41})/4\\)."])]
 };
 if(t==="fractional-eq") return {
  examples:[ex("\\(x/3+2=7\\)",["Multiply by 3 or isolate first.","\\(x/3=5\\).","\\(x=15\\)."]),ex("\\(2/(x+1)=3/5\\)",["Cross-multiply: \\(10=3(x+1)\\).","\\(10=3x+3\\), so \\(x=7/3\\)."]),ex("\\(1/x+1/(x+2)=3/4\\)",["LCD is \\(4x(x+2)\\).","Multiply through: \\(4(x+2)+4x=3x(x+2)\\).","Rearrange: \\(3x^2-2x-8=0\\).","Factor: \\((3x+4)(x-2)=0\\), giving \\(x=2\\) or \\(-4/3\\)."])],
  practice:{foundation:["Solve \\(x/5=4\\).","Solve \\(3/(x+2)=1\\).","Solve \\(x/4+1=6\\)."],core:["Solve \\(2/(x-1)=5/3\\).","Solve \\(1/x+1/2=1\\).","Solve \\(3/(x+1)-1/(x-1)=0\\)."],extension:["Solve \\(1/x+2/(x+1)=2\\).","Solve \\(4/(x-2)=x\\).","State restrictions before solving \\(2/(x+3)=1/(x-1)\\)."]},
  homework:[hw("Foundation","Solve \\(x/6+2=5\\).",["\\(x/6=3\\).","\\(x=18\\)."]),hw("Core","Solve \\(3/(x+2)=2/5\\).",["Cross multiply \\(15=2(x+2)\\).","\\(15=2x+4\\).","\\(x=11/2\\)."]),hw("Extension","Solve \\(1/x+1/(x+1)=1\\).",["Multiply by \\(x(x+1)\\): \\(x+1+x=x(x+1)\\).","\\(x^2-x-1=0\\).","\\(x=(1\\pm\\sqrt5)/2\\)."])]
 };
 if(t==="simultaneous-linear") return {
  examples:[ex("\\(x+y=9,\\ x-y=3\\)",["Add the equations: \\(2x=12\\).","So \\(x=6\\).","Substitute: \\(y=3\\)."]),ex("\\(2x+3y=13,\\ 4x-y=5\\)",["Multiply second equation by 3: \\(12x-3y=15\\).","Add: \\(14x=28\\), so \\(x=2\\).","Then \\(8-y=5\\), so \\(y=3\\)."]),ex("2 adult + 3 child tickets cost 21; 1 adult + 2 child tickets cost 13.",["Let adult \\(=a\\), child \\(=c\\).","Equations: \\(2a+3c=21\\), \\(a+2c=13\\).","Double second: \\(2a+4c=26\\). Subtract first: \\(c=5\\).","Then \\(a+10=13\\), so \\(a=3\\)."])],
  practice:{foundation:["Solve \\(x+y=7, x-y=1\\).","Solve \\(x+y=12, 2x+y=17\\).","Solve \\(2x+y=8, x-y=1\\)."],core:["Solve \\(3x+2y=16, x-y=2\\).","Solve \\(2x+5y=1, 3x-y=11\\).","Form and solve a two-price ticket problem."],extension:["Solve \\(4x-3y=19, 5x+2y=4\\).","Find the intersection of \\(y=2x+1\\) and \\(y=10-x\\).","Create a system whose solution is \\((3,-2)\\)."]},
  homework:[hw("Foundation","Solve \\(x+y=10, x-y=4\\).",["Add: \\(2x=14\\), so \\(x=7\\).","Then \\(y=3\\)."]),hw("Core","Solve \\(2x+3y=12, x+y=5\\).",["Double second: \\(2x+2y=10\\).","Subtract: \\(y=2\\).","Then \\(x=3\\)."]),hw("Extension","Solve \\(3x-2y=7, 4x+3y=1\\).",["Multiply first by 3 and second by 2: \\(9x-6y=21\\), \\(8x+6y=2\\).","Add: \\(17x=23\\), so \\(x=23/17\\).","Substitute to get \\(y=-25/17\\)."])]
 };
 if(t==="simultaneous-nonlinear") return {
  examples:[ex("\\(y=x+1,\\ y=x^2-5\\)",["Set expressions equal: \\(x+1=x^2-5\\).","\\(x^2-x-6=0=(x-3)(x+2)\\).","So \\(x=3,-2\\).","Then \\(y=4,-1\\)."]),ex("\\(y=6-x,\\ x^2+y^2=20\\)",["Substitute \\(y=6-x\\).","\\(x^2+(6-x)^2=20\\).","\\(2x^2-12x+16=0\\Rightarrow x^2-6x+8=0\\).","\\(x=2,4\\), hence \\(y=4,2\\)."]),ex("\\(y=2x-1,\\ xy=6\\)",["Substitute: \\(x(2x-1)=6\\).","\\(2x^2-x-6=0=(2x+3)(x-2)\\).","Pairs: \\((2,3)\\) and \\((-3/2,-4)\\)."])],
  practice:{foundation:["Solve \\(y=x, y=x^2-2\\).","Solve \\(y=x+2, xy=3\\).","Solve \\(y=4-x, x^2+y^2=10\\)."],core:["Solve \\(y=2x+3, y=x^2+1\\).","Solve \\(y=5-x, xy=4\\).","Solve \\(y=x-1, x^2+y^2=13\\)."],extension:["Find intersections of \\(y=x^2-4x+1\\) and \\(y=x-5\\).","Solve \\(x+y=7, xy=10\\).","Explain why a line and circle can have 0, 1 or 2 intersections."]},
  homework:[hw("Foundation","Solve \\(y=x+1, y=x^2-1\\).",["\\(x+1=x^2-1\\).","\\(x^2-x-2=0=(x-2)(x+1)\\).","Pairs \\((2,3)\\), \\((-1,0)\\)."]),hw("Core","Solve \\(y=5-x, xy=6\\).",["\\(x(5-x)=6\\).","\\(x^2-5x+6=0\\).","\\(x=2,3\\), giving pairs \\((2,3)\\), \\((3,2)\\)."]),hw("Extension","Solve \\(y=2x, x^2+y^2=45\\).",["Substitute \\(y=2x\\): \\(x^2+4x^2=45\\).","\\(5x^2=45\\), so \\(x=\\pm3\\).","Pairs \\((3,6),(-3,-6)\\)."])]
 };
 if(t==="rearrange") return {
  examples:[ex("\\(y=3x+7\\), make \\(x\\) the subject",["Subtract 7: \\(y-7=3x\\).","Divide by 3: \\(x=(y-7)/3\\)."]),ex("\\(A=\\pi r^2\\), make \\(r\\) the subject",["Divide by \\(\\pi\\): \\(r^2=A/\\pi\\).","Take the positive square root for a radius: \\(r=\\sqrt{A/\\pi}\\)."]),ex("\\(P=ax+bx\\), make \\(x\\) the subject",["Factor \\(x\\): \\(P=x(a+b)\\).","Divide: \\(x=P/(a+b)\\)."])],
  practice:{foundation:["Make \\(x\\) subject: \\(y=x+4\\).","Make \\(t\\) subject: \\(d=vt\\).","Make \\(r\\) subject: \\(C=2\\pi r\\)."],core:["Make \\(x\\) subject: \\(y=(x+3)/5\\).","Make \\(h\\) subject: \\(A=bh/2\\).","Make \\(x\\) subject: \\(p=qx+rx\\)."],extension:["Make \\(x\\) subject: \\(y=(ax+b)/(cx+d)\\).","Make \\(r\\) subject: \\(V=4\\pi r^3/3\\).","Make \\(x\\) subject: \\(a=\\sqrt{(x-b)/c}\\)."]},
  homework:[hw("Foundation","Make \\(x\\) subject: \\(y=5x-2\\).",["Add 2: \\(y+2=5x\\).","\\(x=(y+2)/5\\)."]),hw("Core","Make \\(h\\) subject: \\(V=\\pi r^2h\\).",["Divide by \\(\\pi r^2\\).","\\(h=V/(\\pi r^2)\\)."]),hw("Extension","Make \\(x\\) subject: \\(y=(x-1)/(x+2)\\).",["\\(y(x+2)=x-1\\).","\\(yx+2y=x-1\\).","\\(x(y-1)=-(1+2y)\\).","\\(x=(1+2y)/(1-y)\\)."])]
 };
 if(["ineq-numberline","ineq-linear","ineq-graph","ineq-region"].includes(t)){
  const base={
   examples:[
    ex("\\(x>3\\)",["Use an open circle at 3 because 3 is not included.","Shade to the right because values are greater than 3."]),
    ex("\\(5-2x\\le 11\\)",["Subtract 5: \\(-2x\\le6\\).","Divide by \\(-2\\) and reverse the sign: \\(x\\ge-3\\)."]),
    ex("Shade the region \\(y<2x+1\\)",["Draw the boundary \\(y=2x+1\\).","Use a dashed line because equality is not included.","Test \\((0,0)\\): \\(0<1\\) is true, so shade the side containing the origin."])
   ],
   practice:{foundation:["Draw \\(x\\le4\\) on a number line.","Solve \\(x+3>8\\).","Solve \\(3x\\le15\\)."],core:["Solve \\(7-2x<1\\).","Solve \\(-4\\le2x+2<10\\).","Graph \\(y\\ge x-2\\)."],extension:["Solve \\(3x+1>5x-7\\).","Describe the region above \\(y=x+1\\) and below \\(y=5\\).","List inequalities for a triangular region bounded by \\(x=0,y=0,x+y=6\\)."]},
   homework:[hw("Foundation","Solve \\(2x-5\\ge9\\).",["Add 5: \\(2x\\ge14\\).","Divide by 2: \\(x\\ge7\\)."]),hw("Core","Solve \\(-3x<12\\).",["Divide by \\(-3\\).","Reverse the inequality: \\(x>-4\\)."]),hw("Extension","Graph \\(y< -x+4\\) and state whether \\((1,1)\\) lies in the region.",["Boundary is dashed: \\(y=-x+4\\).","Test \\((1,1)\\): \\(1<3\\), true.","So \\((1,1)\\) lies in the shaded region."])]
  }; return base;
 }
 if(["angles","parallel","polygons","symmetry2d","symmetry3d"].includes(t)){
  return {
   examples:[
    ex("Angles on a straight line are \\(3x+10\\)° and \\(5x+2\\)°. Find \\(x\\).",["Angles on a straight line sum to \\(180°\\).","\\(3x+10+5x+2=180\\).","\\(8x=168\\), so \\(x=21\\)."]),
    ex("Two parallel lines are cut by a transversal. An alternate angle is \\(68°\\). Find the matching alternate angle.",["Alternate angles between parallel lines are equal.","Therefore the required angle is \\(68°\\)."]),
    ex("Find each interior angle of a regular decagon.",["Interior angle sum \\(=(10-2)180=1440°\\).","Divide by 10: \\(144°\\)."])
   ],
   practice:{foundation:["Find the missing angle in a triangle with angles 48° and 67°.","Find the vertically opposite angle to 123°.","How many lines of symmetry does a square have?"],core:["Find an exterior angle of a regular nonagon.","A regular polygon has exterior angle 24°. Find its number of sides.","State the rotational symmetry order of a regular hexagon."],extension:["Two regular polygons meet at a point. Their interior angles are 120° and 135°. Find the remaining angle.","A regular polygon has interior angle 156°. Find its number of sides.","Explain the planes of symmetry of a regular triangular prism."]},
   homework:[hw("Foundation","Find the third angle of a triangle with 35° and 79°.",["Triangle sum is 180°.","\\(180-35-79=66°\\)."]),hw("Core","Find each exterior angle of a regular 15-gon.",["Exterior angles total 360°.","\\(360/15=24°\\)."]),hw("Extension","A regular polygon has interior angle 165°. Find the number of sides.",["Exterior angle \\(=180-165=15°\\).","Number of sides \\(=360/15=24\\)."])]
  };
 }
 if(["units","area","circle","sector"].includes(t)){
  return {
   examples:[
    ex("Convert \\(3.6\\text{ m}^2\\) to \\(\\text{cm}^2\\).",["\\(1\\text{ m}=100\\text{ cm}\\).","For area, square the scale factor: \\(1\\text{ m}^2=10,000\\text{ cm}^2\\).","\\(3.6\\times10,000=36,000\\text{ cm}^2\\)."]),
    ex("A trapezium has parallel sides 8 cm and 13 cm, height 6 cm. Find its area.",["Use \\(A=\\tfrac12(a+b)h\\).","\\(A=\\tfrac12(8+13)6=63\\text{ cm}^2\\)."]),
    ex("A sector has radius 9 cm and angle 80°. Find its area.",["Full circle area is \\(\\pi r^2=81\\pi\\).","Sector fraction \\(80/360=2/9\\).","Area \\(=18\\pi\\text{ cm}^2\\approx56.5\\text{ cm}^2\\)."])
   ],
   practice:{foundation:["Convert 2.4 m to cm.","Find area of a triangle, base 12 cm, height 7 cm.","Find circumference of radius 5 cm."],core:["Convert 0.45 m² to cm².","Find area of a trapezium with parallel sides 7 and 11, height 5.","Find arc length for radius 8, angle 135°."],extension:["Convert 2.3 m³ to litres.","A sector area is 30π cm² with radius 10 cm. Find the angle.","A compound shape consists of a rectangle and semicircle; create an expression for total area."]},
   homework:[hw("Foundation","Convert \\(4.2\\text{ km}\\) to metres.",["Multiply by 1000.","\\(4.2\\times1000=4200\\text{ m}\\)."]),hw("Core","Find the area of a circle of diameter 14 cm.",["Radius is 7 cm.","Area \\(=\\pi(7)^2=49\\pi\\approx153.9\\text{ cm}^2\\)."]),hw("Extension","Find the arc length of radius 12 cm, angle 150°.",["Fraction \\(150/360=5/12\\).","Circumference \\(=24\\pi\\).","Arc \\(=(5/12)(24\\pi)=10\\pi\\text{ cm}\\)."])]
  };
 }
 if(["tables","averages","grouped-mean","modalclass","data-interpret","data-compare","data-limits"].includes(t)){
  return {
   examples:[
    ex("Data: 4, 6, 6, 7, 9, 12. Find mean, median, mode and range.",["Mean \\(=(4+6+6+7+9+12)/6=44/6\\approx7.33\\).","Median is halfway between 6 and 7: \\(6.5\\).","Mode is 6; range \\(=12-4=8\\)."]),
    ex("Grouped data: 0–10: 3, 10–20: 7, 20–30: 5. Estimate the mean.",["Use midpoints 5, 15, 25.","\\(\\sum fx=3(5)+7(15)+5(25)=245\\).","Total frequency 15.","Estimated mean \\(=245/15\\approx16.3\\)."]),
    ex("Class A: median 68, IQR 12. Class B: median 72, IQR 20. Compare.",["Class B has the higher typical value because its median is larger.","Class A is more consistent because its IQR is smaller.","Both statements must mention the actual statistics."])
   ],
   practice:{foundation:["Find the mode of 2,3,3,4,5.","Find the range of 8,11,15,19.","Complete a frequency total: 4,7,?,6 with total 25."],core:["Find Q1, median, Q3 for 2,4,5,6,8,9,11,14.","Estimate mean for classes 0–5,5–10,10–15 with frequencies 2,6,4.","Compare two groups with medians 14,16 and IQRs 3,7."],extension:["Explain when median is preferable to mean.","Design two different data sets with same mean but different ranges.","Explain one limitation of drawing a population conclusion from a small convenience sample."]},
   homework:[hw("Foundation","Find mean of 5,7,7,8,13.",["Total \\(=40\\).","There are 5 values.","Mean \\(=8\\)."]),hw("Core","Classes 0–10,10–20,20–30 have frequencies 4,8,3. Estimate mean.",["Midpoints 5,15,25.","\\(\\sum fx=20+120+75=215\\).","Total 15, so estimate \\(215/15=14.3\\)."]),hw("Extension","Group X has median 24, IQR 5; Group Y median 22, IQR 3. Compare.",["X has higher typical values (median 24 vs 22).","Y is more consistent (IQR 3 vs 5).","No stronger claim is justified without more information."])]
  };
 }
 if(["charts","scatter","correlation","bestfit","cumfreq","cumfreq-read","histogram","freqdensity","chart-infer","graph-compare","graph-limits"].includes(t)){
  return {
   examples:[
    ex("A class interval 20–30 has frequency 18. Find frequency density.",["Class width \\(=10\\).","Frequency density \\(=18/10=1.8\\)."]),
    ex("A cumulative frequency curve represents 80 values. Where do you read the median?",["Median position is \\(80/2=40\\).","From cumulative frequency 40, move horizontally to the curve, then vertically to the x-axis.","That x-value estimates the median."]),
    ex("A scatter graph trends downward from left to right.",["This indicates negative correlation.","As one variable increases, the other tends to decrease.","This is an association; it does not by itself prove causation."])
   ],
   practice:{foundation:["State the correlation of an upward scatter pattern.","Find density when frequency 12 and width 4.","For 60 values, state the median cumulative frequency position."],core:["Find frequency from density 2.4 and width 5.","For 100 values, state positions of Q1 and Q3.","Explain how to draw a line of best fit."],extension:["A histogram bar has area 36 and width 8. Find density and frequency.","Explain why extrapolating far beyond a scatter data range is risky.","Compare two cumulative frequency curves using median and IQR."]},
   homework:[hw("Foundation","Frequency 15, class width 5. Find density.",["\\(15/5=3\\)."]),hw("Core","Density 1.6, width 10. Find frequency.",["Frequency = density × width.","\\(1.6\\times10=16\\)."]),hw("Extension","A data set has 120 values. State cumulative-frequency positions of Q1, median and Q3.",["Q1: \\(120/4=30\\).","Median: \\(120/2=60\\).","Q3: \\(3(120)/4=90\\)."])]
  };
 }
 if(["functions","inverse","composite"].includes(t)){
  return {
   examples:[
    ex("Given \\(f(x)=3x-2\\), find \\(f(5)\\).",["Substitute \\(x=5\\).","\\(f(5)=15-2=13\\)."]),
    ex("Find the inverse of \\(f(x)=2x+7\\).",["Write \\(y=2x+7\\).","Swap x and y: \\(x=2y+7\\).","Rearrange: \\(y=(x-7)/2\\).","So \\(f^{-1}(x)=(x-7)/2\\)."]),
    ex("Given \\(f(x)=2x+1\\), \\(g(x)=x^2\\), find \\(gf(x)\\).",["\\(gf(x)=g(f(x))\\).","Substitute \\(2x+1\\) into \\(g\\): \\(gf(x)=(2x+1)^2\\)."])
   ],
   practice:{foundation:["If \\(f(x)=x+4\\), find \\(f(7)\\).","If \\(g(x)=2x\\), find \\(g(-3)\\).","Find range of \\(f(x)=x^2\\) for domain {-2,-1,0,1,2}."],core:["Find inverse of \\(f(x)=3x-5\\).","Given \\(f(x)=x+1,g(x)=2x\\), find \\(gf(4)\\).","Form \\(fg(x)\\) for \\(f(x)=x^2,g(x)=x-3\\)."],extension:["Show that \\(f(f^{-1}(x))=x\\) for \\(f(x)=4x+1\\).","Compare \\(fg(x)\\) and \\(gf(x)\\) for \\(f(x)=x+2,g(x)=x^2\\).","State why \\(f(x)=x^2\\) has no inverse on all real numbers."]},
   homework:[hw("Foundation","If \\(f(x)=5x-1\\), find \\(f(3)\\).",["\\(f(3)=15-1=14\\)."]),hw("Core","Find inverse of \\(f(x)=4x+3\\).",["\\(y=4x+3\\).","Swap: \\(x=4y+3\\).","\\(y=(x-3)/4\\)."]),hw("Extension","Given \\(f(x)=x-1,g(x)=3x+2\\), find \\(fg(x)\\).",["\\(fg(x)=f(g(x))\\).","\\(f(3x+2)=3x+2-1=3x+1\\)."])]
  };
 }
 if(t==="sets") return {
  examples:[ex("Let \\(A={1,2,3,4}\\), \\(B={3,4,5}\\). Find \\(A\\cap B\\).",["Intersection means elements in both sets.","So \\(A\\cap B={3,4}\\)."]),ex("In a class, 18 study French, 15 Spanish, 7 both. How many study at least one?",["Use union total: \\(18+15-7\\).","Subtract the overlap once because it was counted twice.","Answer \\(26\\)."]),ex("Simplify \\((A\\cup B)'\\).",["By De Morgan's law, the complement of a union is the intersection of complements.","\\((A\\cup B)'=A'\\cap B'\\)."])],
  practice:{foundation:["Find union of {1,2,3} and {3,4}.","Find intersection of multiples of 2 and 3 below 20.","Shade \\(A\\cap B\\)."],core:["30 students: 19 football, 16 basketball, 8 both. Find at least one.","Given universal set 1–10 and A={2,4,6,8,10}, find A'.","Describe \\(A'\\cap B\\) in words."],extension:["Use a three-set Venn diagram for 40 students.","Verify a De Morgan law with a small universal set.","Solve a Venn problem with an unknown overlap."]},
  homework:[hw("Foundation","A={1,2,5}, B={2,3,5}. Find \\(A\\cap B\\).",["Common elements are 2 and 5.","Answer {2,5}."]),hw("Core","20 like tea, 14 coffee, 6 both. Find number liking tea or coffee.",["\\(20+14-6=28\\)."]),hw("Extension","Universal set has 50 elements, \\(n(A)=28,n(B)=25,n(A\\cap B)=10\\). Find neither.",["\\(n(A\\cup B)=28+25-10=43\\).","Neither \\(=50-43=7\\)."])]
 };
 if(t==="proportion") return {
  examples:[ex("\\(y\\propto x\\), and \\(y=18\\) when \\(x=6\\).",["Write \\(y=kx\\).","\\(18=6k\\), so \\(k=3\\).","Model: \\(y=3x\\)."]),ex("\\(y\\propto1/x^2\\), and \\(y=5\\) when \\(x=2\\).",["Write \\(y=k/x^2\\).","\\(5=k/4\\), so \\(k=20\\).","Thus \\(y=20/x^2\\)."]),ex("\\(p\\propto\\sqrt q\\), \\(p=12\\) when \\(q=9\\). Find \\(p\\) when \\(q=25\\).",["\\(p=k\\sqrt q\\).","\\(12=3k\\), so \\(k=4\\).","When \\(q=25\\), \\(p=4(5)=20\\)."])],
  practice:{foundation:["\\(y\\propto x\\), y=10 when x=2. Find k.","\\(y\\propto x^2\\), write equation with constant k.","\\(y\\propto1/x\\), describe what happens if x doubles."],core:["\\(y\\propto x^2\\), y=45 when x=3. Find y when x=5.","\\(t\\propto1/v\\), t=6 when v=20. Find t when v=30.","\\(p\\propto\\sqrt q\\), p=15 when q=25. Find q when p=21."],extension:["\\(y\\propto x^3\\), y=16 when x=2. Find x when y=54.","\\(a\\propto1/\\sqrt b\\), a=8 when b=9. Find b when a=6.","Explain the log-log graph shape for \\(y=kx^n\\)."]},
  homework:[hw("Foundation","\\(y\\propto x\\), y=21 when x=7. Find equation.",["\\(y=kx\\).","\\(21=7k\\Rightarrow k=3\\).","\\(y=3x\\)."]),hw("Core","\\(y\\propto x^2\\), y=32 when x=4. Find y when x=7.",["\\(32=16k\\Rightarrow k=2\\).","\\(y=2x^2\\).","At 7: \\(y=98\\)."]),hw("Extension","\\(t\\propto1/v^2\\), t=12 when v=5. Find t when v=10.",["\\(12=k/25\\Rightarrow k=300\\).","\\(t=300/v^2\\).","At 10: \\(t=3\\)."])]
 };
 return {examples:[ex("Core concept",["Read the learning points.","Model the method clearly.","Check the result in context."])],practice:{foundation:["Recall the key definition."],core:["Apply the method to a standard problem."],extension:["Solve a multi-step reasoning problem."]},homework:[hw("Core","Complete one exam-style problem.",["State the method.","Show each step.","Check the final answer."])]};
}

function diagramFor(t){
 if(["angles","parallel","polygons"].includes(t)) return `<svg class="diagram" viewBox="0 0 700 240" role="img" aria-label="Accurate geometry reference diagram"><line x1="60" y1="190" x2="640" y2="190" stroke="#18323d" stroke-width="4"/><line x1="130" y1="190" x2="350" y2="45" stroke="#18323d" stroke-width="4"/><line x1="350" y1="45" x2="560" y2="190" stroke="#18323d" stroke-width="4"/><path d="M175 190 A45 45 0 0 0 167 165" fill="none" stroke="#3e93b5" stroke-width="4"/><text x="190" y="160" font-size="22">48°</text><path d="M510 190 A50 50 0 0 1 520 160" fill="none" stroke="#3e93b5" stroke-width="4"/><text x="470" y="155" font-size="22">67°</text><text x="330" y="100" font-size="22">x°</text></svg>`;
 if(["ineq-numberline","ineq-linear"].includes(t)) return `<svg class="diagram" viewBox="0 0 700 160"><line x1="70" y1="80" x2="630" y2="80" stroke="#18323d" stroke-width="4"/>${[-3,-2,-1,0,1,2,3].map((n,i)=>`<g><line x1="${140+i*70}" y1="68" x2="${140+i*70}" y2="92" stroke="#18323d" stroke-width="3"/><text x="${134+i*70}" y="122" font-size="18">${n}</text></g>`).join("")}<circle cx="350" cy="80" r="10" fill="white" stroke="#2563eb" stroke-width="4"/><line x1="360" y1="80" x2="610" y2="80" stroke="#2563eb" stroke-width="8"/><path d="M610 80 l-20 -12 v24 z" fill="#2563eb"/></svg>`;
 if(["circle","sector"].includes(t)) return `<svg class="diagram" viewBox="0 0 500 300"><circle cx="250" cy="150" r="110" fill="#f7fbfd" stroke="#18323d" stroke-width="4"/><line x1="250" y1="150" x2="360" y2="150" stroke="#2563eb" stroke-width="4"/><line x1="250" y1="150" x2="305" y2="55" stroke="#2563eb" stroke-width="4"/><path d="M305 55 A110 110 0 0 1 360 150" fill="#dff3fb" stroke="#2563eb" stroke-width="3"/><text x="298" y="135" font-size="20">r</text><text x="280" y="110" font-size="20">60°</text></svg>`;
 if(["scatter","correlation","bestfit"].includes(t)) return `<svg class="diagram" viewBox="0 0 600 330"><line x1="70" y1="270" x2="560" y2="270" stroke="#18323d" stroke-width="3"/><line x1="70" y1="270" x2="70" y2="35" stroke="#18323d" stroke-width="3"/>${[[120,235],[170,210],[210,205],[260,165],[300,180],[350,125],[400,115],[450,80],[500,70]].map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="6" fill="#3e93b5"/>`).join("")}<line x1="105" y1="240" x2="520" y2="55" stroke="#dc6f55" stroke-width="3"/></svg>`;
 if(["histogram","freqdensity"].includes(t)) return `<svg class="diagram" viewBox="0 0 600 330"><line x1="70" y1="270" x2="560" y2="270" stroke="#18323d" stroke-width="3"/><line x1="70" y1="270" x2="70" y2="35" stroke="#18323d" stroke-width="3"/><rect x="90" y="190" width="90" height="80" fill="#dff3fb" stroke="#3e93b5" stroke-width="3"/><rect x="180" y="110" width="140" height="160" fill="#dff3fb" stroke="#3e93b5" stroke-width="3"/><rect x="320" y="150" width="200" height="120" fill="#dff3fb" stroke="#3e93b5" stroke-width="3"/><text x="10" y="40" font-size="16">Frequency density</text></svg>`;
 if(t==="sets") return `<svg class="diagram" viewBox="0 0 620 300"><rect x="35" y="25" width="550" height="245" rx="12" fill="#fff" stroke="#18323d" stroke-width="3"/><circle cx="255" cy="150" r="90" fill="#dff3fb" fill-opacity=".8" stroke="#3e93b5" stroke-width="3"/><circle cx="365" cy="150" r="90" fill="#efe6d5" fill-opacity=".8" stroke="#b58d4b" stroke-width="3"/><text x="170" y="80" font-size="26">A</text><text x="430" y="80" font-size="26">B</text><text x="55" y="55" font-size="20">ξ</text></svg>`;
 if(["functions","inverse","composite"].includes(t)) return `<svg class="diagram" viewBox="0 0 620 260"><ellipse cx="170" cy="130" rx="100" ry="105" fill="#f7fbfd" stroke="#18323d" stroke-width="3"/><ellipse cx="450" cy="130" rx="100" ry="105" fill="#f7fbfd" stroke="#18323d" stroke-width="3"/><text x="135" y="85" font-size="22">1</text><text x="135" y="135" font-size="22">2</text><text x="135" y="185" font-size="22">3</text><text x="470" y="85" font-size="22">3</text><text x="470" y="135" font-size="22">5</text><text x="470" y="185" font-size="22">7</text><path d="M160 80 C260 65,350 65,445 80" fill="none" stroke="#3e93b5" stroke-width="3"/><path d="M160 130 C260 130,350 130,445 130" fill="none" stroke="#3e93b5" stroke-width="3"/><path d="M160 180 C260 195,350 195,445 180" fill="none" stroke="#3e93b5" stroke-width="3"/></svg>`;
 return "";
}

function renderNav(filter=""){
 const groups={}; LESSONS.forEach((l,i)=>{ if((l.id+" "+l.title+" "+l.unit).toLowerCase().includes(filter.toLowerCase())) (groups[l.u]??=[]).push([l,i]);});
 $("#lessonNav").innerHTML=Object.entries(groups).map(([u,ls])=>`<div class="unit-nav"><h3>Unit ${u} • ${ls[0][0].unit}</h3>${ls.map(([l,i])=>`<button class="lesson-link ${i===current?"active":""}" data-i="${i}"><strong>${l.id}</strong> ${l.title}</button>`).join("")}</div>`).join("");
 $$(".lesson-link").forEach(b=>b.onclick=()=>{current=+b.dataset.i;tab="learn";render();$("#sidebar").classList.remove("open");});
}

function render(){
 const l=LESSONS[current], b=bank(l.type);
 $("#unitPill").textContent=`Unit ${l.u} • ${l.unit}`;
 $("#lessonTitle").textContent=`${l.id}  ${l.title}`;
 $("#lessonSubtitle").textContent="Cambridge IGCSE Mathematics • lesson-by-lesson teaching sequence";
 $("#prevBtn").disabled=current===0; $("#nextBtn").disabled=current===LESSONS.length-1;
 $$(".tab").forEach(x=>x.classList.toggle("active",x.dataset.tab===tab));
 renderNav($("#search").value);
 if(tab==="learn") $("#content").innerHTML=`
  <div class="learn-grid">
   <article class="card"><h3>Prior knowledge check</h3><p class="lead">Students should be ready to recall:</p><ul class="clean-list">${l.prior.map(x=>`<li>${x}</li>`).join("")}</ul></article>
   <article class="card"><h3>Learning points</h3><p class="lead">By the end of the lesson, students should be able to:</p><ul class="clean-list">${l.obj.map(x=>`<li>${x}</li>`).join("")}</ul></article>
  </div>
  <article class="card"><h3>Visual / mathematical focus</h3>${diagramFor(l.type)?`<div class="diagram-wrap">${diagramFor(l.type)}</div>`:""}<p class="hint">Teacher focus: model one clean method at a time, keep exact values exact where appropriate, and insist on mathematical reasons/units/notation.</p><p class="source-note">Difficulty and sequencing calibrated to the Year 10 SoW reference: ${l.src}. Questions on this site are original rather than copied from the textbook.</p></article>`;
 if(tab==="examples") $("#content").innerHTML=`<article class="card"><h3>Teacher examples</h3><p class="lead">Worked from accessible entry point to exam-style reasoning.</p>${b.examples.map((e,i)=>`<div class="example"><div class="example-head"><span class="example-num">Example ${i+1}</span><strong>${e.q}</strong></div><div class="steps">${e.steps.map((s,j)=>`<div class="step"><span class="step-badge">${j+1}</span><div>${s}</div></div>`).join("")}</div></div>`).join("")}</article>`;
 if(tab==="practice") $("#content").innerHTML=`<article class="card"><h3>Independent practice</h3><p class="lead">Students can start at the tier that matches their confidence, then move upward.</p><div class="tiers">${[["Foundation","foundation"],["Core","core"],["Extension","extension"]].map(([name,k])=>`<section class="tier ${k}"><h4>${name}</h4><ol class="q-list">${b.practice[k].map(q=>`<li>${q}</li>`).join("")}</ol>${k==="foundation"?'<div class="hint">Scaffold: identify the rule/formula first, then substitute or rearrange one step at a time.</div>':k==="extension"?'<div class="hint">Stretch: justify the method, not only the final answer.</div>':""}</section>`).join("")}</div></article>`;
 if(tab==="homework") $("#content").innerHTML=`<article class="card"><h3>Homework</h3><p class="lead">Each solution reveals a full method so students can self-correct after attempting the question.</p>${b.homework.map((h,i)=>`<div class="hw-item"><div class="hw-q">${i+1}. <span class="pill">${h.tier}</span> &nbsp; ${h.q}</div><details class="solution"><summary>Show solution</summary><div class="solution-body"><div class="steps">${h.sol.map((s,j)=>`<div class="step"><span class="step-badge">${j+1}</span><div>${s}</div></div>`).join("")}</div></div></details></div>`).join("")}</article>`;
 if(tab==="whiteboard") $("#content").innerHTML=`<article class="card board-card"><div class="board-tools"><strong>Whiteboard</strong><button class="colour-dot active" data-colour="#132d36" aria-label="Black pen"></button><button class="colour-dot" data-colour="#2563eb" aria-label="Blue pen"></button><button class="colour-dot" data-colour="#dc2626" aria-label="Red pen"></button><button class="colour-dot" data-colour="#15803d" aria-label="Green pen"></button><button id="eraser" class="tool-btn">Eraser</button><button id="clearBoard" class="tool-btn">Clear</button></div><div class="canvas-shell"><canvas id="board"></canvas></div></article>`;
 if(window.MathJax?.typesetPromise) MathJax.typesetPromise([$("#content")]);
 if(tab==="whiteboard") initBoard();
 location.hash=l.id+"-"+tab;
}

function initBoard(){
 const canvas=$("#board"), shell=canvas.parentElement, ctx=canvas.getContext("2d"); let drawing=false,last=null,colour="#132d36",erase=false;
 function resize(){const dpr=devicePixelRatio||1, rect=shell.getBoundingClientRect(); const old=document.createElement("canvas");old.width=canvas.width;old.height=canvas.height;old.getContext("2d").drawImage(canvas,0,0);canvas.width=rect.width*dpr;canvas.height=rect.height*dpr;canvas.style.width=rect.width+"px";canvas.style.height=rect.height+"px";ctx.setTransform(dpr,0,0,dpr,0,0); if(old.width) ctx.drawImage(old,0,0,old.width,old.height,0,0,rect.width,rect.height);}
 resize(); window.addEventListener("resize",resize,{once:true});
 const point=e=>{const r=canvas.getBoundingClientRect();return{x:e.clientX-r.left,y:e.clientY-r.top}};
 canvas.onpointerdown=e=>{drawing=true;last=point(e);canvas.setPointerCapture(e.pointerId)};
 canvas.onpointermove=e=>{if(!drawing)return;const p=point(e);ctx.lineCap="round";ctx.lineJoin="round";ctx.lineWidth=erase?22:3.5;ctx.strokeStyle=erase?"rgba(0,0,0,1)":colour;ctx.globalCompositeOperation=erase?"destination-out":"source-over";ctx.beginPath();ctx.moveTo(last.x,last.y);ctx.lineTo(p.x,p.y);ctx.stroke();last=p};
 canvas.onpointerup=canvas.onpointercancel=()=>drawing=false;
 $$(".colour-dot").forEach(b=>b.onclick=()=>{colour=b.dataset.colour;erase=false;$$(".colour-dot").forEach(x=>x.classList.toggle("active",x===b));$("#eraser").classList.remove("active")});
 $("#eraser").onclick=()=>{erase=true;$$(".colour-dot").forEach(x=>x.classList.remove("active"))};
 $("#clearBoard").onclick=()=>ctx.clearRect(0,0,canvas.width,canvas.height);
}
$$(".tab").forEach(b=>b.onclick=()=>{tab=b.dataset.tab;render()});
$("#prevBtn").onclick=()=>{if(current>0){current--;tab="learn";render()}};
$("#nextBtn").onclick=()=>{if(current<LESSONS.length-1){current++;tab="learn";render()}};
$("#search").oninput=e=>renderNav(e.target.value);
$("#menuBtn").onclick=()=>$("#sidebar").classList.toggle("open");
$("#presentBtn").onclick=()=>{document.body.classList.toggle("present");$("#presentBtn").textContent=document.body.classList.contains("present")?"Exit presentation":"Presentation mode"};
const hash=decodeURIComponent(location.hash.slice(1)); if(hash){const id=hash.split("-")[0]; const i=LESSONS.findIndex(l=>l.id===id); if(i>=0)current=i; const maybe=hash.split("-").slice(1).join("-"); if(["learn","examples","practice","homework","whiteboard"].includes(maybe))tab=maybe}
render();


/* ===== Teaching Hub v2: slide examples, embedded modelling boards, deeper practice ===== */
var exampleSlide;
var lastExampleLesson;

function upgradedBank(l){
  var s = specialisedBank(l.type);
  var b = s || bank(l.type);
  if(!s && b.examples.length < 4){
    var e = extraExample(l.type);
    if(e) b = Object.assign({}, b, {examples:b.examples.concat([e])});
  }
  return b;
}

function extraExample(t){
  var fam = topicFamily(t);
  if(fam==="surds") return ex("Problem solving: A square has area \\(72\\text{ cm}^2\\). Find its side length in simplest surd form.",[
    "For a square, \\(s^2=72\\).",
    "So \\(s=\\sqrt{72}\\).",
    "Simplify: \\(\\sqrt{72}=\\sqrt{36\\times2}=6\\sqrt2\\).",
    "The side length is \\(6\\sqrt2\\text{ cm}\\)."
  ]);
  if(fam==="algebra") return ex("Problem solving: Form an equation from a context, solve it, then check the answer is sensible.",[
    "Define the unknown clearly.",
    "Translate the information into an equation.",
    "Solve using the most efficient algebraic method.",
    "Substitute back into the original context to check."
  ]);
  if(fam==="inequalities") return ex("Problem solving: A lift can carry at most 630 kg. Six people weigh 78 kg each. Write and solve an inequality for the maximum extra load \\(x\\).",[
    "Six people weigh \\(6\\times78=468\\) kg.",
    "At most 630 kg gives \\(468+x\\le630\\).",
    "Subtract 468: \\(x\\le162\\).",
    "The extra load must be no more than 162 kg."
  ]);
  if(fam==="geometry") return ex("Reasoning: Explain each line of a multi-step angle solution rather than writing only the final value.",[
    "Mark known equal angles first.",
    "Write the geometric reason beside every new angle.",
    "Only then form any algebraic equation.",
    "Finish with units in degrees and a final reason check."
  ]);
  if(fam==="mensuration") return ex("Problem solving: A running track contains two semicircles of radius 18 m joined by two straight sections of 55 m. Find the perimeter.",[
    "Two semicircles make one full circle.",
    "Curved length \\(=2\\pi r=36\\pi\\).",
    "Straight length \\(=2(55)=110\\).",
    "Total \\(=110+36\\pi\\approx223.1\\text{ m}\\)."
  ]);
  if(fam==="functions") return ex("Reasoning: Given \\(f(x)=2x-3\\) and \\(g(x)=x^2+1\\), compare \\(fg(2)\\) and \\(gf(2)\\).",[
    "\\(g(2)=5\\), so \\(fg(2)=f(5)=7\\).",
    "\\(f(2)=1\\), so \\(gf(2)=g(1)=2\\).",
    "Therefore \\(fg(2)\\ne gf(2)\\).",
    "Function composition depends on order."
  ]);
  if(fam==="sets") return ex("Problem solving: In 40 students, 23 study French, 19 study Spanish and 8 study both. Find how many study neither.",[
    "\\(n(F\\cup S)=23+19-8=34\\).",
    "The overlap is subtracted once because it was counted twice.",
    "Neither \\(=40-34=6\\)."
  ]);
  if(fam==="proportion") return ex("Problem solving: The time \\(t\\) is inversely proportional to the square of speed \\(v\\). If \\(t=20\\) when \\(v=3\\), find \\(t\\) when \\(v=5\\).",[
    "\\(t=k/v^2\\).",
    "\\(20=k/9\\), so \\(k=180\\).",
    "At \\(v=5\\), \\(t=180/25=7.2\\)."
  ]);
  return null;
}

function specialisedBank(t){
  if(t==="tables") return {
    examples:[
      ex("A survey records transport to school: Bus 14, Car 9, Walk 7, Cycle 5. Construct a frequency table.",[
        "Use one row for each category.",
        "Record the frequency exactly once.",
        "Check the total: \\(14+9+7+5=35\\).",
        "A frequency table should have clear headings and a total."
      ]),
      ex("Complete the two-way table if 18 students are boys, 22 are girls, 12 boys study French and 17 girls study French.",[
        "Boys not French: \\(18-12=6\\).",
        "Girls not French: \\(22-17=5\\).",
        "French total: \\(12+17=29\\).",
        "Not French total: \\(6+5=11\\); grand total \\(40\\)."
      ]),
      ex("A grouped table has intervals 0–10, 10–20, 20–30 with frequencies 4, 9, 7. How many observations are there?",[
        "Add all frequencies.",
        "\\(4+9+7=20\\).",
        "There are 20 observations."
      ]),
      ex("Reasoning: Explain why a category table should not use overlapping classes.",[
        "Each observation must belong to exactly one class.",
        "Overlapping classes can count one value twice.",
        "Use unambiguous boundaries such as \\(0\\le x<10\\), \\(10\\le x<20\\)."
      ])
    ],
    practice:{foundation:["Complete a frequency table from: red, blue, red, green, blue, red.","Find the total frequency 6, 8, 5, 11.","Which variable is categorical: height, eye colour, mass?"],core:["Complete a two-way table with row/column totals.","Write suitable non-overlapping groups for ages 10 to 19.","A table totals 60; one missing frequency is represented by \\(x\\). Form an equation."],extension:["Design a two-way table for year group and transport method.","Explain why unequal class widths are acceptable in a grouped table.","Identify two possible sources of classification error in survey data."]},
    homework:[
      hw("Foundation","Frequencies are 5, 8, 6 and 1. Find the total.",["Add the frequencies: \\(5+8+6+1=20\\)."]),
      hw("Core","A two-way table has 16 boys and 24 girls. 9 boys and 15 girls chose option A. Find all missing totals.",["Boys not A: \\(16-9=7\\).","Girls not A: \\(24-15=9\\).","Option A total \\(=24\\); not A total \\(=16\\); grand total \\(=40\\)."]),
      hw("Extension","Explain why intervals \\(0<x\\le10\\) and \\(10<x\\le20\\) do not overlap.",["The first class includes 10 because \\(x\\le10\\).","The second class excludes 10 because \\(10<x\\).","So every boundary value belongs to exactly one class."])
    ]
  };
  if(t==="averages") return {
    examples:[
      ex("Data: 4, 6, 6, 7, 9, 12. Find mean, median, mode and range.",["Mean \\(=44/6\\approx7.33\\).","Median \\(=(6+7)/2=6.5\\).","Mode \\(=6\\).","Range \\(=12-4=8\\)."]),
      ex("Data: 3, 5, 7, 8, 10, 13, 18, 21. Find \\(Q_1,Q_2,Q_3\\) and IQR.",["Median \\(Q_2=(8+10)/2=9\\).","Lower half 3,5,7,8 gives \\(Q_1=(5+7)/2=6\\).","Upper half 10,13,18,21 gives \\(Q_3=(13+18)/2=15.5\\).","IQR \\(=15.5-6=9.5\\)."]),
      ex("A company has salaries 500, 520, 540, 560, 4000. Which average is more representative?",["The mean is pulled upward by the extreme salary.","The median is the middle value 540.","The median is more representative of a typical salary here."]),
      ex("Class A: median 68, IQR 12. Class B: median 72, IQR 20. Compare.",["Class B has the higher typical result because 72 > 68.","Class A is more consistent because 12 < 20.","Use both centre and spread in a complete comparison."])
    ],
    practice:{foundation:["Find the mean of 4,6,8,10.","Find the median of 3,5,8,9,12.","Find mode and range of 2,2,3,6,9."],core:["Find quartiles and IQR of 2,4,5,6,8,9,11,14.","A mean of 12 is calculated from 6 values. Find their total.","The mean of five numbers is 14; four are 8,11,15,19. Find the fifth."],extension:["Explain when median is preferable to mean.","Two data sets have equal means but different IQRs. Explain what this tells you.","Create a set of 6 integers with mean 10, median 9 and range 12."]},
    homework:[
      hw("Foundation","Find the mean of 5,7,7,8,13.",["Total \\(=40\\).","There are 5 values.","Mean \\(=8\\)."]),
      hw("Core","Find the IQR of 2,4,5,8,9,11,13,18.",["Lower half 2,4,5,8 gives \\(Q_1=4.5\\).","Upper half 9,11,13,18 gives \\(Q_3=12\\).","IQR \\(=12-4.5=7.5\\)."]),
      hw("Extension","The mean of 7 values is 18. Six values total 111. Find the seventh.",["Total for 7 values \\(=7\\times18=126\\).","Seventh value \\(=126-111=15\\)."])
    ]
  };
  if(t==="grouped-mean" || t==="modalclass") return {
    examples:[
      ex("Estimate the mean for intervals 0–10, 10–20, 20–30 with frequencies 3, 7, 5.",["Midpoints are 5, 15, 25.","\\(\\sum fx=3(5)+7(15)+5(25)=245\\).","\\(\\sum f=15\\).","Estimated mean \\(=245/15\\approx16.3\\)."]),
      ex("For intervals 20–30, 30–40, 40–50 with frequencies 6, 12, 9, identify the modal class.",["The greatest frequency is 12.","It occurs in \\(30\\le x<40\\).","So the modal class is 30–40."]),
      ex("A grouped table has 40 values. Which class contains the median if cumulative frequencies are 7, 18, 31, 40?",["Median position is the 20th value.","The cumulative frequency first reaches/exceeds 20 at 31.","Therefore the median lies in the third class."]),
      ex("Why is a grouped-data mean only an estimate?",["We do not know each exact data value.","We assume every value in a class is represented by the class midpoint.","That assumption creates an estimate rather than an exact mean."])
    ],
    practice:{foundation:["Find the midpoint of 10–20.","Identify the modal class from frequencies 3,8,5,2.","For 30 values, state the median position."],core:["Estimate a mean for classes 0–5,5–10,10–15 with frequencies 2,6,4.","Identify the median class from cumulative frequencies 5,13,21,30.","Explain why midpoint 17.5 represents class 15–20."],extension:["Compare an exact mean with a grouped estimate and explain the difference.","Design two different raw data sets that give the same grouped table.","Explain how wider classes can reduce accuracy of the estimated mean."]},
    homework:[
      hw("Foundation","Find the midpoint of 30–50.",["Midpoint \\(=(30+50)/2=40\\)."]),
      hw("Core","Classes 0–10,10–20,20–30 have frequencies 4,8,3. Estimate the mean.",["Midpoints 5,15,25.","\\(\\sum fx=20+120+75=215\\).","Total 15.","Estimate \\(=215/15\\approx14.3\\)."]),
      hw("Extension","Cumulative frequencies are 4, 15, 28, 40. Which class contains the median?",["There are 40 values, so the median position is about the 20th value.","15 < 20 ≤ 28.","The median is in the third class."])
    ]
  };
  if(t==="scatter" || t==="correlation" || t==="bestfit") return {
    examples:[
      ex("Plot the pairs \\((1,8),(2,7),(3,6),(4,5),(5,4)\\) and describe the correlation.",["Plot each pair as a small cross.","The points fall approximately along a downward trend.","This is strong negative correlation."]),
      ex("A scatter plot of height against arm span shows an upward trend with one isolated point. Describe it.",["The overall relationship is positive correlation.","The isolated point is an outlier.","The outlier should be noted, not automatically removed."]),
      ex("Draw a line of best fit for an upward scatter plot.",["Use one straight ruled line by inspection.","Extend it across the full data cloud.","Aim for roughly balanced points above and below.","Do not force the line through the origin unless justified."]),
      ex("A line of best fit predicts 92 when the observed x-range is 10 to 50 and x=85 is used. Comment.",["This is extrapolation far outside the observed data range.","The relationship may not continue in the same way.","The estimate should be treated as unreliable."])
    ],
    practice:{foundation:["Classify an upward trend.","Classify a downward trend.","State what an outlier is."],core:["Explain the difference between strong and weak positive correlation.","Estimate y from a line of best fit for a value inside the data range.","Explain why a line of best fit should have points on both sides."],extension:["Explain why correlation does not prove causation.","Give a plausible lurking variable for ice-cream sales and sunburn cases.","Explain why extrapolation is usually less reliable than interpolation."]},
    homework:[
      hw("Foundation","A scatter plot slopes down from left to right. State the correlation.",["The relationship is negative correlation."]),
      hw("Core","Why should a line of best fit usually extend across the whole data set?",["It should represent the overall trend rather than a small local section.","Extending across the data cloud makes interpolation consistent."]),
      hw("Extension","A strong positive correlation is found between shoe size and reading age in children. Explain why this does not prove larger shoes cause better reading.",["Correlation is association, not proof of cause.","Age is a likely third variable: older children tend to have larger feet and higher reading ages."])
    ]
  };
  if(t==="cumfreq" || t==="cumfreq-read") return {
    examples:[
      ex("Frequencies for \\(0<x\\le10,10<x\\le20,20<x\\le30\\) are 5, 8, 7. Form cumulative frequencies.",["First cumulative frequency: 5.","Second: \\(5+8=13\\).","Third: \\(13+7=20\\).","Plot at upper class boundaries: \\((10,5),(20,13),(30,20)\\)."]),
      ex("A cumulative frequency graph represents 80 values. Locate the median.",["Median position \\(=80/2=40\\).","From 40 on the cumulative-frequency axis, move horizontally to the curve.","Then move vertically down to the x-axis.","The x-coordinate is the estimated median."]),
      ex("For 120 values, locate \\(Q_1\\) and \\(Q_3\\).",["\\(Q_1\\) position \\(=120/4=30\\).","\\(Q_3\\) position \\(=3(120)/4=90\\).","Read both x-values from the curve.","IQR \\(=Q_3-Q_1\\)."]),
      ex("Why should cumulative-frequency points be joined by a smooth curve?",["Grouped continuous data represents values spread within intervals.","A smooth curve reflects a continuous accumulation rather than sudden jumps at every point.","The plotted points should still be clearly marked."])
    ],
    practice:{foundation:["Find cumulative frequencies from 3,7,5,5.","For 60 values, state the median position.","For 100 values, state the Q1 position."],core:["Plot cumulative frequencies at upper class boundaries.","Read a median and IQR from a given curve.","Estimate the 90th percentile from a curve."],extension:["Use a cumulative-frequency curve to estimate a probability.","Compare two distributions using median and IQR.","Explain why values read from a smooth curve are estimates."]},
    homework:[
      hw("Foundation","Frequencies are 4,6,9,1. Find cumulative frequencies.",["Running totals are 4, 10, 19, 20."]),
      hw("Core","A distribution has 80 values. State the cumulative-frequency positions for Q1, median and Q3.",["Q1: \\(20\\).","Median: \\(40\\).","Q3: \\(60\\)."]),
      hw("Extension","A cumulative-frequency graph gives Q1=18 and Q3=31. Find and interpret IQR.",["IQR \\(=31-18=13\\).","The middle 50% of the data spans 13 units."])
    ]
  };
  if(t==="histogram" || t==="freqdensity") return {
    examples:[
      ex("Class \\(10\\le x<20\\) has frequency 24. Find frequency density.",["Class width \\(=20-10=10\\).","Frequency density \\(=24/10=2.4\\).","The bar height is 2.4."]),
      ex("A histogram bar has width 5 and frequency density 3.2. Find its frequency.",["Histogram area represents frequency.","Frequency \\(=\\text{density}\\times\\text{class width}\\).","\\(3.2\\times5=16\\)."]),
      ex("A class has frequency 18 and density 1.5. Find its class width.",["Use \\(\\text{density}=f/w\\).","So \\(w=f/\\text{density}=18/1.5=12\\)."]),
      ex("Why is ordinary frequency not suitable as bar height when class widths differ?",["In a histogram, bar area must represent frequency.","If widths differ, using frequency as height makes area misleading.","Frequency density adjusts the height so area stays proportional to frequency."])
    ],
    practice:{foundation:["Find density for frequency 12, width 4.","Find frequency for density 2, width 6.","Find class width 20–35."],core:["Find density for frequency 18 over 5–11.","Recover frequency from density 1.8 and width 10.","Find width when frequency 30 and density 2.5."],extension:["Complete a histogram with one missing density.","Compare two unequal-width bars by area.","Explain why the vertical axis must be labelled frequency density."]},
    homework:[
      hw("Foundation","Frequency 15, class width 5. Find density.",["\\(15/5=3\\)."]),
      hw("Core","Density 1.6, width 10. Find frequency.",["Frequency \\(=1.6\\times10=16\\)."]),
      hw("Extension","Frequency 21, density 1.4. Find class width.",["Width \\(=21/1.4=15\\)."])
    ]
  };
  if(t==="charts") return {
    examples:[
      ex("A category has frequency 18 out of 60. Find its pie-chart angle.",["Fraction \\(=18/60\\).","Angle \\(=(18/60)\\times360=108^\\circ\\)."]),
      ex("Construct a stem-and-leaf diagram for 12, 15, 18, 21, 21, 24, 29.",["Use tens as stems 1 and 2.","Order leaves within each row.","Write \\(1|2\\ 5\\ 8\\) and \\(2|1\\ 1\\ 4\\ 9\\).","Include a key, e.g. \\(1|2=12\\)."]),
      ex("A dual bar chart compares two classes. What must stay consistent?",["Use one common vertical scale.","Keep category widths and spacing consistent.","Use a clear key for the two data sets."]),
      ex("A pictogram key says one symbol represents 8 students. What does half a symbol represent?",["Half of 8 is 4.","So half a symbol represents 4 students."])
    ],
    practice:{foundation:["Convert frequency 10 out of 40 to a pie angle.","Write a key for a stem-and-leaf plot.","A pictogram symbol represents 6 people; what does 2.5 symbols mean?"],core:["Construct a stem-and-leaf from 11,14,17,22,22,26,31.","Find three pie-chart angles from frequencies 12,18,30.","Compare two bars using a common scale."],extension:["Explain one advantage and one limitation of a pie chart.","Design a dual bar chart for two groups.","Spot how a truncated axis can make a difference look larger."]},
    homework:[
      hw("Foundation","Frequency 15 out of 50. Find the pie-chart angle.",["Angle \\(=(15/50)\\times360=108^\\circ\\)."]),
      hw("Core","Write 13,16,18,21,24 as a stem-and-leaf diagram.",["Stem 1: leaves 3,6,8.","Stem 2: leaves 1,4.","Include key \\(1|3=13\\)."]),
      hw("Extension","Explain why a pie chart is unsuitable when categories overlap.",["Pie-chart sectors represent mutually exclusive parts of one whole.","If categories overlap, one item can belong to more than one sector and totals can exceed 100%."])
    ]
  };
  if(t==="data-interpret" || t==="data-compare" || t==="data-limits" || t==="chart-infer" || t==="graph-compare" || t==="graph-limits") return {
    examples:[
      ex("Group A has median 42 and IQR 8; Group B has median 39 and IQR 5. Compare.",["Group A has the higher typical value because its median is larger.","Group B is more consistent because its IQR is smaller.","State both comparisons with numerical evidence."]),
      ex("A graph shows sales rising at the same time as advertising spend. Can we conclude advertising caused the rise?",["The graph shows an association.","Other factors may also have changed.","The data alone does not establish causation."]),
      ex("A bar chart starts its vertical axis at 92 instead of 0. What effect can this have?",["Small differences can look visually exaggerated.","The scale is not automatically wrong, but it can be misleading if not noticed.","Always read the axis values, not just bar heights."]),
      ex("A survey of 25 volunteers is used to describe all teenagers in Kuwait. State two limitations.",["The sample is small.","Volunteers may be systematically different from the wider population.","Therefore generalisation should be cautious."])
    ],
    practice:{foundation:["Compare medians 18 and 22.","Compare IQRs 4 and 9.","Identify one misleading graph feature."],core:["Write a two-sentence comparison using centre and spread.","Explain why a convenience sample may be biased.","State why correlation does not prove causation."],extension:["Critique a conclusion based on a small sample.","Explain the effect of a truncated axis.","Suggest a better sampling method for a school-wide survey."]},
    homework:[
      hw("Foundation","Set X has IQR 3; set Y has IQR 8. Which is more consistent?",["Set X is more consistent because it has the smaller IQR."]),
      hw("Core","Group P median 51, IQR 10; Group Q median 48, IQR 6. Compare.",["P has the higher typical value.","Q is more consistent because its IQR is smaller."]),
      hw("Extension","A graph from 2019–2021 is used to claim a trend will continue until 2035. Give one limitation.",["This is long-range extrapolation beyond the observed period.","The relationship may change, so the conclusion is uncertain."])
    ]
  };
  return null;
}

function topicFamily(t){
  if(t==="surds"||t==="rationalise") return "surds";
  if(["algfrac-simplify","algfrac-four","forming","linear","quadratic","fractional-eq","simultaneous-linear","simultaneous-nonlinear","rearrange"].includes(t)) return "algebra";
  if(t.startsWith("ineq-")) return "inequalities";
  if(["angles","parallel","polygons","symmetry2d","symmetry3d"].includes(t)) return "geometry";
  if(["units","area","circle","sector"].includes(t)) return "mensuration";
  if(["tables","averages","grouped-mean","modalclass","data-interpret","data-compare","data-limits"].includes(t)) return "statistics";
  if(["charts","scatter","correlation","bestfit","cumfreq","cumfreq-read","histogram","freqdensity","chart-infer","graph-compare","graph-limits"].includes(t)) return "charts";
  if(["functions","inverse","composite"].includes(t)) return "functions";
  if(t==="sets") return "sets";
  if(t==="proportion") return "proportion";
  return "general";
}

function extraPractice(t){
  var f=topicFamily(t);
  var packs={
    surds:{
      foundation:["Simplify \\(\\sqrt{32}\\).","Simplify \\(\\sqrt{80}\\).","Simplify \\(3\\sqrt2+5\\sqrt2\\)."],
      core:["Simplify \\(2\\sqrt{45}-\\sqrt{20}\\).","Evaluate \\(\\sqrt{12}\\times\\sqrt{27}\\).","Rationalise \\(4/\\sqrt7\\)."],
      extension:["Simplify \\((\\sqrt5+2)(\\sqrt5-2)\\).","Rationalise \\(5/(\\sqrt3+1)\\).","Find \\(a\\) if \\(a\\sqrt2=\\sqrt{98}\\)."],
      problems:["A square has area \\(98\\text{ cm}^2\\). Find its exact side length.","A right triangle has legs \\(\\sqrt{18}\\) and \\(\\sqrt{32}\\). Simplify their sum.","Show that \\(1/(\\sqrt2-1)=\\sqrt2+1\\).","Explain why \\(\\sqrt{50}+\\sqrt8\\) can be combined but \\(\\sqrt5+\\sqrt8\\) cannot immediately."]
    },
    algebra:{
      foundation:["Solve \\(5x-8=17\\).","Factorise \\(x^2+8x+15\\).","Simplify \\(12x^2/(3x)\\)."],
      core:["Solve \\(4(x-3)=2x+10\\).","Solve \\(x^2-7x+12=0\\).","Simplify \\((x^2-9)/(x+3)\\)."],
      extension:["Form and solve an equation for two consecutive integers with product 156.","Solve \\(1/x+1/(x+1)=1\\).","Find the intersection of \\(y=2x+3\\) and \\(y=x^2-1\\)."],
      problems:["A rectangle has area 96 cm² and sides \\(x+4\\) and \\(x+8\\). Form and solve an equation.","Two adult tickets and three child tickets cost KD 19; three adult and one child cost KD 17. Find each price.","A formula is \\(P=2a+2b\\). Make \\(b\\) the subject and use it when \\(P=30,a=6\\).","Explain one common algebraic-fraction cancellation error and correct it."]
    },
    inequalities:{
      foundation:["Solve \\(x-4<7\\).","Solve \\(3x\\ge12\\).","Represent \\(x<2\\) on a number line."],
      core:["Solve \\(5-2x\\le11\\).","Solve \\(-3<2x+1\\le9\\).","Graph \\(y>2x-3\\)."],
      extension:["List inequalities for the region \\(x\\ge0,y\\ge0,x+y\\le8\\).","Test whether \\((2,5)\\) satisfies \\(y\\le3x-1\\).","Solve \\(4x+1>7x-8\\)."],
      problems:["A concert hall holds at most 720 people; 486 seats are sold. Write an inequality for extra tickets.","A student needs at least 70% across five tests; four scores are 68,74,81,63. Form an inequality for the fifth score.","Describe a feasible region bounded by three inequalities.","Explain why dividing an inequality by a negative reverses the sign."]
    },
    geometry:{
      foundation:["Find a missing angle on a straight line.","Find the third angle in a triangle.","State the rotational symmetry order of a rectangle."],
      core:["Find an alternate angle in parallel lines.","Find the exterior angle of a regular 12-gon.","Find the interior angle of a regular octagon."],
      extension:["A regular polygon has exterior angle 15°. Find the number of sides.","Solve a multi-step angle problem involving parallel lines and a triangle.","Explain the planes of symmetry of a regular hexagonal prism."],
      problems:["Two regular polygons meet at a point with one angle 120° and another 135°. Find the third angle.","An isosceles triangle has vertex angle 38°. Find each base angle and justify.","A polygon has interior angle sum 1980°. Find its number of sides.","Construct an angle proof using at least three named reasons."]
    },
    mensuration:{
      foundation:["Convert 3.4 m to cm.","Find area of a triangle with base 9 and height 8.","Find circumference of radius 6."],
      core:["Convert 0.62 m² to cm².","Find area of a trapezium with sides 9,14 and height 7.","Find sector area for radius 12, angle 75°."],
      extension:["Convert 1.8 m³ to litres.","A sector has area \\(24\\pi\\) and radius 8. Find its angle.","Find the radius of a circle with area 200 cm²."],
      problems:["A garden consists of a rectangle and two semicircles. Form an exact perimeter.","A metal sheet loses a circular hole; find remaining area.","A water tank has volume 2.4 m³. Convert to litres and explain the factor used.","Compare two shapes with equal perimeter and determine which has greater area."]
    },
    statistics:{
      foundation:["Find the mean of 4,5,7,8.","Find the range of 3,9,11,14.","Identify the modal class from a grouped table."],
      core:["Calculate Q1, median, Q3 and IQR.","Estimate a grouped mean using midpoints.","Complete a two-way table from totals."],
      extension:["Compare two data sets using median and IQR.","Explain when median is preferable to mean.","Critique a conclusion from a small biased sample."],
      problems:["A sports coach compares two teams using centre and spread. Write a balanced conclusion.","A survey result changes greatly when one outlier is removed. Explain why.","Design a grouped table that could estimate the mean height of a class.","Explain how class width affects the accuracy of grouped estimates."]
    },
    charts:{
      foundation:["State the correlation shown by an upward scatter trend.","Find frequency density for frequency 18 and width 6.","For 80 values, state the median cumulative-frequency position."],
      core:["Find a pie-chart angle for frequency 24 out of 80.","Recover frequency from density 2.4 and width 5.","Find Q1 and Q3 positions for 120 values."],
      extension:["Explain why histogram area represents frequency.","Explain why extrapolation is risky.","Compare two cumulative-frequency curves using median and IQR."],
      problems:["A newspaper uses a truncated axis to compare two values. Explain the visual effect.","A scatter plot has strong correlation but no causal mechanism. Write a cautious conclusion.","A histogram uses unequal class widths. Explain why frequency density is required.","Use cumulative frequency to estimate the proportion above a threshold."]
    },
    functions:{
      foundation:["Evaluate \\(f(4)\\) for \\(f(x)=3x-1\\).","Find \\(g(-2)\\) for \\(g(x)=x^2+2\\).","State a domain and corresponding range."],
      core:["Find the inverse of \\(f(x)=5x+2\\).","Find \\(gf(x)\\) for simple linear functions.","Evaluate \\(fg(3)\\)."],
      extension:["Show \\(f(f^{-1}(x))=x\\).","Compare \\(fg\\) and \\(gf\\).","Explain why \\(x^2\\) needs a restricted domain to have an inverse."],
      problems:["A temperature conversion formula is treated as a function. Find and interpret its inverse.","A pricing function is composed with a discount function. Explain the order.","Create two functions where \\(fg\\ne gf\\).","Give a real-life example where domain restrictions matter."]
    },
    sets:{
      foundation:["Find a union.","Find an intersection.","Find a complement in a given universal set."],
      core:["Complete a two-set Venn diagram from totals.","Find the number in neither set.","Use set notation to describe a shaded region."],
      extension:["Solve a three-set Venn problem.","Apply De Morgan's law.","Find an unknown overlap from totals."],
      problems:["A survey of three sports has overlapping memberships. Build the Venn diagram from the centre outward.","Explain why pairwise overlaps must not double-count the triple overlap.","Translate a verbal condition into set notation.","Check a De Morgan identity using a small universal set."]
    },
    proportion:{
      foundation:["Find \\(k\\) if \\(y\\propto x\\), \\(y=12,x=3\\).","Write a direct-square proportion equation.","Describe inverse proportion verbally."],
      core:["Solve a direct-square proportion problem.","Solve an inverse proportion problem.","Use square-root proportion to find an unknown."],
      extension:["Solve inverse-square proportion.","Solve cube-root proportion.","Determine the proportional model from paired data."],
      problems:["Travel time varies inversely with speed for fixed distance. Model and solve.","Intensity varies inversely with square of distance. Compare two distances.","Area varies as the square of scale factor. Explain why.","Construct a context for \\(y\\propto x^3\\)."]
    }
  };
  return packs[f] || {foundation:[],core:[],extension:[],problems:[]};
}

function extraHomework(t){
  var f=topicFamily(t);
  if(f==="surds") return [
    hw("Foundation","Simplify \\(\\sqrt{48}\\).",["\\(48=16\\times3\\).","\\(\\sqrt{48}=4\\sqrt3\\)."]),
    hw("Foundation","Simplify \\(2\\sqrt{27}\\).",["\\(\\sqrt{27}=3\\sqrt3\\).","So \\(2\\sqrt{27}=6\\sqrt3\\)."]),
    hw("Core","Simplify \\(3\\sqrt{20}+\\sqrt{45}\\).",["\\(\\sqrt{20}=2\\sqrt5\\), \\(\\sqrt{45}=3\\sqrt5\\).","\\(6\\sqrt5+3\\sqrt5=9\\sqrt5\\)."]),
    hw("Core","Rationalise \\(5/\\sqrt6\\).",["Multiply top and bottom by \\(\\sqrt6\\).","Answer \\(5\\sqrt6/6\\)."]),
    hw("Extension","Rationalise \\(3/(\\sqrt5-1)\\).",["Multiply by conjugate \\(\\sqrt5+1\\).","Denominator \\(=5-1=4\\).","Answer \\(3(\\sqrt5+1)/4\\)."]),
    hw("Extension","A square has area 200 cm². Find exact side length.",["Side \\(=\\sqrt{200}\\).","\\(200=100\\times2\\).","Side \\(=10\\sqrt2\\text{ cm}\\)."])
  ];
  if(f==="algebra") return [
    hw("Foundation","Solve \\(7x-5=30\\).",["Add 5: \\(7x=35\\).","So \\(x=5\\)."]),
    hw("Foundation","Factorise \\(x^2+9x+20\\).",["Numbers multiplying to 20 and adding to 9 are 4 and 5.","Answer \\((x+4)(x+5)\\)."]),
    hw("Core","Solve \\(3(x+2)=2x+11\\).",["Expand: \\(3x+6=2x+11\\).","So \\(x=5\\)."]),
    hw("Core","Solve \\(x^2-5x-14=0\\).",["Factor: \\((x-7)(x+2)=0\\).","So \\(x=7\\) or \\(x=-2\\)."]),
    hw("Extension","Solve \\(1/x+1/(x+2)=1\\).",["Multiply by \\(x(x+2)\\): \\(x+2+x=x(x+2)\\).","\\(x^2-2=0\\).","\\(x=\\pm\\sqrt2\\), neither excluded."]),
    hw("Extension","Rectangle sides are \\(x+3\\) and \\(x+7\\), area 60. Find x.",["\\((x+3)(x+7)=60\\).","\\(x^2+10x-39=0\\).","\\((x+13)(x-3)=0\\).","Length constraints give \\(x=3\\)."])
  ];
  if(f==="inequalities") return [
    hw("Foundation","Solve \\(x+6<14\\).",["Subtract 6: \\(x<8\\)."]),
    hw("Foundation","Solve \\(4x\\ge20\\).",["Divide by 4: \\(x\\ge5\\)."]),
    hw("Core","Solve \\(7-3x<16\\).",["Subtract 7: \\(-3x<9\\).","Divide by -3 and reverse sign: \\(x>-3\\)."]),
    hw("Core","Solve \\(-5\\le2x+1<9\\).",["Subtract 1: \\(-6\\le2x<8\\).","Divide by 2: \\(-3\\le x<4\\)."]),
    hw("Extension","Does \\((2,4)\\) satisfy \\(y>2x-1\\)?",["Substitute: \\(4>2(2)-1=3\\).","True, so the point lies in the region."]),
    hw("Extension","A venue holds at most 500 people; 438 tickets are sold. Find the maximum additional tickets.",["Let extra tickets be \\(x\\).","\\(438+x\\le500\\).","So \\(x\\le62\\).","Maximum 62 tickets."])
  ];
  if(f==="geometry") return [
    hw("Foundation","Find the third angle of a triangle with 52° and 63°.",["Triangle sum is 180°.","\\(180-52-63=65^\\circ\\)."]),
    hw("Foundation","Find the angle vertically opposite 117°.",["Vertically opposite angles are equal.","Answer \\(117^\\circ\\)."]),
    hw("Core","Find each exterior angle of a regular 18-gon.",["Exterior angles total 360°.","\\(360/18=20^\\circ\\)."]),
    hw("Core","Find each interior angle of a regular 15-gon.",["Exterior angle \\(=360/15=24^\\circ\\).","Interior angle \\(=180-24=156^\\circ\\)."]),
    hw("Extension","A regular polygon has exterior angle 12°. Find sides.",["Number of sides \\(=360/12=30\\)."]),
    hw("Extension","An isosceles triangle has vertex angle 34°. Find each base angle.",["Remaining total \\(=180-34=146^\\circ\\).","Base angles equal, so each \\(=73^\\circ\\)."])
  ];
  if(f==="mensuration") return [
    hw("Foundation","Convert 3.7 m to cm.",["Multiply by 100: \\(370\\text{ cm}\\)."]),
    hw("Foundation","Find area of triangle base 11 cm, height 8 cm.",["\\(A=\\tfrac12 bh=44\\text{ cm}^2\\)."]),
    hw("Core","Find circumference of radius 7 cm.",["\\(C=2\\pi r=14\\pi\\text{ cm}\\approx44.0\\text{ cm}\\)."]),
    hw("Core","Find sector area radius 10 cm, angle 72°.",["Fraction \\(72/360=1/5\\).","Area \\(=(1/5)(100\\pi)=20\\pi\\text{ cm}^2\\)."]),
    hw("Extension","Convert 0.85 m³ to litres.",["\\(1\\text{ m}^3=1000\\text{ L}\\).","\\(0.85\\times1000=850\\text{ L}\\)."]),
    hw("Extension","A circle has area 154 cm². Estimate radius using \\(\\pi=22/7\\).",["\\(r^2=154\\div(22/7)=49\\).","So \\(r=7\\text{ cm}\\)."])
  ];
  if(f==="statistics") return [
    hw("Foundation","Find the range of 4,9,12,17.",["Range \\(=17-4=13\\)."]),
    hw("Foundation","Find the mode of 2,3,3,3,5,6.",["3 occurs most often.","Mode \\(=3\\)."]),
    hw("Core","The mean of 8 values is 12. Find their total.",["Total \\(=8\\times12=96\\)."]),
    hw("Core","Estimate a mean for midpoints 5,15,25 with frequencies 4,6,2.",["\\(\\sum fx=20+90+50=160\\).","\\(\\sum f=12\\).","Estimated mean \\(=13.3\\) to 1 d.p."]),
    hw("Extension","Group A median 35, IQR 4; B median 33, IQR 9. Compare.",["A has higher typical values.","A is also more consistent because its IQR is smaller."]),
    hw("Extension","Explain why a sample of only top-set students cannot represent the whole year group.",["The sampling frame is biased toward one attainment group.","The sample is not representative of the whole year."])
  ];
  if(f==="charts") return [
    hw("Foundation","Frequency 16 out of 64. Find pie-chart angle.",["\\((16/64)\\times360=90^\\circ\\)."]),
    hw("Foundation","For 40 values, state median CF position.",["Median position \\(=40/2=20\\)."]),
    hw("Core","Frequency 24, class width 8. Find density.",["Density \\(=24/8=3\\)."]),
    hw("Core","Density 2.5, width 6. Find frequency.",["Frequency \\(=2.5\\times6=15\\)."]),
    hw("Extension","For 200 values, state Q1, median, Q3 CF positions.",["Q1 \\(=50\\), median \\(=100\\), Q3 \\(=150\\)."]),
    hw("Extension","Explain why extrapolation beyond a scatter plot may be unreliable.",["The observed relationship is only supported within the measured x-range.","Outside that range the pattern may change."])
  ];
  if(f==="functions") return [
    hw("Foundation","If \\(f(x)=2x+5\\), find \\(f(6)\\).",["\\(f(6)=12+5=17\\)."]),
    hw("Foundation","If \\(g(x)=x^2\\), find \\(g(-4)\\).",["\\((-4)^2=16\\)."]),
    hw("Core","Find inverse of \\(f(x)=3x+1\\).",["\\(y=3x+1\\).","Swap: \\(x=3y+1\\).","\\(f^{-1}(x)=(x-1)/3\\)."]),
    hw("Core","Given \\(f(x)=x+2,g(x)=2x\\), find \\(gf(5)\\).",["\\(f(5)=7\\).","\\(g(7)=14\\)."]),
    hw("Extension","Form \\(fg(x)\\) for \\(f(x)=x^2,g(x)=x-1\\).",["\\(fg(x)=f(x-1)=(x-1)^2\\)."]),
    hw("Extension","Why does \\(f(x)=x^2\\) not have an inverse over all real x?",["Both \\(x\\) and \\(-x\\) give the same output.","The function is not one-to-one unless its domain is restricted."])
  ];
  if(f==="sets") return [
    hw("Foundation","A={1,2,3}, B={3,4,5}. Find \\(A\\cup B\\).",["Combine all distinct elements: {1,2,3,4,5}."]),
    hw("Foundation","Find \\(A\\cap B\\) for the same sets.",["Common element is {3}."]),
    hw("Core","25 like football, 18 basketball, 7 both. Find at least one.",["\\(25+18-7=36\\)."]),
    hw("Core","Universal set 1–12, A={2,4,6,8,10,12}. Find A'.",["Elements not in A are {1,3,5,7,9,11}."]),
    hw("Extension","In 50 people, 28 are in A, 24 in B, 9 in both. Find neither.",["Union \\(=28+24-9=43\\).","Neither \\(=50-43=7\\)."]),
    hw("Extension","Write De Morgan's law for complement of a union.",["\\((A\\cup B)'=A'\\cap B'\\)."])
  ];
  if(f==="proportion") return [
    hw("Foundation","\\(y\\propto x\\), y=16 when x=4. Find equation.",["\\(y=kx\\).","\\(16=4k\\Rightarrow k=4\\).","\\(y=4x\\)."]),
    hw("Foundation","\\(y\\propto x^2\\). Write the algebraic model.",["\\(y=kx^2\\)."]),
    hw("Core","\\(y\\propto x^2\\), y=18 when x=3. Find y when x=5.",["\\(18=9k\\Rightarrow k=2\\).","\\(y=2(25)=50\\)."]),
    hw("Core","\\(t\\propto1/v\\), t=8 when v=15. Find t when v=20.",["\\(8=k/15\\Rightarrow k=120\\).","\\(t=120/20=6\\)."]),
    hw("Extension","\\(p\\propto\\sqrt q\\), p=18 when q=36. Find q when p=30.",["\\(18=6k\\Rightarrow k=3\\).","\\(30=3\\sqrt q\\Rightarrow\\sqrt q=10\\).","\\(q=100\\)."]),
    hw("Extension","\\(t\\propto1/v^2\\), t=10 when v=4. Find t when v=8.",["\\(10=k/16\\Rightarrow k=160\\).","\\(t=160/64=2.5\\)."])
  ];
  return [];
}

function diagramForExample(t,i){
  if(t==="tables"){
    return '<table class="math-table"><thead><tr><th></th><th>French</th><th>Not French</th><th>Total</th></tr></thead><tbody><tr><th>Boys</th><td>12</td><td>6</td><td>18</td></tr><tr><th>Girls</th><td>17</td><td>5</td><td>22</td></tr><tr><th>Total</th><td>29</td><td>11</td><td>40</td></tr></tbody></table>';
  }
  if(t==="grouped-mean"||t==="modalclass"){
    return '<table class="math-table"><thead><tr><th>Class</th><th>Frequency</th><th>Midpoint</th><th>f × midpoint</th></tr></thead><tbody><tr><td>0–10</td><td>3</td><td>5</td><td>15</td></tr><tr><td>10–20</td><td>7</td><td>15</td><td>105</td></tr><tr><td>20–30</td><td>5</td><td>25</td><td>125</td></tr></tbody></table>';
  }
  if(t==="charts"){
    if(i===0) return '<svg class="diagram" viewBox="0 0 520 320" aria-label="Pie chart showing a 108 degree sector"><circle cx="250" cy="160" r="120" fill="#f9fcfd" stroke="#18323d" stroke-width="3"/><path d="M250 160 L250 40 A120 120 0 0 1 364.1 122.9 Z" fill="#dff3fb" stroke="#3e93b5" stroke-width="3"/><path d="M250 110 A50 50 0 0 1 297.6 144.5" fill="none" stroke="#18323d" stroke-width="2"/><text x="285" y="116" font-size="20">108°</text></svg>';
    if(i===1) return '<div class="stemleaf"><div><strong>Stem</strong><span>|</span><strong>Leaf</strong></div><div><b>1</b><span>|</span><span>2&nbsp;5&nbsp;8</span></div><div><b>2</b><span>|</span><span>1&nbsp;1&nbsp;4&nbsp;9</span></div><p>Key: 1 | 2 = 12</p></div>';
  }
  if(t==="scatter"||t==="correlation"||t==="bestfit"){
    return '<svg class="diagram" viewBox="0 0 680 360" aria-label="Scatter diagram"><line x1="70" y1="300" x2="620" y2="300" stroke="#18323d" stroke-width="3"/><line x1="70" y1="300" x2="70" y2="40" stroke="#18323d" stroke-width="3"/><text x="310" y="345" font-size="18">x variable</text><text x="16" y="40" font-size="18">y</text>'+[[130,260],[190,230],[250,215],[310,175],[370,160],[430,125],[490,110],[550,80]].map(p=>'<g stroke="#2563eb" stroke-width="3"><line x1="'+(p[0]-6)+'" y1="'+(p[1]-6)+'" x2="'+(p[0]+6)+'" y2="'+(p[1]+6)+'"/><line x1="'+(p[0]+6)+'" y1="'+(p[1]-6)+'" x2="'+(p[0]-6)+'" y2="'+(p[1]+6)+'"/></g>').join("")+(i>=2?'<line x1="115" y1="265" x2="570" y2="70" stroke="#d2694c" stroke-width="3"/>':'')+'</svg>';
  }
  if(t==="cumfreq"||t==="cumfreq-read"){
    return '<svg class="diagram" viewBox="0 0 700 400" aria-label="Cumulative frequency curve"><line x1="80" y1="330" x2="650" y2="330" stroke="#18323d" stroke-width="3"/><line x1="80" y1="330" x2="80" y2="40" stroke="#18323d" stroke-width="3"/><text x="290" y="382" font-size="18">Upper class boundary</text><text x="12" y="35" font-size="18">Cumulative frequency</text><path d="M80 330 C150 318,190 300,230 278 C300 240,360 185,430 145 C500 105,560 75,630 60" fill="none" stroke="#3e93b5" stroke-width="4"/>'+[[160,312],[240,270],[330,212],[430,145],[540,90],[630,60]].map(p=>'<g stroke="#2563eb" stroke-width="3"><line x1="'+(p[0]-5)+'" y1="'+(p[1]-5)+'" x2="'+(p[0]+5)+'" y2="'+(p[1]+5)+'"/><line x1="'+(p[0]+5)+'" y1="'+(p[1]-5)+'" x2="'+(p[0]-5)+'" y2="'+(p[1]+5)+'"/></g>').join("")+'</svg>';
  }
  if(t==="histogram"||t==="freqdensity"){
    return '<svg class="diagram" viewBox="0 0 700 400" aria-label="Histogram with unequal class widths"><line x1="80" y1="330" x2="650" y2="330" stroke="#18323d" stroke-width="3"/><line x1="80" y1="330" x2="80" y2="40" stroke="#18323d" stroke-width="3"/><text x="300" y="380" font-size="18">Value</text><text x="8" y="35" font-size="18">Frequency density</text><rect x="100" y="230" width="90" height="100" fill="#dff3fb" stroke="#3e93b5" stroke-width="3"/><rect x="190" y="130" width="140" height="200" fill="#dff3fb" stroke="#3e93b5" stroke-width="3"/><rect x="330" y="180" width="210" height="150" fill="#dff3fb" stroke="#3e93b5" stroke-width="3"/><rect x="540" y="90" width="80" height="240" fill="#dff3fb" stroke="#3e93b5" stroke-width="3"/></svg>';
  }
  if(t==="averages" && i===1){
    return '<svg class="diagram" viewBox="0 0 700 220" aria-label="Number line showing quartiles"><line x1="80" y1="110" x2="620" y2="110" stroke="#18323d" stroke-width="3"/><circle cx="190" cy="110" r="7" fill="#2563eb"/><circle cx="350" cy="110" r="7" fill="#2563eb"/><circle cx="510" cy="110" r="7" fill="#2563eb"/><text x="175" y="85" font-size="18">Q1</text><text x="325" y="85" font-size="18">Median</text><text x="495" y="85" font-size="18">Q3</text></svg>';
  }
  if(["angles","parallel","polygons"].includes(t)) return diagramFor(t);
  if(["circle","sector"].includes(t)) return diagramFor(t);
  if(t==="sets") return diagramFor(t);
  if(["functions","inverse","composite"].includes(t)) return diagramFor(t);
  if(["ineq-numberline","ineq-linear"].includes(t)) return diagramFor(t);
  return "";
}

function renderModelBoard(id){
  return '<div class="model-area"><div class="model-label"><span>Model here</span><small>Write on the squared grid with mouse, finger or Apple Pencil</small></div><div class="board-tools compact" data-tools-for="'+id+'"><button class="colour-dot active" data-colour="#132d36" aria-label="Black pen"></button><button class="colour-dot" data-colour="#2563eb" aria-label="Blue pen"></button><button class="colour-dot" data-colour="#dc2626" aria-label="Red pen"></button><button class="colour-dot" data-colour="#15803d" aria-label="Green pen"></button><button class="tool-btn eraser-btn">Eraser</button><button class="tool-btn clear-btn">Clear</button></div><div class="model-canvas-shell"><canvas class="model-board" id="'+id+'"></canvas></div></div>';
}

function initModelBoards(){
  $$(".model-board").forEach(function(canvas){
    var shell=canvas.parentElement, tools=shell.previousElementSibling, ctx=canvas.getContext("2d");
    var drawing=false,last=null,colour="#132d36",erase=false;
    function resize(){
      var dpr=window.devicePixelRatio||1, r=shell.getBoundingClientRect();
      canvas.width=Math.max(1,Math.floor(r.width*dpr));
      canvas.height=Math.max(1,Math.floor(r.height*dpr));
      canvas.style.width=r.width+"px"; canvas.style.height=r.height+"px";
      ctx.setTransform(dpr,0,0,dpr,0,0);
    }
    resize();
    function p(e){var r=canvas.getBoundingClientRect();return{x:e.clientX-r.left,y:e.clientY-r.top,pressure:e.pressure||0.5};}
    canvas.addEventListener("pointerdown",function(e){drawing=true;last=p(e);canvas.setPointerCapture(e.pointerId);});
    canvas.addEventListener("pointermove",function(e){
      if(!drawing)return; var q=p(e);
      ctx.lineCap="round";ctx.lineJoin="round";
      ctx.globalCompositeOperation=erase?"destination-out":"source-over";
      ctx.strokeStyle=colour;
      ctx.lineWidth=erase?24:Math.max(2.2,2.5+q.pressure*3.5);
      ctx.beginPath();ctx.moveTo(last.x,last.y);ctx.lineTo(q.x,q.y);ctx.stroke();last=q;
    });
    canvas.addEventListener("pointerup",function(){drawing=false;});
    canvas.addEventListener("pointercancel",function(){drawing=false;});
    tools.querySelectorAll(".colour-dot").forEach(function(b){
      b.onclick=function(){erase=false;colour=b.dataset.colour;tools.querySelectorAll(".colour-dot").forEach(x=>x.classList.toggle("active",x===b));};
    });
    tools.querySelector(".eraser-btn").onclick=function(){erase=true;tools.querySelectorAll(".colour-dot").forEach(x=>x.classList.remove("active"));};
    tools.querySelector(".clear-btn").onclick=function(){ctx.clearRect(0,0,canvas.width,canvas.height);};
  });
}

function setupExampleDeck(){
  var slides=$$(".example-slide");
  function show(n){
    exampleSlide=Math.max(0,Math.min(slides.length-1,n));
    slides.forEach((s,i)=>s.classList.toggle("active",i===exampleSlide));
    var count=$("#exampleCount"); if(count)count.textContent=(exampleSlide+1)+" / "+slides.length;
    var p=$("#examplePrev"), nx=$("#exampleNext"); if(p)p.disabled=exampleSlide===0;if(nx)nx.disabled=exampleSlide===slides.length-1;
  }
  var p=$("#examplePrev"), n=$("#exampleNext");
  if(p)p.onclick=function(){show(exampleSlide-1);};
  if(n)n.onclick=function(){show(exampleSlide+1);};
  $$(".example-dot").forEach(function(d){d.onclick=function(){show(+d.dataset.slide);};});
  show(Number.isInteger(exampleSlide)?exampleSlide:0);
}

function render(){
  var l=LESSONS[current], b=upgradedBank(l);
  if(current!==lastExampleLesson){exampleSlide=0;lastExampleLesson=current;}
  $("#unitPill").textContent="Unit "+l.u+" • "+l.unit;
  $("#lessonTitle").textContent=l.id+"  "+l.title;
  $("#lessonSubtitle").textContent="Cambridge IGCSE Mathematics • lesson-by-lesson teaching sequence";
  $("#prevBtn").disabled=current===0; $("#nextBtn").disabled=current===LESSONS.length-1;
  $$(".tab").forEach(x=>x.classList.toggle("active",x.dataset.tab===tab));
  renderNav($("#search").value);

  if(tab==="learn"){
    $("#content").innerHTML=
      '<section class="teaching-slide intro-teaching-slide"><div class="slide-kicker">START HERE</div><div class="learn-grid">'+
      '<article class="card flat"><h3>Prior knowledge check</h3><p class="lead">Students should be ready to recall:</p><ul class="clean-list">'+l.prior.map(x=>'<li>'+x+'</li>').join("")+'</ul></article>'+
      '<article class="card flat"><h3>Learning points</h3><p class="lead">By the end of the lesson, students should be able to:</p><ul class="clean-list">'+l.obj.map(x=>'<li>'+x+'</li>').join("")+'</ul></article>'+
      '</div><div class="source-strip"><strong>Textbook calibration:</strong> '+l.src+'. Questions are original but matched to the SoW/textbook progression.</div></section>';
  }

  if(tab==="examples"){
    $("#content").innerHTML=
      '<div class="deck-toolbar"><div><strong>Teacher examples</strong><span id="exampleCount"></span></div><div class="deck-buttons"><button id="examplePrev" class="ghost-btn">← Previous example</button><button id="exampleNext" class="primary-btn">Next example →</button></div></div>'+
      '<div class="example-deck">'+b.examples.map(function(e,i){
        var diag=diagramForExample(l.type,i);
        return '<section class="example-slide teaching-slide" data-slide="'+i+'"><div class="slide-kicker">EXAMPLE '+(i+1)+' OF '+b.examples.length+'</div><div class="example-question">'+e.q+'</div>'+
          (diag?'<div class="example-diagram">'+diag+'</div>':'')+
          renderModelBoard('model-board-'+current+'-'+i)+
          '<details class="worked-solution"><summary>Show model solution</summary><div class="solution-paper"><div class="solution-title">Worked solution</div><div class="steps">'+e.steps.map((s,j)=>'<div class="step"><span class="step-badge">'+(j+1)+'</span><div>'+s+'</div></div>').join("")+'</div></div></details>'+
          '</section>';
      }).join("")+'</div>'+
      '<div class="example-dots">'+b.examples.map((_,i)=>'<button class="example-dot" data-slide="'+i+'" aria-label="Go to example '+(i+1)+'">'+(i+1)+'</button>').join("")+'</div>';
  }

  if(tab==="practice"){
    var ep=extraPractice(l.type);
    var merged={};
    ["foundation","core","extension"].forEach(function(k){merged[k]=(b.practice[k]||[]).concat(ep[k]||[]);});
    $("#content").innerHTML='<article class="card practice-sheet"><div class="sheet-head"><div><div class="slide-kicker">INDEPENDENT PRACTICE</div><h3>Progressive practice</h3></div><span class="question-count">'+(merged.foundation.length+merged.core.length+merged.extension.length+ep.problems.length)+' questions</span></div>'+
      '<div class="tiers">'+[["Foundation","foundation"],["Core","core"],["Extension","extension"]].map(function(pair){var name=pair[0],k=pair[1];return '<section class="tier '+k+'"><h4>'+name+'</h4><ol class="q-list">'+merged[k].map(q=>'<li>'+q+'</li>').join("")+'</ol></section>';}).join("")+'</div>'+
      '<section class="problem-solving"><div class="slide-kicker">REASONING & PROBLEM SOLVING</div><h4>Exam-style thinking</h4><ol class="q-list">'+ep.problems.map(q=>'<li>'+q+'</li>').join("")+'</ol></section></article>';
  }

  if(tab==="homework"){
    var allHw=(b.homework||[]).concat(extraHomework(l.type));
    $("#content").innerHTML='<article class="card homework-sheet"><div class="sheet-head"><div><div class="slide-kicker">HOMEWORK</div><h3>Mixed retrieval, fluency and problem solving</h3></div><span class="question-count">'+allHw.length+' questions</span></div><p class="lead">Attempt every question before opening its worked solution.</p>'+
      allHw.map(function(h,i){return '<div class="hw-item"><div class="hw-q"><span class="q-number">'+(i+1)+'</span><span class="pill">'+h.tier+'</span><span>'+h.q+'</span></div><details class="solution"><summary>Show solution</summary><div class="solution-body"><div class="steps">'+h.sol.map((s,j)=>'<div class="step"><span class="step-badge">'+(j+1)+'</span><div>'+s+'</div></div>').join("")+'</div></div></details></div>';}).join("")+'</article>';
  }

  if(tab==="whiteboard"){
    $("#content").innerHTML='<article class="card board-card"><div class="board-tools"><strong>Whole-class whiteboard</strong><button class="colour-dot active" data-colour="#132d36" aria-label="Black pen"></button><button class="colour-dot" data-colour="#2563eb" aria-label="Blue pen"></button><button class="colour-dot" data-colour="#dc2626" aria-label="Red pen"></button><button class="colour-dot" data-colour="#15803d" aria-label="Green pen"></button><button id="eraser" class="tool-btn">Eraser</button><button id="clearBoard" class="tool-btn">Clear</button></div><div class="canvas-shell"><canvas id="board"></canvas></div></article>';
  }

  if(window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([$("#content")]);
  if(tab==="examples"){initModelBoards();setupExampleDeck();}
  if(tab==="whiteboard") initBoard();
  location.hash=l.id+"-"+tab;
}


/* v2.1 canvas lifecycle: initialise boards only when their slide is visible */
function initModelBoards(){
  $$(".model-board").forEach(function(canvas){
    var shell=canvas.parentElement;
    var rect=shell.getBoundingClientRect();
    if(rect.width<20 || rect.height<20) return;
    var dpr=window.devicePixelRatio||1;
    function sizeCanvas(){
      var r=shell.getBoundingClientRect();
      if(r.width<20||r.height<20)return;
      var targetW=Math.max(1,Math.floor(r.width*dpr));
      var targetH=Math.max(1,Math.floor(r.height*dpr));
      canvas.style.width=r.width+"px";canvas.style.height=r.height+"px";
      if(canvas.width===targetW && canvas.height===targetH) return;
      canvas.width=targetW;
      canvas.height=targetH;
      var cx=canvas.getContext("2d");cx.setTransform(dpr,0,0,dpr,0,0);
    }
    if(canvas.dataset.bound==="1"){sizeCanvas();return;}
    canvas.dataset.bound="1";sizeCanvas();
    var tools=shell.previousElementSibling,ctx=canvas.getContext("2d");
    var drawing=false,last=null,colour="#132d36",erase=false;
    function p(e){var r=canvas.getBoundingClientRect();return{x:e.clientX-r.left,y:e.clientY-r.top,pressure:e.pressure||0.5};}
    canvas.addEventListener("pointerdown",function(e){drawing=true;last=p(e);canvas.setPointerCapture(e.pointerId);});
    canvas.addEventListener("pointermove",function(e){
      if(!drawing)return;var q=p(e);
      ctx.lineCap="round";ctx.lineJoin="round";
      ctx.globalCompositeOperation=erase?"destination-out":"source-over";
      ctx.strokeStyle=colour;ctx.lineWidth=erase?24:Math.max(2.2,2.5+q.pressure*3.5);
      ctx.beginPath();ctx.moveTo(last.x,last.y);ctx.lineTo(q.x,q.y);ctx.stroke();last=q;
    });
    canvas.addEventListener("pointerup",function(){drawing=false;});
    canvas.addEventListener("pointercancel",function(){drawing=false;});
    tools.querySelectorAll(".colour-dot").forEach(function(b){
      b.onclick=function(){erase=false;colour=b.dataset.colour;tools.querySelectorAll(".colour-dot").forEach(x=>x.classList.toggle("active",x===b));};
    });
    tools.querySelector(".eraser-btn").onclick=function(){erase=true;tools.querySelectorAll(".colour-dot").forEach(x=>x.classList.remove("active"));};
    tools.querySelector(".clear-btn").onclick=function(){ctx.clearRect(0,0,canvas.width,canvas.height);};
  });
}
function setupExampleDeck(){
  var slides=$$(".example-slide");
  function show(n){
    exampleSlide=Math.max(0,Math.min(slides.length-1,n));
    slides.forEach((s,i)=>s.classList.toggle("active",i===exampleSlide));
    $$(".example-dot").forEach((d,i)=>d.classList.toggle("active",i===exampleSlide));
    var count=$("#exampleCount");if(count)count.textContent=(exampleSlide+1)+" / "+slides.length;
    var p=$("#examplePrev"),nx=$("#exampleNext");if(p)p.disabled=exampleSlide===0;if(nx)nx.disabled=exampleSlide===slides.length-1;
    requestAnimationFrame(initModelBoards);
  }
  var p=$("#examplePrev"),n=$("#exampleNext");
  if(p)p.onclick=function(){show(exampleSlide-1);};
  if(n)n.onclick=function(){show(exampleSlide+1);};
  $$(".example-dot").forEach(function(d){d.onclick=function(){show(+d.dataset.slide);};});
  show(Number.isInteger(exampleSlide)?exampleSlide:0);
}


/* ===== Teaching Hub v3: textbook-pattern lesson banks ===== */
function textbookLens(l,i){
  var map={
    "12.1":["simplify surds","write a surd as one square root","spot and correct an error","exact-value geometry"],
    "12.2":["single-surd denominator","simplify then rationalise","conjugate denominator","multi-step exact expression"],
    "13.1":["HCF cancellation","indices in algebraic fractions","factorise then cancel","reason about excluded values"],
    "13.2":["multiply/divide algebraic fractions","common denominator","factor denominators first","simplify a complex result"],
    "16.1":["angles on a line","angles around a point","vertically opposite angles","multi-step angle reasoning"],
    "16.2":["corresponding angles","alternate angles","co-interior angles","parallel-line algebra"],
    "16.3":["interior-angle sum","regular-polygon exterior angle","reverse polygon problem","mixed polygon reasoning"],
    "17.2":["perimeter from a diagram","area of a trapezium/parallelogram","compound area","reverse mensuration problem"],
    "17.4":["minor sector","major sector","sector perimeter","reverse arc/sector problem"],
    "19.1":["frequency table to bar chart","pie chart","stem-and-leaf","compare representations"],
    "19.2":["identify correlation","plot bivariate data","line of best fit","interpolation vs extrapolation"],
    "19.5":["cumulative totals","plot upper class boundaries","read median/quartiles","percentile problem"],
    "19.7":["frequency density","complete a histogram","recover missing frequency","interpret unequal-width classes"],
    "20.3":["form fg and gf","evaluate a composite","repeat a function","domain/restriction reasoning"]
  };
  var a=map[l.id]||[];
  return a[i]||"textbook-style progression";
}

function deepTextbookBank(l){
  if(l.id==="12.1") return {
    examples:[
      ex("Simplify \\\\(\\\\sqrt{108}\\\\).",[
        "Look for the largest square factor: \\\\(108=36\\\\times3\\\\).",
        "\\\\(\\\\sqrt{108}=\\\\sqrt{36}\\\\sqrt3\\\\).",
        "Therefore \\\\(\\\\sqrt{108}=6\\\\sqrt3\\\\)."
      ]),
      ex("Write \\\\(5\\\\sqrt6\\\\) in the form \\\\(\\\\sqrt n\\\\).",[
        "Write 5 as \\\\(\\\\sqrt{25}\\\\).",
        "\\\\(5\\\\sqrt6=\\\\sqrt{25}\\\\sqrt6\\\\).",
        "\\\\(=\\\\sqrt{150}\\\\), so \\\\(n=150\\\\)."
      ]),
      ex("A student writes \\\\(\\\\sqrt8+\\\\sqrt{18}=\\\\sqrt{26}\\\\). Explain the error and find the correct answer.",[
        "Square roots do not distribute over addition.",
        "Simplify each surd separately: \\\\(\\\\sqrt8=2\\\\sqrt2\\\\), \\\\(\\\\sqrt{18}=3\\\\sqrt2\\\\).",
        "Collect like surds: \\\\(2\\\\sqrt2+3\\\\sqrt2=5\\\\sqrt2\\\\)."
      ]),
      ex("A rectangle has side lengths \\\\(3+\\\\sqrt{12}\\\\) cm and \\\\(2\\\\sqrt3\\\\) cm. Find its exact perimeter in simplest form.",[
        "Simplify first: \\\\(\\\\sqrt{12}=2\\\\sqrt3\\\\), so the first side is \\\\(3+2\\\\sqrt3\\\\).",
        "Perimeter \\\\(=2[(3+2\\\\sqrt3)+2\\\\sqrt3]\\\\).",
        "\\\\(=2(3+4\\\\sqrt3)=6+8\\\\sqrt3\\\\text{ cm}\\\\)."
      ])
    ],
    practice:{
      foundation:[
        "Simplify \\\\(\\\\sqrt{28}\\\\).",
        "Simplify \\\\(\\\\sqrt{72}\\\\).",
        "Simplify \\\\(3\\\\sqrt{50}\\\\).",
        "Simplify \\\\(\\\\sqrt{12}+\\\\sqrt{27}\\\\).",
        "Simplify \\\\(5\\\\sqrt8-\\\\sqrt{32}\\\\).",
        "Write \\\\(3\\\\sqrt5\\\\) in the form \\\\(\\\\sqrt n\\\\)."
      ],
      core:[
        "Write \\\\(4\\\\sqrt7\\\\) in the form \\\\(\\\\sqrt n\\\\).",
        "Arrange \\\\(2\\\\sqrt5,3\\\\sqrt2,\\\\sqrt{19}\\\\) in ascending order without a calculator.",
        "Simplify \\\\(2\\\\sqrt3+3\\\\sqrt{12}-\\\\sqrt{75}\\\\).",
        "Expand and simplify \\\\(\\\\sqrt3(4+\\\\sqrt{12})\\\\).",
        "Expand and simplify \\\\((2+\\\\sqrt5)(3-\\\\sqrt5)\\\\).",
        "Give a counterexample to show \\\\(\\\\sqrt a+\\\\sqrt b=\\\\sqrt{a+b}\\\\) is not generally true."
      ],
      extension:[
        "A rectangle has sides \\\\(2+\\\\sqrt{10}\\\\) cm and \\\\(\\\\sqrt5\\\\) cm. Find its exact perimeter.",
        "Show that \\\\(\\\\sqrt{48}-\\\\sqrt{27}=\\\\sqrt3\\\\).",
        "Find \\\\(x\\\\) if \\\\(x\\\\sqrt7=\\\\sqrt{343}\\\\).",
        "A right triangle has legs \\\\(4\\\\sqrt7\\\\) and \\\\(x\\\\), and hypotenuse \\\\(2\\\\sqrt{35}\\\\). Find \\\\(x\\\\) exactly.",
        "A student claims \\\\(\\\\sqrt{50}-\\\\sqrt8=\\\\sqrt{42}\\\\). Diagnose and correct the method.",
        "Prove that the product of \\\\(\\\\sqrt{12}\\\\) and \\\\(\\\\sqrt{27}\\\\) is rational."
      ]
    },
    homework:[
      hw("Foundation","Simplify \\\\(\\\\sqrt{75}\\\\).",["\\\\(75=25\\\\times3\\\\).","\\\\(\\\\sqrt{75}=5\\\\sqrt3\\\\)."]),
      hw("Foundation","Write \\\\(2\\\\sqrt{11}\\\\) as \\\\(\\\\sqrt n\\\\).",["\\\\(2=\\\\sqrt4\\\\).","\\\\(2\\\\sqrt{11}=\\\\sqrt{44}\\\\), so \\\\(n=44\\\\)."]),
      hw("Core","Simplify \\\\(4\\\\sqrt{18}-3\\\\sqrt8\\\\).",["\\\\(\\\\sqrt{18}=3\\\\sqrt2\\\\), \\\\(\\\\sqrt8=2\\\\sqrt2\\\\).","\\\\(12\\\\sqrt2-6\\\\sqrt2=6\\\\sqrt2\\\\)."]),
      hw("Core","Expand and simplify \\\\((3+\\\\sqrt2)(2-\\\\sqrt2)\\\\).",["Expand: \\\\(6-3\\\\sqrt2+2\\\\sqrt2-2\\\\).","Collect terms: \\\\(4-\\\\sqrt2\\\\)."]),
      hw("Extension","Show that \\\\(3\\\\sqrt8+2\\\\sqrt{18}=12\\\\sqrt2\\\\).",["\\\\(3\\\\sqrt8=6\\\\sqrt2\\\\).","\\\\(2\\\\sqrt{18}=6\\\\sqrt2\\\\).","Total \\\\(=12\\\\sqrt2\\\\)."]),
      hw("Extension","A square has exact perimeter \\\\(20\\\\sqrt3\\\\) cm. Find its exact area.",["Side \\\\(=5\\\\sqrt3\\\\) cm.","Area \\\\(=(5\\\\sqrt3)^2=75\\\\text{ cm}^2\\\\)."])
    ]
  };

  if(l.id==="12.2") return {
    examples:[
      ex("Rationalise \\\\(\\\\dfrac{7}{\\\\sqrt5}\\\\).",[
        "Multiply numerator and denominator by \\\\(\\\\sqrt5\\\\).",
        "\\\\(\\\\dfrac{7}{\\\\sqrt5}\\\\times\\\\dfrac{\\\\sqrt5}{\\\\sqrt5}=\\\\dfrac{7\\\\sqrt5}{5}\\\\)."
      ]),
      ex("Rationalise \\\\(\\\\dfrac{\\\\sqrt{18}}{\\\\sqrt8}\\\\).",[
        "Simplify first: \\\\(\\\\sqrt{18}=3\\\\sqrt2\\\\), \\\\(\\\\sqrt8=2\\\\sqrt2\\\\).",
        "\\\\(\\\\dfrac{3\\\\sqrt2}{2\\\\sqrt2}=\\\\dfrac32\\\\).",
        "The denominator is already rational after cancellation."
      ]),
      ex("Rationalise \\\\(\\\\dfrac{4}{3-\\\\sqrt5}\\\\).",[
        "Use the conjugate \\\\(3+\\\\sqrt5\\\\).",
        "Denominator: \\\\((3-\\\\sqrt5)(3+\\\\sqrt5)=9-5=4\\\\).",
        "Numerator: \\\\(4(3+\\\\sqrt5)\\\\).",
        "Cancel 4 to obtain \\\\(3+\\\\sqrt5\\\\)."
      ]),
      ex("Write \\\\(\\\\dfrac{2+\\\\sqrt3}{2-\\\\sqrt3}\\\\) in the form \\\\(a+b\\\\sqrt3\\\\).",[
        "Multiply by the conjugate \\\\((2+\\\\sqrt3)/(2+\\\\sqrt3)\\\\).",
        "Denominator \\\\(=4-3=1\\\\).",
        "Numerator \\\\((2+\\\\sqrt3)^2=4+4\\\\sqrt3+3\\\\).",
        "Answer \\\\(7+4\\\\sqrt3\\\\)."
      ])
    ],
    practice:{
      foundation:["Rationalise \\\\(3/\\\\sqrt2\\\\).","Rationalise \\\\(5/\\\\sqrt7\\\\).","Rationalise \\\\(2\\\\sqrt3/\\\\sqrt5\\\\).","Simplify \\\\(\\\\sqrt{45}/\\\\sqrt5\\\\).","Simplify \\\\(\\\\sqrt{72}/\\\\sqrt8\\\\).","Rationalise \\\\(1/(2+\\\\sqrt3)\\\\)."],
      core:["Rationalise \\\\(6/(3+\\\\sqrt2)\\\\).","Rationalise \\\\(5/(\\\\sqrt7-1)\\\\).","Rationalise \\\\(3/(2-\\\\sqrt5)\\\\).","Simplify \\\\((2\\\\sqrt2+\\\\sqrt6)/\\\\sqrt2\\\\).","Rationalise and simplify \\\\(\\\\sqrt3/(4-\\\\sqrt3)\\\\).","Write \\\\((3+\\\\sqrt2)/(3-\\\\sqrt2)\\\\) in the form \\\\(a+b\\\\sqrt2\\\\)."],
      extension:["Rationalise \\\\(2/(\\\\sqrt7-\\\\sqrt5)\\\\).","Simplify fully \\\\((\\\\sqrt{18}-\\\\sqrt8)/(2+\\\\sqrt2)\\\\).","Show that \\\\(1/(\\\\sqrt5-2)=\\\\sqrt5+2\\\\).","Rationalise \\\\((2\\\\sqrt3+1)/(\\\\sqrt3-1)\\\\).","Find exact value of \\\\(1/(2+\\\\sqrt3)+1/(2-\\\\sqrt3)\\\\).","Explain why the conjugate removes the surd from a binomial denominator."]
    },
    homework:[
      hw("Foundation","Rationalise \\\\(4/\\\\sqrt3\\\\).",["Multiply by \\\\(\\\\sqrt3/\\\\sqrt3\\\\).","Answer \\\\(4\\\\sqrt3/3\\\\)."]),
      hw("Foundation","Simplify \\\\(\\\\sqrt{50}/\\\\sqrt2\\\\).",["\\\\(\\\\sqrt{50/2}=\\\\sqrt{25}=5\\\\)."]),
      hw("Core","Rationalise \\\\(3/(2+\\\\sqrt3)\\\\).",["Use conjugate \\\\(2-\\\\sqrt3\\\\).","Denominator \\\\(=1\\\\).","Answer \\\\(6-3\\\\sqrt3\\\\)."]),
      hw("Core","Rationalise \\\\(5/(4-\\\\sqrt7)\\\\).",["Use \\\\(4+\\\\sqrt7\\\\).","Denominator \\\\(=16-7=9\\\\).","Answer \\\\(5(4+\\\\sqrt7)/9\\\\)."]),
      hw("Extension","Simplify \\\\((1+\\\\sqrt2)/(1-\\\\sqrt2)\\\\).",["Multiply by \\\\(1+\\\\sqrt2\\\\).","Denominator \\\\(=1-2=-1\\\\).","Numerator \\\\(=3+2\\\\sqrt2\\\\).","Answer \\\\(-3-2\\\\sqrt2\\\\)."]),
      hw("Extension","Evaluate exactly \\\\(1/(\\\\sqrt3-1)-1/(\\\\sqrt3+1)\\\\).",["Rationalise each term or combine first.","The difference simplifies to \\\\(1\\\\)."])
    ]
  };

  if(l.id==="13.1") return {
    examples:[
      ex("Simplify \\\\(\\\\dfrac{18x^3}{24x^5}\\\\).",[
        "HCF of 18 and 24 is 6, so \\\\(18/24=3/4\\\\).",
        "\\\\(x^3/x^5=1/x^2\\\\).",
        "Answer \\\\(\\\\dfrac{3}{4x^2}\\\\), with \\\\(x\\\\ne0\\\\)."
      ]),
      ex("Simplify \\\\(\\\\dfrac{x^2-5x+6}{x^2-x-6}\\\\).",[
        "Factor numerator: \\\\((x-2)(x-3)\\\\).",
        "Factor denominator: \\\\((x-3)(x+2)\\\\).",
        "Cancel the common factor \\\\((x-3)\\\\).",
        "Answer \\\\(\\\\dfrac{x-2}{x+2}\\\\), with original restrictions \\\\(x\\\\ne3,-2\\\\)."
      ]),
      ex("Simplify \\\\(\\\\dfrac{4x^2-16}{2x^2+10x+12}\\\\).",[
        "Factor numerator: \\\\(4(x-2)(x+2)\\\\).",
        "Factor denominator: \\\\(2(x+2)(x+3)\\\\).",
        "Cancel \\\\(2(x+2)\\\\).",
        "Answer \\\\(\\\\dfrac{2(x-2)}{x+3}\\\\)."
      ]),
      ex("A student cancels the x in \\\\(\\\\dfrac{x+5}{x}\\\\) and writes 5. Explain why this is invalid.",[
        "Cancellation works only with common factors, not individual terms joined by addition.",
        "The numerator \\\\(x+5\\\\) is not a product containing x as a factor.",
        "The fraction may be rewritten as \\\\(1+5/x\\\\), not 5."
      ])
    ],
    practice:{
      foundation:["Simplify \\\\(12x/18\\\\).","Simplify \\\\(15a^2/(5a)\\\\).","Simplify \\\\(18p^3/(24p^5)\\\\).","Simplify \\\\((x^2-9)/(x-3)\\\\).","Simplify \\\\((x^2+6x)/(x)\\\\).","State the excluded value for \\\\((x+1)/(x-4)\\\\)."],
      core:["Simplify \\\\((x^2-16)/(x^2+x-20)\\\\).","Simplify \\\\((2x^2-8)/(x^2+5x+6)\\\\).","Simplify \\\\((3x^2+12x)/(x^2+6x+8)\\\\).","Simplify \\\\((x^2-2x-15)/(x^2-25)\\\\).","State all excluded values before simplifying \\\\((x^2-1)/(x^2-3x+2)\\\\).","Explain why \\\\((2x+6)/(2x)\\\\) cannot simplify to 3."],
      extension:["Simplify \\\\((2x^2-18)/(x^2+x-12)\\\\).","Simplify \\\\((x^3-4x)/(x^2-x-6)\\\\).","Simplify and state restrictions: \\\\((x^2-4x+4)/(x^2-4)\\\\).","Find x if \\\\((x^2-9)/(x-3)=10\\\\), respecting restrictions.","Create a rational expression that simplifies to \\\\((x-1)/(x+4)\\\\) but has two excluded values.","Explain why cancelled factors still create excluded values in the original expression."]
    },
    homework:[
      hw("Foundation","Simplify \\\\(20x^2/(30x)\\\\).",["\\\\(20/30=2/3\\\\) and \\\\(x^2/x=x\\\\).","Answer \\\\(2x/3\\\\)."]),
      hw("Foundation","Simplify \\\\((x^2-25)/(x-5)\\\\).",["Factor \\\\(x^2-25=(x-5)(x+5)\\\\).","Cancel to get \\\\(x+5\\\\), with \\\\(x\\\\ne5\\\\)."]),
      hw("Core","Simplify \\\\((x^2+7x+12)/(x^2+5x+4)\\\\).",["Factor to \\\\((x+3)(x+4)/(x+1)(x+4)\\\\).","Cancel \\\\(x+4\\\\).","Answer \\\\((x+3)/(x+1)\\\\)."]),
      hw("Core","Simplify \\\\((2x^2-8x)/(x^2-16)\\\\).",["Factor top \\\\(2x(x-4)\\\\), bottom \\\\((x-4)(x+4)\\\\).","Answer \\\\(2x/(x+4)\\\\)."]),
      hw("Extension","Simplify and state restrictions: \\\\((x^2-6x+9)/(x^2-9)\\\\).",["Factor \\\\((x-3)^2/[(x-3)(x+3)]\\\\).","Answer \\\\((x-3)/(x+3)\\\\).","Restrictions \\\\(x\\\\ne3,-3\\\\)."]),
      hw("Extension","Explain why \\\\((x+2)/(x)\\\\ne2\\\\) in general.",["The numerator is a sum, not a product with x as a common factor.","For example x=2 gives 2, but x=1 gives 3."])
    ]
  };

  if(l.id==="13.2") return {
    examples:[
      ex("Simplify \\\\(\\\\dfrac{3x}{4}\\\\times\\\\dfrac{8}{9x}\\\\).",[
        "Multiply numerators and denominators.",
        "Cancel common factors: \\\\(8/4=2\\\\), \\\\(3/9=1/3\\\\), x cancels.",
        "Answer \\\\(2/3\\\\)."
      ]),
      ex("Simplify \\\\(\\\\dfrac{5a}{6}\\\\div\\\\dfrac{10a^2}{9}\\\\).",[
        "Multiply by the reciprocal: \\\\(\\\\dfrac{5a}{6}\\\\times\\\\dfrac{9}{10a^2}\\\\).",
        "Cancel common factors.",
        "Answer \\\\(\\\\dfrac{3}{4a}\\\\)."
      ]),
      ex("Write \\\\(\\\\dfrac{2}{x} + \\\\dfrac{3}{x+1}\\\\) as a single fraction.",[
        "LCD is \\\\(x(x+1)\\\\).",
        "\\\\(\\\\dfrac{2(x+1)+3x}{x(x+1)}\\\\).",
        "Numerator simplifies to \\\\(5x+2\\\\).",
        "Answer \\\\(\\\\dfrac{5x+2}{x(x+1)}\\\\)."
      ]),
      ex("Simplify \\\\(\\\\dfrac{3x+4}{x^2+x-6}-\\\\dfrac1{x+3}\\\\).",[
        "Factor \\\\(x^2+x-6=(x+3)(x-2)\\\\).",
        "LCD is \\\\((x+3)(x-2)\\\\).",
        "Numerator becomes \\\\(3x+4-(x-2)=2x+6=2(x+3)\\\\).",
        "Cancel \\\\(x+3\\\\) to get \\\\(\\\\dfrac2{x-2}\\\\)."
      ])
    ],
    practice:{
      foundation:["\\\\((2x/3)\\\\times(9/(4x)))\\\\)","\\\\((5a/8)\\\\div(15a/16)\\\\)","\\\\(2/x+5/x\\\\)","\\\\(7/y-3/y\\\\)","\\\\(1/x+1/2\\\\)","\\\\(3/(x+1)+2/(x+1)\\\\)"],
      core:["\\\\(1/x+2/(x+3)\\\\)","\\\\(4/(x-2)-1/(x+1)\\\\)","\\\\((x+2)/3)\\\\times(6/(x^2-4))\\\\)","\\\\((x^2-9)/(2x))\\\\div((x+3)/4)\\\\)","\\\\(2/(x+1)+3/(x-1)\\\\)","\\\\((3x+1)/(x^2-4))-1/(x-2)\\\\)"],
      extension:["Simplify \\\\(1/(x-1)-1/(x+1)\\\\).","Simplify \\\\((x/(x-2))\\\\div(2x/(x+5))\\\\).","Simplify fully \\\\((x+1)/(x-1)+(x-1)/(x+1)\\\\).","Find x if \\\\(1/x+1/(x+2)=3/4\\\\).","Show that \\\\((3x+4)/(x^2+x-6)-1/(x+3)=2/(x-2)\\\\).","Explain why factorising denominators first can reduce algebraic work."]
    },
    homework:[
      hw("Foundation","Simplify \\\\(3/x+4/x\\\\).",["Same denominator, so add numerators.","Answer \\\\(7/x\\\\)."]),
      hw("Foundation","Simplify \\\\((4x/5)\\\\times(15/(8x))\\\\).",["Cancel x, reduce 15/5 and 4/8.","Answer \\\\(3/2\\\\)."]),
      hw("Core","Simplify \\\\(1/x+2/(x+2)\\\\).",["LCD \\\\(x(x+2)\\\\).","Numerator \\\\(x+2+2x=3x+2\\\\).","Answer \\\\((3x+2)/(x(x+2))\\\\)."]),
      hw("Core","Simplify \\\\(3/(x-1)-1/(x+1)\\\\).",["LCD \\\\((x-1)(x+1)\\\\).","Numerator \\\\(3(x+1)-(x-1)=2x+4\\\\).","Answer \\\\(2(x+2)/(x^2-1)\\\\)."]),
      hw("Extension","Simplify \\\\((x^2-4)/(3x)\\\\div((x+2)/(6x))\\\\).",["Multiply by reciprocal.","\\\\((x-2)(x+2)/(3x))\\\\times(6x/(x+2))\\\\).","Answer \\\\(2(x-2)\\\\)."]),
      hw("Extension","Write \\\\(2/(x+3)+1/(x-3)\\\\) as one fraction.",["LCD \\\\((x+3)(x-3)\\\\).","Numerator \\\\(2(x-3)+(x+3)=3x-3\\\\).","Answer \\\\(3(x-1)/(x^2-9)\\\\)."])
    ]
  };

  if(l.id==="16.1") return {
    examples:[
      ex("In the diagram, \\\\(112^\\\\circ\\\\) and \\\\(x\\\\) lie on a straight line. Find x and give a reason.",[
        "Angles on a straight line sum to \\\\(180^\\\\circ\\\\).",
        "\\\\(112+x=180\\\\).",
        "\\\\(x=68^\\\\circ\\\\)."
      ]),
      ex("Angles around a point are \\\\(82^\\\\circ,82^\\\\circ,x,y,z\\\\). Two adjacent right angles are shown. Find the unknown angles.",[
        "Use right-angle information first where marked.",
        "Use vertically opposite angles where appropriate.",
        "Finally use angles around a point sum to \\\\(360^\\\\circ\\\\)."
      ]),
      ex("Two lines cross. One angle is \\\\(115^\\\\circ\\\\). Find the vertically opposite angle and each adjacent angle.",[
        "Vertically opposite angle \\\\(=115^\\\\circ\\\\).",
        "Adjacent angles are supplementary.",
        "\\\\(180-115=65^\\\\circ\\\\)."
      ]),
      ex("Around a point, the angles are \\\\(x,2x,4x,150^\\\\circ\\\\). Find x.",[
        "Angles around a point sum to \\\\(360^\\\\circ\\\\).",
        "\\\\(x+2x+4x+150=360\\\\).",
        "\\\\(7x=210\\\\).",
        "\\\\(x=30^\\\\circ\\\\)."
      ])
    ],
    practice:{
      foundation:["Find x if \\\\(x+73=180\\\\).","Find the vertically opposite angle to \\\\(128^\\\\circ\\\\).","Three angles around a point are 90°, 110° and x. Find x.","A triangle has angles 48°, 67° and x. Find x.","A quadrilateral has angles 90°, 85°, 112° and x. Find x.","State the reason used in each answer."],
      core:["At a point, angles are x, x, 70°, 110°. Find x.","Two intersecting lines form angles \\\\(3x+5\\\\) and \\\\(5x-35\\\\) vertically opposite. Find x.","A straight line is split into \\\\(2x+10\\\\) and \\\\(5x-5\\\\). Find x.","A triangle has angles \\\\(x,2x,3x\\\\). Find all angles.","A quadrilateral has angles \\\\(x, x+20, 2x, 100\\\\). Find x.","Write a full reason beside every step."],
      extension:["A diagram contains a right angle split into \\\\(x\\\\) and \\\\(2x+9\\\\). Find x.","At an intersection one angle is \\\\(4x-7\\\\), adjacent angle \\\\(2x+31\\\\). Find x.","Construct your own angle problem with answer 36°.","Explain why vertically opposite angles are equal using straight-line sums.","A compound angle diagram requires three reasons. Write the solution in proof style.","Find all unknowns in a diagram combining a triangle and an intersecting line."]
    },
    homework:[
      hw("Foundation","Find x if \\\\(x+124=180\\\\).",["Straight line: \\\\(x=56^\\\\circ\\\\)."]),
      hw("Foundation","Find the angle vertically opposite \\\\(74^\\\\circ\\\\).",["Vertically opposite angles are equal.","Answer \\\\(74^\\\\circ\\\\)."]),
      hw("Core","Angles around a point are 95°, 80°, 75° and x. Find x.",["Total 360°.","\\\\(x=360-250=110^\\\\circ\\\\)."]),
      hw("Core","A triangle has angles \\\\(x,2x,75^\\\\circ\\\\). Find x.",["\\\\(3x+75=180\\\\).","\\\\(x=35^\\\\circ\\\\)."]),
      hw("Extension","Vertically opposite angles are \\\\(5x-8\\\\) and \\\\(3x+28\\\\). Find x.",["Set equal: \\\\(5x-8=3x+28\\\\).","\\\\(2x=36\\\\).","\\\\(x=18\\\\)."]),
      hw("Extension","A quadrilateral has angles \\\\(x,2x,3x,60^\\\\circ\\\\). Find x.",["Quadrilateral sum 360°.","\\\\(6x+60=360\\\\).","\\\\(x=50^\\\\circ\\\\)."])
    ]
  };

  if(l.id==="17.2") return {
    examples:[
      ex("A trapezium has parallel sides 7 cm and 10 cm, and the other sides are 4 cm each. Find its perimeter.",[
        "Perimeter is the sum of all outside edges.",
        "\\\\(P=7+10+4+4=25\\\\text{ cm}\\\\)."
      ]),
      ex("Find the area of a parallelogram with base 8 m and perpendicular height 3.5 m.",[
        "Use \\\\(A=bh\\\\).",
        "\\\\(A=8\\\\times3.5=28\\\\text{ m}^2\\\\)."
      ]),
      ex("A house-shaped compound figure is a rectangle 5 m by 8 m topped by a triangle of base 5 m and height 4 m. Find its total area.",[
        "Rectangle area \\\\(=5\\\\times8=40\\\\).",
        "Triangle area \\\\(=\\\\tfrac12\\\\times5\\\\times4=10\\\\).",
        "Total area \\\\(=50\\\\text{ m}^2\\\\)."
      ]),
      ex("A trapezium has area 63 cm², height 6 cm and one parallel side 8 cm. Find the other parallel side.",[
        "\\\\(63=\\\\tfrac12(8+x)6\\\\).",
        "\\\\(63=3(8+x)\\\\).",
        "\\\\(21=8+x\\\\), so \\\\(x=13\\\\text{ cm}\\\\)."
      ])
    ],
    practice:{
      foundation:["Find perimeter of a rectangle 8 cm by 5 cm.","Find area of triangle base 12 cm, height 7 cm.","Find area of parallelogram base 9 cm, height 4 cm.","Find area of trapezium with parallel sides 6 cm and 10 cm, height 5 cm.","Find perimeter of a trapezium with sides 7,4,10,4 cm.","State correct units for each answer."],
      core:["A compound L-shape can be split into two rectangles. Find its area from given dimensions.","A triangle has area 45 cm² and base 10 cm. Find height.","A parallelogram has area 72 cm² and height 8 cm. Find base.","A trapezium has area 54 cm², height 6 cm and one parallel side 7 cm. Find the other.","A rectangular frame has outside dimensions 12 by 9 and border width 1. Find frame area.","Compare areas of two quadrilaterals with same perimeter."],
      extension:["A compound shape combines a trapezium and a triangle. Form an expression for its area.","A stained-glass triangle has base 45 cm and area 0.54 m². Find height in cm.","Find the missing dimension in a compound area problem.","Two shapes have equal area but different perimeters. Construct an example.","A trapezium and parallelogram have equal area. Find an unknown height.","Explain why sloping side length is irrelevant to parallelogram area."]
    },
    homework:[
      hw("Foundation","Find area of a triangle with base 15 cm and height 8 cm.",["\\\\(A=\\\\tfrac12\\\\times15\\\\times8=60\\\\text{ cm}^2\\\\)."]),
      hw("Foundation","Find perimeter of sides 4,6,7,9 cm.",["Add all sides: \\\\(26\\\\text{ cm}\\\\)."]),
      hw("Core","Find area of trapezium with parallel sides 9 cm and 14 cm, height 6 cm.",["\\\\(A=\\\\tfrac12(9+14)6=69\\\\text{ cm}^2\\\\)."]),
      hw("Core","A parallelogram has area 84 cm² and base 12 cm. Find height.",["\\\\(h=84/12=7\\\\text{ cm}\\\\)."]),
      hw("Extension","A rectangle 10 by 6 has a 4 by 2 rectangle removed. Find remaining area.",["Outer area 60.","Removed area 8.","Remaining area \\\\(52\\\\text{ units}^2\\\\)."]),
      hw("Extension","A trapezium has area 96 cm², height 8 cm, one parallel side 9 cm. Find the other.",["\\\\(96=4(9+x)\\\\).","\\\\(24=9+x\\\\).","\\\\(x=15\\\\text{ cm}\\\\)."])
    ]
  };

  if(l.id==="17.4") return {
    examples:[
      ex("Find the area and arc length of a sector of radius 6 cm and angle \\\\(40^\\\\circ\\\\).",[
        "Area \\\\(=(40/360)\\\\pi(6^2)=4\\\\pi\\\\text{ cm}^2\\\\).",
        "Arc length \\\\(=(40/360)2\\\\pi(6)=4\\\\pi/3\\\\text{ cm}\\\\)."
      ]),
      ex("A major sector has radius 4 cm and missing minor angle \\\\(65^\\\\circ\\\\). Find the major-sector angle and area.",[
        "Major angle \\\\(=360-65=295^\\\\circ\\\\).",
        "Area \\\\(=(295/360)\\\\pi(4^2)\\\\).",
        "Simplify or round as requested."
      ]),
      ex("A sector has radius 8 cm and angle \\\\(120^\\\\circ\\\\). Find its perimeter.",[
        "Arc length \\\\(=(120/360)2\\\\pi(8)=16\\\\pi/3\\\\).",
        "Perimeter includes two radii.",
        "\\\\(P=16+16\\\\pi/3\\\\text{ cm}\\\\)."
      ]),
      ex("A sector has arc length \\\\(5\\\\pi\\\\) cm and radius 12 cm. Find the angle.",[
        "\\\\(5\\\\pi=(\\\\theta/360)2\\\\pi(12)\\\\).",
        "Cancel \\\\(\\\\pi\\\\): \\\\(5=\\\\theta/15\\\\).",
        "\\\\(\\\\theta=75^\\\\circ\\\\)."
      ])
    ],
    practice:{
      foundation:["Find arc length: r=9 cm, angle 80°.","Find sector area: r=7 cm, angle 90°.","Find semicircle area for diameter 12 cm.","Find quadrant perimeter for radius 5 cm.","Find major angle if minor angle is 110°.","Give answers in terms of π where appropriate."],
      core:["Find area and perimeter of a 135° sector of radius 8 cm.","A major sector has minor angle 50° and radius 6 cm. Find area.","Find angle if sector area is \\\\(18\\\\pi\\\\) and radius 9 cm.","Find radius if arc length is \\\\(6\\\\pi\\\\) and angle 120°.","A sector forms part of a compound shape; find total perimeter.","Compare exact and 3 s.f. answers."],
      extension:["A 'Pac-Man' shape is a major sector formed by removing a 70° sector from a circle of radius 5 cm. Find area and perimeter.","A sector has equal numerical area and arc length. Find a relationship between r and angle.","A circular badge has a sector removed. Find remaining area from diameter and angle.","Two sectors have equal arc length. Compare their angles and radii.","Find the angle of a sector if its perimeter and radius are known.","Form an equation for a sector radius from given area."]
    },
    homework:[
      hw("Foundation","Find arc length for r=10 cm, angle 72°.",["\\\\((72/360)2\\\\pi10=4\\\\pi\\\\text{ cm}\\\\)."]),
      hw("Foundation","Find sector area for r=6 cm, angle 120°.",["\\\\((120/360)\\\\pi36=12\\\\pi\\\\text{ cm}^2\\\\)."]),
      hw("Core","Find perimeter of a 90° sector, r=8 cm.",["Arc \\\\(=(1/4)16\\\\pi=4\\\\pi\\\\).","Perimeter \\\\(=16+4\\\\pi\\\\text{ cm}\\\\)."]),
      hw("Core","A major sector has minor angle 80° and r=5 cm. Find major angle.",["\\\\(360-80=280^\\\\circ\\\\)."]),
      hw("Extension","Arc length is \\\\(7\\\\pi\\\\) cm, r=14 cm. Find angle.",["\\\\(7\\\\pi=(\\\\theta/360)28\\\\pi\\\\).","\\\\(7=7\\\\theta/90\\\\).","\\\\(\\\\theta=90^\\\\circ\\\\)."]),
      hw("Extension","Sector area is \\\\(25\\\\pi\\\\) cm², angle 144°. Find r.",["\\\\(25\\\\pi=(144/360)\\\\pi r^2=(2/5)\\\\pi r^2\\\\).","\\\\(r^2=62.5\\\\).","\\\\(r=5\\\\sqrt{2.5}\\\\) cm (exact equivalent accepted)."])
    ]
  };

  if(l.id==="19.1") return {
    examples:[
      ex("The scores 15,16,17,18,19,20 occur with frequencies 2,1,2,6,2,7. Represent them in a bar chart.",[
        "Put score on the horizontal axis and frequency on the vertical axis.",
        "Use equal-width separated bars because the data is discrete.",
        "Choose a vertical scale reaching at least 7.",
        "Label both axes and give the chart a title."
      ]),
      ex("In a survey of 36 students, choices A, B, C, D have frequencies 9, 6, 11, 10. Find the pie-chart angles.",[
        "One student corresponds to \\\\(360/36=10^\\\\circ\\\\).",
        "Angles are \\\\(90^\\\\circ,60^\\\\circ,110^\\\\circ,100^\\\\circ\\\\).",
        "Check the total is \\\\(360^\\\\circ\\\\)."
      ]),
      ex("Construct a stem-and-leaf diagram for 12, 15, 18, 21, 21, 24, 29, 31, 34.",[
        "Use tens as stems.",
        "Order leaves within each stem.",
        "Write a key, for example \\\\(2|4=24\\\\)."
      ]),
      ex("A newspaper displays the same data using a pictogram and a bar chart. Which representation is easier to compare precisely, and why?",[
        "A bar chart usually supports more precise comparisons because values are read from a numerical axis.",
        "A pictogram can be visually engaging but partial symbols may reduce precision.",
        "The best choice depends on audience and purpose."
      ])
    ],
    practice:{
      foundation:["Make a frequency table from 2,3,3,4,4,4,5.","Draw a bar chart for frequencies 3,5,7,4.","Find pie angle for 12 out of 48.","Find pie angle for 9 out of 36.","Write a key for a stem-and-leaf diagram.","Interpret 2.5 symbols if one symbol represents 8 people."],
      core:["Construct a stem-and-leaf diagram for 11,14,17,18,22,24,24,29,31.","Find all pie angles for frequencies 5,7,8,10.","Design a dual bar chart comparing two classes.","Explain why bar-chart bars are separated for discrete categories.","A pictogram uses half-symbols. Calculate exact frequencies.","Compare the information shown by a bar chart and pie chart."],
      extension:["A pie chart sector is 126°. What fraction and percentage of the total is this?","One category is missing from a pie chart. Use the other angles to find it.","Create a back-to-back stem-and-leaf diagram for two data sets.","Explain one misleading feature that can occur in a bar chart.","Choose the best representation for two different scenarios and justify.","Turn a frequency table into two different valid displays and compare them."]
    },
    homework:[
      hw("Foundation","Frequency 14 out of 56. Find pie angle.",["Fraction \\\\(=1/4\\\\).","Angle \\\\(=90^\\\\circ\\\\)."]),
      hw("Foundation","A pictogram symbol represents 6 students. What does 3.5 symbols represent?",["\\\\(3.5\\\\times6=21\\\\) students."]),
      hw("Core","Construct a stem-and-leaf for 13,14,18,21,21,25,29.",["Stem 1: 3,4,8.","Stem 2: 1,1,5,9.","Include a key."]),
      hw("Core","Frequencies 8,12,10 total 30. Find pie angles.",["Multiply each by 12°.","Angles: 96°, 144°, 120°."]),
      hw("Extension","A pie sector is 54°. What percentage is it?",["\\\\(54/360=0.15\\\\).","Percentage \\\\(=15%\\\\)."]),
      hw("Extension","Explain why a truncated vertical axis may mislead in a bar chart.",["It can visually exaggerate small differences in bar heights.","Readers should inspect the numerical scale."])
    ]
  };

  if(l.id==="19.2") return {
    examples:[
      ex("A scatter diagram rises from left to right and points lie close to a straight line. Describe the correlation.",[
        "The direction is upward, so correlation is positive.",
        "Points are close to a line, so it is strong.",
        "Answer: strong positive correlation."
      ]),
      ex("Plot the pairs \\\\((1,7),(2,5),(3,6),(4,3),(5,2),(6,1)\\\\) and describe the relationship.",[
        "Plot each point accurately as a small cross.",
        "The overall trend decreases as x increases.",
        "The relationship is negative correlation."
      ]),
      ex("Draw a line of best fit for a scatter plot and estimate y when x=7.",[
        "Draw one straight line across the full data cloud.",
        "Aim for roughly balanced points above and below.",
        "From x=7, move vertically to the line then horizontally to read y.",
        "The answer is an estimate."
      ]),
      ex("The observed x-values lie between 10 and 50. A model is used at x=90. Comment on reliability.",[
        "This is extrapolation outside the observed range.",
        "The pattern may not continue.",
        "The prediction is less reliable and should be stated cautiously."
      ])
    ],
    practice:{
      foundation:["State the correlation for an upward trend.","State the correlation for a downward trend.","State the correlation for a random cloud.","Identify an outlier.","Explain what bivariate data means.","Plot three given coordinate pairs as crosses."],
      core:["Describe strength and direction of four scatter plots.","Draw a line of best fit by eye.","Use a line of best fit to interpolate.","Explain why the line need not pass through any data point.","State why a point far from the pattern matters.","Distinguish interpolation from extrapolation."],
      extension:["A strong positive correlation exists between screen size and price. Give one cautious conclusion.","Give a plausible third variable for ice-cream sales and sunburn cases.","Explain why correlation does not prove causation.","Estimate the equation of a line of best fit from two convenient points.","Discuss the effect of one extreme outlier on a fitted line.","Design paired data likely to show zero correlation."]
    },
    homework:[
      hw("Foundation","A scatter plot falls left to right. State correlation.",["Negative correlation."]),
      hw("Foundation","What is an outlier?",["A point that lies noticeably away from the main pattern of the data."]),
      hw("Core","Why should a line of best fit extend across the data cloud?",["It should represent the overall trend, not a small local section."]),
      hw("Core","Why is interpolation usually safer than extrapolation?",["Interpolation stays within the range supported by observed data.","Extrapolation assumes the trend continues beyond the evidence."]),
      hw("Extension","A strong correlation is found between height and vocabulary in children. Explain a likely third variable.",["Age is a plausible confounding variable: older children tend to be taller and have larger vocabularies."]),
      hw("Extension","Explain why a strong correlation can still give uncertain individual predictions.",["Points still vary around the trend line.","Correlation describes an overall pattern, not exact outcomes."])
    ]
  };

  if(l.id==="19.5") return {
    examples:[
      ex("Grouped frequencies are 5, 8, 11, 6 for classes ending at 10,20,30,40. Form cumulative frequencies.",[
        "Running totals: \\\\(5,13,24,30\\\\).",
        "These totals are paired with upper class boundaries 10,20,30,40."
      ]),
      ex("Plot cumulative-frequency points \\\\((10,5),(20,13),(30,24),(40,30)\\\\).",[
        "Label axes clearly.",
        "Plot each point as a small cross.",
        "Join with a smooth increasing curve, not straight zig-zag segments."
      ]),
      ex("A cumulative-frequency curve represents 80 values. Estimate the median and quartiles.",[
        "Use CF positions 20, 40 and 60 for Q1, median and Q3.",
        "Move horizontally from each CF value to the curve, then vertically to the x-axis.",
        "Read approximate x-values."
      ]),
      ex("Only the top 20% of 200 candidates progress. Find the cutoff using a cumulative-frequency curve.",[
        "Top 20% means 80% lie at or below the cutoff.",
        "\\\\(0.80\\\\times200=160\\\\).",
        "Read the x-value corresponding to cumulative frequency 160.",
        "Scores above that value progress."
      ])
    ],
    practice:{
      foundation:["Find cumulative frequencies for 4,7,5,9.","For 60 values, state median CF position.","For 80 values, state Q1 and Q3 positions.","State which class boundary is plotted.","Explain why cumulative frequency never decreases.","Plot four cumulative points."],
      core:["Complete a cumulative-frequency table.","Draw a smooth CF curve from upper class boundaries.","Read median from a curve.","Read Q1 and Q3 and calculate IQR.","Estimate the 90th percentile.","Estimate number above a given threshold."],
      extension:["Use a CF curve to estimate a probability.","Compare two CF curves using median and IQR.","Find a cutoff for the top 15% of a population.","Explain why values read from the curve are estimates.","Explain why lower class boundaries are not paired with cumulative totals in the usual construction.","Assess reliability when a curve is steep around the percentile being read."]
    },
    homework:[
      hw("Foundation","Frequencies are 3,5,8,4. Find cumulative frequencies.",["Running totals: 3,8,16,20."]),
      hw("Foundation","There are 100 values. State CF position of median.",["\\\\(100/2=50\\\\)."]),
      hw("Core","There are 120 values. State CF positions of Q1 and Q3.",["Q1 \\\\(=30\\\\), Q3 \\\\(=90\\\\)."]),
      hw("Core","A curve gives Q1=18, Q3=31. Find IQR.",["\\\\(31-18=13\\\\)."]),
      hw("Extension","Top 10% of 250 students receive an award. Which CF value gives the cutoff?",["90% lie at or below cutoff.","\\\\(0.9\\\\times250=225\\\\).","Read x at CF=225."]),
      hw("Extension","Why are CF graph answers approximate?",["The original grouped data does not give exact individual values.","The smooth curve also interpolates between plotted cumulative totals."])
    ]
  };

  if(l.id==="19.7") return {
    examples:[
      ex("Class \\\\(140<h\\\\le150\\\\) has frequency 15. Find its frequency density.",[
        "Class width \\\\(=10\\\\).",
        "Frequency density \\\\(=15/10=1.5\\\\).",
        "The histogram bar height is 1.5."
      ]),
      ex("A histogram bar from 150 to 160 has density 3.5. Find frequency.",[
        "Class width \\\\(=10\\\\).",
        "Frequency \\\\(=\\\\text{density}\\\\times\\\\text{width}\\\\).",
        "\\\\(3.5\\\\times10=35\\\\)."
      ]),
      ex("A class from 160 to 165 has frequency 20. Compare its bar height with a 10-wide class of frequency 20.",[
        "For 160–165, density \\\\(=20/5=4\\\\).",
        "For a 10-wide class, density \\\\(=20/10=2\\\\).",
        "Equal frequencies can have different heights because class widths differ."
      ]),
      ex("An unfinished histogram and table each contain missing information. Explain how to complete both.",[
        "Use table frequency and class width to calculate missing density.",
        "Use histogram height and class width to recover missing frequency.",
        "Remember bar area, not height alone, represents frequency."
      ])
    ],
    practice:{
      foundation:["Find density: f=12, width=4.","Find density: f=18, width=6.","Find frequency: density=2.5, width=8.","Find class width 30–45.","State the vertical-axis label.","Explain what bar area represents."],
      core:["Find frequency for density 1.8 and width 15.","Find width for frequency 24 and density 3.","Complete a histogram table with one missing density.","Complete a histogram from a frequency table.","Recover two missing frequencies from a histogram.","Identify the modal class from histogram heights and widths."],
      extension:["Two bars have equal area but different widths. Compare frequencies.","A histogram has one missing bar; calculate its height from total frequency.","Estimate percentage above a threshold that cuts through a class.","Explain why equal-frequency classes can have different heights.","Design a grouped table that would produce a specified histogram.","Critique a 'histogram' incorrectly drawn with gaps between continuous classes."]
    },
    homework:[
      hw("Foundation","Frequency 21, width 7. Find density.",["\\\\(21/7=3\\\\)."]),
      hw("Foundation","Density 1.5, width 12. Find frequency.",["\\\\(1.5\\\\times12=18\\\\)."]),
      hw("Core","Frequency 30, density 2.5. Find width.",["\\\\(30/2.5=12\\\\)."]),
      hw("Core","Class 50–65 has frequency 24. Find density.",["Width 15.","Density \\\\(=24/15=1.6\\\\)."]),
      hw("Extension","A class width is 8 and its histogram bar area is 20. Find frequency.",["Histogram area represents frequency.","Frequency \\\\(=20\\\\)."]),
      hw("Extension","Why must a histogram use frequency density for unequal class widths?",["So that each bar's area, rather than height alone, is proportional to frequency."])
    ]
  };

  if(l.id==="20.3") return {
    examples:[
      ex("Given \\\\(f(x)=x+6\\\\) and \\\\(g(x)=x-3\\\\), find \\\\(fg(x)\\\\) and \\\\(gf(x)\\\\).",[
        "\\\\(fg(x)=f(g(x))=f(x-3)=x+3\\\\).",
        "\\\\(gf(x)=g(f(x))=g(x+6)=x+3\\\\).",
        "For this pair, the two composites happen to be equal."
      ]),
      ex("Given \\\\(f(x)=2x\\\\) and \\\\(g(x)=-x\\\\), find \\\\(gf(4)\\\\).",[
        "Apply f first: \\\\(f(4)=8\\\\).",
        "Then g: \\\\(g(8)=-8\\\\).",
        "So \\\\(gf(4)=-8\\\\)."
      ]),
      ex("Given \\\\(f(x)=3x+1\\\\), find \\\\(ff(x)\\\\).",[
        "\\\\(ff(x)=f(f(x))\\\\).",
        "Substitute \\\\(3x+1\\\\) into f.",
        "\\\\(f(3x+1)=3(3x+1)+1=9x+4\\\\)."
      ]),
      ex("Given \\\\(f(x)=-x\\\\), \\\\(g(x)=x-1\\\\), \\\\(h(x)=1/(x+2)\\\\), explain why \\\\(hgf(1)\\\\) is not defined.",[
        "\\\\(f(1)=-1\\\\).",
        "\\\\(g(-1)=-2\\\\).",
        "\\\\(h(-2)=1/0\\\\), which is undefined.",
        "Therefore the composite is not defined at x=1."
      ])
    ],
    practice:{
      foundation:["Given f(x)=x+4, g(x)=2x, find fg(x).","Find gf(x) for the same functions.","Find gf(3).","Find ff(2) if f(x)=3x-1.","State which function is applied first in fg(x).","Evaluate g(f(-1))."],
      core:["Form fg and gf for f(x)=x+2, g(x)=x².","Given f(x)=2x-5, g(x)=1/x, find gf(4).","Find ff(x) for f(x)=x-3.","Find gg(-2) for g(x)=x²+1.","Evaluate hgf(2) for three given functions.","Explain why fg and gf are usually different."],
      extension:["Find a value of x where a composite involving 1/(x-3) is undefined.","Show fg=gf for a chosen pair of translations.","Construct two functions for which fg≠gf.","Solve fg(x)=17 for given linear f and g.","Form fff(x) for f(x)=2x+1.","Explain how domain restrictions propagate through a composite."]
    },
    homework:[
      hw("Foundation","f(x)=x+5, g(x)=2x. Find gf(3).",["f(3)=8.","g(8)=16."]),
      hw("Foundation","f(x)=3x-1. Find ff(2).",["f(2)=5.","f(5)=14."]),
      hw("Core","f(x)=x², g(x)=x-4. Find fg(x).",["\\\\(fg(x)=f(x-4)=(x-4)^2\\\\)."]),
      hw("Core","f(x)=2x+1, g(x)=x². Find gf(x).",["\\\\(gf(x)=g(2x+1)=(2x+1)^2\\\\)."]),
      hw("Extension","f(x)=1/x, g(x)=x-2. State x-values for which fg(x) is undefined.",["\\\\(fg(x)=1/(x-2)\\\\).","Undefined when \\\\(x=2\\\\)."]),
      hw("Extension","f(x)=x+1, g(x)=2x. Solve fg(x)=11.",["\\\\(fg(x)=f(2x)=2x+1\\\\).","\\\\(2x+1=11\\\\Rightarrow x=5\\\\)."])
    ]
  };
  return null;
}

function upgradedBank(l){
  var deep=deepTextbookBank(l);
  var s=deep || specialisedBank(l.type);
  var b=s || bank(l.type);
  if(!deep && b.examples.length<4){
    var e=extraExample(l.type);
    if(e) b=Object.assign({},b,{examples:b.examples.concat([e])});
  }
  return b;
}

function svgAngleLine(){
  return '<svg class="diagram" viewBox="0 0 700 280"><line x1="80" y1="190" x2="620" y2="190" stroke="#18323d" stroke-width="5"/><line x1="340" y1="190" x2="420" y2="70" stroke="#18323d" stroke-width="5"/><path d="M340 190 A90 90 0 0 0 290 116" fill="none" stroke="#3e93b5" stroke-width="4"/><text x="235" y="128" font-size="28">112°</text><path d="M340 190 A80 80 0 0 1 386 124" fill="none" stroke="#d2694c" stroke-width="4"/><text x="390" y="145" font-size="28">x</text></svg>';
}
function svgVertical(){
  return '<svg class="diagram" viewBox="0 0 700 300"><line x1="120" y1="250" x2="570" y2="60" stroke="#18323d" stroke-width="5"/><line x1="150" y1="60" x2="550" y2="255" stroke="#18323d" stroke-width="5"/><text x="280" y="115" font-size="28">115°</text><text x="350" y="235" font-size="28">x</text></svg>';
}
function svgAnglePoint(){
  return '<svg class="diagram" viewBox="0 0 700 320"><g stroke="#18323d" stroke-width="5"><line x1="350" y1="160" x2="350" y2="35"/><line x1="350" y1="160" x2="605" y2="160"/><line x1="350" y1="160" x2="505" y2="280"/><line x1="350" y1="160" x2="185" y2="275"/><line x1="350" y1="160" x2="95" y2="160"/></g><text x="390" y="115" font-size="24">x</text><text x="455" y="205" font-size="24">2x</text><text x="220" y="215" font-size="24">4x</text><text x="190" y="120" font-size="24">150°</text></svg>';
}
function svgTrapezium(){
  return '<svg class="diagram" viewBox="0 0 700 330"><polygon points="180,240 520,240 455,90 245,90" fill="#f5fbfd" stroke="#18323d" stroke-width="5"/><text x="330" y="80" font-size="24">7 cm</text><text x="330" y="275" font-size="24">10 cm</text><text x="178" y="165" font-size="24">4 cm</text><text x="505" y="165" font-size="24">4 cm</text></svg>';
}
function svgHouse(){
  return '<svg class="diagram" viewBox="0 0 700 380"><polygon points="210,310 210,155 350,55 490,155 490,310" fill="#eef8fb" stroke="#18323d" stroke-width="5"/><line x1="210" y1="155" x2="490" y2="155" stroke="#7aa6b7" stroke-width="3" stroke-dasharray="8 8"/><text x="330" y="340" font-size="24">5 m</text><text x="170" y="240" font-size="24">8 m</text><text x="360" y="110" font-size="24">h = 4 m</text></svg>';
}
function svgSector(angle,major){
  var a=angle||90;
  if(major) return '<svg class="diagram" viewBox="0 0 500 360"><circle cx="250" cy="180" r="125" fill="#eef8fb" stroke="#18323d" stroke-width="4"/><path d="M250 180 L250 55 A125 125 0 0 1 363 233 Z" fill="white" stroke="#d2694c" stroke-width="4"/><text x="285" y="150" font-size="24">65°</text><text x="185" y="280" font-size="22">major sector</text></svg>';
  return '<svg class="diagram" viewBox="0 0 500 340"><path d="M250 180 L250 55 A125 125 0 0 1 372 154 Z" fill="#dff3fb" stroke="#18323d" stroke-width="4"/><line x1="250" y1="180" x2="250" y2="55" stroke="#18323d" stroke-width="4"/><line x1="250" y1="180" x2="372" y2="154" stroke="#18323d" stroke-width="4"/><text x="295" y="135" font-size="24">'+a+'°</text><text x="260" y="100" font-size="22">r</text></svg>';
}
function svgBarChart(){
  return '<svg class="diagram" viewBox="0 0 700 380"><line x1="80" y1="320" x2="640" y2="320" stroke="#18323d" stroke-width="3"/><line x1="80" y1="320" x2="80" y2="45" stroke="#18323d" stroke-width="3"/><text x="20" y="48" font-size="18">Frequency</text>'+[2,1,2,6,2,7].map((h,i)=>'<rect x="'+(120+i*80)+'" y="'+(320-h*34)+'" width="48" height="'+(h*34)+'" fill="#dff3fb" stroke="#3e93b5" stroke-width="3"/><text x="'+(134+i*80)+'" y="345" font-size="18">'+(15+i)+'</text>').join("")+'</svg>';
}
function svgPie(){
  return '<svg class="diagram" viewBox="0 0 520 360"><circle cx="250" cy="175" r="125" fill="#fff" stroke="#18323d" stroke-width="4"/><path d="M250 175 L250 50 A125 125 0 0 1 375 175 Z" fill="#dff3fb" stroke="#3e93b5" stroke-width="3"/><path d="M250 175 L375 175 A125 125 0 0 1 187.5 283.25 Z" fill="#efe6d5" stroke="#b58d4b" stroke-width="3"/><text x="300" y="105" font-size="22">A</text><text x="305" y="245" font-size="22">B</text><text x="160" y="230" font-size="22">C / D</text></svg>';
}
function svgStem(){
  return '<div class="stemleaf"><div><strong>Stem</strong><span>|</span><strong>Leaf</strong></div><div><b>1</b><span>|</span><span>2&nbsp;5&nbsp;8</span></div><div><b>2</b><span>|</span><span>1&nbsp;1&nbsp;4&nbsp;9</span></div><div><b>3</b><span>|</span><span>1&nbsp;4</span></div><p>Key: 2 | 4 = 24</p></div>';
}
function svgScatter(kind){
  var pts=kind==="neg"?[[120,80],[180,110],[240,130],[300,170],[360,185],[420,225],[500,250],[560,280]]:[[120,280],[180,245],[240,230],[300,185],[360,170],[420,125],[500,105],[560,75]];
  return '<svg class="diagram" viewBox="0 0 700 380"><line x1="75" y1="320" x2="640" y2="320" stroke="#18323d" stroke-width="3"/><line x1="75" y1="320" x2="75" y2="40" stroke="#18323d" stroke-width="3"/>'+pts.map(p=>'<g stroke="#2563eb" stroke-width="3"><line x1="'+(p[0]-6)+'" y1="'+(p[1]-6)+'" x2="'+(p[0]+6)+'" y2="'+(p[1]+6)+'"/><line x1="'+(p[0]+6)+'" y1="'+(p[1]-6)+'" x2="'+(p[0]-6)+'" y2="'+(p[1]+6)+'"/></g>').join("")+'</svg>';
}
function svgCF(){
  return '<svg class="diagram" viewBox="0 0 720 420"><line x1="85" y1="345" x2="660" y2="345" stroke="#18323d" stroke-width="3"/><line x1="85" y1="345" x2="85" y2="45" stroke="#18323d" stroke-width="3"/><text x="300" y="400" font-size="18">Upper class boundary</text><text x="12" y="40" font-size="18">Cumulative frequency</text><path d="M95 338 C170 328,220 300,270 260 C330 210,390 145,455 105 C520 70,590 55,650 50" fill="none" stroke="#3e93b5" stroke-width="4"/>'+[[170,315],[250,275],[340,195],[455,105],[560,68],[650,50]].map(p=>'<g stroke="#2563eb" stroke-width="3"><line x1="'+(p[0]-5)+'" y1="'+(p[1]-5)+'" x2="'+(p[0]+5)+'" y2="'+(p[1]+5)+'"/><line x1="'+(p[0]+5)+'" y1="'+(p[1]-5)+'" x2="'+(p[0]-5)+'" y2="'+(p[1]+5)+'"/></g>').join("")+'</svg>';
}
function svgHistogram(){
  return '<svg class="diagram" viewBox="0 0 720 420"><line x1="85" y1="345" x2="660" y2="345" stroke="#18323d" stroke-width="3"/><line x1="85" y1="345" x2="85" y2="45" stroke="#18323d" stroke-width="3"/><text x="10" y="40" font-size="18">Frequency density</text><rect x="105" y="240" width="90" height="105" fill="#dff3fb" stroke="#3e93b5" stroke-width="3"/><rect x="195" y="100" width="90" height="245" fill="#dff3fb" stroke="#3e93b5" stroke-width="3"/><rect x="285" y="65" width="45" height="280" fill="#dff3fb" stroke="#3e93b5" stroke-width="3"/><rect x="330" y="185" width="90" height="160" fill="#dff3fb" stroke="#3e93b5" stroke-width="3"/><rect x="510" y="300" width="120" height="45" fill="#dff3fb" stroke="#3e93b5" stroke-width="3"/></svg>';
}
function svgCompositeFlow(){
  return '<svg class="diagram" viewBox="0 0 760 260"><rect x="55" y="85" width="130" height="80" rx="18" fill="#fff" stroke="#18323d" stroke-width="3"/><rect x="310" y="85" width="130" height="80" rx="18" fill="#dff3fb" stroke="#3e93b5" stroke-width="3"/><rect x="575" y="85" width="130" height="80" rx="18" fill="#efe6d5" stroke="#b58d4b" stroke-width="3"/><text x="105" y="135" font-size="26">x</text><text x="345" y="135" font-size="26">f(x)</text><text x="610" y="135" font-size="26">g(f(x))</text><path d="M185 125 H300" stroke="#18323d" stroke-width="3"/><path d="M440 125 H565" stroke="#18323d" stroke-width="3"/><text x="230" y="110" font-size="20">f</text><text x="495" y="110" font-size="20">g</text></svg>';
}

function diagramForExample(t,i){
  var l=LESSONS[current],id=l&&l.id;
  if(id==="16.1"){
    if(i===0)return svgAngleLine();
    if(i===1)return svgAnglePoint();
    if(i===2)return svgVertical();
    return svgAnglePoint();
  }
  if(id==="17.2"){
    if(i===0)return svgTrapezium();
    if(i===1)return '<svg class="diagram" viewBox="0 0 700 330"><polygon points="170,250 520,250 430,90 80,90" fill="#eef8fb" stroke="#18323d" stroke-width="5"/><line x1="170" y1="250" x2="170" y2="90" stroke="#d2694c" stroke-width="3" stroke-dasharray="8 8"/><text x="300" y="285" font-size="24">8 m</text><text x="180" y="165" font-size="24">3.5 m</text></svg>';
    if(i===2)return svgHouse();
    return svgTrapezium();
  }
  if(id==="17.4"){
    if(i===0)return svgSector(40,false);
    if(i===1)return svgSector(65,true);
    if(i===2)return svgSector(120,false);
    return svgSector(75,false);
  }
  if(id==="19.1"){
    if(i===0)return svgBarChart();
    if(i===1)return svgPie();
    if(i===2)return svgStem();
    return '<svg class="diagram" viewBox="0 0 700 260"><rect x="80" y="80" width="85" height="85" rx="10" fill="#dff3fb"/><rect x="190" y="80" width="85" height="85" rx="10" fill="#dff3fb"/><rect x="300" y="80" width="42" height="85" rx="10" fill="#dff3fb"/><text x="90" y="205" font-size="22">1 symbol = 8</text><text x="420" y="125" font-size="24">How many?</text></svg>';
  }
  if(id==="19.2"){
    if(i===0)return svgScatter("pos");
    if(i===1)return svgScatter("neg");
    if(i===2)return svgScatter("pos").replace('</svg>','<line x1="110" y1="285" x2="585" y2="65" stroke="#d2694c" stroke-width="3"/></svg>');
    return svgScatter("pos");
  }
  if(id==="19.5") return svgCF();
  if(id==="19.7") return svgHistogram();
  if(id==="20.3") return svgCompositeFlow();
  if(id==="12.1" && i===3){
    return '<svg class="diagram" viewBox="0 0 640 300"><rect x="150" y="65" width="340" height="165" fill="#fff" stroke="#18323d" stroke-width="4"/><text x="270" y="260" font-size="24">3 + √12 cm</text><text x="500" y="155" font-size="24">2√3 cm</text></svg>';
  }
  return (function(){
    if(["angles","parallel","polygons"].includes(t)) return diagramFor(t);
    if(["circle","sector"].includes(t)) return diagramFor(t);
    if(t==="sets") return diagramFor(t);
    if(["functions","inverse","composite"].includes(t)) return diagramFor(t);
    if(["ineq-numberline","ineq-linear"].includes(t)) return diagramFor(t);
    if(["scatter","correlation","bestfit"].includes(t)) return svgScatter("pos");
    if(["cumfreq","cumfreq-read"].includes(t)) return svgCF();
    if(["histogram","freqdensity"].includes(t)) return svgHistogram();
    return "";
  })();
}

/* v3 render: show source-pattern cue on each teaching slide */
function render(){
  var l=LESSONS[current], b=upgradedBank(l);
  if(current!==lastExampleLesson){exampleSlide=0;lastExampleLesson=current;}
  $("#unitPill").textContent="Unit "+l.u+" • "+l.unit;
  $("#lessonTitle").textContent=l.id+"  "+l.title;
  $("#lessonSubtitle").textContent="Cambridge IGCSE Mathematics • lesson-by-lesson teaching sequence";
  $("#prevBtn").disabled=current===0; $("#nextBtn").disabled=current===LESSONS.length-1;
  $$(".tab").forEach(x=>x.classList.toggle("active",x.dataset.tab===tab));
  renderNav($("#search").value);

  if(tab==="learn"){
    $("#content").innerHTML=
      '<section class="teaching-slide intro-teaching-slide"><div class="slide-kicker">START HERE</div><div class="learn-grid">'+
      '<article class="card flat"><h3>Prior knowledge check</h3><p class="lead">Students should be ready to recall:</p><ul class="clean-list">'+l.prior.map(x=>'<li>'+x+'</li>').join("")+'</ul></article>'+
      '<article class="card flat"><h3>Learning points</h3><p class="lead">By the end of the lesson, students should be able to:</p><ul class="clean-list">'+l.obj.map(x=>'<li>'+x+'</li>').join("")+'</ul></article>'+
      '</div><div class="source-strip"><strong>Textbook source map:</strong> '+l.src+'. <br><strong>Build approach:</strong> worked examples and exercises are rewritten from the same question patterns and progression found in the supplied Cambridge coursebook and Exam Success book.</div></section>';
  }

  if(tab==="examples"){
    $("#content").innerHTML=
      '<div class="deck-toolbar"><div><strong>Teacher examples</strong><span id="exampleCount"></span></div><div class="deck-buttons"><button id="examplePrev" class="ghost-btn">← Previous example</button><button id="exampleNext" class="primary-btn">Next example →</button></div></div>'+
      '<div class="example-deck">'+b.examples.map(function(e,i){
        var diag=diagramForExample(l.type,i);
        return '<section class="example-slide teaching-slide" data-slide="'+i+'"><div class="slide-kicker">EXAMPLE '+(i+1)+' OF '+b.examples.length+'</div>'+
          '<div class="textbook-pattern"><span>Textbook pattern</span><strong>'+textbookLens(l,i)+'</strong><small>'+l.src+'</small></div>'+
          '<div class="example-question">'+e.q+'</div>'+
          (diag?'<div class="example-diagram">'+diag+'</div>':'')+
          renderModelBoard('model-board-'+current+'-'+i)+
          '<details class="worked-solution"><summary>Show model solution</summary><div class="solution-paper"><div class="solution-title">Worked solution</div><div class="steps">'+e.steps.map((s,j)=>'<div class="step"><span class="step-badge">'+(j+1)+'</span><div>'+s+'</div></div>').join("")+'</div></div></details>'+
          '</section>';
      }).join("")+'</div>'+
      '<div class="example-dots">'+b.examples.map((_,i)=>'<button class="example-dot" data-slide="'+i+'" aria-label="Go to example '+(i+1)+'">'+(i+1)+'</button>').join("")+'</div>';
  }

  if(tab==="practice"){
    var ep=extraPractice(l.type), merged={};
    ["foundation","core","extension"].forEach(function(k){merged[k]=(b.practice[k]||[]).concat(ep[k]||[]);});
    $("#content").innerHTML='<article class="card practice-sheet"><div class="sheet-head"><div><div class="slide-kicker">INDEPENDENT PRACTICE</div><h3>Textbook-style progressive practice</h3><p class="practice-source">Built from the progression and question forms in '+l.src+'.</p></div><span class="question-count">'+(merged.foundation.length+merged.core.length+merged.extension.length+ep.problems.length)+' questions</span></div>'+
      '<div class="tiers">'+[["Foundation","foundation"],["Core","core"],["Extension","extension"]].map(function(pair){var name=pair[0],k=pair[1];return '<section class="tier '+k+'"><h4>'+name+'</h4><ol class="q-list">'+merged[k].map(q=>'<li>'+q+'</li>').join("")+'</ol></section>';}).join("")+'</div>'+
      '<section class="problem-solving"><div class="slide-kicker">REASONING & PROBLEM SOLVING</div><h4>Exam-style thinking</h4><ol class="q-list">'+ep.problems.map(q=>'<li>'+q+'</li>').join("")+'</ol></section></article>';
  }

  if(tab==="homework"){
    var allHw=(b.homework||[]).concat(extraHomework(l.type));
    $("#content").innerHTML='<article class="card homework-sheet"><div class="sheet-head"><div><div class="slide-kicker">HOMEWORK</div><h3>Mixed textbook-style homework</h3><p class="practice-source">Fluency → application → reasoning, with full self-check solutions.</p></div><span class="question-count">'+allHw.length+' questions</span></div><p class="lead">Attempt every question before opening its worked solution.</p>'+
      allHw.map(function(h,i){return '<div class="hw-item"><div class="hw-q"><span class="q-number">'+(i+1)+'</span><span class="pill">'+h.tier+'</span><span>'+h.q+'</span></div><details class="solution"><summary>Show solution</summary><div class="solution-body"><div class="steps">'+h.sol.map((s,j)=>'<div class="step"><span class="step-badge">'+(j+1)+'</span><div>'+s+'</div></div>').join("")+'</div></div></details></div>';}).join("")+'</article>';
  }

  if(tab==="whiteboard"){
    $("#content").innerHTML='<article class="card board-card"><div class="board-tools"><strong>Whole-class whiteboard</strong><button class="colour-dot active" data-colour="#132d36" aria-label="Black pen"></button><button class="colour-dot" data-colour="#2563eb" aria-label="Blue pen"></button><button class="colour-dot" data-colour="#dc2626" aria-label="Red pen"></button><button class="colour-dot" data-colour="#15803d" aria-label="Green pen"></button><button id="eraser" class="tool-btn">Eraser</button><button id="clearBoard" class="tool-btn">Clear</button></div><div class="canvas-shell"><canvas id="board"></canvas></div></article>';
  }

  if(window.MathJax&&MathJax.typesetPromise)MathJax.typesetPromise([$("#content")]);
  if(tab==="examples"){initModelBoards();setupExampleDeck();}
  if(tab==="whiteboard")initBoard();
  location.hash=l.id+"-"+tab;
}
