# MathsGrove — Visual identity v2

**Positioning:** A considered, premium mathematics platform built for private practice, examiner judgement and clear academic progress.

## Brand direction

Minimal, editorial and precise — not metallic, decorative, cluttered or overtly corporate. The identity communicates academic confidence through whitespace, thoughtful typography, well-crafted interactions and calm surfaces.

### Colour palette

| Role | HEX | Guidance |
| --- | --- | --- |
| Deep navy | `#0D1B32` | Primary headings, navigation, primary buttons |
| Ivory | `#F7F4EF` | Main background and warm surfaces |
| Soft champagne beige | `#CDBBA0` | Restrained accents, illustrations, icon leaf |
| Dark ink | `#1A2B43` | Body headings |
| Secondary blue-grey | `#66768A` | Supporting text |
| Warm border | `#E6E0D6` | Card outlines and dividers |
| White | `#FFFFFF` | Cards and assessment surfaces |

**No shiny gold, gradients, metallic emblems or bright yellow.** Champagne is a muted neutral rather than a gold effect.

### Typography
- Display headings and wordmark: **Instrument Serif** (fallback Georgia)
- UI labels, body text and controls: **DM Sans**
- Do not use four different font families or oversized all-caps paragraphs.

### Logo
- File: `mathsgrove-icon.svg` — a scalable flat geometric M / growth symbol.
- Wordmark: `MathsGrove` in Instrument Serif with navy “Maths” and muted beige “Grove” on light surfaces. On dark surfaces, use ivory “Maths” and beige “Grove”.
- Keep generous clear space around the mark; do not stretch it or add glow/drop shadow.
- A compact app favicon uses only the square icon.

### Site experience
- **Public landing page**: Ivory-first, spacious hero, conceptual student dashboard, four platform benefits, simple pathway labels, learning process, illustrative Signature Review, private partner access.
- **Private portal**: Same logo, restrained typography and consistent controls.
- **Examiner Studio**: Deep navy sidebar with calm, light paper-like marking surfaces.
- **Honest communication**: Sample interfaces are explicitly labelled. Do not publish invented parent testimonials, grades, mark improvements, satisfaction ratings or examination-board endorsements.
- **Commercial**: Public prices and checkout intentionally omitted; partner discussions happen privately.

### Performance and accessibility
- Responsive with tablet/phone layouts, useful focus-visible states and reduced-motion styles.
- SVG assets for small, crisp logos and icon-like diagrams; avoid large unnecessary hero raster images.
- One static website with no UI framework dependencies is suitable for the current GitHub Pages preview.
- Production Supabase authentication, invitations and marking remain separate from presentation.

## Implementation files
- `index.html`, `brand-refresh.css`, `mathsgrove-icon.svg`: brand homepage
- `mathsgrove.css`, `mathsgrove.js`: preserved interactive example paper
- `portal.html`, `studio.html`, `private-refresh.css`: shared styling for private areas
- `scripts/check-site.mjs`: asset integrity and public-credential safety check
