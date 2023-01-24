import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SignUp from './src/views/SignUp';
import Login from './src/views/Login';
import Constants from 'expo-constants';
import MyFlights from './src/views/MyFlights';
import Navigation from './src/navigation/index';

export default function App() {
  return <Navigation />;
}
