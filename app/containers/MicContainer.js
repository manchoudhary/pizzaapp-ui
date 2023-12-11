import {Text, VStack, Pressable, Center, HStack} from 'native-base';
import React, {useState, useEffect} from 'react';
import {Modal} from 'react-native';

import Voice from '@react-native-voice/voice';
import Tts from 'react-native-tts';

import CustomIcon from '../theme/icons/icon';
import {colors, screens} from '../constants';

export default function MicContainer({
  visible,
  onClose,
  navigation,
  que,
  ansBtn = [{title: 'Veg Pizza', action: () => {}}],
}) {
  const [isListening, setIsListening] = useState(false);
  const [recognizedText, setRecognizedText] = useState('');

  useEffect(() => {
    Voice.onSpeechStart = () => {
      console.log('Speech started');
    };

    Voice.onSpeechRecognized = e => {
      console.log('Speech recognized', e);
      setRecognizedText(e.value[0]);
    };

    Voice.onSpeechEnd = () => {
      console.log('Speech ended');
    };

    Voice.onSpeechResults = e => {
      setRecognizedText(e.value[0]);
      callAPItoFetchAudioRes(e.value[0]);
      setIsListening(false);
      console.log('Speech results', e);
    };

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  useEffect(() => {
    Tts.setDefaultLanguage('en-US'); // Set default language (optional)
    Tts.addEventListener('tts-finish', () => {
      console.log('Speech finished');
    });

    return () => {
      Tts.stop(); // Stop speaking when component unmounts
      Tts.removeEventListener('tts-finish', () => {});
    };
  }, []);

  const speakText = (text: string) => {
    Tts.speak(text);
  };

  const callAPItoFetchAudioRes = query => {
    try {
      fetch('https://dev.voicexp.ai/voice-controller/voice/process', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          statement: query,
        }),
      })
        .then(res => res.json())
        .then(data => {
          try {
            const {
              conversation,
              action: {
                name,
                params: {type},
              },
            } = data;

            if (conversation) {
              speakText(conversation);
            } else {
              speakText(
                'Not Found any response, please search for something else',
              );
              return;
            }

            if (name === 'Search') {
              navigation.navigate(screens.inside.search, {query: type});
            }
          } catch (error) {
            console.log(error);
            speakText(
              'Not Found any response, please search for something else',
            );
          }
        })
        .catch(error => {
          console.log({error});
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <VStack flex={1} justifyContent={'flex-end'}>
        <VStack bg={colors.black3}>
          <Pressable
            alignSelf={'flex-end'}
            px={4}
            pt={4}
            onPress={() => onClose()}>
            <CustomIcon
              name={'CloseCircle'}
              width={24}
              height={24}
              fill={'transparent'}
              stroke={'white'}
            />
          </Pressable>
          <Pressable
            onPress={async () => {
              if (isListening) {
                await Voice.stop();
                setIsListening(false);
              } else {
                await Voice.start('en-US');
                setIsListening(true);
              }
            }}>
            <Center
              bg={colors.white}
              p={4}
              mx={4}
              mb={2}
              borderRadius={'full'}
              alignSelf={'center'}>
              <CustomIcon
                name={'MicIcon'}
                width={30}
                height={30}
                fill={colors.white}
                stroke={colors.blue_royal}
              />
            </Center>
          </Pressable>
          <Text textAlign={'center'} color={colors.white}>
            {recognizedText ? recognizedText : 'Speak Now'}
          </Text>
          <Text textAlign={'center'} color={colors.white} mt={2}>
            {que ?? 'Which pizza are you craving for?'}
          </Text>
          <HStack justifyContent={'center'} py={2}>
            {ansBtn.map(btn => {
              return (
                <Pressable
                  borderColor={colors.white}
                  borderWidth={1}
                  px={2}
                  py={1}
                  borderRadius={4}>
                  <Text color={colors.white} fontSize={12}>
                    {btn.title}
                  </Text>
                </Pressable>
              );
            })}
          </HStack>
        </VStack>
      </VStack>
    </Modal>
  );
}
