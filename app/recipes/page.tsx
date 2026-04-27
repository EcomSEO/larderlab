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
    "Every recipe is cooked at least three times by two different cooks before it's published. Browse the index — pantry suppers, weekend projects, ingredient deep-dives.",
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
    gradient: ["#E8DCC8", "#A8884E"] as [string, string],
  },
  {
    href: "/recipes#pantry-projects",
    eyebrow: "Department",
    title: "Pantry projects",
    dek: "One afternoon of work, half a year of dinners. Confit, ferment, preserve.",
    count: 7,
    gradient: ["#F0D8B0", "#C4452D"] as [string, string],
  },
  {
    href: "/recipes#weeknight",
    eyebrow: "Department",
    title: "Weeknight quick",
    dek: "Forty minutes, one pan, no shopping. Built around what's already on the shelf.",
    count: 9,
    gradient: ["#E0D0B5", "#5C6F3C"] as [string, string],
  },
  {
    href: "/recipes#weekend",
    eyebrow: "Department",
    title: "Weekend cook",
    dek: "Slower projects — bread, braises, things that improve in the fridge overnight.",
    count: 6,
    gradient: ["#D8B89A", "#3F4D27"] as [string, string],
  },
];

export default function RecipesIndexPage() {
  return (
    <main>
      <div className="mx-auto max-w-spread px-6 pt-6">
        <BreadcrumbNav
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Recipes" },
          ]}
        />
      </div>

      <header className="mx-auto max-w-spread px-6 pt-8 pb-10">
        <div className="dept-label">The recipe index</div>
        <h1 className="cover-headline mt-3 text-[3rem] sm:text-[3.6rem] md:text-[4rem]">
          Cooked, tested, written down.
        </h1>
        <p className="dek mt-5 max-w-[58ch]">
          Every recipe is cooked at least three times by two different cooks
          before it lands here. Total time, serving size, and a USDA-cited
          nutrition table on every page. Independent test kitchen — no brand
          sponsorships.
        </p>
      </header>

      <CategoryTileGrid
        tiles={tiles}
        eyebrow="Departments"
        heading="Browse by department."
        dek="Four shelves a stocked pantry quietly fills. Pick where you'd cook from on a Wednesday."
      />

      <section className="border-b border-[--color-border-subtle]">
        <div className="mx-auto max-w-spread px-6 py-14 md:py-16">
          <div className="dept-label mb-3">In the issue</div>
          <h2 className="font-display italic font-medium text-3xl md:text-[2.4rem] leading-[1.1] mb-7">
            All recipes, latest first.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {recipes.map((r) => (
              <RecipeCardCompact key={r.slug} recipe={r} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[--color-border-subtle]">
        <div className="mx-auto max-w-spread px-6 py-14 md:py-16">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <div className="dept-label mb-3">The Sunday Larder</div>
              <h2 className="font-display italic font-medium text-3xl md:text-[2.4rem] leading-[1.1]">
                One letter, one tested recipe, every Sunday.
              </h2>
              <p className="dek mt-4 max-w-[52ch]">
                A short editorial letter, a recipe card you can cook from a
                stocked pantry, and a price-checked pick we'd put on the
                shelf. No hectoring. No upsells.
              </p>
            </div>
            <div className="lg:col-span-5">
              <NewsletterInline />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
