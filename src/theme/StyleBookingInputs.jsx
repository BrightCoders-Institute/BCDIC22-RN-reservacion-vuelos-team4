import { StyleSheet } from 'react-native';
import { COLORS } from './colors';

export const stylesObj = {
  textInput: {
    borderColor: COLORS.LIGHT_GRAY,
    width: 400,
    borderBottomWidth: 2,
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 150,
    marginTop: 120,
    marginLeft: 95,
  },
};
export const styles = StyleSheet.create({
  ...stylesObj,
  focusedTextInput: {
    borderColor: COLORS.BLUE,
    marginRight: 50,
    width: 400,
    borderBottomWidth: 2,
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 150,
    marginTop: 120,
    marginLeft: 95,
  },
});
