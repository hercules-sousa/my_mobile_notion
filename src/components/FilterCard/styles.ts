import styled from 'styled-components/native';

import { TouchableOpacityExtended } from './types';

const Container = styled.TouchableOpacity<TouchableOpacityExtended>`  
  padding: 8px 14px 8px 14px;
  border-radius: 8px;
  margin-right: ${({ marginRight }) => marginRight || "8px"};
`;

const CardText = styled.Text`
  font-size: 20px;
`;

export const SelectedContainer = styled(Container)`
  background-color: #000;
`

export const SelectedCardText = styled(CardText)`
  color: #fff;
`

export const NotSelectedContainer = styled(Container)`
  background-color: #fff;
  border: 1px solid #000;
`

export const NotSelectedCardText = styled(CardText)`
  color: #000;
`

