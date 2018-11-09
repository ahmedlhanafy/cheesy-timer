import { useEffect, useState } from 'react';
import { Message } from '../shared/channels';
import { DatabaseStore } from '../shared/database';

const { ipcRenderer } = (window as any).require('electron');

export default (): any => {
  const [database, setDatabase] = useState({});

  useEffect(() => {
    const callback = (_: any, value: DatabaseStore) => {
      setDatabase(value);
    };
    ipcRenderer.on(Message.DATABASE, callback);

    return () => {
      ipcRenderer.removeListener(Message.DATABASE, callback);
    };
  }, []);

  return database;
};
