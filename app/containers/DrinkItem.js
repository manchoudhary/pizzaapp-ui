import {VStack, Image, Text, Pressable} from 'native-base';
import React from 'react';
import {colors} from '../constants';
import Price from '../components/Price';
import {restUrls} from '../config';

export default ({
  name,
  description,
  price,
  fullDetails,
  imageLocation,
  ...props
}) => {
  let drinkContainerProps = {};

  if (fullDetails) {
    drinkContainerProps = {flex: 1};
  } else {
    drinkContainerProps = {w: 140};
  }

  return (
    <VStack
      bg={colors.white}
      shadow={2}
      {...drinkContainerProps}
      {...props}
      mb={3}
      borderRadius={4}>
      <Image
        source={{uri: `${restUrls.baseURL}/api/${imageLocation}`}}
        w={fullDetails ? 'full' : 160}
        h={100}
        flex={1}
        borderTopRadius={4}
        alt={'drink-image'}
        {...drinkContainerProps}
      />
      <VStack p={2}>
        <Text
          fontSize={12}
          color={colors.black}
          fontWeight={'600'}
          numberOfLines={1}>
          {name}
        </Text>
        <Price {...{price}} textProps={{fontSize: 12}} />
      </VStack>
      <Pressable
        bg={colors.blue_royal}
        py={1}
        px={3}
        mr={3}
        mb={3}
        alignSelf={'flex-end'}
        borderRadius={6}>
        <Text color={colors.white} fontWeight={'600'} fontSize={12}>
          Add
        </Text>
      </Pressable>
    </VStack>
  );
};
