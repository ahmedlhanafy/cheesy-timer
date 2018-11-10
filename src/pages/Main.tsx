import React from 'react';
import styled from 'styled-components';
import { FancyText, Progressbar } from '../components';
import { useDatabase } from '../hooks';
import { msToText } from '../shared/utils';
import Page from './Page';

const Main = () => {
  const database = useDatabase();

  const workingHours = 8 * 60 * 60 * 1000;

  const timeDifference =
    workingHours - (Date.now() - (database.startTime || Date.now()));

  return (
    <Page>
      <ProgressbarContainer>
        <Progressbar database={database} />
      </ProgressbarContainer>
      <FancyText emoji="👨🏽‍💻"> {msToText(database.all.focus)} </FancyText>
      <FancyText emoji="😱"> {msToText(database.all.unFocus)} </FancyText>
      <FancyText emoji={timeDifference > 0 ? '🏡' : undefined}>
        {timeDifference > 0
          ? msToText(timeDifference)
          : 'You should do something fun now! 🏋️‍🕺🏽'}
      </FancyText>
    </Page>
  );
};

const ProgressbarContainer = styled.div`
  padding-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Main;
