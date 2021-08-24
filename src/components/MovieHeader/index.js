import React from "react";
import {
  Text,
  View,
  Image,
  Pressable,
  Linking,
  TouchableOpacity,
} from "react-native";
import noPhoto from "../../../assets/no-photo.png";

import styles from "./styles";
import { COLORS } from "../../shared/colors";
import { Ionicons } from "@expo/vector-icons";

import { useFonts } from "@use-expo/font";

import { imdbLink } from "../../utilities/strings";

export var MovieHeader = ({
  title,
  date,
  genres,
  duration,
  onBack,
  image,
  imdb,
}) => {
  const [fonts] = useFonts({
    "Montserrat-Bold": require("../../shared/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Regular": require("../../shared/fonts/Montserrat-Regular.ttf"),
  });
  if (!fonts) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <Pressable style={styles.back} onPress={onBack}>
          <Ionicons name="arrow-back-outline" size={28} color={COLORS.sun} />
        </Pressable>
        <View style={styles.subContainer}>
          <Image
            style={styles.img}
            source={image == "N/A" ? noPhoto : { uri: image }}
          />
          <View>
            <Text style={[styles.title, { fontFamily: "Montserrat-Bold" }]}>
              {title}
            </Text>
            <Text style={[styles.txt, { fontFamily: "Montserrat-Regular" }]}>
              {date}
            </Text>
            <Text style={[styles.txt, { fontFamily: "Montserrat-Regular" }]}>
              {genres}
            </Text>
            <Text style={[styles.txt, { fontFamily: "Montserrat-Regular" }]}>
              {duration}
            </Text>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => Linking.openURL(imdbLink(imdb))}
            >
              <Text style={[styles.btnTxt, { fontFamily: "Montserrat-Bold" }]}>
                {"IMDB Page"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
};
