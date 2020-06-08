import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {StatusBar} from 'react-native';
import MyProvider from './services/provider'

import Routes from './routes';

export default function App() {
  return (
    <MyProvider>
      <Routes />
    </MyProvider>
  );
}
