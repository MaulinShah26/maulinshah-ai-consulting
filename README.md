# Maulin Shah — Data & AI Consulting Portfolio

Next.js 14 portfolio and consulting site for Maulin Shah, positioned around Data & AI Decision Systems and fractional leadership for growth-stage startups.

## Quick start

```bash
npm install
npm run dev
npm run build
```

Node 18.17+ required.

## Commercial V4 structure

The homepage is intentionally ordered around buyer trust and conversion:

1. Clear ICP + business outcome
2. Experience credibility
3. Proof / case studies
4. Founder diagnostic
5. Decision Systems category explanation
6. Operating model
7. Diagnose → Build → Operate engagement journey
8. Founder-facing About section
9. FAQ and contact

Commercial V4 copy lives in `lib/commercial-v4.ts`. Legacy and case-study content remains in `lib/data.ts`.

## SEO and analytics

- GA4 is loaded when `NEXT_PUBLIC_GA_ID` is set.
- `NEXT_PUBLIC_SITE_URL` can override the current Vercel URL when a custom domain is connected.
- `app/sitemap.ts` and `app/robots.ts` expose crawl metadata.
- `app/opengraph-image.tsx` generates the social preview image.
- `app/layout.tsx` includes canonical metadata plus Person and ProfessionalService structured data.

## Trust assets still requiring real inputs

Do not fabricate these. Add them only when approved and attributable:

- 3–5 testimonials from founders, senior leaders, or close collaborators
- A professional headshot suitable for the About section
- A custom domain and domain-based email address

`testimonialsV4` in `lib/commercial-v4.ts` is the intended insertion point for approved quotes.

## Main content locations

- `lib/commercial-v4.ts` — homepage positioning and commercial copy
- `lib/data.ts` — case studies, service-page copy, social links, legacy content
- `components/HeroV4.tsx` — conversion-focused hero with direct Calendly CTA
- `components/DecisionSystems.tsx` — category explanation
- `components/ServicesV4.tsx` — Diagnose → Build → Operate buying journey
- `components/AboutV4.tsx` — founder-facing narrative and career progression
- `app/page.tsx` — homepage composition

## Deployment

Vercel can deploy directly from the repository. When a custom domain is ready, set `NEXT_PUBLIC_SITE_URL` to the canonical HTTPS domain so metadata, sitemap, robots, and structured data all switch consistently.
