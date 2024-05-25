import Container from '@/components/container';
import Typography from '@/components/typography';
import { cn } from '@/utils/class-merge';
import type { FC } from 'react';
import type { ISection } from '../interface';

const HeroSection: FC<ISection> = ({ navbarHeight }) => {
  return (
    <section
      className={cn('flex bg-secondary')}
      style={{ minHeight: `calc(100vh - ${navbarHeight}px)` }}
    >
      <Container className="flex items-center justify-center">
        <div className="">
          <Typography variant="h1">This is Hero Section</Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fuga culpa ea velit
            tempore libero ullam natus ipsa architecto iusto porro inventore unde deleniti quibusdam
            accusantium, ad error, beatae adipisci?
          </Typography>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
