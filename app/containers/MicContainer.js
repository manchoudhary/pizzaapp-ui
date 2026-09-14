import {Text, VStack, Pressable, Center, HStack} from 'native-base';
import React, {useState, useEffect} from 'react';
import {
  Alert,
  Image,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import Voice from '@react-native-community/voice';
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
  const [noRecordMsg, setNoRecordMsg] = useState(false);
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;
    // Voice.onSpeechStart = () => {
    //   console.log('Speech started');
    // };

    // Voice.onSpeechRecognized = e => {
    //   console.log('Speech recognized', e);
    //   setRecognizedText(e.value[0]);
    // };

    // Voice.onSpeechEnd = () => {
    //   console.log('Speech ended');
    // };

    // Voice.onSpeechResults = e => {
    //   console.log('Speech results>>>', e);
    //   setRecognizedText(e.value[0]);
    //   callAPItoFetchAudioRes(e.value[0]);
    //   setIsListening(false);
    //   console.log('Speech results', e);
    // };

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  // useEffect(() => {
  //   Tts.setDefaultLanguage('en-US'); // Set default language (optional)
  //   Tts.addEventListener('tts-finish', () => {
  //     console.log('Speech finished');
  //   });

  //   return () => {
  //     Tts.stop(); // Stop speaking when component unmounts
  //     Tts.removeEventListener('tts-finish', () => {});
  //   };
  // }, []);

  const speakText = text => {
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
          console.log('data>>>>>', data);
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
  // const onClickListening = async () => {
  //   if (isListening) {
  //     await Voice.stop();
  //     setIsListening(false);
  //   } else {
  //     await Voice.start('en-US');
  //     setIsListening(true);
  //   }
  // };
  const onSpeechResults = async e => {
    console.log('Speech??', e);
    await Voice.stop();
    console.log('Speech??', e);
    callAPItoFetchAudioRes(e.value[0]);
    // setSearchText(e.value[0]);
    setIsListening(false);
  };
  const onSpeechError = async e => {
    console.log('error', e);
    await Voice.stop();
    setIsListening(false);
    if (e.error.message === '7/No match') {
      setNoRecordMsg(true);
    } else {
      // setLoading(false);
    }
    Voice.destroy().then(Voice.removeAllListeners);
  };
  const startRecognizing = async () => {
    try {
      console.log('Recognizing.......');
      setIsListening(true);
      setNoRecordMsg(false);
      setSearchData([]);
      await Voice.start('en-US');
    } catch (e) {
      console.error(e);
    }
  };
  console.log('isListening>', isListening);
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

          {isListening ? (
            <View style={Styles.listeningView}>
              <View style={{...Styles.voiceCircleBig}}>
                <View style={Styles.voiceCircle}>
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
                </View>
              </View>
            </View>
          ) : (
            <TouchableOpacity
              onPress={() => {
                startRecognizing();
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
            </TouchableOpacity>
          )}
          {!isListening && (
            <>
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
            </>
          )}
        </VStack>
      </VStack>
    </Modal>
  );
}
const Styles = StyleSheet.create({
  listeningView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  listeningImage: {
    width: 28,
    height: 38,
  },
  listeningText: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 16,
    paddingTop: 20,
  },
  cancelIcon: {
    width: 20,
    height: 20,
  },
  voiceShadow: {
    backgroundColor: '#F2F7FB',
    width: 96,
    height: 96,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  voiceCircle: {
    paddingHorizontal: 2,
    paddingVertical: 15,
    borderRadius: 100,
    backgroundColor: '#ccc',
    alignSelf: 'center',
  },
  voiceCircleBig: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 100,
    backgroundColor: '#787878',
    alignSelf: 'center',
    // padding: 15
  },
});
