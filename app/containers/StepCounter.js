import React from 'react';
import {Center, HStack, Text} from 'native-base';
import {View} from 'react-native';
import {colors} from '../constants';

export default function StepCounter({stepsCount, currentStep}) {
  const steps = Array.from(Array(stepsCount).keys());
  return (
    <HStack alignItems={'center'}>
      <Text
        numberOfLines={1}
        ellipsizeMode="clip"
        position={'absolute'}
        left={7}
        right={7}
        color={colors.black8}>
        {
          '- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -'
        }
      </Text>
      <HStack flex={1} justifyContent={'space-between'} mx={6}>
        {steps.map(step => {
          const isActive = currentStep === step + 1;
          return (
            <Center
              w={8}
              h={8}
              bg={isActive ? '#DDEDF3' : 'white'}
              borderColor={isActive ? '#DDEDF3' : colors.black8}
              borderWidth={1}
              borderRadius={'full'}>
              <Text color={isActive ? colors.black : colors.black8}>
                {step + 1}{' '}
              </Text>
            </Center>
          );
        })}
      </HStack>
    </HStack>
  );
}
