type Item = { label: string; value: string };

const defaultItems: Item[] = [
  {
    label: "Inputs measured",
    value:
      "Retail price (dated) · label claim · Certificate of Analysis · third-party test (Informed Sport / NSF / ConsumerLab / Clean Label) · leucine per serving from COA, not marketing.",
  },
  {
    label: "Protocols tested",
    value:
      "Per-kg target from four literature ranges (IOM RDA, Phillips 2017, Morton 2018, ISSN). Brands scored against Moore 2015 leucine-per-dose threshold (~0.4 g/kg).",
  },
  {
    label: "Cost-basis verified",
    value:
      "$/gram of protein and $/gram of leucine at warehouse pricing (Costco), mail-order (Amazon), and DTC retail. Re-checked quarterly, flagged when drift exceeds 15%.",
  },
  {
    label: "Confidence level",
    value:
      "High on ranked order. Medium on absolute $/g (prices drift). Low on serving-size claims where COA is older than 18 months — flagged [VERIFY].",
  },
];

/**
 * The larderlab methodology block — a spec-sheet 4-part frame.
 *
 * "Inputs measured / Protocols tested / Cost-basis verified / Confidence level"
 *
 * This is the methodological wedge against Healthline / Examine prose blocks:
 * rather than a paragraph describing the method, we render the method as
 * a spec table with monospace labels and engineering-row borders.
 */
export function MethodologyBlock({
  items = defaultItems,
  title = "How this was specified",
}: {
  items?: Item[];
  title?: string;
}) {
  return (
    <section className="my-12 border border-ink/15 bg-paper rounded-sm">
      {/* Header bar — monospace caps, copper underline */}
      <div className="flex items-center justify-between px-6 py-3 border-b-2 border-copper bg-ink text-paper">
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-sm bg-copper" />
          <span className="caps-label !text-paper">Methodology</span>
        </div>
        <span className="caps-label !text-paper/60 tnum">§ 4 / spec</span>
      </div>

      <div className="px-6 md:px-8 py-6 md:py-8">
        <h2 className="font-sans text-xl md:text-[1.45rem] text-ink mb-6 leading-tight tracking-tight">
          {title}
        </h2>
        <dl className="divide-y divide-ink/10">
          {items.map((item, i) => (
            <div
              key={item.label}
              className="grid md:grid-cols-[minmax(0,10rem)_1fr] gap-3 md:gap-8 py-4 first:pt-0 last:pb-0"
            >
              <dt className="flex items-start gap-3">
                <span className="caps-label text-copper tnum shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-[0.78rem] uppercase tracking-[0.14em] text-ink">
                  {item.label}
                </span>
              </dt>
              <dd className="text-[14.5px] text-charcoal/85 leading-relaxed">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
