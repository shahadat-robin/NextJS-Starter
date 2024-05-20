import Container from '@/components/container';
import Typography from '@/components/typography';
import type { FC } from 'react';

const HeroSection: FC = () => {
  return (
    <section className="min-h-screen">
      <Container>
        <Typography variant="h1">This is Hero Section</Typography>
      </Container>
    </section>
  );
};

export default HeroSection;
