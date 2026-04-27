import { canonical } from "@/lib/seo";
import { SITE } from "@/lib/content/site";
import type { Recipe } from "@/lib/content/recipes";
import { JsonLd } from "./JsonLd";

/**
 * Recipe + NutritionInformation JSON-LD. Includes recipeIngredient array,
 * recipeInstructions HowToStep array, recipeYield, prep/cook/total ISO
 * durations, recipeCategory, recipeCuisine, and full nutrition.
 */
export function RecipeJsonLd({ recipe }: { recipe: Recipe }) {
  const nutri = Object.fromEntries(
    recipe.nutrition.map((n) => {
      const key =
        n.label.toLowerCase() === "calories"
          ? "calories"
          : n.label.toLowerCase() === "protein"
          ? "proteinContent"
          : n.label.toLowerCase() === "carbs"
          ? "carbohydrateContent"
          : n.label.toLowerCase() === "fat"
          ? "fatContent"
          : n.label.toLowerCase() === "fiber"
          ? "fiberContent"
          : n.label.toLowerCase() === "sodium"
          ? "sodiumContent"
          : n.label.toLowerCase();
      return [key, `${n.value} ${n.unit}`];
    }),
  );

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Recipe",
        name: recipe.title,
        description: recipe.dek,
        author: {
          "@type": "Person",
          name: recipe.developer.name,
          jobTitle: "Recipe developer",
        },
        publisher: {
          "@type": "Organization",
          name: SITE.name,
          url: SITE.url,
          logo: { "@type": "ImageObject", url: `${SITE.url}/logo.png` },
        },
        datePublished: recipe.publishedAt,
        dateModified: recipe.updatedAt,
        mainEntityOfPage: { "@type": "WebPage", "@id": canonical(`/${recipe.slug}`) },
        recipeCategory: recipe.department,
        recipeCuisine: recipe.cuisine,
        recipeYield: recipe.yield,
        prepTime: recipe.isoPrep,
        cookTime: recipe.isoCook,
        totalTime: recipe.isoTotal,
        keywords: [recipe.department, recipe.cuisine, "tested in our test kitchen"]
          .filter(Boolean)
          .join(", "),
        recipeIngredient: recipe.ingredients.map((i) =>
          [i.qty, i.name, i.note ? `(${i.note})` : ""].filter(Boolean).join(" ").trim(),
        ),
        recipeInstructions: recipe.method.map((s, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: s.label,
          text: s.body,
        })),
        nutrition: {
          "@type": "NutritionInformation",
          servingSize: recipe.servingSize,
          ...nutri,
        },
      }}
    />
  );
}
