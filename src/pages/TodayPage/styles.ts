import styled from 'styled-components/native';

interface ViewExtended {
  backgroundColor?: string;
}

export const Container = styled.View<ViewExtended>`
  flex: 1;
  padding: 8px;
  background-color: ${({ backgroundColor }) => backgroundColor || "#F2F2F2"};
`;

export const PageCardsContainer = styled.ScrollView`
  flex: 1;
  padding: 16px;
  margin: 24px 0px 0px 0px;
  background-color: white;
  display: flex;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`;