import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../views/Login';
import SignUp from '../views/SignUp';
import MyFlights from '../views/MyFlights';
import From from '../views/Bookings/From';
import To from '../views/Bookings/To';
import SelectDate from '../views/Bookings/SelectDate';
import Passenger from '../views/Bookings/Passenger';
import Results from '../views/Bookings/Results';

const Stack = createNativeStackNavigator();

export default class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Results'
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name='Login' component={Login} />

          <Stack.Screen name='SignUp' component={SignUp} />

          <Stack.Screen name='MyFlights' component={MyFlights} />

          <Stack.Screen name='From' component={From} />

          <Stack.Screen name='To' component={To} />

          <Stack.Screen name='SelectDate' component={SelectDate} />

          <Stack.Screen name='Passenger' component={Passenger} />

          <Stack.Screen name='Results' component={Results} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
