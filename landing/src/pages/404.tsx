import React from 'react';
import styled from 'styled-components';
import { SEO, Layout } from '../components';
import { Link } from 'gatsby';
import { FancyButtonStyles } from '../components/FancyButton';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Emoji>😰</Emoji>
    <Title>404 Not Found</Title>
    <StyledLink to="/">Go back</StyledLink>
  </Layout>
);

const StyledLink = styled(Link)`${FancyButtonStyles}`;

const Emoji = styled.h1`
  font-size: 78px;
  margin: 0px;
  margin-top: 36px;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 36px;
  align-self: center;
  margin: 0px;
  color: ${props => props.theme.primaryTextColor};
`;

export default NotFoundPage;
