import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Image, Text, View } from "react-native";

const MyHistory = () => {
  return (
    <View className="mr-3">
      <Image
        source={require("../../assets/images/profile.jpeg")}
        style={{ width: 85, height: 85, borderRadius: 999 }}
      />

      <View className="bg-white rounded-full absolute right-0 bottom-6 border-4 border-black">
        <AntDesign name="plus" color="black" size={20} />
      </View>

      <Text className="text-white text-sm text-center font-medium mt-3">
        Your history
      </Text>
    </View>
  );
};

export { MyHistory };

