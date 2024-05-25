'use client';

import { type FC, type PropsWithChildren } from 'react';
import Footer from './footer';
import AppHeader from './header';

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <AppHeader />
      <main className="min-h-screen flex flex-col">{children}</main>
      <Footer />
    </>
  );
};

export default AppLayout;
