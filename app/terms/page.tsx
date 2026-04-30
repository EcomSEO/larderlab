import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { TrustPageTemplate } from "@/components/templates/TrustPageTemplate";
import { TranslationStub } from "@/components/TranslationStub";
import { TERMS } from "@/lib/content/terms";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("trustPages.terms");
  return pageMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: "/terms",
  });
}

export default async function TermsPage() {
  const t = await getTranslations("trustPages.terms");
  return (
    <TrustPageTemplate title={t("h1")}>
      <TranslationStub />
      <p className="text-sm text-charcoal/60">{TERMS.lastUpdated}</p>
      <p>{TERMS.intro}</p>

      {TERMS.sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          <p>{section.body}</p>
          {section.bullets && (
            <ul>
              {section.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </TrustPageTemplate>
  );
}
