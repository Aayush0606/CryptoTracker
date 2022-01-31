import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  leftPartition: {
    display: "flex",
    flexDirection: "row",
  },
  coinName: {
    fontSize: 30,
  },
  coinPrice: {
    fontSize: 20,
  },
});
export default Styles;
