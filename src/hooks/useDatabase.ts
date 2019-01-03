import { useEffect, useState } from 'react';
import { Message } from '../shared/channels';
import { DatabaseStore, inititalDatabaseStore } from '../shared/database';
import { ipcRenderer } from '../utils';

export default (): DatabaseStore => {
  const [database, setDatabase] = useState(inititalDatabaseStore);

  useEffect(() => {
    const callback = (_: any, value: DatabaseStore) => {
      setDatabase(value);
    };
    ipcRenderer.on(Message.DATABASE_READ, callback);

    return () => {
      ipcRenderer.removeListener(Message.DATABASE_READ, callback);
    };
  }, []);

  return database;
};
