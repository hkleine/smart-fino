import Head from 'next/head';
import { Metadata } from 'next/types';
import { PropsWithChildren } from 'react';
import { Providers } from '../components/Providers';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import '../css/tailwind.css';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'smart.fino',
    description: 'Dein Partner in Sachen Kindervorsorge, Vermögenswirksame Leistungen und Altersvorsorge',
  };
}

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="de">
      <head />
      <body>
        <Providers>
          <Head>
            <title>smart.fino</title>
            <meta
              name="description"
              content="Deine Finanzen smart gedacht - Wir wissen, wie schwierig es sein kann, seine Versicherungen und Finanzen
              zu verstehen - deshalb helfen wir dir dabei!"
            />
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
