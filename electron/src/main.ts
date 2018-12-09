import { app, BrowserWindow } from 'electron';
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
  });

  mainWindow.loadURL('http://localhost:3000/start');

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
