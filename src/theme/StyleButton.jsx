import { StyleSheet } from "react-native";
import { COLORS } from "./colors";

export const styleButton = StyleSheet.create({
  container: {
    width: 325,
    height: 50,
    backgroundColor: COLORS.BLUE,
    borderRadius: 10,
    marginTop: 30,
    justifyContent: "center",
    alignSelf: "center",
    shadowColor: COLORS.BLUE,
    shadowOffset: { width: 0, height: 11 },
    shadowOpacity: 0.4,
    shadowRadius: 15.19,
    elevation: 23,
  },
  containerGray: {
    width: 325,
    height: 50,
    backgroundColor: COLORS.LIGHT_GRAY,
    borderRadius: 10,
    marginTop: 25,
    marginBottom: 25,
    justifyContent: "center",
    alignSelf: "center",
  },
  itemsAlign: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
  },
  imgStyle: {
    width: 21,
    height: 21,
    marginRight: 40,
  },
  textStyle: {
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "700",
    fontSize: 16,
    marginRight: 75,
  },
});
