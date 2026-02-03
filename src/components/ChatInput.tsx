import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters'
import { colors } from '../styles/colors'
import Feather from 'react-native-vector-icons/Feather'

interface ChatInputProps {
    messageValue: string;
    setMessageValue: (message: string) => void;
    onMessageSent: (message: string) => void;
}

const ChatInput = ({ messageValue, setMessageValue, onMessageSent }: ChatInputProps) => {

    const sendMessageHandler = () => {
        if (messageValue.trim().length > 0) {
            onMessageSent(messageValue);
            setMessageValue('');

        }
    }
    return (
        <View style={styles.container}>
            <TextInput style={styles.input}
                value={messageValue}
                onChangeText={setMessageValue}
                placeholder="Type a message..."
                multiline
            />
            <TouchableOpacity style={styles.sendButton} onPress={sendMessageHandler}>
                <Feather name="send" size={s(15)} color={colors.white} />
            </TouchableOpacity>
        </View>
    )
}

export default ChatInput

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: s(10),
        backgroundColor: colors.white,
        borderTopWidth: 1,
        borderTopColor: colors.mediumGray,
        marginBottom: vs(30)
    },
    input: {
        flex: 1,
        backgroundColor: colors.gray,
        paddingHorizontal: s(15),
        paddingVertical: vs(10),
        marginRight: s(10),
        borderRadius: s(20)
    },
    sendButton: {
        width: s(35),
        height: s(35),
        borderRadius: s(20),
        backgroundColor: colors.black,
        justifyContent: "center",
        alignItems: "center"
    }
})