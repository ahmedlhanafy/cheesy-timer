import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FancyLink, FancyNumberInput } from '../components';
import rocketIcon from '../icons/emoji/rocket.png';
import { resetTimer } from '../utils';

type Props = {
  target: number;
  setTarget: (target: number) => void;
};

export const Start = ({ target, setTarget }: Props) => {
  useEffect(() => {
    resetTimer();
  }, []);

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
      <FancyLink to="/home"> Start </FancyLink>
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

