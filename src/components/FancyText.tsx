import * as React from 'react';
import styled from 'styled-components';

const FancyText = ({
  icon,
  children,
}: {
  icon: string | React.ReactElement<any>;
  children: string | string[];
}) => {
  return (
    <MainText>
      <span style={{ fontSize: 40, marginRight: 6 }}>{icon}</span> 👉🏽 {children}
    </MainText>
  );
};

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
  color: #fff;
  padding: 0px 36px;
  align-self: center;
  display: flex;
  align-items: center;
`;

export default FancyText;
