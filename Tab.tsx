import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import CarScreen from './screens/CarScreen';
import GamesScreen from './screens/GamesScreen';

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
          <Tab.Screen name='Shopping Car' component={CarScreen} options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="cart" size={size} color={color} />
          ),
          }} />
          <Tab.Screen name='Profile' component={ProfileScreen} options={{
              tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="person" size={size} color={color} />
          ),
          }} />
        </Tab.Navigator>
        
        )
}

export default TabM;