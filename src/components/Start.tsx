import React, { useState } from 'react';
import styled from 'styled-components';
import FancyButton from './FancyButton';
import FancyInput from './FancyInput';

const Start = ({ onClick }: { onClick: React.MouseEventHandler }) => {
  const [target, setTarget] = useState('5 hours');
  return (
    <Container>
      <Title>Cheesy Timer 🚀</Title>
      <WelcomeText>Welcome back Ahmed! 🤗</WelcomeText>
      <FancyInput
        value={`${target}`}
        onChange={event => setTarget((event.target as any).value)}
        placeholder="What's your focus target today?"
      />
      <FancyButton onClick={onClick}> 👉🏽 Start 👈🏽 </FancyButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px 20px 0px;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 28px;
  align-self: center;
  color: white;
`;

const WelcomeText = styled.span`
  font-weight: 200;
  font-size: 18px;
  align-self: center;
  color: white;
  position: absolute;
  bottom: 30px;
`;

export default Start;
