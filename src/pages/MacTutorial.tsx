import React, { useRef } from 'react';
import styled, { css } from 'styled-components';
import { FancyLinkStyles } from '../components/FancyLink';
import { restartApp, saveVersion } from '../utils';
import { useChannel } from '../hooks';
import packageJSON from '../../package.json';
import { Message } from '../shared/channels';

export const MacTutorial = () => {
  const newVersion = packageJSON.version;
  const platform = useChannel<NodeJS.Platform>(Message.PLATFORM, true);
  const oldVersion = useChannel<string>(Message.GET_VERSION, true);

  if (platform !== 'darwin') return null;

  if (oldVersion === newVersion) return null;

  const handleClick = () => {
    saveVersion(newVersion);
    setTimeout(() => {
      restartApp();
    }, 200);
  };

  return (
    <Container>
      <H1>Please enable accessibility features!</H1>
      <P>
        In order for the mouse and keyboard tracking to work, accessibility features setting has to be enabled.{' '}
        <Strong>If it's already enabled, disable it and enable it back on.</Strong>
      </P>
      <P>When you're done click on Restart App</P>
      <Button onClick={handleClick}>Restart App</Button>
    </Container>
  );
};

const TextStyles = css`
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', sans-serif;
  color: ${props => props.theme.primaryTextColor};
  text-align: center;
`;

const H1 = styled.h1`
  ${TextStyles}
`;

const P = styled.p`
  ${TextStyles}
`;

const Strong = styled.strong`
  ${TextStyles}
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background-color: ${props => props.theme.backgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;

const Button = styled.button`
  ${FancyLinkStyles}
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans',
    sans-serif;
`;
