import { ipcRenderer, shell } from 'electron';

process.once('loaded', () => {
  (global as any).ipcRenderer = ipcRenderer;
  (global as any).shell = shell;
});
