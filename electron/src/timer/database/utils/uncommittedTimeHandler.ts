import { Window } from '../../../utils';
import { Observable } from 'rxjs';
import db, { Activity } from '../index';
import { switchMap } from 'rxjs/operators';
import { msToText } from '../../../../../src/shared/utils';
import {
  Button,
  promptDialog as dialog,
} from '../../../observables/promptDialog';
import { PERIOD_TIME } from '../../../../../src/shared/utils/config';

export const uncommittedTimeHandler = (
  database: typeof db,
  promptDialog: typeof dialog,
) => ({
  window,
  active,
}: {
  window: Window | undefined;
  active: boolean;
}): Observable<void> => {
  if (!active) {
    return database.save(window, Activity.Uncommited);
  }

  return database.read().pipe(
    switchMap(dbStore => {
      // If the uncommitted time is greater than 5 minutes
      if (dbStore.uncommittedTime > 5 * PERIOD_TIME) {
        return promptDialog(
          `You've been away for ${msToText(
            dbStore.uncommittedTime,
          )}. Should I add this to your focus time?`,
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
};
