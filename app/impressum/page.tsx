import type { Metadata } from "next";
import { TrustPageTemplate } from "@/components/templates/TrustPageTemplate";
import { IMPRESSUM } from "@/lib/content/impressum";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Impressum",
  description: "Anbieterkennzeichnung gemäß § 5 TMG / § 18 Abs. 2 MStV.",
  path: "/impressum",
});

export default function ImpressumPage() {
  return (
    <TrustPageTemplate title="Impressum">
      <p className="text-sm text-charcoal/60">
        Angaben gemäß § 5 TMG und § 18 Abs. 2 MStV.
      </p>

      <h2>Anbieter</h2>
      <p>
        {IMPRESSUM.operator}
        <br />
        {IMPRESSUM.address}
      </p>

      <h2>Kontakt</h2>
      <p>
        E-Mail:{" "}
        <a href={`mailto:${IMPRESSUM.email}`}>{IMPRESSUM.email}</a>
        <br />
        Telefon: {IMPRESSUM.phone}
      </p>

      <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p>{IMPRESSUM.responsiblePerson}</p>

      <h2>Registereintrag</h2>
      <p>{IMPRESSUM.registry}</p>

      <h2>Umsatzsteuer-ID</h2>
      <p>{IMPRESSUM.vatId}</p>

      <h2>Streitschlichtung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur
        Online-Streitbeilegung (OS) bereit:{" "}
        <a
          href="https://ec.europa.eu/consumers/odr/"
          target="_blank"
          rel="noopener"
        >
          https://ec.europa.eu/consumers/odr/
        </a>
        . Unsere E-Mail-Adresse finden Sie oben im Impressum.
      </p>
      <p>
        Wir sind nicht bereit oder verpflichtet, an
        Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
        teilzunehmen.
      </p>

      <h2>Haftung für Inhalte</h2>
      <p>
        Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
        Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
        verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
        Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
        gespeicherte fremde Informationen zu überwachen oder nach
        Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
        hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
        Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
        hiervon unberührt.
      </p>

      <h2>Haftung für Links</h2>
      <p>
        Unser Angebot enthält Links zu externen Websites Dritter, auf
        deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
        diese fremden Inhalte auch keine Gewähr übernehmen. Für die
        Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
        oder Betreiber der Seiten verantwortlich.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
        diesen Seiten unterliegen dem deutschen Urheberrecht. Die
        Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
        Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen
        der schriftlichen Zustimmung des jeweiligen Autors bzw.
        Erstellers.
      </p>
    </TrustPageTemplate>
  );
}
