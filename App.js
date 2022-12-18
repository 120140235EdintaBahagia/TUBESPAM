import * as React from 'react';
import { Text, View , Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SplashScreen from './src/Components/SplashScreen';
import HomeScreen from './src/Components/HomeScreen';
import LoginScreen from './src/Components/LoginScreen';
import RegisterScreen from './src/Components/RegisterScreen';
import ProfilScreen from './src/Components/ProfilScreen'
import FavoritScreen from './src/Components/FavoritScreen';
import KotakScreen from './src/Components/KotakScreen';
import DetailScreen from './src/Components/DetailScreen';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Bottom() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false
    }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favorit" component={FavoritScreen}/>
      <Tab.Screen name="Kotak" component={KotakScreen} />
      <Tab.Screen name="Profil" component={ProfilScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen}></Stack.Screen>
        <Stack.Screen name="DetailScreen" component={DetailScreen}></Stack.Screen>
        <Stack.Screen
          name="Bottom"
          component={Bottom}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
