import type { RecipeStep } from "@/lib/content/recipes";

/**
 * RecipeMethodList — numbered method, italic step labels (Fraunces),
 * Inter body. Step numbers in olive circles.
 */
export function RecipeMethodList({
  steps,
  heading = "Method",
}: {
  steps: RecipeStep[];
  heading?: string;
}) {
  return (
    <div>
      <h3 className="font-display italic font-medium text-[1.5rem] mb-3">
        {heading}
      </h3>
      <ol className="meth-list">
        {steps.map((s, i) => (
          <li key={i}>
            <div>
              <span className="step-label">{s.label}</span>
              <span className="step-body">{s.body}</span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
