import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getHub, hubs } from "@/lib/content/hubs";
import { postsByHub } from "@/lib/content/posts";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { EmailCapture } from "@/components/EmailCapture";
import { pageMetadata } from "@/lib/seo";
import { Eyebrow } from "@/components/editorial/Eyebrow";
import { SpecRule, DotRule } from "@/components/editorial/DotRule";
import { RankNumeral } from "@/components/editorial/RankNumeral";

const typeLabel: Record<string, string> = {
  pillar: "Guide",
  comparison: "Comparison",
  cluster: "Explainer",
  listicle: "Listicle",
};

export function generateStaticParams() {
  return hubs.map((h) => ({ hub: h.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ hub: string }>;
}): Promise<Metadata> {
  const { hub: hubSlug } = await params;
  const hub = getHub(hubSlug);
  if (!hub) return {};
  return pageMetadata({
    title: hub.name,
    description: hub.oneLiner,
    path: `/guides/${hub.slug}`,
  });
}

export default async function HubPage({
  params,
}: {
  params: Promise<{ hub: string }>;
}) {
  const { hub: hubSlug } = await params;
  const hub = getHub(hubSlug);
  if (!hub) notFound();

  const hubIndex = hubs.findIndex((h) => h.slug === hub.slug);
  const hubPosts = postsByHub(hub.slug);
  const pillar = hubPosts.find((p) => p.postType === "pillar");
  const comparisons = hubPosts.filter((p) => p.postType === "comparison");
  const explainers = hubPosts.filter((p) => p.postType === "cluster");
  const listicles = hubPosts.filter((p) => p.postType === "listicle");

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Guides", href: "/#hub-index" },
    { label: hub.name },
  ];

  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <main>
        {/* Hub masthead */}
        <section className="border-b border-ink/10">
          <div className="mx-auto max-w-wiki px-6 pt-10 pb-14 md:pb-20">
            <Breadcrumbs crumbs={crumbs} />

            <div className="mt-6">
              <SpecRule />
            </div>

            <div className="mt-8 grid md:grid-cols-12 gap-10 items-end">
              <div className="md:col-span-8">
                <div className="flex items-center gap-5">
                  <RankNumeral n={hubIndex + 1} className="!text-[3rem]" />
                  <div>
                    <Eyebrow tone="copper">
                      Hub {hubIndex + 1} of {hubs.length}
                    </Eyebrow>
                    <div className="caps-label text-steel mt-1 tnum">
                      H{String(hubIndex + 1).padStart(2, "0")} · /{hub.slug}
                    </div>
                  </div>
                </div>
                <h1 className="display-headline mt-6 text-[2.5rem] md:text-[3.5rem] leading-[1.02]">
                  {hub.name}
                </h1>
                <p className="mt-5 text-xl md:text-[1.4rem] text-charcoal/85 max-w-[58ch] leading-[1.45]">
                  {hub.oneLiner}
                </p>
              </div>
              <div className="md:col-span-4 md:pl-6 md:border-l md:border-ink/15">
                <Eyebrow tone="steel">Thesis</Eyebrow>
                <p className="mt-3 text-[14px] text-charcoal/85 leading-relaxed">
                  {hub.thesis}
                </p>
                <dl className="mt-5 pt-5 border-t border-ink/10 divide-y divide-ink/10 text-[13px]">
                  <div className="flex justify-between py-2 first:pt-0">
                    <dt className="text-steel">Posts live</dt>
                    <dd className="text-ink tnum font-mono">
                      {String(hubPosts.length).padStart(3, "0")}
                    </dd>
                  </div>
                  <div className="flex justify-between py-2">
                    <dt className="text-steel">Planned in hub</dt>
                    <dd className="text-ink tnum font-mono">030</dd>
                  </div>
                  <div className="flex justify-between py-2 last:pb-0">
                    <dt className="text-steel">Hub slug</dt>
                    <dd className="text-copper tnum font-mono">{hub.slug}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* Start here — pillar */}
        {pillar && (
          <section className="border-b border-ink/10 bg-paper-deep/30">
            <div className="mx-auto max-w-wiki px-6 py-14 md:py-20">
              <Eyebrow tone="copper">Start here · pillar</Eyebrow>
              <h2 className="font-sans text-3xl md:text-4xl text-ink mt-3 mb-8 leading-tight tracking-tight">
                The complete guide for this hub.
              </h2>
              <Link
                href={`/${pillar.slug}`}
                className="group block bg-paper border border-ink/15 rounded-sm p-8 md:p-10 shadow-card hover:shadow-spec hover:border-copper/50 transition"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="caps-label text-copper">Guide</span>
                  <span aria-hidden className="text-copper/50">·</span>
                  <span className="caps-label text-steel tnum">
                    {pillar.readingTime} min · updated {pillar.updatedAt}
                  </span>
                </div>
                <h3 className="font-sans font-semibold text-[1.8rem] md:text-[2.1rem] text-ink leading-[1.08] tracking-tight">
                  {pillar.title}
                </h3>
                <p className="mt-5 text-charcoal/85 text-[15.5px] leading-relaxed max-w-[62ch]">
                  {pillar.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-copper group-hover:text-ink text-sm font-mono uppercase tracking-[0.1em]">
                  Read the pillar →
                </span>
              </Link>
            </div>
          </section>
        )}

        {/* Comparisons */}
        {comparisons.length > 0 && (
          <section className="border-b border-ink/10">
            <div className="mx-auto max-w-wiki px-6 py-14 md:py-20">
              <div className="flex items-end justify-between flex-wrap gap-3 mb-8">
                <div>
                  <Eyebrow tone="copper">Ranked comparisons</Eyebrow>
                  <h2 className="font-sans text-3xl md:text-4xl text-ink mt-3 leading-tight tracking-tight">
                    What we&apos;d actually buy.
                  </h2>
                </div>
                <span className="caps-label text-steel tnum">
                  {String(comparisons.length).padStart(2, "0")} specs
                </span>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-ink/15">
                {comparisons.map((p, i) => (
                  <Link
                    key={p.slug}
                    href={`/${p.slug}`}
                    className="group p-6 border-b md:border-b-0 md:border-r border-ink/10 last:border-r-0 hover:bg-paper-deep/40 transition"
                  >
                    <RankNumeral n={i + 1} />
                    <h3 className="font-sans font-semibold text-lg text-ink leading-tight mt-3 group-hover:text-copper transition tracking-tight">
                      {p.title}
                    </h3>
                    <p className="text-[13.5px] text-charcoal/75 mt-2 leading-relaxed line-clamp-3">
                      {p.description}
                    </p>
                    <div className="mt-4 caps-label text-steel tnum">
                      {p.readingTime} min · rev {p.updatedAt}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Explainers */}
        {explainers.length > 0 && (
          <section className="border-b border-ink/10">
            <div className="mx-auto max-w-wiki px-6 py-14 md:py-20">
              <Eyebrow tone="copper">Explainers</Eyebrow>
              <h2 className="font-sans text-3xl md:text-4xl text-ink mt-3 mb-8 leading-tight tracking-tight">
                Plain-English answers to the specific questions.
              </h2>
              <ul className="divide-y divide-ink/10 border-y border-ink/10">
                {explainers.map((p, i) => (
                  <li key={p.slug}>
                    <Link
                      href={`/${p.slug}`}
                      className="group grid md:grid-cols-[4rem_auto_1fr_auto] gap-5 py-5 items-baseline hover:bg-paper-deep/30 px-2 transition"
                    >
                      <span className="font-mono text-[0.72rem] text-copper tnum uppercase tracking-[0.12em]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="caps-label text-steel">
                        {typeLabel[p.postType]}
                      </span>
                      <div>
                        <h3 className="font-sans font-medium text-[17px] text-ink group-hover:text-copper transition leading-snug tracking-tight">
                          {p.title}
                        </h3>
                        <p className="text-[13.5px] text-charcoal/70 mt-1 line-clamp-1">
                          {p.description}
                        </p>
                      </div>
                      <span className="caps-label text-steel tnum whitespace-nowrap">
                        {p.readingTime} min
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Listicles */}
        {listicles.length > 0 && (
          <section className="border-b border-ink/10">
            <div className="mx-auto max-w-wiki px-6 py-14 md:py-20">
              <Eyebrow tone="copper">Listicles · engineered</Eyebrow>
              <h2 className="font-sans text-3xl md:text-4xl text-ink mt-3 mb-8 leading-tight tracking-tight">
                Ranked lists, 8–12 items max.
              </h2>
              <div className="grid md:grid-cols-2 gap-0 border-t border-ink/15">
                {listicles.map((p, i) => (
                  <Link
                    key={p.slug}
                    href={`/${p.slug}`}
                    className="group p-6 border-b md:border-b-0 md:border-r border-ink/10 last:border-r-0 hover:bg-paper-deep/40 transition"
                  >
                    <RankNumeral n={i + 1} />
                    <h3 className="font-sans font-semibold text-lg text-ink leading-tight mt-3 group-hover:text-copper transition tracking-tight">
                      {p.title}
                    </h3>
                    <p className="text-[13.5px] text-charcoal/75 mt-2 leading-relaxed line-clamp-2">
                      {p.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {hubPosts.length === 0 && (
          <section className="mx-auto max-w-wiki px-6 py-20">
            <p className="text-charcoal/70 text-lg max-w-prose">
              Posts land here as they clear editorial review. See the{" "}
              <Link href="/" className="text-copper underline">
                home page
              </Link>{" "}
              for what&apos;s live today.
            </p>
          </section>
        )}

        <section className="bg-paper-deep/60">
          <div className="mx-auto max-w-5xl px-6 py-16">
            <EmailCapture />
          </div>
        </section>

        <section className="mx-auto max-w-wiki px-6 py-10">
          <DotRule />
        </section>
      </main>
    </>
  );
}
