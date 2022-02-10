import styled from "styled-components/native";
import { theme } from "../../globalStyle";

export const SelectedFilterCard = styled.View`
  padding: 8px 10px 8px 10px;
  background-color: ${theme.primary};
`

export const UnselectedFilterCard = styled.View`
  padding: 8px 10px 8px 10px;
  background-color: ${theme.unselectedCardBackground};
`