import { MetadataRoute } from 'next/types';

export default async function robots(): Promise<MetadataRoute.Robots> {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  };
}
