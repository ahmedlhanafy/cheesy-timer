import React from 'react';
import styled, { css } from 'styled-components';
import { SEO, Layout, Image, Spinner } from '../components';
import { FancyButtonStyles } from '../components/FancyButton';
import { useLatestVersionLink } from '../hooks';
import { trackEvent } from '../analytics';

const IndexPage = () => {
  const downloadLink = useLatestVersionLink();
  return (
    <Layout>
      <SEO title="Home" keywords={[`Track your time with ease`]} />
      <Title>Cheesy Timer 🚀</Title>
      <PitchLine>Ready to own your time?</PitchLine>
      <Desc>
        Cheesy timer tracks your mouse and keyboard activity to give you meaningful insights about how you spent your day.
      </Desc>
      <Image />
      {downloadLink ? (
        <Link onClick={trackEvent({ category: 'Landing', action: 'Download App' })()} href={downloadLink}>
          Download Now
        </Link>
      ) : (
        <Spinner />
      )}
    </Layout>
  );
};

const SharedTextStyles = css`
  align-self: center;
  color: ${props => props.theme.primaryTextColor};
  text-align: center;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 28px;
  margin: 36px 0px;
  ${SharedTextStyles}
`;

const PitchLine = styled.h2`
  font-weight: 300;
  font-size: 20px;
  margin: 0px;
  margin-bottom: 4px;
  ${SharedTextStyles}
`;

const Desc = styled.h3`
  font-weight: 300;
  font-size: 18px;
  margin: 0px;
  ${SharedTextStyles}
`;

const Link = styled.a`
  ${FancyButtonStyles}
  margin-bottom: 16px;
`;

export default IndexPage;
