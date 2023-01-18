// import * as React from 'react';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import store from './Redux/Store/Store';
import {Provider} from 'react-redux';
import StackNavigation from './src/Navigation/StackNavigation';
import TabNavigation from './src/Navigation/TabNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
    </SafeAreaProvider>
    </Provider>
  );
};

export default App;
