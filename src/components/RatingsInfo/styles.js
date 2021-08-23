import { StyleSheet } from "react-native";
import { COLORS } from "../../shared/colors";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 6,
    marginTop: 12,
    padding: 16,
    backgroundColor: COLORS.spaceCadet,
    shadowColor: COLORS.oxfordBlue,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 1,
  },
  rating: {
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
  },
  site: {
    color: COLORS.sun,
    fontSize: 14,
    marginVertical: 3,
  },
  siteRating: {
    color: COLORS.loblolly,
    fontSize: 14,
    marginVertical: 3,
  },
});
