import { MouseEvent, ChangeEvent } from 'react';

export const init = (key: string) => {
  if (typeof ga === 'function') {
    ga('create', key, 'auto');
  }
};

export const trackPage = (path: string) => {
  if (typeof ga === 'function') {
    ga('send', 'pageview', path);
  }
};

export const trackEvent = ({ category, action }: { category: string; action: string }) => (
  cb?: (event: MouseEvent<HTMLElement> | ChangeEvent<HTMLInputElement>) => void,
) => (event: MouseEvent<HTMLElement> | ChangeEvent<HTMLInputElement>) => {
  if (typeof ga === 'function') {
    ga('send', 'event', { eventCategory: category, eventAction: action });
  }
  if (cb) {
    cb(event);
  }
};
