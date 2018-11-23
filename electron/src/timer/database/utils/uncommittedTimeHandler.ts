import { Window } from '../../../utils';
import { Observable } from 'rxjs';
import db, { Activity } from '../index';
import { switchMap } from 'rxjs/operators';
import { msToText } from '../../../../../src/shared/utils';
import {
  Button,
  promptDialog as dialog,
} from '../../../observables/promptDialog';

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
      // If the uncommitted time is greater than 10 minutes
      if (dbStore.uncommittedTime > 5 * 60 * 1000) {
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
};
