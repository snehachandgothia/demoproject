import './gesture-handler';
import React from "react";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MyStack from './navigation/AuthStack';
import { StatusBar, View } from "react-native";
import Home from './src/screens/tabScreens/Home';
import Notification from './src/screens/auth/Notifications';
import NotificationDetail from './src/screens/auth/NotificatonDetail';
import InputComponent from './src/components/InputComponent';

const App=()=>{
   return(
        <GestureHandlerRootView style={{ flex: 1 }}>
         
     <MyStack/>
     {/* <View>
      <StatusBar translucent backgroundColor={"transparent"} barStyle={"dark-content"}/>
        <InputComponent/> 
     </View> */}
    </GestureHandlerRootView>

   )
}

export default App;