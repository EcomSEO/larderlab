import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { TrustPageTemplate } from "@/components/templates/TrustPageTemplate";
import { TranslationStub } from "@/components/TranslationStub";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("trustPages.contact");
  return pageMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: "/contact",
  });
}

export default async function ContactPage() {
  const t = await getTranslations("trustPages.contact");
  return (
    <TrustPageTemplate title={t("h1")}>
      <TranslationStub />
      <h2>General</h2>
      <p>
        <strong>hello@larderlab.com</strong> — feedback, questions,
        product tips, everything else.
      </p>

      <h2>Corrections</h2>
      <p>
        <strong>corrections@larderlab.com</strong> — spotted something
        wrong? We want to know. We respond within 5 business days and publish
        corrections publicly when warranted.
      </p>

      <h2>Privacy</h2>
      <p>
        <strong>privacy@larderlab.com</strong> — questions about data,
        deletion requests, anything GDPR or CCPA-related.
      </p>

      <h2>What we&apos;re not</h2>
      <p>
        We&apos;re not a clinic. We can&apos;t diagnose anything. We can&apos;t recommend a
        specific product for your specific medical condition. If you have a
        health concern, please talk to your physician.
      </p>

      <h2>Response times</h2>
      <p>
        We&apos;re a small team. We read everything. We respond to most emails
        within 3-5 business days.
      </p>
    </TrustPageTemplate>
  );
}
