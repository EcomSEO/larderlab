# larderlab.com

The Next.js 14 source for **larderlab.com** — evidence-led nutrition systems, pantry architecture, and supplement comparisons.

Read [CLAUDE.md](./CLAUDE.md) first.

## Local dev
```bash
pnpm install
pnpm dev       # http://localhost:3001
pnpm build
```

## Deploy
Auto-deploys to Vercel on push to `main`. Keep `SITE.launched = false` in `lib/content/site.ts` until the launch checklist in `docs/site-spec.md` is green.

## Key docs
- `content/brand-book.md` — voice and audience
- `docs/topical-map.md` — 150 posts, 5 hubs, Wave 1 priority
- `docs/site-spec.md` — IA, 8 templates including CalculatorPage
- `docs/sample-briefs.md` — 5 anchor briefs including the Macro Calculator
- `docs/affiliate-partners.md` — brands to review per category
- `docs/competitive-analysis.md` — SERP analysis + 10 positioning moves
