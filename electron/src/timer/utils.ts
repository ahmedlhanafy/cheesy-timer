import * as ioHook from 'iohook';
import { Observable } from 'rxjs';

export const PERIOD_TIME = 3000;

export type Window = {
  title: string;
  name: string;
  bundleId: string;
};

export const convertToMinutes = (obj: Object): Object => {
  const newObj = {};
  Object.keys(obj).forEach(key => {
    const value = obj[key];
    newObj[key] = {
      focus: `${value.focus}`,
      unfocus: `${value.unfocus}`,
    };
  });

  return newObj;
};

export const alterDB = (db: object) => (name: string, active: boolean) => {
  if (db[name]) {
    if (active) {
      db[name].focus = (db[name].focus || 0) + 60 * 60 * 1000;
    } else {
      db[name].unfocus = (db[name].unfocus || 0) + 60 * 60 * 1000;
    }
  } else {
    db[name] = {
      focus: 0,
      unfocus: 0,
    };
    if (active) {
      db[name].focus = 60 * 60 * 1000;
    } else {
      db[name].unfocus = 60 * 60 * 1000;
    }
  }
};

export const mapToWindow = ({
  title,
  owner: { bundleId, name },
}: any): Window => ({
  title,
  bundleId,
  name,
});

export const mouseMovementEvents$ = Observable.create(obs => {
  const listener = event => {
    obs.next(event);
  };
  ioHook.on('mousemove', listener);

  return () => {
    ioHook.removeListener('mousemove', listener);
  };
});

export const mouseClickEvents$ = Observable.create(obs => {
  const listener = event => {
    obs.next(event);
  };
  ioHook.on('mouseclick', listener);

  return () => {
    ioHook.removeListener('mouseclick', listener);
  };
});

export const keyboardKeydownEvents$ = Observable.create(obs => {
  const listener = event => {
    obs.next(event);
  };

  ioHook.on('keydown', listener);

  return () => {
    ioHook.removeListener('keydown', listener);
  };
});

// Register and start hook
ioHook.start(false);
