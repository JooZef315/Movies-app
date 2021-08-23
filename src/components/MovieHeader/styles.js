import { StyleSheet } from "react-native";
import { COLORS } from "../../shared/colors";

export default StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: COLORS.spaceCadet,
    marginTop: 24,
    shadowColor: COLORS.oxfordBlue,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 1,
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 8,
  },
  back: {
    marginHorizontal: 12,
    margin: 10,
  },
  img: {
    width: 140,
    height: 180,
    margin: 6,
    marginEnd: 24,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.sun,
  },
  title: {
    color: COLORS.white,
    fontSize: 18,
    marginVertical: 6,
  },
  txt: {
    color: COLORS.white,
    fontSize: 14,
    marginVertical: 2,
  },
  btn: {
    backgroundColor: COLORS.sun,
    marginTop: 10,
    padding: 10,
    borderRadius: 6,
    maxWidth: 104,
  },
  btnTxt: {
    fontWeight: "bold",
    fontSize: 14,
  },
});
