'use client';

import ReactLenis from 'lenis/react';
import { ThemeProvider } from 'next-themes';
import type { FC, PropsWithChildren } from 'react';

const RootProvider: FC<Readonly<PropsWithChildren>> = ({ children }) => (
  <ReactLenis root>
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  </ReactLenis>
);

export default RootProvider;
