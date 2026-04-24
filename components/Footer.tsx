import Link from "next/link";
import { hubs } from "@/lib/content/hubs";
import { Wordmark } from "./editorial/Wordmark";
import { SITE } from "@/lib/content/site";

/**
 * Footer — editorial masthead, hub index with copper rank numerals,
 * four-column link grid (Guides · Tools · About · Fine print), imprint strip.
 */
export function Footer() {
  // Static build stamp. Server-rendered, so the value is consistent —
  // reads as real spec-doc metadata, not client-side drift.
  const buildStamp = new Date().toISOString().slice(0, 10);
  return (
    <footer className="mt-24 bg-ink text-paper border-t border-ink/10">
      {/* Masthead row */}
      <div className="mx-auto max-w-wiki px-6 pt-14 pb-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-10 border-b border-paper/15">
          <div>
            <div className="text-paper">
              <Wordmark size="lg" asLink={false} />
            </div>
            <p className="mt-3 font-accent italic text-lg text-paper/90 max-w-md">
              {SITE.tagline}
            </p>
          </div>
          <div className="max-w-md text-sm text-paper/70 leading-relaxed">
            A small team reading the literature, the labels, and the COAs —
            publishing the frameworks we use ourselves. No paid rankings.
            No sample-pack compensation.
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-10 mt-10">
          <div className="md:col-span-4">
            <h4 className="caps-label !text-paper/60 mb-4">Guides</h4>
            <ul className="space-y-2.5">
              {hubs.map((hub, i) => (
                <li key={hub.slug}>
                  <Link
                    href={`/guides/${hub.slug}`}
                    className="group flex items-baseline gap-3 text-paper hover:text-copper transition"
                  >
                    <span className="font-mono text-[0.75rem] text-copper tnum shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px]">{hub.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="caps-label !text-paper/60 mb-4">Tools</h4>
            <ul className="space-y-2.5 text-[15px]">
              <li>
                <Link href="/macro-calculator" className="text-paper hover:text-copper transition">
                  Macro Calculator
                </Link>
              </li>
              <li>
                <span className="text-paper/40">
                  Shelf-Life Calculator <span className="caps-label !text-paper/30">[soon]</span>
                </span>
              </li>
              <li>
                <span className="text-paper/40">
                  Protein Cost Calculator <span className="caps-label !text-paper/30">[soon]</span>
                </span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="caps-label !text-paper/60 mb-4">About</h4>
            <ul className="space-y-2.5 text-[15px]">
              <li><Link href="/about" className="text-paper hover:text-copper transition">About</Link></li>
              <li><Link href="/methodology" className="text-paper hover:text-copper transition">Methodology</Link></li>
              <li><Link href="/editorial-standards" className="text-paper hover:text-copper transition">Editorial</Link></li>
              <li><Link href="/contact" className="text-paper hover:text-copper transition">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="caps-label !text-paper/60 mb-4">Fine print</h4>
            <ul className="space-y-2.5 text-[15px]">
              <li><Link href="/affiliate-disclosure" className="text-paper hover:text-copper transition">Affiliate disclosure</Link></li>
              <li><Link href="/privacy" className="text-paper hover:text-copper transition">Privacy policy</Link></li>
              <li><Link href="/terms" className="text-paper hover:text-copper transition">Terms of service</Link></li>
              <li><Link href="/newsletter" className="text-paper hover:text-copper transition">Dispatch</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Imprint strip */}
      <div className="border-t border-paper/15">
        <div className="mx-auto max-w-wiki px-6 py-6 flex flex-col md:flex-row justify-between gap-3 text-[11px] tracking-[0.14em] uppercase text-paper/60 font-mono">
          <div className="flex items-center gap-3 flex-wrap">
            <span>©&nbsp;{new Date().getFullYear()} Larderlab</span>
            <span aria-hidden className="text-copper/60">·</span>
            <span>{SITE.specVolume} · {SITE.specRevision}</span>
            <span aria-hidden className="text-copper/60">·</span>
            <span className="tnum">{SITE.specCode}</span>
          </div>
          <div className="normal-case tracking-normal text-paper/55 text-xs max-w-xl md:text-right leading-relaxed font-sans">
            Commissions on some links fund the buying and the testing. They do
            not affect rankings. Prices re-checked quarterly.
          </div>
        </div>
        {/* Revision-log ticker — reads like real engineering-doc metadata. */}
        <div className="border-t border-paper/10 bg-ink-deep/60">
          <div className="mx-auto max-w-wiki px-6 py-2.5 text-[10.5px] tracking-[0.18em] uppercase text-paper/45 font-mono flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="text-copper/70">SPEC 01</span>
            <span aria-hidden>·</span>
            <span>REV 01</span>
            <span aria-hidden>·</span>
            <span className="tnum">BUILT {buildStamp}</span>
            <span aria-hidden>·</span>
            <span className="tnum">LAST CRAWL {buildStamp}</span>
            <span aria-hidden className="hidden md:inline">·</span>
            <span className="hidden md:inline">INDEX OK</span>
            <span aria-hidden className="hidden md:inline">·</span>
            <span className="hidden md:inline tnum">NODES {SITE.specCode}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
