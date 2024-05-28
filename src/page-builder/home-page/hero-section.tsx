import Button from '@/components/button';
import Container from '@/components/container';
import IconStore from '@/components/icon-store';
import Typography from '@/components/typography';
import { cn } from '@/utils/class-merge';
import type { FC } from 'react';
import type { ISection } from '../interface';

const HeroSection: FC<ISection> = ({ navbarHeight }) => {
  return (
    <section
      className={cn('flex bg-secondary dark:bg-dark')}
      style={{ minHeight: `calc(100vh - ${navbarHeight}px)` }}
    >
      <Container className="flex items-center justify-center">
        <div className="text-center space-y-5">
          <Typography variant="h1">This is Hero Section</Typography>
          <Typography className="lg:w-3/5 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fuga culpa ea velit
            tempore libero ullam natus ipsa architecto iusto porro inventore unde deleniti quibusdam
            accusantium, ad error, beatae adipisci?
          </Typography>

          <Button
            variant="secondary"
            className="border border-primary text-primary dark:text-white"
          >
            Explore <IconStore name="arrow-right-long" className="text-xl" />
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
