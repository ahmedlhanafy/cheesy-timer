import React from 'react';
import styled from 'styled-components';
import CircularProgressbar from 'react-circular-progressbar';
import FancyText from './FancyText';
import { useDatabase } from '../hooks';
import { msToText, msToNumbers } from '../utils';

const Main = () => {
  const database = useDatabase();

  if (database.all === undefined)
    return (
      <CounterContainer>
        <Text>Collecting Data...🏃🏽‍</Text>
      </CounterContainer>
    );

  const target = 5 * 60 * 60 * 1000;
  const timeDifference = target - (Date.now() - database.startTime);
  const [focusHours, focusMinutes] = msToNumbers(database.all.focus);
  const focusPercentage = (database.all.focus / target) * 100;

  return (
    <CounterContainer>
      <div style={{ width: 220, height: 220, marginBottom: 20 }}>
        <CircularProgressbar
          styles={{
            background: {
              fill: '#fff',
            },
            text: {
              fill: '#fff',
            },
            path: {
              stroke: focusPercentage >= 100 ? '#2ac940' : '#fff',
            },
            trail: { stroke: '#aeaeae' },
          }}
          percentage={focusPercentage}
          text={`${focusHours}:${focusMinutes} ${
            focusPercentage >= 100 ? '👏🏽' : ''
          }`}
        />
      </div>
      <FancyText icon="👨🏽‍💻"> {msToText(database.all.focus)} </FancyText>
      <FancyText icon="😱"> {msToText(database.all.unfocus)} </FancyText>
      <FancyText icon="🏡"> {msToText(timeDifference)} </FancyText>
    </CounterContainer>
  );
};

const CounterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px 0px;
  overflow: hidden;
`;

const Text = styled.h2`
  font-weight: bold;
  font-size: 28px;
  align-self: center;
  color: white;
`;

export default Main;
