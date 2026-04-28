import Link from "next/link";

/**
 * MacroCalculatorTeaser — drops the headline lead magnet at the bottom
 * of every Macros & Protein hub post. Per the brand book, the Macro
 * Calculator is the primary lead magnet that should be surfaced wherever
 * macro-related content is being read.
 *
 * Visual: dense, monospace, Larderlab register. No emoji, no hype, no
 * "🚀 Calculate Now!". A single sentence, a single CTA.
 */
export function MacroCalculatorTeaser() {
  return (
    <aside
      className="mt-12 border border-ink/20 bg-paper-deep/60"
      aria-label="The Larderlab Macro Calculator"
    >
      <div className="px-5 py-2 bg-ink text-paper border-b-2 border-copper flex items-center justify-between flex-wrap gap-2">
        <span className="caps-label !text-paper">
          Tool · the Macro Calculator
        </span>
        <span className="caps-label !text-paper/70 tnum">
          Free · no sign-up
        </span>
      </div>
      <div className="px-6 py-5">
        <h3 className="font-sans text-[1.25rem] text-ink leading-tight tracking-tight">
          Run your own numbers.
        </h3>
        <p className="mt-2 text-[14.5px] text-charcoal/85 leading-relaxed max-w-[60ch]">
          The Larderlab Macro Calculator computes your daily protein, fat,
          and carb targets across four expert-recommended ranges (IOM RDA,
          Phillips 2017, Morton 2018, ISSN), splits them per meal, and
          renders a $/gram cost chart for 20 protein sources.
        </p>
        <Link
          href="/macro-calculator"
          className="inline-block mt-4 px-4 py-2 bg-copper text-paper text-[13px] caps-label hover:bg-copper-deep transition"
        >
          Open the calculator →
        </Link>
      </div>
    </aside>
  );
}
