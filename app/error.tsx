"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Eyebrow } from "@/components/editorial/Eyebrow";
import { SpecRule } from "@/components/editorial/DotRule";
import { SITE } from "@/lib/content/site";

/**
 * Root-segment error boundary. Rendered inside the root layout, so the
 * Header + Footer come with the layout automatically.
 */
export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface the error in the client console for debugging; in production
    // this is where a real logger would hook in.
    // eslint-disable-next-line no-console
    console.error("[larderlab] runtime error:", error);
  }, [error]);

  return (
    <main>
      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-wiki px-6 pt-16 md:pt-20 pb-16 md:pb-24">
          <div className="mb-8">
            <SpecRule />
          </div>

          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-8">
              <div className="flex items-center gap-4 flex-wrap">
                <Eyebrow tone="copper">Error · Build failed</Eyebrow>
                <span className="caps-label text-steel tnum">
                  {SITE.specCode} · {SITE.specRevision}
                </span>
              </div>

              <h1 className="display-headline mt-5 text-[2.5rem] sm:text-5xl md:text-[3.75rem] leading-[1.02]">
                Something broke on our side.
              </h1>

              <div className="mt-8 max-w-2xl space-y-5 text-charcoal/85 text-[17px] leading-[1.65]">
                <p>
                  A runtime exception stopped the page before it finished
                  rendering. The cause has been logged; the issue is ours, not
                  yours.
                </p>
                <p>
                  Retry the render below. If the same page fails twice, head
                  back to the home index and we&apos;ll chase the trace on our
                  end.
                </p>
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => reset()}
                  className="btn-primary"
                >
                  ↻ Retry
                </button>
                <Link href="/" className="btn-secondary">
                  ← Back to home
                </Link>
              </div>
            </div>

            <aside className="md:col-span-4 md:pl-8 md:border-l md:border-ink/15">
              <div className="caps-label text-copper mb-4">Trace</div>
              <dl className="divide-y divide-ink/10 text-[13.5px]">
                <div className="flex justify-between py-2.5 first:pt-0">
                  <dt className="text-steel">HTTP status</dt>
                  <dd className="text-ink tnum font-mono">500</dd>
                </div>
                <div className="flex justify-between py-2.5">
                  <dt className="text-steel">Stage</dt>
                  <dd className="text-ink font-mono text-[12px]">render</dd>
                </div>
                {error.digest && (
                  <div className="flex justify-between py-2.5 gap-4">
                    <dt className="text-steel shrink-0">Digest</dt>
                    <dd className="text-ink font-mono text-[11px] text-right break-all">
                      {error.digest}
                    </dd>
                  </div>
                )}
                <div className="flex justify-between py-2.5 last:pb-0">
                  <dt className="text-steel">Logged</dt>
                  <dd className="text-ink tnum font-mono">
                    {new Date().toISOString().slice(0, 10)}
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
