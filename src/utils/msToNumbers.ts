export default (ms: number): [number, number] => [
  Math.floor(ms / 3.6e6),
  Math.floor((ms / 60000) % 60),
];
