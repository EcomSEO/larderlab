import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { pageMetadata } from "@/lib/seo";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("trustPages.pipeline");
  return pageMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: "/pipeline",
  });
}

type Item = { title: string; status: "researching" | "drafted" | "scheduled" };

/**
 * The pipeline — what's on the burner. Magazine-style three-column
 * board: On the test bench / Drafted, in copy edit / Scheduled for the
 * next issue. Reads like the back-of-issue editor's letter rather than
 * a kanban board.
 */
export default function PipelinePage() {
  const t = useTranslations("trustPages.pipeline");
  const items = (t.raw("items") ?? []) as Item[];

  const buckets = {
    researching: items.filter((i) => i.status === "researching"),
    drafted: items.filter((i) => i.status === "drafted"),
    scheduled: items.filter((i) => i.status === "scheduled"),
  };

  const columns: Array<{ key: keyof typeof buckets; label: string }> = [
    { key: "researching", label: t("researching") },
    { key: "drafted", label: t("drafted") },
    { key: "scheduled", label: t("scheduled") },
  ];

  return (
    <main>
      <header className="border-b border-ink/15 bg-cream-soft">
        <div className="mx-auto max-w-spread px-6 pt-12 md:pt-16 pb-12">
          <div className="dept-label">{t("eyebrow")}</div>
          <h1 className="font-display italic font-normal text-[3rem] md:text-[4.4rem] leading-[1.04] mt-5 max-w-[18ch]">
            {t("h1")}
          </h1>
          <p className="dek mt-6 max-w-[60ch]">{t("intro")}</p>
        </div>
      </header>

      <section className="mx-auto max-w-spread px-6 py-14 md:py-20 grid lg:grid-cols-3 gap-x-10 gap-y-12">
        {columns.map((col) => (
          <div key={col.key}>
            <div className="border-t-2 border-tomato pt-4 mb-5 flex items-baseline justify-between">
              <span className="dept-label">{col.label}</span>
              <span className="page-number">{String(buckets[col.key].length).padStart(2, "0")}</span>
            </div>
            <ul className="space-y-4">
              {buckets[col.key].map((item, i) => (
                <li key={i} className="border-b border-ink/10 pb-4">
                  <h3 className="font-display italic font-normal text-xl text-ink leading-[1.18]">
                    {item.title}
                  </h3>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </main>
  );
}
