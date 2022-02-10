import styled from "styled-components/native";
import { theme } from "../../globalStyle";

const Container = styled.View`
  padding: 8px 12px 8px 12px;
  border-radius: 8px;
  margin-right: 12px;
`

export const SelectedFilterCard = styled(Container)`
  background-color: ${theme.primary};
`

export const UnselectedFilterCard = styled(Container)`
  padding: 8px 12px 8px 12px;
  background-color: ${theme.unselectedCardBackground};
  border: 1px solid ${theme.primary};
`