import { useState, MouseEvent } from 'react';

export default (): [
  boolean,
  {
    onMouseEnter: (event: MouseEvent<HTMLDivElement>) => void;
    onMouseLeave: (event: MouseEvent<HTMLDivElement>) => void;
  }
] => {
  const [isHovered, setHover] = useState(false);

  return [
    isHovered,
    { onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false) },
  ];
};
