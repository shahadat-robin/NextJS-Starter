import React, { type PropsWithChildren, type FC } from 'react';

const Button: FC<PropsWithChildren> = ({ children }) => {
  return <button>{children}</button>;
};

export default Button;
