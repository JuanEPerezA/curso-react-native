import { Link } from "expo-router";
import {
  Pressable,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  Image,
} from "react-native";
import { HomeIcon } from "../components/Icons";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../components/Screen";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { getGameDetails } from "../lib/metacritic";
import { Score } from "../components/Score";

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
          headerTitle: "Detalle",
          // headerTitle: gameInfo.title ? gameInfo.title : "Detalle",
        }}
      />
      <View>
        {gameInfo === null ? (
          <ActivityIndicator size="large" color="red" />
        ) : (
          <ScrollView>
            {/* <Link asChild href="/">
              <Pressable>
                {({ pressed }) => (
                  <HomeIcon style={{ opacity: pressed ? 0.5 : 1 }} />
                )}
              </Pressable>
            </Link> */}
            <View className="justify-center items-center text-center">
              <Image
                source={{ uri: gameInfo.img }}
                className="mb-4 rounded"
                style={{ width: 214, height: 294 }}
              />
              <Score score={gameInfo.score} maxScore={100} />
              <Text className="text-gray-50 font-bold text-2xl">
                {gameInfo.title}
              </Text>
              <Text className="text-gray-400 mt-4 text-left text-base">
                {gameInfo.description}
              </Text>
            </View>
          </ScrollView>
        )}
      </View>
    </Screen>
  );
}
