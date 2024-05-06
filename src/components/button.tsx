import React, { type PropsWithChildren, type FC } from 'react';

const Button: FC<PropsWithChildren> = ({ children }) => {
  console.log('Button component');

  return <button>{children}</button>;
};

export default Button;
