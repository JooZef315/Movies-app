import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../shared/colors";

import { useFonts } from "@use-expo/font";

export var Warning = ({ icon, title, text }) => {
  const [fonts] = useFonts({
    "Montserrat-Bold": require("../../shared/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Regular": require("../../shared/fonts/Montserrat-Regular.ttf"),
  });
  if (!fonts) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <Ionicons name={icon} size={108} color={COLORS.hitGrey} />
        <Text style={[styles.title, { fontFamily: "Montserrat-Bold" }]}>
          {title}
        </Text>
        <Text style={[styles.txt, { fontFamily: "Montserrat-Regular" }]}>
          {text}
        </Text>
      </View>
    );
  }
};
