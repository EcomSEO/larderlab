import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { pageMetadata } from "@/lib/seo";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("trustPages.methodologyV12");
  return pageMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: "/methodology/v1-2",
  });
}

/**
 * The long-form versioned methodology — five numbered standards, each
 * styled as a magazine department block. Closes with a dated change log.
 * Mirrors the way a print magazine prints its editorial standards.
 */
export default function MethodologyV12Page() {
  const t = useTranslations("trustPages.methodologyV12");

  const steps = [
    { title: t("step1Title"), body: t("step1Body") },
    { title: t("step2Title"), body: t("step2Body") },
    { title: t("step3Title"), body: t("step3Body") },
    { title: t("step4Title"), body: t("step4Body") },
    { title: t("step5Title"), body: t("step5Body") },
  ];

  return (
    <main>
      <header className="border-b border-ink/15 bg-cream-soft">
        <div className="mx-auto max-w-spread px-6 pt-12 md:pt-16 pb-12">
          <div className="dept-label">{t("eyebrow")}</div>
          <h1 className="font-display italic font-normal text-[3rem] md:text-[4.4rem] leading-[1.04] mt-5 max-w-[18ch]">
            {t("h1")}
          </h1>
          <p className="dek mt-6 max-w-[60ch]">{t("intro")}</p>
        </div>
      </header>

      <section className="mx-auto max-w-spread px-6 py-14 md:py-20">
        <ol className="grid lg:grid-cols-2 gap-x-14 gap-y-10">
          {steps.map((step, i) => (
            <li key={i} className="border-t-2 border-ink pt-6">
              <div className="flex items-baseline gap-3 mb-3">
                <span className="font-display italic text-3xl text-tomato leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="dept-label">Standard {i + 1}</span>
              </div>
              <h2 className="font-display italic font-normal text-2xl md:text-3xl text-ink leading-[1.1]">
                {step.title}
              </h2>
              <p className="mt-4 text-ink-soft leading-relaxed text-[15.5px] max-w-[52ch]">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-spread px-6 py-14 md:py-18">
          <div className="dept-label !text-tomato mb-4">{t("changeLogTitle")}</div>
          <ul className="space-y-4 max-w-[80ch] text-cream/85 text-[15px] leading-relaxed">
            <li className="border-b border-cream/15 pb-4">
              <span className="font-display italic text-tomato">{t("changeLog12")}</span>
            </li>
            <li className="border-b border-cream/15 pb-4">{t("changeLog11")}</li>
            <li>{t("changeLog10")}</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
