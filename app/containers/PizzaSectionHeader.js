import {VStack, HStack, Text, Pressable} from 'native-base';
import React from 'react';
import {colors, screens} from '../constants';
import {useNavigation} from '@react-navigation/native';

export default function PizzaSectionHeader({
  headerLabel,
  description,
  viewAll,
  containerProps,
}) {
  const navigation = useNavigation();

  return (
    <VStack {...containerProps}>
      <HStack justifyContent={'space-between'} mr={4}>
        {headerLabel && (
          <Text color={colors.blue_royal} fontSize={20} fontWeight={'800'}>
            {headerLabel}
          </Text>
        )}
        {viewAll && (
          <Pressable
            onPress={() =>
              navigation.navigate(screens.inside.bottomTabStack.menuList)
            }>
            <Text color={colors.blue_royal} fontSize={14} fontWeight={'400'}>
              VIEW ALL
            </Text>
          </Pressable>
        )}
      </HStack>
      {description && (
        <Text color={colors.black9} fontSize={14} fontWeight={'500'}>
          {description}
        </Text>
      )}
    </VStack>
  );
}
