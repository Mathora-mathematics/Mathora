(function(C){
C["14.1"]={
 heading:"Construct expressions, equations and formulae",
 summary:"Algebra translates relationships into symbols. An expression has no equality sign; an equation states two expressions are equal; a formula connects quantities and can be evaluated or rearranged.",
 keywords:["variable","coefficient","term","expression","equation","formula"],
 explain:[
  "Start by deciding what each letter represents. A clear variable definition prevents errors later.",
  "Words such as 'more than', 'less than', 'twice', 'per' and 'total' describe operations and structure.",
  "An equation is formed only when two quantities are stated to be equal. A formula is a general relationship between variables.",
  "Good algebraic notation is concise: write \\(3x\\), not \\(3\\times x\\); write \\(x^2\\), not \\(x\\times x\\)."
 ],
 rules:["\\(a+a+a=3a\\)","\\(a\\times b=ab\\)","\\(a\\div b=\\frac ab\\)","Brackets show the whole quantity is acted on"],
 formulas:["3x","x^2","\\frac ab"],
 method:["Define the unknown or quantities.","Translate one phrase at a time.","Use brackets when an operation acts on a whole expression.","Check the expression by testing a simple value or reading it back in words."],
 mistakes:["'5 less than x' is \\(x-5\\), not \\(5-x\\).","'Three times the sum of x and 4' is \\(3(x+4)\\), not \\(3x+4\\).","Do not add an equals sign unless the wording creates an equation."],
 examSuccess:{pages:[50,51,52],note:"Exam Success Algebra and graphs chapter supports algebraic notation and forming expressions before equation-solving work."},
 examples:[
  {source:"Cambridge Ex 2.1 pattern",q:"Write an expression for '7 more than three times n'.",steps:["Three times n is \\(3n\\).","Seven more means add 7.","Answer: \\(3n+7\\)."]},
  {source:"Cambridge Ex 2.1 pattern",q:"A rectangle has length \\(x+4\\) cm and width x cm. Write a formula for its perimeter P.",steps:["Perimeter \\(=2\\times\\text{length}+2\\times\\text{width}\\).","\\(P=2(x+4)+2x\\).","Simplify: \\(P=4x+8\\)."],diagram:"trapezium"},
  {source:"Equation formation",q:"A number is multiplied by 5 and then 8 is subtracted. The result is 27. Form an equation.",steps:["Let the number be x.","Five times the number is \\(5x\\).","Subtract 8: \\(5x-8\\).","The result is 27, so \\(5x-8=27\\)."]},
  {source:"Context reasoning",q:"Adult tickets cost a dollars and child tickets cost c dollars. A family buys 2 adult and 3 child tickets for 31 dollars. Form an equation.",steps:["Cost of adult tickets: \\(2a\\).","Cost of child tickets: \\(3c\\).","Total cost is 31.","Equation: \\(2a+3c=31\\)."]}
 ],
 practice:{
  foundation:["Write an expression for 4 more than x.","Write an expression for 6 times p.","Write an expression for 3 less than twice y.","Write an expression for half of n.","Write a formula for the perimeter of a square of side s."],
  core:["Write an expression for 5 times the sum of x and 2.","A taxi charges KWD 1.5 plus KWD 0.4 per kilometre. Write a formula for cost C after d km.","A rectangle has width w and length \\(w+3\\). Write its area.","The sum of three consecutive integers starts with n. Write the sum.","Form an equation: twice a number plus 7 equals 29."],
  extension:["A phone plan costs f dinars plus p dinars per GB. Write a formula for total cost after g GB.","The perimeter of a rectangle is 42 and its length is 3 cm more than its width x. Form an equation.","A number is divided by 4, then 6 is added, giving twice the original number. Form an equation.","Write a formula for the nth term of 5, 9, 13, 17, ..."],
  reasoning:["Explain the difference between an expression and an equation using your own examples.","A student translates '5 less than 2x' as \\(5-2x\\). Explain the error.","Create a real-life situation represented by \\(3x+2y=40\\)."]
 },
 homework:[
  {tier:"Foundation",q:"Write an expression for 8 more than twice x.",steps:["Twice x is \\(2x\\).","Add 8.","Answer: \\(2x+8\\)."]},
  {tier:"Foundation",q:"Write an expression for one third of \\(y+6\\).",steps:["The whole quantity is \\(y+6\\).","Divide by 3.","Answer: \\(\\frac{y+6}{3}\\)."]},
  {tier:"Core",q:"A rectangle has sides x and \\(x+5\\). Write and simplify its perimeter.",steps:["\\(P=2x+2(x+5)\\).","Expand: \\(P=2x+2x+10\\).","Answer: \\(4x+10\\)."]},
  {tier:"Core",q:"Form an equation: three times a number decreased by 4 is 20.",steps:["Let the number be x.","Three times it is \\(3x\\).","Decrease by 4: \\(3x-4\\).","Equation: \\(3x-4=20\\)."]},
  {tier:"Extension",q:"A school hires b buses each with 48 seats and has 15 spare seats overall for n students. Write a relationship.",steps:["Total seats \\(=48b\\).","If 15 are spare, used seats \\(=48b-15\\).","So \\(n=48b-15\\)."]},
  {tier:"Extension",q:"Explain why \\(3(x+4)\\) is not equivalent to \\(3x+4\\).",steps:["Multiplication by 3 acts on both terms inside the bracket.","\\(3(x+4)=3x+12\\).","Therefore \\(3x+4\\) is 8 less."]}
 ]
};

C["14.2"]={
 heading:"Solve linear equations in one unknown",
 summary:"Solving an equation means finding the value that makes both sides equal. Every transformation must preserve equality, so the same operation is applied to both sides.",
 keywords:["linear equation","unknown","inverse operation","balance","solution"],
 explain:[
  "Think of an equation as a balance. If you add, subtract, multiply or divide one side, perform the same operation on the other side.",
  "For equations with brackets or fractions, simplify the structure first. Exam Success recommends clearing fractions, expanding brackets, collecting x-terms and then checking.",
  "A correct solution can be checked by substituting it into the original equation and verifying both sides match."
 ],
 rules:["Perform equivalent operations on both sides.","Expand brackets before collecting terms where helpful.","Clear denominators by multiplying every term by the same common multiple.","Check by substitution."],
 formulas:[],
 method:["Simplify each side: expand brackets and collect like terms.","Move variable terms to one side and constants to the other.","Divide by the coefficient of the unknown.","Substitute the answer into the original equation to check."],
 mistakes:["Do not change a sign merely because a term 'moves' sides; use an inverse operation.","When clearing fractions, multiply every term.","Do not divide by a coefficient before simplifying if it creates unnecessary fractions."],
 examSuccess:{pages:[64,65,66],note:"Exam Success 2.5 begins with linear equations and uses the explicit sequence: clear fractions, expand brackets, collect x-terms, simplify, check."},
 examples:[
  {source:"Exam Success 2.5 pattern",q:"Solve \\(3x-5=16\\).",steps:["Add 5 to both sides: \\(3x=21\\).","Divide by 3: \\(x=7\\).","Check: \\(3(7)-5=16\\)."]},
  {source:"Exam Success 2.5 pattern",q:"Solve \\(2(x+4)=14\\).",steps:["Divide by 2: \\(x+4=7\\).","Subtract 4: \\(x=3\\).","Check in original equation: \\(2(3+4)=14\\)."]},
  {source:"Cambridge Ex 22.1 pattern",q:"Solve \\(5-2x=3x+20\\).",steps:["Subtract \\(3x\\): \\(5-5x=20\\).","Subtract 5: \\(-5x=15\\).","Divide by -5: \\(x=-3\\)."]},
  {source:"Fractions",q:"Solve \\(\\frac{x-1}{3}+\\frac{x+2}{2}=5\\).",steps:["LCD is 6. Multiply every term by 6.","\\(2(x-1)+3(x+2)=30\\).","Expand: \\(2x-2+3x+6=30\\).","\\(5x+4=30\\Rightarrow5x=26\\).","\\(x=\\frac{26}{5}\\)."]}
 ],
 practice:{
  foundation:["Solve \\(x+7=19\\).","Solve \\(4x=28\\).","Solve \\(3x-5=16\\).","Solve \\(18-2x=8\\).","Solve \\(5x+9=34\\)."],
  core:["Solve \\(4x+7=2x+19\\).","Solve \\(3(2x-5)=21\\).","Solve \\(5(x+2)-3=22\\).","Solve \\(7-3x=4x+28\\).","Solve \\(\\frac{x}{3}+4=9\\)."],
  extension:["Solve \\(\\frac{x+2}{4}+\\frac{x-1}{3}=5\\).","Solve \\(2(3x-4)-5(x+1)=17\\).","Solve \\(0.4x+1.7=0.9x-2.3\\).","A rectangle has perimeter 54 cm and length 3 cm more than width x. Find x."],
  reasoning:["A student gets \\(x=6\\) from \\(4x+3=3x+9\\). Verify or refute without resolving from scratch.","Create a linear equation whose solution is \\(-4\\) and that has x on both sides.","Explain why subtracting \\(3x\\) from both sides preserves the solution set."]
 },
 homework:[
  {tier:"Foundation",q:"Solve \\(5x-7=28\\).",steps:["Add 7: \\(5x=35\\).","Divide by 5: \\(x=7\\)."]},
  {tier:"Foundation",q:"Solve \\(3(x+2)=24\\).",steps:["Divide by 3: \\(x+2=8\\).","Subtract 2: \\(x=6\\)."]},
  {tier:"Core",q:"Solve \\(7x+4=3x+28\\).",steps:["Subtract \\(3x\\): \\(4x+4=28\\).","Subtract 4: \\(4x=24\\).","\\(x=6\\)."]},
  {tier:"Core",q:"Solve \\(4(2x-1)-3=5x+14\\).",steps:["Expand: \\(8x-4-3=5x+14\\).","\\(8x-7=5x+14\\).","\\(3x=21\\).","\\(x=7\\)."]},
  {tier:"Extension",q:"Solve \\(\\frac{x-2}{5}+\\frac{x+1}{2}=4\\).",steps:["Multiply by 10: \\(2(x-2)+5(x+1)=40\\).","\\(2x-4+5x+5=40\\).","\\(7x+1=40\\Rightarrow7x=39\\).","\\(x=\\frac{39}{7}\\)."]},
  {tier:"Extension",q:"A gym charges KWD 8 plus KWD 3 per visit. A bill is KWD 47. How many visits?",steps:["Let visits be v.","\\(8+3v=47\\).","\\(3v=39\\).","\\(v=13\\)."]}
 ]
};

C["14.3"]={
 heading:"Solve quadratic equations",
 summary:"A quadratic equation has highest power 2. Put it into the form \\(ax^2+bx+c=0\\), then choose an efficient method: factorisation where possible, completing the square, or the quadratic formula.",
 keywords:["quadratic","root","factorise","discriminant","quadratic formula"],
 explain:[
  "A solution/root is an x-value that makes the quadratic expression zero.",
  "Factorisation is usually fastest when integer factors exist. The zero-product rule then gives one equation from each factor.",
  "The quadratic formula works for every quadratic with \\(a\\ne0\\). The discriminant \\(b^2-4ac\\) indicates how many real roots exist.",
  "Keep exact roots in surd form when the question asks for exact values."
 ],
 rules:["First rearrange to \\(ax^2+bx+c=0\\).","If \\((px+q)(rx+s)=0\\), then at least one factor is zero.","\\(x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}\\).","Discriminant >0: two real roots; =0: one repeated real root; <0: no real roots."],
 formulas:["x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}","\\Delta=b^2-4ac"],
 method:["Rearrange so one side is zero.","Inspect whether factorisation is straightforward.","If factorising, solve each factor equal to zero.","If using the formula, identify a, b and c including signs before substituting.","Check roots in the original equation or by substitution."],
 mistakes:["Do not use the zero-product rule unless one side is zero.","When b is negative, \\(-b\\) becomes positive in the formula.","The \\(\\pm\\) gives two potential roots.","Do not round too early."],
 examSuccess:{pages:[66,67,68,69],note:"Exam Success 2.5 covers quadratic equations by factorising, completing the square and the quadratic formula."},
 examples:[
  {source:"Cambridge Ex 10.12 / 14.8 pattern",q:"Solve \\(x^2-7x+12=0\\).",steps:["Find two numbers multiplying to 12 and adding to -7: -3 and -4.","\\((x-3)(x-4)=0\\).","\\(x=3\\) or \\(x=4\\)."]},
  {source:"Cambridge Ex 14.9 pattern",q:"Solve \\(2x^2+3x-2=0\\).",steps:["Factorise: \\((2x-1)(x+2)=0\\).","\\(2x-1=0\\Rightarrow x=\\frac12\\).","\\(x+2=0\\Rightarrow x=-2\\)."]},
  {source:"Quadratic formula",q:"Solve \\(3x^2-2x-7=0\\), giving exact answers.",steps:["\\(a=3,b=-2,c=-7\\).","\\(x=\\frac{2\\pm\\sqrt{(-2)^2-4(3)(-7)}}{6}\\).","Inside root: \\(4+84=88=4\\times22\\).","\\(x=\\frac{2\\pm2\\sqrt{22}}6=\\frac{1\\pm\\sqrt{22}}3\\)."]},
  {source:"Reasoning",q:"Find k if \\(x^2-6x+k=0\\) has one repeated root.",steps:["One repeated root means discriminant is 0.","\\((-6)^2-4(1)k=0\\).","\\(36-4k=0\\).","\\(k=9\\)."]}
 ],
 practice:{
  foundation:["Solve \\(x^2-9x+20=0\\).","Solve \\(x^2+x-12=0\\).","Solve \\(x^2-16=0\\).","Solve \\(x^2-6x=0\\).","Solve \\(2x^2-8x=0\\)."],
  core:["Solve \\(2x^2+7x+3=0\\).","Solve \\(3x^2-x-2=0\\).","Solve \\(x^2=5x+14\\).","Solve \\(4x^2-25=0\\).","Use the formula to solve \\(2x^2+x-5=0\\)."],
  extension:["Solve exactly \\(5x^2-4x-2=0\\).","Determine the number of real roots of \\(3x^2+2x+5=0\\).","Find k if \\(x^2+4x+k=0\\) has a repeated root.","A rectangle has area 60 and side lengths x and \\(x+7\\). Find x."],
  reasoning:["Explain why \\((x-2)(x+5)=7\\) cannot be solved by setting each factor equal to zero.","Construct a quadratic with roots 3 and -5.","Without solving fully, decide whether \\(2x^2-3x+8=0\\) has real roots."]
 },
 homework:[
  {tier:"Foundation",q:"Solve \\(x^2-11x+24=0\\).",steps:["\\((x-3)(x-8)=0\\).","Answer: \\(x=3\\) or \\(8\\)."]},
  {tier:"Foundation",q:"Solve \\(x^2-25=0\\).",steps:["Difference of squares: \\((x-5)(x+5)=0\\).","\\(x=\\pm5\\)."]},
  {tier:"Core",q:"Solve \\(2x^2-5x-3=0\\).",steps:["Factorise: \\((2x+1)(x-3)=0\\).","\\(x=-\\frac12\\) or \\(3\\)."]},
  {tier:"Core",q:"Solve \\(x^2+6x=16\\).",steps:["Rearrange: \\(x^2+6x-16=0\\).","Factorise: \\((x+8)(x-2)=0\\).","\\(x=-8\\) or \\(2\\)."]},
  {tier:"Extension",q:"Solve exactly \\(3x^2+x-4=0\\) using the quadratic formula.",steps:["\\(a=3,b=1,c=-4\\).","\\(x=\\frac{-1\\pm\\sqrt{1+48}}6\\).","\\(x=\\frac{-1\\pm7}6\\).","So \\(x=1\\) or \\(-\\frac43\\)."]},
  {tier:"Extension",q:"Find m if \\(x^2+mx+16=0\\) has a repeated root.",steps:["Discriminant 0: \\(m^2-64=0\\).","\\(m^2=64\\).","\\(m=8\\) or \\(-8\\)."]}
 ]
};

C["14.4"]={
 heading:"Solve fractional equations",
 summary:"Fractional equations contain the unknown in or around fractions. The efficient strategy is to state restrictions, multiply every term by the lowest common denominator, solve the resulting equation and reject any invalid value.",
 keywords:["fractional equation","denominator","restriction","LCD","extraneous"],
 explain:[
  "A denominator may never be zero, so restrictions should be identified before algebra begins.",
  "Multiplying every term by the lowest common denominator removes the fractions while preserving equality for permitted values.",
  "After solving, compare solutions with the restrictions and substitute back when needed."
 ],
 rules:["State denominator restrictions first.","Multiply every term by the LCD.","Use brackets around multi-term numerators.","Reject a value that makes an original denominator zero."],
 formulas:[],
 method:["List values excluded by the denominators.","Factor denominators if needed and find the LCD.","Multiply the entire equation by the LCD.","Solve the resulting linear or quadratic equation.","Check every candidate in the original equation."],
 mistakes:["Do not cancel terms across + or − before multiplying through.","Do not forget to multiply standalone constants by the LCD.","A root found algebraically may still be invalid because of a denominator restriction."],
 examSuccess:{pages:[64,65,66],note:"Exam Success 2.5 provides equation-solving structure; combine with Cambridge fractional-equation exercises from 6.1 and 10.12."},
 examples:[
  {source:"Cambridge Ex 6.1 pattern",q:"Solve \\(\\frac{x+1}{3}=5\\).",steps:["Multiply both sides by 3.","\\(x+1=15\\).","\\(x=14\\)."]},
  {source:"Cambridge Ex 6.1 pattern",q:"Solve \\(\\frac{x-1}{3}+\\frac{x+2}{2}=4\\).",steps:["LCD is 6.","Multiply every term by 6: \\(2(x-1)+3(x+2)=24\\).","\\(2x-2+3x+6=24\\).","\\(5x+4=24\\Rightarrow x=4\\)."]},
  {source:"Variable denominator",q:"Solve \\(\\frac3x+1=4\\).",steps:["Restriction: \\(x\\ne0\\).","Multiply by x: \\(3+x=4x\\).","\\(3=3x\\).","\\(x=1\\), which is permitted."]},
  {source:"Quadratic outcome",q:"Solve \\(\\frac1{x-1}+\\frac1{x+1}=1\\).",steps:["Restrictions: \\(x\\ne1,-1\\).","Multiply by \\((x-1)(x+1)\\): \\((x+1)+(x-1)=x^2-1\\).","\\(2x=x^2-1\\Rightarrow x^2-2x-1=0\\).","\\(x=1\\pm\\sqrt2\\), both permitted."]}
 ],
 practice:{
  foundation:["Solve \\(\\frac{x}{4}=7\\).","Solve \\(\\frac{x+3}{5}=4\\).","Solve \\(\\frac{x-2}{3}+1=5\\).","Solve \\(\\frac{x}{2}+\\frac{x}{3}=10\\)."],
  core:["Solve \\(\\frac{x+1}{4}+\\frac{x-2}{3}=5\\).","Solve \\(\\frac5x=2\\).","Solve \\(\\frac2{x+1}=3\\).","Solve \\(\\frac3x+2=5\\).","Solve \\(\\frac2{x-1}=\\frac3{x+2}\\)."],
  extension:["Solve \\(\\frac1x+\\frac1{x+2}=\\frac34\\).","Solve \\(\\frac2{x-3}+1=\\frac5{x-3}\\).","Solve \\(\\frac{x}{x-2}=3\\).","Solve \\(\\frac1{x-2}+\\frac1{x+2}=1\\)."],
  reasoning:["Explain why x=2 must be rejected from any equation containing \\(\\frac1{x-2}\\).","A student clears fractions but forgets to multiply a constant term. Show how this changes the equation.","Create a fractional equation with solution x=5 and restriction x≠2."]
 },
 homework:[
  {tier:"Foundation",q:"Solve \\(\\frac{x-4}{3}=6\\).",steps:["Multiply by 3: \\(x-4=18\\).","\\(x=22\\)."]},
  {tier:"Core",q:"Solve \\(\\frac{x+2}{3}+\\frac{x-1}{2}=5\\).",steps:["Multiply by 6: \\(2(x+2)+3(x-1)=30\\).","\\(2x+4+3x-3=30\\).","\\(5x+1=30\\).","\\(x=\\frac{29}{5}\\)."]},
  {tier:"Core",q:"Solve \\(\\frac4{x+1}=2\\).",steps:["Restriction \\(x\\ne-1\\).","\\(4=2(x+1)\\).","\\(4=2x+2\\Rightarrow x=1\\)."]},
  {tier:"Extension",q:"Solve \\(\\frac1x+\\frac2{x-1}=3\\).",steps:["Restrictions: \\(x\\ne0,1\\).","Multiply by \\(x(x-1)\\): \\((x-1)+2x=3x(x-1)\\).","\\(3x-1=3x^2-3x\\).","\\(3x^2-6x+1=0\\).","\\(x=1\\pm\\frac{\\sqrt6}{3}\\)."]},
  {tier:"Extension",q:"Solve \\(\\frac{x+1}{x-2}=2\\).",steps:["Restriction \\(x\\ne2\\).","\\(x+1=2x-4\\).","\\(x=5\\)."]}
 ]
};

C["14.5"]={
 heading:"Solve simultaneous linear equations",
 summary:"A simultaneous solution is an ordered pair that satisfies both equations at the same time. Elimination and substitution reduce two equations to one unknown.",
 keywords:["simultaneous","elimination","substitution","solution pair","intersection"],
 explain:[
  "Graphically, two linear equations are straight lines and the simultaneous solution is their intersection.",
  "Elimination is efficient when coefficients can be made equal or opposite. Substitution is efficient when one variable is already isolated or easy to isolate.",
  "After finding one variable, substitute into either original equation to find the other and check the pair in both equations."
 ],
 rules:["Equivalent equations can be added/subtracted to eliminate a variable.","Multiplying an entire equation by a constant preserves its solution set.","A solution pair must satisfy both original equations."],
 formulas:[],
 method:["Choose elimination or substitution.","If eliminating, align variables and make one pair of coefficients equal/opposite.","Add or subtract equations to obtain one unknown.","Solve, then back-substitute.","Check the ordered pair in both equations."],
 mistakes:["Do not multiply only some terms when scaling an equation.","When subtracting equations, subtract every term including constants.","Do not stop after finding one variable."],
 examSuccess:{pages:[64,65,66,67],note:"Exam Success 2.5 includes simultaneous linear equations alongside the linear-equation solving sequence."},
 examples:[
  {source:"Cambridge Ex 14.1 pattern",q:"Solve \\(x+y=11\\) and \\(x-y=3\\).",steps:["Add the equations: \\(2x=14\\).","\\(x=7\\).","Substitute: \\(7+y=11\\Rightarrow y=4\\).","Solution: \\((7,4)\\)."]},
  {source:"Cambridge Ex 14.2 pattern",q:"Solve \\(2x+3y=13\\) and \\(4x-y=5\\).",steps:["Multiply the second equation by 3: \\(12x-3y=15\\).","Add to the first: \\(14x=28\\).","\\(x=2\\).","Substitute into \\(4x-y=5\\): \\(8-y=5\\Rightarrow y=3\\)."]},
  {source:"Substitution",q:"Solve \\(y=2x+1\\) and \\(3x+y=16\\).",steps:["Substitute \\(y=2x+1\\): \\(3x+2x+1=16\\).","\\(5x=15\\Rightarrow x=3\\).","\\(y=2(3)+1=7\\).","Solution: \\((3,7)\\)."]},
  {source:"Context",q:"Two adult tickets and three child tickets cost 31. One adult and two child tickets cost 18. Find each price.",steps:["Let adult price be a and child price c.","\\(2a+3c=31\\), \\(a+2c=18\\).","Double second: \\(2a+4c=36\\).","Subtract first: \\(c=5\\).","Then \\(a+10=18\\Rightarrow a=8\\)."]}
 ],
 practice:{
  foundation:["Solve \\(x+y=9\\), \\(x-y=1\\).","Solve \\(x+y=12\\), \\(x+2y=17\\).","Solve \\(2x+y=11\\), \\(x+y=7\\)."],
  core:["Solve \\(2x+3y=17\\), \\(x-y=1\\).","Solve \\(4x+y=10\\), \\(2x-3y=-6\\).","Solve \\(3x+2y=16\\), \\(5x-2y=8\\).","Solve \\(y=3x-4\\), \\(2x+y=11\\)."],
  extension:["Solve \\(0.5x+0.2y=3.1\\), \\(x-y=2\\).","Solve \\(\\frac{x}{2}+\\frac{y}{3}=4\\), \\(x-y=1\\).","A shop sells 3 pens and 2 books for 16, and 2 pens and 5 books for 29. Find prices.","Find k so that \\(x+y=5\\) and \\(2x+2y=k\\) have infinitely many solutions."],
  reasoning:["Explain geometrically what it means if two simultaneous linear equations have no solution.","Create two equations with solution (2,-3).","Why does multiplying one whole equation by 3 not change its set of solutions?"]
 },
 homework:[
  {tier:"Foundation",q:"Solve \\(x+y=10\\) and \\(x-y=4\\).",steps:["Add: \\(2x=14\\Rightarrow x=7\\).","Then \\(7+y=10\\Rightarrow y=3\\)."]},
  {tier:"Core",q:"Solve \\(2x+y=9\\) and \\(3x-y=6\\).",steps:["Add: \\(5x=15\\Rightarrow x=3\\).","\\(2(3)+y=9\\Rightarrow y=3\\)."]},
  {tier:"Core",q:"Solve \\(y=x+5\\) and \\(2x+y=14\\).",steps:["Substitute: \\(2x+x+5=14\\).","\\(3x=9\\Rightarrow x=3\\).","\\(y=8\\)."]},
  {tier:"Extension",q:"Solve \\(3x+4y=18\\), \\(5x-2y=4\\).",steps:["Double second: \\(10x-4y=8\\).","Add: \\(13x=26\\Rightarrow x=2\\).","\\(6+4y=18\\Rightarrow y=3\\)."]},
  {tier:"Extension",q:"Two coffees and one sandwich cost 7.50; one coffee and two sandwiches cost 9.00. Find the prices.",steps:["Let c,s be prices.","\\(2c+s=7.5\\), \\(c+2s=9\\).","From first \\(s=7.5-2c\\).","Substitute: \\(c+15-4c=9\\Rightarrow c=2\\).","\\(s=3.5\\)."]}
 ]
};

C["14.6"]={
 heading:"Linear and non-linear simultaneous equations",
 summary:"When one equation is linear and the other non-linear, use the linear equation to substitute into the non-linear one. This usually produces a quadratic and therefore may give two solution pairs.",
 keywords:["non-linear","substitution","quadratic","solution pair","intersection"],
 explain:[
  "A line and a curve can intersect twice, once or not at all, so a non-linear simultaneous system may have two, one or zero real solution pairs.",
  "Rearrange the linear equation for one variable and substitute it into the non-linear equation.",
  "Solve the resulting quadratic, then find the matching second coordinate for each root."
 ],
 rules:["Substitute the whole expression using brackets.","Each quadratic root may produce a different ordered pair.","Check pairs in both equations."],
 formulas:[],
 method:["Rearrange the linear equation if necessary.","Substitute into the non-linear equation.","Expand and simplify to a quadratic.","Solve the quadratic.","Back-substitute separately for each root and check."],
 mistakes:["Do not pair the wrong y-value with an x-root.","Keep brackets when substituting into squares.","Do not assume there will be two real solutions."],
 examSuccess:{pages:[67,68,69],note:"Exam Success 2.5 includes simultaneous linear and quadratic equations as an Extended skill."},
 examples:[
  {source:"Cambridge Ex 18.6 pattern",q:"Solve \\(y=x+1\\) and \\(x^2+y^2=25\\).",steps:["Substitute \\(y=x+1\\): \\(x^2+(x+1)^2=25\\).","\\(2x^2+2x-24=0\\Rightarrow x^2+x-12=0\\).","\\((x+4)(x-3)=0\\), so \\(x=-4\\) or 3.","Then \\(y=-3\\) or 4.","Pairs: \\((-4,-3)\\), \\((3,4)\\)."]},
  {source:"Line and parabola",q:"Solve \\(y=2x+3\\) and \\(y=x^2\\).",steps:["Set \\(x^2=2x+3\\).","\\(x^2-2x-3=0\\).","\\((x-3)(x+1)=0\\): \\(x=3,-1\\).","Then \\(y=9,1\\).","Pairs: \\((3,9),(-1,1)\\)."],diagram:"function"},
  {source:"One tangent solution",q:"Solve \\(y=2x-1\\) and \\(y=x^2-2x+3\\).",steps:["Equate: \\(2x-1=x^2-2x+3\\).","\\(x^2-4x+4=0\\).","\\((x-2)^2=0\\Rightarrow x=2\\).","\\(y=3\\).","One repeated intersection: \\((2,3)\\)."]},
  {source:"Reasoning",q:"Explain why \\(y=x+10\\) and \\(x^2+y^2=1\\) have no real simultaneous solution.",steps:["The circle \\(x^2+y^2=1\\) lies within 1 unit of the origin.","The line \\(y=x+10\\) is far from that circle.","Algebraically the resulting quadratic has negative discriminant."]}
 ],
 practice:{
  foundation:["Solve \\(y=x\\), \\(y=x^2\\).","Solve \\(y=x+2\\), \\(y=x^2\\).","Solve \\(y=4-x\\), \\(xy=3\\)."],
  core:["Solve \\(y=x+3\\), \\(x^2+y=9\\).","Solve \\(y=2x\\), \\(x^2+y^2=20\\).","Solve \\(y=x-1\\), \\(xy=6\\).","Solve \\(y=x^2\\), \\(y=4x-3\\)."],
  extension:["Solve \\(y=3-x\\), \\(x^2+y^2=5\\).","Find the intersection of \\(y=x+1\\) and \\(y=x^2-3x+5\\).","Determine whether \\(y=2x+5\\) intersects \\(y=x^2\\) twice, once or not at all.","Find k so \\(y=x+k\\) is tangent to \\(y=x^2\\)."],
  reasoning:["Explain why a line and parabola can have at most two intersection points.","A student gets x=2 and x=5 but only calculates one y-value. Explain what is missing.","Sketch a system with exactly one real solution and describe the algebraic signature."]
 },
 homework:[
  {tier:"Foundation",q:"Solve \\(y=x+1\\) and \\(y=x^2\\).",steps:["\\(x^2=x+1\\Rightarrow x^2-x-1=0\\).","\\(x=\\frac{1\\pm\\sqrt5}{2}\\).","For each x, \\(y=x+1\\)."]},
  {tier:"Core",q:"Solve \\(y=5-x\\) and \\(xy=6\\).",steps:["\\(x(5-x)=6\\).","\\(-x^2+5x-6=0\\Rightarrow x^2-5x+6=0\\).","\\(x=2,3\\).","Then \\(y=3,2\\)."]},
  {tier:"Core",q:"Solve \\(y=2x+1\\), \\(x^2+y=7\\).",steps:["Substitute: \\(x^2+2x+1=7\\).","\\(x^2+2x-6=0\\).","\\(x=-1\\pm\\sqrt7\\).","Then \\(y=2x+1\\)."]},
  {tier:"Extension",q:"How many real solutions do \\(y=x+4\\) and \\(y=x^2\\) have?",steps:["Solve \\(x^2=x+4\\Rightarrow x^2-x-4=0\\).","Discriminant \\(=1+16=17>0\\).","Therefore two real intersections."]},
  {tier:"Extension",q:"Find k if \\(y=2x+k\\) is tangent to \\(y=x^2\\).",steps:["\\(x^2=2x+k\\Rightarrow x^2-2x-k=0\\).","Tangency means discriminant 0.","\\((-2)^2-4(1)(-k)=0\\Rightarrow4+4k=0\\).","\\(k=-1\\)."]}
 ]
};

C["14.7"]={
 heading:"Change the subject of a formula",
 summary:"Changing the subject means rearranging a formula so a chosen variable appears alone. The algebra is the same as solving an equation, but other letters are treated as constants.",
 keywords:["subject","rearrange","inverse operation","factor","formula"],
 explain:[
  "A formula such as \\(v=u+at\\) can be rearranged for any one variable without changing the relationship.",
  "When the required subject appears more than once, collect all terms containing it, then factor it out.",
  "Fractions can often be cleared first to make the structure easier to see."
 ],
 rules:["Apply inverse operations to both sides.","If the subject appears in several terms, collect and factor it.","Clear fractions or roots carefully when necessary.","Preserve brackets around grouped expressions."],
 formulas:[],
 method:["Identify the required subject.","Remove additions/subtractions not containing the subject.","Undo multiplication/division.","If the subject appears more than once, collect those terms on one side and factor.","Check by rearranging back or substituting simple values."],
 mistakes:["Do not move terms by changing signs without an operation.","When dividing by a bracket, divide the entire opposite side.","If squaring to remove a square root, square the entire other side."],
 examSuccess:{pages:[64,65],note:"Use the algebraic-equation principles in Exam Success alongside Cambridge Ex 6.3 and Ex 22.4–22.5."},
 examples:[
  {source:"Cambridge Ex 6.3 pattern",q:"Make t the subject of \\(v=u+at\\).",steps:["Subtract u: \\(v-u=at\\).","Divide by a: \\(t=\\frac{v-u}{a}\\)."]},
  {source:"Cambridge Ex 22.4 pattern",q:"Make r the subject of \\(A=\\pi r^2\\).",steps:["Divide by \\(\\pi\\): \\(r^2=\\frac A\\pi\\).","Take the positive square root for a radius: \\(r=\\sqrt{\\frac A\\pi}\\)."]},
  {source:"Subject appears twice",q:"Make x the subject of \\(y=ax+bx+c\\).",steps:["Subtract c: \\(y-c=ax+bx\\).","Factor x: \\(y-c=x(a+b)\\).","Divide: \\(x=\\frac{y-c}{a+b}\\)."]},
  {source:"Fractional formula",q:"Make x the subject of \\(y=\\frac{3x-2}{x+4}\\).",steps:["Multiply by \\(x+4\\): \\(y(x+4)=3x-2\\).","Expand: \\(xy+4y=3x-2\\).","Collect x-terms: \\(xy-3x=-2-4y\\).","Factor: \\(x(y-3)=-2-4y\\).","\\(x=\\frac{-2-4y}{y-3}=\\frac{2+4y}{3-y}\\)."]}
 ],
 practice:{
  foundation:["Make x subject: \\(y=x+7\\).","Make a subject: \\(v=u+at\\).","Make h subject: \\(A=\\frac12bh\\).","Make m subject: \\(F=ma\\)."],
  core:["Make r subject: \\(C=2\\pi r\\).","Make x subject: \\(y=3x-5\\).","Make b subject: \\(P=2a+2b\\).","Make h subject: \\(V=\\pi r^2h\\).","Make x subject: \\(y=\\frac{x+1}{4}\\)."],
  extension:["Make x subject: \\(y=ax+bx\\).","Make x subject: \\(y=\\frac{x}{x+1}\\).","Make r subject: \\(A=\\pi(R^2-r^2)\\).","Make x subject: \\(p=\\sqrt{x+q}\\)."],
  reasoning:["Explain why \\(r=\\pm\\sqrt{A/\\pi}\\) is algebraically possible but a physical radius is positive.","Create a formula in which the subject appears twice, then rearrange it.","Check your rearrangement of \\(y=(3x-2)/(x+4)\\) by substituting a simple x-value."]
 },
 homework:[
  {tier:"Foundation",q:"Make w the subject of \\(P=2l+2w\\).",steps:["Subtract \\(2l\\): \\(P-2l=2w\\).","Divide by 2: \\(w=\\frac{P-2l}{2}\\)."]},
  {tier:"Core",q:"Make t the subject of \\(s=ut+\\frac12at^2\\) is not linear in t. Explain why a simple two-step rearrangement is insufficient.",steps:["t appears as both t and \\(t^2\\).","Collecting produces a quadratic in t.","A quadratic-solving method is required."]},
  {tier:"Core",q:"Make x subject of \\(y=5x+3\\).",steps:["\\(y-3=5x\\).","\\(x=\\frac{y-3}{5}\\)."]},
  {tier:"Extension",q:"Make x subject of \\(y=\\frac{2x+1}{3x-4}\\).",steps:["\\(y(3x-4)=2x+1\\).","\\(3xy-4y=2x+1\\).","\\(3xy-2x=4y+1\\).","\\(x(3y-2)=4y+1\\).","\\(x=\\frac{4y+1}{3y-2}\\)."]},
  {tier:"Extension",q:"Make r subject of \\(V=\\frac43\\pi r^3\\).",steps:["\\(r^3=\\frac{3V}{4\\pi}\\).","\\(r=\\sqrt[3]{\\frac{3V}{4\\pi}}\\)."]}
 ]
};
})(window.LESSON_CONTENT);