import type { ReactNode } from "react";

type Tone = "copper" | "ink" | "steel";

/**
 * Small monospace-caps label. Used above every H1/H2 as the section's
 * spec identifier — think "FIG. 03" in an engineering paper.
 */
export function Eyebrow({
  children,
  tone = "copper",
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  const toneClass =
    tone === "ink"
      ? "text-ink"
      : tone === "steel"
      ? "text-steel"
      : "text-copper";
  return (
    <span className={`eyebrow ${toneClass} ${className}`}>{children}</span>
  );
}
