window.COURSE_YEAR="10";window.EXPECTED_LESSONS=47;

/* ===== lessons.js ===== */
(function(){
window.LESSONS = [
{u:"12",unit:"Surds",id:"12.1",title:"Understand and simplify surds",type:"surds",src:"Morrison & Hamshaw pp. 276–277 Ex 9.7; pp. 281–282 Ex 9.8 Q1–4",prior:["Square numbers and prime factors","Simplifying numerical roots","Index laws"],obj:["Recognise exact surd form","Simplify surds using factor pairs","Multiply and divide surds","Combine like surds"]},
{u:"12",unit:"Surds",id:"12.2",title:"Rationalise the denominator",type:"rationalise",src:"Morrison & Hamshaw pp. 282–284 Ex 9.8 Q5–7, Ex 9.9",prior:["Simplifying surds","Difference of two squares","Equivalent fractions"],obj:["Rationalise a single surd denominator","Use conjugates for binomial denominators","Simplify final exact answers"]},

{u:"13",unit:"Algebraic fractions",id:"13.1",title:"Factorise and simplify rational expressions",type:"algfrac-simplify",src:"Morrison & Hamshaw pp. 464–467 Ex 14.13–14.14",prior:["Common factors","Factorising quadratics","Cancelling numerical fractions"],obj:["Factor numerator and denominator","State excluded values where appropriate","Cancel common factors correctly"]},
{u:"13",unit:"Algebraic fractions",id:"13.2",title:"Manipulate algebraic fractions",type:"algfrac-four",src:"Morrison & Hamshaw pp. 462–463 Ex 14.12",prior:["Equivalent fractions","Lowest common multiples","Factorising expressions"],obj:["Add and subtract algebraic fractions","Multiply and divide algebraic fractions","Give fully simplified answers"]},

{u:"14",unit:"Equations",id:"14.1",title:"Construct expressions, equations and formulae",type:"forming",src:"Morrison & Hamshaw pp. 42–43 Ex 2.1",prior:["Algebraic notation","Collecting like terms","Translating words into symbols"],obj:["Form expressions from contexts","Construct linear and quadratic equations","Create formulae from relationships"]},
{u:"14",unit:"Equations",id:"14.2",title:"Solve linear equations in one unknown",type:"linear",src:"Morrison & Hamshaw p.185 Ex 6.1; pp.756–760 Ex 22.1–22.2",prior:["Inverse operations","Expanding brackets","Collecting like terms"],obj:["Solve equations with unknowns on one side","Solve equations with brackets and unknowns on both sides","Form and solve linear equations from problems"]},
{u:"14",unit:"Equations",id:"14.3",title:"Solve quadratic equations",type:"quadratic",src:"Morrison & Hamshaw p.330 Ex 10.12; p.455 Ex 14.8; pp.458–459 Ex 14.9",prior:["Factorising quadratics","Square roots","Substitution"],obj:["Solve by factorisation","Complete the square","Use the quadratic formula","Interpret exact surd solutions"]},
{u:"14",unit:"Equations",id:"14.4",title:"Solve fractional equations",type:"fractional-eq",src:"Morrison & Hamshaw p.185 Ex 6.1 Q5–7; p.330 Ex 10.12 Q2",prior:["Algebraic fractions","Lowest common multiples","Linear equations"],obj:["Clear numerical denominators","Clear linear algebraic denominators","Check solutions against restrictions"]},
{u:"14",unit:"Equations",id:"14.5",title:"Solve simultaneous linear equations",type:"simultaneous-linear",src:"Morrison & Hamshaw pp.430–439 Ex 14.1–14.2",prior:["Linear equations","Substitution","Coordinate graphs"],obj:["Solve by elimination","Solve by substitution","Interpret graphical intersections","Form simultaneous equations from contexts"]},
{u:"14",unit:"Equations",id:"14.6",title:"Linear and non-linear simultaneous equations",type:"simultaneous-nonlinear",src:"Morrison & Hamshaw p.607 Ex 18.6",prior:["Simultaneous equations","Quadratic equations","Substitution"],obj:["Substitute a linear equation into a quadratic relation","Find all valid solution pairs","Check solutions in both equations"]},
{u:"14",unit:"Equations",id:"14.7",title:"Change the subject of formulae",type:"rearrange",src:"Morrison & Hamshaw p.190 Ex 6.3; pp.765–766 Ex 22.4–22.5",prior:["Inverse operations","Factorising","Powers and roots"],obj:["Rearrange one-step and multi-step formulae","Handle the subject appearing twice","Handle powers and roots of the subject"]},

{u:"15",unit:"Inequalities",id:"15.1",title:"Represent and interpret inequalities",type:"ineq-numberline",src:"Morrison & Hamshaw p.441 Ex 14.3",prior:["Ordering numbers","Number lines","Inequality symbols"],obj:["Interpret <, >, ≤ and ≥","Represent inequalities on a number line","Write inequalities from number-line diagrams"]},
{u:"15",unit:"Inequalities",id:"15.2",title:"Construct, solve and interpret linear inequalities",type:"ineq-linear",src:"Morrison & Hamshaw p.444 Ex 14.4",prior:["Linear equations","Negative numbers","Number lines"],obj:["Solve linear inequalities","Reverse the sign when multiplying/dividing by a negative","Solve compound inequalities"]},
{u:"15",unit:"Inequalities",id:"15.3",title:"Graph linear inequalities in two variables",type:"ineq-graph",src:"Morrison & Hamshaw pp.449–452 Ex 14.5–14.6",prior:["Straight-line graphs","Coordinates","Testing points"],obj:["Draw boundary lines accurately","Use solid and dashed boundaries correctly","Shade the correct half-plane"]},
{u:"15",unit:"Inequalities",id:"15.4",title:"List inequalities defining a region",type:"ineq-region",src:"Syllabus-linked extension of Ex 14.5–14.6",prior:["Graphing inequalities","Equation of a line","Region shading"],obj:["Identify each boundary equation","Choose the correct inequality sign","Describe a region using several inequalities"]},

{u:"16",unit:"Geometry of shapes",id:"16.1",title:"Angles and geometric reasoning",type:"angles",src:"Morrison & Hamshaw pp.82–83 Ex 3.3",prior:["Angle types","Triangle and quadrilateral names","Three-letter angle notation"],obj:["Use angles at a point and on a line","Use vertically opposite angles","Use triangle and quadrilateral angle sums","Give correct geometric reasons"]},
{u:"16",unit:"Geometry of shapes",id:"16.2",title:"Angles in parallel lines",type:"parallel",src:"Morrison & Hamshaw pp.84–85 Ex 3.4",prior:["Straight-line angles","Vertically opposite angles","Parallel line notation"],obj:["Identify corresponding angles","Identify alternate angles","Use co-interior angles","Give a reason at each step"]},
{u:"16",unit:"Geometry of shapes",id:"16.3",title:"Angle properties of polygons",type:"polygons",src:"Morrison & Hamshaw pp.90–94 Ex 3.5–3.6",prior:["Triangle angle sum","Regular polygons","Exterior angles"],obj:["Find interior angle sums","Find interior and exterior angles of regular polygons","Solve problems involving irregular polygons"]},
{u:"16",unit:"Geometry of shapes",id:"16.4",title:"Line and rotational symmetry",type:"symmetry2d",src:"Morrison & Hamshaw pp.644–647 Ex 19.1–19.2",prior:["Properties of common polygons","Transformations","Circle properties"],obj:["Identify lines of symmetry","State order of rotational symmetry","Link symmetry to shape properties"]},
{u:"16",unit:"Geometry of shapes",id:"16.5",title:"Symmetry of 3D solids",type:"symmetry3d",src:"Morrison & Hamshaw pp.649–651 Ex 19.3–19.4",prior:["Names of prisms, pyramids and cones","2D symmetry","Cross-sections"],obj:["Identify planes of symmetry","Identify axes of rotational symmetry","Reason about prisms, cylinders, pyramids and cones"]},

{u:"17",unit:"Mensuration 1",id:"17.1",title:"Metric units and conversions",type:"units",src:"Morrison & Hamshaw pp.403–404 Ex 13.1 Q1–5",prior:["Metric prefixes","Multiplying by powers of ten","Area and volume units"],obj:["Convert length and mass units","Convert square and cubic units","Convert capacity and volume"]},
{u:"17",unit:"Mensuration 1",id:"17.2",title:"Perimeter and area of 2D shapes",type:"area",src:"Morrison & Hamshaw pp.198–201 Ex 7.1",prior:["Rectangle and triangle area","Algebraic substitution","Units"],obj:["Find perimeter and area of rectangles, triangles, parallelograms and trapezia","Work backwards from area","Solve compound-shape problems"]},
{u:"17",unit:"Mensuration 1",id:"17.3",title:"Circumference and area of circles",type:"circle",src:"Morrison & Hamshaw pp.204–207 Ex 7.2–7.3",prior:["Radius and diameter","Using π","Substitution"],obj:["Use C=2πr and C=πd","Use A=πr²","Give exact and rounded answers"]},
{u:"17",unit:"Mensuration 1",id:"17.4",title:"Arc length and sector area",type:"sector",src:"Morrison & Hamshaw pp.209–212 Ex 7.4",prior:["Circle formulae","Fractions of 360°","Proportion"],obj:["Find minor and major arc lengths","Find sector areas","Work backwards to find angles or radii"]},

{u:"18",unit:"Statistical measures",id:"18.1",title:"Classify and tabulate statistical data",type:"tables",src:"Morrison & Hamshaw pp.111–123 Ex 4.1, 4.2, 4.3, 4.5",prior:["Categories and frequencies","Counting accurately","Reading tables"],obj:["Classify categorical and numerical data","Complete tally and frequency tables","Complete and interpret two-way tables"]},
{u:"18",unit:"Statistical measures",id:"18.2",title:"Mean, median, mode, quartiles and spread",type:"averages",src:"Morrison & Hamshaw pp.370–371 Ex 12.1",prior:["Ordering data","Arithmetic mean","Range"],obj:["Calculate measures of centre","Calculate quartiles, range and IQR","Choose an appropriate summary measure"]},
{u:"18",unit:"Statistical measures",id:"18.3",title:"Estimate the mean from grouped data",type:"grouped-mean",src:"Morrison & Hamshaw pp.378–386 Ex 12.3–12.5",prior:["Class intervals","Midpoints","Weighted mean"],obj:["Find class midpoints","Calculate fx","Estimate the mean from grouped data"]},
{u:"18",unit:"Statistical measures",id:"18.4",title:"Identify the modal and median class",type:"modalclass",src:"Syllabus extension alongside grouped-data exercises",prior:["Grouped frequency tables","Cumulative frequency","Mode and median"],obj:["Identify the modal class","Locate the class containing the median","Explain why grouped answers are approximate"]},
{u:"18",unit:"Statistical measures",id:"18.5",title:"Read and interpret tables",type:"data-interpret",src:"Morrison & Hamshaw pp.373–374 Ex 12.2",prior:["Percentages","Averages","Frequency tables"],obj:["Extract information accurately","Compare categories and totals","Make evidence-based statements"]},
{u:"18",unit:"Statistical measures",id:"18.6",title:"Compare sets of data using measures",type:"data-compare",src:"Syllabus-linked statistical comparison practice",prior:["Mean and median","Range and IQR","Contextual interpretation"],obj:["Compare averages","Compare spread","Write balanced comparison statements"]},
{u:"18",unit:"Statistical measures",id:"18.7",title:"Restrictions on drawing conclusions",type:"data-limits",src:"Syllabus-linked interpretation practice",prior:["Samples and populations","Bias","Measures of centre"],obj:["Spot limitations in data","Distinguish association from proof","Write cautious statistical conclusions"]},

{u:"19",unit:"Statistical diagrams, graphs and charts",id:"19.1",title:"Bar charts, pie charts, pictograms and stem-and-leaf",type:"charts",src:"Morrison & Hamshaw pp.120–139 Ex 4.4, 4.7–4.10",prior:["Angles in a circle","Frequency tables","Scale reading"],obj:["Draw common statistical diagrams","Use a key and sensible scale","Interpret and compare displays"]},
{u:"19",unit:"Statistical diagrams, graphs and charts",id:"19.2",title:"Draw and interpret scatter diagrams",type:"scatter",src:"Morrison & Hamshaw pp.537–540 Ex 16.1",prior:["Coordinates","Scale choice","Bivariate data"],obj:["Plot paired data accurately","Describe the pattern","Identify outliers"]},
{u:"19",unit:"Statistical diagrams, graphs and charts",id:"19.3",title:"Positive, negative and zero correlation",type:"correlation",src:"Linked to Morrison & Hamshaw Ex 16.1",prior:["Scatter diagrams","Variables","Trend"],obj:["Classify correlation","Describe strength cautiously","Explain that correlation does not prove causation"]},
{u:"19",unit:"Statistical diagrams, graphs and charts",id:"19.4",title:"Line of best fit",type:"bestfit",src:"Linked to Morrison & Hamshaw Ex 16.1",prior:["Scatter diagrams","Straight lines","Interpolation"],obj:["Draw a sensible line of best fit","Estimate values by interpolation","Recognise unreliable extrapolation"]},
{u:"19",unit:"Statistical diagrams, graphs and charts",id:"19.5",title:"Cumulative frequency tables and diagrams",type:"cumfreq",src:"Morrison & Hamshaw pp.686–692 Ex 20.2–20.3",prior:["Grouped data","Running totals","Coordinate plotting"],obj:["Complete cumulative frequencies","Plot upper class boundaries","Draw a smooth cumulative frequency curve"]},
{u:"19",unit:"Statistical diagrams, graphs and charts",id:"19.6",title:"Median, quartiles and percentiles from cumulative frequency",type:"cumfreq-read",src:"Morrison & Hamshaw pp.686–692 Ex 20.2–20.3",prior:["Cumulative frequency curves","Quartiles","Percentages"],obj:["Read median and quartiles","Estimate percentiles","Calculate and interpret IQR"]},
{u:"19",unit:"Statistical diagrams, graphs and charts",id:"19.7",title:"Draw and interpret histograms",type:"histogram",src:"Morrison & Hamshaw pp.676–679 Ex 20.1",prior:["Grouped continuous data","Class width","Area of rectangles"],obj:["Calculate frequency density","Draw unequal-width histogram bars","Recover frequencies from a histogram"]},
{u:"19",unit:"Statistical diagrams, graphs and charts",id:"19.8",title:"Calculate with frequency density",type:"freqdensity",src:"Morrison & Hamshaw pp.676–679 Ex 20.1",prior:["Histogram area","Frequency density","Class width"],obj:["Use density = frequency ÷ class width","Find missing frequencies","Find missing class widths"]},
{u:"19",unit:"Statistical diagrams, graphs and charts",id:"19.9",title:"Infer from statistical diagrams",type:"chart-infer",src:"Morrison & Hamshaw pp.378–379 Ex 12.3 Q6–7 plus chart work",prior:["Reading scales","Averages and spread","Chart types"],obj:["Read values accurately","Make supported inferences","Avoid claims not justified by the display"]},
{u:"19",unit:"Statistical diagrams, graphs and charts",id:"19.10",title:"Compare sets of data using graphs",type:"graph-compare",src:"Syllabus-linked graph comparison practice",prior:["Median and IQR","Cumulative frequency","Histograms"],obj:["Compare centre and spread from graphs","Comment on shape and consistency","Use numerical evidence"]},
{u:"19",unit:"Statistical diagrams, graphs and charts",id:"19.11",title:"Restrictions on conclusions from graphs",type:"graph-limits",src:"Syllabus-linked interpretation practice",prior:["Misleading graphs","Sampling","Correlation"],obj:["Identify misleading scales or samples","Recognise extrapolation risk","Write qualified conclusions"]},

{u:"20",unit:"Functions",id:"20.1",title:"Functions, domain, range and notation",type:"functions",src:"Morrison & Hamshaw pp.772–773 Ex 22.6",prior:["Substitution","Mappings","Set notation"],obj:["Use f(x) notation","Evaluate functions","Identify domain and range"]},
{u:"20",unit:"Functions",id:"20.2",title:"Inverse functions",type:"inverse",src:"Morrison & Hamshaw pp.777–778 Ex 22.8",prior:["Function notation","Rearranging formulae","One-to-one mappings"],obj:["Find f⁻¹(x) algebraically","Check by composition","Interpret inverse mappings"]},
{u:"20",unit:"Functions",id:"20.3",title:"Composite functions",type:"composite",src:"Morrison & Hamshaw p.775 Ex 22.7",prior:["Function notation","Substitution","Order of operations"],obj:["Evaluate gf(x)=g(f(x))","Form composite expressions","Distinguish fg from gf"]},

{u:"21",unit:"Sets",id:"21.1",title:"Set language, notation and Venn diagrams",type:"sets",src:"Morrison & Hamshaw pp.286–295 Ex 9.10–9.13",prior:["Basic set notation","Factors and multiples","Probability language"],obj:["Use ∪, ∩, complement and subset notation","Complete two- and three-set Venn diagrams","Apply De Morgan relationships"]},

{u:"22",unit:"Proportion",id:"22.1",title:"Direct and inverse proportion",type:"proportion",src:"Morrison & Hamshaw pp.747–749 Ex 21.12",prior:["Ratio","Powers and roots","Solving equations"],obj:["Model direct proportion","Model inverse proportion","Use square, cube and root relationships","Find constants and unknown quantities"]}
];
})();

/* ===== sow-map.js ===== */
(function(){
window.SOW_MAP={
  "12.1": {
    "objective": "Understand and use surds, including simplifying expressions.",
    "notes": "",
    "teaching": "The ‘Surds’ exercise on www.mathsisfun.com can be used to reinforce the concept of a surd and give learners some quick practice. It can be used either as a starter activity with an advanced group, or as a teacher-led activity with a group that needs more support. It is important that students understand algebraically as well as numerically that √a ×√b= √ab and vice versa, and also that √a / √b = √a / b and vice versa. Some of the activities in Manipulating Surds, a resource from the UK Department for Education’s Standards Unit, are also suitable.",
    "textbook": "pages 276-277 Ex 9.7 pages 281-282 Ex 9.8 (Qu 1-4)"
  },
  "12.2": {
    "objective": "Rationalise the denominator.",
    "notes": "",
    "teaching": "It is helpful to explain to students that rationalising the denominator is a new skill and is a mathematical convention. An effective start to this topic is revising the difference of two squares to show why, for example 1+√3 is the multiplier to use to rationalise 1-√3. Students need to appreciate that multiplying both the numerator and the denominator by the ‘same’ number with opposite sign (‘the square root conjugate’) means that the original expression is being multiplied by a strategic form of 1 and therefore identity is maintained. BBC Bitesize website has a good summary of the properties of surds.",
    "textbook": "pages 282-283 Ex 9.8 (Qu 5-7) page 284 Ex 9.9"
  },
  "13.1": {
    "objective": "Factorise and simplify rational expressions.",
    "notes": "",
    "teaching": "This unit builds on the work on factorising that was covered in Unit 8 Algebraic manipulations. A good consolidation task, 'Simplifying Rational Expressions,’ is at kutasoftware.com.",
    "textbook": "pages 464-465 Ex 14.13 pages 466-467 Ex 14.14"
  },
  "13.2": {
    "objective": "Manipulate algebraic fractions.",
    "notes": "",
    "teaching": "It is worth linking this work on simplifying rational expressions to the work on using the four rules with algebraic fractions, so that students always give the most simplified answer.",
    "textbook": "pages 462-463 Ex 14.12"
  },
  "14.1": {
    "objective": "Construct expressions, equations and formulas.",
    "notes": "e.g. write an expression for the product of two consecutive even numbers. Includes constructing simultaneous equations and quadratic equations. Cover the construction of equations in the other subunits of this unit: constructing linear equations: 14.2 and 14.3, constructing simultaneous equations: 14.4, constructing quadratic equations: 14.6. Cover the construction of formulas in the subunit 14.7.",
    "teaching": "A good start is to ask students to invent a ‘think of a number’ puzzle, for example, think of a number, add 7, double your answer, etc. It can be extended to using algebra to help students create a puzzle that always gives a certain answer. Don Stewart has collated some word puzzles that can be solved by forming equations. ‘Performing Number Magic’, a resource from the UK Department for Education’s Standards Unit, asks students to analyse simple number 'tricks', and then use algebra to explain how they work, before going on to create their own ‘tricks’.",
    "textbook": "Writing expressions page 42-43 Ex 2.1"
  },
  "14.2": {
    "objective": "Solve linear equations in one unknown.",
    "notes": "Examples include: • 3x + 4 = 10 • 5 – 2x = 3(x + 7). Include exercises where students need to construct their own linear equations from information given and then solve them to find the unknown quantity.",
    "teaching": "As a starter, revise how to solve simple linear equations, including those with negatives, for example, 3x + 2 = –1. Also include examples showing how to solve linear equations with brackets, such as 5(x + 4) = 3(x + 10).",
    "textbook": "Solving equations page 185 Ex 6.1 Qu 1-3 Forming equations pages 756-757 Ex 22.1 pages 759-760 Ex 22.2"
  },
  "14.3": {
    "objective": "Solve quadratic equations by factorisation, completing the square and by use of the quadratic formula.",
    "notes": "Includes writing a quadratic expression in completed square form. Candidates may be expected to give solutions in surd form. The quadratic formula is given in the List of formulas. Include exercises in which students construct their own quadratic equations from given information and then solve them to find the unknown quantity.",
    "teaching": "The Maths is Fun website (www.mathsisfun.com) has a good explanation of completing the square that uses multiple representations to help reinforce students’ understanding of the process.",
    "textbook": "Solving quadratic equations y factorising page 330 Ex 10.12 Qu 1 Solving quadratic equations by completing the square page 455 Ex 14.8 Qu 2 and 3 Solving quadratic equations by using the quadratic formula pages 458-459 Ex 14.9 Forming equations page 762-763 Ex 22.3"
  },
  "14.4": {
    "objective": "Solve fractional equations with numerical and linear algebraic denominators.",
    "notes": "",
    "teaching": "",
    "textbook": "page 185 Ex 6.1 Qu 5-7 page 330 Ex 10.12 Qu 2"
  },
  "14.5": {
    "objective": "Solve simultaneous linear equations in two unknowns.",
    "notes": "Include exercises in which students construct their own simultaneous equations from given information and then solve them to find the unknown quantity or quantities. Include examples to illustrate how to solve simultaneous linear equations with two unknowns by elimination, substitution and finding approximate solutions using graphical methods (linking to Unit 9).",
    "teaching": "A good introduction to simultaneous equations is to use a non-algebraic approach that builds on students’ informal approaches to real-life problems. For example, 3 coffees and 2 teas cost $6.50, and 5 coffees and 2 teas cost $9.50. Show students how the simultaneous equation from these statements can be formed and emphasise that the cost of tea and coffee does not change. It is important for students to understand that to solve problems that involve two unknowns, it is necessary for them to have two equations. The aim of solving simultaneous equations is to remove one of the unknowns – then they can approach the problem using what they already know about solving simple linear equations in one unknown. Some of the software packages that can be used are Desmos or GeoGebra Graphing Calculator to allow students to explore the solutions of simultaneous equations graphically. More able students can be challenged to apply these skills to solve three-variable problems. Don Steward has some three- variable problems.",
    "textbook": "Graphical solution page 430-431 Ex 14.1 Solving by substitution or elimination pages 437-438 Ex 14.2 Qu 1-5 Forming simultaneous equations page 439 Ex 14.2 Qu 6-8"
  },
  "14.6": {
    "objective": "Solve simultaneous equations, involving one linear and one non-linear.",
    "notes": "With powers no higher than two.",
    "teaching": "",
    "textbook": "page 607 Ex 18.6"
  },
  "14.7": {
    "objective": "Change the subject of formulas.",
    "notes": "e.g. change the subject of a formula where: • the subject appears twice, • there is a power or root of the subject. Include exercises in which students construct their own formulas from given information and then use them to find the unknown quantity.",
    "teaching": "",
    "textbook": "page 190 Ex 6.3 pages 765-766 Ex 22.4 Unknown on both sides page 766 Ex 22.5"
  },
  "15.1": {
    "objective": "Represent and interpret inequalities, including on a number line.",
    "notes": "",
    "teaching": "GeoGebra can be used to create interactive activities for students to explore and demonstrate their understanding of inequalities on a number line. Other resources can be found ion the GeoGebra website by searching for’ inequalities on a number line’.",
    "textbook": "page 441 Ex 14.3"
  },
  "15.2": {
    "objective": "Construct, solve and interpret linear inequalities.",
    "notes": "Examples include: • 3x < 2x + 4 • –3 ⩽ 3x – 2 < 7 .",
    "teaching": "",
    "textbook": "page 444 Ex 14.4"
  },
  "15.3": {
    "objective": "Represent and interpret linear inequalities in two variables graphically.",
    "notes": "",
    "teaching": "",
    "textbook": "pages 449-450 Ex 14.5 pages 451-452 Ex 14.6"
  },
  "15.4": {
    "objective": "List inequalities that define a given region.",
    "notes": "Linear programming problems are not included.",
    "teaching": "",
    "textbook": ""
  },
  "16.1": {
    "objective": "Calculate unknown angles and give simple explanations using the following geometrical properties: • sum of angles at a point = 360° • sum of angles at a point on a straight line = 180° • vertically opposite angles are equal • angle sum of a triangle = 180° and angle sum of a quadrilateral = 360°.",
    "notes": "Includes the following geometrical terms: • point • line • perpendicular • right angle • acute, obtuse and reflex angles • equilateral triangle • isosceles triangle • scalene triangle • right-angled triangle • square • rectangle • kite • rhombus • parallelogram • trapezium Knowledge of 3-letter notation for angles is required, e.g. angle ABC. Candidates are expected to use the correct geometrical terminology when giving reasons for answers.",
    "teaching": "Flashcards at Quizlet can be used to look at the geometrical terminology. It has all the terminology and can be revisited at various stages over the IGCSE course.",
    "textbook": "pages 82-83 Ex 3.3"
  },
  "16.2": {
    "objective": "Calculate unknown angles and give geometric explanations for angles formed within parallel lines: • corresponding angles are equal • alternate angles are equal • co-interior angles sum to 180° (supplementary).",
    "notes": "Includes the following geometrical terms: • parallel",
    "teaching": "",
    "textbook": "pages 84-85 Ex 3.4"
  },
  "16.3": {
    "objective": "Know and use angle properties of regular and irregular polygons.",
    "notes": "Includes the following geometrical terms: • interior and exterior angles • regular and irregular polygons • pentagon • hexagon • octagon • decagon • concave and convex polygons Includes exterior and interior angles, and angle sum.",
    "teaching": "A challenging problem involving two polygons is at NRICH website. The topic can be extended by students considering which regular polygons will tessellate, based on the sizes of their interior angles using an interactive tessellation tool from NRICH. Alternatively, they investigate convex polygons, for example consider how many acute angles are possible. Convex polygons from NRICH.",
    "textbook": "pages 90-91 Ex 3.5 page 94 Ex 3.6"
  },
  "16.4": {
    "objective": "Recognise line symmetry and order of rotational symmetry in two dimensions.",
    "notes": "Includes properties of triangles, quadrilaterals and polygons directly related to their symmetries. Includes the infinite symmetry properties of a circle.",
    "teaching": "Some ‘odd-one-out’ activities lend themselves well to this topic. Students compare and contrast the properties of shapes related to their symmetries. An example of this type of activity is Classifying Shapes SS1 from STEM website.",
    "textbook": "pages 644-645 Ex 19.1 page 647 Ex 19.2"
  },
  "16.5": {
    "objective": "Recognise symmetry properties of prisms, cylinders, pyramids and cones.",
    "notes": "e.g. identify planes and axes of symmetry. Includes the following geometrical terms: • plane • cube • cuboid • prism • cylinder • pyramid • cone",
    "teaching": "",
    "textbook": "pages 649-650 Ex 19.3 page 651 Ex 19.4"
  },
  "17.1": {
    "objective": "Use metric units of mass, length, area, volume and capacity in practical situations and convert quantities into larger or smaller units.",
    "notes": "Units include: • mm, cm, m, km • mm², cm², m², km² • mm³, cm³, m³ • ml, l • g, kg. Conversion between units includes: • between different units of area, e.g. cm² ↔ m² • between units of volume and capacity, e.g. m³ ↔ litres.",
    "teaching": "",
    "textbook": "pages 403-404 Ex 13.1 Qu 1-5"
  },
  "17.2": {
    "objective": "Carry out calculations involving the perimeter and area of a rectangle, triangle, parallelogram and trapezium.",
    "notes": "Except for the area of a triangle, formulas are not given.",
    "teaching": "An interesting investigation is to look at using isometric dot paper to find the area of shapes that have a perimeter of 5, 6, 7, ... , units. Another good activity is to ask students to find out what shape quadrilateral has the largest area when the perimeter is, for example 24 cm.",
    "textbook": "pages 198-201 Ex 7.1"
  },
  "17.3": {
    "objective": "Carry out calculations involving the circumference and area of a circle.",
    "notes": "Answers may be asked for in terms of π. Formulas are given in the List of formulas. Includes the following geometrical terms: • centre • radius (plural radii) • diameter • circumference",
    "teaching": "",
    "textbook": "pages 204-205 Ex 7.2 page 207 Ex 7.3"
  },
  "17.4": {
    "objective": "Carry out calculations involving arc length and sector area as fractions of the circumference and area of a circle.",
    "notes": "Includes minor and major sectors. Includes the following geometrical terms: • semicircle • major and minor arc • sector",
    "teaching": "The Khan academy website includes a good explanation and questions on arc length and sector area: Arc length Area of a sector The quiz for arc length includes challenge questions to check students’ understanding.",
    "textbook": "pages 209-212 Ex 7.4"
  },
  "18.1": {
    "objective": "Classify and tabulate statistical data.",
    "notes": "e.g. tally tables, two-way tables.",
    "teaching": "",
    "textbook": "pages 111-112 Ex 4.1 pages 114-115 Ex 4.2 page 117 Ex 4.3 pages 122-123 Ex 4.5"
  },
  "18.2": {
    "objective": "Calculate the mean, median, mode, quartiles, range and interquartile range for individual data and distinguish between the purposes for which these are used.",
    "notes": "",
    "teaching": "This simple example can be used to highlight how these averages may be used. For example, in a discussion about average salaries, the owner of a company with a few highly paid managers and a large workforce may wish to quote the mean wage rather than the median. ‘Mean, median and mode’ notes at www.savemyexams.com have examples of when to use the different averages for different situations. The ‘Life Expectancy’ PowerPoint and resources on the Gapminder website can be used to explore averages in a topical real-life situation. Don Steward has an interesting challenge where students decide which of two poems is easier to read.",
    "textbook": "pages 370-371 Ex 12.1"
  },
  "18.3": {
    "objective": "Calculate an estimate of the mean for grouped discrete or grouped continuous data.",
    "notes": "",
    "teaching": "A good explanation of how to estimate the mean for grouped data, including identifying the modal class is at www.mathsisfun.com. A good investigation is to look at the differences between calculating the mean from a list of values and using the same data in different grouped frequency distributions to estimate the mean.",
    "textbook": "pages 378-379 Ex 12.3 Qu 1-5 pages 382-383 Ex 12.4 page 386 Ex 12.5"
  },
  "18.4": {
    "objective": "Identify the modal class from a grouped frequency distribution.",
    "notes": "There is nothing mentioned in the syllabus about identifying the class containing the median; however, such questions do occur in the examinations.",
    "teaching": "More able learners could be introduced to the concept of linear interpolation.",
    "textbook": ""
  },
  "18.5": {
    "objective": "Read, interpret and draw inferences from tables.",
    "notes": "Note: Subunits 18.5, 18.6 and 18.7 deal with interpreting statistical data from tables. They are revisited in Unit 19, where they deal with interpreting statistical data from statistical diagrams.",
    "teaching": "",
    "textbook": "pages 373-374 Ex 12.2"
  },
  "18.6": {
    "objective": "Compare sets of data using tables and statistical measures.",
    "notes": "e.g. compare averages and measures of spread between two data sets.",
    "teaching": "The Gapminder website offers some interesting ways of displaying data and provides access to a wide range of data sets. Students can search for more data sets to compare in the media.",
    "textbook": ""
  },
  "18.7": {
    "objective": "Appreciate restrictions on drawing conclusions from given data.",
    "notes": "",
    "teaching": "Further discussions can take place around how this data is represented. Is it designed to be informative, or to deliver a particular message, or to sell something?",
    "textbook": ""
  },
  "19.1": {
    "objective": "Draw and interpret: (a) bar charts (b) pie charts (c) pictograms (d) stem-and-leaf diagrams (e) simple frequency distributions.",
    "notes": "Includes composite (stacked) and dual (side-by- side) bar charts. Stem-and-leaf diagrams should have ordered data with a key.",
    "teaching": "One activity is to investigate the length of words used in two different newspapers and present the findings using statistical diagrams (links to newspapers are at onlinenewspapers.com)",
    "textbook": "stem and leaf page 120 Ex 4.4 pictograms pages 126-127 Ex 4.7 bar charts pages 131-132 Ex 4.8 pie charts pages 135-136 Ex 4.9 line graphs pages 138-139 Ex 4.10"
  },
  "19.2": {
    "objective": "Draw and interpret scatter diagrams.",
    "notes": "Plotted points should be clearly marked, for example, as small crosses (×).",
    "teaching": "Students can collect some bivariate data of their choice and to predict the correlation, if any, that they expect to find, for example, height and arm span for members of the class. Use collected data to draw a scatter diagram and then look for the expected correlation. Discuss the results.",
    "textbook": "pages 537-540 Ex 16.1"
  },
  "19.3": {
    "objective": "Understand what is meant by positive, negative and zero correlation.",
    "notes": "",
    "teaching": "Students should understand that a correlation does not prove cause and effect it just provides evidence to support a potential relationship and/or identify an area for further research. For example, a third unidentified variable may be causing the apparent correlation.",
    "textbook": ""
  },
  "19.4": {
    "objective": "Draw by eye, interpret and use a straight line of best fit.",
    "notes": "A line of best fit: • should be a single ruled line drawn by inspection • should extend across the full data set • does not need to coincide exactly with any of the points but there should be a roughly even distribution of points either side of the line over its entire length.",
    "teaching": "Extend the work with more able students finding equations for their line of best fit. If using data from e.g. their science experiments this could be interpreted in terms of the two variables.",
    "textbook": ""
  },
  "19.5": {
    "objective": "Draw and interpret cumulative frequency tables and diagrams.",
    "notes": "Plotted points on a cumulative frequency diagram should be clearly marked, for example as small crosses (×), and be joined with a smooth curve.",
    "teaching": "Students can be challenged to consider how cumulative frequency data can be used to estimate probabilities. Why would this only be an estimate? How reliable would the estimate be?",
    "textbook": "pages 686-687 Ex 20.2 pages 690-692 Ex 20.3"
  },
  "19.6": {
    "objective": "Estimate and interpret the median, percentiles, quartiles and interquartile range from cumulative frequency diagrams.",
    "notes": "",
    "teaching": "The STEM learning website can be used to display the median, percentiles, quartiles and inter-quartile range.",
    "textbook": ""
  },
  "19.7": {
    "objective": "Draw and interpret histograms.",
    "notes": "On histograms, the vertical axis is labelled ‘Frequency density’. Frequency density is defined as frequency density = frequency ÷ class width.",
    "teaching": "",
    "textbook": "pages 676-679 Ex 20.1"
  },
  "19.8": {
    "objective": "Calculate with frequency density.",
    "notes": "",
    "teaching": "",
    "textbook": ""
  },
  "19.9": {
    "objective": "Read, interpret and draw inferences from statistical diagrams.",
    "notes": "Subunits 19.9, 19.10, and 19.11 have already been introduced in Unit 18 with tables and statistical measures. In this unit, they are applied to statistical diagrams. They can be covered either separately or as parts of the relevant subunits: 19.1, 19.2, 19.5 and 19. 7",
    "teaching": "‘Interpreting Bar Charts, Pie Charts, Box and Whisker Plots S5’ on the STEM learning website gives students the opportunity to interpret bar charts and pie charts, and helps them appreciate the benefits and limitations of these representations. The second part of the resource also compares box-and-whisker plots.",
    "textbook": "stem and leaf pages 378-379 Ex 12.3 Qu 6 and 7"
  },
  "19.10": {
    "objective": "Compare sets of data using graphs.",
    "notes": "",
    "teaching": "",
    "textbook": ""
  },
  "19.11": {
    "objective": "Appreciate restrictions on drawing conclusions from given data.",
    "notes": "",
    "teaching": "",
    "textbook": ""
  },
  "20.1": {
    "objective": "Understand functions, domain and range and use function notation.",
    "notes": "",
    "teaching": "",
    "textbook": "pages 772-773 Ex 22.6"
  },
  "20.2": {
    "objective": "Understand and find inverse functions f ⁻¹(x).",
    "notes": "",
    "teaching": "The video ‘Finding inverse functions: linear’ on the Khan academy website talks about what the graph of an inverse function looks like. Knowing that the graph of an inverse function is a reflection in the line y = x is a useful extension for more able students. It is useful to allow students to investigate or research functions to find examples where the inverse function does not work for all values.",
    "textbook": "pages 777-778 Ex 22.8"
  },
  "20.3": {
    "objective": "Form composite functions as defined by gf(x) = g(f(x)).",
    "notes": "",
    "teaching": "",
    "textbook": "page 775 Ex 22.7"
  },
  "21.1": {
    "objective": "Understand and use set language, notation and Venn diagrams to describe sets and represent relationships between sets.",
    "notes": "",
    "teaching": "It is useful to show students that (A ⋃ B) ٰ is the same as A ٰ⋂ B ٰ and that (A ⋂ B) ٰ is the same as A ٰ ⋃ B ٰ. The work on Venn Diagrams can be extended to look at unions and intersections when there are three sets.",
    "textbook": "page 286 Ex 9.10 page 288 Ex 9.11 page 291-292 Ex 9.12 page 294-295 Ex 9.13"
  },
  "22.1": {
    "objective": "Express direct and inverse proportion in algebraic terms and use this form of expression to find unknown quantities.",
    "notes": "Includes linear, square, square root, cube and cube root proportion. Knowledge of proportional symbol (∝) is required.",
    "teaching": "It is a good practice for the students to use efficient notation that moves from the question to each step in turn. For example, • y varies directly with x (or y is directly proportional to x) to y ∝ x ⇒ y = kx • t varies inversely as the square of v to v ⇒ t ∝ 1/v² ⇒ t = k/v² where k is a constant.",
    "textbook": "pages 747-749 Ex 21.12"
  }
};

})();

/* ===== content-core.js ===== */
(function(){
window.LESSON_CONTENT = window.LESSON_CONTENT || {};
window.MathoraContent = {
  E(prompt, steps, opts={}) {
    return {prompt, steps, ...opts};
  },
  H(tier, prompt, steps) {
    return {tier, prompt, steps};
  },
  C(data) {
    return {
      explain: data.explain || "",
      keyPoints: data.keyPoints || [],
      rules: data.rules || [],
      method: data.method || [],
      mistakes: data.mistakes || [],
      vocab: data.vocab || [],
      examples: data.examples || [],
      practice: data.practice || {foundation:[],core:[],extension:[],reasoning:[]},
      homework: data.homework || [],
      cambridge: data.cambridge || "",
      examSuccess: data.examSuccess || "",
      sourceImages: data.sourceImages || []
    };
  }
};

})();

/* ===== content-12-17.js ===== */
(function(){
(()=>{
const {C,E,H}=window.MathoraContent, M=window.LESSON_CONTENT;

M["12.1"]=C({
 explain:"A surd is an irrational root left in exact form. The Coursebook develops the topic by moving from recognising square factors to simplifying, multiplying and collecting surds. Students should see surds as exact numbers, not as unfinished calculator answers.",
 keyPoints:["Use the largest square factor you can spot.","Only like surds can be added or subtracted.","Multiplication of square roots is different from addition of square roots.","Keep answers exact unless a decimal approximation is explicitly requested."],
 rules:[["[[\\sqrt{ab}=\\sqrt a\\,\\sqrt b]]","for non-negative a and b"],["[[\\sqrt{a/b}=\\frac{\\sqrt a}{\\sqrt b}]]","for b>0"],["[[a\\sqrt m+b\\sqrt m=(a+b)\\sqrt m]]","collect like surds"],["[[\\sqrt a+\\sqrt b\\ne\\sqrt{a+b}]]","common misconception"]],
 method:["Factor the number under the root into a square factor × the remaining factor.","Take the square root of the square factor outside the radical.","Simplify all surds before deciding whether terms are like.","For products, multiply coefficients and radicands separately, then simplify again."],
 mistakes:["Adding unlike surds as if they were like terms.","Using √a+√b=√(a+b).","Stopping before extracting all square factors."],
 vocab:["surd","exact form","radicand","square factor","like surds"],
 examples:[
  E("Simplify [[\\sqrt{72}]].",["[[72=36\\times2]]","[[\\sqrt{72}=\\sqrt{36}\\sqrt2]]","[[=6\\sqrt2]]"],{source:"Coursebook Ex 9.7 style"}),
  E("Simplify [[3\\sqrt{12}+2\\sqrt{27}]].",["[[\\sqrt{12}=2\\sqrt3]] and [[\\sqrt{27}=3\\sqrt3]]","[[3(2\\sqrt3)+2(3\\sqrt3)]]","[[=12\\sqrt3]]"]),
  E("A square has area [[98\\text{ cm}^2]]. Find its exact side length.",["Side [[=\\sqrt{98}]]","[[\\sqrt{98}=\\sqrt{49\\times2}=7\\sqrt2]]","Exact side length [[=7\\sqrt2\\text{ cm}]]"],{source:"textbook-style exact-value geometry"})
 ],
 practice:{
  foundation:["Simplify [[\\sqrt{12}]].","Simplify [[\\sqrt{45}]].","Simplify [[\\sqrt{80}]].","Simplify [[2\\sqrt{27}]].","Write [[3\\sqrt5]] in the form [[\\sqrt n]]."],
  core:["Simplify [[\\sqrt8+\\sqrt{18}]].","Simplify [[5\\sqrt{12}-2\\sqrt{27}]].","Simplify [[\\sqrt6\\times\\sqrt{24}]].","Expand [[\\sqrt3(4+\\sqrt{12})]].","Arrange [[2\\sqrt5,3\\sqrt2,\\sqrt{19}]] in ascending order without a calculator."],
  extension:["Simplify [[(2+\\sqrt5)(3-\\sqrt5)]].","Show that [[\\sqrt{48}-\\sqrt{27}=\\sqrt3]].","Find x if [[x\\sqrt7=\\sqrt{343}]].","A rectangle has sides [[3+\\sqrt{12}]] and [[2\\sqrt3]]. Find its exact perimeter.","Prove that [[\\sqrt{12}\\times\\sqrt{27}]] is rational."],
  reasoning:["A student writes [[\\sqrt8+\\sqrt{18}=\\sqrt{26}]]. Diagnose the error.","Create two unlike surds whose product is an integer.","Explain why [[4\\sqrt3]] is exact but 6.928... is approximate."]
 },
 homework:[
  H("Foundation","Simplify [[\\sqrt{75}]].",["[[75=25\\times3]]","[[\\sqrt{75}=5\\sqrt3]]"]),
  H("Foundation","Write [[2\\sqrt{11}]] as a single square root.",["[[2=\\sqrt4]]","[[2\\sqrt{11}=\\sqrt{44}]]"]),
  H("Core","Simplify [[4\\sqrt{18}-3\\sqrt8]].",["[[4\\sqrt{18}=12\\sqrt2]]","[[3\\sqrt8=6\\sqrt2]]","Answer [[6\\sqrt2]]"]),
  H("Core","Expand [[(3+\\sqrt2)(2-\\sqrt2)]].",["Expand: [[6-3\\sqrt2+2\\sqrt2-2]]","Collect: [[4-\\sqrt2]]"]),
  H("Extension","A square has perimeter [[20\\sqrt3]] cm. Find its exact area.",["Side [[=5\\sqrt3]]","Area [[=(5\\sqrt3)^2=75]]","[[75\\text{ cm}^2]]"]),
  H("Extension","Show [[3\\sqrt8+2\\sqrt{18}=12\\sqrt2]].",["[[3\\sqrt8=6\\sqrt2]]","[[2\\sqrt{18}=6\\sqrt2]]","Total [[12\\sqrt2]]"])
 ],
 cambridge:"Extended candidates should be comfortable with exact values and show clear algebraic working, including on the non-calculator paper.",
 examSuccess:"Use the Number chapter for exam-style exact-value questions and the Raise your grade prompts for reasoning."
});

M["12.2"]=C({
 explain:"Rationalising a denominator rewrites an equivalent fraction so that no surd remains in the denominator. The SoW specifically recommends linking this to the difference of two squares and explaining that the chosen multiplier is a strategic form of 1.",
 keyPoints:["For a single surd denominator, multiply by that surd.","For a two-term denominator, multiply by the conjugate.","The value of the expression is unchanged because numerator and denominator are multiplied by the same quantity.","Simplify the surd expression before and after rationalising."],
 rules:[["[[\\frac a{\\sqrt b}=\\frac{a\\sqrt b}{b}]]","single surd"],["[[(p+\\sqrt q)(p-\\sqrt q)=p^2-q]]","conjugates remove the surd"]],
 method:["Simplify any surds first.","Identify whether the denominator has one term or two.","Choose the matching rationalising factor.","Multiply numerator and denominator fully.","Simplify and cancel common factors."],
 mistakes:["Using the wrong conjugate sign.","Multiplying only the denominator.","Forgetting to simplify after rationalising."],
 vocab:["rational denominator","conjugate","difference of two squares","equivalent fraction"],
 examples:[
  E("Rationalise [[\\frac7{\\sqrt5}]].",["Multiply by [[\\frac{\\sqrt5}{\\sqrt5}]]","[[\\frac{7\\sqrt5}{5}]]"]),
  E("Rationalise [[\\frac4{3-\\sqrt5}]].",["Use conjugate [[3+\\sqrt5]]","Denominator [[(3-\\sqrt5)(3+\\sqrt5)=9-5=4]]","Numerator [[4(3+\\sqrt5)]]","Cancel 4: [[3+\\sqrt5]]"]),
  E("Write [[\\frac{2+\\sqrt3}{2-\\sqrt3}]] in the form [[a+b\\sqrt3]].",["Multiply by [[2+\\sqrt3]] over itself","Denominator [[4-3=1]]","Numerator [[(2+\\sqrt3)^2=7+4\\sqrt3]]"])
 ],
 practice:{
  foundation:["Rationalise [[3/\\sqrt2]].","Rationalise [[5/\\sqrt7]].","Rationalise [[2\\sqrt3/\\sqrt5]].","Simplify [[\\sqrt{45}/\\sqrt5]].","Rationalise [[1/(2+\\sqrt3)]]."],
  core:["Rationalise [[6/(3+\\sqrt2)]].","Rationalise [[5/(\\sqrt7-1)]].","Rationalise [[3/(2-\\sqrt5)]].","Simplify [[(2\\sqrt2+\\sqrt6)/\\sqrt2]].","Write [[(3+\\sqrt2)/(3-\\sqrt2)]] as [[a+b\\sqrt2]]."],
  extension:["Rationalise [[2/(\\sqrt7-\\sqrt5)]].","Show [[1/(\\sqrt5-2)=\\sqrt5+2]].","Evaluate exactly [[1/(2+\\sqrt3)+1/(2-\\sqrt3)]].","Rationalise [[(2\\sqrt3+1)/(\\sqrt3-1)]].","Explain why the conjugate always produces a rational denominator in these examples."],
  reasoning:["A student uses [[3-\\sqrt5]] to rationalise [[1/(3-\\sqrt5)]]. Explain why this is inefficient.","Find a fraction with denominator [[a+\\sqrt b]] whose rationalised form is an integer plus a surd."]
 },
 homework:[
  H("Foundation","Rationalise [[4/\\sqrt3]].",["Multiply by [[\\sqrt3/\\sqrt3]]","Answer [[4\\sqrt3/3]]"]),
  H("Foundation","Simplify [[\\sqrt{50}/\\sqrt2]].",["[[\\sqrt{50/2}=\\sqrt{25}=5]]"]),
  H("Core","Rationalise [[3/(2+\\sqrt3)]].",["Use [[2-\\sqrt3]]","Denominator [[=1]]","Answer [[6-3\\sqrt3]]"]),
  H("Core","Rationalise [[5/(4-\\sqrt7)]].",["Use [[4+\\sqrt7]]","Denominator [[16-7=9]]","Answer [[5(4+\\sqrt7)/9]]"]),
  H("Extension","Simplify [[(1+\\sqrt2)/(1-\\sqrt2)]].",["Multiply by [[1+\\sqrt2]]","Denominator [[-1]]","Numerator [[3+2\\sqrt2]]","Answer [[-3-2\\sqrt2]]"]),
  H("Extension","Evaluate [[1/(\\sqrt3-1)-1/(\\sqrt3+1)]].",["Combine over common denominator [[(3-1)=2]]","Numerator [[(\\sqrt3+1)-(\\sqrt3-1)=2]]","Answer [[1]]"])
 ],
 cambridge:"Use exact values and clear algebraic transformations. This topic is particularly suited to non-calculator reasoning.",
 examSuccess:"Pair with algebraic manipulation examples in Exam Success for concise exam-method presentation."
});

M["13.1"]=C({
 explain:"A rational expression is simplified by factorising numerator and denominator into products, then cancelling common factors. Cancellation is valid for factors, not for individual terms joined by addition or subtraction.",
 keyPoints:["Factorise before cancelling.","Keep restrictions from the original denominator.","A cancelled factor can still create an excluded value.","The final answer should be fully factorised or simplified as appropriate."],
 rules:[["[[\\frac{ab}{ac}=\\frac bc]]","when a≠0"],["[[x^2-a^2=(x-a)(x+a)]]","difference of two squares"]],
 method:["State excluded values from the original denominator if required.","Factor numerator and denominator completely.","Cancel identical factors.","Check whether any further numerical or algebraic simplification is possible."],
 mistakes:["Cancelling the x in [[(x+5)/x]].","Forgetting domain restrictions.","Cancelling factors that are not identical."],
 vocab:["rational expression","factor","restriction","excluded value","common factor"],
 examples:[
  E("Simplify [[18x^3/(24x^5)]].",["[[18/24=3/4]]","[[x^3/x^5=1/x^2]]","Answer [[3/(4x^2)]], [[x\\ne0]]"]),
  E("Simplify [[(x^2-5x+6)/(x^2-x-6)]].",["Factor top: [[(x-2)(x-3)]]","Factor bottom: [[(x-3)(x+2)]]","Cancel [[x-3]]","[[ (x-2)/(x+2) ]], with original restrictions [[x\\ne3,-2]]"]),
  E("Explain why [[(x+5)/x]] cannot be simplified by cancelling x.",["The numerator is a sum, not a product.","x is not a factor of the whole numerator.","Equivalent form is [[1+5/x]], not 5."])
 ],
 practice:{
  foundation:["Simplify [[12x/18]].","Simplify [[15a^2/(5a)]].","Simplify [[(x^2-9)/(x-3)]].","Simplify [[(x^2+6x)/x]].","State the excluded value for [[(x+1)/(x-4)]]."],
  core:["Simplify [[(x^2-16)/(x^2+x-20)]].","Simplify [[(2x^2-8)/(x^2+5x+6)]].","Simplify [[(3x^2+12x)/(x^2+6x+8)]].","Simplify [[(x^2-2x-15)/(x^2-25)]].","State all restrictions for [[(x^2-1)/(x^2-3x+2)]]."],
  extension:["Simplify [[(2x^2-18)/(x^2+x-12)]].","Simplify [[(x^3-4x)/(x^2-x-6)]].","Solve [[(x^2-9)/(x-3)=10]] while respecting restrictions.","Create a rational expression that simplifies to [[(x-1)/(x+4)]] but has two excluded values.","Explain why cancelled factors still matter for the original domain."],
  reasoning:["Spot the error: [[(2x+6)/(2x)=3]].","Give two different unsimplified rational expressions equivalent to [[(x+1)/(x-2)]]."]
 },
 homework:[
  H("Foundation","Simplify [[20x^2/(30x)]].",["[[20/30=2/3]]","[[x^2/x=x]]","Answer [[2x/3]]"]),
  H("Foundation","Simplify [[(x^2-25)/(x-5)]].",["[[x^2-25=(x-5)(x+5)]]","Cancel [[x-5]]","[[x+5]], [[x\\ne5]]"]),
  H("Core","Simplify [[(x^2+7x+12)/(x^2+5x+4)]].",["Top [[(x+3)(x+4)]]","Bottom [[(x+1)(x+4)]]","Answer [[(x+3)/(x+1)]]"]),
  H("Core","Simplify [[(2x^2-8x)/(x^2-16)]].",["Top [[2x(x-4)]]","Bottom [[(x-4)(x+4)]]","Answer [[2x/(x+4)]]"]),
  H("Extension","Simplify and state restrictions: [[(x^2-6x+9)/(x^2-9)]].",["[[ (x-3)^2/((x-3)(x+3)) ]]","Answer [[(x-3)/(x+3)]]","Restrictions [[x\\ne3,-3]]"]),
  H("Extension","Explain why [[(x+2)/x]] is not equal to 2 for all x.",["No common factor x in the full numerator.","Counterexample: x=1 gives 3, not 2."])
 ],
 cambridge:"Factorisation and algebraic fluency should be shown line by line so that invalid cancellation is easy to detect.",
 examSuccess:"Use Algebra and graphs worked examples to reinforce short, exam-efficient simplification."
});

M["13.2"]=C({
 explain:"The four operations with algebraic fractions follow the same structure as numerical fractions. The main difference is that algebraic denominators often need to be factorised before the lowest common denominator becomes clear.",
 keyPoints:["Factor before multiplying or dividing when cancellation is possible.","Division means multiply by the reciprocal.","For addition/subtraction, use a common denominator.","Simplify the final fraction fully."],
 rules:[["[[a/b\\times c/d=ac/bd]]","multiply"],["[[a/b\\div c/d=ad/bc]]","divide"],["[[a/b+c/d=(ad+bc)/(bd)]]","generic common denominator"]],
 method:["Factor expressions where useful.","For × or ÷, cancel common factors before multiplying large expressions.","For + or −, identify the lowest common denominator.","Rewrite each fraction, combine the numerators and factor the result if possible."],
 mistakes:["Adding denominators.","Forgetting to invert the second fraction when dividing.","Stopping before simplifying the final numerator."],
 vocab:["lowest common denominator","reciprocal","equivalent fraction","common factor"],
 examples:[
  E("Simplify [[3x/4\\times8/(9x)]].",["Cancel x","[[8/4=2]] and [[3/9=1/3]]","Answer [[2/3]]"]),
  E("Write [[2/x+3/(x+1)]] as one fraction.",["LCD [[x(x+1)]]","Numerator [[2(x+1)+3x]]","[[=(5x+2)/(x(x+1))]]"]),
  E("Simplify [[(3x+4)/(x^2+x-6)-1/(x+3)]].",["Factor [[x^2+x-6=(x+3)(x-2)]]","Use LCD [[(x+3)(x-2)]]","Numerator [[3x+4-(x-2)=2x+6=2(x+3)]]","Cancel: [[2/(x-2)]]"])
 ],
 practice:{
  foundation:["Simplify [[(2x/3)(9/(4x))]].","Simplify [[(5a/8)\\div(15a/16)]].","Simplify [[2/x+5/x]].","Simplify [[7/y-3/y]].","Write [[1/x+1/2]] as one fraction."],
  core:["Simplify [[1/x+2/(x+3)]].","Simplify [[4/(x-2)-1/(x+1)]].","Simplify [[(x+2)/3\\times6/(x^2-4)]].","Simplify [[(x^2-9)/(2x)\\div((x+3)/4)]].","Simplify [[2/(x+1)+3/(x-1)]]."],
  extension:["Simplify [[1/(x-1)-1/(x+1)]].","Simplify [[(x+1)/(x-1)+(x-1)/(x+1)]].","Find x if [[1/x+1/(x+2)=3/4]].","Show [[(3x+4)/(x^2+x-6)-1/(x+3)=2/(x-2)]].","Explain why factorising denominators first often reduces work."],
  reasoning:["Which is more efficient: expanding first or factorising first in a multiplication question? Justify.","Create two algebraic fractions whose sum simplifies to 1."]
 },
 homework:[
  H("Foundation","Simplify [[3/x+4/x]].",["Same denominator","Add numerators","[[7/x]]"]),
  H("Foundation","Simplify [[(4x/5)(15/(8x))]].",["Cancel x","[[15/5=3]], [[4/8=1/2]]","[[3/2]]"]),
  H("Core","Simplify [[1/x+2/(x+2)]].",["LCD [[x(x+2)]]","Numerator [[x+2+2x=3x+2]]","[[ (3x+2)/(x(x+2)) ]]"]),
  H("Core","Simplify [[3/(x-1)-1/(x+1)]].",["LCD [[(x-1)(x+1)]]","Numerator [[3(x+1)-(x-1)=2x+4]]","[[2(x+2)/(x^2-1)]]"]),
  H("Extension","Simplify [[(x^2-4)/(3x)\\div((x+2)/(6x))]].",["Multiply by reciprocal","Factor [[x^2-4]]","Cancel common factors","Answer [[2(x-2)]]"]),
  H("Extension","Write [[2/(x+3)+1/(x-3)]] as one fraction.",["LCD [[(x+3)(x-3)]]","Numerator [[2(x-3)+(x+3)=3x-3]]","[[3(x-1)/(x^2-9)]]"])
 ],
 cambridge:"Questions frequently combine factorisation with the four rules, so students should simplify strategically rather than mechanically.",
 examSuccess:"Use Algebra and graphs exam-style fraction questions for concise presentation and checking."
});

M["14.1"]=C({
 explain:"Constructing algebra is the translation stage of problem solving. The SoW expects students to form expressions, linear equations, simultaneous equations, quadratic equations and formulae from words or diagrams.",
 keyPoints:["Define the variable before forming an equation.","Translate relationships, not isolated words.","Consecutive integers differ by 1; consecutive even numbers differ by 2.","An equation is only needed when two quantities are stated to be equal."],
 rules:[["[[n,n+1]]","consecutive integers"],["[[2n,2n+2]]","consecutive even integers"],["[[L=W+3]]","example relationship"],["[[A=lw]]","example formula"]],
 method:["Choose a variable and state what it represents.","Translate each phrase into algebra.","Build the expression/formula/equation in the same order as the relationship.","Check the algebra against a simple numerical example."],
 mistakes:["Using x and y without defining them.","Confusing an expression with an equation.","Writing consecutive even numbers as n and n+1."],
 vocab:["variable","coefficient","expression","equation","identity","formula","subject"],
 examples:[
  E("Write an expression for the product of two consecutive even numbers.",["Let the first even number be [[2n]].","The next is [[2n+2]].","Product [[=2n(2n+2)]]"]),
  E("A rectangle is 5 cm longer than it is wide. Its perimeter is 46 cm. Form an equation.",["Let width be [[x]].","Length [[=x+5]].","Perimeter equation [[2x+2(x+5)=46]]"]),
  E("Three adult tickets and two child tickets cost 64 KD. Two adult tickets and five child tickets cost 71 KD. Form simultaneous equations.",["Let adult price [[=a]], child price [[=c]].","[[3a+2c=64]]","[[2a+5c=71]]"])
 ],
 practice:{
  foundation:["Write an expression for 7 more than x.","Write an expression for three times y decreased by 5.","Write two consecutive odd integers using n.","A number is doubled and then 9 is added. Write the expression.","A rectangle has width w and length w+4. Write its perimeter."],
  core:["Form an equation: three times a number plus 4 is 31.","Form an equation for two consecutive integers whose sum is 57.","The area of a rectangle is 60 and its sides are x and x+7. Form an equation.","Form simultaneous equations from: 2 coffees + 3 teas cost 7.40; 4 coffees + 1 tea cost 8.20.","Write a formula for the total cost C of n items at p dinars each plus delivery d."],
  extension:["Two consecutive even integers have product 624. Form a quadratic equation.","A right triangle has legs x and x+3 and hypotenuse 15. Form an equation using Pythagoras.","Create a 'think of a number' puzzle that always ends at 12 and prove it algebraically.","A taxi charges a fixed fee plus a rate per km. Use two journeys to form simultaneous equations.","Construct a formula where the subject appears twice."],
  reasoning:["Explain why translating '5 less than x' as 5−x is incorrect.","Give two different contexts that lead to the equation [[3x+4=25]]."]
 },
 homework:[
  H("Foundation","Write an expression for 4 less than 3x.",["Start with [[3x]]","Subtract 4","[[3x-4]]"]),
  H("Foundation","Write two consecutive even numbers in terms of n.",["First [[2n]]","Next even number [[2n+2]]"]),
  H("Core","A number increased by 8 is then tripled to give 45. Form the equation.",["Let number be x","Increase: [[x+8]]","Triple: [[3(x+8)=45]]"]),
  H("Core","A rectangle has width x and length x+6. Its area is 91. Form an equation.",["Area [[=x(x+6)]]","Equation [[x(x+6)=91]]"]),
  H("Extension","Two consecutive integers have product 156. Form the quadratic equation.",["Numbers [[n,n+1]]","[[n(n+1)=156]]","[[n^2+n-156=0]]"]),
  H("Extension","3 pens and 2 notebooks cost 5.80; 5 pens and 1 notebook cost 6.90. Form simultaneous equations.",["Let pen p, notebook n","[[3p+2n=5.80]]","[[5p+n=6.90]]"])
 ],
 cambridge:"Current 0580 places strong emphasis on problem solving and translating real contexts into mathematics.",
 examSuccess:"The Algebra and graphs chapter models concise 'write down / form an equation' responses before full solving."
});

M["14.2"]=C({
 explain:"Solving a linear equation means finding the value that makes both sides equal. Every transformation must preserve equality, so whatever operation is applied to one side must effectively be applied to the other.",
 keyPoints:["Simplify each side before moving terms.","Eliminate brackets and fractions carefully.","Keep variable terms together and constants together.","Check by substitution into the original equation."],
 rules:[["[[ax+b=c]]","isolate x with inverse operations"],["[[a(b+c)=ab+ac]]","expand brackets"]],
 method:["Expand brackets if present.","Collect like terms on each side.","Move all x-terms to one side.","Move constants to the other side.","Divide by the coefficient of x and check."],
 mistakes:["Changing a sign without performing an operation.","Expanding only part of a bracket.","Dividing only one term by the final coefficient."],
 vocab:["solution","inverse operation","equivalent equation","coefficient"],
 examples:[
  E("Solve [[3x+4=19]].",["[[3x=15]]","[[x=5]]","Check: [[3(5)+4=19]]"]),
  E("Solve [[5-2x=3x+20]].",["Subtract [[3x]]: [[5-5x=20]]","Subtract 5: [[-5x=15]]","[[x=-3]]"]),
  E("Solve [[5(x+4)=3(x+10)]].",["Expand: [[5x+20=3x+30]]","[[2x=10]]","[[x=5]]"])
 ],
 practice:{
  foundation:["Solve [[x+7=19]].","Solve [[4x=36]].","Solve [[3x-5=16]].","Solve [[2x+9=31]].","Solve [[18-3x=6]]."],
  core:["Solve [[5x+2=2x+20]].","Solve [[4(x+3)=28]].","Solve [[7-2x=x+16]].","Solve [[3(2x-5)=4x+7]].","Solve [[5(x+4)=3(x+10)]]."],
  extension:["Form and solve: three consecutive integers total 72.","A rectangle has perimeter 54 and length 3 more than width. Find dimensions.","Solve [[2(3x-4)-5=3(x+7)]].","Find x if [[(3x-2)/5=4]].","Create an equation with solution x=−4 and x on both sides."],
  reasoning:["A student moves +7 across the equals sign and writes +7. Explain the error.","Explain why adding 4 to both sides preserves equality."]
 },
 homework:[
  H("Foundation","Solve [[4x-7=21]].",["[[4x=28]]","[[x=7]]"]),
  H("Foundation","Solve [[9-2x=1]].",["[[-2x=-8]]","[[x=4]]"]),
  H("Core","Solve [[5x+3=2x+18]].",["[[3x=15]]","[[x=5]]"]),
  H("Core","Solve [[4(x-2)=2x+10]].",["[[4x-8=2x+10]]","[[2x=18]]","[[x=9]]"]),
  H("Extension","A number is tripled, 5 is subtracted, and the result equals twice the number plus 13. Find it.",["[[3x-5=2x+13]]","[[x=18]]"]),
  H("Extension","Solve [[2(4x+1)-3=5x+14]].",["[[8x+2-3=5x+14]]","[[3x=15]]","[[x=5]]"])
 ],
 cambridge:"Show necessary working clearly. Linear-equation questions may be embedded inside contexts rather than presented as isolated algebra.",
 examSuccess:"Algebra and graphs worked examples use short, labelled steps suitable for exam scripts."
});

M["14.3"]=C({
 explain:"Quadratic equations can be solved by several methods. Students should choose a method based on structure: factorisation when factors are accessible, completing the square for structural understanding, and the quadratic formula as a general method.",
 keyPoints:["Always rearrange to [[ax^2+bx+c=0]] first.","Factorisation can give two roots.","The completed-square form reveals the turning-point structure.","The quadratic formula can produce exact surd roots."],
 rules:[["[[x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}]]","quadratic formula"],["[[b^2-4ac]]","discriminant"]],
 method:["Write in standard form equal to zero.","Look for easy factors first.","If completing the square, isolate the x²+x terms and compensate for the square added.","For the formula, identify a, b and c with their signs before substituting.","Check both solutions."],
 mistakes:["Forgetting the ± in the quadratic formula.","Using c with the wrong sign.","Finding only one root after factorising."],
 vocab:["quadratic","root","factorisation","completed square","discriminant"],
 examples:[
  E("Solve [[x^2-7x+12=0]].",["Factor: [[(x-3)(x-4)=0]]","[[x=3]] or [[x=4]]"]),
  E("Write [[x^2+6x+1]] in completed-square form.",["[[x^2+6x+1=(x+3)^2-9+1]]","[[=(x+3)^2-8]]"]),
  E("Solve [[2x^2+3x-1=0]] using the quadratic formula.",["[[a=2,b=3,c=-1]]","[[x=(-3\\pm\\sqrt{9+8})/4]]","[[x=(-3\\pm\\sqrt{17})/4]]"])
 ],
 practice:{
  foundation:["Solve [[x^2-5x+6=0]].","Solve [[x^2+x-12=0]].","Solve [[x^2=49]].","Write [[x^2+8x+3]] in completed-square form.","Identify a,b,c for [[3x^2-5x+2=0]]."],
  core:["Solve [[2x^2-7x+3=0]] by factorisation.","Complete the square for [[x^2-10x+7]].","Solve [[x^2+4x-1=0]] using the formula.","Solve [[3x^2+2x-5=0]].","Form and solve a quadratic for a rectangle of area 84 with sides x and x+5."],
  extension:["Solve [[2x^2+3x-1=0]] exactly.","A right triangle has shorter legs x and x+2, hypotenuse 10. Find x.","Show that [[x^2+6x+11]] is always positive.","Find k so [[x^2+4x+k]] is a perfect square.","Compare two methods for [[x^2-6x+5=0]] and state which is most efficient."],
  reasoning:["Explain why a quadratic can have 0,1 or 2 real roots.","A student writes [[x=(-b±√(b²−4ac))/2 × a]]. Explain the notation error."]
 },
 homework:[
  H("Foundation","Solve [[x^2-9x+20=0]].",["[[ (x-4)(x-5)=0 ]]","[[x=4]] or [[x=5]]"]),
  H("Foundation","Solve [[x^2=81]].",["Take square roots","[[x=±9]]"]),
  H("Core","Write [[x^2+4x-3]] in completed-square form.",["[[x^2+4x-3=(x+2)^2-4-3]]","[[=(x+2)^2-7]]"]),
  H("Core","Solve [[x^2+2x-7=0]] with the formula.",["[[a=1,b=2,c=-7]]","[[x=(-2±√32)/2]]","[[x=-1±2√2]]"]),
  H("Extension","A rectangle has sides x and x+4 and area 96. Find x.",["[[x(x+4)=96]]","[[x^2+4x-96=0]]","[[ (x+12)(x-8)=0 ]]","Length requires [[x=8]]"]),
  H("Extension","Find k if [[x^2+10x+k=(x+5)^2]].",["Expand right: [[x^2+10x+25]]","Therefore [[k=25]]"])
 ],
 cambridge:"The 2025–2027 syllabus explicitly includes factorisation, completing the square and the quadratic formula; exact surd solutions may be required.",
 examSuccess:"Use Algebra and graphs for compact formula substitution and exam-checking habits."
});

M["14.4"]=C({
 explain:"Fractional equations are solved by clearing denominators with a common multiple. When denominators contain x, restrictions must be recorded because multiplying through can hide values for which the original equation is undefined.",
 keyPoints:["Find the lowest common denominator first.","Multiply every term by the LCD.","State values that make an original denominator zero.","Check candidate solutions in the original equation."],
 rules:[["[[x-a\\ne0\\Rightarrow x\\ne a]]","domain restriction"],["[[\\frac ab=\\frac cd\\Rightarrow ad=bc]]","when denominators non-zero"]],
 method:["State restrictions.","Find the LCD.","Multiply every term by the LCD and simplify.","Solve the resulting linear or quadratic equation.","Reject any root that violates a restriction."],
 mistakes:["Multiplying only fractional terms and forgetting whole-number terms.","Cancelling across addition.","Accepting a root that makes a denominator zero."],
 vocab:["fractional equation","denominator","restriction","extraneous root","LCD"],
 examples:[
  E("Solve [[x/3+2=5]].",["Multiply by 3: [[x+6=15]]","[[x=9]]"]),
  E("Solve [[2/(x-1)=3]].",["Restriction [[x\\ne1]]","[[2=3(x-1)]]","[[3x=5]]","[[x=5/3]]"]),
  E("Solve [[1/x+1/(x+2)=3/4]].",["Restrictions [[x\\ne0,-2]]","Multiply by [[4x(x+2)]]","[[4(x+2)+4x=3x(x+2)]]","Rearrange to a quadratic, solve, then check restrictions."])
 ],
 practice:{
  foundation:["Solve [[x/5=7]].","Solve [[x/4+3=8]].","Solve [[(x+2)/3=5]].","Solve [[2/x=4]].","State the restriction for [[5/(x-6)]]."],
  core:["Solve [[3/(x+1)=2]].","Solve [[1/x+2=5]].","Solve [[2/(x-3)+1=4]].","Solve [[3/x=5/(x+2)]].","Solve [[1/(x-1)+1/(x+1)=1]]."],
  extension:["Solve [[2/(x+1)=x/(x+1)]] and explain the rejected value.","Solve [[1/x+1/(x+2)=3/4]].","Solve [[4/(x-2)=x+1]].","Create a fractional equation whose solution x=3 is invalid in the original equation.","Explain why multiplying by the LCD is equivalent to multiplying both sides by the same expression."],
  reasoning:["A student cancels x in [[1/x+2/x]]. Explain what can and cannot be cancelled.","Why must restrictions be taken from the original equation, not the simplified one?"]
 },
 homework:[
  H("Foundation","Solve [[x/6+1=4]].",["[[x/6=3]]","[[x=18]]"]),
  H("Foundation","Solve [[5/x=2]].",["Restriction [[x\\ne0]]","[[5=2x]]","[[x=5/2]]"]),
  H("Core","Solve [[2/(x-1)=5]].",["[[x\\ne1]]","[[2=5x-5]]","[[5x=7]]","[[x=7/5]]"]),
  H("Core","Solve [[3/x=2/(x+4)]].",["Restrictions [[x\\ne0,-4]]","[[3(x+4)=2x]]","[[x=-12]]"]),
  H("Extension","Solve [[1/(x-2)+1/x=1]].",["Restrictions [[x\\ne0,2]]","Multiply by [[x(x-2)]]","[[x+(x-2)=x(x-2)]]","[[x^2-4x+2=0]]","[[x=2±√2]]"]),
  H("Extension","Solve [[4/(x+1)=x]].",["[[x\\ne-1]]","[[4=x(x+1)]]","[[x^2+x-4=0]]","Use quadratic formula and check restriction."])
 ],
 cambridge:"Fractional equations may lead to linear or quadratic equations; working must preserve restrictions.",
 examSuccess:"Use exam-style algebra pages for short LCD setup and clear checking."
});

M["14.5"]=C({
 explain:"A simultaneous solution satisfies both equations at the same time. Elimination combines equations to remove one variable; substitution replaces one variable with an equivalent expression; graphically, the solution is the intersection.",
 keyPoints:["Two independent equations are needed for two unknowns.","Choose elimination when coefficients align easily.","Choose substitution when one variable is already isolated.","Always back-substitute and check."],
 rules:[["[[ax+by=c]] and [[dx+ey=f]]","two linear equations"],["intersection","graphical meaning of solution"]],
 method:["Label the equations.","Choose elimination or substitution.","Remove one variable and solve the resulting one-variable equation.","Back-substitute to find the second variable.","Check the pair in both originals."],
 mistakes:["Adding equations when subtraction is needed.","Changing signs inconsistently when multiplying an equation.","Giving x and y separately without pairing them."],
 vocab:["simultaneous","elimination","substitution","intersection","solution pair"],
 examples:[
  E("Solve [[x+y=11]] and [[x-y=3]].",["Add equations: [[2x=14]]","[[x=7]]","[[y=4]]"]),
  E("Solve [[y=2x+1]] and [[3x+y=16]].",["Substitute: [[3x+(2x+1)=16]]","[[5x=15]] so [[x=3]]","[[y=7]]"]),
  E("3 coffees and 2 teas cost 6.50; 5 coffees and 2 teas cost 9.50. Find each price.",["[[3c+2t=6.50]]","[[5c+2t=9.50]]","Subtract: [[2c=3]] so [[c=1.50]]","Then [[4.50+2t=6.50]] so [[t=1.00]]"])
 ],
 practice:{
  foundation:["Solve [[x+y=9, x-y=1]].","Solve [[2x+y=10, x+y=7]].","Solve [[3x+y=14, x-y=2]].","Use substitution: [[y=x+4, 2x+y=13]].","Check whether (3,2) solves [[x+y=5]] and [[2x-y=4]]."],
  core:["Solve [[2x+3y=19, x+y=7]].","Solve [[4x-y=9, 2x+3y=1]].","Solve [[y=3x-5, 2x+y=15]].","Form and solve a ticket-price problem from two purchases.","Find the intersection of [[y=2x+1]] and [[y=-x+7]]."],
  extension:["Solve [[3x+4y=2, 5x-2y=18]].","Create two equations with solution (4,-1).","Three pens and two rulers cost 5.40; two pens and five rulers cost 7.20. Find prices.","Explain how elimination corresponds to combining equal quantities.","Use three equations to solve a simple three-variable extension."],
  reasoning:["Which method is most efficient for [[y=5x-2]] and [[3x+y=14]]? Justify.","Explain why parallel straight-line graphs have no simultaneous solution."]
 },
 homework:[
  H("Foundation","Solve [[x+y=13, x-y=5]].",["Add: [[2x=18]]","[[x=9]]","[[y=4]]"]),
  H("Foundation","Solve [[2x+y=11, x+y=7]].",["Subtract second from first: [[x=4]]","[[y=3]]"]),
  H("Core","Solve [[y=2x+3, 3x+y=18]].",["Substitute","[[3x+2x+3=18]]","[[x=3]]","[[y=9]]"]),
  H("Core","Solve [[3x+2y=16, 2x-y=1]].",["Double second: [[4x-2y=2]]","Add: [[7x=18]]","[[x=18/7]] then back-substitute."]),
  H("Extension","Adult ticket a and child ticket c: [[2a+3c=31]], [[3a+c=32]]. Find a,c.",["From second [[c=32-3a]]","Substitute into first","[[2a+96-9a=31]]","[[a=65/7]], then find c."]),
  H("Extension","Find the intersection of [[y=4x-7]] and [[y=-2x+11]].",["Set equal: [[4x-7=-2x+11]]","[[6x=18]]","[[x=3,y=5]]"])
 ],
 cambridge:"Graphical and algebraic solutions are both within syllabus scope; contextual formation of the two equations is important.",
 examSuccess:"Exam Success provides worked methods with concise marking-point structure useful for elimination and substitution."
});

M["14.6"]=C({
 explain:"For one linear and one non-linear simultaneous equation, substitution reduces the system to a single quadratic equation. Each valid x-value can lead to a corresponding y-value, so solutions must be presented as pairs.",
 keyPoints:["Substitute the linear relation into the nonlinear equation.","Expect a quadratic and therefore potentially two solution pairs.","Back-substitute every root.","Check all pairs in both equations."],
 rules:[["[[y=mx+c]] into [[x^2+y^2=r^2]]","typical line-circle system"]],
 method:["Rearrange the linear equation if needed.","Substitute into the nonlinear equation.","Expand and collect to form a quadratic.","Solve for the first variable.","Find the matching second coordinate for each root."],
 mistakes:["Finding two x-values but only one y-value.","Pairing each x with the wrong y.","Discarding a negative root without contextual reason."],
 vocab:["non-linear","solution pair","substitution","intersection"],
 examples:[
  E("Solve [[y=x+1]] and [[x^2+y^2=25]].",["Substitute: [[x^2+(x+1)^2=25]]","[[2x^2+2x-24=0]]","[[x^2+x-12=0]]","[[x=3]] or [[x=-4]]","Pairs: [[(3,4)]] and [[(-4,-3)]]"]),
  E("Solve [[y=6-x]] and [[xy=8]].",["Substitute: [[x(6-x)=8]]","[[x^2-6x+8=0]]","[[x=2]] or [[4]]","Pairs [[(2,4),(4,2)]]"]),
  E("Explain geometrically why a line and a circle can have 0, 1 or 2 solutions.",["Solutions are intersection points.","A line can miss, touch (tangent) or cross the circle."])
 ],
 practice:{
  foundation:["Substitute [[y=x+2]] into [[x^2+y=8]].","Solve [[y=x]] and [[xy=16]].","Solve [[y=5-x]] and [[xy=6]].","Check whether (3,4) satisfies [[x^2+y^2=25]] and [[y=x+1]]."],
  core:["Solve [[y=x+1, x^2+y^2=13]].","Solve [[y=7-x, xy=12]].","Solve [[y=2x, x^2+y^2=45]].","Find intersections of [[y=x^2]] and [[y=2x+3]].","Solve [[y=x+3]] and [[y=x^2-1]]."],
  extension:["Find k so the line [[y=x+k]] is tangent to [[x^2+y^2=8]].","Explain why a tangent gives a repeated quadratic root.","Create a line-circle system with exactly two integer intersections.","Use the discriminant to decide how many intersections occur.","Interpret negative roots in a geometry context."],
  reasoning:["A student gets two x-values and assumes two solutions without finding y. Explain.","Why can substitution produce an extraneous-looking root only if algebra has been changed incorrectly?"]
 },
 homework:[
  H("Foundation","Solve [[y=x]] and [[xy=9]].",["[[x^2=9]]","[[x=±3]]","Pairs [[(3,3),(-3,-3)]]"]),
  H("Core","Solve [[y=5-x]] and [[xy=6]].",["[[x(5-x)=6]]","[[x^2-5x+6=0]]","[[x=2,3]]","Pairs [[(2,3),(3,2)]]"]),
  H("Core","Solve [[y=2x]] and [[x^2+y^2=20]].",["[[x^2+4x^2=20]]","[[5x^2=20]]","[[x=±2]]","Pairs [[(2,4),(-2,-4)]]"]),
  H("Extension","Solve [[y=x+1]] and [[x^2+y^2=5]].",["[[x^2+(x+1)^2=5]]","[[2x^2+2x-4=0]]","[[x^2+x-2=0]]","[[x=1,-2]]","Pairs [[(1,2),(-2,-1)]]"]),
  H("Extension","Solve [[y=x^2]] and [[y=3x+4]].",["[[x^2=3x+4]]","[[x^2-3x-4=0]]","[[x=4,-1]]","y-values [[16,1]]"]),
  H("Extension","State the graphical meaning of the two roots in the previous question.",["They are x-coordinates of the intersections.","The matching y-values complete the coordinate pairs."])
 ],
 cambridge:"Powers no higher than two are expected in this SoW subunit; all valid solution pairs should be reported.",
 examSuccess:"Algebra and graphs provides useful exam-style intersection and substitution practice."
});

M["14.7"]=C({
 explain:"Changing the subject means rearranging a formula so the chosen variable is isolated. The SoW includes harder cases where the subject appears twice or is under a power/root.",
 keyPoints:["Treat the formula like an equation and perform reversible operations.","If the subject appears twice, collect and factor it.","If the subject is squared, square-root at the end and consider context.","Clear fractions early when that simplifies the structure."],
 rules:[["[[A=\\pi r^2\\Rightarrow r=\\sqrt{A/\\pi}]]","power/root"],["[[P=ax+bx=x(a+b)]]","subject appears twice"]],
 method:["Identify the target subject.","Undo outer operations in reverse order.","Collect all terms containing the subject.","Factor out the subject if it appears more than once.","Divide by the remaining factor and check by substitution."],
 mistakes:["Dividing only one term in a numerator.","Taking a square root before isolating the square.","Moving a term without changing the algebraic operation."],
 vocab:["subject","rearrange","factorise","inverse operation"],
 examples:[
  E("Make x the subject of [[y=3x-5]].",["[[y+5=3x]]","[[x=(y+5)/3]]"]),
  E("Make r the subject of [[A=\\pi r^2]].",["[[r^2=A/\\pi]]","[[r=\\sqrt{A/\\pi}]] for a positive radius"]),
  E("Make x the subject of [[y=ax+bx+c]].",["[[y-c=ax+bx]]","[[y-c=x(a+b)]]","[[x=(y-c)/(a+b)]]"])
 ],
 practice:{
  foundation:["Make x the subject of [[y=x+7]].","Make a the subject of [[v=u+at]].","Make h the subject of [[A=bh]].","Make r the subject of [[C=2\\pi r]].","Make x the subject of [[y=(x+3)/4]]."],
  core:["Make x the subject of [[y=5x-2]].","Make b the subject of [[A=(a+b)h/2]].","Make v the subject of [[E=mv^2/2]].","Make x the subject of [[p=3x/(x+2)]].","Make r the subject of [[V=\\pi r^2h]]."],
  extension:["Make x the subject of [[y=ax+bx]].","Make x the subject of [[p=(x-a)/(x+b)]].","Make h the subject of a cone-volume formula.","Make x the subject when it occurs in two fractions.","Explain why ± may appear algebraically but be rejected by context."],
  reasoning:["Compare two rearrangement routes for a fractional formula.","Give an example where factorising the subject is essential."]
 },
 homework:[
  H("Foundation","Make x the subject: [[y=4x+9]].",["[[y-9=4x]]","[[x=(y-9)/4]]"]),
  H("Foundation","Make t the subject: [[v=u+at]].",["[[v-u=at]]","[[t=(v-u)/a]]"]),
  H("Core","Make r the subject: [[A=\\pi r^2]].",["[[r^2=A/\\pi]]","[[r=\\sqrt{A/\\pi}]]"]),
  H("Core","Make b the subject: [[P=2a+2b]].",["[[P-2a=2b]]","[[b=(P-2a)/2]]"]),
  H("Extension","Make x the subject: [[y=ax+bx+c]].",["[[y-c=x(a+b)]]","[[x=(y-c)/(a+b)]]"]),
  H("Extension","Make x the subject: [[p=(x+1)/(x-2)]].",["[[p(x-2)=x+1]]","[[px-2p=x+1]]","[[x(p-1)=2p+1]]","[[x=(2p+1)/(p-1)]]"])
 ],
 cambridge:"Harder rearrangement includes the subject twice and powers/roots, exactly as noted in the SoW.",
 examSuccess:"Use Algebra and graphs examples for concise notation and substitutions into rearranged formulae."
});

M["15.1"]=C({
 explain:"An inequality describes a set of values rather than a single value. A number-line diagram must communicate both the boundary and whether that boundary is included.",
 keyPoints:["< and > are strict: open circle.","≤ and ≥ include the endpoint: filled circle.","The arrow/shading direction shows all allowed values.","Compound inequalities describe an interval between two boundaries."],
 rules:[["[[x<3]]","open at 3, shade left"],["[[x\\ge-2]]","closed at −2, shade right"],["[[-1<x\\le4]]","open at −1, closed at 4"]],
 method:["Identify the boundary value.","Decide whether the boundary is included.","Use open/closed endpoint accordingly.","Shade in the direction that satisfies the statement.","Translate back from a diagram by reading endpoint and direction."],
 mistakes:["Reversing left/right shading.","Using a filled dot for < or >.","Forgetting that a compound inequality has two conditions."],
 vocab:["inequality","strict","inclusive","endpoint","solution set","compound inequality"],
 examples:[
  E("Represent [[x<4]] on a number line.",["Open circle at 4.","Shade/arrow to the left."]),
  E("Write the inequality shown by a filled circle at −2 with shading right.",["Filled means inclusive.","Right means greater.","[[x\\ge-2]]"]),
  E("Represent [[-3<x\\le2]].",["Open at −3.","Closed at 2.","Shade only the segment between them."])
 ],
 practice:{
  foundation:["Sketch [[x>5]].","Sketch [[x\\le1]].","Write the inequality: open at 3, shade left.","Write the inequality: closed at −4, shade right.","List integer solutions of [[-2<x<3]]."],
  core:["Represent [[-1\\le x<5]].","Write a compound inequality for values between −4 and 2 inclusive.","List integers satisfying [[2<x\\le7]].","Compare the diagrams for [[x<2]] and [[x\\le2]].","Translate 'at least 6' into an inequality."],
  extension:["Write an inequality whose integer solutions are −2,−1,0,1,2.","Describe the intersection of [[x>1]] and [[x\\le5]].","Describe the union of [[x<-2]] or [[x>3]].","Explain why no real x satisfies [[x<1]] and [[x>4]] simultaneously.","Construct a real context for [[20\\le n<30]]."],
  reasoning:["Why does 'no more than 8' translate to [[x\\le8]]?","A student uses an open circle for [[x\\ge3]]. Correct and explain."]
 },
 homework:[
  H("Foundation","Represent [[x>-1]].",["Open circle at −1.","Shade right."]),
  H("Foundation","Write the inequality: filled circle at 6, shade left.",["Filled = inclusive.","Left = less.","[[x\\le6]]"]),
  H("Core","List integer solutions of [[-3<x\\le2]].",["Integers greater than −3 and up to 2:","−2, −1, 0, 1, 2"]),
  H("Core","Write a compound inequality for values greater than 1 and at most 7.",["[[x>1]] and [[x\\le7]]","[[1<x\\le7]]"]),
  H("Extension","Find the intersection of [[x\\ge-4]] and [[x<3]].",["Both conditions together","[[-4\\le x<3]]"]),
  H("Extension","Explain the difference between [[x<5]] and [[x\\le5]].",["Both contain values below 5.","Only [[x\\le5]] includes 5 itself."])
 ],
 cambridge:"Number-line interpretation is part of the current extended algebra content and supports later region inequalities.",
 examSuccess:"Algebra and graphs can be used for quick exam-style inequality reading."
});

M["15.2"]=C({
 explain:"Linear inequalities are solved using the same balancing principles as equations, except that multiplying or dividing by a negative reverses the inequality sign because order on the number line reverses.",
 keyPoints:["Simplify both sides first.","When multiplying/dividing by a negative, flip <↔> and ≤↔≥.","For compound inequalities, keep all three parts balanced.","Interpret the final solution in context."],
 rules:[["[[x<y\\Rightarrow -x>-y]]","multiplying by −1 reverses order"],["[[-3\\le3x-2<7]]","operate on all three parts"]],
 method:["Expand and simplify.","Collect x terms.","Move constants.","If the final coefficient of x is negative, divide and reverse the sign.","Represent on a number line if required."],
 mistakes:["Forgetting to reverse the sign after dividing by a negative.","Reversing the sign when only adding/subtracting.","Applying an operation to only two parts of a compound inequality."],
 vocab:["solution set","compound inequality","reverse sign","boundary"],
 examples:[
  E("Solve [[3x<2x+4]].",["Subtract [[2x]]","[[x<4]]"]),
  E("Solve [[5-2x\\ge11]].",["[[-2x\\ge6]]","Divide by −2 and reverse sign","[[x\\le-3]]"]),
  E("Solve [[-3\\le3x-2<7]].",["Add 2 to all parts: [[-1\\le3x<9]]","Divide by 3: [[-1/3\\le x<3]]"])
 ],
 practice:{
  foundation:["Solve [[x+4>9]].","Solve [[3x\\le18]].","Solve [[2x-5<7]].","Solve [[9-x>4]].","Solve [[-2x<8]]."],
  core:["Solve [[4x+1>2x+9]].","Solve [[7-3x\\le1]].","Solve [[2(x+3)>10]].","Solve [[-5<2x+1\\le9]].","Solve [[3\\le(2x-1)/5<7]]."],
  extension:["Form and solve an inequality for a budget problem.","Find integer x satisfying [[-2<3x+4\\le10]].","Solve [[4-2(3x-1)>5x+7]].","Explain why dividing by a negative reverses order using two example numbers.","Create a compound inequality with exactly six integer solutions."],
  reasoning:["A student solves [[-2x<6]] as [[x<-3]]. Diagnose the error.","Why is no sign change needed when subtracting a negative number?"]
 },
 homework:[
  H("Foundation","Solve [[4x-3\\le13]].",["[[4x\\le16]]","[[x\\le4]]"]),
  H("Foundation","Solve [[-3x>12]].",["Divide by −3 and reverse","[[x<-4]]"]),
  H("Core","Solve [[5x+2>3x+10]].",["[[2x>8]]","[[x>4]]"]),
  H("Core","Solve [[-2\\le x+3<6]].",["Subtract 3 throughout","[[-5\\le x<3]]"]),
  H("Extension","Solve [[7-2x\\ge3x-8]].",["[[15\\ge5x]]","[[x\\le3]]"]),
  H("Extension","Solve [[-7<3x+2\\le11]].",["Subtract 2: [[-9<3x\\le9]]","Divide 3: [[-3<x\\le3]]"])
 ],
 cambridge:"Extended questions can include compound inequalities and contextual interpretation.",
 examSuccess:"Use Algebra and graphs worked examples for compact inequality transformations."
});

M["15.3"]=C({
 explain:"A linear inequality in two variables represents a half-plane. The equality gives the boundary line; the inequality tells you which side of the line is included.",
 keyPoints:["Draw the boundary from the corresponding equality.","Use a solid boundary for ≤ or ≥.","Use a dashed boundary for < or >.","Test a point not on the boundary, usually (0,0), to decide which side to shade."],
 rules:[["[[y>mx+c]]","shade above dashed boundary"],["[[y\\le mx+c]]","shade below solid boundary"]],
 method:["Replace the inequality sign by = and draw the line accurately.","Choose solid or dashed boundary.","Pick a test point.","Substitute the point into the original inequality.","Shade the half-plane that makes the inequality true."],
 mistakes:["Shading before testing a point.","Using a solid line for a strict inequality.","Plotting an incorrect line because intercepts were not checked."],
 vocab:["half-plane","boundary line","feasible region","test point","solid line","dashed line"],
 examples:[
  E("Graph [[y>2x-1]].",["Draw dashed line [[y=2x-1]].","Test (0,0): [[0>-1]] true.","Shade the side containing (0,0), i.e. above the line."]),
  E("Graph [[x+y\\le6]].",["Boundary [[x+y=6]] through (6,0),(0,6).","Solid line because ≤.","Test (0,0): [[0\\le6]] true, so shade the origin side."]),
  E("Describe why the boundary of [[x>3]] is vertical.",["All points with x=3 lie on a vertical line.","The inequality selects points to the right of that line."])
 ],
 practice:{
  foundation:["Graph [[y>x]].","Graph [[y\\le3]].","Graph [[x>2]].","State whether boundary for [[y<2x+5]] is solid or dashed.","Test (0,0) in [[y\\ge x-4]]."],
  core:["Graph [[y\\ge2x+1]].","Graph [[x+y<5]].","Graph [[2x-y\\le4]].","Graph [[x\\ge-1]] and [[y<3]] on the same axes.","Write the inequality for a region above [[y=3x-2]]."],
  extension:["Graph three inequalities and identify the common region.","Find a point satisfying [[y>x+1]] and [[y<5]].","Explain why testing a point on the boundary is useless.","Create an inequality whose boundary passes through (0,4) and (2,0).","Determine whether (3,2) lies in [[2x+y\\le8]]."],
  reasoning:["A student shades below [[y>2x+1]]. Use a test point to demonstrate the error.","Explain the visual meaning of strict versus inclusive boundaries."]
 },
 homework:[
  H("Foundation","For [[y<3x+2]], state the boundary and its style.",["Boundary [[y=3x+2]]","Strict inequality → dashed."]),
  H("Foundation","For [[x\\ge-2]], state which side is shaded.",["Boundary [[x=-2]] solid.","x-values greater than −2 are to the right."]),
  H("Core","Graph [[x+y\\le4]]. Which side contains (0,0)?",["[[0+0\\le4]] is true.","Shade the side containing the origin."]),
  H("Core","Does (2,5) satisfy [[y>2x]]?",["[[5>4]] is true.","Yes."]),
  H("Extension","Write an inequality with boundary [[y=-x+6]] shaded below including the line.",["Below means ≤.","[[y\\le-x+6]]"]),
  H("Extension","Explain why [[2x-y<4]] may be rewritten before shading.",["Rearrange: [[-y<4-2x]]","Multiply by −1 and reverse: [[y>2x-4]]","Now 'above' is easy to see."])
 ],
 cambridge:"The SoW links graphical inequalities directly to Ex 14.5–14.6; accurate boundaries and shading conventions matter.",
 examSuccess:"Algebra and graphs gives exam-style coordinate diagrams suitable for checking line accuracy."
});

M["15.4"]=C({
 explain:"To describe a shaded region, identify each boundary line and then choose the inequality direction that keeps points inside the region. This reverses the previous skill: the graph is given and the algebra must be recovered.",
 keyPoints:["Write the equation of each boundary first.","Use solid/dashed style to decide inclusive/strict.","Use a point clearly inside the region to decide the sign.","The final answer is a list of inequalities that must all hold."],
 rules:[["intersection of half-planes","region satisfying all inequalities"],["solid boundary","≤ or ≥"],["dashed boundary","< or >"]],
 method:["Identify every boundary.","Find each line equation.","Choose strict or inclusive sign from line style.","Test an interior point against each possible direction.","List all inequalities together."],
 mistakes:["Writing only one inequality for a multi-boundary region.","Ignoring a vertical/horizontal boundary.","Choosing the sign from visual intuition without testing."],
 vocab:["feasible region","boundary","intersection","constraint"],
 examples:[
  E("A region is above [[y=x]], below [[y=5]], and to the right of [[x=1]], all solid. List inequalities.",["[[y\\ge x]]","[[y\\le5]]","[[x\\ge1]]"]),
  E("A triangular region is bounded by [[x=0]], [[y=0]], [[x+y=6]] and lies in the first quadrant.",["[[x\\ge0]]","[[y\\ge0]]","[[x+y\\le6]]"]),
  E("Explain how a dashed boundary changes the statement.",["Boundary points are excluded.","Use < or > rather than ≤ or ≥."])
 ],
 practice:{
  foundation:["Write inequalities for first quadrant.","Region left of [[x=4]] and above [[y=1]].","Region below [[y=2x+3]].","State sign type for a dashed boundary.","State sign type for a solid boundary."],
  core:["List inequalities for 0≤x≤5 and y≥x.","Describe a triangle bounded by axes and [[x+y=8]].","Use test point (2,2) to choose side of [[x+2y=10]].","List inequalities for a rectangle from x=−1 to 4, y=0 to 6.","Convert a shaded graph into three constraints."],
  extension:["Design a region with exactly four integer lattice points.","Find whether (3,4) lies in all constraints [[x\\ge0,y\\ge0,x+y\\le6]].","Explain why linear programming optimisation is outside this SoW even though regions are drawn.","Create two different lists of inequalities whose regions do not overlap.","Use one dashed and two solid boundaries in a region description."],
  reasoning:["Why can any interior point be used to test a boundary direction?","A region is empty. What does that tell you about its constraints?"]
 },
 homework:[
  H("Foundation","First quadrant: write the two inequalities.",["[[x\\ge0]]","[[y\\ge0]]"]),
  H("Foundation","Region below solid [[y=4]].",["Below → [[y\\le4]]"]),
  H("Core","Region bounded by axes and [[x+y=5]].",["[[x\\ge0]]","[[y\\ge0]]","[[x+y\\le5]]"]),
  H("Core","Region right of dashed [[x=2]] and below solid [[y=7]].",["[[x>2]]","[[y\\le7]]"]),
  H("Extension","Point (2,3) lies inside a region with boundary [[2x+y=10]]. Which side inequality contains it?",["Substitute: [[2(2)+3=7]]","Since 7<10, the side containing the point is [[2x+y<10]] or ≤ if solid."]),
  H("Extension","List inequalities for [[-1\\le x\\le4]] and [[0<y<5]].",["[[x\\ge-1]]","[[x\\le4]]","[[y>0]]","[[y<5]]"])
 ],
 cambridge:"The SoW explicitly excludes linear programming optimisation; focus on reading and writing the defining inequalities.",
 examSuccess:"Use coordinate-graph questions to practise boundary equations and checking points."
});

M["16.1"]=C({
 explain:"Angle reasoning is not only about obtaining a number; Cambridge expects correct geometrical terminology and reasons. The SoW lists the core angle facts and requires three-letter notation such as angle ABC.",
 keyPoints:["Angles at a point total 360°.","Angles on a straight line total 180°.","Vertically opposite angles are equal.","Triangle angles total 180°; quadrilateral angles total 360°.","State a reason at each logical step."],
 rules:[["angles at a point","360°"],["straight line","180°"],["triangle","180°"],["quadrilateral","360°"]],
 method:["Mark known angles clearly.","Choose the angle fact that directly connects known and unknown values.","Write an equation if x is involved.","Solve and attach a geometrical reason.","Check the angle size is plausible."],
 mistakes:["Giving only a numerical answer with no reason.","Confusing vertically opposite with adjacent angles.","Misreading the middle letter in angle notation."],
 vocab:["acute","obtuse","reflex","vertically opposite","perpendicular","equilateral","isosceles","scalene"],
 examples:[
  E("Find x if [[x+112^\\circ=180^\\circ]]. Give a reason.",["Angles on a straight line sum to 180°.","[[x=68^\\circ]]"],{image:"angles-worked3.webp"}),
  E("Two lines cross. One angle is 115°. Find the opposite and adjacent angles.",["Vertically opposite angle =115°.","Adjacent angles sum to 180°.","[[180-115=65^\\circ]]"]),
  E("Around a point the angles are [[x,2x,4x,150^\\circ]]. Find x.",["[[x+2x+4x+150=360]]","[[7x=210]]","[[x=30^\\circ]]"])
 ],
 practice:{
  foundation:["Find x on a straight line with 73°.","Find angle vertically opposite 128°.","Angles around a point: 90°,110°,x.","Triangle angles 48°,67°,x.","Quadrilateral angles 90°,85°,112°,x."],
  core:["At a point: x,x,70°,110°. Find x.","Vertically opposite: [[3x+5]] and [[5x-35]].","Straight line: [[2x+10]] and [[5x-5]].","Triangle angles x,2x,3x.","Quadrilateral angles x,x+20,2x,100°."],
  extension:["A right angle is split into x and 2x+9. Find x.","Adjacent intersection angles are [[4x-7]] and [[2x+31]].","Construct a problem with answer 36°.","Explain why vertically opposite angles are equal using straight-line sums.","Solve a multi-step diagram requiring three different angle facts."],
  reasoning:["Write a proof-style solution where every line has a reason.","Explain why a reflex angle may be found by subtracting the smaller angle from 360°."]
 },
 homework:[
  H("Foundation","Find x if [[x+124=180]].",["Straight line","[[x=56^\\circ]]"]),
  H("Foundation","Find the vertically opposite angle to 74°.",["Vertically opposite angles are equal.","74°"]),
  H("Core","Angles around a point are 95°,80°,75°,x.",["Total known [[=250]]","[[x=360-250=110^\\circ]]"]),
  H("Core","Triangle angles are x,2x,75°.",["[[3x+75=180]]","[[x=35^\\circ]]"]),
  H("Extension","Vertically opposite angles [[5x-8]] and [[3x+28]].",["Set equal","[[5x-8=3x+28]]","[[x=18]]"]),
  H("Extension","Quadrilateral angles x,2x,3x,60°.",["[[6x+60=360]]","[[x=50^\\circ]]"])
 ],
 cambridge:"Correct geometric terminology and reasons are explicitly required by the SoW and syllabus.",
 examSuccess:"Geometry chapter uses labelled diagrams and short reasoned angle calculations.",
 sourceImages:["angles-worked3.webp"]
});

M["16.2"]=C({
 explain:"When a transversal crosses parallel lines, corresponding and alternate angles are equal while co-interior angles are supplementary. The key is identifying the relationship before calculating.",
 keyPoints:["Corresponding angles: equal.","Alternate angles: equal.","Co-interior angles: total 180°.","Vertically opposite and straight-line facts may be needed before using the parallel-line fact."],
 rules:[["corresponding","equal"],["alternate","equal"],["co-interior","sum 180°"]],
 method:["Confirm the lines are parallel.","Identify the relationship between the relevant angles.","Transfer/equate or supplement the angle.","Continue with straight-line or triangle facts if needed.","State the geometric reason."],
 mistakes:["Using parallel-line facts when parallel lines are not marked.","Calling all equal-looking angles alternate.","Forgetting co-interior angles sum rather than match."],
 vocab:["transversal","corresponding","alternate","co-interior","supplementary"],
 examples:[
  E("Two corresponding angles are [[3x+10]] and [[5x-30]]. Find x.",["Corresponding angles are equal.","[[3x+10=5x-30]]","[[2x=40]]","[[x=20]]"]),
  E("A co-interior angle is 117°. Find the other.",["Co-interior angles total 180°.","[[180-117=63^\\circ]]"]),
  E("An alternate angle is 68°. The adjacent angle on a straight line is y. Find y.",["Alternate angle transfers as 68°.","Straight line: [[y=180-68=112^\\circ]]"])
 ],
 practice:{
  foundation:["Corresponding to 72°.","Alternate to 116°.","Co-interior with 105°.","State reason for equal Z-angles.","State reason for F-angles."],
  core:["Corresponding: [[4x+3=6x-21]].","Co-interior: [[3x+10]] and [[5x-6]].","Use alternate then triangle sum.","Find three unknown angles around two parallel lines.","Write a reason for each stage."],
  extension:["A multi-step diagram combines parallel lines and an isosceles triangle.","Prove two angles equal using parallel-line facts.","Find x in a diagram with algebraic corresponding angles and a straight line.","Construct a diagram where x=30° using co-interior angles.","Explain why alternate angles are equal for parallel lines."],
  reasoning:["A student says co-interior angles are equal. Give a counterexample.","Why must the parallel arrow markings be checked before using these rules?"]
 },
 homework:[
  H("Foundation","Corresponding angle to 83°.",["Corresponding angles are equal.","83°"]),
  H("Foundation","Co-interior partner of 124°.",["[[180-124=56^\\circ]]"]),
  H("Core","Corresponding angles [[2x+15]] and [[5x-30]].",["Set equal","[[2x+15=5x-30]]","[[45=3x]]","[[x=15]]"]),
  H("Core","Co-interior angles [[4x]] and [[2x+30]].",["[[4x+2x+30=180]]","[[6x=150]]","[[x=25]]"]),
  H("Extension","An alternate angle is [[3x+5]], its straight-line neighbour [[5x-1]]. Find x.",["They are supplementary after transfer.","[[3x+5+5x-1=180]]","[[8x=176]]","[[x=22]]"]),
  H("Extension","Explain how to distinguish corresponding and alternate angles.",["Corresponding occupy matching corners at intersections.","Alternate lie between parallels on opposite sides of transversal."])
 ],
 cambridge:"Angle facts should be named in explanations, not merely used silently.",
 examSuccess:"Geometry worked examples reinforce diagram reading and precise reasons."
});

M["16.3"]=C({
 explain:"Polygon angle problems use the fact that an n-sided polygon can be split into n−2 triangles. Exterior angles of any convex polygon total 360°, and for a regular polygon every exterior angle is equal.",
 keyPoints:["Interior angle sum [[=(n-2)180^\\circ]].","Exterior angles total 360°.","Regular exterior angle [[=360^\\circ/n]].","Interior + exterior at a vertex =180°."],
 rules:[["[[(n-2)180^\\circ]]","interior sum"],["[[360^\\circ/n]]","regular exterior angle"],["[[180^\\circ-360^\\circ/n]]","regular interior angle"]],
 method:["Identify whether polygon is regular or irregular.","Choose total-sum or per-angle formula.","For reverse questions, form an equation in n.","Check n is a whole number ≥3."],
 mistakes:["Dividing the interior sum by n for an irregular polygon.","Assuming exterior angles differ in a regular polygon.","Forgetting n must be an integer."],
 vocab:["regular","irregular","convex","concave","interior angle","exterior angle"],
 examples:[
  E("Find the interior angle sum of a hexagon.",["[[n=6]]","[[(6-2)180=720^\\circ]]"]),
  E("Find each exterior and interior angle of a regular octagon.",["Exterior [[=360/8=45^\\circ]]","Interior [[=180-45=135^\\circ]]"]),
  E("A regular polygon has exterior angle 24°. Find the number of sides.",["[[n=360/24]]","[[n=15]]"])
 ],
 practice:{
  foundation:["Interior sum of pentagon.","Interior sum of decagon.","Exterior angle of regular nonagon.","Interior angle of regular hexagon.","Number of sides if exterior angle 60°."],
  core:["Find n if interior sum 1260°.","Regular polygon interior angle 150°: find n.","One irregular pentagon has four given angles; find fifth.","Exterior angles include x,2x,3x,90°,70°; find x.","Compare regular octagon and decagon interior angles."],
  extension:["Two regular polygons meet around a point; determine whether they tessellate.","Find n if interior angle is three times exterior angle.","A concave polygon has one reflex interior angle; use angle sum to find it.","Prove exterior angles total 360° by considering turning.","Create a polygon problem with n=12 as the reverse solution."],
  reasoning:["Why does splitting from one vertex give n−2 triangles?","Explain why regular polygon angles approach 180° as n increases."]
 },
 homework:[
  H("Foundation","Interior sum of octagon.",["[[(8-2)180=1080^\\circ]]"]),
  H("Foundation","Regular pentagon exterior angle.",["[[360/5=72^\\circ]]"]),
  H("Core","Regular decagon interior angle.",["Exterior [[=36^\\circ]]","Interior [[=144^\\circ]]"]),
  H("Core","Find n if interior sum is 1620°.",["[[(n-2)180=1620]]","[[n-2=9]]","[[n=11]]"]),
  H("Extension","Regular polygon interior angle 165°. Find n.",["Exterior [[=15^\\circ]]","[[n=360/15=24]]"]),
  H("Extension","Irregular hexagon angles 120,135,140,100,155,x. Find x.",["Hexagon sum [[=720]]","Known sum [[=650]]","[[x=70^\\circ]]"])
 ],
 cambridge:"Both regular and irregular polygon angle properties are explicitly listed in the SoW.",
 examSuccess:"Geometry chapter combines recall with reverse and reasoning questions.",
 sourceImages:["polygons.webp"]
});

M["16.4"]=C({
 explain:"Line symmetry means reflection in a line maps a shape onto itself. Rotational symmetry means a rotation less than or equal to 360° maps a shape onto itself; the order counts how many matches occur in a full turn.",
 keyPoints:["Order includes the 360° position.","A circle has infinitely many lines of symmetry and rotational symmetry of infinite order.","Regular n-gons have n lines of symmetry and rotational order n.","Some shapes have one type of symmetry but not the other."],
 rules:[["[[\\text{smallest rotation}=360^\\circ/\\text{order}]]","rotational symmetry"]],
 method:["Imagine or trace a reflection to test a candidate line.","Rotate around the centre and count matches in 360°.","Use shape properties rather than visual guesswork.","State line count and rotational order separately."],
 mistakes:["Saying a rectangle has rotational order 4.","Forgetting the 360° match counts.","Assuming any diagonal is a line of symmetry."],
 vocab:["line symmetry","rotational symmetry","order","centre of rotation","mirror line"],
 examples:[
  E("State symmetries of a non-square rectangle.",["2 lines of symmetry.","Rotational order 2."]),
  E("State symmetries of a regular hexagon.",["6 lines of symmetry.","Rotational order 6.","Smallest rotation [[=60^\\circ]]."]),
  E("A shape has rotational order 5. Find the smallest angle.",["[[360/5=72^\\circ]]"])
 ],
 practice:{
  foundation:["Square: lines and order.","Equilateral triangle: lines and order.","Non-square rectangle.","Rhombus.","Regular pentagon."],
  core:["Kite: line symmetry and rotational order.","Parallelogram.","Isosceles triangle.","Regular octagon.","Find smallest angle for order 8."],
  extension:["Classify quadrilaterals by their symmetry properties.","Construct a shape with rotational order 2 and no line symmetry.","Explain why a circle has infinite symmetry.","Find all regular polygons with smallest rotation at least 45°.","Design an odd-one-out symmetry task."],
  reasoning:["Can a shape have exactly 3 lines of symmetry but rotational order 1? Discuss.","Explain why every regular polygon's rotational order equals its number of sides."]
 },
 homework:[
  H("Foundation","Symmetry of a square.",["4 lines.","Rotational order 4."]),
  H("Foundation","Smallest rotation for order 6.",["[[360/6=60^\\circ]]"]),
  H("Core","Symmetry of a parallelogram.",["No line symmetry in general.","Rotational order 2."]),
  H("Core","Symmetry of a regular octagon.",["8 lines.","Order 8."]),
  H("Extension","A shape matches after 120°. State its rotational order.",["[[360/120=3]]"]),
  H("Extension","Explain why a non-square rectangle has order 2 not 4.",["180° maps it onto itself.","90° swaps unequal length and width, so it does not match."])
 ],
 cambridge:"Symmetry is tied to properties of common polygons, not just visual recognition.",
 examSuccess:"Geometry revision checklists provide useful shape-property retrieval."
});

M["16.5"]=C({
 explain:"Three-dimensional symmetry extends the same ideas into space. A plane of symmetry divides a solid into mirror-image halves; an axis of rotational symmetry is a line about which the solid can be rotated onto itself.",
 keyPoints:["Planes are 2D mirror surfaces through a solid.","Axes are lines, not planes.","Prisms inherit symmetry from their cross-section and their length direction.","Cones and cylinders have continuous rotational symmetry about their main axis."],
 rules:[["plane of symmetry","mirror halves"],["axis of symmetry","rotation in 3D"]],
 method:["Identify the solid and its cross-section.","Visualise slicing it with a mirror plane.","Visualise rotating about likely central axes.","Count distinct planes/axes only if the question asks for number."],
 mistakes:["Calling a plane an axis.","Forgetting orientation of a prism.","Assuming all pyramids have the same symmetry."],
 vocab:["plane","axis","prism","cylinder","pyramid","cone","rotational symmetry"],
 examples:[
  E("Describe symmetry of a right circular cylinder.",["Infinitely many vertical planes through its axis plus one horizontal mid-plane.","Rotational symmetry of infinite order about its central axis."]),
  E("How many planes of symmetry does a cube have?",["9 planes in total: 3 through opposite face centres and 6 diagonal planes."]),
  E("A triangular prism has an equilateral cross-section. Describe a symmetry plane.",["Any symmetry line of the equilateral triangle extends along the prism to form a plane."])
 ],
 practice:{
  foundation:["Name a plane of symmetry of a cuboid.","State the main rotational axis of a cone.","Describe a symmetry plane of a cylinder.","Does a square-based regular pyramid have vertical symmetry planes?","Does a scalene triangular prism have side symmetry planes?"],
  core:["Count symmetry planes of a cube.","Compare cube and cuboid symmetry.","Describe rotational symmetry of a regular triangular prism.","Find symmetry of a square-based prism.","Explain how cross-section symmetry creates prism symmetry."],
  extension:["Investigate a regular tetrahedron's planes of symmetry.","Construct a prism with exactly one longitudinal symmetry plane.","Compare a cone and pyramid with same base symmetry.","Explain why an oblique prism may lose some planes.","Classify solids by infinite versus finite rotational order."],
  reasoning:["Why does a sphere have more symmetry than a cylinder?","How does changing a regular base to an irregular base affect pyramid symmetry?"]
 },
 homework:[
  H("Foundation","State one plane of symmetry of a cuboid.",["A plane halfway through opposite pairs of faces, parallel to a face."]),
  H("Foundation","State the main rotational axis of a cylinder.",["The line joining the centres of the circular faces."]),
  H("Core","How many face-centre planes of symmetry does a cube have?",["3: each passes through the centres of two opposite faces and bisects the cube."]),
  H("Core","Describe one vertical plane of symmetry of a cone.",["Any plane through the cone's central axis divides it into mirror halves."]),
  H("Extension","Why can a cylinder be said to have infinite rotational order about its main axis?",["Every rotation angle maps the circular cross-section onto itself."]),
  H("Extension","Explain how an equilateral triangular prism gains three longitudinal symmetry planes.",["The triangle has three symmetry lines.","Each line extends along the prism length to form a plane."])
 ],
 cambridge:"The SoW specifically names prisms, cylinders, pyramids and cones and asks for planes and axes of symmetry.",
 examSuccess:"Geometry chapter diagrams are useful for visualising solid properties."
});

M["17.1"]=C({
 explain:"Metric conversion depends on dimension. Length conversions use the linear scale factor, area conversions use its square and volume conversions use its cube. Capacity links directly to volume: 1 cm³ = 1 ml and 1000 cm³ = 1 litre.",
 keyPoints:["Always write the unit conversion before calculating.","Square the length factor for area.","Cube the length factor for volume.","Convert all quantities to consistent units before combining them."],
 rules:[["[[1\\text{ m}=100\\text{ cm}]]","length"],["[[1\\text{ m}^2=10,000\\text{ cm}^2]]","area"],["[[1\\text{ m}^3=1,000,000\\text{ cm}^3]]","volume"],["[[1\\text{ cm}^3=1\\text{ ml}]]","capacity"]],
 method:["Identify the dimension: length, area or volume.","Write the base linear conversion.","Raise the scale factor to the correct power.","Multiply/divide in the correct direction.","Attach the correct unit."],
 mistakes:["Using ×100 for m² to cm².","Mixing litres and cm³ without conversion.","Dropping squared/cubed units."],
 vocab:["metric unit","scale factor","capacity","area unit","volume unit"],
 examples:[
  E("Convert 3.4 m to cm.",["[[3.4\\times100=340]]","340 cm"]),
  E("Convert [[2.5\\text{ m}^2]] to cm².",["[[1\\text{ m}^2=100^2=10,000\\text{ cm}^2]]","[[2.5\\times10,000=25,000\\text{ cm}^2]]"]),
  E("Convert [[0.018\\text{ m}^3]] to litres.",["[[0.018\\text{ m}^3=18,000\\text{ cm}^3]]","[[18,000\\text{ cm}^3=18\\text{ L}]]"])
 ],
 practice:{
  foundation:["4.7 m to cm.","8500 g to kg.","3.2 L to ml.","5600 mm to m.","0.8 km to m."],
  core:["1.7 m² to cm².","450000 cm² to m².","0.004 m³ to cm³.","2500 cm³ to litres.","3.6 litres to cm³."],
  extension:["Convert 0.75 km² to m².","Convert 2.3 m³ to litres.","A tank measures 1.2 m × 50 cm × 40 cm. Find volume in litres.","Explain why area scale factors square.","A map tile area changes under a scale factor of 3. Find area factor."],
  reasoning:["A student converts 2 m² to 200 cm². Explain the error.","Why is 1 litre equal to 1000 cm³?"]
 },
 homework:[
  H("Foundation","Convert 6.2 m to cm.",["[[6.2\\times100=620]] cm"]),
  H("Foundation","Convert 3750 g to kg.",["[[3750/1000=3.75]] kg"]),
  H("Core","Convert [[1.4\\text{ m}^2]] to cm².",["[[1.4\\times10,000=14,000\\text{ cm}^2]]"]),
  H("Core","Convert [[0.006\\text{ m}^3]] to litres.",["[[0.006\\times1,000,000=6000\\text{ cm}^3]]","[[=6\\text{ L}]]"]),
  H("Extension","A box 40 cm × 25 cm × 30 cm is full of water. Find capacity in litres.",["Volume [[=40\\times25\\times30=30,000\\text{ cm}^3]]","[[=30\\text{ L}]]"]),
  H("Extension","Convert [[2.5\\text{ km}^2]] to m².",["[[1\\text{ km}^2=1,000,000\\text{ m}^2]]","[[2.5\\times1,000,000=2,500,000\\text{ m}^2]]"])
 ],
 cambridge:"Unit conversion includes square/cubic units and volume-capacity links according to the SoW.",
 examSuccess:"Mensuration chapter starts with units and conversion before formula work."
});

M["17.2"]=C({
 explain:"Perimeter measures boundary length; area measures surface covered. The SoW requires rectangle, triangle, parallelogram and trapezium calculations, including reverse problems and compound shapes.",
 keyPoints:["Perimeter uses all outside edges only.","Triangle area uses perpendicular height.","Parallelogram area is base × perpendicular height.","Trapezium area is half the sum of parallel sides × height.","Compound shapes can be split or subtracted."],
 rules:[["[[A_{triangle}=\\frac12 bh]]","triangle"],["[[A_{parallelogram}=bh]]","parallelogram"],["[[A_{trapezium}=\\frac12(a+b)h]]","trapezium"]],
 method:["Sketch/mark dimensions.","Choose the correct formula for each component.","Keep perimeter and area calculations separate.","For compound shapes, split into non-overlapping pieces.","Check units: cm for perimeter, cm² for area."],
 mistakes:["Using sloping side as height.","Including internal edges in perimeter.","Forgetting the 1/2 in triangle/trapezium."],
 vocab:["perimeter","area","perpendicular height","parallel sides","compound shape"],
 examples:[
  E("Find area of a parallelogram with base 8 m and height 3.5 m.",["[[A=bh]]","[[A=8\\times3.5=28\\text{ m}^2]]"]),
  E("A trapezium has parallel sides 8 cm and 13 cm, height 6 cm.",["[[A=\\frac12(8+13)6]]","[[=63\\text{ cm}^2]]"]),
  E("A trapezium area is 63 cm², height 6 cm, one parallel side 8 cm. Find the other.",["[[63=\\frac12(8+x)6]]","[[63=3(8+x)]]","[[21=8+x]]","[[x=13\\text{ cm}]]"])
 ],
 practice:{
  foundation:["Area rectangle 8×5.","Area triangle base12 height7.","Area parallelogram base9 height4.","Area trapezium sides6,10 height5.","Perimeter of sides 7,4,10,4."],
  core:["Triangle area45 base10: find height.","Parallelogram area72 height8: find base.","Trapezium area54 height6 one side7: find other.","Rectangular frame 12×9 with 1-unit border: find border area.","Find area of an L-shape by splitting."],
  extension:["Compound trapezium + triangle.","A triangular panel has base45 cm and area0.54 m²; find height in cm.","Equal-area trapezium and parallelogram: find unknown height.","Construct two rectangles with same area but different perimeters.","Explain why sloping side length does not affect parallelogram area."],
  reasoning:["Which quadrilateral gives maximum area for a fixed perimeter? Explore.","A student uses all four trapezium sides in the area formula. Correct the misconception."]
 },
 homework:[
  H("Foundation","Triangle base15 cm, height8 cm.",["[[A=1/2\\times15\\times8=60\\text{ cm}^2]]"]),
  H("Foundation","Perimeter of sides 4,6,7,9 cm.",["Add outside edges","[[26\\text{ cm}]]"]),
  H("Core","Trapezium parallel sides9,14 cm, height6 cm.",["[[A=1/2(23)6=69\\text{ cm}^2]]"]),
  H("Core","Parallelogram area84 cm², base12 cm. Find height.",["[[h=84/12=7\\text{ cm}]]"]),
  H("Extension","Rectangle 10×6 with 4×2 rectangle removed.",["Outer area 60","Removed 8","Remaining [[52\\text{ units}^2]]"]),
  H("Extension","Trapezium area96 cm², height8, one parallel side9. Find other.",["[[96=4(9+x)]]","[[24=9+x]]","[[x=15\\text{ cm}]]"])
 ],
 cambridge:"Except for triangle area, the SoW notes that formulae may not be supplied, so recall is important.",
 examSuccess:"Mensuration chapter gives worked diagrams and compound-shape problems."
});

M["17.3"]=C({
 explain:"Circle questions require careful distinction between radius, diameter, circumference and area. Exact answers may be left in terms of π; decimal answers should be rounded only at the end.",
 keyPoints:["Diameter is twice radius.","Circumference is a length; area uses square units.","Use π symbolically for exact answers.","Do not round intermediate values."],
 rules:[["[[C=2\\pi r=\\pi d]]","circumference"],["[[A=\\pi r^2]]","area"]],
 method:["Identify whether the given measure is radius or diameter.","Choose circumference or area formula.","Substitute using radius consistently.","Leave in terms of π if requested or evaluate at the end.","Attach correct units."],
 mistakes:["Using diameter as r.","Using 2πr for area.","Writing cm instead of cm² for area."],
 vocab:["centre","radius","diameter","circumference","π"],
 examples:[
  E("Find circumference of radius 7 cm.",["[[C=2\\pi(7)=14\\pi\\text{ cm}]]"]),
  E("Find area of diameter 12 cm.",["Radius [[=6]]","[[A=\\pi(6)^2=36\\pi\\text{ cm}^2]]"]),
  E("A circle has area [[81\\pi]]. Find its radius.",["[[\\pi r^2=81\\pi]]","[[r^2=81]]","Radius [[r=9]]"])
 ],
 practice:{
  foundation:["Circumference r=5.","Circumference d=18.","Area r=4.","Area d=10.","Find diameter if radius=7.2."],
  core:["Radius from circumference [[20\\pi]].","Radius from area [[49\\pi]].","Find area when circumference is [[12\\pi]].","Compare two circles radii 3 and 6: area scale.","Semicircle perimeter including diameter."],
  extension:["A circular path surrounds a garden; find path area.","Find radius if circumference 37.7 cm to 3sf.","A wheel rolls 25 revolutions; find distance.","Prove doubling radius quadruples area.","Find exact area in terms of circumference C."],
  reasoning:["Why can circumference and area not be compared numerically without units?","A student squares diameter instead of radius. Quantify the error factor."]
 },
 homework:[
  H("Foundation","Circle radius 8 cm: circumference.",["[[C=16\\pi\\text{ cm}]]"]),
  H("Foundation","Circle diameter 14 cm: area.",["Radius 7","[[A=49\\pi\\text{ cm}^2]]"]),
  H("Core","Circumference [[18\\pi]] cm. Find radius.",["[[2\\pi r=18\\pi]]","[[r=9\\text{ cm}]]"]),
  H("Core","Area [[64\\pi]] cm². Find diameter.",["[[r^2=64]]","[[r=8]]","Diameter 16 cm"]),
  H("Extension","Semicircle radius 6 cm: perimeter including diameter.",["Half circumference [[=6\\pi]]","Diameter=12","Perimeter [[=12+6\\pi]]"]),
  H("Extension","A circle's radius increases by factor 3. State area factor.",["Area depends on r².","Factor [[3^2=9]]."])
 ],
 cambridge:"Answers may be exact in terms of π or rounded as instructed.",
 examSuccess:"Mensuration chapter models clear use of units and formula selection."
});

M["17.4"]=C({
 explain:"Arc length and sector area are proportional parts of a whole circle. The fraction of the circle is the central angle divided by 360°. Major sectors use the remaining angle after subtracting the minor angle from 360°.",
 keyPoints:["Use the central angle, not an angle at the circumference.","Major angle = 360° − minor angle.","Sector perimeter includes two radii plus arc length.","Reverse problems can ask for radius or angle."],
 rules:[["[[L=\\frac{\\theta}{360}(2\\pi r)]]","arc length"],["[[A=\\frac{\\theta}{360}\\pi r^2]]","sector area"]],
 method:["Identify radius and central angle.","Decide minor or major sector.","Use θ/360 as the fraction of a full circle.","For perimeter, add straight radial edges.","For reverse problems, form an equation and solve."],
 mistakes:["Using diameter in place of radius.","Forgetting the two radii in sector perimeter.","Using the minor angle for a major sector."],
 vocab:["arc","minor sector","major sector","central angle","sector perimeter"],
 examples:[
  E("Find sector area for r=6 cm, angle 40°.",["[[A=(40/360)\\pi(36)]]","[[A=4\\pi\\text{ cm}^2]]"]),
  E("Find perimeter of a 120° sector of radius 8 cm.",["Arc [[=(120/360)16\\pi=16\\pi/3]]","Add two radii 16","[[P=16+16\\pi/3]]"]),
  E("Arc length [[5\\pi]] cm, radius 12 cm. Find angle.",["[[5\\pi=(\\theta/360)24\\pi]]","[[5=\\theta/15]]","[[\\theta=75^\\circ]]"])
 ],
 practice:{
  foundation:["Arc length r=9,80°.","Sector area r=7,90°.","Semicircle area d=12.","Quadrant perimeter r=5.","Major angle if minor=110°."],
  core:["Area and perimeter of 135° sector r=8.","Major sector area r=6, minor angle50°.","Find angle if area [[18\\pi]], r=9.","Find radius if arc [[6\\pi]], angle120°.","Compound shape using sector and rectangle."],
  extension:["Pac-Man major sector after removing 70° from r=5.","Find angle given sector perimeter and r.","Find r from sector area and angle.","Two sectors have equal arc length: compare θ and r.","Explain why sector formulas are examples of direct proportion."],
  reasoning:["A student uses θ/180 for sector area. Explain the factor error.","Why does a major sector sometimes have larger perimeter than the full circumference? Discuss straight edges."]
 },
 homework:[
  H("Foundation","Arc length r=10,72°.",["[[L=(72/360)20\\pi=4\\pi]]"]),
  H("Foundation","Sector area r=6,120°.",["[[A=(120/360)36\\pi=12\\pi]]"]),
  H("Core","Perimeter of 90° sector r=8.",["Arc [[=4\\pi]]","Two radii =16","[[16+4\\pi]]"]),
  H("Core","Major sector minor angle80°.",["[[360-80=280^\\circ]]"]),
  H("Extension","Arc length [[7\\pi]], r=14. Find angle.",["[[7\\pi=(\\theta/360)28\\pi]]","[[\\theta=90^\\circ]]"]),
  H("Extension","Sector area [[25\\pi]], angle144°. Find r.",["[[25=(144/360)r^2=(2/5)r^2]]","[[r^2=62.5]]","[[r=5\\sqrt{2.5}]]"])
 ],
 cambridge:"The SoW explicitly includes minor and major sectors and reverse calculations.",
 examSuccess:"Mensuration worked examples use diagrams and perimeter/area distinctions.",
 sourceImages:["sector-area.webp"]
});

})();
})();

/* ===== content-18-22.js ===== */
(function(){
(()=>{
const {C,E,H}=window.MathoraContent, M=window.LESSON_CONTENT;

M["18.1"]=C({
 explain:"Statistical data can be categorical or numerical, discrete or continuous, and primary or secondary. Classification matters because it determines how the data should be tabulated and which diagrams are appropriate. The Coursebook sequence builds from tally/frequency tables into two-way tables.",
 keyPoints:["Categories should be clear and non-overlapping.","Every observation should be counted exactly once.","Two-way tables classify by two variables at the same time.","Totals are an important built-in accuracy check."],
 rules:[["row total = sum of row cells","two-way table check"],["column total = sum of column cells","two-way table check"]],
 method:["Identify the variables and the data type.","Choose suitable categories or class intervals.","Record frequencies systematically, using tallies where useful.","Complete marginal totals.","Check grand total against number of observations."],
 mistakes:["Using overlapping classes such as 0–10 and 10–20.","Forgetting totals in a two-way table.","Treating continuous measurements as isolated categories when grouping is intended."],
 vocab:["categorical","numerical","discrete","continuous","frequency","tally","two-way table"],
 examples:[
  E("Classify: shoe size, eye colour, height and number of siblings.",["Shoe size: discrete numerical.","Eye colour: categorical.","Height: continuous numerical.","Number of siblings: discrete numerical."]),
  E("A two-way table has 18 boys and 22 girls. 11 boys and 14 girls choose football. Complete the non-football totals.",["Boys not football [[=18-11=7]].","Girls not football [[=22-14=8]].","Football total [[=25]], non-football total [[=15]], grand total [[=40]]."]),
  E("Explain why classes 0≤x<10, 10≤x<20 are better than '0–10, 10–20'.",["The inequality notation removes ambiguity at the shared boundary 10."])
 ],
 practice:{
  foundation:["Classify age in whole years.","Classify favourite colour.","Make a tally table for 2,3,3,4,2,5,3.","Complete a frequency table total.","State whether mass is discrete or continuous."],
  core:["Complete a two-way table with one missing cell and totals.","Design non-overlapping classes for 0 to 50.","Explain why postcode is categorical even though it contains digits.","Convert raw responses into a frequency table.","Use row/column totals to find two missing values."],
  extension:["Design a table to compare transport method by year group.","Critique a badly designed grouped table with overlapping classes.","Explain when grouping loses information.","Create a two-way table where one cell is determined from three different totals.","Decide whether a variable should be treated as discrete or continuous in context."],
  reasoning:["Why does a two-way table support comparison better than two separate lists?","A class total is inconsistent with row totals. What should you check first?"]
 },
 homework:[
  H("Foundation","Classify height.",["Height can take any value in an interval.","Continuous numerical data."]),
  H("Foundation","A tally row shows ||||/ ||. Find frequency.",["Five plus two","Frequency 7."]),
  H("Core","20 students: 12 choose A. How many choose not-A?",["[[20-12=8]]"]),
  H("Core","Boys total 15, 9 pass. Girls total 17, 12 pass. Find total passes.",["[[9+12=21]]"]),
  H("Extension","Design class intervals of width 5 for values from 0 to below 30.",["For example [[0\\le x<5]], [[5\\le x<10]], …, [[25\\le x<30]]."]),
  H("Extension","Explain why a grouped table cannot recover exact original values.",["All values inside a class are combined into one frequency, so individual measurements are lost."])
 ],
 cambridge:"The syllabus expects candidates to classify and tabulate data and interpret tables accurately.",
 examSuccess:"Statistics starts with table construction, frequency displays and careful reading of totals."
});

M["18.2"]=C({
 explain:"Measures of centre describe a typical value; measures of spread describe variability. Mean uses every value and is sensitive to extremes, median is resistant to extremes, mode identifies the most frequent value, while range and IQR measure spread.",
 keyPoints:["Mean uses all data but can be distorted by outliers.","Median depends on order and is robust to extremes.","IQR describes the middle 50% and is robust to extremes.","Choice of statistic should match the context and distribution."],
 rules:[["[[\\bar x=\\frac{\\sum x}{n}]]","mean"],["[[\\text{range}=\\max-\\min]]","range"],["[[\\text{IQR}=Q_3-Q_1]]","interquartile range"]],
 method:["Order data when finding median/quartiles.","Calculate mean from total ÷ count.","Identify repeated values for mode.","Find Q1 and Q3 using the agreed positional method.","Use centre and spread together when comparing."],
 mistakes:["Finding median without ordering.","Using range as a measure of centre.","Comparing means only when one data set is much more variable."],
 vocab:["mean","median","mode","quartile","range","interquartile range","outlier"],
 examples:[
  E("Find mean, median and range of 4,6,6,9,10.",["Mean [[=(4+6+6+9+10)/5=7]].","Median =6.","Range [[=10-4=6]]."]),
  E("Data: 2,3,5,6,7,9,12,18. Find Q1,Q3,IQR.",["Lower half 2,3,5,6 → [[Q_1=(3+5)/2=4]].","Upper half 7,9,12,18 → [[Q_3=(9+12)/2=10.5]].","[[IQR=6.5]]."]),
  E("Why might median be preferred for salaries?",["A few very high salaries can pull the mean upward.","Median better represents a typical worker when distribution is skewed."])
 ],
 practice:{
  foundation:["Mean of 3,5,7,9.","Median of 4,2,9,1,7.","Mode of 2,3,3,5,5,5,8.","Range of 12,4,17,9.","Find median of six ordered values."],
  core:["Find Q1,Q3,IQR for 10 ordered values.","Compare two data sets using mean and range.","Choose mean or median for house prices and justify.","Find a missing value given mean.","Find a missing frequency from a stated mode."],
  extension:["Construct two data sets with same mean but different IQR.","Show how one outlier changes mean and range but not median much.","Find x if mean of 5 values is 12.","Compare two athletes using median and IQR.","Explain why mode may be unhelpful for continuous data."],
  reasoning:["Company owner quotes mean salary; union quotes median. Explain why both might choose differently.","Can a data set have no mode, one mode or several modes? Give examples."]
 },
 homework:[
  H("Foundation","Mean of 5,7,8,10.",["Total [[=30]]","Mean [[=30/4=7.5]]"]),
  H("Foundation","Median of 9,3,5,1,7.",["Order: 1,3,5,7,9.","Median =5."]),
  H("Core","Values 2,4,6,8,10,12,14,16. Find IQR.",["[[Q_1=(4+6)/2=5]]","[[Q_3=(12+14)/2=13]]","[[IQR=8]]"]),
  H("Core","Mean of five numbers is 14. Four total 51. Find fifth.",["Total required [[=5\\times14=70]]","Missing [[=70-51=19]]"]),
  H("Extension","Data 3,4,4,5,6 plus outlier 30. Compare mean and median with data without 30.",["Without 30: mean 4.4, median 4.","With 30: mean [[52/6\\approx8.67]], median [[(4+5)/2=4.5]].","Mean changes far more."]),
  H("Extension","Explain why IQR is often paired with median.",["Both are resistant to extreme values and describe the central part of a distribution."])
 ],
 cambridge:"Candidates must distinguish purposes of measures, not only calculate them.",
 examSuccess:"Statistics worked examples emphasise choosing the right average and interpreting spread."
});

M["18.3"]=C({
 explain:"When data is grouped, exact individual values are unknown. To estimate the mean, each class is represented by its midpoint, then a weighted mean is calculated using frequency × midpoint.",
 keyPoints:["The answer is an estimate because midpoint values are assumed.","Use the midpoint of each class interval.","Create an fx column.","Divide total fx by total frequency."],
 rules:[["[[m=\\frac{L+U}{2}]]","class midpoint"],["[[\\bar x\\approx\\frac{\\sum fm}{\\sum f}]]","estimated mean"]],
 method:["Find every class midpoint.","Multiply midpoint by its class frequency.","Add frequencies and add fx products.","Divide [[\\sum fx]] by [[\\sum f]].","State that the result is an estimate."],
 mistakes:["Using class width instead of midpoint.","Dividing by number of classes.","Calling the result exact."],
 vocab:["grouped data","class interval","midpoint","frequency","estimated mean","weighted mean"],
 examples:[
  E("Classes 0–10,10–20,20–30 have frequencies 3,7,5. Estimate mean.",["Midpoints 5,15,25.","fx: 15,105,125.","[[\\sum fx=245]], [[\\sum f=15]].","Estimated mean [[=245/15=16.3]] (3 s.f.)."]),
  E("Why is midpoint 15 used for 10≤x<20?",["The exact values are unknown; 15 is the centre of the class and is used as a representative value."]),
  E("A grouped table has mean estimate 24 from 40 values. Find total fx.",["[[\\sum fx\\approx24\\times40=960]]."])
 ],
 practice:{
  foundation:["Midpoint of 20–30.","Midpoint of 5≤x<15.","Calculate fx for midpoint 12, frequency 7.","Find total frequency from 4,6,9,3.","Estimate mean from two classes."],
  core:["Complete a midpoint and fx table.","Estimate mean for four unequal class intervals.","Find a missing fx value.","Compare exact mean of raw data with grouped estimate.","Explain effect of wider classes on reliability."],
  extension:["Find missing frequency given estimated mean.","Regroup same data in two ways and compare estimates.","Construct grouped data with estimate 20.","Explain why midpoint assumption can bias an estimate.","Use coding or efficient arithmetic to calculate a mean estimate."],
  reasoning:["Can an estimated mean lie outside all class midpoints? Explain using weighted averages.","Why can two different raw data sets give exactly the same grouped table and estimated mean?"]
 },
 homework:[
  H("Foundation","Midpoint of 30≤x<50.",["[[(30+50)/2=40]]"]),
  H("Foundation","Frequency 8, midpoint 15. Find fx.",["[[8\\times15=120]]"]),
  H("Core","Midpoints 5,15,25; frequencies 2,4,4. Estimate mean.",["fx 10,60,100.","[[\\sum fx=170]], [[\\sum f=10]].","Estimate 17."]),
  H("Core","Estimated mean 18 for 25 values. Find total fx.",["[[18\\times25=450]]"]),
  H("Extension","Classes 0–10,10–30 have frequencies 6,4. Estimate mean.",["Midpoints 5,20.","fx 30,80.","[[110/10=11]]"]),
  H("Extension","Explain why using lower boundaries instead of midpoints would systematically underestimate many grouped means.",["Representative values would sit at the bottom of each class rather than near its centre."])
 ],
 cambridge:"The syllabus uses the term estimate; candidates should show midpoints and weighted products.",
 examSuccess:"Statistics exam-style tables reinforce efficient fx layouts and estimation language."
});

M["18.4"]=C({
 explain:"The modal class is the class with the greatest frequency. The median class is the class containing the median position in cumulative frequency. Because values are grouped, the exact mode or median is generally unknown without further assumptions.",
 keyPoints:["Modal class uses the largest frequency, not largest density unless reading a histogram.","Median class contains the middle observation.","Use cumulative frequencies to locate the median class.","Quote the whole interval."],
 rules:[["median position","around [[n/2]] in ordered/grouped data"],["modal class","highest frequency class"]],
 method:["Find total frequency.","For modal class, identify maximum frequency.","For median class, find middle position and running totals.","State the class interval containing that position."],
 mistakes:["Giving the midpoint as the mode.","Choosing the tallest histogram bar as modal class when widths differ without considering density/area context.","Forgetting cumulative frequency for median class."],
 vocab:["modal class","median class","cumulative frequency","class interval"],
 examples:[
  E("Frequencies for 0–10,10–20,20–30 are 4,11,7. State modal class.",["Largest frequency is 11.","Modal class is [[10\\le x<20]]."]),
  E("Frequencies 3,8,12,5 total 28. Identify median class.",["Middle positions are 14th and 15th.","Cumulative frequencies 3,11,23,28.","Both lie in third class, so third class is median class."]),
  E("Explain why exact median cannot be read from the grouped table alone.",["We know only which interval contains central values, not their exact positions within it."])
 ],
 practice:{
  foundation:["Identify modal class from 5,9,3 frequencies.","Total 20: state middle positions.","Build cumulative frequencies 4,7,6,3.","Find median class from cumulative totals.","State why midpoint is not necessarily the mode."],
  core:["Modal class from unequal intervals in a frequency table.","Find median class for total 35.","Compare modal and median classes.","Find missing frequency so second class becomes modal.","Use cumulative frequency to find class containing upper quartile."],
  extension:["Construct a grouped table with different modal and median classes.","Explain how linear interpolation could estimate median inside a class.","Determine possible exact medians consistent with grouped data.","Compare modal class from table and histogram.","Find a missing frequency from a stated median class condition."],
  reasoning:["Can two classes tie as modal classes?","Why does a histogram's tallest bar represent highest density rather than automatically highest frequency?"]
 },
 homework:[
  H("Foundation","Frequencies 2,7,5,4. State modal class if intervals are A,B,C,D.",["Largest frequency 7.","Class B."]),
  H("Foundation","Total frequency 30. State central position.",["Around 15th/16th observations; locate with cumulative frequency."]),
  H("Core","Frequencies 5,6,10,3. Cumulative frequencies?",["5,11,21,24."]),
  H("Core","Using previous table, median class?",["Total 24, middle around 12th/13th.","Cumulative reaches 11 after class 2 and 21 after class 3.","Class 3."]),
  H("Extension","Explain why median class is more precise than guessing median midpoint.",["The class is guaranteed from cumulative position; midpoint assumes location within class."]),
  H("Extension","Create frequencies for four classes where class 2 is modal but class 3 is median.",["Example 4,10,9,7: total30, class2 modal10; cumulative14 then23, so 15th/16th lie in class3."])
 ],
 cambridge:"The SoW notes that class-containing-median questions occur in examinations even if not highlighted separately in syllabus wording.",
 examSuccess:"Grouped-data exam questions often combine modal class with estimated averages."
});

M["18.5"]=C({
 explain:"Reading a statistical table requires exact extraction before interpretation. Strong conclusions quote relevant frequencies, percentages or measures rather than making vague statements.",
 keyPoints:["Check headings, units and totals first.","Use proportions when group sizes differ.","Distinguish absolute frequency from percentage.","Every inference should be supported by a number from the table."],
 rules:[["[[\\text{percentage}=\\frac{\\text{part}}{\\text{whole}}\\times100]]","comparison across unequal totals"]],
 method:["Read title and variable definitions.","Locate the correct row/column intersection.","Check whether figures are counts, percentages or rates.","Calculate derived values if needed.","Write a complete comparison sentence using evidence."],
 mistakes:["Comparing raw counts when group sizes differ.","Reading the wrong marginal total.","Claiming causation from a table showing association only."],
 vocab:["inference","proportion","percentage","relative frequency","evidence"],
 examples:[
  E("Class A: 18/30 pass; Class B: 20/40 pass. Which has higher pass rate?",["A: [[18/30=60%]].","B: [[20/40=50%]].","Class A has higher pass rate despite fewer passes."]),
  E("A table shows 42 boys and 38 girls, 20 boys and 24 girls choose art. Compare.",["Boys art [[20/42\\approx47.6%]].","Girls art [[24/38\\approx63.2%]].","A larger proportion of girls choose art."]),
  E("Why is '24 girls choose art, so girls prefer art more' incomplete?",["Without the total number of girls and comparable boy proportion, the claim lacks context."])
 ],
 practice:{
  foundation:["Read a specified cell from a table.","Find row total.","Find column total.","Calculate a percentage from count/total.","State one fact supported by a table."],
  core:["Compare two groups of unequal size using percentages.","Find a missing cell from totals.","Identify the largest category proportionally.","Convert a frequency table into percentages.","Write two supported inferences."],
  extension:["Spot a misleading comparison based on raw counts.","Explain why percentages can still mislead with small samples.","Reconstruct a two-way table from marginal totals and percentages.","Compare conditional proportions.","State one conclusion and one limitation."],
  reasoning:["When is a raw frequency comparison fair?","Why should units and bases be stated in a statistical claim?"]
 },
 homework:[
  H("Foundation","12 of 20 students choose A. Percentage?",["[[12/20\\times100=60%]]"]),
  H("Foundation","Row values 7,9,4. Find total.",["[[7+9+4=20]]"]),
  H("Core","Group X: 15/25; Group Y: 24/50. Compare rates.",["X 60%.","Y 48%.","X has higher proportion."]),
  H("Core","Total 40, category A 17, B 11. Find C.",["[[40-17-11=12]]"]),
  H("Extension","Explain why 6/8 can be less reliable than 60/80 despite same 75%.",["Same proportion, but smaller sample gives more sampling variability."]),
  H("Extension","Write a cautious inference from 70% vs 55% in two groups.",["State the observed difference and avoid causal language without further evidence."])
 ],
 cambridge:"Interpretation questions reward accurate reading and evidence-based statements rather than generic comments.",
 examSuccess:"Statistics examples use tables before diagrams, reinforcing careful extraction."
});

M["18.6"]=C({
 explain:"Comparing data sets requires both centre and spread. A higher median/mean describes a higher typical value; a smaller range/IQR describes greater consistency. Conclusions should be contextual and numerical.",
 keyPoints:["Compare like with like: mean with mean, median with median.","Use spread as well as centre.","Prefer median/IQR for skewed or outlier-prone data.","Write two-part comparison sentences."],
 rules:[["smaller spread","more consistent"],["larger median/mean","larger typical value"]],
 method:["Choose suitable centre measure.","Compare numerical centres.","Choose suitable spread measure.","Compare spread.","Translate both comparisons into context."],
 mistakes:["Saying 'better' without context.","Using only centre.","Mixing median of one set with mean of another."],
 vocab:["compare","typical","consistent","spread","centre","distribution"],
 examples:[
  E("A: median 62, IQR 8. B: median 58, IQR 15. Compare.",["A has higher typical value (62 vs 58).","A is more consistent because IQR is smaller (8 vs 15)."]),
  E("Team X mean 12.4, range 6; Team Y mean 13.1, range 20.",["Y has slightly higher average.","X has much smaller spread, so is more consistent."]),
  E("Why might median/IQR be preferable if one data set has an extreme outlier?",["Both are resistant to extreme values."])
 ],
 practice:{
  foundation:["Compare two means.","Compare two medians.","State which data set is more consistent from ranges.","State which is more consistent from IQRs.","Complete a two-sentence comparison."],
  core:["Compare median/IQR pairs.","Compare mean/range pairs and mention limitation.","Choose suitable statistics for skewed data.","Explain conflict when mean is higher but median lower.","Use context in a comparison."],
  extension:["Construct two sets with same median but different IQR.","Explain why range may be unstable.","Compare three groups and rank consistency.","Critique a one-statistic comparison.","Decide which group is preferable under a stated goal."],
  reasoning:["Can a group have higher mean but lower median? Explain.","Why does 'more consistent' not mean 'better' automatically?"]
 },
 homework:[
  H("Foundation","A range 9, B range 14. Which more consistent?",["A, because smaller range."]),
  H("Foundation","A median 21, B median 25. Which higher typical value?",["B, based on median."]),
  H("Core","A median 70 IQR12; B median66 IQR7.",["A higher typical value.","B more consistent."]),
  H("Core","A mean 15 range4; B mean16 range11.",["B slightly higher average.","A much more consistent."]),
  H("Extension","Explain why same mean does not imply similar distributions.",["Values can be arranged with very different spread or shape while preserving total/count."]),
  H("Extension","Write a balanced conclusion for two classes where one has higher median but larger IQR.",["One class typically scores higher, but the other is more consistent. State both with values."])
 ],
 cambridge:"Comparison questions require numerical evidence and contextual interpretation.",
 examSuccess:"Exam Success models paired centre-and-spread comments."
});

M["18.7"]=C({
 explain:"Statistics supports evidence, not certainty. Conclusions depend on how data was collected, sample size, representativeness, measurement quality and whether an observed association could have alternative explanations.",
 keyPoints:["A biased sample can invalidate a conclusion.","Small samples give unstable estimates.","Association does not prove causation.","Data may be outdated, incomplete or measured inconsistently."],
 rules:[["correlation ≠ causation","association alone is insufficient"],["sample → population","requires representative sampling"]],
 method:["Identify the claimed conclusion.","Ask what population it refers to.","Check sample method and size.","Look for confounding variables or measurement issues.","Rewrite the conclusion using cautious language."],
 mistakes:["Generalising beyond the sampled population.","Using 'proves' when data only suggests.","Ignoring non-response or selection bias."],
 vocab:["sample","population","bias","representative","confounding variable","causation","association"],
 examples:[
  E("A survey of 40 gym members finds 80% exercise weekly. Can we say 80% of all adults do?",["No.","Gym members are a biased sample for adult exercise habits."]),
  E("Ice-cream sales and sunburn cases are positively correlated. Does ice cream cause sunburn?",["No.","Hot sunny weather is a plausible third variable affecting both."]),
  E("A website poll has 20,000 responses. Is it automatically representative?",["No.","Large size does not remove voluntary-response bias."])
 ],
 practice:{
  foundation:["Identify population and sample.","Name one possible bias.","State whether claim is causal or associative.","Explain why sample size matters.","Rewrite 'proves' more cautiously."],
  core:["Critique an online poll.","Critique a school survey conducted only in one class.","Suggest a better sampling method.","Identify a confounding variable.","Explain why outdated data limits conclusions."],
  extension:["Compare random, stratified and convenience sampling impacts.","Design a survey to reduce bias.","Evaluate a claim from observational data.","Explain why a huge biased sample can be worse than a smaller representative one.","List three limitations of a hypothetical study."],
  reasoning:["What evidence would strengthen a causal claim?","Why is representativeness usually more important than sheer sample size?"]
 },
 homework:[
  H("Foundation","Survey only top-set students about homework time. State limitation.",["Sample is not representative of all students."]),
  H("Foundation","Replace 'proves' in a correlation claim.",["Use 'suggests an association' or similar cautious wording."]),
  H("Core","Why may a voluntary online poll be biased?",["People who choose to respond may differ systematically from non-responders."]),
  H("Core","Name a confounder between age and vocabulary in children.",["Age itself relates to both growth and learning; when comparing height and vocabulary, age is a likely third variable."]),
  H("Extension","Why can 1000 biased responses be less useful than 200 random responses?",["Bias creates systematic error that larger sample size does not fix."]),
  H("Extension","Give two improvements to a school canteen survey.",["Use random/stratified sampling across year groups.","Survey at varied times or include non-users as well."])
 ],
 cambridge:"Candidates are expected to appreciate restrictions when drawing conclusions from data.",
 examSuccess:"Raise your grade sections frequently challenge overconfident statistical claims."
});

M["19.1"]=C({
 explain:"Different statistical displays suit different data. The Coursebook covers stem-and-leaf, pictograms, bar charts, pie charts and line graphs; the SoW also expects composite and dual bar charts. Accuracy of scale, labels, keys and ordering matters.",
 keyPoints:["Bar charts: separated bars for discrete/categorical data.","Pie charts: sector angle = frequency/total ×360°.","Pictograms require a clear key and correct fractions of symbols.","Stem-and-leaf leaves must be ordered and include a key.","Dual/composite bar charts need a legend."],
 rules:[["[[\\theta=\\frac fN\\times360^\\circ]]","pie sector angle"],["stem | leaf","include a key"]],
 method:["Choose a display appropriate to the variable.","Select a sensible scale.","Label axes/categories and title.","Plot/draw accurately.","Check totals: pie angles 360°, frequencies preserved."],
 mistakes:["Bars touching on a bar chart.","Missing stem-and-leaf key.","Using inconsistent symbol sizes in a pictogram.","Pie angles not totalling 360°."],
 vocab:["bar chart","dual bar chart","composite bar chart","pie chart","pictogram","stem-and-leaf"],
 examples:[
  E("36 students choose A,B,C,D with frequencies 9,6,11,10. Find pie angles.",["One student [[=360/36=10^\\circ]].","Angles 90°,60°,110°,100°.","Check total 360°."],{image:"exam-pie-worked.webp"}),
  E("Construct stem-and-leaf for 12,15,18,21,21,24,29,31,34.",["Stems 1,2,3.","Leaves ordered.","Key e.g. [[2|4=24]]."]),
  E("A pictogram key is 1 symbol =8 people. What is 2.5 symbols?",["[[2.5\\times8=20]] people."])
 ],
 practice:{
  foundation:["Draw bar chart for frequencies 3,5,7,4.","Find pie angle for 12/48.","Find pie angle for 9/36.","Interpret 3.5 symbols if key=6.","Write a key for stem-and-leaf."],
  core:["Construct stem-and-leaf for 11,14,17,18,22,24,24,29,31.","Find all pie angles for 5,7,8,10.","Design a dual bar chart for two classes.","Explain why discrete bar-chart bars are separated.","Construct a composite bar chart from two categories per group."],
  extension:["Sector 126°: find fraction and percentage.","Find missing pie sector from others.","Create back-to-back stem-and-leaf.","Critique a bar chart with truncated axis.","Choose best display for two scenarios and justify."],
  reasoning:["Why is a bar chart easier for precise comparison than some pictograms?","When is a pie chart a poor choice?"]
 },
 homework:[
  H("Foundation","14 out of 56: pie angle.",["[[14/56=1/4]]","[[90^\\circ]]"]),
  H("Foundation","3.5 symbols, key 6.",["[[3.5\\times6=21]]"]),
  H("Core","Stem-and-leaf for 13,14,18,21,21,25,29.",["Stem 1: 3,4,8.","Stem 2: 1,1,5,9.","Add key."]),
  H("Core","Frequencies 8,12,10 total30: angles.",["Each item 12°.","96°,144°,120°."]),
  H("Extension","Sector 54°: percentage.",["[[54/360=0.15]]","15%."]),
  H("Extension","Explain why a truncated vertical axis can mislead.",["It visually exaggerates relative height differences unless the numeric scale is read carefully."])
 ],
 cambridge:"The syllabus includes drawing and interpreting several displays; accuracy and communication are assessed.",
 examSuccess:"Statistics chapter includes worked bar, pie and stem-and-leaf examples with exam tips.",
 sourceImages:["bar-chart-worked.webp","exam-pie-worked.webp","exam-statistics.webp"]
});

M["19.2"]=C({
 explain:"A scatter diagram plots paired measurements for two variables. Each pair becomes one point, clearly marked as a small cross. Interpretation focuses on overall pattern, unusual points and context.",
 keyPoints:["Use one coordinate pair per observation.","Choose scales that use the graph area effectively.","Mark points accurately with small crosses.","Describe direction and strength rather than joining points.","Identify possible outliers."],
 rules:[["bivariate data","paired values on the same individual/item"],["outlier","point far from overall pattern"]],
 method:["Label axes with variables and units.","Choose sensible scales.","Plot each ordered pair as a cross.","Scan for overall trend.","Identify points substantially away from the pattern."],
 mistakes:["Joining points in order.","Swapping x and y.","Using oversized blobs rather than precise crosses."],
 vocab:["scatter diagram","bivariate","outlier","trend","correlation"],
 examples:[
  E("Plot (1,7),(2,5),(3,6),(4,3),(5,2),(6,1). Describe.",["Plot each point.","Overall pattern falls as x increases.","Negative correlation."]),
  E("A point (9,2) lies far from a strong positive trend. What is it?",["An outlier or anomalous point relative to the main pattern."]),
  E("Why should points not be joined?",["Scatter data are separate paired observations, not a sequential path."])
 ],
 practice:{
  foundation:["Plot five coordinate pairs.","State axes for height vs arm span.","Identify an outlier.","Describe a visible upward trend.","Explain bivariate data."],
  core:["Choose scales for data ranges 140–190 and 40–90.","Plot 8 pairs and describe pattern.","Compare two scatter clouds for strength.","Identify whether one point is influential.","Explain why crosses improve accuracy."],
  extension:["Design data likely to show negative correlation.","Design data likely to show no correlation.","Discuss effect of an outlier on interpretation.","Suggest two variables for a classroom investigation and predict trend.","Explain why scale choice can visually exaggerate or hide a pattern."],
  reasoning:["Can a scatter plot have a trend but no cause-and-effect relationship?","Why is sample size important when judging apparent pattern?"]
 },
 homework:[
  H("Foundation","If x increases and y generally decreases, name correlation.",["Negative correlation."]),
  H("Foundation","What is an outlier?",["A point noticeably away from the main data pattern."]),
  H("Core","Why use small crosses?",["They show exact plotted coordinates more clearly than large dots."]),
  H("Core","Why not join scatter points?",["The observations are not successive points on one continuous curve."]),
  H("Extension","Give two variables likely positively correlated.",["Example: height and arm span; justify that larger bodies tend to have larger measurements."]),
  H("Extension","Explain one effect of an outlier.",["It may weaken apparent correlation or strongly influence a fitted line."])
 ],
 cambridge:"The SoW explicitly says plotted points should be clearly marked, for example as small crosses.",
 examSuccess:"Statistics uses compact paired-data examples and asks for interpretation, not just plotting.",
 sourceImages:["scatter-exercise.webp"]
});

M["19.3"]=C({
 explain:"Correlation describes how two variables move together. Positive correlation means larger values of one tend to accompany larger values of the other; negative means one tends to decrease; zero means no clear linear association. Strength describes how tightly points cluster around a trend.",
 keyPoints:["Direction: positive, negative or zero.","Strength: strong, moderate or weak where justified.","Correlation is about association, not causation.","A third variable may create the observed relationship."],
 rules:[["positive","upward trend"],["negative","downward trend"],["zero","no clear linear trend"]],
 method:["Look left to right.","Decide direction of the overall cloud.","Judge how tightly points cluster.","Note outliers.","State interpretation cautiously in context."],
 mistakes:["Saying 'strong' just because slope is steep.","Assuming correlation proves cause.","Calling a curved relationship zero correlation without qualification."],
 vocab:["positive correlation","negative correlation","zero correlation","strength","association","causation"],
 examples:[
  E("Points rise closely left-to-right.",["Strong positive correlation."]),
  E("Points fall but are widely scattered.",["Weak/moderate negative correlation depending on spread."]),
  E("Shoe size and reading age correlate in children. Explain a third variable.",["Age may affect both shoe size and reading development."])
 ],
 practice:{
  foundation:["Classify an upward trend.","Classify a downward trend.","Classify random cloud.","State whether steepness equals strength.","Define correlation."],
  core:["Describe four hypothetical scatter plots with direction and strength.","Identify a likely confounder in two examples.","Explain why outliers affect strength.","Distinguish zero correlation from no relationship at all.","Write contextual correlation statements."],
  extension:["Give a causal mechanism and a non-causal alternative for one correlation.","Explain curved association with near-zero linear correlation.","Discuss restricted-range data and apparent correlation.","Design a study to test a suspected causal link.","Explain Simpson's-paradox idea qualitatively using grouped data."],
  reasoning:["Why can a very steep trend be weak?","Why does correlation not prove causation even when very strong?"]
 },
 homework:[
  H("Foundation","Upward cloud: direction?",["Positive."]),
  H("Foundation","Random cloud: direction?",["Zero/no clear correlation."]),
  H("Core","Strong negative correlation means?",["As one variable increases, the other tends to decrease, with points close to a downward trend."]),
  H("Core","Does strong correlation prove cause?",["No. Other variables, reverse causality or coincidence may explain it."]),
  H("Extension","Ice cream sales and drowning incidents rise together. Suggest confounder.",["Hot weather/season increases both swimming and ice-cream purchasing."]),
  H("Extension","Explain why slope is not strength.",["Slope measures rate of change of a fitted trend; strength measures scatter around that trend."])
 ],
 cambridge:"The SoW explicitly requires understanding that correlation does not prove cause and effect.",
 examSuccess:"Use short 'describe the correlation' items followed by interpretation prompts."
});

M["19.4"]=C({
 explain:"A line of best fit is a single straight line drawn by eye to represent a scatter plot's overall linear trend. It should extend across the full data set with roughly balanced points above and below. It supports interpolation; extrapolation is less reliable.",
 keyPoints:["One straight ruled line across the data cloud.","Balance points above and below over the whole range.","It need not pass through any data point.","Interpolation stays within observed x-range.","Extrapolation goes beyond evidence and is less reliable."],
 rules:[["interpolation","prediction inside data range"],["extrapolation","prediction outside data range"]],
 method:["Ignore isolated anomalies when judging the main cloud.","Position a single line through the centre of trend.","Check balance above/below along full length.","For prediction, move from x to line then to y.","State estimate and whether it is interpolation/extrapolation."],
 mistakes:["Joining end points.","Forcing line through origin.","Using extrapolation without a reliability warning."],
 vocab:["line of best fit","interpolation","extrapolation","estimate","trend"],
 examples:[
  E("Explain how to place a best-fit line.",["Use one straight line across full cloud.","Aim for roughly equal distribution above and below.","Do not chase individual points."]),
  E("Data x-values are 10–50. Predicting at x=35 is what?",["Interpolation: inside observed range."]),
  E("Predicting at x=90 from same data?",["Extrapolation.","Less reliable because trend may not continue."])
 ],
 practice:{
  foundation:["State whether 20 within 5–30 is interpolation.","State whether 40 is extrapolation.","List two features of a good best-fit line.","Should it pass through every point?","Should it extend only between two central points?"],
  core:["Draw a best-fit line on provided scatter.","Use line to estimate y at x=7.","Explain why one outlier may be ignored.","Compare two plausible lines and choose better.","Estimate equation from two convenient points on the line."],
  extension:["Discuss reliability of extrapolation in a real context.","Use a line to solve inverse prediction x from y.","Explain effect of range restriction.","Compare hand-drawn and regression lines conceptually.","Find equation and use it to interpolate."],
  reasoning:["Can two people draw different acceptable lines? Why?","Why is a line beyond the data range an assumption rather than direct evidence?"]
 },
 homework:[
  H("Foundation","Observed x 2–12. Prediction x=8?",["Interpolation."]),
  H("Foundation","Observed x 2–12. Prediction x=20?",["Extrapolation."]),
  H("Core","Give two criteria for best-fit line.",["Extends across full data.","Roughly balanced points above/below."]),
  H("Core","Why should it not zig-zag through points?",["It represents overall linear trend, not individual observations."]),
  H("Extension","Line estimated [[y=2.5x+4]]. Predict y at x=6.",["[[y=2.5(6)+4=19]]"]),
  H("Extension","Same model, data x 1–10. Comment on prediction at x=50.",["It is far extrapolation and potentially unreliable."])
 ],
 cambridge:"The SoW gives explicit criteria for the line of best fit and emphasises full-range balance.",
 examSuccess:"Statistics exam tasks combine line drawing with interpretation and cautious prediction."
});

M["19.5"]=C({
 explain:"Cumulative frequency is a running total. For grouped continuous data, each cumulative total is plotted against the upper class boundary. Points should be marked clearly and joined by a smooth increasing curve.",
 keyPoints:["Cumulative totals can only stay same or increase.","Plot at upper class boundaries.","Use small crosses.","Join with a smooth curve, not a jagged polygon where the syllabus expects a curve.","Total cumulative frequency equals total number of values."],
 rules:[["[[CF_k=f_1+f_2+\\cdots+f_k]]","running total"],["x-coordinate","upper class boundary"]],
 method:["Create cumulative-frequency column.","Check final total equals total frequency.","Pair each total with its upper class boundary.","Choose axes and plot crosses.","Draw a smooth increasing curve through the trend."],
 mistakes:["Plotting at class midpoints.","Using ordinary frequencies instead of cumulative totals.","Curve decreasing at any point."],
 vocab:["cumulative frequency","upper class boundary","running total","smooth curve"],
 examples:[
  E("Frequencies 5,8,11,6 for classes ending 10,20,30,40. Find CF.",["Running totals 5,13,24,30.","Plot (10,5),(20,13),(30,24),(40,30)."]),
  E("Why use upper boundary 20 for cumulative total 13?",["13 represents all observations up to the end of that class, so x=20 matches that cumulative threshold."]),
  E("What should the final CF equal?",["The total sample size."])
 ],
 practice:{
  foundation:["CF for 4,7,5,9.","Final CF given frequencies 3,6,8.","Pair totals with upper boundaries.","State why curve cannot fall.","Check a wrong CF column."],
  core:["Complete CF table with one missing frequency.","Plot six cumulative points.","Choose sensible axes.","Convert CF back to class frequencies by differences.","Explain why midpoint plotting is wrong."],
  extension:["Construct frequency table from a cumulative table.","Estimate proportion below a threshold after graphing.","Compare two cumulative curves qualitatively.","Explain effect of large class width on curve detail.","Design grouped data producing a steep section."],
  reasoning:["Why can cumulative frequency curve be steep even though class frequencies are not directly plotted as heights?","How does final total help identify an arithmetic error?"]
 },
 homework:[
  H("Foundation","Frequencies 3,5,8,4: cumulative frequencies.",["3,8,16,20."]),
  H("Foundation","If final CF is 75, sample size?",["75."]),
  H("Core","CF 4,11,19,30: recover class frequencies.",["4, [[11-4=7]], [[19-11=8]], [[30-19=11]]."]),
  H("Core","Why plot grouped CF at upper boundaries?",["Each cumulative total counts values up to that upper limit."]),
  H("Extension","Frequencies 6,0,9: CF?",["6,6,15.","A flat segment reflects zero frequency in the middle class."]),
  H("Extension","Explain why a smooth curve gives estimates between class boundaries.",["Exact individual locations are unknown, so interpolation through grouped data is approximate."])
 ],
 cambridge:"The SoW specifies crosses and a smooth curve for cumulative-frequency diagrams.",
 examSuccess:"Statistics chapter helps with running totals and percentile interpretation.",
 sourceImages:["cumfreq.webp"]
});

M["19.6"]=C({
 explain:"Median, quartiles and percentiles are read from cumulative-frequency positions. For n observations, the median is near n/2, Q1 near n/4 and Q3 near 3n/4. Values read from the curve are estimates because the original grouped data is not exact.",
 keyPoints:["Use cumulative-frequency positions first, then read across to curve and down to x-axis.","IQR = Q3−Q1.","A percentile p corresponds to p% of observations at or below that value.","Cutoff questions often reverse the direction."],
 rules:[["[[Q_1:n/4]]","lower quartile position"],["[[Q_2:n/2]]","median position"],["[[Q_3:3n/4]]","upper quartile position"],["[[IQR=Q_3-Q_1]]","spread"]],
 method:["Read total n from final cumulative frequency.","Calculate target CF position.","Move horizontally from CF axis to curve.","Move vertically to data axis.","State estimate and units."],
 mistakes:["Using x-axis percentage instead of CF position.","Reading quartiles at 25,50,75 regardless of n.","For top p%, forgetting cutoff corresponds to 100−p percentile."],
 vocab:["percentile","quartile","median","interquartile range","cutoff"],
 examples:[
  E("Curve has n=80. State CF positions for Q1, median, Q3.",["[[20,40,60]]."]),
  E("Top 20% of 200 progress. Which CF position gives cutoff?",["80% lie at or below cutoff.","[[0.8\\times200=160]].","Read x at CF=160."]),
  E("Q1≈18, Q3≈31. Find IQR.",["[[31-18=13]]."])
 ],
 practice:{
  foundation:["n=60: median position.","n=80: Q1/Q3 positions.","n=120: 90th percentile CF.","Find IQR from Q1=24,Q3=39.","Interpret 75th percentile."],
  core:["Read median from a supplied curve.","Read Q1,Q3 and IQR.","Find 10th and 90th percentiles.","Estimate number above a given threshold.","Find cutoff for top 15%."],
  extension:["Compare two curves using median/IQR.","Estimate probability X≤a from curve.","Explain why percentile readings are approximate.","Assess reliability in a very flat/steep region.","Convert a stated percentile into an estimated count."],
  reasoning:["Why does a top-10% cutoff use the 90th percentile?","What does a smaller IQR imply about the middle half of data?"]
 },
 homework:[
  H("Foundation","n=100: median CF.",["[[100/2=50]]."]),
  H("Foundation","n=120: Q1 and Q3 CF.",["[[30]] and [[90]]."]),
  H("Core","Q1=18,Q3=31. IQR?",["[[31-18=13]]."]),
  H("Core","n=250. 60th percentile CF?",["[[0.60\\times250=150]]."]),
  H("Extension","Top 10% of 250 receive award. Cutoff CF?",["90% at/below cutoff.","[[0.9\\times250=225]]."]),
  H("Extension","Why are graph values estimates?",["Grouped data loses exact individual positions and the smooth curve interpolates between known totals."])
 ],
 cambridge:"The SoW requires median, percentiles, quartiles and IQR from cumulative-frequency diagrams.",
 examSuccess:"Statistics exam questions often pair graph reading with comparison statements."
});

M["19.7"]=C({
 explain:"A histogram represents continuous grouped data. When class widths differ, bar height must be frequency density so that bar area is proportional to frequency. Bars touch because the underlying variable is continuous.",
 keyPoints:["Vertical axis is labelled Frequency density.","Frequency density = frequency ÷ class width.","Bar area represents frequency.","Unequal-width bars cannot use frequency directly as height.","Class boundaries meet with no gaps."],
 rules:[["[[\\text{frequency density}=\\frac{f}{\\text{class width}}]]","bar height"],["[[f=\\text{density}\\times\\text{class width}]]","recover frequency"]],
 method:["Calculate every class width.","Compute density for each class.","Draw touching bars over the correct intervals.","Label axes, especially frequency density.","When reading, multiply height × width to recover frequency."],
 mistakes:["Using frequency as height for unequal classes.","Leaving gaps between continuous classes.","Comparing bar heights as frequencies when widths differ."],
 vocab:["histogram","frequency density","class width","continuous data","bar area"],
 examples:[
  E("Class 140<h≤150 has frequency15. Find density.",["Class width 10.","[[15/10=1.5]]."]),
  E("Bar 150–160 has density3.5. Find frequency.",["Width 10.","[[f=3.5\\times10=35]]."]),
  E("Two classes each frequency20, widths5 and10. Compare heights.",["Densities 4 and2.","Same frequency can produce different heights because widths differ."])
 ],
 practice:{
  foundation:["Density f=12,width4.","Density f=18,width6.","Frequency density2.5,width8.","Class width30–45.","State vertical-axis label."],
  core:["Frequency density1.8,width15.","Width if frequency24,density3.","Complete missing density table.","Draw histogram from grouped table.","Recover missing frequencies from bar heights."],
  extension:["Two bars equal area different widths: compare frequencies.","Missing bar from total frequency.","Estimate part-class frequency assuming uniformity within class.","Explain why equal-frequency bars can have different heights.","Critique a histogram drawn with gaps."],
  reasoning:["Why is area the invariant quantity representing frequency?","Why does frequency density have unusual units?"]
 },
 homework:[
  H("Foundation","f=21,width7: density.",["[[21/7=3]]."]),
  H("Foundation","density1.5,width12: frequency.",["[[1.5\\times12=18]]."]),
  H("Core","f=30,density2.5: width.",["[[30/2.5=12]]."]),
  H("Core","Class50–65 f=24: density.",["Width15.","[[24/15=1.6]]."]),
  H("Extension","Class width8, bar area20: frequency.",["Histogram area represents frequency.","Frequency20."]),
  H("Extension","Explain why density is required for unequal widths.",["It adjusts height so width×height remains proportional to frequency."])
 ],
 cambridge:"The SoW explicitly defines frequency density and requires that label on the vertical axis.",
 examSuccess:"Statistics offers worked grouped-data diagrams and interpretation prompts.",
 sourceImages:["histogram-students.webp"]
});

M["19.8"]=C({
 explain:"Frequency density calculations connect a histogram's geometry to the underlying frequencies. Use the triangle of relationships: density = frequency/width, frequency = density×width, width = frequency/density.",
 keyPoints:["Always compute class width from boundaries.","Use bar height as density, not raw frequency.","Area = width×density = frequency.","Missing values can be recovered in either direction."],
 rules:[["[[d=f/w]]","density"],["[[f=dw]]","frequency"],["[[w=f/d]]","width"]],
 method:["Identify which of f,d,w is missing.","Compute the class width accurately.","Rearrange the relationship.","Use consistent scale if reading from a histogram.","Check bar area against frequency."],
 mistakes:["Using upper boundary as width.","Reading height directly as frequency.","Forgetting scale on density axis."],
 vocab:["frequency density","class width","area","scale"],
 examples:[
  E("Frequency 32, class 10≤x<18. Density?",["Width [[=8]].","[[d=32/8=4]]."]),
  E("Density 2.4, class width15. Frequency?",["[[f=2.4\\times15=36]]."]),
  E("Frequency45, density3. Find class width.",["[[w=45/3=15]]."])
 ],
 practice:{
  foundation:["f=18,w=6.","d=3,w=7.","f=40,d=2.","Width 25–40.","Area of bar width5,height4."],
  core:["Complete table with f,w,d.","Read density from axis and find f.","Find missing class boundary from width.","Use total frequency to find missing bar area.","Compare two bar frequencies."],
  extension:["Scale density axis not starting at 0? Discuss histogram validity.","Estimate part of class frequency using area proportion.","Find total sample size from histogram.","Construct a class with same frequency but half width.","Explain dimensions/units of density."],
  reasoning:["If class width doubles for same frequency, what happens to density?","Why is relative bar area preserved if both axes are rescaled?"]
 },
 homework:[
  H("Foundation","f=28,w=7.",["[[d=4]]."]),
  H("Foundation","d=1.2,w=20.",["[[f=24]]."]),
  H("Core","f=42,d=3.5.",["[[w=12]]."]),
  H("Core","Class 12–20 density2.25.",["Width8.","[[f=18]]."]),
  H("Extension","Same frequency30: widths5 and15. Densities?",["[[30/5=6]], [[30/15=2]]."]),
  H("Extension","Explain why halving width doubles density for fixed frequency.",["Since [[d=f/w]], inverse relationship with width when f is fixed."])
 ],
 cambridge:"Calculation with density is a separate SoW subunit because histogram reading often hides frequency behind area.",
 examSuccess:"Grouped-data calculations support exam-style missing-value questions."
});

M["19.9"]=C({
 explain:"Inference from diagrams means moving beyond reading a value to making a supported statement. The key is to distinguish direct observation, calculation and interpretation, and to avoid claiming more than the diagram can justify.",
 keyPoints:["Quote numerical evidence.","Distinguish estimate from exact reading.","Use percentages for fair comparisons where totals differ.","State what the graph shows, not what you assume caused it."],
 rules:[["evidence + context","strong statistical inference"],["estimate","appropriate for graph interpolation"]],
 method:["Read relevant values carefully.","Calculate difference/percentage if helpful.","Write a comparison or trend statement.","Add context.","Mention uncertainty/limitation if applicable."],
 mistakes:["Vague words like 'much bigger' without numbers.","Causal claims from observational graphs.","Ignoring different scales/totals."],
 vocab:["inference","evidence","estimate","trend","limitation"],
 examples:[
  E("Bar chart: A=42, B=31. Write a supported comparison.",["Category A is 11 higher than B (42 vs31)."]),
  E("Pie charts compare groups of different totals. Can sector size alone compare counts?",["No.","Same sector proportion can represent different absolute counts."]),
  E("CF graph estimate median 27. How should answer be phrased?",["Approximately 27, because value is read from a smooth curve."])
 ],
 practice:{
  foundation:["Write one fact from a bar chart.","Calculate difference between two bars.","State approximate value from graph.","Identify largest category.","Read a percentage sector."],
  core:["Compare two pie charts with different totals.","Infer trend from line graph.","Use median/IQR from CF graph to compare.","Use histogram to identify dense interval.","Write an evidence-backed sentence."],
  extension:["Critique an unsupported claim.","Separate descriptive and causal statements.","Compare two diagrams with different scales.","Explain uncertainty from grouped data.","Identify what extra data would strengthen an inference."],
  reasoning:["When is a graph reading exact and when approximate?","Why can visually large sectors be misleading across different totals?"]
 },
 homework:[
  H("Foundation","A=25,B=18. Difference?",["[[25-18=7]]."]),
  H("Foundation","Graph value appears between 14 and15. How report?",["As an estimate, e.g. about14.5 depending on scale."]),
  H("Core","Two groups have 40% vs55%. Write comparison.",["Second group proportion is 15 percentage points higher."]),
  H("Core","Why not infer total count from pie sector without total sample?",["Sector gives proportion only."]),
  H("Extension","MedianA=32,IQR=6; MedianB=30,IQR=12. Infer.",["A has slightly higher typical value and is more consistent."]),
  H("Extension","Rewrite 'Graph proves exercise causes happiness'.",["Graph suggests an association; causal conclusion needs stronger evidence."])
 ],
 cambridge:"Inference questions should be tied to actual data values and qualified appropriately.",
 examSuccess:"Statistics Raise your grade tasks focus on interpretation rather than mechanical plotting."
});

M["19.10"]=C({
 explain:"Graphs can compare data sets using centre, spread, shape and unusual values. Cumulative-frequency graphs are especially useful for median/IQR; histograms help compare distribution shape and concentration.",
 keyPoints:["Use numerical centre and spread when available.","Compare graph scales consistently.","Mention skew/clustering only when visible.","Contextualise 'higher', 'more variable' or 'more consistent'."],
 rules:[["smaller IQR","middle 50% more consistent"],["higher median","higher typical value"]],
 method:["Identify comparable statistics from each graph.","Read them using same method.","Compute spread if needed.","Describe centre difference.","Describe consistency/shape difference."],
 mistakes:["Comparing heights from histograms with different widths as frequencies.","Using only one statistic.","Ignoring different sample sizes when comparing counts."],
 vocab:["distribution","centre","spread","shape","skew","consistency"],
 examples:[
  E("CF curves: A median45,Q1=38,Q3=51; B median42,Q1=30,Q3=54.",["A median higher (45 vs42).","A IQR13; B IQR24.","A is more consistent."]),
  E("Two histograms have different totals. What should be compared cautiously?",["Shape/density patterns can be compared; raw bar area/counts need sample-size awareness."]),
  E("Why pair median with IQR?",["Both focus on central distribution and resist extremes."])
 ],
 practice:{
  foundation:["Compare two medians.","Compare two IQRs.","State more consistent group.","Calculate IQR from graph readings.","Write one balanced comparison."],
  core:["Compare two CF graphs.","Compare histograms for concentration.","Compare stem-and-leaf using median/range.","Identify skew from histogram qualitatively.","Use percentages with unequal totals."],
  extension:["Discuss conflicting centre/spread evidence.","Explain why same median and IQR do not mean same distribution.","Compare bimodal and unimodal shapes.","Critique a comparison across different axis scales.","Choose which graph best supports a stated comparison."],
  reasoning:["Can a data set be more consistent but have a lower typical value?","Why should comparisons use the same measure across groups?"]
 },
 homework:[
  H("Foundation","A IQR9,B IQR14: more consistent?",["A."]),
  H("Foundation","A median52,B48: higher typical?",["A."]),
  H("Core","A Q1=20,Q3=35; B Q1=18,Q3=40.",["IQR A15, B22.","A more consistent."]),
  H("Core","Write two-part comparison if A median higher but IQR larger.",["A typically higher, but B more consistent."]),
  H("Extension","Explain why a histogram can reveal shape beyond median/IQR.",["It shows how density is distributed across intervals, including skew, peaks and gaps."]),
  H("Extension","Why might percentage histograms be better than frequency histograms for unequal sample sizes?",["They standardise totals, making relative distributions comparable."])
 ],
 cambridge:"Graph comparison should use evidence from displayed distributions and measures.",
 examSuccess:"Exam questions often award separate marks for centre and spread comparisons."
});

M["19.11"]=C({
 explain:"Graphs can mislead through axis choices, class grouping, sample bias and extrapolation. Statistical literacy means checking how the visual was constructed before accepting its apparent message.",
 keyPoints:["Truncated axes can exaggerate differences.","Unequal class widths require histograms, not ordinary frequency bars.","Small or biased samples limit generalisation.","Extrapolation beyond observed range is uncertain.","Correlation graphs do not establish cause."],
 rules:[["visual impression ≠ evidence","check scales and construction"],["outside data range","extrapolation risk"]],
 method:["Read axes and units.","Check whether zero is omitted and whether that matters.","Check class widths and sample source.","Separate description from causal interpretation.","State the limitation and how it affects confidence."],
 mistakes:["Assuming any non-zero baseline is dishonest; sometimes it is useful but must be clear.","Calling every unusual point an error.","Ignoring sample context."],
 vocab:["misleading graph","truncated axis","bias","extrapolation","sampling"],
 examples:[
  E("Bars 98 and100 are drawn from axis starting at97. Effect?",["Visual difference appears much larger than the actual 2-unit difference."]),
  E("A line of best fit is used far beyond observed range.",["This is extrapolation and may be unreliable if relationship changes."]),
  E("Histogram uses equal bar heights for unequal-width equal frequencies.",["Incorrect because density should adjust heights so area represents frequency."])
 ],
 practice:{
  foundation:["Identify truncated axis.","Identify extrapolation.","State one sampling limitation.","State one graph-design issue.","Explain correlation vs causation."],
  core:["Critique a news bar chart.","Critique uneven class intervals in a frequency chart.","Explain effect of small sample.","Suggest improved axis design.","Rewrite a causal caption."],
  extension:["Evaluate two alternative visualisations.","Explain when starting axis above zero is defensible.","Discuss how grouping can hide multimodality.","Assess effect of non-response bias.","Propose data needed before generalising."],
  reasoning:["Can a technically correct graph still be rhetorically misleading?","Why is transparency about scale more important than a blanket 'always start at zero' rule?"]
 },
 homework:[
  H("Foundation","What is extrapolation?",["Prediction beyond observed data range."]),
  H("Foundation","One risk of truncated axis?",["Can visually exaggerate small differences."]),
  H("Core","Why do unequal histogram classes need density?",["Otherwise bar area would not represent frequency fairly."]),
  H("Core","Why is convenience sample weak?",["Selection may not represent target population."]),
  H("Extension","Explain one situation where non-zero axis can be appropriate.",["When focusing on small variation in a continuous measure, provided scale is clearly labelled and interpretation is not deceptive."]),
  H("Extension","How can grouping hide information?",["Different raw distributions can collapse into the same class frequencies, masking clusters/outliers within classes."])
 ],
 cambridge:"The syllabus expects candidates to appreciate restrictions on conclusions from diagrams.",
 examSuccess:"Raise your grade tasks are useful for spotting interpretation traps."
});

M["20.1"]=C({
 explain:"A function is a rule that assigns each allowed input exactly one output. Function notation f(x) names the output from input x. Domain is the set of permitted inputs; range is the set of outputs produced.",
 keyPoints:["Each input has one output in a function.","Different inputs may share an output unless one-to-one is required.","Domain can be restricted by context or algebra.","Range depends on both rule and domain."],
 rules:[["[[f(a)]]","substitute a for x"],["domain","allowed inputs"],["range","resulting outputs"]],
 method:["Read the function rule.","Substitute the input everywhere x occurs.","Apply order of operations.","For domain/range, consider restrictions and mapping.","State outputs clearly."],
 mistakes:["Treating f as multiplication.","Replacing only one x in a formula.","Confusing domain and range."],
 vocab:["function","input","output","domain","range","mapping","function notation"],
 examples:[
  E("If [[f(x)=3x-1]], find [[f(5)]].",["[[f(5)=3(5)-1=14]]."]),
  E("If [[g(x)=x^2+2]], find [[g(-3)]].",["[[(-3)^2+2=11]]."]),
  E("For [[h(x)=1/(x-4)]], state excluded domain value.",["Denominator cannot be zero.","[[x\\ne4]]."])
 ],
 practice:{
  foundation:["f(x)=x+6: f(4).","g(x)=2x−3: g(−2).","h(x)=x²: h(5).","State input/output meaning.","Identify excluded value in 1/(x+2)."],
  core:["f(x)=x²−3x: f(−2).","Given f(3)=11 for f(x)=ax+2, find a.","Find range for f(x)=2x+1 on domain {0,1,2,3}.","Find domain restriction for square root expression.","Interpret a mapping diagram."],
  extension:["Find x if f(x)=17 for f(x)=4x+1.","Determine whether a relation is a function from pairs.","Find range of x² for a restricted finite domain.","Create a function with same output for two inputs.","Explain why vertical-line test relates to 'one output per input'."],
  reasoning:["Can two different x-values have same f(x)?","Why can a function be valid without having an inverse function on its full domain?"]
 },
 homework:[
  H("Foundation","f(x)=2x+5, find f(4).",["[[2(4)+5=13]]."]),
  H("Foundation","g(x)=x²−1, find g(−3).",["[[9-1=8]]."]),
  H("Core","f(x)=3x−2, solve f(x)=19.",["[[3x-2=19]]","[[3x=21]]","[[x=7]]"]),
  H("Core","h(x)=1/(x+5): restriction.",["[[x+5\\ne0]]","[[x\\ne-5]]"]),
  H("Extension","f(x)=x² on domain {−2,−1,0,1,2}. Range?",["Outputs 4,1,0,1,4.","Range {0,1,4}."]),
  H("Extension","Explain why relation {(1,3),(1,5)} is not a function.",["Input 1 is assigned two different outputs."])
 ],
 cambridge:"Current syllabus includes function notation, domain and range explicitly.",
 examSuccess:"Algebra and graphs supports substitution and mapping interpretation.",
 sourceImages:["functions.webp"]
});

M["20.2"]=C({
 explain:"An inverse function reverses a one-to-one function. Algebraically, write y=f(x), swap x and y, then rearrange for y. The inverse undoes the original, so compositions should return x on the appropriate domain.",
 keyPoints:["Inverse notation is [[f^{-1}(x)]], not 1/f(x).","A function must be one-to-one on its domain to have an inverse function.","Graphs of inverse functions reflect in y=x.","Check with [[f(f^{-1}(x))=x]]."],
 rules:[["[[f(f^{-1}(x))=x]]","inverse identity"],["[[f^{-1}(f(x))=x]]","on suitable domain"]],
 method:["Set [[y=f(x)]].","Swap x and y.","Rearrange to make y subject.","Rename y as [[f^{-1}(x)]].","Check by composition."],
 mistakes:["Treating inverse as reciprocal.","Forgetting domain restrictions.","Not swapping x and y before rearranging."],
 vocab:["inverse function","one-to-one","reflection","identity composition"],
 examples:[
  E("Find inverse of [[f(x)=3x+1]].",["[[y=3x+1]]","Swap: [[x=3y+1]]","[[y=(x-1)/3]]","[[f^{-1}(x)=(x-1)/3]]"]),
  E("Check inverse by composition.",["[[f((x-1)/3)=3((x-1)/3)+1=x]]."]),
  E("Why does [[f(x)=x^2]] not have inverse on all reals?",["Inputs x and −x give same output.","Restrict domain, e.g. x≥0, to make it one-to-one."])
 ],
 practice:{
  foundation:["Inverse of x+5.","Inverse of 2x.","Inverse of 4x−3.","Explain f⁻¹ vs 1/f.","Check one inverse pair."],
  core:["Inverse of (x+2)/3.","Inverse of 5−2x.","Find inverse then evaluate f⁻¹(11).","Check by composition.","State restriction needed for x²."],
  extension:["Inverse of fractional linear function.","Find intersection points of f and f⁻¹ conceptually.","Use reflection in y=x.","Explain inverse domain/range swap.","Find parameter so inverse has given value."],
  reasoning:["Why do f and f⁻¹ swap domain and range?","Can a constant function have an inverse? Explain."]
 },
 homework:[
  H("Foundation","Inverse of f(x)=x+7.",["[[y=x+7]]","Swap [[x=y+7]]","[[y=x-7]]"]),
  H("Foundation","Inverse of f(x)=4x.",["[[f^{-1}(x)=x/4]]"]),
  H("Core","Inverse of f(x)=3x−5.",["[[y=3x-5]]","[[x=3y-5]]","[[y=(x+5)/3]]"]),
  H("Core","If f(x)=2x+1, find f⁻¹(9).",["[[f^{-1}(x)=(x-1)/2]]","[[f^{-1}(9)=4]]"]),
  H("Extension","Inverse of f(x)=(x+1)/(x-2).",["[[y=(x+1)/(x-2)]]","[[y(x-2)=x+1]]","[[x(y-1)=2y+1]]","Swap result variable: [[f^{-1}(x)=(2x+1)/(x-1)]]"]),
  H("Extension","Explain why f(x)=x² needs domain x≥0 for inverse sqrt(x).",["Without restriction, x and −x share output.","Restricting x≥0 makes mapping one-to-one."])
 ],
 cambridge:"Inverse functions are explicit Extended content; one-to-one restrictions are useful deeper understanding.",
 examSuccess:"Algebra and graphs provides efficient rearrangement methods that transfer directly to inverses."
});

M["20.3"]=C({
 explain:"A composite function applies one function and then another. In gf(x)=g(f(x)), f acts first because it is inside. Composition is generally not commutative, so fg and gf usually differ.",
 keyPoints:["Inside function first.","Substitute the whole output expression into the next function.","Keep brackets around substituted expressions.","Check domain restrictions after composition."],
 rules:[["[[gf(x)=g(f(x))]]","g after f"],["[[fg(x)=f(g(x))]]","f after g"]],
 method:["Identify order from notation.","Find output of inside function.","Substitute that entire expression into outside function.","Simplify carefully.","For numerical composition, evaluate step by step."],
 mistakes:["Applying left-to-right instead of inside-first.","Dropping brackets around composite input.","Assuming fg=gf."],
 vocab:["composite function","composition","inside function","outside function"],
 examples:[
  E("f(x)=x+6, g(x)=x−3. Find fg(x) and gf(x).",["[[fg=f(x-3)=x+3]]","[[gf=g(x+6)=x+3]]","Here they happen to be equal."]),
  E("f(x)=2x, g(x)=−x. Find gf(4).",["[[f(4)=8]]","[[g(8)=-8]]"]),
  E("f(x)=3x+1. Find ff(x).",["[[f(3x+1)=3(3x+1)+1=9x+4]]."])
 ],
 practice:{
  foundation:["f=x+4,g=2x: fg(x).","Same functions: gf(x).","Find gf(3).","Find ff(2) for f=3x−1.","State which applies first in gf."],
  core:["f=x+2,g=x²: form fg,gf.","f=2x−5,g=1/x: gf(4).","Find ff(x) for f=x−3.","Find gg(−2) for g=x²+1.","Evaluate hgf(2) from three functions."],
  extension:["Find excluded x in a composite involving 1/(x−3).","Construct f,g with fg≠gf.","Solve fg(x)=17.","Form fff(x) for f=2x+1.","Explain domain propagation."],
  reasoning:["Why do translations sometimes commute while other functions do not?","Give an example where gf is defined but fg is not for a certain input."]
 },
 homework:[
  H("Foundation","f=x+5,g=2x. Find gf(3).",["[[f(3)=8]]","[[g(8)=16]]"]),
  H("Foundation","f=3x−1. Find ff(2).",["[[f(2)=5]]","[[f(5)=14]]"]),
  H("Core","f=x²,g=x−4. Find fg(x).",["[[f(g(x))=(x-4)^2]]"]),
  H("Core","f=2x+1,g=x². Find gf(x).",["[[g(f(x))=(2x+1)^2]]"]),
  H("Extension","f=1/x,g=x−2. State where fg undefined.",["[[fg(x)=1/(x-2)]]","Undefined at [[x=2]]."]),
  H("Extension","f=x+1,g=2x. Solve fg(x)=11.",["[[fg(x)=2x+1]]","[[2x+1=11]]","[[x=5]]"])
 ],
 cambridge:"The syllabus defines composition as gf(x)=g(f(x)); notation order must be secure.",
 examSuccess:"Algebra and graphs supports nested substitution and checking.",
 sourceImages:["functions.webp"]
});

M["21.1"]=C({
 explain:"Sets describe collections of objects using precise notation. Venn diagrams represent membership and overlap. The SoW extends to two- and three-set diagrams and De Morgan relationships.",
 keyPoints:["[[A\\cup B]]: in A or B or both.","[[A\\cap B]]: in both.","[[A']] or complement: in universal set but not A.","Start filling Venn diagrams with deepest intersections.","Totals outside circles still belong to universal set."],
 rules:[["[[n(A\\cup B)=n(A)+n(B)-n(A\\cap B)]]","two-set count"],["[[(A\\cup B)'=A'\\cap B']]","De Morgan"],["[[(A\\cap B)'=A'\\cup B']]","De Morgan"]],
 method:["Define universal set and subsets.","Place central overlap first.","Work outward through pairwise-only and single-set regions.","Use totals to find outside region.","Translate shading ↔ notation."],
 mistakes:["Double-counting intersection in union.","Putting pairwise intersection values into triple overlap incorrectly.","Forgetting complement is relative to universal set."],
 vocab:["set","element","universal set","union","intersection","complement","subset","Venn diagram"],
 examples:[
  E("n(A)=23,n(B)=19,n(A∩B)=8. Find n(A∪B).",["[[23+19-8=34]]."]),
  E("Universal set has 50; n(A∪B)=34. Find outside both.",["[[50-34=16]]."]),
  E("Explain [[(A\\cup B)']].",["Elements in neither A nor B.","Equivalent to [[A'\\cap B']]."])
 ],
 practice:{
  foundation:["Translate A∪B.","Translate A∩B.","Translate A'.","Find union count from two sets.","Find outside count from universal total."],
  core:["Complete two-set Venn with totals.","Complete three-set Venn starting at triple intersection.","Shade A∩B'.","Shade (A∪B)'.","Use n(A∪B)=... to find missing intersection."],
  extension:["Prove De Morgan with shaded diagrams.","Solve three-set survey problem.","Find conditional-looking set counts.","Construct sets with given union/intersection sizes.","Explain why inclusion-exclusion subtracts overlap."],
  reasoning:["What is difference between A∈B and A⊂B?","Why must triple overlap be handled before pairwise-only regions?"]
 },
 homework:[
  H("Foundation","n(A)=18,n(B)=15,n(A∩B)=6. Union?",["[[18+15-6=27]]."]),
  H("Foundation","Universal 40, union 27. Outside?",["[[40-27=13]]."]),
  H("Core","n(A)=25, n(A∪B)=38, n(A∩B)=7. Find n(B).",["[[38=25+n(B)-7]]","[[n(B)=20]]"]),
  H("Core","Describe A∩B'.",["In A but not in B."]),
  H("Extension","State De Morgan for complement of union.",["[[(A\\cup B)'=A'\\cap B']]"]),
  H("Extension","Why subtract intersection once in union formula?",["Adding n(A)+n(B) counts shared elements twice; subtracting overlap once leaves one count."])
 ],
 cambridge:"Set language, notation and Venn diagrams are explicit syllabus content; precise notation matters.",
 examSuccess:"Number chapter begins with set notation and worked Venn diagrams.",
 sourceImages:["sets.webp"]
});

M["22.1"]=C({
 explain:"Proportion describes a relationship through a constant of proportionality k. The SoW includes direct and inverse relationships involving first powers, squares, square roots, cubes and cube roots.",
 keyPoints:["Translate words to proportional notation first.","Replace ∝ with =k× relationship.","Use a known pair to find k.","Then substitute new value.","For inverse proportion, the product or transformed product stays constant."],
 rules:[["[[y\\propto x\\Rightarrow y=kx]]","direct"],["[[y\\propto x^2\\Rightarrow y=kx^2]]","square"],["[[y\\propto\\sqrt x\\Rightarrow y=k\\sqrt x]]","square-root"],["[[y\\propto1/x\\Rightarrow y=k/x]]","inverse"],["[[y\\propto1/x^2\\Rightarrow y=k/x^2]]","inverse square"]],
 method:["Write proportional statement.","Introduce k.","Substitute known values to calculate k.","Write complete equation with k.","Substitute target value and solve.","Check direction: direct moves together; inverse moves oppositely."],
 mistakes:["Leaving answer as y∝x without finding k.","Using x² when problem says square root.","For inverse proportion using y=kx instead of k/x."],
 vocab:["direct proportion","inverse proportion","constant of proportionality","proportional symbol"],
 examples:[
  E("y∝x² and y=18 when x=3. Find y when x=5.",["[[y=kx^2]]","[[18=9k\\Rightarrow k=2]]","[[y=2(25)=50]]"]),
  E("t∝1/v² and t=20 when v=3. Find t when v=6.",["[[t=k/v^2]]","[[20=k/9\\Rightarrow k=180]]","[[t=180/36=5]]"]),
  E("y∝√x and y=12 when x=16. Find equation.",["[[12=k\\sqrt{16}=4k]]","[[k=3]]","[[y=3\\sqrt x]]"])
 ],
 practice:{
  foundation:["y∝x, y=10 at x=2: find k.","y∝x, k=4: y at x=7.","y∝x², k=3: y at x=5.","y∝1/x, k=24: y at x=6.","State whether inverse variables move together."],
  core:["y∝x² given one pair, find another.","t∝1/v² given pair.","p∝√q given pair.","m∝q³ given pair.","r∝1/∛s given pair."],
  extension:["Find x from y in direct-square relation.","Compare scale factors without finding k.","Derive ratio method for direct square proportion.","Solve context: intensity inverse square of distance.","Create a relationship where doubling x halves y."],
  reasoning:["Why does doubling x quadruple y when y∝x²?","Why does doubling v quarter t when t∝1/v²?"]
 },
 homework:[
  H("Foundation","y∝x, y=15 when x=3. Find k.",["[[15=3k]]","[[k=5]]"]),
  H("Foundation","y=5x. Find y when x=8.",["[[y=40]]"]),
  H("Core","y∝x², y=20 when x=2. Find y when x=5.",["[[20=4k\\Rightarrow k=5]]","[[y=5(25)=125]]"]),
  H("Core","t∝1/v, t=12 when v=4. Find t when v=6.",["[[12=k/4\\Rightarrow k=48]]","[[t=48/6=8]]"]),
  H("Extension","p∝√q, p=14 when q=49. Find q when p=20.",["[[14=7k\\Rightarrow k=2]]","[[20=2\\sqrt q]]","[[\\sqrt q=10]]","[[q=100]]"]),
  H("Extension","I∝1/d². If I=90 at d=2, find I at d=6.",["[[90=k/4\\Rightarrow k=360]]","[[I=360/36=10]]"])
 ],
 cambridge:"The SoW includes linear, square, square-root, cube and cube-root proportional relationships and requires the ∝ symbol.",
 examSuccess:"Number/Algebra chapters reinforce concise proportional notation and reverse problems.",
 sourceImages:["proportion.webp"]
});

})();
})();

/* ===== starters.js ===== */
(function(){
window.STARTERS={
"12.1":["Write [[72]] as a product containing the largest square factor.","Simplify [[\\sqrt{49}]].","List the first six square numbers.","Evaluate [[3^2\\times3^4]]."],
"12.2":["Simplify [[\\sqrt{48}]].","Expand [[(x+5)(x-5)]].","Write a fraction equivalent to [[3/7]].","Simplify [[\\sqrt3\\times\\sqrt{12}]]."],
"13.1":["Factorise [[6x+18]].","Factorise [[x^2+7x+12]].","Simplify [[18/24]].","State the value excluded from [[1/(x-4)]]."],
"13.2":["Work out [[2/3+5/6]].","Factorise [[x^2-9]].","Write the reciprocal of [[3x/5]].","Find the lowest common denominator of [[1/x]] and [[1/(x+2)]]."],
"14.1":["Write 'five more than x' algebraically.","Is [[3x+2]] an expression or an equation?","Write two consecutive even integers in terms of n.","Write a formula for the area of a rectangle."],
"14.2":["Solve [[x+7=15]].","Expand [[3(x+4)]].","Simplify [[5x-2x+7]].","Solve [[4x=28]]."],
"14.3":["Factorise [[x^2+5x+6]].","Solve [[x^2=36]].","Expand [[(x+2)(x+5)]].","Write [[2x^2+7x-3=0]] in the form [[ax^2+bx+c=0]]."],
"14.4":["Find the LCM of 4 and 6.","Solve [[x/5=3]].","State the restriction on [[1/(x+1)]].","Simplify [[1/3+1/4]]."],
"14.5":["Solve [[x+y=10]] when [[x=6]].","Solve [[3x+2=17]].","Substitute [[x=4]] into [[y=2x-3]].","What do two intersecting straight-line graphs have in common at their intersection?"],
"14.6":["Factorise [[x^2-5x+6]].","Substitute [[y=x+2]] into [[x^2+y=10]].","Solve [[x^2=16]].","How many intersections can a straight line have with a circle?"],
"14.7":["Make x the subject of [[y=x+5]].","Make t the subject of [[v=u+at]] when a and u are known.","Factorise [[ax+bx]].","Undo the operation in [[y=3x-4]] to isolate x."],
"15.1":["Which is larger: [[-3]] or [[-7]]?","Translate 'at least 5' into an inequality.","What does an open circle mean on a number line?","List the integers satisfying [[1<x<5]]."],
"15.2":["Solve [[x+4<9]].","Work out [[-12\\div3]].","What happens to an inequality sign when dividing by a negative?","Represent [[x\\ge2]] in words."],
"15.3":["State the gradient of [[y=2x+3]].","Find the y-intercept of [[y=-x+5]].","Does [[(0,0)]] satisfy [[y>x-2]]?","What is the equation of the horizontal line through y=4?"],
"15.4":["Find the equation of the vertical line through [[x=3]].","Does [[(2,1)]] satisfy [[x+y\\le5]]?","What sign gives a solid boundary including the line?","Write an inequality for the region above [[y=x]]."],
"16.1":["Name an angle of [[35^\\circ]].","Find the missing angle on a straight line with [[128^\\circ]].","Find the third angle of a triangle with angles [[50^\\circ,60^\\circ]].","What is the total angle around a point?"],
"16.2":["Find the supplement of [[72^\\circ]].","State the relationship between vertically opposite angles.","What symbol shows two lines are parallel?","If corresponding angles are equal, what must be true about the lines?"],
"16.3":["Find the angle sum of a triangle.","Find the exterior angle of a regular hexagon.","How many sides does an octagon have?","Find [[360\\div8]]."],
"16.4":["State the rotational order of a square.","How many lines of symmetry does an equilateral triangle have?","Does a general parallelogram have line symmetry?","Find the smallest rotation for order 6."],
"16.5":["Name a 3D solid with two circular faces.","What 2D shape is the cross-section of a triangular prism?","Define a plane of symmetry.","State one axis of rotational symmetry of a cylinder."],
"17.1":["Convert [[3.5\\text{ m}]] to cm.","Convert [[2500\\text{ g}]] to kg.","How many cm are in 1 m?","How many cm³ are in 1 litre?"],
"17.2":["Find the area of a [[7\\times5]] rectangle.","Find the area of a triangle with base 8 and height 6.","What is the perimeter of a 4 by 9 rectangle?","State the formula for the area of a parallelogram."],
"17.3":["A circle has diameter 14 cm. Find its radius.","State the formula for circumference using r.","State the formula for area of a circle.","Find [[2\\pi(5)]]."],
"17.4":["What fraction of a circle is [[90^\\circ]]?","Find the major angle if the minor angle is [[80^\\circ]].","Write [[120/360]] in simplest form.","State the circumference of a circle of radius r."],
"18.1":["Is height discrete or continuous?","Is eye colour numerical or categorical?","Find the total frequency of 4, 7 and 9.","What is a two-way table used to classify?"],
"18.2":["Find the mean of 4,6,8.","Find the median of 9,2,5,7,3.","Find the range of 12,5,18,9.","What does IQR stand for?"],
"18.3":["Find the midpoint of 10–20.","Work out [[7\\times15]].","Find the total frequency 3+8+5.","Why is a grouped-data mean an estimate?"],
"18.4":["Which class is modal: frequencies 4,9,6,3?","Find cumulative frequencies for 3,5,4.","For 20 values, where is the median position?","What information is lost when data are grouped?"],
"18.5":["Find 25% of 80.","A row has values 6,11,3. Find its total.","What is the difference between a frequency and a percentage?","Why can percentages be fairer than counts when group sizes differ?"],
"18.6":["Which is more consistent: range 5 or range 14?","Which is larger: median 62 or 58?","Calculate [[Q_3-Q_1]] for [[Q_3=20,Q_1=8]].","Name one measure of centre and one measure of spread."],
"18.7":["What is the difference between a sample and a population?","Give one example of sampling bias.","Does correlation prove causation?","Why can a small sample be unreliable?"],
"19.1":["Find [[360\\div12]].","A category has frequency 8 out of 40. Find its fraction.","Why are bars separated on a bar chart?","What must a stem-and-leaf diagram include besides ordered leaves?"],
"19.2":["Plotting [[(3,7)]]: which coordinate is horizontal?","Choose a sensible scale for values 0–50.","What is bivariate data?","What is an outlier?"],
"19.3":["If y rises as x rises, what type of correlation may be present?","If y falls as x rises, what type of correlation may be present?","Does a steep slope automatically mean strong correlation?","Give one possible confounding variable in a real context."],
"19.4":["What is interpolation?","What is extrapolation?","Should a line of best fit join every point?","Why is extrapolation usually less reliable?"],
"19.5":["Find cumulative frequencies for 4,6,3,7.","What must the final cumulative frequency equal?","For grouped data, which class boundary is plotted?","Can a cumulative-frequency curve decrease?"],
"19.6":["For 80 values, find the median CF position.","For 80 values, find the lower quartile CF position.","Find the IQR if [[Q_1=18,Q_3=31]].","Which percentile is the upper quartile?"],
"19.7":["Find the class width of [[10\\le x<18]].","Find [[24\\div8]].","What quantity is represented by histogram bar area?","Should continuous histogram bars touch?"],
"19.8":["Rearrange [[d=f/w]] to make f the subject.","Find density when f=30 and width=10.","Find frequency when density=2.5 and width=8.","Find width when f=24 and density=3."],
"19.9":["A bar is 42 and another 31. Find the difference.","Why should graph readings sometimes be called estimates?","What must be checked before comparing two pie charts?","State one reason a graph may not justify a causal conclusion."],
"19.10":["Find the IQR if [[Q_1=12,Q_3=27]].","Which is more consistent: IQR 6 or 11?","What does a higher median suggest?","Why should comparisons use the same statistic for both groups?"],
"19.11":["What is a truncated axis?","Define extrapolation.","Why can a convenience sample be biased?","Does a graph starting above zero always mean it is wrong?"],
"20.1":["Evaluate [[3x+2]] when [[x=4]].","In a mapping, what is an input?","What is the output of [[f(x)=x^2]] when [[x=-3]]?","State the value excluded from [[1/(x-5)]]."],
"20.2":["Make x the subject of [[y=3x+2]].","What does an inverse function do?","Is [[f^{-1}(x)]] the same as [[1/f(x)]]?","Why must an inverse function be one-to-one?"],
"20.3":["If [[f(x)=x+1]], find [[f(3)]].","Which function acts first in [[g(f(x))]]?","Evaluate [[2(x+3)]] when x=4.","Why should brackets be used when substituting an expression?"],
"21.1":["What does [[A\\cup B]] mean?","What does [[A\\cap B]] mean?","What does [[A']] mean?","If 20 students are in A and 8 are in A∩B, why should the overlap not be counted twice?"],
"22.1":["Simplify the ratio 12:18.","If y doubles when x doubles, what type of relationship might this suggest?","Evaluate [[3^2]] and [[\\sqrt{49}]].","What symbol means 'is proportional to'?"]
};
})();

/* ===== starter-answers.js ===== */
(function(){
window.STARTER_ANSWERS={
"12.1":["[[72=36\\times2]] (or another correct square-factor decomposition).","7.","1, 4, 9, 16, 25, 36.","[[3^6=729]]."],
"12.2":["[[4\\sqrt3]].","[[x^2-25]].","For example [[6/14]].","6."],
"13.1":["[[6(x+3)]].","[[(x+3)(x+4)]].","[[3/4]].","[[x\\ne4]]."],
"13.2":["[[3/2]].","[[(x-3)(x+3)]].","[[5/(3x)]].","[[x(x+2)]]."],
"14.1":["[[x+5]].","Expression.","[[2n,2n+2]].","[[A=lw]]."],
"14.2":["8.","[[3x+12]].","[[3x+7]].","7."],
"14.3":["[[(x+2)(x+3)]].","[[x=\\pm6]].","[[x^2+7x+10]].","Already in standard form; [[a=2,b=7,c=-3]]."],
"14.4":["12.","15.","[[x\\ne-1]].","[[7/12]]."],
"14.5":["[[y=4]].","[[x=5]].","5.","They share the same coordinate pair, the simultaneous solution."],
"14.6":["[[(x-2)(x-3)]].","[[x^2+x+2=10]].","[[x=\\pm4]].","0, 1 or 2."],
"14.7":["[[x=y-5]].","[[t=(v-u)/a]].","[[x(a+b)]].","Add 4, then divide by 3."],
"15.1":["-3.","[[x\\ge5]].","The endpoint is not included.","2, 3, 4."],
"15.2":["[[x<5]].","-4.","Reverse it.","x is greater than or equal to 2."],
"15.3":["2.","5.","Yes, because [[0>-2]].","[[y=4]]."],
"15.4":["[[x=3]].","Yes, because [[2+1\\le5]].","[[\\le]] or [[\\ge]].","[[y>x]] (or [[y\\ge x]] if boundary included)."],
"16.1":["Acute.","[[52^\\circ]].","[[70^\\circ]].","[[360^\\circ]]."],
"16.2":["[[108^\\circ]].","They are equal.","Arrow markings.","They are parallel."],
"16.3":["[[180^\\circ]].","[[60^\\circ]].","8.","45."],
"16.4":["4.","3.","No, in general.","[[60^\\circ]]."],
"16.5":["Cylinder.","Triangle.","A plane that divides a solid into mirror-image halves.","The central axis joining the centres of the circular faces."],
"17.1":["350 cm.","2.5 kg.","100 cm.","1000 cm³."],
"17.2":["35 square units.","24 square units.","26 units.","[[A=bh]]."],
"17.3":["7 cm.","[[C=2\\pi r]].","[[A=\\pi r^2]].","[[10\\pi]]."],
"17.4":["[[1/4]].","[[280^\\circ]].","[[1/3]].","[[2\\pi r]]."],
"18.1":["Continuous.","Categorical.","20.","Two variables/categories at the same time."],
"18.2":["6.","5.","13.","Interquartile range."],
"18.3":["15.","105.","16.","Exact values inside each class are unknown."],
"18.4":["The second class.","3, 8, 12.","Around the 10th/11th values.","The exact individual data values."],
"18.5":["20.","20.","Frequency is a count; percentage is a proportion out of 100.","They allow fair comparison when totals differ."],
"18.6":["Range 5.","62.","12.","For example median and IQR."],
"18.7":["A sample is part of the population.","For example surveying only one top-set class.","No.","It is more affected by random variation."],
"19.1":["30.","[[1/5]].","Because the data are discrete/categorical.","A key."],
"19.2":["3.","Any evenly spaced scale covering the full range.","Two variables measured as pairs.","A point far from the main pattern."],
"19.3":["Positive.","Negative.","No.","Any plausible third variable affecting both."],
"19.4":["Prediction inside the observed data range.","Prediction outside the observed data range.","No.","The trend may not continue outside the observed range."],
"19.5":["4, 10, 13, 20.","The total frequency.","The upper class boundary.","No."],
"19.6":["40.","20.","13.","75th percentile."],
"19.7":["8.","3.","Frequency.","Yes."],
"19.8":["[[f=dw]].","3.","20.","8."],
"19.9":["11.","Because values read from a graph may be interpolated.","Their total sample sizes / what each sector represents.","Association shown by a graph does not establish cause."],
"19.10":["15.","IQR 6.","A higher typical value.","To make a valid like-for-like comparison."],
"19.11":["An axis that starts above/below its natural baseline, omitting part of the scale.","Prediction beyond the observed range.","The people chosen may not represent the population.","No; it can be appropriate if clearly labelled and not misleading."],
"20.1":["14.","The value fed into the function.","9.","[[x\\ne5]]."],
"20.2":["[[x=(y-2)/3]].","It reverses the original mapping.","No.","Otherwise one output could map back to more than one input."],
"20.3":["4.","f.","14.","So the whole substituted expression is treated as one input."],
"21.1":["Elements in A or B or both.","Elements in both A and B.","Elements not in A (within the universal set).","Because adding the set totals would otherwise count shared elements twice."],
"22.1":["2:3.","Direct proportion may be possible.","9 and 7.","[[\\propto]]."]
};
})();

/* ===== enhancements.js ===== */
(function(){
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
 X("Rationalise and simplify [[\\frac{3\\sqrt2}{\\sqrt7}]].",["Multiply top and bottom by [[\\sqrt7]].","[[\\frac{3\\sqrt2}{\\sqrt7}\\times\\frac{\\sqrt7}{\\sqrt7}=\\frac{3\\sqrt{14}}7]].","No square factor remains in [[14]], so this is fully simplified."],"Morrison & Hamshaw Ex 9.8 Q5–7 style",1),
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
 X("Solve [[\\frac{3x-5}{4}=\\frac{x+7}{3}]].",["Multiply both sides by 12.","[[3(3x-5)=4(x+7)]].","[[9x-15=4x+28]], so [[5x=43]] and [[x=\\frac{43}{5}]]."],"Coursebook Ex 6.1 / higher-demand linear equation style",1),
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
 X("At a school event, 4 adult tickets and 3 student tickets cost KD 31.50. Two adult tickets and 5 student tickets cost KD 24.50. Find both ticket prices.",["Let adult price be [[a]] and student price be [[s]].","[[4a+3s=31.5]], [[2a+5s=24.5]]. Double the second equation: [[4a+10s=49]].","Subtract the first equation: [[7s=17.5]], so [[s=2.5]]. Then [[4a+7.5=31.5]], so [[a=6]]."],"Morrison & Hamshaw / Exam Success contextual simultaneous-equations style",1),
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
 X("Solve [[4<2x+6\\le18]].",["Subtract 6 throughout: [[-2<2x\\le12]].","Divide every part by 2.","[[-1<x\\le6]]."],"Morrison & Hamshaw compound-inequality style",1),
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
})();

/* ===== diagrams.js ===== */
(function(){
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
})();

/* ===== book-diagrams.js ===== */
(function(){
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
})();

/* ===== question-diagrams.js ===== */
(function(){
(function(){
"use strict";
const C={ink:"#123642",blue:"#00aee6",pale:"#edf9fc",grid:"#d4eaf0",red:"#d85a5a",gold:"#dfb03c",green:"#2a9b75",muted:"#758e98",white:"#fff"};
const svg=(b)=>'<svg class="question-math-diagram" viewBox="0 0 520 260" role="img" aria-label="Question diagram">'+b+'</svg>';
const L=(x1,y1,x2,y2,o='')=>'<line x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'" '+o+'/>';
const T=(x,y,t,o='')=>'<text x="'+x+'" y="'+y+'" '+o+'>'+t+'</text>';
const R=(x,y,w,h,o='')=>'<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" '+o+'/>';
const O=(x,y,r,o='')=>'<circle cx="'+x+'" cy="'+y+'" r="'+r+'" '+o+'/>';
const P=(p,o='')=>'<polygon points="'+p+'" '+o+'/>';
const A=(d,o='')=>'<path d="'+d+'" '+o+'/>';
const lab='fill="'+C.ink+'" font-family="Arial,sans-serif" font-size="18" font-weight="800"';
const sm='fill="'+C.muted+'" font-family="Arial,sans-serif" font-size="13" font-weight="700"';
function axes(){let b='';for(let x=70;x<=490;x+=42)b+=L(x,30,x,225,'stroke="'+C.grid+'" stroke-width="1"');for(let y=35;y<=225;y+=38)b+=L(70,y,490,y,'stroke="'+C.grid+'" stroke-width="1"');b+=L(70,220,495,220,'stroke="'+C.ink+'" stroke-width="2.5"')+L(105,240,105,25,'stroke="'+C.ink+'" stroke-width="2.5"');return b}
function numberline(d){let b=L(55,130,470,130,'stroke="'+C.ink+'" stroke-width="3"');for(let n=-5;n<=7;n++){const x=92+(n+4)*31;b+=L(x,121,x,139,'stroke="'+C.ink+'" stroke-width="1.5"')+T(x-6,164,n,sm)}const x1=92+(d.a+4)*31,x2=92+(d.b+4)*31;b+=L(x1,130,x2,130,'stroke="'+C.blue+'" stroke-width="8" opacity=".55"')+O(x1,130,8,'fill="'+(d.cl?C.blue:C.white)+'" stroke="'+C.blue+'" stroke-width="3"')+O(x2,130,8,'fill="'+(d.cr?C.blue:C.white)+'" stroke="'+C.blue+'" stroke-width="3"');return svg(b)}
function ineq(d){let b=axes();if(d.kind==="ineq-vertical"){const x=105+d.x*42;b+=L(x,30,x,220,'stroke="'+C.blue+'" stroke-width="3" '+(d.solid?'':'stroke-dasharray="7 6"'))+R(x,30,490-x,190,'fill="'+C.blue+'" opacity=".12"');return svg(b)}
if(d.kind==="ineq-horizontal"){const y=220-d.y*24;b+=L(70,y,490,y,'stroke="'+C.blue+'" stroke-width="3" '+(d.solid?'':'stroke-dasharray="7 6"'))+R(70,d.above?30:y,420,d.above?y-30:220-y,'fill="'+C.blue+'" opacity=".12"');return svg(b)}
if(d.kind==="region"){const shapes=['170,210 390,210 280,65','145,215 390,215 390,80 210,80','140,215 280,55 440,215','150,215 420,215 350,55 215,95'][d.v%4];b+=P(shapes,'fill="'+C.blue+'" opacity=".16" stroke="'+C.blue+'" stroke-width="2.5"');return svg(b)}
const m=d.m??-d.a/d.b,c=d.c??d.c===0?d.c:4;const y1=220-(m*0+c)*24,y2=220-(m*8+c)*24;b+=L(105,y1,441,y2,'stroke="'+C.blue+'" stroke-width="3" '+(d.solid?'':'stroke-dasharray="7 6"'))+P('105,220 105,'+y1+' 441,'+y2+' 441,220','fill="'+C.blue+'" opacity=".11"');return svg(b)}
function lineCircle(d){let b=axes();const rr=Math.sqrt(d.R)*22;b+=O(280,140,rr,'fill="'+C.pale+'" stroke="'+C.blue+'" stroke-width="3"');const y1=220-(d.m*0+d.n)*24,y2=220-(d.m*8+d.n)*24;b+=L(105,y1,441,y2,'stroke="'+C.red+'" stroke-width="3"');return svg(b)}
function lineParabola(d){let b=axes(),pts=[];for(let x=-3.5;x<=7;x+=.15){const y=x*x+d.c;pts.push((105+x*42)+','+(220-y*10))}b+='<polyline points="'+pts.join(' ')+'" fill="none" stroke="'+C.blue+'" stroke-width="3"/>';const y1=220-(d.m*0+d.n)*24,y2=220-(d.m*8+d.n)*24;b+=L(105,y1,441,y2,'stroke="'+C.red+'" stroke-width="3"');return svg(b)}
function angle(d){switch(d.kind){
case"straight-angle":return svg(L(55,190,465,190,'stroke="'+C.ink+'" stroke-width="3"')+L(260,190,385,55,'stroke="'+C.ink+'" stroke-width="3"')+A('M310 190 A50 50 0 0 0 294 151','fill="none" stroke="'+C.blue+'" stroke-width="4"')+T(315,145,d.a+'°',lab)+T(190,155,'x',lab));
case"vertical-angles":return svg(L(70,40,450,220,'stroke="'+C.ink+'" stroke-width="3"')+L(450,40,70,220,'stroke="'+C.ink+'" stroke-width="3"')+T(330,112,d.a+'°',lab)+T(165,174,'x',lab));
case"around-point":return svg([0,55,135,225].map(q=>{const r=q*Math.PI/180;return L(260,130,260+115*Math.cos(r),130+115*Math.sin(r),'stroke="'+C.ink+'" stroke-width="3"')}).join('')+T(310,72,d.fixed+'°',lab)+T(160,95,'2x',lab)+T(150,190,'4x',lab)+T(330,190,'x',lab));
case"quadrilateral":return svg(P('105,205 175,55 400,75 455,215','fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+T(155,115,'2x',lab)+T(345,115,'3x',lab)+T(155,210,'4x',lab)+T(370,210,'5x',lab));
case"exterior-triangle":return svg(P('85,210 260,45 410,210','fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+L(410,210,485,210,'stroke="'+C.ink+'" stroke-width="3"')+T(400,175,d.ext+'°',lab)+T(165,175,d.a+'°',lab)+T(305,175,'x',lab));
case"isosceles":return svg(P('100,215 260,45 420,215','fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+L(160,150,180,165,'stroke="'+C.blue+'" stroke-width="3"')+L(350,165,370,150,'stroke="'+C.blue+'" stroke-width="3"')+T(235,88,d.vertex+'°',lab)+T(150,205,'x',lab)+T(355,205,'x',lab));
case"triangle-multiple":return svg(P('90,215 250,45 430,215','fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+T(130,195,'3x',lab)+T(250,95,'4x',lab)+T(355,195,'5x',lab));
case"reflex":return svg(O(260,130,6,'fill="'+C.ink+'"')+L(260,130,420,130,'stroke="'+C.ink+'" stroke-width="3"')+L(260,130,165,40,'stroke="'+C.ink+'" stroke-width="3"')+A('M420 130 A160 160 0 1 1 165 40','fill="none" stroke="'+C.red+'" stroke-width="5"')+T(275,230,d.a+'°',lab)+T(280,92,'x',lab));
}return""}
function parallel(d){let b=L(45,70,480,70,'stroke="'+C.ink+'" stroke-width="4"')+L(45,200,480,200,'stroke="'+C.ink+'" stroke-width="4"')+L(180,20,355,245,'stroke="'+C.red+'" stroke-width="4"');if(d.kind.includes("cointerior"))b+=A('M220 70 A38 38 0 0 1 245 100','fill="none" stroke="'+C.blue+'" stroke-width="4"')+A('M315 200 A38 38 0 0 1 290 168','fill="none" stroke="'+C.blue+'" stroke-width="4"')+T(248,116,(d.a||117)+'°',lab)+T(250,175,'x',lab);else if(d.kind.includes("alternate"))b+=A('M220 70 A38 38 0 0 1 245 100','fill="none" stroke="'+C.blue+'" stroke-width="4"')+A('M282 200 A38 38 0 0 0 257 168','fill="none" stroke="'+C.blue+'" stroke-width="4"')+T(248,116,(d.a||68)+'°',lab)+T(230,175,'x',lab);else b+=A('M220 70 A38 38 0 0 1 245 100','fill="none" stroke="'+C.blue+'" stroke-width="4"')+A('M315 200 A38 38 0 0 1 340 170','fill="none" stroke="'+C.blue+'" stroke-width="4"')+T(248,116,(d.a||70)+'°',lab)+T(345,172,'x',lab);return svg(b)}
function polygon(d){if(d.kind==="polygon-triangulate"){const n=d.n||6;const pts=n===6?'80,180 130,65 245,35 390,70 455,180 350,230':'95,200 170,60 350,55 455,185 375,230 190,235';return svg(P(pts,'fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+L(80,180,245,35,'stroke="'+C.blue+'" stroke-width="2"')+L(80,180,390,70,'stroke="'+C.blue+'" stroke-width="2"')+L(80,180,455,180,'stroke="'+C.blue+'" stroke-width="2"'))}
if(d.kind==="irregular-pentagon")return svg(P('70,205 140,50 310,40 455,115 405,230','fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+T(115,120,'104°',lab)+T(275,75,'118°',lab)+T(390,135,'95°',lab)+T(350,220,'132°',lab)+T(180,205,'?',lab));
const n=d.n||8,pts=[];for(let i=0;i<n;i++){const a=-Math.PI/2+i*2*Math.PI/n;pts.push((260+105*Math.cos(a))+','+(135+105*Math.sin(a)))}return svg(P(pts.join(' '),'fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+T(215,140,(d.a?d.a+'°':n+' sides'),lab))}
function symmetry(d){const k=d.kind;if(k==="sym-rectangle")return svg(R(100,60,320,150,'fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+L(260,60,260,210,'stroke="'+C.blue+'" stroke-width="2" stroke-dasharray="7 6"')+L(100,135,420,135,'stroke="'+C.blue+'" stroke-width="2" stroke-dasharray="7 6"'));if(k==="sym-hexagon"||k==="sym-octagon"){const n=k==="sym-hexagon"?6:8,pts=[];for(let i=0;i<n;i++){const a=-Math.PI/2+i*2*Math.PI/n;pts.push((260+105*Math.cos(a))+','+(135+105*Math.sin(a)))}return svg(P(pts.join(' '),'fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+L(260,25,260,245,'stroke="'+C.blue+'" stroke-width="2" stroke-dasharray="7 6"'))}if(k==="sym-rhombus")return svg(P('260,35 420,135 260,235 100,135','fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+L(100,135,420,135,'stroke="'+C.blue+'" stroke-width="2" stroke-dasharray="7 6"')+L(260,35,260,235,'stroke="'+C.blue+'" stroke-width="2" stroke-dasharray="7 6"'));if(k==="sym-kite")return svg(P('260,30 405,130 260,235 150,130','fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+L(260,30,260,235,'stroke="'+C.blue+'" stroke-width="2" stroke-dasharray="7 6"'));if(k==="sym-triangle")return svg(P('80,220 260,35 440,220','fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+L(260,35,260,220,'stroke="'+C.blue+'" stroke-width="2" stroke-dasharray="7 6"'));if(k==="sym-parallelogram")return svg(P('120,65 390,65 450,210 180,210','fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+O(285,138,5,'fill="'+C.blue+'"')+A('M250 105 A45 45 0 1 0 315 170','fill="none" stroke="'+C.blue+'" stroke-width="3"'));return svg(O(260,135,90,'fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+T(225,140,'order '+(d.n||5),lab))}
function solid(d){const k=d.kind;if(k==="solid-cylinder")return svg(A('M160 55 C160 25 360 25 360 55 L360 205 C360 235 160 235 160 205 Z','fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+A('M160 55 C160 85 360 85 360 55','fill="none" stroke="'+C.ink+'" stroke-width="3"')+A('M160 205 C160 175 360 175 360 205','fill="none" stroke="'+C.ink+'" stroke-width="3"')+L(260,25,260,235,'stroke="'+C.blue+'" stroke-width="2" stroke-dasharray="7 6"'));if(k==="solid-cube"||k==="solid-cuboid")return svg(P('145,75 285,35 405,90 265,130','fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+P('145,75 145,195 265,235 265,130','fill="#fff" stroke="'+C.ink+'" stroke-width="3"')+P('265,130 405,90 405,205 265,235','fill="#eaf7fb" stroke="'+C.ink+'" stroke-width="3"')+L(270,35,270,235,'stroke="'+C.blue+'" stroke-width="2" stroke-dasharray="7 6"'));if(k==="solid-tri-prism")return svg(P('65,200 145,55 225,200','fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+P('300,200 380,55 460,200','fill="#fff8de" stroke="'+C.ink+'" stroke-width="3"')+L(65,200,300,200,'stroke="'+C.ink+'" stroke-width="3"')+L(145,55,380,55,'stroke="'+C.ink+'" stroke-width="3"')+L(225,200,460,200,'stroke="'+C.ink+'" stroke-width="3"'));if(k==="solid-cone")return svg(A('M260 25 L120 205 C120 235 400 235 400 205 Z','fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+A('M120 205 C120 175 400 175 400 205','fill="none" stroke="'+C.ink+'" stroke-width="2"')+L(260,25,260,235,'stroke="'+C.blue+'" stroke-width="2" stroke-dasharray="7 6"'));if(k==="solid-sphere")return svg(O(260,135,100,'fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+A('M160 135 C195 95 325 95 360 135 C325 175 195 175 160 135','fill="none" stroke="'+C.blue+'" stroke-width="2"')+L(260,35,260,235,'stroke="'+C.blue+'" stroke-width="2" stroke-dasharray="7 6"'));return svg(P('260,35 100,210 420,210','fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+P('100,210 260,235 420,210 260,170','fill="#fff8de" stroke="'+C.ink+'" stroke-width="2"'))}
function shape(d){const k=d.kind;if(k==="parallelogram")return svg(P('110,195 175,60 410,60 345,195','fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+T(235,225,d.b+' cm',lab)+L(175,60,175,195,'stroke="'+C.blue+'" stroke-width="2" stroke-dasharray="7 6"')+T(185,135,d.h+' cm',sm));if(k==="trapezium")return svg(P('105,200 165,55 370,55 430,200','fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+T(245,45,d.a+' cm',sm)+T(235,230,d.b+' cm',sm)+L(165,55,165,200,'stroke="'+C.blue+'" stroke-width="2" stroke-dasharray="7 6"')+T(175,135,d.h+' cm',sm));if(k==="triangle-area")return svg(P('80,210 235,40 430,210','fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+L(235,40,235,210,'stroke="'+C.blue+'" stroke-width="2" stroke-dasharray="7 6"')+T(250,130,d.h+' cm',sm)+T(235,240,d.b+' cm',sm));if(k==="compound-rect")return svg(P('80,45 420,45 420,120 330,120 330,210 80,210','fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+T(190,235,'compound shape',sm)+L(80,120,330,120,'stroke="'+C.grid+'" stroke-width="1.5" stroke-dasharray="6 5"'));
if(k==="l-shape")return svg(P('90,55 420,55 420,145 300,145 300,220 90,220','fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+T(190,245,d.W+' cm',sm)+T(430,140,d.H+' cm',sm));if(k==="kite-area"||k==="rhombus-area")return svg(P('260,30 425,130 260,230 95,130','fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+L(95,130,425,130,'stroke="'+C.blue+'" stroke-width="2"')+L(260,30,260,230,'stroke="'+C.red+'" stroke-width="2"')+T(275,80,(d.d2||d.d1)+' cm',sm));if(k==="circle-radius"||k==="circle-area"||k==="circle-track")return svg(O(260,130,95,'fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+L(260,130,350,70,'stroke="'+C.blue+'" stroke-width="3"')+T(325,95,(d.r||'r')+' cm',sm));if(k==="circle-diameter")return svg(O(260,130,95,'fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+L(165,130,355,130,'stroke="'+C.blue+'" stroke-width="3"')+T(230,118,d.d+' cm',sm));if(k==="annulus")return svg(O(260,130,105,'fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+O(260,130,55,'fill="#fff" stroke="'+C.ink+'" stroke-width="2"')+T(375,90,'R='+d.R,sm)+T(310,125,'r='+d.r,sm));if(k==="circle-square")return svg(R(145,20,230,230,'fill="#fff" stroke="'+C.ink+'" stroke-width="3"')+O(260,135,115,'fill="'+C.pale+'" stroke="'+C.blue+'" stroke-width="3"'));if(k==="semicircle")return svg(A('M120 190 A140 140 0 0 1 400 190 L120 190 Z','fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+L(120,190,400,190,'stroke="'+C.blue+'" stroke-width="3"')+T(225,220,d.d+' cm',sm));if(k.includes("sector")){const a=(d.a||90)*Math.PI/180,x=260+100*Math.cos(a),y=135-100*Math.sin(a);return svg(A('M260 135 L360 135 A100 100 0 '+((d.a||90)>180?1:0)+' 0 '+x+' '+y+' Z','fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+T(300,125,(d.a||90)+'°',sm)+T(325,110,(d.r||'r')+' cm',sm))}return""}
function stat(d){const k=d.kind;if(k==="group-classes")return svg(L(55,175,465,175,'stroke="'+C.ink+'" stroke-width="2.5"')+[80,205,330,455].map((x,i)=>L(x,160,x,190,'stroke="'+C.ink+'" stroke-width="2"')+T(x-10,215,[0,5,10,15][i],sm)).join('')+R(80,85,125,55,'fill="'+C.pale+'" stroke="'+C.blue+'" stroke-width="2"')+R(205,85,125,55,'fill="#fff8de" stroke="'+C.gold+'" stroke-width="2"')+R(330,85,125,55,'fill="#edf9f4" stroke="'+C.green+'" stroke-width="2"'));
if(k==="class-boundaries")return svg(L(60,175,460,175,'stroke="'+C.ink+'" stroke-width="2.5"')+[95,220,345,470].map((x,i)=>L(x,155,x,195,'stroke="'+C.ink+'" stroke-width="2"')+T(x-13,225,[0,10,20,30][i],sm)).join('')+T(125,110,'0 ≤ x < 10',lab)+T(285,110,'10 ≤ x < 20',lab));
if(k==="outlier")return svg(L(55,180,465,180,'stroke="'+C.ink+'" stroke-width="2.5"')+[110,145,170,205,235,425].map((x,i)=>O(x,160-(i===5?15:0),7,'fill="'+(i===5?C.red:C.blue)+'"')).join('')+T(395,120,'outlier',sm));
if(k==="mean-balance")return svg([70,145,220,295,370].map((x,i)=>R(x,190-[45,85,65,105,80][i],45,[45,85,65,105,80][i],'fill="'+C.pale+'" stroke="'+C.blue+'" stroke-width="2"')).join('')+L(55,120,450,120,'stroke="'+C.red+'" stroke-width="2" stroke-dasharray="7 5"')+T(395,108,'mean',sm));
if(k==="averages-choice")return svg(R(55,65,120,120,'rx="15" fill="'+C.pale+'" stroke="'+C.blue+'" stroke-width="2"')+R(200,65,120,120,'rx="15" fill="#fff8de" stroke="'+C.gold+'" stroke-width="2"')+R(345,65,120,120,'rx="15" fill="#edf9f4" stroke="'+C.green+'" stroke-width="2"')+T(85,130,'mean',sm)+T(225,130,'median',sm)+T(375,130,'mode',sm)+T(95,225,'choose to suit the data',sm));
if(k==="midpoint")return svg(L(70,180,450,180,'stroke="'+C.ink+'" stroke-width="2.5"')+L(145,160,145,200,'stroke="'+C.ink+'" stroke-width="2"')+L(365,160,365,200,'stroke="'+C.ink+'" stroke-width="2"')+O(255,180,8,'fill="'+C.blue+'"')+T(125,225,'lower',sm)+T(235,150,'midpoint',sm)+T(345,225,'upper',sm));
if(k==="class-midpoint")return svg(L(70,180,450,180,'stroke="'+C.ink+'" stroke-width="2.5"')+L(145,160,145,200,'stroke="'+C.ink+'" stroke-width="2"')+L(365,160,365,200,'stroke="'+C.ink+'" stroke-width="2"')+O(255,180,8,'fill="'+C.gold+'"')+T(225,150,'35',lab)+T(135,225,'30',sm)+T(350,225,'40',sm));
if(k==="fx-table")return svg(R(70,40,380,180,'fill="#fff" stroke="'+C.ink+'" stroke-width="2"')+L(200,40,200,220,'stroke="'+C.ink+'" stroke-width="1.5"')+L(325,40,325,220,'stroke="'+C.ink+'" stroke-width="1.5"')+[85,130,175].map(y=>L(70,y,450,y,'stroke="'+C.ink+'" stroke-width="1.5"')).join('')+T(105,72,'mid',sm)+T(245,72,'f',sm)+T(365,72,'fx',sm));
if(k==="modal-class")return svg(R(65,45,390,170,'fill="#fff" stroke="'+C.ink+'" stroke-width="2"')+[95,135,175].map(y=>L(65,y,455,y,'stroke="'+C.ink+'" stroke-width="1.5"')).join('')+R(67,137,386,36,'fill="'+C.pale+'" stroke="'+C.blue+'" stroke-width="2"')+T(105,160,'highest frequency class',sm));
if(k==="median-class")return svg(L(65,190,455,190,'stroke="'+C.ink+'" stroke-width="2.5"')+[115,210,320,420].map((x,i)=>O(x,190,7,'fill="'+(i===2?C.blue:C.muted)+'"')).join('')+T(250,145,'median position',lab));
if(k==="modal-median")return svg(R(65,45,390,170,'fill="#fff" stroke="'+C.ink+'" stroke-width="2"')+R(67,125,386,42,'fill="'+C.pale+'" stroke="'+C.blue+'" stroke-width="2"')+T(115,105,'modal class',sm)+T(285,105,'median class',sm)+T(205,155,'may be same or different',sm));
if(k==="grouped-warning")return svg(R(70,65,380,140,'rx="16" fill="#fff8de" stroke="'+C.gold+'" stroke-width="2"')+T(110,115,'exact raw values are lost',lab)+T(125,165,'only interval information remains',sm));
if(k==="summary-cards")return svg(R(55,65,180,150,'rx="16" fill="'+C.pale+'" stroke="'+C.blue+'" stroke-width="2"')+R(285,65,180,150,'rx="16" fill="#fff8de" stroke="'+C.gold+'" stroke-width="2"')+T(95,120,'centre',lab)+T(335,120,'spread',lab)+T(80,175,'mean / median',sm)+T(315,175,'range / IQR',sm));
if(k==="causation")return svg(R(45,70,155,120,'rx="16" fill="'+C.pale+'" stroke="'+C.blue+'" stroke-width="2"')+R(320,70,155,120,'rx="16" fill="#fff8de" stroke="'+C.gold+'" stroke-width="2"')+R(210,25,100,80,'rx="14" fill="#edf9f4" stroke="'+C.green+'" stroke-width="2"')+T(88,135,'A',lab)+T(365,135,'B',lab)+T(232,72,'third',sm)+L(210,85,195,110,'stroke="'+C.green+'" stroke-width="2"')+L(310,85,325,110,'stroke="'+C.green+'" stroke-width="2"'));
if(k==="extrapolation")return svg(axes()+L(120,195,350,80,'stroke="'+C.blue+'" stroke-width="3"')+L(350,80,465,25,'stroke="'+C.red+'" stroke-width="3" stroke-dasharray="7 5"')+T(365,210,'outside data',sm));
if(k==="two-way-percent")return svg(R(60,45,400,170,'fill="#fff" stroke="'+C.ink+'" stroke-width="2"')+L(190,45,190,215,'stroke="'+C.ink+'" stroke-width="1.5"')+L(335,45,335,215,'stroke="'+C.ink+'" stroke-width="1.5"')+[95,145].map(y=>L(60,y,460,y,'stroke="'+C.ink+'" stroke-width="1.5"')).join('')+T(220,78,'count',sm)+T(365,78,'%',sm));
if(k==="two-way-overlap")return svg(O(220,135,80,'fill="'+C.blue+'" opacity=".15" stroke="'+C.blue+'" stroke-width="3"')+O(310,135,80,'fill="'+C.gold+'" opacity=".18" stroke="'+C.gold+'" stroke-width="3"')+T(245,140,'both',sm));
if(k==="table-change")return svg(R(95,145,85,70,'fill="'+C.pale+'" stroke="'+C.blue+'" stroke-width="2"')+R(300,95,85,120,'fill="#fff8de" stroke="'+C.gold+'" stroke-width="2"')+T(105,235,'before',sm)+T(300,235,'after',sm)+L(180,140,300,105,'stroke="'+C.green+'" stroke-width="3"'));
if(k==="chart-missing-labels")return svg(L(65,210,455,210,'stroke="'+C.ink+'" stroke-width="2.5"')+L(65,210,65,45,'stroke="'+C.ink+'" stroke-width="2.5"')+[95,140,75].map((h,i)=>R(120+i*95,210-h,50,h,'fill="'+C.pale+'" stroke="'+C.blue+'" stroke-width="2"')).join('')+T(190,35,'?', 'fill="'+C.red+'" font-size="24" font-weight="900"')+T(15,120,'?', 'fill="'+C.red+'" font-size="24" font-weight="900"'));if(k==="data-types")return svg(R(45,45,190,160,'rx="15" fill="'+C.pale+'" stroke="'+C.blue+'" stroke-width="2"')+R(285,45,190,160,'rx="15" fill="#fff8de" stroke="'+C.gold+'" stroke-width="2"')+T(88,95,'categorical',lab)+T(335,95,'numerical',lab)+T(320,150,'discrete /',sm)+T(325,175,'continuous',sm));if(k==="two-way")return svg(R(55,35,410,190,'fill="#fff" stroke="'+C.ink+'" stroke-width="2"')+[100,145,190].map(y=>L(55,y,465,y,'stroke="'+C.ink+'" stroke-width="1.5"')).join('')+[175,300,405].map(x=>L(x,35,x,225,'stroke="'+C.ink+'" stroke-width="1.5"')).join('')+T(205,75,'Yes',sm)+T(325,75,'No',sm)+T(85,130,'A',sm)+T(85,175,'B',sm));if(k==="stem-leaf")return svg(L(245,35,245,225,'stroke="'+C.ink+'" stroke-width="2.5"')+T(170,70,'stem',sm)+T(300,70,'leaves',sm)+T(190,120,'1',lab)+T(295,120,'2 4 7',lab)+T(190,165,'2',lab)+T(295,165,'1 1 5 9',lab)+T(190,210,'3',lab)+T(295,210,'3',lab));if(k==="tally")return svg(R(70,40,380,180,'fill="#fff" stroke="'+C.ink+'" stroke-width="2"')+L(190,40,190,220,'stroke="'+C.ink+'" stroke-width="1.5"')+L(340,40,340,220,'stroke="'+C.ink+'" stroke-width="1.5"')+[90,135,180].map(y=>L(70,y,450,y,'stroke="'+C.ink+'" stroke-width="1.5"')).join('')+T(105,72,'cat.',sm)+T(240,72,'tally',sm)+T(370,72,'f',sm));if(k==="raw-dot"||k==="range-line"){let b=L(60,190,470,190,'stroke="'+C.ink+'" stroke-width="2.5"');[95,145,145,225,285].forEach((x,i)=>b+=O(x,170-(i===2?25:0),7,'fill="'+C.blue+'"'));return svg(b)}if(k==="boxplot"||k==="compare-box"||k==="two-box")return svg(L(65,130,455,130,'stroke="'+C.ink+'" stroke-width="2"')+R(175,85,190,90,'fill="'+C.pale+'" stroke="'+C.blue+'" stroke-width="2.5"')+L(270,85,270,175,'stroke="'+C.red+'" stroke-width="3"')+L(65,130,175,130,'stroke="'+C.ink+'" stroke-width="2"')+L(365,130,455,130,'stroke="'+C.ink+'" stroke-width="2"'));if(k==="grouped-mean"||k==="freq-table"||k==="cf-table"||k==="comparison-table"||k==="percent-table")return svg(R(55,35,410,190,'fill="#fff" stroke="'+C.ink+'" stroke-width="2"')+[90,135,180].map(y=>L(55,y,465,y,'stroke="'+C.ink+'" stroke-width="1.5"')).join('')+L(245,35,245,225,'stroke="'+C.ink+'" stroke-width="1.5"')+T(90,70,'class / item',sm)+T(315,70,'frequency',sm));if(k.includes("scatter")||k.includes("corr")||k.includes("best-fit")||k==="small-scatter"){let b=axes(),pts=[[1,2],[2,3],[3,5],[4,6],[5,8],[6,9],[7,4]];if(k.includes("negative"))pts=[[1,8],[2,7],[3,6],[4,5],[5,4],[6,3],[7,2]];if(k.includes("zero"))pts=[[1,4],[2,7],[3,3],[4,6],[5,4],[6,7],[7,3]];pts.forEach(([x,y],i)=>b+=O(105+x*48,220-y*20,5,'fill="'+(i===6&&k.includes("outlier")?C.red:C.blue)+'"'));if(k.includes("best-fit"))b+=L(140,205,455,60,'stroke="'+C.red+'" stroke-width="3"');return svg(b)}if(k==="pie-data"||k==="pie"||k==="pie-compare")return svg(O(260,130,95,'fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="3"')+A('M260 130 L260 35 A95 95 0 0 1 345 172 Z','fill="#fff8de" stroke="'+C.ink+'" stroke-width="2"')+A('M260 130 L345 172 A95 95 0 0 1 180 185 Z','fill="#edf9f4" stroke="'+C.ink+'" stroke-width="2"'));if(k==="pictogram")return svg([...Array(12)].map((_,i)=>T(75+(i%6)*70,95+Math.floor(i/6)*75,'●','fill="'+(i<7?C.blue:C.gold)+'" font-size="32"')).join('')+T(130,235,'key: 1 symbol = 8',sm));if(k==="bar"||k==="bar-infer"||k==="comparative-bar"){let b=L(65,220,475,220,'stroke="'+C.ink+'" stroke-width="2.5"')+L(65,220,65,30,'stroke="'+C.ink+'" stroke-width="2.5"');[90,145,75,120].forEach((h,i)=>b+=R(100+i*85,220-h,45,h,'fill="'+[C.blue,C.gold,C.green,"#8f75bd"][i]+'" opacity=".85"'));return svg(b)}if(k==="line-graph"){let b=axes();b+='<polyline points="105,180 165,195 225,145 285,165 345,85 405,120 465,60" fill="none" stroke="'+C.blue+'" stroke-width="3"/>';return svg(b)}if(k.includes("cf-")||k==="cf-curve"||k==="cf-points"){let b=axes(),pts=[];for(let i=0;i<=9;i++){const x=105+i*40,y=215-170/(1+Math.exp(-(i-4.5)/1.2));pts.push(x+','+y.toFixed(1))}b+='<polyline points="'+pts.join(' ')+'" fill="none" stroke="'+C.blue+'" stroke-width="3"/>';if(k.includes("quartiles")||k.includes("read")||k.includes("percentile")||k.includes("compare"))b+=L(105,135,465,135,'stroke="'+C.red+'" stroke-width="1.8" stroke-dasharray="6 5"');return svg(b)}if(k==="hist"||k==="hist-calc"||k==="hist-compare"||k==="hist-error"){let b=L(65,220,475,220,'stroke="'+C.ink+'" stroke-width="2.5"')+L(65,220,65,30,'stroke="'+C.ink+'" stroke-width="2.5"'),bars=[[65,55,80],[120,105,135],[225,55,95],[280,90,160],[370,80,105]];bars.forEach(([x,w,h],i)=>b+=R(x,220-h,w,h,'fill="'+(i%2?C.pale:"#fff8de")+'" stroke="'+C.blue+'" stroke-width="2.5"'));return svg(b)}if(k==="truncated-axis"||k==="bad-scale"){return svg(L(65,220,475,220,'stroke="'+C.ink+'" stroke-width="2.5"')+L(65,220,65,45,'stroke="'+C.ink+'" stroke-width="2.5"')+R(125,155,70,65,'fill="'+C.pale+'" stroke="'+C.blue+'" stroke-width="2"')+R(285,80,70,140,'fill="#fff8de" stroke="'+C.gold+'" stroke-width="2"')+T(15,210,'96',sm)+T(15,90,'100',sm))}if(k==="sample-pop"||k==="voluntary"||k==="sample-bias"){let b=R(50,30,420,200,'rx="18" fill="'+C.pale+'" stroke="'+C.ink+'" stroke-width="2"');for(let i=0;i<21;i++)b+=O(85+(i%7)*55,75+Math.floor(i/7)*55,6,'fill="'+(i<5?C.blue:C.muted)+'" opacity="'+(i<5?1:.55)+'"');b+=R(68,55,185,75,'rx="12" fill="none" stroke="'+C.blue+'" stroke-width="3" stroke-dasharray="7 5"');return svg(b)}return""}
function venn(d){return svg(R(45,25,430,210,'fill="#fff" stroke="'+C.ink+'" stroke-width="2"')+O(220,130,80,'fill="'+C.blue+'" opacity=".15" stroke="'+C.blue+'" stroke-width="3"')+O(315,130,80,'fill="'+C.gold+'" opacity=".18" stroke="'+C.gold+'" stroke-width="3"')+(d.kind==="venn-three"?O(268,180,70,'fill="'+C.green+'" opacity=".15" stroke="'+C.green+'" stroke-width="3"'):""))}
function prop(d){let b=axes();if(d.kind==="prop-direct")b+=L(105,220,455,45,'stroke="'+C.blue+'" stroke-width="3"');else if(d.kind==="prop-square")b+=A('M105 220 Q250 210 465 45','fill="none" stroke="'+C.blue+'" stroke-width="3"');else if(d.kind==="prop-root")b+=A('M105 220 Q150 80 465 60','fill="none" stroke="'+C.green+'" stroke-width="3"');else b+=A('M125 45 C190 85 250 145 465 215','fill="none" stroke="'+C.red+'" stroke-width="3"');return svg(b)}
function render(d){if(!d||!d.kind)return"";if(d.kind==="numberline")return numberline(d);if(d.kind.startsWith("ineq")||d.kind==="region")return ineq(d);if(d.kind==="line-circle")return lineCircle(d);if(d.kind==="line-parabola")return lineParabola(d);if(["straight-angle","vertical-angles","around-point","quadrilateral","exterior-triangle","isosceles","triangle-multiple","reflex"].includes(d.kind))return angle(d);if(d.kind.startsWith("parallel-"))return parallel(d);if(["polygon-triangulate","regular-polygon","exterior-angle","irregular-pentagon","exterior-walk"].includes(d.kind))return polygon(d);if(d.kind.startsWith("sym-"))return symmetry(d);if(d.kind.startsWith("solid-"))return solid(d);if(["parallelogram","trapezium","triangle-area","l-shape","compound-rect","kite-area","rhombus-area","circle-radius","circle-diameter","circle-area","circle-track","annulus","circle-square","semicircle","sector","sector-perimeter","major-sector"].includes(d.kind))return shape(d);if(d.kind.startsWith("venn-"))return venn(d);if(d.kind.startsWith("prop-"))return prop(d);return stat(d)}
const old=window.MathoraDiagrams||{};
const teacherMaps={
"16.1":[{kind:"straight-angle",a:112},{kind:"vertical-angles",a:115},{kind:"around-point",fixed:150},{kind:"quadrilateral"},{kind:"exterior-triangle",ext:128,a:53}],
"16.2":[{kind:"parallel-corresponding",a:70},{kind:"parallel-cointerior",a:117},{kind:"parallel-adjacent",a:68},{kind:"parallel-mixed",a:68},{kind:"parallel-corresponding",a:55}],
"16.3":[{kind:"polygon-triangulate",n:6},{kind:"regular-polygon",n:8},{kind:"regular-polygon",n:15},{kind:"regular-polygon",n:15},{kind:"irregular-pentagon"}],
"16.4":[{kind:"sym-rectangle"},{kind:"sym-hexagon"},{kind:"sym-order",n:5},{kind:"sym-hexagon"},{kind:"sym-rhombus"}],
"16.5":[{kind:"solid-cylinder"},{kind:"solid-cube"},{kind:"solid-tri-prism"},{kind:"solid-tri-prism"},{kind:"solid-cylinder"}],
"17.1":[{kind:"class-boundaries"},{kind:"group-classes"},{kind:"summary-cards"},{kind:"class-boundaries"},{kind:"group-classes"}],
"17.2":[{kind:"parallelogram",b:8,h:3.5},{kind:"trapezium",a:8,b:13,h:6},{kind:"trapezium",a:8,b:13,h:6},{kind:"trapezium",a:8,b:14,h:6},{kind:"l-shape",W:12,H:9,w:5,h:4}],
"17.3":[{kind:"circle-radius",r:7},{kind:"circle-diameter",d:12},{kind:"circle-area",r:9},{kind:"circle-diameter",d:12},{kind:"circle-area",r:9}],
"17.4":[{kind:"sector",r:6,a:40},{kind:"sector-perimeter",r:8,a:120},{kind:"sector",r:12,a:75},{kind:"sector",r:9,a:80},{kind:"major-sector",r:6,a:240}],
"18.1":[{kind:"data-types"},{kind:"two-way",vals:[11,7,14,8]},{kind:"class-boundaries"},{kind:"two-way",vals:[11,7,14,8]},{kind:"group-classes"}],
"18.2":[{kind:"raw-dot"},{kind:"boxplot"},{kind:"outlier"},{kind:"raw-dot"},{kind:"compare-box"}],
"18.3":[{kind:"grouped-mean"},{kind:"midpoint"},{kind:"fx-table"},{kind:"grouped-mean"},{kind:"grouped-mean"}],
"18.4":[{kind:"modal-class"},{kind:"median-class"},{kind:"grouped-warning"},{kind:"modal-median"},{kind:"grouped-warning"}],
"18.5":[{kind:"comparison-table"},{kind:"two-way-percent"},{kind:"comparison-table"},{kind:"two-way-overlap"},{kind:"comparison-table"}],
"18.6":[{kind:"two-box"},{kind:"summary-cards"},{kind:"outlier"},{kind:"two-box"},{kind:"summary-cards"}],
"18.7":[{kind:"sample-pop"},{kind:"causation"},{kind:"voluntary"},{kind:"sample-bias"},{kind:"causation"}],
"19.1":[{kind:"pie-data"},{kind:"stem-leaf"},{kind:"pictogram"},{kind:"pie-data"},{kind:"stem-leaf"}],
"19.2":[{kind:"scatter",v:0},{kind:"scatter-outlier",v:1},{kind:"scatter",v:2},{kind:"scatter",v:3},{kind:"scatter",v:0}],
"19.3":[{kind:"corr-positive"},{kind:"corr-negative"},{kind:"corr-zero"},{kind:"corr-positive"},{kind:"corr-confound"}],
"19.4":[{kind:"best-fit",v:0},{kind:"best-fit-range",inside:true},{kind:"best-fit-range",inside:false},{kind:"best-fit",v:0},{kind:"best-fit-range",inside:false}],
"19.5":[{kind:"cf-table"},{kind:"cf-points"},{kind:"cf-curve",v:0},{kind:"cf-table"},{kind:"cf-points"}],
"19.6":[{kind:"cf-quartiles",n:80},{kind:"cf-percentile",p:80},{kind:"cf-read",q1:18,q3:31},{kind:"cf-quartiles",n:80},{kind:"cf-read",q1:18,q3:31}],
"19.7":[{kind:"hist",v:0},{kind:"hist",v:1},{kind:"hist",v:2},{kind:"hist",v:5},{kind:"hist",v:7}],
"19.8":[{kind:"hist-calc"},{kind:"hist-calc"},{kind:"hist-calc"},{kind:"hist-calc"},{kind:"hist-calc"}],
"19.9":[{kind:"bar-infer"},{kind:"pie-compare"},{kind:"cf-curve",v:5},{kind:"bar-infer"},{kind:"pie"}],
"19.10":[{kind:"cf-compare"},{kind:"hist-compare"},{kind:"cf-compare"},{kind:"cf-compare"},{kind:"cf-compare"}],
"19.11":[{kind:"truncated-axis"},{kind:"extrapolation"},{kind:"hist-error"},{kind:"truncated-axis"},{kind:"sample-pop"}],
"21.1":[{kind:"venn-two"},{kind:"venn-outside"},{kind:"venn-complement"},{kind:"venn-two"},{kind:"venn-demorgan"}],
"22.1":[{kind:"prop-square"},{kind:"prop-inverse"},{kind:"prop-root"},{kind:"prop-square"},{kind:"prop-root"}]
};
window.MathoraDiagrams={
 ...old,
 question:render,
 example(id,type,variant=0){
   const map=teacherMaps[id];
   if(map&&map[variant])return render(map[variant]);
   return old.example?old.example(id,type,variant):(old.lesson?old.lesson(type,variant):"");
 }
};
})();
})();

/* ===== question-engine.js ===== */
(function(){
(function(){
"use strict";
const Q=(p,s,d=null)=>({prompt:p,steps:s,diagram:d});
const t=n=>Number.isInteger(n)?String(n):String(+n.toFixed(3));
const frac=(a,b)=>{const g=(x,y)=>y?g(y,x%y):Math.abs(x),h=g(a,b);a/=h;b/=h;if(b<0){a=-a;b=-b}return b===1?String(a):"\\frac{"+a+"}{"+b+"}"};
const cycle=(arr,n=32)=>Array.from({length:n},(_,i)=>arr[i%arr.length](i));

function surds(){const vals=[[72,36,2],[98,49,2],[108,36,3],[200,100,2],[300,100,3],[75,25,3],[147,49,3],[180,36,5]];
return cycle(vals.map(([n,s,r])=>()=>Q("Simplify [[\\sqrt{"+n+"}]].",["Write [["+n+"="+s+"\\times"+r+"]].","[[\\sqrt{"+n+"}=\\sqrt{"+s+"}\\sqrt{"+r+"}="+Math.sqrt(s)+"\\sqrt{"+r+"}]]."])));}
function rationalise(){const a=[[5,2],[7,3],[6,5],[9,7],[4,3],[11,6],[8,5],[3,2]],b=[[4,3,5],[3,2,3],[5,4,7],[6,5,6],[2,3,2],[7,4,3],[8,5,11],[9,4,7]];
return Array.from({length:32},(_,i)=>{if(i<16){const [m,r]=a[i%8];return Q("Rationalise [[\\frac{"+m+"}{\\sqrt{"+r+"}}]].",["Multiply top and bottom by [[\\sqrt{"+r+"}]].","[[\\frac{"+m+"}{\\sqrt{"+r+"}}\\times\\frac{\\sqrt{"+r+"}}{\\sqrt{"+r+"}}=\\frac{"+m+"\\sqrt{"+r+"}}{"+r+"}]]."])}
const [m,p,r]=b[i%8],den=p*p-r;return Q("Rationalise [[\\frac{"+m+"}{"+p+"-\\sqrt{"+r+"}}]].",["Multiply by the conjugate [["+p+"+\\sqrt{"+r+"}]].","Denominator: [["+p+"^2-"+r+"="+den+"]].","Final answer: [[\\frac{"+m+"("+p+"+\\sqrt{"+r+"})}{"+den+"}]]."])});}
function algfrac(simple=true){return Array.from({length:32},(_,i)=>{const k=i%8,a=2+k,b=3+(k%4),c=1+(k%3);if(simple){
if(i<8){const A=6+2*k,B=9+3*k,m=3+k%3,n=5+k%2,g=(x,y)=>y?g(y,x%y):Math.abs(x),h=g(A,B),aa=A/h,bb=B/h,e=m-n,term=e===0?"1":(e>0?"x^"+e:"\\frac{1}{x^"+(-e)+"}"),ans=bb===1?aa+term:"\\frac{"+aa+(e>0?"x^"+e:"")+"}{"+bb+(e<0?"x^"+(-e):"")+"}";return Q("Simplify [[\\frac{"+A+"x^"+m+"}{"+B+"x^"+n+"}]].",["Reduce the coefficient: [[\\frac{"+A+"}{"+B+"}=\\frac{"+aa+"}{"+bb+"}]].","Subtract indices: [["+m+"-"+n+"="+e+"]].","Final answer: [["+ans+"]], with [[x\\ne0]]."])};
const u=2+k,v=3+(k%5),w=4+(k%4);return Q("Simplify [[\\frac{(x+"+u+")(x-"+v+")}{(x-"+v+")(x+"+w+")}]].",["Factorisation is already visible.","Cancel the complete common factor [[x-"+v+"]].","Result: [[\\frac{x+"+u+"}{x+"+w+"}]], with excluded values from the original denominator."])}
if(i%4===0)return Q("Write [[\\frac{"+a+"}{x}+\\frac{"+b+"}{x+"+c+"}]] as one fraction.",["LCD [[=x(x+"+c+")]].","[[\\frac{"+a+"(x+"+c+")+"+b+"x}{x(x+"+c+")}]].","Final answer: [[\\frac{"+(a+b)+"x+"+(a*c)+"}{x(x+"+c+")}]], with [[x\\ne0,-"+c+"]]."]);
if(i%4===1)return Q("Simplify [[\\frac{"+a+"x}{"+b+"}\\times\\frac{"+c+"}{"+a+"x}]].",["Cancel common factors.","Result: [[\\frac{"+c+"}{"+b+"}]], with [[x\\ne0]]."]);
if(i%4===2)return Q("Simplify [[\\frac{x^2-"+(a*a)+"}{"+b+"x}\\div\\frac{x+"+a+"}{"+c+"x^2}]].",["[[x^2-"+(a*a)+"=(x-"+a+")(x+"+a+")]].","Change division to multiplication by the reciprocal.","Cancel [[x+"+a+"]] and one factor x.","Final answer: [[\\frac{"+c+"x(x-"+a+")}{"+b+"}]]."]);
return Q("Simplify [[\\frac1{x-"+c+"}-\\frac1{x+"+b+"}]].",["Use LCD [[(x-"+c+")(x+"+b+")]].","Numerator [[=(x+"+b+")-(x-"+c+")="+(b+c)+"]].","Final answer: [[\\frac{"+(b+c)+"}{(x-"+c+")(x+"+b+")}]], with [[x\\ne"+c+",-"+b+"]]."])});}
function forming(){const arr=[
()=>Q("Two consecutive integers have a sum of 47. Form an equation.",["Let the first be [[n]].","The next is [[n+1]].","Equation: [[n+(n+1)=47]]."]),
()=>Q("Two consecutive even integers have product 224. Form an equation.",["Let them be [[2n]] and [[2n+2]].","Equation: [[2n(2n+2)=224]]."]),
()=>Q("A rectangle is 4 cm longer than it is wide and has perimeter 52 cm. Form an equation.",["Let width be [[x]].","Length [[=x+4]].","[[2x+2(x+4)=52]]."]),
()=>Q("A taxi charges KD 2.5 plus KD 0.8 per kilometre. A journey costs KD 10.5. Form an equation.",["Let distance be [[d]].","[[2.5+0.8d=10.5]]."]),
()=>Q("Adult tickets cost [[a]] KD and student tickets cost [[s]] KD. Write the cost of 3 adults and 5 students.",["Multiply each price by its quantity.","[[3a+5s]]."]),
()=>Q("A square has side [[x+3]]. Write a formula for its area.",["Area = side².","[[A=(x+3)^2]]."]),
()=>Q("A circle has diameter [[d]]. Write its area in terms of d.",["Radius [[=d/2]].","[[A=\\pi(d/2)^2=\\frac{\\pi d^2}{4}]]."]),
()=>Q("Three adult tickets and two child tickets cost KD 64; two adults and five children cost KD 71. Form simultaneous equations.",["Let prices be [[a]] and [[c]].","[[3a+2c=64]], [[2a+5c=71]]."])
];return cycle(arr);}
function linear(){return Array.from({length:32},(_,i)=>{const k=i%8;if(i<8){const a=3+k,b=(k%2?-(2+k):4+k),x=4+k,c=a*x+b;return Q("Solve [["+a+"x"+(b>=0?"+":"")+b+"="+c+"]].",["Move the constant term.","Divide by "+a+".","[[x="+x+"]]."])}
if(i<16){const a=3+k,c=2+(k%3),r=2+k,b=1+(k%4),d=(a*(r+b)/c)-r;return Q("Solve [["+a+"(x+"+b+")="+c+"(x+"+t(d)+")]].",["Expand both brackets.","Collect the x-terms on one side.","Solve and check."])}
if(i<24){const a=3+k,b=2+(k%3),x=2+k,c=(a*x-b);const den=2+(k%4);return Q("Solve [[\\frac{"+den+"x-"+b+"}{"+a+"}="+t((den*x-b)/a)+"]].",["Multiply by the denominator.","Isolate the x-term.","Divide to find x."])}
const rate=[1.2,.75,1.5,.9,2.2,1.1,.8,1.6][k],fixed=[3.5,2,4,5,1.5,2.7,4.2,3][k],units=5+k,total=+(fixed+rate*units).toFixed(2);return Q("A service costs KD "+fixed+" plus KD "+rate+" per unit. The total is KD "+total+". Find the number of units.",["Let the number of units be [[x]].","Form and solve the linear equation.","[[x="+units+"]]."])});}
function quadratic(){return Array.from({length:32},(_,i)=>{const k=i%8;if(i<8){const r1=1+k%4,r2=4+k%5,b=-(r1+r2),c=r1*r2;return Q("Solve [[x^2"+(b>=0?"+":"")+b+"x+"+c+"=0]].",["Factorise into two brackets.","Set each factor equal to zero.","Solutions: [[x="+r1+"]] or [[x="+r2+"]]."])}
if(i<16){const b=2*(2+k%4),c=-7+k;const h=b/2,constant=c-h*h;return Q("Write [[x^2+"+b+"x"+(c>=0?"+":"")+c+"]] in completed-square form.",["Half the coefficient of x: [["+h+"]].","[[x^2+"+b+"x=(x+"+h+")^2-"+(h*h)+"]].","Final form: [[(x+"+h+")^2"+(constant>=0?"+":"")+constant+"]]."])}
if(i<24){const a=2+k%3,b=1+k,c=-(2+k%5),D=b*b-4*a*c;return Q("Solve [["+a+"x^2+"+b+"x"+c+"=0]] using the quadratic formula.",["Identify [[a="+a+",b="+b+",c="+c+"]].","Discriminant [[="+D+"]].","[[x=\\frac{-"+b+"\\pm\\sqrt{"+D+"}}{"+(2*a)+"}]]."])}
const w=2+k%4,add=3+k%3,area=w*(w+add);return Q("A rectangle has width [[x]] and length [[x+"+add+"]]. Its area is "+area+". Find x.",["[[x(x+"+add+")="+area+"]].","[[x^2+"+add+"x-"+area+"=0]].","Factorise: [[(x-"+w+")(x+"+(w+add)+")=0]].","The positive root is [[x="+w+"]]."])});}
function fractionalEq(){return Array.from({length:32},(_,i)=>{const k=i%8;if(i<8){const a=3+k,b=1+k%4,x=4+k,c=x/a+b;return Q("Solve [[\\frac{x}{"+a+"}+"+b+"="+frac(x+a*b,a)+"]].",["Subtract "+b+".","Multiply by "+a+".","[[x="+x+"]]."])}
if(i<16){const b=1+k%4,c=2+k%3,x=b+2;const a=c*(x-b);return Q("Solve [[\\frac{"+a+"}{x-"+b+"}="+c+"]].",["State [[x\\ne"+b+"]].","[[ "+a+"="+c+"(x-"+b+") ]].","[[x-"+b+"="+(x-b)+"]].","[[x="+x+"]]."])}
if(i<24){const b=1+k%3,d=2+k%4,a=2+k,c=3+k%4,num=-(a*d+c*b),den=a-c;return Q("Solve [[\\frac{"+a+"}{x-"+b+"}=\\frac{"+c+"}{x+"+d+"}]].",["Restrictions: [[x\\ne"+b+",-"+d+"]].","[["+a+"(x+"+d+")="+c+"(x-"+b+")]].","[["+(a-c)+"x="+num+"]].","[[x="+frac(num,den)+"]]."])}
const a=3+k,b=4+(k%3),d=5+k,L=a*b,num=d*L+a,den=a+b;return Q("Solve [[\\frac{x}{"+a+"}+\\frac{x-1}{"+b+"}="+d+"]].",["Multiply by [["+L+"]]: [["+b+"x+"+a+"(x-1)="+(d*L)+"]].","[["+(a+b)+"x-"+a+"="+(d*L)+"]].","[["+(a+b)+"x="+num+"]].","[[x="+frac(num,den)+"]]."])});}
function simultaneous(linearOnly=true){return Array.from({length:32},(_,i)=>{const k=i%8;if(!linearOnly){const circle=[
 [1,1,25,[[3,4],[-4,-3]]],
 [1,-1,13,[[3,2],[-2,-3]]],
 [-1,2,10,[[-1,3],[3,-1]]],
 [0,3,25,[[4,3],[-4,3]]]
],para=[
 [1,2,-4,[[3,5],[-2,0]]],
 [2,3,3,[[0,3],[2,7]]],
 [-1,2,-4,[[2,0],[-3,5]]],
 [1,-1,-7,[[3,2],[-2,-3]]]
];if(i%2===0){const z=circle[Math.floor(i/2)%circle.length],m=z[0],n=z[1],R=z[2],pts=z[3];return Q("Solve simultaneously [[y="+m+"x"+(n>=0?"+":"")+n+"]] and [[x^2+y^2="+R+"]].",["Substitute y: [[x^2+("+m+"x"+(n>=0?"+":"")+n+")^2="+R+"]].","Expand and factorise the resulting quadratic.","Solutions: [[("+pts[0][0]+","+pts[0][1]+")]] and [[("+pts[1][0]+","+pts[1][1]+")]]."],{kind:"line-circle",m,n,R})}
const z=para[Math.floor(i/2)%para.length],m=z[0],n=z[1],cc=z[2],pts=z[3];return Q("Solve simultaneously [[y="+m+"x"+(n>=0?"+":"")+n+"]] and [[y=x^2"+(cc>=0?"+":"")+cc+"]].",["Set equal: [["+m+"x"+(n>=0?"+":"")+n+"=x^2"+(cc>=0?"+":"")+cc+"]].","Rearrange and factorise the quadratic.","Solutions: [[("+pts[0][0]+","+pts[0][1]+")]] and [[("+pts[1][0]+","+pts[1][1]+")]]."],{kind:"line-parabola",m,n,c:cc})}
if(i<16){const x=2+k%4,y=3+k%5,a=2+k%3,b=1+k%2,d=1+k%2,e=-(1+k%3),c=a*x+b*y,f=d*x+e*y;return Q("Solve [["+a+"x"+(b>=0?"+":"")+b+"y="+c+"]] and [["+d+"x"+(e>=0?"+":"")+e+"y="+f+"]].",["Use elimination or substitution.","Eliminate one variable.","[[x="+x+", y="+y+"]]."])}
if(i<24){const x=1+k%4,m=2+k%3,n=1+k%2,y=m*x+n,a=2+k%3,c=a*x+y;return Q("Solve [[y="+m+"x+"+n+"]] and [["+a+"x+y="+c+"]].",["Substitute the first equation into the second.","Solve for x.","Substitute back to find y."])}
const cPrice=1.5+.5*(k%4),tPrice=1+.25*(k%3),c1=2+k%3,t1=2+(k+1)%3,c2=c1+2,t2=t1,total1=+(c1*cPrice+t1*tPrice).toFixed(2),total2=+(c2*cPrice+t2*tPrice).toFixed(2);return Q(c1+" coffees and "+t1+" teas cost KD "+total1+"; "+c2+" coffees and "+t2+" teas cost KD "+total2+". Find both prices.",["Form two simultaneous equations.","Subtract to eliminate tea.","Coffee = KD "+cPrice+", tea = KD "+tPrice+"."])});}
function rearrange(){const arr=[
()=>Q("Make [[x]] the subject of [[y=3x-5]].",["[[y+5=3x]].","[[x=\\frac{y+5}{3}]]."]),
()=>Q("Make [[r]] the subject of [[A=\\pi r^2]].",["[[r^2=\\frac A\\pi]].","[[r=\\sqrt{\\frac A\\pi}]]."]),
()=>Q("Make [[t]] the subject of [[v=u+at]].",["[[v-u=at]].","[[t=\\frac{v-u}{a}]]."]),
()=>Q("Make [[x]] the subject of [[a=\\frac{bx+c}{d}]].",["[[ad=bx+c]].","[[x=\\frac{ad-c}{b}]]."]),
()=>Q("Make [[x]] the subject of [[y=ax+bx+c]].",["[[y-c=x(a+b)]].","[[x=\\frac{y-c}{a+b}]]."]),
()=>Q("Make [[x]] the subject of [[y=\\frac{ax+b}{cx+d}]].",["[[y(cx+d)=ax+b]].","Collect x-terms.","[[x=\\frac{b-yd}{yc-a}]]."]),
()=>Q("Make [[h]] the subject of [[V=\\frac13\\pi r^2h]].",["[[3V=\\pi r^2h]].","[[h=\\frac{3V}{\\pi r^2}]]."]),
()=>Q("Make [[x]] the subject of [[p=\\sqrt{x+q}]].",["Square both sides.","[[x=p^2-q]]."])
];return cycle(arr);}
function numberline(){const specs=[[-2,4,false,true],[-1,5,true,false],[1,6,true,true],[-4,2,false,false],[0,3,false,true],[2,7,true,false],[-5,-1,true,true],[-3,3,false,false]];
return cycle(specs.map(([a,b,cl,cr])=>()=>Q("Represent [["+a+(cl?"\\le":"<")+"x"+(cr?"\\le":"<")+b+"]] on a number line.",["Use a "+(cl?"closed":"open")+" circle at "+a+".","Use a "+(cr?"closed":"open")+" circle at "+b+".","Shade between the endpoints."],{kind:"numberline",a,b,cl,cr})));}
function linearIneq(){return Array.from({length:32},(_,i)=>{const k=i%8;if(i<16){const a=[3,5,-2,4,-3,6,-5,7][k],b=[4,-7,5,-3,7,8,2,-4][k],x=2+k,c=a*x+b,sg=["<",">","\\ge","\\le"][k%4],flip=a<0;return Q("Solve [["+a+"x"+(b>=0?"+":"")+b+sg+c+"]].",["Isolate the x-term.",flip?"Divide by a negative, so reverse the sign.":"Divide by the coefficient of x.","[[x"+(flip?({"<":">",">":"<","\\ge":"\\le","\\le":"\\ge"}[sg]):sg)+x+"]]."])}
const a=2+k%3,b=-2+k%5,lo=-3+k,hi=9+k;return Q("Solve [["+lo+"\\le"+a+"x"+(b>=0?"+":"")+b+"<"+hi+"]].",["Subtract the constant throughout.","Divide all three parts by "+a+".","Write the compound solution."])});}
function graphIneq(region=false){const base=region?[
()=>Q("A region is above [[y=x]], below [[y=5]], and right of [[x=1]]. List the inequalities.",["[[y\\ge x]], [[y\\le5]], [[x\\ge1]]."],{kind:"region",v:0}),
()=>Q("A triangular region is bounded by the axes and [[x+y=6]]. List the inequalities.",["[[x\\ge0]], [[y\\ge0]], [[x+y\\le6]]."],{kind:"region",v:1}),
()=>Q("A region is left of [[x=4]], above [[y=-1]], and below [[y=2x+3]].",["[[x\\le4]], [[y\\ge-1]], [[y\\le2x+3]]."],{kind:"region",v:2}),
()=>Q("A region is between [[y=x-2]] and [[y=x+3]], with [[0\\le x\\le5]].",["[[y\\ge x-2]], [[y\\le x+3]], [[0\\le x\\le5]]."],{kind:"region",v:3}),
()=>Q("A region is below [[y=-x+6]], above [[y=1]], and left of [[x=4]]. List the inequalities.",["[[y\\le-x+6]], [[y\\ge1]], [[x\\le4]]."],{kind:"region",v:4}),
()=>Q("A region lies in the first quadrant and below [[2x+y=8]]. List the inequalities.",["[[x\\ge0]], [[y\\ge0]], [[2x+y\\le8]]."],{kind:"region",v:5}),
()=>Q("A region is above [[y=2x-3]], below [[y=x+4]], and to the right of the y-axis.",["[[y\\ge2x-3]], [[y\\le x+4]], [[x\\ge0]]."],{kind:"region",v:6}),
()=>Q("A region is inside the strip [[-2\\le x\\le3]] and above [[y=-x]].",["[[-2\\le x\\le3]], [[y\\ge-x]]."],{kind:"region",v:7})
]:[
()=>Q("Graph [[y>2x-1]].",["Draw [[y=2x-1]] dashed.","Test [[(0,0)]].","Shade the side that satisfies the inequality."],{kind:"ineq-line",m:2,c:-1,solid:false}),
()=>Q("Graph [[y\\le-x+4]].",["Draw [[y=-x+4]] solid.","Test [[(0,0)]].","Shade the correct side."],{kind:"ineq-line",m:-1,c:4,solid:true}),
()=>Q("Graph [[x+y<6]].",["Boundary [[x+y=6]] is dashed.","Test [[(0,0)]].","Shade the satisfying side."],{kind:"ineq-line2",a:1,b:1,c:6,solid:false}),
()=>Q("Graph [[x\\ge3]].",["Draw solid vertical line [[x=3]].","Shade to the right."],{kind:"ineq-vertical",x:3,solid:true}),
()=>Q("Graph [[y<-2]].",["Draw dashed horizontal line [[y=-2]].","Shade below."],{kind:"ineq-horizontal",y:-2,solid:false}),
()=>Q("Graph [[2x+y\\ge4]].",["Boundary [[y=4-2x]] is solid.","Test a point.","Shade the correct half-plane."],{kind:"ineq-line2",a:2,b:1,c:4,solid:true})
];return cycle(base);}
function angles(kind){const sets={
angles:[
()=>Q("Find x on a straight line if the adjacent angle is [[128^\\circ]].",["Straight line total 180°.","[[x=52^\\circ]]."],{kind:"straight-angle",a:128}),
()=>Q("Two lines cross. One angle is [[115^\\circ]]. Find the opposite and an adjacent angle.",["Opposite = 115°.","Adjacent [[=65^\\circ]]."],{kind:"vertical-angles",a:115}),
()=>Q("Around a point the angles are [[x,2x,4x,150^\\circ]]. Find x.",["Total 360°.","[[7x+150=360]].","[[x=30^\\circ]]."],{kind:"around-point",fixed:150}),
()=>Q("The angles of a quadrilateral are [[2x,3x,4x,5x]]. Find x.",["Total 360°.","[[14x=360]].","[[x=180/7^\\circ]]."],{kind:"quadrilateral"}),
()=>Q("An exterior angle is 128° and one opposite interior angle is 53°. Find the other.",["Exterior angle = sum of opposite interior angles.","[[x=128-53=75^\\circ]]."],{kind:"exterior-triangle",ext:128,a:53}),
()=>Q("An isosceles triangle has vertex angle 44°. Find each base angle.",["Remaining total 136°.","Divide by 2.","Each base angle = 68°."],{kind:"isosceles",vertex:44}),
()=>Q("A triangle has angles [[3x,4x,5x]]. Find x.",["[[12x=180]].","[[x=15^\\circ]]."],{kind:"triangle-multiple"}),
()=>Q("A reflex angle is 250°. Find the smaller angle around the point.",["[[360-250=110^\\circ]]."],{kind:"reflex",a:250})
],
parallel:[
()=>Q("Corresponding angles are [[3x+10]] and [[5x-30]]. Find x.",["Corresponding angles are equal.","[[3x+10=5x-30]].","[[x=20]]."],{kind:"parallel-corresponding",a:70}),
()=>Q("A co-interior angle is 117°. Find the other.",["Co-interior angles sum to 180°.","[[63^\\circ]]."],{kind:"parallel-cointerior",a:117}),
()=>Q("An alternate angle is 68°. Find the matching alternate angle.",["Alternate angles are equal.","[[68^\\circ]]."],{kind:"parallel-alternate",a:68}),
()=>Q("One corresponding angle is 124°. Find the adjacent acute angle.",["Corresponding angle = 124°.","Adjacent [[=56^\\circ]]."],{kind:"parallel-mixed",a:124}),
()=>Q("Co-interior angles are [[4x+8]] and [[6x+12]]. Find x.",["Their sum is 180°.","[[10x+20=180]].","[[x=16]]."],{kind:"parallel-cointerior-algebra"}),
()=>Q("Corresponding angles are [[2x+17]] and [[5x-34]]. Find x.",["Set equal.","[[3x=51]].","[[x=17]]."],{kind:"parallel-corresponding-algebra"}),
()=>Q("An obtuse angle on a transversal is 132°. Find an adjacent acute angle.",["Straight line total 180°.","[[48^\\circ]]."],{kind:"parallel-adjacent",a:132}),
()=>Q("Explain why two lines are parallel if a pair of alternate angles are equal.",["Converse of the alternate-angle theorem."],{kind:"parallel-proof",a:64})
],
polygons:[
()=>Q("Find the interior angle sum of a hexagon.",["[[(6-2)180=720^\\circ]]."],{kind:"polygon-triangulate",n:6}),
()=>Q("Find each exterior angle of a regular octagon.",["[[360/8=45^\\circ]]."],{kind:"regular-polygon",n:8}),
()=>Q("A regular polygon has exterior angle 24°. Find its number of sides.",["[[n=360/24=15]]."],{kind:"exterior-angle",a:24}),
()=>Q("Four interior angles of a pentagon are 104°,118°,95°,132°. Find the fifth.",["Pentagon total 540°.","Known total 449°.","Missing 91°."],{kind:"irregular-pentagon"}),
()=>Q("Find each interior angle of a regular decagon.",["Interior total 1440°.","[[1440/10=144^\\circ]]."],{kind:"regular-polygon",n:10}),
()=>Q("A regular polygon has interior angle 150°. Find the number of sides.",["Exterior angle 30°.","[[360/30=12]]."],{kind:"regular-polygon",n:12}),
()=>Q("Why do exterior angles of any polygon total 360°?",["Walking once around makes one full turn = 360°."],{kind:"exterior-walk",n:5}),
()=>Q("A regular 18-gon: find each interior angle.",["Exterior [[=360/18=20^\\circ]].","Interior [[=160^\\circ]]."],{kind:"regular-polygon",n:18})
]};return cycle(sets[kind]);}
function symmetry(solid=false){const a=solid?[
()=>Q("Describe the symmetry of a right circular cylinder.",["Infinitely many vertical planes through its axis.","One horizontal mid-plane.","Continuous rotational symmetry about its axis."],{kind:"solid-cylinder"}),
()=>Q("How many planes of symmetry does a cube have?",["9 planes."],{kind:"solid-cube"}),
()=>Q("A regular triangular prism: state rotational order about its long axis.",["Equilateral end repeats every 120°.","Order 3."],{kind:"solid-tri-prism"}),
()=>Q("Describe one plane of symmetry of a cone.",["Any plane through the central axis."],{kind:"solid-cone"}),
()=>Q("Describe the symmetry of a sphere.",["Every plane through the centre is a symmetry plane.","Continuous rotational symmetry about any diameter."],{kind:"solid-sphere"}),
()=>Q("A regular square-based pyramid: state rotational order about the vertical axis.",["Repeats every 90°.","Order 4."],{kind:"solid-pyramid"}),
()=>Q("Which has more symmetry planes: cube or unequal cuboid?",["Cube: 9.","General cuboid: 3."],{kind:"solid-cuboid"}),
()=>Q("Describe the key symmetry feature of a regular tetrahedron.",["Its identical equilateral faces create multiple planes and rotational symmetries."],{kind:"solid-tetra"})
]:[
()=>Q("State the symmetry of a rectangle.",["2 lines of symmetry.","Rotational order 2."],{kind:"sym-rectangle"}),
()=>Q("State the symmetry of a regular hexagon.",["6 lines.","Rotational order 6."],{kind:"sym-hexagon"}),
()=>Q("A shape has rotational order 5. Find the smallest rotation.",["[[360/5=72^\\circ]]."],{kind:"sym-order",n:5}),
()=>Q("State the symmetry of a rhombus.",["2 diagonal lines.","Rotational order 2."],{kind:"sym-rhombus"}),
()=>Q("State the symmetry of a kite.",["Usually 1 line.","Rotational order 1."],{kind:"sym-kite"}),
()=>Q("State the symmetry of an equilateral triangle.",["3 lines.","Rotational order 3."],{kind:"sym-triangle"}),
()=>Q("Will a regular octagon map onto itself after 135°?",["Smallest angle 45°.","135° = 3×45°, so yes."],{kind:"sym-octagon"}),
()=>Q("State the symmetry of a general parallelogram.",["No line symmetry.","Rotational order 2."],{kind:"sym-parallelogram"})
];return cycle(a);}
function units(){const a=[
()=>Q("Convert [[3.4\\text{ m}]] to cm.",["Multiply by 100.","[[340\\text{ cm}]]."]),
()=>Q("Convert [[2.5\\text{ m}^2]] to cm².",["Square the scale factor: [[100^2]].","[[25000\\text{ cm}^2]]."]),
()=>Q("Convert [[0.018\\text{ m}^3]] to litres.",["[[1\\text{ m}^3=1000\\text{ L}]].","[[18\\text{ L}]]."]),
()=>Q("Convert 4500 g to kg.",["Divide by 1000.","4.5 kg."]),
()=>Q("Convert 2.7 km to m.",["Multiply by 1000.","2700 m."]),
()=>Q("Convert 850 ml to litres.",["Divide by 1000.","0.85 L."]),
()=>Q("Convert 75000 cm² to m².",["Divide by 10000.","7.5 m²."]),
()=>Q("Convert 2.4 m³ to cm³.",["Multiply by 1,000,000.","2,400,000 cm³."])
];return cycle(a);}
function mensuration(type){const sets={
area:[
()=>Q("Find the area of a parallelogram with base 8 cm and height 3.5 cm.",["[[A=bh]].","[[28\\text{ cm}^2]]."],{kind:"parallelogram",b:8,h:3.5}),
()=>Q("A trapezium has parallel sides 8 cm and 14 cm, height 6 cm. Find area.",["[[A=\\frac12(a+b)h]].","[[66\\text{ cm}^2]]."],{kind:"trapezium",a:8,b:14,h:6}),
()=>Q("A triangle has base 12 cm and height 7 cm. Find area.",["[[A=\\frac12bh=42\\text{ cm}^2]]."],{kind:"triangle-area",b:12,h:7}),
()=>Q("An L-shape is a 12×9 rectangle with a 5×4 rectangle removed. Find area.",["Outer 108.","Removed 20.","Area 88 cm²."],{kind:"l-shape",W:12,H:9,w:5,h:4}),
()=>Q("A trapezium has area 63 cm², height 6 cm and one side 8 cm. Find the other parallel side.",["[[63=\\frac12(8+b)6]].","[[b=13]]."],{kind:"trapezium",a:8,b:13,h:6}),
()=>Q("Find the perimeter of the compound rectilinear shape.",["Find any missing aligned lengths.","Add each exposed edge once."],{kind:"compound-rect"}),
()=>Q("A kite has perpendicular diagonals 10 cm and 16 cm. Find area.",["[[A=\\frac12d_1d_2]].","80 cm²."],{kind:"kite-area",d1:10,d2:16}),
()=>Q("A rhombus has diagonals 12 cm and 9 cm. Find area.",["[[A=54\\text{ cm}^2]]."],{kind:"rhombus-area",d1:12,d2:9})
],
circle:[
()=>Q("Find circumference of a circle of radius 7 cm.",["[[C=2\\pi r=14\\pi\\text{ cm}]]."],{kind:"circle-radius",r:7}),
()=>Q("Find area of a circle of diameter 12 cm.",["Radius 6.","[[A=36\\pi\\text{ cm}^2]]."],{kind:"circle-diameter",d:12}),
()=>Q("A circle has area [[81\\pi]]. Find radius.",["[[r^2=81]].","[[r=9]]."],{kind:"circle-area",r:9}),
()=>Q("A semicircle has diameter 10 cm. Find area.",["Radius 5.","[[A=25\\pi/2]]."],{kind:"semicircle",d:10}),
()=>Q("Find area of annulus with radii 5 cm and 3 cm.",["[[25\\pi-9\\pi=16\\pi]]."],{kind:"annulus",R:5,r:3}),
()=>Q("A circle fits inside a square side 14 cm. Find area outside the circle.",["Square 196.","Circle 49π.","[[196-49\\pi]]."],{kind:"circle-square",s:14}),
()=>Q("Circumference is [[20\\pi]]. Find radius.",["[[2\\pi r=20\\pi]].","[[r=10]]."],{kind:"circle-radius",r:10}),
()=>Q("A circular track has radius 35 m. Find one lap distance.",["[[C=70\\pi\\text{ m}]]."],{kind:"circle-track",r:35})
],
sector:[
()=>Q("Sector radius 6 cm, angle 40°. Find area.",["[[A=40/360\\times36\\pi=4\\pi]]."],{kind:"sector",r:6,a:40}),
()=>Q("Sector radius 8 cm, angle 120°. Find arc length.",["[[L=120/360\\times16\\pi=16\\pi/3]]."],{kind:"sector",r:8,a:120}),
()=>Q("Sector radius 8 cm, angle 120°. Find perimeter.",["Arc [[=16\\pi/3]].","Add 16.","[[P=16+16\\pi/3]]."],{kind:"sector-perimeter",r:8,a:120}),
()=>Q("Radius 12 cm, arc length [[5\\pi]]. Find angle.",["Solve [[5\\pi=\\theta/360\\times24\\pi]].","[[\\theta=75^\\circ]]."],{kind:"sector",r:12,a:75}),
()=>Q("Major sector radius 6 cm, minor angle 120°. Find area.",["Major angle 240°.","[[A=24\\pi]]."],{kind:"major-sector",r:6,a:240}),
()=>Q("Sector area [[18\\pi]], radius 9 cm. Find angle.",["Solve [[18\\pi=\\theta/360\\times81\\pi]].","[[\\theta=80^\\circ]]."],{kind:"sector",r:9,a:80}),
()=>Q("A 90° sector has radius 10 cm. Find arc length and area.",["Arc [[=5\\pi]].","Area [[=25\\pi]]."],{kind:"sector",r:10,a:90}),
()=>Q("A semicircular sector has radius 7 cm. Find perimeter.",["Arc [[=7\\pi]].","Add diameter 14.","[[14+7\\pi]]."],{kind:"sector-perimeter",r:7,a:180})
]};return cycle(sets[type]);}
function stats(type){const sets={
tables:[
()=>Q("Classify eye colour, number of siblings and height.",["Eye colour: categorical.","Siblings: discrete.","Height: continuous."],{kind:"data-types"}),
()=>Q("18 boys, 22 girls; 11 boys and 14 girls choose football. Complete the two-way table.",["Boys other 7.","Girls other 8.","Totals: 25,15,40."],{kind:"two-way",vals:[11,7,14,8]}),
()=>Q("Group 2.4, 4.9, 5.0, 8.7, 9.9, 10.0, 13.2 into 0≤x<5, 5≤x<10, 10≤x<15.",["Frequencies 2,3,2."],{kind:"group-classes"}),
()=>Q("Why write [[0\\le x<10]] instead of '0-10'?",["It makes boundaries unambiguous and avoids overlap."],{kind:"class-boundaries"}),
()=>Q("Construct tally/frequency table for A,A,B,C,A,B,B,C,C,C.",["A=3, B=3, C=4."],{kind:"tally"}),
()=>Q("Write a stem-and-leaf diagram for 12,14,17,21,21,25,29,33.",["1 | 2 4 7; 2 | 1 1 5 9; 3 | 3.","Include a key."],{kind:"stem-leaf"}),
()=>Q("State whether shoe size is discrete or continuous.",["Discrete in this context."],{kind:"data-types"}),
()=>Q("Which table layout is best for two categorical variables?",["A two-way table."],{kind:"two-way",vals:[8,5,6,7]})
],
averages:[
()=>Q("Find mean, median, mode and range of 4,6,6,9,10.",["Mean 7.","Median 6, mode 6.","Range 6."],{kind:"raw-dot",vals:[4,6,6,9,10]}),
()=>Q("For 2,3,5,6,7,9,12,18 find Q1,Q3,IQR.",["Q1=4.","Q3=10.5.","IQR=6.5."],{kind:"boxplot"}),
()=>Q("Why might median be preferred for salaries?",["Extreme salaries can distort the mean.","Median is more resistant."],{kind:"outlier"}),
()=>Q("A: median 42, IQR 6. B: median 39, IQR 14. Compare.",["A higher centre.","A more consistent."],{kind:"compare-box"}),
()=>Q("Mean of five numbers is 12. Four sum to 43. Find fifth.",["Total 60.","Fifth =17."],{kind:"mean-balance"}),
()=>Q("Range 18, minimum 7. Find maximum.",["Maximum =25."],{kind:"range-line"}),
()=>Q("Best average for eye colour?",["Mode only."],{kind:"averages-choice"}),
()=>Q("Data 4,4,4,5,6,100: explain mean vs median.",["Outlier makes mean much larger.","Median better represents main cluster."],{kind:"outlier"})
],
"grouped-mean":[
()=>Q("Classes 0-10,10-20,20-30; frequencies 3,7,5. Estimate mean.",["Midpoints 5,15,25.","Σfx=245.","Mean ≈16.33."],{kind:"grouped-mean"}),
()=>Q("Classes 20-30,30-40,40-50; frequencies 4,9,7. Estimate mean.",["Midpoints 25,35,45.","Σfx=730.","Mean 36.5."],{kind:"grouped-mean"}),
()=>Q("Why is grouped mean an estimate?",["Exact values are unknown; midpoints stand in for them."],{kind:"midpoint"}),
()=>Q("Class midpoint 35, width 10. Give a class interval.",["One example: 30≤x<40."],{kind:"class-midpoint"}),
()=>Q("Σfx=960, total frequency 32. Estimate mean.",["[[960/32=30]]."],{kind:"fx-table"}),
()=>Q("Class 50-60 has frequency 8. Find contribution to Σfx.",["Midpoint 55.","[[8\\times55=440]]."],{kind:"midpoint"}),
()=>Q("Groups 1-3,4-6,7-9 with frequencies 4,8,3. Estimate mean.",["Midpoints 2,5,8.","Σfx=72.","Mean=4.8."],{kind:"grouped-mean"}),
()=>Q("Why multiply midpoint by frequency?",["It estimates the class total represented by that midpoint."],{kind:"midpoint"})
],
modalclass:[
()=>Q("Frequencies 4,11,7. State modal class.",["The class with frequency 11."],{kind:"modal-class"}),
()=>Q("Frequencies 3,8,12,5. Identify median class.",["Total 28, median around 14th/15th.","CF 3,11,23,28 → third class."],{kind:"median-class"}),
()=>Q("Frequencies 8,14,19,9. Identify modal and median class.",["Both are the third class."],{kind:"modal-median"}),
()=>Q("Why is exact median usually unavailable from grouped data?",["Raw values are unknown; only the class is exact."],{kind:"grouped-warning"}),
()=>Q("What does 'modal class 30≤x<40' mean?",["That interval has the greatest frequency."],{kind:"modal-class"}),
()=>Q("CF 6,17,31,40. Which class contains Q1?",["Q1 near 10th value → second class."],{kind:"cf-table"}),
()=>Q("Total frequency 60. Median CF position?",["30."],{kind:"cf-table"}),
()=>Q("Why can modal and median classes differ?",["Mode uses largest class frequency; median uses cumulative halfway position."],{kind:"modal-median"})
],
"data-interpret":[
()=>Q("18/30 pass in A; 20/40 in B. Which rate is higher?",["A=60%, B=50%.","A higher."],{kind:"comparison-table"}),
()=>Q("42 boys,38 girls; 20 boys and24 girls choose art. Compare percentages.",["Boys≈47.6%.","Girls≈63.2%.","Girls higher."],{kind:"two-way-percent"}),
()=>Q("72 French,54 Spanish,30 both out of 120. How many study at least one?",["[[72+54-30=96]]."],{kind:"two-way-overlap"}),
()=>Q("Why compare percentages when group sizes differ?",["Percentages give a like-for-like comparison."],{kind:"comparison-table"}),
()=>Q("A two-way table totals 80. A total=35, X total=28, A∩X=12. Complete other cells.",["A not X=23.","B in X=16.","B not X=29."],{kind:"two-way",vals:[12,23,16,29]}),
()=>Q("Frequency rises 24 to 30. Find percentage increase.",["Increase 6.","[[6/24\\times100=25%]]."],{kind:"table-change"}),
()=>Q("63% of 240 prefer A. Estimate number.",["[[0.63\\times240=151.2]].","About 151."],{kind:"percent-table"}),
()=>Q("Which category is least common if frequencies are 15,22,18,5?",["Fourth category."],{kind:"freq-table"})
],
"data-compare":[
()=>Q("A: median62,IQR8. B: median58,IQR15. Compare.",["A higher typical value.","A more consistent."],{kind:"two-box"}),
()=>Q("X mean12.4,range6. Y mean13.1,range20. Compare.",["Y higher mean.","X much more consistent."],{kind:"summary-cards"}),
()=>Q("Why pair median with IQR?",["Both are resistant to outliers and describe centre/spread consistently."],{kind:"boxplot"}),
()=>Q("Machines: means250,252; ranges18,6. Compare.",["B slightly higher mean.","B much more consistent."],{kind:"summary-cards"}),
()=>Q("A median64,IQR8; B median59,IQR5. Compare.",["A higher centre.","B more consistent."],{kind:"two-box"}),
()=>Q("Same mean20; ranges4 and11. Compare.",["Same centre by mean.","First is more consistent."],{kind:"summary-cards"}),
()=>Q("Same medians but one box plot has shorter box.",["Same central value.","Shorter box = smaller IQR = more consistent."],{kind:"two-box"}),
()=>Q("Higher median but larger IQR: give balanced comparison.",["Higher typical value but less consistency."],{kind:"two-box"})
],
"data-limits":[
()=>Q("Survey of 40 gym members finds 80% exercise weekly. Generalise to all adults?",["No; gym members are not representative."],{kind:"sample-pop"}),
()=>Q("Ice-cream sales and sunburn correlate. Causation?",["No; sunny weather is a confounding variable."],{kind:"causation"}),
()=>Q("Website poll has 20,000 responses. Automatically representative?",["No; self-selection can bias it."],{kind:"voluntary"}),
()=>Q("Only top maths set surveyed about homework. Limitation?",["Not representative of whole year."],{kind:"sample-bias"}),
()=>Q("Axis starts at96 comparing98 and100. Risk?",["Visual difference is exaggerated."],{kind:"truncated-axis"}),
()=>Q("Best-fit line used far outside data range. Issue?",["Extrapolation; trend may not continue."],{kind:"extrapolation"}),
()=>Q("Only 12 volunteers sampled. Give cautions.",["Small sample.","Volunteer bias."],{kind:"voluntary"}),
()=>Q("Measurement error affects a correlation study. How?",["It can distort the observed relationship and weaken conclusions."],{kind:"causation"})
],
charts:[
()=>Q("Frequencies A12,B18,C6,D4. Find pie angles.",["Total40, so each unit =9°.","108°,162°,54°,36°."],{kind:"pie-data"}),
()=>Q("Construct stem-and-leaf for 12,14,17,21,21,25,29,33.",["Order leaves.","Include a key."],{kind:"stem-leaf"}),
()=>Q("Pictogram key 1 symbol=8 people. What is 2.5 symbols?",["20 people."],{kind:"pictogram"}),
()=>Q("Best chart for comparing categories A-D?",["Bar chart."],{kind:"bar"}),
()=>Q("Pie sector72° from total150. Find frequency.",["[[72/360=1/5]].","30."],{kind:"pie"}),
()=>Q("Why join points on a time-series line graph?",["Time order makes continuous change meaningful."],{kind:"line-graph"}),
()=>Q("Should categorical bar-chart bars touch?",["Usually no; touching bars are typical for histograms."],{kind:"bar"}),
()=>Q("What must a comparative-bar key identify?",["Which colour/pattern represents each group."],{kind:"comparative-bar"})
],
scatter:[
()=>Q("Describe the correlation shown.",["Positive correlation."],{kind:"scatter",v:0}),
()=>Q("Identify the outlier.",["Choose the point furthest from the main pattern."],{kind:"scatter-outlier",v:1}),
()=>Q("Why should scatter points not be joined?",["They are separate paired observations."],{kind:"scatter",v:2}),
()=>Q("Points lie closely around a downward trend. Describe.",["Strong negative correlation."],{kind:"scatter",v:3}),
()=>Q("Points show no clear trend. Describe.",["Zero/no correlation."],{kind:"scatter",v:4}),
()=>Q("Height vs arm span: what kind of data?",["Bivariate numerical data."],{kind:"scatter",v:5}),
()=>Q("Before deleting an outlier, what should be checked?",["Whether it is an error or a genuine unusual observation."],{kind:"scatter-outlier",v:6}),
()=>Q("Dense cluster around a straight trend suggests what?",["A stronger linear relationship."],{kind:"scatter",v:7})
],
correlation:[
()=>Q("Temperature rises while heating use falls. Correlation?",["Negative."],{kind:"corr-negative"}),
()=>Q("Revision time rises while test score tends to rise. Correlation?",["Positive."],{kind:"corr-positive"}),
()=>Q("Shoe size and favourite colour show no pattern.",["Zero/no correlation."],{kind:"corr-zero"}),
()=>Q("Why does correlation not prove causation?",["A third variable may influence both."],{kind:"corr-causation"}),
()=>Q("Umbrella sales and traffic delays both rise on rainy days. Confounder?",["Rainfall/weather."],{kind:"corr-confound"}),
()=>Q("Correlation coefficient close to -1 means?",["Strong negative linear relationship."],{kind:"corr-negative"}),
()=>Q("A curved pattern has weak linear correlation. Is there necessarily no relationship?",["No; there may be a strong non-linear relationship."],{kind:"corr-curved"}),
()=>Q("What does very weak positive correlation look like?",["Slight upward tendency with large scatter."],{kind:"corr-weak"})
],
bestfit:[
()=>Q("Best-fit line through about (2,5),(8,17). Estimate y at x=5.",["Gradient≈2.","Line≈[[y=2x+1]].","y≈11."],{kind:"best-fit",v:0}),
()=>Q("Observed x 10-50; predict at x=35. Interpolation or extrapolation?",["Interpolation."],{kind:"best-fit-range",inside:true}),
()=>Q("Observed x 10-50; predict at x=90.",["Extrapolation; less reliable."],{kind:"best-fit-range",inside:false}),
()=>Q("Should a best-fit line pass through every point?",["No; it should reflect the overall trend."],{kind:"best-fit",v:1}),
()=>Q("Why is extrapolation less reliable?",["Trend may change beyond the observed range."],{kind:"best-fit-range",inside:false}),
()=>Q("Should a best-fit line be forced through an outlier?",["No; fit the main pattern and note the outlier."],{kind:"best-fit",v:2}),
()=>Q("A best-fit line predicts 42. How should this be phrased?",["As an estimate: about 42."],{kind:"best-fit",v:3}),
()=>Q("Can two reasonable best-fit lines give slightly different estimates?",["Yes; it is a visual/model estimate."],{kind:"best-fit",v:4})
],
cumfreq:[
()=>Q("Frequencies 5,8,11,6. Find cumulative frequencies.",["5,13,24,30."],{kind:"cf-table"}),
()=>Q("Why plot cumulative frequency at upper class boundaries?",["It counts all observations up to each class end."],{kind:"cf-points"}),
()=>Q("What must the final cumulative frequency equal?",["Total frequency."],{kind:"cf-curve",v:0}),
()=>Q("Class ends 10,20,30,40 with frequencies4,7,9,5. State plotted points.",["CF 4,11,20,25.","Plot at upper boundaries plus starting point."],{kind:"cf-points"}),
()=>Q("Can a cumulative-frequency curve decrease?",["No."],{kind:"cf-curve",v:1}),
()=>Q("CF values 6,16,20. Find class frequencies.",["6,10,4."],{kind:"cf-table"}),
()=>Q("At x=30, CF=42. Interpret.",["42 observations are at or below that upper boundary."],{kind:"cf-curve",v:2}),
()=>Q("Why use a smooth increasing curve rather than bars?",["Cumulative totals against a continuous variable are being modelled."],{kind:"cf-curve",v:3})
],
"cumfreq-read":[
()=>Q("80 values: CF positions for Q1, median, Q3?",["20,40,60."],{kind:"cf-quartiles",n:80}),
()=>Q("200 values: CF position for 90th percentile?",["180."],{kind:"cf-percentile",p:90}),
()=>Q("Q1≈18,Q3≈31. Find IQR.",["13."],{kind:"cf-read",q1:18,q3:31}),
()=>Q("Why are graph quartiles estimates?",["They are read/interpolated from a smooth curve."],{kind:"cf-curve",v:4}),
()=>Q("120 values: median CF position?",["60."],{kind:"cf-quartiles",n:120}),
()=>Q("Median42,Q1=35. What extra value is needed for IQR?",["Q3."],{kind:"cf-read",q1:35,q3:55}),
()=>Q("Which percentile is Q3?",["75th."],{kind:"cf-percentile",p:75}),
()=>Q("Equal medians; one group has smaller IQR. Which is more consistent?",["The group with the smaller IQR."],{kind:"cf-compare"})
],
histogram:[
()=>Q("Frequency15, class width10. Find density.",["[[15/10=1.5]]."],{kind:"hist",v:0}),
()=>Q("Density3.5, width10. Find frequency.",["35."],{kind:"hist",v:1}),
()=>Q("Equal frequencies20; widths5 and10. Compare heights.",["Densities4 and2.","Narrower class twice as tall."],{kind:"hist",v:2}),
()=>Q("Why do histogram bars touch?",["Classes are continuous intervals."],{kind:"hist",v:3}),
()=>Q("What does histogram bar area represent?",["Frequency."],{kind:"hist",v:4}),
()=>Q("Classes0-5,5-15,15-20 with frequencies10,30,20. Find densities.",["2,3,4."],{kind:"hist",v:5}),
()=>Q("Equal bar heights but unequal widths: equal frequencies?",["No; frequency = density×width."],{kind:"hist",v:6}),
()=>Q("Width8,density2.5. Find frequency.",["20."],{kind:"hist",v:7})
],
freqdensity:[
()=>Q("Frequency32,width8. Find density.",["4."],{kind:"hist-calc"}),
()=>Q("Density2.4,width15. Find frequency.",["36."],{kind:"hist-calc"}),
()=>Q("Frequency45,density3. Find width.",["15."],{kind:"hist-calc"}),
()=>Q("Frequency36,density4.5. Find width.",["8."],{kind:"hist-calc"}),
()=>Q("Width12,density1.75. Find frequency.",["21."],{kind:"hist-calc"}),
()=>Q("Frequency27,width6. Find density.",["4.5."],{kind:"hist-calc"}),
()=>Q("Density5,frequency30. Find width.",["6."],{kind:"hist-calc"}),
()=>Q("Width4,density7.5. Find frequency.",["30."],{kind:"hist-calc"})
],
"chart-infer":[
()=>Q("Bar chart A=42,B=31. Write one supported comparison.",["A exceeds B by 11 in this sample."],{kind:"bar-infer"}),
()=>Q("Two pie charts have different totals. Can sector size alone compare counts?",["No."],{kind:"pie-compare"}),
()=>Q("CF graph gives median about27. How phrase it?",["Median ≈27."],{kind:"cf-curve",v:5}),
()=>Q("Pie sector90° in sample240. Find frequency.",["[[90/360=1/4]].","60."],{kind:"pie"}),
()=>Q("Line graph rises sharply. What can be inferred?",["The plotted variable increased quickly over that interval."],{kind:"line-graph"}),
()=>Q("Truncated bar-chart axis: what should be checked?",["Read the numerical scale."],{kind:"truncated-axis"}),
()=>Q("Chart has no title or units. Limitation?",["Context/variable cannot be interpreted reliably."],{kind:"chart-missing-labels"}),
()=>Q("Pictogram uses half-symbols. What must the key allow?",["Convert partial symbols to exact frequencies."],{kind:"pictogram"})
],
"graph-compare":[
()=>Q("A: median45,Q1=38,Q3=51; B: median42,Q1=30,Q3=54. Compare.",["A higher median.","IQR A=13, B=24, so A more consistent."],{kind:"cf-compare"}),
()=>Q("Two histograms have different totals. What should be compared cautiously?",["Bar heights alone, especially with unequal widths."],{kind:"hist-compare"}),
()=>Q("Why pair median with IQR on CF graphs?",["Both are robust and read naturally from the graph."],{kind:"cf-compare"}),
()=>Q("Two box plots same IQR but different medians.",["Same spread of middle 50%, different typical values."],{kind:"two-box"}),
()=>Q("Curve A shifted right of B with similar shape.",["A generally has larger values with similar spread."],{kind:"cf-compare"}),
()=>Q("Histogram A has narrower central cluster than B.",["A may be more consistent, assuming same scale."],{kind:"hist-compare"}),
()=>Q("Two CF curves cross. Can one group be called always larger?",["No; compare specific quartiles/medians."],{kind:"cf-cross"}),
()=>Q("Equal medians; IQR6 vs11.",["Same centre, first group more consistent."],{kind:"two-box"})
],
"graph-limits":[
()=>Q("Bars98 and100 drawn from axis starting97. Effect?",["Exaggerates the visual difference."],{kind:"truncated-axis"}),
()=>Q("Best-fit line extended far beyond data.",["Extrapolation; unreliable."],{kind:"extrapolation"}),
()=>Q("Histogram uses equal heights for unequal widths and equal frequencies.",["Wrong: height must be frequency density."],{kind:"hist-error"}),
()=>Q("Unequal scale intervals shown with equal spacing.",["Misleading axis distortion."],{kind:"bad-scale"}),
()=>Q("Y-axis omits zero. Always wrong?",["No, but it must be clear and not misleading."],{kind:"truncated-axis"}),
()=>Q("Scatter graph has only 6 points. Caution?",["Very small sample; pattern may be unstable."],{kind:"small-scatter"}),
()=>Q("Graph shows association. What must not be claimed automatically?",["Causation."],{kind:"corr-causation"}),
()=>Q("Sample from one school only. Limitation?",["May not generalise to other populations."],{kind:"sample-pop"})
]};return cycle(sets[type]);}
function functions(type){const sets={
functions:[
()=>Q("If [[f(x)=3x-1]], find [[f(5)]].",["[[15-1=14]]."]),
()=>Q("If [[g(x)=x^2+2]], find [[g(-3)]].",["Use brackets.","[[9+2=11]]."]),
()=>Q("For [[h(x)=1/(x-4)]], state excluded domain value.",["Denominator cannot be zero.","[[x\\ne4]]."]),
()=>Q("For [[g(x)=\\sqrt{x-1}]], state the real domain.",["[[x-1\\ge0]].","[[x\\ge1]]."]),
()=>Q("If [[f(x)=2x^2-3x+1]], find [[f(-2)]].",["[[8+6+1=15]]."]),
()=>Q("A function maps x to x+7. Write function notation.",["[[f(x)=x+7]]."]),
()=>Q("If [[f(3)=10]] for [[f(x)=ax+1]], find a.",["[[3a+1=10]].","[[a=3]]."]),
()=>Q("For [[f(x)=x^2]], domain x≥0. State range.",["[[f(x)\\ge0]]."])
],
inverse:[
()=>Q("Find inverse of [[f(x)=3x-5]].",["[[y=3x-5]].","Swap x,y.","[[f^{-1}(x)=\\frac{x+5}{3}]]."]),
()=>Q("Find inverse of [[f(x)=2x+7]].",["Swap x,y and solve.","[[f^{-1}(x)=\\frac{x-7}{2}]]."]),
()=>Q("Why does [[x^2]] not have inverse on all reals?",["It is not one-to-one.","Restrict the domain."]),
()=>Q("Check [[f(x)=x+4]] and inverse [[x-4]].",["Compose either way.","Result [[x]]."]),
()=>Q("Find inverse of [[f(x)=\\frac{2x+1}{x-3}]].",["[[y(x-3)=2x+1]].","Collect x-terms.","[[f^{-1}(x)=\\frac{3x+1}{x-2}]]."]),
()=>Q("How are function and inverse graphs related?",["Reflection in [[y=x]]."]),
()=>Q("Find inverse of [[f(x)=5-2x]].",["Swap x,y.","[[f^{-1}(x)=\\frac{5-x}{2}]]."]),
()=>Q("If [[f^{-1}(9)=4]], find [[f(4)]].",["Inverse reverses mapping.","[[f(4)=9]]."])
],
composite:[
()=>Q("[[f(x)=x+6]], [[g(x)=x-3]]. Find [[fg(x)]].",["Apply g first.","[[x-3+6=x+3]]."]),
()=>Q("[[f(x)=2x]], [[g(x)=-x]]. Find [[gf(4)]].",["[[f(4)=8]].","[[g(8)=-8]]."]),
()=>Q("[[f(x)=3x+1]]. Find [[ff(x)]].",["[[3(3x+1)+1=9x+4]]."]),
()=>Q("[[f(x)=x+2]], [[g(x)=3x^2]]. Find [[gf(2)]].",["[[f(2)=4]].","[[g(4)=48]]."]),
()=>Q("[[f(x)=2x-1]], [[g(x)=\\frac{x+4}{3}]]. Find [[fg(x)]].",["Substitute g into f.","[[\\frac{2x+5}{3}]]."]),
()=>Q("Why can [[fg(x)]] differ from [[gf(x)]]?",["Composition order matters."]),
()=>Q("[[f(x)=x^2]], [[g(x)=x+1]]. Find [[fg(3)]].",["[[g(3)=4]].","[[f(4)=16]]."]),
()=>Q("[[f(x)=x-5]], [[g(x)=2x]]. Find [[gf(x)]].",["Apply f first.","[[2(x-5)=2x-10]]."])
]};return cycle(sets[type]);}
function sets(){const a=[
()=>Q("[[n(A)=23]], [[n(B)=19]], [[n(A\\cap B)=8]]. Find [[n(A\\cup B)]].",["[[23+19-8=34]]."],{kind:"venn-two"}),
()=>Q("Universal set 50; [[n(A\\cup B)=34]]. Find neither.",["[[50-34=16]]."],{kind:"venn-outside"}),
()=>Q("Explain [[(A\\cup B)']].",["Elements in neither A nor B."],{kind:"venn-complement"}),
()=>Q("40 students: 23 French,18 Spanish,9 both. Find neither.",["Union 32.","Neither 8."],{kind:"venn-two"}),
()=>Q("State De Morgan law for complement of a union.",["[[(A\\cup B)'=A'\\cap B']]."],{kind:"venn-demorgan"}),
()=>Q("If [[A\\subset B]], find [[A\\cap B]].",["[[A]]."],{kind:"venn-subset"}),
()=>Q("What does centre of a 3-set Venn represent?",["[[A\\cap B\\cap C]]."],{kind:"venn-three"}),
()=>Q("What does [[A\\setminus B]] mean?",["Elements in A but not B."],{kind:"venn-difference"})
];return cycle(a);}
function proportion(){const a=[
()=>Q("[[y\\propto x^2]], y=18 when x=3. Find y when x=5.",["[[y=kx^2]].","[[k=2]].","[[y=50]]."],{kind:"prop-square"}),
()=>Q("[[t\\propto1/v^2]], t=20 when v=3. Find t when v=6.",["[[k=180]].","[[t=5]]."],{kind:"prop-inverse"}),
()=>Q("[[y\\propto\\sqrt{x}]], y=12 when x=16. Find formula.",["[[12=4k]].","[[y=3\\sqrt{x}]]."],{kind:"prop-root"}),
()=>Q("[[y\\propto x]], y=35 when x=7. Find y when x=12.",["[[k=5]].","[[y=60]]."],{kind:"prop-direct"}),
()=>Q("[[p\\propto1/q]], p=8 when q=5. Find p when q=20.",["[[k=40]].","[[p=2]]."],{kind:"prop-inverse"}),
()=>Q("[[A\\propto r^2]], A=50 when r=5. Find A when r=8.",["[[k=2]].","[[A=128]]."],{kind:"prop-square"}),
()=>Q("[[T\\propto\\sqrt L]], T=4 when L=9. Find T when L=36.",["[[k=4/3]].","[[T=8]]."],{kind:"prop-root"}),
()=>Q("How does a graph show direct proportion?",["Straight line through the origin."],{kind:"prop-direct"})
];return cycle(a);}

function build(type){
 if(type==="surds")return surds();
 if(type==="rationalise")return rationalise();
 if(type==="algfrac-simplify")return algfrac(true);
 if(type==="algfrac-four")return algfrac(false);
 if(type==="forming")return forming();
 if(type==="linear")return linear();
 if(type==="quadratic")return quadratic();
 if(type==="fractional-eq")return fractionalEq();
 if(type==="simultaneous-linear")return simultaneous(true);
 if(type==="simultaneous-nonlinear")return simultaneous(false);
 if(type==="rearrange")return rearrange();
 if(type==="ineq-numberline")return numberline();
 if(type==="ineq-linear")return linearIneq();
 if(type==="ineq-graph")return graphIneq(false);
 if(type==="ineq-region")return graphIneq(true);
 if(type==="angles")return angles("angles");
 if(type==="parallel")return angles("parallel");
 if(type==="polygons")return angles("polygons");
 if(type==="symmetry2d")return symmetry(false);
 if(type==="symmetry3d")return symmetry(true);
 if(type==="units")return units();
 if(type==="area")return mensuration("area");
 if(type==="circle")return mensuration("circle");
 if(type==="sector")return mensuration("sector");
 if(["tables","averages","grouped-mean","modalclass","data-interpret","data-compare","data-limits","charts","scatter","correlation","bestfit","cumfreq","cumfreq-read","histogram","freqdensity","chart-infer","graph-compare","graph-limits"].includes(type))return stats(type);
 if(["functions","inverse","composite"].includes(type))return functions(type);
 if(type==="sets")return sets();
 if(type==="proportion")return proportion();
 return [];
}
window.MathoraQuestionEngine={build(type){const all=build(type);return{practice:all.slice(0,16),homework:all.slice(16,32)}}};
})();
})();

/* ===== textbook-content.js ===== */
(function(){
window.TEXTBOOK_CONTENT = {
  "12.1": {
    "schemeReference": "pages 276-277\nEx 9.7\n\npages 281-282 \nEx 9.8 (Qu 1-4)",
    "supportingSelection": false,
    "practice": [
      {
        "image": "assets/textbook/cambridge-p276-exercise.webp",
        "width": 1061,
        "height": 247,
        "page": 276,
        "pdfPage": 288,
        "heading": "Exercise 9.7",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p277-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 277,
        "pdfPage": 289,
        "heading": "Exercise continued",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p281-exercise.webp",
        "width": 1061,
        "height": 234,
        "page": 281,
        "pdfPage": 293,
        "heading": "Exercise 9.8",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p282-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 282,
        "pdfPage": 294,
        "heading": "Exercise continued",
        "book": "cambridge"
      }
    ],
    "homework": [],
    "examples": [
      {
        "prompt": "Coursebook worked example — page 275",
        "source": "Morrison & Hamshaw, Cambridge IGCSE Mathematics (2023), p. 275",
        "sourceQuestion": {
          "image": "assets/textbook/cambridge-p275-example1-question.webp",
          "width": 1016,
          "height": 133
        },
        "sourceSolution": {
          "image": "assets/textbook/cambridge-p275-example1-solution.webp",
          "width": 1016,
          "height": 895
        },
        "steps": [],
        "sourcePage": 275,
        "sourcePdfPage": 287
      },
      {
        "prompt": "Coursebook worked example — page 276",
        "source": "Morrison & Hamshaw, Cambridge IGCSE Mathematics (2023), p. 276",
        "sourceQuestion": {
          "image": "assets/textbook/cambridge-p276-example2-question.webp",
          "width": 753,
          "height": 130
        },
        "sourceSolution": {
          "image": "assets/textbook/cambridge-p276-example2-solution.webp",
          "width": 753,
          "height": 317
        },
        "steps": [],
        "sourcePage": 276,
        "sourcePdfPage": 288
      },
      {
        "prompt": "Write [[5^4\\times\\sqrt7]] in exact form, then round to 3 significant figures.",
        "steps": [
          "[[5^4=625]], so the exact answer is [[625\\sqrt7]].",
          "[[625\\sqrt7\\approx1653.5946]], which is [[1650]] to 3 significant figures."
        ],
        "source": "Bettison & Taylor, Exam Success (2021), p. 20; Question 6(c); exact-form extension",
        "sourcePage": 20,
        "sourcePdfPage": 22,
        "sourceBook": "oxford"
      }
    ],
    "practiceAssignment": "Exercise 9.7: simplify and combine surds. Then Exercise 9.8, Questions 1–4 only. Work through the subparts progressively.",
    "homeworkAssignment": "Complete the questions matching this lesson on the pages below. Show working and explain any conclusions in context."
  },
  "12.2": {
    "schemeReference": "pages 282-283\nEx 9.8 (Qu 5-7)\n\n\n\npage 284 \nEx 9.9",
    "supportingSelection": false,
    "practice": [
      {
        "image": "assets/textbook/cambridge-p282-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 282,
        "pdfPage": 294,
        "heading": "Exercise continued",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p283-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 283,
        "pdfPage": 295,
        "heading": "Exercise continued",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p284-exercise.webp",
        "width": 1061,
        "height": 1266,
        "page": 284,
        "pdfPage": 296,
        "heading": "Exercise 9.9",
        "book": "cambridge"
      }
    ],
    "homework": [],
    "examples": [
      {
        "prompt": "Coursebook worked example — page 280",
        "source": "Morrison & Hamshaw, Cambridge IGCSE Mathematics (2023), p. 280",
        "sourceQuestion": {
          "image": "assets/textbook/cambridge-p280-example1-question.webp",
          "width": 751,
          "height": 143
        },
        "steps": [
          "(a) Multiply by the conjugate [[2-\\sqrt5]].",
          "[[\\frac{3}{2+\\sqrt5}=\\frac{3(2-\\sqrt5)}{4-5}=3\\sqrt5-6]].",
          "(b) Multiply numerator and denominator by [[3+\\sqrt7]].",
          "[[\\frac{4+\\sqrt2}{3-\\sqrt7}=\\frac{(4+\\sqrt2)(3+\\sqrt7)}{9-7}=\\frac{12+4\\sqrt7+3\\sqrt2+\\sqrt{14}}2]]."
        ],
        "sourcePage": 280,
        "sourcePdfPage": 292
      },
      {
        "prompt": "Write [[4^4\\div\\sqrt{20}]] in exact form with a rational denominator.",
        "steps": [
          "[[4^4=256]], [[\\sqrt{20}=2\\sqrt5]], so [[\\frac{256}{\\sqrt{20}}=\\frac{128}{\\sqrt5}]].",
          "Multiply top and bottom by [[\\sqrt5]]: [[\\frac{128\\sqrt5}{5}]]."
        ],
        "source": "Bettison & Taylor, Exam Success (2021), p. 20; Question 6(d); rationalisation extension",
        "sourcePage": 20,
        "sourcePdfPage": 22,
        "sourceBook": "oxford"
      }
    ],
    "practiceAssignment": "Exercise 9.8, Questions 5–7, followed by Exercise 9.9. Use the conjugate where the denominator has two terms.",
    "homeworkAssignment": "Complete the questions matching this lesson on the pages below. Show working and explain any conclusions in context."
  },
  "13.1": {
    "schemeReference": "pages 464-465\nEx 14.13\n\npages 466-467\nEx 14.14",
    "supportingSelection": false,
    "practice": [
      {
        "image": "assets/textbook/cambridge-p464-exercise.webp",
        "width": 1061,
        "height": 729,
        "page": 464,
        "pdfPage": 476,
        "heading": "9 * 18 9 * Txty 9x\n5\t1\t14\t1\t1\t8\t433\t567\t32\t33\t0.000000\tIxty\n2\t1\t15\t0\t0\t0\t73\t600\t591\t16\t-1\t\n3\t1\t15\t1\t0\t0\t73\t600\t591\t16\t-1\t\n4\t1\t15\t1\t1\t0\t73\t600\t591\t16\t-1\t\n5\t1\t15\t1\t1\t1\t73\t600\t591\t16\t95.000000\t \n2\t1\t16\t0\t0\t0\t157\t641\t46\t28\t-1\t\n3\t1\t16\t1\t0\t0\t157\t641\t46\t28\t-1\t\n4\t1\t16\t1\t1\t0\t157\t641\t46\t28\t-1\t\n5\t1\t16\t1\t1\t1\t157\t641\t46\t28\t95.000000\t \n2\t1\t17\t0\t0\t0\t92\t674\t555\t99\t-1\t\n3\t1\t17\t1\t0\t0\t92\t674\t555\t78\t-1\t\n4\t1\t17\t1\t1\t0\t92\t674\t555\t21\t-1\t\n5\t1\t17\t1\t1\t1\t92\t678\t27\t13\t78.730659\tThe\n5\t1\t17\t1\t1\t2\t124\t677\t96\t18\t89.942215\tmultiplication\n5\t1\t17\t1\t1\t3\t225\t681\t15\t9\t78.084908\tor\n5\t1\t17\t1\t1\t4\t244\t677\t54\t13\t96.917007\tdivision\n5\t1\t17\t1\t1\t5\t303\t680\t27\t9\t93.938690\twas\n5\t1\t17\t1\t1\t6\t334\t676\t48\t13\t96.829559\tcarried\n5\t1\t17\t1\t1\t7\t387\t678\t24\t11\t96.875420\tout\n5\t1\t17\t1\t1\t8\t415\t675\t46\t14\t96.891502\tbefore\n5\t1\t17\t1\t1\t9\t466\t679\t25\t13\t96.886292\tany\n5\t1\t17\t1\t1\t10\t495\t674\t92\t18\t95.373169\tsimplification\n5\t1\t17\t1\t1\t11\t593\t675\t11\t12\t96.736969\tin\n5\t1\t17\t1\t1\t12\t609\t674\t38\t13\t96.835793\tthese\n4\t1\t17\t1\t2\t0\t93\t693\t542\t21\t-1\t\n5\t1\t17\t1\t2\t1\t93\t696\t71\t18\t85.620575\texamples,\n5\t1\t17\t1\t2\t2\t169\t696\t24\t14\t96.156059\tbut\n5\t1\t17\t1\t2\t3\t198\t700\t25\t13\t95.245392\tyou\n5\t1\t17\t1\t2\t4\t229\t696\t33\t13\t94.013939\thave\n5\t1\t17\t1\t2\t5\t267\t695\t52\t17\t94.013939\talready\n5\t1\t17\t1\t2\t6\t323\t699\t33\t9\t80.733902\tseen\n5\t1\t17\t1\t2\t7\t361\t695\t27\t13\t96.776718\tthat\n5\t1\t17\t1\t2\t8\t393\t695\t9\t13\t94.066521\tit\n5\t1\t17\t1\t2\t9\t407\t695\t10\t13\t94.066521\tis\n5\t1\t17\t1\t2\t10\t422\t694\t57\t18\t94.786652\tpossible\n5\t1\t17\t1\t2\t11\t484\t696\t15\t11\t96.432922\tto\n5\t1\t17\t1\t2\t12\t503\t693\t44\t14\t96.432922\tcancel\n5\t1\t17\t1\t2\t13\t552\t693\t30\t13\t96.706184\tfirst.\n5\t1\t17\t1\t2\t14\t587\t693\t21\t17\t96.937080\tTry\n5\t1\t17\t1\t2\t15\t612\t693\t23\t13\t84.100494\tthe\n4\t1\t17\t1\t3\t0\t93\t712\t510\t21\t-1\t\n5\t1\t17\t1\t3\t1\t93\t716\t52\t13\t95.296204\tworked\n5\t1\t17\t1\t3\t2\t150\t715\t61\t18\t96.474854\texample\n5\t1\t17\t1\t3\t3\t216\t716\t69\t16\t92.876251\tquestions\n5\t1\t17\t1\t3\t4\t289\t714\t20\t14\t96.520523\tfor\n5\t1\t17\t1\t3\t5\t313\t713\t59\t18\t96.337280\tyourself,\n5\t1\t17\t1\t3\t6\t377\t714\t24\t13\t96.739418\tbut\n5\t1\t17\t1\t3\t7\t405\t713\t44\t14\t96.649002\tcancel\n5\t1\t17\t1\t3\t8\t454\t712\t46\t14\t96.826714\tbefore\n5\t1\t17\t1\t3\t9\t505\t712\t78\t18\t95.176758\tmultiplying\n5\t1\t17\t1\t3\t10\t588\t716\t15\t9\t96.609062\tor\n4\t1\t17\t1\t4\t0\t93\t733\t344\t19\t-1\t\n5\t1\t17\t1\t4\t1\t93\t735\t57\t17\t94.362755\tdividing\n5\t1\t17\t1\t4\t2\t155\t735\t26\t13\t96.920891\tand\n5\t1\t17\t1\t4\t3\t186\t738\t25\t10\t84.618896\tsee\n5\t1\t17\t1\t4\t4\t216\t734\t9\t13\t85.897659\tif\n5\t1\t17\t1\t4\t5\t228\t738\t26\t13\t96.896820\tyou\n5\t1\t17\t1\t4\t6\t259\t738\t25\t9\t96.951584\tcan\n5\t1\t17\t1\t4\t7\t289\t736\t24\t14\t96.918106\tget\n5\t1\t17\t1\t4\t8\t317\t733\t22\t13\t96.772667\tthe\n5\t1\t17\t1\t4\t9\t344\t737\t37\t9\t95.643822\tsame\n5\t1\t17\t1\t4\t10\t386\t736\t51\t10\t94.546959\tanswer.\n3\t1\t17\t2\t0\t0\t93\t756\t342\t17\t-1\t\n4\t1\t17\t2\t1\t0\t93\t756\t342\t17\t-1\t\n5\t1\t17\t2\t1\t1\t93\t759\t44\t13\t96.007881\tWhich\n5\t1\t17\t2\t1\t2\t142\t758\t56\t14\t96.824280\tmethod\n5\t1\t17\t2\t1\t3\t203\t758\t45\t13\t96.983612\tmakes\n5\t1\t17\t2\t1\t4\t253\t761\t36\t9\t96.974762\tmore\n5\t1\t17\t2\t1\t5\t294\t761\t40\t9\t96.949142\tsense\n5\t1\t17\t2\t1\t6\t338\t759\t15\t11\t94.770279\tto\n5\t1\t17\t2\t1\t7\t357\t757\t34\t16\t95.201180\tyou?\n5\t1\t17\t2\t1\t8\t395\t756\t40\t17\t95.201180\tWhy?\n2\t1\t18\t0\t0\t0\t80\t780\t584\t9\t-1\t\n3\t1\t18\t1\t0\t0\t80\t780\t584\t9\t-1\t\n4\t1\t18\t1\t1\t0\t80\t780\t584\t9\t-1\t\n5\t1\t18\t1\t1\t1\t80\t780\t584\t9\t27.643120\tLD\n2\t1\t19\t0\t0\t0\t72\t178\t11\t611\t-1\t\n3\t1\t19\t1\t0\t0\t72\t178\t11\t611\t-1\t\n4\t1\t19\t1\t1\t0\t72\t178\t11\t611\t-1\t\n5\t1\t19\t1\t1\t1\t72\t178\t11\t611\t95.000000\t \n2\t1\t20\t0\t0\t0\t657\t175\t11\t609\t-1\t\n3\t1\t20\t1\t0\t0\t657\t175\t11\t609\t-1\t\n4\t1\t20\t1\t1\t0\t657\t175\t11\t609\t-1\t\n5\t1\t20\t1\t1\t1\t657\t175\t11\t609\t95.000000\t \n2\t1\t21\t0\t0\t0\t80\t813\t440\t242\t-1\t\n3\t1\t21\t1\t0\t0\t80\t813\t440\t249\t-1\t\n4\t1\t21\t1\t1\t0\t80\t813\t175\t24\t-1\t\n5\t1\t21\t1\t1\t1\t80\t814\t99\t23\t96.231316\tExercise\n5\t1\t21\t1\t1\t2\t189\t813\t66\t23\t96.231316\t14.13\n4\t1\t21\t1\t2\t0\t80\t848\t440\t18\t-1\t\n5\t1\t21\t1\t2\t1\t80\t852\t37\t12\t95.721573\tWrite\n5\t1\t21\t1\t2\t2\t120\t851\t30\t13\t96.064888\teach\n5\t1\t21\t1\t2\t3\t155\t851\t16\t13\t96.064888\tof\n5\t1\t21\t1\t2\t4\t175\t851\t21\t13\t96.831581\tthe\n5\t1\t21\t1\t2\t5\t200\t850\t63\t16\t90.637466\tfollowing\n5\t1\t21\t1\t2\t6\t267\t853\t14\t10\t92.367622\tas\n5\t1\t21\t1\t2\t7\t285\t853\t8\t9\t92.367622\ta\n5\t1\t21\t1\t2\t8\t297\t849\t38\t16\t93.252548\tsingle\n5\t1\t21\t1\t2\t9\t340\t849\t53\t13\t96.732399\tfraction\n5\t1\t21\t1\t2\t10\t397\t848\t12\t13\t96.228989\tin\n5\t1\t21\t1\t2\t11\t414\t848\t15\t13\t96.789001\tits\n5\t1\t21\t1\t2\t12\t434\t848\t41\t13\t96.812019\tlowest\n5\t1\t21\t1\t2\t13\t480\t850\t40\t10\t91.255371\tterms.\n4\t1\t21\t1\t3\t0\t80\t878\t230\t33\t-1\t\n5\t1\t21\t1\t3\t1\t80\t886\t6\t13\t21.162498\tae\n5\t1\t21\t1\t3\t2\t142\t878\t19\t33\t0.000000\tB\n5\t1\t21\t1\t3\t3\t166\t890\t8\t9\t62.940163\tx\n5\t1\t21\t1\t3\t4\t179\t878\t18\t33\t42.628613\tx\n5\t1\t21\t1\t3\t5\t301\t884\t9\t15\t92.688545\tb\n4\t1\t21\t1\t4\t0\t111\t929\t198\t32\t-1\t\n5\t1\t21\t1\t4\t1\t111\t936\t10\t14\t91.581886\td\n5\t1\t21\t1\t4\t2\t142\t929\t16\t32\t0.000000\t#\n5\t1\t21\t1\t4\t3\t163\t941\t8\t8\t96.841148\tx\n5\t1\t21\t1\t4\t4\t176\t929\t18\t32\t0.000000\t%\n5\t1\t21\t1\t4\t5\t301\t939\t8\t10\t91.550369\te\n4\t1\t21\t1\t5\t0\t112\t971\t198\t48\t-1\t\n5\t1\t21\t1\t5\t1\t112\t990\t9\t15\t70.826706\t9\n5\t1\t21\t1\t5\t2\t139\t974\t36\t45\t37.021751\tae\n5\t1\t21\t1\t5\t3\t179\t991\t9\t9\t86.906349\tx\n5\t1\t21\t1\t5\t4\t188\t971\t36\t45\t7.274483\tes\n5\t1\t21\t1\t5\t5\t301\t985\t9\t14\t91.441269\th\n4\t1\t21\t1\t6\t0\t198\t1026\t5\t8\t-1\t\n5\t1\t21\t1\t6\t1\t198\t1026\t5\t8\t19.223770\t3\n4\t1\t21\t1\t7\t0\t111\t1035\t199\t20\t-1\t\n5\t1\t21\t1\t7\t1\t111\t1027\t93\t35\t7.365677\tbE\n2\t1\t22\t0\t0\t0\t328\t869\t300\t195\t-1\t\n3\t1\t22\t1\t0\t0\t328\t869\t300\t195\t-1\t\n4\t1\t22\t1\t1\t0\t328\t869\t300\t195\t-1\t\n5\t1\t22\t1\t1\t1\t328\t869\t300\t195\t95.000000\t \n",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p465-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 465,
        "pdfPage": 477,
        "heading": "Exercise continued",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p466-exercise.webp",
        "width": 1061,
        "height": 411,
        "page": 466,
        "pdfPage": 478,
        "heading": "Exercise 14.14",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p467-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 467,
        "pdfPage": 479,
        "heading": "Exercise continued",
        "book": "cambridge"
      }
    ],
    "homework": [
      {
        "image": "assets/textbook/oxford-p61.webp",
        "width": 1072,
        "height": 1549,
        "page": 61,
        "pdfPage": 63,
        "heading": "Exam Success — selected questions",
        "book": "oxford"
      }
    ],
    "examples": [
      {
        "prompt": "Factorise and simplify [[\\frac{x^2-4x}{x^2-x-12}]]. State the excluded values.",
        "steps": [
          "[[x^2-4x=x(x-4)]], [[x^2-x-12=(x-4)(x+3)]].",
          "Cancel the factor [[x-4]]: [[\\frac{x}{x+3}]].",
          "The original denominator excludes [[x=4]] and [[x=-3]]."
        ],
        "source": "Bettison & Taylor, Exam Success (2021), p. 60; Worked example",
        "sourcePage": 60,
        "sourcePdfPage": 62,
        "sourceBook": "oxford"
      },
      {
        "prompt": "Factorise and simplify [[\\frac{x^2-7x+12}{2x^2-7x+3}]].",
        "steps": [
          "[[x^2-7x+12=(x-3)(x-4)]].",
          "[[2x^2-7x+3=(x-3)(2x-1)]].",
          "[[\\frac{x-4}{2x-1}]], where [[x\\ne3,\\frac12]]."
        ],
        "source": "Bettison & Taylor, Exam Success (2021), p. 60; Worked example",
        "sourcePage": 60,
        "sourcePdfPage": 62,
        "sourceBook": "oxford"
      }
    ],
    "practiceAssignment": "Scheme of work: pages 464-465 Ex 14.13  pages 466-467 Ex 14.14\nStart with the first questions, then work towards applications and reasoning. Show clear working.",
    "homeworkAssignment": "Page 61: Question 4 (factorise and simplify)."
  },
  "13.2": {
    "schemeReference": "pages 462-463\nEx 14.12",
    "supportingSelection": false,
    "practice": [
      {
        "image": "assets/textbook/cambridge-p462-exercise.webp",
        "width": 1061,
        "height": 245,
        "page": 462,
        "pdfPage": 474,
        "heading": "Exercise 14.12",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p463-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 463,
        "pdfPage": 475,
        "heading": "Exercise continued",
        "book": "cambridge"
      }
    ],
    "homework": [
      {
        "image": "assets/textbook/oxford-p61.webp",
        "width": 1072,
        "height": 1549,
        "page": 61,
        "pdfPage": 63,
        "heading": "Exam Success — selected questions",
        "book": "oxford"
      }
    ],
    "examples": [
      {
        "prompt": "Simplify [[\\frac{x+1}{3}+\\frac{x-3}{4}]].",
        "steps": [
          "The lowest common denominator is 12.",
          "[[\\frac{4(x+1)+3(x-3)}{12}=\\frac{4x+4+3x-9}{12}=\\frac{7x-5}{12}]]."
        ],
        "source": "Bettison & Taylor, Exam Success (2021), p. 59; Worked example",
        "sourcePage": 59,
        "sourcePdfPage": 61,
        "sourceBook": "oxford"
      },
      {
        "prompt": "Simplify [[\\frac{3(4x-1)}2-\\frac{2(5x+3)}3]].",
        "steps": [
          "Use a denominator of 6.",
          "[[\\frac{9(4x-1)-4(5x+3)}6=\\frac{36x-9-20x-12}6=\\frac{16x-21}6]]."
        ],
        "source": "Bettison & Taylor, Exam Success (2021), p. 59; Worked example",
        "sourcePage": 59,
        "sourcePdfPage": 61,
        "sourceBook": "oxford"
      }
    ],
    "practiceAssignment": "Scheme of work: pages 462-463 Ex 14.12\nStart with the first questions, then work towards applications and reasoning. Show clear working.",
    "homeworkAssignment": "Page 61: Questions 1–3 (add and subtract algebraic fractions)."
  },
  "14.1": {
    "schemeReference": "Writing expressions\npage 42-43\nEx 2.1",
    "supportingSelection": false,
    "practice": [
      {
        "image": "assets/textbook/cambridge-p42-exercise.webp",
        "width": 1061,
        "height": 851,
        "page": 42,
        "pdfPage": 55,
        "heading": "Exercise 2.1",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p43-exercise.webp",
        "width": 1061,
        "height": 609,
        "page": 43,
        "pdfPage": 56,
        "heading": "Exercise continued",
        "book": "cambridge"
      }
    ],
    "homework": [
      {
        "image": "assets/textbook/oxford-p53.webp",
        "width": 1072,
        "height": 1549,
        "page": 53,
        "pdfPage": 55,
        "heading": "Exam Success — selected questions",
        "book": "oxford"
      },
      {
        "image": "assets/textbook/oxford-p54.webp",
        "width": 1072,
        "height": 1549,
        "page": 54,
        "pdfPage": 56,
        "heading": "Exam Success — selected questions",
        "book": "oxford"
      }
    ],
    "examples": [
      {
        "prompt": "Coursebook worked example — page 41",
        "source": "Morrison & Hamshaw, Cambridge IGCSE Mathematics (2023), p. 41",
        "sourceQuestion": {
          "image": "assets/textbook/cambridge-p41-example1-question.webp",
          "width": 754,
          "height": 231
        },
        "sourceSolution": {
          "image": "assets/textbook/cambridge-p41-example1-solution.webp",
          "width": 754,
          "height": 240
        },
        "steps": [],
        "sourcePage": 41,
        "sourcePdfPage": 54
      },
      {
        "prompt": "Coursebook worked example — page 41",
        "source": "Morrison & Hamshaw, Cambridge IGCSE Mathematics (2023), p. 41",
        "sourceQuestion": {
          "image": "assets/textbook/cambridge-p41-example2-question.webp",
          "width": 748,
          "height": 207
        },
        "steps": [
          "(a) [[4x]].",
          "(b) [[x+5]].",
          "(c) [[6x-2]].",
          "(d) [[\\frac{x}{2}]]."
        ],
        "sourcePage": 41,
        "sourcePdfPage": 54
      }
    ],
    "practiceAssignment": "Scheme of work: Writing expressions page 42-43 Ex 2.1\nStart with the first questions, then work towards applications and reasoning. Show clear working.",
    "homeworkAssignment": "Pages 53–54: expression and formula questions."
  },
  "14.2": {
    "schemeReference": "Solving equations\npage 185 \nEx 6.1 \nQu 1-3\n\nForming equations\npages 756-757\nEx 22.1\npages 759-760\nEx 22.2",
    "supportingSelection": false,
    "practice": [
      {
        "image": "assets/textbook/cambridge-p185-exercise.webp",
        "width": 1061,
        "height": 1266,
        "page": 185,
        "pdfPage": 197,
        "heading": "Exercise 6.1",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p756-exercise.webp",
        "width": 1061,
        "height": 1084,
        "page": 756,
        "pdfPage": 765,
        "heading": "Working through the problems in Exercise 22.1 will help you remember how to set up",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p757-exercise.webp",
        "width": 1061,
        "height": 492,
        "page": 757,
        "pdfPage": 766,
        "heading": "The problems you solved in Exercise 22.1 involved simple algebraic manipulation.",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p759-exercise.webp",
        "width": 1061,
        "height": 584,
        "page": 759,
        "pdfPage": 768,
        "heading": "Exercise 22.2",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p760-exercise.webp",
        "width": 1061,
        "height": 198,
        "page": 760,
        "pdfPage": 769,
        "heading": "Exercise continued",
        "book": "cambridge"
      }
    ],
    "homework": [
      {
        "image": "assets/textbook/oxford-p70.webp",
        "width": 1072,
        "height": 1549,
        "page": 70,
        "pdfPage": 72,
        "heading": "Exam Success — selected questions",
        "book": "oxford"
      }
    ],
    "examples": [
      {
        "prompt": "Coursebook worked example — page 758",
        "source": "Morrison & Hamshaw, Cambridge IGCSE Mathematics (2023), p. 758",
        "sourceQuestion": {
          "image": "assets/textbook/cambridge-p758-example1-question.webp",
          "width": 748,
          "height": 121
        },
        "sourceSolution": {
          "image": "assets/textbook/cambridge-p758-example1-solution.webp",
          "width": 748,
          "height": 247
        },
        "steps": [],
        "sourcePage": 758,
        "sourcePdfPage": 767
      }
    ],
    "practiceAssignment": "Scheme of work: Solving equations page 185  Ex 6.1  Qu 1-3  Forming equations pages 756-757 Ex 22.1 pages 759-760 Ex 22.2\nStart with the first questions, then work towards applications and reasoning. Show clear working.",
    "homeworkAssignment": "Page 70: Questions 1–3. Form an equation before solving contextual questions."
  },
  "14.3": {
    "schemeReference": "Solving quadratic equations y factorising\npage 330\nEx 10.12\nQu 1\n\nSolving quadratic equations by completing the square\npage 455\nEx 14.8\nQu 2 and 3\n\nSolving quadratic equations by using the quadratic formula\npages 458-459\nEx 14.9\n\nForming equations\npage 762-763\nEx 22.3",
    "supportingSelection": false,
    "practice": [
      {
        "image": "assets/textbook/cambridge-p330-exercise.webp",
        "width": 1061,
        "height": 469,
        "page": 330,
        "pdfPage": 342,
        "heading": "Exercise 10.12",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p455-exercise.webp",
        "width": 1061,
        "height": 437,
        "page": 455,
        "pdfPage": 467,
        "heading": "Exercise 14.8",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p458-exercise.webp",
        "width": 1061,
        "height": 986,
        "page": 458,
        "pdfPage": 470,
        "heading": "Exercise 14.9",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p459-exercise.webp",
        "width": 1061,
        "height": 358,
        "page": 459,
        "pdfPage": 471,
        "heading": "Exercise continued",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p762-exercise.webp",
        "width": 1061,
        "height": 976,
        "page": 762,
        "pdfPage": 771,
        "heading": "Exercise 22.3",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p763-exercise.webp",
        "width": 1061,
        "height": 900,
        "page": 763,
        "pdfPage": 772,
        "heading": "Exercise continued",
        "book": "cambridge"
      }
    ],
    "homework": [
      {
        "image": "assets/textbook/oxford-p71.webp",
        "width": 1072,
        "height": 1549,
        "page": 71,
        "pdfPage": 73,
        "heading": "Exam Success — selected questions",
        "book": "oxford"
      }
    ],
    "examples": [
      {
        "prompt": "Coursebook worked example — page 329",
        "source": "Morrison & Hamshaw, Cambridge IGCSE Mathematics (2023), p. 329",
        "sourceQuestion": {
          "image": "assets/textbook/cambridge-p329-example1-question.webp",
          "width": 752,
          "height": 161
        },
        "steps": [
          "(a) [[x^2-3x=x(x-3)=0]], so [[x=0]] or [[x=3]].",
          "(b) [[x^2-7x+12=(x-3)(x-4)=0]], so [[x=3]] or [[x=4]].",
          "(c) Rearrange: [[x^2+6x-16=0]]. Factorise: [[(x+8)(x-2)=0]]. Hence [[x=-8]] or [[x=2]].",
          "(d) [[x^2-8x+16=(x-4)^2=0]], so [[x=4]]."
        ],
        "sourcePage": 329,
        "sourcePdfPage": 341
      },
      {
        "prompt": "Coursebook worked example — page 453",
        "source": "Morrison & Hamshaw, Cambridge IGCSE Mathematics (2023), p. 453",
        "sourceQuestion": {
          "image": "assets/textbook/cambridge-p453-example1-question.webp",
          "width": 750,
          "height": 134
        },
        "sourceSolution": {
          "image": "assets/textbook/cambridge-p453-example1-solution.webp",
          "width": 750,
          "height": 357
        },
        "steps": [],
        "sourcePage": 453,
        "sourcePdfPage": 465
      },
      {
        "prompt": "Coursebook worked example — page 457",
        "source": "Morrison & Hamshaw, Cambridge IGCSE Mathematics (2023), p. 457",
        "sourceQuestion": {
          "image": "assets/textbook/cambridge-p457-example1-question.webp",
          "width": 744,
          "height": 153
        },
        "sourceSolution": {
          "image": "assets/textbook/cambridge-p457-example1-solution.webp",
          "width": 744,
          "height": 261
        },
        "steps": [],
        "sourcePage": 457,
        "sourcePdfPage": 469
      },
      {
        "prompt": "Coursebook worked example — page 761",
        "source": "Morrison & Hamshaw, Cambridge IGCSE Mathematics (2023), p. 761",
        "sourceQuestion": {
          "image": "assets/textbook/cambridge-p761-example1-question.webp",
          "width": 756,
          "height": 114
        },
        "sourceSolution": {
          "image": "assets/textbook/cambridge-p761-example1-solution.webp",
          "width": 756,
          "height": 568
        },
        "steps": [],
        "sourcePage": 761,
        "sourcePdfPage": 770
      }
    ],
    "practiceAssignment": "Scheme of work: Solving quadratic equations y factorising page 330 Ex 10.12 Qu 1  Solving quadratic equations by completing the square page 455 Ex 14.8 Qu 2 and 3  Solving quadratic equations by using the quadratic formula pages 458-459 Ex 14.9  Forming equations page 762-763 Ex 22.3\nStart with the first questions, then work towards applications and reasoning. Show clear working.",
    "homeworkAssignment": "Page 71: Questions 8–13. Progress from factorisation to completing the square and contextual problems."
  },
  "14.4": {
    "schemeReference": "page 185 \nEx 6.1 \nQu 5-7\n\npage 330\nEx 10.12\nQu 2",
    "supportingSelection": false,
    "practice": [
      {
        "image": "assets/textbook/cambridge-p185-exercise.webp",
        "width": 1061,
        "height": 1266,
        "page": 185,
        "pdfPage": 197,
        "heading": "Exercise 6.1",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p330-exercise.webp",
        "width": 1061,
        "height": 469,
        "page": 330,
        "pdfPage": 342,
        "heading": "Exercise 10.12",
        "book": "cambridge"
      }
    ],
    "homework": [
      {
        "image": "assets/textbook/oxford-p70.webp",
        "width": 1072,
        "height": 1549,
        "page": 70,
        "pdfPage": 72,
        "heading": "Exam Success — selected questions",
        "book": "oxford"
      }
    ],
    "examples": [
      {
        "prompt": "Coursebook worked example — page 184",
        "source": "Morrison & Hamshaw, Cambridge IGCSE Mathematics (2023), p. 184",
        "sourceQuestion": {
          "image": "assets/textbook/cambridge-p184-example1-question.webp",
          "width": 748,
          "height": 133
        },
        "steps": [
          "[[x\\ne0]]. Multiply every term by [[6x]].",
          "[[4x+2=4-x]].",
          "[[5x=2]], so [[x=\\frac25]]. This satisfies the restriction."
        ],
        "sourcePage": 184,
        "sourcePdfPage": 196
      }
    ],
    "practiceAssignment": "Scheme of work: page 185  Ex 6.1  Qu 5-7  page 330 Ex 10.12 Qu 2\nStart with the first questions, then work towards applications and reasoning. Show clear working.",
    "homeworkAssignment": "Page 70: Question 4. State any excluded values."
  },
  "14.5": {
    "schemeReference": "Graphical solution\npage 430-431\nEx 14.1\n\nSolving by substitution or elimination\npages 437-438\nEx 14.2\nQu 1-5\n\nForming simultaneous equations\npage 439\nEx 14.2\nQu 6-8",
    "supportingSelection": false,
    "practice": [
      {
        "image": "assets/textbook/cambridge-p430-exercise.webp",
        "width": 1061,
        "height": 310,
        "page": 430,
        "pdfPage": 442,
        "heading": "Exercise 14.1",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p431-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 431,
        "pdfPage": 443,
        "heading": "Exercise continued",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p437-exercise.webp",
        "width": 1061,
        "height": 767,
        "page": 437,
        "pdfPage": 449,
        "heading": "Exercise 14.2",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p438-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 438,
        "pdfPage": 450,
        "heading": "Exercise continued",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p439-exercise.webp",
        "width": 1061,
        "height": 515,
        "page": 439,
        "pdfPage": 451,
        "heading": "1 Mark your own answer to questions 1 to 5 in Exercise 14.2.",
        "book": "cambridge"
      }
    ],
    "homework": [
      {
        "image": "assets/textbook/oxford-p70.webp",
        "width": 1072,
        "height": 1549,
        "page": 70,
        "pdfPage": 72,
        "heading": "Exam Success — selected questions",
        "book": "oxford"
      },
      {
        "image": "assets/textbook/oxford-p71.webp",
        "width": 1072,
        "height": 1549,
        "page": 71,
        "pdfPage": 73,
        "heading": "Exam Success — selected questions",
        "book": "oxford"
      }
    ],
    "examples": [
      {
        "prompt": "Coursebook worked example — page 435",
        "source": "Morrison & Hamshaw, Cambridge IGCSE Mathematics (2023), p. 435",
        "sourceQuestion": {
          "image": "assets/textbook/cambridge-p435-example1-question.webp",
          "width": 749,
          "height": 173
        },
        "sourceSolution": {
          "image": "assets/textbook/cambridge-p435-example1-solution.webp",
          "width": 749,
          "height": 675
        },
        "steps": [],
        "sourcePage": 435,
        "sourcePdfPage": 447
      },
      {
        "prompt": "Coursebook worked example — page 436",
        "source": "Morrison & Hamshaw, Cambridge IGCSE Mathematics (2023), p. 436",
        "sourceQuestion": {
          "image": "assets/textbook/cambridge-p436-example1-question.webp",
          "width": 750,
          "height": 232
        },
        "steps": [
          "Multiply the first equation by 2 and the second by 4: [[3x-4y=20]], [[3x+2y=8]].",
          "Subtract: [[-6y=12]], so [[y=-2]].",
          "[[3x+2(-2)=8]], so [[x=4]].",
          "Check: [[(12+8)/2=10]] and [[(12-4)/4=2]]."
        ],
        "sourcePage": 436,
        "sourcePdfPage": 448
      }
    ],
    "practiceAssignment": "Scheme of work: Graphical solution page 430-431 Ex 14.1  Solving by substitution or elimination pages 437-438 Ex 14.2 Qu 1-5  Forming simultaneous equations page 439 Ex 14.2 Qu 6-8\nStart with the first questions, then work towards applications and reasoning. Show clear working.",
    "homeworkAssignment": "Page 70: Questions 5–7."
  },
  "14.6": {
    "schemeReference": "page 607 \nEx 18.6\n",
    "supportingSelection": false,
    "practice": [
      {
        "image": "assets/textbook/cambridge-p607-exercise.webp",
        "width": 1061,
        "height": 499,
        "page": 607,
        "pdfPage": 617,
        "heading": "Exercise 18.6",
        "book": "cambridge"
      }
    ],
    "homework": [
      {
        "image": "assets/textbook/oxford-p71.webp",
        "width": 1072,
        "height": 1549,
        "page": 71,
        "pdfPage": 73,
        "heading": "Exam Success — selected questions",
        "book": "oxford"
      }
    ],
    "examples": [
      {
        "prompt": "The graphs [[y=2+x]] and [[y=x^2-3x+4]] are shown. Estimate the x-coordinates of their intersections.",
        "source": "Morrison & Hamshaw, Cambridge IGCSE Mathematics (2023), p. 605",
        "sourceQuestion": {
          "image": "assets/textbook/cambridge-p605-graph-complete.webp",
          "width": 297,
          "height": 489
        },
        "steps": [
          "Read the x-coordinates where the line and curve cross: [[x\\approx0.6]] and [[x\\approx3.4]].",
          "Check algebraically: [[x+2=x^2-3x+4]], hence [[x^2-4x+2=0]].",
          "[[x=2\\pm\\sqrt2\\approx0.586,\\ 3.414]], consistent with the graph."
        ],
        "sourcePage": 605,
        "sourcePdfPage": 615
      }
    ],
    "practiceAssignment": "Scheme of work: page 607  Ex 18.6 \nStart with the first questions, then work towards applications and reasoning. Show clear working.",
    "homeworkAssignment": "Page 71: Question 15. Find both solution pairs where they exist."
  },
  "14.7": {
    "schemeReference": "page 190\nEx 6.3\n\npages 765-766\nEx 22.4\n\nUnknown on both sides\npage 766\nEx 22.5",
    "supportingSelection": false,
    "practice": [
      {
        "image": "assets/textbook/cambridge-p190-exercise.webp",
        "width": 1061,
        "height": 1250,
        "page": 190,
        "pdfPage": 202,
        "heading": "Exercise 6.3",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p765-exercise.webp",
        "width": 1061,
        "height": 809,
        "page": 765,
        "pdfPage": 774,
        "heading": "Exercise 22.4",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p766-exercise.webp",
        "width": 1061,
        "height": 616,
        "page": 766,
        "pdfPage": 775,
        "heading": "Exercise 22.5",
        "book": "cambridge"
      }
    ],
    "homework": [
      {
        "image": "assets/textbook/oxford-p53.webp",
        "width": 1072,
        "height": 1549,
        "page": 53,
        "pdfPage": 55,
        "heading": "Exam Success — selected questions",
        "book": "oxford"
      },
      {
        "image": "assets/textbook/oxford-p54.webp",
        "width": 1072,
        "height": 1549,
        "page": 54,
        "pdfPage": 56,
        "heading": "Exam Success — selected questions",
        "book": "oxford"
      }
    ],
    "examples": [
      {
        "prompt": "Coursebook worked example — page 764",
        "source": "Morrison & Hamshaw, Cambridge IGCSE Mathematics (2023), p. 764",
        "sourceQuestion": {
          "image": "assets/textbook/cambridge-p764-example1-question.webp",
          "width": 738,
          "height": 100
        },
        "sourceSolution": {
          "image": "assets/textbook/cambridge-p764-example1-solution.webp",
          "width": 738,
          "height": 247
        },
        "steps": [],
        "sourcePage": 764,
        "sourcePdfPage": 773
      },
      {
        "prompt": "Coursebook worked example — page 766",
        "source": "Morrison & Hamshaw, Cambridge IGCSE Mathematics (2023), p. 766",
        "sourceQuestion": {
          "image": "assets/textbook/cambridge-p766-example1-question.webp",
          "width": 746,
          "height": 113
        },
        "steps": [
          "[[m=6-\\frac{12}{p}]]. Multiply by [[p]]: [[mp=6p-12]].",
          "Collect the terms in [[p]]: [[p(m-6)=-12]].",
          "[[p=\\frac{12}{6-m}]], where [[m\\ne6]]."
        ],
        "sourcePage": 766,
        "sourcePdfPage": 775
      }
    ],
    "practiceAssignment": "Scheme of work: page 190 Ex 6.3  pages 765-766 Ex 22.4  Unknown on both sides page 766 Ex 22.5\nStart with the first questions, then work towards applications and reasoning. Show clear working.",
    "homeworkAssignment": "Complete the questions matching this lesson on the pages below. Show working and explain any conclusions in context."
  },
  "15.1": {
    "schemeReference": "page 441 \nEx 14.3\n\n",
    "supportingSelection": false,
    "practice": [
      {
        "image": "assets/textbook/cambridge-p441-exercise.webp",
        "width": 1061,
        "height": 319,
        "page": 441,
        "pdfPage": 453,
        "heading": "Exercise 14.3",
        "book": "cambridge"
      }
    ],
    "homework": [
      {
        "image": "assets/textbook/oxford-p71.webp",
        "width": 1072,
        "height": 1549,
        "page": 71,
        "pdfPage": 73,
        "heading": "Exam Success — selected questions",
        "book": "oxford"
      }
    ],
    "examples": [
      {
        "prompt": "Coursebook worked example — page 441",
        "source": "Morrison & Hamshaw, Cambridge IGCSE Mathematics (2023), p. 441",
        "sourceQuestion": {
          "image": "assets/textbook/cambridge-p441-example1-question.webp",
          "width": 753,
          "height": 188
        },
        "sourceSolution": {
          "image": "assets/textbook/cambridge-p441-example1-solution.webp",
          "width": 738,
          "height": 740
        },
        "steps": [],
        "sourcePage": 441,
        "sourcePdfPage": 453
      }
    ],
    "practiceAssignment": "Scheme of work: page 441  Ex 14.3  \nStart with the first questions, then work towards applications and reasoning. Show clear working.",
    "homeworkAssignment": "Page 71: Question 14. Show each solution on a number line."
  },
  "15.2": {
    "schemeReference": "page 444\nEx 14.4",
    "supportingSelection": false,
    "practice": [
      {
        "image": "assets/textbook/cambridge-p444-exercise.webp",
        "width": 1061,
        "height": 899,
        "page": 444,
        "pdfPage": 456,
        "heading": "Exercise 14.4",
        "book": "cambridge"
      }
    ],
    "homework": [
      {
        "image": "assets/textbook/oxford-p71.webp",
        "width": 1072,
        "height": 1549,
        "page": 71,
        "pdfPage": 73,
        "heading": "Exam Success — selected questions",
        "book": "oxford"
      }
    ],
    "examples": [
      {
        "prompt": "Solve [[-7x>21]].",
        "steps": [
          "Divide both sides by [[-7]]. Dividing by a negative reverses the inequality.",
          "[[x<-3]]."
        ],
        "source": "Bettison & Taylor, Exam Success (2021), p. 69; Worked example",
        "sourcePage": 69,
        "sourcePdfPage": 71,
        "sourceBook": "oxford"
      }
    ],
    "practiceAssignment": "Scheme of work: page 444 Ex 14.4\nStart with the first questions, then work towards applications and reasoning. Show clear working.",
    "homeworkAssignment": "Page 71: Question 14."
  },
  "15.3": {
    "schemeReference": "pages 449-450\nEx 14.5\n\npages 451-452\nEx 14.6",
    "supportingSelection": false,
    "practice": [
      {
        "image": "assets/textbook/cambridge-p449-exercise.webp",
        "width": 1061,
        "height": 626,
        "page": 449,
        "pdfPage": 461,
        "heading": "Exercise 14.5",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p450-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 450,
        "pdfPage": 462,
        "heading": "Exercise continued",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p451-exercise.webp",
        "width": 1061,
        "height": 744,
        "page": 451,
        "pdfPage": 463,
        "heading": "Exercise 14.6",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p452-exercise.webp",
        "width": 1061,
        "height": 569,
        "page": 452,
        "pdfPage": 464,
        "heading": "Exercise continued",
        "book": "cambridge"
      }
    ],
    "homework": [
      {
        "image": "assets/textbook/oxford-p73.webp",
        "width": 1072,
        "height": 1549,
        "page": 73,
        "pdfPage": 75,
        "heading": "Exam Success — selected questions",
        "book": "oxford"
      }
    ],
    "examples": [],
    "practiceAssignment": "Scheme of work: pages 449-450 Ex 14.5  pages 451-452 Ex 14.6\nStart with the first questions, then work towards applications and reasoning. Show clear working.",
    "homeworkAssignment": "Complete the questions matching this lesson on the pages below. Show working and explain any conclusions in context."
  },
  "15.4": {
    "schemeReference": "",
    "supportingSelection": true,
    "practice": [
      {
        "image": "assets/textbook/cambridge-p449-exercise.webp",
        "width": 1061,
        "height": 626,
        "page": 449,
        "pdfPage": 461,
        "heading": "Exercise 14.5",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p450-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 450,
        "pdfPage": 462,
        "heading": "Exercise continued",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p451-exercise.webp",
        "width": 1061,
        "height": 744,
        "page": 451,
        "pdfPage": 463,
        "heading": "Exercise 14.6",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p452-exercise.webp",
        "width": 1061,
        "height": 569,
        "page": 452,
        "pdfPage": 464,
        "heading": "Exercise continued",
        "book": "cambridge"
      }
    ],
    "homework": [
      {
        "image": "assets/textbook/oxford-p73.webp",
        "width": 1072,
        "height": 1549,
        "page": 73,
        "pdfPage": 75,
        "heading": "Exam Success — selected questions",
        "book": "oxford"
      }
    ],
    "examples": [],
    "practiceAssignment": "Supporting exercise selection. Start with the first questions, then work towards applications and reasoning. Show clear working.",
    "homeworkAssignment": "Complete the questions matching this lesson on the pages below. Show working and explain any conclusions in context."
  },
  "16.1": {
    "schemeReference": "pages 82-83\nEx 3.3",
    "supportingSelection": false,
    "practice": [
      {
        "image": "assets/textbook/cambridge-p82-exercise.webp",
        "width": 1061,
        "height": 1267,
        "page": 82,
        "pdfPage": 95,
        "heading": "Exercise 3.3",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p83-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 83,
        "pdfPage": 96,
        "heading": "Exercise continued",
        "book": "cambridge"
      }
    ],
    "homework": [
      {
        "image": "assets/textbook/oxford-p128.webp",
        "width": 1072,
        "height": 1549,
        "page": 128,
        "pdfPage": 130,
        "heading": "Exam Success — selected questions",
        "book": "oxford"
      }
    ],
    "examples": [
      {
        "prompt": "Coursebook worked example — page 81",
        "source": "Morrison & Hamshaw, Cambridge IGCSE Mathematics (2023), p. 81",
        "sourceQuestion": {
          "image": "assets/textbook/cambridge-p81-question-fixed.webp",
          "width": 728,
          "height": 730
        },
        "sourceSolution": {
          "image": "assets/textbook/cambridge-p81-example1-solution.webp",
          "width": 745,
          "height": 690
        },
        "steps": [],
        "sourcePage": 81,
        "sourcePdfPage": 94
      }
    ],
    "practiceAssignment": "Scheme of work: pages 82-83 Ex 3.3\nStart with the first questions, then work towards applications and reasoning. Show clear working.",
    "homeworkAssignment": "Complete the questions matching this lesson on the pages below. Show working and explain any conclusions in context."
  },
  "16.2": {
    "schemeReference": "pages 84-85\nEx 3.4",
    "supportingSelection": false,
    "practice": [
      {
        "image": "assets/textbook/cambridge-p84-exercise.webp",
        "width": 1061,
        "height": 700,
        "page": 84,
        "pdfPage": 97,
        "heading": "Exercise 3.4",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p85-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 85,
        "pdfPage": 98,
        "heading": "Exercise continued",
        "book": "cambridge"
      }
    ],
    "homework": [
      {
        "image": "assets/textbook/oxford-p128.webp",
        "width": 1072,
        "height": 1549,
        "page": 128,
        "pdfPage": 130,
        "heading": "Exam Success — selected questions",
        "book": "oxford"
      },
      {
        "image": "assets/textbook/oxford-p129.webp",
        "width": 1072,
        "height": 1549,
        "page": 129,
        "pdfPage": 131,
        "heading": "Exam Success — selected questions",
        "book": "oxford"
      }
    ],
    "examples": [
      {
        "prompt": "Coursebook worked example — page 84",
        "source": "Morrison & Hamshaw, Cambridge IGCSE Mathematics (2023), p. 84",
        "sourceQuestion": {
          "image": "assets/textbook/cambridge-p84-example1-question.webp",
          "width": 750,
          "height": 230
        },
        "steps": [
          "Alternate angles give [[a=47^\\circ]] and [[c=62^\\circ]].",
          "Angles in triangle ABC total [[180^\\circ]], so [[b=180^\\circ-47^\\circ-62^\\circ=71^\\circ]].",
          "Check the straight line: [[47^\\circ+71^\\circ+62^\\circ=180^\\circ]]."
        ],
        "sourcePage": 84,
        "sourcePdfPage": 97
      }
    ],
    "practiceAssignment": "Scheme of work: pages 84-85 Ex 3.4\nStart with the first questions, then work towards applications and reasoning. Show clear working.",
    "homeworkAssignment": "Complete the questions matching this lesson on the pages below. Show working and explain any conclusions in context."
  },
  "16.3": {
    "schemeReference": "pages 90-91\nEx 3.5\n\npage 94\nEx 3.6",
    "supportingSelection": false,
    "practice": [
      {
        "image": "assets/textbook/cambridge-p90-exercise.webp",
        "width": 1061,
        "height": 605,
        "page": 90,
        "pdfPage": 103,
        "heading": "Exercise 3.5",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p91-exercise.webp",
        "width": 1061,
        "height": 474,
        "page": 91,
        "pdfPage": 104,
        "heading": "Exercise continued",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p94-exercise.webp",
        "width": 1061,
        "height": 660,
        "page": 94,
        "pdfPage": 107,
        "heading": "Exercise continued",
        "book": "cambridge"
      }
    ],
    "homework": [
      {
        "image": "assets/textbook/oxford-p129.webp",
        "width": 1072,
        "height": 1549,
        "page": 129,
        "pdfPage": 131,
        "heading": "Exam Success — selected questions",
        "book": "oxford"
      }
    ],
    "examples": [
      {
        "prompt": "Coursebook worked example — page 93",
        "source": "Morrison & Hamshaw, Cambridge IGCSE Mathematics (2023), p. 93",
        "sourceQuestion": {
          "image": "assets/textbook/cambridge-p93-question-fixed.webp",
          "width": 992,
          "height": 694
        },
        "steps": [
          "(a) Adjacent angles in a parallelogram add to [[180^\\circ]]: [[x=110^\\circ]]. Opposite angles are equal: [[y=70^\\circ]], [[z=110^\\circ]].",
          "(b) At Q, [[x+65^\\circ=90^\\circ]], so [[x=25^\\circ]]. Alternate angles give [[y=65^\\circ]].",
          "(c) The fourth angle of the quadrilateral is [[360^\\circ-70^\\circ-145^\\circ-80^\\circ=65^\\circ]].",
          "Triangle KXY is isosceles, so its two base angles are both [[65^\\circ]].",
          "Therefore [[x=180^\\circ-65^\\circ-65^\\circ=50^\\circ]]."
        ],
        "sourcePage": 93,
        "sourcePdfPage": 106
      }
    ],
    "practiceAssignment": "Scheme of work: pages 90-91 Ex 3.5  page 94 Ex 3.6\nStart with the first questions, then work towards applications and reasoning. Show clear working.",
    "homeworkAssignment": "Complete the questions matching this lesson on the pages below. Show working and explain any conclusions in context."
  },
  "16.4": {
    "schemeReference": "pages 644-645\nEx 19.1\n\npage 647\nEx 19.2",
    "supportingSelection": false,
    "practice": [
      {
        "image": "assets/textbook/cambridge-p644-exercise.webp",
        "width": 1061,
        "height": 850,
        "page": 644,
        "pdfPage": 653,
        "heading": "Exercise 19.1",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p645-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 645,
        "pdfPage": 654,
        "heading": "Exercise continued",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p647-exercise.webp",
        "width": 1061,
        "height": 1261,
        "page": 647,
        "pdfPage": 656,
        "heading": "Exercise 19.2",
        "book": "cambridge"
      }
    ],
    "homework": [
      {
        "image": "assets/textbook/oxford-p122.webp",
        "width": 1072,
        "height": 1549,
        "page": 122,
        "pdfPage": 124,
        "heading": "Exam Success — selected questions",
        "book": "oxford"
      }
    ],
    "examples": [],
    "practiceAssignment": "Scheme of work: pages 644-645 Ex 19.1  page 647 Ex 19.2\nStart with the first questions, then work towards applications and reasoning. Show clear working.",
    "homeworkAssignment": "Page 122: Questions 1–4 on symmetry in two dimensions."
  },
  "16.5": {
    "schemeReference": "pages 649-650\nEx 19.3\n\npage 651\nEx 19.4",
    "supportingSelection": false,
    "practice": [
      {
        "image": "assets/textbook/cambridge-p649-exercise.webp",
        "width": 1061,
        "height": 1177,
        "page": 649,
        "pdfPage": 658,
        "heading": "plane\n5\t1\t5\t1\t2\t2\t142\t216\t64\t14\t94.194275\tsymmetry\n4\t1\t5\t1\t3\t0\t71\t243\t171\t16\t-1\t\n5\t1\t5\t1\t3\t1\t71\t248\t7\t7\t49.956913\t©\n5\t1\t5\t1\t3\t2\t103\t243\t66\t14\t43.803955\trotational\n5\t1\t5\t1\t3\t3\t173\t245\t69\t14\t95.935928\tsymmetry.\n2\t1\t6\t0\t0\t0\t73\t287\t194\t27\t-1\t\n3\t1\t6\t1\t0\t0\t73\t287\t194\t27\t-1\t\n4\t1\t6\t1\t1\t0\t73\t287\t194\t27\t-1\t\n5\t1\t6\t1\t1\t1\t73\t287\t65\t22\t96.876617\tPlane\n5\t1\t6\t1\t1\t2\t147\t289\t120\t25\t96.680031\tsymmetry\n2\t1\t7\t0\t0\t0\t72\t323\t584\t40\t-1\t\n3\t1\t7\t1\t0\t0\t72\t323\t584\t40\t-1\t\n4\t1\t7\t1\t1\t0\t72\t323\t584\t22\t-1\t\n5\t1\t7\t1\t1\t1\t72\t329\t8\t13\t91.233307\tA\n5\t1\t7\t1\t1\t2\t85\t315\t37\t34\t91.233307\tplane\n5\t1\t7\t1\t1\t3\t127\t315\t12\t34\t96.068756\tis\n5\t1\t7\t1\t1\t4\t144\t332\t4\t9\t96.068756\ta\n5\t1\t7\t1\t1\t5\t155\t315\t21\t34\t96.802078\tflat\n5\t1\t7\t1\t1\t6\t184\t315\t49\t34\t96.864906\tsurface.\n5\t1\t7\t1\t1\t7\t238\t327\t12\t13\t96.647453\tIf\n5\t1\t7\t1\t1\t8\t257\t315\t21\t34\t96.979645\tyou\n5\t1\t7\t1\t1\t9\t286\t315\t20\t34\t92.479088\tcan\n5\t1\t7\t1\t1\t10\t311\t315\t21\t34\t95.773094\tcut\n5\t1\t7\t1\t1\t11\t337\t330\t6\t9\t87.711220\ta\n5\t1\t7\t1\t1\t12\t348\t315\t32\t34\t87.711220\tsolid\n5\t1\t7\t1\t1\t13\t386\t326\t11\t13\t96.804016\tin\n5\t1\t7\t1\t1\t14\t405\t315\t23\t34\t95.830429\thalf\n5\t1\t7\t1\t1\t15\t436\t315\t35\t34\t86.172981\talong\n5\t1\t7\t1\t1\t16\t476\t328\t6\t10\t86.172981\ta\n5\t1\t7\t1\t1\t17\t490\t315\t32\t34\t96.933266\tplane\n5\t1\t7\t1\t1\t18\t529\t315\t13\t34\t96.301407\tso\n5\t1\t7\t1\t1\t19\t548\t315\t25\t34\t96.334770\tthat\n5\t1\t7\t1\t1\t20\t580\t315\t27\t34\t96.812836\teach\n5\t1\t7\t1\t1\t21\t612\t315\t26\t34\t94.833031\thalf\n5\t1\t7\t1\t1\t22\t646\t323\t10\t13\t90.242416\tis\n4\t1\t7\t1\t2\t0\t72\t345\t438\t18\t-1\t\n5\t1\t7\t1\t2\t1\t68\t336\t25\t33\t96.666550\tthe\n5\t1\t7\t1\t2\t2\t101\t336\t39\t33\t91.878960\tmirror\n5\t1\t7\t1\t2\t3\t147\t336\t37\t33\t96.827927\timage\n5\t1\t7\t1\t2\t4\t190\t347\t13\t13\t96.827927\tof\n5\t1\t7\t1\t2\t5\t211\t336\t20\t33\t96.908089\tthe\n5\t1\t7\t1\t2\t6\t235\t336\t37\t33\t96.967690\tother,\n5\t1\t7\t1\t2\t7\t279\t336\t26\t33\t96.881012\tthen\n5\t1\t7\t1\t2\t8\t312\t336\t20\t33\t96.910545\tthe\n5\t1\t7\t1\t2\t9\t337\t336\t31\t33\t89.435982\tsolid\n5\t1\t7\t1\t2\t10\t376\t336\t20\t33\t96.947075\thas\n5\t1\t7\t1\t2\t11\t403\t336\t34\t33\t96.959930\tplane\n5\t1\t7\t1\t2\t12\t444\t336\t70\t33\t96.213142\tsymmetry.\n2\t1\t8\t0\t0\t0\t72\t372\t558\t38\t-1\t\n3\t1\t8\t1\t0\t0\t72\t372\t558\t38\t-1\t\n4\t1\t8\t1\t1\t0\t72\t372\t558\t21\t-1\t\n5\t1\t8\t1\t1\t1\t72\t377\t30\t13\t96.729454\tThis\n5\t1\t8\t1\t1\t2\t106\t377\t56\t16\t96.627678\tdiagram\n5\t1\t8\t1\t1\t3\t166\t376\t16\t13\t96.986221\tof\n5\t1\t8\t1\t1\t4\t186\t380\t8\t9\t96.435219\ta\n5\t1\t8\t1\t1\t5\t198\t376\t47\t13\t96.435219\tcuboid\n5\t1\t8\t1\t1\t6\t249\t375\t41\t14\t96.969948\tshows\n5\t1\t8\t1\t1\t7\t295\t375\t26\t13\t96.946449\tthat\n5\t1\t8\t1\t1\t8\t325\t375\t10\t13\t95.714630\tit\n5\t1\t8\t1\t1\t9\t338\t375\t24\t13\t95.714630\tcan\n5\t1\t8\t1\t1\t10\t367\t368\t13\t29\t96.906860\tbe\n5\t1\t8\t1\t1\t11\t386\t375\t21\t13\t94.781914\tcut\n5\t1\t8\t1\t1\t12\t412\t374\t33\t13\t84.953659\tthree\n5\t1\t8\t1\t1\t13\t449\t374\t57\t13\t96.609200\tdifferent\n5\t1\t8\t1\t1\t14\t510\t377\t33\t12\t94.584358\tways\n5\t1\t8\t1\t1\t15\t547\t375\t14\t11\t94.584358\tto\n5\t1\t8\t1\t1\t16\t565\t372\t36\t13\t96.680206\tmake\n5\t1\t8\t1\t1\t17\t606\t374\t24\t11\t96.777275\ttwo\n4\t1\t8\t1\t2\t0\t73\t396\t106\t14\t-1\t\n5\t1\t8\t1\t2\t1\t73\t396\t57\t14\t96.970299\tidentical\n5\t1\t8\t1\t2\t2\t134\t396\t45\t13\t96.224373\thalves.\n2\t1\t9\t0\t0\t0\t215\t422\t377\t6\t-1\t\n3\t1\t9\t1\t0\t0\t215\t422\t377\t6\t-1\t\n4\t1\t9\t1\t1\t0\t215\t422\t377\t6\t-1\t\n5\t1\t9\t1\t1\t1\t215\t422\t377\t6\t95.000000\t \n2\t1\t10\t0\t0\t0\t304\t418\t300\t96\t-1\t\n3\t1\t10\t1\t0\t0\t304\t418\t300\t96\t-1\t\n4\t1\t10\t1\t1\t0\t304\t418\t300\t96\t-1\t\n5\t1\t10\t1\t1\t1\t304\t418\t300\t96\t95.000000\t \n2\t1\t11\t0\t0\t0\t142\t505\t422\t7\t-1\t\n3\t1\t11\t1\t0\t0\t142\t505\t422\t7\t-1\t\n4\t1\t11\t1\t1\t0\t142\t505\t422\t7\t-1\t\n5\t1\t11\t1\t1\t1\t142\t505\t422\t7\t95.000000\t \n2\t1\t12\t0\t0\t0\t74\t528\t576\t40\t-1\t\n3\t1\t12\t1\t0\t0\t74\t528\t576\t40\t-1\t\n4\t1\t12\t1\t1\t0\t74\t528\t576\t20\t-1\t\n5\t1\t12\t1\t1\t1\t70\t523\t30\t32\t74.449814\t‘The\n5\t1\t12\t1\t1\t2\t104\t523\t46\t32\t95.334831\tshaded\n5\t1\t12\t1\t1\t3\t155\t523\t30\t32\t95.640739\tarea\n5\t1\t12\t1\t1\t4\t192\t523\t14\t32\t93.749344\ton\n5\t1\t12\t1\t1\t5\t212\t523\t29\t32\t93.749344\teach\n5\t1\t12\t1\t1\t6\t248\t523\t52\t32\t96.776184\tdiagram\n5\t1\t12\t1\t1\t7\t307\t523\t65\t32\t96.936996\trepresents\n5\t1\t12\t1\t1\t8\t379\t523\t19\t32\t96.928757\tthe\n5\t1\t12\t1\t1\t9\t406\t523\t32\t32\t96.928757\tplane\n5\t1\t12\t1\t1\t10\t446\t523\t14\t32\t96.946701\tof\n5\t1\t12\t1\t1\t11\t467\t523\t59\t32\t96.280899\tsymmetry\n5\t1\t12\t1\t1\t12\t534\t523\t30\t32\t96.785423\t(this\n5\t1\t12\t1\t1\t13\t568\t528\t10\t13\t96.822632\tis\n5\t1\t12\t1\t1\t14\t587\t523\t35\t32\t96.948738\twhere\n5\t1\t12\t1\t1\t15\t630\t523\t24\t32\t96.913445\tyou\n4\t1\t12\t1\t2\t0\t75\t552\t90\t16\t-1\t\n5\t1\t12\t1\t2\t1\t75\t552\t41\t14\t95.390175\twould\n5\t1\t12\t1\t2\t2\t120\t555\t22\t10\t96.920845\tcut\n5\t1\t12\t1\t2\t3\t146\t552\t19\t16\t88.708000\tit).\n2\t1\t13\t0\t0\t0\t75\t580\t566\t42\t-1\t\n3\t1\t13\t1\t0\t0\t75\t580\t566\t42\t-1\t\n4\t1\t13\t1\t1\t0\t75\t580\t566\t23\t-1\t\n5\t1\t13\t1\t1\t1\t75\t587\t28\t13\t88.086174\tCan\n5\t1\t13\t1\t1\t2\t108\t590\t24\t13\t95.366570\tyou\n5\t1\t13\t1\t1\t3\t137\t590\t20\t10\t96.419647\tsee\n5\t1\t13\t1\t1\t4\t161\t586\t27\t13\t96.630211\tthat\n5\t1\t13\t1\t1\t5\t192\t589\t8\t10\t92.955772\ta\n5\t1\t13\t1\t1\t6\t205\t586\t44\t16\t92.955772\tsphere\n5\t1\t13\t1\t1\t7\t253\t584\t72\t17\t96.521568\ttechnically\n5\t1\t13\t1\t1\t8\t329\t584\t23\t13\t96.754303\thas\n5\t1\t13\t1\t1\t9\t356\t587\t16\t10\t96.886002\tan\n5\t1\t13\t1\t1\t10\t377\t583\t46\t14\t96.786995\tinfinite\n5\t1\t13\t1\t1\t11\t428\t583\t51\t13\t96.621407\tnumber\n5\t1\t13\t1\t1\t12\t483\t582\t15\t13\t96.461716\tof\n5\t1\t13\t1\t1\t13\t503\t582\t42\t17\t96.461716\tplanes\n5\t1\t13\t1\t1\t14\t549\t581\t15\t13\t96.903351\tof\n5\t1\t13\t1\t1\t15\t569\t580\t72\t17\t96.363091\tsymmetry?\n4\t1\t13\t1\t2\t0\t76\t602\t426\t20\t-1\t\n5\t1\t13\t1\t2\t1\t76\t606\t18\t13\t88.900925\tIt\n5\t1\t13\t1\t2\t2\t91\t610\t10\t9\t88.900925\tis\n5\t1\t13\t1\t2\t3\t105\t605\t83\t17\t94.260262\tsymmetrical\n5\t1\t13\t1\t2\t4\t193\t605\t39\t13\t96.960197\tabout\n5\t1\t13\t1\t2\t5\t236\t608\t24\t12\t96.491028\tany\n5\t1\t13\t1\t2\t6\t265\t604\t36\t16\t96.951172\tplane\n5\t1\t13\t1\t2\t7\t305\t604\t27\t13\t96.951172\tthat\n5\t1\t13\t1\t2\t8\t336\t606\t42\t14\t96.704697\tpasses\n5\t1\t13\t1\t2\t9\t382\t602\t61\t16\t96.504753\tthrough\n5\t1\t13\t1\t2\t10\t440\t605\t15\t10\t96.575989\tits\n5\t1\t13\t1\t2\t11\t459\t604\t43\t11\t93.461662\tcentre,\n2\t1\t14\t0\t0\t0\t231\t660\t38\t36\t-1\t\n3\t1\t14\t1\t0\t0\t231\t660\t38\t36\t-1\t\n4\t1\t14\t1\t1\t0\t231\t660\t38\t36\t-1\t\n5\t1\t14\t1\t1\t1\t231\t660\t38\t36\t69.083511\t=\n2\t1\t15\t0\t0\t0\t200\t632\t338\t150\t-1\t\n3\t1\t15\t1\t0\t0\t200\t632\t338\t150\t-1\t\n4\t1\t15\t1\t1\t0\t200\t632\t338\t150\t-1\t\n5\t1\t15\t1\t1\t1\t200\t632\t338\t150\t95.000000\t \n2\t1\t16\t0\t0\t0\t80\t823\t282\t87\t-1\t\n3\t1\t16\t1\t0\t0\t80\t823\t367\t55\t-1\t\n4\t1\t16\t1\t1\t0\t80\t823\t161\t24\t-1\t\n5\t1\t16\t1\t1\t1\t80\t825\t100\t22\t96.763412\tExercise\n5\t1\t16\t1\t1\t2\t190\t823\t51\t22\t96.374275\t19.3\n4\t1\t16\t1\t2\t0\t80\t859\t282\t51\t-1\t\n5\t1\t16\t1\t2\t1\t80\t864\t6\t13\t96.082367\t1\n5\t1\t16\t1\t2\t2\t111\t859\t251\t51\t0.000000\t————\n2\t1\t17\t0\t0\t0\t257\t891\t107\t113\t-1\t\n3\t1\t17\t1\t0\t0\t257\t891\t107\t113\t-1\t\n4\t1\t17\t1\t1\t0\t257\t891\t107\t113\t-1\t\n5\t1\t17\t1\t1\t1\t257\t891\t107\t113\t0.000000\t~~\n2\t1\t18\t0\t0\t0\t413\t888\t107\t48\t-1\t\n3\t1\t18\t1\t0\t0\t413\t888\t107\t48\t-1\t\n4\t1\t18\t1\t1\t0\t413\t888\t107\t48\t-1\t\n5\t1\t18\t1\t1\t1\t413\t888\t107\t48\t0.195930\tLead\n2\t1\t19\t0\t0\t0\t113\t1037\t529\t43\t-1\t\n3\t1\t19\t1\t0\t0\t113\t1037\t529\t43\t-1\t\n4\t1\t19\t1\t1\t0\t113\t1037\t529\t22\t-1\t\n5\t1\t19\t1\t1\t1\t113\t1045\t12\t13\t56.876762\t‘A\n5\t1\t19\t1\t1\t2\t129\t1045\t32\t12\t56.876762\tcube\n5\t1\t19\t1\t1\t3\t165\t1044\t23\t13\t96.237534\thas\n5\t1\t19\t1\t1\t4\t192\t1044\t28\t13\t96.454079\tnine\n5\t1\t19\t1\t1\t5\t225\t1043\t53\t16\t96.448463\tpossible\n5\t1\t19\t1\t1\t6\t283\t1042\t42\t17\t96.792412\tplanes\n5\t1\t19\t1\t1\t7\t329\t1041\t16\t14\t96.976685\tof\n5\t1\t19\t1\t1\t8\t349\t1043\t68\t14\t95.019867\tsymmetry.\n5\t1\t19\t1\t1\t9\t423\t1040\t38\t13\t95.402237\tMake\n5\t1\t19\t1\t1\t10\t465\t1039\t55\t13\t96.078758\tsketches\n5\t1\t19\t1\t1\t11\t524\t1041\t14\t10\t96.751938\tto\n5\t1\t19\t1\t1\t12\t542\t1038\t34\t13\t95.209991\tshow\n5\t1\t19\t1\t1\t13\t581\t1038\t21\t12\t97.005295\tthe\n5\t1\t19\t1\t1\t14\t606\t1037\t36\t13\t96.970306\tother\n4\t1\t19\t1\t2\t0\t113\t1063\t86\t17\t-1\t\n5\t1\t19\t1\t2\t1\t113\t1067\t36\t10\t96.104645\tseven\n5\t1\t19\t1\t2\t2\t154\t1063\t45\t17\t96.648926\tplanes.\n2\t1\t20\t0\t0\t0\t253\t881\t276\t147\t-1\t\n3\t1\t20\t1\t0\t0\t253\t881\t276\t147\t-1\t\n4\t1\t20\t1\t1\t0\t253\t881\t276\t147\t-1\t\n5\t1\t20\t1\t1\t1\t253\t881\t276\t147\t95.000000\t \n2\t1\t21\t0\t0\t0\t707\t593\t37\t12\t-1\t\n3\t1\t21\t1\t0\t0\t707\t593\t37\t12\t-1\t\n4\t1\t21\t1\t1\t0\t707\t593\t37\t12\t-1\t\n5\t1\t21\t1\t1\t1\t707\t593\t37\t12\t96.905045\tLINK\n2\t1\t22\t0\t0\t0\t705\t624\t149\t133\t-1\t\n3\t1\t22\t1\t0\t0\t705\t624\t149\t133\t-1\t\n4\t1\t22\t1\t1\t0\t706\t624\t112\t18\t-1\t\n5\t1\t22\t1\t1\t1\t706\t625\t9\t13\t95.198776\tIf\n5\t1\t22\t1\t1\t2\t718\t629\t26\t13\t96.560364\tyou\n5\t1\t22\t1\t1\t3\t749\t624\t30\t14\t96.128853\tlook\n5\t1\t22\t1\t1\t4\t784\t626\t13\t11\t93.495125\tat\n5\t1\t22\t1\t1\t5\t802\t628\t16\t9\t93.495125\tan\n4\t1\t22\t1\t2\t0\t705\t642\t149\t19\t-1\t\n5\t1\t22\t1\t2\t1\t705\t644\t69\t17\t95.256218\telectricity\n5\t1\t22\t1\t2\t2\t778\t643\t39\t18\t96.307266\tpylon\n5\t1\t22\t1\t2\t3\t822\t642\t32\t14\t94.975319\tfrom\n4\t1\t22\t1\t3\t0\t705\t661\t144\t16\t-1\t\n5\t1\t22\t1\t3\t1\t705\t663\t23\t14\t92.777092\tthe\n5\t1\t22\t1\t3\t2\t733\t667\t7\t9\t92.777092\tair\n5\t1\t22\t1\t3\t3\t755\t663\t9\t13\t90.651131\tit\n5\t1\t22\t1\t3\t4\t768\t663\t11\t13\t87.262581\tis\n5\t1\t22\t1\t3\t5\t783\t662\t34\t14\t87.262581\tclear\n5\t1\t22\t1\t3\t6\t821\t661\t28\t14\t95.269287\tthat\n4\t1\t22\t1\t4\t0\t706\t681\t146\t15\t-1\t\n5\t1\t22\t1\t4\t1\t706\t683\t9\t13\t96.447227\tit\n5\t1\t22\t1\t4\t2\t719\t682\t24\t14\t96.695724\thas\n5\t1\t22\t1\t4\t3\t747\t686\t37\t9\t96.389229\tmore\n5\t1\t22\t1\t4\t4\t789\t681\t31\t14\t95.011620\tthan\n5\t1\t22\t1\t4\t5\t825\t685\t27\t10\t95.011620\tone\n4\t1\t22\t1\t5\t0\t706\t701\t133\t18\t-1\t\n5\t1\t22\t1\t5\t1\t706\t701\t39\t18\t96.646194\tplane\n5\t1\t22\t1\t5\t2\t750\t701\t14\t14\t96.779556\tof\n5\t1\t22\t1\t5\t3\t768\t703\t71\t15\t96.325371\tsymmetry.\n4\t1\t22\t1\t6\t0\t705\t719\t143\t19\t-1\t\n5\t1\t22\t1\t6\t1\t705\t721\t29\t13\t92.631012\tThis\n5\t1\t22\t1\t6\t2\t739\t720\t38\t18\t96.655083\thelps\n5\t1\t22\t1\t6\t3\t781\t720\t23\t14\t96.933968\tthe\n5\t1\t22\t1\t6\t4\t809\t719\t39\t18\t95.426781\tpylon\n4\t1\t22\t1\t7\t0\t706\t739\t121\t18\t-1\t\n5\t1\t22\t1\t7\t1\t706\t743\t15\t10\t96.021698\tto\n5\t1\t22\t1\t7\t2\t726\t742\t27\t15\t94.271904\tstay\n5\t1\t22\t1\t7\t3\t758\t739\t69\t14\t96.692543\tbalanced.\n2\t1\t23\t0\t0\t0\t717\t663\t38\t17\t-1\t\n3\t1\t23\t1\t0\t0\t717\t663\t38\t17\t-1\t\n4\t1\t23\t1\t1\t0\t717\t663\t38\t17\t-1\t\n5\t1\t23\t1\t1\t1\t717\t663\t38\t17\t95.000000\t \n2\t1\t24\t0\t0\t0\t702\t762\t86\t200\t-1\t\n3\t1\t24\t1\t0\t0\t702\t762\t86\t200\t-1\t\n4\t1\t24\t1\t1\t0\t702\t762\t86\t200\t-1\t\n5\t1\t24\t1\t1\t1\t702\t762\t86\t200\t95.000000\t \n2\t1\t25\t0\t0\t0\t690\t614\t8\t364\t-1\t\n3\t1\t25\t1\t0\t0\t690\t614\t8\t364\t-1\t\n4\t1\t25\t1\t1\t0\t690\t614\t8\t364\t-1\t\n5\t1\t25\t1\t1\t1\t690\t614\t8\t364\t95.000000\t \n2\t1\t26\t0\t0\t0\t874\t612\t5\t363\t-1\t\n3\t1\t26\t1\t0\t0\t874\t612\t5\t363\t-1\t\n4\t1\t26\t1\t1\t0\t874\t612\t5\t363\t-1\t\n5\t1\t26\t1\t1\t1\t874\t612\t5\t363\t95.000000\t \n2\t1\t27\t0\t0\t0\t694\t972\t184\t7\t-1\t\n3\t1\t27\t1\t0\t0\t694\t972\t184\t7\t-1\t\n4\t1\t27\t1\t1\t0\t694\t972\t184\t7\t-1\t\n5\t1\t27\t1\t1\t1\t694\t972\t184\t7\t95.000000\t \n2\t1\t28\t0\t0\t0\t80\t1145\t798\t33\t-1\t\n3\t1\t28\t1\t0\t0\t80\t1145\t798\t33\t-1\t\n4\t1\t28\t1\t1\t0\t80\t1145\t798\t33\t-1\t\n5\t1\t28\t1\t1\t1\t80\t1145\t798\t33\t95.000000\t \n2\t1\t29\t0\t0\t0\t829\t1191\t48\t26\t-1\t\n3\t1\t29\t1\t0\t0\t829\t1191\t48\t26\t-1\t\n4\t1\t29\t1\t1\t0\t829\t1191\t48\t26\t-1\t\n5\t1\t29\t1\t1\t1\t829\t1191\t48\t26\t70.137146\t649\n5\t1\t29\t1\t1\t2\t864\t1187\t15\t34\t70.137146\t>\n",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p650-exercise.webp",
        "width": 1061,
        "height": 1297,
        "page": 650,
        "pdfPage": 659,
        "heading": "Exercise continued",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p651-exercise.webp",
        "width": 1061,
        "height": 995,
        "page": 651,
        "pdfPage": 660,
        "heading": "Exercise 19.4",
        "book": "cambridge"
      }
    ],
    "homework": [
      {
        "image": "assets/textbook/oxford-p121.webp",
        "width": 1072,
        "height": 1549,
        "page": 121,
        "pdfPage": 123,
        "heading": "Exam Success — selected questions",
        "book": "oxford"
      },
      {
        "image": "assets/textbook/oxford-p122.webp",
        "width": 1072,
        "height": 1549,
        "page": 122,
        "pdfPage": 124,
        "heading": "Exam Success — selected questions",
        "book": "oxford"
      }
    ],
    "examples": [],
    "practiceAssignment": "Scheme of work: pages 649-650 Ex 19.3  page 651 Ex 19.4\nStart with the first questions, then work towards applications and reasoning. Show clear working.",
    "homeworkAssignment": "Pages 121–122: use the worked 3D example, then answer the questions about solids."
  },
  "17.1": {
    "schemeReference": "pages 403-404\nEx 13.1\nQu 1-5",
    "supportingSelection": false,
    "practice": [
      {
        "image": "assets/textbook/cambridge-p403-exercise.webp",
        "width": 1061,
        "height": 872,
        "page": 403,
        "pdfPage": 415,
        "heading": "Exercise 13.1",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p404-exercise.webp",
        "width": 1061,
        "height": 1297,
        "page": 404,
        "pdfPage": 416,
        "heading": "Exercise continued",
        "book": "cambridge"
      }
    ],
    "homework": [
      {
        "image": "assets/textbook/oxford-p133.webp",
        "width": 1072,
        "height": 1549,
        "page": 133,
        "pdfPage": 135,
        "heading": "Exam Success — selected questions",
        "book": "oxford"
      }
    ],
    "examples": [
      {
        "prompt": "Coursebook worked example — page 403",
        "source": "Morrison & Hamshaw, Cambridge IGCSE Mathematics (2023), p. 403",
        "sourceQuestion": {
          "image": "assets/textbook/cambridge-p403-example1-question.webp",
          "width": 749,
          "height": 133
        },
        "sourceSolution": {
          "image": "assets/textbook/cambridge-p403-example1-solution.webp",
          "width": 749,
          "height": 256
        },
        "steps": [],
        "sourcePage": 403,
        "sourcePdfPage": 415
      }
    ],
    "practiceAssignment": "Scheme of work: pages 403-404 Ex 13.1 Qu 1-5\nStart with the first questions, then work towards applications and reasoning. Show clear working.",
    "homeworkAssignment": "Complete the questions matching this lesson on the pages below. Show working and explain any conclusions in context."
  },
  "17.2": {
    "schemeReference": "pages 198-201\nEx 7.1",
    "supportingSelection": false,
    "practice": [
      {
        "image": "assets/textbook/cambridge-p198-exercise.webp",
        "width": 1061,
        "height": 1277,
        "page": 198,
        "pdfPage": 210,
        "heading": "Exercise 7.1",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p199-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 199,
        "pdfPage": 211,
        "heading": "Exercise continued",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p200-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 200,
        "pdfPage": 212,
        "heading": "Exercise continued",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p201-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 201,
        "pdfPage": 213,
        "heading": "Exercise continued",
        "book": "cambridge"
      }
    ],
    "homework": [
      {
        "image": "assets/textbook/oxford-p135.webp",
        "width": 1072,
        "height": 1549,
        "page": 135,
        "pdfPage": 137,
        "heading": "Exam Success — selected questions",
        "book": "oxford"
      }
    ],
    "examples": [
      {
        "prompt": "Coursebook worked example — page 197",
        "source": "Morrison & Hamshaw, Cambridge IGCSE Mathematics (2023), p. 197",
        "sourceQuestion": {
          "image": "assets/textbook/cambridge-p197-example1-question.webp",
          "width": 754,
          "height": 307
        },
        "steps": [
          "Area of rectangle: [[7\\times5=35\\text{ cm}^2]].",
          "Area of triangle: [[\\frac12\\times5\\times6=15\\text{ cm}^2]].",
          "Total area: [[35+15=50\\text{ cm}^2]]."
        ],
        "sourcePage": 197,
        "sourcePdfPage": 209
      }
    ],
    "practiceAssignment": "Scheme of work: pages 198-201 Ex 7.1\nStart with the first questions, then work towards applications and reasoning. Show clear working.",
    "homeworkAssignment": "Complete the questions matching this lesson on the pages below. Show working and explain any conclusions in context."
  },
  "17.3": {
    "schemeReference": "pages 204-205\nEx 7.2\n\npage 207 \nEx 7.3",
    "supportingSelection": false,
    "practice": [
      {
        "image": "assets/textbook/cambridge-p204-exercise.webp",
        "width": 1061,
        "height": 719,
        "page": 204,
        "pdfPage": 216,
        "heading": "Exercise 7.2",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p205-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 205,
        "pdfPage": 217,
        "heading": "Exercise continued",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p207-exercise.webp",
        "width": 1061,
        "height": 1279,
        "page": 207,
        "pdfPage": 219,
        "heading": "Exercise 7.3",
        "book": "cambridge"
      }
    ],
    "homework": [
      {
        "image": "assets/textbook/oxford-p137.webp",
        "width": 1072,
        "height": 1549,
        "page": 137,
        "pdfPage": 139,
        "heading": "Exam Success — selected questions",
        "book": "oxford"
      }
    ],
    "examples": [
      {
        "prompt": "Coursebook worked example — page 204",
        "source": "Morrison & Hamshaw, Cambridge IGCSE Mathematics (2023), p. 204",
        "sourceQuestion": {
          "image": "assets/textbook/cambridge-p204-question-fixed.webp",
          "width": 998,
          "height": 486
        },
        "sourceSolution": {
          "image": "assets/textbook/cambridge-p204-example1-solution.webp",
          "width": 1014,
          "height": 351
        },
        "steps": [],
        "sourcePage": 204,
        "sourcePdfPage": 216
      },
      {
        "prompt": "Coursebook worked example — page 206",
        "source": "Morrison & Hamshaw, Cambridge IGCSE Mathematics (2023), p. 206",
        "sourceQuestion": {
          "image": "assets/textbook/cambridge-p206-example1-question.webp",
          "width": 755,
          "height": 239
        },
        "sourceSolution": {
          "image": "assets/textbook/cambridge-p206-example1-solution.webp",
          "width": 755,
          "height": 436
        },
        "steps": [],
        "sourcePage": 206,
        "sourcePdfPage": 218
      }
    ],
    "practiceAssignment": "Scheme of work: pages 204-205 Ex 7.2  page 207  Ex 7.3\nStart with the first questions, then work towards applications and reasoning. Show clear working.",
    "homeworkAssignment": "Complete the questions matching this lesson on the pages below. Show working and explain any conclusions in context."
  },
  "17.4": {
    "schemeReference": "\npages 209-212\nEx 7.4\n\n",
    "supportingSelection": false,
    "practice": [
      {
        "image": "assets/textbook/cambridge-p209-exercise.webp",
        "width": 1061,
        "height": 800,
        "page": 209,
        "pdfPage": 221,
        "heading": "Exercise 7.4",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p210-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 210,
        "pdfPage": 222,
        "heading": "Exercise continued",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p211-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 211,
        "pdfPage": 223,
        "heading": "Exercise continued",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p212-exercise.webp",
        "width": 1061,
        "height": 421,
        "page": 212,
        "pdfPage": 224,
        "heading": "Exercise continued",
        "book": "cambridge"
      }
    ],
    "homework": [
      {
        "image": "assets/textbook/oxford-p137.webp",
        "width": 1072,
        "height": 1549,
        "page": 137,
        "pdfPage": 139,
        "heading": "Exam Success — selected questions",
        "book": "oxford"
      }
    ],
    "examples": [
      {
        "prompt": "Coursebook worked example 5(a) — sector area and perimeter",
        "source": "Morrison & Hamshaw, Cambridge IGCSE Mathematics (2023), p. 208",
        "sourceQuestion": {
          "image": "assets/textbook/cambridge-p208-example1-question.webp",
          "width": 749,
          "height": 244
        },
        "sourceSolution": {
          "image": "assets/textbook/cambridge-p208-solution-a-fixed.webp",
          "width": 726,
          "height": 184
        },
        "steps": [],
        "sourcePage": 208,
        "sourcePdfPage": 220
      }
    ],
    "practiceAssignment": "Scheme of work:  pages 209-212 Ex 7.4  \nStart with the first questions, then work towards applications and reasoning. Show clear working.",
    "homeworkAssignment": "Complete the questions matching this lesson on the pages below. Show working and explain any conclusions in context."
  },
  "18.1": {
    "schemeReference": "pages 111-112\nEx 4.1\n\npages 114-115\nEx 4.2\n\npage 117\nEx 4.3\n\npages 122-123\nEx 4.5",
    "supportingSelection": false,
    "practice": [
      {
        "image": "assets/textbook/cambridge-p111-exercise.webp",
        "width": 1061,
        "height": 289,
        "page": 111,
        "pdfPage": 123,
        "heading": "Exercise 4.1",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p112-exercise.webp",
        "width": 1061,
        "height": 495,
        "page": 112,
        "pdfPage": 124,
        "heading": "Exercise continued",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p114-exercise.webp",
        "width": 1061,
        "height": 486,
        "page": 114,
        "pdfPage": 126,
        "heading": "Exercise 4.2",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p115-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 115,
        "pdfPage": 127,
        "heading": "Exercise continued",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p117-exercise.webp",
        "width": 1061,
        "height": 1294,
        "page": 117,
        "pdfPage": 129,
        "heading": "Exercise 4.3",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p122-exercise.webp",
        "width": 1061,
        "height": 537,
        "page": 122,
        "pdfPage": 134,
        "heading": "Exercise 4.5",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p123-exercise.webp",
        "width": 1061,
        "height": 861,
        "page": 123,
        "pdfPage": 135,
        "heading": "Exercise continued",
        "book": "cambridge"
      }
    ],
    "homework": [
      {
        "image": "assets/textbook/oxford-p203.webp",
        "width": 1072,
        "height": 1549,
        "page": 203,
        "pdfPage": 205,
        "heading": "Exam Success — selected questions",
        "book": "oxford"
      }
    ],
    "examples": [],
    "practiceAssignment": "Scheme of work: pages 111-112 Ex 4.1  pages 114-115 Ex 4.2  page 117 Ex 4.3  pages 122-123 Ex 4.5\nStart with the first questions, then work towards applications and reasoning. Show clear working.",
    "homeworkAssignment": "Complete the questions matching this lesson on the pages below. Show working and explain any conclusions in context."
  },
  "18.2": {
    "schemeReference": "pages 370-371\nEx 12.1",
    "supportingSelection": false,
    "practice": [
      {
        "image": "assets/textbook/cambridge-p370-exercise.webp",
        "width": 1061,
        "height": 497,
        "page": 370,
        "pdfPage": 382,
        "heading": "Exercise 12.1 7",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p371-exercise.webp",
        "width": 1061,
        "height": 980,
        "page": 371,
        "pdfPage": 383,
        "heading": "Exercise continued",
        "book": "cambridge"
      }
    ],
    "homework": [
      {
        "image": "assets/textbook/oxford-p205.webp",
        "width": 1072,
        "height": 1549,
        "page": 205,
        "pdfPage": 207,
        "heading": "Exam Success — selected questions",
        "book": "oxford"
      }
    ],
    "examples": [
      {
        "prompt": "After six tests, Gad has a mean score of 48%. He scores 83% in a seventh test. Find (a) his total for the first six tests and (b) his new mean.",
        "source": "Morrison & Hamshaw, Cambridge IGCSE Mathematics (2023), p. 370",
        "steps": [
          "(a) Total score for six tests: [[6\\times48=288]].",
          "(b) Total for seven tests: [[288+83=371]]. Mean: [[371\\div7=53\\%]]."
        ],
        "sourcePage": 370,
        "sourcePdfPage": 382
      }
    ],
    "practiceAssignment": "Scheme of work: pages 370-371 Ex 12.1\nStart with the first questions, then work towards applications and reasoning. Show clear working.",
    "homeworkAssignment": "Complete the questions matching this lesson on the pages below. Show working and explain any conclusions in context."
  },
  "18.3": {
    "schemeReference": "pages 378-379\nEx 12.3\nQu 1-5\n\npages 382-383\nEx 12.4\n\npage 386\nEx 12.5",
    "supportingSelection": false,
    "practice": [
      {
        "image": "assets/textbook/cambridge-p378-exercise.webp",
        "width": 1061,
        "height": 491,
        "page": 378,
        "pdfPage": 390,
        "heading": "* Median — Ifthe number of data values ism and is odd, then +\n5\t1\t21\t1\t1\t15\t573\t757\t32\t42\t58.071716\tgives\n5\t1\t21\t1\t1\t16\t611\t757\t19\t42\t58.071716\tthe\n2\t1\t22\t0\t0\t0\t185\t796\t423\t38\t-1\t\n3\t1\t22\t1\t0\t0\t185\t796\t423\t38\t-1\t\n4\t1\t22\t1\t1\t0\t185\t796\t423\t20\t-1\t\n5\t1\t22\t1\t1\t1\t185\t796\t54\t16\t85.002853\tposition\n5\t1\t22\t1\t1\t2\t244\t797\t15\t13\t96.002380\tof\n5\t1\t22\t1\t1\t3\t263\t797\t21\t13\t96.002380\tthe\n5\t1\t22\t1\t1\t4\t288\t798\t53\t12\t87.457794\tmedian,\n5\t1\t22\t1\t1\t5\t346\t798\t28\t13\t96.047081\tAdd\n5\t1\t22\t1\t1\t6\t379\t798\t21\t13\t96.898514\tthe\n5\t1\t22\t1\t1\t7\t404\t799\t75\t16\t96.731552\tfrequencies\n5\t1\t22\t1\t1\t8\t483\t800\t31\t13\t96.881714\tuntil\n5\t1\t22\t1\t1\t9\t518\t804\t24\t12\t94.611656\tyou\n5\t1\t22\t1\t1\t10\t547\t801\t36\t13\t93.007484\treach\n5\t1\t22\t1\t1\t11\t588\t802\t20\t12\t96.367195\tthe\n4\t1\t22\t1\t2\t0\t185\t816\t382\t18\t-1\t\n5\t1\t22\t1\t2\t1\t185\t816\t49\t12\t93.175804\tmedian\n5\t1\t22\t1\t2\t2\t239\t816\t57\t16\t93.202393\tposition,\n5\t1\t22\t1\t2\t3\t301\t817\t26\t13\t96.311714\tThe\n5\t1\t22\t1\t2\t4\t331\t817\t35\t13\t95.698647\tvalue\n5\t1\t22\t1\t2\t5\t371\t817\t12\t13\t96.907341\tin\n5\t1\t22\t1\t2\t6\t388\t818\t23\t13\t96.412376\tthis\n5\t1\t22\t1\t2\t7\t416\t818\t54\t16\t96.912483\tposition\n5\t1\t22\t1\t2\t8\t475\t819\t9\t13\t93.488190\tis\n5\t1\t22\t1\t2\t9\t489\t819\t21\t13\t96.299065\tthe\n5\t1\t22\t1\t2\t10\t514\t820\t53\t13\t80.501427\tmedian.\n2\t1\t23\t0\t0\t0\t163\t843\t468\t28\t-1\t\n3\t1\t23\t1\t0\t0\t163\t843\t468\t28\t-1\t\n4\t1\t23\t1\t1\t0\t163\t843\t468\t28\t-1\t\n5\t1\t23\t1\t1\t1\t163\t852\t9\t3\t81.449837\t~\n5\t1\t23\t1\t1\t2\t185\t847\t12\t13\t68.700638\tIf\n5\t1\t23\t1\t1\t3\t201\t847\t60\t16\t68.700638\tniseven,\n5\t1\t23\t1\t1\t4\t266\t848\t28\t13\t96.841217\tthen\n5\t1\t23\t1\t1\t5\t300\t839\t3\t36\t83.352066\t5\n5\t1\t23\t1\t1\t6\t312\t849\t32\t16\t96.000046\tgives\n5\t1\t23\t1\t1\t7\t349\t849\t20\t13\t96.985214\tthe\n5\t1\t23\t1\t1\t8\t373\t850\t55\t16\t96.971901\tposition\n5\t1\t23\t1\t1\t9\t432\t850\t16\t13\t96.861786\tof\n5\t1\t23\t1\t1\t10\t452\t851\t21\t13\t96.876106\tthe\n5\t1\t23\t1\t1\t11\t477\t851\t25\t13\t80.071602\tfirst\n5\t1\t23\t1\t1\t12\t507\t851\t15\t13\t96.946480\tof\n5\t1\t23\t1\t1\t13\t526\t852\t21\t13\t96.902260\tthe\n5\t1\t23\t1\t1\t14\t551\t852\t46\t14\t94.624512\tmiddle\n5\t1\t23\t1\t1\t15\t601\t853\t30\t16\t93.602470\tpair.\n2\t1\t24\t0\t0\t0\t184\t876\t443\t36\t-1\t\n3\t1\t24\t1\t0\t0\t184\t876\t443\t36\t-1\t\n4\t1\t24\t1\t1\t0\t184\t876\t443\t20\t-1\t\n5\t1\t24\t1\t1\t1\t184\t876\t29\t13\t89.838242\tAdd\n5\t1\t24\t1\t1\t2\t218\t876\t20\t13\t96.892876\tthe\n5\t1\t24\t1\t1\t3\t242\t876\t75\t17\t95.613159\tfrequencies\n5\t1\t24\t1\t1\t4\t321\t878\t31\t13\t96.870346\tuntil\n5\t1\t24\t1\t1\t5\t356\t882\t25\t12\t96.943192\tyou\n5\t1\t24\t1\t1\t6\t385\t879\t36\t13\t96.930740\treach\n5\t1\t24\t1\t1\t7\t426\t879\t24\t13\t96.988144\tthis\n5\t1\t24\t1\t1\t8\t454\t880\t54\t16\t96.498154\tposition\n5\t1\t24\t1\t1\t9\t513\t881\t24\t13\t96.944611\tand\n5\t1\t24\t1\t1\t10\t542\t881\t29\t13\t96.944611\tthen\n5\t1\t24\t1\t1\t11\t576\t881\t26\t14\t96.883522\tfind\n5\t1\t24\t1\t1\t12\t607\t882\t20\t13\t96.910835\tthe\n4\t1\t24\t1\t2\t0\t184\t895\t113\t17\t-1\t\n5\t1\t24\t1\t2\t1\t184\t899\t36\t9\t92.962784\tmean\n5\t1\t24\t1\t2\t2\t224\t895\t16\t13\t95.073143\tof\n5\t1\t24\t1\t2\t3\t244\t896\t20\t13\t96.799660\tthe\n5\t1\t24\t1\t2\t4\t269\t896\t28\t16\t95.370605\tpair.\n2\t1\t25\t0\t0\t0\t73\t935\t539\t85\t-1\t\n3\t1\t25\t1\t0\t0\t73\t935\t539\t85\t-1\t\n4\t1\t25\t1\t1\t0\t73\t935\t157\t25\t-1\t\n5\t1\t25\t1\t1\t1\t73\t935\t98\t24\t96.771660\tExercise\n5\t1\t25\t1\t1\t2\t181\t937\t49\t23\t96.688614\t12.3\n4\t1\t25\t1\t2\t0\t73\t971\t455\t23\t-1\t\n5\t1\t25\t1\t2\t1\t73\t971\t6\t13\t55.395386\t1\n5\t1\t25\t1\t2\t2\t101\t972\t66\t14\t90.936859\tConstruct\n5\t1\t25\t1\t2\t3\t171\t977\t8\t9\t94.307114\ta\n5\t1\t25\t1\t2\t4\t184\t973\t65\t18\t91.321312\tfrequency\n5\t1\t25\t1\t2\t5\t253\t975\t31\t13\t96.736351\ttable\n5\t1\t25\t1\t2\t6\t289\t975\t19\t14\t88.088982\tfor\n5\t1\t25\t1\t2\t7\t312\t976\t21\t13\t88.088982\tthe\n5\t1\t25\t1\t2\t8\t337\t976\t62\t18\t93.743828\tfollowing\n5\t1\t25\t1\t2\t9\t403\t978\t29\t13\t96.317154\tdata\n5\t1\t25\t1\t2\t10\t436\t978\t25\t14\t96.860550\tand\n5\t1\t25\t1\t2\t11\t466\t979\t62\t14\t96.344116\tcalculate:\n4\t1\t25\t1\t3\t0\t102\t997\t510\t23\t-1\t\n5\t1\t25\t1\t3\t1\t102\t999\t9\t10\t36.632156\t@\n5\t1\t25\t1\t3\t2\t124\t993\t29\t24\t36.632156\tthe\n5\t1\t25\t1\t3\t3\t162\t993\t34\t24\t91.921379\tmean\n5\t1\t25\t1\t3\t4\t249\t998\t10\t14\t76.896431\tb\n5\t1\t25\t1\t3\t5\t279\t1000\t73\t14\t74.561119\tthemedian\n5\t1\t25\t1\t3\t6\t382\t1005\t8\t10\t68.709045\t¢\n5\t1\t25\t1\t3\t7\t413\t1002\t21\t13\t65.402618\tthe\n5\t1\t25\t1\t3\t8\t438\t1003\t42\t13\t71.746490\tmode:\n5\t1\t25\t1\t3\t9\t517\t1003\t11\t14\t3.381271\td_\n5\t1\t25\t1\t3\t10\t548\t1004\t21\t13\t94.696877\tthe\n5\t1\t25\t1\t3\t11\t573\t1008\t39\t12\t92.367592\trange.\n2\t1\t26\t0\t0\t0\t101\t1022\t552\t11\t-1\t\n3\t1\t26\t1\t0\t0\t101\t1022\t552\t11\t-1\t\n4\t1\t26\t1\t1\t0\t101\t1022\t552\t11\t-1\t\n5\t1\t26\t1\t1\t1\t101\t1022\t552\t11\t95.000000\t \n2\t1\t27\t0\t0\t0\t113\t1033\t526\t84\t-1\t\n3\t1\t27\t1\t0\t0\t113\t1033\t526\t84\t-1\t\n4\t1\t27\t1\t1\t0\t114\t1033\t524\t22\t-1\t\n5\t1\t27\t1\t1\t1\t114\t1033\t39\t13\t27.524101\t314\n5\t1\t27\t1\t1\t2\t178\t1035\t364\t19\t7.582886\t5]1}2}eloloels{sl2fileola\n5\t1\t27\t1\t1\t3\t567\t1042\t7\t13\t34.774773\til\n5\t1\t27\t1\t1\t4\t599\t1042\t8\t13\t19.711151\t8\n5\t1\t27\t1\t1\t5\t633\t1043\t5\t12\t47.126236\tWe\n4\t1\t27\t1\t2\t0\t115\t1064\t524\t23\t-1\t\n5\t1\t27\t1\t2\t1\t115\t1064\t38\t13\t0.000000\tTTS)\n5\t1\t27\t1\t2\t2\t178\t1065\t7\t13\t0.000000\t5}\n5\t1\t27\t1\t2\t3\t209\t1066\t235\t18\t0.000000\t2;3]/4}sl7}elala\n5\t1\t27\t1\t2\t4\t468\t1072\t106\t13\t0.000000\t2;5/1/9\n5\t1\t27\t1\t2\t5\t598\t1074\t41\t13\t1.233688\t1415\n4\t1\t27\t1\t3\t0\t113\t1094\t493\t23\t-1\t\n5\t1\t27\t1\t3\t1\t113\t1094\t298\t20\t0.000000\t6{7/8]9}2/1}slala]a\n5\t1\t27\t1\t3\t2\t435\t1102\t171\t15\t42.371506\t5/6/1/4/4/8\n2\t1\t28\t0\t0\t0\t101\t1052\t552\t13\t-1\t\n3\t1\t28\t1\t0\t0\t101\t1052\t552\t13\t-1\t\n4\t1\t28\t1\t1\t0\t101\t1052\t552\t13\t-1\t\n5\t1\t28\t1\t1\t1\t101\t1052\t552\t13\t95.000000\t \n2\t1\t29\t0\t0\t0\t101\t1082\t551\t12\t-1\t\n3\t1\t29\t1\t0\t0\t101\t1082\t551\t12\t-1\t\n4\t1\t29\t1\t1\t0\t101\t1082\t551\t12\t-1\t\n5\t1\t29\t1\t1\t1\t101\t1082\t551\t12\t95.000000\t \n2\t1\t30\t0\t0\t0\t99\t1022\t5\t94\t-1\t\n3\t1\t30\t1\t0\t0\t99\t1022\t5\t94\t-1\t\n4\t1\t30\t1\t1\t0\t99\t1022\t5\t94\t-1\t\n5\t1\t30\t1\t1\t1\t99\t1022\t5\t94\t95.000000\t \n2\t1\t31\t0\t0\t0\t131\t1023\t5\t94\t-1\t\n3\t1\t31\t1\t0\t0\t131\t1023\t5\t94\t-1\t\n4\t1\t31\t1\t1\t0\t131\t1023\t5\t94\t-1\t\n5\t1\t31\t1\t1\t1\t131\t1023\t5\t94\t95.000000\t \n2\t1\t32\t0\t0\t0\t163\t1024\t4\t94\t-1\t\n3\t1\t32\t1\t0\t0\t163\t1024\t4\t94\t-1\t\n4\t1\t32\t1\t1\t0\t163\t1024\t4\t94\t-1\t\n5\t1\t32\t1\t1\t1\t163\t1024\t4\t94\t95.000000\t \n2\t1\t33\t0\t0\t0\t195\t1024\t5\t95\t-1\t\n3\t1\t33\t1\t0\t0\t195\t1024\t5\t95\t-1\t\n4\t1\t33\t1\t1\t0\t195\t1024\t5\t95\t-1\t\n5\t1\t33\t1\t1\t1\t195\t1024\t5\t95\t95.000000\t \n2\t1\t34\t0\t0\t0\t227\t1025\t5\t94\t-1\t\n3\t1\t34\t1\t0\t0\t227\t1025\t5\t94\t-1\t\n4\t1\t34\t1\t1\t0\t227\t1025\t5\t94\t-1\t\n5\t1\t34\t1\t1\t1\t227\t1025\t5\t94\t95.000000\t \n2\t1\t35\t0\t0\t0\t259\t1026\t5\t94\t-1\t\n3\t1\t35\t1\t0\t0\t259\t1026\t5\t94\t-1\t\n4\t1\t35\t1\t1\t0\t259\t1026\t5\t94\t-1\t\n5\t1\t35\t1\t1\t1\t259\t1026\t5\t94\t95.000000\t \n2\t1\t36\t0\t0\t0\t292\t1026\t4\t95\t-1\t\n3\t1\t36\t1\t0\t0\t292\t1026\t4\t95\t-1\t\n4\t1\t36\t1\t1\t0\t292\t1026\t4\t95\t-1\t\n5\t1\t36\t1\t1\t1\t292\t1026\t4\t95\t95.000000\t \n2\t1\t37\t0\t0\t0\t324\t1027\t5\t95\t-1\t\n3\t1\t37\t1\t0\t0\t324\t1027\t5\t95\t-1\t\n4\t1\t37\t1\t1\t0\t324\t1027\t5\t95\t-1\t\n5\t1\t37\t1\t1\t1\t324\t1027\t5\t95\t95.000000\t \n2\t1\t38\t0\t0\t0\t356\t1028\t5\t95\t-1\t\n3\t1\t38\t1\t0\t0\t356\t1028\t5\t95\t-1\t\n4\t1\t38\t1\t1\t0\t356\t1028\t5\t95\t-1\t\n5\t1\t38\t1\t1\t1\t356\t1028\t5\t95\t95.000000\t \n2\t1\t39\t0\t0\t0\t389\t1029\t4\t95\t-1\t\n3\t1\t39\t1\t0\t0\t389\t1029\t4\t95\t-1\t\n4\t1\t39\t1\t1\t0\t389\t1029\t4\t95\t-1\t\n5\t1\t39\t1\t1\t1\t389\t1029\t4\t95\t95.000000\t \n2\t1\t40\t0\t0\t0\t421\t1029\t5\t95\t-1\t\n3\t1\t40\t1\t0\t0\t421\t1029\t5\t95\t-1\t\n4\t1\t40\t1\t1\t0\t421\t1029\t5\t95\t-1\t\n5\t1\t40\t1\t1\t1\t421\t1029\t5\t95\t95.000000\t \n2\t1\t41\t0\t0\t0\t454\t1030\t5\t95\t-1\t\n3\t1\t41\t1\t0\t0\t454\t1030\t5\t95\t-1\t\n4\t1\t41\t1\t1\t0\t454\t1030\t5\t95\t-1\t\n5\t1\t41\t1\t1\t1\t454\t1030\t5\t95\t95.000000\t \n2\t1\t42\t0\t0\t0\t486\t1030\t5\t95\t-1\t\n3\t1\t42\t1\t0\t0\t486\t1030\t5\t95\t-1\t\n4\t1\t42\t1\t1\t0\t486\t1030\t5\t95\t-1\t\n5\t1\t42\t1\t1\t1\t486\t1030\t5\t95\t95.000000\t \n2\t1\t43\t0\t0\t0\t519\t1031\t5\t94\t-1\t\n3\t1\t43\t1\t0\t0\t519\t1031\t5\t94\t-1\t\n4\t1\t43\t1\t1\t0\t519\t1031\t5\t94\t-1\t\n5\t1\t43\t1\t1\t1\t519\t1031\t5\t94\t95.000000\t \n2\t1\t44\t0\t0\t0\t551\t1031\t5\t95\t-1\t\n3\t1\t44\t1\t0\t0\t551\t1031\t5\t95\t-1\t\n4\t1\t44\t1\t1\t0\t551\t1031\t5\t95\t-1\t\n5\t1\t44\t1\t1\t1\t551\t1031\t5\t95\t95.000000\t \n2\t1\t45\t0\t0\t0\t584\t1031\t5\t95\t-1\t\n3\t1\t45\t1\t0\t0\t584\t1031\t5\t95\t-1\t\n4\t1\t45\t1\t1\t0\t584\t1031\t5\t95\t-1\t\n5\t1\t45\t1\t1\t1\t584\t1031\t5\t95\t95.000000\t \n2\t1\t46\t0\t0\t0\t649\t1033\t5\t94\t-1\t\n3\t1\t46\t1\t0\t0\t649\t1033\t5\t94\t-1\t\n4\t1\t46\t1\t1\t0\t649\t1033\t5\t94\t-1\t\n5\t1\t46\t1\t1\t1\t649\t1033\t5\t94\t95.000000\t \n2\t1\t47\t0\t0\t0\t616\t1032\t5\t95\t-1\t\n3\t1\t47\t1\t0\t0\t616\t1032\t5\t95\t-1\t\n4\t1\t47\t1\t1\t0\t616\t1032\t5\t95\t-1\t\n5\t1\t47\t1\t1\t1\t616\t1032\t5\t95\t95.000000\t \n2\t1\t48\t0\t0\t0\t101\t1114\t551\t12\t-1\t\n3\t1\t48\t1\t0\t0\t101\t1114\t551\t12\t-1\t\n4\t1\t48\t1\t1\t0\t101\t1114\t551\t12\t-1\t\n5\t1\t48\t1\t1\t1\t101\t1114\t551\t12\t95.000000\t \n",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p379-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 379,
        "pdfPage": 391,
        "heading": "Exercise continued",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p382-exercise.webp",
        "width": 1061,
        "height": 1261,
        "page": 382,
        "pdfPage": 394,
        "heading": "Exercise 12.4",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p383-exercise.webp",
        "width": 1061,
        "height": 1043,
        "page": 383,
        "pdfPage": 395,
        "heading": "Exercise continued",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p386-exercise.webp",
        "width": 1061,
        "height": 281,
        "page": 386,
        "pdfPage": 398,
        "heading": "Exercise 12.5",
        "book": "cambridge"
      }
    ],
    "homework": [
      {
        "image": "assets/textbook/oxford-p207.webp",
        "width": 1072,
        "height": 1549,
        "page": 207,
        "pdfPage": 209,
        "heading": "Exam Success — selected questions",
        "book": "oxford"
      }
    ],
    "examples": [],
    "practiceAssignment": "Scheme of work: pages 378-379 Ex 12.3 Qu 1-5  pages 382-383 Ex 12.4  page 386 Ex 12.5\nStart with the first questions, then work towards applications and reasoning. Show clear working.",
    "homeworkAssignment": "Complete the questions matching this lesson on the pages below. Show working and explain any conclusions in context."
  },
  "18.4": {
    "schemeReference": "",
    "supportingSelection": true,
    "practice": [
      {
        "image": "assets/textbook/cambridge-p378-exercise.webp",
        "width": 1061,
        "height": 491,
        "page": 378,
        "pdfPage": 390,
        "heading": "* Median — Ifthe number of data values ism and is odd, then +\n5\t1\t21\t1\t1\t15\t573\t757\t32\t42\t58.071716\tgives\n5\t1\t21\t1\t1\t16\t611\t757\t19\t42\t58.071716\tthe\n2\t1\t22\t0\t0\t0\t185\t796\t423\t38\t-1\t\n3\t1\t22\t1\t0\t0\t185\t796\t423\t38\t-1\t\n4\t1\t22\t1\t1\t0\t185\t796\t423\t20\t-1\t\n5\t1\t22\t1\t1\t1\t185\t796\t54\t16\t85.002853\tposition\n5\t1\t22\t1\t1\t2\t244\t797\t15\t13\t96.002380\tof\n5\t1\t22\t1\t1\t3\t263\t797\t21\t13\t96.002380\tthe\n5\t1\t22\t1\t1\t4\t288\t798\t53\t12\t87.457794\tmedian,\n5\t1\t22\t1\t1\t5\t346\t798\t28\t13\t96.047081\tAdd\n5\t1\t22\t1\t1\t6\t379\t798\t21\t13\t96.898514\tthe\n5\t1\t22\t1\t1\t7\t404\t799\t75\t16\t96.731552\tfrequencies\n5\t1\t22\t1\t1\t8\t483\t800\t31\t13\t96.881714\tuntil\n5\t1\t22\t1\t1\t9\t518\t804\t24\t12\t94.611656\tyou\n5\t1\t22\t1\t1\t10\t547\t801\t36\t13\t93.007484\treach\n5\t1\t22\t1\t1\t11\t588\t802\t20\t12\t96.367195\tthe\n4\t1\t22\t1\t2\t0\t185\t816\t382\t18\t-1\t\n5\t1\t22\t1\t2\t1\t185\t816\t49\t12\t93.175804\tmedian\n5\t1\t22\t1\t2\t2\t239\t816\t57\t16\t93.202393\tposition,\n5\t1\t22\t1\t2\t3\t301\t817\t26\t13\t96.311714\tThe\n5\t1\t22\t1\t2\t4\t331\t817\t35\t13\t95.698647\tvalue\n5\t1\t22\t1\t2\t5\t371\t817\t12\t13\t96.907341\tin\n5\t1\t22\t1\t2\t6\t388\t818\t23\t13\t96.412376\tthis\n5\t1\t22\t1\t2\t7\t416\t818\t54\t16\t96.912483\tposition\n5\t1\t22\t1\t2\t8\t475\t819\t9\t13\t93.488190\tis\n5\t1\t22\t1\t2\t9\t489\t819\t21\t13\t96.299065\tthe\n5\t1\t22\t1\t2\t10\t514\t820\t53\t13\t80.501427\tmedian.\n2\t1\t23\t0\t0\t0\t163\t843\t468\t28\t-1\t\n3\t1\t23\t1\t0\t0\t163\t843\t468\t28\t-1\t\n4\t1\t23\t1\t1\t0\t163\t843\t468\t28\t-1\t\n5\t1\t23\t1\t1\t1\t163\t852\t9\t3\t81.449837\t~\n5\t1\t23\t1\t1\t2\t185\t847\t12\t13\t68.700638\tIf\n5\t1\t23\t1\t1\t3\t201\t847\t60\t16\t68.700638\tniseven,\n5\t1\t23\t1\t1\t4\t266\t848\t28\t13\t96.841217\tthen\n5\t1\t23\t1\t1\t5\t300\t839\t3\t36\t83.352066\t5\n5\t1\t23\t1\t1\t6\t312\t849\t32\t16\t96.000046\tgives\n5\t1\t23\t1\t1\t7\t349\t849\t20\t13\t96.985214\tthe\n5\t1\t23\t1\t1\t8\t373\t850\t55\t16\t96.971901\tposition\n5\t1\t23\t1\t1\t9\t432\t850\t16\t13\t96.861786\tof\n5\t1\t23\t1\t1\t10\t452\t851\t21\t13\t96.876106\tthe\n5\t1\t23\t1\t1\t11\t477\t851\t25\t13\t80.071602\tfirst\n5\t1\t23\t1\t1\t12\t507\t851\t15\t13\t96.946480\tof\n5\t1\t23\t1\t1\t13\t526\t852\t21\t13\t96.902260\tthe\n5\t1\t23\t1\t1\t14\t551\t852\t46\t14\t94.624512\tmiddle\n5\t1\t23\t1\t1\t15\t601\t853\t30\t16\t93.602470\tpair.\n2\t1\t24\t0\t0\t0\t184\t876\t443\t36\t-1\t\n3\t1\t24\t1\t0\t0\t184\t876\t443\t36\t-1\t\n4\t1\t24\t1\t1\t0\t184\t876\t443\t20\t-1\t\n5\t1\t24\t1\t1\t1\t184\t876\t29\t13\t89.838242\tAdd\n5\t1\t24\t1\t1\t2\t218\t876\t20\t13\t96.892876\tthe\n5\t1\t24\t1\t1\t3\t242\t876\t75\t17\t95.613159\tfrequencies\n5\t1\t24\t1\t1\t4\t321\t878\t31\t13\t96.870346\tuntil\n5\t1\t24\t1\t1\t5\t356\t882\t25\t12\t96.943192\tyou\n5\t1\t24\t1\t1\t6\t385\t879\t36\t13\t96.930740\treach\n5\t1\t24\t1\t1\t7\t426\t879\t24\t13\t96.988144\tthis\n5\t1\t24\t1\t1\t8\t454\t880\t54\t16\t96.498154\tposition\n5\t1\t24\t1\t1\t9\t513\t881\t24\t13\t96.944611\tand\n5\t1\t24\t1\t1\t10\t542\t881\t29\t13\t96.944611\tthen\n5\t1\t24\t1\t1\t11\t576\t881\t26\t14\t96.883522\tfind\n5\t1\t24\t1\t1\t12\t607\t882\t20\t13\t96.910835\tthe\n4\t1\t24\t1\t2\t0\t184\t895\t113\t17\t-1\t\n5\t1\t24\t1\t2\t1\t184\t899\t36\t9\t92.962784\tmean\n5\t1\t24\t1\t2\t2\t224\t895\t16\t13\t95.073143\tof\n5\t1\t24\t1\t2\t3\t244\t896\t20\t13\t96.799660\tthe\n5\t1\t24\t1\t2\t4\t269\t896\t28\t16\t95.370605\tpair.\n2\t1\t25\t0\t0\t0\t73\t935\t539\t85\t-1\t\n3\t1\t25\t1\t0\t0\t73\t935\t539\t85\t-1\t\n4\t1\t25\t1\t1\t0\t73\t935\t157\t25\t-1\t\n5\t1\t25\t1\t1\t1\t73\t935\t98\t24\t96.771660\tExercise\n5\t1\t25\t1\t1\t2\t181\t937\t49\t23\t96.688614\t12.3\n4\t1\t25\t1\t2\t0\t73\t971\t455\t23\t-1\t\n5\t1\t25\t1\t2\t1\t73\t971\t6\t13\t55.395386\t1\n5\t1\t25\t1\t2\t2\t101\t972\t66\t14\t90.936859\tConstruct\n5\t1\t25\t1\t2\t3\t171\t977\t8\t9\t94.307114\ta\n5\t1\t25\t1\t2\t4\t184\t973\t65\t18\t91.321312\tfrequency\n5\t1\t25\t1\t2\t5\t253\t975\t31\t13\t96.736351\ttable\n5\t1\t25\t1\t2\t6\t289\t975\t19\t14\t88.088982\tfor\n5\t1\t25\t1\t2\t7\t312\t976\t21\t13\t88.088982\tthe\n5\t1\t25\t1\t2\t8\t337\t976\t62\t18\t93.743828\tfollowing\n5\t1\t25\t1\t2\t9\t403\t978\t29\t13\t96.317154\tdata\n5\t1\t25\t1\t2\t10\t436\t978\t25\t14\t96.860550\tand\n5\t1\t25\t1\t2\t11\t466\t979\t62\t14\t96.344116\tcalculate:\n4\t1\t25\t1\t3\t0\t102\t997\t510\t23\t-1\t\n5\t1\t25\t1\t3\t1\t102\t999\t9\t10\t36.632156\t@\n5\t1\t25\t1\t3\t2\t124\t993\t29\t24\t36.632156\tthe\n5\t1\t25\t1\t3\t3\t162\t993\t34\t24\t91.921379\tmean\n5\t1\t25\t1\t3\t4\t249\t998\t10\t14\t76.896431\tb\n5\t1\t25\t1\t3\t5\t279\t1000\t73\t14\t74.561119\tthemedian\n5\t1\t25\t1\t3\t6\t382\t1005\t8\t10\t68.709045\t¢\n5\t1\t25\t1\t3\t7\t413\t1002\t21\t13\t65.402618\tthe\n5\t1\t25\t1\t3\t8\t438\t1003\t42\t13\t71.746490\tmode:\n5\t1\t25\t1\t3\t9\t517\t1003\t11\t14\t3.381271\td_\n5\t1\t25\t1\t3\t10\t548\t1004\t21\t13\t94.696877\tthe\n5\t1\t25\t1\t3\t11\t573\t1008\t39\t12\t92.367592\trange.\n2\t1\t26\t0\t0\t0\t101\t1022\t552\t11\t-1\t\n3\t1\t26\t1\t0\t0\t101\t1022\t552\t11\t-1\t\n4\t1\t26\t1\t1\t0\t101\t1022\t552\t11\t-1\t\n5\t1\t26\t1\t1\t1\t101\t1022\t552\t11\t95.000000\t \n2\t1\t27\t0\t0\t0\t113\t1033\t526\t84\t-1\t\n3\t1\t27\t1\t0\t0\t113\t1033\t526\t84\t-1\t\n4\t1\t27\t1\t1\t0\t114\t1033\t524\t22\t-1\t\n5\t1\t27\t1\t1\t1\t114\t1033\t39\t13\t27.524101\t314\n5\t1\t27\t1\t1\t2\t178\t1035\t364\t19\t7.582886\t5]1}2}eloloels{sl2fileola\n5\t1\t27\t1\t1\t3\t567\t1042\t7\t13\t34.774773\til\n5\t1\t27\t1\t1\t4\t599\t1042\t8\t13\t19.711151\t8\n5\t1\t27\t1\t1\t5\t633\t1043\t5\t12\t47.126236\tWe\n4\t1\t27\t1\t2\t0\t115\t1064\t524\t23\t-1\t\n5\t1\t27\t1\t2\t1\t115\t1064\t38\t13\t0.000000\tTTS)\n5\t1\t27\t1\t2\t2\t178\t1065\t7\t13\t0.000000\t5}\n5\t1\t27\t1\t2\t3\t209\t1066\t235\t18\t0.000000\t2;3]/4}sl7}elala\n5\t1\t27\t1\t2\t4\t468\t1072\t106\t13\t0.000000\t2;5/1/9\n5\t1\t27\t1\t2\t5\t598\t1074\t41\t13\t1.233688\t1415\n4\t1\t27\t1\t3\t0\t113\t1094\t493\t23\t-1\t\n5\t1\t27\t1\t3\t1\t113\t1094\t298\t20\t0.000000\t6{7/8]9}2/1}slala]a\n5\t1\t27\t1\t3\t2\t435\t1102\t171\t15\t42.371506\t5/6/1/4/4/8\n2\t1\t28\t0\t0\t0\t101\t1052\t552\t13\t-1\t\n3\t1\t28\t1\t0\t0\t101\t1052\t552\t13\t-1\t\n4\t1\t28\t1\t1\t0\t101\t1052\t552\t13\t-1\t\n5\t1\t28\t1\t1\t1\t101\t1052\t552\t13\t95.000000\t \n2\t1\t29\t0\t0\t0\t101\t1082\t551\t12\t-1\t\n3\t1\t29\t1\t0\t0\t101\t1082\t551\t12\t-1\t\n4\t1\t29\t1\t1\t0\t101\t1082\t551\t12\t-1\t\n5\t1\t29\t1\t1\t1\t101\t1082\t551\t12\t95.000000\t \n2\t1\t30\t0\t0\t0\t99\t1022\t5\t94\t-1\t\n3\t1\t30\t1\t0\t0\t99\t1022\t5\t94\t-1\t\n4\t1\t30\t1\t1\t0\t99\t1022\t5\t94\t-1\t\n5\t1\t30\t1\t1\t1\t99\t1022\t5\t94\t95.000000\t \n2\t1\t31\t0\t0\t0\t131\t1023\t5\t94\t-1\t\n3\t1\t31\t1\t0\t0\t131\t1023\t5\t94\t-1\t\n4\t1\t31\t1\t1\t0\t131\t1023\t5\t94\t-1\t\n5\t1\t31\t1\t1\t1\t131\t1023\t5\t94\t95.000000\t \n2\t1\t32\t0\t0\t0\t163\t1024\t4\t94\t-1\t\n3\t1\t32\t1\t0\t0\t163\t1024\t4\t94\t-1\t\n4\t1\t32\t1\t1\t0\t163\t1024\t4\t94\t-1\t\n5\t1\t32\t1\t1\t1\t163\t1024\t4\t94\t95.000000\t \n2\t1\t33\t0\t0\t0\t195\t1024\t5\t95\t-1\t\n3\t1\t33\t1\t0\t0\t195\t1024\t5\t95\t-1\t\n4\t1\t33\t1\t1\t0\t195\t1024\t5\t95\t-1\t\n5\t1\t33\t1\t1\t1\t195\t1024\t5\t95\t95.000000\t \n2\t1\t34\t0\t0\t0\t227\t1025\t5\t94\t-1\t\n3\t1\t34\t1\t0\t0\t227\t1025\t5\t94\t-1\t\n4\t1\t34\t1\t1\t0\t227\t1025\t5\t94\t-1\t\n5\t1\t34\t1\t1\t1\t227\t1025\t5\t94\t95.000000\t \n2\t1\t35\t0\t0\t0\t259\t1026\t5\t94\t-1\t\n3\t1\t35\t1\t0\t0\t259\t1026\t5\t94\t-1\t\n4\t1\t35\t1\t1\t0\t259\t1026\t5\t94\t-1\t\n5\t1\t35\t1\t1\t1\t259\t1026\t5\t94\t95.000000\t \n2\t1\t36\t0\t0\t0\t292\t1026\t4\t95\t-1\t\n3\t1\t36\t1\t0\t0\t292\t1026\t4\t95\t-1\t\n4\t1\t36\t1\t1\t0\t292\t1026\t4\t95\t-1\t\n5\t1\t36\t1\t1\t1\t292\t1026\t4\t95\t95.000000\t \n2\t1\t37\t0\t0\t0\t324\t1027\t5\t95\t-1\t\n3\t1\t37\t1\t0\t0\t324\t1027\t5\t95\t-1\t\n4\t1\t37\t1\t1\t0\t324\t1027\t5\t95\t-1\t\n5\t1\t37\t1\t1\t1\t324\t1027\t5\t95\t95.000000\t \n2\t1\t38\t0\t0\t0\t356\t1028\t5\t95\t-1\t\n3\t1\t38\t1\t0\t0\t356\t1028\t5\t95\t-1\t\n4\t1\t38\t1\t1\t0\t356\t1028\t5\t95\t-1\t\n5\t1\t38\t1\t1\t1\t356\t1028\t5\t95\t95.000000\t \n2\t1\t39\t0\t0\t0\t389\t1029\t4\t95\t-1\t\n3\t1\t39\t1\t0\t0\t389\t1029\t4\t95\t-1\t\n4\t1\t39\t1\t1\t0\t389\t1029\t4\t95\t-1\t\n5\t1\t39\t1\t1\t1\t389\t1029\t4\t95\t95.000000\t \n2\t1\t40\t0\t0\t0\t421\t1029\t5\t95\t-1\t\n3\t1\t40\t1\t0\t0\t421\t1029\t5\t95\t-1\t\n4\t1\t40\t1\t1\t0\t421\t1029\t5\t95\t-1\t\n5\t1\t40\t1\t1\t1\t421\t1029\t5\t95\t95.000000\t \n2\t1\t41\t0\t0\t0\t454\t1030\t5\t95\t-1\t\n3\t1\t41\t1\t0\t0\t454\t1030\t5\t95\t-1\t\n4\t1\t41\t1\t1\t0\t454\t1030\t5\t95\t-1\t\n5\t1\t41\t1\t1\t1\t454\t1030\t5\t95\t95.000000\t \n2\t1\t42\t0\t0\t0\t486\t1030\t5\t95\t-1\t\n3\t1\t42\t1\t0\t0\t486\t1030\t5\t95\t-1\t\n4\t1\t42\t1\t1\t0\t486\t1030\t5\t95\t-1\t\n5\t1\t42\t1\t1\t1\t486\t1030\t5\t95\t95.000000\t \n2\t1\t43\t0\t0\t0\t519\t1031\t5\t94\t-1\t\n3\t1\t43\t1\t0\t0\t519\t1031\t5\t94\t-1\t\n4\t1\t43\t1\t1\t0\t519\t1031\t5\t94\t-1\t\n5\t1\t43\t1\t1\t1\t519\t1031\t5\t94\t95.000000\t \n2\t1\t44\t0\t0\t0\t551\t1031\t5\t95\t-1\t\n3\t1\t44\t1\t0\t0\t551\t1031\t5\t95\t-1\t\n4\t1\t44\t1\t1\t0\t551\t1031\t5\t95\t-1\t\n5\t1\t44\t1\t1\t1\t551\t1031\t5\t95\t95.000000\t \n2\t1\t45\t0\t0\t0\t584\t1031\t5\t95\t-1\t\n3\t1\t45\t1\t0\t0\t584\t1031\t5\t95\t-1\t\n4\t1\t45\t1\t1\t0\t584\t1031\t5\t95\t-1\t\n5\t1\t45\t1\t1\t1\t584\t1031\t5\t95\t95.000000\t \n2\t1\t46\t0\t0\t0\t649\t1033\t5\t94\t-1\t\n3\t1\t46\t1\t0\t0\t649\t1033\t5\t94\t-1\t\n4\t1\t46\t1\t1\t0\t649\t1033\t5\t94\t-1\t\n5\t1\t46\t1\t1\t1\t649\t1033\t5\t94\t95.000000\t \n2\t1\t47\t0\t0\t0\t616\t1032\t5\t95\t-1\t\n3\t1\t47\t1\t0\t0\t616\t1032\t5\t95\t-1\t\n4\t1\t47\t1\t1\t0\t616\t1032\t5\t95\t-1\t\n5\t1\t47\t1\t1\t1\t616\t1032\t5\t95\t95.000000\t \n2\t1\t48\t0\t0\t0\t101\t1114\t551\t12\t-1\t\n3\t1\t48\t1\t0\t0\t101\t1114\t551\t12\t-1\t\n4\t1\t48\t1\t1\t0\t101\t1114\t551\t12\t-1\t\n5\t1\t48\t1\t1\t1\t101\t1114\t551\t12\t95.000000\t \n",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p382-exercise.webp",
        "width": 1061,
        "height": 1261,
        "page": 382,
        "pdfPage": 394,
        "heading": "Exercise 12.4",
        "book": "cambridge"
      }
    ],
    "homework": [
      {
        "image": "assets/textbook/oxford-p207.webp",
        "width": 1072,
        "height": 1549,
        "page": 207,
        "pdfPage": 209,
        "heading": "Exam Success — selected questions",
        "book": "oxford"
      }
    ],
    "examples": [],
    "practiceAssignment": "Supporting exercise selection. Start with the first questions, then work towards applications and reasoning. Show clear working.",
    "homeworkAssignment": "Complete the questions matching this lesson on the pages below. Show working and explain any conclusions in context."
  },
  "18.5": {
    "schemeReference": "pages 373-374\nEx 12.2",
    "supportingSelection": false,
    "practice": [
      {
        "image": "assets/textbook/cambridge-p373-exercise.webp",
        "width": 1061,
        "height": 890,
        "page": 373,
        "pdfPage": 385,
        "heading": "Exercise 12.2",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p374-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 374,
        "pdfPage": 386,
        "heading": "Exercise continued",
        "book": "cambridge"
      }
    ],
    "homework": [
      {
        "image": "assets/textbook/oxford-p203.webp",
        "width": 1072,
        "height": 1549,
        "page": 203,
        "pdfPage": 205,
        "heading": "Exam Success — selected questions",
        "book": "oxford"
      }
    ],
    "examples": [],
    "practiceAssignment": "Scheme of work: pages 373-374 Ex 12.2\nStart with the first questions, then work towards applications and reasoning. Show clear working.",
    "homeworkAssignment": "Complete the questions matching this lesson on the pages below. Show working and explain any conclusions in context."
  },
  "18.6": {
    "schemeReference": "",
    "supportingSelection": true,
    "practice": [
      {
        "image": "assets/textbook/cambridge-p385-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 385,
        "pdfPage": 397,
        "heading": "Exercise continued",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p386-exercise.webp",
        "width": 1061,
        "height": 281,
        "page": 386,
        "pdfPage": 398,
        "heading": "Exercise 12.5",
        "book": "cambridge"
      }
    ],
    "homework": [
      {
        "image": "assets/textbook/oxford-p207.webp",
        "width": 1072,
        "height": 1549,
        "page": 207,
        "pdfPage": 209,
        "heading": "Exam Success — selected questions",
        "book": "oxford"
      }
    ],
    "examples": [
      {
        "prompt": "Coursebook worked example — page 385",
        "source": "Morrison & Hamshaw, Cambridge IGCSE Mathematics (2023), p. 385",
        "sourceQuestion": {
          "image": "assets/textbook/cambridge-p385-example1-question.webp",
          "width": 754,
          "height": 203
        },
        "steps": [
          "Allbright has a higher median (98 cm versus 95 cm), but also a larger IQR (13 cm versus 4 cm), so its middle half of heights is more spread out.",
          "Barstows is more consistent. Choosing it is defensible if a dependable height is the priority.",
          "The median and IQR alone do not determine which company is more likely to produce the tallest individual flower; information about the upper tail would be needed."
        ],
        "sourcePage": 385,
        "sourcePdfPage": 397
      }
    ],
    "practiceAssignment": "Supporting exercise selection. Start with the first questions, then work towards applications and reasoning. Show clear working.",
    "homeworkAssignment": "Complete the questions matching this lesson on the pages below. Show working and explain any conclusions in context."
  },
  "18.7": {
    "schemeReference": "",
    "supportingSelection": true,
    "practice": [
      {
        "image": "assets/textbook/cambridge-p373-exercise.webp",
        "width": 1061,
        "height": 890,
        "page": 373,
        "pdfPage": 385,
        "heading": "Exercise 12.2",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p374-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 374,
        "pdfPage": 386,
        "heading": "Exercise continued",
        "book": "cambridge"
      }
    ],
    "homework": [
      {
        "image": "assets/textbook/oxford-p213.webp",
        "width": 1072,
        "height": 1549,
        "page": 213,
        "pdfPage": 215,
        "heading": "Exam Success — selected questions",
        "book": "oxford"
      }
    ],
    "examples": [],
    "practiceAssignment": "Supporting exercise selection. Start with the first questions, then work towards applications and reasoning. Show clear working.",
    "homeworkAssignment": "Use the scatter diagram on page 213 to discuss why correlation alone cannot establish causation. Explain which conclusions the sample does and does not support."
  },
  "19.1": {
    "schemeReference": "stem and leaf\npage 120\nEx 4.4\n\npictograms\npages 126-127 \nEx 4.7\n\nbar charts\npages 131-132\nEx 4.8\n\npie charts\npages 135-136\nEx 4.9\n\nline graphs\npages 138-139\nEx 4.10",
    "supportingSelection": false,
    "practice": [
      {
        "image": "assets/textbook/cambridge-p120-exercise.webp",
        "width": 1061,
        "height": 1276,
        "page": 120,
        "pdfPage": 132,
        "heading": "Exercise 4.4",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p126-exercise.webp",
        "width": 1061,
        "height": 840,
        "page": 126,
        "pdfPage": 138,
        "heading": "Exercise 4.7",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p127-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 127,
        "pdfPage": 139,
        "heading": "Exercise continued",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p131-exercise.webp",
        "width": 1061,
        "height": 1169,
        "page": 131,
        "pdfPage": 143,
        "heading": "Exercise 4.8",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p132-exercise.webp",
        "width": 1061,
        "height": 132,
        "page": 132,
        "pdfPage": 144,
        "heading": "2 Use your checklist to assess another student's completed work in Exercise 4.8.",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p135-exercise.webp",
        "width": 1061,
        "height": 472,
        "page": 135,
        "pdfPage": 147,
        "heading": "Exercise 4.9",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p136-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 136,
        "pdfPage": 148,
        "heading": "Exercise continued",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p138-exercise.webp",
        "width": 1061,
        "height": 730,
        "page": 138,
        "pdfPage": 150,
        "heading": "Exercise 4.10",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p139-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 139,
        "pdfPage": 151,
        "heading": "Exercise continued",
        "book": "cambridge"
      }
    ],
    "homework": [
      {
        "image": "assets/textbook/oxford-p203.webp",
        "width": 1072,
        "height": 1549,
        "page": 203,
        "pdfPage": 205,
        "heading": "Exam Success — selected questions",
        "book": "oxford"
      }
    ],
    "examples": [
      {
        "prompt": "The table shows how a student spent one day. Draw a pie chart to represent the data.",
        "source": "Morrison & Hamshaw, Cambridge IGCSE Mathematics (2023), p. 134",
        "steps": [
          "Total time: [[7+8+1.5+3+2.5+2=24]] hours.",
          "A full circle represents 24 hours, so each hour represents [[360^\\circ\\div24=15^\\circ]].",
          "Sector angles: school [[105^\\circ]], sleeping [[120^\\circ]], eating [[22.5^\\circ]], online [[45^\\circ]], on the phone [[37.5^\\circ]], complaining [[30^\\circ]].",
          "Check: the angles total [[360^\\circ]]. Draw a circle and use a protractor to mark each sector. Label every sector."
        ],
        "sourcePage": 134,
        "sourcePdfPage": 146,
        "verifiedDiagram": {
          "kind": "table",
          "headers": [
            "Activity",
            "Hours"
          ],
          "rows": [
            [
              "School",
              7
            ],
            [
              "Sleeping",
              8
            ],
            [
              "Eating",
              1.5
            ],
            [
              "Online",
              3
            ],
            [
              "On the phone",
              2.5
            ],
            [
              "Complaining",
              2
            ]
          ]
        }
      },
      {
        "prompt": "Coursebook worked example — page 135",
        "source": "Morrison & Hamshaw, Cambridge IGCSE Mathematics (2023), p. 135",
        "sourceQuestion": {
          "image": "assets/textbook/cambridge-p135-example1-question.webp",
          "width": 754,
          "height": 446
        },
        "steps": [
          "(a) The computer-games sector is [[120^\\circ]], so the fraction is [[\\frac{120}{360}=\\frac13]].",
          "(b) Sleeping occupies [[210^\\circ]], so the time is [[\\frac{210}{360}\\times24=14]] hours."
        ],
        "sourcePage": 135,
        "sourcePdfPage": 147
      }
    ],
    "practiceAssignment": "Scheme of work: stem and leaf page 120 Ex 4.4  pictograms pages 126-127  Ex 4.7  bar charts pages 131-132 Ex 4.8  pie charts pages 135-136 Ex 4.9  line graphs pages 138-139 Ex 4.10\nStart with the first questions, then work towards applications and reasoning. Show clear working.",
    "homeworkAssignment": "Page 203: Questions 1–3."
  },
  "19.2": {
    "schemeReference": "pages 537-540\nEx 16.1",
    "supportingSelection": false,
    "practice": [
      {
        "image": "assets/textbook/cambridge-p537-exercise.webp",
        "width": 1061,
        "height": 530,
        "page": 537,
        "pdfPage": 549,
        "heading": "Exercise 16.1",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p538-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 538,
        "pdfPage": 550,
        "heading": "Exercise continued",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p539-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 539,
        "pdfPage": 551,
        "heading": "Exercise continued",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p540-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 540,
        "pdfPage": 552,
        "heading": "Exercise continued",
        "book": "cambridge"
      }
    ],
    "homework": [
      {
        "image": "assets/textbook/oxford-p213.webp",
        "width": 1072,
        "height": 1549,
        "page": 213,
        "pdfPage": 215,
        "heading": "Exam Success — selected questions",
        "book": "oxford"
      }
    ],
    "examples": [],
    "practiceAssignment": "Scheme of work: pages 537-540 Ex 16.1\nStart with the first questions, then work towards applications and reasoning. Show clear working.",
    "homeworkAssignment": "Complete the questions matching this lesson on the pages below. Show working and explain any conclusions in context."
  },
  "19.3": {
    "schemeReference": "",
    "supportingSelection": true,
    "practice": [
      {
        "image": "assets/textbook/cambridge-p537-exercise.webp",
        "width": 1061,
        "height": 530,
        "page": 537,
        "pdfPage": 549,
        "heading": "Exercise 16.1",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p538-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 538,
        "pdfPage": 550,
        "heading": "Exercise continued",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p539-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 539,
        "pdfPage": 551,
        "heading": "Exercise continued",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p540-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 540,
        "pdfPage": 552,
        "heading": "Exercise continued",
        "book": "cambridge"
      }
    ],
    "homework": [
      {
        "image": "assets/textbook/oxford-p213.webp",
        "width": 1072,
        "height": 1549,
        "page": 213,
        "pdfPage": 215,
        "heading": "Exam Success — selected questions",
        "book": "oxford"
      }
    ],
    "examples": [],
    "practiceAssignment": "Supporting exercise selection. Start with the first questions, then work towards applications and reasoning. Show clear working.",
    "homeworkAssignment": "Complete the questions matching this lesson on the pages below. Show working and explain any conclusions in context."
  },
  "19.4": {
    "schemeReference": "",
    "supportingSelection": true,
    "practice": [
      {
        "image": "assets/textbook/cambridge-p537-exercise.webp",
        "width": 1061,
        "height": 530,
        "page": 537,
        "pdfPage": 549,
        "heading": "Exercise 16.1",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p538-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 538,
        "pdfPage": 550,
        "heading": "Exercise continued",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p539-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 539,
        "pdfPage": 551,
        "heading": "Exercise continued",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p540-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 540,
        "pdfPage": 552,
        "heading": "Exercise continued",
        "book": "cambridge"
      }
    ],
    "homework": [
      {
        "image": "assets/textbook/oxford-p213.webp",
        "width": 1072,
        "height": 1549,
        "page": 213,
        "pdfPage": 215,
        "heading": "Exam Success — selected questions",
        "book": "oxford"
      }
    ],
    "examples": [],
    "practiceAssignment": "Supporting exercise selection. Start with the first questions, then work towards applications and reasoning. Show clear working.",
    "homeworkAssignment": "Complete the questions matching this lesson on the pages below. Show working and explain any conclusions in context."
  },
  "19.5": {
    "schemeReference": "pages 686-687\nEx 20.2\n\npages 690-692\nEx 20.3",
    "supportingSelection": false,
    "practice": [
      {
        "image": "assets/textbook/cambridge-p686-exercise.webp",
        "width": 1061,
        "height": 1267,
        "page": 686,
        "pdfPage": 695,
        "heading": "Exercise 20.2",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p687-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 687,
        "pdfPage": 696,
        "heading": "Exercise continued",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p690-exercise.webp",
        "width": 1061,
        "height": 517,
        "page": 690,
        "pdfPage": 699,
        "heading": "Exercise 20.3",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p691-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 691,
        "pdfPage": 700,
        "heading": "Exercise continued",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p692-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 692,
        "pdfPage": 701,
        "heading": "Exercise continued",
        "book": "cambridge"
      }
    ],
    "homework": [
      {
        "image": "assets/textbook/oxford-p210.webp",
        "width": 1072,
        "height": 1549,
        "page": 210,
        "pdfPage": 212,
        "heading": "Exam Success — selected questions",
        "book": "oxford"
      }
    ],
    "examples": [
      {
        "prompt": "Coursebook worked example — page 685",
        "source": "Morrison & Hamshaw, Cambridge IGCSE Mathematics (2023), p. 685",
        "sourceQuestion": {
          "image": "assets/textbook/cambridge-p685-example1-question.webp",
          "width": 748,
          "height": 297
        },
        "sourceSolution": {
          "image": "assets/textbook/cambridge-p685-example1-solution.webp",
          "width": 748,
          "height": 949
        },
        "steps": [],
        "sourcePage": 685,
        "sourcePdfPage": 694
      }
    ],
    "practiceAssignment": "Scheme of work: pages 686-687 Ex 20.2  pages 690-692 Ex 20.3\nStart with the first questions, then work towards applications and reasoning. Show clear working.",
    "homeworkAssignment": "Complete the questions matching this lesson on the pages below. Show working and explain any conclusions in context."
  },
  "19.6": {
    "schemeReference": "",
    "supportingSelection": true,
    "practice": [
      {
        "image": "assets/textbook/cambridge-p686-exercise.webp",
        "width": 1061,
        "height": 1267,
        "page": 686,
        "pdfPage": 695,
        "heading": "Exercise 20.2",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p687-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 687,
        "pdfPage": 696,
        "heading": "Exercise continued",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p690-exercise.webp",
        "width": 1061,
        "height": 517,
        "page": 690,
        "pdfPage": 699,
        "heading": "Exercise 20.3",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p691-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 691,
        "pdfPage": 700,
        "heading": "Exercise continued",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p692-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 692,
        "pdfPage": 701,
        "heading": "Exercise continued",
        "book": "cambridge"
      }
    ],
    "homework": [
      {
        "image": "assets/textbook/oxford-p210.webp",
        "width": 1072,
        "height": 1549,
        "page": 210,
        "pdfPage": 212,
        "heading": "Exam Success — selected questions",
        "book": "oxford"
      }
    ],
    "examples": [
      {
        "prompt": "Coursebook worked example — page 684",
        "source": "Morrison & Hamshaw, Cambridge IGCSE Mathematics (2023), p. 684",
        "sourceQuestion": {
          "image": "assets/textbook/cambridge-p684-example1-question.webp",
          "width": 747,
          "height": 798
        },
        "steps": [
          "(a) Total: [[50]] students, read from the final cumulative frequency.",
          "(b) Median is the [[25]]th value; read across from cumulative frequency 25, then down: approximately [[38]] minutes.",
          "(c) At 10 minutes the cumulative frequency is approximately [[4]], so 4 students.",
          "(d) At 30 minutes the cumulative frequency is about 18, so [[50-18=32]] students took longer.",
          "(e) Between 40 and 60 minutes: [[42-28=14]] students."
        ],
        "sourcePage": 684,
        "sourcePdfPage": 693
      }
    ],
    "practiceAssignment": "Supporting exercise selection. Start with the first questions, then work towards applications and reasoning. Show clear working.",
    "homeworkAssignment": "Complete the questions matching this lesson on the pages below. Show working and explain any conclusions in context."
  },
  "19.7": {
    "schemeReference": "pages 676-679\nEx 20.1",
    "supportingSelection": false,
    "practice": [
      {
        "image": "assets/textbook/cambridge-p676-exercise.webp",
        "width": 1061,
        "height": 1111,
        "page": 676,
        "pdfPage": 685,
        "heading": "Exercise 20.1",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p677-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 677,
        "pdfPage": 686,
        "heading": "Exercise continued",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p678-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 678,
        "pdfPage": 687,
        "heading": "Exercise continued",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p679-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 679,
        "pdfPage": 688,
        "heading": "Exercise continued",
        "book": "cambridge"
      }
    ],
    "homework": [
      {
        "image": "assets/textbook/oxford-p203.webp",
        "width": 1072,
        "height": 1549,
        "page": 203,
        "pdfPage": 205,
        "heading": "Exam Success — selected questions",
        "book": "oxford"
      }
    ],
    "examples": [],
    "practiceAssignment": "Scheme of work: pages 676-679 Ex 20.1\nStart with the first questions, then work towards applications and reasoning. Show clear working.",
    "homeworkAssignment": "Page 203: Questions 4–5."
  },
  "19.8": {
    "schemeReference": "",
    "supportingSelection": true,
    "practice": [
      {
        "image": "assets/textbook/cambridge-p676-exercise.webp",
        "width": 1061,
        "height": 1111,
        "page": 676,
        "pdfPage": 685,
        "heading": "Exercise 20.1",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p677-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 677,
        "pdfPage": 686,
        "heading": "Exercise continued",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p678-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 678,
        "pdfPage": 687,
        "heading": "Exercise continued",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p679-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 679,
        "pdfPage": 688,
        "heading": "Exercise continued",
        "book": "cambridge"
      }
    ],
    "homework": [
      {
        "image": "assets/textbook/oxford-p203.webp",
        "width": 1072,
        "height": 1549,
        "page": 203,
        "pdfPage": 205,
        "heading": "Exam Success — selected questions",
        "book": "oxford"
      }
    ],
    "examples": [],
    "practiceAssignment": "Supporting exercise selection. Start with the first questions, then work towards applications and reasoning. Show clear working.",
    "homeworkAssignment": "Page 203: Questions 4–5, focusing on class width, frequency and frequency density."
  },
  "19.9": {
    "schemeReference": "stem and leaf\npages 378-379\nEx 12.3\nQu 6 and 7",
    "supportingSelection": false,
    "practice": [
      {
        "image": "assets/textbook/cambridge-p378-exercise.webp",
        "width": 1061,
        "height": 491,
        "page": 378,
        "pdfPage": 390,
        "heading": "* Median — Ifthe number of data values ism and is odd, then +\n5\t1\t21\t1\t1\t15\t573\t757\t32\t42\t58.071716\tgives\n5\t1\t21\t1\t1\t16\t611\t757\t19\t42\t58.071716\tthe\n2\t1\t22\t0\t0\t0\t185\t796\t423\t38\t-1\t\n3\t1\t22\t1\t0\t0\t185\t796\t423\t38\t-1\t\n4\t1\t22\t1\t1\t0\t185\t796\t423\t20\t-1\t\n5\t1\t22\t1\t1\t1\t185\t796\t54\t16\t85.002853\tposition\n5\t1\t22\t1\t1\t2\t244\t797\t15\t13\t96.002380\tof\n5\t1\t22\t1\t1\t3\t263\t797\t21\t13\t96.002380\tthe\n5\t1\t22\t1\t1\t4\t288\t798\t53\t12\t87.457794\tmedian,\n5\t1\t22\t1\t1\t5\t346\t798\t28\t13\t96.047081\tAdd\n5\t1\t22\t1\t1\t6\t379\t798\t21\t13\t96.898514\tthe\n5\t1\t22\t1\t1\t7\t404\t799\t75\t16\t96.731552\tfrequencies\n5\t1\t22\t1\t1\t8\t483\t800\t31\t13\t96.881714\tuntil\n5\t1\t22\t1\t1\t9\t518\t804\t24\t12\t94.611656\tyou\n5\t1\t22\t1\t1\t10\t547\t801\t36\t13\t93.007484\treach\n5\t1\t22\t1\t1\t11\t588\t802\t20\t12\t96.367195\tthe\n4\t1\t22\t1\t2\t0\t185\t816\t382\t18\t-1\t\n5\t1\t22\t1\t2\t1\t185\t816\t49\t12\t93.175804\tmedian\n5\t1\t22\t1\t2\t2\t239\t816\t57\t16\t93.202393\tposition,\n5\t1\t22\t1\t2\t3\t301\t817\t26\t13\t96.311714\tThe\n5\t1\t22\t1\t2\t4\t331\t817\t35\t13\t95.698647\tvalue\n5\t1\t22\t1\t2\t5\t371\t817\t12\t13\t96.907341\tin\n5\t1\t22\t1\t2\t6\t388\t818\t23\t13\t96.412376\tthis\n5\t1\t22\t1\t2\t7\t416\t818\t54\t16\t96.912483\tposition\n5\t1\t22\t1\t2\t8\t475\t819\t9\t13\t93.488190\tis\n5\t1\t22\t1\t2\t9\t489\t819\t21\t13\t96.299065\tthe\n5\t1\t22\t1\t2\t10\t514\t820\t53\t13\t80.501427\tmedian.\n2\t1\t23\t0\t0\t0\t163\t843\t468\t28\t-1\t\n3\t1\t23\t1\t0\t0\t163\t843\t468\t28\t-1\t\n4\t1\t23\t1\t1\t0\t163\t843\t468\t28\t-1\t\n5\t1\t23\t1\t1\t1\t163\t852\t9\t3\t81.449837\t~\n5\t1\t23\t1\t1\t2\t185\t847\t12\t13\t68.700638\tIf\n5\t1\t23\t1\t1\t3\t201\t847\t60\t16\t68.700638\tniseven,\n5\t1\t23\t1\t1\t4\t266\t848\t28\t13\t96.841217\tthen\n5\t1\t23\t1\t1\t5\t300\t839\t3\t36\t83.352066\t5\n5\t1\t23\t1\t1\t6\t312\t849\t32\t16\t96.000046\tgives\n5\t1\t23\t1\t1\t7\t349\t849\t20\t13\t96.985214\tthe\n5\t1\t23\t1\t1\t8\t373\t850\t55\t16\t96.971901\tposition\n5\t1\t23\t1\t1\t9\t432\t850\t16\t13\t96.861786\tof\n5\t1\t23\t1\t1\t10\t452\t851\t21\t13\t96.876106\tthe\n5\t1\t23\t1\t1\t11\t477\t851\t25\t13\t80.071602\tfirst\n5\t1\t23\t1\t1\t12\t507\t851\t15\t13\t96.946480\tof\n5\t1\t23\t1\t1\t13\t526\t852\t21\t13\t96.902260\tthe\n5\t1\t23\t1\t1\t14\t551\t852\t46\t14\t94.624512\tmiddle\n5\t1\t23\t1\t1\t15\t601\t853\t30\t16\t93.602470\tpair.\n2\t1\t24\t0\t0\t0\t184\t876\t443\t36\t-1\t\n3\t1\t24\t1\t0\t0\t184\t876\t443\t36\t-1\t\n4\t1\t24\t1\t1\t0\t184\t876\t443\t20\t-1\t\n5\t1\t24\t1\t1\t1\t184\t876\t29\t13\t89.838242\tAdd\n5\t1\t24\t1\t1\t2\t218\t876\t20\t13\t96.892876\tthe\n5\t1\t24\t1\t1\t3\t242\t876\t75\t17\t95.613159\tfrequencies\n5\t1\t24\t1\t1\t4\t321\t878\t31\t13\t96.870346\tuntil\n5\t1\t24\t1\t1\t5\t356\t882\t25\t12\t96.943192\tyou\n5\t1\t24\t1\t1\t6\t385\t879\t36\t13\t96.930740\treach\n5\t1\t24\t1\t1\t7\t426\t879\t24\t13\t96.988144\tthis\n5\t1\t24\t1\t1\t8\t454\t880\t54\t16\t96.498154\tposition\n5\t1\t24\t1\t1\t9\t513\t881\t24\t13\t96.944611\tand\n5\t1\t24\t1\t1\t10\t542\t881\t29\t13\t96.944611\tthen\n5\t1\t24\t1\t1\t11\t576\t881\t26\t14\t96.883522\tfind\n5\t1\t24\t1\t1\t12\t607\t882\t20\t13\t96.910835\tthe\n4\t1\t24\t1\t2\t0\t184\t895\t113\t17\t-1\t\n5\t1\t24\t1\t2\t1\t184\t899\t36\t9\t92.962784\tmean\n5\t1\t24\t1\t2\t2\t224\t895\t16\t13\t95.073143\tof\n5\t1\t24\t1\t2\t3\t244\t896\t20\t13\t96.799660\tthe\n5\t1\t24\t1\t2\t4\t269\t896\t28\t16\t95.370605\tpair.\n2\t1\t25\t0\t0\t0\t73\t935\t539\t85\t-1\t\n3\t1\t25\t1\t0\t0\t73\t935\t539\t85\t-1\t\n4\t1\t25\t1\t1\t0\t73\t935\t157\t25\t-1\t\n5\t1\t25\t1\t1\t1\t73\t935\t98\t24\t96.771660\tExercise\n5\t1\t25\t1\t1\t2\t181\t937\t49\t23\t96.688614\t12.3\n4\t1\t25\t1\t2\t0\t73\t971\t455\t23\t-1\t\n5\t1\t25\t1\t2\t1\t73\t971\t6\t13\t55.395386\t1\n5\t1\t25\t1\t2\t2\t101\t972\t66\t14\t90.936859\tConstruct\n5\t1\t25\t1\t2\t3\t171\t977\t8\t9\t94.307114\ta\n5\t1\t25\t1\t2\t4\t184\t973\t65\t18\t91.321312\tfrequency\n5\t1\t25\t1\t2\t5\t253\t975\t31\t13\t96.736351\ttable\n5\t1\t25\t1\t2\t6\t289\t975\t19\t14\t88.088982\tfor\n5\t1\t25\t1\t2\t7\t312\t976\t21\t13\t88.088982\tthe\n5\t1\t25\t1\t2\t8\t337\t976\t62\t18\t93.743828\tfollowing\n5\t1\t25\t1\t2\t9\t403\t978\t29\t13\t96.317154\tdata\n5\t1\t25\t1\t2\t10\t436\t978\t25\t14\t96.860550\tand\n5\t1\t25\t1\t2\t11\t466\t979\t62\t14\t96.344116\tcalculate:\n4\t1\t25\t1\t3\t0\t102\t997\t510\t23\t-1\t\n5\t1\t25\t1\t3\t1\t102\t999\t9\t10\t36.632156\t@\n5\t1\t25\t1\t3\t2\t124\t993\t29\t24\t36.632156\tthe\n5\t1\t25\t1\t3\t3\t162\t993\t34\t24\t91.921379\tmean\n5\t1\t25\t1\t3\t4\t249\t998\t10\t14\t76.896431\tb\n5\t1\t25\t1\t3\t5\t279\t1000\t73\t14\t74.561119\tthemedian\n5\t1\t25\t1\t3\t6\t382\t1005\t8\t10\t68.709045\t¢\n5\t1\t25\t1\t3\t7\t413\t1002\t21\t13\t65.402618\tthe\n5\t1\t25\t1\t3\t8\t438\t1003\t42\t13\t71.746490\tmode:\n5\t1\t25\t1\t3\t9\t517\t1003\t11\t14\t3.381271\td_\n5\t1\t25\t1\t3\t10\t548\t1004\t21\t13\t94.696877\tthe\n5\t1\t25\t1\t3\t11\t573\t1008\t39\t12\t92.367592\trange.\n2\t1\t26\t0\t0\t0\t101\t1022\t552\t11\t-1\t\n3\t1\t26\t1\t0\t0\t101\t1022\t552\t11\t-1\t\n4\t1\t26\t1\t1\t0\t101\t1022\t552\t11\t-1\t\n5\t1\t26\t1\t1\t1\t101\t1022\t552\t11\t95.000000\t \n2\t1\t27\t0\t0\t0\t113\t1033\t526\t84\t-1\t\n3\t1\t27\t1\t0\t0\t113\t1033\t526\t84\t-1\t\n4\t1\t27\t1\t1\t0\t114\t1033\t524\t22\t-1\t\n5\t1\t27\t1\t1\t1\t114\t1033\t39\t13\t27.524101\t314\n5\t1\t27\t1\t1\t2\t178\t1035\t364\t19\t7.582886\t5]1}2}eloloels{sl2fileola\n5\t1\t27\t1\t1\t3\t567\t1042\t7\t13\t34.774773\til\n5\t1\t27\t1\t1\t4\t599\t1042\t8\t13\t19.711151\t8\n5\t1\t27\t1\t1\t5\t633\t1043\t5\t12\t47.126236\tWe\n4\t1\t27\t1\t2\t0\t115\t1064\t524\t23\t-1\t\n5\t1\t27\t1\t2\t1\t115\t1064\t38\t13\t0.000000\tTTS)\n5\t1\t27\t1\t2\t2\t178\t1065\t7\t13\t0.000000\t5}\n5\t1\t27\t1\t2\t3\t209\t1066\t235\t18\t0.000000\t2;3]/4}sl7}elala\n5\t1\t27\t1\t2\t4\t468\t1072\t106\t13\t0.000000\t2;5/1/9\n5\t1\t27\t1\t2\t5\t598\t1074\t41\t13\t1.233688\t1415\n4\t1\t27\t1\t3\t0\t113\t1094\t493\t23\t-1\t\n5\t1\t27\t1\t3\t1\t113\t1094\t298\t20\t0.000000\t6{7/8]9}2/1}slala]a\n5\t1\t27\t1\t3\t2\t435\t1102\t171\t15\t42.371506\t5/6/1/4/4/8\n2\t1\t28\t0\t0\t0\t101\t1052\t552\t13\t-1\t\n3\t1\t28\t1\t0\t0\t101\t1052\t552\t13\t-1\t\n4\t1\t28\t1\t1\t0\t101\t1052\t552\t13\t-1\t\n5\t1\t28\t1\t1\t1\t101\t1052\t552\t13\t95.000000\t \n2\t1\t29\t0\t0\t0\t101\t1082\t551\t12\t-1\t\n3\t1\t29\t1\t0\t0\t101\t1082\t551\t12\t-1\t\n4\t1\t29\t1\t1\t0\t101\t1082\t551\t12\t-1\t\n5\t1\t29\t1\t1\t1\t101\t1082\t551\t12\t95.000000\t \n2\t1\t30\t0\t0\t0\t99\t1022\t5\t94\t-1\t\n3\t1\t30\t1\t0\t0\t99\t1022\t5\t94\t-1\t\n4\t1\t30\t1\t1\t0\t99\t1022\t5\t94\t-1\t\n5\t1\t30\t1\t1\t1\t99\t1022\t5\t94\t95.000000\t \n2\t1\t31\t0\t0\t0\t131\t1023\t5\t94\t-1\t\n3\t1\t31\t1\t0\t0\t131\t1023\t5\t94\t-1\t\n4\t1\t31\t1\t1\t0\t131\t1023\t5\t94\t-1\t\n5\t1\t31\t1\t1\t1\t131\t1023\t5\t94\t95.000000\t \n2\t1\t32\t0\t0\t0\t163\t1024\t4\t94\t-1\t\n3\t1\t32\t1\t0\t0\t163\t1024\t4\t94\t-1\t\n4\t1\t32\t1\t1\t0\t163\t1024\t4\t94\t-1\t\n5\t1\t32\t1\t1\t1\t163\t1024\t4\t94\t95.000000\t \n2\t1\t33\t0\t0\t0\t195\t1024\t5\t95\t-1\t\n3\t1\t33\t1\t0\t0\t195\t1024\t5\t95\t-1\t\n4\t1\t33\t1\t1\t0\t195\t1024\t5\t95\t-1\t\n5\t1\t33\t1\t1\t1\t195\t1024\t5\t95\t95.000000\t \n2\t1\t34\t0\t0\t0\t227\t1025\t5\t94\t-1\t\n3\t1\t34\t1\t0\t0\t227\t1025\t5\t94\t-1\t\n4\t1\t34\t1\t1\t0\t227\t1025\t5\t94\t-1\t\n5\t1\t34\t1\t1\t1\t227\t1025\t5\t94\t95.000000\t \n2\t1\t35\t0\t0\t0\t259\t1026\t5\t94\t-1\t\n3\t1\t35\t1\t0\t0\t259\t1026\t5\t94\t-1\t\n4\t1\t35\t1\t1\t0\t259\t1026\t5\t94\t-1\t\n5\t1\t35\t1\t1\t1\t259\t1026\t5\t94\t95.000000\t \n2\t1\t36\t0\t0\t0\t292\t1026\t4\t95\t-1\t\n3\t1\t36\t1\t0\t0\t292\t1026\t4\t95\t-1\t\n4\t1\t36\t1\t1\t0\t292\t1026\t4\t95\t-1\t\n5\t1\t36\t1\t1\t1\t292\t1026\t4\t95\t95.000000\t \n2\t1\t37\t0\t0\t0\t324\t1027\t5\t95\t-1\t\n3\t1\t37\t1\t0\t0\t324\t1027\t5\t95\t-1\t\n4\t1\t37\t1\t1\t0\t324\t1027\t5\t95\t-1\t\n5\t1\t37\t1\t1\t1\t324\t1027\t5\t95\t95.000000\t \n2\t1\t38\t0\t0\t0\t356\t1028\t5\t95\t-1\t\n3\t1\t38\t1\t0\t0\t356\t1028\t5\t95\t-1\t\n4\t1\t38\t1\t1\t0\t356\t1028\t5\t95\t-1\t\n5\t1\t38\t1\t1\t1\t356\t1028\t5\t95\t95.000000\t \n2\t1\t39\t0\t0\t0\t389\t1029\t4\t95\t-1\t\n3\t1\t39\t1\t0\t0\t389\t1029\t4\t95\t-1\t\n4\t1\t39\t1\t1\t0\t389\t1029\t4\t95\t-1\t\n5\t1\t39\t1\t1\t1\t389\t1029\t4\t95\t95.000000\t \n2\t1\t40\t0\t0\t0\t421\t1029\t5\t95\t-1\t\n3\t1\t40\t1\t0\t0\t421\t1029\t5\t95\t-1\t\n4\t1\t40\t1\t1\t0\t421\t1029\t5\t95\t-1\t\n5\t1\t40\t1\t1\t1\t421\t1029\t5\t95\t95.000000\t \n2\t1\t41\t0\t0\t0\t454\t1030\t5\t95\t-1\t\n3\t1\t41\t1\t0\t0\t454\t1030\t5\t95\t-1\t\n4\t1\t41\t1\t1\t0\t454\t1030\t5\t95\t-1\t\n5\t1\t41\t1\t1\t1\t454\t1030\t5\t95\t95.000000\t \n2\t1\t42\t0\t0\t0\t486\t1030\t5\t95\t-1\t\n3\t1\t42\t1\t0\t0\t486\t1030\t5\t95\t-1\t\n4\t1\t42\t1\t1\t0\t486\t1030\t5\t95\t-1\t\n5\t1\t42\t1\t1\t1\t486\t1030\t5\t95\t95.000000\t \n2\t1\t43\t0\t0\t0\t519\t1031\t5\t94\t-1\t\n3\t1\t43\t1\t0\t0\t519\t1031\t5\t94\t-1\t\n4\t1\t43\t1\t1\t0\t519\t1031\t5\t94\t-1\t\n5\t1\t43\t1\t1\t1\t519\t1031\t5\t94\t95.000000\t \n2\t1\t44\t0\t0\t0\t551\t1031\t5\t95\t-1\t\n3\t1\t44\t1\t0\t0\t551\t1031\t5\t95\t-1\t\n4\t1\t44\t1\t1\t0\t551\t1031\t5\t95\t-1\t\n5\t1\t44\t1\t1\t1\t551\t1031\t5\t95\t95.000000\t \n2\t1\t45\t0\t0\t0\t584\t1031\t5\t95\t-1\t\n3\t1\t45\t1\t0\t0\t584\t1031\t5\t95\t-1\t\n4\t1\t45\t1\t1\t0\t584\t1031\t5\t95\t-1\t\n5\t1\t45\t1\t1\t1\t584\t1031\t5\t95\t95.000000\t \n2\t1\t46\t0\t0\t0\t649\t1033\t5\t94\t-1\t\n3\t1\t46\t1\t0\t0\t649\t1033\t5\t94\t-1\t\n4\t1\t46\t1\t1\t0\t649\t1033\t5\t94\t-1\t\n5\t1\t46\t1\t1\t1\t649\t1033\t5\t94\t95.000000\t \n2\t1\t47\t0\t0\t0\t616\t1032\t5\t95\t-1\t\n3\t1\t47\t1\t0\t0\t616\t1032\t5\t95\t-1\t\n4\t1\t47\t1\t1\t0\t616\t1032\t5\t95\t-1\t\n5\t1\t47\t1\t1\t1\t616\t1032\t5\t95\t95.000000\t \n2\t1\t48\t0\t0\t0\t101\t1114\t551\t12\t-1\t\n3\t1\t48\t1\t0\t0\t101\t1114\t551\t12\t-1\t\n4\t1\t48\t1\t1\t0\t101\t1114\t551\t12\t-1\t\n5\t1\t48\t1\t1\t1\t101\t1114\t551\t12\t95.000000\t \n",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p379-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 379,
        "pdfPage": 391,
        "heading": "Exercise continued",
        "book": "cambridge"
      }
    ],
    "homework": [
      {
        "image": "assets/textbook/oxford-p203.webp",
        "width": 1072,
        "height": 1549,
        "page": 203,
        "pdfPage": 205,
        "heading": "Exam Success — selected questions",
        "book": "oxford"
      }
    ],
    "examples": [
      {
        "prompt": "Coursebook worked example — page 135",
        "source": "Morrison & Hamshaw, Cambridge IGCSE Mathematics (2023), p. 135",
        "sourceQuestion": {
          "image": "assets/textbook/cambridge-p135-example1-question.webp",
          "width": 754,
          "height": 446
        },
        "steps": [
          "(a) The computer-games sector is [[120^\\circ]], so the fraction is [[\\frac{120}{360}=\\frac13]].",
          "(b) Sleeping occupies [[210^\\circ]], so the time is [[\\frac{210}{360}\\times24=14]] hours."
        ],
        "sourcePage": 135,
        "sourcePdfPage": 147
      }
    ],
    "practiceAssignment": "Scheme of work: stem and leaf pages 378-379 Ex 12.3 Qu 6 and 7\nStart with the first questions, then work towards applications and reasoning. Show clear working.",
    "homeworkAssignment": "Complete the questions matching this lesson on the pages below. Show working and explain any conclusions in context."
  },
  "19.10": {
    "schemeReference": "",
    "supportingSelection": true,
    "practice": [
      {
        "image": "assets/textbook/cambridge-p690-exercise.webp",
        "width": 1061,
        "height": 517,
        "page": 690,
        "pdfPage": 699,
        "heading": "Exercise 20.3",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p691-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 691,
        "pdfPage": 700,
        "heading": "Exercise continued",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p692-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 692,
        "pdfPage": 701,
        "heading": "Exercise continued",
        "book": "cambridge"
      }
    ],
    "homework": [
      {
        "image": "assets/textbook/oxford-p210.webp",
        "width": 1072,
        "height": 1549,
        "page": 210,
        "pdfPage": 212,
        "heading": "Exam Success — selected questions",
        "book": "oxford"
      }
    ],
    "examples": [],
    "practiceAssignment": "Supporting exercise selection. Start with the first questions, then work towards applications and reasoning. Show clear working.",
    "homeworkAssignment": "Complete the questions matching this lesson on the pages below. Show working and explain any conclusions in context."
  },
  "19.11": {
    "schemeReference": "",
    "supportingSelection": true,
    "practice": [
      {
        "image": "assets/textbook/cambridge-p537-exercise.webp",
        "width": 1061,
        "height": 530,
        "page": 537,
        "pdfPage": 549,
        "heading": "Exercise 16.1",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p538-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 538,
        "pdfPage": 550,
        "heading": "Exercise continued",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p539-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 539,
        "pdfPage": 551,
        "heading": "Exercise continued",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p540-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 540,
        "pdfPage": 552,
        "heading": "Exercise continued",
        "book": "cambridge"
      }
    ],
    "homework": [
      {
        "image": "assets/textbook/oxford-p213.webp",
        "width": 1072,
        "height": 1549,
        "page": 213,
        "pdfPage": 215,
        "heading": "Exam Success — selected questions",
        "book": "oxford"
      }
    ],
    "examples": [],
    "practiceAssignment": "Supporting exercise selection. Start with the first questions, then work towards applications and reasoning. Show clear working.",
    "homeworkAssignment": "Use page 213 to discuss interpolation, extrapolation and the limits of conclusions from a scatter diagram."
  },
  "20.1": {
    "schemeReference": "pages 772-773\nEx 22.6",
    "supportingSelection": false,
    "practice": [
      {
        "image": "assets/textbook/cambridge-p772-exercise.webp",
        "width": 1061,
        "height": 316,
        "page": 772,
        "pdfPage": 781,
        "heading": "Exercise 22.6",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p773-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 773,
        "pdfPage": 782,
        "heading": "Exercise continued",
        "book": "cambridge"
      }
    ],
    "homework": [
      {
        "image": "assets/textbook/oxford-p79.webp",
        "width": 1072,
        "height": 1549,
        "page": 79,
        "pdfPage": 81,
        "heading": "Exam Success — selected questions",
        "book": "oxford"
      }
    ],
    "examples": [
      {
        "prompt": "Coursebook worked example — page 771",
        "source": "Morrison & Hamshaw, Cambridge IGCSE Mathematics (2023), p. 771",
        "sourceQuestion": {
          "image": "assets/textbook/cambridge-p771-example1-question.webp",
          "width": 741,
          "height": 136
        },
        "steps": [
          "(a) [[y=\\sqrt{2x-1}]] requires [[2x-1\\ge0]]. Domain: [[x\\ge\\frac12]]. Range: [[y\\ge0]].",
          "(b) [[y=\\frac{3x}{2x+1}]] requires [[2x+1\\ne0]]. Domain: all real [[x\\ne-\\frac12]].",
          "Rearrange: [[y(2x+1)=3x]], so [[x=\\frac{y}{3-2y}]]. Thus [[y\\ne\\frac32]]. Range: all real numbers except [[\\frac32]]."
        ],
        "sourcePage": 771,
        "sourcePdfPage": 780
      }
    ],
    "practiceAssignment": "Scheme of work: pages 772-773 Ex 22.6\nStart with the first questions, then work towards applications and reasoning. Show clear working.",
    "homeworkAssignment": "Page 79: Questions 1–2 and 5(a–b)."
  },
  "20.2": {
    "schemeReference": "pages 777-778\nEx 22.8",
    "supportingSelection": false,
    "practice": [
      {
        "image": "assets/textbook/cambridge-p777-exercise.webp",
        "width": 1061,
        "height": 480,
        "page": 777,
        "pdfPage": 786,
        "heading": "Exercise 22.8",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p778-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 778,
        "pdfPage": 787,
        "heading": "Exercise continued",
        "book": "cambridge"
      }
    ],
    "homework": [
      {
        "image": "assets/textbook/oxford-p79.webp",
        "width": 1072,
        "height": 1549,
        "page": 79,
        "pdfPage": 81,
        "heading": "Exam Success — selected questions",
        "book": "oxford"
      }
    ],
    "examples": [
      {
        "prompt": "Coursebook worked example — page 776",
        "source": "Morrison & Hamshaw, Cambridge IGCSE Mathematics (2023), p. 776",
        "sourceQuestion": {
          "image": "assets/textbook/cambridge-p776-example1-question.webp",
          "width": 747,
          "height": 92
        },
        "sourceSolution": {
          "image": "assets/textbook/cambridge-p776-example1-solution.webp",
          "width": 747,
          "height": 211
        },
        "steps": [],
        "sourcePage": 776,
        "sourcePdfPage": 785
      },
      {
        "prompt": "Coursebook worked example — page 776",
        "source": "Morrison & Hamshaw, Cambridge IGCSE Mathematics (2023), p. 776",
        "sourceQuestion": {
          "image": "assets/textbook/cambridge-p776-example2-question.webp",
          "width": 746,
          "height": 93
        },
        "sourceSolution": {
          "image": "assets/textbook/cambridge-p776-example2-solution.webp",
          "width": 746,
          "height": 232
        },
        "steps": [],
        "sourcePage": 776,
        "sourcePdfPage": 785
      }
    ],
    "practiceAssignment": "Scheme of work: pages 777-778 Ex 22.8\nStart with the first questions, then work towards applications and reasoning. Show clear working.",
    "homeworkAssignment": "Page 79: Questions 3, 5(c) and 6."
  },
  "20.3": {
    "schemeReference": "page 775\nEx 22.7",
    "supportingSelection": false,
    "practice": [
      {
        "image": "assets/textbook/cambridge-p775-exercise.webp",
        "width": 1061,
        "height": 1280,
        "page": 775,
        "pdfPage": 784,
        "heading": "Exercise 22.7",
        "book": "cambridge"
      }
    ],
    "homework": [
      {
        "image": "assets/textbook/oxford-p79.webp",
        "width": 1072,
        "height": 1549,
        "page": 79,
        "pdfPage": 81,
        "heading": "Exam Success — selected questions",
        "book": "oxford"
      }
    ],
    "examples": [],
    "practiceAssignment": "Scheme of work: page 775 Ex 22.7\nStart with the first questions, then work towards applications and reasoning. Show clear working.",
    "homeworkAssignment": "Page 79: Question 4."
  },
  "21.1": {
    "schemeReference": "page 286 \nEx 9.10\n\npage 288\nEx 9.11\n\npage 291-292\nEx 9.12\n\npage 294-295\nEx 9.13",
    "supportingSelection": false,
    "practice": [
      {
        "image": "assets/textbook/cambridge-p286-exercise.webp",
        "width": 1061,
        "height": 1285,
        "page": 286,
        "pdfPage": 298,
        "heading": "Exercise 9.10",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p288-exercise.webp",
        "width": 1061,
        "height": 850,
        "page": 288,
        "pdfPage": 300,
        "heading": "Exercise 9.11",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p291-exercise.webp",
        "width": 1061,
        "height": 981,
        "page": 291,
        "pdfPage": 303,
        "heading": "Exercise 9.12",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p292-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 292,
        "pdfPage": 304,
        "heading": "Exercise continued",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p294-exercise.webp",
        "width": 1061,
        "height": 559,
        "page": 294,
        "pdfPage": 306,
        "heading": "Exercise 9.13",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p295-exercise.webp",
        "width": 1061,
        "height": 1297,
        "page": 295,
        "pdfPage": 307,
        "heading": "Exercise continued",
        "book": "cambridge"
      }
    ],
    "homework": [
      {
        "image": "assets/textbook/oxford-p18.webp",
        "width": 1072,
        "height": 1549,
        "page": 18,
        "pdfPage": 20,
        "heading": "Exam Success — selected questions",
        "book": "oxford"
      }
    ],
    "examples": [
      {
        "prompt": "Coursebook worked example — page 288",
        "source": "Morrison & Hamshaw, Cambridge IGCSE Mathematics (2023), p. 288",
        "sourceQuestion": {
          "image": "assets/textbook/cambridge-p288-example1-question.webp",
          "width": 758,
          "height": 201
        },
        "sourceSolution": {
          "image": "assets/textbook/cambridge-p288-example1-solution.webp",
          "width": 758,
          "height": 202
        },
        "steps": [],
        "sourcePage": 288,
        "sourcePdfPage": 300
      },
      {
        "prompt": "Coursebook worked example — page 294",
        "source": "Morrison & Hamshaw, Cambridge IGCSE Mathematics (2023), p. 294",
        "sourceQuestion": {
          "image": "assets/textbook/cambridge-p294-example1-question.webp",
          "width": 748,
          "height": 89
        },
        "sourceSolution": {
          "image": "assets/textbook/cambridge-p294-example1-solution.webp",
          "width": 748,
          "height": 180
        },
        "steps": [],
        "sourcePage": 294,
        "sourcePdfPage": 306
      },
      {
        "prompt": "In a class of 33 students, 20 like chess, 12 like draughts and 5 like neither. Find how many like both, then how many like only one game.",
        "steps": [
          "At least one game: [[33-5=28]].",
          "Both: [[20+12-28=4]].",
          "Chess only: [[20-4=16]]; draughts only: [[12-4=8]].",
          "Exactly one game: [[16+8=24]]."
        ],
        "source": "Bettison & Taylor, Exam Success (2021), p. 16; Worked example",
        "sourcePage": 16,
        "sourcePdfPage": 18,
        "sourceBook": "oxford"
      }
    ],
    "practiceAssignment": "Scheme of work: page 286  Ex 9.10  page 288 Ex 9.11  page 291-292 Ex 9.12  page 294-295 Ex 9.13\nStart with the first questions, then work towards applications and reasoning. Show clear working.",
    "homeworkAssignment": "Complete the questions matching this lesson on the pages below. Show working and explain any conclusions in context."
  },
  "22.1": {
    "schemeReference": " pages 747-749\nEx 21.12",
    "supportingSelection": false,
    "practice": [
      {
        "image": "assets/textbook/cambridge-p747-exercise.webp",
        "width": 1061,
        "height": 130,
        "page": 747,
        "pdfPage": 756,
        "heading": "Exercise 21.12",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p748-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 748,
        "pdfPage": 757,
        "heading": "Exercise continued",
        "book": "cambridge"
      },
      {
        "image": "assets/textbook/cambridge-p749-exercise.webp",
        "width": 1061,
        "height": 1275,
        "page": 749,
        "pdfPage": 758,
        "heading": "Exercise continued",
        "book": "cambridge"
      }
    ],
    "homework": [
      {
        "image": "assets/textbook/oxford-p77.webp",
        "width": 1072,
        "height": 1549,
        "page": 77,
        "pdfPage": 79,
        "heading": "Exam Success — selected questions",
        "book": "oxford"
      }
    ],
    "examples": [
      {
        "prompt": "Coursebook worked example — page 746",
        "source": "Morrison & Hamshaw, Cambridge IGCSE Mathematics (2023), p. 746",
        "sourceQuestion": {
          "image": "assets/textbook/cambridge-p746-example1-question.webp",
          "width": 743,
          "height": 154
        },
        "steps": [
          "[[y=kx^3]]. Substitute [[x=2,y=32]]: [[32=8k]], so [[k=4]].",
          "The relationship is [[y=4x^3]]. When [[x=5]], [[y=4(125)=500]]."
        ],
        "sourcePage": 746,
        "sourcePdfPage": 755
      },
      {
        "prompt": "Coursebook worked example — page 746",
        "source": "Morrison & Hamshaw, Cambridge IGCSE Mathematics (2023), p. 746",
        "sourceQuestion": {
          "image": "assets/textbook/cambridge-p746-example2-question.webp",
          "width": 742,
          "height": 125
        },
        "steps": [
          "[[F=\\frac{k}{d^2}]]. Substitute [[d=3,F=12]]: [[12=\\frac{k}{9}]], so [[k=108]].",
          "When [[d=4]], [[F=\\frac{108}{16}=6.75]]."
        ],
        "sourcePage": 746,
        "sourcePdfPage": 755
      }
    ],
    "practiceAssignment": "Scheme of work:  pages 747-749 Ex 21.12\nStart with the first questions, then work towards applications and reasoning. Show clear working.",
    "homeworkAssignment": "Complete the questions matching this lesson on the pages below. Show working and explain any conclusions in context."
  }
};

})();

/* ===== accurate-diagrams.js ===== */
(function(){
/* Diagrams are attached to the question data, never selected by slide position. */
(function(){
'use strict';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const svg=(body,label,w=640,h=360)=>`<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(label)}" xmlns="http://www.w3.org/2000/svg"><style>text{font:16px Arial,sans-serif;fill:#163b49}.axis{stroke:#163b49;stroke-width:2}.grid{stroke:#d8e9ef;stroke-width:1}.data{stroke:#087fa5;stroke-width:3;fill:none}</style>${body}</svg>`;
const line=(x,y,X,Y,cls='axis',extra='')=>`<line x1="${x}" y1="${y}" x2="${X}" y2="${Y}" class="${cls}" ${extra}/>`;
const text=(x,y,s,extra='')=>`<text x="${x}" y="${y}" ${extra}>${esc(s)}</text>`;
function table(d){const rows=[d.headers,...d.rows],w=620,h=45*rows.length+30,cw=600/d.headers.length;let b='';rows.forEach((r,i)=>r.forEach((v,j)=>{b+=`<rect x="${10+j*cw}" y="${10+i*45}" width="${cw}" height="45" fill="${i?'white':'#e4f3f9'}" stroke="#adcbd8"/>`+text(10+(j+.5)*cw,39+i*45,v,'text-anchor="middle"')}));return svg(b,d.label||'Data table',w,h)}
function chart(d){const W=640,H=370,L=74,R=600,T=26,B=300,xmax=d.xmax||Math.max(...d.points.map(p=>p[0]))+1,ymax=d.ymax||Math.max(...d.points.map(p=>p[1]))+1;
const X=x=>L+x/xmax*(R-L),Y=y=>B-y/ymax*(B-T);let b='';const xt=d.xstep||xmax/5,yt=d.ystep||ymax/5;
for(let x=0;x<=xmax+1e-8;x+=xt)b+=line(X(x),T,X(x),B,'grid')+text(X(x),B+25,+x.toFixed(2),'text-anchor="middle"');
for(let y=0;y<=ymax+1e-8;y+=yt)b+=line(L,Y(y),R,Y(y),'grid')+text(L-10,Y(y)+5,+y.toFixed(2),'text-anchor="end"');
b+=line(L,T,L,B)+line(L,B,R,B)+text((L+R)/2,H-12,d.xlabel||'x','text-anchor="middle"')+text(18,165,d.ylabel||'y','transform="rotate(-90 18 165)" text-anchor="middle"');
if(d.kind==='histogram')d.bars.forEach(([a,z,f])=>{const density=f/(z-a);b+=`<rect x="${X(a)}" y="${Y(density)}" width="${X(z)-X(a)}" height="${B-Y(density)}" fill="#d9f1f8" stroke="#087fa5" stroke-width="2"/>`});
if(d.kind==='scatter')d.points.forEach(([x,y])=>{b+=`<circle cx="${X(x)}" cy="${Y(y)}" r="4.5" fill="#087fa5"/>`});
if(d.kind==='cumulative')b+=`<polyline points="${d.points.map(([x,y])=>`${X(x)},${Y(y)}`).join(' ')}" class="data"/>`;
if(d.fit)b+=line(X(d.fit[0][0]),Y(d.fit[0][1]),X(d.fit[1][0]),Y(d.fit[1][1]),'data');
return svg(b,d.label||`${d.kind}: ${d.xlabel||'x'} against ${d.ylabel||'y'}`,W,H)}
function bars(d){let b='',max=Math.max(...d.values),top=Math.ceil(max/10)*10,base=270,left=65;for(let v=0;v<=top;v+=top/5){const y=base-v/top*220;b+=line(left,y,590,y,'grid')+text(55,y+5,+v.toFixed(1),'text-anchor="end"')};b+=line(left,35,left,base)+line(left,base,590,base);d.values.forEach((v,i)=>{const x=left+35+i*500/d.values.length,w=300/d.values.length;b+=`<rect x="${x}" y="${base-v/top*220}" width="${w}" height="${v/top*220}" fill="#84cbe0"/>`+text(x+w/2,300,d.labels[i],'text-anchor="middle"')});b+=text(20,150,d.ylabel||'Frequency','transform="rotate(-90 20 150)" text-anchor="middle"');return svg(b,'Bar chart of '+d.labels.join(', '))}
function render(d){if(!d)return'';if(d.kind==='table')return table(d);if(['scatter','cumulative','histogram'].includes(d.kind))return chart(d);if(d.kind==='bars')return bars(d);return''}
const T=(headers,rows)=>({kind:'table',headers,rows});
const grouped=(classes,freq)=>T(['Class interval','Frequency'],classes.map((c,i)=>[c,freq[i]]));
const maps={
'18.1':{1:T(['','Football','Not football','Total'],[['Boys',11,'?',18],['Girls',14,'?',22],['Total','?','?',40]]),3:T(['','Football','Not football','Total'],[['Boys',11,'?',18],['Girls',14,'?',22],['Total','?','?',40]])},
'18.2':{4:T(['Dataset','Median','IQR'],[['A',42,6],['B',39,14]])},
'18.3':{0:grouped(['0 ≤ x < 10','10 ≤ x < 20','20 ≤ x < 30'],[3,7,5]),3:grouped(['0 ≤ x < 10','10 ≤ x < 20','20 ≤ x < 30','30 ≤ x < 40'],[2,5,7,6]),4:grouped(['1–3','4–6','7–9'],[4,8,3])},
'18.4':{0:grouped(['0 ≤ x < 10','10 ≤ x < 20','20 ≤ x < 30'],[4,11,7]),1:grouped(['First','Second','Third','Fourth'],[3,8,12,5]),3:grouped(['First','Second','Third','Fourth'],[8,14,19,9])},
'18.5':{0:T(['Class','Passes','Students'],[['A',18,30],['B',20,40]]),1:T(['','Choose art','Total'],[['Boys',20,42],['Girls',24,38]]),4:T(['Club','Wins','Games'],[['A',18,30],['B',26,50]])},
'18.6':{0:T(['Group','Median','IQR'],[['A',62,8],['B',58,15]]),1:T(['Team','Mean','Range'],[['X',12.4,6],['Y',13.1,20]]),3:T(['Group','Median','IQR'],[['A',64,8],['B',59,5]]),4:T(['Machine','Mean (g)','Range (g)'],[['A',250,18],['B',252,6]])},
'19.1':{0:T(['Category','Frequency'],[['A',9],['B',6],['C',11],['D',10]]),3:T(['Category','Frequency'],[['A',12],['B',18],['C',6],['D',4]])},
'19.2':{0:{kind:'scatter',points:[[1,7],[2,5],[3,6],[4,3],[5,2],[6,1]],xmax:7,ymax:8,xstep:1,ystep:2},3:{kind:'scatter',points:[[1,2],[2,3],[3,5],[4,6],[5,8],[6,9],[7,4]],xmax:8,ymax:10,xstep:1,ystep:2}},
'19.4':{3:{kind:'scatter',points:[[2,5],[8,17]],fit:[[0,1],[9,19]],xmax:10,ymax:20,xstep:2,ystep:5}},
'19.5':{0:grouped(['0 < x ≤ 10','10 < x ≤ 20','20 < x ≤ 30','30 < x ≤ 40'],[5,8,11,6]),3:grouped(['First','Second','Third','Fourth'],[4,7,9,5]),4:grouped(['0 < x ≤ 10','10 < x ≤ 20','20 < x ≤ 30'],[6,10,4])},
'19.7':{0:grouped(['140 < h ≤ 150'],[15]),1:{kind:'histogram',bars:[[150,160,35]],points:[],xmax:180,ymax:4,xstep:30,ystep:1,xlabel:'Class boundary',ylabel:'Frequency density'},3:grouped(['0 < x ≤ 5','5 < x ≤ 15','15 < x ≤ 20'],[10,30,20]),4:{kind:'histogram',bars:[[20,28,20]],points:[],xmax:32,ymax:3,xstep:8,ystep:.5,xlabel:'Class boundary',ylabel:'Frequency density'}},
'19.9':{0:{kind:'bars',labels:['A','B'],values:[42,31]},3:{kind:'bars',labels:['A','B'],values:[42,31]}},
'19.10':{0:T(['Group','Q₁','Median','Q₃'],[['A',38,45,51],['B',30,42,54]]),3:T(['Group','Median','IQR'],[['A',52,9],['B',48,15]])}
};
for(const [id,map] of Object.entries(maps)){const all=[...(window.LESSON_CONTENT[id]?.examples||[]),...(window.EXTRA_EXAMPLES[id]||[])];for(const [i,d] of Object.entries(map))if(all[i])all[i].verifiedDiagram=d}
window.VerifiedDiagrams={render};
})();

})();

/* ===== source-questions.js ===== */
(function(){
(function(){
'use strict';
const q=(prompt,steps,page,exercise,verifiedDiagram)=>({prompt,steps,source:`Morrison & Hamshaw (2023), p. ${page}, ${exercise}`,verifiedDiagram});
const hist=q('At a school fundraising event, 140 people guessed the number of sweets in a jar. Calculate the frequency density for each class and draw a histogram.',[
'Frequency density = frequency ÷ class width. The class widths are 100, 50, 50, 50, 50 and 100 sweets.',
'The densities, in class order, are [[0.18,\\ 0.36,\\ 0.64,\\ 0.62,\\ 0.42,\\ 0.20]].',
'Draw adjoining bars over the actual class boundaries, using frequency density on the vertical axis. Each bar’s area represents its frequency.',
'Check the frequencies: [[18+18+32+31+21+20=140]].'
],676,'Exercise 20.1, Question 1',{kind:'table',headers:['Guesses n','Frequency'],rows:[['100 < n ≤ 200',18],['200 < n ≤ 250',18],['250 < n ≤ 300',32],['300 < n ≤ 350',31],['350 < n ≤ 400',21],['400 < n ≤ 500',20]]});
hist.solutionDiagram={kind:'histogram',points:[],bars:[[100,200,18],[200,250,18],[250,300,32],[300,350,31],[350,400,21],[400,500,20]],xmax:500,ymax:.8,xstep:100,ystep:.2,xlabel:'Number of sweets guessed',ylabel:'Frequency density'};
const seeds=q('Twenty seeds were planted and measured after three weeks. Estimate the mean height, then draw a cumulative-frequency curve and estimate the median height.',[
'Use class midpoints [[1.5,4.5,7.5,10.5]] cm.',
'[[\\sum fx=2(1.5)+5(4.5)+10(7.5)+3(10.5)=132]].',
'Estimated mean [[=132\\div20=6.6]] cm.',
'Cumulative frequencies are [[2,7,17,20]]. Plot [[(0,0),(3,2),(6,7),(9,17),(12,20)]] and draw a smooth increasing curve.',
'Read the median at cumulative frequency [[20\\div2=10]]. A straight-line interpolation between the surrounding points gives about [[6.9]] cm; a smooth-curve reading may differ slightly.'
],685,'Worked example 5',{kind:'table',headers:['Height h (cm)','Frequency'],rows:[['0 < h ≤ 3',2],['3 < h ≤ 6',5],['6 < h ≤ 9',10],['9 < h ≤ 12',3]]});
seeds.solutionDiagram={kind:'cumulative',points:[[0,0],[3,2],[6,7],[9,17],[12,20]],xmax:12,ymax:20,xstep:3,ystep:5,xlabel:'Height (cm)',ylabel:'Cumulative frequency'};
window.SOURCE_QUESTIONS={
'12.1':[q('Simplify [[\\sqrt{28}]].',['[[28=4\\times7]].','[[\\sqrt{28}=2\\sqrt7]].'],276,'Exercise 9.7, Question 1(a)'),q('Simplify [[5\\sqrt{12}]].',['[[12=4\\times3]].','[[5\\sqrt{12}=5\\times2\\sqrt3=10\\sqrt3]].'],276,'Exercise 9.7, Question 1(c)'),q('Simplify [[\\sqrt{99}]].',['[[99=9\\times11]].','[[\\sqrt{99}=3\\sqrt{11}]].'],276,'Exercise 9.7, Question 1(d)')],
'18.3':[seeds],'19.5':[seeds],'19.7':[hist],'19.8':[hist]
};
})();

})();
