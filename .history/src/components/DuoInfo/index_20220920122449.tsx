import React from "react";
import { ColorValue, Text, View } from "react-native";

import { styles } from "./styles";

interface Props {
  label: string;
  value: string;
  colorValue?: ColorValue;
}
export function DuoInfo({ label, value, colorValue }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}></Text>
      <Text style={styles.value}></Text>
    </View>
  );
}
