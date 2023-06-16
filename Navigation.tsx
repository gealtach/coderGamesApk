import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import TabM from './Tab';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='login' component={LoginScreen} options={{ headerShown: false}} />
        <Stack.Screen name='home' component={TabM} options={{ headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
