import { useState } from 'react';

const usePersistentTarget = (): [number, (val: number) => void] => {
  const localStorageKey = 'time_target';
  const initialVal = localStorage.getItem(localStorageKey) || '5';

  const [target, setTarget] = useState(parseInt(initialVal, 10));

  const saveTarget = (val: number) => {
    setTarget(val);
    localStorage.setItem(localStorageKey, `${val}`);
  };

  return [target, saveTarget];
};

export default usePersistentTarget;