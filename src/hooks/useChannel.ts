import { useEffect, useState } from 'react';
import { Message } from '../shared/channels';
import { ipcRenderer } from '../utils';

export default <T>(channelKey: Message, once: boolean, defaultVal?: any): T => {
  const [val, setVal] = useState<T>(defaultVal);

  useEffect(() => {
    const callback = (_: any, value: T) => {
      setVal(value);
    };
    if(once){
      ipcRenderer.once(channelKey, callback);
    }else{
      ipcRenderer.on(channelKey, callback);
    }
    
    return () => {
      ipcRenderer.removeListener(channelKey, callback);
    };
  }, []);

  return val;
};
