'use client';

import { cn } from '@/utils/class-merge';
import { TERipple } from 'tw-elements-react';
import type { IButtonProps } from './interface';

export default function Button({
  children,
  className,
  size = 'md',
  variant = 'primary',
  disabled = false,
  onClick,
}: IButtonProps) {
  return (
    <TERipple>
      <button
        className={cn(
          {
            'py-3 px-5 text-lg': size === 'lg',
            'py-2 px-4': size === 'md',
            'py-1.5 px-3 text-sm': size === 'sm',
          },
          {
            'bg-primary': variant === 'primary',
            'bg-primary-light': variant === 'secondary',
            'bg-transparent border': variant === 'transparent',
          },
          disabled ? 'disabled:cursor-not-allowed' : 'hover:shadow-md',
          'flex items-center gap-2 rounded transition-all dark:bg-primary',
          className
        )}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    </TERipple>
  );
}

Button.displayName = 'Button';
