import { View, TouchableOpacity, ImageBackground } from "react-native";

import { styles } from "./styles";

export function GameCard() {
  return (
    <TouchableOpacity style={styles.container}>
      <ImageBackground style={styles.cover}></ImageBackground>
    </TouchableOpacity>
  );
}
