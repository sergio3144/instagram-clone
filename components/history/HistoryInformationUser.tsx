import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useRef } from "react";
import { Animated, Text, View } from "react-native";

interface Props {
  id: number;
  imageUrl: string;
  name_user?: string;
  is_live?: boolean;
  width?: number,
  height?: number
  paddingBorderColor?: number
}

const HistoryInformationUser = ({ imageUrl, name_user, width, height, paddingBorderColor, is_live }: Props) => {
  const pulse = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, {
          toValue: 1.1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(pulse, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View>
      <LinearGradient
        colors={["#feda75", "#fa7e1e", "#d62976", "#962fbf", "#4f5bd5"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          width: width ? width : 86,
          height: height ? height : 86,
          borderRadius: 43,
          padding: paddingBorderColor ? paddingBorderColor : 3,
          marginHorizontal: 6,
        }}
      >
        <View className={`bg-black ${is_live ? "p-3.5" : "p-1"} rounded-full`}>
          <Animated.Image
            source={{ uri: imageUrl }}
            className="w-full h-full rounded-full"
            style={{
              transform: is_live ? [{ scale: pulse }] : '',
            }}
          />
        </View>
      </LinearGradient>
      {is_live && (
        <View className="absolute text-center self-center bg-rose-500 bottom-6 px-1 rounded-md border-2 border-black">
          <Text className="text-white text-xs font-bold">Live</Text>
        </View>
      )}
      {name_user && <View className="mt-2">
        <Text className="text-white text-sm text-center font-medium">
          {name_user}
        </Text>
      </View>}
    </View>
  );
};

export default HistoryInformationUser;
