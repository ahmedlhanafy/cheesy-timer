import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const Spinner = () => (
  <SpinnerContainer>
    <Dot1 />
    <Dot2 />
  </SpinnerContainer>
);

const SKRotateKeyFrames = keyframes`
100% { transform: rotate(360deg); }
`;

const SKBounceKeyFrames = keyframes`
0%, 100% { 
      transform: scale(0.0);
    } 50% { 
      transform: scale(1.0);
    }
`;

const DotStyle = css`
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0;
  background-color: #a6a6a682;
  border-radius: 100%;

  animation: ${SKBounceKeyFrames} 2s infinite ease-in-out;
`;
const SpinnerContainer = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  text-align: center;

  animation: ${SKRotateKeyFrames} 2s infinite linear;
`;

const Dot2 = styled.div`
  ${DotStyle}
  top: auto;
  bottom: 0;
  animation-delay: -1s;
`;

const Dot1 = styled.div`
  ${DotStyle}
`;

export default Spinner;