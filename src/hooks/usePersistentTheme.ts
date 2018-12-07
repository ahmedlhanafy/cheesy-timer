import usePersistentState from './usePersistentState';

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
  isDark: false,
};

export default (): [Theme, (val: Theme) => void] => {
  return usePersistentState('theme', darkTheme);
};
