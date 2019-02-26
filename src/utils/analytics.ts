import ua, { Visitor } from 'universal-analytics';
import { MouseEvent, ChangeEvent } from 'react';

let visitor: Visitor;

export const init = (key: string) => {
  visitor = ua(key);
};

export const trackPage = (path: string) => {
  if (visitor) {
    visitor.pageview(path).send();
  }
};

export const trackEvent = ({ category, action }: { category: string; action: string }) => (
  cb?: (event: MouseEvent<HTMLElement> | ChangeEvent<HTMLInputElement>) => void,
) => (event: MouseEvent<HTMLElement> | ChangeEvent<HTMLInputElement>) => {
  if (visitor) {
    visitor.event({ ec: category, ea: action }).send();
  }
  if (cb) {
    cb(event);
  }
};
