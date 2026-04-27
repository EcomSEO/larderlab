import Link from "next/link";
import type { NutritionRow } from "@/lib/content/recipes";

/**
 * NutritionLedger — the larderlab differentiator.
 *
 * A clean per-serving nutrition table with USDA / Calculated source pills
 * on every row. Lives in the right rail of recipe pages on desktop;
 * inlines on mobile. Never headlines calories; presents the values as a
 * structured reference table with sourcing methodology.
 */
export function NutritionLedger({
  rows,
  servingSize,
  servings,
  yieldText,
  sourcingHref = "/methodology",
}: {
  rows: NutritionRow[];
  servingSize: string;
  servings: number;
  yieldText: string;
  sourcingHref?: string;
}) {
  return (
    <aside className="nutri-card" aria-labelledby="nutri-h">
      <h3 id="nutri-h" className="nutri-eyebrow">Nutrition · per serving</h3>
      <div className="nutri-serving">{servingSize}</div>
      <div className="nutri-yield">
        Yield · {yieldText} ({servings} servings)
      </div>

      {rows.map((row) => (
        <div key={row.label} className="nutri-row">
          <span className="label">{row.label}</span>
          <span className="value">
            {row.value}
            <span className="text-[--color-text-muted] ml-1">{row.unit}</span>
          </span>
          {row.source === "USDA" && (
            <span className="src-badge" title="USDA FoodData Central">USDA</span>
          )}
          {row.source === "Calculated" && (
            <span className="src-badge calc" title="Calculated from ingredients">
              Calc.
            </span>
          )}
          {row.source === "—" && <span className="src-badge empty">—</span>}
        </div>
      ))}

      <div className="nutri-foot">
        Values rounded to nearest whole number. Sourced from USDA FoodData
        Central where flagged; otherwise calculated from listed ingredients.{" "}
        <Link href={sourcingHref}>Sourcing methodology →</Link>
      </div>
    </aside>
  );
}
