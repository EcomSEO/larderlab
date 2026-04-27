import Link from "next/link";
import type { Recipe } from "@/lib/content/recipes";

/**
 * RecipeCard — clean-medical compact tile. 16:10 olive gradient
 * placeholder, olive eyebrow, Inter H3 (clamp-2), two-line dek, then
 * an Inter meta row with mono-numeric values for total time + cal/serv.
 *
 * Used in carousels and 3-up related grids.
 */
export function RecipeCardCompact({ recipe }: { recipe: Recipe }) {
  // Pull cal + protein from nutrition rows for the mini-row.
  const cal = recipe.nutrition.find((r) => r.label.toLowerCase().includes("cal"))?.value;
  const protein = recipe.nutrition.find((r) => r.label.toLowerCase().includes("protein"))?.value;
  return (
    <Link href={`/${recipe.slug}`} className="rcard">
      <div
        className="rcard-photo plate-warm"
        style={{
          background: `linear-gradient(135deg, #EEF2E8 0%, #DCE4CC 50%, ${recipe.plateColor} 100%)`,
        }}
        aria-hidden
      />
      <div className="rcard-body">
        <div className="rcard-eyebrow">{recipe.department}</div>
        <h3>{recipe.title}</h3>
        <div className="rcard-dek">{recipe.dek}</div>
        <div className="rcard-meta">
          <span>
            By <strong>{recipe.developer.name.split(" ")[0]}</strong>
          </span>
          <span>
            Total <strong>{recipe.totalTime}</strong>
          </span>
          {cal && (
            <span>
              <strong>{cal}</strong> cal
            </span>
          )}
          {protein && (
            <span>
              <strong>{protein}g</strong> protein
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
