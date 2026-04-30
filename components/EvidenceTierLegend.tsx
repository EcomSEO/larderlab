import Link from "next/link";

/**
 * EvidenceTierLegend — explains the 4-tier system that anchors every
 * supplement and claim on the site. Sits below DataStrip on home so
 * a first-time reader meets the methodology before any product card.
 */

const tiers = [
  {
    n: "T1",
    name: "RCT / meta",
    body: "Randomised controlled trials and meta-analyses. The strongest signal we cite. Dose, duration, and population must match.",
    bg: "bg-tier-1-bg",
    text: "text-tier-1-text",
    border: "border-tier-1-border",
  },
  {
    n: "T2",
    name: "Cohort / observational",
    body: "Prospective cohort and case-control. Real-world signal but never extrapolated to causation.",
    bg: "bg-tier-2-bg",
    text: "text-tier-2-text",
    border: "border-tier-2-border",
  },
  {
    n: "T3",
    name: "Mechanistic / animal",
    body: "In-vitro or animal models. Context only — translation to humans is not assumed.",
    bg: "bg-tier-3-bg",
    text: "text-tier-3-text",
    border: "border-tier-3-border",
  },
  {
    n: "T4",
    name: "Anecdotal / n=1",
    body: "Single-person reports, blog claims, marketing copy. Flagged for transparency, never used as evidence.",
    bg: "bg-tier-4-bg",
    text: "text-tier-4-text",
    border: "border-tier-4-border",
  },
];

export function EvidenceTierLegend() {
  return (
    <section
      aria-label="Evidence-tier system"
      className="border-b border-rule bg-white"
    >
      <div className="mx-auto max-w-container px-6 py-16 md:py-20">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-10">
          <div className="lg:col-span-7">
            <div className="text-eyebrow uppercase text-olive-700 mb-4">
              Methodology
            </div>
            <h2 className="font-display text-display-md text-ink leading-[1.1] max-w-[20ch]">
              Every claim, tiered.
            </h2>
            <p className="mt-5 text-body text-ink-muted leading-relaxed max-w-[60ch]">
              We don&apos;t blend RCTs with anecdotes. Each supplement,
              ingredient, and protocol on Larderlab carries a tier badge so
              you can see the strength of the underlying evidence at a glance.
            </p>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <Link
              href="/methodology"
              className="inline-flex items-center gap-1.5 text-olive-700 hover:text-olive font-semibold text-body-sm focus-visible:outline-none focus-visible:text-olive transition-colors duration-fast"
            >
              Read the methodology in full
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {tiers.map((t) => (
            <li
              key={t.n}
              className={`flex flex-col gap-3 rounded-lg border ${t.border} ${t.bg} p-5 shadow-notebook`}
            >
              <div className="flex items-center gap-2.5">
                <span
                  className={`inline-flex items-center justify-center w-9 h-9 rounded-pill bg-white border ${t.border} ${t.text} font-mono font-semibold text-[14px]`}
                >
                  {t.n}
                </span>
                <span className={`text-h4 font-semibold ${t.text}`}>
                  {t.name}
                </span>
              </div>
              <p className="text-body-sm text-ink-muted leading-relaxed">
                {t.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
