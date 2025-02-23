import { cn } from '@/utils/class-merge';
import type ITypography from './interface';

export default function Typography({ children, variant = 'p1', className }: ITypography) {
  const Wrapper = variant === 'p1' || variant === 'p2' ? 'p' : variant;

  return (
    <Wrapper
      className={cn(
        'text-base',
        {
          'text-6xl font-semibold': variant === 'h1',
          'text-3xl font-medium': variant === 'h2',
          'text-xl font-medium': variant === 'h3',
          'text-lg font-medium': variant === 'h4',
          'text-base font-medium': variant === 'h5',
          'text-sm font-medium': variant === 'h6',
          'text-sm': variant === 'p2',
        },
        className
      )}
    >
      {children}
    </Wrapper>
  );
}

Typography.displayName = 'Typography';
