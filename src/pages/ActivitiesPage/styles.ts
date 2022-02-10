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

export const FilterCardContainer = styled.View`
  margin-top: 8px;
  margin-bottom: 8px;
  padding: 16px;
  height: 15%;
  width: 100%;
  border-radius: 16px;
  background-color: ${theme.surface};
`

export const RowCardsContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`