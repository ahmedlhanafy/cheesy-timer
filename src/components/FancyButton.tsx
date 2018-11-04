import * as React from 'react';
import styled from 'styled-components';

const FancyButton = ({
  children,
  ...props
}: { children: string } & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <Button {...props}>{children}</Button>;
};

const Button = styled.button`
  width: auto;
  font-weight: 400;
  font-size: 30px;
  align-self: center;
  color: white;
  margin-top: 20px;
  background-color: #2ac940;
  border-radius: 36px;
  border: none;
  padding: 4px 16px;
  box-shadow: 0px 3px 45px -5px #2ac940;
  transition: 500ms all;
  cursor: pointer;
  &:hover {
    transform: scale(1.1); 
  }
`;

export default FancyButton;
