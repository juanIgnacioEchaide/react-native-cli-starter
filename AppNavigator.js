// AppNavigator.js
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import OptionAScreen from './screens/OptionAScreen';
import OptionBScreen from './screens/OptionBScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Tab1" component={OptionAScreen} />
    <Tab.Screen name="Tab2" component={OptionBScreen} />
  </Tab.Navigator>
);

const AppNavigator = () => (
  <Stack.Navigator initialRouteName="Splash">
    <Stack.Screen
      name="Splash"
      component={SplashScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
