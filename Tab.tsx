import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import GamesScreen from './screens/GamesScreen';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';

const Tab = createBottomTabNavigator();

const TabM = () =>{
    return(

    

<Tab.Navigator
         initialRouteName='Home'
         backBehavior='history'
         screenOptions={{
          tabBarActiveTintColor: '#3b82f6',
          tabBarStyle: { paddingBottom: 3 }        
         }}
         >
          <Tab.Screen name='Home' component={HomeScreen} options={{
              tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
          }} />
          <Tab.Screen name='All Games' component={GamesScreen} options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="gamepad-variant-outline" size={size} color={color} />
          ),
          }} />
          <Tab.Screen name='Profile' component={ProfileScreen} options={{
              tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="person" size={size} color={color} />
          ),
          }} />
          <Tab.Screen name='Settings' component={SettingsScreen} options={{
              tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="settings" size={size} color={color} />
          ),
          }} />
        </Tab.Navigator>
        
        )
}

export default TabM;