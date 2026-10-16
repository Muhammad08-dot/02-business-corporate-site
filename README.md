# Calderwood Partners — Corporate Demo Site

Operations & growth consultancy website. Built as a portfolio piece to demonstrate agency-quality design and production-ready React code.

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | React 18 + Vite 5 |
| Language | TypeScript 5.6 |
| Styling | Tailwind CSS 3.4 (custom design tokens) |
| Routing | react-router-dom v6 |
| Icons | Lucide React |
| Fonts | Plus Jakarta Sans (headings) + Inter (body) via Google Fonts |

## Design System

- **Colors**: White + Deep Navy (#0F1F3D), one Emerald accent (#10805F), neutral line/fog surfaces
- **Typography**: Structured type scale (hero / h1x / h2x / stat / lead)
- **Radius**: 2px "sharp" — near-square corners for a structured, trustworthy feel
- **Spacing**: 4/8px base scale, section = 6.5rem vertical padding
- **Layout**: Max-width shell 80rem, ruled hairlines instead of shadows

## Pages

- **Home** — Client logos, stats band, featured case studies, services overview, CTA
- **Services** — Four practice areas with sticky sidebar navigation
- **About** — Firm story, beliefs list, team grid (6 partners/principals)
- **Case Studies** — Four detailed engagements with results metrics
- **Pricing** — Three engagement models + FAQ accordion
- **Blog** — Journal list with lead article
- **Blog Post** — Article detail + related reading sidebar
- **Contact** — Validated intake form + office details
- **404** — Clean not-found page

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (port 3002)
npm run dev

# Production build (TypeScript check + Vite bundle)
npm run build

# Preview production build
npm run preview
```

## Deploy (static — Netlify / Vercel)

The build output (`dist/`) is a pure static SPA bundle. `netlify.toml` and
`vercel.json` ship with the repo (SPA history fallback `/* → /index.html` is
pre-configured), so deploying is three commands:

```bash
# Netlify
npm install && npm run build
npx netlify deploy --prod --dir=dist

# Vercel
npm install && npm run build
npx vercel deploy --prod
```

No backend, no environment variables required — the contact form validates and
shows a success state entirely client-side.

## Environment Variables

Copy `.env.example` → `.env.local`. No external services required in demo mode; the contact form simulates submission client-side.

## Screenshots

Responsive QA captures (375 / 768 / 1280 px, production build) live in
[`_screenshots/02-corporate/`](../_screenshots/02-corporate).

## Portfolio Notes

- All copy is written to sound like a real consultancy — specific numbers, named partners, believable outcomes.
- Images sourced from Unsplash (verified for content and reliability).
- Accessible: semantic HTML, ARIA labels, keyboard navigation, focus rings, skip link, reduced-motion support.
- SEO: per-route title/description via `<Seo>` component.
