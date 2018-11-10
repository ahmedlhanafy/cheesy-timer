import { dialog } from 'electron';
import { Observable } from 'rxjs';

export enum Button {
  YUP,
  NOPE,
}

export const promptDialog = (message: string): Observable<Button> =>
  Observable.create(obs => {
    const index = dialog.showMessageBox({
      buttons: ['Yup', 'Nope'],
      message,
    });
    console.log(index)
    obs.next(index === 0 ? Button.YUP : Button.NOPE);
    obs.complete();
  });
