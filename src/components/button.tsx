import type { FC, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  size: string;
}

const Button: FC<Props> = ({ children }) => {
  return <button className="">{children}</button>;
};

export default Button;
