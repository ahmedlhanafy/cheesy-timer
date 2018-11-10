import * as activeWin from 'active-win';
import { merge } from 'rxjs';
import { bufferTime, flatMap, throttleTime, switchMap } from 'rxjs/operators';
import { mapToWindow } from './utils';
import {
  mouseMovementEvents$,
  mouseClickEvents$,
  keyboardKeydownEvents$,
} from './osHooks';
import { PERIOD_TIME } from './config';
import db, { Activity } from './database';
import { promptDialog, Button } from '../promptDialog';
import { msToText } from '../../../src/shared/utils';

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
  switchMap(({ window, active }) => {
    if (!active) {
      return database.save(window, Activity.Uncommited);
    }

    return database.read().pipe(
      switchMap(dbStore => {
        // If the uncommitted time is greater than 10 minutes
        if (dbStore.uncommittedTime > 10 * 60 * 1000) {
          return promptDialog(
            `Do you want to add ${msToText(
              dbStore.uncommittedTime,
            )} to your focus time?`,
          ).pipe(
            switchMap(button => {
              if (button === Button.YUP) {
                database.saveUncommittedTime();
              } else {
                database.flushUncommittedTime();
              }
              return database.save(window, Activity.Active);
            }),
          );
        } else {
          database.flushUncommittedTime();
          return database.save(window, Activity.Active);
        }
      }),
    );
  }),
);

export const start = () => {
  app.subscribe();
};

export const database = db;
