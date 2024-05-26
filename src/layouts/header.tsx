import Button from '@/components/button';
import Container from '@/components/container';
import Image from 'next/image';
import type { FC } from 'react';

const AppHeader: FC = () => {
  return (
    <header className="p-5 sticky top-0 bg-primary z-50">
      <Container className="flex items-center justify-between">
        <Image
          src="/next.svg"
          alt="Brand logo"
          width={100}
          height={50}
          className="h-10 cursor-pointer"
        />
        <Button variant="secondary">Explore</Button>
      </Container>
    </header>
  );
};

export default AppHeader;
