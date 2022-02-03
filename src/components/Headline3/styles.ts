import styled from "styled-components/native";
import { theme } from "../../globalStyle";
import { TextContainerProps } from "./types";

export const TextContainer = styled.Text<TextContainerProps>`
  font-family: "Poppins_500Medium";
  font-size: 19px;
  color: ${({ color }) => (theme as Record<string, string>)[color]}
`