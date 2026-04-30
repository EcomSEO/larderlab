/**
 * DataStrip — the Lab Notebook signature stat block. Sits below the
 * hero on the homepage and surfaces the cost-per-gram thesis as four
 * monospace numerics.
 *
 * Numbers are first-class on this site: every stat uses the .num
 * utility (Plex Mono + tabular-nums) so columns line up.
 */

const stats: { num: string; label: string; sub: string }[] = [
  {
    num: "342",
    label: "Foods analysed",
    sub: "USDA-cited macros, with dated $/g price stamp.",
  },
  {
    num: "1,847",
    label: "Studies cited",
    sub: "Primary literature only. No press releases.",
  },
  {
    num: "T1–T4",
    label: "Evidence tiers",
    sub: "RCT, cohort, mechanistic, anecdotal — labelled, never blended.",
  },
  {
    num: "0",
    label: "Brand sponsorships",
    sub: "Independent. Affiliate links disclosed at tier-1 only.",
  },
];

export function DataStrip() {
  return (
    <section
      aria-label="Larderlab by the numbers"
      className="border-b border-rule bg-surface-warm"
    >
      <div className="mx-auto max-w-container px-6 py-12 md:py-14">
        <div className="text-eyebrow uppercase text-olive-700 mb-6">
          By the numbers
        </div>
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6">
          {stats.map((s) => (
            <li
              key={s.label}
              className="border-l-2 border-olive-200 pl-5 first:border-l-0 first:pl-0 lg:first:border-l-2 lg:first:pl-5"
            >
              <div className="num text-num-xl text-olive-700 leading-none">
                {s.num}
              </div>
              <div className="mt-3 text-h4 font-semibold text-ink">
                {s.label}
              </div>
              <p className="mt-1.5 text-body-sm text-ink-muted leading-snug max-w-[28ch]">
                {s.sub}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
