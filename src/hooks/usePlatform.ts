import { useEffect, useState } from 'react';
import { Message } from '../shared/channels';

const { ipcRenderer } = (window as any).require('electron');

export default (): NodeJS.Platform | void => {
  const [platform, setPlatform] = useState<NodeJS.Platform | void>(undefined);

  useEffect(() => {
    const callback = (_: any, value: NodeJS.Platform) => {
      setPlatform(value);
    };
    ipcRenderer.once(Message.PLATFORM, callback);

    return () => {
      ipcRenderer.removeListener(Message.PLATFORM, callback);
    };
  }, []);

  return platform;
};
