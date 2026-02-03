
import axios from 'axios';
// import { HUGGING_FACE_KEY } from '../keys/keys';
import { Alert } from 'react-native';
import { HUGGING_FACE_API_KEY } from '../keys/keys';

const huggingFaceUrl = 'https://router.huggingface.co/v1/chat/completions';
export const getHuggingFaceResponse = async (msg: string) => {
  try {
    const response = await axios.post(
      huggingFaceUrl,
      {
        model: 'deepseek-ai/DeepSeek-V3-0324',
        messages: [{ role: 'user', content: msg }],
        max_tokens: 500,
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${HUGGING_FACE_API_KEY}`,
          'Content-Type': 'application/json',
        },
      },
    );

    return response.data?.choices[0]?.message?.content;
  } catch (error) {
    const errorMessage =
      (error as Error)?.message || 'An unknown error occurred';
    console.log(JSON.stringify(errorMessage));
    // Alert.alert(errorMessage);
    return 'An error occurred ' + errorMessage;
  }
};
