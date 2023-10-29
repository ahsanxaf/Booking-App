// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import AppNavigator from './src/navigations/AppNavigator';
import { ModalPortal } from 'react-native-modals';
import { Provider } from 'react-redux';
import Store from './src/redux/Store';

function App() {
  return (
    <>
      <Provider store={Store}>
        <AppNavigator/>
        <ModalPortal/>
      </Provider>
    </>
  );
}

export default App;