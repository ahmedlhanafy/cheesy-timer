import { useLayoutEffect } from 'react';
import fullpage from 'fullpage.js';

export default (enabled: boolean, elementId: string) => {
  useLayoutEffect(
    () => {
      if (enabled) {
        new fullpage(`#${elementId}`, {
          licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
          touchSensitivity: 1,
        });
      }
    },
    [enabled],
  );
};
