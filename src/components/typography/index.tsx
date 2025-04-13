import { cn } from '@/utils/class-merge';
import type ITypography from './interface';

export default function Typography({ children, variant = 'p', className }: ITypography) {
  const Wrapper = variant;

  return <Wrapper className={cn(className)}>{children}</Wrapper>;
}

Typography.displayName = 'Typography';
