

import { createNativeStackNavigator } from '@react-navigation/native-stack';


import React from 'react';

import Home from '../Screens/Home';
import TabNavigation from './TabNavigation';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
    </Stack.Navigator>
  );
};
export default StackNavigation;
