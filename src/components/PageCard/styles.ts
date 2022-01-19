import styled from 'styled-components/native';
import { colors } from '../../globalStyle';

interface TouchableOpacityExtended {
  backgroundColor?: string | undefined;
}

export const Container = styled.TouchableOpacity<TouchableOpacityExtended>`
  padding: 8px;
  background-color: ${({ backgroundColor }) => {
    type ColorKey = keyof typeof backgroundColor;
    const color = colors[backgroundColor as ColorKey]
    return color;
    }};
  height: 140px;
  width: 140px;
  margin: 8px;
  border-radius: 16px;
`;