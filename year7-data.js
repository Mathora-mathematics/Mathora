window.COURSE_YEAR="7";
window.EXPECTED_LESSONS=69;

const CP7="https://drive.google.com/file/d/1V1Zg12lYjFgjEKWEaDnN3nFaWOK3_Gg9/view";
const STP7="https://drive.google.com/file/d/1AY6LnfdNBd9eZzagACLyyUD2WBFv-gTe/view";

const defs=[
["1","Integers, powers and roots","1.1.1","Four operations with whole numbers","arithmetic","Use formal written methods for addition, subtraction, multiplication and division of whole numbers, and estimate to check answers.","Teacher notes / DFM Year 7","STP Ch.1 Addition & subtraction p.1; Ch.2 Multiplication & division p.17"],
["1","Integers, powers and roots","1.2.1","Prime, square and cube numbers","number-types","Identify prime, square and cube numbers and connect squares/cubes with their positive roots.","Y7CP 1.5 pp.14–15; 1.6 pp.16–17","STP Ch.4 Number and patterns p.44"],
["1","Integers, powers and roots","1.2.2","Factors, HCF, multiples and LCM","hcf-lcm","Find common factors, HCF, common multiples and LCM by listing factors and multiples.","Y7CP 1.3–1.4 pp.11–13","STP Ch.4 Number and patterns p.44"],
["1","Integers, powers and roots","1.3.1","Using negative numbers","negatives","Recognise, order and calculate with negative numbers in context, including multiplication and division of negative integers.","Y7CP 1.1 pp.8–11; Y8CP 1.1 pp.8–9","STP Ch.17 Formulas p.300"],
["1","Integers, powers and roots","1.3.2","Order of operations","bidmas","Use brackets, powers, roots and the four operations in the correct order, including directed numbers.","Teacher notes","STP Ch.2 Multiplication & division p.17"],
["1","Integers, powers and roots","1.4.1","Rounding to decimal places","round-dp","Round whole numbers and decimals to a stated degree of accuracy, including decimal places.","Y7CP 3.4 p.37; Y8CP 3.3 p.36","STP Ch.1 Addition & subtraction p.1"],
["1","Integers, powers and roots","1.4.2","Rounding to one significant figure","sigfig","Round any suitable number to one significant figure and use the rounded value in estimation.","Teacher notes","STP Ch.1 Addition & subtraction p.1"],

["2","Expressions, equations and formulae","2.1.1","Algebra vocabulary","algebra-vocab","Know and distinguish constant, variable, coefficient, term, expression, equation and formula.","Teacher notes / DFM Year 7","STP Ch.17 Formulas p.300"],
["2","Expressions, equations and formulae","2.1.2","Algebraic notation","algebra-notation","Use and interpret standard algebraic notation and conventions.","Teacher notes / DFM Year 7","STP Ch.17 Formulas p.300"],
["2","Expressions, equations and formulae","2.2.1","Collecting like terms","like-terms","Simplify expressions by collecting like terms, including simple fractional coefficients.","Y7CP 9.1 pp.98–99; Y8CP 9.1 pp.96–97","STP Ch.21 Equations p.376"],
["2","Expressions, equations and formulae","2.2.2","Expanding a single bracket","expand-single","Apply the distributive law to expand a constant or single term over a bracket.","Y7CP 9.2 p.100; Y8CP 9.2 p.98","STP Ch.21 Equations p.376"],
["2","Expressions, equations and formulae","2.3.1","Forming expressions","form-expr","Represent situations in words as linear algebraic expressions and move between the two representations.","Y7CP 2.4 pp.26–27; Y8CP 2.5 p.26","STP Ch.17 Formulas p.300"],
["2","Expressions, equations and formulae","2.3.2","Deriving formulae","formulae","Represent situations using formulae with one or more operations and use them correctly.","Y7CP 2.5 pp.28–29","STP Ch.17 Formulas p.300"],
["2","Expressions, equations and formulae","2.3.3","Substitution","substitution","Substitute positive and negative values into expressions and formulae, following the order of operations.","Y8CP 2.6 pp.27–29","STP Ch.17 Formulas p.300"],
["2","Expressions, equations and formulae","2.3.4","Forming and solving equations","equations","Form equations from contexts and solve one- and two-step linear equations.","Teacher notes / DFM Year 7","STP Ch.21 Equations p.376"],

["3","Fractions, decimals and percentages","3.1.1","Simplifying and equivalent fractions","frac-equiv","Simplify fractions using common factors and identify equivalent fractions.","Y7CP 7.1 pp.73–74","STP Ch.6 Parts of a whole p.74"],
["3","Fractions, decimals and percentages","3.1.2","One quantity as a fraction of another","frac-quantity","Express one quantity as a fraction of another, including values greater than one whole.","Teacher notes / DFM Year 7","STP Ch.6 Parts of a whole p.74"],
["3","Fractions, decimals and percentages","3.1.3","Fractions of an amount","frac-amount","Find fractions of quantities, including fractional answers, and find the whole from a fractional part.","Y7CP 7.6 p.82; Y8CP 7.5 p.77","STP Ch.6 Parts of a whole p.74"],
["3","Fractions, decimals and percentages","3.1.4","Mixed and improper fractions","mixed-improper","Convert between mixed numbers and improper fractions.","Y7CP 7.4 p.80","STP Ch.7 Addition & subtraction of fractions p.98"],
["3","Fractions, decimals and percentages","3.1.5","Adding and subtracting fractions","frac-addsub","Add and subtract fractions and mixed numbers, giving answers in simplest form.","Y7CP 7.5 p.81; Y8CP 7.4 pp.75–76","STP Ch.7 Addition & subtraction of fractions p.98"],
["3","Fractions, decimals and percentages","3.1.6","Multiplying and dividing fractions","frac-multdiv","Multiply and divide proper fractions and work with an integer and a proper or mixed fraction.","Y8CP 7.6–7.8 pp.78–81","STP Ch.6 Parts of a whole p.74"],
["3","Fractions, decimals and percentages","3.2.1","Adding and subtracting decimals","decimal-addsub","Estimate, add and subtract positive and negative decimals with different numbers of decimal places.","Y7CP 3.5 pp.38–39; Y8CP 3.4 p.37","STP Ch.7 Addition & subtraction of fractions and decimals p.98"],
["3","Fractions, decimals and percentages","3.2.2","Multiply and divide by powers of 10","powers10","Use place value to multiply and divide whole numbers and decimals by powers of 10, 0.1 and 0.01.","Y7CP 3.2 pp.33–34; Y8CP 3.1 pp.32–33","STP Ch.8 More on decimals p.119"],
["3","Fractions, decimals and percentages","3.2.3","Multiplying and dividing decimals","decimal-multdiv","Estimate and multiply or divide decimals by whole numbers, rounding when required.","Y7CP 3.6–3.7 pp.40–41; Y8CP 3.5 p.38","STP Ch.8 More on decimals p.119"],
["3","Fractions, decimals and percentages","3.3.1","Percentage of an amount","percent-amount","Calculate percentages of quantities, including percentages less than 1% or greater than 100%.","Y7CP 11.1–11.2 pp.113–115","STP Ch.6 Parts of a whole p.74"],
["3","Fractions, decimals and percentages","3.3.2","Increase and decrease by a percentage","percent-change","Find a new amount after a percentage increase or decrease by calculating the change first.","Y8CP 11.2 pp.113–114","STP Ch.6 Parts of a whole p.74"],
["3","Fractions, decimals and percentages","3.3.3","Comparing quantities using percentages","percent-compare","Express one quantity as a fraction or percentage of another and use percentages to compare quantities.","Y7CP 11.3 pp.116–117; Y8CP 11.3 pp.115–116","STP Ch.6 Parts of a whole p.74"],
["3","Fractions, decimals and percentages","3.4.1","Converting between FDP","fdp-convert","Convert between fractions, decimals and percentages, including common recurring-decimal equivalents.","Y7CP 7.2 pp.75–77; Y8CP 7.2 p.73","STP Ch.6 Parts of a whole p.74"],
["3","Fractions, decimals and percentages","3.4.2","Ordering FDP","fdp-order","Compare and order fractions, decimals and percentages and use inequality symbols correctly.","Teacher notes / DFM Year 7","STP Ch.6 Parts of a whole p.74"],

["4","Symmetry and angles","4.1.1","Properties of 2D shapes","shapes2d","Identify and describe 2D shapes, including special triangles and the hierarchy of quadrilaterals.","Y7CP 8.1 pp.87–88; Y8CP 8.3 pp.88–89","STP Ch.12 Triangles and quadrilaterals p.200"],
["4","Symmetry and angles","4.2.1","Lines of symmetry","line-sym","Recognise and draw lines of symmetry in 2D shapes and patterns, including regular polygons.","Y7CP 8.2 pp.89–90","STP Ch.11 Symmetry p.189"],
["4","Symmetry and angles","4.2.2","Rotational symmetry","rot-sym","Identify the order of rotational symmetry and use symmetry properties of polygons and quadrilaterals.","Y7CP 8.3–8.4 pp.91–95","STP Ch.11 Symmetry p.189"],
["4","Symmetry and angles","4.3.1","Types of angles","angle-types","Label lines and angles and identify acute, right, obtuse, straight and reflex angles.","Y7CP 5.1 pp.54–55","STP Ch.10 Introducing geometry p.166"],
["4","Symmetry and angles","4.3.2","Drawing and measuring angles","angle-measure","Draw and measure angles accurately using a protractor.","Y7CP 5.2 pp.56–57","STP Ch.10 Introducing geometry p.166"],
["4","Symmetry and angles","4.3.3","Angles on a line and around a point","angle-line","Use angles on a straight line, around a point and vertically opposite angles, including simple equations.","Y7CP 5.3–5.4 pp.58–61","STP Ch.10 Introducing geometry p.166"],
["4","Symmetry and angles","4.3.4","Angles in triangles","angle-triangle","Use the 180° angle sum, properties of special triangles and the exterior-angle fact.","Year 7 SOW Unit 4","STP Ch.12 Triangles and quadrilaterals p.200"],
["4","Symmetry and angles","4.3.5","Angles in quadrilaterals","angle-quad","Use the 360° angle sum and quadrilateral properties to calculate missing angles.","Year 7 SOW Unit 4","STP Ch.12 Triangles and quadrilaterals p.200"],
["4","Symmetry and angles","4.3.6","Angles in parallel lines","parallel-angles","Use corresponding, alternate, co-interior and vertically opposite angle facts to solve problems.","Year 7 SOW Unit 4; Y8CP 5.1–5.3","STP Ch.15 Parallel lines p.262"],

["5","Sequences","5.1.1","Term-to-term rules","term-rule","Use term-to-term rules to generate numerical and spatial sequences, including integers and fractions.","Source SOW labels this 5.2.1; Y7CP 2.1 pp.20–21","STP Ch.4 Number and patterns p.44"],
["5","Sequences","5.2.1","nth-term rules","nth-rule","Use linear nth-term rules, generate terms and determine the position of a term from its value.","Y7CP 2.2 pp.22–23; Y8CP 2.1–2.3","STP Ch.4 Number and patterns p.44"],

["6","Mensuration","6.1.1","Metric units","metric","Convert between metric units of length, mass and capacity, choose sensible units and read scales.","Y7CP Unit 4 pp.46–51","STP Ch.9 Units of length and mass p.141"],
["6","Mensuration","6.1.2","Metric units of area","area-units","Convert between mm², cm², m² and hectares using area scale factors.","Y7CP 18.1 p.170","STP Ch.14 Area p.246"],
["6","Mensuration","6.2.1","Area and perimeter","area-perim","Find area and perimeter of squares, rectangles, triangles, parallelograms and trapezia, including mixed units.","Y7CP 18.2 pp.171–172; Y8CP 17.1–17.2","STP Ch.14 Area p.246"],
["6","Mensuration","6.2.2","Compound area and perimeter","compound-area","Calculate area and perimeter of compound shapes made from rectangles and triangles.","Y7CP 18.3 pp.173–174; Y8CP 17.4","STP Ch.14 Area p.246"],
["6","Mensuration","6.3.1","Properties of 3D shapes","shapes3d","Identify and describe 3D shapes using faces, edges, vertices and other defining properties.","Y7CP 8.1/8.2","STP Ch.20 Solids p.358"],
["6","Mensuration","6.3.2","Volume of cubes and cuboids","volume","Use volume formulae for cubes, cuboids and compound cuboids; connect cm³ with capacity.","Y7CP 18.4 pp.175–176; Y8CP 17.5","STP Ch.20 Solids p.358"],
["6","Mensuration","6.3.3","Surface area of cubes and cuboids","surface-area","Calculate surface area of cubes and cuboids from dimensions or nets.","Y7CP 18.5 pp.177–178; Y8CP 17.5","STP Ch.20 Solids p.358"],

["7","Ratio and proportion","7.1.1","Ratio notation and simplifying","ratio","Use ratio notation and simplify or compare equivalent ratios, including quantities in different units.","Y7CP 14.1 p.137; Y8CP 14.1","STP Ch.6 Parts of a whole p.74"],
["7","Ratio and proportion","7.1.2","Sharing in a ratio","ratio-share","Divide a quantity into two or more parts in a given ratio.","Y7CP 14.2 p.138; Y8CP ratio work","STP Ch.6 Parts of a whole p.74"],
["7","Ratio and proportion","7.2.1","Unitary method","unitary","Use the unitary method to solve direct-proportion problems in a range of contexts.","Y7CP 14.3 p.140","STP Ch.6 Parts of a whole p.74"],
["7","Ratio and proportion","7.2.2","Ratio and direct proportion","direct-prop","Connect ratio with direct proportion and solve problems using proportional relationships.","Source SOW repeats 7.2.1; site uses 7.2.2 for uniqueness","STP Ch.6 Parts of a whole p.74"],

["8","Statistics","8.1.1","Different types of data","data-types","Distinguish qualitative/quantitative, categorical, discrete and continuous data.","Y7CP 6.1 pp.63–65; Y8CP 6.2","STP Ch.3 Collecting and displaying data p.34"],
["8","Statistics","8.1.2","Collecting data","data-collect","Choose, trial and justify data-collection and sampling methods for statistical questions.","Y7CP 6.1–6.2 pp.64–67","STP Ch.3 Collecting and displaying data p.34"],
["8","Statistics","8.2.1","Displaying and interpreting data","data-display","Represent and interpret data using frequency tables, pictograms, bar charts, pie charts and frequency diagrams, including misleading displays.","Y7CP 19.1–19.3 pp.181–189","STP Ch.3 p.34; Ch.22 Grouping data p.395"],
["8","Statistics","8.2.2","Averages from raw data","averages","Calculate and interpret mean, median, mode and range and choose an appropriate statistic for context.","Y7CP 10.1–10.2 pp.105–108","STP Ch.19 Summarising and comparing data p.345"],
["8","Statistics","8.2.3","Averages from frequency tables","freq-averages","Calculate averages from ungrouped frequency tables; grouped-frequency mean is not required at this stage.","Y8CP 10.1 pp.103–104","STP Ch.19 Summarising and comparing data p.345"],

["9","Probability","9.1.1","Probability language and scales","prob-scale","Use probability language and the 0-to-1 scale, including fractions, decimals and percentages.","Y7CP 16.1 p.153","STP Ch.13 Probability p.226"],
["9","Probability","9.1.2","Equally likely outcomes","prob-equal","List equally likely outcomes and calculate theoretical probabilities.","Y7CP 16.2 pp.154–155; Y8CP 15.2","STP Ch.13 Probability p.226"],
["9","Probability","9.1.3","Mutually exclusive outcomes","prob-mutual","Use complementary and mutually exclusive outcomes, with total probability equal to 1.","Y7CP 16.3 pp.156–157; Y8CP 15.1","STP Ch.13 Probability p.226"],
["9","Probability","9.1.4","Relative frequency","prob-exp","Use experiments and simulations to calculate experimental probabilities and estimate future frequencies.","Y7CP 16.4 pp.158–160","STP Ch.13 Probability p.226"],

["10","Graphs","10.1.1","Plotting coordinates","coordinates","Draw axes and plot/read coordinates in all four quadrants.","Y7CP 13.1 p.129–130","STP Ch.16 Coordinates p.282"],
["10","Graphs","10.1.2","Problem solving with coordinates","coord-problem","Use coordinates to complete shapes, reflect points, find horizontal/vertical distances and midpoints.","Teacher notes / Year 7 DFM; Y8CP 13.3","STP Ch.16 Coordinates p.282"],
["10","Graphs","10.2.1","Lines parallel to the axes","axes-lines","Recognise and draw lines of the form x = a and y = b.","Y7CP 13.2 p.131","STP Ch.18 Straight line graphs p.324"],
["10","Graphs","10.2.2","Plotting straight-line graphs","straight-line","Create tables of values and plot linear graphs such as y=x+c, y=mx and y=mx+c.","Y7CP 13.3 pp.132–134; Y8CP 13.1–13.2","STP Ch.18 Straight line graphs p.324"],
["10","Graphs","10.2.3","Graphs in real-life contexts","real-graphs","Represent and interpret real situations using simple linear graphs and formulae.","Y8CP 13.4 pp.136–138","STP Ch.18 Straight line graphs p.324"],

["11","Inequalities","11.1.1","Solving inequalities","inequalities","Interpret open intervals and solve one-variable inequalities, including brackets, fractions and negative coefficients.","Year 7 SOW Unit 11; no direct Checkpoint reference supplied","STP Ch.21 Equations p.376 as algebra support"],

["12","Construction","12.1.1","Parallel and perpendicular lines","parallel-perp","Draw parallel and perpendicular lines accurately using appropriate geometrical instruments.","Y7CP 12.2 p.121","STP Ch.10 Introducing geometry p.166; Ch.15 Parallel lines p.262"],
["12","Construction","12.1.2","Perpendicular bisectors","perp-bisector","Construct a perpendicular bisector accurately using ruler and compasses.","Y7CP 12.2 p.121","STP Ch.10 Introducing geometry p.166"],
["12","Construction","12.1.3","Angle bisectors","angle-bisector","Construct an angle bisector accurately using ruler and compasses.","Y7CP Unit 12 Constructions","STP Ch.10 Introducing geometry p.166"]
];

window.LESSONS=defs.map(d=>({u:d[0],unit:d[1],id:d[2],title:d[3],type:d[4],src:d[6]+"; "+d[7],prior:["Secure prerequisite arithmetic","Accurate notation","Clear working"],obj:[d[5]]}));
window.SOW_MAP=Object.fromEntries(defs.map(d=>[d[2],{
 objective:d[5],
 notes:(d[2]==="5.1.1"?"The source SOW labels the term-to-term lesson 5.2.1; Mathora uses 5.1.1 to match the 5.1 Generating Sequences section and keep IDs unique. ":"")+
       (d[2]==="7.2.2"?"The source SOW repeats 7.2.1 for this lesson; Mathora uses 7.2.2 to keep IDs unique. ":"")+
       (d[2]==="4.1.1"?"The source SOW gives this 4.1 lesson as a section title without a child code; Mathora uses 4.1.1 for consistent navigation. ":"")+
       "Mapped from the NES Year 7 Scheme of Work 2026–27.",
 teaching:"Use progressive modelling, deliberate practice and contextual reasoning. Keep non-calculator methods explicit where the SOW requires them.",
 textbook:d[6]+"; "+d[7]
}]));

const Q=(prompt,steps)=>({prompt,steps});
const mk=(examples,practice,homework)=>({examples,practice,homework});
const clone=(a,n)=>Array.from({length:n},(_,i)=>{const q=a[i%a.length];return Q(q.prompt,q.steps)});

const common={
 arithmetic:[
  Q("Work out [[4786+3957]].",["[[4786+3957=8743]]."]),
  Q("Work out [[9000-4678]].",["[[9000-4678=4322]]."]),
  Q("Work out [[324\\times27]].",["[[324\\times20=6480]], [[324\\times7=2268]].","Total [[=8748]]."]),
  Q("Work out [[1728\\div24]].",["[[1728\\div24=72]]."]),
  Q("Estimate [[398\\times51]].",["[[400\\times50=20000]]."]),
  Q("A school buys 28 boxes of 36 books. How many books?",["[[28\\times36=1008]]."])
 ],
 "number-types":[
  Q("List the prime numbers between 20 and 40.",["23, 29, 31, 37."]),
  Q("Find [[13^2]] and [[\\sqrt{169}]].",["[[13^2=169]] and [[\\sqrt{169}=13]]."]),
  Q("Find [[5^3]] and [[\\sqrt[3]{125}]].",["[[125]] and [[5]]."]),
  Q("Is 91 prime? Explain.",["No. [[91=7\\times13]]."]),
  Q("Which are square numbers: 36, 45, 64, 72?",["36 and 64."]),
  Q("Find the cube root of 216.",["[[6]]."])
 ],
 "hcf-lcm":[
  Q("Find the HCF of 18 and 30.",["Factors common to both include 1,2,3,6.","HCF [[=6]]."]),
  Q("Find the LCM of 8 and 12.",["Multiples first meet at [[24]]."]),
  Q("Find the HCF and LCM of 20 and 50.",["HCF [[=10]], LCM [[=100]]."]),
  Q("Two bells ring every 6 and 8 minutes. When next together?",["LCM(6,8) [[=24]] minutes."]),
  Q("List all common factors of 24 and 36.",["1,2,3,4,6,12."]),
  Q("Find the first three common multiples of 4 and 6.",["12,24,36."])
 ],
 negatives:[
  Q("Order [[-7,3,-2,0,5]] from smallest to largest.",["[[-7,-2,0,3,5]]."]),
  Q("Work out [[-4+9]].",["[[5]]."]),
  Q("Work out [[3-8]].",["[[-5]]."]),
  Q("Work out [[-6\\times4]].",["[[-24]]."]),
  Q("Work out [[-35\\div(-5)]].",["[[7]]."]),
  Q("The temperature rises from -8°C to 3°C. Find the increase.",["[[11^\\circ C]]."])
 ],
 bidmas:[
  Q("Work out [[7+3\\times5]].",["Multiply first: [[3\\times5=15]].","[[7+15=22]]."]),
  Q("Work out [[(12-4)\\times3]].",["Brackets first: 8.","[[8\\times3=24]]."]),
  Q("Work out [[2^3+18\\div3]].",["Power and division first: [[8+6=14]]."]),
  Q("Work out [[30-4\\times(6-2)]].",["Brackets 4; multiplication 16.","[[30-16=14]]."]),
  Q("Work out [[\\sqrt{81}+5^2]].",["[[9+25=34]]."]),
  Q("Insert brackets to make [[5+3\\times4=32]].",["[[(5+3)\\times4=32]]."])
 ],
 "round-dp":[
  Q("Round 7.486 to 2 d.p.",["[[7.49]]."]),
  Q("Round 13.951 to 1 d.p.",["[[14.0]]."]),
  Q("Round 0.0649 to 2 d.p.",["[[0.06]]."]),
  Q("Round 248.376 to nearest whole number.",["[[248]]."]),
  Q("Round 56.555 to 2 d.p.",["[[56.56]]."]),
  Q("Round 2.995 to 2 d.p.",["[[3.00]]."])
 ],
 sigfig:[
  Q("Round 486 to 1 s.f.",["[[500]]."]),
  Q("Round 0.0784 to 1 s.f.",["[[0.08]]."]),
  Q("Round 53 920 to 1 s.f.",["[[50\\,000]]."]),
  Q("Estimate [[49\\times21]] using 1 s.f.",["[[50\\times20=1000]]."]),
  Q("Round 7.64 to 1 s.f.",["[[8]]."]),
  Q("Round 0.00468 to 1 s.f.",["[[0.005]]."])
 ],
 "algebra-vocab":[
  Q("In [[5x+7]], identify the coefficient, variable and constant.",["Coefficient 5; variable x; constant 7."]),
  Q("Is [[3y-4]] an expression or equation?",["Expression: there is no equals sign."]),
  Q("In [[A=lw]], what type of statement is this?",["A formula."]),
  Q("How many terms are in [[4a-3b+8]]?",["3 terms."]),
  Q("What is the coefficient of [[m]] in [[m+6]]?",["1."]),
  Q("Give an example of an equation.",["Example: [[2x+3=11]]."])
 ],
 "algebra-notation":[
  Q("Rewrite [[3\\times x]] using algebraic notation.",["[[3x]]."]),
  Q("Rewrite [[a\\times a]].",["[[a^2]]."]),
  Q("Rewrite [[y\\div5]].",["[[\\frac y5]]."]),
  Q("Rewrite [[1\\times p]].",["[[p]]."]),
  Q("Interpret [[4(x+2)]].",["Four times the quantity x+2."]),
  Q("Which is correct: [[x3]] or [[3x]] for three times x?",["[[3x]]."])
 ],
 "like-terms":[
  Q("Simplify [[5x+3x-2]].",["[[8x-2]]."]),
  Q("Simplify [[4a+2b-3a+5b]].",["[[a+7b]]."]),
  Q("Simplify [[7m-2+3m+8]].",["[[10m+6]]."]),
  Q("Simplify [[\\frac12x+\\frac14x]].",["[[\\frac34x]]."]),
  Q("Simplify [[3x^2+2x+5x^2-x]].",["[[8x^2+x]]."]),
  Q("Simplify [[6p-4q-2p+q]].",["[[4p-3q]]."])
 ],
 "expand-single":[
  Q("Expand [[4(x+3)]].",["[[4x+12]]."]),
  Q("Expand [[-3(2x-5)]].",["[[-6x+15]]."]),
  Q("Expand [[5a(a+2)]].",["[[5a^2+10a]]."]),
  Q("Expand [[2(3y-4)]].",["[[6y-8]]."]),
  Q("Expand [[x(x+7)]].",["[[x^2+7x]]."]),
  Q("Expand and simplify [[3(x+2)+2x]].",["[[3x+6+2x=5x+6]]."])
 ],
 "form-expr":[
  Q("A number x is increased by 7. Write an expression.",["[[x+7]]."]),
  Q("Three times n then subtract 5.",["[[3n-5]]."]),
  Q("A taxi costs KD 2 plus KD 0.5 per kilometre k.",["[[2+0.5k]]."]),
  Q("Write an expression for the perimeter of a square side x.",["[[4x]]."]),
  Q("A number y is divided by 4 then 3 is added.",["[[\\frac y4+3]]."]),
  Q("Sam has x marbles and gives away 12.",["[[x-12]]."])
 ],
 formulae:[
  Q("Write a formula for cost C of n tickets at KD 3 each.",["[[C=3n]]."]),
  Q("Write a formula for perimeter P of rectangle length l and width w.",["[[P=2l+2w]]."]),
  Q("A taxi charges KD 1.5 plus 0.4 per km d. Write C.",["[[C=1.5+0.4d]]."]),
  Q("Write a formula for hours h in d days.",["[[h=24d]]."]),
  Q("Write a formula for area A of rectangle b by h.",["[[A=bh]]."]),
  Q("Write a formula for total T of x, x+1 and x+2.",["[[T=3x+3]]."])
 ],
 substitution:[
  Q("Find [[3x+5]] when [[x=4]].",["[[3(4)+5=17]]."]),
  Q("Find [[2a^2-b]] when [[a=-3,b=5]].",["[[2(9)-5=13]]."]),
  Q("Use [[v=u+at]] with [[u=5,a=2,t=6]].",["[[v=5+12=17]]."]),
  Q("Find [[x^2+2y]] when [[x=-4,y=3]].",["[[16+6=22]]."]),
  Q("Use [[P=2l+2w]] for l=7,w=3.",["[[P=14+6=20]]."]),
  Q("Find [[5-2n]] when n=-6.",["[[5+12=17]]."])
 ],
 equations:[
  Q("Solve [[x+7=19]].",["[[x=12]]."]),
  Q("Solve [[3x=27]].",["[[x=9]]."]),
  Q("Solve [[2x+5=17]].",["[[2x=12]], [[x=6]]."]),
  Q("Form and solve: a number plus 8 is 23.",["[[x+8=23]], so [[x=15]]."]),
  Q("Solve [[5x-4=21]].",["[[5x=25]], [[x=5]]."]),
  Q("A rectangle has width x and length x+3, perimeter 26. Find x.",["[[2x+2(x+3)=26]].","[[4x+6=26]], [[x=5]]."])
 ],
 "frac-equiv":[
  Q("Simplify [[18/24]].",["Divide by 6: [[3/4]]."]),
  Q("Complete [[3/5=?/20]].",["Multiply by 4: [[12/20]]."]),
  Q("Which is equivalent to [[4/6]]: [[6/9]] or [[8/15]]?",["[[6/9=2/3]] and [[4/6=2/3]], so 6/9."]),
  Q("Simplify [[42/56]].",["[[3/4]]."]),
  Q("Complete [[7/8=35/?]].",["Multiply by 5: denominator [[40]]."]),
  Q("Are [[12/18]] and [[8/12]] equivalent?",["Both simplify to [[2/3]]."])
 ],
 "frac-quantity":[
  Q("Express 8 as a fraction of 20.",["[[8/20=2/5]]."]),
  Q("Express 15 cm as a fraction of 1 m.",["1 m =100 cm.","[[15/100=3/20]]."]),
  Q("Express 12 as a fraction of 8.",["[[12/8=3/2]]."]),
  Q("Express 45 minutes as a fraction of 1 hour.",["[[45/60=3/4]]."]),
  Q("Express 250 g as a fraction of 2 kg.",["2 kg=2000g.","[[250/2000=1/8]]."]),
  Q("Express 9 as a fraction of 6.",["[[9/6=3/2]]."])
 ],
 "frac-amount":[
  Q("Find [[3/5]] of 40.",["[[40\\div5\\times3=24]]."]),
  Q("Find [[7/8]] of 56.",["[[49]]."]),
  Q("[[3/4]] of a number is 27. Find the whole.",["One quarter is 9; whole [[=36]]."]),
  Q("Find [[2/3]] of 15.",["[[10]]."]),
  Q("Find [[5/6]] of 18.",["[[15]]."]),
  Q("[[2/5]] of a number is 14. Find the whole.",["One fifth 7; whole [[35]]."])
 ],
 "mixed-improper":[
  Q("Convert [[17/5]] to a mixed number.",["[[3\\frac25]]."]),
  Q("Convert [[4\\frac37]] to an improper fraction.",["[[31/7]]."]),
  Q("Convert [[29/6]].",["[[4\\frac56]]."]),
  Q("Convert [[2\\frac58]].",["[[21/8]]."]),
  Q("Convert [[41/9]].",["[[4\\frac59]]."]),
  Q("Convert [[6\\frac14]].",["[[25/4]]."])
 ],
 "frac-addsub":[
  Q("Work out [[2/3+1/4]].",["Common denominator 12.","[[8/12+3/12=11/12]]."]),
  Q("Work out [[5/6-1/4]].",["Common denominator 12.","[[10/12-3/12=7/12]]."]),
  Q("Work out [[2\\frac12+1\\frac34]].",["[[5/2+7/4=10/4+7/4=17/4=4\\frac14]]."]),
  Q("Work out [[4\\frac13-2\\frac56]].",["[[13/3-17/6=26/6-17/6=9/6=1\\frac12]]."]),
  Q("Work out [[7/10+3/5]].",["[[7/10+6/10=13/10=1\\frac3{10}]]."]),
  Q("Work out [[3\\frac14-1\\frac58]].",["[[26/8-13/8=13/8=1\\frac58]]."])
 ],
 "frac-multdiv":[
  Q("Work out [[3/4\\times2/5]].",["[[6/20=3/10]]."]),
  Q("Work out [[5/6\\div2/3]].",["Multiply by reciprocal: [[5/6\\times3/2=15/12=5/4]]."]),
  Q("Find [[2\\frac12\\times3]].",["[[5/2\\times3=15/2=7\\frac12]]."]),
  Q("Work out [[7/8\\times4/7]].",["Cancel 7; [[4/8=1/2]]."]),
  Q("Work out [[3/5\\div6]].",["[[3/5\\times1/6=1/10]]."]),
  Q("Work out [[4\\div2/3]].",["[[4\\times3/2=6]]."])
 ],
 "decimal-addsub":[
  Q("Work out [[6.24+8.35]].",["[[14.59]]."]),
  Q("Work out [[23.7-8.46]].",["[[15.24]]."]),
  Q("Work out [[-2.5+7.3]].",["[[4.8]]."]),
  Q("Work out [[5.08+0.927]].",["[[6.007]]."]),
  Q("Work out [[12-3.675]].",["[[8.325]]."]),
  Q("Estimate then calculate [[49.7+31.28]].",["Estimate 50+30=80.","Exact [[80.98]]."])
 ],
 powers10:[
  Q("Work out [[4.27\\times100]].",["[[427]]."]),
  Q("Work out [[680\\div1000]].",["[[0.68]]."]),
  Q("Work out [[3.4\\div0.1]].",["[[34]]."]),
  Q("Work out [[52\\times0.01]].",["[[0.52]]."]),
  Q("Work out [[0.007\\times10000]].",["[[70]]."]),
  Q("Work out [[9.2\\div0.01]].",["[[920]]."])
 ],
 "decimal-multdiv":[
  Q("Work out [[3.6\\times7]].",["[[25.2]]."]),
  Q("Work out [[14.4\\div6]].",["[[2.4]]."]),
  Q("Work out [[0.48\\times25]].",["[[12]]."]),
  Q("Work out [[7.5\\div4]] to 2 d.p.",["[[1.875\\approx1.88]]."]),
  Q("Estimate [[19.8\\times6]].",["[[20\\times6=120]]."]),
  Q("Work out [[5.04\\div8]].",["[[0.63]]."])
 ],
 "percent-amount":[
  Q("Find 25% of 80.",["[[20]]."]),
  Q("Find 15% of 240.",["10%=24, 5%=12, total [[36]]."]),
  Q("Find 0.5% of 600.",["1%=6, half [[=3]]."]),
  Q("Find 120% of 50.",["100%=50, 20%=10, total [[60]]."]),
  Q("Find 35% of 200.",["[[70]]."]),
  Q("Find 7% of 300.",["[[21]]."])
 ],
 "percent-change":[
  Q("Increase 80 by 15%.",["15% of 80=12.","New amount [[92]]."]),
  Q("Decrease 240 by 25%.",["25%=60.","New amount [[180]]."]),
  Q("A KD 50 item is reduced by 10%.",["Reduction 5.","Sale price [[45]]."]),
  Q("Increase 120 by 5%.",["Increase 6.","[[126]]."]),
  Q("Decrease 600 by 12%.",["12%=72.","[[528]]."]),
  Q("A population of 250 rises by 20%.",["Increase 50.","[[300]]."])
 ],
 "percent-compare":[
  Q("18 out of 24 students pass. What percentage?",["[[18/24=3/4=75\\%]]."]),
  Q("Express 30 as a percentage of 50.",["[[30/50\\times100=60\\%]]."]),
  Q("Team A wins 12 of 20; Team B wins 18 of 30. Compare.",["Both [[60\\%]]."]),
  Q("15 is what percentage of 60?",["[[25\\%]]."]),
  Q("40 cm as a percentage of 2 m.",["2m=200cm.","[[40/200=20\\%]]."]),
  Q("Which is greater: 7/10 or 68%?",["7/10=70%, so 7/10 is greater."])
 ],
 "fdp-convert":[
  Q("Convert [[3/5]] to decimal and percentage.",["[[0.6=60\\%]]."]),
  Q("Convert 0.375 to a fraction.",["[[375/1000=3/8]]."]),
  Q("Convert 42% to a decimal and fraction.",["[[0.42=21/50]]."]),
  Q("Write [[1/3]] as a recurring decimal.",["[[0.\\overline3]]."]),
  Q("Convert 0.125 to a percentage.",["[[12.5\\%]]."]),
  Q("Convert 62.5% to a fraction.",["[[0.625=5/8]]."])
 ],
 "fdp-order":[
  Q("Order [[0.6, 5/8, 61\\%]] from smallest.",["0.6=60%, 5/8=62.5%.","[[0.6,61\\%,5/8]]."]),
  Q("Which is larger: [[3/4]] or 72%?",["3/4=75%, so 3/4."]),
  Q("Insert <, > or =: [[0.45]] __ [[9/20]].",["9/20=0.45, so =."]),
  Q("Order [[-0.3,-1/4,-20\\%]].",["-0.3=-30%, -1/4=-25%, -20%.","Smallest to largest: -0.3, -1/4, -20%."]),
  Q("Which is smaller: 0.08 or 9%?",["0.08=8%, so 0.08."]),
  Q("Order 35%, 0.4, 3/8.",["35%=0.35, 3/8=0.375.","35%, 3/8, 0.4."])
 ]
};

function geometryBank(type){
 const m={
  shapes2d:[
   Q("Name a quadrilateral with exactly one pair of parallel sides.",["A trapezium."]),
   Q("State two properties of a rectangle.",["Four right angles; opposite sides equal and parallel."]),
   Q("What type of triangle has exactly two equal sides?",["Isosceles triangle."]),
   Q("Is every square a rectangle?",["Yes: it has four right angles and opposite sides parallel."]),
   Q("How many diagonals does a quadrilateral have?",["2."]),
   Q("Describe a rhombus.",["Four equal sides; opposite sides parallel; opposite angles equal."])
  ],
  "line-sym":[
   Q("How many lines of symmetry has a square?",["4."]),
   Q("How many lines of symmetry has an equilateral triangle?",["3."]),
   Q("How many lines of symmetry has a regular pentagon?",["5."]),
   Q("Does a scalene triangle have line symmetry?",["No."]),
   Q("How many lines of symmetry has a rectangle that is not a square?",["2."]),
   Q("Complete a reflected pattern by placing each point the same perpendicular distance from the mirror line.",["Use equal perpendicular distances on the opposite side."])
  ],
  "rot-sym":[
   Q("What is the rotational symmetry order of a square?",["4."]),
   Q("What is the rotational symmetry order of a rectangle that is not a square?",["2."]),
   Q("What is the rotational symmetry order of an equilateral triangle?",["3."]),
   Q("What is the order for a regular hexagon?",["6."]),
   Q("Does a kite generally have rotational symmetry order 2?",["No; usually order 1."]),
   Q("What angle maps a shape of order 4 onto itself?",["[[360/4=90^\\circ]]."])
  ],
  "angle-types":[
   Q("Classify 35°.",["Acute."]),
   Q("Classify 90°.",["Right angle."]),
   Q("Classify 128°.",["Obtuse."]),
   Q("Classify 180°.",["Straight angle."]),
   Q("Classify 240°.",["Reflex."]),
   Q("Give the range for an obtuse angle.",["Greater than 90° and less than 180°."])
  ],
  "angle-measure":[
   Q("Which protractor scale should you use?",["The scale that starts at 0° on the arm of the angle."]),
   Q("Draw an angle of 65°.",["Draw a baseline, align protractor centre, mark 65°, join to vertex."]),
   Q("Estimate then measure an angle close to 120°.",["An obtuse estimate near 120° should agree with the measured value."]),
   Q("Why must the protractor centre sit on the vertex?",["So the angular scale is measured from the correct centre."]),
   Q("Draw 145°.",["Baseline, mark 145°, join."]),
   Q("How can you check whether you used the wrong scale?",["An acute/obtuse visual estimate should agree with the reading."])
  ],
  "angle-line":[
   Q("Angles on a straight line are 68° and x. Find x.",["[[x=180-68=112^\\circ]]."]),
   Q("Angles around a point are 90°, 130°, 75° and x.",["[[x=360-295=65^\\circ]]."]),
   Q("Vertically opposite to 47° is x. Find x.",["[[47^\\circ]]."]),
   Q("On a line, angles are [[3x]] and [[2x]]. Find x.",["[[5x=180]], [[x=36^\\circ]]."]),
   Q("Around a point: x, x, 80°, 100°. Find x.",["[[2x+180=360]], [[x=90^\\circ]]."]),
   Q("One angle at an intersection is 125°. Find an adjacent angle.",["[[180-125=55^\\circ]]."])
  ],
  "angle-triangle":[
   Q("Triangle angles are 48°, 67° and x. Find x.",["[[x=180-115=65^\\circ]]."]),
   Q("An isosceles triangle has equal base angles 72°. Find the third.",["[[180-144=36^\\circ]]."]),
   Q("An exterior angle is 125° and one opposite interior angle is 58°. Find the other.",["[[125-58=67^\\circ]]."]),
   Q("Triangle angles are x, 2x, 3x. Find x.",["[[6x=180]], [[x=30^\\circ]]."]),
   Q("Right triangle has one acute angle 37°. Find the other.",["[[53^\\circ]]."]),
   Q("Equilateral triangle angle?",["[[60^\\circ]]."])
  ],
  "angle-quad":[
   Q("Quadrilateral angles are 90°, 105°, 80° and x.",["[[x=360-275=85^\\circ]]."]),
   Q("A parallelogram has one angle 68°. Find adjacent angle.",["[[112^\\circ]]."]),
   Q("Angles are x, x, 2x, 2x. Find x.",["[[6x=360]], [[x=60^\\circ]]."]),
   Q("A rectangle has four angles of?",["[[90^\\circ]]."]),
   Q("A rhombus has one angle 120°. Find opposite angle.",["[[120^\\circ]]."]),
   Q("Three quadrilateral angles total 298°. Find fourth.",["[[62^\\circ]]."])
  ],
  "parallel-angles":[
   Q("Corresponding angle to 73° on parallel lines?",["[[73^\\circ]]."]),
   Q("Alternate angle to 118°?",["[[118^\\circ]]."]),
   Q("Co-interior angle with 64°?",["[[180-64=116^\\circ]]."]),
   Q("If corresponding angles are [[3x+5]] and 80°, find x.",["[[3x+5=80]], [[x=25]]."]),
   Q("Alternate angles are [[5x-7]] and 98°. Find x.",["[[5x=105]], [[x=21]]."]),
   Q("Why are co-interior angles supplementary?",["For parallel lines they total 180°."])
  ]
 };
 return m[type]||m.shapes2d;
}

function laterBank(type){
 const m={
  "term-rule":[Q("Continue 4,9,14,19,...",["Add 5: 24,29,34."]),Q("Find rule: 20,17,14,11,...",["Subtract 3."]),Q("Start 3, add 7. Find fifth term.",["3,10,17,24,31."]),Q("Continue 1/2,3/4,1,...",["Add 1/4; next 5/4,3/2."]),Q("Find rule 5,10,20,40,...",["Multiply by 2."]),Q("Sequence starts -4 and adds 6. First four terms?",["-4,2,8,14."])],
  "nth-rule":[Q("Find nth term of 5,8,11,14,...",["[[3n+2]]."]),Q("Find 10th term of [[4n-1]].",["[[39]]."]),Q("Is 62 in sequence [[5n+2]]?",["[[5n+2=62]], [[n=12]], so yes."]),Q("Find nth term: 12,9,6,3,...",["[[-3n+15]]."]),Q("Find position of 101 in [[4n+1]].",["[[n=25]]."]),Q("Generate first four terms of [[2n+3]].",["5,7,9,11."])],
  metric:[Q("Convert 3.5 m to cm.",["[[350]] cm."]),Q("Convert 4200 g to kg.",["[[4.2]] kg."]),Q("Convert 2.75 L to mL.",["[[2750]] mL."]),Q("Choose a sensible unit for the mass of a car.",["Kilograms or tonnes."]),Q("Convert 0.8 km to m.",["800 m."]),Q("Read a scale where each small division is 0.2 units.",["Count intervals and multiply by 0.2."])],
  "area-units":[Q("Convert 3 m² to cm².",["[[3\\times10000=30000]] cm²."]),Q("Convert 45000 cm² to m².",["[[4.5]] m²."]),Q("Convert 2 ha to m².",["[[20000]] m²."]),Q("Convert 800 mm² to cm².",["[[8]] cm²."]),Q("Why is 1 m² not 100 cm²?",["Because both dimensions scale by 100: [[100\\times100=10000]]."]),Q("Convert 0.25 m² to cm².",["2500 cm²."])],
  "area-perim":[Q("Rectangle 8 by 5: area and perimeter?",["Area 40; perimeter 26."]),Q("Triangle base 10, height 7: area?",["[[35]]."]),Q("Parallelogram base 9, perpendicular height 4.",["Area [[36]]."]),Q("Trapezium parallel sides 6 and 10, height 5.",["[[\\frac12(6+10)5=40]]."]),Q("Square area 81. Side and perimeter?",["Side 9; perimeter 36."]),Q("Triangle perimeter sides 7,8,12.",["27."])],
  "compound-area":[Q("An L-shape is a 10×8 rectangle with a 4×3 corner removed. Area?",["[[80-12=68]]."]),Q("Compound shape: rectangle 12×5 plus triangle base 6 height 4.",["[[60+12=72]]."]),Q("A 9×7 rectangle has a 3×2 cut-out.",["[[63-6=57]]."]),Q("Find perimeter by tracing every outside edge.",["Add all external boundary lengths only."]),Q("A square 10×10 has rectangle 4×6 removed.",["[[100-24=76]]."]),Q("Why can internal dividing lines be ignored for perimeter?",["Perimeter is only the outer boundary."])],
  shapes3d:[Q("How many faces, edges and vertices has a cube?",["6 faces, 12 edges, 8 vertices."]),Q("Name a solid with two circular faces and one curved surface.",["Cylinder."]),Q("How many vertices has a triangular prism?",["6."]),Q("Describe a square-based pyramid.",["One square base, four triangular faces, five vertices."]),Q("Which solid has one circular base and one vertex?",["Cone."]),Q("How many faces has a cuboid?",["6."])],
  volume:[Q("Cuboid 8×5×3 cm. Volume?",["[[120]] cm³."]),Q("Cube side 6 cm. Volume?",["[[216]] cm³."]),Q("A cuboid has volume 240, base 10×6. Height?",["[[240/60=4]]."]),Q("Convert 2500 cm³ to litres.",["[[2.5]] L."]),Q("Compound cuboids have volumes 120 and 75 cm³. Total?",["195 cm³."]),Q("1 litre equals how many cm³?",["1000 cm³."])],
  "surface-area":[Q("Cube side 5. Surface area?",["[[6\\times25=150]]."]),Q("Cuboid 4×3×2. Surface area?",["[[2(12+8+6)=52]]."]),Q("Why does a net help with surface area?",["It shows every face to be added exactly once."]),Q("Cuboid 10×2×1 surface area?",["[[2(20+10+2)=64]]."]),Q("Cube surface area 216. Find side.",["[[6s^2=216]], [[s^2=36]], [[s=6]]."]),Q("Cuboid faces: 2 of 6×4, 2 of 6×3, 2 of 4×3.",["[[48+36+24=108]]."])],
  ratio:[Q("Simplify 18:24.",["[[3:4]]."]),Q("Simplify 2 m : 50 cm.",["2m=200cm.","[[200:50=4:1]]."]),Q("Find equivalent ratio to 3:5 with first term 12.",["Multiply by 4: [[12:20]]."]),Q("Which is larger, 2:3 or 3:5 as first-part fraction?",["2/5=0.4; 3/8=0.375, so 2:3."]),Q("Simplify 45:60:75.",["Divide by15: [[3:4:5]]."]),Q("Simplify 0.5:2.",["Multiply by2:1:4."])],
  "ratio-share":[Q("Share 60 in ratio 2:3.",["5 parts; each12.","[[24,36]]."]),Q("Share 84 in ratio 3:4.",["7 parts; each12.","[[36,48]]."]),Q("Share 150 in ratio 2:3:5.",["10 parts; each15.","[[30,45,75]]."]),Q("A:B=5:2 and total 91.",["7 parts=13.","A=65,B=26."]),Q("Share KD 72 in ratio 1:2:3.",["6 parts=12.","[[12,24,36]]."]),Q("Two angles are in ratio 4:5 and total 180°.",["9 parts=20.","[[80^\\circ,100^\\circ]]."])],
  unitary:[Q("5 notebooks cost KD 4. Find cost of 8.",["One costs 0.8.","8 cost [[6.4]]."]),Q("3 kg apples cost KD 2.7. Cost of 5 kg?",["1 kg=0.9.","5 kg=[[4.5]]."]),Q("12 tickets cost KD 30. Cost per ticket?",["[[2.5]]."]),Q("A car travels 180 km on 15 L. Km per litre?",["[[12]]."]),Q("4 workers make 28 boxes in same time. Boxes per worker?",["7."]),Q("7 m fabric costs KD 21. Cost 11 m?",["3 per m; [[33]]."])],
  "direct-prop":[Q("y is directly proportional to x. If x=3,y=12, find y when x=8.",["Constant [[k=4]].","[[y=32]]."]),Q("6 books weigh 3 kg. What do 10 weigh?",["0.5 kg each; 5 kg."]),Q("Recipe for 4 uses 300 g flour. For 10?",["75 g each serving; [[750]] g."]),Q("If 5 m costs KD 12.5, find 12 m.",["2.5 per m; [[30]]."]),Q("Explain direct proportion.",["Multiplying one quantity by a factor multiplies the other by the same factor."]),Q("Complete x:2,5,8; y:6,15,?",["Ratio y/x=3, so 24."])],
  "data-types":[Q("Number of siblings: discrete or continuous?",["Discrete."]),Q("Height of a student?",["Continuous."]),Q("Favourite colour?",["Categorical/qualitative."]),Q("Temperature measured to 0.1°C?",["Continuous."]),Q("Number of goals scored?",["Discrete."]),Q("Car colour?",["Categorical."])],
  "data-collect":[Q("Best method to find favourite school lunch?",["Survey/questionnaire."]),Q("Best method to count cars past school?",["Observation."]),Q("Why use a sample for a population of 5000?",["It is more practical and efficient than asking everyone."]),Q("Give one feature of a fair sample.",["It should represent the population without systematic bias."]),Q("Why pilot a questionnaire?",["To find unclear questions or response problems before full collection."]),Q("Which is better: 'Do you agree maths is great?' or 'How much do you enjoy maths?'",["Second is less leading."])],
  "data-display":[Q("Which graph suits categories such as favourite sport?",["Bar chart."]),Q("What angle represents 25% on a pie chart?",["[[0.25\\times360=90^\\circ]]."]),Q("Why is a truncated vertical axis potentially misleading?",["It can exaggerate differences."]),Q("What should every graph include?",["Clear title, labels and appropriate scale."]),Q("What chart can compare two categorical groups side-by-side?",["Dual bar chart."]),Q("How many degrees for 15 out of 60 in a pie chart?",["[[15/60\\times360=90^\\circ]]."])],
  averages:[Q("Find mean of 4,6,8,12.",["Sum30, divide4: [[7.5]]."]),Q("Find median of 3,9,4,7,5.",["Order 3,4,5,7,9; median 5."]),Q("Find mode of 2,3,3,4,5,5,5.",["5."]),Q("Find range of 12,8,19,4.",["[[19-4=15]]."]),Q("Which average is resistant to one very large outlier?",["Median."]),Q("Data 6,6,7,8,30: why might median be preferable?",["30 is an outlier that pulls the mean upward."])],
  "freq-averages":[Q("Values 1,2,3 with frequencies 2,4,2. Find mean.",["[[\\sum fx=2+8+6=16]], total8.","Mean [[2]]."]),Q("Value 5 has frequency 7, largest frequency. Mode?",["5."]),Q("Frequencies 3,5,2. Total frequency?",["10."]),Q("Values 10,20,30 with f 1,2,1. Mean?",["[[10+40+30=80]], total4, mean20."]),Q("Why multiply value by frequency?",["It accounts for repeated occurrences without listing each item."]),Q("Can Year 7 use midpoint mean for grouped intervals here?",["No; the SOW says grouped-frequency mean is not required."])],
  "prob-scale":[Q("Place 'certain' on probability scale.",["1."]),Q("Place 'impossible'.",["0."]),Q("Write 50% as probability decimal.",["0.5."]),Q("Which is more likely: 0.7 or 2/3?",["0.7."]),Q("Can a probability be 1.2?",["No; probabilities lie from 0 to 1."]),Q("Convert probability 3/5 to percentage.",["60%."])],
  "prob-equal":[Q("Fair die: P(rolling 4)?",["[[1/6]]."]),Q("Fair coin: P(tails)?",["[[1/2]]."]),Q("Bag has 3 red, 2 blue. P(red)?",["[[3/5]]."]),Q("Fair die: P(number >4)?",["2 outcomes of6: [[1/3]]."]),Q("Spinner has 8 equal sectors, 3 green. P(green)?",["[[3/8]]."]),Q("Why must outcomes be equally likely for favourable/total method?",["Otherwise each outcome does not have the same probability weight."])],
  "prob-mutual":[Q("If P(A)=0.35, find P(not A).",["[[1-0.35=0.65]]."]),Q("On a die, P(1 or 2)?",["Mutually exclusive: [[1/6+1/6=1/3]]."]),Q("P(red)=0.4 and P(blue)=0.25, mutually exclusive. P(red or blue)?",["[[0.65]]."]),Q("All outcomes total to?",["1."]),Q("Are 'roll even' and 'roll odd' mutually exclusive?",["Yes."]),Q("If P(win)=0.7, P(lose)=?",["[[0.3]]."])],
  "prob-exp":[Q("A coin gives 58 heads in 100 tosses. Experimental probability?",["[[0.58]]."]),Q("Red occurs 36 times in 60 spins. Estimate P(red).",["[[36/60=0.6]]."]),Q("If experimental P(win)=0.4, estimate wins in 250 trials.",["[[0.4\\times250=100]]."]),Q("Why repeat an experiment many times?",["Relative frequency tends to become more stable."]),Q("A die gives six 22 times in 120 rolls. Experimental P?",["[[22/120=11/60\\approx0.183]]."]),Q("Compare 0.183 with theoretical die probability.",["Theoretical [[1/6\\approx0.167]]; reasonably close for finite trials."])],
  coordinates:[Q("Plot A(-3,4). Which quadrant?",["Quadrant II."]),Q("Which quadrant contains (5,-2)?",["Quadrant IV."]),Q("What is the origin?",["(0,0)."]),Q("Point on y-axis has what x-coordinate?",["0."]),Q("Point (-4,-6) is in?",["Quadrant III."]),Q("Write coordinates 3 right and 5 up.",["(3,5)."])],
  "coord-problem":[Q("Reflect (3,-2) in y-axis.",["(-3,-2)."]),Q("Find horizontal distance between (-4,3) and (5,3).",["9."]),Q("Find midpoint of (2,4) and (8,10).",["(5,7)."]),Q("Rectangle vertices (1,1),(6,1),(6,4). Find fourth.",["(1,4)."]),Q("Reflect (-2,5) in x-axis.",["(-2,-5)."]),Q("Vertical distance between (3,-4) and (3,7).",["11."])],
  "axes-lines":[Q("Describe the line [[x=4]].",["Vertical line through x=4."]),Q("Describe [[y=-2]].",["Horizontal line through y=-2."]),Q("Does point (3,5) lie on x=3?",["Yes."]),Q("Does (-1,4) lie on y=2?",["No."]),Q("Intersection of x=2 and y=-5?",["(2,-5)."]),Q("Which axis is parallel to y=7?",["x-axis."])],
  "straight-line":[Q("Complete y=2x+1 for x=0,1,2.",["y=1,3,5."]),Q("Plot y=x-2 using x=-1,0,1.",["Points (-1,-3),(0,-2),(1,-1)."]),Q("For y=3x+4, what is y-intercept?",["4."]),Q("For y=-2x+1, is gradient positive or negative?",["Negative."]),Q("Does (2,7) lie on y=3x+1?",["Yes: [[3(2)+1=7]]."]),Q("Find y when x=5 on y=4x-3.",["[[17]]."])],
  "real-graphs":[Q("A taxi cost graph starts above zero at x=0. What does intercept represent?",["The fixed starting charge."]),Q("A straight distance-time graph rises steadily. Meaning?",["Constant speed."]),Q("A horizontal section on a distance-time graph?",["Stopped / no change in distance."]),Q("If y=5x+2 models cost, what is fixed cost?",["2."]),Q("For y=3x, what happens if x doubles?",["y doubles."]),Q("Why label axes with units?",["To make quantities and scale unambiguous."])],
  inequalities:[Q("Solve [[x+4<11]].",["[[x<7]]."]),Q("Solve [[3x\\ge18]].",["[[x\\ge6]]."]),Q("Solve [[2x-5\\le9]].",["[[2x\\le14]], [[x\\le7]]."]),Q("Solve [[-2x>8]].",["Divide by -2 and reverse inequality: [[x<-4]]."]),Q("Solve [[(x+3)/2\\ge5]].",["[[x+3\\ge10]], [[x\\ge7]]."]),Q("Interpret [[2<x\\le6]].",["x is greater than 2 and at most 6."])],
  "parallel-perp":[Q("What angle do perpendicular lines meet at?",["90°."]),Q("How can you draw a parallel line with ruler and set square?",["Keep the set square orientation fixed while sliding it along a ruler."]),Q("What is special about parallel lines?",["They remain the same perpendicular distance apart and never meet."]),Q("Construct a perpendicular from a point on a line.",["Use compasses to mark equal points then intersect arcs, or a set square."]),Q("What symbol can mark perpendicular lines?",["A small right-angle square."]),Q("Why use construction arcs rather than visual judgement?",["They guarantee geometric accuracy."])],
  "perp-bisector":[Q("What does a perpendicular bisector do?",["Cuts a segment into two equal halves at 90°."]),Q("Why use equal compass radius from both endpoints?",["Intersection points are equidistant from both endpoints."]),Q("What property does every point on the perpendicular bisector have?",["Equal distance from the segment's endpoints."]),Q("After drawing arcs from endpoints, what is the final step?",["Join the two arc-intersection points."]),Q("Does the compass radius need to exceed half the segment?",["Yes, so the arcs intersect."]),Q("Where does the bisector cross the segment?",["At its midpoint."])],
  "angle-bisector":[Q("What does an angle bisector do?",["Divides an angle into two equal angles."]),Q("Bisect a 70° angle. What are the two angles?",["35° each."]),Q("What construction starts from the angle vertex?",["Draw an arc crossing both arms."]),Q("Why draw equal-radius arcs from the two arm intersection points?",["Their intersection lies equidistant from the arms."]),Q("Bisect a right angle.",["Two 45° angles."]),Q("How can you check the construction?",["Measure both resulting angles; they should be equal."])]
 };
 return m[type]||[];
}

function packFor(l){
 let bank=common[l.type]||geometryBank(l.type);
 if(!bank.length) bank=laterBank(l.type);
 if(!bank.length) bank=[Q(l.obj[0],["State the key rule clearly, show working, and check the result."]),Q("Apply the lesson method to a fresh example.",["Identify the relevant information.","Apply the rule carefully.","Check the answer."]),Q("Explain one common error in this topic.",["Describe the error and the correction."])];
 return mk(bank.slice(0,3),clone(bank,Math.max(8,bank.length)),clone(bank.slice().reverse(),6));
}

window.LESSON_CONTENT={};
window.STARTERS={};
window.STARTER_ANSWERS={};
window.LESSONS.forEach(l=>{
 const p=packFor(l), sm=window.SOW_MAP[l.id];
 window.LESSON_CONTENT[l.id]={
  explain:sm.objective+" The lesson follows the NES Year 7 SOW and progresses from fluency to reasoning.",
  keyPoints:[sm.objective,"Use correct mathematical vocabulary and notation.","Show enough working to make the method visible.","Check whether the result is sensible."],
  rules:[["Core objective",sm.objective],["Check","Use inverse operations, estimation, substitution or the context where appropriate."]],
  method:["Read the question carefully and identify what is known.","Choose the relevant rule or representation.","Work one step at a time using clear notation.","Simplify fully and include units where required.","Check the result."],
  mistakes:["Skipping a necessary step.","Using the correct rule in the wrong order.","Losing a sign, unit or place value.","Giving an answer without checking whether it is reasonable."],
  vocab:[],
  examples:p.examples,
  practice:p.practice,
  homework:p.homework
 };
 window.STARTERS[l.id]=p.practice.slice(0,4).map(q=>q.prompt);
 window.STARTER_ANSWERS[l.id]=p.practice.slice(0,4).map(q=>q.steps[q.steps.length-1]||"Check working.");
});

const unitSource={
 "1":["Checkpoint Stage 7 • Units 1 and 3","STP Year 7 • Ch.1 p.1, Ch.2 p.17, Ch.4 p.44"],
 "2":["Checkpoint Stage 7 • Units 2 and 9","STP Year 7 • Ch.17 Formulas p.300; Ch.21 Equations p.376"],
 "3":["Checkpoint Stage 7 • Units 3, 7 and 11","STP Year 7 • Ch.6 p.74, Ch.7 p.98, Ch.8 p.119"],
 "4":["Checkpoint Stage 7 • Units 5 and 8","STP Year 7 • Ch.10 p.166, Ch.11 p.189, Ch.12 p.200, Ch.15 p.262"],
 "5":["Checkpoint Stage 7 • Unit 2 Sequences","STP Year 7 • Ch.4 Number and patterns p.44"],
 "6":["Checkpoint Stage 7 • Units 4 and 18","STP Year 7 • Ch.9 p.141, Ch.14 p.246, Ch.20 p.358"],
 "7":["Checkpoint Stage 7 • Unit 14 Ratio and proportion","STP Year 7 • Ch.6 Parts of a whole p.74"],
 "8":["Checkpoint Stage 7 • Units 6, 10 and 19","STP Year 7 • Ch.3 p.34, Ch.19 p.345, Ch.22 p.395"],
 "9":["Checkpoint Stage 7 • Unit 16 Probability","STP Year 7 • Ch.13 Probability p.226"],
 "10":["Checkpoint Stage 7 • Unit 13 Graphs","STP Year 7 • Ch.18 Straight line graphs p.324"],
 "11":["NES SOW teacher material • Inequalities","STP Year 7 • Ch.21 Equations p.376 (algebra support)"],
 "12":["Checkpoint Stage 7 • Unit 12 Constructions","STP Year 7 • Ch.10 p.166, Ch.12 p.200, Ch.15 p.262"]
};

window.TEXTBOOK_CONTENT={};
window.LESSONS.forEach(l=>{
 const sm=window.SOW_MAP[l.id],sources=unitSource[l.u];
 const cpCard={url:CP7,bookTitle:"Cambridge Checkpoint Mathematics Coursebook Stage 7",heading:sources[0],page:sm.textbook,excerpt:sm.objective};
 const stpCard={url:STP7,bookTitle:"STP Mathematics Year 7",heading:sources[1],excerpt:"Use the corresponding STP chapter for additional examples, exercises and extension."};
 window.TEXTBOOK_CONTENT[l.id]={
  schemeReference:sm.textbook,
  practice:[cpCard,stpCard],
  homework:[
   {url:CP7,bookTitle:"Cambridge Checkpoint Mathematics Coursebook Stage 7",heading:"Homework source / mapped SOW reference",page:sm.textbook,excerpt:"Use the mapped Checkpoint section for extra practice."},
   {url:STP7,bookTitle:"STP Mathematics Year 7",heading:"Additional textbook practice",excerpt:sources[1]}
  ],
  examples:[],
  practiceAssignment:"Use the mapped Year 7 textbook sources alongside the independent questions below. Show clear working.",
  homeworkAssignment:"Complete the Year 7 homework questions and use the second textbook source for additional challenge."
 };
});

window.EXTRA_EXAMPLES={};
window.SOURCE_QUESTIONS={};
