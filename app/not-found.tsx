import Link from "next/link";
import type { Metadata } from "next";
import { Eyebrow } from "@/components/editorial/Eyebrow";
import { SpecRule } from "@/components/editorial/DotRule";
import { RankNumeral } from "@/components/editorial/RankNumeral";
import { hubs } from "@/lib/content/hubs";
import { SITE } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "404 · Spec not found",
  description:
    "The entry you requested isn't in the Larderlab spec sheet. Jump back to a hub or return to the home page.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main>
      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-wiki px-6 pt-16 md:pt-20 pb-16 md:pb-24">
          <div className="mb-8">
            <SpecRule />
          </div>

          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-8">
              <div className="flex items-center gap-4 flex-wrap">
                <Eyebrow tone="copper">404 · Spec not found</Eyebrow>
                <span className="caps-label text-steel tnum">
                  {SITE.specCode} · {SITE.specRevision}
                </span>
              </div>

              <h1 className="display-headline mt-5 text-[2.5rem] sm:text-5xl md:text-[3.75rem] leading-[1.02]">
                This entry isn&apos;t in our spec sheet.
              </h1>

              <div className="mt-8 max-w-2xl space-y-5 text-charcoal/85 text-[17px] leading-[1.65]">
                <p>
                  Either the URL was typed incorrectly, the post was renamed in
                  a revision, or the page was never filed. Nothing unusual — a
                  404 is a routing result, not a failure state.
                </p>
                <p>
                  Pick a hub below, open the Macro Calculator, or head back to
                  the index. Every live post is reachable from one of the five
                  hubs.
                </p>
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/" className="btn-primary">
                  ← Back to home
                </Link>
                <Link href="/macro-calculator" className="btn-secondary">
                  Open the Macro Calculator
                </Link>
              </div>
            </div>

            <aside className="md:col-span-4 md:pl-8 md:border-l md:border-ink/15">
              <div className="caps-label text-copper mb-4">Status</div>
              <dl className="divide-y divide-ink/10 text-[13.5px]">
                <div className="flex justify-between py-2.5 first:pt-0">
                  <dt className="text-steel">HTTP status</dt>
                  <dd className="text-ink tnum font-mono">404</dd>
                </div>
                <div className="flex justify-between py-2.5">
                  <dt className="text-steel">Resource</dt>
                  <dd className="text-ink font-mono text-[12px]">not-found</dd>
                </div>
                <div className="flex justify-between py-2.5">
                  <dt className="text-steel">Index</dt>
                  <dd className="text-ink font-mono text-[12px]">noindex</dd>
                </div>
                <div className="flex justify-between py-2.5 last:pb-0">
                  <dt className="text-steel">Checked</dt>
                  <dd className="text-ink tnum font-mono">
                    {new Date().toISOString().slice(0, 10)}
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-wiki px-6 py-14 md:py-20">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <Eyebrow tone="copper">Hub index</Eyebrow>
              <h2 className="font-sans text-2xl md:text-[2rem] text-ink mt-3 leading-tight tracking-tight">
                Try one of the five hubs.
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-0 border-t border-ink/15">
            {hubs.map((hub, i) => (
              <Link
                key={hub.slug}
                href={`/guides/${hub.slug}`}
                className="copper-hairline group relative flex flex-col p-6 border-b lg:border-b-0 lg:border-r border-ink/10 last:border-r-0 hover:bg-paper-deep/50 transition"
              >
                <div className="flex items-baseline justify-between mb-3">
                  <RankNumeral n={i + 1} />
                  <span className="caps-label text-steel tnum">
                    H{String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-sans font-semibold text-lg text-ink leading-tight mb-2 tracking-tight">
                  {hub.name}
                </h3>
                <p className="text-[13.5px] text-charcoal/75 leading-relaxed flex-1">
                  {hub.oneLiner}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-copper group-hover:text-ink text-[11px] font-mono uppercase tracking-[0.14em]">
                  Open hub →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering-log error line — reads like a real spec-doc footer. */}
      <section>
        <div className="mx-auto max-w-wiki px-6 py-10">
          <div className="flex items-center gap-3 text-[11px] tracking-[0.18em] uppercase text-steel font-mono tnum">
            <span className="inline-block h-[6px] w-[6px] rounded-[1px] bg-copper" />
            <span className="text-copper">ERROR 404</span>
            <span aria-hidden className="text-copper/60">·</span>
            <span>SPEC_ENTRY_NOT_FOUND</span>
            <span aria-hidden className="text-copper/60">·</span>
            <span>CHECKED {new Date().toISOString().slice(0, 10)}</span>
          </div>
        </div>
      </section>
    </main>
  );
}
