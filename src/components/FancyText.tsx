import * as React from 'react';
import styled from 'styled-components';
import arrowIcon from '../icons/emoji/right-arrow.png';

type Props = {
  emoji?: string;
  icon?: string;
  children: string | string[];
};

const FancyText = ({ emoji, icon, children }: Props) => {
  return (
    <MainText>
      <span style={{ fontSize: 40, marginRight: 6 }}>{emoji || (icon && <Icon src={icon} />)}</span>{' '}
      {(emoji || icon) && <Arrow src={arrowIcon} />}
      {children}
    </MainText>
  );
};

const Icon = styled.img`
  width: 40px;
  height: 40px;
`;

const Arrow = styled.img`
  width: 26px;
  height: 26px;
  margin-right: 6px;
`;

const MainText = styled.span`
  font-weight: 500;
  font-size: 22px;
  color: ${props => props.theme.primaryTextColor};
  padding: 0px 30px;
  display: flex;
  align-items: center;
  text-align: center;
`;

export default FancyText;
