import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import Styles from "./BottomStyles";
import { NativeViewGestureHandler } from "react-native-gesture-handler";
import { Avatar } from "react-native-elements";
import Chart from "../Chart/chart";
const BottomSheetComponent = ({
  current_price,
  sparkline,
  imageUrl,
  name,
  change_percent,
}) => {
  useEffect(() => {}, [name]);

  return (
    <View>
      {/* Header */}
      <View style={Styles.header}>
        <View>
          <View style={Styles.leftPartition}>
            <View>
              <Avatar
                containerStyle={{ margin: 0 }}
                imageProps={{ resizeMode: "contain" }}
                size={35}
                rounded
                source={{ uri: imageUrl }}
              />
            </View>
            <View>
              <Text style={Styles.coinName}>{name}</Text>
            </View>
          </View>
          <View>
            <Text style={Styles.coinPrice}>
              {"₹" +
                current_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </Text>
          </View>
        </View>
        <View>
          <View>
            <Text style={Styles.coinPrice}>7D</Text>
          </View>
          <View>
            <Text style={{ color: change_percent > 0 ? "green" : "red" }}>
              {(change_percent > 0 ? "+" : "") +
                change_percent.toFixed(2) +
                "%"}
            </Text>
          </View>
        </View>
      </View>
      {/* Chart */}
      <View>
        <Chart current_price={current_price} sparkline={sparkline} />
      </View>
    </View>
  );
};

export default BottomSheetComponent;
