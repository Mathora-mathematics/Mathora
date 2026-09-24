(function(C){
C["19.1"]={
 heading:"Bar charts, pie charts, pictograms and stem-and-leaf",
 summary:"Choose a statistical representation that matches the data and purpose. Correct scales, labels and conventions make the diagram mathematically meaningful.",
 keywords:["bar chart","dual bar chart","pie chart","pictogram","stem-and-leaf"],
 explain:[
  "Bar charts display discrete/categorical frequencies with separated bars. Composite or dual bar charts compare related groups.",
  "Pie chart sectors represent proportions: \\(\\text{angle}=\\frac{\\text{frequency}}{\\text{total}}\\times360^\\circ\\).",
  "Pictograms need a clear key and may use partial symbols.",
  "Stem-and-leaf diagrams preserve individual data values. Leaves must be ordered and a key must be given."
 ],
 rules:["Bar-chart bars have equal width and gaps for discrete categories.","Pie sectors total 360°.","Pictogram key must state the value of one full symbol.","Stem-and-leaf leaves are ordered; include a key."],
 formulas:["\\theta=\\frac{f}{N}\\times360^\\circ"],
 method:["Identify data type and purpose.","Choose the appropriate display.","Use a clear scale/key and label axes/categories.","Plot/draw accurately.","Check frequencies/proportions are preserved."],
 mistakes:["Do not join bar-chart bars for discrete data.","Do not forget a stem-and-leaf key.","Pie-chart angles must sum to 360°.","Do not compare pictograms without reading the key."],
 diagram:"bar",
 examSuccess:{pages:[197,198,199,200,201,202,203],note:"Exam Success Statistics diagram pages cover bar/pie/pictogram/frequency displays. Cambridge Ex4.4 and 4.7–4.10 is the SoW source."},
 examples:[
  {source:"Direct Cambridge bar-chart source",q:"Scores 15–20 have frequencies 2,1,2,6,2,7. Describe how to draw a correct bar chart.",steps:["Put score on horizontal axis and frequency on vertical axis.","Use equal-width separated bars.","Choose a vertical scale reaching at least 7.","Plot heights 2,1,2,6,2,7 and label axes/title."],diagram:"bar"},
  {source:"Exam Success pie-chart style",q:"In 36 students, choices A,B,C,D have frequencies 9,6,11,10. Find sector angles.",steps:["One student represents \\(360/36=10^\\circ\\).","Angles: A 90°, B 60°, C 110°, D 100°.","Check total \\(=360^\\circ\\)."],diagram:"pie"},
  {source:"Stem-and-leaf",q:"Construct a stem-and-leaf for 12,15,18,21,21,24,29,31,34.",steps:["Use tens digits as stems 1,2,3.","Order leaves: 1 | 2 5 8; 2 | 1 1 4 9; 3 | 1 4.","Add key, e.g. 2 | 4 = 24."]},
  {source:"Representation choice",q:"A newspaper wants readers to compare exact category frequencies quickly. Bar chart or pictogram?",steps:["A bar chart uses a numerical axis, supporting more precise comparison.","Pictograms are visually accessible but partial symbols may reduce precision.","Choose bar chart for exact comparison."]}
 ],
 practice:{
  foundation:["Draw a bar chart for frequencies 3,5,7,4.","Find pie angle for 12 out of 48.","Find pie angle for 9 out of 36.","A pictogram symbol represents 8 people. What do 2.5 symbols mean?","Write a key for a stem-and-leaf diagram."],
  core:["Construct stem-and-leaf for 11,14,17,18,22,24,24,29,31.","Find all pie angles for frequencies 5,7,8,10.","Design a dual bar chart comparing two classes.","Explain why bar-chart bars are separated.","Interpret a pictogram using half-symbols."],
  extension:["A pie sector is 126°. Find fraction and percentage.","One pie sector is missing; other angles are 80°,95°,110°. Find missing.","Create a back-to-back stem-and-leaf for two small data sets.","Identify a misleading feature in a bar chart with a truncated axis."],
  reasoning:["Choose the best representation for favourite subjects and justify.","Compare information retained by a stem-and-leaf diagram versus grouped bar chart.","Explain why a pie chart is poor if there are 20 tiny categories."]
 },
 homework:[
  {tier:"Foundation",q:"Frequency 14 out of 56. Find pie angle.",steps:["Fraction \\(=14/56=1/4\\).","Angle \\(=90^\\circ\\)."]},
  {tier:"Foundation",q:"One pictogram symbol represents 6 students. What do 3.5 symbols represent?",steps:["\\(3.5\\times6=21\\).","21 students."]},
  {tier:"Core",q:"Construct stem-and-leaf for 13,14,18,21,21,25,29.",steps:["Stem 1: leaves 3,4,8.","Stem 2: leaves 1,1,5,9.","Include key."]},
  {tier:"Core",q:"Frequencies 8,12,10 total 30. Find pie angles.",steps:["One unit \\(=360/30=12^\\circ\\).","Angles 96°,144°,120°."]},
  {tier:"Extension",q:"A pie sector is 54°. What percentage?",steps:["\\(54/360=0.15\\).","15%."]},
  {tier:"Extension",q:"Explain why a truncated bar-chart axis may mislead.",steps:["It can visually exaggerate small absolute differences.","The numerical scale must be inspected."]}
 ]
};

C["19.2"]={
 heading:"Draw and interpret scatter diagrams",
 summary:"Scatter diagrams display paired bivariate data. Plot each pair as a small cross and look for overall association, strength, unusual points and context.",
 keywords:["bivariate","scatter diagram","paired data","outlier","association"],
 explain:[
  "Each point represents one pair \\((x,y)\\) from the same individual/item.",
  "The SoW specifies plotting points as small crosses for clarity.",
  "The cloud of points may show an upward, downward or no clear pattern.",
  "Outliers are points noticeably separated from the overall pattern and may deserve investigation."
 ],
 rules:["Plot each pair once as a small cross.","Label both axes with quantities/units.","Use a scale that uses most of the graph area.","Describe pattern and outliers, not individual points only."],
 formulas:[],
 method:["Choose sensible axis scales.","Plot each ordered pair accurately.","Scan the whole cloud for pattern.","Identify any point far from the trend.","Write an interpretation in context."],
 mistakes:["Do not connect scatter points in order.","Do not swap x and y values.","A scatter diagram shows association, not automatically causation."],
 diagram:"scatter",
 examSuccess:{pages:[211,212,213],note:"Exam Success Statistics covers scatter diagrams and correlation; Cambridge pp.537–540 Ex16.1 is primary."},
 examples:[
  {source:"Direct Cambridge scatter exercise",q:"Plot pairs \\((1,7),(2,5),(3,6),(4,3),(5,2),(6,1)\\) and describe.",steps:["Plot each pair as a small cross.","The overall trend falls as x increases.","This suggests negative correlation.","Check whether any point is notably away from the trend."],diagram:"scatter"},
  {source:"Interpretation",q:"A scatter graph of revision time against test score rises from left to right. What does that suggest?",steps:["Higher revision times tend to be associated with higher scores.","This is positive correlation.","It does not by itself prove revision time is the only cause."]},
  {source:"Outlier",q:"Most points follow a strong positive trend but one point lies far below. How should it be handled?",steps:["Identify it as a possible outlier.","Check for recording/measurement error or genuine unusual case.","Do not delete it automatically."]}
 ],
 practice:{
  foundation:["State what one point on a scatter diagram represents.","Plot (2,5),(4,7),(6,8).","Identify x- and y-variables in a context.","Circle an outlier in a supplied sketch."],
  core:["Describe direction/strength of four scatter clouds.","Explain what bivariate data means.","Choose sensible scales for data ranges 20–80 and 100–600.","Interpret an outlier in context.","Distinguish a scatter diagram from a line graph."],
  extension:["Design paired data likely to show no correlation.","Explain how one extreme outlier can affect visual interpretation.","Sketch strong negative vs weak negative association.","Critique a scatter graph with compressed axes."],
  reasoning:["Why should scatter points not be joined?","Can two variables show strong correlation with one outlier? Explain.","Suggest a third variable in height vs reading age for children."]
 },
 homework:[
  {tier:"Foundation",q:"A scatter cloud falls left to right. State direction.",steps:["Negative correlation."]},
  {tier:"Core",q:"What does an outlier mean in a scatter plot?",steps:["A point noticeably distant from the main pattern.","It may indicate unusual case or error."]},
  {tier:"Core",q:"Why must paired values come from the same item/person?",steps:["Each point represents a relationship between two measurements of the same observational unit.","Mixing individuals would destroy that relationship."]},
  {tier:"Extension",q:"A scatter graph has an apparent positive trend caused mostly by one extreme point. What should you do?",steps:["Inspect the pattern with and without the point.","Treat the strength claim cautiously.","Investigate the extreme observation."]}
 ]
};

C["19.3"]={
 heading:"Positive, negative and zero correlation",
 summary:"Correlation describes the direction and strength of association between two variables. It does not prove that changing one variable causes the other to change.",
 keywords:["positive","negative","zero correlation","strength","causation"],
 explain:[
  "Positive correlation: as x tends to increase, y tends to increase.",
  "Negative correlation: as x tends to increase, y tends to decrease.",
  "Zero/no correlation: no clear linear association is visible.",
  "Strength depends on how tightly points cluster around an imagined straight trend."
 ],
 rules:["State both direction and strength when visible.","Use 'correlation/association', not causal language.","Outliers can weaken or distort apparent correlation."],
 formulas:[],
 method:["Look at direction left-to-right.","Judge how tightly points follow a line.","Note outliers.","Phrase interpretation using 'tends to'.","Separate association from causation."],
 mistakes:["Strong correlation is not proof of cause.","No linear correlation does not mean variables are completely unrelated.","Do not call a weak positive trend 'no correlation' without considering scale/context."],
 diagram:"scatter",
 examSuccess:{pages:[211,212,213],note:"Exam Success explicitly develops scatter/correlation interpretation; linked to Cambridge Ex16.1."},
 examples:[
  {source:"Correlation description",q:"Points rise left-to-right and lie close to a line. Describe correlation.",steps:["Direction is positive.","Closeness to a line indicates strong association.","Answer: strong positive correlation."],diagram:"scatter"},
  {source:"Negative correlation",q:"As age of a car increases, resale price tends to fall. State likely correlation.",steps:["One variable increases while the other tends to decrease.","Negative correlation."]},
  {source:"Causation caution",q:"Screen size and price show strong positive correlation. Can we say increasing screen size causes all price differences?",steps:["No.","Other features/brand/specification may affect price.","The data show association, not isolated causation."]},
  {source:"Confounding",q:"Ice-cream sales and sunburn cases have positive correlation. Explain a likely third variable.",steps:["Hot/sunny weather increases both.","Weather is a confounding/common cause.","Do not claim ice cream causes sunburn."]}
 ],
 practice:{
  foundation:["Name correlation: upward tight cloud.","Name correlation: downward loose cloud.","Name correlation: random cloud.","Write one sentence interpreting positive correlation."],
  core:["Classify six scatter descriptions by direction/strength.","Give a possible confounder for height vs vocabulary.","Explain strong correlation without causation.","Identify how an outlier affects strength.","Compare weak positive and strong positive patterns."],
  extension:["Give an example of correlation caused by a lurking variable.","Explain why non-linear relationship may have low linear correlation.","Construct data with correlation reversed by grouping.","Discuss whether a strong correlation is useful for prediction."],
  reasoning:["Why is 'tends to' preferable to 'always'?","A study finds zero correlation. Can we conclude one variable has no effect? Explain.","Create a spurious-correlation example and identify the confounder."]
 },
 homework:[
  {tier:"Foundation",q:"A downward trend with tightly clustered points: describe.",steps:["Strong negative correlation."]},
  {tier:"Core",q:"Hours of exercise and resting heart rate show negative correlation. Give a cautious interpretation.",steps:["People exercising more tend to have lower resting heart rate.","This does not prove exercise alone caused the difference."]},
  {tier:"Extension",q:"Why might age confound height vs vocabulary in children?",steps:["Older children tend to be taller.","Older children also tend to know more words.","Age affects both variables."]}
 ]
};

C["19.4"]={
 heading:"Line of best fit",
 summary:"A line of best fit is a single straight line representing the overall scatter trend. It should extend across the data and have roughly balanced points above and below.",
 keywords:["line of best fit","trend","interpolation","extrapolation","estimate"],
 explain:[
  "The SoW specifies one ruled straight line across the full data set, with roughly even numbers of points above and below.",
  "Use the line to estimate y from x or x from y.",
  "Interpolation is prediction within the observed range and is usually safer than extrapolation.",
  "Extrapolation assumes the trend continues outside the data and is less reliable."
 ],
 rules:["Draw one straight line through the centre of the cloud.","Do not force it through the origin unless justified.","Use points on the fitted line—not raw points—to estimate.","Treat extrapolation cautiously."],
 formulas:[],
 method:["Identify the overall linear trend.","Place a straight line through the centre of the cloud.","Balance residual-looking distances/points visually.","For prediction, move from axis to line to other axis.","State estimates appropriately."],
 mistakes:["Do not join individual points.","Do not choose endpoints just because they are data points.","Do not present extrapolated values as certain."],
 diagram:"bestfit",
 examSuccess:{pages:[211,212,213],note:"Exam Success scatter/correlation section supports trend-line interpretation; SoW gives specific drawing convention."},
 examples:[
  {source:"SoW drawing convention",q:"Describe how to draw a line of best fit for a positive scatter cloud.",steps:["Use one straight ruled line across full data range.","Pass through the visual centre of the cloud.","Aim for roughly balanced points above and below.","Do not join data points."],diagram:"bestfit"},
  {source:"Interpolation",q:"Observed x-values range 2–10. Use line to estimate y at x=7.",steps:["x=7 lies within observed range, so this is interpolation.","Move vertically from x=7 to the fitted line.","Move horizontally to read y.","Report as an estimate."],diagram:"bestfit"},
  {source:"Extrapolation",q:"Observed x-values are 10–50. A model is used at x=90. Comment.",steps:["x=90 lies outside the observed range.","This is extrapolation.","The trend may not continue, so reliability is lower."]},
  {source:"Equation from fitted line",q:"A fitted line passes approximately through (2,5) and (8,17). Estimate its equation.",steps:["Gradient \\(=(17-5)/(8-2)=12/6=2\\).","Use \\(y=2x+c\\).","With (2,5): \\(5=4+c\\Rightarrow c=1\\).","Estimated line \\(y\\approx2x+1\\)."]}
 ],
 practice:{
  foundation:["State purpose of line of best fit.","Explain why it need not pass through a data point.","Identify interpolation vs extrapolation.","Use a line to estimate a value within range."],
  core:["Draw a best-fit line on a scatter sketch.","Estimate y at a given x.","Estimate x at a given y.","Explain why extending far outside data is risky.","Estimate line equation from two convenient points on line."],
  extension:["Compare two plausible best-fit lines and justify the better one.","Discuss effect of one extreme outlier on the chosen line.","Use fitted equation for interpolation and extrapolation, commenting on reliability.","Explain why a vertical line cannot model y as a function of x."],
  reasoning:["Why should points be roughly balanced above/below?","A student draws a line from first to last data point. Critique.","When might extrapolation still be reasonable?"]
 },
 homework:[
  {tier:"Foundation",q:"What is interpolation?",steps:["Estimating within the range of observed x-values."]},
  {tier:"Core",q:"Why should a best-fit line extend across the data cloud?",steps:["It represents the overall trend across all observations.","A short local segment may not reflect the whole relationship."]},
  {tier:"Core",q:"Line through (3,8) and (7,16). Find equation.",steps:["Gradient \\(=(16-8)/(7-3)=2\\).","\\(y=2x+c\\).","8=6+c, so c=2.","\\(y=2x+2\\)."]},
  {tier:"Extension",q:"Why is prediction at x=100 unreliable if data x-range is 20–45?",steps:["It is far outside observed range.","It assumes trend remains linear beyond evidence."]}
 ]
};

C["19.5"]={
 heading:"Cumulative frequency tables and diagrams",
 summary:"Cumulative frequency is a running total. For grouped continuous data, plot cumulative totals against upper class boundaries as small crosses and join them with a smooth increasing curve.",
 keywords:["cumulative frequency","running total","upper class boundary","curve","grouped data"],
 explain:[
  "Each cumulative total counts all observations up to the end of that class.",
  "The SoW specifies plotting against upper class boundaries, not midpoints.",
  "Cumulative frequency cannot decrease as x increases.",
  "Plot small crosses and join with a smooth curve rather than a jagged frequency polygon."
 ],
 rules:["CF is a running total.","Plot at upper class boundaries.","Curve is non-decreasing.","Final cumulative frequency equals total number of observations."],
 formulas:[],
 method:["Calculate running cumulative totals.","Identify upper boundary of each class.","Choose axes: data value horizontally, CF vertically.","Plot each boundary/CF pair as a small cross.","Draw a smooth increasing curve."],
 mistakes:["Do not plot at class midpoints.","Do not plot ordinary frequencies instead of cumulative totals.","The curve should not decrease.","Do not connect with sharp zig-zag segments if a smooth curve is expected."],
 diagram:"cumfreq",
 examSuccess:{pages:[208,209,210],note:"Exam Success statistics includes cumulative-frequency/box-plot work; Cambridge pp.686–692 Ex20.2–20.3 is primary."},
 examples:[
  {source:"Cambridge Ex20.2 pattern",q:"Frequencies are 5,8,11,6 for classes ending at 10,20,30,40. Form cumulative frequencies.",steps:["Running totals: 5.","5+8=13.","13+11=24.","24+6=30.","CFs: 5,13,24,30."],diagram:"cumfreq"},
  {source:"Plotting",q:"Plot cumulative points \\((10,5),(20,13),(30,24),(40,30)\\).",steps:["Use upper class boundaries 10,20,30,40.","Use CF values vertically.","Plot small crosses.","Draw a smooth increasing curve."],diagram:"cumfreq"},
  {source:"Missing frequency",q:"Cumulative frequencies are 7,19,31,40. Find ordinary frequencies.",steps:["First frequency =7.","Second =19-7=12.","Third =31-19=12.","Fourth =40-31=9."]},
  {source:"Check",q:"Why must final CF equal sample size?",steps:["CF accumulates every observation through all classes.","At the last upper boundary, all observations have been counted."]}
 ],
 practice:{
  foundation:["Find CFs for 4,7,5,9.","Convert CFs 3,8,16,20 back to frequencies.","State which class boundary is plotted.","State final CF for 60 observations."],
  core:["Complete a CF table from grouped frequencies.","Plot five CF points from upper boundaries.","Explain why CF graph never falls.","Recover missing ordinary frequency from adjacent CFs.","Choose suitable vertical scale for n=120."],
  extension:["A CF table has a missing frequency and known final total; find it.","Compare two cumulative tables.","Explain the effect of one very large last class frequency on curve shape.","Create frequencies producing CFs 5,14,23,30."],
  reasoning:["Why are upper boundaries used?","Why is a smooth curve appropriate for grouped continuous data?","A student plots frequencies at midpoints. Explain what graph they are actually closer to drawing."]
 },
 homework:[
  {tier:"Foundation",q:"Frequencies 3,5,8,4. Find CFs.",steps:["3, 8, 16, 20."]},
  {tier:"Core",q:"CFs are 6,15,28,35. Find frequencies.",steps:["6.","15-6=9.","28-15=13.","35-28=7."]},
  {tier:"Core",q:"Which x-values should be used for classes 0≤x<10,10≤x<20,20≤x<30?",steps:["Upper boundaries: 10,20,30."]},
  {tier:"Extension",q:"Why can a CF curve be steep in one interval?",steps:["Many observations accumulate over a small horizontal interval.","That class has relatively high frequency."]}
 ]
};

C["19.6"]={
 heading:"Median, quartiles and percentiles from cumulative frequency",
 summary:"A cumulative-frequency curve allows estimates of median, quartiles, percentiles and proportions. Locate a cumulative position first, then read horizontally to the curve and vertically to the data axis.",
 keywords:["median","quartile","percentile","IQR","cumulative frequency"],
 explain:[
  "For n observations, median is read at CF \\(n/2\\), Q1 at \\(n/4\\), Q3 at \\(3n/4\\).",
  "The pth percentile is read at CF \\(p/100\\times n\\).",
  "IQR is \\(Q_3-Q_1\\).",
  "Because data are grouped and the curve is drawn, readings are estimates."
 ],
 rules:["Q1 at \\(n/4\\).","Median at \\(n/2\\).","Q3 at \\(3n/4\\).","pth percentile at \\(pn/100\\)."],
 formulas:["Q_1:\\frac n4","\\text{median}:\\frac n2","Q_3:\\frac{3n}{4}","IQR=Q_3-Q_1"],
 method:["Find total n.","Calculate the cumulative position.","From that CF value, move horizontally to the curve.","Move vertically to data axis and read estimate.","For IQR, subtract Q1 from Q3."],
 mistakes:["Do not use x-axis halfway point for median unless data distribution makes it so.","Quartiles refer to cumulative positions, not class numbers.","Graph-read answers should be reported as estimates."],
 diagram:"cumfreq",
 examSuccess:{pages:[208,209,210],note:"Exam Success cumulative-frequency work supports quartiles/percentiles; Cambridge Ex20.2–20.3 is primary."},
 examples:[
  {source:"Quartiles",q:"A CF curve represents 80 values. At what CF values are Q1, median, Q3 read?",steps:["Q1: \\(80/4=20\\).","Median: \\(80/2=40\\).","Q3: \\(3(80)/4=60\\)."],diagram:"cumfreq"},
  {source:"Percentile",q:"For 200 candidates, find CF position of the 85th percentile.",steps:["\\(0.85\\times200=170\\).","Read the data value at CF=170 on the curve."],diagram:"cumfreq"},
  {source:"Top percentage",q:"Only top 20% of 200 candidates progress. Which CF gives cutoff?",steps:["If top 20% progress, 80% are at/below cutoff.","\\(0.8\\times200=160\\).","Read x at CF=160."],diagram:"cumfreq"},
  {source:"IQR",q:"A graph gives Q1≈18 and Q3≈31. Find IQR.",steps:["\\(IQR=31-18=13\\)."]}
 ],
 practice:{
  foundation:["For n=60 state median CF.","For n=80 state Q1/Q3 CF.","For n=100 state 90th-percentile CF.","Find IQR if Q1=12,Q3=29."],
  core:["Read median from a supplied CF curve.","Read Q1,Q3 and calculate IQR.","Estimate 75th percentile.","Estimate number above threshold from CF reading.","Find cutoff for lowest 10%."],
  extension:["Compare two CF curves using median/IQR.","Estimate probability a value lies below threshold.","Find top-15% cutoff for n=240.","Explain uncertainty if curve is very steep at percentile."],
  reasoning:["Why does top 20% correspond to 80th percentile cutoff?","Why are graph quartiles estimates?","What does a smaller IQR mean in context?"]
 },
 homework:[
  {tier:"Foundation",q:"n=100. State median CF.",steps:["50."]},
  {tier:"Core",q:"n=120. State Q1 and Q3 CF.",steps:["Q1=30.","Q3=90."]},
  {tier:"Core",q:"Q1=18,Q3=31. Find IQR.",steps:["13."]},
  {tier:"Extension",q:"Top 10% of 250 get award. Which CF gives cutoff?",steps:["90% lie at/below cutoff.","\\(0.9\\times250=225\\).","Read x at CF 225."]}
 ]
};

C["19.7"]={
 heading:"Draw and interpret histograms",
 summary:"Histograms represent continuous grouped data. Unlike bar charts, adjacent classes have touching bars and bar area—not height alone—is proportional to frequency.",
 keywords:["histogram","continuous","class width","frequency density","bar area"],
 explain:[
  "When class widths are unequal, raw frequency cannot be used directly as bar height.",
  "Frequency density \\(=\\frac{\\text{frequency}}{\\text{class width}}\\). The SoW requires the vertical axis label 'Frequency density'.",
  "Each rectangle's area is density × class width = frequency.",
  "Bars touch because the horizontal scale is continuous."
 ],
 rules:["Vertical axis: Frequency density.","Bars touch.","Bar width equals class width.","Bar area is proportional to frequency."],
 formulas:["\\text{frequency density}=\\frac{f}{\\text{class width}}","f=\\text{density}\\times\\text{class width}"],
 method:["Find class width for every interval.","Calculate frequency density.","Draw continuous horizontal class scale.","Use density vertical scale.","Draw bars touching with exact widths/heights."],
 mistakes:["Do not use frequency as height when widths differ.","Do not put gaps between continuous bars.","Do not label vertical axis 'frequency' if plotting density.","Tallest bar means greatest density, not necessarily greatest frequency."],
 diagram:"histogram",
 examSuccess:{pages:[199,200,201,202,203],note:"Exam Success statistical-diagram pages include histograms; Cambridge pp.676–679 Ex20.1 is the direct SoW source."},
 examples:[
  {source:"Direct Cambridge histogram exercise",q:"Class \\(140<h\\le150\\) has frequency 15. Find frequency density.",steps:["Class width \\(=10\\).","Density \\(=15/10=1.5\\).","Histogram bar height =1.5."],diagram:"histogram"},
  {source:"Recover frequency",q:"A histogram bar from 150 to 160 has density 3.5. Find frequency.",steps:["Width \\(=10\\).","Frequency \\(=3.5\\times10=35\\)."],diagram:"histogram"},
  {source:"Unequal widths",q:"Class 160–165 has frequency 20. Compare height with a 10-wide class also frequency 20.",steps:["First density \\(=20/5=4\\).","Second density \\(=20/10=2\\).","Equal frequencies can have different heights."],diagram:"histogram"},
  {source:"Area meaning",q:"Explain why a bar twice as wide but half as tall can represent the same frequency.",steps:["Histogram frequency corresponds to area.","Area = width × density.","Doubling width and halving height keeps area unchanged."]}
 ],
 practice:{
  foundation:["Find density: f=12,width=4.","Find density: f=18,width=6.","Find frequency: density=2.5,width=8.","Find width for class 30–45.","State vertical-axis label."],
  core:["Find frequency for density 1.8,width15.","Find width for f=24,density3.","Complete table with missing density.","Draw histogram from unequal-width table.","Recover missing frequency from histogram."],
  extension:["Two bars have equal area but different widths. Compare frequencies.","Find missing bar height from total frequency.","Estimate fraction above threshold that cuts through a class, assuming uniformity.","Design grouped table matching a specified histogram."],
  reasoning:["Why can equal-frequency classes have different heights?","Why does histogram area, not height, encode frequency?","Critique a 'histogram' drawn with gaps and raw-frequency heights for unequal widths."]
 },
 homework:[
  {tier:"Foundation",q:"Frequency 21,width7. Find density.",steps:["\\(21/7=3\\)."]},
  {tier:"Foundation",q:"Density1.5,width12. Find frequency.",steps:["\\(1.5\\times12=18\\)."]},
  {tier:"Core",q:"Frequency30,density2.5. Find width.",steps:["\\(30/2.5=12\\)."]},
  {tier:"Core",q:"Class 50–65 has f=24. Find density.",steps:["Width15.","Density \\(=24/15=1.6\\)."]},
  {tier:"Extension",q:"Explain why vertical axis must be frequency density for unequal class widths.",steps:["Area must represent frequency.","Using density makes area = width×(frequency/width)=frequency."]}
 ]
};

C["19.8"]={
 heading:"Calculate with frequency density",
 summary:"Frequency density links table frequencies to histogram geometry. Rearrange \\(\\text{density}=f/\\text{width}\\) to find any missing quantity and use bar area to recover frequencies.",
 keywords:["frequency density","class width","frequency","area","histogram"],
 explain:[
  "The same relationship can be rearranged three ways: density=f/width, f=density×width, width=f/density.",
  "Reading a histogram requires both bar height and horizontal width.",
  "For comparisons, remember that tallest bar indicates greatest density; greatest area indicates greatest frequency."
 ],
 rules:["\\(d=f/w\\).","\\(f=dw\\).","\\(w=f/d\\).","Histogram bar area is proportional to frequency."],
 formulas:["d=\\frac fw","f=dw","w=\\frac fd"],
 method:["Read/compute class width.","Identify known quantity: f or density.","Use correct rearrangement.","Check units/scale on vertical axis.","For histogram totals, sum frequencies recovered from each bar."],
 mistakes:["Do not confuse class width with midpoint.","Do not compare frequency using height only.","Read density scale carefully."],
 diagram:"histogram",
 examSuccess:{pages:[199,200,201,202,203],note:"Use Exam Success histogram exercises for consolidation after Cambridge Ex20.1."},
 examples:[
  {source:"Density",q:"A class 20≤x<35 has frequency 30. Find density.",steps:["Width \\(=35-20=15\\).","Density \\(=30/15=2\\)."],diagram:"histogram"},
  {source:"Frequency",q:"A bar has density 4.2 and width 5. Find frequency.",steps:["\\(f=dw\\).","\\(f=4.2\\times5=21\\)."],diagram:"histogram"},
  {source:"Width",q:"A class has frequency 18 and density 1.5. Find width.",steps:["\\(w=f/d\\).","\\(18/1.5=12\\)."]},
  {source:"Compare",q:"Bar A width 5,density4; Bar B width10,density2.5. Which has greater frequency?",steps:["A frequency \\(=5\\times4=20\\).","B frequency \\(=10\\times2.5=25\\).","B has greater frequency even though lower height."]}
 ],
 practice:{
  foundation:["Find d if f=16,w=4.","Find f if d=3,w=7.","Find w if f=20,d=2.5.","Find width of 40≤x<55."],
  core:["Class 10–25 f=18: find d.","Bar d=1.8,width20: find f.","Complete a density table with two missing entries.","Recover total frequency from four bars.","Identify modal class using density carefully."],
  extension:["Find missing density if total frequency known.","A histogram scale mark corresponds to density 0.5; recover frequencies.","Compare equal-area bars.","Estimate frequency in a partial subinterval assuming uniform distribution."],
  reasoning:["A tallest bar is not necessarily highest frequency. Give numbers proving this.","Why does density have units like 'frequency per unit x'?","Explain how rescaling horizontal units affects numerical density values."]
 },
 homework:[
  {tier:"Foundation",q:"f=28,w=7. Find density.",steps:["\\(28/7=4\\)."]},
  {tier:"Core",q:"d=2.4,w=15. Find f.",steps:["\\(2.4\\times15=36\\)."]},
  {tier:"Core",q:"f=30,d=1.5. Find width.",steps:["\\(30/1.5=20\\)."]},
  {tier:"Extension",q:"Bar A width8,density3; Bar B width12,density2. Which frequencies?",steps:["A=24.","B=24.","Equal frequencies despite different heights/widths."]}
 ]
};

C["19.9"]={
 heading:"Infer from statistical diagrams",
 summary:"A graph or chart supports conclusions only when the reading and comparison are tied to the data. Distinguish exact values from estimates and descriptive evidence from causal claims.",
 keywords:["infer","estimate","evidence","trend","context"],
 explain:[
  "Inference here means drawing a supported statement from a diagram, not guessing beyond it.",
  "Bar/pie charts often give exact or directly calculable values; cumulative-frequency/scatter graphs usually involve estimates or trends.",
  "Use numerical evidence in comparisons.",
  "State limitations when the visual cannot support a stronger claim."
 ],
 rules:["Quote the graph evidence.","Label estimates as estimates.","Do not infer causation from association.","Check scale and sample context."],
 formulas:[],
 method:["Identify what the diagram actually encodes.","Read/calculates the relevant value.","Compare with a second value if needed.","Write a contextual statement.","Add a limitation if the evidence is approximate or observational."],
 mistakes:["Do not state more than the graph supports.","Do not ignore different group sizes/scales.","A visual trend may be affected by outliers."],
 diagram:"bar",
 examSuccess:{pages:[197,198,203,211,212],note:"Exam Success statistical-diagram interpretation; Cambridge Ex12.3 Q6–7 plus chart work."},
 examples:[
  {source:"Bar-chart inference",q:"Category A frequency 24 and B frequency 18. What can be concluded?",steps:["A has 6 more observations than B.","Or A is \\(24/18=1.33\\) times B.","No causal conclusion follows."]},
  {source:"CF inference",q:"A CF graph estimates median 42 and Q3 58. Give one inference.",steps:["Half the data are at/below about 42.","About 75% are at/below about 58.","Use 'about' because readings are estimated."],diagram:"cumfreq"},
  {source:"Scatter inference",q:"A strong positive scatter trend is shown. What prediction is justified?",steps:["Within the observed range, higher x tends to be associated with higher y.","A line of best fit can support approximate interpolation.","Causation is not established."],diagram:"scatter"}
 ],
 practice:{
  foundation:["State a comparison from frequencies 12 and 19.","Convert pie angle 90° to proportion.","Write one cautious statement from positive scatter trend.","Identify whether a CF median is exact/estimated."],
  core:["Infer typical/spread difference from two box summaries.","Infer proportion below a threshold from CF.","Interpret a histogram class with greatest area.","Compare two bar-chart categories using percentage difference.","Identify an unsupported conclusion."],
  extension:["Write two valid and one invalid conclusion from a scatter plot.","Compare distributions shown on cumulative curves.","Explain how scale choice may exaggerate visual differences.","Combine information from table and chart to support a conclusion."],
  reasoning:["What makes an inference evidence-based?","Why should 'approximately' appear in many graph-read answers?","How can a visually dramatic graph still represent a small numerical difference?"]
 },
 homework:[
  {tier:"Foundation",q:"A pie sector is 144°. What proportion?",steps:["\\(144/360=0.4\\).","40%."]},
  {tier:"Core",q:"CF graph: Q1≈20,Q3≈44. State IQR and meaning.",steps:["IQR≈24.","Middle 50% spans about 24 units."]},
  {tier:"Extension",q:"A scatter plot is strongly positive. Write a valid conclusion and an invalid causal one.",steps:["Valid: higher x tends to be associated with higher y.","Invalid: increasing x definitely causes y to increase."]}
 ]
};

C["19.10"]={
 heading:"Compare sets of data using graphs",
 summary:"Graphs allow visual comparison of centre, spread, shape and unusual values. A complete comparison should be quantitative wherever the graph permits.",
 keywords:["compare","median","IQR","spread","distribution","outlier"],
 explain:[
  "Cumulative-frequency curves can compare medians and IQRs.",
  "Histograms can compare shape, modal regions and relative concentration, but frequencies require attention to area.",
  "Scatter diagrams compare relationships rather than one-variable distributions.",
  "Use the same feature for both sets and support with values."
 ],
 rules:["Compare centre using the same statistic.","Compare spread using same measure.","Use graph-specific features correctly.","Avoid declaring an overall winner without a criterion."],
 formulas:["IQR=Q_3-Q_1"],
 method:["Identify graph type and comparable features.","Read centre values.","Read/estimate spread values.","Mention shape/outliers if relevant.","State contextual comparison with numbers."],
 mistakes:["Do not compare histogram heights as frequencies if widths differ.","Do not compare median of A with mean of B.","A smaller spread means greater consistency, not necessarily better outcomes."],
 diagram:"cumfreq",
 examSuccess:{pages:[208,209,210,203],note:"Exam Success cumulative-frequency/histogram material supports distribution comparison; SoW requires graph comparison."},
 examples:[
  {source:"CF comparison",q:"A median 52,IQR18; B median 47,IQR10. Compare.",steps:["A has higher typical value by median.","B is more consistent by smaller IQR.","State both; no overall preference without context."],diagram:"cumfreq"},
  {source:"Histogram comparison",q:"Histogram A is concentrated in lower classes; B shifted right with similar spread. Interpret.",steps:["B generally has larger values.","Similar horizontal spread suggests similar variability.","Use exact readings if axes permit."],diagram:"histogram"},
  {source:"Outlier comparison",q:"One group has same median as another but a long upper tail. What can be said?",steps:["Typical middle value is similar.","The long upper tail suggests greater upper-end spread/skewness.","Further measures may be needed."]}
 ],
 practice:{
  foundation:["Compare medians 24 and 31.","Compare IQRs 8 and 15.","State which set more consistent.","Write two-sentence comparison."],
  core:["Compare two CF summaries.","Compare two histograms with unequal class widths.","Identify which graph shows greater spread.","Compare shape and centre from histogram descriptions.","Explain an outlier's effect."],
  extension:["Compare two distributions with same median/different shape.","Discuss whether IQR or range is better for skewed data.","Write a four-feature graph comparison.","Critique a comparison based only on modal class."],
  reasoning:["Why isn't higher median automatically 'better'?","Can two distributions have same median and IQR but differ? Explain.","Why should histogram area be considered in comparison?"]
 },
 homework:[
  {tier:"Foundation",q:"A median 60,IQR12; B median55,IQR8. Compare.",steps:["A higher typical value.","B smaller spread/more consistent."]},
  {tier:"Core",q:"Two CF curves: A reaches n/2 at x=40, B at x=46. What centre conclusion?",steps:["B has higher estimated median by about 6 units."]},
  {tier:"Extension",q:"Explain why same median does not imply same histogram shape.",steps:["Median only locates the halfway point.","Distribution of values either side can differ greatly."]}
 ]
};

C["19.11"]={
 heading:"Restrictions on conclusions from graphs",
 summary:"Graphs can mislead through scale, grouping, sampling, extrapolation and causal overinterpretation. A strong answer identifies exactly what the graph can and cannot justify.",
 keywords:["scale","bias","grouping","extrapolation","causation","uncertainty"],
 explain:[
  "A truncated axis can visually magnify small differences.",
  "Grouped graphs hide exact individual values and may depend on chosen class intervals.",
  "Scatter trends outside the observed range are extrapolations.",
  "A graph inherits limitations of the data collection method."
 ],
 rules:["Inspect axes/scales before interpreting.","Treat grouped readings as approximate.","Do not infer causation from correlation.","Do not generalise beyond the sampled population without justification."],
 formulas:[],
 method:["Check axis origin/scale and class structure.","Identify what data are missing or grouped.","Check sample/population match.","Identify interpolation vs extrapolation.","Phrase a limitation linked to the requested conclusion."],
 mistakes:["Do not call a graph 'biased' without identifying the mechanism.","A graph can be accurate but still based on a biased sample.","Visual steepness depends on axis scales."],
 diagram:"scatter",
 examSuccess:{pages:[211,212,213,197,198],note:"Exam Success correlation and graph interpretation supports cautious conclusions; SoW explicitly requires restrictions."},
 examples:[
  {source:"Truncated axis",q:"Two bars are 98 and 100, but axis starts at 97. Why may the chart mislead?",steps:["Absolute difference is only 2.","Starting at 97 makes one bar appear much taller relative to displayed range.","Readers may overestimate practical difference."]},
  {source:"Extrapolation",q:"Data x-range is 10–40; graph predicts at x=100. Limitation?",steps:["Prediction is far outside observed range.","Trend may change.","This extrapolation is less reliable."]},
  {source:"Grouped data",q:"A histogram suggests many values between 20 and 30. Can exact values be known?",steps:["No.","Only class membership/frequency is known.","Exact positions within class are hidden."]},
  {source:"Sample",q:"A perfect graph shows opinions of 50 volunteers from one class. Can it represent entire school?",steps:["Graph accuracy does not fix sampling bias.","One class/volunteers may not be representative.","Generalisation should be limited."]}
 ],
 practice:{
  foundation:["Identify issue with truncated axis.","State why histogram loses exact values.","State why extrapolation is risky.","Explain correlation≠causation."],
  core:["Critique a graph with uneven category spacing.","Critique a sample-based graph.","Explain effect of class width choices.","Identify whether an inference is interpolation/extrapolation.","Rewrite overconfident conclusion."],
  extension:["Design a misleading but technically accurate graph and explain mechanism.","Compare two class-groupings of same data.","Explain how outliers can distort a best-fit line.","Evaluate a causal claim based on scatter data."],
  reasoning:["Can a graph be mathematically correct yet rhetorically misleading? Explain.","Why are limitations context-specific?","What extra evidence would strengthen a causal conclusion?"]
 },
 homework:[
  {tier:"Foundation",q:"Why can an axis starting at 99 exaggerate difference between 100 and 101?",steps:["The displayed range is tiny.","One-unit difference occupies large visual fraction."]},
  {tier:"Core",q:"Why is a cumulative-frequency median approximate?",steps:["Data are grouped.","Curve interpolation/read-off introduces approximation."]},
  {tier:"Extension",q:"A line of best fit predicts far beyond data. State two risks.",steps:["Relationship may stop being linear.","External conditions may differ beyond observed range."]}
 ]
};
})(window.LESSON_CONTENT);