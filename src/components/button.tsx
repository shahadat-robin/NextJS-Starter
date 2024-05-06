import type { FC, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  size: any;
}

const Button: FC<Props> = ({ children }) => {
  return <button>{children}</button>;
};

export default Button;
