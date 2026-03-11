import React from 'react'
import { Image, View } from 'react-native'

const Logo = () => {
  return (
    <View>
      <Image
        className='w-[160px] h-[55px] m-auto'
        source={require('../../assets/images/icono_instagram.png')}
      />
    </View>
  )
}

export default Logo