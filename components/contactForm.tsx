'use client';

import { ValidationError, useForm } from '@formspree/react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export function ContactForm() {
  const [state, handleSubmit] = useForm('xrgnzpoz');
  if (state.succeeded) {
    return (
      <div className="container text-center mx-auto my-4 px-4 lg:px-20">
        <span>
          Danke für deine Nachricht wir melden uns so schnell es geht zurück!
          <div className="mt-1 bg-brandGreen rounded-md w-11 h-11 ">
            <CheckCircleIcon />
          </div>
        </span>
      </div>
    );
  } else {
    return (
      <form id="kontakt" onSubmit={handleSubmit}>
        <div className="container mx-auto my-4 px-4 lg:px-20">
          <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto shadow-xl rounded-lg ">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                required
                id="vorname"
                name="vorname"
                className="w-ful mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Vorname*"
              />
              <ValidationError prefix="Vorname" field="vorname" errors={state.errors} />
              <input
                required
                id="nachname"
                name="nachname"
                className="w-full  mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Nachname*"
              />
              <input
                required
                id="email"
                name="email"
                className="w-full  mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="E-Mail*"
              />
              <input
                required
                id="telefon"
                name="telefon"
                className="w-full  mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Telefonnummer*"
              />
            </div>
            <div className="my-4">
              <textarea
                required
                id="nachricht"
                name="nachricht"
                placeholder="Nachricht*"
                className="w-full h-32  mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="my-2 w-1/2 lg:w-1/4">
              <button
                type="submit"
                disabled={state.submitting}
                className="text-sm font-bold tracking-wide bg-brandRed text-gray-100 p-3 rounded-lg w-full
                        focus:outline-none focus:shadow-outline"
              >
                Senden
              </button>
            </div>
          </div>

          <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-brandRed rounded-2xl">
            <div className="flex flex-col text-gray-300">
              <h1 className="font-bold text-4xl my-4">Oder komm einfach vorbei</h1>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt arcu diam, eu feugiat felis
                fermentum id. Curabitur vitae nibh viverra, auctor turpis sed, scelerisque ex.
              </p>

              <div className="flex my-4 w-2/3 lg:w-1/2">
                <div className="flex flex-col">
                  <i className="fas fa-map-marker-alt pt-2 pr-2" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl">Büro</h2>
                  <p className="text-gray-300">5555 Tailwind RD, Pleasant Grove, UT 73533</p>
                </div>
              </div>

              <div className="flex my-4 w-2/3 lg:w-1/2">
                <div className="flex flex-col">
                  <i className="fas fa-phone-alt pt-2 pr-2" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl">Telefon</h2>
                  <p className="text-gray-300">Tel: xxx-xxx-xxx</p>
                  <p className="text-gray-300">Fax: xxx-xxx-xxx</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
