import { StyleSheet,  View } from 'react-native';
import React from 'react';
import ButtonTouch from './src/components/Button';


export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <ButtonTouch text='Sign Up' state={true} />
        <ButtonTouch text='Sign Up' state={false} />
        <ButtonTouch text='Sign Up with Google' state={true} googleSign='https://aws1.discourse-cdn.com/auth0/optimized/3X/8/a/8a06490f525c8f65d4260204bc3bc7b0e1fb0ba7_2_500x500.png' />
        <ButtonTouch text='Sign Up with Google' state={false} googleSign='https://aws1.discourse-cdn.com/auth0/optimized/3X/8/a/8a06490f525c8f65d4260204bc3bc7b0e1fb0ba7_2_500x500.png' />

      </View>
    </View>
      );
}

      const styles = StyleSheet.create({
        container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
  }
});
