import type { RecipeIngredient } from "@/lib/content/recipes";

/**
 * RecipeIngredientList — clean-medical ingredient list with olive
 * bullet markers, Plex Mono qty column, Inter ingredient name.
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
      <h3 className="font-semibold text-[20px] md:text-[22px] text-ink mb-3 tracking-tight">
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
