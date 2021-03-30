import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading';

// Importing Fonts from Expo Google Fonts
import {
  useFonts,
  Comfortaa_300Light,
  Comfortaa_400Regular,
  Comfortaa_700Bold
} from '@expo-google-fonts/comfortaa';
import {
  PlayfairDisplay_400Regular,
  PlayfairDisplay_400Regular_Italic,
  PlayfairDisplay_600SemiBold,
  PlayfairDisplay_600SemiBold_Italic,
  PlayfairDisplay_800ExtraBold,
  PlayfairDisplay_800ExtraBold_Italic
} from '@expo-google-fonts/playfair-display';

import Home from './screens/Home';
import Unsplash from './screens/Unsplash';

const Stack = createStackNavigator();

export default function App() {
  // Loading Fonts
  let [fontsLoaded, error] = useFonts({
    Comfortaa_300Light,
    Comfortaa_400Regular,
    PlayfairDisplay_800ExtraBold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#000000'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontFamily: 'PlayfairDisplay_800ExtraBold'
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Advanced Flatlist Carousel Animation',
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