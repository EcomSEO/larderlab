import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { TrustPageTemplate } from "@/components/templates/TrustPageTemplate";
import { TranslationStub } from "@/components/TranslationStub";
import { CookiePreferencesLink } from "@/components/CookiePreferencesLink";
import {
  PRIVACY_POLICY,
  dataProtectionAuthorities,
} from "@/lib/content/privacy-policy";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("trustPages.privacy");
  return pageMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: "/privacy",
  });
}

export default async function PrivacyPage() {
  const t = await getTranslations("trustPages.privacy");
  return (
    <TrustPageTemplate title={t("h1")}>
      <TranslationStub />
      <p className="text-sm text-charcoal/60">{PRIVACY_POLICY.lastUpdated}</p>
      <p>{PRIVACY_POLICY.intro}</p>

      {PRIVACY_POLICY.sections.map((section) => (
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

      <h2>Manage your cookie preferences</h2>
      <p>
        You can change your cookie consent at any time —{" "}
        <CookiePreferencesLink className="underline text-olive-deep font-semibold" />
        {" "}re-opens the consent panel. The full inventory of cookies is
        documented on the <a href="/cookies">cookie policy</a> page.
      </p>

      <h2>Data protection authorities (EU/EEA reference list)</h2>
      <ul>
        {dataProtectionAuthorities.map((a) => (
          <li key={a.url}>
            <strong>{a.country}</strong>: {a.name} —{" "}
            <a href={a.url} target="_blank" rel="noopener">
              {a.url}
            </a>
          </li>
        ))}
      </ul>
    </TrustPageTemplate>
  );
}
