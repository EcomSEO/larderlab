# Compliance — country-by-country mirror

Last reviewed: 27 April 2026.

This is a 30-line operator follow-up list. The substantive legal text lives in
the user-facing pages (`/privacy`, `/cookies`, `/terms`, `/affiliate-disclosure`,
`/impressum`) and in `lib/content/*` and `lib/compliance/*`. This file lists
what the operator must check per country before launch.

## Operator follow-ups (every locale)

- Fill in placeholders in `lib/content/impressum.ts` (operator name, address, registry, VAT-ID, responsible person).
- Set `[Operator's chosen jurisdiction]` in `lib/content/terms.ts` once incorporation is finalised.
- Confirm the data-processing agreements (Art. 28 GDPR) are on file with Vercel, Beehiiv, Neon, Supabase before activating each.
- Confirm no analytics/marketing cookies fire before consent. The default state is **no GA4, no Meta Pixel** — both are documented placeholders only.

## Country-specific notes

- **Germany (DE)** — TTDSG/TDDDG § 25 strict consent for non-essential cookies (handled by `CookieConsent`). Impressum at `/impressum` mandatory for any commercial activity. Heilmittelwerbegesetz (HWG) prohibits curative claims about food.
- **France (FR)** — CNIL "réglement cookies" requires equal-prominence Refuse button (handled). DGCCRF enforces Code de la consommation rigorously on amaigrissement / anti-âge claims.
- **Italy (IT)** — Garante Privacy & Codice del Consumo. Off-list health claims targeted: indicazione terapeutica, dimagrante, anti-età.
- **Spain (ES)** — AESAN food-safety + AEPD privacy. LGDCU enforcement against quemagrasas / antienvejecimiento copy.
- **Netherlands (NL)** — Autoriteit Persoonsgegevens (AP) is one of the strictest DPAs on cookie-consent equal prominence. NVWA enforces voedselveiligheid claims.
- **Poland (PL)** — UODO + Inspekcja Sanitarna (GIS). Polish translation of forbidden-claim list maintained in `lib/compliance/forbidden-claims.ts`.
- **Sweden (SE)** — IMY + Livsmedelsverket. Swedish marketing law (Marknadsföringslag) is unusually strict on health/wellness claims; Konsumentombudsmannen has active enforcement against viktminskning copy.
- **Portugal (PT)** — CNPD + ASAE. Portuguese enforcement explicitly targets anti-envelhecimento (see LifeVantage 2026). "Detox" and "superfood" prosecuted as misleading commercial practice.
- **Romania (RO)** — ANSPDCP + ANSVSA.
- **Czech Republic (CZ)** — ÚOOÚ + SZPI. EFSA closed-list strictly enforced.
- **Norway (NO)** — Datatilsynet + Mattilsynet. Norway is EEA-not-EU but applies GDPR via EEA agreement.

## Known content debt (audit-claims pass, 27 April 2026)

`pnpm audit:claims` currently flags 13 matches. Status is **known and accepted as content debt** until the humanizer pass clears them — the same pass that runs against `lib/content/posts.ts` and `lib/content/recipes.ts` body text. Breakdown:

- `lib/content/posts.ts:1240, 1320` — "anti-inflammatory" used to describe omega-3 / olive-oil polyphenols. Editorial replacement candidate: cite EFSA-permitted wording for individual nutrients (e.g. "contributes to the maintenance of normal blood lipids").
- `lib/content/posts.ts:1248` — "Nothing here treats, cures, or replaces a clinician's protocol" is **deliberately defensive disclaimer copy**; the words appear inside a negation clause. Either annotate with `audit-claims:allow` in the humanizer pass or rewrite as "Nothing here is a substitute for clinician care."
- `lib/content/posts.ts:1374` — "allowing repeated punctures" — the regex matches a substring inside "punctures"; **false positive**. Will be cleared by tightening the boundary in the next audit-script revision.
- `lib/content/hubs.ts:33, 35` — "anti-inflammatory" hub-blurb copy. Same humanizer rewrite as posts.ts.
- `i18n/dictionaries/{en,de,it,nl,sv}.json:182` — these strings explicitly enumerate forbidden words ("superfood, detox, clean, miracle") inside a negative editorial-standards bullet. **Legitimate occurrence** — fix in next audit-script revision by extending the existing allowlist heuristic (it currently catches "forbidden|prohibited" but not editorial negative-list framing).

The audit script is wired into CI via `pnpm audit:claims` and exits 1 on any violation, so further regressions will be caught. Clearing the 13 above is scheduled in the humanizer pass — outside the scope of the April 2026 EU compliance overhaul.
