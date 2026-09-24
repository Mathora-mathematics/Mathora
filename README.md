# Year 10 Mathematics Teaching Hub

A responsive lesson-by-lesson Cambridge IGCSE Mathematics teaching site for New English School Year 10.

## Curriculum and sources

The site contains 47 sub-unit lessons, Units 12–22, in the order defined by the 2026–2027 Year 10 scheme of work. Each lesson stores its Morrison & Hamshaw Cambridge IGCSE Mathematics page/exercise reference. The private teaching build also uses selected source extracts from the supplied Cambridge Coursebook and Exam Success materials.

## Runtime

The live site uses one stable application entrypoint:

- `index.html` — page shell and startup diagnostic
- `lessons.js` — 47-lesson SoW map exposed as `window.LESSONS`
- `app-stable.js` — navigation, teaching notes, examples, practice, homework, maths rendering and whiteboards
- `styles.css` — responsive desktop/iPad/phone styles
- `assets/book/` — selected textbook source extracts used in lesson pages

KaTeX is used when available for mathematical typesetting. The lesson navigation and content engine do not depend on KaTeX loading successfully.

## Reliability checks

The GitHub Pages workflow validates before every deployment:

- JavaScript syntax
- exactly 47 lessons
- unique lesson IDs
- required lesson metadata
- correct stable runtime reference in `index.html`
- presence of required textbook assets

A failed validation prevents a broken build from being deployed.

## Live site

https://mathora-mathematics.github.io/Mathora/
