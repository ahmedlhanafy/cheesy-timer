import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import 'react-circular-progressbar/dist/styles.css';

const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Pacifico', cursive;
    user-select: none;
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
