(function(C){
C["17.1"]={
 heading:"Metric units and conversions",
 summary:"Unit conversion depends on the dimension being measured. Length uses the ordinary conversion factor; area uses its square; volume uses its cube. Capacity links cubic centimetres and millilitres.",
 keywords:["length","area","volume","capacity","conversion factor"],
 explain:[
  "A linear conversion such as \\(1\\text{ m}=100\\text{ cm}\\) applies directly only to lengths.",
  "For area, square the conversion: \\(1\\text{ m}^2=(100\\text{ cm})^2=10\\,000\\text{ cm}^2\\).",
  "For volume, cube it: \\(1\\text{ m}^3=(100\\text{ cm})^3=1\\,000\\,000\\text{ cm}^3\\).",
  "Capacity facts include \\(1\\text{ cm}^3=1\\text{ ml}\\) and \\(1000\\text{ cm}^3=1\\text{ litre}\\)."
 ],
 rules:["\\(1\\text{ m}=100\\text{ cm}\\)","\\(1\\text{ m}^2=10^4\\text{ cm}^2\\)","\\(1\\text{ m}^3=10^6\\text{ cm}^3\\)","\\(1\\text{ cm}^3=1\\text{ ml}\\)","\\(1000\\text{ ml}=1\\text{ litre}\\)"],
 formulas:["1\\text{ m}^2=10\\,000\\text{ cm}^2","1\\text{ m}^3=1\\,000\\,000\\text{ cm}^3","1\\text{ cm}^3=1\\text{ ml}"],
 method:["Identify whether the quantity is length, area, volume or capacity.","Write the base conversion factor.","Raise the factor to power 1, 2 or 3 as appropriate.","Multiply or divide in the correct direction.","Write the final unit explicitly."],
 mistakes:["Do not use ×100 to convert square metres to square centimetres.","Do not use ×1000 automatically for every volume conversion.","Keep track of squared/cubed units throughout the calculation."],
 examSuccess:{pages:[133],note:"Exam Success Mensuration begins with units and conversions; Cambridge pp.403–404 Ex13.1 is the direct SoW source."},
 examples:[
  {source:"Cambridge Ex 13.1 pattern",q:"Convert \\(3.6\\text{ m}\\) to cm.",steps:["\\(1\\text{ m}=100\\text{ cm}\\).","\\(3.6\\times100=360\\).","Answer: 360 cm."]},
  {source:"Area conversion",q:"Convert \\(2.4\\text{ m}^2\\) to \\(\\text{cm}^2\\).",steps:["\\(1\\text{ m}^2=10\\,000\\text{ cm}^2\\).","\\(2.4\\times10\\,000=24\\,000\\).","Answer: \\(24\\,000\\text{ cm}^2\\)."]},
  {source:"Volume conversion",q:"Convert \\(0.035\\text{ m}^3\\) to \\(\\text{cm}^3\\).",steps:["\\(1\\text{ m}^3=1\\,000\\,000\\text{ cm}^3\\).","\\(0.035\\times1\\,000\\,000=35\\,000\\).","Answer: \\(35\\,000\\text{ cm}^3\\)."]},
  {source:"Capacity",q:"A container has volume \\(2500\\text{ cm}^3\\). Give its capacity in litres.",steps:["\\(1000\\text{ cm}^3=1\\text{ litre}\\).","\\(2500/1000=2.5\\).","Capacity = 2.5 litres."]}
 ],
 practice:{
  foundation:["Convert 4.2 m to cm.","Convert 560 cm to m.","Convert 3.5 kg to g.","Convert 2.8 litres to ml.","Convert 4500 ml to litres."],
  core:["Convert \\(0.75\\text{ m}^2\\) to \\(\\text{cm}^2\\).","Convert \\(36\\,000\\text{ cm}^2\\) to \\(\\text{m}^2\\).","Convert \\(0.006\\text{ m}^3\\) to \\(\\text{cm}^3\\).","Convert \\(450\\,000\\text{ mm}^3\\) to \\(\\text{cm}^3\\).","Convert \\(1850\\text{ cm}^3\\) to litres."],
  extension:["A floor area is \\(18.5\\text{ m}^2\\). Express it in \\(\\text{mm}^2\\).","A tank holds \\(0.72\\text{ m}^3\\). Express capacity in litres.","A cube has side 25 cm. Give its volume in litres.","Convert \\(3.2\\text{ km}^2\\) to \\(\\text{m}^2\\)."],
  reasoning:["Explain why \\(1\\text{ m}^2\\ne100\\text{ cm}^2\\).","A student converts \\(2\\text{ m}^3\\) to \\(200\\text{ cm}^3\\). Diagnose the error.","Create a unit conversion where the numerical value becomes one million times larger."]
 },
 homework:[
  {tier:"Foundation",q:"Convert 7.3 m to cm.",steps:["Multiply by 100.","Answer 730 cm."]},
  {tier:"Foundation",q:"Convert 5400 ml to litres.",steps:["Divide by 1000.","Answer 5.4 litres."]},
  {tier:"Core",q:"Convert \\(1.6\\text{ m}^2\\) to \\(\\text{cm}^2\\).",steps:["Multiply by \\(100^2=10\\,000\\).","Answer \\(16\\,000\\text{ cm}^2\\)."]},
  {tier:"Core",q:"Convert \\(0.012\\text{ m}^3\\) to \\(\\text{cm}^3\\).",steps:["Multiply by \\(100^3=1\\,000\\,000\\).","Answer \\(12\\,000\\text{ cm}^3\\)."]},
  {tier:"Extension",q:"A rectangular tank is 80 cm by 50 cm by 40 cm. Give its capacity in litres.",steps:["Volume \\(=80\\times50\\times40=160\\,000\\text{ cm}^3\\).","1000 cm³ = 1 litre.","Capacity = 160 litres."]}
 ]
};

C["17.2"]={
 heading:"Perimeter and area of 2D shapes",
 summary:"Perimeter measures the boundary; area measures the surface enclosed. Compound problems are solved by decomposing into familiar shapes and using perpendicular heights.",
 keywords:["perimeter","area","perpendicular height","trapezium","compound shape"],
 explain:[
  "Perimeter is found by adding outside edge lengths only.",
  "Area formulas depend on perpendicular heights, not sloping sides.",
  "A compound shape can be split into rectangles, triangles, parallelograms or trapezia; alternatively subtract a missing region from a larger shape.",
  "Units must distinguish length (cm) from area (cm²)."
 ],
 rules:["Rectangle area \\(=lw\\).","Triangle area \\(=\\frac12bh\\).","Parallelogram area \\(=bh\\).","Trapezium area \\(=\\frac12(a+b)h\\)."],
 formulas:["A_{tri}=\\frac12bh","A_{para}=bh","A_{trap}=\\frac12(a+b)h"],
 method:["Identify the required quantity: perimeter or area.","Mark only perpendicular heights for area.","Split a compound figure into simple regions.","Calculate each region accurately.","Add/subtract areas or sum outside edges, then attach correct units."],
 mistakes:["Do not include internal dividing lines in perimeter.","Do not use a sloping side as a triangle/parallelogram height unless it is perpendicular.","Area uses squared units."],
 diagram:"trapezium",
 examSuccess:{pages:[134,135],note:"Exam Success Mensuration pages 134–135 review 2D perimeter and area; Cambridge pp.198–201 Ex7.1 is primary."},
 examples:[
  {source:"Cambridge Ex 7.1 pattern",q:"Find the area of a parallelogram with base 8 m and perpendicular height 3.5 m.",steps:["Use \\(A=bh\\).","\\(A=8\\times3.5=28\\).","Answer: \\(28\\text{ m}^2\\)."],diagram:"trapezium"},
  {source:"Trapezium",q:"Find the area of a trapezium with parallel sides 7 cm and 12 cm and height 6 cm.",steps:["\\(A=\\frac12(a+b)h\\).","\\(A=\\frac12(7+12)6\\).","\\(A=57\\text{ cm}^2\\)."],diagram:"trapezium"},
  {source:"Compound shape",q:"A house-shaped region is a 5 m by 8 m rectangle topped by a triangle of base 5 m and height 4 m. Find total area.",steps:["Rectangle: \\(5\\times8=40\\text{ m}^2\\).","Triangle: \\(\\frac12\\times5\\times4=10\\text{ m}^2\\).","Total = \\(50\\text{ m}^2\\)."]},
  {source:"Reverse mensuration",q:"A trapezium has area 63 cm², height 6 cm and one parallel side 8 cm. Find the other side x.",steps:["\\(63=\\frac12(8+x)6\\).","\\(63=3(8+x)\\).","\\(21=8+x\\).","\\(x=13\\text{ cm}\\)."],diagram:"trapezium"}
 ],
 practice:{
  foundation:["Find perimeter of a 8 cm by 5 cm rectangle.","Find area of triangle base 12 cm, height 7 cm.","Find area of parallelogram base 9 cm, height 4 cm.","Find area of trapezium parallel sides 6 cm and 10 cm, height 5 cm.","State correct units for each."],
  core:["A triangle has area 45 cm² and base 10 cm. Find height.","A parallelogram has area 72 cm² and height 8 cm. Find base.","A trapezium has area 54 cm², height 6 cm and one parallel side 7 cm. Find the other.","A rectangular frame has outer dimensions 12 by 9 and border width 1. Find frame area.","Find area of an L-shape made from two rectangles."],
  extension:["A compound shape combines a trapezium and triangle. Form an expression for total area.","A triangle has base 45 cm and area \\(0.54\\text{ m}^2\\). Find height in cm.","Two rectangles have equal area but different perimeters. Construct an example.","A trapezium and parallelogram have equal area. Find an unknown height."],
  reasoning:["Explain why the sloping side length is irrelevant to parallelogram area.","A student calculates perimeter using area formulas. Explain the difference in meaning.","Can two shapes have equal perimeter but different area? Give an example."]
 },
 homework:[
  {tier:"Foundation",q:"Find area of triangle base 15 cm and height 8 cm.",steps:["\\(A=\\frac12\\times15\\times8\\).","Answer \\(60\\text{ cm}^2\\)."]},
  {tier:"Foundation",q:"Find perimeter of a quadrilateral with sides 4,6,7,9 cm.",steps:["Add outside sides.","Answer 26 cm."]},
  {tier:"Core",q:"Find area of trapezium with parallel sides 9 and 14 cm, height 6 cm.",steps:["\\(A=\\frac12(23)(6)\\).","Answer \\(69\\text{ cm}^2\\)."]},
  {tier:"Core",q:"A parallelogram has area 84 cm² and base 12 cm. Find height.",steps:["\\(84=12h\\).","\\(h=7\\text{ cm}\\)."]},
  {tier:"Extension",q:"A rectangle 10 by 6 has a 4 by 2 rectangle removed. Find remaining area.",steps:["Outer area 60.","Removed area 8.","Remaining area 52 square units."]}
 ]
};

C["17.3"]={
 heading:"Circumference and area of circles",
 summary:"Circle measurements depend on radius. Circumference measures the boundary and area measures the interior. Diameter is twice the radius.",
 keywords:["radius","diameter","circumference","area","pi"],
 explain:[
  "The diameter passes through the centre and is twice the radius: \\(d=2r\\).",
  "Circumference is the distance around the circle: \\(C=2\\pi r=\\pi d\\).",
  "Area is \\(A=\\pi r^2\\).",
  "Exact answers may be left in terms of \\(\\pi\\); decimal answers should use the requested accuracy."
 ],
 rules:["\\(d=2r\\)","\\(C=2\\pi r\\)","\\(C=\\pi d\\)","\\(A=\\pi r^2\\)"],
 formulas:["d=2r","C=2\\pi r","A=\\pi r^2"],
 method:["Identify whether given measurement is radius or diameter.","Choose circumference or area formula.","Substitute before rounding.","Use exact \\(\\pi\\) form unless a decimal is requested.","Attach cm or cm² correctly."],
 mistakes:["Do not use diameter as r in \\(\\pi r^2\\).","Circumference has linear units; area has squared units.","Do not round \\(\\pi\\) early."],
 diagram:"circle",
 examSuccess:{pages:[136,137],note:"Exam Success Mensuration reviews circles and sectors; Cambridge pp.204–207 Ex7.2–7.3 is primary."},
 examples:[
  {source:"Cambridge Ex 7.2 pattern",q:"Find circumference of a circle of radius 7 cm.",steps:["\\(C=2\\pi r\\).","\\(C=14\\pi\\text{ cm}\\).","Approximately 44.0 cm to 3 s.f."],diagram:"circle"},
  {source:"Cambridge Ex 7.3 pattern",q:"Find area of a circle of diameter 12 cm.",steps:["Radius \\(=6\\) cm.","\\(A=\\pi(6)^2=36\\pi\\text{ cm}^2\\)."],diagram:"circle"},
  {source:"Reverse problem",q:"A circle has circumference \\(18\\pi\\) cm. Find its radius.",steps:["\\(2\\pi r=18\\pi\\).","Divide by \\(2\\pi\\).","\\(r=9\\) cm."],diagram:"circle"},
  {source:"Compound",q:"A circular pond has radius 5 m and a 1 m wide path outside it. Find path area.",steps:["Outer radius = 6 m.","Outer area \\(=36\\pi\\).","Pond area \\(=25\\pi\\).","Path area \\(=11\\pi\\text{ m}^2\\)."],diagram:"circle"}
 ],
 practice:{
  foundation:["Find circumference for r=4 cm.","Find circumference for d=15 cm.","Find area for r=6 cm.","Find radius if d=22 cm.","Give exact answers in terms of π."],
  core:["Find area for d=18 cm.","Find r if circumference is \\(24\\pi\\) cm.","Find r if area is \\(49\\pi\\text{ cm}^2\\).","A circular garden radius 8 m needs fencing. Find fence length.","Find area of a semicircle diameter 10 cm."],
  extension:["A ring has outer radius 10 cm and inner radius 7 cm. Find area.","A wheel travels 200 revolutions with radius 0.35 m. Find distance.","A circle has area 154 cm². Estimate radius using calculator π.","Compare circumference and area numerically for r=2."],
  reasoning:["Explain why doubling radius quadruples area.","A student uses \\(2\\pi r^2\\) for circumference. Explain units-based evidence the formula is wrong.","Create a circle whose exact area equals its exact circumference numerically."]
 },
 homework:[
  {tier:"Foundation",q:"Find circumference of radius 5 cm.",steps:["\\(C=2\\pi(5)=10\\pi\\) cm."]},
  {tier:"Core",q:"Find area of diameter 16 cm.",steps:["r=8.","\\(A=64\\pi\\text{ cm}^2\\)."]},
  {tier:"Core",q:"A circle circumference is \\(30\\pi\\) cm. Find diameter.",steps:["\\(C=\\pi d\\).","\\(d=30\\) cm."]},
  {tier:"Extension",q:"A circular lawn radius 6 m is surrounded by a 2 m path. Find path area.",steps:["Outer radius 8 m.","Outer area \\(64\\pi\\), lawn \\(36\\pi\\).","Path \\(=28\\pi\\text{ m}^2\\)."]},
  {tier:"Extension",q:"A wheel diameter 70 cm makes 500 turns. Find exact distance in metres.",steps:["Circumference \\(=70\\pi\\) cm.","500 turns \\(=35000\\pi\\) cm.","Divide by 100: \\(350\\pi\\) m."]}
 ]
};

C["17.4"]={
 heading:"Arc length and sector area",
 summary:"A sector is a fraction of a circle determined by its central angle. Arc length and sector area are the same fraction \\(\\theta/360\\) of full circumference and area.",
 keywords:["sector","arc","central angle","minor sector","major sector"],
 explain:[
  "For a sector angle \\(\\theta\\), the fraction of the full circle is \\(\\theta/360\\).",
  "Arc length is \\(\\frac\\theta{360}(2\\pi r)\\).",
  "Sector area is \\(\\frac\\theta{360}(\\pi r^2)\\).",
  "A sector perimeter includes the arc plus two radii. Major-sector angle is \\(360^\\circ\\) minus the minor angle."
 ],
 rules:["Arc \\(=\\frac\\theta{360}2\\pi r\\).","Sector area \\(=\\frac\\theta{360}\\pi r^2\\).","Sector perimeter = arc + 2r.","Major angle \\(=360^\\circ-\\) minor angle."],
 formulas:["L=\\frac{\\theta}{360}2\\pi r","A=\\frac{\\theta}{360}\\pi r^2"],
 method:["Identify radius and central angle.","Decide whether the question concerns arc, area or perimeter.","For major sectors, convert the angle first if necessary.","Use the fraction of a full circle.","Keep exact π form until the final step."],
 mistakes:["Do not forget the two radii in sector perimeter.","Use 360°, not 180°, as the full-circle denominator.","A major sector uses an angle greater than 180°."],
 diagram:"sector",
 examSuccess:{pages:[136,137],note:"Exam Success Mensuration reviews sectors; Cambridge pp.209–212 Ex7.4 includes arc length and sector area, including major sectors."},
 examples:[
  {source:"Cambridge Ex 7.4 pattern",q:"Find area and arc length of a sector radius 6 cm, angle 40°.",steps:["Area \\(=\\frac{40}{360}\\pi6^2=4\\pi\\text{ cm}^2\\).","Arc \\(=\\frac{40}{360}2\\pi6=\\frac{4\\pi}{3}\\text{ cm}\\)."],diagram:"sector"},
  {source:"Major sector",q:"A major sector has radius 4 cm and minor angle 65°. Find major-sector area.",steps:["Major angle \\(=360-65=295^\\circ\\).","Area \\(=\\frac{295}{360}\\pi(4)^2\\).","\\(=\\frac{118\\pi}{9}\\text{ cm}^2\\)."],diagram:"sector"},
  {source:"Sector perimeter",q:"A sector has radius 8 cm and angle 120°. Find perimeter.",steps:["Arc \\(=\\frac{120}{360}2\\pi8=\\frac{16\\pi}{3}\\).","Add two radii: \\(P=16+\\frac{16\\pi}{3}\\) cm."],diagram:"sector"},
  {source:"Reverse arc",q:"A sector has arc length \\(5\\pi\\) cm and radius 12 cm. Find angle.",steps:["\\(5\\pi=\\frac\\theta{360}(24\\pi)\\).","Cancel π: \\(5=\\theta/15\\).","\\(\\theta=75^\\circ\\)."],diagram:"sector"}
 ],
 practice:{
  foundation:["Find arc length for r=9 cm, θ=80°.","Find sector area for r=7 cm, θ=90°.","Find semicircle area for diameter 12 cm.","Find quadrant perimeter for r=5 cm.","Find major angle if minor angle 110°."],
  core:["Find area and perimeter of 135° sector r=8 cm.","A major sector has minor angle 50°, r=6 cm. Find area.","Find θ if sector area is \\(18\\pi\\) and r=9.","Find r if arc length is \\(6\\pi\\) and θ=120°.","A sector forms part of a compound shape; find total perimeter."],
  extension:["A 'Pac-Man' shape removes 70° sector from circle r=5. Find remaining area and perimeter.","Two sectors have equal arc length. Compare their angles and radii.","Find angle if sector perimeter and radius are known.","Form an equation for radius from sector area."],
  reasoning:["Why are arc length and sector area multiplied by the same angular fraction?","A student uses \\(\\theta/180\\). Explain the structural error.","Can two sectors have same area but different radii? Explain."]
 },
 homework:[
  {tier:"Foundation",q:"Find arc length for r=10 cm, θ=72°.",steps:["\\(L=\\frac{72}{360}2\\pi10\\).","\\(L=4\\pi\\) cm."]},
  {tier:"Foundation",q:"Find sector area for r=6 cm, θ=120°.",steps:["\\(A=\\frac{120}{360}\\pi36=12\\pi\\text{ cm}^2\\)."]},
  {tier:"Core",q:"Find perimeter of 90° sector r=8 cm.",steps:["Arc \\(=\\frac14(16\\pi)=4\\pi\\).","Perimeter \\(=16+4\\pi\\) cm."]},
  {tier:"Core",q:"A major sector has minor angle 80° and r=5 cm. Find major angle.",steps:["\\(360-80=280^\\circ\\)."]},
  {tier:"Extension",q:"Arc length is \\(7\\pi\\) cm, r=14 cm. Find angle.",steps:["\\(7\\pi=\\frac\\theta{360}28\\pi\\).","\\(7=7\\theta/90\\).","\\(\\theta=90^\\circ\\)."]}
 ]
};
})(window.LESSON_CONTENT);