import styled from "styled-components/native";
import { theme } from "../../globalStyle";
import { MiniParagraphProps } from "./types";

export const TextContainer = styled.Text<MiniParagraphProps>`
  font-family: "Poppins_400Regular";
  font-size: 10px;
  letter-spacing: 2px;
  color: ${({ color }) => (theme as Record<string, string>)[color]}
`