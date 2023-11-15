import {FlatList, HStack, Pressable, Stack, Text} from 'native-base';
import React from 'react';
import {colors} from '../constants';

export default ({
  data,
  active,
  onSelect,
  col,
  containerProps = {},
  itemContainerProps = {},
}) => {
  if (!col) {
    return (
      <HStack m={4} space={4} flex={1}>
        {data.map(item => {
          const isActive = active && item.value === active?.value;
          return (
            <Pressable
              flex={1}
              alignItems={'center'}
              bg={isActive ? '#1E5E77' : 'transparent'}
              border={isActive ? 'transparent' : 'black'}
              borderWidth={0.5}
              borderRadius={4}
              py={1}
              onPress={() => onSelect(item)}>
              <Text
                color={isActive ? colors.white : colors.black}
                fontSize={12}
                fontWeight={500}>
                {item.label}{' '}
              </Text>
            </Pressable>
          );
        })}
      </HStack>
    );
  }

  return (
    <HStack flex={1} m={4} space={4} {...containerProps}>
      <FlatList
        keyExtractor={(item, index) => `toggle-${item.label}-${index}`}
        data={data}
        horizontal={col ? false : true}
        numColumns={col}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          const isActive = active && item.value === active?.value;

          return (
            <Pressable
              flex={1}
              alignItems={'center'}
              bg={isActive ? 'black' : 'transparent'}
              border={isActive ? 'transparent' : 'black'}
              borderWidth={0.5}
              borderRadius={4}
              py={1}
              onPress={() => onSelect(item)}
              {...itemContainerProps}>
              <Text
                color={isActive ? colors.white : colors.black}
                fontSize={12}
                fontWeight={500}>
                {item.label}{' '}
              </Text>
            </Pressable>
          );
        }}
      />
    </HStack>
  );
};
