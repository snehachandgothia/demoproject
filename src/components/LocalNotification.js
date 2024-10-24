import PushNotification from 'react-native-push-notification';

const LocalNotification=()=>{
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
};

export default LocalNotification;