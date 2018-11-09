import React from 'react';
import styled from 'styled-components';
import { FancyText } from '../components';
import { FiYoutube, FiTwitter, FiFacebook } from 'react-icons/fi';
import { useDatabase } from '../hooks';
import { msToText } from '../utils';

const Stats = () => {
  const database = useDatabase();

  return (
    <Container>
      <Title>Stats 📈</Title>
      <FancyText icon="💻"> {msToText(database.code.focus)} </FancyText>
      <FancyText icon="👨🏼‍🏫"> {msToText(database.code_review.focus)} </FancyText>
      <FancyText icon="☎️"> {msToText(database.meetings.focus)} </FancyText>
      <FancyText icon="✉️"> 2 hours </FancyText>
      <FancyText icon={<FiYoutube />}>
        {' '}
        {msToText(database.youtube.focus)}{' '}
      </FancyText>
      <FancyText icon={<FiTwitter />}>
        {' '}
        {msToText(database.social.focus)}{' '}
      </FancyText>
      <FancyText icon={<FiFacebook />}> 2 hours </FancyText>
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
  color: white;
`;

export default Stats;
