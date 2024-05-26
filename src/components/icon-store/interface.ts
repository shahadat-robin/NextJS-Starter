import type { ClassValue } from 'clsx';

export type ArrowIcons = 'arrow-right-long' | 'arrow-left-long';

export interface IIconProps {
  name: ArrowIcons;
  className?: ClassValue;
}
