import React from 'react';
import styled from 'styled-components';
import {
  Theme,
  darkTheme,
  lightTheme,
  blueTheme,
} from '../hooks/usePersistentTheme';
import Page from './Page';
import { FancyLink, ExternalLink } from '../components';

export const Settings = ({ setTheme }: { setTheme: (theme: Theme) => void }) => {
  return (
    <Page title="Settings 🛠">
      <SectionHeader>Change Theme</SectionHeader>
      <ThemeCircleContainer>
        <ThemeCircle
          onClick={() => setTheme(darkTheme)}
          color={darkTheme.backgroundColor}
        />
        <ThemeCircle
          onClick={() => setTheme(blueTheme)}
          color={blueTheme.backgroundColor}
        />
        <ThemeCircle
          onClick={() => setTheme(lightTheme)}
          color={lightTheme.backgroundColor}
        />
      </ThemeCircleContainer>
      <FancyLink to="/" style={{ padding: '4px 50px' }}>
        Start Over
      </FancyLink>
      <Space />
      <ExternalLink href="https://github.com/ahmedlhanafy">Made with ❤️ by Ahmed Elhanafy</ExternalLink>
    </Page>
  );
};

const SectionHeader = styled.span`
  font-weight: 300;
  font-size: 24px;
  color: ${props => props.theme.primaryTextColor};
  margin-bottom: 16px;
`;

const ThemeCircleContainer = styled.div`
  align-self: center;
  display: flex;
  margin-bottom: 16px;
`;

const ThemeCircle = styled.div`
  margin-right: 16px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${props => props.color};
  border: 1px solid #333333;
  cursor: pointer;
`;

const Space = styled.div`
  flex: 1;
`;

