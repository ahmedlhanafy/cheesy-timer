import * as React from 'react';
import styled from 'styled-components';

const FancyText = ({
  emoji,
  icon,
  children,
}: {
  emoji?: string;
  icon?: string;
  children: string | string[];
}) => {
  return (
    <MainText>
      <span style={{ fontSize: 40, marginRight: 6 }}>
        {emoji || <Icon src={icon} />}
      </span>{' '}
      👉🏽 {children}
    </MainText>
  );
};

const Icon = styled.img`
  width: 40px;
  height: 40px;
`;

const fancyNumbers = {
  '0': '0️⃣',
  '1': '1️⃣',
  '2': '2️⃣',
  '3': '3️⃣',
  '4': '4️⃣',
  '5': '5️⃣',
  '6': '6️⃣',
  '7': '7️⃣',
  '8': '8️⃣',
  '9': '9️⃣',
};

const MainText = styled.span`
  font-weight: 500;
  font-size: 22px;
  color: ${props => props.theme.primaryTextColor};
  padding: 0px 36px;
  align-self: flex-start;
  display: flex;
  align-items: center;
`;

export default FancyText;
