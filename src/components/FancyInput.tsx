import * as React from 'react';
import styled from 'styled-components';

const FancyInput = ({
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return <Input  {...props} />;
};

const Input = styled.input`
  width: auto;
  font-weight: 300;
  font-size: 20px;
  margin: 10px 20px;
  margin-top: 100px;
  color: white;
  align-self: center;
  background-color: #272d4d;
  border-radius: 36px;
  border: none;
  padding: 8px 20px;
  outline: none;
  text-align: center; 
  ::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`;

export default FancyInput;
