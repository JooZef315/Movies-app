import { StyleSheet } from "react-native";
import { COLORS } from "../../shared/colors";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    paddingTop: 72,
  },
  input: {
    width: 300,
    color: COLORS.white,
    fontSize: 18,
    paddingHorizontal: 10,
    paddingVertical: 16,
    backgroundColor: COLORS.spaceCadet,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderRightColor: COLORS.sun,
    borderRightWidth: 1,
  },
  searchBtn: {
    backgroundColor: COLORS.cloudBurst,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  clearBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginStart: 200,
    marginEnd: 8,
    marginBottom: 6,
    padding: 4,
    backgroundColor: COLORS.sun,
    borderRadius: 6,
  },
  clearTxt: {
    marginEnd: 4,
  },
});
