import { ipcMain } from 'electron';
import { Message } from '../../src/shared/channels';
import { database, start } from './timer';

export const init = (window: Electron.BrowserWindow) => {
  ipcMain.once(Message.START_PROGRAM, () => {
    start();
  });

  database.onChange(db => {
    window.webContents.send(Message.DATABASE, db);
  });
};
