# Djitugo — Website

Production website for **Djitugo**, an independent digital marketing studio based in Bali.
Built with Next.js (App Router) + Tailwind v4 + GSAP. Black & white identity (2026 rebrand).

> *Where creativity meets technology.* — 700+ clients · est. 2018 · Denpasar, Bali

## Stack

- [Next.js 15](https://nextjs.org/) (App Router, Turbopack)
- [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first `@theme` tokens)
- [GSAP](https://gsap.com/) for motion (timelines + scroll reveal)
- TypeScript, ESLint-ready
- Deployed on [Vercel](https://vercel.com/) — every push to `main` deploys to production

## Local dev

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Production

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.tsx        # fonts + metadata
  page.tsx          # single-page composition
  globals.css       # design tokens, fonts, utilities
components/
  Nav.tsx           # sticky nav with glass-on-scroll
  Hero.tsx          # kinetic type reveal
  KPIStrip.tsx      # 700+ / 37K / 06 / 08
  Marquee.tsx       # client logo marquee
  Services.tsx      # 6-service asymmetric bento
  Process.tsx       # Listen → Shape → Ship → Scale
  Works.tsx         # selected works showcase
  About.tsx         # studio / founders / stats
  Testimonials.tsx  # editorial quote layout
  TickerCTA.tsx     # hover-swap ticker call-to-action
  Footer.tsx        # live Denpasar clock + contact
```

## Design tokens

Defined in [`app/globals.css`](app/globals.css) via Tailwind v4 `@theme`:

- **Colors:** `ink` `#0a0a0a` · `paper` `#f6f5f1` · 4-step gray scale
- **Fonts:** Fraunces (display) · Inter (sans) · JetBrains Mono (mono)
- **Type:** `text-mega` · `text-display` · `text-headline` (responsive `clamp`)

## Deployment

Pushing to `main` triggers a Vercel production build. Preview deploys spin up automatically for any other branch / pull request.

## Contact

- hello@djitugo.com
- +62 813-3732-9381 (WhatsApp)
- Jl. Bukit Sari Utara 88X, Denpasar Barat, Bali 80117
