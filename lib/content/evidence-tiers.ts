/**
 * EvidencePill tier system.
 *
 * Each supplement (and supplement-adjacent claim) gets an A/B/C/D/F
 * letter tier with a published rationale and a list of primary sources.
 *
 * Hard rule: Affiliate revenue does NOT influence tier. The methodology
 * page must say so explicitly. The pre-commit hook should block edits
 * that move a tier without a corresponding rationale-and-citations diff.
 *
 * Tier definitions:
 *   A — Multiple high-quality RCTs, consistent effect, replicated in
 *       real-world settings, mechanism well-supported.
 *   B — Single high-quality RCT or multiple smaller RCTs with
 *       consistent direction; mechanism plausible.
 *   C — Mechanism plausible, observational data supportive, RCT
 *       evidence mixed or limited.
 *   D — Mechanism speculative, observational evidence weak, RCTs
 *       neutral or negative.
 *   F — Marketed claims contradicted by data; mechanism implausible.
 */

export type EvidenceTier = "A" | "B" | "C" | "D" | "F";

export const EVIDENCE_TIER_DESCRIPTIONS: Record<EvidenceTier, string> = {
  A: "Multiple high-quality RCTs with consistent effect; mechanism well-supported; replicated in real-world settings.",
  B: "Single high-quality RCT or multiple smaller RCTs with consistent direction; mechanism plausible.",
  C: "Mechanism plausible, observational data supportive, RCT evidence mixed or limited.",
  D: "Mechanism speculative, observational evidence weak, RCTs neutral or negative.",
  F: "Marketed claims contradicted by published data; mechanism implausible.",
};

export type EvidencePillEntry = {
  /** Slug used by the EvidencePill component to look up the entry. */
  slug: string;
  /** Display name shown in the pill. */
  name: string;
  tier: EvidenceTier;
  /** Short rationale rendered in the popover (≤ 140 chars ideal). */
  rationale: string;
  /** Long-form rationale rendered in the supplement-review post body. */
  longRationale: string;
  /** PubMed / publisher URLs for the cited primary sources. */
  primarySources: string[];
  /** ISO date this tier was last reviewed by the editorial team. */
  lastReviewed: string;
};

export const EVIDENCE_TIERS: Record<string, EvidencePillEntry> = {
  "creatine-monohydrate": {
    slug: "creatine-monohydrate",
    name: "Creatine monohydrate",
    tier: "A",
    rationale:
      "300+ RCTs across athletic populations; consistent strength + power gains; safe long-term.",
    longRationale:
      "Creatine monohydrate is the most-studied performance supplement on the market. Kreider et al. 2017 (J Int Soc Sports Nutr) summarised 300+ RCTs and found consistent ~5-15% strength gains and ~5-15% power gains across resistance-training cohorts. Long-term safety has been established across multi-year studies; 5 g/day is sufficient for full muscle saturation within 3-4 weeks (loading phases are unnecessary and provide no long-term advantage). The placebo response in creatine RCTs is unusually small, which is why effect sizes replicate so cleanly.",
    primarySources: [
      "https://pubmed.ncbi.nlm.nih.gov/28615996", // Kreider 2017 ISSN position
      "https://pubmed.ncbi.nlm.nih.gov/12701814", // Volek 2003 long-term safety
    ],
    lastReviewed: "2026-04-29",
  },
  "whey-protein-isolate": {
    slug: "whey-protein-isolate",
    name: "Whey protein isolate",
    tier: "A",
    rationale:
      "High biological value, leucine-rich, RCTs confirm MPS stimulation at 25-40 g doses post-resistance-training.",
    longRationale:
      "Whey protein isolate triggers maximal muscle-protein synthesis (MPS) at 25-40 g doses in young adults and 35-40 g in older adults (Moore et al. 2015; Phillips & Van Loon 2011). The leucine content (2.5-3.0 g per 25 g serving) crosses the threshold for the leucine-trigger hypothesis (Norton & Layman 2006). Whey isolate is the calibration point for protein-quality scoring; pea, rice, and soy are typically benchmarked against it on PDCAAS / DIAAS scales.",
    primarySources: [
      "https://pubmed.ncbi.nlm.nih.gov/26224750", // Moore 2015 dose-response
      "https://pubmed.ncbi.nlm.nih.gov/21864437", // Phillips & Van Loon 2011
    ],
    lastReviewed: "2026-04-29",
  },
  "fish-oil-omega-3": {
    slug: "fish-oil-omega-3",
    name: "Fish oil (EPA + DHA)",
    tier: "B",
    rationale:
      "RCTs support cardiovascular outcomes at 2-4 g EPA+DHA/day; weaker evidence for athletic performance.",
    longRationale:
      "REDUCE-IT (Bhatt 2019, NEJM) showed icosapent ethyl 2 g BID reduced major cardiovascular events 25% vs placebo in statin-treated patients with elevated triglycerides. The athletic-performance evidence is thinner — meta-analyses show modest improvements in inflammatory markers and DOMS reduction at 2-4 g/day, but no consistent strength or hypertrophy effect. Tier B because the cardiovascular RCT base is solid; tier A would require performance evidence the literature does not support.",
    primarySources: [
      "https://pubmed.ncbi.nlm.nih.gov/30415628", // REDUCE-IT 2019
      "https://pubmed.ncbi.nlm.nih.gov/30354678", // VITAL 2019
    ],
    lastReviewed: "2026-04-29",
  },
  "magnesium-glycinate": {
    slug: "magnesium-glycinate",
    name: "Magnesium bisglycinate",
    tier: "B",
    rationale:
      "Better tolerated than oxide / citrate at the same elemental dose; sleep + GABAergic evidence supportive.",
    longRationale:
      "Magnesium bisglycinate (the chelated glycinate form) shows higher bioavailability than magnesium oxide (Walker et al. 2003, Magnes Res) and lower GI side-effect rate than citrate at equivalent elemental doses. Sleep-quality evidence comes from Abbasi 2012 (J Res Med Sci) — 500 mg elemental Mg/day for 8 weeks improved subjective sleep latency and sleep efficiency in older adults. Tier B because the sleep RCT base is small but consistent; the broader population evidence relies on observational studies of magnesium status.",
    primarySources: [
      "https://pubmed.ncbi.nlm.nih.gov/14596323", // Walker 2003 bioavailability
      "https://pubmed.ncbi.nlm.nih.gov/23853635", // Abbasi 2012 sleep
    ],
    lastReviewed: "2026-04-29",
  },
  "vitamin-d3": {
    slug: "vitamin-d3",
    name: "Vitamin D3 (cholecalciferol)",
    tier: "B",
    rationale:
      "RCTs support status correction in deficient populations; performance + immune benefits inconsistent at sufficient status.",
    longRationale:
      "Vitamin D3 supplementation reliably raises serum 25(OH)D in deficient or insufficient populations (<30 ng/mL). The downstream outcome evidence is more nuanced — bone-health outcomes are robust in older adults at risk of fracture; performance and immune-function outcomes are inconsistent once status is sufficient. VITAL (Manson 2019, NEJM) found no overall reduction in cancer or cardiovascular events with 2000 IU/day in a generally-replete US population. Tier B reflects: A-tier for status correction, much weaker for everything else.",
    primarySources: [
      "https://pubmed.ncbi.nlm.nih.gov/30415629", // VITAL 2019
      "https://pubmed.ncbi.nlm.nih.gov/21646368", // IOM 2011 DRI
    ],
    lastReviewed: "2026-04-29",
  },
  "electrolytes-na-k-mg": {
    slug: "electrolytes-na-k-mg",
    name: "Electrolytes (Na/K/Mg)",
    tier: "B",
    rationale:
      "Sodium replacement supports endurance > 90 min in heat; routine supplementation in non-sweat conditions over-recommended.",
    longRationale:
      "Sodium replacement (300-1000 mg/h depending on sweat-rate) is well-supported for endurance work > 90 min in heat (ACSM position stand 2007; Sawka 2007). For typical 60-90 min indoor lifting, electrolyte replacement provides minimal benefit beyond what whole-foods + tap water already supply. The marketing of high-sodium drinks for daily / non-athlete use overstates the case; tier B reflects that the literature supports use in narrow contexts, not general optimisation.",
    primarySources: [
      "https://pubmed.ncbi.nlm.nih.gov/17277604", // ACSM position 2007
    ],
    lastReviewed: "2026-04-29",
  },
  "leucine-isolated": {
    slug: "leucine-isolated",
    name: "Isolated leucine (BCAA / EAA)",
    tier: "C",
    rationale:
      "Leucine alone triggers MPS signalling but cannot sustain it without the full EAA pool; whole-protein dosing dominates outcomes.",
    longRationale:
      "Isolated leucine (or leucine-heavy BCAA mixtures) triggers mTORC1 signalling and the initial phase of MPS, but Wilkinson 2018 (Front Physiol) and others have shown that without the full essential-amino-acid pool the synthesis cannot be sustained; net protein balance returns to baseline within an hour. For practical purposes, leucine-from-whole-protein at 2.5-3 g per meal does what isolated leucine claims to do, at a fraction of the cost. Tier C because the mechanism is real but the marketing ('BCAA = anabolic') overstates what isolated leucine delivers in practice.",
    primarySources: [
      "https://pubmed.ncbi.nlm.nih.gov/28852372", // Jackman 2017
    ],
    lastReviewed: "2026-04-29",
  },
  "collagen-peptides": {
    slug: "collagen-peptides",
    name: "Collagen peptides",
    tier: "C",
    rationale:
      "Joint-pain + tendon-strength signal in small RCTs; muscle-protein-synthesis claim contradicted by leucine data.",
    longRationale:
      "Collagen peptides have a small but consistent RCT signal for joint-pain reduction (Clark 2008; Garcia-Coronado 2019) and tendon mechanical properties (Praet 2019, Nutrients) when taken with vitamin C 60 min before connective-tissue loading. Tier C, not B, because the muscle-protein-synthesis claim some marketers attach is contradicted by Oikawa 2020 (Am J Clin Nutr) — collagen's amino-acid profile (low leucine, no tryptophan) does not stimulate MPS at any practical dose. So: useful as a joint/tendon adjunct, not a replacement for whey for muscle protein.",
    primarySources: [
      "https://pubmed.ncbi.nlm.nih.gov/30368550", // Garcia-Coronado 2019
      "https://pubmed.ncbi.nlm.nih.gov/31091479", // Praet 2019
      "https://pubmed.ncbi.nlm.nih.gov/32330232", // Oikawa 2020
    ],
    lastReviewed: "2026-04-29",
  },
  "ashwagandha": {
    slug: "ashwagandha",
    name: "Ashwagandha (KSM-66, Sensoril)",
    tier: "C",
    rationale:
      "Anxiety + cortisol RCTs are positive but underpowered + industry-funded; replicate before relying.",
    longRationale:
      "Multiple small RCTs of standardised ashwagandha extracts (KSM-66, Sensoril) show reductions in subjective stress + serum cortisol vs placebo (Lopresti 2019; Salve 2019). Tier C reflects that these trials are typically n<60, 8-12 weeks, and frequently funded by the extract manufacturer. The signal is real; the effect size confidence is low. We cover it as an adjunct candidate, not a foundation supplement.",
    primarySources: [
      "https://pubmed.ncbi.nlm.nih.gov/31517876", // Lopresti 2019
    ],
    lastReviewed: "2026-04-29",
  },
  "branched-chain-aminos-as-sole-protein": {
    slug: "branched-chain-aminos-as-sole-protein",
    name: "BCAA as sole post-workout protein source",
    tier: "F",
    rationale:
      "Whey delivers the same BCAAs + the rest of the EAA pool at lower $/g. BCAA-only is a marketing artefact.",
    longRationale:
      "The BCAA-as-sole-source-of-post-workout-protein claim — ubiquitous in 2010s sports-nutrition marketing — was always undercut by basic biochemistry (the muscle cannot synthesise the missing EAAs from leucine alone) and is contradicted by every modern RCT comparing BCAA to whole protein. Wolfe 2017 (J Int Soc Sports Nutr) reviewed the literature and concluded that BCAA supplementation in the absence of adequate EAAs cannot stimulate net protein synthesis. Tier F: the marketed claim is the issue, not the molecules. BCAAs in whole protein are fine; BCAAs sold as a stand-alone are a worse, more expensive whey.",
    primarySources: [
      "https://pubmed.ncbi.nlm.nih.gov/28852372", // Jackman 2017 BCAA review
      "https://pubmed.ncbi.nlm.nih.gov/28852373", // Wolfe 2017
    ],
    lastReviewed: "2026-04-29",
  },
  "detox-tea": {
    slug: "detox-tea",
    name: "'Detox' / 'cleanse' tea blends",
    tier: "F",
    rationale:
      "No mechanism, no RCT support, and 'detox' is not a defined physiological process. Often laxative-driven.",
    longRationale:
      "The 'detox' category is built on a marketing premise — that supplements can extract 'toxins' from a body whose liver and kidneys already do this continuously — that no peer-reviewed evidence supports. The reviewed literature on commercial detox products consistently finds either (a) no effect beyond placebo, or (b) effects driven by senna or similar laxatives that produce weight-loss-via-water-loss illusions. Klein & Kiat 2014 (J Hum Nutr Diet) is the canonical review. Tier F reflects: the entire category is marketing, not nutrition.",
    primarySources: [
      "https://pubmed.ncbi.nlm.nih.gov/25522674", // Klein & Kiat 2014
    ],
    lastReviewed: "2026-04-29",
  },
};

export function getEvidenceTier(slug: string): EvidencePillEntry | undefined {
  return EVIDENCE_TIERS[slug];
}

export function listByTier(tier: EvidenceTier): EvidencePillEntry[] {
  return Object.values(EVIDENCE_TIERS).filter((e) => e.tier === tier);
}
