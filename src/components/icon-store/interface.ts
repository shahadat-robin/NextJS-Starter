import type { ClassValue } from 'clsx';

export type ArrowIcons = 'arrow-right-long' | 'arrow-left-long';
export type WeatherIcons = 'moon' | 'sun';

export interface IIconProps {
  name: ArrowIcons | WeatherIcons;
  className?: ClassValue;
  onClick?: () => void;
}
