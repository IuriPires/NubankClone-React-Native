import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container, TabsContainer, TabItem, TabText, TabIcon,
} from './styles';

export default function Tabs({ translateY }) {
  return (
    <Container style={{
      transform: [{
        translateY: translateY.interpolate({
          inputRange: [0, 350],
          outputRange: [0, 30],
          extrapolate: 'clamp',
        }),
      }],
      opacity: translateY.interpolate({
        inputRange: [0, 350],
        outputRange: [1, 0.3],
        extrapolate: 'clamp',
      }),
    }}
    >
      <TabsContainer>
        <TabItem>
          <TabIcon>
            <Icon name="person-add" size={24} color="#FFF" />
          </TabIcon>
          <TabText>Indicar amigos</TabText>
        </TabItem>
        <TabItem>
          <TabIcon>
            <Icon name="chat-bubble-outline" size={24} color="#FFF" />
          </TabIcon>
          <TabText>Cobrar</TabText>
        </TabItem>
        <TabItem>
          <TabIcon>
            <Icon name="arrow-downward" size={24} color="#FFF" />
          </TabIcon>
          <TabText>Depositar</TabText>
        </TabItem>
        <TabItem>
          <TabIcon>
            <Icon name="arrow-upward" size={24} color="#FFF" />
          </TabIcon>
          <TabText>Transferir</TabText>
        </TabItem>
        <TabItem>
          <TabIcon>
            <Icon name="lock" size={24} color="#FFF" />
          </TabIcon>
          <TabText>Bloquear cartão</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
}
