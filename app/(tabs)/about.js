import { Link } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";
import { HomeIcon } from "../../components/Icons";
import { Screen } from "../../components/Screen";

export default function About() {
  return (
    <Screen>
      <ScrollView className="pt-24 bg-black">
        <Link asChild href="/">
          <Pressable>
            {({ pressed }) => (
              <HomeIcon style={{ opacity: pressed ? 0.5 : 1 }} />
            )}
          </Pressable>
        </Link>
        <Text className="text-red-950 font-bold mb-8 text-2xl">
          Sobre el proyecto
        </Text>

        <Text className="text-red-900 mb-4">
          lorem ipsum dolor sit amet,lorem ipsum dolor sit amet,lorem ipsum
          dolor sit amet,lorem ipsum dolor sit amet,lorem ipsum dolor sit
          amet,lorem ipsum dolor sit amet,lorem ipsum dolor sit amet,lorem ipsum
          dolor sit amet,lorem ipsum dolor sit amet,lorem ipsum dolor sit
          amet,lorem ipsum dolor sit amet,lorem ipsum dolor sit amet,lorem ipsum
          dolor sit amet,lorem ipsum dolor sit amet,lorem ipsum dolor sit
          amet,lorem ipsum dolor sit amet.
        </Text>

        <Text className="text-red-900 mb-4">
          lorem ipsum dolor sit amet,lorem ipsum dolor sit amet,lorem ipsum
          dolor sit amet,lorem ipsum dolor sit amet,lorem ipsum dolor sit
          amet,lorem ipsum dolor sit amet,lorem ipsum dolor sit amet,lorem ipsum
          dolor sit amet,lorem ipsum dolor sit amet,lorem ipsum dolor sit
          amet,lorem ipsum dolor sit amet,lorem ipsum dolor sit amet,lorem ipsum
          dolor sit amet,lorem ipsum dolor sit amet,lorem ipsum dolor sit
          amet,lorem ipsum dolor sit amet.
        </Text>

        <Text className="text-red-900 mb-4">
          lorem ipsum dolor sit amet,lorem ipsum dolor sit amet,lorem ipsum
          dolor sit amet,lorem ipsum dolor sit amet,lorem ipsum dolor sit
          amet,lorem ipsum dolor sit amet,lorem ipsum dolor sit amet,lorem ipsum
          dolor sit amet,lorem ipsum dolor sit amet,lorem ipsum dolor sit
          amet,lorem ipsum dolor sit amet,lorem ipsum dolor sit amet,lorem ipsum
          dolor sit amet,lorem ipsum dolor sit amet,lorem ipsum dolor sit
          amet,lorem ipsum dolor sit amet.
        </Text>

        <Text className="text-red-900 mb-4">
          lorem ipsum dolor sit amet,lorem ipsum dolor sit amet,lorem ipsum
          dolor sit amet,lorem ipsum dolor sit amet,lorem ipsum dolor sit
          amet,lorem ipsum dolor sit amet,lorem ipsum dolor sit amet,lorem ipsum
          dolor sit amet,lorem ipsum dolor sit amet,lorem ipsum dolor sit
          amet,lorem ipsum dolor sit amet,lorem ipsum dolor sit amet,lorem ipsum
          dolor sit amet,lorem ipsum dolor sit amet,lorem ipsum dolor sit
          amet,lorem ipsum dolor sit amet.
        </Text>
      </ScrollView>
    </Screen>
  );
}
