import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import Header from '~/components/Header/Header';

import Tabs from '~/components/Tabs/Tabs';

import Menu from '~/components/Menu/Menus';

import {
  Container, Content, Card, CardHeader, CardContent, CardFooter, Annotation, Title, Description,
} from './styles';

export default function Main() {
  let offset = 0;

  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true },
  );
  function onHandlerStateChanged(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let oppened = false;
      const { translationY } = event.nativeEvent;
      offset += translationY;

      if (translationY >= 100) {
        oppened = true;
        Animated.timing(translateY, {
          toValue: oppened ? 350 : 0,
          duration: 200,
          useNativeDriver: true,
        }).start();
      }
    }
  }
  return (
    <Container>
      <Header />
      <Content>
        <Menu translateY={translateY} />
        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChanged}
        >
          <Card style={{
            transform: [
              {
                translateY: translateY.interpolate({
                  inputRange: [-270, 0, 350],
                  outputRange: [-50, 0, 350],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}
          >
            <CardHeader>
              <Icon name="attach-money" size={28} color="#666" />
              <Icon name="visibility-off" size={28} color="#666" />
            </CardHeader>
            <CardContent>
              <Title>Saldo disponível</Title>
              <Description>R$ 11.942,27</Description>
            </CardContent>
            <CardFooter>
              <Annotation>
              Transferência de R$ 10.000,00 de TradeUp Group às 7:32hr
              </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>
      <Tabs translateY={translateY} />
    </Container>
  );
}
