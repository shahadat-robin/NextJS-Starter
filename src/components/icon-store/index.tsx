import type { FC } from 'react';
import { ArrowRightLong } from './arrow-icons';
import { IIconProps } from './interface';

const IconStore: FC<IIconProps> = ({ name, ...rest }) => {
  switch (name) {
    case 'arrow-right-long':
      return <ArrowRightLong {...rest} />;
  }
};

export default IconStore;
