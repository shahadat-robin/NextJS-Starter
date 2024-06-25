'use client';

import ReactLenis from 'lenis/react';
import { ThemeProvider } from 'next-themes';
import dynamic from 'next/dynamic';
import { type FC, type PropsWithChildren } from 'react';

import AppHeader from './header';
const Footer = dynamic(() => import('./footer'), { ssr: false });

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ReactLenis root>
      <ThemeProvider attribute="class" defaultTheme="light">
        <AppHeader />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </ReactLenis>
  );
};

export default AppLayout;
