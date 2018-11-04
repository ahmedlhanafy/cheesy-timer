
const DATABASE = 'database';

export const sendDatabase = (window: Electron.BrowserWindow) => (
  database: Object,
) => {
  window.webContents.send(DATABASE, database);
};


