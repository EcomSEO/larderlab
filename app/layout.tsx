import type { Metadata } from "next";
import "./globals.css";
import { fraunces, inter, plexMono } from "./fonts";
import { Header } from "@/components/Header";
import { MastheadFooter } from "@/components/magazine/MastheadFooter";
import { CookieBanner } from "@/components/CookieBanner";
import { OrganizationJsonLd } from "@/components/schema/OrganizationJsonLd";
import { SITE } from "@/lib/content/site";
import { robotsMeta } from "@/lib/seo";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: robotsMeta(),
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}
    >
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <OrganizationJsonLd />
          <Header />
          {children}
          <MastheadFooter />
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
