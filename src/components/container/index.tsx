import { cn } from '@/utils/class-merge';
import { forwardRef } from 'react';
import type { IContainerProps } from './interface';

const Container = forwardRef<HTMLDivElement, IContainerProps>(({ children, className }, ref) => (
  <div ref={ref} className={cn('container', className)}>
    {children}
  </div>
));

Container.displayName = 'Container';

export default Container;
