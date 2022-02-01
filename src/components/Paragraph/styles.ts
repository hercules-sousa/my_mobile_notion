import styled from 'styled-components/native';
import { theme } from '../../globalStyle';

interface TextContainerProps {
  color: string;
}

type ColorProps = {
  primary: string;
  primaryDarkVariant: string;
  primaryLightVariant: string;
  unselectedCardBackground: string;
  secondary: string;
  secondaryDarkVariant: string;
  background: string;
  surface: string;
  surfaceLight: string;
  error: string;
  onPrimary: string;
  onSecondary: string;
  onSecondaryDarkVariant: string;
  onError: string;
  onBackground: string;
  onBackgroundDark: string;
  onSurface: string;
  onSurfaceDark: string;
}

export const TextContainer = styled.Text<TextContainerProps>`
  font-family: "Poppins_400Regular";
  font-size: 14px;
  font-weight: 400;
  color: ${({ color }) => {
    return (theme as Record<string, string>)[color]
  }};
`;