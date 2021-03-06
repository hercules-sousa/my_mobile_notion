import styled from "styled-components/native";
import { theme } from "../../globalStyle";

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.background};
  padding: 8px;
`

export const HeadlineTitleContainer = styled.View`
  width: 100%;
  height: 15%;
  align-items: center;
  justify-content: center;
`

export const InputsContainer = styled.View`
  width: 100%;
  height: 40%;
  justify-content: space-between;
`

export const NotionButtonContainer = styled.View`
  position: absolute;
  bottom: 64px;
  flex-direction: row;
  align-self: center;
`