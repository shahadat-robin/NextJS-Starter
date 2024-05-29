import type { FC } from 'react';
import { ArrowRightLong } from './arrow-icons';
import type { IIconProps } from './interface';
import { MoonIcon, SunIcon } from './weather-icons';

const IconStore: FC<IIconProps> = ({ name, ...rest }) => {
  switch (name) {
    // arrow icons
    case 'arrow-right-long':
      return <ArrowRightLong {...rest} />;

    // weather icons
    case 'sun':
      return <SunIcon {...rest} />;
    case 'moon':
      return <MoonIcon {...rest} />;
  }
};

export default IconStore;
