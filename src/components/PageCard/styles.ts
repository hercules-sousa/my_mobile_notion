import styled from 'styled-components/native';
import { theme } from '../../globalStyle';

interface TouchableOpacityExtended {
  backgroundColor: string | undefined;
}

export const Container = styled.TouchableOpacity<TouchableOpacityExtended>`
  padding: 16px;
  background-color: ${({ backgroundColor }) => {
    type ColorKey = keyof typeof backgroundColor;
    const color = theme[backgroundColor as ColorKey]
    return color;
    }};
  height: 140px;
  width: 90%;
  margin-top: 16px;
  border-radius: 16px;
  border: 1px solid ${theme.surfaceLight};
`;

export const ActivityNameContainer = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  margin-left: 8px;
`;

export const FirstRowContainer = styled.View`
  flex-direction: row;
`;