import 'react-circular-progressbar/dist/styles.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { App } from './App';

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

ReactDOM.render(
  <>
    <App />
    <GlobalStyles />
  </>,
  document.getElementById('root'),
);

