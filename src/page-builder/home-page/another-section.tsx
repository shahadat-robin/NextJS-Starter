import Container from '@/components/container';
import Typography from '@/components/typography';
import type { FC } from 'react';

const AnotherSection: FC = () => {
  return (
    <section className="min-h-screen flex">
      <Container className="py-10 text-center">
        <Typography variant="h2">This is another section</Typography>
      </Container>
    </section>
  );
};

export default AnotherSection;
