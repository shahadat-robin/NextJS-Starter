'use client';

import { ThemeProvider } from 'next-themes';
import { type FC, type PropsWithChildren } from 'react';
import Footer from './footer';
import AppHeader from './header';

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <AppHeader />
      <main className="min-h-screen flex flex-col">{children}</main>
      <Footer />
    </ThemeProvider>
  );
};

export default AppLayout;
