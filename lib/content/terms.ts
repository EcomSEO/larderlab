/**
 * Larderlab terms of service — comprehensive English content covering
 * scope, content disclaimer, IP, user obligations, warranty disclaimer,
 * liability cap, governing-law placeholder, and changes.
 *
 * Larderlab is currently English-only at the route level. When the
 * site migrates to `[locale]/`, per-locale variants of this object
 * should be added — see /docs/compliance.md.
 */

export type TermsSection = {
  heading: string;
  body: string;
  bullets?: string[];
};

export type TermsContent = {
  title: string;
  intro: string;
  lastUpdated: string;
  sections: TermsSection[];
};

export const TERMS_CONTACT_EMAIL = "hello@larderlab.com";

export const TERMS: TermsContent = {
  title: "Terms of service",
  lastUpdated: "Last updated: 27 April 2026",
  intro:
    "These Terms govern your use of larderlab.com (the 'Site'). By accessing the Site you agree to these Terms. If you do not agree, please do not use the Site. Larderlab is an independent editorial publication about pantry architecture, food systems, and supplement context for peptide users — it is not a clinic, not a pharmacy, and not a marketplace.",
  sections: [
    {
      heading: "1. Scope and acceptance",
      body: "These Terms apply to every visitor of larderlab.com — readers, newsletter subscribers, and anyone who interacts with the Site through forms, comments, or submitted feedback. By using the Site you confirm that you are at least 16 years old (or the digital-consent age in your country) and that you have read and accept these Terms together with our /privacy and /cookies policies.",
    },
    {
      heading: "2. Editorial content disclaimer",
      body: "Larderlab is an educational publication. Every article, recipe, supplement page, and pantry guide is written for general information only.",
      bullets: [
        "Content is not medical advice, not nutritional advice for an individual, and not a substitute for consultation with a registered dietitian, medical doctor, or qualified clinician.",
        "Where we discuss peptide-supportive nutrition we are describing the food and pantry context only — we do not prescribe peptides, recommend specific peptide products, or dose any therapy.",
        "Every health claim is cited to peer-reviewed research, EFSA / national-authority guidance, or official manufacturer disclosures. Citations are visible inline.",
        "Where the science is genuinely mixed we say so; we do not pretend to certainty we do not have.",
        "Always consult a qualified professional before changing your diet, starting supplements, or making decisions about a medical condition — particularly during pregnancy or while managing a chronic illness.",
      ],
    },
    {
      heading: "3. Intellectual property",
      body: "All content on the Site — text, photography, illustrations, the Larderlab name and logo, layout, and source code — is owned by Larderlab or licensed to us by the original creators. Trademarks of third parties are the property of their respective owners and are used for editorial reference only.",
      bullets: [
        "You may quote excerpts (up to 200 words) with attribution and a link back to the original article.",
        "You may not republish full articles, mirror the Site, or repackage our content as your own.",
        "You may not use our content to train AI models at scale without a written licence.",
        "You may not use the Larderlab name or logo in a way that implies endorsement, partnership, or sponsorship without prior written agreement.",
      ],
    },
    {
      heading: "4. User obligations",
      body: "You agree to use the Site lawfully and respectfully.",
      bullets: [
        "Do not attempt to interfere with the Site's operation (denial-of-service attacks, scraping at a rate that degrades service, attempts to bypass authentication).",
        "Do not submit content that is unlawful, defamatory, or infringes the rights of others.",
        "Do not impersonate Larderlab staff or misrepresent your relationship with us.",
        "If you submit a correction, tip, or feedback by email, you grant us a non-exclusive licence to use that feedback to improve the Site. We will not publish your name without permission.",
      ],
    },
    {
      heading: "5. Affiliate links and product references",
      body: "Some product links on the Site may be affiliate links — when present, they are clearly labelled with a country-appropriate disclosure pill (Sponsored / Werbung / Publicité / etc.) and they never affect editorial rankings. Our full affiliate framework is documented at /affiliate-disclosure.",
    },
    {
      heading: "6. No warranties",
      body: "The Site and its content are provided 'as is' and 'as available'. To the maximum extent permitted by applicable law, Larderlab makes no warranties of any kind — express, implied, statutory, or otherwise — including no warranty of merchantability, fitness for a particular purpose, accuracy, or non-infringement. Nothing in this clause limits any non-excludable consumer rights you have under the law of your country of residence.",
    },
    {
      heading: "7. Limitation of liability",
      body: "To the maximum extent permitted by applicable law, Larderlab and its operators are not liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Site, including loss of profits, loss of data, or reliance on Site content. Where liability cannot be excluded by law, our aggregate liability for any claim related to the Site is limited to the lesser of (a) one hundred euros (€100) or (b) the total amount you have paid us in the 12 months preceding the claim. This clause does not exclude liability for death, personal injury caused by negligence, fraud, or any other liability that cannot be excluded under applicable law.",
    },
    {
      heading: "8. Third-party sites and services",
      body: "We link to third-party sites — peer-reviewed papers on PubMed, regulatory documents, retailer pages, and partner publications. We do not control those sites and we are not responsible for their content, privacy practices, availability, or changes. Following an external link is at your own risk.",
    },
    {
      heading: "9. Termination",
      body: "We may suspend or restrict access to the Site, in whole or in part, at any time and without notice — for example to perform maintenance, to comply with a legal request, or where a visitor breaches these Terms. Provisions intended to survive termination (Intellectual property, No warranties, Limitation of liability, Governing law) will continue in force.",
    },
    {
      heading: "10. Governing law and jurisdiction",
      body: "These Terms are governed by the laws of [Operator's chosen jurisdiction], without regard to conflict-of-law principles. The courts of [Operator's chosen jurisdiction] have exclusive jurisdiction to resolve any dispute, except where mandatory consumer-protection law of your country of residence grants you the right to bring a claim in your local courts. Nothing in these Terms removes any non-waivable consumer right available to you under your local law.",
    },
    {
      heading: "11. Changes to these Terms",
      body: "We may update these Terms as the Site evolves and as the legal environment changes. Material changes will be highlighted on this page with a new 'Last updated' date. Continued use of the Site after a change constitutes acceptance of the updated Terms.",
    },
    {
      heading: "12. Contact",
      body: `Questions about these Terms: ${TERMS_CONTACT_EMAIL}.`,
    },
  ],
};
