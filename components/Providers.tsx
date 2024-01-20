'use client';

import { ThemeProvider } from 'next-themes';
import { PropsWithChildren } from 'react';

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider defaultTheme={'dark'} forcedTheme="dark" themes={['dark']} enableSystem={false} attribute="class">
      {children}
    </ThemeProvider>
  );
}
