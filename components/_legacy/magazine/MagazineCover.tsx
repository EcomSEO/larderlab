import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

/**
 * The home cover. A magazine cover, not a hero. Issue masthead at the
 * very top, the giant serif feature title centred-left, a generous
 * italic lede, an art-directed plate panel on the right with the issue
 * stamp, then a list of cover lines below. Calls to action sit
 * underneath the cover.
 */
export function MagazineCover() {
  const t = useTranslations("cover");

  return (
    <section className="border-b border-ink/15 bg-cream">
      <div className="mx-auto max-w-spread px-6 pt-6 md:pt-10 pb-14 md:pb-20">
        {/* Masthead bar — LARDERLAB · ISSUE 04 · APRIL 2026 */}
        <div className="flex items-center justify-between border-b border-ink pb-3 mb-10 fade-up">
          <div className="masthead-line">{t("issueLine")}</div>
          <div className="masthead-line text-tomato hidden sm:block">{t("kicker")}</div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* The headline column — 7 cols */}
          <div className="lg:col-span-7">
            <div className="dept-label fade-up-delay-1">{t("kicker")}</div>
            <h1 className="cover-headline mt-5 text-[3.6rem] sm:text-[4.4rem] md:text-[5.4rem] lg:text-[5.8rem] fade-up-delay-2">
              {t("h1Lead")}{" "}
              <span className="italic">{t("h1Lead2")}</span>{" "}
              {t("h1Mid")}
              <br className="hidden md:block" /> {t("h1End")}
            </h1>
            <p className="dek mt-7 max-w-[44ch] fade-up-delay-3">{t("lede")}</p>
            <div className="mt-9 flex flex-wrap gap-3 fade-up-delay-4">
              <Link href="/macro-calculator" className="btn-primary">
                {t("ctaPrimary")}
              </Link>
              <Link href="#contents" className="btn-secondary">
                {t("ctaSecondary")}
              </Link>
            </div>
          </div>

          {/* Plate column — 5 cols. Art-directed plate gradient + issue stamp. */}
          <aside className="lg:col-span-5 fade-up-delay-5">
            <div className="relative">
              <div className="plate aspect-[4/5] w-full" aria-hidden="true" />
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6">
                <div className="issue-stamp">
                  <span className="label">{t("stampLabel")}</span>
                  <span className="num">{t("stampNum")}</span>
                </div>
              </div>
              <p className="plate-caption mt-3">
                {t("kicker")} · {t("issueLine")}
              </p>
            </div>

            {/* Cover lines — also-inside list */}
            <div className="mt-8 fade-up-delay-6">
              <div className="dept-label mb-2">{t("alsoInside")}</div>
              <ul className="cover-lines">
                <li><span className="num">P · 04</span>{t("coverLine1")}</li>
                <li><span className="num">P · 12</span>{t("coverLine2")}</li>
                <li><span className="num">P · 18</span>{t("coverLine3")}</li>
                <li><span className="num">P · 24</span>{t("coverLine4")}</li>
                <li><span className="num">P · 32</span>{t("coverLine5")}</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
