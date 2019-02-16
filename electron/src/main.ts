import { app, BrowserWindow, Menu } from 'electron';
import * as path from 'path';
import { init as initChannels } from './channels';

let mainWindow: Electron.BrowserWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    title: 'Cheesy Timer',
    height: 520,
    width: 370,
    resizable: false,
    fullscreen: false,
    titleBarStyle: 'hiddenInset',
    frame: false,
    webPreferences: {
      nodeIntegration: false,
      preload: path.resolve(__dirname, './preload.js'),
    },
  });

  if (process.env.DEV) {
    mainWindow.loadURL('http://localhost:3000/');
  } else {
    mainWindow.loadURL(
      'file://' + path.resolve(__dirname, '../../../../build/index.html'),
    );
  }

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
