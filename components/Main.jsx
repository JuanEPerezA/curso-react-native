import { useEffect, useState } from "react";
import { FlatList, ActivityIndicator } from "react-native";
import { getLatestGames } from "../lib/metacritic";
import { AnimationGameCard } from "./GameCards";
import { Screen } from "./Screen";

export function Main() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <Screen>
      {games.length === 0 ? (
        <ActivityIndicator size="large" color="red" />
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.slug}
          renderItem={({ item, index }) => (
            <AnimationGameCard game={item} index={index} />
          )}
        />
      )}
    </Screen>
  );
}
