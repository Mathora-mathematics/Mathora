(function(C){
C["15.1"]={
 heading:"Represent and interpret inequalities",
 summary:"An inequality describes a set or interval of values rather than a single value. On a number line, endpoint style shows whether the boundary value is included.",
 keywords:["inequality","solution set","strict","inclusive","endpoint","interval"],
 explain:[
  "The symbols \\(<\\) and \\(>\\) are strict: the boundary value is not included. The symbols \\(\\le\\) and \\(\\ge\\) include the boundary.",
  "On a number line, an open circle represents a strict boundary and a filled circle represents an included boundary.",
  "A compound inequality such as \\(-2<x\\le4\\) describes the values between two boundaries."
 ],
 rules:["\\(x>a\\): open endpoint at a and shade right.","\\(x\\ge a\\): closed endpoint at a and shade right.","\\(x<a\\): open endpoint at a and shade left.","\\(x\\le a\\): closed endpoint at a and shade left."],
 formulas:[],
 method:["Read the symbol from the variable's point of view.","Identify the boundary value.","Decide whether the endpoint is included.","Shade in the direction of valid values.","For a compound inequality, satisfy both boundary conditions."],
 mistakes:["Do not confuse the direction of \\(<\\) and \\(>\\).","A filled circle means the boundary is included; an open circle means it is excluded.","When the variable is written on the right, rewrite mentally before drawing if that helps."],
 diagram:"numberline",
 examSuccess:{pages:[69,70],note:"Exam Success 2.5 includes linear inequalities and number-line interpretation."},
 examples:[
  {source:"Cambridge Ex 14.3 pattern",q:"Represent \\(x>2\\) on a number line.",steps:["Boundary is 2.","The symbol > is strict, so use an open circle at 2.","Shade to the right because values are greater than 2."],diagram:"numberline"},
  {source:"Cambridge Ex 14.3 pattern",q:"Write the inequality shown by a closed circle at -1 with shading to the left.",steps:["Shading left means x is less than the boundary.","Closed circle means -1 is included.","Answer: \\(x\\le-1\\)."],diagram:"numberline"},
  {source:"Compound inequality",q:"Represent \\(-3<x\\le4\\) on a number line.",steps:["Open circle at -3 because -3 is excluded.","Closed circle at 4 because 4 is included.","Shade only the segment between the two boundaries."],diagram:"numberline"}
 ],
 practice:{
  foundation:["Draw \\(x>5\\).","Draw \\(x\\le2\\).","Write an inequality for an open circle at 3 shaded left.","Write an inequality for a closed circle at -4 shaded right.","State whether 6 satisfies \\(x<6\\)."],
  core:["Draw \\(-2<x<5\\).","Draw \\(1\\le x<7\\).","Write a compound inequality for values from -3 inclusive to 4 exclusive.","List the integer solutions of \\(-1<x\\le5\\).","Decide whether x=2 satisfies \\(-4\\le x<2\\)."],
  extension:["Write all integer values satisfying \\(-3.5<x\\le2.1\\).","Express 'at least 12' as an inequality.","Express 'fewer than 30 students' as an inequality.","A temperature T is within the interval \\(-5\\le T<8\\). List integer values."],
  reasoning:["Explain why x=4 is not included in \\(x<4\\).","A student uses a filled circle for \\(x>7\\). Explain the error.","Create a real-life statement represented by \\(20\\le n<30\\)."]
 },
 homework:[
  {tier:"Foundation",q:"Represent \\(x\\ge-2\\) on a number line.",steps:["Boundary -2 is included, so use a closed circle.","Shade to the right."]},
  {tier:"Foundation",q:"Write the inequality: open circle at 5, shaded left.",steps:["Open means strict.","Left means less than.","Answer: \\(x<5\\)."]},
  {tier:"Core",q:"List integer solutions of \\(-2<x\\le4\\).",steps:["Integers greater than -2 and no greater than 4 are -1,0,1,2,3,4."]},
  {tier:"Core",q:"Represent \\(-1\\le x<3\\).",steps:["Closed at -1.","Open at 3.","Shade between them."]},
  {tier:"Extension",q:"A ride requires height h to satisfy \\(1.2\\le h<2.0\\) metres. Explain both boundaries.",steps:["At least 1.2 m means 1.2 is included.","Below 2.0 m means 2.0 is excluded."]}
 ]
};

C["15.2"]={
 heading:"Construct, solve and interpret linear inequalities",
 summary:"Linear inequalities are solved like linear equations, with one crucial exception: multiplying or dividing by a negative reverses the inequality sign.",
 keywords:["linear inequality","reverse sign","solution set","integer solutions","interpret"],
 explain:[
  "Equivalent operations preserve an inequality as long as order is respected.",
  "Adding or subtracting the same value from both sides does not reverse the sign.",
  "Multiplying or dividing by a positive value does not reverse the sign. Multiplying or dividing by a negative value does.",
  "After solving, interpret the answer in the context: for counts, money or length, integer or physical restrictions may apply."
 ],
 rules:["If \\(a<b\\), then \\(a+c<b+c\\).","If \\(a<b\\) and \\(c>0\\), then \\(ac<bc\\).","If \\(a<b\\) and \\(c<0\\), then \\(ac>bc\\)."],
 formulas:[],
 method:["Simplify each side.","Collect variable terms and constants as for an equation.","If the final step divides or multiplies by a negative, reverse the inequality sign.","Represent or interpret the solution set if requested."],
 mistakes:["Do not reverse the sign when adding/subtracting.","Do reverse it when dividing by a negative coefficient.","Context may require integer values even if the algebra gives a continuous interval."],
 diagram:"numberline",
 examSuccess:{pages:[69,70],note:"Exam Success 2.5 treats linear inequalities as an Extended algebra skill."},
 examples:[
  {source:"Cambridge Ex 14.4 pattern",q:"Solve \\(3x+5<20\\).",steps:["Subtract 5: \\(3x<15\\).","Divide by 3: \\(x<5\\)."]},
  {source:"Negative coefficient",q:"Solve \\(7-2x\\ge15\\).",steps:["Subtract 7: \\(-2x\\ge8\\).","Divide by -2 and reverse the sign.","\\(x\\le-4\\)."]},
  {source:"Variable both sides",q:"Solve \\(5x-3>2x+12\\).",steps:["Subtract 2x: \\(3x-3>12\\).","Add 3: \\(3x>15\\).","\\(x>5\\)."]},
  {source:"Context",q:"Tickets cost KWD 3 each and there is a fixed KWD 5 fee. You can spend at most KWD 29. Find the maximum whole number of tickets n.",steps:["\\(3n+5\\le29\\).","\\(3n\\le24\\).","\\(n\\le8\\).","Maximum whole number: 8 tickets."]}
 ],
 practice:{
  foundation:["Solve \\(x+4<10\\).","Solve \\(3x\\le18\\).","Solve \\(2x-5>9\\).","Solve \\(7-x\\ge2\\)."],
  core:["Solve \\(4x+3\\le2x+15\\).","Solve \\(9-3x<21\\).","Solve \\(5(x-2)\\ge15\\).","Solve \\(2(3x+1)<4x+10\\).","List integer solutions of \\(-2<3x+1\\le10\\)."],
  extension:["Solve \\(\\frac{x+1}{3}>2\\).","Solve \\(\\frac{2x-1}{4}\\le\\frac{x+3}{2}\\).","A phone plan costs 4 + 1.5g and budget is at most 19. Find maximum whole g.","Find integer n if \\(5n+7<42\\)."],
  reasoning:["Explain why the sign reverses when multiplying by -1 using two numerical values.","A student solves \\(-3x>12\\) as \\(x>-4\\). Diagnose the mistake.","Create an inequality with solution \\(x\\ge6\\)."]
 },
 homework:[
  {tier:"Foundation",q:"Solve \\(4x+1<17\\).",steps:["\\(4x<16\\).","\\(x<4\\)."]},
  {tier:"Core",q:"Solve \\(10-2x\\le4\\).",steps:["\\(-2x\\le-6\\).","Divide by -2 and reverse: \\(x\\ge3\\)."]},
  {tier:"Core",q:"Solve \\(3x+8\\ge x+18\\).",steps:["\\(2x+8\\ge18\\).","\\(2x\\ge10\\).","\\(x\\ge5\\)."]},
  {tier:"Extension",q:"Solve \\(2(4x-3)>5x+9\\).",steps:["\\(8x-6>5x+9\\).","\\(3x>15\\).","\\(x>5\\)."]},
  {tier:"Extension",q:"A van can carry at most 850 kg. Each crate weighs 42 kg and the driver/equipment weigh 178 kg. Find maximum whole crates.",steps:["\\(42n+178\\le850\\).","\\(42n\\le672\\).","\\(n\\le16\\).","Maximum 16 crates."]}
 ]
};

C["15.3"]={
 heading:"Graph linear inequalities in two variables",
 summary:"A linear inequality in x and y represents a half-plane. The corresponding equality gives the boundary line; the inequality determines which side of the boundary belongs to the solution.",
 keywords:["half-plane","boundary line","solid","dashed","test point"],
 explain:[
  "Replace the inequality symbol by = to draw the boundary line.",
  "A solid boundary is used for \\(\\le\\) or \\(\\ge\\) because points on the line are included. A dashed line is used for \\(<\\) or \\(>\\).",
  "A test point such as (0,0), if it is not on the boundary, tells which side satisfies the inequality.",
  "Every point in the shaded region is a solution pair."
 ],
 rules:["Solid line for \\(\\le,\\ge\\).","Dashed line for \\(<,>\\).","Test a point not on the boundary.","Shade the side that makes the inequality true."],
 formulas:[],
 method:["Draw axes and choose a sensible scale.","Draw the boundary equation accurately.","Choose solid/dashed according to the symbol.","Test a convenient point.","Shade the correct half-plane."],
 mistakes:["Do not shade before checking a point.","Do not use a solid line for a strict inequality.","The inequality is satisfied by coordinate pairs, not just x-values."],
 diagram:"ineq-region",
 examSuccess:{pages:[69,70],note:"Exam Success inequality work supports the algebra; Cambridge Ex 14.5–14.6 is the direct graphing source."},
 examples:[
  {source:"Cambridge Ex 14.5 pattern",q:"Graph \\(y\\le2x+1\\).",steps:["Boundary: \\(y=2x+1\\).","Draw a solid line because equality is included.","Test (0,0): \\(0\\le1\\) is true.","Shade the side containing (0,0)."],diagram:"ineq-region"},
  {source:"Cambridge Ex 14.5 pattern",q:"Graph \\(x+y>4\\).",steps:["Boundary: \\(x+y=4\\).","Use a dashed line because > is strict.","Test (0,0): \\(0>4\\) is false.","Shade the opposite side from the origin."],diagram:"ineq-region"},
  {source:"Mixed",q:"Graph \\(x\\ge2\\).",steps:["Boundary is vertical line \\(x=2\\).","Use solid line.","Values with x-coordinate at least 2 lie to the right.","Shade right."],diagram:"ineq-region"}
 ],
 practice:{
  foundation:["Graph \\(y>2\\).","Graph \\(x\\le3\\).","Graph \\(y<x+1\\).","State whether (1,2) satisfies \\(y\\le2x+1\\)."],
  core:["Graph \\(y\\ge-2x+4\\).","Graph \\(x+y<6\\).","Graph \\(2x+y\\le8\\).","Decide which side of \\(3x-y=2\\) satisfies \\(3x-y>2\\)."],
  extension:["Graph \\(2x+3y>12\\).","Graph \\(y<\\frac12x-3\\).","Find three integer coordinate pairs satisfying \\(x+2y\\le7\\).","Explain the effect of changing \\(y<2x+1\\) to \\(y\\le2x+1\\)."],
  reasoning:["Why can a single test point determine which half-plane is correct?","A student uses a dashed line for \\(y\\le x+3\\). Explain the error.","Create an inequality whose solution is the region above the line through (0,2) and (4,0), excluding the line."]
 },
 homework:[
  {tier:"Foundation",q:"Graph \\(x>1\\).",steps:["Boundary \\(x=1\\), dashed.","Shade to the right."]},
  {tier:"Core",q:"Graph \\(y\\le-x+4\\).",steps:["Boundary \\(y=-x+4\\), solid.","Test (0,0): \\(0\\le4\\) true.","Shade side containing origin."]},
  {tier:"Core",q:"Does (2,3) satisfy \\(2x+y<8\\)?",steps:["Substitute: \\(2(2)+3=7\\).","\\(7<8\\) is true.","Yes."]},
  {tier:"Extension",q:"Graph \\(3x+2y\\ge6\\).",steps:["Boundary \\(3x+2y=6\\), solid.","Intercepts: (2,0), (0,3).","Test origin: 0≥6 false.","Shade opposite origin."]}
 ]
};

C["15.4"]={
 heading:"List inequalities defining a region",
 summary:"A bounded feasible region is created by several inequalities acting together. Read each boundary line, decide which side of it contains the target region, and choose the correct strict/inclusive symbol.",
 keywords:["feasible region","constraint","boundary","intersection","system of inequalities"],
 explain:[
  "Each edge of the region corresponds to a line. First write the line equation.",
  "Use a point clearly inside the region to decide which inequality sign is required.",
  "Solid boundaries imply \\(\\le\\) or \\(\\ge\\); dashed boundaries imply \\(<\\) or \\(>\\).",
  "The final answer is a list/system because a point must satisfy all inequalities at once."
 ],
 rules:["One inequality per relevant boundary.","Use an interior test point.","Boundary style determines strict/inclusive.","The target region is the intersection of all half-planes."],
 formulas:[],
 method:["Identify every boundary of the region.","Find each boundary equation.","Choose a test point inside the region.","Substitute to determine the correct inequality direction.","Check the whole region satisfies every inequality."],
 mistakes:["Do not list just the boundary equations; signs are essential.","Do not infer the sign only from line slope.","A region may include x≥0 or y≥0 boundaries along the axes."],
 diagram:"ineq-region",
 examSuccess:{pages:[69,70],note:"This SoW extension builds on Cambridge Ex 14.5–14.6 and the inequality principles in Exam Success."},
 examples:[
  {source:"Region reading",q:"A region lies above \\(y=x\\), below \\(y=6\\), and to the right of \\(x=1\\). List its inequalities.",steps:["Above \\(y=x\\): \\(y\\ge x\\) if boundary is solid.","Below \\(y=6\\): \\(y\\le6\\).","Right of \\(x=1\\): \\(x\\ge1\\).","List all three constraints."],diagram:"ineq-region"},
  {source:"Triangular feasible region",q:"A solid triangular region is bounded by \\(x=0\\), \\(y=0\\), and \\(x+y=5\\) in the first quadrant. List inequalities.",steps:["First quadrant gives \\(x\\ge0\\), \\(y\\ge0\\).","Inside triangle lies below \\(x+y=5\\).","So \\(x+y\\le5\\)."],diagram:"ineq-region"},
  {source:"Strict boundary",q:"The region is below a dashed line \\(y=2x+3\\). Write the inequality.",steps:["Below means y is smaller than \\(2x+3\\).","Dashed means equality excluded.","Answer: \\(y<2x+3\\)."],diagram:"ineq-region"}
 ],
 practice:{
  foundation:["Write the inequality for the region right of solid \\(x=2\\).","Write the inequality for region below dashed \\(y=4\\).","Write first-quadrant constraints."],
  core:["List inequalities for region with \\(x\\ge0,y\\ge0,x+y\\le8\\).","A region lies above \\(y=x+1\\) and below \\(y=5\\). Write constraints.","Find whether (2,3) lies in \\(x\\ge1,y\\ge0,x+y\\le6\\).","Describe the region \\(x\\ge0,y\\ge0,2x+y\\le10\\)."],
  extension:["A feasible region has vertices (0,0),(4,0),(0,6). Find its three boundary inequalities.","Add the constraint \\(x\\le2\\) and describe how the region changes.","Find integer points satisfying \\(x\\ge0,y\\ge0,x+y<5\\).","Construct a four-inequality bounded region."],
  reasoning:["Explain why checking one interior point per line is sufficient.","A student writes \\(x+y\\ge5\\) for a triangle at the origin bounded by \\(x+y=5\\). Correct the reasoning.","Create constraints for a production problem with two products x,y and a total-resource limit."]
 },
 homework:[
  {tier:"Foundation",q:"List inequalities for the first quadrant below \\(x+y=4\\).",steps:["First quadrant: \\(x\\ge0,y\\ge0\\).","Below line: \\(x+y\\le4\\)."]},
  {tier:"Core",q:"A region is right of x=1, above y=2 and below x+y=8, all solid. List constraints.",steps:["\\(x\\ge1\\).","\\(y\\ge2\\).","\\(x+y\\le8\\)."]},
  {tier:"Extension",q:"Does (3,4) satisfy \\(x\\ge0,y\\ge0,2x+y\\le10\\)?",steps:["First two true.","\\(2(3)+4=10\\le10\\).","Yes, it lies on the third boundary."]},
  {tier:"Extension",q:"Write constraints for a region inside the square \\(0\\le x\\le5\\), \\(0\\le y\\le5\\) and above \\(y=x\\).",steps:["Square gives four inequalities.","Above diagonal gives \\(y\\ge x\\).","Combined: \\(0\\le x\\le5,0\\le y\\le5,y\\ge x\\)."]}
 ]
};
})(window.LESSON_CONTENT);