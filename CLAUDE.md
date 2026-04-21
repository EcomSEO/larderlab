# Larderlab — Claude Code Guide

Read this first. Source of truth for how larderlab.com is built.

## What this repo is

Next.js 14 site at **larderlab.com** — evidence-led nutrition systems, pantry architecture, ingredient deep-dives, supplement comparisons. Calculators, frameworks, cited analyses. Not recipes.

## Stack
- Next.js 14 App Router, TypeScript, Tailwind
- Brand tokens: `ink #1A2332`, `paper #F5F2EB`, `copper #B87333`, `steel #6B7A8A`
- Fonts: Fraunces (headlines), Inter Tight (body), IBM Plex Mono (numerics — numbers are first-class)
- Vercel + Beehiiv + Neon (planned)

## Signature components (planned, not yet implemented)
- `<MacroCalculator>` — the primary SEO asset (covered in docs/site-spec.md §3)
- `<DataTable>` with monospace numerics
- `<PriceAsOf>` dated price component
- `<MethodologyBlock>`

## Launch flag
`lib/content/site.ts` → `SITE.launched` — keep `false` until launch checklist §9 is green.

## Voice
Engineered, numbers-first, tables-over-paragraphs. No recipes, no personality, no first-person. See `content/brand-book.md`.

## Commands
```bash
pnpm install
pnpm dev       # http://localhost:3001
pnpm build
```

## What not to do
- Flip `SITE.launched` early
- Write affiliate copy without applying truth-vs-trust
- Write in first person
- Use "superfood," "hack," "detox," "clean," "miracle"
- Link out to other sites in the network

## Pointers
- Voice: `content/brand-book.md`
- 150 posts: `docs/topical-map.md`
- Site build spec + CalculatorPage template: `docs/site-spec.md`
- Brand-to-review candidates: `docs/affiliate-partners.md`
- SERP wedge analysis: `docs/competitive-analysis.md`
- Sample briefs: `docs/sample-briefs.md`
