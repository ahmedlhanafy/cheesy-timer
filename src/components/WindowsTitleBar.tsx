import React from 'react';
import color from 'color';
import styled, { withTheme } from 'styled-components';
import icons from '../icons/icons.svg';

enum IconType {
  CLOSE,
  MINIMIZE,
}

const Icon = withTheme(({ type, theme }: { type: IconType; theme: any }) => {
  const iconType = type === IconType.CLOSE ? 'close-window' : 'minimize-window';
  return (
    <Svg>
      <use color={color(theme.primaryTextColor).alpha(0.7).rgb().toString()} xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref={`${icons}#${iconType}`} />
    </Svg>
  );
});

const WindowsTitleBar = () => (
  <Container>
    <Icon type={IconType.MINIMIZE} />
    <Icon type={IconType.CLOSE} />
  </Container>
);

const Svg = styled.svg`
    height: 14px;
    width: 14px;
    margin-left: 20px;

`

const Container = styled.header`
  display: flex;
  position: fixed;
  height: 34px;
  width: 100%;
  background: ${props =>
    color(props.theme.backgroundColor)
      .darken(0.2)
      .rgb()
      .toString()};
  z-index: 2;
  font-family: Segoe UI;
  font-size: 10px;
  justify-content: flex-end;
  align-items: center;
  padding: 16px;
  box-sizing: border-box;
`;

export default WindowsTitleBar;
