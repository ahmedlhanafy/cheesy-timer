import * as ioHook from 'iohook';
import { Observable } from 'rxjs';

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

export const mouseWheelEvents$ = Observable.create(obs => {
  const listener = event => {
    obs.next(event);
  }

  ioHook.on('mousewheel', listener);

  return () => {
    ioHook.removeListener('mousewheel', listener);
  };
});

process.on('exit', () => ioHook.unload());
