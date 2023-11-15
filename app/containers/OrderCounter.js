import React, {useState} from 'react';
import {VStack, Text, Pressable, HStack} from 'native-base';
import {colors} from '../constants';
import CustomIcon from '../theme/icons/icon';

const OrderCounter = ({onChange}) => {
  const [counter, setCounter] = useState(1);
  return (
    <VStack ml={4} mb={4}>
      <Text color={colors.black8}>{'How many orders? '}</Text>

      <HStack mt={2}>
        <Pressable
          borderRadius={6}
          borderColor={colors.black}
          borderWidth={1}
          w={9}
          h={9}
          alignItems={'center'}
          justifyContent={'center'}
          onPress={() => {
            setCounter(counter => {
              onChange(counter - 1);
              return counter - 1;
            });
          }}>
          <CustomIcon
            name={'MinusIcon'}
            width={18}
            height={18}
            fill={'transparent'}
            style={{marginTop: 7}}
          />
        </Pressable>
        <Pressable
          borderRadius={6}
          bg={colors.black}
          w={9}
          h={9}
          mx={4}
          alignItems={'center'}
          justifyContent={'center'}>
          <Text color={'white'} fontSize={18} fontWeight={'600'}>
            {counter}{' '}
          </Text>
        </Pressable>
        <Pressable
          borderRadius={6}
          borderColor={colors.black}
          borderWidth={1}
          w={9}
          h={9}
          alignItems={'center'}
          justifyContent={'center'}
          onPress={() => {
            setCounter(counter => {
              onChange(counter + 1);
              return counter + 1;
            });
          }}>
          <CustomIcon name={'PlusIcon'} width={12} height={12} fill={'black'} />
        </Pressable>
      </HStack>
    </VStack>
  );
};

export default OrderCounter;
