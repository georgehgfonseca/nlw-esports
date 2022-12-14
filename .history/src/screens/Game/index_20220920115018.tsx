import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";

import { Background } from "../../components/Background";
import { styles } from "./styles";

export function Game() {
  const route = useRoute();
  const game = route.params;
  console.log(game);
  return (
    <Background>
      <SafeAreaView style={styles.container}></SafeAreaView>{" "}
    </Background>
  );
}
