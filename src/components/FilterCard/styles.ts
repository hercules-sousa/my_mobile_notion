import { ViewStyle } from 'react-native';
import styled from 'styled-components/native';

interface ViewExtended extends ViewStyle {
  backgroundColor?: string;
}

export const Container = styled.View<ViewExtended>`
  background-color: ${props => props.backgroundColor || "#000"};
  padding: 8px;
  border-radius: 8px;
`;

export const CardText = styled.Text`
  font-size: 20px;
`;