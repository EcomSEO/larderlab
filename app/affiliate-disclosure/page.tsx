import type { Metadata } from "next";
import { TrustPageTemplate } from "@/components/templates/TrustPageTemplate";
import { AFFILIATE_DISCLOSURE } from "@/lib/content/affiliate-disclosure";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: AFFILIATE_DISCLOSURE.title,
  description:
    "How affiliate links work on Larderlab — current state, disclosure framework, and editorial non-negotiables.",
  path: "/affiliate-disclosure",
});

export default function AffiliateDisclosurePage() {
  return (
    <TrustPageTemplate title={AFFILIATE_DISCLOSURE.title}>
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
