import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  height: 100px;
  margin-top: 20px;
`;

export const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: { paddingLeft: 10, paddingRight: 20 },
  showsHorizontalScrollIndicator: false,
})``;

export const TabItem = styled.View`
  width: 90px;
  height: 90px;
  background: rgba(255,255,255, 0.2);
  border-radius: 3px;
  margin-left: 10px;
  justify-content: space-around;
`;

export const TabText = styled.Text`
  font-size: 11px;
  color: #FFF;
  margin-left: 5px;
  width: 51px;
`;

export const TabIcon = styled.View`
  margin-left: 5px;
`;
