import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

import { useFonts } from "@use-expo/font";

import { imdb } from "../../utilities/strings";

export var RatingInfo = ({ ratings }) => {
  const [fonts] = useFonts({
    "Montserrat-Bold": require("../../shared/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Regular": require("../../shared/fonts/Montserrat-Regular.ttf"),
  });

  if (!fonts || ratings.length == 0) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {ratings.map((rating) => {
          return (
            <View style={styles.rating}>
              <Text style={[styles.site, { fontFamily: "Montserrat-Bold" }]}>
                {imdb(rating.Source)}
              </Text>
              <Text
                style={[
                  styles.siteRating,
                  { fontFamily: "Montserrat-Regular" },
                ]}
              >
                {rating.Value}
              </Text>
            </View>
          );
        })}
      </View>
    );
  }
};
