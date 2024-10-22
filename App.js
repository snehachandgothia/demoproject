import './gesture-handler';
import React ,{useEffect}from "react";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MyStack from './navigation/AuthStack';
import { StatusBar, View ,Alert, Button} from "react-native";
import Home from './src/screens/tabScreens/Home';
import Notification from './src/screens/auth/Notifications';
import NotificationDetail from './src/screens/auth/NotificatonDetail';
import InputComponent from './src/components/InputComponent';
import Filter from './src/screens/traineescreens/Filter';
import CreateProfile from './src/screens/auth/CreateProfile';
import messaging from '@react-native-firebase/messaging';
import { fcmService } from './src/notification/FMCService';
import { localNotificationService } from './src/notification/LocalNotificationService';
import PushNotification from 'react-native-push-notification';


const getToken = async () => {
   try {
   const token = await messaging().getToken();
   if (token) {
   console.log('FCM Token:', token);
   return token;
   }
   } catch (error) {
   console.log('Error fetching FCM token:', error);
   }
   };
   
   // const messageListener = async () => {
   //    messaging().onMessage(async remoteMessage => {
   //    Alert.alert("A new FCM message arrived", JSON.stringify(remoteMessage));
   //    });
   //    };

      const handleLocalNotification = () => {
         PushNotification.localNotification({
         channelId: 'channel-id', // Make sure this channel exists in Android
         title: 'Local Notification',
         message: 'This is a test local notification',
         playSound: true,
         soundName: 'default',
         number: 1,
         });
         };
         
   const App = () => {
      useEffect(() => {
      getToken();
      // messageListener();
      fcmService.register();
      fcmService.createNotificationListeners();
      localNotificationService.configure();
      return()=>{
         fcmService.unRegister();
      }
      }, []);
      
      
   return(
        <GestureHandlerRootView style={{ flex: 1 }}>
         
     {/* <MyStack/> */}
     <View>
      {/* <StatusBar translucent backgroundColor={"transparent"} barStyle={"dark-content"}/>
        <CreateProfile/>  */}
         <Button title='Notification' onPress={handleLocalNotification}/>
     </View>
    </GestureHandlerRootView>

   )
}

export default App;