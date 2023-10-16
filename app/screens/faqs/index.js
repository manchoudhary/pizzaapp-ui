import React from 'react';
import {VStack, Text, Pressable, HStack} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import CustomIcon from '../../theme/icons/icon';

export default function FAQs() {
  const navigation = useNavigation();

  return (
    <VStack flex={1} bg={'white'}>
      <SafeAreaView style={{flex: 1}}>
        <HStack my={2} py={4} alignItems={'center'}>
          <Pressable onPress={() => navigation.goBack()} ml={4}>
            <CustomIcon name={'BackIcon'} width={14} height={14} />
          </Pressable>
          <Text ml={4} fontSize={14} fontWeight={'bold'}>
            FAQs
          </Text>
        </HStack>
      </SafeAreaView>
    </VStack>
  );
}
