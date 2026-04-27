import type { Recipe } from "@/lib/content/recipes";
import { RecipeCardCompact } from "./RecipeCardCompact";

/**
 * Horizontal scroll-snap row of RecipeCards. Used on home for the
 * "Cook this weekend" strip and at the foot of recipe pages.
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
    <section className="border-b border-rule bg-surface-alt">
      <div className="mx-auto max-w-container px-6 py-16 md:py-20">
        <div className="flex items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <div className="eyebrow mb-3">{eyebrow}</div>
            <h2 className="text-[28px] md:text-[36px] font-bold leading-tight text-ink tracking-tight">
              {heading}
            </h2>
            {dek && (
              <p className="mt-3 text-[16px] text-ink-muted leading-relaxed">
                {dek}
              </p>
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
