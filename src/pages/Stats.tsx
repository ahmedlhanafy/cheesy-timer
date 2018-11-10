import React from 'react';
import styled from 'styled-components';
import { FancyText } from '../components';
import { useDatabase } from '../hooks';
import { msToText } from '../utils';
import codingIcon from '../icons/flat-icons/coding.svg';
import codeReviewIcon from '../icons/flat-icons/code_review.svg';
import meetingsIcon from '../icons/flat-icons/meetings.svg';
import readingIcon from '../icons/flat-icons/reading.svg';
import socialIcon from '../icons/flat-icons/social.svg';
import youtubeIcon from '../icons/flat-icons/youtube.svg';

const Stats = () => {
  const database = useDatabase();

  return (
    <Container>
      <Title>Stats 📈</Title>
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
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px 20px 0px;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 28px;
  align-self: center;
  color: ${props => props.theme.primaryTextColor};
`;

export default Stats;
