import Link from "next/link";
import Image from "next/image";

const DEFAULT_REVIEWER_PHOTO = "/images/reviewers/dr-maya-rao.jpg";

/**
 * Larderlab signature trust badge — Nutritionally reviewed by RDN.
 *
 * Mirrors injectcompass MedicallyReviewedBadge. Pill: olive-50 bg,
 * olive-deep text, link to editorial-standards. Optional reviewer
 * headshot sits left of the shield icon.
 *
 * Use on Hero featured tile and inside RecipeTemplate.
 */
export function DietitianReviewedBadge({
  reviewerName,
  credentials = "RDN",
  reviewerHref = "/editorial-standards",
  reviewerPhoto = DEFAULT_REVIEWER_PHOTO,
  showPhoto = true,
}: {
  reviewerName: string;
  credentials?: string;
  reviewerHref?: string;
  reviewerPhoto?: string;
  showPhoto?: boolean;
}) {
  return (
    <div className="dietitian-pill">
      {showPhoto && reviewerPhoto && (
        <span className="relative w-5 h-5 rounded-full overflow-hidden shrink-0 ring-1 ring-white/60">
          <Image
            src={reviewerPhoto}
            alt={`${reviewerName}, ${credentials}`}
            fill
            sizes="20px"
            className="object-cover"
          />
        </span>
      )}
      <CheckShield className="w-4 h-4 shrink-0" />
      <span>
        Nutritionally reviewed by{" "}
        <Link href={reviewerHref}>
          {reviewerName}, {credentials}
        </Link>
      </span>
    </div>
  );
}

function CheckShield({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden>
      <path
        d="M8 1.5 2.5 3.5v4c0 3 2.3 5.7 5.5 7 3.2-1.3 5.5-4 5.5-7v-4L8 1.5Z"
        fill="currentColor"
        opacity="0.18"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="m5.5 8 2 2 3.5-4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
