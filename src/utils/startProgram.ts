import { Message } from "../shared/channels";

const { ipcRenderer } = (window as any).require('electron');

export default () => ipcRenderer.send(Message.START_PROGRAM, {});
