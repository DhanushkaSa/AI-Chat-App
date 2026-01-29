import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const CameraGallery = () => {

    const [selectedImageUri, setSelectedImageUri] = useState("")
    const openGallery = async () => {
        try {
            const result = await launchImageLibrary({
                mediaType: 'photo'
            });
            console.log(result);
            setSelectedImageUri(result.assets?.[0].uri || "")



        } catch (error) {
            console.log("Error opening gallery: ", error);
        }
    }

    const openCamera = async () => {
        try {
            const result = await launchCamera({
                mediaType: 'photo'
            });
            console.log(result);
            setSelectedImageUri(result.assets?.[0].uri || "")



        } catch (error) {
            console.log("Error opening gallery: ", error);
        }
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: "center", backgroundColor: "black" }}>
            <Text style={{ fontSize: 30, color: "white" }} onPress={openGallery}>Open Gallery</Text>
            {selectedImageUri ? <Image source={{ uri: selectedImageUri }} style={{ width: 200, height: 200, marginTop: 20 }} /> : null}
            <Text style={{ fontSize: 30, color: "white" }} onPress={openCamera}>Open Camera</Text>
        </View>
    )
}

export default CameraGallery

const styles = StyleSheet.create({})