import {Image, Text, Pressable} from 'native-base';
import React from 'react';
import {colors} from '../constants';
import Price from '../components/Price';
import PizzaName from '../components/PizzaName';
import {restUrls} from '../config';

export default ({
  name,
  description,
  price,
  type = 'Veg',
  imageLocation,
  onPress,
  ...props
}) => {
  return (
    <Pressable w={180} onPress={onPress} {...props}>
      <Image
        source={{uri: `${restUrls.baseURL}/api/${imageLocation}`}}
        w={180}
        h={180}
        borderRadius={6}
        alt={'pizza-image'}
      />
      <PizzaName {...{name, type}} />
      {description && (
        <Text
          fontSize={12}
          color={colors.black8}
          fontWeight={'400'}
          numberOfLines={2}>
          {description}{' '}
        </Text>
      )}
      <Price {...{price}} />
    </Pressable>
  );
};
