import { Message } from '../shared/channels';
import { ipcRenderer } from './electronAPIs';

export const startTimer = () => ipcRenderer.send(Message.START_TIMER, {});
export const rendererInit = () => ipcRenderer.send(Message.RENDERER_INIT, {});
export const closeApp = () => ipcRenderer.send(Message.CLOSE_APP, {});
export const minimizeApp = () => ipcRenderer.send(Message.MINIMIZE_APP, {});
export const resetTimer = () => ipcRenderer.send(Message.STOP_TIMER, {});
export const openDetails = () => ipcRenderer.send(Message.OPEN_DETAILS, {});
export const toggleAutoLaunch = () => ipcRenderer.send(Message.TOGGLE_AUTOLAUNCH, {});
export const getAutoLaunchStatus = () => ipcRenderer.send(Message.GET_AUTO_LAUNCH_STATUS, {});
