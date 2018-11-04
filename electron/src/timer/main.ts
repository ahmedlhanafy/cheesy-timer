import * as activeWin from 'active-win';
import { merge, timer } from 'rxjs';
import { bufferTime, flatMap, tap, throttleTime } from 'rxjs/operators';
import {
  alterDB,
  keyboardKeydownEvents$,
  mapToWindow,
  mouseClickEvents$,
  mouseMovementEvents$,
  PERIOD_TIME,
} from './utils';

const database = {};

const interactivity$ = merge(
  mouseMovementEvents$,
  mouseClickEvents$,
  keyboardKeydownEvents$,
).pipe(throttleTime(PERIOD_TIME));

const app = interactivity$.pipe(
  bufferTime(PERIOD_TIME),
  flatMap(interactivityArr => {
    return new Promise(res => {
      activeWin().then(data =>
        res({
          window: mapToWindow(data),
          active: interactivityArr.length !== 0,
        }),
      );
    });
  }),
  tap(({ window, active }) => {
    alterDB(database)(window.name, active);
    alterDB(database)('all', active);

    if (database['startTime'] === undefined) {
      database['startTime'] = Date.now();
    }
  }),
);

export const start = (sendDatabase: (Object) => void) => {
  app.subscribe();

  timer(0, PERIOD_TIME)
    .pipe(
      tap(() => {
        sendDatabase(database);
      }),
    )
    .subscribe();
};
