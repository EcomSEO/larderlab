import Link from "next/link";

/**
 * TestKitchenStamp — olive-on-mint pill, "Tested {n} times in our test
 * kitchen". Tomato dot for accent. Links to /methodology by default.
 *
 * Mirrors the role of injectcompass MedicallyReviewedBadge but for a
 * food publisher: real test count is the trust signal.
 */
export function TestKitchenStamp({
  testCount,
  href = "/methodology",
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

  const inner = (
    <>
      <span className="dot" aria-hidden />
      <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden>
        <path
          d="M3 7.2l2.6 2.6L11 4.4"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>{label}</span>
    </>
  );

  if (!href) {
    return <span className={`tk-stamp ${className}`}>{inner}</span>;
  }
  return (
    <Link href={href} className={`tk-stamp ${className}`} aria-label={label}>
      {inner}
    </Link>
  );
}
