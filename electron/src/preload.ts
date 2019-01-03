import { ipcRenderer } from 'electron';

process.once('loaded', () => {
  (global as any).ipcRenderer = ipcRenderer;
});
