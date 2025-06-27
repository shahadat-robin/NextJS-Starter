import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

export interface IButtonProps extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'lg' | 'md' | 'sm';
  variant?: 'primary' | 'secondary' | 'transparent';
}
