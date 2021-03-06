import React, { useEffect, useState } from "react";
import { Dimensions, View, Text } from "react-native";
import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
  ChartYLabel,
} from "@rainbow-me/animated-charts";
import moment from "moment";
import { useSharedValue } from "react-native-reanimated";
import Styles from "./chartStyles";

const { width: SIZE } = Dimensions.get("window");

const Chart = ({ current_price, sparkline }) => {
  const basePrice = useSharedValue(current_price);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const formatUSD = (value) => {
    "worklet";
    if (value === "") {
      return `₹${parseFloat(basePrice.value)
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
    }
    return `₹${parseFloat(value)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
  };

  useEffect(() => {
    formatSparkline();
    basePrice.value = current_price;
    setTimeout(() => {
      setLoading(true);
    }, 0);
  }, [current_price, sparkline]);

  const formatSparkline = () => {
    const sevenDaysAgo = moment().subtract(7, "days").unix();
    let formattedSparkline = sparkline.map((item, index) => {
      return {
        x: sevenDaysAgo + (index + 1) * 3600,
        y: item,
      };
    });

    setData(formattedSparkline);
  };
  return (
    <View>
      <ChartPathProvider
        data={{
          points: data,
          smoothingStrategy: "bezier",
        }}
      >
        <ChartYLabel style={Styles.chartLabel} format={formatUSD} />
        {loading && (
          <View>
            <ChartPath height={SIZE / 2} stroke="#d32f2f" width={SIZE} />
            <ChartDot style={{ backgroundColor: "black" }} />
          </View>
        )}
      </ChartPathProvider>
    </View>
  );
};

export default Chart;
