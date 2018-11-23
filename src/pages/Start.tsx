import React from 'react';
import styled from 'styled-components';
import { FancyButton, FancyNumberInput } from '../components';
import rocketIcon from '../icons/emoji/rocket.png';

type Props = {
  target: number;
  setTarget: (target: number) => void;
  onStart: () => void;
};

const Start = ({ onStart, target, setTarget }: Props) => {
  return (
    <Container>
      <Title>
        Cheesy Timer <Icon src={rocketIcon} />
      </Title>
      <FancyNumberInput
        value={`${target}`}
        onChange={event => setTarget((event.target as any).value)}
        placeholder="What's your focus target today?"
      />
      <FancyButton onClick={() => onStart()}> Start </FancyButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px 20px 0px;
`;

const Icon = styled.img`
  width: 32px;
  height: 32px;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 28px;
  align-self: center;
  color: ${props => props.theme.primaryTextColor};
`;

export default Start;
