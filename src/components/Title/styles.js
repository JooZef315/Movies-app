import { StyleSheet } from "react-native";
import { COLORS } from "../../shared/colors";

export default StyleSheet.create({
  title: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginVertical: 8,
    marginHorizontal: 12,
  },
  txt: {
    color: COLORS.white,
    fontSize: 18,
  },
  border: {
    backgroundColor: COLORS.sun,
    width: 150,
    height: 3,
    marginTop: 10,
    borderRadius: 8,
  },
});
