import styled from "styled-components/native";
import { theme } from "../../globalStyle";
import { TextContainerProps } from "./types";

export const TextContainer = styled.Text<TextContainerProps>`
  font-family: "Poppins_600SemiBold";
  font-size: 45px;
  line-height: 56px;
  color: ${({color}) => (theme as Record<string, string>)[color]}
`