(function(){
const X=(prompt,steps,source,diagram)=>({prompt,steps,source,diagram});
window.EXAM_SUCCESS_MAP={
 "12":"Exam Success • Chapter 1 Number (powers, roots and exact values)",
 "13":"Exam Success • Chapter 2 Algebra and graphs • §2.3 Algebraic fractions",
 "14":"Exam Success • Chapter 2 Algebra and graphs • §2.1 and §2.5",
 "15":"Exam Success • Chapter 2 Algebra and graphs • §2.5 inequalities",
 "16":"Exam Success • Chapter 4 Geometry",
 "17":"Exam Success • Chapter 5 Mensuration",
 "18":"Exam Success • Chapter 9 Statistics",
 "19":"Exam Success • Chapter 9 Statistics",
 "20":"Exam Success • Chapter 2 Algebra and graphs • functions",
 "21":"Exam Success • Chapter 1 Number • §1.2 Sets",
 "22":"Exam Success • Chapter 2 Algebra and graphs • direct/inverse proportion"
};
window.EXTRA_EXAMPLES={
"12.1":[
 X("Simplify [[\\sqrt{300}+2\\sqrt{75}-\\sqrt{27}]].",["[[\\sqrt{300}=10\\sqrt3]], [[2\\sqrt{75}=10\\sqrt3]], [[\\sqrt{27}=3\\sqrt3]].","Collect like surds: [[10\\sqrt3+10\\sqrt3-3\\sqrt3]].","[[=17\\sqrt3]]."],"Morrison & Hamshaw Ex 9.7 style",1),
 X("A rectangle has side lengths [[\\sqrt{45}]] cm and [[\\sqrt{20}]] cm. Find its exact area.",["Area [[=\\sqrt{45}\\times\\sqrt{20}=\\sqrt{900}]].","[[\\sqrt{900}=30]].","Exact area [[=30\\text{ cm}^2]]."],"Coursebook exact-value application",2)
],
"12.2":[
 X("Rationalise [[\\frac{7}{\\sqrt5}]].",["Multiply top and bottom by [[\\sqrt5]].","[[\\frac{7}{\\sqrt5}\\times\\frac{\\sqrt5}{\\sqrt5}=\\frac{7\\sqrt5}{5}]].","The denominator is now rational."],"Morrison & Hamshaw Ex 9.8 Q5–7 style",1),
 X("Rationalise and simplify [[\\frac4{3-\\sqrt5}]].",["Use the conjugate [[3+\\sqrt5]].","Denominator: [[(3-\\sqrt5)(3+\\sqrt5)=9-5=4]].","Numerator: [[4(3+\\sqrt5)]], so the result is [[3+\\sqrt5]]."],"Coursebook Ex 9.9 / conjugate method",2)
],
"13.1":[
 X("Simplify [[\\frac{x^2-9}{x^2+x-6}]]. State restrictions.",["Factor: [[x^2-9=(x-3)(x+3)]].","Factor: [[x^2+x-6=(x+3)(x-2)]].","Cancel [[x+3]]: [[\\frac{x-3}{x-2}]], with [[x\\ne-3,2]]."],"Morrison & Hamshaw Ex 14.13 style",1),
 X("Simplify [[\\frac{2x^2+7x+3}{2x^2+9x+9}]].",["Factor numerator: [[(2x+1)(x+3)]].","Factor denominator: [[(2x+3)(x+3)]].","Cancel [[x+3]]: [[\\frac{2x+1}{2x+3}]], with [[x\\ne-3,-\\frac32]]."],"Morrison & Hamshaw Ex 14.14 style",2)
],
"13.2":[
 X("Simplify [[\\frac2x+\\frac3{x+1}]].",["LCD [[=x(x+1)]].","[[\\frac{2(x+1)+3x}{x(x+1)}]].","[[=\\frac{5x+2}{x(x+1)}]], with [[x\\ne0,-1]]."],"Exam Success §2.3 / Coursebook Ex 14.12",1),
 X("Simplify [[\\frac{x^2-9}{2x}\\div\\frac{x+3}{4x^2}]].",["Change division to multiplication by the reciprocal.","[[\\frac{(x-3)(x+3)}{2x}\\times\\frac{4x^2}{x+3}]].","Cancel common factors to get [[2x(x-3)]]."],"Coursebook four-rules algebraic fractions",2)
],
"14.1":[
 X("Two consecutive even numbers have product 168. Form an equation.",["Let the first even number be [[2n]].","The next is [[2n+2]].","Required equation: [[2n(2n+2)=168]]."],"SoW example: product of consecutive even numbers",1),
 X("A rectangle has length [[x+3]] and width [[x-1]]. Its perimeter is 28. Form an equation.",["Perimeter [[=2l+2w]].","[[2(x+3)+2(x-1)=28]].","This is the required linear equation; simplify only if asked."],"Exam Success §2.1 forming equations style",2)
],
"14.2":[
 X("Solve [[5(x+4)=3(x+10)]].",["Expand: [[5x+20=3x+30]].","Collect x-terms: [[2x=10]].","[[x=5]]."],"SoW teaching example / Coursebook Ex 6.1",1),
 X("A taxi fare is KD 3.5 plus KD 1.2 per kilometre. The fare is KD 15.5. Find the distance.",["Let distance be [[d]] km.","[[3.5+1.2d=15.5]].","[[1.2d=12]], so [[d=10]] km."],"Coursebook forming-equations context",2)
],
"14.3":[
 X("Solve [[x^2+6x-7=0]] by completing the square.",["[[x^2+6x-7=(x+3)^2-16]].","Set to zero: [[(x+3)^2=16]].","[[x+3=\\pm4]], so [[x=1]] or [[x=-7]]."],"Morrison & Hamshaw Ex 14.8 style",1),
 X("Solve [[2x^2+3x-4=0]] using the quadratic formula.",["[[a=2,b=3,c=-4]].","[[x=\\frac{-3\\pm\\sqrt{3^2-4(2)(-4)}}{4}=\\frac{-3\\pm\\sqrt{41}}4]].","Leave the exact solutions in surd form."],"Morrison & Hamshaw Ex 14.9 / SoW surd solutions",2)
],
"14.4":[
 X("Solve [[\\frac{x}{3}+\\frac{x-1}{4}=5]].",["Multiply every term by 12.","[[4x+3(x-1)=60]].","[[7x-3=60]], so [[x=9]]."],"Coursebook Ex 6.1 Q5–7 style",1),
 X("Solve [[\\frac2{x-1}=\\frac3{x+2}]].",["Restrictions: [[x\\ne1,-2]].","Cross-multiply: [[2(x+2)=3(x-1)]].","[[2x+4=3x-3]], so [[x=7]]."],"Coursebook fractional-equation style",2)
],
"14.5":[
 X("3 coffees and 2 teas cost KD 6.50. 5 coffees and 2 teas cost KD 9.50. Find each price.",["[[3c+2t=6.50]], [[5c+2t=9.50]].","Subtract: [[2c=3.00]], so [[c=1.50]].","Substitute: [[4.50+2t=6.50]], so [[t=1.00]]."],"SoW coffee/tea introduction; Exam Success simultaneous style",1),
 X("Solve [[2x+5y=19]] and [[y=x+1]] by substitution.",["Substitute [[y=x+1]]: [[2x+5(x+1)=19]].","[[7x+5=19]], so [[x=2]].","[[y=3]]."],"Morrison & Hamshaw Ex 14.2 substitution style",2)
],
"14.6":[
 X("Solve simultaneously [[y=x+1]] and [[y=x^2-3]].",["Set equal: [[x+1=x^2-3]].","[[x^2-x-4=0]].","[[x=\\frac{1\\pm\\sqrt{17}}2]], then [[y=x+1]]."],"Morrison & Hamshaw Ex 18.6 style",1),
 X("Solve [[x^2+y^2=25]] and [[y=x+1]].",["Substitute: [[x^2+(x+1)^2=25]].","[[2x^2+2x-24=0]] → [[x^2+x-12=0]].","[[x=3,-4]], giving [[(3,4)]] and [[(-4,-3)]]."],"Coursebook linear/non-linear simultaneous style",2)
],
"14.7":[
 X("Make x the subject of [[a=\\frac{bx^2+c}{d}]].",["[[ad=bx^2+c]].","[[bx^2=ad-c]].","[[x=\\pm\\sqrt{\\frac{ad-c}{b}}]] (subject to the context/domain)."],"Exam Success §2.1 rearranging formulae",1),
 X("Make x the subject of [[y=\\frac{ax+b}{cx+d}]].",["[[y(cx+d)=ax+b]].","[[ycx+yd=ax+b]] → [[x(yc-a)=b-yd]].","[[x=\\frac{b-yd}{yc-a}]]."],"Coursebook Ex 22.5 unknown on both sides",2)
],
"15.1":[
 X("Represent [[-2<x\\le4]] on a number line.",["Open circle at [[-2]] because -2 is excluded.","Closed circle at [[4]] because 4 is included.","Shade the segment between the two endpoints."],"Morrison & Hamshaw Ex 14.3 style",1),
 X("A number line shows a closed circle at -1, an open circle at 5, and shading between. Write the inequality.",["Closed at -1 means [[x\\ge-1]].","Open at 5 means [[x<5]].","Together: [[-1\\le x<5]]."],"Exam Success inequalities interpretation style",2)
],
"15.2":[
 X("Solve [[-3\\le3x-2<7]].",["Add 2 throughout: [[-1\\le3x<9]].","Divide throughout by 3.","[[-\\frac13\\le x<3]]."],"SoW compound inequality example",1),
 X("Solve [[5-2x>3(x+1)]].",["Expand: [[5-2x>3x+3]].","[[2>5x]].","[[x<\\frac25]]."],"Coursebook Ex 14.4 style",2)
],
"15.3":[
 X("Represent [[x+2y>6]] graphically.",["Boundary: [[x+2y=6]] or [[y=3-\\frac12x]].","Draw a dashed boundary because the inequality is strict.","Test [[(0,0)]]: [[0>6]] is false, so shade the opposite side."],"Morrison & Hamshaw Ex 14.5 style",1),
 X("Represent [[y\\le2x+1]].",["Draw [[y=2x+1]] as a solid line.","Test [[(0,0)]]: [[0\\le1]] is true.","Shade the side containing the origin."],"Morrison & Hamshaw Ex 14.6 style",2)
],
"15.4":[
 X("A triangular region is bounded by the axes and [[x+y=6]]. List its inequalities.",["Right of the y-axis: [[x\\ge0]].","Above the x-axis: [[y\\ge0]].","Below [[x+y=6]]: [[x+y\\le6]]."],"SoW: list inequalities defining a region",1),
 X("Describe the region above [[y=x-2]], below [[y=4]], and left of [[x=5]], with all boundaries included.",["Above: [[y\\ge x-2]].","Below: [[y\\le4]].","Left: [[x\\le5]]."],"IGCSE region-description style",2)
],
"16.1":[
 X("The angles of a quadrilateral are [[2x,3x,4x,5x]]. Find x and all four angles.",["Quadrilateral sum [[=360^\\circ]].","[[14x=360]], so [[x=\\frac{180}{7}]].","Angles are [[\\frac{360}{7},\\frac{540}{7},\\frac{720}{7},\\frac{900}{7}]] degrees."],"Morrison & Hamshaw Ex 3.3 reasoning style",1),
 X("An exterior angle of a triangle is [[128^\\circ]] and one opposite interior angle is [[53^\\circ]]. Find the other.",["Exterior angle equals the sum of the two opposite interior angles.","Other angle [[=128-53]].","[[=75^\\circ]]."],"Coursebook geometric-reasoning style",2)
],
"16.2":[
 X("Two parallel lines are cut by a transversal. One angle is [[68^\\circ]]. Find its alternate angle and adjacent co-interior angle.",["Alternate angle [[=68^\\circ]].","Co-interior angles sum to [[180^\\circ]].","Adjacent co-interior angle [[=112^\\circ]]."],"Morrison & Hamshaw Ex 3.4 style",1),
 X("Corresponding angles are [[3x+7]] and [[5x-25]]. Find x.",["Corresponding angles are equal.","[[3x+7=5x-25]].","[[32=2x]], so [[x=16]]."],"Coursebook parallel-lines algebra style",2)
],
"16.3":[
 X("Each exterior angle of a regular polygon is [[24^\\circ]]. Find the number of sides.",["Exterior angles total [[360^\\circ]].","[[n=360/24]].","[[n=15]]."],"Morrison & Hamshaw Ex 3.5–3.6 style",1),
 X("Four interior angles of a pentagon are [[104^\\circ,118^\\circ,95^\\circ,132^\\circ]]. Find the fifth.",["Pentagon interior sum [[=(5-2)180=540^\\circ]].","Known total [[=449^\\circ]].","Missing angle [[=91^\\circ]]."],"Coursebook irregular-polygon style",2)
],
"16.4":[
 X("State the line symmetry and rotational symmetry of a regular hexagon.",["A regular hexagon has 6 lines of symmetry.","It maps onto itself 6 times in one full turn.","Rotational symmetry order [[=6]]."],"Morrison & Hamshaw Ex 19.1–19.2 style",1),
 X("Compare a rectangle, a rhombus and a kite by symmetry.",["Rectangle: 2 lines, rotational order 2.","Rhombus: 2 lines (diagonals), rotational order 2.","Kite: usually 1 line, rotational order 1."],"Coursebook classify-by-symmetry style",2)
],
"16.5":[
 X("Describe the symmetry of a regular triangular prism.",["There is a plane halfway between and parallel to the triangular ends.","There are 3 longitudinal planes through the prism axis and a symmetry line of each equilateral end.","Rotational symmetry about the central axis has order 3."],"Morrison & Hamshaw Ex 19.3 style",1),
 X("Describe the symmetry of a right circular cylinder.",["There are infinitely many planes through the central axis.","There is also a plane halfway between the circular ends.","There is continuous rotational symmetry about the central axis."],"Morrison & Hamshaw Ex 19.4 style",2)
],
"17.1":[
 X("Convert [[2.4\\text{ m}^2]] to [[\\text{cm}^2]].",["[[1\\text{ m}=100\\text{ cm}]].","So [[1\\text{ m}^2=100^2=10000\\text{ cm}^2]].","[[2.4\\times10000=24000\\text{ cm}^2]]."],"Morrison & Hamshaw Ex 13.1 Q1–5 style",1),
 X("Convert [[0.75\\text{ m}^3]] to litres.",["[[1\\text{ m}^3=1000\\text{ L}]].","[[0.75\\times1000=750]].","[[750\\text{ L}]]."],"SoW volume/capacity conversion",2)
],
"17.2":[
 X("A trapezium has parallel sides 8 cm and 14 cm and height 6 cm. Find its area.",["[[A=\\frac12(a+b)h]].","[[A=\\frac12(8+14)6]].","[[A=66\\text{ cm}^2]]."],"Morrison & Hamshaw Ex 7.1 style",1),
 X("An L-shape is formed from a 12 cm by 9 cm rectangle with a 5 cm by 4 cm rectangle removed. Find its area.",["Outer area [[=12\\times9=108]].","Removed area [[=5\\times4=20]].","L-shape area [[=88\\text{ cm}^2]]."],"Coursebook compound-area application",2)
],
"17.3":[
 X("A circle has diameter 12 cm. Find its circumference and area in terms of [[\\pi]].",["Radius [[=6]] cm.","Circumference [[=\\pi d=12\\pi]] cm.","Area [[=\\pi r^2=36\\pi]] cm²."],"Morrison & Hamshaw Ex 7.2–7.3 style",1),
 X("A circle has area [[81\\pi\\text{ cm}^2]]. Find its radius and circumference.",["[[\\pi r^2=81\\pi]].","[[r=9]] cm.","[[C=2\\pi r=18\\pi]] cm."],"Coursebook reverse-circle problem",2)
],
"17.4":[
 X("A sector has radius 9 cm and angle [[80^\\circ]]. Find its arc length and area.",["Arc [[=\\frac{80}{360}\\times2\\pi(9)=4\\pi]] cm.","Area [[=\\frac{80}{360}\\times\\pi(9^2)=18\\pi]] cm².","Keep exact answers in terms of [[\\pi]]."],"Morrison & Hamshaw Ex 7.4 style",1),
 X("A major sector has radius 6 cm and corresponding minor angle [[120^\\circ]]. Find the major-sector area.",["Major angle [[=360-120=240^\\circ]].","Area [[=\\frac{240}{360}\\times36\\pi]].","[[=24\\pi\\text{ cm}^2]]."],"Coursebook major/minor sector style",2)
],
"18.1":[
 X("A class has 18 boys and 22 girls. 11 boys and 14 girls choose football. Complete a two-way table.",["Boys not football [[=18-11=7]].","Girls not football [[=22-14=8]].","Football total [[=25]], not-football total [[=15]], grand total [[=40]]."],"Morrison & Hamshaw Ex 4.1–4.5 table style",1),
 X("Group the measurements 2.4, 4.9, 5.0, 8.7, 9.9, 10.0, 13.2 into classes [[0\\le x<5]], [[5\\le x<10]], [[10\\le x<15]].",["First class: 2 values.","Second class: 3 values.","Third class: 2 values."],"Coursebook grouped-frequency style",2)
],
"18.2":[
 X("For 3, 5, 5, 7, 8, 9, 12, 15 find mean, median, mode, range and IQR.",["Mean [[=64/8=8]], median [[=(7+8)/2=7.5]], mode [[=5]].","Range [[=15-3=12]].","[[Q_1=5,Q_3=10.5]], so [[IQR=5.5]]."],"Morrison & Hamshaw Ex 12.1 style",1),
 X("Dataset A has median 42 and IQR 6. Dataset B has median 39 and IQR 14. Compare.",["A has the higher typical value because its median is larger.","A is more consistent because its IQR is smaller.","A complete comparison should mention both centre and spread."],"Exam Success statistics comparison style",2)
],
"18.3":[
 X("Estimate the mean for classes 0–10, 10–20, 20–30, 30–40 with frequencies 2, 5, 7, 6.",["Midpoints: 5, 15, 25, 35.","[[\\sum fx=2(5)+5(15)+7(25)+6(35)=470]].","[[\\bar x\\approx470/20=23.5]]."],"Morrison & Hamshaw Ex 12.3–12.5 style",1),
 X("Grouped discrete data 1–3, 4–6, 7–9 have frequencies 4, 8, 3. Estimate the mean.",["Midpoints: 2, 5, 8.","[[\\sum fx=4(2)+8(5)+3(8)=72]].","Total [[=15]], so estimate [[=4.8]]."],"Coursebook grouped-data style",2)
],
"18.4":[
 X("Grouped frequencies are 8, 14, 19, 9. Identify the modal class and the class containing the median.",["Largest frequency is 19, so the third class is modal.","Total [[=50]], median lies around the 25th/26th values.","Cumulative frequencies 8, 22, 41, 50, so the median is also in the third class."],"SoW note: modal class and median-class exam questions",1),
 X("Explain why the exact median cannot usually be found from a grouped table.",["The individual raw values are no longer known.","Only the class interval containing the median position can be identified exactly.","Any numerical median obtained by interpolation is an estimate."],"SoW grouped-data interpretation",2)
],
"18.5":[
 X("A table shows 120 students: 72 study French, 54 study Spanish and 30 study both. How many study at least one?",["Use inclusion-exclusion.","[[72+54-30=96]].","So 96 study at least one of the two subjects."],"Coursebook table-inference style",1),
 X("Club A has 18 wins from 30 games; Club B has 26 wins from 50. Which has the higher win rate?",["A: [[18/30=60\\%]].","B: [[26/50=52\\%]].","Club A has the higher win rate; comparing percentages is fairer than raw counts."],"Exam Success table comparison style",2)
],
"18.6":[
 X("Group A: median 64, IQR 8. Group B: median 59, IQR 5. Compare the groups.",["Group A has the higher median, so a higher typical value.","Group B has the smaller IQR, so it is more consistent.","Neither single measure alone gives the full comparison."],"SoW: compare averages and measures of spread",1),
 X("Two machines have means 250 g and 252 g, with ranges 18 g and 6 g. Compare.",["Machine B has the slightly higher mean.","Machine B has much smaller spread by range.","If the target is consistency, B is better supported by these data."],"Coursebook statistical comparison style",2)
],
"18.7":[
 X("A school surveys only the top maths set about homework time and generalises to all Year 10 students. State the limitation.",["The sample is not representative of the whole year group.","Top-set students may have different study habits.","The conclusion should be restricted or a more representative sample should be taken."],"SoW: restrictions on conclusions",1),
 X("Ice-cream sales and sunburn cases rise together in summer. Can one be said to cause the other?",["The data show association, not proof of causation.","Temperature/sunny weather is a plausible third variable affecting both.","A causal claim would need stronger evidence."],"Exam Success interpretation / correlation caution",2)
],
"19.1":[
 X("A survey has frequencies A=12, B=18, C=6, D=4. Find the pie-chart sector angles.",["Total [[=40]].","Angles: A [[=108^\\circ]], B [[=162^\\circ]], C [[=54^\\circ]], D [[=36^\\circ]].","Check total [[=360^\\circ]]."],"Morrison & Hamshaw Ex 4.9 style",1),
 X("Construct a stem-and-leaf diagram for 12, 14, 17, 21, 21, 25, 29, 33.",["Stems are 1, 2, 3.","Leaves: 1 | 2 4 7 ; 2 | 1 1 5 9 ; 3 | 3.","Include a key such as [[2|5=25]]."],"Morrison & Hamshaw Ex 4.4 style",2)
],
"19.2":[
 X("Plot the pairs (1,2), (2,3), (3,5), (4,6), (5,8), (6,9), (7,4). Describe the pattern.",["Most points rise as x increases.","This suggests positive correlation.","[[ (7,4) ]] is an outlier relative to the main pattern."],"Morrison & Hamshaw Ex 16.1 style",1),
 X("A scatter graph compares height and arm span. What should a good answer say if points lie close to an upward trend?",["State positive correlation.","Comment on strength: strong if points cluster closely around a trend.","Do not claim height causes arm span."],"SoW bivariate-data investigation style",2)
],
"19.3":[
 X("Classify the correlation: temperature vs heating use; revision time vs test score; shoe size vs favourite colour.",["Temperature vs heating use: likely negative.","Revision time vs test score: likely positive.","Shoe size vs favourite colour: likely zero/no correlation."],"SoW positive/negative/zero correlation",1),
 X("Explain why correlation between umbrella sales and traffic delays might not mean umbrellas cause delays.",["Wet weather can increase both umbrella sales and traffic delays.","Weather is a lurking/confounding variable.","Correlation alone cannot establish cause."],"SoW correlation-does-not-prove-causation note",2)
],
"19.4":[
 X("A line of best fit passes roughly through (2,5) and (8,17). Estimate y when x=5.",["Gradient [[=(17-5)/(8-2)=2]].","Line is approximately [[y=2x+1]].","At [[x=5]], [[y\\approx11]]."],"Coursebook line-of-best-fit style",1),
 X("A data set covers x-values 10 to 50. Explain why using the best-fit line to predict at x=120 is risky.",["120 lies far outside the observed range.","This is extrapolation.","The relationship may change beyond the data, so the estimate is unreliable."],"SoW best-fit interpretation",2)
],
"19.5":[
 X("Frequencies in four classes are 4, 7, 9, 5. Complete the cumulative frequencies.",["Running totals: 4, 11, 20, 25.","The last cumulative frequency equals the total frequency.","Plot cumulative totals at the upper class boundaries."],"Morrison & Hamshaw Ex 20.2 style",1),
 X("For classes 0–10, 10–20, 20–30 with frequencies 6, 10, 4, state the points used for a cumulative-frequency curve.",["Cumulative frequencies: 6, 16, 20.","Use upper boundaries: [[(10,6),(20,16),(30,20)]].","Include the lower boundary start point [[(0,0)]]."],"Morrison & Hamshaw Ex 20.3 style",2)
],
"19.6":[
 X("A cumulative-frequency graph represents 80 values. Which cumulative frequencies locate Q1, median and Q3?",["[[Q_1]] at CF [[20]].","Median at CF [[40]].","[[Q_3]] at CF [[60]]."],"Coursebook cumulative-frequency interpretation",1),
 X("From a cumulative-frequency graph, Q1≈18 and Q3≈31. Find and interpret the IQR.",["[[IQR=31-18=13]].","The middle 50% of the data spans about 13 units.","Graph readings are estimates, so use appropriate precision."],"Morrison & Hamshaw Ex 20.3 style",2)
],
"19.7":[
 X("Classes 0–5, 5–15, 15–20 have frequencies 10, 30, 20. Find the frequency densities.",["Widths: 5, 10, 5.","Densities: [[10/5=2]], [[30/10=3]], [[20/5=4]].","Histogram bar area represents frequency."],"Morrison & Hamshaw Ex 20.1 style",1),
 X("A histogram bar from 20 to 28 has frequency density 2.5. Find the frequency.",["Class width [[=8]].","Frequency [[=density\\times width]].","[[f=2.5\\times8=20]]."],"Coursebook histogram reverse calculation",2)
],
"19.8":[
 X("A class has frequency 36 and frequency density 4.5. Find its class width.",["[[density=frequency/width]].","[[width=frequency/density]].","[[36/4.5=8]]."],"SoW frequency-density calculation",1),
 X("A histogram class is 12 units wide with density 1.75. Find its frequency.",["[[frequency=density\\times width]].","[[1.75\\times12=21]].","So the class frequency is 21."],"Morrison & Hamshaw Ex 20.1 style",2)
],
"19.9":[
 X("A bar chart shows 42 students prefer A and 31 prefer B. What can be inferred, and what cannot?",["A exceeds B by 11 students in this sample.","You can state the sample preference difference.","You cannot automatically generalise to a wider population without knowing how the sample was obtained."],"SoW inference from statistical diagrams",1),
 X("A pie chart sector is 90° in a sample of 240. Find the frequency and state one limitation of interpreting it.",["[[90/360=1/4]].","Frequency [[=240/4=60]].","The chart alone does not show whether the sample is representative."],"Coursebook pie-chart inference style",2)
],
"19.10":[
 X("Group A has median 52 and IQR 9; Group B has median 48 and IQR 15. Compare.",["A has the higher typical value by median.","A has the smaller IQR, so A is more consistent.","Use both centre and spread in the final statement."],"SoW compare data using graphs/measures",1),
 X("Two cumulative-frequency curves show the same median but one is much steeper around the middle. What does that suggest?",["Similar medians mean similar central values.","The steeper curve over the middle 50% generally corresponds to a smaller IQR.","So that group is more tightly clustered around the centre."],"Coursebook cumulative-frequency comparison style",2)
],
"19.11":[
 X("A bar chart axis starts at 96 instead of 0, making values 98 and 100 look very different. Explain the issue.",["The truncated axis exaggerates the visual difference.","The numerical difference is only 2 units.","A reader should inspect the scale before drawing conclusions."],"SoW restrictions / misleading diagrams",1),
 X("A graph from 12 volunteers is used to claim a pattern for all teenagers. Give two cautions.",["The sample is very small.","Volunteers may be self-selected and unrepresentative.","The conclusion should be qualified rather than generalised confidently."],"SoW restrictions on conclusions",2)
],
"20.1":[
 X("Let [[f(x)=2x^2-3x+1]]. Find [[f(-2)]] and [[f(3)]].",["[[f(-2)=2(4)+6+1=15]].","[[f(3)=18-9+1=10]].","Use brackets carefully when substituting negative inputs."],"Morrison & Hamshaw Ex 22.6 style",1),
 X("For [[g(x)=\\sqrt{x-1}]], state the real-number domain and range.",["Need [[x-1\\ge0]], so domain [[x\\ge1]].","A square root is non-negative.","Range [[g(x)\\ge0]]."],"Coursebook domain/range style",2)
],
"20.2":[
 X("Find the inverse of [[f(x)=3x-5]].",["Write [[y=3x-5]].","Swap x and y: [[x=3y-5]].","[[y=(x+5)/3]], so [[f^{-1}(x)=\\frac{x+5}{3}]]."],"Morrison & Hamshaw Ex 22.8 style",1),
 X("Find the inverse of [[f(x)=\\frac{2x+1}{x-3}]].",["[[y(x-3)=2x+1]].","[[yx-3y=2x+1]] → [[x(y-2)=3y+1]].","[[f^{-1}(x)=\\frac{3x+1}{x-2}]]."],"Extended inverse-function style",2)
],
"20.3":[
 X("Let [[f(x)=x+2]] and [[g(x)=3x^2]]. Find [[gf(2)]].",["[[f(2)=4]].","Then [[g(4)=3(16)=48]].","So [[gf(2)=48]]."],"Morrison & Hamshaw Ex 22.7 style",1),
 X("Let [[f(x)=2x-1]] and [[g(x)=\\frac{x+4}{3}]]. Find [[fg(x)]] and [[gf(x)]].",["[[fg(x)=2\\left(\\frac{x+4}{3}\\right)-1=\\frac{2x+5}{3}]].","[[gf(x)=\\frac{(2x-1)+4}{3}=\\frac{2x+3}{3}]].","The two composites are different."],"Coursebook composite-function style",2)
],
"21.1":[
 X("In a class of 40, 23 study French, 18 study Spanish and 9 study both. Find how many study neither.",["[[n(F\\cup S)=23+18-9=32]].","Neither [[=40-32]].","[[=8]]."],"Exam Success §1.2 Venn-diagram style",1),
 X("Describe the region [[(A\\cup B)']] and connect it to De Morgan's law.",["[[ (A\\cup B)' ]] means elements in neither A nor B.","That is the intersection of the complements.","[[ (A\\cup B)'=A'\\cap B' ]]."],"SoW De Morgan extension / Coursebook Ex 9.10–9.13",2)
],
"22.1":[
 X("[[y]] is directly proportional to [[x^2]]. Given [[y=45]] when [[x=3]], find y when [[x=6]].",["[[y=kx^2]].","[[45=9k]], so [[k=5]].","When [[x=6]], [[y=5(36)=180]]."],"Morrison & Hamshaw Ex 21.12 style",1),
 X("[[t]] is inversely proportional to [[\\sqrt v]]. Given [[t=10]] when [[v=25]], find t when [[v=100]].",["[[t=\\frac{k}{\\sqrt v}]].","[[10=k/5]], so [[k=50]].","At [[v=100]], [[t=50/10=5]]."],"SoW square-root inverse proportion",2)
]
};
})();