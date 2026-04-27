export type Hub = {
  slug: string;
  name: string;
  shortName: string;
  oneLiner: string;
  thesis: string;
};

export const hubs: Hub[] = [
  {
    slug: "macros-protein",
    name: "Macros & Protein for Peptide Users",
    shortName: "Macros",
    oneLiner:
      "Protein targets, leucine thresholds, and per-meal math for peptide protocols.",
    thesis:
      "Protein, fats, and carbs as measurable daily targets — recalibrated for the reader on a peptide protocol. The leucine threshold matters more during a GLP-1 caloric deficit than total grams. The fat floor matters more on a recovery-peptide cycle than percent of calories. Real cost-per-unit math, USDA-cited tables, no diet dogma.",
  },
  {
    slug: "pantry-systems",
    name: "Pantry Systems for Peptide Protocols",
    shortName: "Pantry",
    oneLiner:
      "Fridge, freezer, and pantry architecture that supports peptide therapy — including pen storage and bacteriostatic-water handling.",
    thesis:
      "A functional pantry is engineered, not stocked — and a peptide-supportive pantry adds a layer the wellness blogs miss: temperature-stable zones for prefilled pens, food-grade storage for reconstitution supplies, and a fridge layout that keeps high-protein, electrolyte-dense, low-volume meals at hand for the days appetite drops.",
  },
  {
    slug: "ingredient-deep-dives",
    name: "Ingredient Deep-Dives — Peptide-Adjacent",
    shortName: "Ingredients",
    oneLiner:
      "Anti-inflammatory ingredients, omega-3 sources, electrolyte-dense foods — what the literature shows and how it lands in peptide context.",
    thesis:
      "Specific foods analyzed from the research angle, with the peptide-context layer named: which omega-3 sources matter on an anti-inflammatory protocol, which electrolytes shift on a GLP-1, which low-volume foods clear the protein and micronutrient floor on reduced-appetite days. Not 'is it healthy' — what the literature shows, what the real exposure is, what the cost-benefit calculus is.",
  },
  {
    slug: "meal-prep",
    name: "Meal Prep Architecture for Peptide Cycles",
    shortName: "Meal Prep",
    oneLiner:
      "Batch-cooking frameworks calibrated to dose-escalation weeks: low-volume, high-density, freezer-portioned.",
    thesis:
      "Meal prep as a system that adapts to peptide cycles. Batch cook for the days when appetite is full; portion smaller for the days it isn't. High-density, low-volume meals that clear the protein and micronutrient floor without forcing food through reduced appetite. Component-based frameworks, freeze-thaw logic, no recipes.",
  },
  {
    slug: "peptide-stack-support",
    name: "Peptide-Stack Support",
    shortName: "Stack",
    oneLiner:
      "The supplements that pair with peptide protocols — electrolytes, taurine, magnesium glycinate, omega-3 — with $/serving math and third-party-tested filters.",
    thesis:
      "Supplements as a mechanical category, scoped to what actually pairs with peptide therapy: electrolytes for GLP-1 dehydration, taurine for nausea on dose escalation, magnesium glycinate for sleep, omega-3 for inflammation around recovery peptides. Educational only, never prescriptive — talk to your prescriber before stacking. What's worth taking, at what dose, from what brand, at what $/mg of bioactive.",
  },
];

export function getHub(slug: string): Hub | undefined {
  return hubs.find((h) => h.slug === slug);
}
