import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen, MovieScreen } from "../screens";

import { COLORS } from "../shared/colors";

const { Screen, Navigator } = createNativeStackNavigator();

var Root = () => {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName={"Home"}
        screenOptions={{
          header: () => null,
          contentStyle: { backgroundColor: COLORS.oxfordBlue },
        }}
      >
        <Screen name={"Home"} component={HomeScreen} />
        <Screen name={"Movie"} component={MovieScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Root;
