import styled from 'styled-components/native';

import { theme } from '../../globalStyle';
import { TextContainerProps } from './types';

export const TextContainer = styled.Text<TextContainerProps>`
  font-family: "PlayfairDisplay_700Bold";
  font-size: 34px;
  line-height: 48px;
  color: ${({ textColor }) => (theme as Record<string, string>)[textColor]}
`;