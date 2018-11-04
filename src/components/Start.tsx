import React from 'react';
import styled from 'styled-components';
import FancyText from './FancyText';
import { FiYoutube, FiTwitter, FiFacebook } from 'react-icons/fi';

const Start = ({ onClick }: { onClick: (val: any) => any }) => {
  return (
    <Container>
      <Title>Cheesy Timer 🚀</Title>
      <WelcomeText>Welcome back Ahmed! 🤗</WelcomeText>
      <Text onClick={onClick}> 👉🏽 Start 👈🏽 </Text>
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

const WelcomeText = styled.span`
  font-weight: 200;
  font-size: 18px;
  align-self: center;
  color: white;
  position: absolute;
  bottom: 30px;
`;

const Text = styled.h2`
  font-weight: 400;
  font-size: 30px;
  align-self: center;
  color: white;
  margin-top: 100px;
  cursor: pointer;
`;

export default Start;
