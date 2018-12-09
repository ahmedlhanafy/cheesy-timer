import * as React from 'react';
import styled from 'styled-components';
import { FancyText, Progressbar } from '../components';
import { useDatabase } from '../hooks';
import { msToText } from '../shared/utils';
import Page from './Page';
import focusIcon from '../icons/emoji/focus.png';
import unFocusIcon from '../icons/emoji/unfocus.png';
import timeIcon from '../icons/emoji/time.png';

export const Main = () => {
  const database = useDatabase();

  return (
    <Page>
      <ProgressbarContainer>
        <Progressbar database={database} />
      </ProgressbarContainer>
      <FancyText icon={focusIcon}> {msToText(database.all.focus)} </FancyText>
      <FancyText icon={unFocusIcon}>
        {' '}
        {msToText(database.all.unFocus)}{' '}
      </FancyText>
      <FancyText icon={timeIcon}>
        {msToText(database.startTime ? Date.now() - database.startTime : 0)}
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

