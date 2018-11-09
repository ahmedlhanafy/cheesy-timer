import { app, BrowserWindow } from 'electron';
import { init as initChannels } from './channels';

let mainWindow: Electron.BrowserWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    maxHeight: 520,
    maxWidth: 370,
    minHeight: 520,
    minWidth: 370,
    height: 520,
    width: 370,
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
