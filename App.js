import * as React from 'react';
import AppLoading from 'expo-app-loading';
import { Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

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
const Tab = createBottomTabNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./assets/icon.png')}
    />
  );
}

function HomeScreen() {
  return (
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
          // headerTitle: props => <LogoTitle {...props} />, // To put custom image
          // headerRight: () => (
          //   <Button
          //     onPress={() => alert('This is a button!')}
          //     title="Info"
          //     color="#fff"
          //   />
          // ),
        }}
      />
      <Stack.Screen
        name="Unsplash"
        component={Unsplash}
        options={({ route }) => ({ title: route.params.name })}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  // Loading Fonts
  let [fontsLoaded, error] = useFonts({
    Comfortaa_300Light,
    Comfortaa_400Regular,
    PlayfairDisplay_400Regular,
    PlayfairDisplay_800ExtraBold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home-sharp' : 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings-sharp' : 'settings-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#ffffff',
          inactiveTintColor: 'gray',
          labelStyle: { fontFamily: 'PlayfairDisplay_400Regular' },
          style: {
            backgroundColor: '#000000',
          }
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={Unsplash} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}