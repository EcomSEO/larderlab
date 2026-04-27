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
    <section className="border-t border-rule bg-white">
      <div className="mx-auto max-w-container px-6 py-14 md:py-16">
        <div className="eyebrow mb-3">More from larderlab</div>
        <h2 className="text-[24px] md:text-[28px] font-bold leading-tight text-ink tracking-tight mb-8">
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
