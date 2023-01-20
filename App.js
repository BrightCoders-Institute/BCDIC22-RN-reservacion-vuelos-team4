import { StyleSheet, View } from 'react-native';
import SignUp from './src/views/SignUp';
import Login from './src/views/Login';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <Login />
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
