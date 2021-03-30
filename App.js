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
            headerStyle: {
              backgroundColor: '#000000'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontFamily: 'PlayfairDisplay_800ExtraBold'
            },
          }}
        />
        <Stack.Screen
          name="Unsplash"
          component={Unsplash}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}