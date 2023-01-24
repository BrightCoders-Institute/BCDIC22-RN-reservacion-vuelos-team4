import { StyleSheet } from 'react-native';
import { COLORS } from './colors';

export const signUpStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  container2: {
    flex: 1,
    marginTop: -20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const styleComponents = StyleSheet.create({
  containerInput: {
    marginTop: 40,
  },
  StyleDescText: {
    position: 'absolute',
    textAlign: 'justify',
    fontSize: 12,
    color: COLORS.GRAY,
    marginTop: 345,
  },
  StyleHeader: {
    fontSize: 30,
    color: COLORS.BLUE,
    fontWeight: '700',
    marginBottom: 20,
  },
  StyleHeader2: {
    fontSize: 30,
    color: COLORS.BLUE,
    fontWeight: '700',
    marginBottom: 20,
  },
  StyleIcon: {
    position: 'absolute',
    right: 10,
    marginTop: 9,
    fontSize: 25,
  },
  StyleInput: {
    borderColor: COLORS.BLACK_GRAY,
    borderWidth: 1,
    width: 330,
    height: 45,
    padding: 10,
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  StyleInputChange: {
    borderColor: COLORS.BLUE,
    borderWidth: 1,
    width: 330,
    height: 45,
    padding: 10,
    fontSize: 20,
    fontWeight: '600',
  },
  StyleTextInput: {
    fontSize: 20,
    color: COLORS.BLACK_GRAY,
    marginTop: 10,
    marginBottom: 5,
    fontWeight: '300',
  },
});

export const StyleScreen = StyleSheet.create({
  OrStyle: {
    color: COLORS.LIGHT_GRAY,
    alignSelf: 'center',
  },
  containerTextBot: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10,
  },
  TextBot1: {
    color: COLORS.GRAY,
    alignSelf: 'center',
    fontSize: 16,
  },
  textBot2: {
    textDecorationLine: 'underline',
    color: COLORS.BLUE,
    fontSize: 16,
  },
});
