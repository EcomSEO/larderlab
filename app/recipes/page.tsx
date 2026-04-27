import type { Metadata } from "next";
import { recipes } from "@/lib/content/recipes";
import { CategoryTileGrid } from "@/components/CategoryTileGrid";
import { RecipeCardCompact } from "@/components/RecipeCardCompact";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { NewsletterInline } from "@/components/NewsletterInline";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Recipes — tested in the Larderlab test kitchen",
  description:
    "Every recipe is cooked at least three times by two different cooks before it is published. Browse the index — pantry suppers, weekend projects, ingredient deep-dives. USDA-cited nutrition table on every page, reviewed by a registered dietitian.",
  path: "/recipes",
  ogType: "website",
});

const tiles = [
  {
    href: "/recipes#pantry-suppers",
    eyebrow: "Department",
    title: "Pantry suppers",
    dek: "Recipes a stocked pantry already wants to make. Beans, grains, slow-cooked things.",
    count: 12,
    gradient: ["#EEF2E8", "#B8C99B"] as [string, string],
    imageUrl: "/images/categories/dinner.jpg",
  },
  {
    href: "/recipes#pantry-projects",
    eyebrow: "Department",
    title: "Pantry projects",
    dek: "One afternoon of work, half a year of dinners. Confit, ferment, preserve.",
    count: 7,
    gradient: ["#DCE4CC", "#5C6F3C"] as [string, string],
    imageUrl: "/images/categories/preserving.jpg",
  },
  {
    href: "/recipes#weeknight",
    eyebrow: "Department",
    title: "Weeknight quick",
    dek: "Forty minutes, one pan, no shopping. Built around what's already on the shelf.",
    count: 9,
    gradient: ["#EEF2E8", "#445129"] as [string, string],
    imageUrl: "/images/categories/lunch.jpg",
  },
  {
    href: "/recipes#weekend",
    eyebrow: "Department",
    title: "Weekend cook",
    dek: "Slower projects — bread, braises, things that improve overnight.",
    count: 6,
    gradient: ["#DCE4CC", "#3F4D27"] as [string, string],
    imageUrl: "/images/categories/breakfast.jpg",
  },
];

export default function RecipesIndexPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-container px-6 pt-6">
        <BreadcrumbNav
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Recipes" },
          ]}
        />
      </div>

      <header className="mx-auto max-w-container px-6 pt-8 pb-12 border-b border-rule">
        <div className="eyebrow">Recipe index</div>
        <h1 className="h1-display mt-3 text-[40px] md:text-[48px] leading-[1.1] tracking-tightest text-ink max-w-[20ch]">
          Cooked, tested, written down.
        </h1>
        <p className="mt-5 text-[18px] md:text-[20px] leading-[1.55] text-ink-muted max-w-[60ch]">
          Every recipe is cooked at least three times by two different cooks
          before it lands here. Total time, serving size, and a USDA-cited
          nutrition table on every page. Reviewed by a registered dietitian.
          Independent test kitchen — no brand sponsorships.
        </p>
      </header>

      <CategoryTileGrid
        tiles={tiles}
        eyebrow="Browse"
        heading="By department."
        dek="Four ways into the index — by what your week looks like."
      />

      <section className="border-b border-rule bg-surface-alt">
        <div className="mx-auto max-w-container px-6 py-16 md:py-20">
          <div className="eyebrow mb-3">All recipes</div>
          <h2 className="text-[28px] md:text-[36px] font-bold leading-tight text-ink tracking-tight mb-8">
            Every recipe in the library.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {recipes.map((r) => (
              <RecipeCardCompact key={r.slug} recipe={r} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-container px-6 py-16 md:py-20 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <div className="eyebrow mb-3">Newsletter</div>
            <h2 className="text-[28px] md:text-[36px] font-bold leading-tight text-ink tracking-tight">
              The Sunday Larder, every week.
            </h2>
            <p className="mt-3 text-[16px] text-ink-muted leading-relaxed max-w-[52ch]">
              One short letter, one tested recipe, one nutritionist-reviewed
              pantry pick. Sundays only.
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
