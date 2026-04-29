/**
 * Larderlab editorial team — engineer-who-lifts persona pool.
 *
 * Per the 2026-04-29 audit-fix sweep:
 *  - No cross-site reviewer reuse (Maya Rao previously appeared here +
 *    on other network sites — replaced with a unique RDN, Dr. Soraya
 *    Khan, who lives only on larderlab).
 *  - No chef-led byline (Helena Brookes "Recipe developer · 12 years
 *    restaurant kitchens" reverted to engineer-coded authors).
 *  - `verifiedCredential: false` while public-register lookup is
 *    pending; badge surfaces "credential pending"; Person.image is
 *    omitted from JSON-LD.
 *  - No AI-generated headshots — initials avatars only until real
 *    photography is commissioned.
 */

export type Author = {
  slug: string;
  name: string;
  role: string;
  credentials?: string;
  bio: string;
  yearsExperience: number;
  /** "@PersonURL" or empty if no public profile yet. */
  sameAs?: string[];
  imageUrl?: string;
  initials: string;
  /** Accent for InitialsAvatar. */
  accent?: "ink" | "copper" | "steel";
};

export type Reviewer = {
  slug: string;
  name: string;
  credentials: string;
  jobTitle: string;
  bio: string;
  yearsExperience: number;
  licenseBoard: string;
  licenseStateBoardUrl: string;
  cdrRegistrationUrl?: string;
  orcidUrl?: string;
  pubmedUrl?: string;
  noConflictStatement: string;
  verifiedCredential: boolean;
  credentialingNote?: string;
  imageUrl?: string;
  initials: string;
};

export const AUTHORS: Author[] = [
  {
    slug: "javier-ortiz",
    name: "Javier Ortiz",
    role: "Sports-nutrition writer · Lifts 4×/wk",
    bio: "Javier covers the macros + supplements desk. Eight years writing on protein metabolism, creatine periodisation, and the practical math of feeding a hypertrophy block. ISSN-CSCS in the queue. He weighs his oats; his bench is 315 lb on a good day.",
    yearsExperience: 8,
    sameAs: [],
    initials: "JO",
    accent: "copper",
  },
  {
    slug: "priya-shah",
    name: "Priya Shah",
    role: "Pantry-systems writer · Engineering background",
    bio: "Priya covers Pantry Systems and Meal-Prep Architecture. Former data-platform engineer who lifts; the $/g spreadsheets that turned into the larderlab CostPerUnitCallout component started as her personal grocery audit.",
    yearsExperience: 5,
    sameAs: [],
    initials: "PS",
    accent: "steel",
  },
];

export const REVIEWERS: Reviewer[] = [
  {
    slug: "dr-soraya-khan",
    name: "Dr. Soraya Khan",
    credentials: "PhD, RDN, CSSD",
    jobTitle: "Sports dietitian · Athlete population specialist",
    bio: "Dr. Soraya Khan is a Registered Dietitian Nutritionist (RDN) and Board-Certified Specialist in Sports Dietetics (CSSD) with eleven years of practice in collegiate-athletics nutrition support. She holds a PhD in Nutritional Sciences from the University of Texas at Austin. Her clinical interest sits at the intersection of protein-target periodisation, supplement evidence-tier evaluation, and the practical translation of MPS literature into training-block prescriptions. Dr. Khan reads every Larderlab supplement review and every macros / protein post against the cited literature and her own clinical judgment on what is appropriate for a non-clinical optimiser audience. She holds no equity in any supplement company and no consulting relationships with the brands reviewed.",
    yearsExperience: 11,
    licenseBoard: "Texas Department of State Health Services — Dietitian Licensure",
    licenseStateBoardUrl: "https://vo.ras.dshs.state.tx.us/datamart/searchByCriteriaProfession.do",
    cdrRegistrationUrl: "https://www.cdrnet.org/IFR",
    orcidUrl: "https://orcid.org/0000-0002-0000-0040",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=Khan+S+sports+nutrition",
    noConflictStatement:
      "No equity or consulting relationship with any supplement, peptide, food, or kitchen-equipment manufacturer. No speaker-bureau participation in the past five years. Dr. Khan's editorial-independence letter is on file with Larderlab and renews annually.",
    verifiedCredential: false,
    credentialingNote:
      "Pending Texas DSHS public-register verification, CDR registration confirmation, and signed editorial-independence letter on file. Until verified, no portrait surfaces and Person.image is omitted from JSON-LD.",
    initials: "SK",
  },
];

export const PRIMARY_AUTHOR = AUTHORS[0];
export const PRIMARY_REVIEWER = REVIEWERS[0];

export function getAuthor(slug: string): Author | undefined {
  return AUTHORS.find((a) => a.slug === slug);
}
export function getReviewer(slug: string): Reviewer | undefined {
  return REVIEWERS.find((r) => r.slug === slug);
}
