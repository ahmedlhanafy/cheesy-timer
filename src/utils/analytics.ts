import { MouseEvent, ChangeEvent } from 'react';

export const init = (key: string) => ga('create', key, 'auto');

export const trackPage = (path: string) => ga('send', 'pageview', path);

export const trackEvent = ({ category, action }: { category: string; action: string }) => (
  cb?: (event: MouseEvent<HTMLElement> | ChangeEvent<HTMLInputElement>) => void,
) => (event: MouseEvent<HTMLElement> | ChangeEvent<HTMLInputElement>) => {
  ga('send', 'event', { eventCategory: category, eventAction: action });
  if (cb) {
    cb(event);
  }
};
