import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";

export function useBottomTabOverflow() {
  const bottomTabBarHeight = useBottomTabBarHeight();

  return Platform.OS === "ios" ? bottomTabBarHeight : 0;
}
