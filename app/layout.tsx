import { PropsWithChildren } from 'react';
import { Providers } from '../components/Providers';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

import Head from 'next/head';
import '../css/tailwind.css';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head />
      <body>
        <Providers>
          <Head>
            <title>Smart.fino</title>
            <meta name="description" content=" Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
