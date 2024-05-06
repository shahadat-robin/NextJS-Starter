'use client';

import dynamic from 'next/dynamic';

const HomePage = dynamic(() => import('@/page-builder/home-page'), {
  loading: () => <> Loading...</>,
});

export default function Home() {
  return <HomePage />;
}
