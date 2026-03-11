import Header from '@/components/header/Header';
import { History } from '@/components/history/History';
import { Publications } from '@/components/publications/Publications';
import React from 'react';
import { View } from 'react-native';

const Home = () => {
  return (
    <View>
      <Header/>
      <History/>

      <Publications/>
    </View>
  )
}

export default Home