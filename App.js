import { StyleSheet, Text, View } from "react-native";
import HeaderComponent from "./screens/Header/header.js";
import SearchBarComponent from "./screens/SearchBar/searchBar.js";
import ListItemsComponents from "./screens/ListItems/ListItemsComponents.js";
import Styles from "./globalStyles.js";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView style={Styles.AndroidSafeArea}>
      <HeaderComponent />
      <ListItemsComponents />
    </GestureHandlerRootView>
  );
}
