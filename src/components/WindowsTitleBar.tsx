import React, { MouseEvent } from 'react';
import color from 'color';
import styled, { withTheme } from 'styled-components';
import icons from '../icons/icons.svg';
import { useHover, useChannel } from '../hooks';
import { minimizeApp, closeApp } from '../utils';
import { Message } from '../shared/channels';

enum IconType {
  CLOSE = 'close-window',
  MINIMIZE = 'minimize-window',
}

type IconProps = {
  type: IconType;
  theme: any;
  hoverColor?: string;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
};

const Icon = withTheme(({ type, theme, hoverColor, onClick }: IconProps) => {
  const [isHovered, eventListeners] = useHover();

  return (
    <IconContainer
      onClick={onClick}
      hoverColor={hoverColor}
      {...eventListeners}
    >
      <Svg>
        <use
          style={{ transition: 'color 100ms' }}
          color={
            isHovered && type === IconType.CLOSE
              ? 'white'
              : color(theme.primaryTextColor)
                  .alpha(0.7)
                  .rgb()
                  .toString()
          }
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xlinkHref={`${icons}#${type}`}
        />
      </Svg>
    </IconContainer>
  );
});

export const WindowsTitleBar = () => {
  const platform = useChannel<NodeJS.Platform>(Message.PLATFORM, true);

  if (!platform) return null;

  return (
    <Container dimBackground={platform !== 'darwin'}>
      {platform !== 'darwin' ? (
        <>
          <Icon onClick={minimizeApp} type={IconType.MINIMIZE} />
          <Icon onClick={closeApp} hoverColor="red" type={IconType.CLOSE} />
        </>
      ) : null}
    </Container>
  );
};

const Svg = styled.svg`
  height: 14px;
  width: 14px;
  transition: none;
`;

const IconContainer = styled.div<{ hoverColor?: string }>`
  height: 100%;
  width: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-app-region: no-drag;
  z-index: 2;
  transition: background-color 100ms;
  &:hover {
    background-color: ${props =>
      props.hoverColor
        ? props.hoverColor
        : props.theme.isDark
        ? color(props.theme.backgroundColor)
            .lighten(0.3)
            .rgb()
            .toString()
        : color(props.theme.backgroundColor)
            .darken(0.3)
            .rgb()
            .toString()};
  }
`;

const Container = styled.header<{ dimBackground: boolean }>`
  display: flex;
  position: fixed;
  height: 34px;
  width: 100%;
  background: ${props =>
    props.dimBackground
      ? color(props.theme.backgroundColor)
          .darken(0.2)
          .rgb()
          .toString()
      : 'transparent'};
  z-index: 1;
  font-family: Segoe UI;
  font-size: 10px;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  -webkit-app-region: drag;
  `;
