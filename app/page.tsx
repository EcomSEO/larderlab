import { Hero } from "@/components/Hero";
import { CategoryTileGrid } from "@/components/CategoryTileGrid";
import { FeaturedRecipeCarousel } from "@/components/FeaturedRecipeCarousel";
import { NewsletterInline } from "@/components/NewsletterInline";
import { recipes, getRecipe, featuredRecipeSlug } from "@/lib/content/recipes";

const tiles = [
  {
    href: "/recipes",
    eyebrow: "Department",
    title: "Pantry suppers",
    dek: "Recipes a stocked pantry already wants to make.",
    count: 12,
    gradient: ["#EEF2E8", "#B8C99B"] as [string, string],
    imageUrl: "/images/categories/dinner.jpg",
  },
  {
    href: "/recipes",
    eyebrow: "Department",
    title: "Pantry projects",
    dek: "One afternoon of work, half a year of dinners. Confit, ferment, preserve.",
    count: 7,
    gradient: ["#DCE4CC", "#5C6F3C"] as [string, string],
    imageUrl: "/images/categories/preserving.jpg",
  },
  {
    href: "/guides/ingredient-deep-dives",
    eyebrow: "Guide",
    title: "Ingredient deep-dives",
    dek: "Olive oil, beans, salt — the literature behind a well-stocked shelf.",
    count: 9,
    gradient: ["#EEF2E8", "#445129"] as [string, string],
    imageUrl: "/images/categories/pantry-essentials.jpg",
  },
  {
    href: "/guides/pantry-systems",
    eyebrow: "Guide",
    title: "Pantry systems",
    dek: "Storage science, shelf-life math, the way a kitchen feeds itself.",
    count: 8,
    gradient: ["#DCE4CC", "#3F4D27"] as [string, string],
    imageUrl: "/images/categories/fermentation.jpg",
  },
];

const trending = [
  {
    category: "Peptide pantry",
    title: "12 foods that pair with common peptide protocols",
    href: "/peptide-pantry-essentials",
  },
  {
    category: "GLP-1 support",
    title: "Electrolyte strategy for GLP-1 days: sodium, potassium, magnesium",
    href: "/electrolytes-on-glp1",
  },
  {
    category: "Reconstitution",
    title: "Bacteriostatic water buying guide",
    href: "/bacteriostatic-water-buying-guide",
  },
];

const pantryEssentials = [
  {
    href: "/guides/ingredient-deep-dives",
    eyebrow: "Olive oil",
    title: "How to read an oil label like an oil buyer",
    dek: "Harvest dates, polyphenol counts, and what 'extra virgin' actually verifies.",
    count: 6,
    gradient: ["#EEF2E8", "#B8C99B"] as [string, string],
    imageUrl: "/images/pantry/olive-oil.jpg",
  },
  {
    href: "/guides/ingredient-deep-dives",
    eyebrow: "Beans",
    title: "Why heirloom beans cook differently",
    dek: "Skin thickness, age, soak ratio — the five variables behind a creamy pot.",
    count: 5,
    gradient: ["#DCE4CC", "#5C6F3C"] as [string, string],
    imageUrl: "/images/pantry/dried-beans.jpg",
  },
  {
    href: "/guides/ingredient-deep-dives",
    eyebrow: "Salt",
    title: "Salt by weight, not volume — and why it matters",
    dek: "Diamond Crystal vs. Morton vs. flaky finishing — same teaspoon, different sodium.",
    count: 4,
    gradient: ["#EEF2E8", "#445129"] as [string, string],
    imageUrl: "/images/pantry/sea-salt.jpg",
  },
  {
    href: "/guides/ingredient-deep-dives",
    eyebrow: "Spices",
    title: "Whole vs. ground — and how spices age",
    dek: "Volatile oils, oxidation, and why the jars in your cupboard already smell of nothing.",
    count: 3,
    gradient: ["#DCE4CC", "#3F4D27"] as [string, string],
    imageUrl: "/images/pantry/spices.jpg",
  },
];

export default function HomePage() {
  const featured = getRecipe(featuredRecipeSlug)!;

  return (
    <main>
      <Hero
        featured={featured}
        trending={trending}
        eyebrow="Engineered pantry · for peptide users"
        headline="An engineered pantry for peptide users."
        dek="Supplement stacks, pantry architecture, and real-cost math built for people on peptide therapy. Cited research. USDA-sourced nutrition tables. Zero vendor sponsorships. Talk to your prescriber before stacking."
      />

      <CategoryTileGrid
        tiles={tiles}
        eyebrow="Browse"
        heading="Pick a shelf."
        dek="Four ways into the library: pantry suppers, weekend projects, ingredient deep-dives, and the storage systems that feed all three."
        id="categories"
      />

      <FeaturedRecipeCarousel
        recipes={recipes}
        eyebrow="This week"
        heading="Five things to cook this weekend."
        dek="A short list. Recipes a stocked pantry quietly wants to make — every one tested seven times before publication."
      />

      <CategoryTileGrid
        tiles={pantryEssentials}
        eyebrow="Pantry essentials"
        heading="The literature behind a well-stocked shelf."
        dek="Cited deep-dives on the four ingredients you cook with most. Harvest dates, label decoding, what the studies actually say."
      />

      <section className="border-b border-rule bg-white">
        <div className="mx-auto max-w-container px-6 py-16 md:py-20 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <div className="eyebrow mb-3">Newsletter</div>
            <h2 className="text-[28px] md:text-[36px] font-bold leading-tight text-ink tracking-tight">
              The Sunday Larder, every week.
            </h2>
            <p className="mt-3 text-[16px] text-ink-muted leading-relaxed max-w-[52ch]">
              One short letter, one tested recipe, one nutritionist-reviewed
              pantry pick. Sundays only. No diet hype, no "miracle" foods.
            </p>
          </div>
          <div className="lg:col-span-5">
            <NewsletterInline />
          </div>
        </div>
      </section>
    </main>
  );
}
