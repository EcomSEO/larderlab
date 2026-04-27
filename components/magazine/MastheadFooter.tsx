import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { SITE } from "@/lib/content/site";

/**
 * Magazine masthead-style footer. Wordmark, single-paragraph mission,
 * an editorial board strip with placeholder names + roles, and the
 * three usual fine-print columns. Replaces the prior engineering-style
 * footer.
 */
export function MastheadFooter() {
  const t = useTranslations("footer");
  const tHeader = useTranslations("header");

  return (
    <footer className="bg-ink text-cream mt-12">
      <div className="mx-auto max-w-spread px-6 pt-16 pb-10">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="font-display italic text-5xl text-tomato">Larderlab</div>
            <p className="mt-5 text-cream/80 text-[15px] leading-relaxed max-w-[40ch]">
              {t("leadParagraph")}
            </p>
            <div className="mt-6 byline text-cream/60">
              {t("imprintEdition", { volume: SITE.specVolume })}
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="dept-label !text-tomato mb-3">{t("masthead")}</div>
            <ul className="space-y-2 text-[15px] text-cream/85">
              <li><span className="text-cream font-display italic">Helena Brookes</span> · Editor</li>
              <li><span className="text-cream font-display italic">Maren Kalt</span> · Test kitchen</li>
              <li><span className="text-cream font-display italic">Tomas Ribeira</span> · Photography</li>
              <li><span className="text-cream font-display italic">Ines Aliaga</span> · Pantry editor</li>
              <li className="pt-2 text-cream/55 byline">Contributors · {SITE.specRevision}</li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="dept-label !text-tomato mb-3">{t("departments")}</div>
            <ul className="space-y-1.5 text-[14px] text-cream/85">
              <li><Link className="hover:text-tomato" href="/guides/macros-protein">{tHeader("navLarder")}</Link></li>
              <li><Link className="hover:text-tomato" href="/guides/pantry-systems">Pantry</Link></li>
              <li><Link className="hover:text-tomato" href="/guides/ingredient-deep-dives">Ingredients</Link></li>
              <li><Link className="hover:text-tomato" href="/guides/meal-prep">Meal prep</Link></li>
              <li><Link className="hover:text-tomato" href="/guides/supplements">Supplements</Link></li>
              <li><Link className="hover:text-tomato" href="/pipeline">{tHeader("navPipeline")}</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="dept-label !text-tomato mb-3">{t("finePrint")}</div>
            <ul className="space-y-1.5 text-[14px] text-cream/85">
              <li><Link className="hover:text-tomato" href="/about">{tHeader("navAbout")}</Link></li>
              <li><Link className="hover:text-tomato" href="/editorial-standards">Standards</Link></li>
              <li><Link className="hover:text-tomato" href="/methodology">{tHeader("navMethodology")}</Link></li>
              <li><Link className="hover:text-tomato" href="/contact">Letters</Link></li>
              <li><Link className="hover:text-tomato" href="/privacy">Privacy</Link></li>
              <li><Link className="hover:text-tomato" href="/terms">Terms</Link></li>
              <li><Link className="hover:text-tomato" href="/affiliate-disclosure">Affiliate</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-cream/15 text-[13px] text-cream/65 leading-relaxed max-w-[80ch]">
          {t("disclaimer")}
        </div>
        <div className="mt-3 text-[12px] text-cream/45 byline">
          © 2026 Larderlab Editorial Ltd. — {SITE.specVolume} · {SITE.specRevision}
        </div>
      </div>
    </footer>
  );
}
