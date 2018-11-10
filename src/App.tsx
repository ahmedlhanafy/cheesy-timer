import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import fullpage from 'fullpage.js';
import { Main, Stats, Start, Settings } from './pages';
import { startProgram } from './utils';
import { TargetContext } from './contexts';
import { usePersistentTarget } from './hooks';
import usePersistentTheme from './hooks/usePersistentTheme';

const App = () => {
  const elementId = 'main';
  const [target, setTarget] = usePersistentTarget();
  const [theme, setTheme] = usePersistentTheme();
  const [programStarted, setProgramStarted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      new fullpage(`#${elementId}`, {
        //options here
        // autoScrolling: true,
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        touchSensitivity: 1
      });
      console.log('hey')
    }, 100)
  }, [programStarted]);

  const startApp = () => {
    startProgram();
    setProgramStarted(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <TargetContext.Provider value={target}>
        <Container>
          <Overlay />
          <Header />
          {programStarted ? (
            <div id={elementId}>
              <Main />
              <Stats />
              <Settings setTheme={setTheme} />
            </div>
          ) : (
            <Start target={target} setTarget={setTarget} onStart={startApp} />
          )}
        </Container>
      </TargetContext.Provider>
    </ThemeProvider>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  /* overflow-y: scroll; */
  background-color: ${props => props.theme.backgroundColor};
`;

const Overlay = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Header = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 44px;
  -webkit-app-region: drag;
`;

export default App;
