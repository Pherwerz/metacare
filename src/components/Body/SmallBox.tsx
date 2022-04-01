import { FC } from 'react';

const SmallBox: FC<{ p: string; h: string }> = ({ p, h }) => {
  return (
    <div>
      <p>{p}</p>
      <h3>{h}</h3>
    </div>
  );
};

export default SmallBox;
