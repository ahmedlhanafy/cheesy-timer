import { ipcRenderer as ipc, shell as s } from 'electron';

export const {
  ipcRenderer,
  shell,
}: { ipcRenderer: typeof ipc; shell: typeof s } = global as any;
