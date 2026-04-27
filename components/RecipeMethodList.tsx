import type { RecipeStep } from "@/lib/content/recipes";

/**
 * RecipeMethodList — clean-medical numbered method.
 * Olive-circle step numbers, Inter step labels (NOT italic), Inter body.
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
      <h3 className="font-semibold text-[20px] md:text-[22px] text-ink mb-3 tracking-tight">
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
