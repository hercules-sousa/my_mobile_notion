import styled from 'styled-components/native';

interface ViewExtended {
  backgroundColor?: string;
}

export const Container = styled.View<ViewExtended>`
  flex: 1;
  background-color: ${({ backgroundColor }) => backgroundColor || "#fff"};
`;

export const HeaderContainer = styled.View`
  padding: 8px;
`

export const HeaderTitleContainer = styled.View`
  padding: 16px;
  background-color: red;
`;