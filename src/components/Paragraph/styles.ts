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
  onPrimary: "#FFFFFF",
  onSecondary: "#000000",
  onSecondaryDarkVariant: "#FFFFFF",
  onError: "#FFFFFF",
  onBackground: "#FFFFFF",
  onBackgroundDark: "#B6B6B6",
  onSurface: "#FAFAFA",
  onSurfaceDark: "#B6B6B6",
}

export const TextContainer = styled.Text<TextContainerProps>`
  font-family: "Poppins_400Regular";
  font-size: 14px;
  font-weight: 400;
  color: ${({ color }) => {
    type ColorKey = keyof typeof color;
    return theme[color as ColorKey]
  }};
`;