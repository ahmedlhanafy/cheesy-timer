import React, { useState } from 'react';
import styled from 'styled-components';
import { Main, Stats, Start } from './pages';
import { startProgram } from './utils';

const App = () => {
  const [programStarted, setProgramStarted] = useState(false);

  const startApp = () => {
    startProgram();
    setProgramStarted(true);
  };

  return (
    <Container>
      <Overlay />
      <Header />
      {programStarted ? (
        <>
          <Main />
          {/* <Stats /> */}
        </>
      ) : (
        <Start onClick={startApp} />
      )}
    </Container>
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
  background-color: #171926;
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
