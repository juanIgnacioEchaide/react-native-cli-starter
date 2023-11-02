/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// App.js
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './AppNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
