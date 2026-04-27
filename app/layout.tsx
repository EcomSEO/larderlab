import type { Metadata } from "next";
import "./globals.css";
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
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter+Tight:wght@400;500;600;700&family=Caveat:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
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
