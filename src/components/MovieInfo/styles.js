import { StyleSheet } from "react-native";
import { COLORS } from "../../shared/colors";

export default StyleSheet.create({
  container: {
    marginVertical: 6,
    paddingHorizontal: 10,
    paddingBottom: 8,
    backgroundColor: COLORS.spaceCadet,
    borderLeftColor: COLORS.sun,
    borderLeftWidth: 4,
    shadowColor: COLORS.oxfordBlue,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 1,
  },
  title: {
    color: COLORS.white,
    fontSize: 16,
    marginVertical: 6,
  },
  text: {
    color: COLORS.loblolly,
    fontSize: 14,
  },
});
