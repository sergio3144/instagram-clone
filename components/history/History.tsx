import { historyUsers } from "@/mock/historyUsers";
import React from "react";
import { FlatList, View } from "react-native";
import HistoryInformationUser from "./HistoryInformationUser";
import { MyHistory } from "./MyHistory";

const History = () => {
  return (
    <View className="mt-5">
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={historyUsers}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={() => <MyHistory />}
        renderItem={({ item }) => (
          <HistoryInformationUser
            imageUrl={item.imageUrl}
            id={item.id}
            name_user={item.name_user}
            is_live={item.is_live}
          />
        )}
      />
    </View>
  );
};

export { History };

