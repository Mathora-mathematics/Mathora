# NES Year 10 Math

A GitHub Pages teaching site covering the 47 Year 10 scheme-of-work objectives, Units 12–22.

## Teaching resources

- `textbook-content.js` maps the supplied Cambridge IGCSE Mathematics Coursebook (Morrison & Hamshaw, 2023) and Exam Success (Bettison & Taylor, 2021) to lessons. Printed page numbers and PDF page numbers are recorded separately.
- Original exercise extracts preserve mathematical notation, tables and diagrams. Supporting selections are labelled wherever the scheme leaves its textbook reference blank.
- 39 additional source examples include original extracts with separate solution reveals or a retyped question and worked solution. Existing teacher examples and drawing grids remain available.
- `accurate-diagrams.js` draws tables and charts from each question’s actual data. Generic diagrams previously selected by slide position are no longer used in examples or worksheets.
- `source-questions.js` adds retyped source questions with worked solutions, including histogram density and grouped data.
- Homework and further-practice prompts are deduplicated across the two sets. Source exercise pages provide the larger question banks. Original textbook exercise extracts do not claim to include a complete solution key.

## Runtime

Open `index.html` using a static web server. The site uses KaTeX for mathematical notation, and supports lesson navigation, example slides, solution reveals, printable practice and homework, and pen-enabled grid whiteboards.

## Checks and deployment

Run `node scripts/validate.mjs` from the repository root. GitHub Actions also checks JavaScript syntax and asset references before deploying `main` to GitHub Pages.

https://mathora-mathematics.github.io/Mathora/
