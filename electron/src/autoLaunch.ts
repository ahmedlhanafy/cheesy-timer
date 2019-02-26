import AutoLaunch = require('auto-launch');
import { from, Observable } from 'rxjs';

const cheesyTimerAutoLaunch = new AutoLaunch({
  name: process.env.DEV ? 'Electron' : 'Cheesy Timer',
});

export const enable = () => cheesyTimerAutoLaunch.enable();
export const disable = () => cheesyTimerAutoLaunch.disable();

export const isEnabled$ = Observable.create(observer => cheesyTimerAutoLaunch.isEnabled().then(e => observer.next(e)));

