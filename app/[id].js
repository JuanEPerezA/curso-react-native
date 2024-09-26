import { Link } from "expo-router";
import {
  Pressable,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { HomeIcon } from "../components/Icons";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../components/Screen";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { getGameDetails } from "../lib/metacritic";

export default function Detail() {
  const { id } = useLocalSearchParams();
  const [gameInfo, setGameInfo] = useState(null);

  useEffect(() => {
    if (id) {
      getGameDetails(id).then(setGameInfo);
    }
  }, [id]);

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerLeft: () => {},
          headerTitle: "JUAN ESTEBAN PÉREZ AGUAS",
        }}
      />
      <View>
        {gameInfo === null ? (
          <ActivityIndicator size="large" color="red" />
        ) : (
          <ScrollView>
            <Link asChild href="/">
              <Pressable>
                {({ pressed }) => (
                  <HomeIcon style={{ opacity: pressed ? 0.5 : 1 }} />
                )}
              </Pressable>
            </Link>
            <Text className="text-gray-400 font-bold mb-8 text-2xl">
              Detalle del juego {id}
            </Text>
          </ScrollView>
        )}
      </View>
    </Screen>
  );
}
