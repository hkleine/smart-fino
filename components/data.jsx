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
  desc: 'You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.',
  image: benefitOneImg,
  bullets: [
    {
      title: 'Kindervorsorge',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: <AcademicCapIcon />,
    },
    {
      title: 'Vermögenwirksame Leistungen',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: <ChartBarSquareIcon />,
    },
    {
      title: 'Altersvorsorge',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
