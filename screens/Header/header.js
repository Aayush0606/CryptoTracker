import React from "react";
import { View, Text } from "react-native";
import { Header, Icon } from "react-native-elements";
import Styles from "./headerStyles";

const HeaderComponent = () => {
  return (
    <View>
      <Header
        elevated={true}
        centerComponent={{
          text: "Crypto Tracker",
          style: Styles.header,
        }}
      />
    </View>
  );
};

export default HeaderComponent;
