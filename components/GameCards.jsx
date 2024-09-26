import { useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Pressable,
} from "react-native";
import { Score } from "./Score";
import { Link } from "expo-router";

import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

export function GameCard({ game }) {
  return (
    <Link asChild href={`/${game.slug}`}>
      <StyledPressable className="active:opacity-70 border border-black active:border-blue-200 mb-2 bg-neutral-900 p-4 rounded-xl">
        <View
          className="flex-row gap-4"
          key={game.slug}
          //   style={styles.card}
        >
          <Image source={{ uri: game.image }} style={styles.image} />
          <View className="flex-shrink">
            <Text className="mb-1 text-white" style={styles.title}>
              {game.title}
            </Text>
            <Score score={game.score} maxScore={100} />
            <Text
              className="mt-2 flex-shrink text-white/50"
              style={styles.description}
            >
              {game.description.slice(0, 100)}...
            </Text>
          </View>
        </View>
      </StyledPressable>
    </Link>
  );
}
export function AnimationGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 42,
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    // color: "white",
  },
  description: {
    fontSize: 16,
    // color: "white",
  },
  //   score: {
  //     fontSize: 20,
  //     fontWeight: "bold",
  //     marginTop: 10,
  //     color: "green",
  //   },
});
