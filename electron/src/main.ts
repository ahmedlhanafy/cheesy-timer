import { app, BrowserWindow } from 'electron';
import { init as initChannels } from './channels';

let mainWindow: Electron.BrowserWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    maxHeight: 520,
    maxWidth: 400,
    minHeight: 520,
    minWidth: 400,
    height: 520,
    width: 400,
    titleBarStyle: 'hiddenInset',
  });

  mainWindow.loadURL('http://localhost:3000/');

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  initChannels(mainWindow);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  // if (process.platform !== 'darwin') {
  app.quit();
  // }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
