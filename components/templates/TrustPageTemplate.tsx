import { ReactNode } from "react";
import { Breadcrumbs } from "../Breadcrumbs";
import { Dateline } from "../editorial/Dateline";
import { SpecRule } from "../editorial/DotRule";

export function TrustPageTemplate({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-12 md:py-16">
      <Breadcrumbs
        crumbs={[{ label: "Home", href: "/" }, { label: title }]}
      />
      <div className="mt-5">
        <SpecRule />
      </div>
      <h1 className="display-headline mt-6 text-[2.2rem] md:text-[3rem] leading-[1.05]">
        {title}
      </h1>
      <Dateline className="mt-4" />
      <div className="mt-8 space-y-5 text-[16px] leading-relaxed text-charcoal/90 [&_h2]:font-sans [&_h2]:tracking-tight [&_h2]:text-2xl [&_h2]:text-ink [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:font-semibold [&_h3]:font-sans [&_h3]:tracking-tight [&_h3]:text-lg [&_h3]:text-ink [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:font-semibold [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_a]:text-copper [&_a]:underline [&_strong]:text-ink">
        {children}
      </div>
    </article>
  );
}
