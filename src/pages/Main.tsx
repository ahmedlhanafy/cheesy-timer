import * as React from 'react';
import styled from 'styled-components';
import { FancyText, Progressbar, AnimatingHandArrow } from '../components';
import { useDatabase } from '../hooks';
import { msToText } from '../shared/utils';
import Page from './Page';
import focusIcon from '../icons/emoji/focus.png';
import unFocusIcon from '../icons/emoji/unfocus.png';
import timeIcon from '../icons/emoji/time.png';
import usePersistentState from '../hooks/usePersistentState';

export const Main = () => {
  const database = useDatabase();
  const [viewedBefore, setViewedBefore] = usePersistentState('viewed_before', false);

  React.useEffect(() => {
    return () => setViewedBefore(true);
  }, [])

  const prettifyDate = (time: number): string => {
    const date = new Date(time);
    const options = { hour: 'numeric', minute: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  return (
    <Page>
      <ProgressbarContainer>
        <Progressbar database={database} />
      </ProgressbarContainer>
      <FancyText tooltip="Focus Time" icon={focusIcon}>
        {' '}
        {msToText(database.all.focus)}{' '}
      </FancyText>
      <FancyText tooltip="Distraction Time" icon={unFocusIcon}>
        {' '}
        {msToText(database.all.unFocus)}{' '}
      </FancyText>
      <FancyText tooltip={`Elapsed Time | You started at ${prettifyDate(database.startTime || 0)}`} icon={timeIcon}>
        {msToText(database.startTime ? Date.now() - database.startTime : 0)}
      </FancyText>
      {viewedBefore ? null: <AnimatingHandArrow />}
    </Page>
  );
};

const ProgressbarContainer = styled.div`
  padding-top: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
