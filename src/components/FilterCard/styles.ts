import styled from 'styled-components/native';

import { TouchableOpacityExtended } from './types';

const Container = styled.TouchableOpacity<TouchableOpacityExtended>`  
  padding: 8px 14px 8px 14px;
  border-radius: 8px;
  margin-right: ${({ marginRight }) => marginRight || "4px"};
  margin-left: ${({ marginLeft }) => marginLeft || "4px"};
`;

const CardText = styled.Text`
  font-size: 20px;
`;

export const SelectedContainer = styled(Container)`
  background-color: #000;
  border-bottom-color: #73A9E9;
  border-bottom-width: 4px;
  border-right-color: #73A9E9;
  border-right-width: 4px;
`

export const SelectedCardText = styled(CardText)`
  color: #fff;
`

export const NotSelectedContainer = styled(Container)`
  background-color: #fff;
  border-bottom-color: #f2f2f2;
  border-bottom-width: 4px;
  border-right-color: #f2f2f2;
  border-right-width: 4px;
`

export const NotSelectedCardText = styled(CardText)`
  color: #000;
`

