import React, { useEffect } from 'react';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { TargetContext } from './contexts';
import { usePersistentTarget } from './hooks';
import { WindowsTitleBar } from './components';
import usePersistentTheme from './shared/hooks/usePersistentTheme';
import { rendererInit, init as initAnalytics, trackPage } from './utils';
import { Home, Start, MacTutorial } from './pages';

const useAppInitializations = () => {
  useEffect(() => {
    rendererInit();
    if (process.env.NODE_ENV === 'production') {
      initAnalytics(process.env.REACT_APP_ANALYTICS_KEY as string);
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => trackPage('/app'), 60000);

    return () => clearInterval(timer);
  }, []);
};

export const App = () => {
  const [target, setTarget] = usePersistentTarget();
  const [theme, setTheme] = usePersistentTheme();
  useAppInitializations();

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <TargetContext.Provider value={target}>
          <Container>
            <WindowsTitleBar />
            <MacTutorial/>
            <Route path="/home" exact render={() => <Home setTheme={setTheme} />} />
            <Route path="/" exact render={() => <Start target={target} setTarget={setTarget} />} />
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
  display: flex;
`;
