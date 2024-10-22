/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging'
import { localNotificationService } from './src/notification/LocalNotificationService';

messaging().setBackgroundMessageHandler(async remoteMessage=>{
    console.log('Message handled in the background!====================================================',remoteMessage);
    localNotificationService.showlocalNotification(remoteMessage);
});

<App/>

AppRegistry.registerComponent(appName, () => App);