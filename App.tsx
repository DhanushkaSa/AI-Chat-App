
import React, { useEffect } from 'react'
import GoogleSignInLesson from './src/lessons/GoogleSignInLesson'
import CameraGallery from './src/lessons/CameraGallery'
import BootSplash from "react-native-bootsplash";
import Icon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { Text, View } from 'react-native';
import AppIcon from './src/assets/icons/AppIcon';
import AppHeader from './src/components/AppHeader';
import ChatScreen from './src/screens/ChatScreen';



const App = () => {

  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
      console.log("BootSplash has been hidden successfully");
    });
  }, []);


  return (

    <ChatScreen />





  )
}

export default App

