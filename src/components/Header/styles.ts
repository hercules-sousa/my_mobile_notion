import { ViewStyle } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View<ViewStyle>`
  background-color: #fff;
  padding: 8px;
  margin-top: ${({ marginTop }) => marginTop || "32px"};
  margin-left: ${({ marginLeft }) => marginLeft || "24px"};
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
`;