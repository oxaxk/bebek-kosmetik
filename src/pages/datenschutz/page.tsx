
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function Datenschutz() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl font-bold text-stone-800 mb-8 text-center">Datenschutzerklärung</h1>
          
          <div className="prose prose-lg max-w-none text-stone-700 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-stone-800 mb-4">1. Datenschutz auf einen Blick</h2>
              
              <h3 className="text-xl font-medium text-stone-800 mb-3">Allgemeine Hinweise</h3>
              <p className="mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
                passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
                persönlich identifiziert werden können.
              </p>

              <h3 className="text-xl font-medium text-stone-800 mb-3">Datenerfassung auf dieser Website</h3>
              <p className="mb-4">
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
                können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
              </p>

              <p className="mb-4">
                <strong>Wie erfassen wir Ihre Daten?</strong><br />
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um 
                Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer 
                Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst.
              </p>

              <p className="mb-4">
                <strong>Wofür nutzen wir Ihre Daten?</strong><br />
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. 
                Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>

              <p className="mb-4">
                <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br />
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
                gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung 
                oder Löschung dieser Daten zu verlangen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-800 mb-4">2. Hosting</h2>
              <p className="mb-4">
                Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
              </p>
              
              <h3 className="text-xl font-medium text-stone-800 mb-3">Externes Hosting</h3>
              <p className="mb-4">
                Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, 
                werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v. a. um IP-Adressen, 
                Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und 
                sonstige Daten, die über eine Website generiert werden, handeln.
              </p>
              <p className="mb-4">
                Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und 
                bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und 
                effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-800 mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
              
              <h3 className="text-xl font-medium text-stone-800 mb-3">Datenschutz</h3>
              <p className="mb-4">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre 
                personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzbestimmungen sowie 
                dieser Datenschutzerklärung.
              </p>

              <h3 className="text-xl font-medium text-stone-800 mb-3">Hinweis zur verantwortlichen Stelle</h3>
              <div className="bg-stone-50 p-6 rounded-lg mb-4">
                <p className="mb-2"><strong>BEBEK Beauty & Kosmetik</strong></p>
                <p className="mb-2">[Name der Inhaberin]</p>
                <p className="mb-2">[Straße und Hausnummer]</p>
                <p className="mb-2">[PLZ] [Ort]</p>
                <p className="mb-2">Deutschland</p>
                <p className="mb-2"><strong>E-Mail:</strong> [E-Mail-Adresse]</p>
              </div>

              <h3 className="text-xl font-medium text-stone-800 mb-3">Speicherdauer</h3>
              <p className="mb-4">
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben 
                Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
              </p>

              <h3 className="text-xl font-medium text-stone-800 mb-3">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
              <p className="mb-4">
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine 
                bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten 
                Datenverarbeitung bleibt vom Widerruf unberührt.
              </p>

              <h3 className="text-xl font-medium text-stone-800 mb-3">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
              <p className="mb-4">
                Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer 
                Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes 
                oder des Orts des mutmaßlichen Verstoßes zu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-800 mb-4">4. Datenerfassung auf dieser Website</h2>
              
              <h3 className="text-xl font-medium text-stone-800 mb-3">Cookies</h3>
              <p className="mb-4">
                Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete und richten auf 
                Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung 
                (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
              </p>

              <h3 className="text-xl font-medium text-stone-800 mb-3">Server-Log-Dateien</h3>
              <p className="mb-4">
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
                die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>

              <h3 className="text-xl font-medium text-stone-800 mb-3">Kontaktformular</h3>
              <p className="mb-4">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular 
                inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von 
                Anschlussfragen bei uns gespeichert.
              </p>

              <h3 className="text-xl font-medium text-stone-800 mb-3">Anfrage per E-Mail, Telefon oder Telefax</h3>
              <p className="mb-4">
                Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus 
                hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns 
                gespeichert und verarbeitet.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-800 mb-4">5. Ihre Rechte</h2>
              
              <h3 className="text-xl font-medium text-stone-800 mb-3">Auskunft, Löschung und Berichtigung</h3>
              <p className="mb-4">
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche 
                Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck 
                der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten.
              </p>

              <h3 className="text-xl font-medium text-stone-800 mb-3">Recht auf Einschränkung der Verarbeitung</h3>
              <p className="mb-4">
                Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. 
                Hierzu können Sie sich jederzeit an uns wenden.
              </p>

              <h3 className="text-xl font-medium text-stone-800 mb-3">Recht auf Datenübertragbarkeit</h3>
              <p className="mb-4">
                Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags 
                automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format 
                aushändigen zu lassen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-800 mb-4">6. Terminbuchung und Kundendaten</h2>
              <p className="mb-4">
                Für die Terminbuchung und Verwaltung unserer Kundenbeziehungen erheben wir folgende Daten:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li>Name und Vorname</li>
                <li>Telefonnummer</li>
                <li>E-Mail-Adresse</li>
                <li>Gewünschte Behandlung</li>
                <li>Terminwünsche</li>
              </ul>
              <p className="mb-4">
                Diese Daten werden ausschließlich zur Terminkoordination und Kundenbetreuung verwendet und nicht an 
                Dritte weitergegeben.
              </p>
            </section>

            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
              <p className="text-sm text-stone-600">
                <strong>Hinweis:</strong> Diese Datenschutzerklärung wurde zuletzt am [Datum] aktualisiert. 
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen 
                rechtlichen Anforderungen entspricht.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
