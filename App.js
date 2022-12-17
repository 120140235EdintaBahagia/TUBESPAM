import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import SplashScreen from './src/Components/SplashScreen';
import LoginScreen from './src/Components/LoginScreen';
import RegisterScreen from './src/Components/RegisterScreen';
import Home from './src/Components/HomeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false,}}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false,}}/>
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{headerShown: false,}}/>
        <Stack.Screen name="HomeScreen" component={Home} options={{headerShown: false,}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
