import type { FC } from 'react';

const Loader: FC = () => {
  return (
    <section className="flex items-center justify-center relative py-10 h-full bg-secondary flex-grow">
      <span className="relative flex h-10 w-10">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
        <span className="relative inline-flex rounded-full h-full w-full bg-primary"></span>
      </span>
    </section>
  );
};

export default Loader;
