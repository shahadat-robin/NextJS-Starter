import type { FC, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  size: string;
}

const Button: FC<Props> = ({ children }) => {
  return <button className="Hell">{children}</button>;
};

export default Button;
