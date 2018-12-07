import { ipcMain } from 'electron';
import { Message } from '../../src/shared/channels';
import { database, start } from './timer';
import { DatabaseStore } from '../../src/shared/database';

export const init = (window: Electron.BrowserWindow) => {
  ipcMain.once(Message.START_PROGRAM, () => {
    start();
  });

  database.onChange(sendDB(window));

  ipcMain.on(Message.RENDERER_INIT, () => {
    sendPlatform(window);
  });

  ipcMain.on(Message.CLOSE_APP, () => {
    window.close();
  });

  ipcMain.on(Message.MINIMIZE_APP, () => {
    window.minimize();
  });
};

const sendPlatform = (window: Electron.BrowserWindow) =>
  window.webContents.send(Message.PLATFORM, process.platform);

const sendDB = (window: Electron.BrowserWindow) => (db: DatabaseStore) =>
  window.webContents.send(Message.DATABASE, db);
