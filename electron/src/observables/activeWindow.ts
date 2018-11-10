import * as activeWin from 'active-win';
import { Observable } from 'rxjs';
import { mapToWindow, Window } from '../utils';

export const activeWindow$ = Observable.create(obs => {
  activeWin()
    .then(window => {
      if (window) {
        obs.next(mapToWindow(window));
      }
      obs.complete();
    })
    .catch(() => obs.complete());
}) as Observable<Window | undefined>;
