import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    alignSelf: "center",
  },
  subTitle: {
    alignSelf: "center",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: "#eee",
  },
});
export default Styles;
