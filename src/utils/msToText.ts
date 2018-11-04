import msToNumbers from './msToNumbers';

export default (ms: number): string => {
  const [hours, minutes] = msToNumbers(ms);
  return `${hours} hours & ${minutes} mins`;
};
