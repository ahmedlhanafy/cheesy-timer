import { Message } from '../shared/channels';

const { ipcRenderer } = (window as any).require('electron');

export const startProgram = () => ipcRenderer.send(Message.START_PROGRAM, {});
export const rendererInit = () => ipcRenderer.send(Message.RENDERER_INIT, {});
export const closeApp = () => ipcRenderer.send(Message.CLOSE_APP, {});
export const minimizeApp = () => ipcRenderer.send(Message.MINIMIZE_APP, {});
