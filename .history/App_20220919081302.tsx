import { StatusBar } from "react-native";
import { useFonts } from "@expo-google-fonts/inter";
import { Background } from "./src/components/Background";

export default function App() {
  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      ></StatusBar>
    </Background>
  );
}
