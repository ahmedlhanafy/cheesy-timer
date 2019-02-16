import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { darkTheme } from '../../../src/shared/hooks';
import GithubCorner from './GithubCornerr';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <>
    <ThemeProvider theme={darkTheme}>
      <Container>
        {children}
        <GithubCorner url="https://github.com/ahmedlhanafy/cheesy-timer" />
      </Container>
    </ThemeProvider>
    <GlobalStyles />
  </>
);

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.backgroundColor};
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0px 16px;
  overflow-x: hidden;
  box-sizing: border-box;
`;

const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Pacifico',"Segoe UI", cursive;
    user-select: none;
    transition: color 0.7s ease-out, background-color 0.7s ease-out;
  }
  body {
    margin: 0px;
    padding: 0px;
  }
`;
export default Layout;
