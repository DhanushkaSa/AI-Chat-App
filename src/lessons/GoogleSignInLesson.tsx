import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {
  GoogleSignin,
  GoogleSigninButton,
  isErrorWithCode,
  isSuccessResponse,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const GoogleSignInLesson = () => {

  GoogleSignin.configure({
    webClientId: "699464803818-fkjf3o9n0cagkth8sq1d03duiialgc0n.apps.googleusercontent.com"

  });

  const [userInfo, setUserInfo] = useState(null)

  const GoogleSignIn = async () => {
    console.log("BUTTON PRESSED ✅");
    try {
      console.log("Checking Play Services...");
      await GoogleSignin.hasPlayServices();
      console.log("Calling signIn...");
      const response = await GoogleSignin.signIn();
      console.log("RAW RESPONSE 👉", response);

      if (isSuccessResponse(response)) {
        // console.log("Response = ", JSON.stringify(response.data, null, 3));
        console.log("SUCCESS 🔥", response.data);

        // setUserInfo(response.data);
      } else {
        // sign in was cancelled by user
        console.log("SIGN-IN CANCELLED OR FAILED ❌", response);
      }
    } catch (error) {
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.IN_PROGRESS:
            // operation (eg. sign in) already in progress
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            // Android only, play services not available or outdated
            break;
          default:
            // some other error happened
            console.log("CATCH ERROR ❌", error);
        }
      } else {
        // an error that's not related to google sign in occurred
      }
    }
  };

  return (
    <View style={{ backgroundColor: "black", flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "white", fontSize: 30 }}>Hello</Text>

      <Button title='Google Sign In' onPress={GoogleSignIn} />
      {/* <Text style={{ fontSize: 30, color: "white" }}>{userInfo?.user?.name}</Text>
      <Text style={{ fontSize: 30, color: "white" }}>{userInfo?.user?.email}</Text> */}
    </View>
  )
}

export default GoogleSignInLesson

const styles = StyleSheet.create({})