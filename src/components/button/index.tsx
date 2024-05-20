import { cn } from '@/utils/class-merge';
import type { FC } from 'react';
import type { IButtonProps } from './interface';

const Button: FC<IButtonProps> = ({ children, className }) => (
  <button className={cn(className)}>{children}</button>
);

export default Button;
