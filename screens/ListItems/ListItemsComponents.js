import React, {
  useCallback,
  useMemo,
  useRef,
  useState,
  useEffect,
} from "react";
import { FlatList } from "react-native";
import { View, Text } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import Styles from "./listItemStyles";
import fetchData from "../../dataFetcher";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import renderItem from "./ItemComponent";
import BottomSheetComponent from "../BottomSheetComponent/BottomSheetComponent";

const ListItemsComponents = () => {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["60%"], []);
  const [clickedCoin, setClickedCoin] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const pressHandler = (item) => {
    setClickedCoin(item);
    bottomSheetRef.current.expand();
  };

  const getData = async () => {
    const fetchedData = await fetchData();
    setData(fetchedData);
    setLoading(true);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading && (
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
            backgroundStyle={Styles.bottomSheet}
          >
            {clickedCoin !== "" && (
              <BottomSheetComponent
                symobol={clickedCoin.symbol.toUpperCase()}
                current_price={clickedCoin.current_price}
                sparkline={clickedCoin.sparkline_in_7d.price}
                imageUrl={clickedCoin.image}
                name={clickedCoin.name}
                change_percent={clickedCoin.price_change_percentage_24h}
                market_cap_rank={clickedCoin.market_cap_rank}
              />
            )}
          </BottomSheet>
        </View>
      )}
    </>
  );
};

export default ListItemsComponents;
