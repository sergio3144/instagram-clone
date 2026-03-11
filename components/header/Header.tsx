import { AntDesign, Ionicons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import Logo from "./Logo";

const Header = () => {
  return (
    <View className="flex flex-row justify-between items-center border-b border-white/10 pb-2 px-6">
      <AntDesign name="plus" color="white" size={25} />
      <Logo />
      <Ionicons name="heart-outline" color="white" size={30} />
    </View>
  );
};

export default Header;
