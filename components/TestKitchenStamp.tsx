import Link from "next/link";

/**
 * TestKitchenStamp — the food-publisher equivalent of a "medically reviewed"
 * badge. Olive-on-tan pill, links to /editorial-standards. Sits at the top
 * of every recipe page and on featured recipe cards.
 *
 * No diet-culture framing. No "approved by experts" puffery. Just the
 * concrete number of test-kitchen passes the recipe survived.
 */
export function TestKitchenStamp({
  testCount,
  href = "/editorial-standards",
  className = "",
}: {
  testCount: number;
  href?: string;
  className?: string;
}) {
  const label =
    testCount === 1
      ? "Tested once in our test kitchen"
      : `Tested ${testCount} times in our test kitchen`;
  return (
    <Link href={href} className={`tk-stamp ${className}`} aria-label={label}>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M3 7.2l2.6 2.6L11 4.4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>{label}</span>
    </Link>
  );
}
