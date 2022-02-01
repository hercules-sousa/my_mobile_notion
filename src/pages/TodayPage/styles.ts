import styled from 'styled-components/native';
import { theme } from '../../globalStyle';

interface ViewExtended {
  backgroundColor?: string;
}

export const Container = styled.View<ViewExtended>`
  flex: 1;
  background-color: ${({ backgroundColor }) => backgroundColor || theme.background};
  padding: 8px;
`;

export const HeaderContainer = styled.View`
  padding: 8px;
  
`

export const HeaderTitleContainer = styled.View`
  padding: 16px;
  margin: 32px 16px 0px 16px;
  border-radius: 34px;
`;

export const FilterLineContainer = styled.View`
  margin-top: 8px;
  margin-bottom: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
`