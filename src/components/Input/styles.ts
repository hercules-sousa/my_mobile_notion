import styled from "styled-components/native";
import { theme } from "../../globalStyle";

export const StyledTextInput = styled.TextInput`
  background-color: ${theme.surface};
  padding: 16px;
  border-radius: 16px;
  color: ${theme.onSurface};
  font-family: "Poppins_400Regular";
  font-size: 14px;
`