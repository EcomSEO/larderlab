import { TestKitchenStamp } from "@/components/TestKitchenStamp";
import { DietitianReviewedBadge } from "@/components/DietitianReviewedBadge";
import { RecipeDeveloperByline } from "@/components/RecipeDeveloperByline";
import { NutritionLedger } from "@/components/NutritionLedger";
import { SourcesAccordion } from "@/components/SourcesAccordion";
import { RecipeIngredientList } from "@/components/RecipeIngredientList";
import { RecipeMethodList } from "@/components/RecipeMethodList";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { TableOfContents } from "@/components/TableOfContents";
import { RelatedRecipes } from "@/components/RelatedRecipes";
import { RecipeJsonLd } from "@/components/schema/RecipeJsonLd";
import { ArticleJsonLd } from "@/components/schema/ArticleJsonLd";
import type { Recipe } from "@/lib/content/recipes";

/**
 * RecipePageTemplate — clean-medical recipe page.
 *
 * Layout (mirrors injectcompass ArticleTemplate):
 *  · BreadcrumbNav top
 *  · Full-bleed soft-olive plate placeholder
 *  · Olive eyebrow → H1 (Source Serif 4 weight 600, NOT italic) → dek
 *  · RecipeDeveloperByline + TestKitchenStamp + DietitianReviewedBadge +
 *    LastTestedLine + total time + servings + difficulty + share-icons
 *  · 12-col grid:
 *      main col (1-8, max-w 720): summary, why-it-works, ingredients +
 *        method (2-col inset on md+), variations, storage, sources
 *      right rail (9-12): NutritionLedger + sticky TOC
 *  · RelatedRecipes 3-up
 */
export function RecipePageTemplate({
  recipe,
  related = [],
  reviewedBy = "Dr. Maya Rao",
  reviewerCredentials = "RDN",
}: {
  recipe: Recipe;
  related?: Recipe[];
  reviewedBy?: string;
  reviewerCredentials?: string;
}) {
  const tocItems = [
    { id: "summary", label: "Summary" },
    { id: "why-it-works", label: "Why this recipe works" },
    { id: "ingredients", label: "Ingredients" },
    { id: "method", label: "Method" },
    { id: "variations", label: "Variations" },
    { id: "storage", label: "Storage & make-ahead" },
    { id: "sources", label: "Sources" },
  ];

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Recipes", href: "/recipes" },
    { label: recipe.department, href: "/recipes" },
    { label: recipe.title },
  ];

  return (
    <>
      <RecipeJsonLd recipe={recipe} />
      <ArticleJsonLd
        path={`/${recipe.slug}`}
        headline={recipe.title}
        description={recipe.dek}
        datePublished={recipe.publishedAt}
        dateModified={recipe.updatedAt}
      />

      <main className="bg-white">
        {/* Breadcrumb */}
        <div className="mx-auto max-w-container px-6 pt-6">
          <BreadcrumbNav crumbs={crumbs} />
        </div>

        {/* Hero — soft olive plate placeholder + title block */}
        <header className="mx-auto max-w-container px-6 pt-6 pb-10 md:pb-14">
          <div
            className="plate-warm rounded-md mb-8"
            style={{
              aspectRatio: "16 / 9",
              background: `linear-gradient(135deg, #EEF2E8 0%, #DCE4CC 40%, ${recipe.plateColor} 100%)`,
              maxHeight: "440px",
              boxShadow: "0 1px 2px rgb(0 0 0 / 0.04)",
            }}
            aria-label={`${recipe.title} — photographed in the test kitchen`}
            role="img"
          />
          <div className="eyebrow">{recipe.department}</div>
          <h1 className="h1-display mt-3 text-[40px] md:text-[48px] leading-[1.1] tracking-tightest text-ink max-w-[22ch]">
            {recipe.title}
          </h1>
          <p className="mt-5 text-[18px] md:text-[20px] leading-[1.55] text-ink-muted max-w-[60ch]">
            {recipe.dek}
          </p>

          {/* Trust + meta row */}
          <div className="mt-7 flex flex-wrap gap-3 items-center">
            <TestKitchenStamp testCount={recipe.testCount} />
            <DietitianReviewedBadge
              reviewerName={reviewedBy}
              credentials={reviewerCredentials}
            />
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[14px] text-ink-muted">
            <span>
              Total <strong className="font-mono text-ink">{recipe.totalTime}</strong>
            </span>
            <span aria-hidden>·</span>
            <span>
              Serves <strong className="font-mono text-ink">{recipe.serves}</strong>
            </span>
            <span aria-hidden>·</span>
            <span>{recipe.difficulty}</span>
            <span aria-hidden>·</span>
            <span>
              Yield <strong className="text-ink">{recipe.yield}</strong>
            </span>
          </div>

          <div className="mt-5">
            <RecipeDeveloperByline
              name={recipe.developer.name}
              credential={recipe.developer.credential}
              lastTested={recipe.lastTested}
              reviewedBy={reviewedBy}
              reviewerCredentials={reviewerCredentials}
              photoColor={recipe.developer.photoColor}
            />
          </div>
        </header>

        {/* Body — 12-col split */}
        <div className="mx-auto max-w-container px-6 pb-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Main reading column */}
            <article className="lg:col-span-8" style={{ maxWidth: "720px" }}>
              {/* Mobile-only nutrition ledger inlined at top */}
              <div className="lg:hidden mb-8">
                <NutritionLedger
                  rows={recipe.nutrition}
                  servingSize={recipe.servingSize}
                  servings={recipe.serves}
                  yieldText={recipe.yield}
                />
              </div>

              <section id="summary">
                <p className="recipe-summary">{recipe.summary}</p>
              </section>

              <section id="why-it-works" className="why-block">
                <h4>Why this recipe works</h4>
                <ul>
                  {recipe.whyItWorks.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </section>

              <div className="grid md:grid-cols-[1fr_1.5fr] gap-8 md:gap-10 mt-10">
                <section id="ingredients">
                  <RecipeIngredientList ingredients={recipe.ingredients} />
                </section>
                <section id="method">
                  <RecipeMethodList steps={recipe.method} />
                </section>
              </div>

              <section id="variations" className="variations">
                <h3>Variations</h3>
                {recipe.variations.map((v, i) => (
                  <div key={i} className="var-item">
                    <div className="var-title">{v.title}</div>
                    <div className="var-body">{v.body}</div>
                  </div>
                ))}
              </section>

              <section id="storage" className="mt-10">
                <h3 className="font-semibold text-[20px] md:text-[22px] text-ink mb-3 tracking-tight">
                  Storage &amp; make-ahead
                </h3>
                <p className="font-sans text-[16px] leading-relaxed text-ink">
                  {recipe.storage}
                </p>
                <p className="mt-4 font-sans text-[15px] leading-relaxed text-ink-muted">
                  <strong className="font-semibold text-ink">Notes:</strong>{" "}
                  {recipe.notes}
                </p>
              </section>

              <SourcesAccordion sources={recipe.sources} />

              <p className="mt-8 text-[12px] text-ink-soft leading-relaxed">
                Larderlab provides general information for educational
                purposes. It is not a substitute for medical advice. Consult
                a registered dietitian or your healthcare provider for
                personalised nutrition guidance.
              </p>
            </article>

            {/* Right rail */}
            <aside className="hidden lg:block lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                <NutritionLedger
                  rows={recipe.nutrition}
                  servingSize={recipe.servingSize}
                  servings={recipe.serves}
                  yieldText={recipe.yield}
                />
                <TableOfContents items={tocItems} />
              </div>
            </aside>
          </div>
        </div>

        <RelatedRecipes recipes={related} />
      </main>
    </>
  );
}
