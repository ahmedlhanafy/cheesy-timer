import { PERIOD_TIME } from "./config";

export default (ms: number): [number, number] => [
  Math.floor(ms / (PERIOD_TIME * PERIOD_TIME)),
  Math.floor((ms / PERIOD_TIME) % 60),
];
