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
    backgroundColor: "#001e3c",
  },
  titleText: {
    color: "#8b639d",
    fontFamily: "DancingScript_600SemiBold",
    fontSize: 25,
  },
  symbolText: {
    color: "orange",
    fontFamily: "DancingScript_700Bold",
  },
  priceText: {
    color: "#db8391",
    fontFamily: "Bellota_700Bold",
    fontSize: 20,
  },
  percentText: {
    fontFamily: "Bellota_700Bold_Italic",
    fontSize: 15,
  },
  itemComponent: {
    backgroundColor: "grey",
  },
  bottomSheet: {
    backgroundColor: "#263238",
  },
});
export default Styles;
