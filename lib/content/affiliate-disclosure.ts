/**
 * Larderlab affiliate disclosure — comprehensive English content
 * stating editorial policy, current state (no active programs), how
 * disclosure looks when present, user rights, and contact.
 *
 * Country-appropriate label words are sourced from
 * components/AffiliateLabel.tsx so this content stays in sync with
 * the rendered pill.
 */

import { affiliateLabelByLocale } from "@/components/AffiliateLabel";

export type AffiliateSection = {
  heading: string;
  body: string;
  bullets?: string[];
};

export type AffiliateDisclosureContent = {
  title: string;
  intro: string;
  lastUpdated: string;
  sections: AffiliateSection[];
  labelExamples: { locale: string; label: string }[];
};

export const AFFILIATE_CONTACT_EMAIL = "hello@larderlab.com";

export const AFFILIATE_DISCLOSURE: AffiliateDisclosureContent = {
  title: "Affiliate disclosure",
  lastUpdated: "Last updated: 27 April 2026",
  intro:
    "Larderlab is editorially independent. We are not paid to recommend any product, we do not run brand-sponsored content, and we do not promote peptide vendors at all. This page documents the affiliate framework we apply when, in the future, we publish reviews of cookware, pantry staples, or supplement brands.",
  sections: [
    {
      heading: "1. Current state — no active affiliate links",
      body: "At the time of writing, no affiliate relationship is active on larderlab.com. Every product mentioned in our pantry guides, supplement comparisons, and cookware reviews is referenced editorially with a plain link or a non-affiliate retailer search. When this changes, the change will be visible: the product link will carry a country-appropriate disclosure pill (see examples below), and this page will be updated with the active programs and the date the change took effect.",
    },
    {
      heading: "2. What the disclosure looks like when present",
      body: "When an affiliate link goes live, it always carries a small disclosure pill placed adjacent to the link. The label is in the local language of the reader so that the disclosure is understood at a glance.",
      bullets: Object.entries(affiliateLabelByLocale).map(
        ([loc, label]) => `${loc.toUpperCase()}: “${label}”`
      ),
    },
    {
      heading: "3. Editorial standards we will not break",
      body: "If we add affiliate links in the future, the following rules are non-negotiable.",
      bullets: [
        "We never accept payment for placement, ranking, or favourable wording.",
        "We never accept free product in exchange for a positive review.",
        "We never raise a product's ranking because its affiliate program pays better.",
        "We always test our top picks against products we cannot earn commission from — and we name those competitors in the post.",
        "When two genuinely-tied products differ only in commission availability, we recommend the one that is actually better and disclose the alternative.",
        "We never promote peptide vendors. Larderlab is the food / pantry / supplement-context publisher in the network — peptide products are entirely out of scope.",
      ],
    },
    {
      heading: "4. Programs we may join",
      body: "When we activate affiliate links, we will list the programs here with the date each one became active.",
      bullets: [
        "Amazon Associates (cookware, kitchen tools, pantry staples) — not active.",
        "ShareASale, Impact, Awin (supplement and food brands) — not active.",
        "Direct affiliate programs with selected manufacturers (disclosed per article when relevant) — none active.",
      ],
    },
    {
      heading: "5. Why we are comfortable with this model",
      body: "Independent publishers must pay for editorial work somehow. Banner ads, sponsored posts, and paid brand partnerships are worse for readers than disclosed affiliate commissions because they put advertiser demands ahead of reader trust. A clearly-labelled affiliate link aligns our incentives with yours: we earn only when we recommend something you actually buy, and we keep our recommendations honest because the alternative is losing your trust — which would end the publication.",
    },
    {
      heading: "6. Your rights as a reader",
      body: "Affiliate links never affect the price you pay. You are free to ignore the link and buy from any retailer you prefer. The retailer may share transaction information with the affiliate network (product purchased, date, commission earned) — they do not share your name, address, or payment details with us.",
    },
    {
      heading: "7. Compliance with EU and national rules",
      body: "Our disclosure framework follows the EU Unfair Commercial Practices Directive (Directive 2005/29/EC), the Omnibus Directive (Directive 2019/2161 — strengthening transparency for online reviews and rankings), and national overlays such as Germany's UWG, France's Code de la consommation, Italy's Codice del Consumo, Spain's LGDCU, and Sweden's Marknadsföringslag. Where local enforcement targets specific words ('detox', 'anti-ageing', 'superfood'), our editorial policy already prohibits those terms regardless of context.",
    },
    {
      heading: "8. Contact",
      body: `Questions about how we use affiliate links — including a request to remove one from a post: ${AFFILIATE_CONTACT_EMAIL}.`,
    },
  ],
  labelExamples: Object.entries(affiliateLabelByLocale).map(([locale, label]) => ({ locale, label })),
};
