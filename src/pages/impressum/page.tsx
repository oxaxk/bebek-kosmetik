
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function Impressum() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl font-bold text-stone-800 mb-8 text-center">Impressum</h1>
          
          <div className="prose prose-lg max-w-none text-stone-700 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-stone-800 mb-4">Angaben gemäß § 5 TMG</h2>
              <div className="bg-stone-50 p-6 rounded-lg">
                <p className="mb-2"><strong>BEBEK Beauty & Kosmetik</strong></p>
                <p className="mb-2">Inhaberin: [Name der Inhaberin]</p>
                <p className="mb-2">[Straße und Hausnummer]</p>
                <p className="mb-2">[PLZ] [Ort]</p>
                <p className="mb-2">Deutschland</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-800 mb-4">Kontakt</h2>
              <div className="bg-stone-50 p-6 rounded-lg">
                <p className="mb-2"><strong>Telefon:</strong> [Telefonnummer]</p>
                <p className="mb-2"><strong>E-Mail:</strong> [E-Mail-Adresse]</p>
                <p className="mb-2"><strong>Website:</strong> www.bebek-beauty.de</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-800 mb-4">Umsatzsteuer-ID</h2>
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
              <p className="font-medium">[USt-IdNr.]</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-800 mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
              <p className="mb-2"><strong>Berufsbezeichnung:</strong> Kosmetikerin</p>
              <p className="mb-2"><strong>Zuständige Kammer:</strong> [Zuständige Handwerkskammer]</p>
              <p className="mb-2"><strong>Verliehen durch:</strong> Deutschland</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-800 mb-4">Redaktionell verantwortlich</h2>
              <p>[Name der verantwortlichen Person]</p>
              <p>[Adresse]</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-800 mb-4">EU-Streitschlichtung</h2>
              <p className="mb-4">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:text-amber-800 ml-1">
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-800 mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-800 mb-4">Haftung für Inhalte</h2>
              <p className="mb-4">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen 
                Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der 
                Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen 
                werden wir diese Inhalte umgehend entfernen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-800 mb-4">Haftung für Links</h2>
              <p className="mb-4">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten 
                Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
              <p>
                Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche 
                Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. 
                Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-800 mb-4">Urheberrecht</h2>
              <p className="mb-4">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
              <p>
                Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. 
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter 
                beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine 
                Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden 
                von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
