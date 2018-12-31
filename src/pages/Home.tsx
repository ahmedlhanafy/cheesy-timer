import React from 'react';
import { useEffect } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { startTimer } from '../utils';
import { Theme } from '../hooks/usePersistentTheme';
import { Main } from './Main';
import { Stats } from './Stats';
import { Settings } from './Settings';

export const Home = ({ setTheme }: { setTheme: (theme: Theme) => void }) => {
  useEffect(() => {
    startTimer();
  }, []);

  return (
    <ReactFullpage
      licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
      touchSensitivity={1}
      render={() => (
        <>
          <Main />
          {/* <Stats /> */}
          <Settings setTheme={setTheme} />
        </>
      )}
    />
  );
};
