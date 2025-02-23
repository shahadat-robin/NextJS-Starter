import { cn } from '@/utils/class-merge';
import type { ILoadingState } from './interface';

export default function Loader({ viewport }: ILoadingState) {
  return (
    <section
      className={cn(
        'flex items-center justify-center relative py-10 h-full flex-grow',
        viewport && 'h-screen absolute inset-0'
      )}
    >
      <span className="relative flex h-10 w-10">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
        <span className="relative inline-flex rounded-full h-full w-full bg-primary"></span>
      </span>
    </section>
  );
}

Loader.displayName = 'Loader';
