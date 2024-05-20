'use client';

import type { FC, PropsWithChildren } from 'react';
import AppHeader from './header';

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <AppHeader />
      <main className="p-5">{children}</main>
    </>
  );
};

export default AppLayout;
