import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters'
import { colors } from '../styles/colors'
import TypingEffect from './TypingEffect'

interface ResponseMessageCardProps {
    message: string
}

const ResponseMessageCard = ({ message }: ResponseMessageCardProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.messageContainer}>
                {/* <Text style={styles.textMessage}>{message}</Text> */}
                <TypingEffect text={message} style={styles.textMessage} />

            </View>
        </View>
    )
}

export default ResponseMessageCard

const styles = StyleSheet.create({
    container: {
        marginVertical: vs(4),

        marginBottom: vs(12),

    },
    messageContainer: {
        backgroundColor: colors.grayBlack,
        borderRadius: s(20),
        maxWidth: '80%',
        padding: s(10)
    },
    textMessage: {
        color: colors.black,
        fontSize: s(16)
    }
})