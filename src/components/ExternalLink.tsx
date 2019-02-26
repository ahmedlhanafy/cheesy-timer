import React, { MouseEvent } from 'react';
import styled from 'styled-components';
import { shell } from '../utils';

export const ExternalLink = ({
  children,
  href,
  onClick,
}: {
  children: string;
  href: string;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
}) => (
  <Text
    onClick={e => {
      shell.openExternal(href);
      if (onClick) {
        onClick(e);
      }
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
