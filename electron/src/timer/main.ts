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
  mouseWheelEvents$,
} from '../observables';
import { PERIOD_TIME } from '../../../src/shared/utils/config';
import db from './database';
import { promptDialog } from '../observables/promptDialog';
import { uncommittedTimeHandler } from './database/utils';
import * as iohook from 'iohook';

const interactivity$ = merge(
  mouseMovementEvents$,
  mouseClickEvents$,
  keyboardKeydownEvents$,
  mouseWheelEvents$
).pipe(throttleTime(PERIOD_TIME));

export const start = () => {
  // Register and start hook
  iohook.start(false);
  db.saveStartTime();

  return interactivity$.pipe(
    bufferTime(PERIOD_TIME),
    flatMap(interactivityArr =>
      activeWindow$.pipe(
        map(window => ({ window, active: interactivityArr.length !== 0 })),
      ),
    ),
    switchMap(uncommittedTimeHandler(db, promptDialog)),
  );
};

export const database = db;
