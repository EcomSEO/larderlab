import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export type TocEntry = {
  href: string;
  title: string;
  dek?: string;
  page: string; // page number, formatted (e.g. "12")
};

export type TocSection = {
  label: string;
  entries: TocEntry[];
};

/**
 * Magazine-style table of contents. Sections (Features, Departments,
 * Recipes, Pantry), each with title + dek + right-aligned page number.
 * Reads like the inside front cover of a print issue.
 */
export function TableOfContents({ sections }: { sections: TocSection[] }) {
  const t = useTranslations("toc");

  return (
    <section
      id="contents"
      className="bg-cream-soft border-b border-ink/15"
    >
      <div className="mx-auto max-w-spread px-6 py-16 md:py-20">
        <div className="grid lg:grid-cols-12 gap-10 mb-12">
          <div className="lg:col-span-4">
            <div className="dept-label">{t("section1")}</div>
            <h2 className="font-display text-4xl md:text-5xl mt-3 leading-[1.04] italic font-normal">
              {t("heading")}
            </h2>
          </div>
          <p className="lg:col-span-7 lg:col-start-6 dek">{t("subheading")}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-x-14 gap-y-10">
          {sections.map((section) => (
            <div key={section.label}>
              <div className="dept-label mb-3">{section.label}</div>
              <ul>
                {section.entries.map((e) => (
                  <li key={e.href}>
                    <Link href={e.href} className="toc-row group">
                      <div>
                        <div className="title group-hover:text-tomato transition">
                          {e.title}
                        </div>
                        {e.dek && <div className="dek">{e.dek}</div>}
                      </div>
                      <div className="page-no">{e.page}</div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
