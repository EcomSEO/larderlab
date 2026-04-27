import { useTranslations } from "next-intl";

/**
 * Editor's note — handwritten-script font block with a small uppercase
 * "Editor's note" label hanging on the top border, and a script-style
 * editor signature at the bottom. Drops onto the home page below the
 * cover and onto the about page.
 */
export function EditorsNote() {
  const t = useTranslations("editorsNote");

  return (
    <div className="editors-note">
      <span className="sr-only">{t("label")}</span>
      <p>{t("body")}</p>
      <span className="editors-signature">{t("signature")}</span>
    </div>
  );
}
