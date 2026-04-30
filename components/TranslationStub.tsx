import { getLocale } from "next-intl/server";

const NOTICE: Record<string, string> = {
  en: "",
  de: "Hinweis: Der Seitentitel ist übersetzt; der Fließtext steht unten in der englischen Originalfassung. Eine geprüfte Übersetzung folgt.",
  fr: "Avis : le titre de cette page est traduit ; le corps du texte ci-dessous reste dans sa version anglaise originale. Une traduction relue est en préparation.",
  it: "Nota: il titolo della pagina è tradotto; il testo qui sotto è nella versione inglese originale. Una traduzione revisionata è in preparazione.",
  es: "Nota: el título de la página está traducido; el cuerpo del texto a continuación permanece en su versión original en inglés. Está en preparación una traducción revisada.",
  nl: "Let op: de paginatitel is vertaald; de hoofdtekst hieronder staat in de Engelse oorspronkelijke versie. Een nagelezen vertaling volgt.",
  pl: "Uwaga: tytuł strony jest przetłumaczony; treść poniżej pozostaje w oryginalnej wersji angielskiej. Trwa przygotowanie zredagowanego tłumaczenia.",
  sv: "Obs: sidans rubrik är översatt; brödtexten nedan är i sin engelska originalversion. En granskad översättning är under arbete.",
  pt: "Nota: o título da página está traduzido; o corpo do texto abaixo mantém-se na versão original em inglês. Está em preparação uma tradução revista.",
  ro: "Notă: titlul paginii este tradus; corpul textului de mai jos rămâne în versiunea originală în engleză. O traducere revizuită este în pregătire.",
  cs: "Poznámka: název stránky je přeložen; text níže zůstává v původní anglické verzi. Připravujeme zkontrolovaný překlad.",
  no: "Merk: sidetittelen er oversatt; brødteksten nedenfor står i den engelske originalversjonen. En gjennomgått oversettelse er under arbeid.",
};

/**
 * TranslationStub — renders a small in-page notice on trust pages
 * (privacy, terms, etc.) when the reader's locale is not English.
 *
 * The page H1, metaTitle and metaDescription are translated, but the
 * GDPR / legal body text is held in English until each policy gets a
 * professional review pass per locale. This banner makes that
 * explicit so non-EN readers know what to expect.
 */
export async function TranslationStub() {
  const locale = await getLocale();
  if (locale === "en") return null;
  const msg = NOTICE[locale] ?? NOTICE.en;
  if (!msg) return null;
  return (
    <div className="mt-4 mb-6 rounded-md border border-olive-200 bg-olive-50 px-4 py-3 text-body-sm text-olive-700">
      {msg}
    </div>
  );
}
