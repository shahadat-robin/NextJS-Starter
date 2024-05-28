import { cn } from '@/utils/class-merge';
import type { FC } from 'react';
import { TERipple } from 'tw-elements-react';
import type { IButtonProps } from './interface';

const Button: FC<IButtonProps> = ({
  children,
  className,
  size = 'md',
  variant = 'primary',
  disabled = false,
}) => (
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
          'bg-secondary': variant === 'secondary',
          'bg-transparent border': variant === 'transparent',
        },
        disabled ? 'disabled:cursor-not-allowed' : 'hover:shadow-md',
        'flex items-center gap-2 rounded transition-all',
        className
      )}
      disabled={disabled}
    >
      {children}
    </button>
  </TERipple>
);

export default Button;
