import { StyleSheet } from "react-native";
import { COLORS } from "./colors";

export const stylesObj = {
  textInput: {
    borderColor: COLORS.LIGHT_GRAY,
    padding: 10,
    width: 300,
    borderBottomWidth: 2,
    fontSize: 20,
    fontWeight: "500",
  },
};
export const styles = StyleSheet.create({
  ...stylesObj,
  focusedTextInput: {
    borderColor: COLORS.BLUE,
    padding: 10,
    width: 300,
    borderBottomWidth: 2,
    fontSize: 20,
    fontWeight: "500",
  },
});
