import type { ClassValue } from 'clsx';
import type { PropsWithChildren } from 'react';

export interface IButtonProps extends PropsWithChildren {
  className?: ClassValue;
  size?: 'lg' | 'md' | 'sm';
  variant?: 'primary' | 'secondary' | 'transparent';
  disabled?: boolean;
}
