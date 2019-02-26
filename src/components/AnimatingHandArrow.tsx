import React, { useEffect, MouseEvent, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import arrowIcon from '../icons/emoji/down-arrow.png';
import usePersistentState from '../hooks/usePersistentState';

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

export const AnimatingHandArrow = ({ onClick }: { onClick: (event: MouseEvent<HTMLImageElement>) => void }) => {
  const [viewedBefore, setViewedBefore] = usePersistentState('viewed_before', false);

  useEffect(() => {
    const timer = setTimeout(() => setViewedBefore(true), 20000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = (event: MouseEvent<HTMLImageElement>) => {
    setViewedBefore(true);
    onClick(event);
  }

  return !viewedBefore ? <AnimatingHandArrowContainer onClick={handleClick} src={arrowIcon} /> : null;
};
