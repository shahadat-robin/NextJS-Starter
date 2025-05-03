import type { NextPage } from 'next';
import AnotherSection from './sub-components/another-section';
import CardGridLayoutSection from './sub-components/card-grid';
import HeroSection from './sub-components/hero-section';
import ImageMasking from './sub-components/mask-image';

const HomePage: NextPage = () => (
  <>
    <HeroSection />
    <CardGridLayoutSection />
    <ImageMasking />
    <AnotherSection />
  </>
);

export default HomePage;
