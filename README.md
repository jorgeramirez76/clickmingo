# ClickMingo — Website

Marketing site for **ClickMingo**, a revenue-first web/app/marketing/integrations agency in Long Branch, NJ.

> *Stand out. Get clicks. Close deals.*

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4
- React Router (HashRouter in production for static hosting)
- Motion for scroll-triggered reveals
- Bricolage Grotesque + Manrope + JetBrains Mono via Google Fonts
- Auto-deploy to GitHub Pages

## Pages

- `/` — Home: hero, positioning, services, case studies, process, testimonial, CTA
- `/services` — Full service breakdown + pricing tiers
- `/work` — Case studies (Harmony, TJRG, AI Sales Pipeline)
- `/about` — Operator story + track record + why-us list
- `/contact` — Lead form (mailto handoff) + direct contact

## Editing

All copy lives in **`src/lib/data.ts`** — services, case studies, stats, process steps, pricing, testimonials.

## Local

```bash
npm install
npm run dev
npm run build
```

Auto-deploys on push to `main` via `.github/workflows/deploy.yml`.
