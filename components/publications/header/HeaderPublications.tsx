import HistoryInformationUser from '@/components/history/HistoryInformationUser';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Text, View } from 'react-native';

const HeaderPublications = () => {
  return (
    <View className='flex-row justify-between items-center mr-3'>
      <View className='flex-row items-center gap-1'>
        <HistoryInformationUser
          imageUrl='https://media.istockphoto.com/id/1203089751/photo/closeup-profile-view-of-happy-young-bearded-persian-man-smiling.jpg?s=612x612&w=0&k=20&c=kwCRCAFGjeWlYJIqCB6hj5w-4mU6lwOBuXb3WMFDuwQ='
          id={1}
          width={50}
          height={50}
          paddingBorderColor={2}
        />

        <Text className="text-white text-center font-semibold">Cristian.ag</Text>
        <Ionicons name='checkmark-circle-sharp' color={'#5478FF'} size={14}/>
      </View>

      <View className='w-2'>
        <Ionicons name='menu' color={'white'} size={30}/>
      </View>
    </View>
  )
}

export default HeaderPublications