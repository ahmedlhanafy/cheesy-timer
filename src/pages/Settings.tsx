import React from 'react';
import styled from 'styled-components';
import { Theme, darkTheme, lightTheme } from '../hooks/usePersistentTheme';

const Settings = ({ setTheme }: { setTheme: (theme: Theme) => void }) => {
  return (
    <div className="section">
      <Container>
        <Title>Settings 🛠</Title>
        <Body>
          <Text>Change Theme</Text>
          <ThemeCircleContainer>
            <ThemeCircle
              onClick={() => setTheme(darkTheme)}
              color={darkTheme.backgroundColor}
            />
            <ThemeCircle
              onClick={() => setTheme(lightTheme)}
              color={lightTheme.backgroundColor}
            />
          </ThemeCircleContainer>
        </Body>
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 28px;
  align-self: center;
  margin: 28px 0px 8px 0px;
  color: ${props => props.theme.primaryTextColor};
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px 16px;
`;

const Text = styled.span`
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

export default Settings;
