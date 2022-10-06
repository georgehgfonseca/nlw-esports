import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { Game } from "../screens/Game";
import React from "react";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="home"
        component={Home}
        // options={{ headerShown: false }}
      ></Screen>
      <Screen name="game" component={Game}></Screen>
    </Navigator>
  );
}
