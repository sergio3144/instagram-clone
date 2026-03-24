import React from "react";
import { Image, Text, View } from "react-native";
import { FooterPublicationsItems } from "./FooterPublications";
import HeaderPublications from "./header/HeaderPublications";

const Publications = () => {
  return (
    <View className="mt-10">
      <HeaderPublications />

      <Image
        source={{
          uri: "https://cdn.pixabay.com/photo/2021/01/23/16/32/mountainous-5942962_1280.jpg",
        }}
        className="w-full h-[50vh] object-contain mt-5"
        width={100}
        height={100}
      />

      <View className="mx-3 mt-3 flex-row gap-3 justify-between">
        <View className="flex-row gap-3">
          <FooterPublicationsItems
            iconName="ionIcons"
            cuantityItem={24}
            ionicons="heart-outline"
          />
          <FooterPublicationsItems
            cuantityItem={12}
            iconName="iconEvil"
            iconEvil="comment"
          />
          <FooterPublicationsItems
            cuantityItem={24}
            iconFeather="send"
            iconName="iconFeather"
          />
        </View>

        <FooterPublicationsItems
          iconFeather="bookmark"
          iconName="iconFeather"
        />
      </View>

      <Text className="text-white pl-3 mt-2 text-sm opacity-50 font-semibold">Hace 2 horas</Text>
    </View>
  );
};

export { Publications };

