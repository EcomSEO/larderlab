import { LastTestedLine } from "./LastTestedLine";

/**
 * RecipeDeveloperByline — the credentialed face on the page.
 * Round photo placeholder + name + credentials + last-tested.
 */
export function RecipeDeveloperByline({
  name,
  credential,
  lastTested,
  photoColor,
}: {
  name: string;
  credential: string;
  lastTested: string;
  photoColor: string;
}) {
  return (
    <div className="dev-byline">
      <div
        className="dev-photo"
        style={{ background: `linear-gradient(135deg, ${photoColor} 0%, #5C6F3C 100%)` }}
        aria-hidden="true"
      />
      <div>
        <div className="dev-name">By {name}</div>
        <div className="dev-cred">{credential}</div>
        <div className="mt-1">
          <LastTestedLine date={lastTested} />
        </div>
      </div>
    </div>
  );
}
