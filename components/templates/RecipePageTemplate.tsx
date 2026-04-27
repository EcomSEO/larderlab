import { TestKitchenStamp } from "@/components/TestKitchenStamp";
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
 * RecipePageTemplate — the killer recipe page.
 *
 * Layout:
 *  · BreadcrumbNav
 *  · Full-bleed plate hero + department eyebrow + H1 (Fraunces 56-64) + dek
 *  · RecipeDeveloperByline + TestKitchenStamp + share row
 *  · 12-col grid:
 *      main col (1-8, max-w 720): summary drop-cap, why-it-works,
 *        ingredients + method, variations, storage, sources accordion
 *      right rail (9-12): NutritionLedger top + sticky TOC
 *  · RelatedRecipes 3-up
 */
export function RecipePageTemplate({
  recipe,
  related = [],
}: {
  recipe: Recipe;
  related?: Recipe[];
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

      {/* Top breadcrumb strip */}
      <div className="mx-auto max-w-spread px-6 pt-6">
        <BreadcrumbNav crumbs={crumbs} />
      </div>

      {/* Hero — full-bleed plate placeholder */}
      <header className="mx-auto max-w-spread px-6 pt-6 pb-10 md:pb-14">
        <div
          className="plate-warm rounded-md mb-8"
          style={{
            aspectRatio: "16 / 9",
            background: `radial-gradient(ellipse at 30% 30%, #F8E5C8 0%, ${recipe.plateColor} 55%, #A8884E 100%)`,
            maxHeight: "440px",
          }}
          aria-label={`${recipe.title} — photographed in the test kitchen`}
          role="img"
        />
        <div className="dept-label">{recipe.department}</div>
        <h1 className="cover-headline mt-3 text-[2.6rem] sm:text-[3.4rem] md:text-[3.8rem] lg:text-[4.2rem]">
          {recipe.title}
        </h1>
        <p className="dek mt-5 max-w-[60ch]">{recipe.dek}</p>

        {/* Trust + meta row */}
        <div className="mt-7 flex flex-wrap gap-4 items-center">
          <TestKitchenStamp testCount={recipe.testCount} />
          <span className="byline-italic text-[--color-text-secondary]">
            Total · {recipe.totalTime} · Serves {recipe.serves} · {recipe.difficulty}
          </span>
        </div>

        <div className="mt-5">
          <RecipeDeveloperByline
            name={recipe.developer.name}
            credential={recipe.developer.credential}
            lastTested={recipe.lastTested}
            photoColor={recipe.developer.photoColor}
          />
        </div>
      </header>

      {/* Body — 12-col split */}
      <div className="mx-auto max-w-spread px-6 pb-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Main reading column */}
          <article className="lg:col-span-8 xl:col-span-8" style={{ maxWidth: "720px" }}>
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
              <h3 className="font-display italic font-medium">Variations</h3>
              {recipe.variations.map((v, i) => (
                <div key={i} className="var-item">
                  <div className="var-title">{v.title}</div>
                  <div className="var-body">{v.body}</div>
                </div>
              ))}
            </section>

            <section id="storage" className="mt-10">
              <h3 className="font-display italic font-medium text-[1.5rem] mb-3">
                Storage &amp; make-ahead
              </h3>
              <p className="font-sans text-[0.96rem] leading-relaxed text-[--color-ink]">
                {recipe.storage}
              </p>
              <p className="mt-4 font-sans text-[0.92rem] leading-relaxed text-[--color-text-secondary] italic">
                <strong className="not-italic font-semibold text-[--color-ink]">
                  Notes:
                </strong>{" "}
                {recipe.notes}
              </p>
            </section>

            <SourcesAccordion sources={recipe.sources} />
          </article>

          {/* Right rail */}
          <aside className="hidden lg:block lg:col-span-4 xl:col-span-4">
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
    </>
  );
}
