/**
 * Larderlab cookie policy — comprehensive English content covering
 * the cookie inventory (name / category / purpose / duration / provider),
 * how to manage cookies, third-party summary, and changes.
 *
 * The CookieRow inventory below is the canonical source — the cookie
 * banner (CookieConsent) and the /cookies page consume it. Adding a
 * cookie anywhere in the codebase requires adding a row here first.
 */

export type CookieRow = {
  name: string;
  category: "necessary" | "analytics" | "marketing";
  purpose: string;
  duration: string;
  provider: string;
};

export const COOKIE_INVENTORY: CookieRow[] = [
  {
    name: "cookieConsent",
    category: "necessary",
    purpose:
      "Stores your cookie banner choice — consent version, timestamp, and granular categories. Required for the banner to remember you and not re-prompt on every visit.",
    duration: "13 months",
    provider: "Larderlab (first-party, localStorage)",
  },
  {
    name: "ll_session",
    category: "necessary",
    purpose:
      "Session continuity across page navigations within a single visit. No personal data, no cross-site tracking.",
    duration: "Session (cleared on browser close)",
    provider: "Larderlab (first-party)",
  },
  {
    name: "_ga, _ga_<id>",
    category: "analytics",
    purpose:
      "Aggregated, pseudonymous usage analytics — pages viewed, approximate region, device type. Only set when you accept analytics cookies. We have IP-anonymisation enabled.",
    duration: "13 months",
    provider: "Google Analytics 4 (placeholder — not active by default)",
  },
  {
    name: "_fbp",
    category: "marketing",
    purpose:
      "Conversion attribution for paid social campaigns. Only set when you accept marketing cookies.",
    duration: "3 months",
    provider: "Meta Pixel (placeholder — not active by default)",
  },
];

export type CookieSection = {
  heading: string;
  body: string;
  bullets?: string[];
};

export type CookiePolicyContent = {
  title: string;
  intro: string;
  lastUpdated: string;
  inventory: CookieRow[];
  inventoryHeading: string;
  columns: { name: string; category: string; purpose: string; duration: string; provider: string };
  categoryLabels: Record<CookieRow["category"], string>;
  sections: CookieSection[];
};

export const COOKIE_POLICY: CookiePolicyContent = {
  title: "Cookie policy",
  lastUpdated: "Last updated: 27 April 2026",
  intro:
    "This page lists every cookie and cookie-like storage entry that larderlab.com uses, what each one does, and how long it lasts. We use cookies sparingly: a small set of strictly-necessary cookies keeps the site working, and optional analytics or marketing cookies are loaded only after you have given consent through the cookie banner.",
  inventoryHeading: "Cookies and storage we use",
  columns: {
    name: "Name",
    category: "Category",
    purpose: "Purpose",
    duration: "Duration",
    provider: "Provider",
  },
  categoryLabels: {
    necessary: "Strictly necessary",
    analytics: "Analytics",
    marketing: "Marketing",
  },
  inventory: COOKIE_INVENTORY,
  sections: [
    {
      heading: "What is a cookie?",
      body: "A cookie is a small text file that a website asks your browser to store. Cookies let a site remember things between page loads (a session, a language preference, a consent choice). 'Cookie-like' technologies — localStorage, sessionStorage, IndexedDB — work in a similar way and are covered by the same rules under Article 5(3) of the ePrivacy Directive and § 25 TTDSG/TDDDG. We use both in the table above.",
    },
    {
      heading: "Strictly-necessary vs optional",
      body: "Strictly-necessary cookies are loaded automatically on first visit because the site cannot function without them — they keep your session alive and they remember the cookie choice you make on the banner. Optional cookies (analytics, marketing) are loaded only after you have actively consented through the banner.",
    },
    {
      heading: "How to manage your cookie choices",
      body: "You are in control of the optional categories at all times.",
      bullets: [
        "Use the cookie banner on first visit to accept all, reject all, or pick categories.",
        "Re-open the banner at any time via the 'Cookie preferences' link in the footer.",
        "Withdraw consent at any time — withdrawal does not affect the lawfulness of processing carried out before withdrawal.",
        "Delete or block cookies in your browser settings (Chrome, Firefox, Safari, Edge all support this). Note that strictly-necessary cookies cannot be disabled without breaking site functionality.",
      ],
    },
    {
      heading: "Third-party cookies",
      body: "We do not load third-party advertising trackers in the default page load. The optional analytics and marketing rows in the inventory above describe placeholders for Google Analytics 4 and Meta Pixel — they are listed for honesty so the consent banner accurately reflects every cookie that could be set if the operator activates these services in the future. They are not currently active. We will update this page and the consent banner before activating either.",
    },
    {
      heading: "Do Not Track",
      body: "We respect the Global Privacy Control (GPC) signal where present — if your browser sends GPC, we treat it as a withdrawal of consent for analytics and marketing categories. Browser-level 'Do Not Track' (DNT) is also honoured.",
    },
    {
      heading: "Changes to this policy",
      body: "If we add, change, or retire a cookie, we update the inventory table above and bump the 'Last updated' date. Material changes also re-trigger the cookie banner so you can re-confirm your preferences.",
    },
    {
      heading: "Questions",
      body: "Privacy or cookie questions: privacy@larderlab.com.",
    },
  ],
};
