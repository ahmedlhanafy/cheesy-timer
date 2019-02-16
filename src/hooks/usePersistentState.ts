import { useState } from 'react';

export default <T>(key: string, defaultValue: T): [T, (val: T) => void] => {
  const [target, setTarget] = useState(() => {
    const persistedVal = localStorage.getItem(key);

    if (persistedVal) {
      return JSON.parse(persistedVal);
    } else {
      return defaultValue;
    }
  });

  const saveTarget = (val: T) => {
    setTarget(val);
    localStorage.setItem(key, JSON.stringify(val));
  };

  return [target, saveTarget];
};
