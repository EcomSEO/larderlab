import Link from "next/link";
import { hubs } from "@/lib/content/hubs";
import { SITE } from "@/lib/content/site";
import { CookiePreferencesLink } from "@/components/CookiePreferencesLink";
import { RegulatoryAuthoritiesStrip } from "@/components/RegulatoryAuthoritiesStrip";

const tools = [
  { slug: "macro-calculator", name: "Macro Calculator" },
];

export function Footer() {
  const linkClass =
    "text-ink-muted hover:text-olive-700 transition-colors duration-fast focus-visible:outline-none focus-visible:text-olive-700";
  const imprintLink =
    "hover:text-olive-700 transition-colors duration-fast focus-visible:outline-none focus-visible:text-olive-700";

  return (
    <footer className="mt-32 bg-surface-alt border-t border-rule">
      <div className="mx-auto max-w-container px-6 pt-16 pb-10">
        {/* Brand row */}
        <div className="grid md:grid-cols-12 gap-10 pb-12 border-b border-rule">
          <div className="md:col-span-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-paper rounded-sm"
              aria-label="Larderlab — home"
            >
              <LarderMark />
              <span className="font-display text-[22px] font-semibold tracking-tight text-olive-700">
                larderlab
              </span>
            </Link>
            <p className="mt-5 text-body-sm text-ink-muted leading-relaxed max-w-md">
              Evidence-led nutrition and pantry information. Independent —
              no brand sponsorships, no detox/superfood/hack copy. Every
              cost-per-gram figure is dated; every claim is tiered.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-eyebrow uppercase text-olive-700 mb-4">Pantry</h4>
            <ul className="space-y-2.5 text-body-sm">
              {hubs.slice(0, 5).map((hub) => (
                <li key={hub.slug}>
                  <Link href={`/guides/${hub.slug}`} className={linkClass}>
                    {hub.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/recipes" className={linkClass}>
                  All recipes
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-eyebrow uppercase text-olive-700 mb-4">Tools</h4>
            <ul className="space-y-2.5 text-body-sm">
              {tools.map((t) => (
                <li key={t.slug}>
                  <Link href={`/${t.slug}`} className={linkClass}>
                    {t.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/pipeline" className={linkClass}>
                  Pipeline
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-eyebrow uppercase text-olive-700 mb-4">Company</h4>
            <ul className="space-y-2.5 text-body-sm">
              <li><Link href="/about" className={linkClass}>About</Link></li>
              <li><Link href="/editorial-standards" className={linkClass}>Editorial standards</Link></li>
              <li><Link href="/methodology" className={linkClass}>Methodology</Link></li>
              <li><Link href="/contact" className={linkClass}>Contact</Link></li>
              <li><Link href="/newsletter" className={linkClass}>Newsletter</Link></li>
            </ul>
          </div>
        </div>

        {/* Regulatory authorities */}
        <RegulatoryAuthoritiesStrip />

        {/* Disclaimer block + newsletter */}
        <div className="py-10 border-b border-rule">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-7">
              <h4 className="text-eyebrow uppercase text-tomato mb-3">Important — read this</h4>
              <p className="text-body-sm text-ink-muted leading-relaxed">
                Larderlab provides general information for educational
                purposes. It is not a substitute for medical advice. Consult
                a registered dietitian or your healthcare provider for
                personalised nutrition guidance — particularly if you are
                pregnant, managing a chronic condition, or on medication.
              </p>
            </div>
            <div className="md:col-span-5">
              <h4 className="text-eyebrow uppercase text-olive-700 mb-3">Newsletter</h4>
              <p className="text-body-sm text-ink-muted leading-relaxed">
                Lift &amp; Lab — weekly. New deep-dives, $/g price refreshes,
                evidence-tier updates. No brand sponsorships.{" "}
                <Link
                  href="/newsletter"
                  className="text-olive-700 hover:text-olive underline decoration-olive-200 hover:decoration-olive underline-offset-4 transition-colors duration-fast"
                >
                  Subscribe →
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Imprint strip */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-caption text-ink-muted">
          <div>
            © {new Date().getFullYear()} {SITE.name}. Independent — no brand sponsorships.
          </div>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            <li><Link href="/editorial-standards" className={imprintLink}>Editorial standards</Link></li>
            <li><Link href="/privacy" className={imprintLink}>Privacy</Link></li>
            <li><Link href="/cookies" className={imprintLink}>Cookies</Link></li>
            <li><CookiePreferencesLink /></li>
            <li><Link href="/terms" className={imprintLink}>Terms</Link></li>
            <li><Link href="/affiliate-disclosure" className={imprintLink}>Affiliate disclosure</Link></li>
            <li><Link href="/impressum" className={imprintLink}>Impressum</Link></li>
            <li><Link href="/contact" className={imprintLink}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function LarderMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <circle cx="14" cy="14" r="12" stroke="#5C6F3C" strokeWidth="1.6" />
      <path d="M14 6c-3 2.5-3 7 0 12 3-5 3-9.5 0-12z" fill="#5C6F3C" />
      <path d="M14 18c0-2 0-4 0-6" stroke="#FFFFFF" strokeWidth="0.9" strokeLinecap="round" />
    </svg>
  );
}
