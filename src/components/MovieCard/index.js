import React from "react";
import { Text, View, Pressable, Image } from "react-native";
import img from "../../../assets/no-photo.png";

import styles from "./styles";

import { useFonts } from "@use-expo/font";

export var MovieCard = ({ title, year, image, onPress }) => {
  const [fonts] = useFonts({
    "Montserrat-Bold": require("../../shared/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Regular": require("../../shared/fonts/Montserrat-Regular.ttf"),
  });
  if (!fonts) {
    return null;
  } else {
    return (
      <>
        <Pressable style={styles.container} onPress={onPress}>
          <View style={styles.imgContainer}>
            <Image style={styles.img} source={{ uri: image }} />
          </View>
          <View style={styles.txtContainer}>
            <Text style={[styles.title, { fontFamily: "Montserrat-Bold" }]}>
              {title}
            </Text>
            <Text style={[styles.txt, { fontFamily: "Montserrat-Regular" }]}>
              {`Released: ${year}`}
            </Text>
          </View>
        </Pressable>
      </>
    );
  }
};
