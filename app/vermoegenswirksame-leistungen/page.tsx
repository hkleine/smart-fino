import Container from 'components/container';
import Cta from 'components/cta';
import Image from 'next/image';

export default async function KindervorsorgePage() {
  return (
    <Container>
      <div className="flex flex-row gap-10">
        <div className="flex flex-col w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
          <h2 className="text-3xl font-bold mb-4">Vermögenswirksame Leistungen</h2>
          <p className="leading-normal">
            Willkommen bei smart.fino, Ihrem Partner für die Optimierung vermögenswirksamer Leistungen!
            Vermögenswirksame Leistungen sind ein entscheidender Bestandteil jeder finanziellen Strategie. In der
            heutigen Zeit, in der jede Gelegenheit genutzt werden muss, um Rendite zu erzielen, sind wir hier, um
            sicherzustellen, dass Sie das absolute Maximum aus Ihren vermögenswirksamen Leistungen herausholen. Unser
            Expertenteam bei smart.fino versteht die Komplexität und die Chancen, die mit vermögenswirksamen Leistungen
            einhergehen. Wir sind darauf spezialisiert, die Rendite zu maximieren und gleichzeitig Ihre finanziellen
            Ziele im Blick zu behalten. Durch unsere maßgeschneiderten Lösungen und unser fundiertes Fachwissen helfen
            wir Ihnen dabei, Ihr Kapital effizient einzusetzen und weiter zu vermehren. In einer Zeit, in der es
            entscheidend ist, intelligente finanzielle Entscheidungen zu treffen, um zukünftige Ziele zu erreichen,
            bieten wir Ihnen einen maßgeschneiderten Service an, der auf Ihre individuellen Bedürfnisse zugeschnitten
            ist. Unsere langjährige Erfahrung und unser Engagement für Ihre finanzielle Zukunft machen uns zu Ihrem
            vertrauenswürdigen Partner. Lassen Sie uns gemeinsam daran arbeiten, Ihre vermögenswirksamen Leistungen zu
            optimieren und das Potenzial voll auszuschöpfen. Kontaktieren Sie noch heute unser Team bei smart.fino, um
            mehr darüber zu erfahren, wie wir Ihnen helfen können, in der heutigen Zeit weiterhin Rendite zu erzielen.
          </p>
        </div>
        <div className="hidden xl:block">
          <Image
            src={'/img/max_perzak-4-web.jpg'}
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
