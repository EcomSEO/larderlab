type Tier =
  | "Best overall"
  | "Best mid-range"
  | "Best budget"
  | "Editor's pick"
  | "Skip"
  | string;

function classFor(tier: string): string {
  const t = tier.toLowerCase();
  if (t.includes("skip") || t.includes("avoid"))
    return "tier-badge tier-badge-skip";
  if (t.includes("budget") || t.includes("cheap"))
    return "tier-badge tier-badge-budget";
  if (t.includes("mid") || t.includes("runner") || t.includes("premium"))
    return "tier-badge tier-badge-mid";
  return "tier-badge";
}

export function TierBadge({ tier }: { tier: Tier }) {
  return <span className={classFor(tier)}>{tier}</span>;
}
