'use client';

import dynamic from 'next/dynamic';
import type { FC } from 'react';

const HeroSection = dynamic(() => import('./hero-section'), { ssr: false });
const AnotherSection = dynamic(() => import('./another-section'), { ssr: false });

const HomePage: FC = () => {
  const navbar = document.getElementsByTagName('header')[0];
  const navbarHeight = navbar.offsetHeight || 0;

  return (
    <>
      <HeroSection navbarHeight={navbarHeight} />
      <AnotherSection />
      <AnotherSection />
      <AnotherSection />
    </>
  );
};

export default HomePage;
