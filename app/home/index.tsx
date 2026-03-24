import Header from '@/components/header/Header';
import { History } from '@/components/history/History';
import { Publications } from '@/components/publications/Publications';
import React from 'react';
import { ScrollView } from 'react-native';

const Home = () => {
  return (
    <ScrollView>
      <Header/>
      <History/>

      <Publications/>
    </ScrollView>
  )
}

export default Home