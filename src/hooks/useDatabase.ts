import { useEffect, useState } from 'react';

const { ipcRenderer } = (window as any).require('electron');

export default (): any => {
  const [database, setDatabase] = useState({});

  useEffect(() => {
    const key = 'database';
    const callback = (sender: any, value: any) => {
      setDatabase(value);
    };
    ipcRenderer.on(key, callback);

    return () => {
      ipcRenderer.removeListener(key, callback);
    };
  });

  return database;
};
