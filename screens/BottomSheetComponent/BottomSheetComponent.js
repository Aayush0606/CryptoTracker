import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import Styles from "./BottomStyles";
import { NativeViewGestureHandler } from "react-native-gesture-handler";
import { Avatar } from "react-native-elements";
import Chart from "../Chart/chart";
const BottomSheetComponent = ({
  symobol,
  current_price,
  sparkline,
  imageUrl,
  name,
  change_percent,
  market_cap_rank,
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
                size={40}
                rounded
                source={{ uri: imageUrl }}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={Styles.coinSymbol}>{symobol}</Text>
              <View style={Styles.rankContainer}>
                <Text style={Styles.coinRank}>#{market_cap_rank}</Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={Styles.coinName}>{name}</Text>
          </View>
        </View>
        <View>
          <View>
            <Text style={Styles.timePeriod}>7D</Text>
          </View>
          <View>
            <Text
              style={[
                { color: change_percent > 0 ? "green" : "red" },
                Styles.percentText,
              ]}
            >
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
