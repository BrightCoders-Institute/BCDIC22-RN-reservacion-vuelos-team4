import { StyleSheet, View } from 'react-native';
import SignUp from './src/views/SignUp';
import Login from './src/views/Login';
import Constants from 'expo-constants';
import MyFlights from './src/views/MyFlights';

export default function App() {
  return (
    <View style={styles.container}>
      <MyFlights />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
