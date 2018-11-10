import { merge } from 'rxjs';
import {
  bufferTime,
  flatMap,
  throttleTime,
  switchMap,
  map,
} from 'rxjs/operators';
import { mapToWindow } from '../utils';
import {
  mouseMovementEvents$,
  mouseClickEvents$,
  keyboardKeydownEvents$,
  activeWindow$,
} from '../observables';
import { PERIOD_TIME } from './config';
import db from './database';
import { promptDialog } from '../observables/promptDialog';
import { uncommittedTimeHandler } from './database/utils';

const interactivity$ = merge(
  mouseMovementEvents$,
  mouseClickEvents$,
  keyboardKeydownEvents$,
).pipe(throttleTime(PERIOD_TIME));

const app = interactivity$.pipe(
  bufferTime(PERIOD_TIME),
  flatMap(interactivityArr =>
    activeWindow$.pipe(
      map(window => ({ window, active: interactivityArr.length !== 0 })),
    ),
  ),
  switchMap(uncommittedTimeHandler(db, promptDialog)),
);

export const start = () => {
  app.subscribe();
};

export const database = db;
