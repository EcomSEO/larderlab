import { getUsdaEntry } from "@/lib/content/usda-ledger";

/**
 * UsdaNutritionRef — compact USDA-cited fact box for non-recipe posts.
 *
 * Feeds from lib/content/usda-ledger.ts. Renders the macros table with
 * the canonical FDC URL + lastVerified date so the optimiser audience
 * can verify every number against the USDA FoodData Central record.
 *
 * Rendered next to relevant ingredients in pillar / listicle / cluster
 * posts; the recipe-coupled <NutritionLedger> remains the right
 * surface for recipes themselves.
 */
export function UsdaNutritionRef({ slug }: { slug: string }) {
  const e = getUsdaEntry(slug);
  if (!e) return null;
  const m = e.macros;

  return (
    <aside
      className="not-prose my-6 border border-ink/15 rounded-sm bg-paper p-5 max-w-prose"
      aria-labelledby={`usda-h-${slug}`}
    >
      <div className="flex items-baseline justify-between gap-3 flex-wrap">
        <h3
          id={`usda-h-${slug}`}
          className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-copper"
        >
          USDA-cited · per {e.servingDescription}
        </h3>
        <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-ink-muted">
          FDC #{e.fdcId || "—"}
        </span>
      </div>
      <div className="mt-1 font-sans font-semibold text-ink text-[15px]">
        {e.name}
      </div>

      <dl className="mt-4 grid grid-cols-3 gap-x-4 gap-y-2 text-[13px]">
        <Row label="Calories" value={m.calories} unit="kcal" />
        <Row label="Protein" value={m.protein} unit="g" />
        <Row label="Fat" value={m.fat} unit="g" />
        <Row label="Carbs" value={m.carbs} unit="g" />
        <Row label="Fiber" value={m.fiber} unit="g" />
        <Row label="Sugar" value={m.sugar} unit="g" />
      </dl>

      {e.substitutionNote && (
        <p className="mt-4 text-[12px] text-ink-muted leading-relaxed italic">
          {e.substitutionNote}
        </p>
      )}

      <div className="mt-4 pt-3 border-t border-ink/10 flex items-baseline justify-between gap-3 flex-wrap text-[11.5px] text-ink-muted">
        <a
          href={e.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-copper hover:text-ink underline decoration-copper/40 hover:decoration-ink underline-offset-[3px]"
        >
          USDA FoodData Central record →
        </a>
        <span className="font-mono text-[10px] tracking-[0.14em] uppercase">
          Verified {e.lastVerified}
        </span>
      </div>
    </aside>
  );
}

function Row({
  label,
  value,
  unit,
}: {
  label: string;
  value: number;
  unit: string;
}) {
  return (
    <div className="flex flex-col">
      <dt className="text-ink-muted text-[10.5px] font-mono uppercase tracking-[0.12em]">
        {label}
      </dt>
      <dd className="text-ink tnum">
        <span className="font-semibold">{value}</span>
        <span className="text-ink-muted ml-0.5 text-[11.5px]">{unit}</span>
      </dd>
    </div>
  );
}
