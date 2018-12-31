import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';
import { init as initChannels } from './channels';

let mainWindow: Electron.BrowserWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    height: 520,
    width: 370,
    resizable: false,
    fullscreen: false,
    titleBarStyle: 'hiddenInset',
    frame: false,
    webPreferences: {
      nodeIntegration: false,
    },
  });

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, '../../../../build/index.html'),
      protocol: 'file:',
      slashes: true,
    }),
  );
  // mainWindow.loadURL('http://localhost:3000/start');

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  initChannels(mainWindow);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  app.quit();
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
