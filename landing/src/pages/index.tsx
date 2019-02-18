import React from 'react';
import styled from 'styled-components';
import { SEO, Layout, Image, Spinner } from '../components';
import { FancyButtonStyles } from '../components/FancyButton';
import { useLatestVersionLink } from '../hooks';

const IndexPage = () => {
  const downloadLink = useLatestVersionLink();
  return (
    <Layout>
      <SEO title="Home" keywords={[`Track your time with ease`]} />
      <Title>Cheesy Timer 🚀</Title>
      <Desc>Cheesy timer is really awesome, it lets you track your time.</Desc>
      <Image />
      {downloadLink ? (
        <Link href={downloadLink}>Download Now</Link>
      ) : (
        <Spinner />
      )}
    </Layout>
  );
};

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
  margin-bottom: 16px;
`;

export default IndexPage;
