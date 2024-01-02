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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in arcu ac mi dictum rutrum et vel sem. Fusce
        ipsum risus, consectetur id tellus in, auctor vehicula libero.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <SectionTitle pretitle="Kontakt" title=" Sende uns eine Nachricht">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in arcu ac mi dictum rutrum et vel sem. Fusce
        ipsum risus, consectetur id tellus in, auctor vehicula libero.
      </SectionTitle>
      <ContactForm />
    </>
  );
}
