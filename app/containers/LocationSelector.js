import React from 'react';
import {HStack, Text, VStack} from 'native-base';
import {colors} from '../constants';
import CustomIcon from '../theme/icons/icon';

export default ({location}) => {
  const {locality, address} = location;
  return (
    <HStack alignItems={'center'}>
      <CustomIcon name={'LocationPinIcon'} width={20} height={20} />
      <VStack ml={2}>
        <HStack>
          <Text
            color={colors.black}
            fontFamily={'body'}
            fontSize={14}
            fontWeight={400}
            lineHeight={16}
            mt={1}
            mr={1}>
            {locality}
          </Text>
          <CustomIcon
            name={'DownSelectorIcon'}
            width={20}
            height={20}
            fill={'white'}
          />
        </HStack>
        <Text
          color={colors.lightGray}
          fontFamily={'body'}
          fontSize={12}
          fontWeight={400}
          lineHeight={16}>
          {address}
        </Text>
      </VStack>
    </HStack>
  );
};
