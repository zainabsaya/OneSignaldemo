import React,{useEffect} from 'react';

import {Text, View} from 'react-native';
import OneSignal from 'react-native-onesignal';
const App = () => {
  useEffect(()=>{
    OneSignal.setLogLevel(6, 0);
    OneSignal.setAppId("535af45f-7d4b-4358-b6cd-00cfaeb9ed00");

    OneSignal.setNotificationWillShowInForegroundHandler(notificationReceivedEvent => {
      console.log("OneSignal: notification will show in foreground:", notificationReceivedEvent);
      let notification = notificationReceivedEvent.getNotification();
      console.log("notification: ", notification);
      const data = notification.additionalData
      console.log("additionalData: ", data);
      // Complete with null means don't show a notification.
      notificationReceivedEvent.complete(notification);
    });
    OneSignal.setNotificationOpenedHandler(notification => {
      console.log("OneSignal: notification opened:", notification);
    });
  },[])
  return (
  <View>
    <Text>Android push</Text>
  </View>
  );
};

export default App;
