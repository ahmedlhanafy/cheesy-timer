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
    <div className="section">
      <Container>
        <Title>Stats 📈</Title>
        <FancyText icon={codingIcon}>
          {' '}
          {msToText(database.code.focus)}{' '}
        </FancyText>
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
    </div>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 28px;
  align-self: center;
  margin: 28px 0px 8px 0px;
  color: ${props => props.theme.primaryTextColor};
`;

export default Stats;
