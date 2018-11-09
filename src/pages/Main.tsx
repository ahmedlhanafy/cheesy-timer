import React, { useContext } from 'react';
import styled from 'styled-components';
import CircularProgressbar from 'react-circular-progressbar';
import { FancyText } from '../components';
import { useDatabase } from '../hooks';
import { msToText, msToNumbers } from '../utils';
import { TargetContext } from '../contexts';

const Main = () => {
  const database = useDatabase();
  const target = useContext(TargetContext);

  const targetMills = target * 60 * 60 * 1000;
  const workingHours = 8 * 60 * 60 * 1000;

  const timeDifference =
    workingHours - (Date.now() - (database.startTime || Date.now()));
    
  const [focusHours, focusMinutes] = msToNumbers(database.all.focus);
  const focusPercentage = (database.all.focus / targetMills) * 100;

  return (
    <CounterContainer>
      <div style={{ width: 250, height: 250, marginBottom: 12 }}>
        <CircularProgressbar
          styles={{
            background: {
              fill: '#fff',
            },
            text: {
              fill: '#fff',
            },
            path: {
              stroke: strokeColor(focusPercentage),
            },
            trail: { stroke: '#1a1a1a' },
          }}
          percentage={focusPercentage}
          text={`${focusHours}:${
            focusMinutes < 10 ? `0${focusMinutes}` : focusMinutes
          } ${focusPercentage >= 100 ? '👏🏽' : ''}`}
        />
      </div>
      <FancyText icon="👨🏽‍💻"> {msToText(database.all.focus)} </FancyText>
      <FancyText icon="😱"> {msToText(database.all.unfocus)} </FancyText>
      <FancyText icon="🏡"> {msToText(timeDifference)} </FancyText>
    </CounterContainer>
  );
};

const strokeColor = (focusPercentage: number): string =>
  focusPercentage >= 100
    ? '#2ac940'
    : focusPercentage < 50
      ? '#ff3366'
      : '#f3ca3e';

const CounterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px 0px;
  overflow: hidden;
`;

export default Main;
