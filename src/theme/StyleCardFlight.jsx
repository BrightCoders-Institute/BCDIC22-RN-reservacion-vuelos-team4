import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export const stylesContainer = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const stylesCards = StyleSheet.create({
  containerCards: {
    flexDirection: 'row',
    width: 340,
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  StyleText: {
    fontSize: 25,
    fontWeight: '900',
    marginLeft: 10,
  },
  StyleText2: {
    fontSize: 25,
    fontWeight: '900',
    marginRight: 10,
  },
  StyleTextTable: {
    fontSize: 15,
    fontWeight: '100',
  },
  StyleTextTableAling: {
    justifyContent: 'flex-end',
  },
});
