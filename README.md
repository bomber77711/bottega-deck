# Bottega Deck

Investor pitch deck for **Bottega Delivery** — an AI-powered marketplace for
authentic Italian food & beverage exports.

Built as a React + Vite + Tailwind single-page app so the deck lives in code:
every slide is a component, the design system is in `tailwind.config.js`, and
content updates are a single commit away.

## Run it

```bash
npm install
npm run dev
```

Then open the URL Vite prints (default `http://localhost:5173`). Navigate with:

- `→` / `Space` — next slide
- `←` — previous slide
- `Home` / `End` — first / last slide
- URL hash (`#5`) — jump directly to a slide

## Build for production

```bash
npm run build
npm run preview
```

Output goes to `dist_build/`.

## Project structure

```
src/
  components/
    Brand.tsx        Reusable brand primitives (Logo, Tomato, Eyebrow, StatCard)
    SlideShell.tsx   16:9 stage wrapper with page counter
  slides/
    01_Title.tsx     ...through 20_ThankYou.tsx
    index.ts         Ordered export of all slides
  App.tsx            Keyboard + hash navigation
  index.css          Fonts (Playfair Display + Inter) and .slide-stage
tailwind.config.js   Bottega brand colors and fonts
```

## Brand system

Core colors (from `tailwind.config.js`):

- **Greens** — `bottega-green`, `-green-dark`, `-green-deep`
- **Mints** — `bottega-mint`, `-mint-deep` (light backgrounds)
- **Reds** — `bottega-red`, `-red-dark` (accents, CTAs)
- **Neutrals** — `bottega-cream`, `-ink`, `-ink-soft`, `-muted`

Typography: Playfair Display for headlines (`font-display`), Inter for body.

## Editing content

- Each slide is a plain React component at `src/slides/NN_Name.tsx`.
- Numbers, copy, and colors are inline — edit the component and hot-reload.
- Reorder or hide slides by editing `src/slides/index.ts`.

## Notes

- Projections in the financial slides are illustrative and subject to change.
- Not an offer to buy or sell securities.
