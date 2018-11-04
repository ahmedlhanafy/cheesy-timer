const { ipcRenderer } = (window as any).require('electron');

export default () => ipcRenderer.send('startProgram', {});
