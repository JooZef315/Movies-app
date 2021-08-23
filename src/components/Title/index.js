import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

import { useFonts } from "@use-expo/font";

export var Title = (props) => {
  const [fonts] = useFonts({
    "Montserrat-Bold": require("../../shared/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Regular": require("../../shared/fonts/Montserrat-Regular.ttf"),
  });
  if (!fonts) {
    return null;
  } else {
    return (
      <View style={styles.title}>
        <Text style={[styles.txt, { fontFamily: "Montserrat-Bold" }]}>
          {props.txt}
        </Text>
        <View style={styles.border}></View>
      </View>
    );
  }
};
