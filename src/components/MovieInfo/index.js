import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

import { useFonts } from "@use-expo/font";

export var MovieInfo = ({ title, text }) => {
  const [fonts] = useFonts({
    "Montserrat-Bold": require("../../shared/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Regular": require("../../shared/fonts/Montserrat-Regular.ttf"),
  });
  if (!fonts) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <Text style={[styles.title, { fontFamily: "Montserrat-Bold" }]}>
          {title}
        </Text>
        <Text style={[styles.text, { fontFamily: "Montserrat-Regular" }]}>
          {text}
        </Text>
      </View>
    );
  }
};
