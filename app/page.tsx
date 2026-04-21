import { hubs } from "@/lib/content/hubs";
import { featuredPost, latestPosts } from "@/lib/content/posts";
import { HubCard } from "@/components/HubCard";
import { PostCard } from "@/components/PostCard";
import { EmailCapture } from "@/components/EmailCapture";
import Link from "next/link";

export default function HomePage() {
  const featured = featuredPost();
  const recent = latestPosts(6);

  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <h1 className="font-serif text-5xl md:text-6xl leading-[1.08] text-ink">
            We engineer the food system so you don&apos;t have to.
          </h1>
          <p className="mt-6 text-xl text-charcoal/80 max-w-2xl leading-relaxed">
            Calculators, frameworks, and evidence-led buying guides — for macros,
            pantry architecture, ingredients, meal prep, and supplements. Every
            number cited. Every price dated. Not recipes.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/macro-calculator"
              className="inline-flex items-center rounded-md bg-ink px-6 py-3 text-paper hover:bg-copper transition"
            >
              Open the Macro Calculator →
            </Link>
            <Link
              href="#email-capture"
              className="inline-flex items-center rounded-md border border-ink/30 px-6 py-3 text-ink hover:border-ink transition"
            >
              Get the Macro Planner
            </Link>
          </div>
        </div>
      </section>

      {featured && (
        <section className="mx-auto max-w-6xl px-6 py-14 border-t border-ink/10">
          <div className="mb-6">
            <span className="text-xs uppercase tracking-wide text-copper">
              The tool behind the site
            </span>
          </div>
          <PostCard post={featured} variant="feature" />
        </section>
      )}

      <section id="hubs" className="mx-auto max-w-6xl px-6 py-16 border-t border-ink/10">
        <h2 className="font-serif text-3xl text-ink mb-8">The guides</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {hubs.map((hub) => (
            <HubCard key={hub.slug} hub={hub} />
          ))}
        </div>
      </section>

      {recent.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-16 border-t border-ink/10">
          <h2 className="font-serif text-3xl text-ink mb-8">Latest</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {recent.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-6 py-12 border-t border-ink/10">
        <EmailCapture />
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 border-t border-ink/10">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-serif text-lg text-ink mb-2">Every number cited.</h3>
            <p className="text-sm text-charcoal/70">
              If it&apos;s not sourced, it&apos;s not published.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-lg text-ink mb-2">Every price dated.</h3>
            <p className="text-sm text-charcoal/70">
              We note the day we checked. We re-check quarterly.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-lg text-ink mb-2">Every calc you can inspect.</h3>
            <p className="text-sm text-charcoal/70">
              Our methodology pages show the math.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
