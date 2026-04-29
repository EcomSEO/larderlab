import Image from "next/image";
import { LastTestedLine } from "./LastTestedLine";

/** Map developer name -> headshot photo path. */
const DEVELOPER_PHOTOS: Record<string, string> = {
  "Javier Ortiz": "/images/authors/recipe-developer-1.jpg",
};

const DEFAULT_DEVELOPER_PHOTO = "/images/authors/recipe-developer-1.jpg";

/**
 * RecipeDeveloperByline — round 56px developer avatar + name + credentials,
 * then a sub-line of trust signals: dietitian-reviewed-by + tested date +
 * "Independent test kitchen — no brand sponsorships."
 */
export function RecipeDeveloperByline({
  name,
  credential,
  lastTested,
  reviewedBy,
  reviewerCredentials = "RDN",
  photoColor,
  photoUrl,
}: {
  name: string;
  credential: string;
  lastTested: string;
  reviewedBy?: string;
  reviewerCredentials?: string;
  photoColor?: string;
  photoUrl?: string;
}) {
  const resolvedPhoto =
    photoUrl ?? DEVELOPER_PHOTOS[name] ?? DEFAULT_DEVELOPER_PHOTO;

  return (
    <div className="dev-byline">
      {resolvedPhoto ? (
        <div className="dev-photo relative overflow-hidden">
          <Image
            src={resolvedPhoto}
            alt={`${name}, ${credential}`}
            fill
            sizes="56px"
            className="object-cover"
          />
        </div>
      ) : (
        <div
          className="dev-photo"
          aria-hidden
          style={
            photoColor
              ? {
                  background: `linear-gradient(135deg, #DCE4CC 0%, ${photoColor} 100%)`,
                }
              : undefined
          }
        />
      )}
      <div>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="dev-name">By {name}</span>
          <span className="dev-cred">{credential}</span>
        </div>
        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-ink-muted">
          {reviewedBy && (
            <span>
              Reviewed by{" "}
              <span className="text-olive-deep font-medium">
                {reviewedBy}, {reviewerCredentials}
              </span>
            </span>
          )}
          {reviewedBy && <span aria-hidden>·</span>}
          <LastTestedLine date={lastTested} />
          <span aria-hidden>·</span>
          <span>Independent test kitchen — no brand sponsorships.</span>
        </div>
      </div>
    </div>
  );
}
