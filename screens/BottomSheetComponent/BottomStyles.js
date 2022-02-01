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
    fontSize: 35,
    fontFamily: "DancingScript_700Bold",
    color: "#ff8a65",
  },
  coinSymbol: {
    color: "#80cbc4",
    fontSize: 20,
    fontFamily: "DancingScript_700Bold",
    marginLeft: 5,
  },
  percentText: {
    fontSize: 25,
    fontFamily: "Bellota_700Bold_Italic",
  },
  timePeriod: {
    fontSize: 20,
    fontFamily: "Bellota_700Bold_Italic",
    color: "#e6ee9c",
  },
  coinRank: {
    fontSize: 20,
    color: "#ed6a90",
    fontFamily: "DancingScript_700Bold",
    textAlign: "center",
  },
  rankContainer: {
    backgroundColor: "#33444d",
    marginLeft: 10,
    minWidth: 45,
    padding: 5,
    borderRadius: 30,
  },
});
export default Styles;
