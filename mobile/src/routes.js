import 'react-native-gesture-handler';
import React from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import HomePage from './pages/home';
import MovieDetail from './pages/movieDetail';
import Profile from './pages/profile';

const Home = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Feed" component={HomePage} />
    <Stack.Screen name="Detail" component={MovieDetail} />
  </Stack.Navigator>
);

function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="HomePage">
        <Tab.Screen name="HomePage" component={Home} />
        <Tab.Screen name="Me" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
