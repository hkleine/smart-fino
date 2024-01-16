import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  AcademicCapIcon,
  HomeModernIcon,
} from '@heroicons/react/24/solid';

import benefitOneImg from '../public/img/benefit-one.jpg';
import benefitTwoImg from '../public/img/benefit-two.png';

const benefitOne = {
  title: 'Das Rundum Sorglos Paket',
  desc: '',
  image: benefitOneImg,
  bullets: [
    {
      title: 'Kindervorsorge',
      desc: 'Für einen Führerschein, das erste Auto oder ein Studium. Spare früh für die Zukunft deiner Kinder.',
      icon: <AcademicCapIcon />,
    },
    {
      title: 'Vermögenwirksame Leistungen',
      desc: 'Mache dir alle Vorteile deines Arbeitgebers zu Nutze.',
      icon: <ChartBarSquareIcon />,
    },
    {
      title: 'Altersvorsorge',
      desc: 'Sichere dich fürs Alter ab damit du auch nach der Rente noch deinen Lebensstandard halten kannst.',
      icon: <HomeModernIcon />,
    },
  ],
};

const benefitTwo = {
  title: 'Offer more benefits here',
  desc: 'You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.',
  image: benefitTwoImg,
  bullets: [
    {
      title: 'Mobile Responsive Template',
      desc: 'Nextly is designed as a mobile first responsive template.',
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: 'Powered by Next.js & TailwindCSS',
      desc: 'This template is powered by latest technologies and tools.',
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: 'Dark & Light Mode',
      desc: 'Nextly comes with a zero-config light & dark mode. ',
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
