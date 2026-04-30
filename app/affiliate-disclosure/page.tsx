import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { TrustPageTemplate } from "@/components/templates/TrustPageTemplate";
import { TranslationStub } from "@/components/TranslationStub";
import { AFFILIATE_DISCLOSURE } from "@/lib/content/affiliate-disclosure";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("trustPages.affiliateDisclosure");
  return pageMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: "/affiliate-disclosure",
  });
}

export default async function AffiliateDisclosurePage() {
  const t = await getTranslations("trustPages.affiliateDisclosure");
  return (
    <TrustPageTemplate title={t("h1")}>
      <TranslationStub />
      <p className="text-sm text-charcoal/60">
        {AFFILIATE_DISCLOSURE.lastUpdated}
      </p>
      <p>{AFFILIATE_DISCLOSURE.intro}</p>

      {AFFILIATE_DISCLOSURE.sections.map((section) => (
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
