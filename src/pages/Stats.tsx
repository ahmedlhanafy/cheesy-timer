import React from 'react';
import styled from 'styled-components';
import { FancyText } from '../components';
import { FiYoutube, FiTwitter, FiFacebook } from 'react-icons/fi';

const Stats = () => {
  return (
    <Container>
      <Title>Stats 📈</Title>
      <FancyText icon="💻"> 2 hours & 3 minutes </FancyText>
      <FancyText icon="👨🏼‍🏫"> 2 hours & 3 minutes </FancyText>
      <FancyText icon="☎️"> 5 hours & 0 minutes </FancyText>
      <FancyText icon="✉️"> 2 hours </FancyText>
      <FancyText icon={<FiYoutube />}> 2 hours </FancyText>
      <FancyText icon={<FiTwitter />}> 2 hours </FancyText>
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
