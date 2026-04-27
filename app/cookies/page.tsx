import type { Metadata } from "next";
import { TrustPageTemplate } from "@/components/templates/TrustPageTemplate";
import { CookiePreferencesLink } from "@/components/CookiePreferencesLink";
import { COOKIE_POLICY } from "@/lib/content/cookie-policy";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: COOKIE_POLICY.title,
  description:
    "Every cookie larderlab.com uses, what it does, and how to manage your choices.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <TrustPageTemplate title={COOKIE_POLICY.title}>
      <p className="text-sm text-charcoal/60">{COOKIE_POLICY.lastUpdated}</p>
      <p>{COOKIE_POLICY.intro}</p>

      <h2>{COOKIE_POLICY.inventoryHeading}</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-[14px] border-collapse">
          <thead>
            <tr className="border-b-2 border-ink/30 text-left">
              <th className="py-2 pr-3 font-semibold">{COOKIE_POLICY.columns.name}</th>
              <th className="py-2 pr-3 font-semibold">{COOKIE_POLICY.columns.category}</th>
              <th className="py-2 pr-3 font-semibold">{COOKIE_POLICY.columns.purpose}</th>
              <th className="py-2 pr-3 font-semibold">{COOKIE_POLICY.columns.duration}</th>
              <th className="py-2 pr-3 font-semibold">{COOKIE_POLICY.columns.provider}</th>
            </tr>
          </thead>
          <tbody>
            {COOKIE_POLICY.inventory.map((row) => (
              <tr key={row.name} className="border-b border-ink/10 align-top">
                <td className="py-2 pr-3 font-mono text-[13px] whitespace-nowrap">
                  {row.name}
                </td>
                <td className="py-2 pr-3">
                  {COOKIE_POLICY.categoryLabels[row.category]}
                </td>
                <td className="py-2 pr-3">{row.purpose}</td>
                <td className="py-2 pr-3 whitespace-nowrap">{row.duration}</td>
                <td className="py-2 pr-3">{row.provider}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 p-4 border border-olive-deep/30 bg-olive/5 rounded-sm">
        <strong className="text-olive-deep">Manage your preferences</strong>
        <p className="mt-1 text-[14px]">
          You can change your cookie choice any time —{" "}
          <CookiePreferencesLink className="underline text-olive-deep font-semibold" />
          {" "}re-opens the consent panel.
        </p>
      </div>

      {COOKIE_POLICY.sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          <p>{section.body}</p>
          {section.bullets && (
            <ul>
              {section.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </TrustPageTemplate>
  );
}
