import React from "react";
import { View, Text } from "react-native";
import { Header, Icon } from "react-native-elements";
import Styles from "./headerStyles";

const HeaderComponent = () => {
  return (
    <View>
      <Header
        containerStyle={Styles.header}
        elevated={true}
        centerComponent={{
          text: "Crypto Tracker",
          style: Styles.headerText,
        }}
      />
    </View>
  );
};

export default HeaderComponent;
