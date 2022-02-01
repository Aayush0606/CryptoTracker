import { StyleSheet, Text, View } from "react-native";
import HeaderComponent from "./screens/Header/header.js";
import SearchBarComponent from "./screens/SearchBar/searchBar.js";
import ListItemsComponents from "./screens/ListItems/ListItemsComponents.js";
import Styles from "./globalStyles.js";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import {
  DancingScript_400Regular,
  DancingScript_500Medium,
  DancingScript_600SemiBold,
  DancingScript_700Bold,
} from "@expo-google-fonts/dancing-script";

import {
  Bellota_300Light,
  Bellota_300Light_Italic,
  Bellota_400Regular,
  Bellota_400Regular_Italic,
  Bellota_700Bold,
  Bellota_700Bold_Italic,
} from "@expo-google-fonts/bellota";

export default function App() {
  let [fontsLoaded] = useFonts({
    DancingScript_400Regular,
    DancingScript_500Medium,
    DancingScript_600SemiBold,
    DancingScript_700Bold,
    Bellota_300Light,
    Bellota_300Light_Italic,
    Bellota_400Regular,
    Bellota_400Regular_Italic,
    Bellota_700Bold,
    Bellota_700Bold_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <GestureHandlerRootView style={Styles.AndroidSafeArea}>
      <View style={Styles.test}>
        <HeaderComponent />
        <ListItemsComponents />
      </View>
    </GestureHandlerRootView>
  );
}
