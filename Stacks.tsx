import * as React from 'react';
import {Button, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import App from './App';
import GoogleMap from './src/pages/GoogleMap';

const Stack = createStackNavigator();

export default function Stacks() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        mode="card"
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen name="App" component={App} />
        <Stack.Screen name="GoogleMap" component={GoogleMap} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}