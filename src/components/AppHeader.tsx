import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppIcon from '../assets/icons/AppIcon'
import { s } from 'react-native-size-matters'

const AppHeader = () => {
  return (
    <View style={styles.appHeader}>
      <AppIcon height={s(50)} width={s(50)} style={styles.icon}/>
      
    </View>
  )
}

export default AppHeader

const styles = StyleSheet.create({
    appHeader: {
        backgroundColor: 'black',
        padding: 20,
    },

    icon:{
        alignSelf:'center',
        marginTop: 25,
    }
})