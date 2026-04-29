import { SITE } from "@/lib/content/site";
import { canonical } from "@/lib/seo";
import { JsonLd } from "./JsonLd";

/**
 * WebApplicationJsonLd — schema.org/WebApplication for tool pages.
 *
 * The Macro Calculator is the headline lead magnet (per
 * docs/larderlab-site-spec.md §3); search engines need to recognise
 * it as a real interactive tool, not a static article.
 *
 * Required fields per schema.org WebApplication:
 *   - name, description, url
 *   - applicationCategory (HealthApplication / FitnessApplication)
 *   - browserRequirements
 *   - offers (free → price 0, USD, EUR, etc.)
 *   - operatingSystem ("All" since it's a web app)
 */
export function WebApplicationJsonLd({
  path,
  name,
  description,
  applicationCategory = "HealthApplication",
  featureList,
}: {
  path: string;
  name: string;
  description: string;
  applicationCategory?:
    | "HealthApplication"
    | "FitnessApplication"
    | "LifestyleApplication";
  featureList?: string[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "@id": `${SITE.url}${path}#tool`,
        name,
        description,
        url: canonical(path),
        applicationCategory,
        operatingSystem: "All",
        browserRequirements:
          "Requires JavaScript. Tested on the latest two versions of Chrome, Firefox, Safari, and Edge.",
        isAccessibleForFree: true,
        offers: {
          "@type": "Offer",
          price: 0,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
        publisher: {
          "@type": "Organization",
          "@id": `${SITE.url}#org`,
          name: SITE.name,
          url: SITE.url,
        },
        ...(featureList && featureList.length > 0
          ? { featureList: featureList.join(", ") }
          : {}),
      }}
    />
  );
}
