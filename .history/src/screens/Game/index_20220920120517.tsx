import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Image, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

import logoImg from "../../assets/logo-nlw-esports.png";
import { Background } from "../../components/Background";
import { styles } from "./styles";
import { GameParams } from "../../@types/navigation";
import { THEME } from "../../theme";
import { Heading } from "../../components/Heading";

// interface RouteParams {
//   id: string;
//   title: string;
//   bannerUrl: string;
// }

export function Game() {
  const route = useRoute();
  const game = route.params as GameParams;
  const navigation = useNavigation();

  function handleGoBack() {
    navigator.
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            ></Entypo>
          </TouchableOpacity>
          <Image source={logoImg} style={styles.logo}></Image>
          <View style={styles.right} />
        </View>
        <Heading
          title={game.title}
          subtitle="Conecte-se e começe a jogar!"
        ></Heading>
      </SafeAreaView>
    </Background>
  );
}
