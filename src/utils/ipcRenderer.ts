import { ipcRenderer as ipc } from 'electron';

export const { ipcRenderer }: { ipcRenderer: typeof ipc } = global as any;
