import { StyleSheet } from "react-native";
import { COLORS } from "../../shared/colors";

export default StyleSheet.create({
  container: {
    margin: 26,
    marginVertical: 64,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    marginTop: 18,
    color: COLORS.hitGrey,
    fontSize: 16,
  },
  txt: {
    textAlign: "center",
    marginVertical: 12,
    color: COLORS.hitGrey,
    fontSize: 16,
  },
});
