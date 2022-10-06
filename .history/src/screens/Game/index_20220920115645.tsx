import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

import { Background } from "../../components/Background";
import { styles } from "./styles";
import { GameParams } from "../../@types/navigation";
import { TouchableOpacity, View } from "react-native";
import { THEME } from "../../theme";

// interface RouteParams {
//   id: string;
//   title: string;
//   bannerUrl: string;
// }

export function Game() {
  const route = useRoute();
  const game = route.params as GameParams;

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
            ></Entypo>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Background>
  );
}
