import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FancyLink, FancyNumberInput, ExternalLink } from '../components';
import { resetTimer } from '../utils';
import rocketIcon from '../icons/emoji/rocket.png';
import { useUptodate, UPDATE_STATUS } from '../hooks';

type Props = {
  target: number;
  setTarget: (target: number) => void;
};

export const Start = ({ target, setTarget }: Props) => {
  const [uptodateStatus, downloadUrl] = useUptodate();

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
      <Space />
      {uptodateStatus === UPDATE_STATUS.NEEDS_UPDATE ? (
        <ExternalLink
          href={
            downloadUrl ||
            'https://github.com/ahmedlhanafy/cheesy-timer/releases'
          }
        >
          There is a new update available 👌
        </ExternalLink>
      ) : null}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  flex: 1;
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

const Space = styled.div`
  flex: 1;
`;
