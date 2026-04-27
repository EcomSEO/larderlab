import type { Recipe } from "@/lib/content/recipes";
import { RecipeCardCompact } from "./RecipeCardCompact";

/**
 * RelatedRecipes — 3-up RecipeCard grid at the foot of a recipe page.
 */
export function RelatedRecipes({
  recipes,
  heading = "Cook this next",
}: {
  recipes: Recipe[];
  heading?: string;
}) {
  if (!recipes.length) return null;
  return (
    <section className="border-t border-[--color-border-subtle]">
      <div className="mx-auto max-w-spread px-6 py-12 md:py-14">
        <div className="dept-label mb-3">From the same shelf</div>
        <h2 className="font-display italic font-medium text-3xl md:text-[2.2rem] leading-[1.1] mb-6">
          {heading}
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {recipes.map((r) => (
            <RecipeCardCompact key={r.slug} recipe={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
