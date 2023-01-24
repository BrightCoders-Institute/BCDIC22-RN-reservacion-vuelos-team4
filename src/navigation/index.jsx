import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../views/Login';
import SignUp from '../views/SignUp';
import MyFlights from '../views/MyFlights';

const Stack = createNativeStackNavigator();

export default class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Login'
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name='Login' component={Login} />

          <Stack.Screen name='SignUp' component={SignUp} />

          <Stack.Screen name='MyFlights' component={MyFlights} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
