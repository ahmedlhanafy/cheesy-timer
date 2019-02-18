import React from 'react';
import { FancyText } from '../components';
import Page from './Page';
import { useDatabase } from '../hooks';
import { msToText } from '../shared/utils';
import codingIcon from '../icons/flat-icons/coding.svg';
import codeReviewIcon from '../icons/flat-icons/code_review.svg';
import meetingsIcon from '../icons/flat-icons/meetings.svg';
import readingIcon from '../icons/flat-icons/reading.svg';
import socialIcon from '../icons/flat-icons/social.svg';
import youtubeIcon from '../icons/flat-icons/youtube.svg';
import { openDetails } from '../utils';

export const Stats = () => {
  const database = useDatabase();

  return (
    <Page title="Stats 📈">
      <FancyText tooltip="Coding Time" icon={codingIcon}> {msToText(database.code.focus)} </FancyText>
      <FancyText tooltip="Codee Review Time" icon={codeReviewIcon}>
        {' '}
        {msToText(database.code_review.focus)}{' '}
      </FancyText>
      <FancyText tooltip="Meetings Time" icon={meetingsIcon}>
        {' '}
        {msToText(database.meetings.focus)}{' '}
      </FancyText>
      <FancyText tooltip="Reading Time" icon={readingIcon}>
        {' '}
        {msToText(database.articles.focus)}{' '}
      </FancyText>
      <FancyText tooltip="Social Media Time" icon={socialIcon}>
        {' '}
        {msToText(database.social.focus)}{' '}
      </FancyText>
      <FancyText tooltip="Youtube Time" icon={youtubeIcon}>
        {msToText(database.youtube.focus)}{' '}
      </FancyText>
    </Page>
  );
};
