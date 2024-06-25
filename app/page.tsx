'use client';

import Loader from '@/components/loader';
import dynamic from 'next/dynamic';

const HomePage = dynamic(() => import('@/page-builder/home-page'), {
  loading: () => <Loader viewport={true} />,
  ssr: false,
});

export default function Home() {
  return <HomePage />;
}
