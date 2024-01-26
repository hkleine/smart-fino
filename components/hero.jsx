import Image from 'next/image';
import Container from './container';
import heroImg from '../public/img/hero.svg';
import Link from 'next/link';

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8 relative">
            <Image
              src="/img/handcrafts/fun-arrow.svg"
              alt="N"
              width="90"
              height="90"
              className="rotate-200 absolute bottom-72 left-60 hidden xl:block"
            />
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight dark:text-white">
              Deine <span className="text-brandGreen">Finanzen smart</span> gedacht
            </h1>
            <p className="py-10 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Wir wissen, wie schwierig es sein kann, seine Versicherungen und Finanzen zu verstehen - deshalb helfen
              wir dir dabei!
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link
                href="/#kontakt"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-brandRed rounded-md "
              >
                Jetzt Kontakt aufnehmen
              </Link>
              <Link
                href="https://www.instagram.com/smart.fino/"
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400"
              >
                <svg
                  role="img"
                  width="24"
                  height="24"
                  className="w-5 h-5"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Instagram</title>
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>
                <span> Instagram</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image src="/img/hero.svg" alt="N" width="600" height="580" />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Zusammen mit <span className="text-brandGreen font-bold">den besten</span> Versicherern
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <NuernbergerLogo />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <ProkundoLogo />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <ErgoLogo />
            </div>
            <div className="pt-1 text-gray-400 dark:text-gray-400">
              <NetflixLogo />
            </div>
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <LVMLogo />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

function NuernbergerLogo() {
  return (
    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1556 372" width="150" height="40">
      <title>nunrnn-svg</title>
      <path
        id="Layer"
        fill="currentColor"
        fillRule="evenodd"
        className="s0"
        d="m843.7 185.2h-19.5c-1.6 0-3.2-1.7-3.2-3.3v-109c-0.8-2.4 0.8-3.3 2.4-3.3h2.5c0.8 0 2.4 0.9 3.2 1.7l63.4 61.4v-58.1c0-1.7 1.6-3.3 3.3-3.3h19.5c1.6 0 3.2 1.6 3.2 3.3v109.8c0 1.6-1.6 3.2-3.2 3.2h-1.7c-1.6 0-2.4-0.8-3.2-1.6l-63.4-64.7v60.6c0 1.6-1.6 3.3-3.3 3.3zm-77.2 86.8c0 12.3 9.8 23 22 23 5.6 0 10.5-2.5 14.6-5.8q1.2-1.2 2.4 0l5.7 6.6q1.3 1.2 0 2.5c-6.5 6.5-14.6 9.8-23.5 9.8-19.6 0-35-15.6-35-35.3 0-19.6 15.4-36 35-36 9.7 0 17 3.3 23.5 9q1.3 1.2 0 2.5l-5.7 6.5q-1.2 1.3-2.4 0c-4.1-3.2-9.8-5.7-14.6-5.7-12.2 0-22 10.6-22 22.9zm115.4-32.7v64.7c0 0.8-0.8 1.6-1.6 1.6h-8.9c-0.8 0-1.7-0.8-1.7-1.6v-27.1h-30.8v27.1c0 0.8-0.8 1.6-1.7 1.6h-8.9c-0.8 0-1.6-0.8-1.6-1.6v-64.7c0-0.8 0.8-1.7 1.6-1.7h8.9c0.8 0 1.7 0.8 1.7 1.7v26.2h30.8v-26.2c0-0.8 0.9-1.7 1.7-1.7h8.9c0.8 0 1.6 0.9 1.6 1.7zm-114.6-54.9l-21.9-43.5h-11.4v41.8c0 1.7-1.6 3.3-3.2 3.3h-19.6c-1.6 0-3.2-1.6-3.2-3.3v-108.1h0.8c0-1.7 1.6-3.3 3.3-3.3h48.7c20.3 0 35.8 15.6 35.8 35.2 0 14.8-8.9 27.1-24.4 32.8l21.9 41.8c0.9 2.4 0 4.9-2.4 4.9h-21.9c-1.7 0-2.5-0.8-2.5-1.6zm3.3-77.1c0-7.3-5.7-12.3-12.2-12.3h-24.4v25.4h24.4c6.5 0 12.2-5.7 12.2-13.1zm673-32.7v18c0 1.6-1.6 3.3-3.2 3.3h-44.7v20.5h37.4c1.6 0 3.2 1.6 3.2 3.2v18.1c0 1.6-1.6 3.2-3.2 3.2h-37.4v22.2h44.7c1.6 0 3.2 1.6 3.2 3.2v18.1c0 1.6-1.6 3.2-3.2 3.2h-67.5c-1.6 0-3.3-1.6-3.3-3.2v-109.8c0-2.5 1.7-3.3 3.3-3.3h67.5c1.6 0 3.2 1.6 3.2 3.3zm-706.3 164.7v64.7c0 0.8-0.9 1.6-1.7 1.6h-8.9c-0.8 0-1.6-0.8-1.6-1.6v-64.7c0-0.8 0.8-1.7 1.6-1.7h8.9c0.8 0 1.7 0.9 1.7 1.7zm421.8 0v66.3c0 0.9-0.8 1.7-1.6 1.7h-0.8c-0.8 0-1.6 0-2.5-0.8l-39.8-44.3v42.6c0 0.8-0.8 1.7-1.6 1.7h-8.9c-0.9 0-1.7-0.9-1.7-1.7v-66.4c0-0.8 0.8-1.6 1.7-1.6h1.6c0.8 0 1.6 0 1.6 0.8l39.8 42.6v-40.9c0-0.8 0.8-1.7 1.7-1.7h8.9c0.8 0 1.6 0.9 1.6 1.7zm-134.9-84.4c0 19.6-16.3 31.9-35.8 31.9h-40.6c-1.6 0-3.3-1.6-3.3-3.3v-108.9c0-1.7 1.7-3.3 3.3-3.3h38.2c19.5 0 34.9 13.1 34.9 30.3 0.9 13.1-8.9 22.1-17.8 26.2 9.7 3.3 21.1 10.7 21.1 27.1zm-53.7-36.9h13.9c6.5 0 10.5-4.9 10.5-11.5 0-6.5-4-11.4-10.5-11.4h-13.9zm26.9 32.7c0-6.5-4.1-11.4-12.2-11.4h-13.8v23.7h13v-0.8c8.1 0 13-4.1 13-11.5zm1.6 127.9l13 24.5c0.8 1.7 0 2.5-1.6 2.5h-10.6c-0.8 0-1.6-0.8-1.6-0.8l-13-26.2h-9.8v25.4c0 0.8-0.8 1.6-1.6 1.6h-9c-0.8 0-1.6-0.8-1.6-1.6v-64.8c0-0.8 0.8-1.6 1.6-1.6h27.7c11.4 0 21.1 9.8 21.1 21.3 0 9-5.7 16.4-14.6 19.7zm0.8-25.4c-1.6-1.7-4.1-3.3-6.5-3.3h-17.1v19.6h15.5v-0.8c7.3 0 13-8.2 8.1-15.5zm345.5-130.3v50.8c0 1.6-0.8 2.4-1.6 2.4 0 0-17.1 10.7-40.7 10.7-32.5 0-58.5-26.2-58.5-59 0-32.8 27.6-58.2 59.3-58.2 13.8 0 28.5 5.7 39.9 15.6 1.6 0.8 1.6 3.3 0 4.1l-13.1 13.9c-1.6 0.8-3.2 0.8-4 0-6.5-5.7-13-8.2-21.2-8.2-17.8 0-32.5 15.6-31.7 33.6 0 18.8 16.3 32.8 34.2 32q6.1 0 12.2-2.5v-18h-10.6c-1.6 0-3.2-1.7-3.2-3.3v-13.9c0-1.7 1.6-3.3 3.2-3.3h32.5c1.7 0 3.3 1.6 3.3 3.3zm-399.9 116.3v8.2c0 0.8-0.9 1.7-1.7 1.7h-29.2v16.3h24.3c0.8 0 1.7 0.9 1.7 1.7v8.2c0 0.8-0.8 1.6-1.7 1.6h-24.3v18h29.2c0.8 0 1.7 0.9 1.7 1.7v8.2c0 0.8-0.9 1.6-1.7 1.6h-39.8c-0.8 0-1.6-0.8-1.6-1.6v-64.8c0-1.6 0.8-2.4 1.6-2.4h39.8c0.8 0 1.7 0.8 1.7 1.6zm287.7 32v28.7c0 0.8 0 0.8-0.8 1.6 0 0-9.8 6.5-24.4 6.5-19.5 0-34.9-15.5-34.9-35.2 0-19.6 16.2-36 35.7-36 9 0 17.1 3.2 23.6 9q1.2 1.2 0 2.4l-5.7 6.6q-1.2 1.2-2.4 0c-4.1-4.1-9.8-5.7-14.7-5.7-12.2 0-21.9 10.6-21.9 22.9 0 12.3 9.7 22.1 21.9 22.1 5.7 0 9.8-1.6 11.4-2.4v-12.3h-8.1c-0.8 0-1.7-0.8-1.7-1.7v-6.5c0-0.8 0.9-1.7 1.7-1.7h18.7c0.8 0 1.6 0.9 1.6 1.7zm-150.4-33.6c0.8 0 1.6 0.8 2.4 1.6v41c0 14.7-11.3 26.2-27.6 26.2-16.2 0-27.6-11.5-27.6-26.2v-41c0-0.8 0.8-1.6 1.6-1.6h8.9c0.9 0 1.7 0.8 1.7 1.6v41c0 8.2 4.9 14.7 14.6 14.7 9.7 0 14.6-6.5 14.6-14.7v-41c0-0.8 0.9-1.6 1.7-1.6 0 0 9.7 0 9.7 0zm-898.2 134.4c-102 0-184.5-83.2-184.5-186 0-102.9 82.5-186 184.5-186 102.1 0 184.5 83.1 184.5 186 0 102.8-82.4 186-184.5 186zm449.5-183.6c-29.2 0-47.9-20.5-47.9-45.1v-68.8c0-1.6 1.6-3.3 3.2-3.3h20.3c1.7 0 3.3 1.7 3.3 3.3v67.2c0 11.5 6.5 19.7 21.1 19.7 14.7 0 21.2-7.4 21.2-19.7v-67.2c0-1.6 1.6-3.3 3.2-3.3h19.5c1.6 0 3.3 0.9 4.1 3.3v68.8c0 25.5-18.7 45.1-48 45.1zm-284.5-2.4c0-92.6-73.9-167.2-165.8-167.2-91.8 0-165.8 74.6-165.8 167.2 0 30.3 8.9 59 22.7 83.5l143.1-0.8c0.8 0 0.8 0.8 1.6 0.8l44.7 36.1c0.9 0.8 0.9 0.8 1.7 0.8h67.4c31.7-30.3 51.2-72.9 50.4-120.4zm-232.4-100.8l25.1-34.4c0.9-0.9 1.7-0.9 1.7 0l25.2 34.4c0.8 0 0 1.6-0.8 1.6h-50.4c-0.8 0-1.7-0.8-0.8-1.6zm344.6 96.7v-109c-0.8-2.5 0.8-3.3 2.4-3.3h2.5c0.8 0 2.4 0.8 3.2 1.6l63.4 61.5v-58.2c0-1.6 1.7-3.3 3.3-3.3h19.5c1.6 0 3.2 1.7 3.2 3.3v109.8c0 1.7-1.6 3.3-3.2 3.3h-1.6c-1.7 0-2.5-0.8-3.3-1.6l-63.4-64.8v60.7c0 1.6-1.6 3.2-3.2 3.2h-19.6c-1.6 0-3.2-1.6-3.2-3.2zm585.3 2.4v-109.8c0-2.4 1.6-3.2 3.2-3.2h67.5c1.6 0 3.2 1.6 3.2 3.2v18.1c0 1.6-1.6 3.2-3.2 3.2h-44.7v20.5h37.4c1.6 0 3.2 1.7 3.2 3.3v18c0 1.7-1.6 3.3-3.2 3.3h-37.4v22.1h44.7c1.6 0 3.2 1.7 3.2 3.3v18c0 1.7-1.6 3.3-3.2 3.3h-67.5c-1.6 0-3.2-1.6-3.2-3.3zm-425.2-104.9v-13.9c0-1.6 1.7-3.3 3.3-3.3h16.2c1.7 0 3.3 1.7 3.3 3.3v13.9c0 2.5-1.6 3.3-3.3 3.3h-16.2c-1.6 0-3.3-1.6-3.3-3.3zm-337.3 136.1l-4.1 7.3v63.9c0 0 0 0.9-0.8 0.9h-41.4c-0.8 0-0.8-0.9-1.7-0.9l-29.2-22.9c-0.8 0-0.8-0.8-0.8-0.8v-40.2l-3.3-7.3c-0.8-0.8 0-1.7 0.8-1.7h79.7c0.8 0 0.8 0.8 0.8 1.7zm-91.9-56.6v8.2l-8.9 21.3v60.7c0 0 0 0.8-0.8 0.8h-80.5c0 0-0.8 0-0.8-0.8v-60.7l-8.9-21.3v-8.2c0 0 0-0.8 0.8-0.8h99.1c0 0 0.9 0 0 0.8zm-26-55.7l35 35.2c0 0.9-0.8 1.7-1.6 1.7h-114.7c-0.8 0-1.6-1.7-0.8-1.7l35-35.2zm117.9 92.6c0.8 0.8 0 1.6-0.9 1.6h-79.6c-0.8 0-0.8-0.8-0.8-1.6l5.7-18c0.8-0.9 2.4-0.9 2.4 0l7.3 17.2c0.8 0.8 2.5 0.8 2.5 0l21.1-50.8c0.8-0.9 2.4-0.9 2.4 0l21.2 50.8c0.8 0.8 2.4 0.8 2.4 0l6.5-17.2c0.8-0.9 2.4-0.9 2.4 0zm896.6-54.9h-11.4v41.8c0 1.6-1.6 3.2-3.2 3.2h-19.5c-1.6 0-3.3-1.6-3.3-3.2v-108.2h0.9c0-1.6 1.6-3.3 3.2-3.3h48.8c20.3 0 35.7 15.6 35.7 35.2 0 14.8-8.9 27.1-24.3 32.8l21.9 41.8c0.8 2.5 0 4.9-2.4 4.9h-22c-1.6 0-2.4-0.8-2.4-1.6 0 0-22-43.4-22-43.4zm-11.4-20.5h24.4c6.5 0 12.2-5.8 12.2-13.1 0-7.4-5.7-12.3-12.2-12.3h-24.4zm382.9 60.6c0.8 2.5 0 4.9-2.5 4.9h-21.9c-1.6 0-2.4-0.8-2.4-1.6l-22-43.4h-11.4v41.8c0 1.6-1.6 3.2-3.2 3.2h-19.5c-1.6 0-3.3-1.6-3.3-3.2v-108.2h0.9c0-1.6 1.6-3.3 3.2-3.3h48.8c20.3 0 35.7 15.6 35.7 35.2 0 14.8-8.9 27.1-24.3 32.8 0 0 21.9 41.8 21.9 41.8zm-23.6-73.7c0-7.4-5.7-12.3-12.2-12.3h-24.4v25.4h24.4c6.5 0 12.2-5.8 12.2-13.1zm-1004.7 132.7l-30 66.4c0 0.8-0.9 0.8-1.7 0.8h-0.8c-0.8 0-1.6-0.8-1.6-0.8l-30.1-66.4c-0.8-1.6 0-2.4 1.6-2.4h9.8c0.8 0 1.6 0.8 1.6 0.8l18.7 42.6h0.8l18.7-42.6c0-0.8 0.8-0.8 1.7-0.8h9.7c1.6 0 2.4 1.6 1.6 2.4zm57.7-0.8v8.2c0 0.8-0.8 1.6-1.6 1.6h-29.2v16.4h24.3c0.9 0 1.7 0.8 1.7 1.7v8.2c0 0.8-0.8 1.6-1.7 1.6h-24.3v18h29.2c0.8 0 1.6 0.8 1.6 1.6v8.2c0 0.9-0.8 1.7-1.6 1.7h-39.8c-0.8 0-1.6-0.8-1.6-1.7v-64.7c0-1.6 0.8-2.4 1.6-2.4h39.8c0.8 0 1.6 0.8 1.6 1.6zm52.9 39.3l13 24.6c0.8 1.6 0 2.5-1.6 2.5h-10.6c-0.8 0-1.6-0.9-1.6-0.9l-13-26.2h-10.6v25.4c0 0.9-0.8 1.7-1.6 1.7h-7.3c-0.9 0-1.7-0.9-1.7-1.7v-64.7h-0.8c0-0.8 0.8-1.6 1.6-1.6h27.7c11.4 0 21.1 9.8 21.1 21.3 0 9-5.7 16.4-14.6 19.6zm1.6-25.4c-1.6-1.6-4.1-3.3-6.5-3.3h-17.1v19.7h15.5v-0.8c7.3 0 13-8.2 8.1-15.6zm48 53.3c-9.8 0.8-16.3-4.1-19.5-6.6-0.9-0.8-1.7-1.6-0.9-3.3l3.3-5.7c0.8-1.6 2.4-1.6 3.2-0.8 4.1 3.3 8.2 5.7 14.7 5.7 4.9 0 8.9-3.3 8.9-7.4 0-4.9-4-8.1-12.2-11.4-8.9-4.1-18.7-9.8-18.7-21.3 0-9 6.5-18.9 22-18.9 9.7 0 17.9 5 19.5 6.6 0.8 0.8 1.6 2.5 0.8 3.3l-4.1 5.7c-0.8 0.8-2.4 1.6-3.2 0.8-4.1-2.4-8.1-5.7-13.8-5.7-5.7 0-9 3.3-9 6.5 0 5 3.3 7.4 11.4 10.7 9.8 4.1 20.3 9.8 20.3 22.1 0 9.8-8.9 19.7-22.7 19.7z"
      />
    </svg>
  );
}

function ErgoLogo() {
  return (
    <svg id="svg336" version="1.1" width="100" height="40" viewBox="-0.68476518 -0.68476518 79.34030936 24.19503636">
      <defs id="defs333" />
      <path
        id="path234"
        d="m 48.29296,0.01295651 a 15,15 0 0 0 -1.293,0.002 c -6.41,0 -11.33,4.59077999 -11.33,11.55078049 0,6.18 3.62,11.23828 11,11.23828 a 14.48,14.48 0 0 0 7.7695,-2.04882 V 9.5540165 h -8.5996 v 4.3613305 h 3.75 v 3.85938 a 6,6 0 0 1 -2.6504,0.49023 c -3.69,0 -5.8086,-2.68984 -5.8086,-6.83984 0,-3.8400005 1.5785,-6.6211005 6.2285,-6.6211005 a 12.44,12.44 0 0 1 4.8711,0.92188 l 1.8496,-4.29102 a 15,15 0 0 0 -5.7871,-1.42186999 z m 18.9668,0.002 c -5.5,0 -10.9199,3.87991999 -10.9199,11.41992049 0,7 4.5709,11.39063 10.7109,11.39063 6.5,0 10.9199,-4.76063 10.9199,-11.39063 0.03,-7.7400005 -5.4509,-11.41992049 -10.7109,-11.41992049 z m -42.75,0.0488 a 14.78,14.78 0 0 0 -0.019,0.002 c -1.3,0 -2.4903,0.0602 -3.4903,0.16016 -1,0.1 -1.91,0.19891 -3,0.37891 V 22.444667 h 5.0997 v -7.29883 h 1.791 a 3.89,3.89 0 0 1 1.5097,1.31836 17.49,17.49 0 0 1 3,6 h 6.0703 c -1.39,-3.88 -2.7711,-7.45008 -5.2011,-8.58008 v -0.0996 a 9.28,9.28 0 0 0 2.7304,-2.66015 6.81,6.81 0 0 0 1,-3.6992205 7.39,7.39 0 0 0 -0.539,-2.83008 5.74,5.74 0 0 0 -1.6817,-2.39062 8.35,8.35 0 0 0 -2.8886,-1.57031999 14.78,14.78 0 0 0 -4.3809,-0.57031 z M 0,0.37430651 V 17.214147 c 0,3.46 1.34946,5.23047 5.18946,5.23047 h 10.2598 v -4.66992 h -8.3184 a 1.87,1.87 0 0 1 -2,-2.10938 v -2.36133 h 8.3984 V 8.8547765 h -8.4101 v -3.7793 h 9.8808 V 0.37430651 Z M 67.14066,4.5950065 c 4,0 5.5097,3.67984 5.5097,6.8398405 0,3.16 -1.5297,6.83985 -5.5097,6.83985 -3.17,0 -5.5098,-2.63985 -5.5098,-6.83985 0,-3.7400005 1.8998,-6.8398405 5.5098,-6.8398405 z m -42.7715,0.01 h 0.8906 a 4.37,4.37 0 0 1 2.6699,0.80078 2.55,2.55 0 0 1 1,2.16016 3.27,3.27 0 0 1 -1.1093,2.6191405 5.22,5.22 0 0 1 -3.0899,0.90039 c -0.58,0 -1.2808,-3.1e-4 -1.6308,-0.0703 V 4.7143865 a 12.51,12.51 0 0 1 1.2695,-0.10937 z"
        fill="currentColor"
      />
    </svg>
  );
}

function NetflixLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="svg93"
      version="1.1"
      width="160"
      height="35"
      viewBox="-1.3051038 -1.3051038 247.1490076 46.1136676"
      fill="currentColor"
    >
      <defs id="defs90" />
      <path
        id="Fill-3"
        d="m 7.86142,18.67302 c -7.00263,0 -7.54297,4.65162 -7.54297,6.08008 0,4.34539 3.16153,5.08975 6.22461,5.80859 l 2.07226,0.47657 c 2.10493,0.50538 3.39844,0.885 3.39844,2.27539 0,1.575 -1.31683,2.375 -3.91406,2.375 -3.52432,0 -3.94805,-2.09494 -3.96875,-2.9961 l -0.004,-0.125 H 0 v 0.12696 c 0,1.98692 0.81494,6.59765 8.39844,6.59765 1.29286,0 7.74414,-0.30561 7.74414,-6.46484 0,-3.56769 -2.48091,-4.66493 -5.16211,-5.32031 L 6.27734,26.3488 C 5.59525,26.19534 4.32422,25.91007 4.32422,24.45623 c 0,-1.61539 1.67557,-2.1875 3.24219,-2.1875 3.47486,0 3.73621,2.02992 3.83398,2.79492 l 0.0156,0.11133 h 4.11719 l -0.002,-0.12891 C 15.48858,22.10491 13.456,18.67302 7.86126,18.67302 Z m 27.6289,0 c -7.01988,0 -9.51172,5.57775 -9.51172,10.35352 0,7.09615 4.5242,10.26562 9.00782,10.26562 3.33913,0 4.89033,-1.59838 5.93359,-2.79492 l 0.38086,2.30469 h 2.93164 V 28.08904 h -8.3418 v 3.5332 h 4.47071 c -0.89373,3.77769 -3.93209,3.97656 -4.53711,3.97656 -2.50406,0 -5.48828,-1.13178 -5.48828,-6.51562 0,-5.02616 2.79682,-6.81445 5.41015,-6.81445 2.84108,0 4.12305,2.42033 4.12305,3.04687 v 0.12695 h 4.30273 l -0.0117,-0.13476 c -0.18058,-2.29385 -2.22055,-6.63477 -8.66992,-6.63477 z m -16.48437,0.48242 v 19.64649 h 4.29492 V 19.15544 Z m 28.96094,0 v 19.64649 h 4.00586 V 25.21404 l 7.82617,13.58789 h 4.15625 V 19.15544 H 59.94931 V 32.42107 L 52.33603,19.15544 Z m 25.05468,0 -6.98632,19.64649 h 4.51953 l 1.34765,-3.99414 h 6.95117 l 1.24219,3.99414 h 4.65625 L 77.8497,19.15544 Z m 14.00782,0 v 19.64649 h 13.91406 V 35.04607 H 91.32821 V 19.15544 Z m 23.26367,0 v 19.64649 h 4.29883 V 19.15544 Z m 8.17968,0 v 19.64649 h 8.50586 c 6.01688,0 8.15625,-5.31013 8.15625,-10.2832 0,-2.19577 -0.57858,-9.36329 -7.99414,-9.36329 z m 19.34766,0 v 12.95899 c 0.061,2.14269 0.55286,3.65962 1.53516,4.77539 1.87604,2.09308 4.70685,2.40234 6.23437,2.40234 5.27267,0 8.06836,-2.56214 8.06836,-7.41406 V 19.15544 h -4.38672 v 12.875 c 0,2.43346 -1.19555,3.56836 -3.76172,3.56836 -2.07962,0 -3.32031,-1.40707 -3.32031,-3.75976 v -12.6836 z m 19.38086,0 v 19.64649 h 4.01758 V 25.23552 l 7.82617,13.56641 h 4.1543 V 19.15544 h -4.01953 v 13.2461 l -7.60352,-13.2461 z m 25.06445,0 -6.99609,19.64649 h 4.53125 l 1.34961,-3.99414 h 6.9375 l 1.24805,3.99414 h 4.66406 l -6.91406,-19.64649 z m -59.59375,3.59571 h 3.76954 c 1.85992,0 4.33398,0.62824 4.33398,6.06054 0,1.50577 -0.30316,6.39454 -4.29102,6.39454 h -3.8125 z m -47.29101,1.17773 2.26562,7.2793 H 73.0665 Z m 109.23242,0 2.27539,7.2793 h -4.59766 z"
        fill="currentColor"
      />
      <path
        fill="currentColor"
        id="Fill-14"
        d="m 216.68818,19.16192 h 9.0903 c -5.47512,15.01154 -7.55359,20.70231 -8.3484,22.87269 C 209.93285,38.84538 204.75909,30.84692 204.75909,21.74885 204.75909,9.94269 213.46637,0 224.6478,0 c 11.18603,0 19.89101,9.94269 19.89101,21.74885 0,11.81192 -8.70498,21.75461 -19.89101,21.75461 -1.52291,0 -3.00556,-0.18461 -4.41,-0.53423 l 8.68312,-23.80731 h 6.18942 l -7.12226,19.55077 c 6.85425,-1.69961 12.18099,-8.50731 12.18099,-16.96384 0,-9.80308 -7.14871,-17.3677 -15.52127,-17.3677 -8.37256,0 -15.51897,7.56462 -15.51897,17.3677 0,3.825 1.07777,7.305 2.91585,10.14 l 4.6435,-12.72693"
      />
    </svg>
  );
}

function ProkundoLogo() {
  return (
    <Image src="/img/brands/prokundo.svg"
    className="fill-gray-400 filter grayscale"
    width={150}
    height={40}
    alt="Picture of the author" />
  )
}

function LVMLogo() {
  return (
<svg version="1.2" baseProfile="tiny-ps" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1592 413" width="160" height="41">
<defs>
  <clipPath clipPathUnits="userSpaceOnUse" id="cp1">
    <path d="M0.01 412.96L1591.95 412.96L1591.95 0.98L0.01 0.98L0.01 412.96Z" />
  </clipPath>
</defs>

<g id="Allianz">
  <path id="A" fill="currentColor" fillRule="evenodd" className="shp0" d="M0 325.13L65.65 125.88C71.12 113.3 71.12 109.84 71.12 104.55C71.12 96.17 65.65 92.7 54.71 92.7L47.41 92.7L47.41 71.74L138.59 71.74C155 71.74 162.29 76.66 165.94 91.98L231.59 325.13L169.59 325.13L151.35 263.69L76.59 263.69L58.35 325.13M116.71 122.42L85.7 223.22L144.06 223.22L116.71 122.42Z" />
  <path id="l" fill="currentColor" className="shp0" d="M310 325.13L310 90.34C310 78.12 302.7 71.74 289.94 71.74L233.41 71.74L233.41 92.7L237.06 92.7C248 92.7 253.47 97.26 253.47 107.1L253.47 325.13" />
  <path id="l1" fill="currentColor" className="shp0" d="M412.12 325.13L412.12 90.34C412.12 78.12 404.82 71.74 392.06 71.74L335.53 71.74L335.53 92.7L339.17 92.7C350.12 92.7 355.59 97.26 355.59 107.1L355.59 325.13" />
  <path id="i" fill="currentColor" fillRule="evenodd" className="shp0" d="M516.06 94.16C516.06 77.39 503.29 67.55 483.23 67.55C461.35 67.55 450.41 77.39 450.41 94.16C450.41 111.3 461.35 121.32 483.23 121.32C503.29 121.32 516.06 111.3 516.06 94.16ZM514.23 325.13L514.23 154.14C514.23 142.29 506.94 135.36 496 135.36L439.47 135.36L439.47 155.96L443.11 155.96C454.06 155.96 457.7 160.52 457.7 170.91L457.7 325.13L514.23 325.13Z" />
  <path id="a" fill="currentColor" fillRule="evenodd" className="shp0" d="M556.17 152.68C572.58 144.11 579.88 141.56 594.47 138.1C609.06 134.63 623.64 132.81 640.05 132.81C687.47 132.81 703.88 149.21 703.88 197.7L703.88 290.86C703.88 300.7 709.35 305.62 720.29 305.62L722.11 305.62L722.11 325.13L667.41 325.13C656.47 325.13 651 319.48 651 307.63L651 301.79C640.05 311.82 636.41 314.01 627.29 318.2C618.17 324.03 605.41 326.95 592.64 326.95C559.82 326.95 545.23 309.81 545.23 273.9C545.23 245.28 556.17 227.05 579.88 217.57C587.17 214.48 594.47 212.11 601.76 210.28C616.35 207.18 623.64 205.73 649.17 201.53L649.17 196.79C649.17 180.02 643.7 174.01 625.47 174.01C621.82 174.01 614.53 174.73 609.06 175.46C598.11 177.47 589 179.66 574.41 185.49L568.94 187.68M614.53 242C601.76 246.92 598.11 252.94 598.11 268.62C598.11 282.83 603.58 288.12 614.53 288.12C625.47 288.12 638.23 281.92 649.17 270.99L649.17 233.07C632.76 235.8 623.64 238.17 614.53 242Z" />
  <path id="n" fill="currentColor" fillRule="evenodd" className="shp0" d="M807.82 325.13L807.82 196.43C820.58 184.58 829.7 180.02 842.47 180.02C855.23 180.02 858.88 185.49 858.88 204.81L858.88 325.13L915.41 325.13L915.41 195.7C915.41 169.08 911.76 157.6 904.47 147.57C895.35 137.73 884.41 133.17 867.99 133.17C846.11 133.17 829.7 141.19 804.17 163.25L804.17 153.04C804.17 141.19 798.7 135.36 787.76 135.36L733.05 135.36L733.05 155.96L734.88 155.96C745.82 155.96 751.29 160.52 751.29 170.91L751.29 325.13" />
  <g id="z">
    <path id="Layer" fill="currentColor" className="shp0" d="M1090.48 288.82L1006.6 288.82L1086.83 174.34L1086.83 135.33L966.48 135.33C951.89 135.33 946.42 141.17 946.42 155.2L946.42 189.66L966.48 189.66L966.48 185.83C966.48 175.44 971.95 171.24 982.89 171.24L1026.66 171.24L944.6 285.72L944.6 325.1L1090.48 325.1" />
  </g>
  <g id="Eagle">
    <g id="Clip-Path">
      <g id="Layer">
        <path id="path37647" fill="currentColor" fillRule="evenodd" className="shp0" d="M1385.89 412.96C1269.18 412.96 1179.83 324.73 1179.83 206.79C1179.83 89.21 1269.18 0.98 1385.89 0.98C1504.42 0.98 1591.95 89.21 1591.95 206.79C1591.95 324.73 1504.42 412.96 1385.89 412.96ZM1385.89 33.07C1287.42 33.07 1214.48 106.35 1214.48 206.79C1214.48 307.23 1287.42 380.52 1385.89 380.52C1484.36 380.52 1557.3 307.23 1557.3 206.79C1557.3 106.35 1484.36 33.07 1385.89 33.07ZM1276.48 314.71L1276.48 152.65C1276.48 136.24 1283.77 129.68 1300.18 129.68L1329.36 129.68L1329.36 314.71L1276.48 314.71ZM1358.54 314.71L1358.54 114.73C1358.54 104.16 1354.89 100.7 1345.77 100.7L1340.3 100.7L1340.3 77L1389.54 77C1405.95 77 1413.24 82.65 1413.24 99.97L1413.24 314.71L1358.54 314.71ZM1442.42 129.68L1471.59 129.68C1488.01 129.68 1495.3 136.24 1495.3 152.65L1495.3 314.71L1442.42 314.71L1442.42 129.68Z" />
      </g>
    </g>
  </g>
</g>
</svg>

  );
}

function HUKLogo() {
  return (
    <svg version="1.0" width="165" height="45" viewBox="0 0 283.453 56.693" fill="currentColor">
      <g id="Boundingbox"></g>
      <g id="Logo">
        <g>
          <g>
            <g>
              <g>
                <path
                  d="M52.776,19.076l-1.94-0.15v-3.593H61.16v3.518l-1.168,0.111c-0.62,0.114-0.88,0.222-0.88,1.069v5.088h7.95V19.04
						l-1.794-0.149v-3.557h10.11v3.485l-1.097,0.108c-0.697,0.114-0.88,0.258-0.88,1.135V35.96l1.904,0.148v3.594H65.013v-3.521
						l1.173-0.105c0.687-0.115,0.875-0.296,0.875-1.174v-5.314h-7.95v6.411l1.904,0.147v3.557H50.797V36.22l1.096-0.111
						c0.7-0.11,0.883-0.29,0.883-1.174V19.076z"
                />
                <path
                  d="M99.909,32.188c0,4.945-4.396,7.986-10.109,7.986c-6.417,0-10.248-2.602-10.248-8.498V19.076l-1.943-0.15v-3.593
						h10.331v3.518l-1.207,0.111c-0.625,0.114-0.88,0.222-0.88,1.066v11.867c0,2.932,2.042,3.775,4.351,3.775
						c2.199,0,3.959-1.135,3.959-3.626V19.043l-1.722-0.152v-3.557h9.489v3.485l-1.102,0.108c-0.691,0.117-0.919,0.258-0.919,1.102
						V32.188z"
                />
                <path
                  d="M119.951,25.053l4.822-5.207c0.332-0.333,0.791-0.745,1.395-0.88l0.953-0.166v-3.466h-9.258v3.518l1.273,0.114
						l-7.092,7.474v-6.522c0-0.623,0.299-0.952,0.842-0.991l0.92-0.075v-3.518h-10.006v3.593l1.982,0.15v16.009
						c0,0.619-0.293,0.952-0.848,0.99l-1.135,0.145v3.479h9.602v-3.554l-1.357-0.108v-3.06l3.566-3.643l2.979,5.785
						c0.26,0.479,0.26,0.84-0.332,0.955l-1.141,0.145v3.479h11.027v-3.591l-2.586-0.293L119.951,25.053z"
                />
              </g>
              <rect x="128.295" y="26.697" width="9.605" height="4.512" />
              <g>
                <path
                  d="M247.865,26.544c1.65,0,3.504-0.888,3.504-3.621c0-2.392-1.312-3.325-3.477-3.325h-2.049v6.945H247.865z
						 M237.539,36.208l1.186-0.11c0.697-0.108,0.848-0.294,0.848-1.171V19.051l-1.994-0.147v-3.59h12.076
						c4.689,0,8.127,2.057,8.127,6.683c0,4.144-2.254,5.744-4.711,6.336c0,0,2.258,0.269,3.033,2.206l1.811,5.45l2.021,0.208v3.493
						h-9.895v-3.482l0.809-0.11c0.586-0.108,0.637-0.476,0.377-1.026l-1.146-3.115c-0.293-0.86-1.605-1.414-2.773-1.414h-1.479
						v5.484l1.467,0.207v3.457h-9.756V36.208z"
                />
                <path
                  d="M153.967,19.693c-3.664,0-5.902,2.453-5.902,7.588c0,4.512,1.711,7.897,6.053,7.956
						c1.445,0.016,2.596-0.197,2.596-0.197l0.193-3.394h4.43v7.188c-1.955,0.731-4.656,1.315-7.584,1.315
						c-7.631,0-11.953-4.252-11.953-12.465c0-9.642,5.934-12.867,11.803-12.867c2.896,0,5.752,0.62,7.623,1.539v6.146l-4.428,0.601
						l-0.195-2.165c0-0.548-0.033-0.841-0.508-0.988C155.395,19.765,154.555,19.693,153.967,19.693L153.967,19.693z"
                />
                <path
                  d="M174.988,35.253c3.666,0,4.656-3.9,4.656-7.604c0-3.079-0.842-7.937-4.805-7.937c-3.555,0-4.816,3.9-4.816,7.568
						C170.023,30.691,170.809,35.253,174.988,35.253L174.988,35.253z M174.695,40.15c-6.893,0-10.924-4.252-10.924-12.609
						c0-9.387,5.941-12.723,11.439-12.723c5.758,0,10.701,3.446,10.701,12.723C185.912,35.898,181.549,40.15,174.695,40.15
						L174.695,40.15z"
                />
                <path
                  d="M196.742,34.972h2.275c2.674,0,3.625-1.083,3.625-3.137c0-2.055-1.244-3.17-3.559-3.17h-2.342V34.972z M196.742,24.707
						h1.688c2.305,0,3.301-1.174,3.301-3.076c0-1.949-1.174-2.715-3.189-2.715h-1.799V24.707z M199.896,15.314
						c4.441,0,8.244,1.315,8.244,5.833c0,2.671-1.5,4.54-3.697,5.42c2.967,0.623,4.904,2.713,4.904,5.647
						c0,4.878-3.477,7.477-9.926,7.477h-10.963v-3.479l1.186-0.114c0.697-0.108,0.842-0.294,0.842-1.171V19.054l-1.994-0.149v-3.59
						H199.896z"
                />
                <path
                  d="M232.84,32.175c0,4.953-3.998,7.995-9.711,7.995c-6.424,0-9.756-2.6-9.756-8.507V19.051l-1.938-0.147v-3.59h10.336
						v3.519l-1.25,0.111c-0.621,0.108-0.875,0.218-0.875,1.062v11.879c0,2.931,1.572,3.772,3.881,3.772
						c2.203,0,3.555-1.132,3.555-3.626V19.015l-1.723-0.149v-3.552h9.5v3.482l-1.107,0.108c-0.691,0.111-0.912,0.257-0.912,1.102
						V32.175z"
                />
                <path
                  d="M275.803,34.968v-3.982l-2.238-0.146v-3.558h9.9v3.485l-0.953,0.11c-0.619,0.108-0.879,0.332-0.879,1.024v6.482
						c-2.016,0.983-5.355,1.747-8.98,1.747c-7.037,0-11.479-4.104-11.479-12.573c0-9.456,6.053-12.723,12.354-12.723
						c3.084,0,6.09,0.695,7.811,1.578v6.115l-4.523,0.501l-0.094-2.068c0-0.551-0.076-0.847-0.553-0.991
						c-0.693-0.147-1.572-0.219-2.414-0.219c-4.324,0-6.318,3.078-6.318,7.59c0,5.091,1.734,8.025,5.398,8.025
						C273.826,35.367,274.922,35.301,275.803,34.968L275.803,34.968z"
                />
              </g>
            </g>
          </g>
          <g>
            <path
              fill="currentColor"
              d="M19.992,56.561l-0.51-0.261c-1.182-0.603-5.356-2.843-9.517-6.469
				c-4.481-3.908-9.824-10.256-9.824-18.312c0-1.057-0.008-22.436-0.014-25.55V5.285l0.606-0.318
				c7.217-3.817,18.06-4.839,19.261-4.839c2.035,0,12.382,1.262,19.148,4.839l0.606,0.318v0.684c0,1.966-0.006,11.223-0.011,18.041
				l-0.003,7.51c0,8.184-5.312,14.525-9.769,18.403c-4.108,3.58-8.28,5.789-9.462,6.381L19.992,56.561z"
            />
            <g>
              <path
                d="M3.939,24.856l-0.855-0.063v-1.578h4.548v1.545l-0.515,0.047c-0.277,0.05-0.391,0.1-0.391,0.468v2.242h3.499v-2.677
					l-0.789-0.063v-1.562h4.451v1.531l-0.484,0.047c-0.305,0.047-0.385,0.113-0.385,0.498v6.998l0.836,0.064v1.583H9.323v-1.55
					l0.518-0.05c0.305-0.048,0.385-0.13,0.385-0.513v-2.339H6.727v2.821l0.836,0.063v1.566H3.067v-1.533l0.485-0.05
					c0.307-0.047,0.387-0.131,0.387-0.516V24.856z"
              />
              <path
                d="M24.681,30.628c0,2.178-1.932,3.516-4.448,3.516c-2.821,0-4.509-1.144-4.509-3.74v-5.547l-0.858-0.063v-1.578h4.548
					v1.545l-0.529,0.047c-0.274,0.05-0.388,0.1-0.388,0.468v5.223c0,1.291,0.897,1.664,1.913,1.664c0.969,0,1.741-0.501,1.741-1.598
					v-5.724l-0.761-0.063v-1.562h4.18v1.531l-0.484,0.047c-0.304,0.047-0.404,0.113-0.404,0.481V30.628z"
              />
              <path
                d="M33.504,27.489l2.12-2.292c0.149-0.146,0.349-0.332,0.618-0.39l0.418-0.072v-1.52h-4.078v1.545l0.564,0.047l-3.12,3.294
					v-2.874c0-0.274,0.127-0.421,0.371-0.435l0.398-0.033v-1.545h-4.401v1.578l0.872,0.061v7.045c0,0.279-0.127,0.423-0.371,0.438
					l-0.501,0.066v1.53h4.224v-1.563l-0.592-0.048v-1.348l1.564-1.603l1.312,2.547c0.114,0.213,0.114,0.37-0.146,0.418l-0.501,0.066
					v1.53h4.853v-1.58l-1.138-0.131L33.504,27.489z"
              />
            </g>
            <g>
              <path
                d="M33.922,9.523l-2.204,5.356v1.83c-0.88-0.346-2.032-0.733-2.58-0.911l-0.689-3.286l-8.296-1.822L18.434,14.5
					c-1.107,0.105-3.045,0.44-3.053,0.44l0.002-2.865l-0.697-0.479c0,0,0.365-0.404,0.457-0.576
					c0.232-0.435,0.241-0.867,0.241-1.077c0-1.694-2.012-2.541-2.012-2.541l-0.263-0.886V6.209c0.36-0.266,0.919-0.482,1.733-0.493
					c1.481-0.014,1.536,0.302,2.625,0.487c2.109,0.36,3.302-1.282,3.302-1.282s-2.131,0.761-3.258,0.142
					c-0.88-0.487-1.603-1.138-2.97-1.122c-1.226,0.017-1.816,0.582-1.816,0.582v1.999l-0.269,0.88c0,0-2.015,0.847-2.015,2.541
					c0,0.21,0.008,0.643,0.241,1.077c0.091,0.171,0.459,0.576,0.459,0.576l-0.7,0.479l-0.003,4.227
					c-0.839,0.346-1.741,0.789-2.378,1.11v-1.365l0.532-0.866v-2.652l-0.914-0.05L5.957,8.202l-1.655,4.283l-0.914,0.053v2.649
					l0.542,0.867v5.664h1.124v-5.985l-0.545-0.869v-1.268l0.579-0.036l0.889-2.301l0.922,2.298l0.57,0.033v1.273l-0.532,0.872v3.546
					c0.147-0.086,2.361-1.351,4.626-2.209l0.002-4.551c0,0,0.465-0.333,0.604-0.496c0.097-0.125,0.083-0.21,0.083-0.454
					c0-0.279-0.141-0.44-0.379-0.667c-0.271-0.282-0.359-0.592-0.359-0.966c0-1.013,1.4-1.686,1.4-1.686s1.393,0.672,1.393,1.686
					c0,0.374-0.086,0.684-0.357,0.966c-0.238,0.227-0.379,0.388-0.379,0.667c0,0.244-0.014,0.33,0.083,0.454
					c0.138,0.163,0.604,0.496,0.604,0.496l-0.003,3.773c0,0,2.198-0.493,4.93-0.733l1.617-3.577l6.696,1.467l0.673,3.219
					c1.193,0.34,3.504,1.141,4.675,1.658v-3.225l1.088-2.655l1.11,2.655v6.608h1.121v-6.837L33.922,9.523z"
              />
              <path
                d="M33.49,35.5c-2.486,6.893-9.949,12.05-13.498,14.176C16.446,47.55,8.983,42.393,6.497,35.5H5.019
					c2.583,8.85,14.874,15.801,14.974,15.801c0.102,0,12.393-6.951,14.976-15.801H33.49z"
              />
            </g>
            <path
              d="M38.6,31.519c0,7.749-5.094,13.819-9.379,17.551c-4.047,3.524-8.149,5.681-9.224,6.221
				c-1.077-0.548-5.207-2.758-9.288-6.312c-4.304-3.754-9.434-9.83-9.434-17.46c0-1.06-0.011-22.438-0.014-25.55
				c7.015-3.709,17.545-4.706,18.732-4.706c1.747,0,12.039,1.229,18.619,4.706C38.614,9.08,38.6,30.459,38.6,31.519L38.6,31.519z
				 M19.995,0.003C14.799,0.141,5.146,2.256,0,5.213c0,0.96,0.014,25.165,0.014,26.306c0,3.597,1.046,7.154,3.117,10.584
				c1.633,2.718,3.917,5.359,6.776,7.848c4.845,4.222,9.614,6.519,9.813,6.613l0.271,0.13l0.271-0.127
				c0.199-0.092,4.944-2.331,9.764-6.53c2.846-2.467,5.113-5.107,6.746-7.838c2.051-3.438,3.092-7.031,3.092-10.68
				c0-1.141,0.014-25.904,0.014-26.306C34.583,2.084,24.521,0.141,19.995,0.003z"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default Hero;
