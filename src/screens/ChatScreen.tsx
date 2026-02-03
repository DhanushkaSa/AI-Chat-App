import { Button, FlatList, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import AppHeader from '../components/AppHeader'
import SendMessageCard from '../components/SendMessageCard';
import ResponseMessageCard from '../components/ResponseMessageCard';
import { s } from 'react-native-size-matters';
import { RECEIVED, SENT } from '../constants/chat';
import ChatInput from '../components/ChatInput';
import EmptyChat from '../components/EmptyChat';
import { useKeyboardState } from '../hooks/UseKeyboardState';
import { getHuggingFaceResponse } from '../api/http-requests';

interface MessageProps {
  id: number,
  message: string,
  type: string
}
const ChatScreen = () => {



  const [messagesData, setMessagesData] = useState<MessageProps[]>([])
  const [msgInput, setMsgInput] = useState("")
  const flatListRef = useRef<FlatList>(null)
  const { isKeyboardVisible, keyboardHight } = useKeyboardState();
  const [isLoading, setIsLoading] = useState(false);

  console.log("MSG All : ", messagesData);

  const scrollToBottom = () => {
    if (flatListRef.current && messagesData.length > 0) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  }




  useEffect(() => {
    scrollToBottom()
  }, [messagesData, isKeyboardVisible])


  const onMessageSent = () => {
    console.log("User type ", msgInput);
    setMessagesData(prevMessages => {

      return [
        ...prevMessages,
        {
          message: msgInput,
          id: prevMessages.length + 1,
          type: SENT
        }
      ]

    }
    )

    setTimeout(() => {
      // onGetResponse("Hello, I'm AI assistant. How can I help you today?")
      setIsLoading(true)
      getHuggingFaceResponse(msgInput).then((response) => {

        onGetResponse(response)
        setIsLoading(false)
      })
    }, 40)
  }

  const onGetResponse = (response: string) => {

    setMessagesData(prevMessages => {

      return [
        ...prevMessages,
        {
          message: response,
          id: prevMessages.length + 1,
          type: RECEIVED
        }
      ]

    }
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior='padding'>
        <AppHeader />




        <FlatList
          ref={flatListRef}
          data={messagesData}
          keyExtractor={(item) => item.id?.toString()}
          renderItem={({ item }) => {
            return (
              item.type === SENT ? <SendMessageCard message={item.message} /> : <ResponseMessageCard message={item.message} />
            )
          }}

          contentContainerStyle={{ padding: s(8) }}
          ListEmptyComponent={EmptyChat}
          onLayout={scrollToBottom}
          onContentSizeChange={scrollToBottom}

        />

        <View style={{ paddingHorizontal: s(8) }}>
          {isLoading && <ResponseMessageCard message={"Thinking... Thinking..."} />}

        </View>

        <ChatInput
          messageValue={msgInput}
          setMessageValue={setMsgInput}
          onMessageSent={onMessageSent}
        />
      </KeyboardAvoidingView>

    </View>
  )
}

export default ChatScreen

const styles = StyleSheet.create({})