import * as React from 'react';
import {Text, View ,Image} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Favorite from '../Screens/Favorite';


const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator  initialRouteName="Product"
    screenOptions={{
      headerShown: false,
    }}>
     <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../image/home1.png')}
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#e91e63' : 'black',
              }}
            />
          ),
        }}
      />
    
      <Tab.Screen name="Favorite" component={Favorite}   options={{
          title: 'Favorite',
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../image/heart.png')}
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? 'red' : 'black',
              }}
            />
          ),
        }} />








      
    </Tab.Navigator>
  );
};
export default TabNavigation;
