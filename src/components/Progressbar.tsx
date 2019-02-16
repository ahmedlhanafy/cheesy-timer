import React, { useContext } from 'react';
import styled, { withTheme } from 'styled-components';
import color from 'color';
import CircularProgressbar from 'react-circular-progressbar';
import { msToNumbers } from '../shared/utils';
import { TargetContext } from '../contexts';
import { DatabaseStore } from '../shared/database';
import { Theme } from '../shared/hooks/usePersistentTheme';

type Props = {
  theme: Theme;
  database: DatabaseStore;
};

export const Progressbar = withTheme(({ theme, database }: Props) => {
  const target = useContext(TargetContext);

  const targetMills = target * 60 * 60 * 1000;
  const [focusHours, focusMinutes] = msToNumbers(database.all.focus);
  const focusPercentage = (database.all.focus / targetMills) * 100;
  return (
    <Container>
      <CircularProgressbar
        styles={{
          background: {
            fill: theme.primaryTextColor,
          },
          text: {
            fill: theme.primaryTextColor,
          },
          path: {
            stroke: strokeColor(focusPercentage),
          },
          trail: {
            stroke: color(theme.backgroundColor)
              .darken(0.2)
              .rgb()
              .toString(),
          },
        }}
        percentage={focusPercentage}
        text={`${focusHours}:${
          focusMinutes < 10 ? `0${focusMinutes}` : focusMinutes
        } ${focusPercentage >= 100 ? '👏🏽' : ''}`}
      />
    </Container>
  );
});

const Container = styled.div`
  width: 250px;
  height: 250px;
  margin-bottom: 12px;
`;

const strokeColor = (focusPercentage: number): string =>
  focusPercentage >= 100
    ? '#2ac940'
    : focusPercentage < 50
    ? '#ff3366'
    : '#f3ca3e';
