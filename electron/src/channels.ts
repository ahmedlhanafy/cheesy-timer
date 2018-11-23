import { ipcMain } from 'electron';
import { Message } from '../../src/shared/channels';
import { database, start } from './timer';
import { timer } from 'rxjs';
import { tap } from 'rxjs/operators';

export const init = (window: Electron.BrowserWindow) => {
  ipcMain.once(Message.START_PROGRAM, () => {
    start();
  });

  database.onChange(db => {
    window.webContents.send(Message.DATABASE, db);
  });

  timer(500, 200)
    .pipe(
      tap(() => window.webContents.send(Message.PLATFORM, process.platform)),
    )
    .subscribe();
};
