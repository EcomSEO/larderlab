import Link from "next/link";
import { hubs } from "@/lib/content/hubs";
import { SITE } from "@/lib/content/site";
import { CookiePreferencesLink } from "@/components/CookiePreferencesLink";
import { RegulatoryAuthoritiesStrip } from "@/components/RegulatoryAuthoritiesStrip";

const tools = [
  { slug: "macro-calculator", name: "Macro Calculator" },
];

/**
 * Footer — healthline-grade publisher footer.
 * 4-col link grid (Pantry / Recipes / Nutrition / Company), medical
 * disclaimer block, imprint strip. Sister-site cross-links removed
 * per the 2026-04-29 operator-isolation lock.
 *
 * White surface (surface-alt #F7F9FB), olive accents, no dark masthead.
 */
export function Footer() {
  return (
    <footer className="mt-24 bg-surface-alt border-t border-rule">
      <div className="mx-auto max-w-container px-6 pt-14 pb-8">
        {/* Brand row */}
        <div className="grid md:grid-cols-12 gap-8 pb-10 border-b border-rule">
          <div className="md:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2" aria-label="Larderlab — home">
              <LarderMark />
              <span className="font-display text-[20px] font-semibold tracking-tight text-olive-deep">
                larderlab
              </span>
            </Link>
            <p className="mt-4 text-[14px] text-ink-muted leading-relaxed max-w-md">
              Evidence-led nutrition + pantry information. Every recipe
              tested in our test kitchen and reviewed by a registered
              dietitian. Independent — no brand sponsorships.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="eyebrow mb-3">Pantry</h4>
            <ul className="space-y-2 text-[14px]">
              {hubs.slice(0, 5).map((hub) => (
                <li key={hub.slug}>
                  <Link
                    href={`/guides/${hub.slug}`}
                    className="text-ink hover:text-olive-deep transition-colors"
                  >
                    {hub.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/recipes" className="text-ink hover:text-olive-deep transition-colors">
                  All recipes
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="eyebrow mb-3">Tools</h4>
            <ul className="space-y-2 text-[14px]">
              {tools.map((t) => (
                <li key={t.slug}>
                  <Link href={`/${t.slug}`} className="text-ink hover:text-olive-deep transition-colors">
                    {t.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/pipeline" className="text-ink hover:text-olive-deep transition-colors">
                  Pipeline
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="eyebrow mb-3">Company</h4>
            <ul className="space-y-2 text-[14px]">
              <li><Link href="/about" className="text-ink hover:text-olive-deep">About</Link></li>
              <li><Link href="/editorial-standards" className="text-ink hover:text-olive-deep">Editorial standards</Link></li>
              <li><Link href="/methodology" className="text-ink hover:text-olive-deep">Methodology</Link></li>
              <li><Link href="/contact" className="text-ink hover:text-olive-deep">Contact</Link></li>
              <li><Link href="/newsletter" className="text-ink hover:text-olive-deep">Newsletter</Link></li>
            </ul>
          </div>
        </div>

        {/* Regulatory authorities — per-locale food + DPA list */}
        <RegulatoryAuthoritiesStrip />

        {/* Disclaimer block */}
        <div className="py-8 border-b border-rule">
          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-7">
              <h4 className="eyebrow eyebrow-danger mb-2">Important — read this</h4>
              <p className="text-[13px] text-ink-muted leading-relaxed">
                Larderlab provides general information for educational
                purposes. It is not a substitute for medical advice. Consult
                a registered dietitian or your healthcare provider for
                personalised nutrition guidance — particularly if you are
                pregnant, managing a chronic condition, or on medication.
              </p>
            </div>
            <div className="md:col-span-5">
              <h4 className="eyebrow mb-2">Newsletter</h4>
              <p className="text-[13px] text-ink-muted leading-relaxed">
                Lift &amp; Lab — weekly. New deep-dives, $/g price refreshes,
                evidence-tier updates. No brand sponsorships.{" "}
                <Link
                  href="/newsletter"
                  className="text-copper hover:text-ink underline decoration-copper/40 hover:decoration-ink underline-offset-4"
                >
                  Subscribe →
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Imprint strip */}
        <div className="pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[12px] text-ink-muted">
          <div>
            © {new Date().getFullYear()} {SITE.name}. Independent — no brand sponsorships.
          </div>
          <ul className="flex flex-wrap gap-x-4">
            <li><Link href="/editorial-standards" className="hover:text-olive-deep">Editorial standards</Link></li>
            <li><Link href="/privacy" className="hover:text-olive-deep">Privacy</Link></li>
            <li><Link href="/cookies" className="hover:text-olive-deep">Cookies</Link></li>
            <li><CookiePreferencesLink /></li>
            <li><Link href="/terms" className="hover:text-olive-deep">Terms</Link></li>
            <li><Link href="/affiliate-disclosure" className="hover:text-olive-deep">Affiliate disclosure</Link></li>
            <li><Link href="/impressum" className="hover:text-olive-deep">Impressum</Link></li>
            <li><Link href="/contact" className="hover:text-olive-deep">Contact</Link></li>
            <li><Link href="/newsletter" className="hover:text-olive-deep">Newsletter</Link></li>
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
