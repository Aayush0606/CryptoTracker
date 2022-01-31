import React, { useState } from "react";
import { View, Text } from "react-native";
import { SearchBar } from "react-native-elements";
import Styles from "./searchBarStyles";

const SearchBarComponent = () => {
  const [search, setSearch] = useState("");
  return (
    <View style={Styles.container}>
      <SearchBar
        containerStyle={Styles.outerContainer}
        inputContainerStyle={Styles.innerContainer}
        placeholder="Search a coin..."
        onChangeText={(e) => setSearch(e)}
        value={search}
      />
    </View>
  );
};

export default SearchBarComponent;
