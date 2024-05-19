'use client';

import Typography from '@/components/typography';
import type { FC } from 'react';

const HomePage: FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Typography variant="h1">Hello World</Typography>
        <Typography variant="h2">Hello World</Typography>
        <Typography variant="h3">Hello World</Typography>
        <Typography variant="h4">Hello World</Typography>
        <Typography variant="h5">Hello World</Typography>
        <Typography variant="h6">Hello World</Typography>
      </div>
    </main>
  );
};

export default HomePage;
