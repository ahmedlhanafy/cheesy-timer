import { useEffect, useState } from 'react';
import packageJSON from '../../package.json';

export enum UPDATE_STATUS {
  PENDING,
  UPTODATE,
  NEEDS_UPDATE,
}

type Res = {
  fields: {
    version: {
      stringValue: string;
    };
  };
};

export default (): UPDATE_STATUS => {
  const [state, setState] = useState(UPDATE_STATUS.PENDING);
  useEffect(() => {
    fetch(
      'https://firestore.googleapis.com/v1/projects/cheesy-timer/databases/(default)/documents/data/UKLKseb9Z0N0R8FSUsJC',
    )
      .then(res => res.json())
      .then((res: Res) => {
        if (res.fields.version.stringValue === packageJSON.version) {
          setState(UPDATE_STATUS.UPTODATE);
        } else {
          setState(UPDATE_STATUS.NEEDS_UPDATE);
        }
      });
  }, []);

  return state;
};
