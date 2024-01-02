import { MetadataRoute } from 'next/types';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/altersvorsorge`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/kindervorsorge`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/vermoegenswirksame-leistungen`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/impressum`,
    },
  ];
}
