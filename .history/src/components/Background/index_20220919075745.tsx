import { ImageBackground } from "react-native";

import { styles } from "./styles";

interface Props {
  children: React.ReactNode;
}
export function Background() {
  return <ImageBackground style={styles.container}></ImageBackground>;
}
