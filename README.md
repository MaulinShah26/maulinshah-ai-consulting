# Maulin Shah — Portfolio Site

A Next.js 14 portfolio for a Fractional AI Lead. Built with TypeScript, Tailwind CSS, Geist fonts, and Lucide icons.

## Quick start

```bash
# install dependencies
npm install

# run dev server
npm run dev
# opens at http://localhost:3000

# build for production
npm run build

# preview production build locally
npm run start
```

Node 18.17+ required.

## Project structure

```
maulin-portfolio/
├── app/
│   ├── layout.tsx       # root layout, fonts, metadata, OG tags
│   ├── page.tsx         # composes all sections
│   └── globals.css      # tailwind directives + reveal animations
├── components/          # one file per section
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── Situation.tsx
│   ├── Approach.tsx
│   ├── Outcomes.tsx
│   ├── Work.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── SectionHeader.tsx  # reused eyebrow + rule
│   └── Reveal.tsx         # scroll-triggered reveal wrapper
├── lib/
│   ├── data.ts            # ALL site copy lives here
│   └── inlineEm.tsx       # renders _italic_ markdown in body text
├── tailwind.config.ts     # brand tokens (accent teal, neutrals, pills)
└── package.json
```

## Before you deploy — placeholders to replace

Search the codebase for `PLACEHOLDER`. Each one is marked with a comment explaining what to replace. Specifically:

**`lib/data.ts`**:
- `meta.siteUrl` — your final domain
- `social.email` — your real email
- `social.linkedin` — your LinkedIn URL
- `social.twitter` — your X/Twitter URL
- `social.github` — your GitHub URL
- `work.cards[*].href` — real URLs for each product (Nerdy Cricket, AI-Trading-Copilot, AI-JobImpact, Case studies)

**`app/layout.tsx`**:
- `twitter.creator` — your Twitter handle (e.g. `@maulinshah`)

That's it. The actual copy is locked in based on positioning work; only URLs and emails need real values.

## Deploying to Vercel

1. Push this repo to GitHub.
2. Go to vercel.com, sign in with GitHub.
3. Click "Add New Project," select the repo.
4. Vercel auto-detects Next.js. Click Deploy.
5. You'll get a `<your-project>.vercel.app` URL in ~2 minutes.
6. To add your custom domain: Project Settings → Domains → Add. Buy domain from Cloudflare Registrar if you haven't; point nameservers to Vercel's NS records.

## Editing content

All copy is in `lib/data.ts`. Change the strings, save — the page updates. Components don't need to be touched for content edits.

Adding a new "work" card? Just push another object into the `work.cards` array in `lib/data.ts`. Icon names use Lucide's PascalCase format (e.g. `Briefcase`, `Bot`, `NotebookPen`).

## Iterating with Claude

This codebase is structured for AI-assisted iteration:

- Components are small (~50 lines each) so Claude can hold them in context.
- Content is separated from JSX, so copy edits don't touch logic.
- Tailwind config holds design tokens, so a global style change is one file.
- TypeScript strict mode catches drift early.

When iterating, paste the relevant component file plus `lib/data.ts` into Claude and describe the change. Don't paste the whole project at once.

## Adding new sections

1. Create `components/NewSection.tsx` following the existing pattern.
2. Add content to `lib/data.ts` under a new export.
3. Import and render it in `app/page.tsx`.

Wrap each new section in `<Reveal>` for consistent scroll-in animations.
