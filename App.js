import './gesture-handler';
import React, { useEffect } from "react";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MyStack from './navigation/AuthStack';
import { StatusBar, View, Alert, Button } from "react-native";
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
import auth from '@react-native-firebase/app';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import UpdateProfile from './src/screens/auth/UpdateProfile';
import ChooseCategory from './src/screens/auth/ChooseCategory';
import CreateSession from './src/screens/auth/CreateSession';
import TrainerLocation from './src/screens/auth/TrainerLocation';
import TrainerAddress from './src/screens/auth/TrainerAddress';
import TrainerProfile from './src/screens/auth/TrainerProfile';
import MySessions from './src/screens/auth/MySessions';

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
}; 2

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
      // Attempt login with permissions
      const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

      if (result.isCancelled) {
         throw 'User cancelled the login process';
      }

      // Once signed in, get the users AccessToken
      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
         throw 'Something went wrong obtaining access token';
      }

      // Create a Firebase credential with the AccessToken
      const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

      // Sign-in the user with the credential
      return auth().signInWithCredential(facebookCredential);
   }



   return (
      <GestureHandlerRootView style={{ flex: 1 }}>

         {/* <MyStack/> */}
         <View>
            {/* {/* <StatusBar translucent backgroundColor={"transparent"} barStyle={"dark-content"}/> */}
        <MySessions/>  
            {/* <Button title='Notification' onPress={handleLocalNotification}
            /> */}

            {/* <Button
               title="Facebook Sign-In"
               onPress={() => onFacebookButtonPress().then(() => console.log('Signed in with Facebook!'))}
            /> */}

         </View>
      </GestureHandlerRootView>

   )
}

export default App;