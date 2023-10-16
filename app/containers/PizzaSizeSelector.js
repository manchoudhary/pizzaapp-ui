import {HStack, Pressable, Text, VStack} from 'native-base';
import React, {useState} from 'react';
import {colors} from '../constants';
import getPizzaSizes from '../utils/getPizzaSizes';
import Price from '../components/Price';

export default ({itemSizeMappings, onSelect}) => {
  const pizzaSizes = getPizzaSizes(itemSizeMappings);
  const [currentSize, setCurrentSize] = useState();
  return (
    <VStack flex={1} m={4} space={4}>
      <Text>Choose your pizza size</Text>
      <HStack flex={1} space={4}>
        {pizzaSizes.map(item => {
          const isActive = currentSize?.sizeId === item.size.sizeId;
          return (
            <Pressable
              flex={1}
              alignItems={'center'}
              bg={isActive ? 'black' : 'transparent'}
              border={isActive ? 'transparent' : 'black'}
              borderWidth={0.5}
              borderRadius={4}
              py={2}
              onPress={() => {
                setCurrentSize(item.size);
                onSelect(item);
              }}>
              <Text
                color={isActive ? colors.white : colors.black}
                fontSize={12}
                fontWeight={500}>
                {item.size.sizeDetail}
              </Text>
              <Text color={colors.black8} fontSize={12} fontWeight={500}>
                {`(Serves ${item.size.sizeId})`}
              </Text>
              <Price
                price={item.price}
                iconProps={{
                  width: 10,
                  height: 12,
                  stroke: isActive ? colors.white : colors.black,
                }}
                textProps={{
                  fontSize: 12,
                  color: isActive ? colors.white : colors.black,
                }}
              />
            </Pressable>
          );
        })}
      </HStack>
    </VStack>
  );
};
