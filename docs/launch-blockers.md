# Larderlab — Launch Blockers (2026-04-29)

What stands between larderlab today and "leave it alone for 3 months and just upload content."

Status as of branch `feat/seo-readiness-2026-04`.

---

## TL;DR

**Three blockers — smaller than the other sites because compliance was already shipped.**

| Blocker | Owner | Time | Status |
|---|---|---|---|
| 1. Merge `feat/seo-readiness-2026-04` PR | Fabian | 5 min | ❌ open |
| 2. Fill 3 operator placeholders in `impressum.ts` + `terms.ts` + `privacy-policy.ts` | Fabian + lawyer | 30 min + lawyer turnaround | ❌ pending |
| 3. Set Vercel env vars (Beehiiv + Neon) | Fabian | 15 min | ❌ pending |

After those three, larderlab is in pure content-upload mode. The build, schema, audit:claims gate, EN-only flat-root routing, and 14-post database are production-ready.

---

## Blocker 1 — Merge the SEO-readiness PR

**Branch:** `feat/seo-readiness-2026-04`
**PR URL:** https://github.com/EcomSEO/larderlab.com/pull/new/feat/seo-readiness-2026-04

**What ships on merge:**
- 4 new high-priority posts (high-protein meal prep, electrolytes, meal-prep containers, multivitamin)
- audit:claims script tightened to suppress legitimate "we don't use [forbidden words]" editorial-standards copy
- Q2 2026 keyword priority research

**Action:** review the PR, merge to main. Vercel auto-deploys.

---

## Blocker 2 — Operator placeholders (already-shipped legal stack)

Unlike circadianstack (where the legal data layer didn't exist), larderlab already shipped `lib/content/{impressum,terms,privacy-policy}.ts` in commits `e586aa3` + `5dc4af0`. They contain `[Operator Name]`, `[Address]`, `[Operator's chosen jurisdiction]` placeholders waiting to be filled.

### Files + lines

| File | Placeholder | Line |
|---|---|---|
| `lib/content/impressum.ts` | `[Operator Name]` | 8 |
| `lib/content/terms.ts` | `[Operator's chosen jurisdiction]` | 89 |
| `lib/content/privacy-policy.ts` | DSR contact + operator | search file |

Same template as the rest of the network. Fill once, lawyer-review once, deploy.

### Lawyer review

Budget $300–800 for a one-time legal review of the privacy + terms + impressum stack before public launch. larderlab is a YMYL nutrition site; the regulatory exposure is real.

---

## Blocker 3 — Vercel environment variables

| Env var | Used by |
|---|---|
| `BEEHIIV_API_KEY` | Newsletter form |
| `BEEHIIV_PUBLICATION_ID` | Newsletter form |
| `NEON_DATABASE_URL` | Per-site analytics + event tracking |

Set in the Vercel dashboard for the `larderlab` project, production scope.

---

## Not-blocking, but worth knowing

### Gate B content target

The prompt's Gate B target is 80 published posts. Current count: 14 (10 pre-existing + 4 added on this branch). Remaining 66: see `docs/research/larderlab-keyword-priority-2026-q2.md` for the prioritized backlog. Highest priority next batch:

1. vitamin-d-dose-protocol (6,600/mo, KD 36)
2. best-fish-oil-2026 (3,600/mo, KD 36)
3. omega-3-dosage-explained (1,600/mo, KD 17)
4. leucine-threshold-explained (140/mo, KD 5, +129% yoy growing)
5. shelf-life-of-olive-oil (1,000/mo)
6. best-plant-based-protein-2026 (1,900/mo, KD 31)

### Routing — EN only by design (Option A)

Per `00-master-orchestration.md`: larderlab stays EN-only flat-root. The 12-locale i18n routing exists in the codebase but is not the active editorial direction. Translation work is out of scope.

### Authors / reviewers

`lib/content/reviewers.ts` does not exist. The brand book's "engineered larder" voice is intentionally byline-light, but a single accountable editor profile is the next-quarter E-E-A-T improvement.

### Photography

Phase 9 photography per kie.ai cookbook is partial — verify in next session.

---

## After the 3 blockers are cleared

You're in **append-only content mode**. See `docs/content-upload-runbook.md` for the workflow.

---

## Pointers

- Content upload workflow: `docs/content-upload-runbook.md`
- Q2 keyword priority: `docs/research/larderlab-keyword-priority-2026-q2.md`
- Network constitution: `~/Developer/active/health-network/CLAUDE.md`
- Brand book: `content/brand-book.md`
- Master orchestration: `~/Library/Application Support/Claude/.../health-network-seo-prompts/00-master-orchestration.md`
