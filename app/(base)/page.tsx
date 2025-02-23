import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import HeroSection from './sub-components/hero-section';

const AnotherSection = dynamic(() => import('./sub-components/another-section'), { ssr: false });

const HomePage: NextPage = () => (
  <>
    <HeroSection />
    <AnotherSection />
    <AnotherSection />
    <AnotherSection />
  </>
);

export default HomePage;
