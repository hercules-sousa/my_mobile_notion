import styled from 'styled-components/native';
import { notionColors } from '../../globalStyle';

interface TouchableOpacityExtended {
  backgroundColor?: string | undefined;
}

export const Container = styled.TouchableOpacity<TouchableOpacityExtended>`
  padding: 8px;
  background-color: ${({ backgroundColor }) => {
    type ColorKey = keyof typeof backgroundColor;
    const color = notionColors[backgroundColor as ColorKey]
    return color;
    }};
  height: 140px;
  width: 90%;
  margin: 8px;
  border-radius: 16px;
`;