import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Theme, darkTheme, lightTheme, blueTheme } from '../shared/hooks/usePersistentTheme';
import Page from './Page';
import { FancyLink, ExternalLink } from '../components';
import { useChannel } from '../hooks';
import { Message } from '../shared/channels';
import { toggleAutoLaunch, getAutoLaunchStatus, trackEvent } from '../utils';

export const Settings = ({ setTheme }: { setTheme: (theme: Theme) => void }) => {
  const [status, toggleStatus] = useAutoLaunchStatus();
  const analyticCategory = 'Settings';

  return (
    <Page title="Settings 🛠">
      <SectionHeader>Change Theme</SectionHeader>
      <ThemeCircleContainer>
        <ThemeCircle
          onClick={trackEvent({ category: analyticCategory, action: 'Set theme to dark' })(() => setTheme(darkTheme))}
          color={darkTheme.backgroundColor}
        />
        <ThemeCircle
          onClick={trackEvent({ category: analyticCategory, action: 'set theme to blue' })(() => setTheme(blueTheme))}
          color={blueTheme.backgroundColor}
        />
        <ThemeCircle
          onClick={trackEvent({ category: analyticCategory, action: 'set theme light' })(() => setTheme(lightTheme))}
          color={lightTheme.backgroundColor}
        />
      </ThemeCircleContainer>
      <div>
        <Text>{status ? 'Disable' : 'Enable'} autostart</Text>
        <input
          type="checkbox"
          checked={status}
          onChange={trackEvent({ action: 'toggle auto start', category: analyticCategory })(toggleStatus)}
        />
      </div>
      <FancyLink onClick={trackEvent({ action: 'Start over', category: analyticCategory })()} to="/" style={{ padding: '4px 50px' }}>
        Start Over
      </FancyLink>
      <Space />
      <ExternalLink href="https://github.com/ahmedlhanafy">Made with ❤️ by Ahmed Elhanafy</ExternalLink>
    </Page>
  );
};

const useAutoLaunchStatus = (): [boolean, () => void] => {
  const autoLaunchStatus = useChannel<boolean>(Message.AUTO_LAUNCH_STATUS, false, null);
  const [state, setState] = useState(false);

  useEffect(() => {
    getAutoLaunchStatus();
  }, []);

  useEffect(() => {
    setState(autoLaunchStatus);
  }, [autoLaunchStatus]);

  const toggleState = () => {
    if (state) {
      setState(false);
    } else {
      setState(true);
    }
    toggleAutoLaunch();
  };

  return [state, toggleState];
};

const SectionHeader = styled.span`
  font-weight: 300;
  font-size: 24px;
  color: ${props => props.theme.primaryTextColor};
  margin-bottom: 16px;
`;

const Text = styled(SectionHeader)`
  font-size: 22px;
  margin-right: 16px;
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
