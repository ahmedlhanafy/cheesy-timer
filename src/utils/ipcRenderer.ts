// import { ipcRenderer as ipc } from 'electron';

// export const { ipcRenderer }: { ipcRenderer: typeof ipc } = global as any;
export const ipcRenderer: any = { on: () => {}, removeListener: () => {}, once: () => {}, send: () => {} };
