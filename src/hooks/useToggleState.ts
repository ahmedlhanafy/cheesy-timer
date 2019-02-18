import { useState } from 'react';

export default (initialVal: boolean): [boolean, () => void] => {
  const [state, setState] = useState(initialVal);

  return [
    state,
    () => {
      setState(innerState => !innerState);
    },
  ];
};
