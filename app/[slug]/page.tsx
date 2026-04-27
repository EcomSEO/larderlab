import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/lib/content/posts";
import { getRecipe, recipes } from "@/lib/content/recipes";
import { PillarTemplate } from "@/components/templates/PillarTemplate";
import { ComparisonTemplate } from "@/components/templates/ComparisonTemplate";
import { ClusterTemplate } from "@/components/templates/ClusterTemplate";
import { ListicleTemplate } from "@/components/templates/ListicleTemplate";
import { RecipePageTemplate } from "@/components/templates/RecipePageTemplate";
import { pageMetadata } from "@/lib/seo";

// Avoid colliding with /about, /contact, etc — static pages take precedence over this dynamic route.
const RESERVED = new Set([
  "about",
  "contact",
  "privacy",
  "terms",
  "affiliate-disclosure",
  "editorial-standards",
  "newsletter",
  "guides",
  "macro-calculator",
  "methodology",
  "pipeline",
  "recipes",
  "sitemap.xml",
  "robots.txt",
  "llms.txt",
]);

export function generateStaticParams() {
  const postSlugs = posts.map((p) => ({ slug: p.slug }));
  const recipeSlugs = recipes.map((r) => ({ slug: r.slug }));
  return [...postSlugs, ...recipeSlugs];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (RESERVED.has(slug)) return {};

  // Recipes win the slug shootout when both exist (food-publisher pivot).
  const recipe = getRecipe(slug);
  if (recipe) {
    return pageMetadata({
      title: `${recipe.title} — tested ${recipe.testCount}x in our test kitchen`,
      description: recipe.dek,
      path: `/${recipe.slug}`,
      ogType: "article",
    });
  }

  const post = getPost(slug);
  if (!post) return {};
  const suffix =
    post.postType === "comparison"
      ? ` (Tested ${new Date(post.updatedAt).getFullYear()})`
      : "";
  return pageMetadata({
    title: `${post.title}${suffix}`,
    description: post.description,
    path: `/${post.slug}`,
    ogType: "article",
  });
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (RESERVED.has(slug)) notFound();

  const recipe = getRecipe(slug);
  if (recipe) {
    const related = (recipe.related ?? [])
      .map((s) => getRecipe(s))
      .filter((r): r is NonNullable<typeof r> => Boolean(r));
    return <RecipePageTemplate recipe={recipe} related={related} />;
  }

  const post = getPost(slug);
  if (!post) notFound();

  switch (post.postType) {
    case "pillar":
      return <PillarTemplate post={post} />;
    case "comparison":
      return <ComparisonTemplate post={post} />;
    case "listicle":
      return <ListicleTemplate post={post} />;
    case "cluster":
    default:
      return <ClusterTemplate post={post} />;
  }
}
