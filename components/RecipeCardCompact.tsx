import Link from "next/link";
import type { Recipe } from "@/lib/content/recipes";

/**
 * Compact RecipeCard for carousels + 3-up grids. Differs from the printed
 * `magazine/RecipeCard` (which is the full structured card with
 * ingredients + method) — this is the link tile.
 */
export function RecipeCardCompact({ recipe }: { recipe: Recipe }) {
  return (
    <Link href={`/${recipe.slug}`} className="rcard">
      <div
        className="rcard-photo plate-warm"
        style={{
          background: `radial-gradient(ellipse at 30% 30%, #F8E5C8 0%, ${recipe.plateColor} 60%, #C4A878 100%)`,
        }}
        aria-hidden="true"
      />
      <div className="rcard-body">
        <div className="rcard-eyebrow">{recipe.department}</div>
        <h3>{recipe.title}</h3>
        <div className="rcard-dek">{recipe.dek}</div>
        <div className="rcard-meta">
          <span>
            Total · <strong>{recipe.totalTime}</strong>
          </span>
          <span>
            Serves · <strong>{recipe.serves}</strong>
          </span>
          <span>{recipe.difficulty}</span>
        </div>
      </div>
    </Link>
  );
}
