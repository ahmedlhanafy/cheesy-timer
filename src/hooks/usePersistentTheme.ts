import { useState } from 'react';

export type Theme = {
  backgroundColor: string;
  primaryTextColor: string;
  isDark: boolean;
};

export const darkTheme: Theme = {
  backgroundColor: '#202020',
  primaryTextColor: 'white',
  isDark: true,
};

export const lightTheme: Theme = {
  backgroundColor: '#ffffff',
  primaryTextColor: 'rgba(23,23,23,0.9)',
  isDark: true,
};

const usePersistentTheme = (): [Theme, (val: Theme) => void] => {
  const localStorageKey = 'theme';
  const persistedTheme = localStorage.getItem(localStorageKey);
  const [theme, setTheme] = useState(
    persistedTheme ? JSON.parse(persistedTheme) : darkTheme,
  );

  const saveTheme = (val: Theme) => {
    setTheme(val);
    localStorage.setItem(localStorageKey, JSON.stringify(val));
  };

  return [theme, saveTheme];
};

export default usePersistentTheme;
