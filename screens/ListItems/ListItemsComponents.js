import React, { useCallback, useMemo, useRef, useState } from "react";
import { FlatList } from "react-native";
import { View, Text } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import Styles from "./listItemStyles";
import data from "../../fakeData";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import renderItem from "./ItemComponent";
import BottomSheetComponent from "../BottomSheetComponent/BottomSheetComponent";

const ListItemsComponents = () => {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["60%"], []);
  const [clickedCoin, setClickedCoin] = useState("");
  const pressHandler = (item) => {
    setClickedCoin(item);
    bottomSheetRef.current.snapToIndex(0);
    // console.log(bottomSheetRef.current);
  };

  return (
    <>
      <View style={{ flex: 1 }}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={data}
          renderItem={({ item }) => renderItem(item, pressHandler)}
        />

        <BottomSheet
          ref={bottomSheetRef}
          index={-1}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
        >
          {clickedCoin !== "" && (
            <BottomSheetComponent
              current_price={clickedCoin.current_price}
              sparkline={clickedCoin.sparkline_in_7d.price}
              imageUrl={clickedCoin.image}
              name={clickedCoin.name}
              change_percent={
                clickedCoin.price_change_percentage_7d_in_currency
              }
            />
          )}
        </BottomSheet>
      </View>
    </>
  );
};

export default ListItemsComponents;
