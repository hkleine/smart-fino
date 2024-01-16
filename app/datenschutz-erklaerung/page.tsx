import Container from 'components/container';
import Link from 'next/link';

export default async function Datenschutz() {
  return (
    <Container>
      <h2 className="text-3xl font-bold mb-4">Datenschutzerklärung</h2>
      <div className="grid grid-cols-1 gap-12 w-full">
        <div className="grid grid-cols-1 gap-6">
          <p>
            Personenbezogene Daten (nachfolgend zumeist nur „Daten“ genannt) werden von uns nur im Rahmen der
            Erforderlichkeit sowie zum Zwecke der Bereitstellung eines funktionsfähigen und nutzerfreundlichen
            Internetauftritts, inklusive seiner Inhalte und der dort angebotenen Leistungen, verarbeitet.
          </p>
          <p>
            Gemäß Art. 4 Ziffer 1. der Verordnung (EU) 2016/679, also der Datenschutz-Grundverordnung (nachfolgend nur
            „DSGVO“ genannt), gilt als „Verarbeitung“ jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführter
            Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten, wie das Erheben, das
            Erfassen, die Organisation, das Ordnen, die Speicherung, die Anpassung oder Veränderung, das Auslesen, das
            Abfragen, die Verwendung, die Offenlegung durch Übermittlung, Verbreitung oder eine andere Form der
            Bereitstellung, den Abgleich oder die Verknüpfung, die Einschränkung, das Löschen oder die Vernichtung.
          </p>
          <p>
            Mit der nachfolgenden Datenschutzerklärung informieren wir Sie insbesondere über Art, Umfang, Zweck, Dauer
            und Rechtsgrundlage der Verarbeitung personenbezogener Daten, soweit wir entweder allein oder gemeinsam mit
            anderen über die Zwecke und Mittel der Verarbeitung entscheiden. Zudem informieren wir Sie nachfolgend über
            die von uns zu Optimierungszwecken sowie zur Steigerung der Nutzungsqualität eingesetzten Fremdkomponenten,
            soweit hierdurch Dritte Daten in wiederum eigener Verantwortung verarbeiten.
          </p>
          <span className="flex flex-col">
            <p>Unsere Datenschutzerklärung ist wie folgt gegliedert:</p>
            <p>I. Informationen über uns als Verantwortlich</p>
            <p>II. Rechte der Nutzer und Betroffenen</p>
            <p>III. Informationen zur Datenverarbeitung</p>
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <h3 className="text-lg text-gray-900 font-semibold">I. Information über mich als Verantwortlichen</h3>
          <span className="flex flex-col">
            <p>Nils Olsen & Max Perzak</p>
            <p>Bürgermeister-Smidt-Str. 176</p>
            <p>27568 Bremerhaven</p>

            <p>E-Mail: EMAIL???</p>
            <p>Telefon: +49 (0) 160 99139530</p>
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <h3 className="text-lg text-gray-900 font-semibold">II. Rechte der Nutzer und Betroffenen</h3>
          <p>
            Mit Blick auf die nachfolgend noch näher beschriebene Datenverarbeitung haben die Nutzer und Betroffenen das
            Recht
          </p>
          <ul className="list-disc ml-12">
            <li>
              auf Bestätigung, ob sie betreffende Daten verarbeitet werden, auf Auskunft über die verarbeiteten Daten,
              auf weitere Informationen über die Datenverarbeitung sowie auf Kopien der Daten (vgl. auch Art. 15 DSGVO);
            </li>
            <li>
              auf Berichtigung oder Vervollständigung unrichtiger bzw. unvollständiger Daten (vgl. auch Art. 16 DSGVO);
            </li>
            <li>
              auf unverzügliche Löschung der sie betreffenden Daten (vgl. auch Art. 17 DSGVO), oder, alternativ, soweit
              eine weitere Verarbeitung gemäß Art. 17 Abs. 3 DSGVO erforderlich ist, auf Einschränkung der Verarbeitung
              nach Maßgabe von Art. 18 DSGVO;
            </li>
            <li>
              auf Erhalt der sie betreffenden und von ihnen bereitgestellten Daten und auf Übermittlung dieser Daten an
              andere Anbieter/Verantwortliche (vgl. auch Art. 20 DSGVO);
            </li>
            <li>
              auf Beschwerde gegenüber der Aufsichtsbehörde, sofern sie der Ansicht sind, dass die sie betreffenden
              Daten durch den Anbieter unter Verstoß gegen datenschutzrechtliche Bestimmungen verarbeitet werden (vgl.
              auch Art. 77 DSGVO).
            </li>
          </ul>
          <p>
            Darüber hinaus ist der Anbieter dazu verpflichtet, alle Empfänger, denen gegenüber Daten durch den Anbieter
            offengelegt worden sind, über jedwede Berichtigung oder Löschung von Daten oder die Einschränkung der
            Verarbeitung, die aufgrund der Artikel 16, 17 Abs. 1, 18 DSGVO erfolgt, zu unterrichten. Diese Verpflichtung
            besteht jedoch nicht, soweit diese Mitteilung unmöglich oder mit einem unverhältnismäßigen Aufwand verbunden
            ist. Unbeschadet dessen hat der Nutzer ein Recht auf Auskunft über diese Empfänger.
          </p>
          <p className="font-semibold">
            Ebenfalls haben die Nutzer und Betroffenen nach Art. 21 DSGVO das Recht auf Widerspruch gegen die künftige
            Verarbeitung der sie betreffenden Daten, sofern die Daten durch den Anbieter nach Maßgabe von Art. 6 Abs. 1
            lit. f) DSGVO verarbeitet werden. Insbesondere ist ein Widerspruch gegen die Datenverarbeitung zum Zwecke
            der Direktwerbung statthaft.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <h3 className="text-lg text-gray-900 font-semibold">III. Informationen zur Datenverarbeitung</h3>
          <div className="grid grid-cols-1 gap-2">
            <p>
              Ihre bei Nutzung unseres Internetauftritts verarbeiteten Daten werden gelöscht oder gesperrt, sobald der
              Zweck der Speicherung entfällt, der Löschung der Daten keine gesetzlichen Aufbewahrungspflichten
              entgegenstehen und nachfolgend keine anderslautenden Angaben zu einzelnen Verarbeitungsverfahren gemacht
              werden.
            </p>
            <h4 className="text-gray-900 font-semibold">Kontaktanfragen / Kontaktmöglichkeit</h4>
            <p>
              Sofern Sie per Kontaktformular oder E-Mail mit uns in Kontakt treten, werden die dabei von Ihnen
              angegebenen Daten zur Bearbeitung Ihrer Anfrage genutzt. Die Angabe der Daten ist zur Bearbeitung und
              Beantwortung Ihre Anfrage erforderlich - ohne deren Bereitstellung können wir Ihre Anfrage nicht oder
              allenfalls eingeschränkt beantworten.
            </p>
            <p>Rechtsgrundlage für diese Verarbeitung ist Art. 6 Abs. 1 lit. b) DSGVO.</p>
            <p>
              Ihre Daten werden gelöscht, sofern Ihre Anfrage abschließend beantwortet worden ist und der Löschung keine
              gesetzlichen Aufbewahrungspflichten entgegenstehen, wie bspw. bei einer sich etwaig anschließenden
              Vertragsabwicklung.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-2">
            <h4 className="text-gray-900 font-semibold">LinkedIn</h4>
            <p>
              Wir unterhalten bei LinkedIn eine Onlinepräsenz um unser Unternehmen sowie unsere Leistungen zu
              präsentieren und mit Kunden/Interessenten zu kommunizieren. LinkedIn ist ein Service der LinkedIn Ireland
              Unlimited Company, Wilton Plaza, Wilton Place, Dublin 2, Irland, ein Tochterunternehmen der LinkedIn
              Corporation, 1000 W. Maude Avenue, Sunnyvale, CA 94085, USA.
            </p>
            <p>
              Insofern weisen wir darauf hin, dass die Möglichkeit besteht, dass Daten der Nutzer außerhalb der
              Europäischen Union, insbesondere in den USA, verarbeitet werden. Hierdurch können gesteigerte Risiken für
              die Nutzer insofern bestehen, als dass z.B. der spätere Zugriff auf die Nutzerdaten erschwert werden kann.
              Auch haben wir keinen Zugriff auf diese Nutzerdaten. Die Zugriffsmöglichkeit liegt ausschließlich bei
              LinkedIn.
            </p>
            <p>Die Datenschutzhinweise von LinkedIn finden Sie unter</p>
            <Link href="https://www.linkedin.com/legal/privacy-policy">
              https://www.linkedin.com/legal/privacy-policy
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-2">
            <h4 className="text-gray-900 font-semibold">Instagram</h4>
            <p>
              Zur Bewerbung unserer Produkte und Leistungen sowie zur Kommunikation mit Interessenten oder Kunden
              betreiben wir eine Firmenpräsenz auf der Plattform Instagram.
            </p>
            <p>
              Auf dieser Social-Media-Plattform sind wir gemeinsam mit der Facebook Ireland Ltd., 4 Grand Canal Square,
              Grand Canal Harbour, Dublin 2 Ireland, verantwortlich.
            </p>
            <p>Der Datenschutzbeauftragte von Instagram kann über ein Kontaktformular erreicht werden:</p>
            <Link href="https://www.facebook.com/help/contact/540977946302970">
              https://www.facebook.com/help/contact/540977946302970
            </Link>
            <p>
              Die gemeinsame Verantwortlichkeit haben wir in einer Vereinbarung bezüglich der jeweiligen Verpflichtungen
              im Sinne der DSGVO geregelt. Diese Vereinbarung, aus der sich die gegenseitigen Verpflichtungen ergeben,
              ist unter dem folgenden Link abrufbar:
            </p>
            <Link href="https://www.facebook.com/legal/terms/page_controller_addendum">
              https://www.facebook.com/legal/terms/page_controller_addendum
            </Link>
            <p>
              Rechtsgrundlage für die dadurch erfolgende und nachfolgend wiedergegebene Verarbeitung von
              personenbezogenen Daten ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse besteht an der
              Analyse, der Kommunikation sowie dem Absatz und der Bewerbung unserer Produkte und Leistungen.
              Rechtsgrundlage kann auch eine Einwilligung des Nutzers gemäß Art. 6 Abs. 1 lit. a DSGVO gegenüber dem
              Plattformbetreiber sein. Die Einwilligung hierzu kann der Nutzer nach Art. 7 Abs. 3 DSGVO jederzeit durch
              eine Mitteilung an den Plattformbetreiber für die Zukunft widerrufen. Bei dem Aufruf unseres
              Onlineauftritts auf der Plattform Instagram werden von der Facebook Ireland Ltd. als Betreiberin der
              Plattform in der EU Daten des Nutzers (z.B. persönliche Informationen, IP-Adresse etc.) verarbeitet.
            </p>
            <p>
              Diese Daten des Nutzers dienen zu statistischen Informationen über die Inanspruchnahme unserer
              Firmenpräsenz auf Instagram. Die Facebook Ireland Ltd. nutzt diese Daten zu Marktforschungs- und
              Werbezwecken sowie zur Erstellung von Profilen der Nutzer. Anhand dieser Profile ist es der Facebook
              Ireland Ltd. beispielsweise möglich, die Nutzer innerhalb und außerhalb von Instagram interessenbezogen zu
              bewerben. Ist der Nutzer zum Zeitpunkt des Aufrufes in seinem Account auf Instagram eingeloggt, kann die
              Facebook Ireland Ltd. zudem die Daten mit dem jeweiligen Nutzerkonto verknüpfen.
            </p>
            <p>
              Im Falle einer Kontaktaufnahme des Nutzers über Instagram werden die bei dieser Gelegenheit eingegebenen
              personenbezogenen Daten des Nutzers zur Bearbeitung der Anfrage genutzt. Die Daten des Nutzers werden bei
              uns gelöscht, sofern die Anfrage des Nutzers abschließend beantwortet wurde und keine gesetzlichen
              Aufbewahrungspflichten, wie z.B. bei einer anschließenden Vertragsabwicklung, entgegenstehen.
            </p>
            <p>Zur Verarbeitung der Daten werden von der Facebook Ireland Ltd. ggf. auch Cookies gesetzt.</p>
            <p>
              Sollte der Nutzer mit dieser Verarbeitung nicht einverstanden sein, so besteht die Möglichkeit, die
              Installation der Cookies durch eine entsprechende Einstellung des Browsers zu verhindern. Bereits
              gespeicherte Cookies können ebenfalls jederzeit gelöscht werden. Die Einstellungen hierzu sind vom
              jeweiligen Browser abhängig. Bei Flash-Cookies lässt sich die Verarbeitung nicht über die Einstellungen
              des Browsers unterbinden, sondern durch die entsprechende Einstellung des Flash-Players. Sollte der Nutzer
              die Installation der Cookies verhindern oder einschränken, kann dies dazu führen, dass nicht sämtliche
              Funktionen von Facebook vollumfänglich nutzbar sind.
            </p>
            <p>
              Näheres zu den Verarbeitungstätigkeiten, deren Unterbindung und zur Löschung der von Instagram
              verarbeiteten Daten finden sich in der Datenrichtlinie von Instagram:
            </p>
            <Link href="https://help.instagram.com/519522125107875">https://help.instagram.com/519522125107875</Link>
            <p>
              Es ist nicht ausgeschlossen, dass die Verarbeitung durch die Facebook Ireland Ltd. auch über die Facebook
              Inc., 1601 Willow Road, Menlo Park, California 94025 in den USA erfolgt.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <h4 className="text-gray-900 font-semibold">Verlinkung Social-Media über Grafik oder Textlink</h4>
            <p>
              Wir bewerben auf unserer Webseite auch Präsenzen auf den nachstehend aufgeführten sozialen Netzwerken. Die
              Einbindung erfolgt dabei über eine verlinkte Grafik des jeweiligen Netzwerks. Durch den Einsatz dieser
              verlinkten Grafik wird verhindert, dass es bei dem Aufruf einer Website, die über eine
              Social-Media-Bewerbung verfügt, automatisch zu einem Verbindungsaufbau zum jeweiligen Server des sozialen
              Netzwerks kommt, um eine Grafik des jeweiligen Netzwerkes selbst darzustellen. Erst durch einen Klick auf
              die entsprechende Grafik wird der Nutzer zu dem Dienst des jeweiligen sozialen Netzwerks weitergeleitet.
            </p>
            <p>
              Nach der Weiterleitung des Nutzers werden durch das jeweilige Netzwerk Informationen über den Nutzer
              erfasst. Es kann hierbei nicht ausgeschlossen werden, dass eine Verarbeitung der so erhobenen Daten in den
              USA stattfindet.
            </p>
            <p>
              Dies sind zunächst Daten wie IP-Adresse, Datum, Uhrzeit und besuchte Seite. Ist der Nutzer währenddessen
              in seinem Benutzerkonto des jeweiligen Netzwerks eingeloggt, kann der Netzwerk-Betreiber ggf. die
              gesammelten Informationen des konkreten Besuchs des Nutzers dem persönlichen Account des Nutzers zuordnen.
              Interagiert der Nutzer über einen „Teilen“-Button des jeweiligen Netzwerks, können diese Informationen in
              dem persönlichen Benutzerkonto des Nutzers gespeichert und ggf. veröffentlicht werden. Will der Nutzer
              verhindern, dass die gesammelten Informationen unmittelbar seinem Benutzerkonto zugeordnet werden, muss er
              sich vor dem Anklicken der Grafik ausloggen. Zudem besteht die Möglichkeit, das jeweilige Benutzerkonto
              entsprechend zu konfigurieren.
            </p>
            <p>Folgende soziale Netzwerke werden in unsere Seite durch Verlinkung eingebunden:</p>
            <Link href="https://www.linkedin.com/legal/privacy-policy">LinkedIn</Link>
            <Link href="https://help.instagram.com/519522125107875">Instagram</Link>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <h4 className="text-gray-900 font-semibold">Google Analytics</h4>
            <p>
              In unserem Internetauftritt setzen wir Google Analytics ein. Hierbei handelt es sich um einen
              Webanalysedienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland, nachfolgend
              nur „Google“ genannt.
            </p>
            <p>
              Der Dienst Google Analytics dient zur Analyse des Nutzungsverhaltens unseres Internetauftritts.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes Interesse liegt in der Analyse,
              Optimierung und dem wirtschaftlichen Betrieb unseres Internetauftritts.
            </p>
            <p>
              Nutzungs- und nutzerbezogene Informationen, wie bspw. IP-Adresse, Ort, Zeit oder Häufigkeit des Besuchs
              unseres Internetauftritts, werden dabei an einen Server von Google in den USA übertragen und dort
              gespeichert. Allerdings nutzen wir Google Analytics mit der sog. Anonymisierungsfunktion. Durch diese
              Funktion kürzt Google die IP-Adresse schon innerhalb der EU bzw. des EWR.
            </p>
            <p>
              Die so erhobenen Daten werden wiederum von Google genutzt, um uns eine Auswertung über den Besuch unseres
              Internetauftritts sowie über die dortigen Nutzungsaktivitäten zur Verfügung zu stellen. Auch können diese
              Daten genutzt werden, um weitere Dienstleistungen zu erbringen, die mit der Nutzung unseres
              Internetauftritts und der Nutzung des Internets zusammenhängen.
            </p>
            <p>Google gibt an, Ihre IP-Adresse nicht mit anderen Daten zu verbinden. Zudem hält Google unter</p>
            <Link href="https://www.google.com/intl/de/policies/privacy/partners">
              https://www.google.com/intl/de/policies/privacy/partners
            </Link>
            <p>
              weitere datenschutzrechtliche Informationen für Sie bereit, so bspw. auch zu den Möglichkeiten, die
              Datennutzung zu unterbinden.
            </p>
            <p>Zudem bietet Google unter</p>
            <Link href="https://tools.google.com/dlpage/gaoptout?hl=de">
              https://tools.google.com/dlpage/gaoptout?hl=de
            </Link>
            <p>
              ein sog. Deaktivierungs-Add-on nebst weiteren Informationen hierzu an. Dieses Add-on lässt sich mit den
              gängigen Internet-Browsern installieren und bietet Ihnen weitergehende Kontrollmöglichkeit über die Daten,
              die Google bei Aufruf unseres Internetauftritts erfasst. Dabei teilt das Add-on dem JavaScript (ga.js) von
              Google Analytics mit, dass Informationen zum Besuch unseres Internetauftritts nicht an Google Analytics
              übermittelt werden sollen. Dies verhindert aber nicht, dass Informationen an uns oder an andere
              Webanalysedienste übermittelt werden. Ob und welche weiteren Webanalysedienste von uns eingesetzt werden,
              erfahren Sie natürlich ebenfalls in dieser Datenschutzerklärung.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-2">
            <h4 className="text-gray-900 font-semibold">Google reCAPTCHA</h4>
            <p>
              In unserem Internetauftritt setzen wir Google reCAPTCHA zur Überprüfung und Vermeidung von Interaktionen
              auf unserer Internetseite durch automatisierte Zugriffe, bspw. durch sog. Bots, ein. Es handelt sich
              hierbei um einen Dienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland,
              nachfolgend nur „Google“ genannt.
            </p>
            <p>
              Durch diesen Dienst kann Google ermitteln, von welcher Webseite eine Anfrage gesendet wird sowie von
              welcher IP-Adresse aus Sie die sog. reCAPTCHA-Eingabebox verwenden. Neben Ihrer IP-Adresse werden
              womöglich noch weitere Informationen durch Google erfasst, die für das Angebot und die Gewährleistung
              dieses Dienstes notwendig sind.
            </p>
            <p>
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes Interesse liegt in der Sicherheit
              unseres Internetauftritts sowie in der Abwehr unerwünschter, automatisierter Zugriffe in Form von Spam
              o.ä..
            </p>
            <p>Google bietet unter</p>
            <Link href="https://policies.google.com/privacy">https://policies.google.com/privacy</Link>
            <p>weitergehende Informationen zu dem allgemeinen Umgang mit Ihren Nutzerdaten an.</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
