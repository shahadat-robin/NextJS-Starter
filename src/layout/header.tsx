import Container from '@/components/container';
import Image from 'next/image';
import type { FC } from 'react';

const AppHeader: FC = () => {
  return (
    <header className="border p-5 sticky top-0 bg-white z-50">
      <Container>
        <Image
          src="/next.svg"
          alt="Brand logo"
          width={100}
          height={50}
          className="h-10 cursor-pointer"
        />
      </Container>
    </header>
  );
};

export default AppHeader;
