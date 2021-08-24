import React from "react";
import {
  View,
  TextInput,
  Pressable,
  Text,
  TouchableOpacity,
} from "react-native";

import styles from "./styles";
import { COLORS } from "../../shared/colors";
import { Ionicons } from "@expo/vector-icons";

export var HomeHeader = ({
  clearBtn,
  onSearchBtn,
  onSearch,
  onClearHistory,
}) => {
  return (
    <View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter Movie Name ..."
          placeholderTextColor={COLORS.sun}
          keyboardType="default"
          onChangeText={onSearch}
          onSubmitEditing={onSearchBtn}
        />
        <Pressable style={styles.searchBtn} onPress={onSearchBtn}>
          <Ionicons name="search-outline" size={28} color={COLORS.sun} />
        </Pressable>
      </View>
      {clearBtn ? (
        <TouchableOpacity style={styles.clearBtn} onPress={onClearHistory}>
          <Text style={styles.clearTxt}>{"Clear search history"}</Text>
          <Ionicons name="trash" size={22} color={COLORS.black} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};
