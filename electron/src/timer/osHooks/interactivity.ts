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

// Register and start hook
ioHook.start(false);

process.on('exit', () => ioHook.unload());
