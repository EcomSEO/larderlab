/**
 * Larderlab privacy policy — comprehensive English content covering
 * the GDPR Articles operators must surface (data collected, legal
 * basis, purposes, retention, recipients, transfers, data-subject
 * rights, DPA contacts) plus CCPA-friendly framing for US visitors.
 *
 * Larderlab is currently English-only at the route level. When the
 * site migrates to `[locale]/`, per-locale variants of this object
 * should be added — see /docs/compliance.md for the schedule.
 */

export type PrivacySection = {
  heading: string;
  body: string;
  bullets?: string[];
};

export type PrivacyContent = {
  title: string;
  intro: string;
  lastUpdated: string;
  sections: PrivacySection[];
};

export const PRIVACY_CONTACT_EMAIL = "privacy@larderlab.com";

export const dataProtectionAuthorities: { country: string; name: string; url: string }[] = [
  { country: "Germany", name: "Bundesbeauftragte für den Datenschutz und die Informationsfreiheit (BfDI)", url: "https://www.bfdi.bund.de" },
  { country: "France", name: "Commission nationale de l'informatique et des libertés (CNIL)", url: "https://www.cnil.fr" },
  { country: "Italy", name: "Garante per la protezione dei dati personali", url: "https://www.garanteprivacy.it" },
  { country: "Spain", name: "Agencia Española de Protección de Datos (AEPD)", url: "https://www.aepd.es" },
  { country: "Netherlands", name: "Autoriteit Persoonsgegevens (AP)", url: "https://www.autoriteitpersoonsgegevens.nl" },
  { country: "Poland", name: "Urząd Ochrony Danych Osobowych (UODO)", url: "https://www.uodo.gov.pl" },
  { country: "Sweden", name: "Integritetsskyddsmyndigheten (IMY)", url: "https://www.imy.se" },
  { country: "Portugal", name: "Comissão Nacional de Proteção de Dados (CNPD)", url: "https://www.cnpd.pt" },
  { country: "Romania", name: "Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)", url: "https://www.dataprotection.ro" },
  { country: "Czech Republic", name: "Úřad pro ochranu osobních údajů (ÚOOÚ)", url: "https://www.uoou.cz" },
  { country: "Norway", name: "Datatilsynet", url: "https://www.datatilsynet.no" },
];

export const PRIVACY_POLICY: PrivacyContent = {
  title: "Privacy policy",
  intro:
    "This policy explains what personal data Larderlab collects when you visit larderlab.com, why we process it, how long we keep it, who we share it with, and the rights you have under EU and UK data-protection law. Larderlab is an editorial publication. We do not run advertising auctions, we do not sell personal data, and we do not build profiles to target individual readers.",
  lastUpdated: "Last updated: 27 April 2026",
  sections: [
    {
      heading: "1. Who we are (controller)",
      body: "Larderlab is the editorial brand operating larderlab.com. The data controller for the purposes of Article 4(7) GDPR is the operator named in our /impressum (German visitors) and /contact pages. For privacy questions, write to privacy@larderlab.com.",
    },
    {
      heading: "2. Data we collect",
      body: "We deliberately collect the minimum data required to run an editorial site.",
      bullets: [
        "Information you provide: email address (newsletter signup), any message body you send via the contact form, optional name when you submit a correction.",
        "Information collected automatically: pages visited, referring URL, approximate location at country / region level, device type, browser, anonymised session identifier.",
        "Cookies and local storage: a session cookie, an analytics cookie (only with consent), and a localStorage entry recording your cookie-consent choice. See our /cookies page for the full inventory.",
        "We do not collect: precise GPS location, your name unless you give it to us, payment information, government IDs, or any special-category data under Article 9 GDPR.",
      ],
    },
    {
      heading: "3. Legal basis for processing (Article 6 GDPR)",
      body: "Each processing activity has one of the following legal bases.",
      bullets: [
        "Consent (Art. 6(1)(a)) — analytics and marketing cookies, optional newsletter subscription.",
        "Contract (Art. 6(1)(b)) — delivering the newsletter once you have subscribed.",
        "Legal obligation (Art. 6(1)(c)) — keeping records required by tax, accounting, and consumer-protection law.",
        "Legitimate interest (Art. 6(1)(f)) — strictly necessary cookies, security logging, fraud prevention, defending legal claims. We have completed a legitimate-interest assessment and document it on request.",
      ],
    },
    {
      heading: "4. Purposes",
      body: "We process personal data for these specific purposes — and no others.",
      bullets: [
        "Operating the site and the newsletter.",
        "Understanding which content readers find useful (anonymised analytics only).",
        "Responding to corrections, editorial feedback, and contact-form messages.",
        "Complying with our legal obligations (tax, accounting, consumer protection).",
        "Defending against fraud, abuse, and legal claims.",
      ],
    },
    {
      heading: "5. Retention",
      body: "We do not keep data longer than we need it.",
      bullets: [
        "Newsletter subscribers: until you unsubscribe, plus 30 days for unsubscribe-confirmation purposes.",
        "Anonymised analytics: 26 months.",
        "Contact-form correspondence: up to 3 years.",
        "Cookie-consent record (localStorage in your browser): 13 months, after which we ask again.",
        "Records required by law: as long as the relevant statute requires (typically 6–10 years for tax records).",
      ],
    },
    {
      heading: "6. Recipients and processors",
      body: "We share personal data only with the processors listed below, each bound by a written data-processing agreement under Article 28 GDPR. We do not sell or rent personal data and we do not run programmatic advertising.",
      bullets: [
        "Vercel Inc. — hosting, content delivery (US, with EU data-transfer Standard Contractual Clauses).",
        "Beehiiv Inc. — newsletter delivery (US, SCCs).",
        "Neon, Inc. — analytics database, anonymised traffic only (EU region where available).",
        "Supabase Inc. — asset storage (EU region).",
        "Google Search Console / Bing Webmaster Tools — aggregated SEO performance data, no individual identifiers.",
      ],
    },
    {
      heading: "7. International transfers (Articles 44–49 GDPR)",
      body: "Where a processor is based outside the EU/EEA, we rely on the European Commission's Standard Contractual Clauses (Decision 2021/914) and, where applicable, the EU–US Data Privacy Framework. We document the supplementary measures used to ensure an essentially equivalent level of protection. A summary is available on request from privacy@larderlab.com.",
    },
    {
      heading: "8. Your rights as a data subject (Articles 15–22 GDPR)",
      body: "You have the following rights, free of charge, exercisable by writing to privacy@larderlab.com. We respond within one calendar month under Article 12(3) GDPR.",
      bullets: [
        "Right of access (Art. 15) — receive a copy of the personal data we hold about you.",
        "Right to rectification (Art. 16) — correct inaccurate or incomplete data.",
        "Right to erasure (Art. 17) — request deletion when one of the listed grounds applies.",
        "Right to restriction (Art. 18) — pause processing in defined circumstances.",
        "Right to data portability (Art. 20) — receive your data in a structured, machine-readable format.",
        "Right to object (Art. 21) — object to processing based on legitimate interest, including direct marketing.",
        "Rights related to automated decision-making (Art. 22) — we do not run automated decision-making with legal effects.",
        "Right to withdraw consent at any time, without affecting prior lawful processing.",
        "Right to lodge a complaint with a supervisory authority (Art. 77) — see the list below.",
      ],
    },
    {
      heading: "9. Supervisory authorities",
      body:
        "If you are not satisfied with our response, you may lodge a complaint with your national data-protection authority. The principal authorities for our EU readership are: " +
        dataProtectionAuthorities.map((a) => `${a.country}: ${a.name} (${a.url})`).join("; ") +
        ". UK readers may complain to the Information Commissioner's Office (ICO) at https://ico.org.uk.",
    },
    {
      heading: "10. Cookies summary",
      body: "Strictly-necessary cookies are set on first visit. Analytics and marketing cookies are set only after you give consent via the cookie banner. You can change your choice at any time by clicking 'Cookie preferences' in the footer. The full inventory — name, category, purpose, duration, provider — is on our /cookies page.",
    },
    {
      heading: "11. Affiliate links",
      body: "Some product links on this site may be affiliate links. When that is the case, the link will carry a country-appropriate disclosure label (Sponsored / Werbung / Publicité / etc.) immediately adjacent to the link. The affiliate network may receive transaction data — we never receive your name, address, or payment information. See /affiliate-disclosure for the full framework.",
    },
    {
      heading: "12. Children",
      body: "Larderlab is not directed at children under 16. We do not knowingly collect personal data from children. If you believe a child has provided us data, write to privacy@larderlab.com and we will delete it.",
    },
    {
      heading: "13. Security",
      body: "We protect personal data with HTTPS in transit, access controls on databases, least-privilege access for staff, and regular review of processor compliance. No system is perfectly secure — if a breach occurs that is likely to result in a risk to your rights and freedoms, we will notify you and the relevant supervisory authority within 72 hours, as required by Articles 33–34 GDPR.",
    },
    {
      heading: "14. Changes to this policy",
      body: "We may update this policy from time to time. Material changes will be summarised at the top of this page with a new 'Last updated' date. Continued use of the site after a change constitutes acknowledgement.",
    },
    {
      heading: "15. Contact",
      body: "Privacy questions, data-subject requests, or breach notifications: privacy@larderlab.com. We respond within one calendar month under Article 12(3) GDPR.",
    },
  ],
};
