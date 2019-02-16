import React from 'react';
import styled from 'styled-components';
import { SEO, Layout, Image } from '../components';
import { FancyButtonStyles } from '../components/FancyButton';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Track your time with ease`]} />
    <Title>Cheesy Timer 🚀</Title>
    <Desc>Cheesy timer is really awesome, it lets you track your time.</Desc>
    <Image />
    <Link href="https://github.com/ahmedlhanafy/cheesy-timer/releases">
      Download Now
    </Link>
  </Layout>
);

const Title = styled.h1`
  font-weight: bold;
  font-size: 28px;
  align-self: center;
  margin: 36px 0px;
  color: ${props => props.theme.primaryTextColor};
`;

const Desc = styled.h2`
  font-weight: 300;
  font-size: 20px;
  align-self: center;
  text-align: center;
  margin: 0px;
  color: ${props => props.theme.primaryTextColor};
`;

const Link = styled.a`
  ${FancyButtonStyles}
`;

export default IndexPage;
