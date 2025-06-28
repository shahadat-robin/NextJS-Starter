import { cn } from '@/utils/class-merge';
import { ArrowRightLong } from './arrow-icons';
import type { IIconProps } from './interface';
import { MoonIcon, SunIcon } from './weather-icons';

function IconStore({ name }: Pick<IIconProps, 'name'>) {
  switch (name) {
    // arrow icons
    case 'arrow-right-long':
      return <ArrowRightLong />;

    // weather icons
    case 'sun':
      return <SunIcon />;
    case 'moon':
      return <MoonIcon />;
  }
}

export default function Icon({ name, className, ...rest }: IIconProps) {
  return (
    <span className={cn(className)} {...rest}>
      <IconStore name={name} />
    </span>
  );
}
