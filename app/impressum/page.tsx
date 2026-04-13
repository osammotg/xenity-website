import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum — Xinity AI",
  description: "Legal notice and company information for Xinity AI GmbH, Vienna, Austria.",
  alternates: { canonical: "https://xinity.ai/impressum" },
};

export default function ImpressumPage() {
  return (
    <section className="pt-32 pb-20 px-4 bg-[#F7F6F7]">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-[clamp(32px,4vw,48px)] font-medium text-[#1B0C25] mb-8">Impressum</h1>
        <div className="prose prose-sm text-[rgba(28,12,38,0.72)] space-y-6">
          <div>
            <h2 className="text-[18px] font-semibold text-[#1B0C25] mb-2">Angaben gemäß § 5 ECG</h2>
            <p><strong>Xinity AI GmbH</strong><br />Am Gestade 5/2<br />1010 Wien<br />Austria</p>
          </div>
          <div>
            <h2 className="text-[18px] font-semibold text-[#1B0C25] mb-2">Kontakt</h2>
            <p>E-Mail: <a href="mailto:info@xinity.ai" className="underline underline-offset-4">info@xinity.ai</a></p>
          </div>
          <div>
            <h2 className="text-[18px] font-semibold text-[#1B0C25] mb-2">Unternehmensgegenstand</h2>
            <p>Entwicklung und Vertrieb von KI-Infrastruktursoftware für europäische Unternehmen.</p>
          </div>
          <div>
            <h2 className="text-[18px] font-semibold text-[#1B0C25] mb-2">Haftungsausschluss</h2>
            <p>Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.</p>
          </div>
          <div>
            <h2 className="text-[18px] font-semibold text-[#1B0C25] mb-2">Urheberrecht</h2>
            <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
