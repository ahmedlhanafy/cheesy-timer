import React from 'react';
import styled from 'styled-components';

type Props = { children: React.ReactNode; title?: string };

const Page = ({ children, title }: Props) => {
  return (
    <div className="section">
      <Container>
        {title ? <Title>{title}</Title> : null}
        <Body>{children}</Body>
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

const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px 16px;
`;

export default Page;
