import { ContactForm } from '../components/contactForm';
import Hero from '../components/hero';
import SectionTitle from '../components/sectionTitle';

import Benefits from '../components/benefits';
import { benefitOne } from '../components/data';

export default async function HomePage() {
  return (
    <>
      <Hero />
      <SectionTitle pretitle="Unsere Schwerpunkte" title=" Unser Team sichert euch für alle Fälle ab">
        Wir sind ein Team aus erfahrenen Versicherungs- und Finanzberatern - unser Ziel ist es dich in allen Lebenslagen
        best möglich abzusichern.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <SectionTitle pretitle="Kontakt" title=" Sende uns eine Nachricht">
        Hast du Fragen, Anregungen oder interessierst dich bereits für ein konkretes Finanzprodukt dann schreib uns
        gerne eine Nachricht.
      </SectionTitle>
      <ContactForm />
    </>
  );
}
