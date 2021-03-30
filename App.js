import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Unsplash from './screens/Unsplash';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            // backgroundColor: '#6EE67B',
          }
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Advanced Flatlist Carousel Animation',
          }}
        />
        <Stack.Screen name="Unsplash" component={Unsplash} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}