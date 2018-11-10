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

const Stats = () => {
  const database = useDatabase();

  return (
    <Page title="Stats 📈">
      <FancyText icon={codingIcon}> {msToText(database.code.focus)} </FancyText>
      <FancyText icon={codeReviewIcon}>
        {' '}
        {msToText(database.code_review.focus)}{' '}
      </FancyText>
      <FancyText icon={meetingsIcon}>
        {' '}
        {msToText(database.meetings.focus)}{' '}
      </FancyText>
      <FancyText icon={readingIcon}>
        {' '}
        {msToText(database.articles.focus)}{' '}
      </FancyText>
      <FancyText icon={socialIcon}>
        {' '}
        {msToText(database.social.focus)}{' '}
      </FancyText>
      <FancyText icon={youtubeIcon}>
        {msToText(database.youtube.focus)}{' '}
      </FancyText>
    </Page>
  );
};

export default Stats;
