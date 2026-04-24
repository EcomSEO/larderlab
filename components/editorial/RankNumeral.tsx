/**
 * The copper monospace rank numeral used on ranked lists + the hub index.
 * `00` style (two-digit, padded) — reads as a row ID in a spec table.
 */
export function RankNumeral({
  n,
  className = "",
}: {
  n: number;
  className?: string;
}) {
  const display = n.toString().padStart(2, "0");
  return (
    <span className={`rank-numeral tnum ${className}`}>
      {display}
    </span>
  );
}
