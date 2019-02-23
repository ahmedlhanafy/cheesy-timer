import React from 'react';
import styled from 'styled-components';
import { shell } from '../utils';

export const ExternalLink = ({ children, href }: { children: string; href: string }) => (
  <Text
    onClick={() => {
      shell.openExternal(href);
    }}
  >
    {children}
  </Text>
);

const Text = styled.button`
  font-size: 16px;
  color: ${props => props.theme.primaryTextColor};
  margin-bottom: 36px;
  align-self: center;
  text-align: center;
  font-weight: 300;
  outline: none;
  background: transparent;
  border: none;
`;
