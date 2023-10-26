// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import AppNavigator from './src/navigations/AppNavigator';
import { ModalPortal } from 'react-native-modals';

function App() {
  return (
    <>
      <AppNavigator/>
      <ModalPortal/>
    </>
  );
}

export default App;