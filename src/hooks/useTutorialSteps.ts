import * as React from 'react';
import Driver from 'driver.js';

type DriverInput = {
  ref: any;
  popover: Driver.PopoverOptions;
};

export default (steps: DriverInput[]): (() => void) => {
  const driver = React.useRef(new Driver({ opacity: 0.4 }));

  React.useLayoutEffect(() => {
    if (steps.reduce((acc, val) => acc && val.ref.current !== null, true)) {
      driver.current.defineSteps(
        steps.reduce(
          (acc, val) => [...acc, { element: val.ref.current, popover: val.popover, stageBackground: 'rgba(103, 103, 103, 0.57)' }],
          [] as Driver.Step[],
        ),
      );
    }
  }, steps.map(({ ref }) => ref));

  return () => {
    driver.current.start();
  };
};
