import { MouseEvent, ChangeEvent } from 'react';

const track: typeof ga = typeof ga === 'function' ? ga : (() => {}) as any;

export const init = (key: string) => track('create', key, 'auto');

export const trackPage = (path: string) => track('send', 'pageview', path);

export const trackEvent = ({ category, action }: { category: string; action: string }) => (
  cb?: (event: MouseEvent<HTMLElement> | ChangeEvent<HTMLInputElement>) => void,
) => (event: MouseEvent<HTMLElement> | ChangeEvent<HTMLInputElement>) => {
  track('send', 'event', { eventCategory: category, eventAction: action });
  if (cb) {
    cb(event);
  }
};
