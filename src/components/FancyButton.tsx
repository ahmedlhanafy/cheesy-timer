import * as React from 'react';
import styled from 'styled-components';

const FancyButton = ({
  children,
  ...props
}: { children: string } & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <Button {...props}>{children}</Button>;
};

const Button = styled.button`
  font-weight: 400;
  font-size: 24px;
  align-self: center;
  color: white;
  margin-top: 20px;
  background-color: #2ac940;
  border-radius: 36px;
  border: none;
  padding: 4px 100px;
  box-shadow: 0px 3px 45px -5px rgba(42, 201, 64, 0.5);
  transition: 500ms all;
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
  }
`;

export default FancyButton;
