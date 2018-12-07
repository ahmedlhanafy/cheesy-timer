import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Main, Stats, Start, Settings } from './pages';
import { startProgram, rendererInit } from './utils';
import { TargetContext } from './contexts';
import { usePersistentTarget, usePagingEffect, usePlatform } from './hooks';
import usePersistentTheme from './hooks/usePersistentTheme';
import { WindowsTitleBar } from './components';

const App = () => {
  const elementId = 'main';
  const [target, setTarget] = usePersistentTarget();
  const [theme, setTheme] = usePersistentTheme();
  const [programStarted, setProgramStarted] = useState(false);
  const platform = usePlatform();
  
  useRendererInitEffect();
  usePagingEffect(programStarted, elementId);

  if (!platform) {
    return null;
  }

  const startApp = () => {
    startProgram();
    setProgramStarted(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <TargetContext.Provider value={target}>
        <Container>
          {platform !== 'darwin' && <WindowsTitleBar />}
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

const useRendererInitEffect = () => {
  useEffect(() => {
    rendererInit();
  }, []);
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
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
