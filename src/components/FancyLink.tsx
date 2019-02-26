import * as React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import color from 'color';
import { LocationDescriptor } from 'history';

type Props = {
  children: string;
  to: LocationDescriptor;
} & React.ButtonHTMLAttributes<HTMLAnchorElement>;

export const FancyLink = ({ ...props }: Props) => <StyledLink {...props} />;

export const FancyLinkStyles = css`
  font-weight: 400;
  font-size: 24px;
  align-self: center;
  color: white;
  margin-top: 20px;
  background-color: ${props => props.theme.buttonColor};
  border-radius: 36px;
  border: none;
  padding: 4px 100px;
  text-decoration: none;
  box-shadow: 0px 3px 45px -5px ${props =>
      color(props.theme.buttonColor)
        .alpha(0.4)
        .rgb()
        .toString()};
  transition: 500ms all;
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
  }
`;

const StyledLink = styled(Link)`
  ${FancyLinkStyles}
`;
