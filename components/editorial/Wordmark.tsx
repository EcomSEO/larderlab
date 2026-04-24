import Link from "next/link";

/**
 * Larderlab wordmark — engineering-monospace hybrid.
 *
 * "Larder" rendered in geometric sans (ink), "lab" in IBM Plex Mono (copper).
 * Visually signals the site's editorial identity: kitchen systems rendered
 * as an engineering log. Trailing hash bracket doubles as a "specimen mark."
 */
export function Wordmark({
  size = "md",
  asLink = true,
  className = "",
}: {
  size?: "sm" | "md" | "lg" | "xl";
  asLink?: boolean;
  className?: string;
}) {
  const sizeClass =
    size === "xl"
      ? "text-5xl md:text-6xl"
      : size === "lg"
      ? "text-3xl md:text-4xl"
      : size === "sm"
      ? "text-xl"
      : "text-2xl";

  const inner = (
    <span className={`inline-flex items-baseline gap-0 ${className}`}>
      <span
        className={`${sizeClass} text-ink font-semibold tracking-tight`}
        style={{ letterSpacing: "-0.025em" }}
      >
        Larder
      </span>
      <span
        className={`font-mono ${sizeClass} text-copper font-medium`}
        style={{ letterSpacing: "-0.04em" }}
      >
        lab
      </span>
      <span
        aria-hidden
        className="ml-1.5 text-copper font-mono leading-none self-center"
        style={{ fontSize: "0.55em" }}
      >
        [·]
      </span>
    </span>
  );

  if (!asLink) return inner;
  return (
    <Link href="/" aria-label="Larderlab — home" className="inline-block">
      {inner}
    </Link>
  );
}
