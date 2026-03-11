import { Slot } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';

import '../global.css';


 function RootLayout() {

  return (
    <GestureHandlerRootView className='pt-20 dark:bg-black '>
      {/* <Stack>
        <Stack.Screen name="home/index" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" /> */}
      <Slot

      />
    </GestureHandlerRootView>
  );
}

export default RootLayout
