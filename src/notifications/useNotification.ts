import { useEffect } from 'react';
import { Alert, PermissionsAndroid, Platform } from 'react-native';
import messaging, {
  getMessaging,
  onMessage,
} from '@react-native-firebase/messaging';

const requestUserPermission = async () => {
  if (Platform.OS === 'android' && Platform.Version >= 33) {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Notification permission granted');
    } else {
      console.log('Notification permission denied');
    }
  }
};

const getToken = async () => {
  try {
    const token = await messaging().getToken();
    console.log('FCM token:', token);
  } catch (error) {
    console.error('Fail to get token', error);
  }
};

export const useNotification = () => {
  useEffect(() => {
    requestUserPermission();
    getToken();

    const messagingInstance = getMessaging();

    const unsubscribe = onMessage(
      messagingInstance,
      async remoteMessage => {
        console.log('Foreground message:', remoteMessage);

        const title = remoteMessage.notification?.title ?? 'Notification';
        const body = remoteMessage.notification?.body ?? '';

        Alert.alert(title, body);
      },
    );

    return unsubscribe;
  }, []);
};
