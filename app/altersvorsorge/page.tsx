import Container from 'components/container';
import Cta from 'components/cta';
import Image from 'next/image';

export default function KindervorsorgePage() {
  return (
    <Container>
      <div className="flex flex-row gap-10">
        <div className="flex flex-col w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
          <h2 className="text-3xl font-bold mb-4">Altersvorsorge</h2>
          <p className="leading-normal ">
            Herzlich willkommen bei Smart.fino – Ihrem Partner für eine optimierte Altersvorsorge! In einer Zeit, in der
            die Bedeutung einer soliden Altersvorsorge immer weiter zunimmt, sind wir Ihr verlässlicher Dienstleister,
            der Ihnen dabei hilft, das Maximum aus Ihrer Altersvorsorge herauszuholen. Unser Fokus liegt darauf, in der
            heutigen Zeit weiterhin Rendite zu generieren, um Ihre finanzielle Zukunft bestmöglich abzusichern. Was uns
            von anderen Anbietern unterscheidet? Unsere innovative Herangehensweise durch die Nutzung fortschrittlicher
            Rechner, die präzise kalkulieren, wie viel Geld auch nach Berücksichtigung von Steuern und Sozialabgaben für
            Ihre Altersvorsorge verbleibt. Dieser Schritt ist von äußerster Wichtigkeit, um eine realistische
            Vorstellung davon zu bekommen, welchen finanziellen Nutzen Sie aus Ihrer Vorsorge ziehen können. Unser Ziel
            ist es, Ihnen einen klaren Überblick über Ihre finanzielle Zukunft zu verschaffen und Ihnen dabei zu helfen,
            die bestmöglichen Entscheidungen für Ihre Altersvorsorge zu treffen. Wir verstehen, dass jede Situation
            einzigartig ist und bieten daher maßgeschneiderte Lösungen, die auf Ihre individuellen Bedürfnisse
            zugeschnitten sind. Vertrauen Sie auf unsere Expertise und lassen Sie uns gemeinsam dafür sorgen, dass Ihre
            Altersvorsorge optimal aufgestellt ist, um Ihnen ein sorgenfreies Leben im Ruhestand zu ermöglichen.
            Kontaktieren Sie uns noch heute und beginnen Sie, Ihre Altersvorsorge auf das nächste Level zu heben!
          </p>
        </div>
        <div>
          <Image
            src={'/img/max_perzak-1-web.jpg'}
            width="1200"
            height="500"
            alt="Benefits"
            className={'object-cover shadow-lg shadow-gray-800/50 rounded-lg border-solid border-1 border-gray-700'}
          />
        </div>
      </div>
      <Cta />
    </Container>
  );
}
