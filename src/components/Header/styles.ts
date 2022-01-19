import { ViewStyle } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View<ViewStyle>`
  padding: 8px;
  margin-top: ${({ marginTop }) => marginTop || "32px"};
`;

export const Title = styled.Text`
  font-size: 48px;
  font-weight: bold;
`;