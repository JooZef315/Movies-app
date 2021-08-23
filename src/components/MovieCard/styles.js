import { StyleSheet } from "react-native";
import { COLORS } from "../../shared/colors";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: COLORS.spaceCadet,
    marginTop: 64,
    margin: 18,
    borderRadius: 10,
    paddingVertical: 12,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 1,
  },
  txtContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: 8,
  },
  imgContainer: {
    marginStart: 16,
    marginTop: -64,
    marginBottom: 24,
    shadowColor: COLORS.oxfordBlue,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 1,
  },
  img: {
    width: 120,
    height: 160,
    borderRadius: 14,
  },
  title: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 6,
  },
  txt: {
    color: COLORS.loblolly,
    fontSize: 14,
  },
});
