import Container from 'components/container';
import Cta from 'components/cta';
import Image from 'next/image';

export default async function KindervorsorgePage() {
  return (
    <Container>
      <div className="flex flex-row gap-10">
        <div className="flex flex-col w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
          <h2 className="text-3xl font-bold mb-4">Kindervorsorge</h2>
          <p className="leading-normal ">
            Willkommen bei smart.fino - Ihre Experten für Kindervorsorgeoptimierung! Die Zukunft unserer Kinder liegt
            uns am Herzen. Bei smart.fino verstehen wir, wie wichtig es ist, rechtzeitig Maßnahmen zu ergreifen, um für
            die finanzielle Sicherheit und das Wohlergehen unserer Kleinsten zu sorgen. Wir sind Ihr verlässlicher
            Partner, wenn es um die Optimierung der Kindervorsorge geht. In einer Zeit, die stetigen Veränderungen
            unterworfen ist, bieten wir Lösungen an, die nicht nur Sicherheit, sondern auch Wachstum und Rendite
            ermöglichen. Wir helfen Ihnen dabei, vorausschauend zu planen und die richtigen Schritte für eine sichere
            Zukunft Ihres Kindes zu setzen. Unsere besonderen Vorteile umfassen: Renditestarke Investitionen für die
            Zukunft Ihres Kindes Wir bieten intelligente und zukunftsorientierte Anlagemöglichkeiten, die es
            ermöglichen, auch in der heutigen Zeit eine attraktive Rendite zu generieren. So schaffen wir ein solides
            finanzielles Fundament für die Zukunft Ihres Kindes. Absicherung im Ernstfall Bei smart.fino verstehen wir,
            dass das Leben unvorhersehbar ist. Daher bieten wir Ihnen Sicherheit: Sollte das versicherte Elternteil
            unerwartet versterben, übernimmt die Gesellschaft den Beitrag bis zum 27. Lebensjahr des Kindes. Diese
            Absicherung gibt Ihnen die Gewissheit, dass die Zukunft Ihres Kindes auch in schwierigen Situationen
            gesichert ist. Maßgeschneiderte Lösungen Wir wissen, dass jeder Fall individuell ist. Deshalb bieten wir
            maßgeschneiderte Lösungen an, die auf Ihre spezifischen Bedürfnisse und finanziellen Möglichkeiten
            zugeschnitten sind. Unser Expertenteam steht Ihnen mit Fachwissen und Engagement zur Seite, um die beste
            Vorsorgestrategie für Ihr Kind zu entwickeln. Sorgen Sie heute für die Zukunft Ihres Kindes vor und
            profitieren Sie von unseren innovativen Lösungen und unserem engagierten Service. Kontaktieren Sie uns noch
            heute, um gemeinsam die optimale Kindervorsorge zu gestalten. smart.fino – Gemeinsam für eine sichere
            Zukunft unserer Kinder.
          </p>
        </div>
        <div className="hidden xl:block">
          <Image
            src={'/img/max_perzak-10-web.jpg'}
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
