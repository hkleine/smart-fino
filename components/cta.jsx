import React from 'react';
import Container from './container';

const Cta = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full gap-5 mx-auto text-white bg-brandRed px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">Möchtest du dich gerne kostenlos beraten lassen?</h2>
          <p className="mt-2 text-white text-opacity-90 lg:text-lg">
            Schreib uns direkt über unser Formular oder rufe uns an.
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="https://github.com/web3templates"
            target="_blank"
            rel="noopener"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-brandRed bg-white rounded-md px-7 lg:px-10 lg:py-5 "
          >
            Kostenlose Beratung
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Cta;
