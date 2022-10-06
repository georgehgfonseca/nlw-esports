import { useEffect, useState } from "react";
import { View, Image, FlatList } from "react-native";

import logoImg from "../../assets/logo-nlw-esports.png";
import { GameCard, GameCardProps } from "../../components/GameCard";
import { Heading } from "../../components/Heading";
import { styles } from "./styles";
import { GAMES } from "../../utils/games";

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>();
  useEffect(() => {
    fetch("http://192.168.31.154:3333/games")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo}></Image>
      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      ></Heading>
      <FlatList
        data={GAMES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameCard data={item}></GameCard>}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
      ></FlatList>
    </View>
  );
}
