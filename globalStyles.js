import { StyleSheet, Platform, StatusBar } from "react-native";

const Styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  test: {
    flex: 1,
    backgroundColor: "#0a1929",
  },
});
export default Styles;
