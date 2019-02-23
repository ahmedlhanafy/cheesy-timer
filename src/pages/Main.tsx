import * as React from 'react';
import color from 'color';
import styled from 'styled-components';
import { FancyText, Progressbar, AnimatingHandArrow } from '../components';
import { useDatabase, useTutorialSteps } from '../hooks';
import { msToText } from '../shared/utils';
import Page from './Page';
import focusIcon from '../icons/emoji/focus.png';
import unFocusIcon from '../icons/emoji/unfocus.png';
import timeIcon from '../icons/emoji/time.png';
import errorIcon from '../icons/twotone-error-24px.svg';
import usePersistentState from '../hooks/usePersistentState';

type Props = {
  goToSettings: Function;
};

export const Main = ({ goToSettings }: Props) => {
  const database = useDatabase();
  const {
    refs: { distractionTimeRef, focusTimeRef, startTimeRef },
    start,
  } = useTutorial();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    start();
  };

  return (
    <Page>
      <ProgressbarContainer>
        <Progressbar database={database} />
      </ProgressbarContainer>
      <FancyText onClick={handleClick} ref={focusTimeRef as any} tooltip="Focus Time" icon={focusIcon}>
        {' '}
        {msToText(database.all.focus)}{' '}
      </FancyText>
      <FancyText onClick={handleClick} ref={distractionTimeRef as any} tooltip="Idle Time" icon={unFocusIcon}>
        {' '}
        {msToText(database.all.unFocus)}{' '}
      </FancyText>
      <FancyText
        onClick={handleClick}
        ref={startTimeRef}
        tooltip={`Session time | You started at ${prettifyDate(database.startTime || 0)}`}
        icon={timeIcon}
      >
        {msToText(database.startTime ? Date.now() - database.startTime : 0)}
      </FancyText>
      <AnimatingHandArrow onClick={() => goToSettings()} />
    </Page>
  );
};

const useTutorial = () => {
  const [sawTutorial, setSawTutorial] = usePersistentState('saw_tutorial', false);
  const focusTimeRef = React.useRef<HTMLDivElement>(null);
  const distractionTimeRef = React.useRef<HTMLDivElement>(null);
  const startTimeRef = React.useRef<HTMLDivElement>(null);
  const title = 'Tutorial';

  const start = useTutorialSteps([
    {
      ref: focusTimeRef,
      popover: {
        title,
        description: 'Time you spent being active',
        position: 'top',
      },
    },
    {
      ref: distractionTimeRef,
      popover: {
        title,
        description: 'Time you spent being idle',
        position: 'top',
      },
    },
    {
      ref: startTimeRef,
      popover: {
        title,
        description: 'Total session time',
        position: 'top',
      },
    },
  ]);

  React.useEffect(() => {
    if (!sawTutorial) {
      const timer = setTimeout(() => {
        start();
        setSawTutorial(true);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [sawTutorial]);

  return { refs: { focusTimeRef, distractionTimeRef, startTimeRef }, start };
};

const prettifyDate = (time: number): string => {
  const date = new Date(time);
  const options = { hour: 'numeric', minute: 'numeric' };
  return new Intl.DateTimeFormat('en-US', options).format(date);
};

const ProgressbarContainer = styled.div`
  padding-top: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
