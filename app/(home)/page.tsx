import type { NextPage } from 'next';
import AnotherSection from './sub-components/another-section';
import CardGridLayoutSection from './sub-components/card-grid';
import HeroSection from './sub-components/hero-section';

const HomePage: NextPage = () => (
  <>
    <HeroSection />
    <CardGridLayoutSection />
    <AnotherSection />
    <AnotherSection />
  </>
);

export default HomePage;
