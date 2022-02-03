import styled from 'styled-components/native';

import { theme } from '../../globalStyle';
import { TextContainerProps } from './types';

export const TextContainer = styled.Text<TextContainerProps>`
  font-family: "PlayfairDisplay_700Bold";
  font-size: 34;
  line-height: 48;
  color: ${({ textColor }) => (theme as Record<string, string>)[textColor]}
`;