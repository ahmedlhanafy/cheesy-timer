import * as React from 'react';
import styled from 'styled-components';

const FancyNumberInput = ({
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <Container>
      <Placeholder>What's your target today?</Placeholder>
      <Input {...props} type="number" />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 100px;
  align-self: center;
  background-color: #1a1a1a;
  border-radius: 36px;
  padding: 8px 20px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
`;

const Placeholder = styled.span`
  flex: 1;
  color: rgba(100, 100, 100, 1);
`;

const Input = styled.input`
  width: 35px;
  font-weight: 400;
  font-size: 22px;
  color: white;
  border: none;
  outline: none;
  text-align: end;
  background-color: transparent;
  ::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`;

export default FancyNumberInput;
