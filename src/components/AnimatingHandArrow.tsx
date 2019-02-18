import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import arrowIcon from '../icons/emoji/down-arrow.png';
import { useToggleState } from '../hooks';

const VerticalAnimationKeyFrames = keyframes`
    0% {
        transform: translateY(-4px)
    }

    100% {
        transform: translateY(4px)
    }
`;

const AnimatingHandArrowContainer = styled.img`
  text-align: center;
  position: absolute;
  right: 40px;
  bottom: 16px;
  width: 30px;
  height: 30px;
  animation: ${VerticalAnimationKeyFrames} 800ms ease-in-out infinite;
`;

export const AnimatingHandArrow = () => {
  const [displayed, toggleDisplay] = useToggleState(true);

  useEffect(() => {
    const timer = setTimeout(() => toggleDisplay(), 20000);

    return () => clearTimeout(timer);
  }, []);

  return displayed ? <AnimatingHandArrowContainer src={arrowIcon} /> : null;
};
