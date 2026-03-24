import { Ionicons } from '@expo/vector-icons';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Feather from '@expo/vector-icons/Feather';
import React from 'react';
import { Text, View } from 'react-native';



interface Props {
  cuantityItem?: number
  ionicons?: keyof typeof Ionicons.glyphMap
  iconEvil?: keyof typeof EvilIcons.glyphMap
  iconFeather?: keyof typeof Feather.glyphMap
  iconName: 'ionIcons' | 'iconEvil' | 'iconFeather'
}

const FooterPublicationsItems = ({ cuantityItem, ionicons, iconEvil, iconFeather, iconName = 'ionIcons' }: Props) => {

  const iconReder = () => {
    switch (iconName) {
      case 'ionIcons':
        return <Ionicons name={ ionicons } size={30} color='white'/>
      case 'iconEvil':
        return <EvilIcons name={iconEvil} size={30} color="white" />
      case 'iconFeather':
        return <Feather name={iconFeather} size={24} color="white" />
      default:
        break;
    }
  }

  return (
    <View className={`flex-row items-center ${ cuantityItem && 'gap-1' }`}>
      <View>{ iconReder() }</View>
      <Text className='text-white font-semibold text-lg'>{ cuantityItem }</Text>
    </View>
  )
}

export { FooterPublicationsItems };

