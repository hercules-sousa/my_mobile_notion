import styled from "styled-components/native";

import { theme } from "../../globalStyle";
import { TextContainerProps } from "./types";

export const TextContainer = styled.Text<TextContainerProps>`
  font-family: "PlayfairDisplay_600SemiBold";
  font-size: 25px;
  line-height: 40px;
  color: ${({ color }) => (theme as Record<string, string>)[color]}
`