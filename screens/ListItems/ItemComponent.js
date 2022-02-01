import { ListItem, Avatar } from "react-native-elements";
import Styles from "./listItemStyles";
import { View } from "react-native";
const renderItem = (item, pressHandler) => {
  return (
    <ListItem
      containerStyle={Styles.itemContainer}
      onPress={() => pressHandler(item)}
    >
      <Avatar
        containerStyle={{ margin: 0 }}
        imageProps={{ resizeMode: "contain" }}
        size={65}
        rounded
        source={{ uri: item.image }}
      />
      <ListItem.Content style={Styles.content}>
        <View style={Styles.title}>
          <ListItem.Title style={Styles.titleText}>{item.name}</ListItem.Title>
          <ListItem.Title style={Styles.symbolText}>
            {item.symbol.toUpperCase()}
          </ListItem.Title>
        </View>
        <View style={Styles.subTitle}>
          <ListItem.Subtitle style={Styles.priceText}>
            {"₹" +
              item.current_price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </ListItem.Subtitle>
          <ListItem.Subtitle
            style={[
              { color: item.price_change_percentage_24h > 0 ? "green" : "red" },
              Styles.percentText,
            ]}
          >
            {(item.price_change_percentage_24h > 0 ? "+" : "") +
              item.price_change_percentage_24h.toFixed(2) +
              "%"}
          </ListItem.Subtitle>
        </View>
      </ListItem.Content>
    </ListItem>
  );
};

export default renderItem;
