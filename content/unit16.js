(function(C){
C["16.1"]={
 heading:"Angles and geometric reasoning",
 summary:"Geometry answers should combine an angle calculation with a valid geometric reason. Accurate notation and vocabulary matter: vertices, sides, angles and line relationships should be named precisely.",
 keywords:["vertex","straight line","vertically opposite","around a point","geometric reason"],
 explain:[
  "Angles on a straight line total \\(180^\\circ\\); angles around a point total \\(360^\\circ\\).",
  "Vertically opposite angles formed by two intersecting straight lines are equal.",
  "Triangle angles total \\(180^\\circ\\), and these facts can be chained in multi-step diagrams.",
  "The scheme of work asks for correct three-letter angle notation: in \\(\\angle ABC\\), the middle letter B is the vertex."
 ],
 rules:["Straight line: \\(180^\\circ\\).","Around a point: \\(360^\\circ\\).","Vertically opposite angles are equal.","Triangle interior angles: \\(180^\\circ\\)."],
 formulas:["180^\\circ","360^\\circ"],
 method:["Mark known equal/straight/right-angle facts.","Choose the smallest useful angle sum.","Write an equation if angles contain algebra.","Solve and attach a geometric reason to each step.","Check the final angle is plausible from the diagram."],
 mistakes:["Do not trust a sketch as being to scale.","In three-letter notation, the vertex must be the middle letter.","Do not say 'angles add to 180' without specifying straight line or triangle.","Vertically opposite angles are opposite, not adjacent."],
 diagram:"angle-straight",
 examSuccess:{pages:[108,109,110,111],note:"Exam Success Geometry chapter reviews terminology and angle facts. Cambridge pp. 82–83 Ex 3.3 is the direct SoW exercise source."},
 examples:[
  {source:"Direct Cambridge angle diagram",q:"An angle of \\(112^\\circ\\) and angle x lie on a straight line. Find x.",steps:["Angles on a straight line sum to \\(180^\\circ\\).","\\(112+x=180\\).","\\(x=68^\\circ\\)."],diagram:"angle-straight"},
  {source:"Cambridge Ex 3.3 pattern",q:"Two straight lines intersect. One angle is \\(115^\\circ\\). Find the other three angles.",steps:["Vertically opposite angle \\(=115^\\circ\\).","Each adjacent angle \\(=180-115=65^\\circ\\).","The fourth angle is vertically opposite the 65° angle, so it is 65°."],diagram:"angle-straight"},
  {source:"Algebraic angle reasoning",q:"Angles around a point are \\(x,2x,4x\\) and \\(150^\\circ\\). Find x.",steps:["Angles around a point total 360°.","\\(x+2x+4x+150=360\\).","\\(7x=210\\).","\\(x=30^\\circ\\)."]},
  {source:"Multi-step reasoning",q:"A triangle has exterior angle \\(128^\\circ\\) at one vertex and one remote interior angle \\(47^\\circ\\). Find the other remote interior angle.",steps:["An exterior angle equals the sum of the two opposite interior angles.","\\(128=47+x\\).","\\(x=81^\\circ\\)."]}
 ],
 practice:{
  foundation:["Find x if \\(x+73=180\\).","Find the vertically opposite angle to 128°.","Three angles around a point are 90°, 110° and x. Find x.","A triangle has angles 48°, 67° and x. Find x.","Name \\(\\angle ABC\\)'s vertex."],
  core:["At a point, angles are x,x,70°,110°. Find x.","Vertically opposite angles are \\(3x+5\\) and \\(5x-35\\). Find x.","A straight line is split into \\(2x+10\\) and \\(5x-5\\). Find x.","A triangle has angles x,2x,3x. Find all angles.","A quadrilateral has angles x, x+20, 2x, 100°. Find x."],
  extension:["A right angle is split into x and \\(2x+9\\). Find x.","At an intersection one angle is \\(4x-7\\), adjacent angle \\(2x+31\\). Find x.","Write a proof-style solution to a three-step angle diagram.","Construct an angle problem whose answer is 36°."],
  reasoning:["Explain why vertically opposite angles are equal using straight-line sums.","A student states \\(\\angle ABC=\\angle CBA\\) because the same letters occur. Explain why this is generally false.","Create a diagram that requires three different angle facts to solve."]
 },
 homework:[
  {tier:"Foundation",q:"Find x if \\(x+124=180\\).",steps:["Straight line sum 180°.","\\(x=56^\\circ\\)."]},
  {tier:"Foundation",q:"Find the vertically opposite angle to 74°.",steps:["Vertically opposite angles are equal.","Answer 74°."]},
  {tier:"Core",q:"Angles around a point are 95°,80°,75° and x. Find x.",steps:["Known total \\(=250^\\circ\\).","\\(x=360-250=110^\\circ\\)."]},
  {tier:"Core",q:"A triangle has angles x,2x,75°. Find x.",steps:["\\(3x+75=180\\).","\\(3x=105\\).","\\(x=35^\\circ\\)."]},
  {tier:"Extension",q:"Vertically opposite angles are \\(5x-8\\) and \\(3x+28\\). Find x.",steps:["Set equal.","\\(5x-8=3x+28\\).","\\(2x=36\\).","\\(x=18\\)."]}
 ]
};

C["16.2"]={
 heading:"Angles in parallel lines",
 summary:"When a transversal crosses parallel lines, corresponding and alternate angles are equal, while co-interior angles sum to \\(180^\\circ\\). These facts should be named explicitly in geometric reasoning.",
 keywords:["parallel","transversal","corresponding","alternate","co-interior"],
 explain:[
  "Corresponding angles occupy matching corners at the two intersections and are equal.",
  "Alternate interior angles form a Z-shape and are equal.",
  "Co-interior angles lie inside the parallel lines on the same side of the transversal and total \\(180^\\circ\\).",
  "Angle facts can be combined with straight-line, triangle and vertically opposite facts."
 ],
 rules:["Corresponding angles are equal.","Alternate angles are equal.","Co-interior angles sum to \\(180^\\circ\\).","Vertically opposite angles remain equal at each intersection."],
 formulas:[],
 method:["Identify the marked parallel lines and the transversal.","Match the target angle to a corresponding, alternate or co-interior partner.","Use any straight-line/vertical angle fact needed first.","Write the named reason next to the calculation."],
 mistakes:["Do not use parallel-line facts unless the lines are stated/marked parallel.","Z/F/C shape mnemonics help locate angles but the formal reason should still be named.","Co-interior angles are supplementary, not equal."],
 diagram:"parallel",
 examSuccess:{pages:[111,112],note:"Exam Success Geometry angle work provides recap; Cambridge pp. 84–85 Ex 3.4 is the direct source."},
 examples:[
  {source:"Cambridge Ex 3.4 pattern",q:"Two parallel lines are crossed by a transversal. A corresponding angle is 68°. Find x.",steps:["Corresponding angles between parallel lines are equal.","\\(x=68^\\circ\\)."],diagram:"parallel"},
  {source:"Alternate angles",q:"An alternate angle is \\(3x+5\\) and its equal partner is \\(5x-35\\). Find x.",steps:["Alternate angles are equal.","\\(3x+5=5x-35\\).","\\(40=2x\\).","\\(x=20\\)."],diagram:"parallel"},
  {source:"Co-interior angles",q:"Co-interior angles are \\(2x+10\\) and \\(4x+20\\). Find x.",steps:["Co-interior angles total 180°.","\\(2x+10+4x+20=180\\).","\\(6x=150\\).","\\(x=25\\)."],diagram:"parallel"},
  {source:"Multi-step",q:"A transversal makes a 124° angle with one parallel line. Find the acute angle formed at the other intersection.",steps:["Corresponding obtuse angle is 124°.","Adjacent acute angle lies on a straight line.","\\(180-124=56^\\circ\\)."],diagram:"parallel"}
 ],
 practice:{
  foundation:["Find a corresponding angle to 72°.","Find an alternate angle to 115°.","Find a co-interior partner of 63°.","State the angle fact used for each."],
  core:["Corresponding angles are \\(4x+7\\) and \\(6x-29\\). Find x.","Co-interior angles are \\(3x\\) and \\(2x+30\\). Find x.","An obtuse angle is 137°. Find all acute angles in the two-intersection diagram.","Use parallel-line and straight-line facts to find two unknown angles."],
  extension:["Prove two lines are parallel using equal alternate angles.","An angle is \\(5x-10\\); its co-interior partner is \\(3x+30\\). Find both angles.","Construct a parallel-line problem with x=18.","Write a chain of reasons for a diagram involving a triangle between parallel lines."],
  reasoning:["Explain why equal corresponding angles can be used as a test for parallel lines.","A student says co-interior angles are equal. Give a numerical counterexample.","Why is 'Z angles' less precise than 'alternate angles are equal'?"]
 },
 homework:[
  {tier:"Foundation",q:"One corresponding angle is 83°. Find the matching angle.",steps:["Corresponding angles in parallel lines are equal.","83°."]},
  {tier:"Core",q:"Co-interior angles are x+20 and 2x+10. Find x.",steps:["\\(x+20+2x+10=180\\).","\\(3x=150\\).","\\(x=50\\)."]},
  {tier:"Core",q:"Alternate angles are \\(7x-9\\) and \\(5x+23\\). Find x.",steps:["Set equal.","\\(7x-9=5x+23\\).","\\(2x=32\\).","\\(x=16\\)."]},
  {tier:"Extension",q:"An obtuse angle at one intersection is 146°. Find an acute angle at the other intersection.",steps:["Corresponding obtuse angle is 146°.","Adjacent angle is \\(180-146=34^\\circ\\)."]}
 ]
};

C["16.3"]={
 heading:"Angle properties of polygons",
 summary:"Polygon angle sums follow from splitting an n-sided polygon into triangles. Regular polygons have equal sides and equal angles, so exterior-angle facts give an efficient route to unknown numbers of sides.",
 keywords:["polygon","regular","interior angle","exterior angle","n-gon"],
 explain:[
  "An n-sided polygon can be split from one vertex into \\(n-2\\) triangles, so its interior-angle sum is \\((n-2)180^\\circ\\).",
  "One exterior angle at each vertex of any convex polygon totals \\(360^\\circ\\).",
  "For a regular polygon, each exterior angle is \\(360^\\circ/n\\) and each interior angle is \\(180^\\circ-360^\\circ/n\\)."
 ],
 rules:["Interior sum \\(=(n-2)180^\\circ\\).","Exterior angle sum \\(=360^\\circ\\).","Regular exterior angle \\(=360^\\circ/n\\).","Interior + adjacent exterior \\(=180^\\circ\\)."],
 formulas:["S=(n-2)180^\\circ","e=\\frac{360^\\circ}{n}","i=180^\\circ-e"],
 method:["Decide whether the question asks for a sum, one regular angle, or number of sides.","Use interior-sum formula for general polygons.","Use exterior angles for regular polygons when finding n.","Check n is a sensible whole number at least 3."],
 mistakes:["The interior-angle sum is not \\(n\\times180\\).","The 360° exterior sum uses one exterior angle per vertex.","Equal angles cannot be assumed unless the polygon is regular or information proves it."],
 diagram:"polygon",
 examSuccess:{pages:[109,110,111],note:"Exam Success Geometry chapter covers polygon terminology and angle properties; Cambridge Ex 3.5–3.6 is primary."},
 examples:[
  {source:"Cambridge Ex 3.5 pattern",q:"Find the interior-angle sum of a decagon.",steps:["n=10.","\\((10-2)180=8\\times180\\).","Sum \\(=1440^\\circ\\)."],diagram:"polygon"},
  {source:"Regular polygon",q:"Find each interior angle of a regular octagon.",steps:["Exterior angle \\(=360/8=45^\\circ\\).","Interior angle \\(=180-45=135^\\circ\\)."],diagram:"polygon"},
  {source:"Reverse problem",q:"A regular polygon has exterior angle 24°. Find the number of sides.",steps:["\\(n=360/24\\).","\\(n=15\\)."],diagram:"polygon"},
  {source:"Algebraic polygon",q:"A pentagon has angles x, x+10, x+20, x+30 and x+40 degrees. Find x.",steps:["Pentagon sum \\(=(5-2)180=540^\\circ\\).","\\(5x+100=540\\).","\\(5x=440\\).","\\(x=88^\\circ\\)."],diagram:"polygon"}
 ],
 practice:{
  foundation:["Find the interior-angle sum of a hexagon.","Find the exterior angle of a regular nonagon.","Find the interior angle of a regular pentagon.","Find n if a regular polygon exterior angle is 40°."],
  core:["Find each interior angle of a regular 12-gon.","A polygon has interior sum 1260°. Find n.","A regular polygon has interior angle 156°. Find n.","A hexagon has five known angles 110°,120°,130°,140°,150°. Find the sixth."],
  extension:["Find n if each exterior angle is 15°.","A regular polygon has interior angle 165°. Find the number of sides.","Angles of a quadrilateral are x,2x,3x,4x. Find all angles.","Show that a regular polygon cannot have exterior angle 17° exactly."],
  reasoning:["Explain why \\((n-2)\\) appears in the interior-sum formula.","Why must 360/e be an integer for a regular polygon with exterior angle e?","Construct an irregular pentagon with exactly two equal angles."]
 },
 homework:[
  {tier:"Foundation",q:"Find the interior-angle sum of an octagon.",steps:["\\((8-2)180=1080^\\circ\\)."]},
  {tier:"Core",q:"Find each exterior angle of a regular 15-gon.",steps:["\\(360/15=24^\\circ\\)."]},
  {tier:"Core",q:"A regular polygon has exterior angle 30°. Find n.",steps:["\\(n=360/30=12\\)."]},
  {tier:"Extension",q:"A regular polygon has interior angle 150°. Find n.",steps:["Exterior angle \\(=180-150=30^\\circ\\).","\\(n=360/30=12\\)."]},
  {tier:"Extension",q:"A hexagon has angles x,x+10,x+20,x+30,x+40,x+50. Find x.",steps:["Hexagon sum \\(=720^\\circ\\).","\\(6x+150=720\\).","\\(6x=570\\).","\\(x=95^\\circ\\)."]}
 ]
};

C["16.4"]={
 heading:"Line and rotational symmetry",
 summary:"A 2D shape has line symmetry if reflection in a line maps the shape onto itself. Rotational symmetry describes how many times a shape matches itself during a full 360° turn.",
 keywords:["line symmetry","reflection","rotational symmetry","order","centre of rotation"],
 explain:[
  "A line of symmetry divides a shape into mirror-image halves.",
  "Rotational symmetry of order n means the shape matches itself n times in a full turn, including the starting position.",
  "The smallest angle of rotational symmetry is \\(360^\\circ/n\\).",
  "Regular polygons have n lines of symmetry and rotational order n."
 ],
 rules:["Order = number of self-matches in 360°.","Smallest rotation angle \\(=360^\\circ/\\text{order}\\).","A generic rectangle has 2 lines of symmetry and rotational order 2.","A square has 4 lines and order 4."],
 formulas:["\\theta=\\frac{360^\\circ}{n}"],
 method:["For line symmetry, imagine or perform a fold/reflection.","For rotational symmetry, rotate around the centre and count matches.","State both the order and smallest angle if requested."],
 mistakes:["Order 1 means only the full 360° turn matches.","Do not count the same symmetry line twice in opposite directions.","A rhombus does not generally have 4 lines of symmetry."],
 diagram:"symmetry",
 examSuccess:{pages:[118,119,120,121,122],note:"Exam Success Geometry includes symmetry and transformations; Cambridge Ex 19.1–19.2 is the direct source."},
 examples:[
  {source:"Cambridge Ex 19.1 pattern",q:"State the number of lines of symmetry and rotational order of a square.",steps:["Four mirror axes map the square onto itself.","It matches after 90°,180°,270°,360°.","Lines = 4; rotational order = 4."],diagram:"symmetry"},
  {source:"Rotational order",q:"A shape has rotational symmetry of order 6. Find the smallest angle of rotation.",steps:["Smallest angle \\(=360/6\\).","Answer \\(60^\\circ\\)."],diagram:"symmetry"},
  {source:"Regular polygon",q:"State the symmetry of a regular pentagon.",steps:["A regular n-gon has n lines of symmetry.","It also has rotational order n.","So 5 lines and order 5."],diagram:"polygon"}
 ],
 practice:{
  foundation:["State the symmetry of a rectangle.","State the symmetry of an equilateral triangle.","Find smallest rotation for order 4.","Find order if smallest rotation is 72°."],
  core:["State symmetry of a regular hexagon.","Compare symmetry of a square and rhombus.","A shape matches after 120°. What rotational order could it have?","Sketch a shape with rotational order 2 but no line symmetry."],
  extension:["Design a logo with rotational order 3 and exactly 3 symmetry lines.","Can a shape have rotational order 4 and one line of symmetry? Investigate.","Find symmetry properties of a regular 12-gon.","Explain why every regular n-gon has rotational order n."],
  reasoning:["Give a counterexample to 'rotational symmetry always implies line symmetry'.","Explain why the starting position counts when naming rotational order.","Compare the symmetry groups of a rectangle and square."]
 },
 homework:[
  {tier:"Foundation",q:"Find smallest rotation angle for order 8.",steps:["\\(360/8=45^\\circ\\)."]},
  {tier:"Core",q:"State symmetry of a regular octagon.",steps:["8 lines of symmetry.","Rotational order 8."]},
  {tier:"Core",q:"A shape's smallest rotational symmetry angle is 60°. Find order.",steps:["\\(360/60=6\\)."]},
  {tier:"Extension",q:"Explain why a parallelogram has rotational symmetry of order 2.",steps:["A 180° rotation swaps opposite vertices/sides.","The shape coincides with itself.","No smaller non-zero rotation works in general."]}
 ]
};

C["16.5"]={
 heading:"Symmetry of 3D solids",
 summary:"Three-dimensional symmetry is described using planes of symmetry and axes of rotational symmetry. A plane reflects the solid onto itself; rotation about an axis may also map the solid onto itself.",
 keywords:["plane of symmetry","axis","rotational symmetry","solid","cross-section"],
 explain:[
  "A plane of symmetry is a flat plane that divides a solid into mirror-image halves.",
  "An axis of rotational symmetry is a line about which the solid can rotate through less than 360° and coincide with itself.",
  "Different solids can have multiple types of symmetry depending on their faces and dimensions.",
  "Sketching cross-sections perpendicular to an axis can help determine rotational order."
 ],
 rules:["Reflection occurs in a plane, not just a line, for 3D solids.","Rotational order is counted about a stated axis.","A cube has multiple symmetry planes and rotational axes; a general cuboid has fewer."],
 formulas:[],
 method:["Identify the solid and any equal dimensions/faces.","Test candidate mirror planes through faces, edges or vertices.","For rotational symmetry, identify an axis and examine the perpendicular cross-section.","State the axis and order clearly."],
 mistakes:["Do not call a 3D mirror symmetry a 'line of symmetry'.","Rotational order depends on which axis is used.","Do not assume a cuboid has all the same symmetries as a cube."],
 diagram:"symmetry",
 examSuccess:{pages:[118,119,120,121,122],note:"Use Exam Success symmetry/transformations recap with Cambridge Ex 19.3–19.4 for 3D solids."},
 examples:[
  {source:"Cambridge Ex 19.3 pattern",q:"How many central planes of symmetry does a rectangular cuboid with unequal side lengths have?",steps:["Each plane through the centre parallel to a pair of opposite faces reflects the cuboid onto itself.","There are three such mutually perpendicular planes.","Answer: 3."],diagram:"symmetry"},
  {source:"Cube",q:"Consider an axis through the centres of opposite faces of a cube. What is the rotational order about that axis?",steps:["Looking along the axis gives a square cross-section.","A square matches every 90°.","Rotational order = 4."],diagram:"symmetry"},
  {source:"Cylinder",q:"Describe two types of symmetry of a right circular cylinder.",steps:["Any plane containing the central axis is a plane of symmetry.","The plane halfway between the circular ends, perpendicular to the axis, is also a plane of symmetry.","The cylinder has continuous rotational symmetry about its central axis."]}
 ],
 practice:{
  foundation:["State one plane of symmetry of a cylinder.","State a plane of symmetry of a cuboid.","Find rotational order of a cube about an axis through opposite face centres."],
  core:["Compare symmetry of a cube and unequal cuboid.","Describe symmetry of a regular triangular prism.","Describe symmetry of a square-based prism.","State whether a cone has a plane of symmetry."],
  extension:["Describe all obvious planes of symmetry of a regular tetrahedron.","Explain rotational symmetry of a regular hexagonal prism about its main axis.","Investigate a square-based pyramid's symmetry.","Explain why axis choice matters for a cube."],
  reasoning:["A student says a cylinder has one plane of symmetry. Explain why this understates its symmetry.","Why does an unequal cuboid not have 90° rotational symmetry about a face-centre axis?","Use cross-sections to justify rotational order of a prism."]
 },
 homework:[
  {tier:"Foundation",q:"What is the rotational order of a square prism about its long central axis?",steps:["Perpendicular cross-section is a square.","Square order is 4.","So solid order is 4 about that axis."]},
  {tier:"Core",q:"Describe a symmetry plane of a cone.",steps:["Any plane through the cone's axis and apex splits it into mirror halves."]},
  {tier:"Extension",q:"Compare a cube and an unequal cuboid about an axis through opposite face centres.",steps:["Cube face cross-section is square, giving order 4.","An unequal cuboid face may be a non-square rectangle, giving order 2.","Dimension equality changes rotational symmetry."]}
 ]
};
})(window.LESSON_CONTENT);