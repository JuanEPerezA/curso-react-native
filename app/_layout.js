import { View } from "react-native";
import { Link, Stack } from "expo-router";
import { Logo } from "../components/Logo";
import { InfoCircleIcon } from "../components/Icons";

export default function layout() {
  return (
    <View className="flex-1">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
          headerTitle: "",
          headerLeft: () => <Logo />,
          headerRight: () => (
            <Link href="/about" className="text-blue-900 text-xl">
              <InfoCircleIcon />
            </Link>
          ),
        }}
      />
    </View>
  );
}
