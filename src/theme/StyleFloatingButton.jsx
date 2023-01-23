import { StyleSheet } from 'react-native';
import { COLORS } from './colors';

export const StyleFloatingButton = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  buttonFlight: {
    backgroundColor: COLORS.BLUE,
    borderRadius: 50,
    width: 70,
    height: 70,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 15,
  },
});
