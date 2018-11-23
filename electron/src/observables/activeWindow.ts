// import * as activeWin from 'active-win';
import { Observable } from 'rxjs';
import { mapToWindow, Window } from '../utils';

export const activeWindow$ = Observable.create(obs => {
  new Promise(res => res({ title: 'code', owner: { bundleId: '', name: '' } }))
    .then(window => {
      if (window) {
        obs.next(mapToWindow(window));
      }
      obs.complete();
    })
    .catch(() => obs.complete());
}) as Observable<Window | undefined>;
