import { SITE } from "@/lib/content/site";
import { JsonLd } from "./JsonLd";

/**
 * Person schema for The Larderlab Team (the editorial byline) and the
 * registered dietitian reviewer. Surfaced on every article page so search
 * engines can attach E-E-A-T (experience / expertise / authoritativeness /
 * trust) to a named entity rather than a faceless brand.
 *
 * The team is a collective; we model it as a Person with a "memberOf"
 * back-reference to the Organization to keep the schema graph internally
 * consistent. The reviewer is a separate Person with credentials.
 */
export function PersonJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Person",
            "@id": `${SITE.url}#author-team`,
            name: "The Larderlab Team",
            url: `${SITE.url}/about`,
            jobTitle: "Editorial Team",
            worksFor: { "@id": `${SITE.url}#org` },
            description:
              "Researcher-editors who build evidence-led nutrition frameworks, cost-basis math, and pantry architecture guides. We cite every claim and update on primary-source drift.",
            knowsAbout: [
              "Macronutrients",
              "Protein synthesis",
              "Pantry architecture",
              "Food storage science",
              "Supplement bioavailability",
            ],
          },
          {
            "@type": "Person",
            "@id": `${SITE.url}#reviewer-rao`,
            name: "Dr. Maya Rao, RDN",
            jobTitle: "Registered Dietitian Nutritionist · Editorial Reviewer",
            description:
              "Registered Dietitian Nutritionist (RDN). Reviews Larderlab's macros, supplement, and ingredient deep-dive content for clinical accuracy.",
            hasCredential: [
              {
                "@type": "EducationalOccupationalCredential",
                credentialCategory: "Registered Dietitian Nutritionist (RDN)",
              },
            ],
            knowsAbout: [
              "Clinical nutrition",
              "Sports nutrition",
              "Supplement assessment",
            ],
          },
        ],
      }}
    />
  );
}
