import { historyUsers } from "@/mock/historyUsers";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import HistoryInformationUser from "./HistoryInformationUser";

const History = () => {
  return (
    <View className="mt-5 flex-row items-center gap-3">

      <View>
        <Image
          source={require('../../assets/images/profile.jpeg')}
          width={50}
          height={50}
          className="object-cover w-[85px] h-[85px] rounded-full relative"
        />
        <View className="bg-white rounded-full absolute right-0 bottom-6 border-4 border-black">
          <AntDesign name="plus" color="black" size={20}/>
        </View>
        <Text className="text-white text-sm text-center font-medium mt-3">Your history</Text>
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={ false }
        data={historyUsers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <HistoryInformationUser
            imageUrl={ item.imageUrl }
            id={ item.id }
            name_user={ item.name_user }
            is_live={ item.is_live }
          />
        )}
      />
    </View>
  );
};

export { History };

