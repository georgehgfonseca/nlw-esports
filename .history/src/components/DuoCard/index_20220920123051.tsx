import React from "react";
import { View } from "react-native";
import { DuoInfo } from "../DuoInfo";

import { styles } from "./styles";

export function DuoCard() {
  return (
    <View style={styles.container}>
      <DuoInfo label="Nome" value="Fonseca"></DuoInfo>
      <DuoInfo label="Nome" value="Fonseca"></DuoInfo>
      <DuoInfo label="Nome" value="Fonseca"></DuoInfo>
      <DuoInfo label="Nome" value="Fonseca" colorValue={"red"}></DuoInfo>
    </View>
  );
}
