import { useState } from 'react';

export default <T>(key: string, defaultValue: T): [T, (val: T) => void] => {
  let initialVal: T;
  const persistedVal = localStorage.getItem(key);

  if (persistedVal) {
    initialVal = JSON.parse(persistedVal);
  } else {
    initialVal = defaultValue;
  }

  const [target, setTarget] = useState(initialVal);

  const saveTarget = (val: T) => {
    setTarget(val);
    localStorage.setItem(key, JSON.stringify(val));
  };

  return [target, saveTarget];
};
