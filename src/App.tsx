import React, { useEffect } from 'react';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { TargetContext } from './contexts';
import { usePersistentTarget } from './hooks';
import { WindowsTitleBar } from './components';
import usePersistentTheme from './hooks/usePersistentTheme';
import { rendererInit, resetTimer } from './utils';
import { Home, Start } from './pages';

export const App = () => {
  const [target, setTarget] = usePersistentTarget();
  const [theme, setTheme] = usePersistentTheme();

  useEffect(() => {
    rendererInit();
  }, []);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <TargetContext.Provider value={target}>
          <Container>
            <WindowsTitleBar />
            <Route
              path="/home"
              exact
              render={() => <Home setTheme={setTheme} />}
            />
            <Route
              path="/"
              render={() => <Start target={target} setTarget={setTarget} />}
            />
          </Container>
        </TargetContext.Provider>
      </ThemeProvider>
    </Router>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.backgroundColor};
`;
