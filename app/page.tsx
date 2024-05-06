'use client';

import dynamic from 'next/dynamic';

const HomePage = dynamic(() => import('@/page-builder/home-page'), {
  loading: () => <> Loading...</>,
});

const name = 'Robin';

export default function Home() {
  return <HomePage />;
}
