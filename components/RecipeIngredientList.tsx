import type { RecipeIngredient } from "@/lib/content/recipes";

/**
 * RecipeIngredientList — structured ingredient list with tomato bullets.
 * Quantity column uses IBM Plex Mono tabular-nums for clean alignment.
 */
export function RecipeIngredientList({
  ingredients,
  heading = "Ingredients",
}: {
  ingredients: RecipeIngredient[];
  heading?: string;
}) {
  return (
    <div>
      <h3 className="font-display italic font-medium text-[1.5rem] mb-3">
        {heading}
      </h3>
      <ul className="ing-list">
        {ingredients.map((ing, i) => (
          <li key={i}>
            <span className="qty">{ing.qty || "—"}</span>
            <span className="name">
              {ing.name}
              {ing.note && <span className="ing-note">{ing.note}</span>}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
