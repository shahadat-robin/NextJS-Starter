import type { FC, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  size: string;
}

const Button: FC<Props> = ({ children }) => {
  return (
    <button className="Hello world" accessKey="robin">
      {children}
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda ab corrupti laboriosam
      vitae alias natus itaque, facere quam unde sed mollitia saepe libero atque? Voluptate
      similique quas iure tempore vero?
    </button>
  );
};

export default Button;
