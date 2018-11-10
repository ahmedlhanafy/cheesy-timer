import * as activeWin from 'active-win';
import { merge } from 'rxjs';
import { bufferTime, flatMap, tap, throttleTime } from 'rxjs/operators';
import { mapToWindow } from './utils';
import {
  mouseMovementEvents$,
  mouseClickEvents$,
  keyboardKeydownEvents$,
} from './osHooks';
import { PERIOD_TIME } from './config';
import db from './database';

const interactivity$ = merge(
  mouseMovementEvents$,
  mouseClickEvents$,
  keyboardKeydownEvents$,
).pipe(throttleTime(PERIOD_TIME));

const app = interactivity$.pipe(
  bufferTime(PERIOD_TIME),
  flatMap(interactivityArr => {
    return new Promise((res, reject) => {
      activeWin()
        .then(data =>
          res({
            window: mapToWindow(data),
            active: interactivityArr.length !== 0,
          }),
        )
        .catch(reject);
    });
  }),
  tap(({ window, active }) => db.save(window, active)),
);

export const start = () => {
  app.subscribe();
};

export const database = db;
