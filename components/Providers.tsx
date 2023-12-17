'use client';

import { ThemeProvider } from 'next-themes';
import React, { PropsWithChildren } from 'react';

export function Providers({ children }: PropsWithChildren) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
