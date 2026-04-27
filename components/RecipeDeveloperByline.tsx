import { LastTestedLine } from "./LastTestedLine";

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
}: {
  name: string;
  credential: string;
  lastTested: string;
  reviewedBy?: string;
  reviewerCredentials?: string;
  photoColor?: string;
}) {
  return (
    <div className="dev-byline">
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
