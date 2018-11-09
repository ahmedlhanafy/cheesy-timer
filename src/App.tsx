import React, { useState } from 'react';
import styled from 'styled-components';
import { Main, Stats, Start } from './pages';
import { startProgram } from './utils';
import { TargetContext } from './contexts';
import { usePersistentTarget } from './hooks';

const App = () => {
  const [target, setTarget] = usePersistentTarget();
  const [programStarted, setProgramStarted] = useState(false);

  const startApp = () => {
    startProgram();
    setProgramStarted(true);
  };

  return (
    <TargetContext.Provider value={target}>
      <Container>
        <Overlay />
        <Header />
        {programStarted ? (
          <>
            <Main />
            <Stats />
          </>
        ) : (
          <Start target={target} setTarget={setTarget} onStart={startApp} />
        )}
      </Container>
    </TargetContext.Provider>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
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
