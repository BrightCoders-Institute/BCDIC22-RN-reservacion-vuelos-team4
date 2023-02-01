import { StyleSheet } from 'react-native';
import { COLORS } from './colors';
import Constants from 'expo-constants';

export const stylesBooking = StyleSheet.create({
  StyleHeader: {
    fontSize: 30,
    color: COLORS.BLACK_GRAY,
    fontWeight: '800',
    top: Constants.statusBarHeight,
    textAlign: 'left',
    right: 45,
    bottom: 100,
  },
});
