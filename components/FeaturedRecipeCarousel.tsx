import type { Recipe } from "@/lib/content/recipes";
import { RecipeCardCompact } from "./RecipeCardCompact";

/**
 * Horizontal scroll-snap row of RecipeCards. Used on the home for the
 * "Five things to cook this weekend" strip and at the foot of recipe
 * pages for related-recipe rails.
 */
export function FeaturedRecipeCarousel({
  recipes,
  eyebrow,
  heading,
  dek,
}: {
  recipes: Recipe[];
  eyebrow: string;
  heading: string;
  dek?: string;
}) {
  return (
    <section className="border-b border-[--color-border-subtle]">
      <div className="mx-auto max-w-spread px-6 py-14 md:py-16">
        <div className="flex items-end justify-between gap-6 mb-6 md:mb-8">
          <div>
            <div className="dept-label mb-3">{eyebrow}</div>
            <h2 className="font-display italic font-medium text-3xl md:text-[2.4rem] leading-[1.1]">
              {heading}
            </h2>
            {dek && (
              <p className="dek mt-3 max-w-[58ch]">{dek}</p>
            )}
          </div>
        </div>
        <div className="rec-carousel">
          {recipes.map((r) => (
            <RecipeCardCompact key={r.slug} recipe={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
