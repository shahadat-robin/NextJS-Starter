import { cn } from '@/utils/class-merge';
import type { FC } from 'react';
import type { IIconProps } from './interface';

export const ArrowRightLong: FC<Omit<IIconProps, 'name'>> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    width="1em"
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth={1.5}
    stroke="currentColor"
    className={cn(className)}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
    />
  </svg>
);
