import styled from 'styled-components/native';

import { theme } from '../../globalStyle';
import { TextContainerProps } from './types';

export const TextContainer = styled.Text<TextContainerProps>`
  font-family: "Poppins_400Regular";
  font-size: 14px;
  font-weight: 400;
  color: ${({ color }) => {
    return (theme as Record<string, string>)[color]
  }};
`;