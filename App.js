import './gesture-handler';
import React, { useEffect } from "react";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MyStack from './navigation/AuthStack';
import { StatusBar, View, Alert, Button } from "react-native";
import Home from './src/screens/tabScreens/Home';
import messaging from '@react-native-firebase/messaging';
import { fcmService } from './src/notification/FMCService';
import { localNotificationService } from './src/notification/LocalNotificationService';
import PushNotification from 'react-native-push-notification';
import auth from '@react-native-firebase/app';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import TrainingCalender from './src/screens/tabScreens/booking/TrainingCalender';

const getToken = async () => {
   try {
      const token = await messaging().getToken();
      if (token) {
         console.log('FCM Token:', token);
         return token;}
   } catch (error) {
      console.log('Error fetching FCM token:', error);}
};

// const messageListener = async () => {
//    messaging().onMessage(async remoteMessage => {
//    Alert.alert("A new FCM message arrived", JSON.stringify(remoteMessage));
//    });
//    };

const handleLocalNotification = () => {
   PushNotification.localNotification({
      channelId: 'channel-id',
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
      return () => {
         fcmService.unRegister();
      }
   }, []);

   async function onFacebookButtonPress() {
      const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
      if (result.isCancelled) {
         throw 'User cancelled the login process';}
      const data = await AccessToken.getCurrentAccessToken();
      if (!data) {
         throw 'Something went wrong obtaining access token';}
      const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
      return auth().signInWithCredential(facebookCredential);}

   return (
      <GestureHandlerRootView style={{ flex: 1 }}>

         {/* <MyStack/> */}
         <View>
            {/* {/* <StatusBar translucent backgroundColor={"transparent"} barStyle={"dark-content"}/> */}
        <TrainingCalender/>  
            {/* <Button title='Notification' onPress={handleLocalNotification}/> */}

            {/* <Button
               title="Facebook Sign-In"
               onPress={() => onFacebookButtonPress().then(() => console.log('Signed in with Facebook!'))}/> */}
         </View>
      </GestureHandlerRootView>

   )
}

export default App;