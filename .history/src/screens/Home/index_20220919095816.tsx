import { View, Image } from "react-native";

import logoImg from "../../assets/logo-nlw-esports.png";
import { GameCard } from "../../components/GameCard";
import { Heading } from "../../components/Heading";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo}></Image>
      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      ></Heading>
      <GameCard data:GameCardProps={(id: 1, name: 'League of Legends',     ads: '4',
    cover: '../assets/games/game-1.png')}></GameCard>
    </View>
  );
}
