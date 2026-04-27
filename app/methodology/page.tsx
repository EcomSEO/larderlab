import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("trustPages.methodology");
  return pageMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: "/methodology",
  });
}

/**
 * Methodology — magazine register. The headline is rendered as a serif
 * H1 with an italic dek; the body is a 2-column reading rail with
 * sub-heads on the left margin. Reads like an editorial standards page,
 * not an engineering spec.
 */
export default function MethodologyPage() {
  const t = useTranslations("trustPages.methodology");
  const body = t.raw("body") as string[];

  return (
    <main>
      <header className="border-b border-ink/15 bg-cream-soft">
        <div className="mx-auto max-w-spread px-6 pt-12 md:pt-16 pb-12">
          <div className="dept-label">Editorial standards · Issue 04</div>
          <h1 className="font-display italic font-normal text-[3rem] md:text-[4.4rem] leading-[1.04] mt-5 max-w-[18ch]">
            {t("h1")}
          </h1>
          <p className="dek mt-6 max-w-[60ch]">
            How a recipe gets cooked, a pantry essay gets sourced, and an
            ingredient gets a deep-dive — with an open change log.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3 byline">
            <span>By the editors</span>
            <span aria-hidden className="text-tomato">·</span>
            <Link href="/methodology/v1-2" className="hover:text-tomato transition">
              Read the v1.2 specification →
            </Link>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-spread px-6 py-14 md:py-20">
        <div className="prose mx-auto">
          {body.map((line, i) => {
            if (line.startsWith("## ")) {
              return (
                <h2 key={i} className="font-display italic font-normal">
                  {line.replace(/^##\s+/, "")}
                </h2>
              );
            }
            return <p key={i}>{line}</p>;
          })}
        </div>
      </article>
    </main>
  );
}
