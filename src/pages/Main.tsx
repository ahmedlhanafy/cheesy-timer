import React from 'react';
import styled from 'styled-components';
import { FancyText, Progressbar } from '../components';
import { useDatabase } from '../hooks';
import { msToText } from '../shared/utils';
import Page from './Page';
import focusIcon from '../icons/emoji/focus.png';
import unFocusIcon from '../icons/emoji/unfocus.png';
import homeIcon from '../icons/emoji/home.png';

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
      <FancyText icon={focusIcon}> {msToText(database.all.focus)} </FancyText>
      <FancyText icon={unFocusIcon}> {msToText(database.all.unFocus)} </FancyText>
      <FancyText icon={timeDifference > 0 ? homeIcon : undefined}>
        {timeDifference > 0
          ? msToText(timeDifference)
          : 'You should do something fun now! 🏋️‍🕺🏽'}
      </FancyText>
    </Page>
  );
};

const ProgressbarContainer = styled.div`
  padding-top: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Main;
