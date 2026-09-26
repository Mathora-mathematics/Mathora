window.COURSE_YEAR="8";
window.EXPECTED_LESSONS=54;

const CP8="https://drive.google.com/file/d/1cbVNK0LD4M-ZJIjq68il5PMLwT6k7zxe/view";
const STP8="https://drive.google.com/file/d/1N5JxnbCeRK8N9P1ue7Ej8o7HqnuX_u4D/view";

const defs=[
["1","Factors, multiples, rounding and estimation","1.1.1","Types of numbers","number-types","Recognise positive and negative square and cube numbers, corresponding roots, and estimate simple surds.","Y8CP Unit 1; Stage 9 p.10 for surd estimation","STP Ch.1 Working with numbers • p.20"],
["1","Factors, multiples, rounding and estimation","1.1.2","Prime decomposition","prime-decomp","Write a number as a product of its prime factors.","Y8CP 1.3 pp.13–14","STP Ch.1 Working with numbers • p.20"],
["1","Factors, multiples, rounding and estimation","1.1.3","Factors, HCF, multiples and LCM","hcf-lcm","Use prime factorisation to find HCF and LCM, including worded problems.","Y8CP 1.3 pp.13–14","STP Ch.1 Working with numbers • p.20"],
["1","Factors, multiples, rounding and estimation","1.2.1","Rounding to significant figures","rounding","Round numbers to a specified number of significant figures, up to three significant figures.","Teacher notes / DFM Year 8","STP Ch.1 Working with numbers • p.20"],
["1","Factors, multiples, rounding and estimation","1.2.2","Estimation using significant figures","estimation","Estimate calculations by rounding to one significant figure and connect rounded values to simple bounds.","Teacher notes / DFM Year 8","STP Ch.1 Working with numbers • p.20"],

["2","Algebra 1","2.1.1","Construct and solve linear equations","linear-eq","Construct and solve linear equations, including brackets, unknowns on both sides and contextual problems.","Y8CP 9.3 pp.99–100; Y9CP 13.1–13.2","STP Ch.12 Linear equations • p.242; Ch.17 Solving equations • p.335"],
["2","Algebra 1","2.1.2","Expand double brackets","double-bracket","Expand the product of two linear expressions and simplify the result.","Y9CP 9.7 pp.94–95","STP Ch.17 Solving equations • p.335"],
["2","Algebra 1","2.1.3","Factorise simple expressions","factorise","Factorise expressions by taking out a single-term common factor.","Y8CP 9.2 p.98; Y9CP 9.5 p.91","STP Ch.17 Solving equations • p.335"],
["2","Algebra 1","2.1.4","Rearranging formulae","rearrange","Use inverse operations to change the subject of a formula, including two-step rearrangements.","Teacher notes / DFM Year 8","STP Ch.10 Formulas • p.190"],
["2","Algebra 1","2.2.1","Simplify algebraic fractions","algfrac-simplify","Simplify algebraic fractions by factorising and cancelling common factors.","Teacher notes / DFM Year 8","STP Ch.12 Linear equations • p.242"],
["2","Algebra 1","2.2.2","Manipulate algebraic fractions","algfrac-add","Add and subtract algebraic fractions with numerical denominators; extend to algebraic numerators.","SOW source repeats code 2.2.1; site uses 2.2.2 for uniqueness","STP Ch.12 Linear equations • p.242"],
["2","Algebra 1","2.3.1","Equations with numeric denominators","fractional-eq","Solve equations containing numeric denominators, including unknowns on both sides.","Teacher notes / DFM Year 8","STP Ch.12 Linear equations • p.242"],
["2","Algebra 1","2.3.2","Forming equations with an unknown in the denominator","unknown-denom","Form and solve equations from contexts that include an unknown in a denominator.","Teacher notes / DFM Year 8","STP Ch.12 Linear equations • p.242"],
["2","Algebra 1","2.4.1","Laws of indices with numerical bases","indices-num","Use positive, zero and negative indices and the multiplication/division index laws with numerical bases.","Teacher notes / DFM Year 8","STP Ch.1 Working with numbers • p.20"],
["2","Algebra 1","2.4.2","Algebraic index laws","indices-alg","Apply index laws to algebraic terms, including zero indices and powers of powers.","Teacher notes / DFM Year 8","STP Ch.1 Working with numbers • p.20"],

["3","Fractions, decimals and percentages","3.1.1","Operations involving fractions","fractions","Add, subtract, multiply and divide fractions and mixed numbers; interpret division using reciprocals.","Y8CP 7.4, 7.6–7.8 pp.75–81","STP Ch.3 Multiplication and division of fractions • p.51; Ch.4 Fractions and percentages • p.65"],
["3","Fractions, decimals and percentages","3.2.1","Multiply and divide decimals","decimals","Multiply and divide decimals by integers and decimals accurately.","Y8CP 3.6–3.7 pp.39–40","STP Ch.4 Fractions and percentages • p.65"],
["3","Fractions, decimals and percentages","3.3.1","Increase and decrease by percentages","percent-change","Find a new amount after a percentage increase or decrease using non-calculator and multiplier methods.","Y8CP 11.2 pp.113–114","STP Ch.4 Fractions and percentages • p.65"],
["3","Fractions, decimals and percentages","3.3.2","Percentage changes","percent-difference","Solve percentage-change problems, selecting the correct original amount as 100%.","Y8CP 11.3 pp.114–115","STP Ch.4 Fractions and percentages • p.65"],
["3","Fractions, decimals and percentages","3.3.3","Reverse percentages","reverse-percent","Find an original value from a final value after a percentage change.","Teacher notes / DFM Year 8","STP Ch.4 Fractions and percentages • p.65"],

["4","Angles in polygons","4.1.1","Names of polygons","polygon-names","Know and use the names of polygons up to ten sides.","Year 8 SOW Unit 4","STP Ch.6 Polygons • p.115"],
["4","Angles in polygons","4.1.2","Interior and exterior angles","polygon-angles","Derive and use interior-angle sums and calculate interior/exterior angles in regular and irregular polygons.","Y9CP 5.1–5.3 pp.42–47","STP Ch.6 Polygons • p.115"],

["5","Sequences","5.1.1","Term-to-term rules","term-rule","Find and use term-to-term rules for numerical and spatial sequences, including fractions.","Y8CP 2.1–2.2 pp.19–22","STP Ch.10 Formulas • p.190"],
["5","Sequences","5.1.2","Position-to-term rules","nth-linear","Find and use nth-term rules for linear sequences and locate the position of a given term.","Y8CP 2.2–2.3 pp.21–23","STP Ch.10 Formulas • p.190"],
["5","Sequences","5.2.1","Generate quadratic and cubic sequences","seq-generate","Generate quadratic and cubic sequences from rules and numerical patterns.","Teacher notes / DFM Year 8","STP Ch.10 Formulas • p.190"],
["5","Sequences","5.2.2","Recognise nth-term structures","nth-recognise","Recognise and use rules such as n²+a, 2n², n³ and powers of 2.","Teacher notes / DFM Year 8","STP Ch.10 Formulas • p.190"],
["5","Sequences","5.3.1","Visual and continuing patterns","visual-pattern","Describe and continue visual and numerical patterns and explain the rule.","Teacher notes / DFM Year 8","STP Ch.10 Formulas • p.190"],

["6","Simultaneous equations","6.1.1","Solving linear simultaneous equations","simultaneous","Solve pairs of linear simultaneous equations by substitution and elimination.","Y9CP 13.3–13.4 pp.128–129","STP Ch.16 Simultaneous equations • p.322"],
["6","Simultaneous equations","6.1.2","Forming simultaneous equations","form-simultaneous","Form a pair of simultaneous equations from a context and solve them.","Teacher notes / DFM Year 8","STP Ch.16 Simultaneous equations • p.322"],

["7","Bearings and scale drawings","7.1.1","Map scales","map-scale","Use map scales to convert between map distance and actual distance.","Teacher notes / DFM Year 8","STP Ch.20 Scale drawing • p.393"],
["7","Bearings and scale drawings","7.1.2","Bearings","bearings","Understand and use three-figure bearings as a measure of direction.","Y9CP 17.1 pp.159–161","STP Ch.20 Scale drawing • p.393"],
["7","Bearings and scale drawings","7.2.1","Scale drawings","scale-drawing","Complete scale drawings and combine bearings with scale to interpret maps and plans.","Y8CP 8.5 pp.92–93; Y9CP 17.2 pp.162–163","STP Ch.20 Scale drawing • p.393"],

["8","Circle geometry","8.1.1","Parts of a circle","circle-parts","Use centre, radius, chord, diameter, circumference, tangent, arc, sector and segment correctly.","Y8CP p.120","STP Ch.9 Circumference and area of a circle • p.172"],
["8","Circle geometry","8.2.1","Circumference of a circle","circumference","Understand π as circumference ÷ diameter and calculate exact or decimal circumferences.","Y8CP 17.3 p.170","STP Ch.9 Circumference and area of a circle • p.172"],
["8","Circle geometry","8.2.2","Area of a circle","circle-area","Calculate the area of a circle from its radius or diameter, including exact answers.","Y8CP 17.3 p.170","STP Ch.9 Circumference and area of a circle • p.172"],
["8","Circle geometry","8.2.3","Fractions of a circle","circle-fraction","Calculate area and perimeter of semicircles, quadrants and other simple fractions of circles.","Year 8 SOW Unit 8","STP Ch.9 Circumference and area of a circle • p.172"],
["8","Circle geometry","8.2.4","Compound shapes with circles","compound-circle","Calculate area and perimeter of compound 2D shapes made from rectangles, triangles and circles.","Y8CP 17.4 pp.171–172","STP Ch.9 Circumference and area of a circle • p.172"],

["9","Surface area and volume","9.1.1","Drawing nets of 3D shapes","nets","Draw and recognise nets of cubes, cuboids, triangular prisms and cylinders.","Y8CP 8.4 pp.90–91","STP Ch.18 Volumes • p.365"],
["9","Surface area and volume","9.2.1","Volume of prisms and cylinders","prism-volume","Use volume = cross-sectional area × length for triangular prisms, cylinders and other prisms.","Y9CP 15.4 pp.147–149","STP Ch.18 Volumes • p.365"],
["9","Surface area and volume","9.2.2","Surface area of prisms, cylinders and pyramids","surface-area","Calculate surface area by identifying and adding the areas of all faces or surfaces.","Y8CP 17.6 pp.175–176","STP Ch.18 Volumes • p.365"],
["9","Surface area and volume","9.3.2","Convert metric units of volume","volume-units","Convert between metric volume units and between cubic centimetres and millilitres/litres.","Teacher notes / DFM Year 8","STP Ch.18 Volumes • p.365"],

["10","Pythagoras' theorem","10.1.1","Finding sides of right-angled triangles","pythagoras","Use Pythagoras' theorem to find a hypotenuse or shorter side.","Y9CP 8.3 pp.81–82","STP Ch.21 Pythagoras' theorem • p.413"],
["10","Pythagoras' theorem","10.1.2","Problem solving with Pythagoras","pythagoras-problem","Use Pythagoras in rectangles, isosceles triangles and multi-step contexts.","Teacher notes / DFM Year 8","STP Ch.21 Pythagoras' theorem • p.413"],

["11","Statistics 1","11.1.1","Statistics from grouped frequency tables","grouped-stats","Estimate statistics from grouped frequency tables, including mean and modal class.","Y8CP 10.2 pp.105–106","STP Ch.15 Continuous data • p.302"],
["11","Statistics 1","11.1.2","Compare two distributions","compare-stats","Use averages and range to compare two distributions, including grouped data.","Y8CP 10.3 pp.107–108","STP Ch.15 Continuous data • p.302"],
["11","Statistics 1","11.2.1","Stem-and-leaf diagrams","stemleaf","Draw and interpret ordered stem-and-leaf diagrams and find summary statistics.","Y8CP 18.4 pp.186–187","STP Ch.15 Continuous data • p.302"],
["11","Statistics 1","11.2.2","Back-to-back stem-and-leaf diagrams","backtoback","Draw, interpret and compare back-to-back stem-and-leaf diagrams.","Y9CP 19.4 p.194","STP Ch.15 Continuous data • p.302"],

["12","Probability 1","12.1.1","Listing all possible outcomes","outcomes","Use lists, tables and diagrams to identify all mutually exclusive outcomes of combined independent events.","Y8CP 15.3 pp.152–153","STP Ch.2 Probability • p.41"],
["12","Probability 1","12.1.2","Equally likely probabilities","equally-likely","Find theoretical probabilities for equally likely combined outcomes.","Year 8 SOW Unit 12","STP Ch.2 Probability • p.41"],
["12","Probability 1","12.2.1","Experimental and theoretical probability","experimental","Use simulations or experiments, calculate relative frequency and compare experimental with theoretical probability.","Y8CP 15.4 pp.155–156","STP Ch.2 Probability • p.41"],

["13","Rates of change and compound units","13.1.1","Speed, distance and time","speed","Calculate speed, distance or time from worded problems, converting units where needed.","Y9CP 4.2 pp.36–37","STP Ch.13 Straight line graphs • p.266"],
["13","Rates of change and compound units","13.2.1","Drawing and interpreting distance-time graphs","distance-graph","Draw and interpret simple and multi-stage distance-time graphs.","Y9CP 4.3 pp.38–39","STP Ch.13 Straight line graphs • p.266"],
["13","Rates of change and compound units","13.2.2","Calculations from distance-time graphs","distance-calc","Use distance-time graphs to calculate and compare average speeds.","Y9CP 4.3 pp.38–39","STP Ch.13 Straight line graphs • p.266"],
["13","Rates of change and compound units","13.3.3","Interpreting other rate-of-change graphs","rate-graph","Read and interpret graphs related to rates of change and explain the meaning of their shape.","Teacher notes / DFM Year 8","STP Ch.14 Curved graphs • p.290"]
];

window.LESSONS=defs.map(function(d){
 return {u:d[0],unit:d[1],id:d[2],title:d[3],type:d[4],src:d[6]+"; "+d[7],prior:["Secure prerequisite arithmetic","Accurate mathematical notation","Show clear working"],obj:[d[5]]};
});

window.SOW_MAP=Object.fromEntries(defs.map(function(d){
 return [d[2],{
  objective:d[5],
  notes:(d[2]==="2.2.2"?"The source SOW repeats code 2.2.1 for this row; Mathora uses 2.2.2 to keep lesson IDs unique. ":"")+
        (d[2]==="7.2.1"?"The source SOW repeats code 7.1.2 for Scale Drawings; Mathora uses 7.2.1 to keep lesson IDs unique. ":"")+
        "Mapped from NES Year 8 Scheme of Work 2026–27.",
  teaching:"Use progressive modelling, deliberate practice and contextual reasoning. Keep non-calculator methods explicit where the SOW requires them.",
  textbook:d[6]+"; "+d[7]
 }];
}));

const Q=function(prompt,steps,opts){return Object.assign({prompt:prompt,steps:steps},opts||{});};
const rep=function(arr,n){return Array.from({length:n},function(_,i){const q=arr[i%arr.length];return Q(q.prompt,q.steps,q.verifiedDiagram?{verifiedDiagram:q.verifiedDiagram}:{});});};

function packs(type){
 const P={examples:[],practice:[],homework:[]};
 const add=function(ex,pr,hw){P.examples=ex;P.practice=pr;P.homework=hw;return P;};

 if(type==="number-types"){
  return add(
   [Q("Evaluate [[(-7)^2]] and [[(-4)^3]].",["[[(-7)^2=49]].","[[(-4)^3=-64]]."]),
    Q("Find both square roots of 144 and the cube root of -216.",["Square roots: [[\\pm12]].","Cube root: [[-6]]."]),
    Q("Between which consecutive integers does [[\\sqrt{70}]] lie?",["[[8^2=64]] and [[9^2=81]].","So [[8<\\sqrt{70}<9]]."])],
   [Q("Evaluate [[(-9)^2]].",["81."]),Q("Evaluate [[(-5)^3]].",["-125."]),Q("Find [[\\sqrt{196}]].",["14."]),Q("Find [[\\sqrt[3]{-343}]].",["-7."]),Q("Estimate [[\\sqrt{50}]] between two integers.",["[[7^2=49]], [[8^2=64]], so between 7 and 8."]),Q("Which is larger: [[\\sqrt{90}]] or 9?",["[[\\sqrt{90}>\\sqrt{81}=9]]."]),Q("Give a negative number whose square is 121.",["-11."]),Q("Is -64 a cube number?",["Yes, [[(-4)^3=-64]]."])],
   [Q("Find both square roots of 225.",["[[\\pm15]]."]),Q("Find [[\\sqrt[3]{512}]].",["8."]),Q("Estimate [[\\sqrt{130}]] between two integers.",["[[11^2=121]], [[12^2=144]], so between 11 and 12."]),Q("Evaluate [[(-12)^2]].",["144."]),Q("Evaluate [[(-3)^5]].",["-243."]),Q("Explain why a negative number can be a cube but not a square.",["Odd powers preserve a negative sign; even powers do not."])]
  );
 }
 if(type==="prime-decomp"){
  const nums=[84,120,180,252,360,540,756,900];
  const facts=["[[84=2^2\\times3\\times7]]","[[120=2^3\\times3\\times5]]","[[180=2^2\\times3^2\\times5]]","[[252=2^2\\times3^2\\times7]]","[[360=2^3\\times3^2\\times5]]","[[540=2^2\\times3^3\\times5]]","[[756=2^2\\times3^3\\times7]]","[[900=2^2\\times3^2\\times5^2]]"];
  const pr=nums.map(function(n,i){return Q("Write [["+n+"]] as a product of prime factors.",[facts[i]]);});
  return add(pr.slice(0,3),pr,pr.slice().reverse().slice(0,6));
 }
 if(type==="hcf-lcm"){
  const pairs=[[60,84,12,420],[72,90,18,360],[48,80,16,240],[54,81,27,162],[120,168,24,840],[84,126,42,252],[75,100,25,300],[96,144,48,288]];
  const pr=pairs.map(function(x){return Q("Find the HCF and LCM of [["+x[0]+"]] and [["+x[1]+"]].",["HCF [[="+x[2]+"]].","LCM [[="+x[3]+"]]."]);});
  return add(pr.slice(0,3),pr,[Q("Two lights flash every 18 s and 30 s. After how many seconds do they next flash together?",["Find LCM(18,30).","[[18=2\\times3^2]], [[30=2\\times3\\times5]].","LCM [[=2\\times3^2\\times5=90]] s."]),Q("84 red beads and 126 blue beads are packed into identical groups with none left. Find the greatest number of groups.",["Find HCF(84,126).","HCF [[=42]], so 42 groups."]),...pr.slice(0,4)]);
 }
 if(type==="rounding"){
  return add(
   [Q("Round 58 764 to 2 significant figures.",["First two significant digits are 5 and 8; next digit is 7.","[[58\\,764\\approx59\\,000]]."]),Q("Round 0.004786 to 3 significant figures.",["First three significant digits are 4,7,8; next digit is 6.","[[0.004786\\approx0.00479]]."]),Q("Round 13.495 to 3 significant figures.",["First three significant digits give 13.4; next digit is 9.","[[13.495\\approx13.5]]."])],
   [Q("Round 7264 to 2 s.f.",["7300."]),Q("Round 0.07846 to 2 s.f.",["0.078."]),Q("Round 506 900 to 3 s.f.",["507 000."]),Q("Round 9.995 to 3 s.f.",["10.0."]),Q("Round 0.005049 to 2 s.f.",["0.0050."]),Q("Round 481.7 to 1 s.f.",["500."]),Q("Round 12.349 to 3 s.f.",["12.3."]),Q("Round 88 888 to 2 s.f.",["89 000."])],
   [Q("Round 345 678 to 3 s.f.",["346 000."]),Q("Round 0.009876 to 2 s.f.",["0.0099."]),Q("Round 16.049 to 3 s.f.",["16.0."]),Q("Round 749.5 to 2 s.f.",["750."]),Q("Round 0.0006384 to 2 s.f.",["0.00064."]),Q("Round 92 501 to 1 s.f.",["90 000."])]
  );
 }
 if(type==="estimation"){
  return add(
   [Q("Estimate [[\\frac{38.7\\times19.6}{4.12}]].",["Round to 1 s.f.: [[40\\times20\\div4]].","Estimate [[=200]]."]),Q("Estimate [[\\frac{598}{19.7}]].",["[[600\\div20=30]]."]),Q("A length rounds to 460 cm to the nearest 10 cm. State its bounds.",["Half of 10 is 5.","[[455\\le x<465]]."])],
   [Q("Estimate [[49.2\\times0.203]].",["[[50\\times0.2=10]]."]),Q("Estimate [[798\\div39.6]].",["[[800\\div40=20]]."]),Q("Estimate [[\\frac{61.2+18.7}{3.94}]].",["[[80\\div4=20]]."]),Q("A mass is 3.4 kg to nearest 0.1 kg. Give bounds.",["[[3.35\\le m<3.45]]."]),Q("A distance is 120 m to nearest 10 m. Give bounds.",["[[115\\le d<125]]."]),Q("Estimate [[9.8^2]].",["[[10^2=100]]."]),Q("Estimate [[0.487\\times204]].",["[[0.5\\times200=100]]."]),Q("Estimate [[302\\div0.61]].",["[[300\\div0.6=500]]."])],
   [Q("Estimate [[21.3\\times78.9]].",["[[20\\times80=1600]]."]),Q("Estimate [[\\frac{398}{8.2}]].",["[[400\\div8=50]]."]),Q("A value is 2.7 to nearest 0.1. Give bounds.",["[[2.65\\le x<2.75]]."]),Q("A population is 6500 to nearest 100. Give bounds.",["[[6450\\le p<6550]]."]),Q("Estimate [[\\frac{79.5-19.2}{6.1}]].",["[[60\\div6=10]]."]),Q("Explain why estimation is useful.",["It checks whether an exact calculator answer is of a sensible size."])]
  );
 }

 if(type==="linear-eq"){
  return add(
   [Q("Solve [[5x-7=18]].",["[[5x=25]].","[[x=5]]."]),Q("Solve [[4(x-3)=2x+10]].",["[[4x-12=2x+10]].","[[2x=22]].","[[x=11]]."]),Q("A rectangle has perimeter 50 cm. Its length is [[x+4]] and width is [[x-1]]. Find x.",["[[2(x+4)+2(x-1)=50]].","[[4x+6=50]].","[[x=11]]."])],
   [Q("Solve [[3x+8=29]].",["[[3x=21]], so [[x=7]]."]),Q("Solve [[7x-4=3x+20]].",["[[4x=24]], so [[x=6]]."]),Q("Solve [[5(x+2)=3x+18]].",["[[5x+10=3x+18]], [[2x=8]], [[x=4]]."]),Q("Solve [[2(3x-1)=4x+10]].",["[[6x-2=4x+10]], [[2x=12]], [[x=6]]."]),Q("Solve [[9-2x=3x-6]].",["[[15=5x]], [[x=3]]."]),Q("Form and solve: three times a number plus 5 is 32.",["[[3x+5=32]], [[x=9]]."]),Q("Angles in a triangle are [[x]], [[2x]] and [[3x]]. Find x.",["[[6x=180]], [[x=30^\\circ]]."]),Q("Solve [[6x+11=5x+24]].",["[[x=13]]."])],
   [Q("Solve [[8x-5=51]].",["[[8x=56]], [[x=7]]."]),Q("Solve [[3(x+5)=2x+19]].",["[[3x+15=2x+19]], [[x=4]]."]),Q("Solve [[7-3x=2x-18]].",["[[25=5x]], [[x=5]]."]),Q("The sum of two consecutive integers is 41. Find them.",["[[x+(x+1)=41]], [[2x=40]], [[x=20]], so 20 and 21."]),Q("A quadrilateral has angles [[x, x+20, 2x, 2x+40]]. Find x.",["Sum is 360: [[6x+60=360]].","[[x=50^\\circ]]."]),Q("Solve [[2(4x+1)=5x+17]].",["[[8x+2=5x+17]], [[3x=15]], [[x=5]]."])]
  );
 }
 if(type==="double-bracket"){
  const qs=[
   Q("Expand [[(x+3)(x+5)]].",["[[x^2+5x+3x+15]]","[[x^2+8x+15]]."]),
   Q("Expand [[(x-4)(x+6)]].",["[[x^2+6x-4x-24]]","[[x^2+2x-24]]."]),
   Q("Expand [[(2x+3)(x+4)]].",["[[2x^2+8x+3x+12]]","[[2x^2+11x+12]]."]),
   Q("Expand [[(x-7)^2]].",["[[(x-7)(x-7)]]","[[x^2-14x+49]]."]),
   Q("Expand [[(x+9)(x-9)]].",["Difference of squares.","[[x^2-81]]."]),
   Q("Expand [[(3x-2)(x+5)]].",["[[3x^2+15x-2x-10]]","[[3x^2+13x-10]]."]),
   Q("Expand [[(2x-1)(2x+1)]].",["Difference of squares.","[[4x^2-1]]."]),
   Q("Expand [[(x+2)(x-11)]].",["[[x^2-9x-22]]."])
  ];
  return add(qs.slice(0,3),qs,qs.slice().reverse().slice(0,6));
 }
 if(type==="factorise"){
  const qs=[Q("Factorise [[6x+18]].",["HCF is 6.","[[6(x+3)]]."]),Q("Factorise [[12a^2-8a]].",["HCF is [[4a]].","[[4a(3a-2)]]."]),Q("Factorise [[15xy+20x]].",["HCF is [[5x]].","[[5x(3y+4)]]."]),Q("Factorise [[14p-21]].",["[[7(2p-3)]]."]),Q("Factorise [[18m^2n+12mn^2]].",["HCF [[=6mn]].","[[6mn(3m+2n)]]."]),Q("Factorise [[9x^2+27x]].",["[[9x(x+3)]]."]),Q("Factorise [[16ab-24a]].",["[[8a(2b-3)]]."]),Q("Factorise [[25y^3+10y^2]].",["[[5y^2(5y+2)]]."])];
  return add(qs.slice(0,3),qs,qs.slice().reverse().slice(0,6));
 }
 if(type==="rearrange"){
  const qs=[Q("Make x the subject of [[y=3x+7]].",["[[y-7=3x]].","[[x=\\frac{y-7}{3}]]."]),Q("Make t the subject of [[v=u+at]].",["[[v-u=at]].","[[t=\\frac{v-u}{a}]]."]),Q("Make c the subject of [[R=\\frac{7c+3}{5}]].",["[[5R=7c+3]].","[[5R-3=7c]].","[[c=\\frac{5R-3}{7}]]."]),Q("Make r the subject of [[C=2\\pi r]].",["[[r=\\frac{C}{2\\pi}]]."]),Q("Make h the subject of [[A=\\frac12 bh]].",["[[2A=bh]].","[[h=\\frac{2A}{b}]]."]),Q("Make y the subject of [[x=4y-9]].",["[[x+9=4y]].","[[y=\\frac{x+9}{4}]]."]),Q("Make m the subject of [[P=2m+2n]].",["[[P-2n=2m]].","[[m=\\frac{P-2n}{2}]]."]),Q("Make a the subject of [[s=ut+\\frac12at^2]].",["[[s-ut=\\frac12at^2]].","[[2(s-ut)=at^2]].","[[a=\\frac{2(s-ut)}{t^2}]]."])];
  return add(qs.slice(0,3),qs,qs.slice().reverse().slice(0,6));
 }
 if(type==="algfrac-simplify"){
  const qs=[Q("Simplify [[\\frac{6x}{9}]].",["Divide numerator and denominator by 3.","[[\\frac{2x}{3}]]."]),Q("Simplify [[\\frac{x^2+5x}{x}]].",["Factor numerator: [[x(x+5)]].","For [[x\\ne0]], result [[x+5]]."]),Q("Simplify [[\\frac{3x+12}{6}]].",["Factor 3: [[\\frac{3(x+4)}{6}]].","[[\\frac{x+4}{2}]]."]),Q("Simplify [[\\frac{8x^2}{12x}]].",["Cancel [[4x]].","[[\\frac{2x}{3}]]."]),Q("Simplify [[\\frac{5a^2+10a}{5a}]].",["[[\\frac{5a(a+2)}{5a}=a+2]]."]),Q("Simplify [[\\frac{14xy}{21y}]].",["[[\\frac{2x}{3}]]."]),Q("Simplify [[\\frac{4x^2-8x}{4x}]].",["[[\\frac{4x(x-2)}{4x}=x-2]]."]),Q("Simplify [[\\frac{9m+18}{3}]].",["[[3m+6]]."])];
  return add(qs.slice(0,3),qs,qs.slice().reverse().slice(0,6));
 }
 if(type==="algfrac-add"){
  const qs=[Q("Simplify [[\\frac{x}{3}+\\frac{x}{6}]].",["Common denominator 6.","[[\\frac{2x+x}{6}=\\frac{x}{2}]]."]),Q("Simplify [[\\frac{2x}{5}-\\frac{x}{10}]].",["Common denominator 10.","[[\\frac{4x-x}{10}=\\frac{3x}{10}]]."]),Q("Simplify [[\\frac{x+1}{4}+\\frac{x-1}{4}]].",["Same denominator.","[[\\frac{2x}{4}=\\frac{x}{2}]]."]),Q("Simplify [[\\frac{a}{2}+\\frac{3a}{8}]].",["[[\\frac{4a}{8}+\\frac{3a}{8}=\\frac{7a}{8}]]."]),Q("Simplify [[\\frac{5y}{6}-\\frac{y}{3}]].",["[[\\frac{5y-2y}{6}=\\frac{y}{2}]]."]),Q("Simplify [[\\frac{2x+1}{5}+\\frac{x-1}{5}]].",["[[\\frac{3x}{5}]]."]),Q("Simplify [[\\frac{p}{4}-\\frac{p}{12}]].",["[[\\frac{3p-p}{12}=\\frac{p}{6}]]."]),Q("Simplify [[\\frac{3m}{7}+\\frac{2m}{7}]].",["[[\\frac{5m}{7}]]."])];
  return add(qs.slice(0,3),qs,qs.slice().reverse().slice(0,6));
 }
 if(type==="fractional-eq"||type==="unknown-denom"){
  const qs= type==="fractional-eq" ?
   [Q("Solve [[\\frac{3x}{4}=12]].",["Multiply by 4: [[3x=48]].","[[x=16]]."]),Q("Solve [[\\frac{x+5}{3}=9]].",["[[x+5=27]].","[[x=22]]."]),Q("Solve [[\\frac{2x+1}{5}=\\frac{7}{3}]].",["Cross-multiply: [[3(2x+1)=35]].","[[6x=32]].","[[x=\\frac{16}{3}]]."]),Q("Solve [[\\frac{5x}{6}+2=12]].",["[[\\frac{5x}{6}=10]].","[[5x=60]].","[[x=12]]."]),Q("Solve [[\\frac{3x-2}{4}=x+1]].",["[[3x-2=4x+4]].","[[x=-6]]."]),Q("Solve [[\\frac{2x+7}{3}=\\frac{x+5}{2}]].",["[[2(2x+7)=3(x+5)]].","[[4x+14=3x+15]].","[[x=1]]."]),Q("Solve [[\\frac{x}{5}=3x-8]].",["[[x=15x-40]].","[[14x=40]].","[[x=\\frac{20}{7}]]."]),Q("Solve [[\\frac{4x+3}{5}=2x-1]].",["[[4x+3=10x-5]].","[[8=6x]].","[[x=\\frac43]]."])]
   :
   [Q("A number divided by 4 is 7. Form and solve an equation.",["[[\\frac{x}{4}=7]].","[[x=28]]."]),Q("The reciprocal of a positive number is [[\\frac15]]. Find the number.",["[[\\frac1x=\\frac15]].","[[x=5]]."]),Q("A rectangle has area 24 and width x. Its length is 6. Form and solve.",["[[6x=24]].","[[x=4]]."]),Q("[[\\frac{12}{x}=3]]. Solve.",["[[12=3x]].","[[x=4]]."]),Q("[[\\frac{20}{x}+1=6]]. Solve.",["[[\\frac{20}{x}=5]].","[[20=5x]].","[[x=4]]."]),Q("[[\\frac{18}{x}=x]]. Solve for positive x.",["[[x^2=18]].","[[x=3\\sqrt2]]."]),Q("Five items cost KD 15. If each costs x, form and solve.",["[[5x=15]].","[[x=3]]."]),Q("[[\\frac{30}{x}-2=3]]. Solve.",["[[\\frac{30}{x}=5]].","[[x=6]]."])];
  return add(qs.slice(0,3),qs,qs.slice().reverse().slice(0,6));
 }
 if(type==="indices-num"||type==="indices-alg"){
  const qs=type==="indices-num" ?
   [Q("Simplify [[2^3\\times2^5]].",["Add indices: [[2^8=256]]."]),Q("Simplify [[5^7\\div5^3]].",["Subtract indices: [[5^4=625]]."]),Q("Evaluate [[3^0+2^{-2}]].",["[[3^0=1]], [[2^{-2}=\\frac14]].","[[1+\\frac14=\\frac54]]."]),Q("Simplify [[(2^3)^4]].",["Multiply indices: [[2^{12}]]."]),Q("Write [[4^{-2}]] as a fraction.",["[[\\frac1{4^2}=\\frac1{16}]]."]),Q("Simplify [[7^5\\div7^5]].",["[[7^0=1]]."]),Q("Simplify [[3^2\\times3^{-1}]].",["[[3^1=3]]."]),Q("Evaluate [[10^{-3}]].",["[[0.001]]."])]
   :
   [Q("Simplify [[x^4\\times x^7]].",["[[x^{11}]]."]),Q("Simplify [[a^9\\div a^3]].",["[[a^6]]."]),Q("Simplify [[(m^3)^4]].",["[[m^{12}]]."]),Q("Simplify [[x^5y^3\\times x^2y]].",["[[x^7y^4]]."]),Q("Simplify [[\\frac{p^8q^5}{p^3q^2}]].",["[[p^5q^3]]."]),Q("Simplify [[(2x^3)^2]].",["[[4x^6]]."]),Q("Simplify [[a^0b^4]].",["[[b^4]]."]),Q("Simplify [[x^{-2}]].",["[[\\frac1{x^2}]]."])];
  return add(qs.slice(0,3),qs,qs.slice().reverse().slice(0,6));
 }

 if(type==="fractions"){
  const qs=[Q("Work out [[2\\frac13+1\\frac56]].",["[[\\frac73+\\frac{11}{6}=\\frac{14}{6}+\\frac{11}{6}=\\frac{25}{6}=4\\frac16]]."]),Q("Work out [[3\\frac14\\times\\frac25]].",["[[\\frac{13}{4}\\times\\frac25=\\frac{26}{20}=\\frac{13}{10}=1\\frac3{10}]]."]),Q("Work out [[5\\div1\\frac23]].",["[[5\\div\\frac53=5\\times\\frac35=3]]."]),Q("Work out [[\\frac78-\\frac5{12}]].",["Common denominator 24.","[[\\frac{21-10}{24}=\\frac{11}{24}]]."]),Q("Work out [[2\\frac12\\div\\frac56]].",["[[\\frac52\\times\\frac65=3]]."]),Q("Find [[\\frac38]] of 72.",["[[72\\div8\\times3=27]]."]),Q("Work out [[1\\frac34+2\\frac23]].",["[[\\frac74+\\frac83=\\frac{21+32}{12}=\\frac{53}{12}=4\\frac5{12}]]."]),Q("Work out [[\\frac{14}{15}\\times\\frac{25}{28}]].",["Cancel first.","[[\\frac56]]."])];
  return add(qs.slice(0,3),qs,qs.slice().reverse().slice(0,6));
 }
 if(type==="decimals"){
  const qs=[Q("Work out [[4.8\\times0.35]].",["[[48\\times35=1680]].","There are three decimal places in total.","[[1.680=1.68]]."]),Q("Work out [[7.56\\div0.6]].",["Multiply both numbers by 10.","[[75.6\\div6=12.6]]."]),Q("A 2.4 kg bag is shared equally into 16 portions. Find one portion.",["[[2.4\\div16=0.15]] kg."]),Q("Work out [[0.84\\times2.5]].",["[[84\\times25=2100]], then 3 decimal places.","[[2.10=2.1]]."]),Q("Work out [[13.5\\div0.45]].",["Scale by 100: [[1350\\div45=30]]."]),Q("Work out [[0.072\\times0.4]].",["[[72\\times4=288]], four decimal places.","[[0.0288]]."]),Q("Work out [[9.24\\div1.2]].",["Scale by 10: [[92.4\\div12=7.7]]."]),Q("A 5.6 m ribbon is cut into 0.35 m pieces. How many?",["[[5.6\\div0.35=16]]."])];
  return add(qs.slice(0,3),qs,qs.slice().reverse().slice(0,6));
 }
 if(["percent-change","percent-difference","reverse-percent"].includes(type)){
  const qs= type==="percent-change" ?
   [Q("Increase 240 by 15%.",["15% of 240 is 36.","[[240+36=276]]."]),Q("Decrease 850 by 12%.",["Multiplier [[=0.88]].","[[850\\times0.88=748]]."]),Q("A KD 48 item is reduced by 25%. Find the sale price.",["25% of 48 is 12.","[[48-12=36]]."]),Q("Increase 72 by 8%.",["[[72\\times1.08=77.76]]."]),Q("Decrease 1250 by 6%.",["[[1250\\times0.94=1175]]."]),Q("A population of 3200 rises by 4%.",["[[3200\\times1.04=3328]]."]),Q("A phone costing KD 180 is discounted by 30%.",["[[180\\times0.70=126]]."]),Q("Increase 45 by 20%.",["[[45\\times1.2=54]]."])]
   : type==="percent-difference" ?
   [Q("A price rises from 80 to 92. Find the percentage increase.",["Increase [[=12]].","[[12/80\\times100=15\\%]]."]),Q("A value falls from 250 to 215. Find the percentage decrease.",["Decrease [[=35]].","[[35/250\\times100=14\\%]]."]),Q("A score rises from 36 to 45. Find percentage increase.",["Increase 9.","[[9/36\\times100=25\\%]]."]),Q("Mass drops from 60 kg to 57 kg. Find percentage decrease.",["Decrease 3.","[[3/60\\times100=5\\%]]."]),Q("A club grows from 120 to 150 members.",["Increase 30.","[[30/120\\times100=25\\%]]."]),Q("A bill changes from 45 to 54.",["Increase 9.","[[9/45\\times100=20\\%]]."]),Q("A value falls from 500 to 425.",["Decrease 75.","[[75/500\\times100=15\\%]]."]),Q("A distance rises from 2.4 km to 3 km.",["Increase 0.6.","[[0.6/2.4\\times100=25\\%]]."])]
   :
   [Q("After a 20% increase, a price is 96. Find the original.",["Final multiplier [[=1.2]].","[[96\\div1.2=80]]."]),Q("After a 25% discount, a jacket costs 45. Find the original.",["Final is 75% [[=0.75]].","[[45\\div0.75=60]]."]),Q("A value after a 10% decrease is 72. Find original.",["[[72\\div0.9=80]]."]),Q("After a 15% increase the value is 230.",["[[230\\div1.15=200]]."]),Q("A sale price after 30% off is 84.",["[[84\\div0.7=120]]."]),Q("After a 5% rise a population is 10 500.",["[[10500\\div1.05=10000]]."]),Q("A value after a 40% reduction is 54.",["[[54\\div0.6=90]]."]),Q("After a 12% increase a bill is 224.",["[[224\\div1.12=200]]."])];
  return add(qs.slice(0,3),qs,qs.slice().reverse().slice(0,6));
 }

 if(type==="polygon-names"){
  const qs=[Q("Name a polygon with 5 sides.",["Pentagon."]),Q("Name a polygon with 8 sides.",["Octagon."]),Q("How many sides has a decagon?",["10."]),Q("Name a 6-sided polygon.",["Hexagon."]),Q("How many sides has a nonagon?",["9."]),Q("Name a 7-sided polygon.",["Heptagon."]),Q("Name a 10-sided polygon.",["Decagon."]),Q("How many sides has a pentagon?",["5."])];
  return add(qs.slice(0,3),qs,qs.slice().reverse().slice(0,6));
 }
 if(type==="polygon-angles"){
  const qs=[Q("Find the sum of interior angles of a hexagon.",["[[(6-2)\\times180=720^\\circ]]."]),Q("Find each exterior angle of a regular nonagon.",["[[360\\div9=40^\\circ]]."]),Q("Find each interior angle of a regular octagon.",["Exterior [[=360/8=45^\\circ]].","Interior [[=135^\\circ]]."]),Q("Find the interior-angle sum of a decagon.",["[[(10-2)\\times180=1440^\\circ]]."]),Q("A regular polygon has exterior angle 30°. How many sides?",["[[360\\div30=12]]."]),Q("A regular polygon has interior angle 150°. How many sides?",["Exterior [[=30^\\circ]].","[[360\\div30=12]]."]),Q("Five angles of a hexagon total 590°. Find the sixth.",["Hexagon sum 720°.","[[720-590=130^\\circ]]."]),Q("Can a regular polygon have exterior angle 28°?",["[[360/28]] is not an integer, so no."])];
  return add(qs.slice(0,3),qs,qs.slice().reverse().slice(0,6));
 }

 if(["term-rule","nth-linear","seq-generate","nth-recognise","visual-pattern"].includes(type)){
  let qs;
  if(type==="term-rule") qs=[Q("Find the term-to-term rule: 4, 9, 14, 19, ...",["Add 5."]),Q("Generate the next three terms: 30, 24, 18, ...",["Subtract 6 each time.","12, 6, 0."]),Q("A sequence starts 3 and repeatedly multiplies by 2. Write first five terms.",["3, 6, 12, 24, 48."]),Q("Find the rule: 2.5, 3, 3.5, 4, ...",["Add 0.5."]),Q("Continue 81, 27, 9, ...",["Divide by 3.","3, 1, 1/3."]),Q("Continue 1/2, 3/4, 1, 5/4, ...",["Add 1/4.","Next: 3/2, 7/4."]),Q("Rule: subtract 7. Start 50. Give 5 terms.",["50,43,36,29,22."]),Q("Describe 5,10,20,40,...",["Multiply by 2."])];
  else if(type==="nth-linear") qs=[Q("Find the nth term of 5, 8, 11, 14, ...",["Difference 3 gives [[3n]].","When n=1, need +2.","[[3n+2]]."]),Q("Find the nth term of 12, 8, 4, 0, ...",["Difference -4 gives [[-4n]].","Need +16.","[[-4n+16]]."]),Q("Is 101 in the sequence [[4n+1]]?",["Solve [[4n+1=101]].","[[n=25]], so yes."]),Q("Find nth term: 7,12,17,22,...",["[[5n+2]]."]),Q("Find nth term: -2,1,4,7,...",["[[3n-5]]."]),Q("Find 20th term of [[6n-1]].",["[[6(20)-1=119]]."]),Q("Which term of [[3n+4]] is 70?",["[[3n+4=70]], [[n=22]]."]),Q("Find nth term: 1/2,1,3/2,2,...",["[[n/2]]."])];
  else if(type==="seq-generate") qs=[Q("Generate first five terms of [[n^2+1]].",["2,5,10,17,26."]),Q("Generate first five terms of [[n^3]].",["1,8,27,64,125."]),Q("Generate first five terms of [[2n^2-1]].",["1,7,17,31,49."]),Q("Generate first four terms of [[n^3+2]].",["3,10,29,66."]),Q("Generate first five terms of [[3n^2]].",["3,12,27,48,75."]),Q("Generate first five square numbers.",["1,4,9,16,25."]),Q("Generate first five cubes.",["1,8,27,64,125."]),Q("Generate first four terms of [[2^n]].",["2,4,8,16."])];
  else if(type==="nth-recognise") qs=[Q("Find a rule for 2, 5, 10, 17, 26, ...",["Compare with square numbers 1,4,9,16,25.","Rule [[n^2+1]]."]),Q("Find a rule for 3, 12, 27, 48, ...",["These are 3 times square numbers.","[[3n^2]]."]),Q("Find a rule for 4, 8, 16, 32, ...",["Powers of 2 shifted.","[[2^{n+1}]]."]),Q("Find rule for 0,3,8,15,24,...",["One less than squares.","[[n^2-1]]."]),Q("Find rule for 2,16,54,128,...",["[[2n^3]]."]),Q("Find rule for 1,8,27,64,...",["[[n^3]]."]),Q("Find rule for 1/2,1,3/2,2,...",["[[n/2]]."]),Q("Find rule for 4,7,12,19,28,...",["Square plus 3.","[[n^2+3]]."])];
  else qs=[Q("A matchstick pattern uses 4, 7, 10, 13 sticks. Describe the growth.",["Each new shape adds 3 sticks."]),Q("A dot pattern has 1,4,9,16 dots. Describe it.",["Square numbers, [[n^2]]."]),Q("A tile pattern has 5,8,11,14 tiles. Predict figure 10.",["Rule [[3n+2]].","Figure 10 has 32 tiles."]),Q("A pattern doubles: 3,6,12,24. Give next two.",["48,96."]),Q("A staircase has 1,3,6,10 blocks. Find next term.",["Differences 2,3,4, so next difference 5.","15."]),Q("Explain why 2,5,8,11 is linear.",["Constant first difference of 3."]),Q("Continue 1,4,10,19 using differences 3,6,9.",["Next difference 12, so 31."]),Q("A pattern follows [[2n+5]]. Find figure 12.",["[[2(12)+5=29]]."])];
  return add(qs.slice(0,3),qs,qs.slice().reverse().slice(0,6));
 }

 if(type==="simultaneous"||type==="form-simultaneous"){
  const qs= type==="simultaneous" ?
   [Q("Solve [[x+y=11]], [[x-y=3]].",["Add equations: [[2x=14]], so [[x=7]].","Then [[y=4]]."]),Q("Solve [[2x+y=13]], [[x-y=2]].",["Add: [[3x=15]], [[x=5]].","Then [[y=3]]."]),Q("Solve [[3x+2y=18]], [[x+y=7]].",["Double second: [[2x+2y=14]].","Subtract: [[x=4]].","Then [[y=3]]."]),Q("Solve [[4x+y=17]], [[2x-y=1]].",["Add: [[6x=18]], [[x=3]].","Then [[y=5]]."]),Q("Solve [[x+2y=13]], [[x-y=4]].",["Subtract equations: [[3y=9]], [[y=3]].","Then [[x=7]]."]),Q("Solve [[5x+2y=24]], [[x+2y=8]].",["Subtract: [[4x=16]], [[x=4]].","Then [[y=2]]."]),Q("Solve [[2x+3y=19]], [[2x-y=7]].",["Subtract second from first: [[4y=12]], [[y=3]].","Then [[x=5]]."]),Q("Solve [[3x-y=11]], [[x+y=9]].",["Add: [[4x=20]], [[x=5]].","Then [[y=4]]."])]
   :
   [Q("Two pens and one notebook cost KD 7; one pen and one notebook cost KD 5. Form equations and find each price.",["[[2p+n=7]], [[p+n=5]].","Subtract: [[p=2]].","Then [[n=3]]."]),Q("There are 26 animals, chickens and goats, with 74 legs. Form and solve.",["[[c+g=26]], [[2c+4g=74]].","Divide second by 2: [[c+2g=37]].","Subtract: [[g=11]], [[c=15]]."]),Q("Adult tickets cost a, child tickets c. 2 adults + 3 children cost 19; 3 adults + 1 child cost 18. Solve.",["[[2a+3c=19]], [[3a+c=18]].","From second [[c=18-3a]].","Substitute to get [[a=5]], [[c=3]]."]),Q("Two numbers total 30 and differ by 8.",["[[x+y=30]], [[x-y=8]].","[[x=19]], [[y=11]]."]),Q("A café sells 3 sandwiches and 2 drinks for 11; 2 sandwiches and 3 drinks for 9.",["[[3s+2d=11]], [[2s+3d=9]].","Eliminate to get [[s=3]], [[d=1]]."]),Q("A rectangle has perimeter 34, and length is 5 more than width.",["[[2l+2w=34]], [[l-w=5]].","[[w=6]], [[l=11]]."]),Q("A total of 40 coins are 1 KD and 0.5 KD coins worth KD 31.",["[[x+y=40]], [[x+0.5y=31]].","[[y=18]], [[x=22]]."]),Q("Two angles total 150° and one is 24° larger.",["[[x+y=150]], [[x-y=24]].","[[x=87^\\circ]], [[y=63^\\circ]]."])];
  return add(qs.slice(0,3),qs,qs.slice().reverse().slice(0,6));
 }

 if(type==="map-scale"||type==="bearings"||type==="scale-drawing"){
  const qs= type==="map-scale" ?
   [Q("A map scale is 1:50 000. What actual distance is 6 cm?",["[[6\\times50\\,000=300\\,000]] cm.","[[300\\,000]] cm = 3 km."]),Q("On a 1:25 000 map, two places are 8 cm apart. Find actual distance.",["[[8\\times25\\,000=200\\,000]] cm = 2 km."]),Q("Actual distance is 4.5 km on a 1:50 000 map. Find map distance.",["4.5 km = 450 000 cm.","[[450000\\div50000=9]] cm."]),Q("Scale 1:10 000; map distance 3.2 cm.",["[[3.2\\times10000=32000]] cm = 320 m."]),Q("Scale 1:100 000; 7.5 cm.",["[[750000]] cm = 7.5 km."]),Q("Actual 1.2 km on 1:20 000 map.",["1.2 km = 120000 cm.","[[120000/20000=6]] cm."]),Q("A plan is 1:200. A wall measures 4.5 cm.",["[[4.5\\times200=900]] cm = 9 m."]),Q("A 15 m room is shown at 1:500. Find plan length.",["1500 cm ÷500 = 3 cm."])]
   : type==="bearings" ?
   [Q("Write the bearing of east from a point.",["[[090^\\circ]]."]),Q("Write the bearing of south-west.",["[[225^\\circ]]."]),Q("A ship travels on bearing [[040^\\circ]]. Describe the direction.",["40° clockwise from north."]),Q("Write north-west as a three-figure bearing.",["[[315^\\circ]]."]),Q("A bearing is 170°. Is it east or west of south?",["10° east of south."]),Q("Convert 5° clockwise from north to a bearing.",["[[005^\\circ]]."]),Q("A bearing is 280°. Describe it.",["10° north of west."]),Q("What is the reverse bearing of 070°?",["[[250^\\circ]]."])]
   :
   [Q("Use scale 1 cm : 5 m. Draw a 30 m line.",["[[30\\div5=6]] cm."]),Q("A plan uses 1 cm : 2 m. A real path is 17 m. Find drawing length.",["[[17\\div2=8.5]] cm."]),Q("A 7.2 cm drawing represents 36 m. State the scale in cm:m.",["[[36\\div7.2=5]], so 1 cm : 5 m."]),Q("At scale 1:100, draw 4.2 m.",["4.2 m = 420 cm.","[[420/100=4.2]] cm."]),Q("At 1 cm : 8 km, how far is 5.5 cm?",["44 km."]),Q("A scale drawing has 12 cm for 30 m. Find scale.",["30 m/12 = 2.5 m per cm.","1 cm : 2.5 m."]),Q("A route is 48 km; scale 1 cm : 6 km.",["[[48/6=8]] cm."]),Q("A 9 cm line at 1:250 represents what real length?",["[[9\\times250=2250]] cm = 22.5 m."])];
  return add(qs.slice(0,3),qs,qs.slice().reverse().slice(0,6));
 }

 if(["circle-parts","circumference","circle-area","circle-fraction","compound-circle"].includes(type)){
  let qs;
  if(type==="circle-parts") qs=[Q("What is a chord?",["A line segment joining two points on the circumference."]),Q("What is a tangent?",["A line touching the circle at exactly one point."]),Q("What is a sector?",["The region enclosed by two radii and an arc."]),Q("What is a diameter?",["A chord through the centre; length [[2r]]."]),Q("What is an arc?",["Part of the circumference."]),Q("What is a segment?",["Region between a chord and its arc."]),Q("How are radius and diameter related?",["[[d=2r]]."]),Q("What is circumference?",["The distance around a circle."])];
  else if(type==="circumference") qs=[Q("Find circumference when [[r=7]] cm.",["[[C=2\\pi r=14\\pi]] cm.","Approximately 44.0 cm."]),Q("Find circumference when [[d=12]] cm.",["[[C=\\pi d=12\\pi]] cm."]),Q("A circle has circumference [[20\\pi]] cm. Find radius.",["[[2\\pi r=20\\pi]].","[[r=10]] cm."]),Q("Find C for r=5.5 cm.",["[[11\\pi\\approx34.6]] cm."]),Q("Find C for d=18 m.",["[[18\\pi\\approx56.5]] m."]),Q("Circumference 31.4 cm; use [[\\pi\\approx3.14]] to find diameter.",["[[d=31.4/3.14=10]] cm."]),Q("Find exact circumference for r=3.",["[[6\\pi]]."]),Q("A wheel diameter is 0.7 m. One rotation distance?",["[[0.7\\pi\\approx2.20]] m."])];
  else if(type==="circle-area") qs=[Q("Find area when [[r=6]] cm.",["[[A=\\pi r^2=36\\pi]] cm²."]),Q("Find area when [[d=10]] cm.",["Radius 5 cm.","[[A=25\\pi]] cm²."]),Q("A circle has area [[49\\pi]] cm². Find radius.",["[[r^2=49]], so [[r=7]] cm."]),Q("Find area r=4.5 cm.",["[[20.25\\pi\\approx63.6]] cm²."]),Q("Find exact area d=16 cm.",["r=8.","[[64\\pi]] cm²."]),Q("Area is [[81\\pi]]. Find diameter.",["r=9, so diameter 18."]),Q("Find area r=12 m.",["[[144\\pi]] m²."]),Q("A circular table diameter 1.2 m. Find area.",["r=0.6.","[[0.36\\pi\\approx1.13]] m²."])];
  else if(type==="circle-fraction") qs=[Q("Find area of a semicircle radius 8 cm.",["Full area [[64\\pi]].","Half [[=32\\pi]] cm²."]),Q("Find perimeter of a semicircle radius 5 cm.",["Half circumference [[=5\\pi]].","Add diameter 10.","[[5\\pi+10]] cm."]),Q("Find area of a quadrant radius 12 cm.",["Quarter of [[144\\pi]].","[[36\\pi]] cm²."]),Q("Find arc length of a quadrant r=10.",["Quarter circumference: [[\\frac14(20\\pi)=5\\pi]]."]),Q("Find perimeter of quadrant r=7.",["Arc [[=\\frac14(14\\pi)=3.5\\pi]].","Add two radii: [[14+3.5\\pi]]."]),Q("A semicircle has diameter 14. Find area.",["r=7.","[[\\frac12\\times49\\pi=24.5\\pi]]."]),Q("Find area of three quarters of circle r=4.",["[[\\frac34\\times16\\pi=12\\pi]]."]),Q("Find arc length of semicircle r=9.",["Half circumference [[=9\\pi]]."])];
  else qs=[Q("A 10 cm by 8 cm rectangle has a semicircle of diameter 8 cm attached. Find total area.",["Rectangle 80.","Semicircle radius 4: [[8\\pi]].","Total [[80+8\\pi]] cm²."]),Q("A square side 12 cm contains a circle radius 6 cm. Find area outside circle.",["Square 144.","Circle [[36\\pi]].","Outside [[144-36\\pi]]."]),Q("A running track consists of a 40 m by 20 m rectangle with semicircles on the short ends. Find perimeter.",["Straight parts [[=80]] m.","Two semicircles form circle diameter 20: [[20\\pi]].","Total [[80+20\\pi]]."]),Q("Rectangle 15 by 10 with quarter-circle radius 10 removed. Find remaining area.",["[[150-25\\pi]] cm²."]),Q("Two semicircles diameter 6 form a circle. Find total area.",["r=3.","[[9\\pi]]."]),Q("A square side 8 plus a semicircle diameter 8. Find perimeter.",["Three square sides 24 plus semicircle arc [[4\\pi]].","[[24+4\\pi]]."]),Q("Circle r=5 inside square side 10. Find shaded corner area.",["[[100-25\\pi]]."]),Q("A rectangle 12×6 has two semicircular ends diameter 6. Find area.",["Rectangle 72 plus circle r=3 area [[9\\pi]].","[[72+9\\pi]]."])];
  return add(qs.slice(0,3),qs,qs.slice().reverse().slice(0,6));
 }

 if(["nets","prism-volume","surface-area","volume-units"].includes(type)){
  let qs;
  if(type==="nets") qs=[Q("How many faces appear in a cube net?",["6 square faces."]),Q("Describe a net for a triangular prism.",["Two congruent triangles and three rectangles."]),Q("What shapes make a cylinder net?",["Two circles and one rectangle."]),Q("How many rectangular faces has a cuboid?",["6 rectangles."]),Q("How many faces has a square-based pyramid?",["5: one square and four triangles."]),Q("Why can some arrangements of 6 squares not fold to a cube?",["Faces may overlap or fail to meet correctly."]),Q("How many edges has a triangular prism?",["9."]),Q("How many vertices has a triangular prism?",["6."])];
  else if(type==="prism-volume") qs=[Q("Triangular prism: triangle base 6 cm, height 4 cm, length 10 cm. Find volume.",["Cross-section area [[=\\frac12\\times6\\times4=12]].","Volume [[=12\\times10=120]] cm³."]),Q("Cylinder r=3 cm, length 8 cm. Find exact volume.",["[[V=\\pi r^2h=\\pi\\times9\\times8=72\\pi]] cm³."]),Q("A prism has cross-sectional area 35 cm² and length 12 cm.",["[[V=35\\times12=420]] cm³."]),Q("Cylinder r=5, h=10.",["[[250\\pi]] cm³."]),Q("Triangular prism triangle area 18, length 7.",["[[126]] cm³."]),Q("A prism volume 540 cm³ and cross-section 45 cm². Find length.",["[[540/45=12]] cm."]),Q("Cylinder diameter 8, height 6.",["r=4.","[[96\\pi]] cm³."]),Q("Prism volume 300 and length 15. Find cross-section area.",["[[20]] cm²."])];
  else if(type==="surface-area") qs=[Q("A cuboid is 4×3×2 cm. Find surface area.",["[[2(12+8+6)=52]] cm²."]),Q("A closed cylinder r=3, h=8. Find exact surface area.",["[[2\\pi r^2+2\\pi rh=18\\pi+48\\pi=66\\pi]]."]),Q("A triangular prism has triangle sides 3,4,5, length 10. Triangle area 6. Find SA.",["Two triangles [[=12]].","Rectangles [[=(3+4+5)10=120]].","Total 132 cm²."]),Q("Cube side 7 cm. Find SA.",["[[6\\times49=294]] cm²."]),Q("Closed cylinder r=5,h=12.",["[[2\\pi(25)+2\\pi(5)(12)=170\\pi]]."]),Q("Cuboid 8×5×3.",["[[2(40+24+15)=158]]."]),Q("Square-based pyramid: square base area 36, four triangle faces each 15.",["[[36+60=96]]."]),Q("Triangular prism length 6, triangle sides 5,5,6 and area 12.",["Two triangles 24; rectangles [[(5+5+6)6=96]].","Total 120."])];
  else qs=[Q("Convert [[2.5\\text{ m}^3]] to cm³.",["[[1\\text{ m}^3=1,000,000\\text{ cm}^3]].","[[2,500,000\\text{ cm}^3]]."]),Q("Convert 3500 cm³ to litres.",["[[1000\\text{ cm}^3=1\\text{ L}]].","[[3.5\\text{ L}]]."]),Q("Convert 4.2 L to cm³.",["[[4.2\\times1000=4200\\text{ cm}^3]]."]),Q("Convert 0.006 m³ to litres.",["[[1\\text{ m}^3=1000\\text{ L}]].","[[6\\text{ L}]]."]),Q("Convert 750 mL to cm³.",["1 mL = 1 cm³.","750 cm³."]),Q("Convert 1.8 m³ to litres.",["1800 L."]),Q("Convert 12 500 cm³ to litres.",["12.5 L."]),Q("Convert 0.45 L to cm³.",["450 cm³."])];
  return add(qs.slice(0,3),qs,qs.slice().reverse().slice(0,6));
 }

 if(type==="pythagoras"||type==="pythagoras-problem"){
  const qs= type==="pythagoras" ?
   [Q("A right triangle has legs 6 cm and 8 cm. Find hypotenuse.",["[[c^2=6^2+8^2=100]].","[[c=10]] cm."]),Q("Hypotenuse 13 cm, one leg 5 cm. Find other leg.",["[[x^2=13^2-5^2=144]].","[[x=12]] cm."]),Q("A right triangle has legs 9 and 12. Find hypotenuse.",["[[c^2=81+144=225]].","[[c=15]]."]),Q("Hypotenuse 17, leg 8.",["[[x^2=289-64=225]], [[x=15]]."]),Q("Legs 7 and 24.",["[[c=25]]."]),Q("Hypotenuse 10, leg 6.",["[[x=8]]."]),Q("Legs 5 and 12.",["[[c=13]]."]),Q("Hypotenuse 25, leg 15.",["[[x=20]]."])]
   :
   [Q("A rectangle is 9 cm by 12 cm. Find diagonal.",["[[d^2=9^2+12^2=225]], [[d=15]] cm."]),Q("An isosceles triangle has equal sides 13 cm and base 10 cm. Find height.",["Half base 5.","[[h^2=13^2-5^2=144]].","[[h=12]] cm."]),Q("A ladder 10 m long reaches 8 m up a wall. How far is its foot from wall?",["[[x^2=10^2-8^2=36]].","[[x=6]] m."]),Q("A square has side 7 cm. Find diagonal.",["[[d^2=49+49=98]].","[[d=7\\sqrt2]] cm."]),Q("A TV screen is 48 cm wide and 36 cm high. Find diagonal.",["[[d=60]] cm."]),Q("Equilateral triangle side 10. Find height.",["Split base into 5 and 5.","[[h^2=100-25=75]].","[[h=5\\sqrt3]]."]),Q("Rectangle diagonal 17 and width 8. Find length.",["[[l^2=289-64=225]], [[l=15]]."]),Q("A guy rope is 13 m, attached 12 m high. Distance from mast?",["[[x=5]] m."])];
  return add(qs.slice(0,3),qs,qs.slice().reverse().slice(0,6));
 }

 if(["grouped-stats","compare-stats","stemleaf","backtoback"].includes(type)){
  let qs;
  if(type==="grouped-stats") qs=[Q("Classes 0–10,10–20,20–30 have frequencies 3,5,2. Estimate mean.",["Midpoints 5,15,25.","[[\\sum fx=15+75+50=140]], total 10.","Estimated mean [[=14]]."]),Q("For grouped data, why is the mean an estimate?",["Each value is represented by its class midpoint."]),Q("Which class is modal if frequencies are 4,9,7,3?",["The second class, frequency 9."]),Q("Classes 0–5,5–10,10–15 with f 2,6,2. Estimate mean.",["Midpoints 2.5,7.5,12.5.","[[\\sum fx=5+45+25=75]], total 10.","Mean 7.5."]),Q("Find total frequency: 8,12,15,5.",["40."]),Q("Why use class midpoints for grouped mean?",["Exact individual values are unknown."]),Q("Classes 20–30,30–40,40–50 have f 1,4,5. Estimate mean.",["Midpoints 25,35,45.","[[25+140+225=390]], total 10.","39."]),Q("Modal class has frequency 18. What does that mean?",["It contains more observations than any other class."])];
  else if(type==="compare-stats") qs=[Q("A: mean 72, range 8. B: mean 68, range 20. Compare.",["A has higher typical value and is more consistent because its range is smaller."]),Q("Two groups have median 15; ranges 6 and 13. Compare spread.",["First group is more consistent."]),Q("A mean is higher but range is also much higher. What should you mention?",["Both central tendency and spread; one statistic alone is insufficient."]),Q("Team X mean 12.4, range 5; Y mean 13.1, range 18.",["Y higher mean; X more consistent."]),Q("Group A median 42, range 7; B median 39, range 7.",["Same spread; A higher centre."]),Q("Why can one outlier affect range strongly?",["Range uses only the extreme values."]),Q("If two means are equal, what other statistic helps compare consistency?",["Range (or another spread measure)."]),Q("Write a complete comparison sentence for mean 50/range 9 vs mean 47/range 4.",["First group has higher average, second is more consistent."])];
  else if(type==="stemleaf") qs=[Q("Write ordered stem-and-leaf for 12,14,17,21,25,25,29.",["[[1\\mid2\\ 4\\ 7]], [[2\\mid1\\ 5\\ 5\\ 9]].","Key: [[1\\mid2=12]]."]),Q("For [[2|1\\ 3\\ 8]], what values are shown?",["21, 23, 28."]),Q("From 11,15,16,22,24 find median.",["Ordered list has 5 values; middle is 16."]),Q("Key [[3|7=37]]. What is leaf 7 on stem 3?",["37."]),Q("Why must leaves be ordered?",["It makes median, range and comparisons easy to read."]),Q("Values 8,9,12,12,18. Give stem-and-leaf.",["[[0|8\\ 9]], [[1|2\\ 2\\ 8]]."]),Q("From stem 4 leaves 1,3,3,8 find mode.",["43."]),Q("From values 31,35,39,42 find range.",["[[42-31=11]]."])];
  else qs=[Q("In a back-to-back stem plot, why share the stem?",["Both distributions use the same place-value scale for direct comparison."]),Q("A has median 34, B median 38. Which has higher centre?",["B."]),Q("A range 12, B range 7. Which is more consistent?",["B."]),Q("What must a back-to-back stem-and-leaf include?",["Ordered leaves on both sides and a clear key."]),Q("If both medians are 25 but A has smaller range, compare.",["Same centre; A more consistent."]),Q("Why may leaves run outward in opposite order?",["So each side is ordered away from the common stem."]),Q("A values 21,23,29; B 22,24,28. Compare medians.",["A median 23; B median 24."]),Q("A: 12–20, B: 15–18. Which likely has smaller range?",["B."])];
  return add(qs.slice(0,3),qs,qs.slice().reverse().slice(0,6));
 }

 if(["outcomes","equally-likely","experimental"].includes(type)){
  let qs;
  if(type==="outcomes") qs=[Q("Flip a coin and roll a 1–3 spinner. List all outcomes.",["H1,H2,H3,T1,T2,T3.","6 outcomes."]),Q("Two coins are tossed. List outcomes.",["HH, HT, TH, TT."]),Q("A bag choice is red/blue and spinner is 1/2. List outcomes.",["R1,R2,B1,B2."]),Q("Roll two 1–3 dice. How many ordered outcomes?",["[[3\\times3=9]]."]),Q("Choose starter A/B/C and drink X/Y. How many meals?",["[[3\\times2=6]]."]),Q("Why use a table for two events?",["It systematically shows every combined outcome once."]),Q("Two spinners have 4 and 5 sectors. Number of outcomes?",["20."]),Q("List outcomes for coin and colour R/G.",["HR,HG,TR,TG."])];
  else if(type==="equally-likely") qs=[Q("Two fair coins are tossed. Find P(two heads).",["4 equally likely outcomes.","Only HH works.","[[P=1/4]]."]),Q("A fair die and coin are used. Find P(even number and H).",["12 equally likely outcomes.","Even numbers 2,4,6 with H: 3 outcomes.","[[P=3/12=1/4]]."]),Q("Two 1–3 spinners. Find P(sum 4).",["9 outcomes.","(1,3),(2,2),(3,1): 3.","[[P=1/3]]."]),Q("Two fair coins: P(exactly one head).",["HT,TH: 2 of 4.","[[1/2]]."]),Q("Die and coin: P(number >4 and T).",["2 numbers ×1 tail =2 of 12.","[[1/6]]."]),Q("Two 1–4 spinners: P(equal numbers).",["4 equal pairs of 16.","[[1/4]]."]),Q("Two fair dice: P(sum 7).",["6 outcomes of 36.","[[1/6]]."]),Q("Coin and 1–5 spinner: P(H and odd).",["3 favourable of 10.","[[3/10]]."])];
  else qs=[Q("A coin lands heads 62 times in 100 tosses. Experimental P(H)?",["[[62/100=0.62]]."]),Q("A fair die is rolled 600 times. Expected number of sixes?",["Theoretical P=1/6.","[[600/6=100]]."]),Q("A spinner gives red 47 times in 80 trials. Estimate P(red).",["[[47/80=0.5875]]."]),Q("Why might experimental probability differ from theoretical?",["Random variation, especially with few trials."]),Q("What usually happens as number of trials increases?",["Experimental probability tends to get closer to theoretical probability."]),Q("A fair coin gives 18 heads in 30 tosses. Compare to theory.",["Experimental [[=0.6]], theoretical [[=0.5]].","Experimental is higher."]),Q("If P(win)=0.3, expected wins in 200 games?",["[[0.3\\times200=60]]."]),Q("A spinner lands blue 90 of 150 trials. Estimate P(blue).",["[[90/150=0.6]]."])];
  return add(qs.slice(0,3),qs,qs.slice().reverse().slice(0,6));
 }

 if(["speed","distance-graph","distance-calc","rate-graph"].includes(type)){
  let qs;
  if(type==="speed") qs=[Q("A car travels 150 km in 2.5 h. Find average speed.",["[[speed=distance/time]].","[[150/2.5=60]] km/h."]),Q("A runner moves at 4 m/s for 3 minutes. Find distance.",["3 min = 180 s.","[[d=4\\times180=720]] m."]),Q("A train travels 210 km at 70 km/h. Find time.",["[[t=210/70=3]] h."]),Q("90 km in 1.5 h.",["[[60]] km/h."]),Q("Speed 12 m/s for 45 s.",["[[540]] m."]),Q("Distance 2.4 km at 6 km/h.",["[[0.4]] h = 24 min."]),Q("400 m in 50 s.",["[[8]] m/s."]),Q("72 km/h for 20 min. Find distance.",["20 min = 1/3 h.","[[72/3=24]] km."])];
  else if(type==="distance-graph") qs=[Q("On a distance-time graph, what does a horizontal section mean?",["The object is stationary."]),Q("What does a steeper straight section mean?",["A greater constant speed."]),Q("A graph goes from (0 min,0 km) to (30 min,20 km). Describe.",["Distance increases uniformly; constant speed."]),Q("Why does a straight rising line show constant speed?",["Equal distance is covered in equal time intervals."]),Q("What does a downward section on a distance-from-home graph mean?",["Returning towards home."]),Q("Two journey graphs intersect. What can the intersection mean?",["At that time they are the same distance from the reference point."]),Q("Graph rises, is flat, then rises more steeply. Describe.",["Travel, stop, then travel faster."]),Q("Can a distance travelled graph decrease?",["No; total distance travelled cannot decrease."])];
  else if(type==="distance-calc") qs=[Q("A graph rises from 0 km at 0 h to 30 km at 0.5 h. Find speed.",["[[30/0.5=60]] km/h."]),Q("From 20 km at 1 h to 50 km at 2 h. Find speed over interval.",["Distance change 30 km in 1 h.","30 km/h."]),Q("A journey covers 90 km in 1.5 h from the graph. Average speed?",["[[90/1.5=60]] km/h."]),Q("A line segment rises 12 km in 20 min. Speed km/h?",["20 min = 1/3 h.","[[12/(1/3)=36]] km/h."]),Q("Graph is flat for 15 min. Distance travelled in that interval?",["0."]),Q("Journey 0–40 km in 50 min. Speed km/h?",["50 min = 5/6 h.","[[40/(5/6)=48]] km/h."]),Q("Two journeys: A 30 km in 0.5 h; B 42 km in 0.75 h. Which faster?",["A 60 km/h; B 56 km/h.","A faster."]),Q("Graph returns 20 km in 0.25 h. Speed magnitude?",["[[20/0.25=80]] km/h."])];
  else qs=[Q("On a temperature-time graph, what does a horizontal section show?",["Temperature is constant."]),Q("What does a curve becoming steeper mean for rate of change?",["The rate is increasing in magnitude."]),Q("A tank volume graph rises linearly. Interpret.",["Liquid is entering at a constant rate."]),Q("A population graph curves upward. What does that suggest?",["Growth rate is increasing."]),Q("A graph slopes downward more gently over time.",["Quantity is decreasing, but at a slowing rate."]),Q("Why is gradient linked to rate of change?",["Gradient = change in vertical quantity ÷ change in horizontal quantity."]),Q("A graph has a turning point from rising to falling.",["The quantity reaches a local maximum there."]),Q("Two graphs cross. What does the intersection mean?",["At that input/time, the two quantities are equal."])];
  return add(qs.slice(0,3),qs,qs.slice().reverse().slice(0,6));
 }

 // safe fallback
 const base=[
  Q("Explain the key idea in this lesson: "+type+".",["Use the lesson definition and show one correct worked example."]),
  Q("Give one example and justify each step.",["State the rule, substitute carefully, then simplify."]),
  Q("Check a completed solution for errors.",["Verify each operation and the final answer."])
 ];
 return add(base,rep(base,8),rep(base.map(function(q){return Q("Homework: "+q.prompt,q.steps);}),6));
}

window.LESSON_CONTENT={};
window.STARTERS={};
window.STARTER_ANSWERS={};

window.LESSONS.forEach(function(l){
 const p=packs(l.type);
 const sm=window.SOW_MAP[l.id];
 window.LESSON_CONTENT[l.id]={
  explain:sm.objective+" This lesson follows the NES Year 8 SOW and uses examples progressing from fluency to reasoning.",
  keyPoints:[sm.objective,"Use correct mathematical notation.","Show enough working to make the method visible.","Check whether the answer is sensible in context."],
  rules:[["Key idea",sm.objective],["Check","Substitute or calculate carefully, then verify the result."]],
  method:["Identify exactly what the question is asking.","Choose the relevant rule or representation.","Work one line at a time and keep notation clear.","Simplify fully and include units where appropriate.","Check the result using estimation, substitution or the context."],
  mistakes:["Skipping a necessary intermediate step.","Using a correct rule in the wrong context.","Dropping units or signs.","Giving a calculator value when an exact form is required."],
  vocab:[],
  examples:p.examples,
  practice:p.practice,
  homework:p.homework
 };
 window.STARTERS[l.id]=p.practice.slice(0,4).map(function(q){return q.prompt;});
 window.STARTER_ANSWERS[l.id]=p.practice.slice(0,4).map(function(q){return q.steps[q.steps.length-1]||"Check working.";});
});

const unitSource={
 "1":["Checkpoint Stage 8 • Units 1 and 3","STP Year 8 • Ch.1 Working with numbers • p.20"],
 "2":["Checkpoint Stage 8 • Unit 9 / linked Stage 9 extensions","STP Year 8 • Ch.10 Formulas p.190; Ch.12 Linear equations p.242; Ch.17 Solving equations p.335"],
 "3":["Checkpoint Stage 8 • Units 3, 7 and 11","STP Year 8 • Ch.3 p.51 and Ch.4 p.65"],
 "4":["Checkpoint / SOW polygon-angle work","STP Year 8 • Ch.6 Polygons • p.115"],
 "5":["Checkpoint Stage 8 • Unit 2 Sequences","STP Year 8 • Ch.10 Formulas • p.190"],
 "6":["Checkpoint Stage 9 extension • simultaneous equations","STP Year 8 • Ch.16 Simultaneous equations • p.322"],
 "7":["Checkpoint Stage 8 • 8.5 and Stage 9 bearings","STP Year 8 • Ch.20 Scale drawing • p.393"],
 "8":["Checkpoint Stage 8 • Unit 17 circle work","STP Year 8 • Ch.9 Circle • p.172"],
 "9":["Checkpoint Stage 8 • 8.4 / 17.6 and Stage 9 prism work","STP Year 8 • Ch.18 Volumes • p.365"],
 "10":["Checkpoint Stage 9 • 8.3 Pythagoras","STP Year 8 • Ch.21 Pythagoras • p.413"],
 "11":["Checkpoint Stage 8 • 10.2–10.3 and 18.4","STP Year 8 • Ch.15 Continuous data • p.302"],
 "12":["Checkpoint Stage 8 • Unit 15 Probability","STP Year 8 • Ch.2 Probability • p.41"],
 "13":["Checkpoint Stage 9 • speed and real-life graphs","STP Year 8 • Ch.13 p.266 and Ch.14 p.290"]
};

window.TEXTBOOK_CONTENT={};
window.LESSONS.forEach(function(l){
 const sm=window.SOW_MAP[l.id], sources=unitSource[l.u]||["Checkpoint Stage 8","STP Year 8"];
 const cpCard={url:CP8,bookTitle:"Cambridge Checkpoint Mathematics Coursebook Stage 8",heading:sources[0],page:sm.textbook,excerpt:sm.objective};
 const stpCard={url:STP8,bookTitle:"STP Mathematics Year 8",heading:sources[1],excerpt:"Use the corresponding STP chapter for additional worked examples, exercises and extension."};
 window.TEXTBOOK_CONTENT[l.id]={
  schemeReference:sm.textbook,
  practice:[cpCard,stpCard],
  homework:[
   {url:CP8,bookTitle:"Cambridge Checkpoint Mathematics Coursebook Stage 8",heading:"Homework source / mapped SOW reference",page:sm.textbook,excerpt:"Use the mapped Checkpoint section for extra practice."},
   {url:STP8,bookTitle:"STP Mathematics Year 8",heading:"Additional textbook practice",excerpt:sources[1]}
  ],
  examples:[],
  practiceAssignment:"Use the mapped Year 8 textbook sources alongside the independent questions below. Show clear working.",
  homeworkAssignment:"Complete the Year 8 homework questions and use the second textbook source for additional challenge."
 };
});

window.EXTRA_EXAMPLES={};
window.SOURCE_QUESTIONS={};
