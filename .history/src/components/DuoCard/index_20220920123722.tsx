import React from "react";
import { View } from "react-native";
import { DuoInfo } from "../DuoInfo";

import { styles } from "./styles";

export interface DuoCardProps {
  id: string;
  hourEnd: string;
  hourStart: string;
  name: string;
  useVoiceChannel: boolean;
  weekDays: string[];
  yearsPlaying: number;
}

export function DuoCard() {
  return (
    <View style={styles.container}>
      <DuoInfo label="Nome" value="Fonseca"></DuoInfo>
      <DuoInfo label="Nome" value="Fonseca"></DuoInfo>
      <DuoInfo label="Nome" value="Fonseca"></DuoInfo>
      <DuoInfo label="Nome" value="Fonseca" colorValue={"green"}></DuoInfo>
    </View>
  );
}
