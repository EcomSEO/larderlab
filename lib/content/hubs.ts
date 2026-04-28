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
    name: "Macros & Protein",
    shortName: "Macros",
    oneLiner:
      "Targets, sources, distribution, cost. With a live Macro Calculator.",
    thesis:
      "Protein, fats, and carbs — not as diet dogma, but as measurable daily targets with real cost-per-unit math. The entry-level hub for the optimizer reader. Every post in this hub either answers a macro question or lets the reader calculate their own answer.",
  },
  {
    slug: "pantry-systems",
    name: "Pantry Systems",
    shortName: "Pantry",
    oneLiner:
      "Storage science, shelf life, bulk-buy math, rotation frameworks.",
    thesis:
      "A functional pantry is engineered, not stocked. This hub covers storage science, shelf life, bulk-buying math, rotation systems, and the architecture of a kitchen that produces meals without friction.",
  },
  {
    slug: "ingredient-deep-dives",
    name: "Ingredient Deep-Dives",
    shortName: "Ingredients",
    oneLiner:
      "Seed oils, rice arsenic, fish mercury — what the literature actually says.",
    thesis:
      "Specific foods analyzed from the research angle. Not 'is it healthy' — 'what does the literature actually show, what's the real exposure, what's the cost-benefit calculus?' This hub builds the site's scientific credibility.",
  },
  {
    slug: "meal-prep",
    name: "Meal Prep Architecture",
    shortName: "Meal Prep",
    oneLiner:
      "Component-based frameworks, batch cooking math, freeze-thaw logic. No recipes.",
    thesis:
      "Meal prep as a system — batch cooking, component-based frameworks, freeze-thaw logic, not recipes. This hub helps the reader build a repeatable weekly cadence without ever writing out a recipe.",
  },
  {
    slug: "supplements-functional-foods",
    name: "Supplements & Functional Foods",
    shortName: "Supplements",
    oneLiner:
      "What's worth taking, from which brand, at what $/unit. Third-party-tested only.",
    thesis:
      "Supplements as a mechanical category, not a wellness category. What's worth taking, at what dose, from what brands, at what $/mg of bioactive. This is the high-AOV affiliate hub.",
  },
];

export function getHub(slug: string): Hub | undefined {
  return hubs.find((h) => h.slug === slug);
}
