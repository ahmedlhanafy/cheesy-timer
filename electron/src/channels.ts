import { ipcMain, BrowserWindow, app } from 'electron';
import { Message } from '../../src/shared/channels';
import { database, start } from './timer/main';
import { DatabaseStore } from '../../src/shared/database';
import { Subscription } from 'rxjs';
import * as autoLaunch from './autoLaunch';
import { first, tap } from 'rxjs/operators';
import * as electronStorage from 'electron-json-storage';

export const init = (window: Electron.BrowserWindow) => {
  let appStartSubscription: Subscription;

  ipcMain.on(Message.START_TIMER, () => {
    if (appStartSubscription) return;
    appStartSubscription = start().subscribe();
  });

  database.onChange(sendDB(window));

  ipcMain.on(Message.RENDERER_INIT, () => {
    sendPlatform(window);
    electronStorage.get('version', function(error, { version }: any) {
      window.webContents.send(Message.GET_VERSION, version);
    });
  });

  ipcMain.on(Message.SAVE_VERSION, (_, version: string) => {
    electronStorage.set('version', { version }, () => {});
  });

  ipcMain.on(Message.GET_AUTO_LAUNCH_STATUS, () => {
    sendAutoLaunchStatus(window);
  });

  ipcMain.on(Message.RESTART_APP, () => {
    app.relaunch();
    app.exit(0);
  });

  ipcMain.on(Message.OPEN_DETAILS, () => {
    let mainWindow = new BrowserWindow({
      height: 520,
      width: 370,
      resizable: false,
      fullscreen: false,
      titleBarStyle: 'hiddenInset',
      frame: false,
    });

    mainWindow.loadURL('http://localhost:3000/details');

    mainWindow.on('closed', () => {
      mainWindow = null;
    });
  });

  ipcMain.on(Message.CLOSE_APP, () => {
    window.close();
  });

  ipcMain.on(Message.MINIMIZE_APP, () => {
    window.minimize();
  });

  ipcMain.on(Message.STOP_TIMER, () => {
    if (appStartSubscription) {
      appStartSubscription.unsubscribe();
      appStartSubscription = undefined;
    }
    database.reset();
  });

  ipcMain.on(Message.TOGGLE_AUTOLAUNCH, () => {
    autoLaunch.isEnabled$
      .pipe(
        first(),
        tap(val => {
          if (val) {
            autoLaunch.disable();
          } else {
            autoLaunch.enable();
          }
        }),
      )
      .subscribe();
  });
};

const sendAutoLaunchStatus = (window: Electron.BrowserWindow) =>
  autoLaunch.isEnabled$
    .pipe(
      first(),
      tap(val => {
        window.webContents.send(Message.AUTO_LAUNCH_STATUS, val);
      }),
    )
    .subscribe();

const sendPlatform = (window: Electron.BrowserWindow) => window.webContents.send(Message.PLATFORM, process.platform);

const sendDB = (window: Electron.BrowserWindow) => (db: DatabaseStore) => window.webContents.send(Message.DATABASE_READ, db);
