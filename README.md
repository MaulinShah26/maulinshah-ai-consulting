# Maulin Shah portfolio

Next.js 14 portfolio for Maulin Shah, focused on Data & AI Decision Systems and fractional leadership.

## Current V4 architecture

The homepage is intentionally minimal. It acts as a front door and routes visitors to dedicated pages instead of stacking the whole portfolio into one long page.

Primary routes:

- `/` minimal homepage
- `/work` case studies and products
- `/services` engagement options
- `/about` background and experience
- `/contact` contact and booking
- `/services/*` individual service detail pages
- `/case-studies/*` detailed case studies

## Positioning

Core message:

**Turn messy data and AI into better growth decisions.**

Audience: growth stage consumer businesses that need stronger retention, customer intelligence, practical AI or senior Data and AI ownership.

## Trust rules

- Do not invent testimonials, client quotes or logos.
- Do not overstate outcomes.
- Keep the homepage concise.
- Put detail on the relevant dedicated page.
- Avoid dash punctuation in customer facing copy. Rewrite the sentence naturally instead of using a runtime text transformer.

## Environment

Set `NEXT_PUBLIC_SITE_URL` when moving to a custom domain. This is used by canonical metadata, robots, sitemap and structured data.

Set `NEXT_PUBLIC_GA_ID` to enable Google Analytics.

## Development

```bash
npm install
npm run dev
npm run build
```
