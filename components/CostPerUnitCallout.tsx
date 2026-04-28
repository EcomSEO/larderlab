/**
 * CostPerUnitCallout — surfaces the $/unit math that defines Larderlab's
 * editorial wedge. Per the brand book, every buying decision has to be
 * framed against $/g of protein, $/mg of bioactive, $/serving, etc. This
 * component renders that math as a first-class spec block so it never
 * gets buried in body prose.
 *
 * Use at the top of every comparison or listicle that ranks products by
 * a measurable cost-per-unit metric.
 */
export function CostPerUnitCallout({
  metric,
  cheapest,
  median,
  premium,
  note,
  pricedAt,
}: {
  /** What we're costing — e.g. "$/gram of protein", "$/mg of EPA+DHA". */
  metric: string;
  /** Cheapest cost-per-unit in the ranking, e.g. "$0.013/g". */
  cheapest: string;
  /** Median cost-per-unit, e.g. "$0.045/g". */
  median: string;
  /** Premium-tier cost-per-unit, e.g. "$0.12/g". */
  premium: string;
  /** Optional editorial note — 1-2 sentences naming the spread. */
  note?: string;
  /** Date prices were re-checked, formatted YYYY-MM-DD. */
  pricedAt: string;
}) {
  return (
    <aside
      className="mt-8 border border-copper/40 bg-copper/[0.04]"
      aria-label={`Cost-per-unit math for ${metric}`}
    >
      <div className="px-5 py-2 bg-copper/10 border-b border-copper/30 flex items-center justify-between flex-wrap gap-2">
        <span className="caps-label text-copper-deep">
          Cost · {metric}
        </span>
        <span className="caps-label text-steel tnum">
          Priced {pricedAt}
        </span>
      </div>
      <div className="grid grid-cols-3 divide-x divide-copper/20">
        <div className="px-4 py-4 text-center">
          <div className="caps-label text-steel">Cheapest</div>
          <div className="font-mono tnum text-[1.4rem] mt-1 text-ink">
            {cheapest}
          </div>
        </div>
        <div className="px-4 py-4 text-center">
          <div className="caps-label text-steel">Median</div>
          <div className="font-mono tnum text-[1.4rem] mt-1 text-ink">
            {median}
          </div>
        </div>
        <div className="px-4 py-4 text-center">
          <div className="caps-label text-steel">Premium</div>
          <div className="font-mono tnum text-[1.4rem] mt-1 text-ink">
            {premium}
          </div>
        </div>
      </div>
      {note && (
        <p className="px-5 py-3 text-[14px] text-charcoal/85 leading-relaxed border-t border-copper/15">
          {note}
        </p>
      )}
    </aside>
  );
}
