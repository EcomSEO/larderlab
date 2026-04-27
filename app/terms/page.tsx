import type { Metadata } from "next";
import { TrustPageTemplate } from "@/components/templates/TrustPageTemplate";
import { TERMS } from "@/lib/content/terms";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: TERMS.title,
  description: "The terms that govern your use of larderlab.com.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <TrustPageTemplate title={TERMS.title}>
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
