import usePersistentState from './usePersistentState';

export default (): [number, (val: number) => void] => {
  return usePersistentState('time_target', 5);
};
