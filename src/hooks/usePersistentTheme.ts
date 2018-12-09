import usePersistentState from './usePersistentState';

export type Theme = {
  backgroundColor: string;
  buttonColor: string;
  isDark: boolean;
  primaryTextColor: string;
};

export const darkTheme: Theme = {
  backgroundColor: '#202020',
  buttonColor: '#2ac940',
  isDark: true,
  primaryTextColor: 'white',
};

export const blueTheme: Theme = {
  backgroundColor: '#1a1d29',
  buttonColor: '#F50057',
  isDark: true,
  primaryTextColor: 'white',
};

export const lightTheme: Theme = {
  backgroundColor: '#ffffff',
  buttonColor: '#2ac940',
  isDark: false,
  primaryTextColor: 'rgba(23,23,23,0.9)',
};

export default (): [Theme, (val: Theme) => void] => {
  return usePersistentState('theme', darkTheme);
};
